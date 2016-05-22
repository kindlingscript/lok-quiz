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
  "use strict";

  // Increment this var when user clicks on correct answer
  var correct = 0;

  // Loop through this array of objects for quiz
  // each object stores the question, the answers
  // one correct answer, three incorrect
  // quiz questions' objects index from 0 to 4
  // when user CLICKS on submit button, determine if correct, 
  // then move on to the next object in the array and display it to them
  var quiz = [{
    // index 0
    question: "What was the last element that Korra mastered, at the age of 17?",
    answers: ["Fire", "Air", "Water", "Earth"],
    enabled: true
  }, {
    // index 1
    question: "Who did Mako give his scarf to permanently?",
    answers: ["Asami", "Bolin", "Grandma Yin", "Korra"],
    enabled: false
  }, {
    // index 2
    question: "What bending subskills do Mako and Bolin have, respectively?",
    answers: ["Lightning generation and lavabending", "Combustionbending and metalbending", "Lightning generation and metalbending", "Combustionbending and lavabending"],
    enabled: false
  }, {
    // index 3
    question: "How many spirit portals are there at the end of the series?",
    answers: ["2", "3", "5", "1"],
    enabled: false
  }, {
    // index 4
    question: "How many years was Korra away from Republic City between Book 3 and Book 4?",
    answers: ["1", "Less than 1", "3", "5"],
    enabled: false
  }];

  // Starting a new instance of the quiz
  $(".begin").click(function(){
    console.log("Button clicked!");
    // Hide the first screen
    $(this).parent(".starting-point").hide();
    // After hiding, go up in DOM and back down to find quiz class, then show it
    $(this).parents(".container").find(".quiz").show();
  });

  // Loop through quiz array of objects, display questions one-by-one
  for (var i = 0; i < quiz.length; i++) {
    if (quiz[i].enabled == true) {
      $(".quiz").append('<h2 class="question">' + quiz[i].question + '</h2>');
      $(".quiz").append('<ul class="fa-ul"></ul>');
        for (var a = 0; a < quiz[i].answers.length; a++) {
          $(".fa-ul").append('<li><i class="fa-li fa fa-circle-thin"></i>' + quiz[i].answers[a] + '</li>');
        };
      $(".quiz").append('<button class="submit">SUBMIT</button>');
    };
  };

  // Clicking on the li to answer
  $("ul.fa-ul li").click(function(){
    if ($(this).children("i").hasClass("fa-circle-thin")) {
      $("ul.fa-ul li").children("i").removeClass("fa-circle").addClass("fa-circle-thin");
      $(this).children("i").removeClass("fa-circle-thin").addClass("fa-circle");
    } else if ($(this).children("i").hasClass("fa-circle")) {
      $("ul.fa-ul li").children("i").removeClass("fa-circle").addClass("fa-circle-thin");
      $(this).children("i").removeClass("fa-circle").addClass("fa-circle-thin");
    }
  });
})