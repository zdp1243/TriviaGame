//Wrap document for js
$(document).ready(function() {
  //name variables for timer, start and submit button

  var beginButton = $("#begin");
  var submitButton = $("#submit");

  var countMin = 0;
  var countSec = 20;
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
      if (countMin == 0 && countSec == 0) {
        clearInterval(counter);
        console.log("game stopped");
        $("#tempis").css({ visibility: "visible", opacity: "1" });
      }
      if (countSec < 0) {
        countSec = 59;
        countMin--;
      }
    }
  }

  clearInterval(counter);

  //If timer runs out #tempis message should become visible. Need to define counter or timer I think, instead of clearInterval.
  //  if (time runs out) {

  beginButton.on("click", function() {
    counter = setInterval(runTimer, 1000);

    console.log("hello");
  });

  // Timer resets when Begin Quiz button is pushed.

  //  When timer reaches 0sec, #tempis alert becomes visible. Does it need a delay?
  //  When condition met $("#tempis").css ({'visibility':'visible', 'opacity': '1',});

  //  Function that reads radio button, then tallies correct answers out of 5.
  var radioChecked1;
  var radioChecked2;
  var radioChecked3;
  var radioChecked4;
  var radioChecked5;
  var scorePoint = 0;

  //Check Q1
  $("#submit").click(function() {
    console.log("submit");
    radioChecked1 = $("input [name='answer1']:checked");
    console.log(radioChecked1);
    console.log(radioChecked1[0].value);
    if (radioChecked1[0].value === "2") {
      console.log("correct1");
      function score() {
        scorePoint++;
      }
    }
  });

  //Check Q2
  $("#submit").click(function() {
    console.log("submit");
    radioChecked2 = $("input [name='answer2']:checked");
    console.log("radioChecked2");
    console.log("radioChecked2[0].value");
    if (radioChecked2[0].value === "2") {
      console.log("correct2");
      function score() {
        scorePoint++;
      }
    }
  });

  //Check Q3
  $("#submit").click(function() {
    console.log("submit");
    radioChecked3 = $("input [name='answer3']:checked");
    console.log("radioChecked3");
    console.log("radioChecked3[0].value");
    if (radioChecked3[0].value === "1") {
      console.log("correct3");
      function score() {
        scorePoint++;
      }
    }
  });

  //Check Q4
  $("#submit").click(function() {
    console.log("submit");
    radioChecked4 = $("input [name='answer4']:checked");
    console.log("radioChecked4");
    console.log("radioChecked4[0].value");
    if (radioChecked4[0].value === "1") {
      console.log("correct4");
      function score() {
        scorePoint++;
      }
    }
  });

  //Check Q5
  $("#submit").click(function() {
    console.log("submit");
    radioChecked5 = $("input [name='answer5']:checked");
    console.log("radioChecked5");
    console.log("radioChecked5[0].value");
    if (radioChecked5[0].value === "3") {
      console.log("correct5");
      function score() {
        scorePoint++;
      }
      //Display correct guesses out of 5 in HTML. //Do I need this for every question?
      $("#score").append(scorePoint + "out of 10");
    }
  });
});
