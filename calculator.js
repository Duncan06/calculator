
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

// let a = 0;
// let b = 0;
// let number = '';
// let option = '';
// let current = document.getElementById('#number');

// current = document.querySelectorAll("[data-number]");
// current.forEach((num) => {
//     num.addEventListener('click', () => {
//         console.log(this);
//         num.concat(this.dataset.number)
//         current.value = `${number}`;
//         console.log(number);
//     })
// })

// operators = document.querySelectorAll(".operation");
// operators.forEach((operator) => {
//     operator.addEventListener('click', (e) => {
//         option = e.attr('id');
//         a = parseInt(number);
//         number = '';
//     })
// })

// let solution = document.getElementById('#solve');
// solution.addEventListener('click', () => {
//     b = parseInt(number);
//     final = operate(option,a,b);
//     a = final;
// })
