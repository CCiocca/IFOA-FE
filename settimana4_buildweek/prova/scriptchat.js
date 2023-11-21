const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: ["Central Process Unit","Computer Personal Unit", "Central Processor Unit",],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];
    
    
    
    

    var currentQuestion = 0;
    var correctAnswers = 0;
    var timer;

    function startQuiz() {
        showQuestion();
    }

    function showQuestion() {
        var questionElement = document.getElementById("question");
        var answersElement = document.getElementById("answers");
        var resultContainer = document.getElementById("result-container");
        var correctPercentageElement = document.getElementById("correct-percentage");
        var incorrectPercentageElement = document.getElementById("incorrect-percentage");

        if (currentQuestion < questions.length) {
            var currentQuizData = questions[currentQuestion];

            // Mostra la domanda
            questionElement.textContent = currentQuizData.question;

            // Combina le risposte corrette e errate e mescola l'array
            var allAnswers = [currentQuizData.correct_answer, ...currentQuizData.incorrect_answers];
            allAnswers = shuffleArray(allAnswers);

            // Aggiungi le risposte alla lista HTML
            answersElement.innerHTML = "";
            allAnswers.forEach(function (answer) {
                var li = document.createElement("li");
                li.textContent = answer;
                li.addEventListener("click", function () {
                    checkAnswer(answer, currentQuizData.correct_answer);
                });
                answersElement.appendChild(li);
            });

            // Avvia il timer di 30 secondi
            startTimer();
        } else {
            // Il quiz è completo, mostra i risultati
            resultContainer.style.display = "block";
            correctPercentageElement.textContent = "Percentuale di risposte corrette: " + calculatePercentage(correctAnswers, questions.length) + "%";
            incorrectPercentageElement.textContent = "Percentuale di risposte sbagliate: " + calculatePercentage(questions.length - correctAnswers, questions.length) + "%";
        }
    }

    function checkAnswer(selectedAnswer, correctAnswer) {
        clearTimeout(timer); // Resetta il timer
        if (selectedAnswer === correctAnswer) {
            correctAnswers++;
        }
        currentQuestion++;
        showQuestion();
    }

    function startTimer() {
        timer = setTimeout(function () {
            currentQuestion++;
            showQuestion();
        }, 30000); // 30 secondi
    }

    function calculatePercentage(value, total) {
        return ((value / total) * 100).toFixed(2);
    }

    // Funzione per mescolare un array (Algoritmo di Fisher-Yates)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Avvia il quiz quando la pagina è caricata
    window.onload = startQuiz;

