
module.exports.getDate = getDate;

function getDate(){
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var dayToday = today.toLocaleDateString("en-US", options);
  return dayToday ;
}


exports.getDay = function(){
  var today = new Date();

  var options = {
    weekday: "long",
    // day: "numeric",
    // month: "long"
  };

  var dayToday = today.toLocaleDateString("en-US", options);
  return dayToday ;
}
