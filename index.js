// npm-dropdown module
// const run = require('npm-dropdown');

// run.test();


// query selectors
const navMenu_allBtns = document.querySelectorAll('.menu')
const btn_group1 = document.querySelector('.group-1 > button');
const btn_group2 = document.querySelector('.group-2 > button');
const btn_group3 = document.querySelector('.group-3 > button');

const options_group1 = document.querySelectorAll('.group-1 li');
const options_group2 = document.querySelectorAll('.group-2 li');
const options_group3 = document.querySelectorAll('.group-3 li');

console.log(navMenu_allBtns)
console.log(options_group1)

// pseudo code

// function displayMenu(element) 
// take in element
// add display class

// function hideMenu(element)
// take in element
// remove display class

// function toggleMenu(element)
// take in element
// if classlist contains display class
    // call hideMenu() with element
    // else
    // call displayMenu() with element

// function selectOption(element)
// take in element
// add selected class

// function deselectOption(element)
// take in element
// remove selected class

// event listeners

// function initDisplayEvents(elements)
// take in navBtns
// for btn of navBtns
// add event listener(click, toggleMenu)

// function initOptionEvents(elements)
// take in optionGroup
// for option of options
// add event listener(click, <code or fn call>)

