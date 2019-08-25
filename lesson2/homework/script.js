//1-st part 
const lastName = "Brylova";
const name = "Yaryna";
const surname = "Andriivna";
const data = `${lastName} ${name} ${surname}`;

console.log(`Length of string ${data} is ${data.length}.`);
console.log(` Abbreviation - ${lastName[0]}.${name[0]}.${surname[0]}.`);

//2-st part 
let a = 35;
let b = 2;

if (a%b === 0) {
    console.log(a/b)
} else {
    console.log(`${a} не можна націло поділити на ${b}`)
};

//3-st part
const input = document.getElementById("digits");
const res = document.getElementById("result");

check.addEventListener("click", function() {
    res.classList.add("show");
    if (input.value === "" || isNaN(input.value)) {
        res.innerText = "Please input a number";
    } else if (input.value[0] === input.value[1]) {
        res.innerText = "The digits are the same";
    } else {
        res.innerText = "The digits are different";
    }
});

//4-st part
const sign = document.getElementById("punctuation");
const conclusion = document.getElementById("resultSign");

checkSign.addEventListener("click", function (){
    conclusion.classList.add("show");
     switch (sign.value) {
        case ".": conclusion.innerText = "Ви ввели крапку"; break;
        case "!": conclusion.innerText = "Ви ввели знак оклику"; break;
        case "?": conclusion.innerText = "Ви ввели знак запитання "; break;
        case ",": conclusion.innerText = "Ви ввели кому"; break;
        case ";": conclusion.innerText = "Ви ввели крапку з комою"; break;
        case ":": conclusion.innerText = "Ви ввели двокрапку"; break;
        default : conclusion.innerText = "Введіть один розділовий знак!";
}
}
);


//5-th part
const side = document.getElementById("side");
const height =  document.getElementById("height");
const square = document.getElementById("square");
const errorSide = document.getElementById("errorSide");
const someConst = 1/2;


calculate.addEventListener("click", function(){
    if (side.value === "" || isNaN(side.value)) {
        errorSide.classList.add("error");
        errorSide.innerText = "*required a number";
    } else if (height.value === "" || isNaN(height.value)) {
        errorHeight.classList.add("error");
        errorHeight.innerText = "*required a number";
    } else {
        let squareValue = someConst*side.value*height.value;
        square.classList.add("show");
        square.innerText = `The square is ${squareValue}`;
    }
});
