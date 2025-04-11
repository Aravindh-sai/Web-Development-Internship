
let emailInputs = document.querySelectorAll('.inp');
let getStartedButtons = document.querySelectorAll('.start');

getStartedButtons.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        let emailValue = emailInputs[index].value.trim();

        if (emailValue === '') {
            alert("Please enter your email address.");
        } else {
            alert("Thanks! We'll contact you at: " + emailValue);
        }
    });
});


let allQuestions = document.querySelectorAll('.ques');

allQuestions.forEach(function (singleQuestion) {
    singleQuestion.addEventListener('click', function () {
        let existingAnswer = singleQuestion.querySelector('.answer-text');

        if (existingAnswer) {
            existingAnswer.remove(); 
        } else {
            let answerBox = document.createElement('div');
            answerBox.classList.add('answer-text');
            answerBox.style.padding = "10px 25px";
            answerBox.style.fontSize = "18px";
            answerBox.style.color = "white";
            answerBox.innerText = "As this is a sample website the content is not available yet.";

            singleQuestion.appendChild(answerBox);
        }
    });
});


let signInButton = document.querySelector('.sign-btn');

signInButton.addEventListener('click', function () {
    alert("Redirecting to Sign In page...");
});