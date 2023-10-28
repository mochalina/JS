const questions = [
  {
      question: "Сколько дней в неделе ?",
      optionA: "10 дней",
      optionB: "14 дней",
      optionC: "5 дней",
      optionD: "7 дней",
      correctOption: "optionD"
  },

  {
      question: "Сколько игроков допускается на футбольное поле?",
      optionA: "10 игроков",
      optionB: "11 игроков",
      optionC: "9 игроков",
      optionD: "12 игроков",
      correctOption: "optionB"
  },

  {
      question: "В каком месяце 30 дней ?",
      optionA: "Январь",
      optionB: "Декабрь",
      optionC: "Июнь",
      optionD: "Август",
      correctOption: "optionC"
  },

  {
      question: "Сколько дней",
      optionA: "30 часов",
      optionB: "38 часов",
      optionC: "48 часов",
      optionD: "24 часов",
      correctOption: "optionD"
  },

  {
      question: "Какая река самая длинная в мире?",
      optionA: "Река Нил",
      optionB: "Длинная река",
      optionC: "Река Нигер",
      optionD: "Озеро Чад",
      correctOption: "optionA"
  },

  {
      question: "Какая страна самая большая в мире?",
      optionA: "Россия",
      optionB: "Канада",
      optionC: "Африка",
      optionD: "Египет",
      correctOption: "optionA"
  },

  {
      question: "Какое из этих чисел является нечетным?",
      optionA: "Десять",
      optionB: "Двенадцать",
      optionC: "Восемь",
      optionD: "Одинадцать",
      correctOption: "optionD"
  },

  {
      question: "Где находится самое высокое здание в мире?",
      optionA: "Африка",
      optionB: "Калифорния",
      optionC: "Дубаи",
      optionD: "Италия",
      correctOption: "optionC"
  },

  {
      question: "Сколько постоянных зубов у собаки?",
      optionA: "38",
      optionB: "42",
      optionC: "40",
      optionD: "36",
      correctOption: "optionB"
  },

  {
      question: "Сколько штатов насчитывает Нигерия?",
      optionA: "24",
      optionB: "30",
      optionC: "36",
      optionD: "37",
      correctOption: "optionC"
  },

  {
      question: "____ стольца Нигерии ?",
      optionA: "Абуджа",
      optionB: "Лагос",
      optionC: "Калабар",
      optionD: "Кано",
      correctOption: "optionA"
  },

  {
      question: "Столица Германии",
      optionA: "Грузия",
      optionB: "Миссури",
      optionC: "Оклахома",
      optionD: "Берлин",
      correctOption: "optionD"
  },

  {
      question: "Сколько сторон у шестиугольника?",
      optionA: "Шесть",
      optionB: "Семь",
      optionC: "Четыре",
      optionD: "Пять",
      correctOption: "optionA"
  },

  {
      question: "Сколько планет в настоящее время находится в Солнечной системе?",
      optionA: "Одинадцать",
      optionB: "Семь",
      optionC: "Девять",
      optionD: "Восемь",
      correctOption: "optionD"
  },

  {
      question: "Какая планета самая жаркая?",
      optionA: "Юпитер",
      optionB: "Меркурий",
      optionC: "Земля",
      optionD: "Венера",
      correctOption: "optionB"
  },
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
  //function to shuffle and push 10 questions to shuffledQuestions array
  while (shuffledQuestions.length <= 9) {
      const random = questions[Math.floor(Math.random() * questions.length)]
      if (!shuffledQuestions.includes(random)) {
          shuffledQuestions.push(random)
      }
  }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
  const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          //get's correct's radio input with correct answer
          correctOption = option.labels[0].id
      }
  })
 
  //checking to make sure a radio input has been checked or an option being chosen
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
      document.getElementById('option-modal').style.display = "flex"
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "green"
          playerScore++
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          document.getElementById(wrongLabelId).style.backgroundColor = "red"
          document.getElementById(correctOption).style.backgroundColor = "green"
          wrongAttempt++
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }
  })
}



//called when the next button is called
function handleNextQuestion() {
  checkForAnswer()
  unCheckRadioButtons()
  //delays next question displaying for a second
  setTimeout(() => {
      if (indexNumber <= 9) {
          NextQuestion(indexNumber)
      }
      else {
          handleEndGame()
      }
      resetOptionBackground()
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null
  let remarkColor = null

  // condition check for player remark and remark color
  if (playerScore <= 3) {
      remark = "Плохо, продолжай пытаться."
      remarkColor = "red"
  }
  else if (playerScore >= 4 && playerScore < 7) {
      remark = "Средне, ты можешь лучше."
      remarkColor = "orange"
  }
  else if (playerScore >= 7) {
      remark = "Отлично, продолжайте в том же духе."
      remarkColor = "green"
  }
  const playerGrade = (playerScore / 10) * 100

  //data to display to score board
  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade-percentage').innerHTML = playerGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
  questionNumber = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none"
}