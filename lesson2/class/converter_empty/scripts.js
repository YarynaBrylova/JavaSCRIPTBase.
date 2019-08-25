const convert = document.getElementById("convert");
const input = document.getElementById("input");
const error = document.getElementById("error");
const animation = document.getElementsByClassName("animation")[0];
const title = document.getElementById("title");
const mainBlock = document.getElementsByClassName("main-block")[0];

convert.addEventListener("click", function () {
    if (input.value === "" || isNaN(input.value)) {
        console.error("Error");
        error.innerText = "Must be a number";
        animation.classList.add("show");
        setTimeout(function () {
            animation.classList.remove("show");
            input.value = "";
        }, 2000);
    } else {
        const freezingWater = 32;
        const someConst = 1.8;
        mainBlock.classList.add("load");
        setTimeout(function () {
            if (title.innerText.toLowerCase() === "fahrenheit") {
                let deegreeCelsius = (input.value - freezingWater) / someConst;
                console.log('deegreeCelsius - ' + deegreeCelsius.toFixed());
                input.value = deegreeCelsius;
                title.innerText = "celsius";
            } else {
                let fahrenheitDegree = input.value * someConst + freezingWater;
                console.log('fahrenheitDegree - ' + fahrenheitDegree.toFixed());
                input.value = fahrenheitDegree;
                title.innerText = "celsius";
            }
            mainBlock.classList.remove("load");
    }, 2000);
}
});