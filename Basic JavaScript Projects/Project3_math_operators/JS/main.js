function addition_Function() {
    var addition = 3 + 3;
    document.getElementById("MathAdd").innerHTML = "3 + 3 = " + addition;
}

function subtraction_Function() {
    var subtraction = 6 - 1;
    document.getElementById("MathSub").innerHTML = "6 - 1 = " + subtraction;
}

function multiplication() {
    var simple_Math = 5 * 7;
    document.getElementById("MathMultiply").innerHTML = "5 x 7 = " + simple_Math;
}

function division() {
    var simple_Math = 10 / 2; // The function returns the quotient of 10 and 2
    document.getElementById("MathQuo").innerHTML = "10 / 2 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (2 + 3) * 11 / 2 - 5;
    document.getElementById("MathMore").innerHTML = "2 + 3, multiplied by 11, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 26 % 7;
    document.getElementById("MathMod").innerHTML = "When you divide 26 by 7 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 11;
    document.getElementById("MathNegat").innerHTML = -x;
}