/**
 * 2.6 - Connecting HTML to JavaScript!
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/

document.getElementById("swap_pic").addEventListener("click", swap);

document.getElementById("d6").addEventListener("click", roll_d6);

document.getElementById("d8").addEventListener("click", roll_d8);

document.getElementById("d6").addEventListener("mouseenter", d6_enter);

document.getElementById("d6").addEventListener("mouseleave", d6_leave);

document.getElementById("enter").addEventListener("click", greeting);

/*** Functions ***/

// CLICKABLE PICTURE

let switch_pic = 1

function swap() {

    if (switch_pic == 1) {
        document.getElementById("swap_pic").src = "./images/war_cat.webp";
        switch_pic = 2
    } else if (switch_pic == 2) {
        document.getElementById("swap_pic").src = "./images/both_cat.jpp";
        switch_pic = 1
    } else {
        document.getElementById("swap_pic").src = "./images/both_cat.jpg";
        switch_pic = 3
    }

}


function roll_d6() {

    let roll = randInt(1, 6);

    document.getElementById("die_roll").textContent = roll;
}


function roll_d8() {

    let roll = randInt(1, 8);

    document.getElementById("die_roll").textContent = roll;

}


function d6_enter() {

document.getElementById("die").textContent = "🧏";

}

function d6_leave() {

    document.getElementById("die").textContent = "🎲";

}


function greeting() {

    let name = document.getElementById("user_input").value;

    document.getElementById("greeting").textContent = `Hello ${name}!`;

}


// Return a random integer from `min` to `max`, inclusive
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

