document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit-btn").addEventListener("click", function(event) {
        let score = 0;
        let allAnswered = true;

        // Question 1
        const q1 = document.querySelector('input[name="question1"]:checked');
        if (q1) {
            if (q1.value === 'a') {
                score += 1; 
            } else {
                score -= 1;
            }
        } else {
            allAnswered = false;
        }

        const q2CorrectAnswers = ["Lorenzini-ampullákkal", "Kiváló hallás", "Kiváló látás", "Kiváló szaglás"];
        const q2Selected = document.querySelectorAll('input[name="question2"]:checked');
        if (q2Selected.length > 0) {
            q2Selected.forEach((checkbox) => {
                if (q2CorrectAnswers.includes(checkbox.value)) {
                    score += 1;
                } else {
                    score -= 1;
                }
            });
        } else {
            allAnswered = false;
        }

        const q3CorrectAnswers = ["Egyesült Államok", "Dél-Afrika", "Ausztrália part menti vizeiben", "Földközi-tenger part menti vizeiben"];
        const q3Selected = document.querySelectorAll('input[name="question3"]:checked');
        if (q3Selected.length > 0) {
            q3Selected.forEach((checkbox) => {
                if (q3CorrectAnswers.includes(checkbox.value)) {
                    score += 1;
                } else {
                    score -= 1;
                }
            });
        } else {
            allAnswered = false;
        }

        const q4CorrectAnswers = ["Túlhalászat", "A tengeri élőhelyek rombolása", "klímaváltozás"];
        const q4Selected = document.querySelectorAll('input[name="question4"]:checked');
        if (q4Selected.length > 0) {
            q4Selected.forEach((checkbox) => {
                if (q4CorrectAnswers.includes(checkbox.value)) {
                    score += 1;
                } else {
                    score -= 1;
                }
            });
        } else {
            allAnswered = false;
        }

        const q5 = document.querySelector('input[name="question5"]:checked');
        if (q5) {
            if (q5.value === "Kulcsfontosságú szerepet játszik a tengeri élelmi lánc egyensúlyában") {
                score += 1;
            } else {
                score -= 1;
            }
        } else {
            allAnswered = false;
        }

        if (!allAnswered) {
            alert("Please answer all questions before submitting.");
            event.preventDefault();
            return;
        }

        const maxScore = 13;
        const percentage = ((score / maxScore) * 100).toFixed(2);

        const resultElement = document.getElementById("result");
        resultElement.textContent = '';  


        if (score < 0) {
            resultElement.textContent = `A pontszámod minuszban van, bruh!`;
        } else {
            resultElement.textContent = `Your score is: ${score} out of ${maxScore}`;
        }

        alert(`Your percentage is: ${percentage}%`);
    });
});