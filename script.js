// VARIABLES //
const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
let numeralsArray = [];
let quotientsArray = [];

// FUNCTIONS //

const checkInput = () => {
    const numberInput = input.value;
    if (!numberInput || numberInput <= 0) {
        output.innerText = `Please enter a number ${
            !numberInput ? '' : 'greater than or equal to 1'
        } `;
    } else {
        arabicToRoman(numberInput);
    }
    output.classList.remove('hidden');
    // input.value = '';
};

const arabicToRoman = (input) => {
    // let remainder = null;

    // convert input num to all roman I's √√
    // for (let i = input; i > 0; i--){
    //     numeralsArray.push("I")
    //     };

    while (input > 0) {
        let quotient = Math.floor(input / 5); // number of V's needed
        while (quotient != 0) {
            numeralsArray.push('I');
            while (numeralsArray.length >= 5) {
                console.log("Shifted array:", numeralsArray.shift())
                quotientsArray.push('V');
                }
            quotient--;
        }
        // const remainder = input % 5;
        // input = quotient;
        input--;
    }
    console.log('Numerals:', numeralsArray);
    console.log('Quotients:', quotientsArray);
    output.innerText = quotientsArray.join('') + numeralsArray.join('');
    numeralsArray = [];
    quotientsArray = [];

    // if (numeralsArray.length % 5 === 0) {
    //     let numOfVs = numeralsArray.length / 5;
    //     console.log(numOfVs)
    //     // numeralsArray.forEach((num) => {})
    // }

    // numeralsArray.forEach((numeral) => {});

    // recursive case: n % 5 === 0 i.e. remainder = 0

    // base case: n % 5 !== 0 i.e. remainder != 0
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

    // FIRST PASS:
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

    // is n divisible by 5 ? --------- RECURSIVE CASE
    //// is (n / 5) divisible by 5 ?
    //// etc.....
    // when n % 5 !== 0, calculate remainder --------- BASE CASE
};

// EVENT LISTENERS //

convertBtn.addEventListener('click', checkInput);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkInput();
    }
});
