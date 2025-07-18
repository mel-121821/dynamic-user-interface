// npm-dropdown module
// const run = require('npm-dropdown');

// run.test();


// query selectors
const navMenu_allGroupDivs = document.querySelectorAll('.menu')
const btn_group1 = document.querySelector('.group-1 > button');
const btn_group2 = document.querySelector('.group-2 > button');
const btn_group3 = document.querySelector('.group-3 > button');

const options_group1 = document.querySelectorAll('.group-1 li');
const options_group2 = document.querySelectorAll('.group-2 li');
const options_group3 = document.querySelectorAll('.group-3 li');

console.log(navMenu_allGroupDivs)
console.log(options_group1)

// pseudo code

function displayMenu(element) {
    element.classList.remove('hidden');
}

function hideMenu(element) {
    element.classList.add('hidden');
}

function toggleMenu(e) {
    const parentDiv = e.target.parentNode
    if (parentDiv.classList.contains('hidden')) {
        hideAllMenus(navMenu_allGroupDivs);
        displayMenu(parentDiv);
    } else {
        hideAllMenus(navMenu_allGroupDivs);
    }
}

function hideAllMenus(nodeList) {
    for (const element of nodeList) {
        if (!element.classList.contains('hidden')) {
            element.classList.add('hidden');
        }
    }
}

// function selectOption(element)
// take in element
// add selected class

// function deselectOption(element)
// take in element
// remove selected class

// function toggleOption(e.target)
// if e.target contains selected class
    // call deselectOption(e.target)
    // else
    // call selectOption(e.target)

// event listeners

function initDisplayEvents(nodeList) {
    for (const element of nodeList) {
        element.addEventListener('click', toggleMenu)
    }
}

initDisplayEvents(navMenu_allGroupDivs);

// function initOptionEvents(elements)
// take in optionGroup
// for option of options
// add event listener(mouseover, (e.target) => toggleOption )

