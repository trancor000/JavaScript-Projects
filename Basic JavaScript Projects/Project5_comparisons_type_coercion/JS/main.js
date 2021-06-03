document.write(typeof "Phrase"); // Identifies string type

document.write(typeof 4); // Identifies value type

document.write("12" + 7); // Coercion

function my_Function() { // Identifies it's not a number
    document.getElementById("Test").innerHTML = 0 / 0;
}

function this_Function() { // Identifies it's a number
    document.getElementById("Yes").innerHTML = 4 / 2;
}

function true_Function() { // Identifies not a number
    document.getElementById("True").innerHTML = isNaN('This is a string');
}

function false_Function() { // Identifies real number
    document.getElementById("False").innerHTML = isNaN('007');
}

function over_Infinity() { // Displays number over infinity
    document.write(3E311);
}

function under_Infinity() { // Displays number of infinity negative
    document.write(-3E312);
}

function boo_True() { // Uses boolean logic as true
    document.write(9 > 7);
}

function boo_False() { // Uses boolean logic as false
    document.write(9 < 7);
}

function con_Sole() { // Console wil say it's not true
    console.log(3 > 3);
}

function compare_True() { // Gives true statement
    document.write(11 == 11);
}

function compare_False() { // Gives false statement
    document.write(11 == 10)
}

function triple_True() { //Gives true statement
    X = 11;
    Y = 11;
    document.write(X === Y);
}

function triple_False() { // Gives false statement
    X = 3;
    Y = "7";
    document.write(X === Y);
}

function double_Value() { // Gives false statement
    X = 4;
    Y = "4";
    document.write(X === Y);
}

function double_Data() { // Gives false statement
    X = "five";
    Y = "5";
    document.write(X === Y);
}

function yesAnd() { // Gives true statement
    document.write(6 > 3 && 11 > 5);
}

function noBut() { // Gives false statement
    document.write(11 > 13 && 6 > 3);
}

function yesBut() { // Gives false statement
    document.write(11 > 5 || 6 > 11);
}

function noAnd() { // Gives false statement
    document.write(11 > 21 || 6 > 11);
}

function yotTrue() { // Gives true statement
    document.getElementById("Yot").innerHTML = !(21 > 11);
}

function notTrue() { // Gives false statement
    document.getElementById("Not").innerHTML = !(6 > 11);
}