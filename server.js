const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var schedule = require('node-schedule');
const Nexmo = require('nexmo');


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

const nexmo = new Nexmo({
  apiKey: '',
  apiSecret: ''
})

app.post('/input', function(req, res) {
  const from = 'Acme Inc'
  const to = req.body.number
  const text = 'A text message sent using the Nexmo SMS API'

  //Log the Events                                            ora minut zi luna
  var logCost = schedule.scheduleJob('59 19 * * *', function(){
    nexmo.message.sendSms(from, to, text)
    console.log(req.body);
  });

  console.log(req.body);
  res.send(req.body);
});
app.listen(8000, () => console.log('App listening on port 8000!'))
