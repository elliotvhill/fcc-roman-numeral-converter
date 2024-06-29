// VARIABLES //
const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let numeralsArray = [];
let romans = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
};

const romanObjectIteration = (input) => {
    for (numeral in romans) {
        let i = input
        if (i / numeral === 1) {
            numeralsArray.push(romans[i])
            return console.log(numeralsArray)
        } else if (i / numeral < 1) {
            for (let i = input; i > 0; i--) {
                numeralsArray.push("I");
            }
            return console.log(numeralsArray)
        }
    }
}

// FUNCTIONS //

const checkInput = () => {
    numeralsArray = [];
    const n = input.value;
    if (!n) {
        output.innerText = `Please enter a valid number`;
    } else if (n <= 0 || n > 3999) {
        output.innerText = `Please enter a number ${
            n <= 0 ? "greater than or equal to 1" : "less than or equal to 3999"
        } `;
    } else {
        arabicToRoman(n);
        output.innerText = numeralsArray.join("");
    }
    output.classList.remove("hidden");
    numeralsArray = [];
};


const convertToIs = (input) => {
    for (let i = input; i > 0; i--) {
        numeralsArray.push("I");
    }
};
const divideByFive = (input) => {
    return input / 5;
};
const divideByFour = (input) => {
    return input / 4;
};
const divideByOne = (input) => {
    return input / 1;
};


// const twoOfAKind = () => {
//     for (let i = 0; i < numeralsArray.length; i++) {
//         if (numeralsArray[i] === numeralsArray[i + 1]) {
//             if (numeralsArray[i] === "V") {
//                 numeralsArray.splice(i, 2, "X");
//             } else if (numeralsArray[i] === "L") {
//                 numeralsArray.splice(i, 2, "C");
//             }
//             return console.log("V + V:", numeralsArray);
//         }
//     }
// };

/* 
// always iterate through array
// for (let i = 0; i < numeralsArray.length; i++) { }
// either there IS a remainder (%)
// or there is NOT a remainder (%)
 */

// only sets of 3: III, XXX, CCC, MMM
const setOfThree = () => {
    let isAtThree = 0
    for (let i = 0; i < numeralsArray.length; i++) {
        if (
            // numeralsArray.length <= 4 &&
            numeralsArray[i] === numeralsArray[i + 1] &&
            numeralsArray[i + 1] === numeralsArray[i + 2] &&
            numeralsArray[i + 2] === numeralsArray[i + 3]
        ) {
            // change triggered
            let length = numeralsArray.length - 1
            numeralsArray.splice(1, length, "V")
            isAtThree++
            // let removed = numeralsArray.shift()
            // return console.log("shifted:", removed, "remaining:", numeralsArray)
        }
        return console.log("Set of three:", numeralsArray, "is at three?", isAtThree);
    }
};

// only sets of 1: IV, V, L
const setOfOne = () => {
    // if any of below are duplicated
    // change triggered
    // IV
    // V
    // L
    // if IV is followed by _anything_
    // convert to V
};

const divideByTen = (input) => {
    if (input % 10 === 0) {
        return console.log("divided by 10:", Math.floor(input / 10));
    } else {
        return console.log("divided by 9:", Math.floor(input / 9));
    }
};

