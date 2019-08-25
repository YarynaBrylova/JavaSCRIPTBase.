const name = document.getElementById("name");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const result = document.getElementById("result");
const errorName = document.getElementById("error_name");
const errorQuestion = document.getElementById("error_question");
const firstElement = document.getElementById("pause_three");
const secondElement = document.getElementById("pause_two");
const thirdElement = document.getElementById("pause_one");
const animation = document.getElementById("animation");
const initialImage = document.getElementById("initial");
let prevResult = [];

const arrAnswers = [
    'Чудово!', 'Погана ідея!', 'Хороша ідея!', 'Добре подумай.', 'Не ризикуй.', 'Зроби це!', 'Так!',
    'Спробуй пізніше', 'Варто почекати', 'Категорично ні!', 'Було б добре', 'Ні', 'Не зараз.'
];

function myAnswer() {
    if (name.value === ""){
        errorName.classList.add("required");
    } else if (question.value === "") {
       if (name.value !== "") {
           errorName.classList.remove("required")
       }
       errorQuestion.classList.add("required");
    } else {
        if (name.value !== "" && question.value !== 0) {
            errorName.classList.remove("required")
            errorQuestion.classList.remove("required");
        }
        initialImage.classList.add("hide");
        animation.classList.remove("hide")
        answer.classList.add("hide");
        setTimeout(function() {
            animation.classList.add("hide");
            answer.classList.remove("hide");
            setTimeout(randomAnswer, 0);
            setTimeout(function() {
                answer.classList.add("hide");
                initialImage.classList.remove("hide");
            }, 3000);
        }, 2000);
        
        
    }   
}


function randomAnswer() {
    let index = (Math.random() * (arrAnswers.length - 1)).toFixed();
    answer.innerText = arrAnswers[index];
    let currentData = `${name.value}: ${question.value} - ${arrAnswers[index]}`;
    prevResult.unshift(currentData);
    showPrevResults();
}

function showPrevResults() {
    let htmlResults = "";
    prevResult.forEach(item => {
        htmlResults += `<li class="last">
            ${item}
        </li>`;
    });
    result.innerHTML = htmlResults;
    name.value = "";
    question.value = "";
}

submit.addEventListener("click", myAnswer);