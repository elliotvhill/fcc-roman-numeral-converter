// VARIABLES //
const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
let numeralsArray = [];
let quotientsArray = [];
let refObject = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
};
const divisors = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

// FUNCTIONS //

const checkInput = () => {
    const n = input.value;
    if (!n) {
        output.innerText = `Please enter a number`;
        } else if (n <= 0 || n > 3999){
        output.innerText = `Please enter a number ${
            n <= 0 ? 'greater than or equal to 1' : 'less than or equal to 3999'
        } `;
    } else {
        arabicToRoman(n);
    }
    output.classList.remove('hidden');
};

const arabicToRoman = (input) => {
    let quotient = 0;
    let remainder = 0;
    let n = 0;

    //////////////////

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
    }


    /* 

    rules for conversion:

    1. program ENDS when there are NO GREATER THAN 3 consecutive CHARS (any)
    2. FOUR consecutive I's (IIII) triggers CONVERSION to IV
    3. if IV is followed by another I (IVI i.e. '5') -> drop the leading I and skip the next I, leaving V (5)
    3. a. if IVII... loop back to #1 / #2 (check for >3 I's, then IV, etc.)
    
    */



    // base case: n % 5 === 0
    // recursive case: n % 5 !== 0


    //////////////////

    ///// THIRD PASS W/ REF OBJ:
    // for (let i = 0; i < divisors.length; i++){
    //     while (n / divisors[i] > 1) {
    //         numeralsArray.push("I");
    //     }
    //     numeralsArray.push("V");
    //     return numeralsArray;
    // }

    // while (n / divisors[i] < 1) {
    //     // continue running w/ divisors desc
    // }
    // once n / divisors[i] > 1
    // push corresponding roman numeral to array &
    // loop again with the remainder (%)

    // is there a '5' w/in input? -> insert 'V'
    // remaining values < 5? -> insert n * 'I'
    // is there a '10' w/in input? -> insert 'X'
    // 5 < remaining values < 10? -> insert n * 'V'

    // as long as n / divisor < 1 --> try next smallest divisor
    //
    // once n / divisor > 1 --> round down and proceed
    // checking remainder of n(i.e. %)

    ///// SECOND PASS W/O REF OBJ:
    // while (input > 0) {
    //     let quotient = Math.floor(input / 5); // number of V's needed
    //     while (quotient != 0) {
    //         numeralsArray.push('I');
    //         while (numeralsArray.length >= 5) {
    //             console.log("Shifted array:", numeralsArray.shift())
    //             quotientsArray.push('V');
    //             }
    //         quotient--;
    //     }
    //     // const remainder = input % 5;
    //     // input = quotient;
    //     input--;
    // }
    console.log('Numerals:', numeralsArray);
    console.log('Quotients:', quotientsArray);
    output.innerText = quotientsArray.join('') + numeralsArray.join('');
    numeralsArray = [];
    quotientsArray = [];

    ////


    // if (input % 5 !== 0) { // input = 17
    //     let quotient = Math.floor(input / 5) // num of V's // 3 V's
    //     remainder = input % 5 // num of I's // 2 I's
    //     // logic to produce n V's ... V * quotient
    //     // logic to produce n I's ... I * remainder

    //     // is Math.floor(remainder / 5) === 0 ?
    //         // Y: return remainder
    // } else { // input % 5 === 0
    //     //
    // }

    ///// FIRST PASS:
    // if (arabicNumber % 10 === 0) {
    //     let quotient = arabicNumber / 10; // number of X's to display
    //     console.log("Quotient: ", quotient)
    //     if (remainder % 5 === 0) {
    //         remainder = remainder / 5;
    //     console.log("Remainder: ", remainder)
    //     return remainder;
    //     }
    //     return quotient;
    // } else {
    //     let remainder = arabicNumber % 10;
    //     if (remainder % 5 === 0) {
    //         remainder = remainder / 5;
    //     }
    //     console.log("Remainder: ", remainder)
    //     return remainder;
    // };
};

// EVENT LISTENERS //

convertBtn.addEventListener('click', checkInput);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkInput();
    }
});
