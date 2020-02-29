

let a = '';
let b = '';
let number = '';
let option = '';

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

function operates(call,a,b) {
    if (call == "addition") {
        return addition(a,b);
    }

    if (call == "subtraction") {
        return subtraction(a,b);
    }

    if (call == "multiplication") {
        return multiplication(a,b);
    }
    if (call == "division") {
        return division(a,b);
    }
}

function updateValue(){
    number = number.concat(this.dataset.number)
    output.value = `${number}`;
}

function operate(){
    option = this.id;
    if (a == NaN) {
        return;
    }
    a = parseFloat(number);
    number = '';
    return a;
}

function solve(){
    b = parseFloat(number);
    if (number == '' || a == '' || a == NaN) {
        return;
    }
    final = operates(option,a,b);
    number = `${final}`;
    output.value = number;
    b = '';
    if (option == 'division'){
        a = '';
        return number, a, b;
    }
    return number, b;
}

function clears(){
    output.value = '';
    number = '';
    a = '';
    b = '';
    return number, a, b;
}


