"use strict";

/**
  NOTES FOR FUNCTIONALITY OF APP:

  - Need to start off with ".starting-point" 
  - When user clicks on ".begin" button, removeClass ".starting-point", addClass ".quiz"
  - Load the first question
  - When user clicks on an answer, change fa-circle-thin to fa-circle
  - Register if the answer was correct or not
  - If correct, increment a counter which keeps track of correct answers
  - Display how many are correct in the ".collection"
  - ONLY addClass ".collection" after first question is answered
  - Move to next question, rinse and repeat

**/

$(document).ready(function(){

  // Increment this var when user clicks on correct answer
  var correct = 0;

  // Loop through this array of objects for quiz (which loop will work best?)
  // each object stores the question, the answers
  // one correct answer, three incorrect
  // quiz questions' objects index from 0 to 4
  // when user CLICKS on an answer, determine if correct, 
  // then move on to the next object in the array and display it to them
  var quiz = [{
    // index 0
    question: "What was the last element that Korra mastered, at the age of 17?",
    answers: ["Fire", "Air", "Water", "Earth"],
    inputID: "element"
  }, {
    // index 1
    question: "Question 2",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
  }, {
    // index 2
    question: "Question 3",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
  }, {
    // index 3
    question: "Question 4",
    answer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
  }, {
    // index 4
    question: "Question 5",
    answer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
  }];

  $(".begin").click(function(){
    console.log("Button clicked!");
    // Hide the first screen
    $(this).parent(".starting-point").hide();
    // After hiding, go up in DOM and back down to find quiz class, then show it
    $(this).parents(".container").find(".quiz").show();
  });

  // Clicking on the li element to answer
  $("ul.fa-ul li").click(function(){
    if ($(this).children("i").hasClass("fa-circle-thin")) {
      $("ul.fa-ul li").children("i").removeClass("fa-circle").addClass("fa-circle-thin");
      $(this).children("i").removeClass("fa-circle-thin").addClass("fa-circle");
    } else if ($(this).children("i").hasClass("fa-circle")) {
      $("ul.fa-ul li").children("i").removeClass("fa-circle").addClass("fa-circle-thin");
      $(this).children("i").removeClass("fa-circle").addClass("fa-circle-thin");
    };
  });

  for (var i = 0; i < quiz.length; i++) {
    $(".quiz").append("<div class='question'" + i + "><h2 class='question'>" + quiz[i].question + "</h2></div>");
  };

  // <h2 class="question">What was the last element that Korra mastered, at the age of 17?</h2>
  //     <ul class="fa-ul">
  //       <li><i class="fa-li fa fa-circle-thin"></i>Fire</li>
  //       <li><i class="fa-li fa fa-circle"></i>Air</li>
  //       <li><i class="fa-li fa fa-circle-thin"></i>Water</li>
  //       <li><i class="fa-li fa fa-circle-thin"></i>Earth</li>
  //     </ul>
  //     <button class="begin">SUBMIT</button>
})