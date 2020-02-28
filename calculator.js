

let a = 0;
let b = 0;
let number = '';
let option = '';
// const output = document.getElementById('#number');

// const selection = document.querySelectorAll('[data-number]');

const operators = document.querySelectorAll('.operation');

const solution = document.getElementById('#solve');

function addition(a,b) {
    return a+b;
}

function subtraction(a,b) {
    return a-b;
}

function multiplication(a,b) {
    return a*b;
}

function division(a,b) {
    return a/b;
}

function operate(call,a,b) {
    if (call = "addition") {
        return addition(a,b);
    }

    if (call = "subtraction") {
        return subtraction(a,b);
    }

    if (call = "multiplication") {
        return multiplication(a,b);
    }
    if (call = "division") {
        return division(a,b);
    }
}


 
function updateValue(){
    console.log(this);
    number = number.concat(this.dataset.number)
    output.value = `${number}`;
    console.log(number);
}

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        option = e.attr('id');
        a = parseInt(number);
        number = '';
    })
})

solution.addEventListener('click', () => {
    b = parseInt(number);
    final = operate(option,a,b);
    a = final;
})

// selection.forEach(num => num.addEventListener('click', updateValue));

