const quizzes = {
    basics: { correctAnswer: "1", feedback: "Correct! The main() method is the entry point of a Java program." },
    oops: { correctAnswer: "1", feedback: "Correct! 'extends' is used for inheritance in Java." },
    collections: { correctAnswer: "1", feedback: "Correct! ArrayList is resizable." },
    exceptions: { correctAnswer: "1", feedback: "Correct! try-catch is used to handle exceptions." }
  };
  
  let correctAnswers = 0;
  const totalQuizzes = Object.keys(quizzes).length;
  
  function showExample(concept) {
    const exampleDiv = document.getElementById(`${concept}-example`);
    if (exampleDiv.style.display === "none") {
      exampleDiv.style.display = "block";
    } else {
      exampleDiv.style.display = "none";
    }
  }
  
  function checkAnswer(concept) {
    const selectedAnswer = document.querySelector(`input[name="${concept}"]:checked`);
    const feedbackDiv = document.getElementById(`${concept}-feedback`);
  
    if (!selectedAnswer) {
      feedbackDiv.textContent = "Please select an answer!";
      feedbackDiv.style.color = "red";
      return;
    }
  
    if (selectedAnswer.value === quizzes[concept].correctAnswer) {
      feedbackDiv.textContent = quizzes[concept].feedback;
      feedbackDiv.style.color = "green";
      correctAnswers++;
    } else {
      feedbackDiv.textContent = "Oops! That's incorrect. Try again!";
      feedbackDiv.style.color = "red";
    }
  
    const score = (correctAnswers / totalQuizzes) * 100;
    if (score >= 80) {
      document.getElementById("congrats").style.display = "block";
      document.getElementById("score").textContent = score.toFixed(2);
    }
  }
  
  function generateCertificate() {
    const name = document.getElementById("name").value;
    if (!name) {
      alert("Please enter your name!");
      return;
    }
  
    const score = (correctAnswers / totalQuizzes) * 100;
    document.getElementById("certificate-name").textContent = name;
    document.getElementById("certificate-score").textContent = score.toFixed(2);
    document.getElementById("certificate").style.display = "block";
  }