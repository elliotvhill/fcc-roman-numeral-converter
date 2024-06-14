// VARIABLES //
const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
let numeralsArray = [];
let quotientsArray = [];


// FUNCTIONS //

const checkInput = () => {
    numeralsArray = [];
    const n = input.value;
    if (!n) {
        output.innerText = `Please enter a number`;
    } else if (n <= 0 || n > 3999) {
        output.innerText = `Please enter a number ${
            n <= 0 ? 'greater than or equal to 1' : 'less than or equal to 3999'
        } `;
    } else {
        arabicToRoman(n);
    }
    output.innerText = numeralsArray.join('');
    output.classList.remove('hidden');
    numeralsArray = [];
    quotientsArray = [];
};

const arabicToRoman = (input) => {
    // convert to all I's
    for (let i = input; i > 0; i--) {
        numeralsArray.push('I');
    }
    console.log("All I's:", numeralsArray);

    // convert to IV's and I's
    if (numeralsArray.length > 3) {
        for (let n = 0; n < numeralsArray.length; n++) {
            if (
                numeralsArray[n] === numeralsArray[n + 1] &&
                numeralsArray[n + 1] === numeralsArray[n + 2] &&
                numeralsArray[n + 2] === numeralsArray[n + 3]
            ) {
                numeralsArray.splice(n, 4, 'IV');
            }
            continue;
        }
        return console.log("IV's and I's:", numeralsArray);
    }

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
    3. if IV is followed by ANYTHING (IVI i.e. '5') -> CONTINUE -> drop the leading I and skip the next I, leaving V (5)
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

    //////////////////
    /* // FOURTH PASS: 
       let quotient = 0;
       let remainder = 0;
       let n = 0;
       if (input % 5 === 0) { // input is a multiple of 5
   
           // next need to find num of V's to push i.e. quotient √
           quotient = input / 5; 
           for (let i = quotient; i > 0; i--){
               numeralsArray.push('V');
           }
   
       } else { // input is NOT a multiple of 5
           remainder = input % 5; // 
           for (let i = remainder; i > 0; i--){
               numeralsArray.push("I")
               input = remainder
           }
       } */

    // base case: n % 5 === 0
    // recursive case: n % 5 !== 0

    //////////////////
};

// EVENT LISTENERS //

convertBtn.addEventListener('click', checkInput);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkInput();
    }
});
