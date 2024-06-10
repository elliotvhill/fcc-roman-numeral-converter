// VARIABLES //
const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

// FUNCTIONS //

const checkInput = () => {
    const numberInput = input.value;
    console.log(numberInput);
};

// EVENT LISTENERS //

convertBtn.addEventListener('click', checkInput);
