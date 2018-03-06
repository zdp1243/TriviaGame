//Wrap document for js
$(document).ready(function() {
  //name variables for timer, start and submit button

  var beginButton = $("#begin");
  var submitButton = $("#submit");

  var correctAnswers = 0;

  var countMin = 2;
  var countSec = 0;
  var counter;

  //Timer that decrements from 2 minutes.
  //Calculate number of milliseconds.
  //120 sec * 1000 millisec= 120,000 millisec

  function runTimer() {
    console.log("hi");

    if (countMin >= 0 && countSec >= 0) {
      if (countSec < 10) {
        $("#timer").html(countMin + ":0" + countSec);
      } else {
        $("#timer").html(countMin + ":" + countSec);
      }
      countSec--;
      if (countSec < 0) {
        countSec = 59;
        countMin--;
      }
    }
  }

  // clearInterval(counter);
  //  $("#tempis").css({ visibility: "visible", opacity: "1" });

  beginButton.on("click", function() {
    counter = setInterval(runTimer, 1000);

    console.log("hello");
  });

  //Timer resets when Begin Quiz button is pushed.

  //When timer reaches 0sec, #tempis alert becomes visible. Does it need a delay?
  //When condition met $("#tempis").css ({'visibility':'visible', 'opacity': '1',});

  //Function that reads radio button, then tallies correct answers out of 5.

  //Display correct guesses out of 5 in HTML.

  //}

  //$(function(){
  //  $("#submit").click(function(){
  //      alert($('input:radio:checked').val());

  //  });
  // });
});
