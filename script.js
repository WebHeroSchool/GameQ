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
  correctScore.style.color = 'tomatox';
  countCorrectAnswers.appendChild(correctScore);
}
