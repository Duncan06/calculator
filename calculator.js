

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

function disable(){
    this.disabled = true;
}

function log(e) {
    if (e.key == "+") {
        option = "addition"
        return operate(), option;
    }
    if (e.key == "-"){
        option = "subtraction"
        return operate(), option;
    }
    if (e.key == "*"){
        option = "multiplication"
        return operate(), option;
    }
    if (e.key == "/"){
        option = "division"
        return operate(), option;
    }
    if (e.key == "Enter"){
        return solve();
    }
}

function back(){
    if (number.slice(-1) == ".") {
        decimal.disabled = false;
    }
    number = number.substring(0, number.length - 1);
    output.value = `${number}`;
}

function operate(){
    if (a != ''){
        b = parseFloat(output.value);
        if (isNaN(b)) {
            b = '';
            return b;
        }
        solve();
        b = '';
        if (this.id != undefined){
            option = this.id;
        }
        return b, option;
    }
    if (option != '' && this.id != undefined) {
        option = this.id;
        if (b != '') {
            b = '';
            return b, option;
        }
    }
    if (b != '') {
        b = '';
        return b;
    }
    if (this.id != undefined) {
    option = this.id;
    }
    if (a == ''){
        a = parseFloat(output.value);
        if (isNaN(a)) {
            a = '';
            return a;
        }
    }
    if (decimal.disabled) {
        decimal.disabled = false;
    }
    number = '';
    output.value = '';
    return a, option;
}

function solve(){
    if (option == ''){
        return;
    }
    if (b == '') {
        b = parseFloat(output.value);
        if (isNaN(b)) {
            b = '';
            return a, b;
        }
        number = output.value;
    }
    if (number == '' && b != c) {
        return;
    }
    final = operates(option,a,b);
    if (final == '') {
        return;
    }
    if (!Number.isInteger(final)) {
        final = Math.round(final*1000)/1000;
    }
    number = '';
    output.value = `${final}`;
    a = final;
    c = b;
    if (decimal.disabled) {
        decimal.disabled = false;
    }
    return number, a, b;
}

function clears(){
    output.value = '';
    number = '';
    a = '';
    b = '';
    c = '';
    option = '';
    decimal.disabled = false;
    return number, a, b, c, option;
}


