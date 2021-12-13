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

const correct = quiz.filter((q) => q.correctAnswer === "c");
console.log(correct);

