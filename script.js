var start = document.getElementById("start");
var quizContainer = document.getElementById("quiz-container");
var question = document.getElementById("question");
var count = document.getElementById("count");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var checkChoice = document.getElementById("displayChoice");
var highscore = document.getElementById("highscore");
var para = document.createElement("p");


var questionList = [
    {
      question: " A data structure consisting of a collection of elements is :",
      choiceA:"a)strings", 
      choiceB:"b)booleans",
      choiceC:"c)Block",
      choiceD:"d)Array",
      answer: "D"
    },
    {
    question: " A data structure consisting of a collection of elements is :",
    choiceA:"a)quotes", 
    choiceB:"b)curly brackets",
    choiceC:"c)parentheses",
    choiceD:"d)square brackets",
    answer: "C"
  },
  {
  question: " A data structure consisting of a collection of elements is :",
  choiceA:"a)strings", 
  choiceB:"b)alerts",
  choiceC:"c)Array",
  choiceD:"d)numbers",
  answer: "B"
},

  
    ///etc.
  ];

  //var questionIndex = questionList.length -1;
  //var startIndex = 0;

  for(var i = 0; i < questionList.length; i++){
    
  function showQuestion(){
    var para = document.createElement("p");
    para.innerHTML = questionList[i].question ;
    question.appendChild("para");
    choiceA.innerHTML =questionList[i].choiceA;
    choiceB.innerHTML =questionList[i].choiceB;
    choiceC.innerHTML =questionList[i].choiceC;
    choiceD.innerHTML =questionList[i].choiceD;

  }
  
}

start.addEventListener("click", startQuiz);

function startQuiz(){
    showQuestion();
    quizContainer.style.display = "block";
}

