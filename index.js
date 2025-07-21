// npm-dropdown module
// const run = require('npm-dropdown');

// run.test();


// Query Selectors

const body = document.querySelector('body');
const navMenu_allGroupDivs = document.querySelectorAll('.menu')
const zones = document.querySelectorAll('.zones li');
const shops = document.querySelectorAll('.shops li');
const activities = document.querySelectorAll('.activities li');


// Menu fn()s

function displayMenu(element) {
    element.classList.remove('hidden');
}

function hideAllMenus(nodeList) {
    for (const element of nodeList) {
        if (!element.classList.contains('hidden')) {
            element.classList.add('hidden');
        }
    }
}

function toggleMenu(e, nodeList) {
    const parentDiv = e.target.parentNode
    if (parentDiv.classList.contains('hidden')) {
        hideAllMenus(nodeList);
        displayMenu(parentDiv);
    } else {
        hideAllMenus(nodeList);
    }
}

// Select fn()s

function selectOption(e) {
    e.target.classList.add('selected');
}

function deselectOption(e) {
    e.target.classList.remove('selected');
}

function optionEvent(e) {
    alert(`You have selected ${e.target.textContent}`)
}


// Init Events

function initMenuEvents(nodeList) {
    for (const element of nodeList) {
        element.addEventListener('click', (e) =>     toggleMenu(e, nodeList));
    }
}

function initOptionEvents(optionGroup) {
    for (const option of optionGroup) {
        option.addEventListener('mouseenter', (e) => selectOption(e));
        option.addEventListener('mouseleave', (e) => deselectOption(e));
        option.addEventListener('click', (e) => optionEvent(e));
    }
}

function initFullDoc(body, nodeList) {
    body.addEventListener('click', (e) => {
        console.log(`Target is not a child of .menu: ${!e.target.closest('.menu')}`);
        if (!e.target.closest('.menu')) {
            hideAllMenus(nodeList);
        }
    })
}


initMenuEvents(navMenu_allGroupDivs);
initFullDoc(body, navMenu_allGroupDivs);
initOptionEvents(zones);
initOptionEvents(shops);
initOptionEvents(activities);


