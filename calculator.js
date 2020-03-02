

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
    if (option != '') {
        return option;
    }
    option = this.id;
    a = parseFloat(number);
    if (isNaN(a)) {
        a = '';
        return a;
    }
    number = '';
    return a;
}

function solve(){
    if (b == '') {
        b = parseFloat(number);
        if (isNaN(b)) {
            b = '';
            return a, b;
        }
    }
    if (option == ''){
        return;
    }
    if (number == '') {
        return;
    }
    final = operates(option,a,b);
    number = `${final}`;
    output.value = number;
    a = final;
    return number, a, b;
}

function clears(){
    output.value = '';
    number = '';
    a = '';
    b = '';
    option = '';
    return number, a, b, option;
}


