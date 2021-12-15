const countCorrectAnswers = document.querySelector('#score');
let score = 0;

const arrayOfQuestions = [
  question1 = {
    question: "Как зовут моего кота?",
    correctAnswer: "c",
    answer: {
      a: "Борис",
      b: "Василий",
      c: "Леонид",
      d: "Иннокентий"
    }
  },
  question2 = {
    question: "Столица Непала?",
    correctAnswer: "d",
    answer: {
      a: "Тибет",
      b: "Эверест",
      c: "Горы",
      d: "Катманду"
    }
  },
  question3 = {
    question: "Где живет дед Мороз?",
    correctAnswer: "c",
    answer: {
      a: "Ямайка",
      b: "Томск",
      c: "Северный полюс",
      d: "не знаю"
    }
  },
  question4 = {
    question: "Эта игра интересная?",
    correctAnswer: "a",
    answer: {
      a: "возможно",
      b: "нет",
      c: "да",
      d: "не знаю"
    }
  }
]

const buildQuiz = () => {
  arrayOfQuestions.forEach((q) => {
    let answer = prompt(q.question + `
    Варианты ответа:
    a: ` + q.answer.a + `
    b: ` + q.answer.b + `
    c: ` + q.answer.c + `
    d: ` + q.answer.d);
    if (answer.toLowerCase() === q.correctAnswer) {
      console.log(`Верно! Правильный ответ на вопрос "${q.question}" - ${answer}`);
      score++;
    } else {
      console.log(`${answer} - это не правильный ответ!`);
    }
  })
  // countCorrectAnswers.innerHTML = `Правильных ответов: ${score}`;
  getCount();
}
buildQuiz();

function getCount() {
  let correctScore = document.createElement('span');
  correctScore.innerHTML = score;
  correctScore.style.paddingLeft = '10px';
  correctScore.style.color = 'tomato';
  countCorrectAnswers.appendChild(correctScore);
}


// const question = document.querySelector('#question');
// const counter = document.querySelector('#counter');

// const arrayOfQuestions = ['question1', 'question2', 'question3', 'question4'];
// let num = 0;

// function buildQuiz(arrayOfQuestions) {
//   arrayOfQuestions.map((item) => {
//     question.innerHTML = `${item.question}`
//   });
//   question.style.color = '#fd5c56';
// }
// buildQuiz(arrayOfQuestions);

// console.log('Только правильные ответы - С!');
// const correct = (arrayOfQuestions.filter((q) => q.correctAnswer === "c")).forEach((item) => {
  // console.log(`Правильный ответ на вопрос "${item.question}" - ${item['answer'].c}`)
// });
