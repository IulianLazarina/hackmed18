//alert("hello");
<input type="text" name="name" id="uniqueID" value="value" />
var nameValue = document.getElementById("uniqueID").value;



var rule = {hour: 00, minute: 01, dayOfWeek: 01, month: [0, 3, 6, 9]};
var logCost = schedule.scheduleJob(rule, function(){
          console.log('logCost output this shit at: ' + dateFormat(Date(), 'isoTime'));
});
