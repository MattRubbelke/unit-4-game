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
    console.log(red);
    console.log(purple);
    console.log(orange);
    console.log(blue);
}

crystal();

// number you are trying to match is generated between 19 and 120
function random(){
    randomNumber = Math.floor(Math.random() * 120) + 19;
    console.log(randomNumber);
}
random();

function win() {
    if (randomNumber === yourNumber){
        win++;
        $("#win").text("Win: " + win);
    }
    if (randomNumber < yourNumber){
        loss++;
        $("#loss").text("Loss :" + loss);
    }
    console.log(win);
    console.log(loss);
}

win;
})