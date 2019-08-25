//генеруваня масиву
function generatedArray(count, from = -100, to = 100) {
    let ourArray = [];
    for (let i = 0; i < count; i++) {
        ourArray[i] = +(Math.random() * (to - from) + from).toFixed();
    }
    let negativeNumber = ourArray.filter(item => item < 0);
    let positiveNumber = ourArray.filter(item => item >= 0);
    let maxNumber = Math.max.apply(Math,ourArray);
    let minNumber = Math.min.apply(Math,ourArray);
    console.log('Array -', ourArray);
    console.log('Amount of negative number is', negativeNumber.length);
    console.log('Amount of positive number is', positiveNumber.length);
    console.log('Найбільше число у масиві', maxNumber);
    console.log('Наймеше число у масиві', minNumber);
};

generatedArray(100);

//унікальні об'єкти
function randomArray(count, from = -10, to = 5) {
    let ourArray = [];
    for (let i = 0; i < count; i++) {
        ourArray[i] = +(Math.random() * (to - from) + from).toFixed();
    }

    let newArray = [];
   for (let j = 0; j < ourArray.length; j++) {
       if (newArray.includes(ourArray[j]) === false) {
           newArray.push(ourArray[j]);
       }
   }
   console.log('our', ourArray);
   console.log('new', newArray);
};

randomArray(17);

//об'єкт me 
const me = {
    name: "Yaryna",
    age: 23,
    university: "Ivan Franko national university of Lviv",
    profession: "teacher of math",
    company: "Nestle",
    jobPosition: "accountant",
    hobby: "visit a gym",
    color: "green",
    favouriteFruit: "orange",
    season: "winter",
    pet: "dogs",
    favouriteDay: "Saturday",
    favouriteTask: "clean a  house",
    rest: "meeting with friends",
    englishSchool: "'Green Forest'",
    englishLevel: "Intermediate",
    programmingSchool: "LITS",
    programmingLanguage: "Python",
    currentSchol: "Itea",
    futureProfession: "front-end developer"
};

console.log(me.rest);