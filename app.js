$(function() {

  function displayTime() {
    var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      meridiem = "AM";

    if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
    }

    if (hours === 0) {
      hours = 12;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    $("#hours").css("fill", "#eee");
    $("#minutes").css("fill", "#eee");

    $(".is-active").attr("class", "");

    $("#hh").text(hours).css("fill", "#999");
    $("#mm").text(minutes).css("fill", "#999");
    $("#meridiem").text(meridiem).css("fill", "#bbb");

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
