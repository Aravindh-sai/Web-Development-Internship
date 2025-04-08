const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      answer: "JavaScript"
    },
    {
      question: "Which number is even?",
      options: ["3", "5", "6", "9"],
      answer: "6"
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const quizForm = document.getElementById('quizForm');
  const scoreEl = document.getElementById('score');

  function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = '';

    current.options.forEach(option => {
      const div = document.createElement('div');
      div.classList.add('option');
      div.innerHTML = `
        <label>
          <input type="radio" name="answer" value="${option}" />
          ${option}
        </label>
      `;
      optionsEl.appendChild(div);
    });
  }

  quizForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
      alert("Please select an answer before moving on.");
      return;
    }

    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  });

  function showScore() {
    quizForm.style.display = 'none';
    scoreEl.style.display = 'block';
    scoreEl.textContent = `You scored ${score} out of ${quizData.length}!`;
  }

  // Load the first question on page load
  loadQuestion();