function digitalClock() {
  var date = new Date();
  var hours = date.getHours() + " ";
  var mins = date.getMinutes() + " ";
  var seconds = date.getSeconds() + " ";
  var day = date.getDay(); //will be displayed via number referencing what day of the week it is

  //we want everything to be expressed with 2 digits so we need an if statement 01 , 02 for mornings
  // we need to corse our times into strings with the + " "
  if (hours.length < 2) {
    hours = "0" + hours;
  }

  if (mins.length < 2) {
    mins = "0" + mins;
  }

  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var clock = weekDays[day] + " " + hours + ":" + mins + ":" + seconds;

  document.getElementById("clock").innerHTML = clock;
  console.log(clock);
}

digitalClock();
setInterval(digitalClock, 1000); //allows the clock to update automatically without refreshing everytime.
