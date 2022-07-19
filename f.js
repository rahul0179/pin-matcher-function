function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 degit and colling again', pin)
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    const input = document.getElementById('inputShow');
    input.value = pin;


}
document.getElementById("key-pad").addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById("typePin");
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';


        }
    }
    else {
        const previousNum = calcInput.value;
        const newNum = previousNum + number;
        calcInput.value = newNum;

    }


})




function verifyPin() {
    const getPin = document.getElementById("inputShow").value;
    const typePin = document.getElementById("typePin").value;
    const right = document.getElementById('right');
    const wrong = document.getElementById('wrong');
    if (getPin == typePin) {

        console.log('pin matched');
        right.style.display = 'block';
        wrong.style.display = 'none';

    }
    else {
        console.log("OOps !! again type");
        wrong.style.display = 'block';
        right.style.display = 'none';
    }
}
