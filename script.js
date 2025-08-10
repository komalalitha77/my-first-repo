const questions = [
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Larry Page"],
    answer: 2
  },
  {
    question: "Capital of Telangana?",
    options: ["Hyderabad", "Chennai", "Mumbai", "Bangalore"],
    answer: 0
  },
  {
    question: "What is the national bird of India?",
    options: ["Sparrow", "Peacock", "Crow", "Parrot"],
    answer: 1
  },
  {
   question: "what is the full form of HTML?",
   options: ["Hypertext mechanical language", "Hypertext madeup language", "Hypertext markup language", "None"],
   answer: 2
  },
];

let currentQuestion = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').innerText = q.question;
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.disabled = false;
    btn.style.backgroundColor = '#2980b9';
  });
  document.getElementById('result').innerText = '';
  document.getElementById('next-btn').style.display = 'none';
}

function selectOption(index) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll('.option-btn');

  if (index === q.answer) {
    buttons[index].style.backgroundColor = '#27ae60';
    document.getElementById('result').innerText = "Correct!";
  } else {
    buttons[index].style.backgroundColor = '#e74c3c';
    buttons[q.answer].style.backgroundColor = '#27ae60';
    document.getElementById('result').innerText = "Wrong!";
  }

  buttons.forEach(btn => btn.disabled = true);
  document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById('game').innerHTML = `<h2>Game Over! 🎉</h2>`;
  }
}

loadQuestion();
