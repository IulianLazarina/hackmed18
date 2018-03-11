var http = require('http');
var url = require('url');
var events = require('events');
var fs = require('fs');
const Nexmo = require('nexmo');
var schedule = require('node-schedule');

const nexmo = new Nexmo({
  apiKey: '9ec7b65f',
  apiSecret: 'NNdMS4P6ZhFgsOuv'
})

const from = 'Acme Inc'
const to = 447748152970
const text = 'A text message sent using the Nexmo SMS API'


var rule = {hour: 00, minute: 01, dayOfWeek: 01, month: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]};
var logCost = schedule.scheduleJob(rule, function(){
          nexmo.message.sendSms(from, to, text)
});

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);


  });

}).listen(8080);
