document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").addEventListener("click", function(event) {
        let score = 0;
        let allAnswered = true;

        const q1 = document.querySelector('input[name="kerdes1"]:checked');
        if (q1) {
            if (q1.value === 'b') {
                score += 1;
            } else {
                score -= 1;
            }
        } else {
            allAnswered = false;
        }

        const q2 = document.querySelector('input[name="kerdes2"]:checked');
        if (q2) {
            if (q2.value === 'c') {
                score += 1;
            } else {
                score -= 1;
            }
        } else {
            allAnswered = false;
        }

        const q3 = document.querySelector('input[name="kerdes3"]:checked');
        if (q3) {
            if (q3.value === 'c') {
                score += 1;
            } else {
                score -= 1;
            }
        } else {
            allAnswered = false;
        }

        const q4CorrectAnswers = ["a", "b", "c"];
        const q4Selected = document.querySelectorAll('input[name="kerdes4"]:checked');
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

        const q5 = document.querySelector('input[name="kerdes5"]:checked');
        if (q5) {
            if (q5.value === "c") {
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

        const maxScore = 7;
        const percentage = ((score / maxScore) * 100).toFixed(2);

        const resultElement = document.getElementById("result");
        if (resultElement) {
            resultElement.textContent = '';
        } else {
            const newResultElement = document.createElement("p");
            newResultElement.setAttribute("id", "result");
            document.body.appendChild(newResultElement);
        }

        const newResultElement = document.getElementById("result");
        if (score < 0) {
            newResultElement.textContent = "A pontszámod minuszban van, bruh!";
        } else {
            newResultElement.textContent = `Your score is: ${score} out of ${maxScore} (${percentage}%)`;
        }

        alert(`Your percentage is: ${percentage}%`);
    });
});
