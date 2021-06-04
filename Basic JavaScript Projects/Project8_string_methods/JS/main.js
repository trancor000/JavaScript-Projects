function full_Sentence() { // Concatenates strings
    var part_1 = "I have ";
    var part_2 = "a dream.";
    var whole_sentence = part_1.concat(part_2);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { // Leaves only the positions indicated from the first number to the second
    var Sentence = "I like trains.";
    var Section = Sentence.slice(1, 5);
    document.getElementById("Slice").innerHTML = Section;
}

function toUpperCase() { // Makes all letters uppercase
    var str = "I love cake";
    var res = str.toUpperCase();
    document.getElementById("TUC").innerHTML = res;
}

function search() { // Displays specified value for string
    var str = "Visit Texas";
    var n = str.search("Texas");
    document.getElementById("Yeehaw").innerHTML = n;
}

function string_Method() { // Displays value as a string value
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { // Reduces number of characters to the precision number
    var X = 93456.3099667;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function toFixed() { // Reduces characters to specified decimal places
    var num = 6.65433;
    var n = num.toFixed(2);
    document.getElementById("FixIt").innerHTML = n;
}

function valueOf() { // Returns primitive value of string
    var str = "Hiyah!";
    var res = str.valueOf();
    document.getElementById("Yahoo").innerHTML = res;
}
