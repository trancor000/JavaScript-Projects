function constant_function() {
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" };
    Musical_Instrument.color = "black";
    Musical_Instrument.price = "$800";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 12;
document.write(X);
{
    let X = 21;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function myFunction() {
    return Math.PI;
}
document.getElementById("Pie").innerHTML = myFunction();