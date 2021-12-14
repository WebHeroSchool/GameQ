let num = 0;
let score;

const quiz = [

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

console.log('Только правильные ответы - С!');

const correct = (quiz.filter((q) => q.correctAnswer === "c")).forEach((item) => {
  console.log(`Правильный ответ на вопрос "${item.question}" - ${item['answer'].c}`)
});


// const getAnswer = () => {

//   quiz.forEach((q) => {
//     let answer = prompt(q.question + `
//     Варианты ответа:
//     a: ` + q.answer.a + `
//     b: ` + q.answer.b + `
//     c: ` + q.answer.c + `
//     d: ` + q.answer.d);
//     if (answer === q.correctAnswer) {
//       alert(`Верно! Правильный ответ!`);
//       console.log(`Верно! Правильный ответ на вопрос "${q.question}" - ${answer}`);
//     } else {
//       alert(`Это не правильный ответ!`);
//       console.log(`${answer} - Это не правильный ответ!`);
//     }
//   })
// }
// getAnswer();
