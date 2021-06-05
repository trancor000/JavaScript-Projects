function count_To_Ten() {
    var Digit = "";
    var X = 1; // Count begins at 1
    while (X < 11) { // Gives a counter
        Digit += "<br>" + X;
        X++; // Adds increments
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Sax"]; // Array
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function constant_function() {
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" }; // Sets types
    Musical_Instrument.color = "black"; // Sets instrument color
    Musical_Instrument.price = "$800"; // Sets instrument price
    document.getElementById("Constant").innerHTML = "The cost of the " + // Concatenation
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 12;
document.write(X);
{
    let X = 21;
    document.write("<br>" + X);
}
document.write("<br>" + X);