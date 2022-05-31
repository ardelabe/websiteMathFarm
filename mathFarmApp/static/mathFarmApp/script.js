let firstRandomNumber = generateRandomInteger(10);
let secondRandomNumber = generateRandomInteger(10);
console.log(firstRandomNumber)
console.log(secondRandomNumber)


String(operationType)
let result;
if (operationType === "addition") {
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
    // console.log(document.querySelector('#score'))
    // document.querySelector('#score').value = "point"
    // console.log(document.querySelector('#score'))

    document.querySelector('#answer_form').onsubmit = () => {
        const answer = document.querySelector('#answer').value;
        console.log(answer);
        console.log(result);

        if(Number(answer) === result) {
            console.log('CORRECT');
            document.querySelector('#incorrect_alert').classList.add('d-none');
            document.querySelector('#correct_alert').classList.remove('d-none');
            document.querySelector('#score').value = "point"      
            console.log(document.querySelector('#score')) 
        } else {
            console.log('INCORRECT');
            document.querySelector('#correct_alert').classList.add('d-none');
            document.querySelector('#incorrect_alert').classList.remove('d-none');
        }
        

        // stop form from submitting
        // return false;
    }
})