// //Wrap document for js
// $(document).ready(function() {
//   //name variables for timer, start and submit button

//   // var beginButton = $("#begin");
//   var submitButton = $("#submit");

//   var correctAnswers = 0;

//   var countMin = 2;
//   var countSec = 0;
//   var counter;

//   //Timer that decrements from 2 minutes.

//   function runTimer() {
//     console.log("hi");

//     if (countMin >= 0 && countSec >= 0) {
//       if (countSec < 10) {
//         $("#timer").html(countMin + ":0" + countSec);
//       } else {
//         $("#timer").html(countMin + ":" + countSec);
//       }
//       countSec--;
//       if (countSec < 0) {
//         countSec = 59;
//         countMin--;
//       }
//     }
//   }

//   clearInterval(counter);

//   //  if (countMin = 0 && countSec = 0);
//   //$("#tempis").css({ visibility: "visible", opacity: "1" });
// });

// var beginButton = $("#begin");

// beginButton.on("click", function() {
//   counter = setInterval(runTimer, 1000);

//   console.log("hello");
// });
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
  
    clearInterval(counter);
  
    if (countMin <= 0) {
      $("#tempis").css({ visibility: "visible", opacity: "1" });
    }
  
    beginButton.on("click", function() {
      counter = setInterval(runTimer, 1000);
    
      console.log("hello");
    )}


//Timer resets when Begin Quiz button is pushed.

//When timer reaches 0sec, #tempis alert becomes visible. Does it need a delay?
//When condition met $("#tempis").css ({'visibility':'visible', 'opacity': '1',});

//Function that reads radio button, then tallies correct answers out of 5.
//Check Q1
$("#submit").click(function() {
  console.log("submit");
  var radioChecked1 = $("input [name='answer1']:checked");
  console.log("radioChecked1");
  console.log("radioChecked1[0].value");
  if (radioChecked1[0].value === "2") {
    console.log("correct");
    //increment correct answers in Score
    //  else (radioChecked1[0].value!=='2') {
    //     console.log ("wrong");
  }

  //Check Q2
  $("#submit").click(function() {
    console.log("submit");
    var radioChecked1 = $("input [name='answer1']:checked");
    console.log("radioChecked1");
    console.log("radioChecked1[0].value");
    if (radioChecked1[0].value === "2") {
      console.log("correct");
      //increment correct answers in Score
      //  else (radioChecked1[0].value!=='2') {
      //     console.log ("wrong");
    }

    //Check Q3
    $("#submit").click(function() {
        console.log("submit");
        var radioChecked1 = $("input [name='answer1']:checked");
        console.log("radioChecked1");
        console.log("radioChecked1[0].value");
        if (radioChecked1[0].value === "2") {
          console.log("correct");
          //increment correct answers in Score
          //  else (radioChecked1[0].value!=='2') {
          //     console.log ("wrong");
        }
//Check Q4
        $("#submit").click(function() {
            console.log("submit");
            var radioChecked1 = $("input [name='answer1']:checked");
            console.log("radioChecked1");
            console.log("radioChecked1[0].value");
            if (radioChecked1[0].value === "2") {
              console.log("correct");
              //increment correct answers in Score
              //  else (radioChecked1[0].value!=='2') {
              //     console.log ("wrong");
            }

            //Check Q5
            $("#submit").click(function() {
                console.log("submit");
                var radioChecked1 = $("input [name='answer1']:checked");
                console.log("radioChecked1");
                console.log("radioChecked1[0].value");
                if (radioChecked1[0].value === "2") {
                  console.log("correct");
                  //increment correct answers in Score
                  //  else (radioChecked1[0].value!=='2') {
                  //     console.log ("wrong");
                }            
});



// //Display correct guesses out of 5 in HTML.

// //}



