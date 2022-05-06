// let var_test = 22;

// Generate a number between 0 and 10, including 10
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

let firstRandomNumber = generateRandomInteger(10);
let secondRandomNumber = generateRandomInteger(10);

function showMessage(message){
    document.querySelector(`#${message}`).style.display = 'block';
}
// function hideMessage(message){
//     document.querySelector(`#${message}`).style.display = 'none';
// }

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#sum_question').innerHTML = `${firstRandomNumber} | ${secondRandomNumber}`
    // document.querySelector('#correctMessage').style.display = 'none';
    // document.querySelector('#incorrectMessage').style.display = 'none';
    // hideMessage('correctMessage')
    // hideMessage('incorrectMessage')
    document.querySelector('#answer_form').onsubmit = () => {
        const answer = document.querySelector('#answer').value;
        console.log(answer);
        if (answer == (parseInt(firstRandomNumber) + parseInt(secondRandomNumber))) {
            // show message 'correct', send form to backend
            showMessage('correctMessage');
            console.log('Correct');
        } else {
            // show message 'incorrect', 
            showMessage('incorrectMessage');
            console.log('incorrect');
        }


        // stop form from submitting
        return false;
    }
})

