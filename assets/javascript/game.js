$(document).ready(function(){
// Variables I need

var red = 0;
var purple = 0;
var orange = 0;
var blue = 0;
var randomNumber = 0;
var yourNumber = 0;
var win = 0;
var loss = 0;

// crystals are randomly generated between 1 and 12

function crystal(){
    red = Math.floor(Math.random() * 12) + 1;
    purple = Math.floor(Math.random() * 12) + 1;
    orange = Math.floor(Math.random() * 12) + 1;
    blue = Math.floor(Math.random() * 12) + 1;
    console.log("This is the red crystal value: " + red);
    console.log("This is the purple crystal value: " + purple);
    console.log("This is the orange crystal value: " + orange);
    console.log("This is the blue crystal value: " + blue);
}


// number you are trying to match is generated between 19 and 120
function random(){
    randomNumber = Math.floor(Math.random() * 120) + 19;
    console.log("This is the number you are trying to guess: " + randomNumber);
    $("#random-number").html(randomNumber);
}

// This function adds to the user's number
function matching() {
    $("#crystal-red").on("click", function() {
        yourNumber = yourNumber + red;
        console.log("this is your result: " + yourNumber);
        $("#your-number").text(yourNumber);  
        youWin();
    })
    $("#crystal-purple").on("click", function() {
        yourNumber = yourNumber + purple;
        console.log("this is your result: " + yourNumber);
        $("#your-number").text(yourNumber);  
        youWin();
    })
    $("#crystal-orange").on("click", function() {
        yourNumber = yourNumber + orange;
        console.log("this is your result: " + yourNumber);
        $("#your-number").text(yourNumber);  
        youWin();
    })
    $("#crystal-blue").on("click", function() {
        yourNumber = yourNumber + blue;
        console.log("this is your result: " + yourNumber);
        $("#your-number").text(yourNumber);  
        youWin();
    })
}

// This function adds to your wins or losses after the user matches the user's number to the random number
function youWin(){
    if (randomNumber === yourNumber){
        win++;
        $("#win").text("Wins: " + win);
        reset();
    }
    if (randomNumber < yourNumber){
        loss++;
        $("#loss").text("Losses: " + loss);
        reset()
    }
}

// This function resets the game.
function reset (){
    yourNumber = 0;
    randomNumber = 0;
    $("#your-number").text("0")
    random();
    crystal();
}

// Start - This runs all the functions.
crystal();
random();
matching();
})