/* 

// const convertToVs = () => {
//     if (numeralsArray.length > 3) {
//         for (let i = 0; i < numeralsArray.length; i++) {
//             if (
//                 numeralsArray[i] === numeralsArray[i + 1] &&
//                 numeralsArray[i + 1] === numeralsArray[i + 2] &&
//                 numeralsArray[i + 2] === numeralsArray[i + 3]
//             ) {
//                 numeralsArray.splice(i, 4, "IV");
//             }

// if (numeralsArray[i] === "IV" && numeralsArray[i + 1] != null) {
//     numeralsArray.splice(i, 2, "V");
// }

//         }
//     }
//     return console.log("V's:", numeralsArray);
// };

const convertNines = () => {
    if (numeralsArray.length > 1) {
        for (let i = 0; i < numeralsArray.length; i++) {
            if (numeralsArray[i] === "V" && numeralsArray[i + 1] === "IV") {
                numeralsArray.splice(i, 2, "IX");
            }
        }
    }
    return console.log("IX's:", numeralsArray);
};

const convertToXs = () => {
    if (numeralsArray.length > 1) {
        for (let i = 0; i < numeralsArray.length; i++) {
            if (numeralsArray[i] === "V" && numeralsArray[i + 1] === "V") {
                numeralsArray.splice(i, 2, "X");
            }
        }
    }
    return console.log("X's:", numeralsArray);
};


// const convertLs = () => {
//     if (numeralsArray.length > 3) {
//         for (let i = 0; i < numeralsArray.length; i++) {
//             if (
//                 numeralsArray[i] === "X" &&
//                 numeralsArray[i + 1] === "X" &&
//                 numeralsArray[i + 2] === "X" &&
//                 numeralsArray[i + 3] === "X"
//             ) {
//                 numeralsArray.splice(i + 1, 3, "L");
//             }
//             if (
//                 numeralsArray[i] === "X" &&
//                 numeralsArray[i + 1] === "L" &&
//                 numeralsArray[i + 2] === "X"
//             ) {
//                 numeralsArray.splice(i, 3, "L");
//             }
//         }
//     }
//     return console.log("L's:", numeralsArray);
// };


const convertCs = () => {
    if (numeralsArray.length >= 2) {
        for (let i = 0; i < numeralsArray.length; i++) {
            if (numeralsArray[i] === "L" && numeralsArray[i + 1] === "L") {
                numeralsArray.splice(i, 2, "C");
            } else if (
                numeralsArray[i] === "L" &&
                numeralsArray[i + 1] === "X" &&
                numeralsArray[i + 2] === "L"
            ) {
                numeralsArray.splice(i, 3, "XC");
            }
        }
    }
    return console.log("C's:", numeralsArray);
};

const convertDs = () => {
    if (numeralsArray.length >= 2) {
        for (let i = 0; i < numeralsArray.length; i++) {
            if (
                numeralsArray[i] === "C" &&
                numeralsArray[i + 1] === "C" &&
                numeralsArray[i + 2] === "C" &&
                numeralsArray[i + 3] === "C"
            ) {
                numeralsArray.splice(i, 4, "CD");
            }
            if (numeralsArray[i] === "CD" && numeralsArray[i + 1] === "C") {
                numeralsArray.splice(i, 2, "D");
            }
        }
    }
    return console.log("D's:", numeralsArray);
};

const convertMs = () => {
    if (numeralsArray.length >= 2) {
        for (let i = 0; i < numeralsArray.length; i++) {
            if (numeralsArray[i] === "D" && numeralsArray[i + 1] === "CD") {
                numeralsArray.splice(i, 2, "CM");
            }
            if (numeralsArray[i] === "D" && numeralsArray[i + 1] === "D") {
                numeralsArray.splice(i, 2, "M");
            }
        }
    }
    return console.log("M's:", numeralsArray);

}; */

const arabicToRoman = (input) => {
    // convertToIs(input);
    romanObjectIteration(input);
    // setOfThree();
    // divideByTen(input);
    // convertToVs();
    // convertToXs();
    // convertNines();
    // // convertLs();
    // convertCs();
    // convertDs();
    // convertMs();

};

// EVENT LISTENERS //

convertBtn.addEventListener("click", checkInput);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkInput();
    }
});

/* 
    
    
    brute force option:
    convert input to all I's, 
    then iterate thru array of I's looking to make 
    larger groupings, concatenate all at the end
    27 = [I, I, I, I, I, I, I, ...]
    27 = [IV, I, I, I, I, I, I, I, ...]
    27 = [IV, IV, IV, IV, IV, IV, I, I, I]
    27 = [X, X, IV, I, I, I]
    27 = [X, X, V, I, I] // RESULT
    
    ...
    28 = [IV, IV, IV, IV, IV, IV, IV] / 10?
    28 - (28 % 10) = 20
    20 / 10 = 2 -> need 2 X's -> X X
    28 = [X, X, IV, IV]
    8 % 5 = 3 -> need 3 I's -> I I I 
    Math.floor(8 / 5) = 1 === number of V's
    
    
    
    conditions for conversion:
    
    1. program ENDS when there are NO GREATER THAN 3 consecutive CHARS (any)
    2. FOUR consecutive I's (IIII) triggers CONVERSION to IV √
    3. if IV is followed by ANYTHING (IVI i.e. '5') -> CONTINUE -> drop the leading I and skip the next I, leaving V (5) √
    3. a. if IVII... loop back to #1 / #2 (check for >3 I's, then IV, etc.)
    
    
    // PSEUDO:
    
    // is it possible to have >3 consec chars at all?
    is inputArr.length > 3 ? 
    
    // are three consec chars identical?
    is inputArr[i] === inputArr[i+1] === inputArr[i+2] ? 
    
    // 4 consec chars of any kind
    is inputArr[i] === inputArr[i+1] === inputArr[i+2] === inputArr[i+3] ? 
    
    // does "VV" appear ANYwhere in inputArr ?
    // inputArr.includes("VV")
    
    */

// base case: n % 5 === 0
// recursive case: n % 5 !== 0

//////////////////
