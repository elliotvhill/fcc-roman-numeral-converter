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
            const number = input
            console.log(`Arabic number is: ${number}`);
}


// EVENT LISTENERS //

convertBtn.addEventListener('click', checkInput);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkInput();
    }
})
