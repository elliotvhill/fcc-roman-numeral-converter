// VARIABLES //
const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

// FUNCTIONS //

const checkInput = () => {
    const numberInput = input.value;
    if (!numberInput) {
        output.innerText = 'Please enter a number';
    } else {
        arabicToRoman(numberInput)
        output.innerText = numberInput;
        }
        output.classList.toggle("hidden");
        };
        
const arabicToRoman = (input) => {
    const arabicNumber = input;
    let remainder = null;
    console.log(`Arabic number is: ${arabicNumber}`);
    if (arabicNumber % 10 === 0) {
        let quotient = arabicNumber / 10; // number of X's to display
        console.log("Quotient: ", quotient)
        if (remainder % 5 === 0) {
            remainder = remainder / 5;
        console.log("Remainder: ", remainder)
        return remainder;
        }
        return quotient;
    } else {
        let remainder = arabicNumber % 10;
        if (remainder % 5 === 0) {
            remainder = remainder / 5;
        }
        console.log("Remainder: ", remainder)
        return remainder;
    };


    // recursive case: n % 5 === 0
    
    // base case: n % 5 !== 0



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
})
