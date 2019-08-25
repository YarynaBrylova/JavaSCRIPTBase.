// //функція, яка перетворює всі числові значення обєкту на 2
// const timeMachine = {
//     name: 'DeLorean',
//     horsepower: 200,
//     timeTravel: true,
//     maxSpeed: 160,
//     age: 36
//    }

// for (let key in timeMachine) {
//     if (!isNaN(timeMachine[key]) && typeof timeMachine[key] !== 'boolean') {
//         timeMachine[key] = timeMachine[key] * 2;
//     }
// };

// console.log(timeMachine);

// //приймає обєкт і перетворює в масив

// const objToArray = function(obj) {
//     const arr = [];
//     let i = 0;
//     for (let key in obj) {
//         arr[i] = obj[key];
//         i++;
//     }
//     return arr;
// };

// console.log(objToArray(timeMachine));

//генераторкомпліментів
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const messages = document.getElementById('idmessages');


let bodyParts = [];
let adjectives = [];
let words = [];

const prevresults = [];

function getBodyParts(element) {
    bodyParts = setData(element);
    console.log(bodyParts);
}

function getAdjectives(element) {
    adjectives = setData(element);
    console.log(adjectives);
}

function getWords(element) {
    words = setData(element);
    console.log(words);
}

function setData(element) {
    const arr = element.value.split(",");
    if (element.value === '') {
        element.classList.add('error');
    } else {
        element.classList.remove('error');
    }
    return arr;
}

function generator() {
    result.classList.add('load');
    result.innerHTML = "";
    setTimeout(function() {
        if(bodyParts.length !==0 && adjectives.length !==0 && words !==0) {
            let message = `Your ${randomWords(bodyParts)} is like a
            ${randomWords(adjectives)} ${randomWords(words)}!`;
            result.innerHTML = message;
            prevresults.push(message);
        } else {
            result.innerHTML = 'Something went wrong!';
        }
        result.classList.remove('load');
        showPrevResults();
    }, 2000);
}

function randomWords(array) {
    const index = randomNumber(array);
    return array[index];
}

function randomNumber(array) {
    const arrLength = array.length - 1;
    return (Math.random() * arrLength).toFixed();
}

function showPrevResults() {
    let htmlResults = "";
    const now = new Date;
    prevresults.forEach(item => {
        htmlResults += `<div class="row">
        <div class="col-9">
            ${item}
        </div>
        <div class="col-9">${now.getHours()}: ${now.getMinutes()}: ${now.getMilliseconds()}</div>
    </div>`;
    });
    messages.innerHTML = htmlResults;
}


window.onload = function() {
    const bodyPartsId = document.getElementById('bodyParts');
    const adjectivesId = document.getElementById('adjectives');
    const wordsId = document.getElementById('words');

    bodyParts = bodyPartsId.value.split(','); 
    adjectives = adjectivesId.value.split(','); 
    words = wordsId.value.split(','); 
}

submit.addEventListener('click', generator);
