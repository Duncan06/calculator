

let a = '';
let b = '';
let c = '';
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
    if (b == 0) {
        alert ("Are you trying to break me?");
        clears();
        return '';
    }
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
        option = this.id;
        if (b != '') {
            b = '';
            return b, option;
        }
        return option;
    }
    option = this.id;
    a = parseFloat(number);
    if (isNaN(a)) {
        a = '';
        return a;
    }
    if (b != '') {
        b = '';
        return b;
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
    if (number == '' && b != c) {
        return;
    }
    final = operates(option,a,b);
    if (final == '') {
        return;
    }
    number = '';
    output.value = `${final}`;
    a = final;
    c = b;
    return number, a, b;
}

function clears(){
    output.value = '';
    number = '';
    a = '';
    b = '';
    c = '';
    option = '';
    return number, a, b, c, option;
}


