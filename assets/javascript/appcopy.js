//Wrap document for js
$(document).ready(function() {
  //name variables for timer, start and submit button

  var beginButton = $("#begin");
  var submitButton = $("#submit");

  var countMin = 2;
  var countSec = 0;
  var counter;

  //Timer that decrements from 2 minutes.
  //Calculate number of milliseconds.
  //120 sec * 1000 millisec= 120,000 millisec

  function runTimer() {
    console.log("hi");

    if (countMin >= 0 && countSec >= 0) {
      if (countMin == 0 && countSec == 0) {
        clearInterval(counter);
        console.log("game stopped");
        $("#tempis").css({ visibility: "visible", opacity: "1" });
      }
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
  $("input[name='answer1']").click(function() {
    console.log("submit");
    // radioChecked1 = $("input [name='answer1']:checked");
    radioChecked1 = $(this).attr("value");
    radioChecked1 = parseInt(radioChecked1);
    console.log(radioChecked1);
    if (radioChecked1 === 2) {
      console.log("correct1");
      scorePoint++;
    }
    // Here for testing purposes for now
    //  $("#score").append(scorePoint + " out of 5");
  });

  //Check Q2
  $("input[name='answer2']").click(function() {
    console.log("submit");
    // radioChecked2 = $("input [name='answer2']:checked");
    radioChecked2 = $(this).attr("value");
    radioChecked2 = parseInt(radioChecked2);
    console.log(radioChecked1);
    if (radioChecked2 === 2) {
      console.log("correct2");
      scorePoint++;
    }
    // Here for testing purposes for now
    //  $("#score").append(scorePoint + " out of 5");
  });

  //Check Q3

  $("input[name='answer3']").click(function() {
    console.log("submit");
    // radioChecked3 = $("input [name='answer3']:checked");
    radioChecked3 = $(this).attr("value");
    radioChecked3 = parseInt(radioChecked3);
    console.log(radioChecked3);
    if (radioChecked3 === 1) {
      console.log("correct3");
      scorePoint++;
    }
    // Here for testing purposes for now
    //  $("#score").append(scorePoint + " out of 5");
  });

  //Check Q4
  $("input[name='answer4']").click(function() {
    console.log("submit");
    // radioChecked4 = $("input [name='answer1']:checked");
    radioChecked4 = $(this).attr("value");
    radioChecked4 = parseInt(radioChecked4);
    console.log(radioChecked4);
    if (radioChecked4 === 1) {
      console.log("correct4");
      scorePoint++;
    }
    // Here for testing purposes for now
    //   $("#score").append(scorePoint + " out of 5");
  });

  //Check Q5
  $("input[name='answer5']").click(function() {
    console.log("submit");
    // radioChecked5 = $("input [name='answer1']:checked");
    radioChecked5 = $(this).attr("value");
    radioChecked5 = parseInt(radioChecked5);
    console.log(radioChecked5);
    if (radioChecked5 === 3) {
      console.log("correct5");
      scorePoint++;
    }

    //Display correct guesses out of 5 in HTML. //Do I need this for every question?
    $("#score").append(scorePoint + "<strong> out of 5</strong>");
  });
});
