function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        document.getElementById('jolo').innerText = "3";
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
document.getElementById("generatePin").addEventListener('click', function () {

    let g = generatePin();



})



function verifyPin() {
    const getPin = document.getElementById("inputShow").value;
    const typePin = document.getElementById("typePin").value;
    const right = document.getElementById('right');
    const wrong = document.getElementById('wrong');
    const molo = document.getElementById("jolo");


    if (getPin == typePin) {

        console.log('pin matched');
        right.style.display = 'block';
        wrong.style.display = 'none';
        document.getElementById('jolo').innerText = "3";


    }
    else {
        console.log("OOps !! again type");
        wrong.style.display = 'block';
        right.style.display = 'none';
    }


}

function jolo() {
    const t = document.getElementById('jolo');

    const trText = t.innerText;

    const input = parseInt(trText);
    console.log(input);

    if (input <= 3 && input > 1) {
        const previousInput = input;
        console.log(previousInput);
        const newInput = previousInput - 1;
        console.log(newInput);
        t.innerText = newInput;
    }
    else if (input <= 1) {

        document.getElementById("inputShow").value = '';
        document.getElementById('jolo').innerText = "3";

    }




}

document.getElementById('submit').addEventListener('click', function () {

    const verify = verifyPin();
    let j = jolo();


})
