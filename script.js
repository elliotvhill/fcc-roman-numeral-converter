// VARIABLES //
const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let numeralsArray = [];

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

// two in a row
// V IV -> IX -- no match
// V V -> X -- match
// L L -> C -- match
// XL X -> L -- no match
// L XL -> XC -- no match
// CD C -> D -- no match
// D CD -> CM -- no match
// D D -> M -- match
// IV *anything else* -> V etc
// IX *anything else* -> X etc

// four in a row (max) -- i.e. multiple of FOUR
// I I I I -> IV
// X X X X -> XL
// C C C C -> CD

// input is 40
// 40 / 10 -> 4
// 40 / 9 --> remainder -> continue
// 40 / 5
// 40 / 4
// 40 / 1

const divideByTen = (input) => {
    return input / 10;
};
const divideByNine = (input) => {
    if (input % 9 != 0) {
        return;
    } else {
        return input / 9;
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

const fourInARow = () => {
    for (let i = 0; i < numeralsArray.length; i++) {
        if (
            numeralsArray.length <= 4 &&
            numeralsArray[i] === numeralsArray[i + 1] &&
            numeralsArray[i + 1] === numeralsArray[i + 2] &&
            numeralsArray[i + 2] === numeralsArray[i + 3]
        ) {
            // change to either IV XL or CD
            if (
                numeralsArray[i + 3] === "I"
            ) {
                numeralsArray.splice(i, 4, "IV");
            } else if (
                numeralsArray[i] === "X"
            ) {
                numeralsArray.splice(i, 4, "XL");
            } else {
                numeralsArray.splice(i, 4, "CD");
            }
        }
    }
    return console.log(numeralsArray);
};

const misMatches = () => {
    for (let i = 0; i < numeralsArray.length; i++) {
        if (numeralsArray[i + 3] === "I" && numeralsArray[i + 4] !== null) {
            numeralsArray.splice(i,5,"V")
        }
    }
    return console.log(numeralsArray);
}

const convertToIs = (input) => {
    for (let i = input; i > 0; i--) {
        numeralsArray.push("I");
    }
    return console.log("I's:", numeralsArray);
};

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
            if (
                numeralsArray[i] === "V" &&
                numeralsArray[i + 1] === "IV"
            ) {
                numeralsArray.splice(i, 2, "IX");
            }
        }
    }
    return console.log("IX's:", numeralsArray);
};

const convertToXs = () => {
    if (numeralsArray.length > 1) {
        for (let i = 0; i < numeralsArray.length; i++) {
            if (
                numeralsArray[i] === "V" &&
                numeralsArray[i + 1] === "V"
            ) {
                numeralsArray.splice(i, 2, "X");
            }
        }
    }
    return console.log("X's:", numeralsArray);
};

const convertLs = () => {
    if (numeralsArray.length > 3) {
        for (let i = 0; i < numeralsArray.length; i++) {
            if (
                numeralsArray[i] === "X" &&
                numeralsArray[i + 1] === "X" &&
                numeralsArray[i + 2] === "X" &&
                numeralsArray[i + 3] === "X"
            ) {
                numeralsArray.splice(i + 1, 3, "L");
            }
            if (
                numeralsArray[i] === "X" &&
                numeralsArray[i + 1] === "L" &&
                numeralsArray[i + 2] === "X"
            ) {
                numeralsArray.splice(i, 3, "L");
            }
        }
    }
    return console.log("L's:", numeralsArray);
};

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
};

const arabicToRoman = (input) => {
    convertToIs(input);
    // convertToVs();
    fourInARow();
    misMatches();
    convertToXs();
    convertNines();
    convertLs();
    convertCs();
    convertDs();
    convertMs();
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
