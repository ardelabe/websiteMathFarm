let firstRandomNumber = generateRandomInteger(10);
let secondRandomNumber = generateRandomInteger(10);
console.log(firstRandomNumber)
console.log(secondRandomNumber)

// console.log(String(operationType))
String(operationType)
let result;
if(operationType === "addition") {
    console.log(operationType);
    result = firstRandomNumber + secondRandomNumber;
} else if(operationType === "subtraction") {
    console.log(operationType);
    result = firstRandomNumber - secondRandomNumber;
} else if(operationType === "multiplication") {
    console.log(operationType);
    result = firstRandomNumber * secondRandomNumber;    
} else {
    console.log(operationType)
    result = (firstRandomNumber / secondRandomNumber).toFixed(2);
}
console.log(result)

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#answer_form').onsubmit = () => {
        const answer = document.querySelector('#answer').value;
        console.log(answer);
        if (answer == (parseInt(firstRandomNumber) + parseInt(secondRandomNumber))) {
            // show message 'correct', send form to backend
            // showMessage('correctMessage');
            console.log('Correct');
        } else {
            // show message 'incorrect', 
            // showMessage('incorrectMessage');
            console.log('incorrect');
        }
        

        // stop form from submitting
        return false;
    }
})