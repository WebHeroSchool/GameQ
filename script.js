let num = 0;
let score;

const quiz = [
  {
    question: 1, 
    answer: true,
    correctAnswer: "c"
  },

  {
    question: 2, 
    answer: false,
    correctAnswer: "b"
  },

  {
    question: 3, 
    answer: false,
    correctAnswer: "a"
  },

  {
    question: 4, 
    answer: true,
    correctAnswer: "c"
  }
]

const correct = quiz.filter((q) => q.correctAnswer === "c");
console.log(correct);