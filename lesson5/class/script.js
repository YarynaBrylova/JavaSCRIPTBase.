const cars = [
 {
    name: 'BMW',
    maxSpeed: 260,
    color: "black",
    owner: "Yaryna",
    modes: "S",
 },
 {
    name: 'Toyota',
    color: 'white',
    model: 'Supra',
    maxSpeed: 240,
    owner: 'Oleksandr'
 },
 {
    name: 'Jup',
    color: 'red',
    model: 'NN',
    maxSpeed: 300,
    owner: 'yulia',
 },
 {
    name: 'Audi',
    color: 'red',
    model: 'TT',
    maxSpeed: 200,
    owner: 'Vasyl'
 },
 {
    model: 'Mercedes',
    class: 'E250',
    owner: 'Borko',
    topSpeed: 260,
    engine: 2.5,
    color: 'grey'
 },
 {
    name: 'Honda',
    color: 'black',
    model: 'Civic',
    maxSpeed: 185,
    owner: 'Slavon',
    year: 1997
 },
];

// console.log(cars);

// const newCars = cars.map(function(item){
// //    item.maxSpeed = item.maxSpeed * 2;
// //    return item; 
// return {
// ...item,
// maxSpeed: item.maxSpeed || item.topSpeed * 2
// }
// });

// const newCars = cars.filter(function(item){
//     return item.maxSpeed > 200;
// });

// або  

// const newCars = cars //крапка фільтер відноситься до одного рядка, просто, щоб було гарніше
// .filter(item => item.maxSpeed > 200)
// .map(item => item.owner);
// console.log(newCars);



// function randomElement(arr) {
//     const index = (Math.random() * (arr.length - 1)).toFixed(0);
//     console.log(index);
//     console.log(arr[index]);
// }
// randomElement(cars);

const randomNumber = function(from, to) {
    return  index = (Math.random() * (to - from) + from).toFixed();
}

console.log("randomNumber", randomNumber(10,50));


const returnArray = function(count, from = 0, to = 100) {
    let numbers = [];
    for(let i = 0; i < count; i++) {
        numbers[i] = +randomNumber(from, to);
        // numbers[i] = parseInt(randomNumber(0,100)); aбо
        //numbers[i] = +randomNumber(0,100)/1; так перетворюємо в число стрінг

    }
    return numbers;
};

const newNumbers = returnArray(50).filter(item => item % 2 === 0);
console.log(newNumbers);

const secondNumbers = returnArray(10, 2, 5)
.map(item => item * item);
console.log(secondNumbers)