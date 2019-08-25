// console.log('Hello world!');

// const shortC = 3;
// const longC = 4;

// let h = Math.sqrt((shortC*shortC) + (longC*longC));

// console.log(' Гіпотенуза - ' + h)




//^C = (^F - 32)/1.8
// let deegreeFahrenheit = 451;
// const freezingWater = 32;
// const someConst = 1.8;

// deegreeCelsius = (deegreeFahrenheit - freezingWater)/ someConst;
// console.log('deegreeCelsius - ' + deegreeCelsius.toFixed(2));

const container = document.getElementById("container");
const item = document.getElementsByClassName("item");
const audio = document.getElementById("audio")

function moveImage() {
    let i = 1;
    setInterval(function() {
        item[i-1].style.flexBasis = '10%';
        item[i].style.flexBasis = '80%';
        i++;
    }, 3200);
}

function runScreen() {
    item[0].style.flexBasis = '80%';
    moveImage();
    audio.play();
}

container.addEventListener("click", runScreen);
