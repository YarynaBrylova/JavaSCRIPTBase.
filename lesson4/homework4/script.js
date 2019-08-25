// //factorial 
// const number = 6;

// function factorial(number) {
//     if (number === 0 || number === 1) {
//         console.log(1);
//     } else {
//         let res = 1;
//         for (let i = 2; i <= number; i++) {           
//             res = res * i;
//         }
//         console.log(res);
//     }
// };

// factorial(number);

// //bubble sorting
// const ourArray = [4, 6, 8, 4, 1, 5, 9, 3, 6, 2, 0, 3];

// function bubbleSorting(ourArray) {
//     for (let i = 0; i < (ourArray.length - 1); i++) {
//         for (let j = 0; j < (ourArray.length - 1 - i); j++){
//             if (ourArray[j] > ourArray[j + 1]) {
//                 let tempVar = ourArray[j];
//                 ourArray[j] = ourArray[j + 1];
//                 ourArray[j + 1] = tempVar;

//             }
//         }
//     }
//     console.log(ourArray);
// }

// bubbleSorting(ourArray);

// //3-th part
// function unknownAmount(from, to) {
//    if (arguments.length <= 10 && arguments.length >= 1) {
//        let sum = 0;
//        for ( let i = 0; i < arguments.length; i++){
//            sum = sum + arguments[i];
//        }
//        console.log(sum);
//    } else if (arguments.length > 10) {
//         for (let i = 0; i < arguments.length; i++) {
//             ourArray[i] = arguments[i];
//         }
//         console.log(ourArray);
//    } else if (arguments.length === 0) {
//        console.log("error");
//    }
// }

// unknownAmount(3, 5, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0);


// 1-st part 
function count(from, to) {
    if (arguments.length !==2) {
        console.log("error");
    } else {
        let oddNumbers = 0;
        let evenNumbers = 0;
        for (let counter = from; counter < to; counter++) {
            if (counter % 2 === 0) {
                evenNumbers += 1;
            } else {
                oddNumbers += 1;
            }
        }
        console.log('Парні числа', evenNumbers);
        console.log('Непарні числа', oddNumbers);
    }
};

count(5, 10);

//factorial recursion 
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

console.log('Факторіал введеного числа дорівнює', factorial(4));


//bubble 
let ourArray = [3, 5, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 87, -100];

function bubbleSorting(arr) {
    do {
        sort = false;
        for (let i = 0; i < arr.length; i++) {
            if ((arr[i] - arr[i +1]) > 0) {
                let tempVar = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tempVar;
                sort = true;
            }
        }
    }
    while (sort);
    console.log(arr);        

};

bubbleSorting(ourArray);