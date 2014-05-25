$(function() {

  function displayTime() {
    var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

    if (hours > 12) {
      hours = hours - 12;
    }

    if (hours === 0) {
      hours = 12;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    $(".is-active").attr("class", "");

    $("#hh").text(hours);
    $("#mm").text(minutes);

    var h = 1;
    while (h <= hours) {
      $("#h-" + h).attr("class", "is-active");
      h++;
    }

    var m = 1;
    while (m <= minutes) {
      $("#m-" + m).attr("class", "is-active");
      m++;
    }
  }

  setInterval(displayTime, 1000);
});
