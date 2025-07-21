// npm-dropdown module
// const run = require('npm-dropdown');

// run.test();


// TODO: set event listener to body (??) to call hideAllMenus when when a click event takes place outside of btns (may just put it on content wrapper if putting it on body causes errors)

// query selectors
const body = document.querySelector('body');
const navMenu_allGroupDivs = document.querySelectorAll('.menu')
// const btn_group1 = document.querySelector('.group-1 > button');
// const btn_group2 = document.querySelector('.group-2 > button');
// const btn_group3 = document.querySelector('.group-3 > button');

const options_group1 = document.querySelectorAll('.group-1 li');
const options_group2 = document.querySelectorAll('.group-2 li');
const options_group3 = document.querySelectorAll('.group-3 li');

// console.log(navMenu_allGroupDivs)
// console.log(options_group1)

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

// event listeners

// TODO: set options to only initialize when menu is open and to remove listeners when menu is closed

// UPD TODO: Change back to original init method, as attaching the initOptionEvents to initDisplayEvents caused the options to be re-initialized every time a menu option was clicked. 
// Also, when used in combo with display:none, the alert would be triggered immediately upon closing 

function initDisplayEvents(nodeList) {
    for (const element of nodeList) {
        element.addEventListener('click', (e) => {
            toggleMenu(e, nodeList);
            // initOptionEvents(e)
        });
    }
}

function initOptionEvents(optionGroup) {
    // const optionGroup = e.target.parentNode.childNodes.item(3).children;
    console.log(optionGroup)
    for (const option of optionGroup) {
        option.addEventListener('mouseenter', (e) => selectOption(e));
        option.addEventListener('mouseleave', (e) => deselectOption(e));
        option.addEventListener('click', (e) => optionEvent(e));
    }
}

function initFullDoc(body, nodeList) {
    body.addEventListener('click', (e) => {
        console.log(e.target)
        console.log(e.target.closest('.menu'))
        if (!e.target.closest('.menu')) {
            hideAllMenus(nodeList)
        }
    })
}



function optionEvent(e) {
    const selection = e.target.textContent
    console.log(selection)
    alert(`You have selected ${e.target.textContent}`)
}

initDisplayEvents(navMenu_allGroupDivs);
initFullDoc(body, navMenu_allGroupDivs);
initOptionEvents(options_group1);
initOptionEvents(options_group2);
initOptionEvents(options_group3);


