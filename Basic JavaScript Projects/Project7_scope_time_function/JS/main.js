var X = 10; // Global reach grabbing "10" from outside the function
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() { // Local reach utilizing "10" from within the function
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_4() {
    document.write(X + 100);
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() { // Gives an error statement
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_6() {
    console.log(X + 100);
}
Add_numbers_5();
Add_numbers_6();

function get_Date() { // Gets the actual hour and displays a message accordingly
    var d = new Date().getHours();
    var Reply;
    if (d < 18) {
        Reply = "How are you today?"
    }
    else {
        Reply = "Have a good night"
    }
    document.getElementById("Greeting").innerHTML = Reply;
}

if (6 < 7) { // Conditional statement
    document.write("Because 7 ate 9")
}

function Age_Function() { // Funtion to determine if age is appropriate
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Legal = "Yes";
    }
    else {
        Legal = "No";
    }
    document.getElementById("You 18?").innerHTML = Legal;
}

function Time_function() { // Displays time of daypart
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}