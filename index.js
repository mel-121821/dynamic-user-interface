// npm-dropdown module
// const run = require('npm-dropdown');

// run.test();


// query selectors
const navMenu_allGroupDivs = document.querySelectorAll('.menu')
// const btn_group1 = document.querySelector('.group-1 > button');
// const btn_group2 = document.querySelector('.group-2 > button');
// const btn_group3 = document.querySelector('.group-3 > button');

const options_group1 = document.querySelectorAll('.group-1 li');
const options_group2 = document.querySelectorAll('.group-2 li');
const options_group3 = document.querySelectorAll('.group-3 li');

console.log(navMenu_allGroupDivs)
console.log(options_group1)

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

// function deselectAllOptions(nodeList) {
//     for (const option of nodeList) {
//         if (option.classList.contains('selected')) {
//             option.classList.remove('selected')
//         }
//     }
// }

// function changeSelect(e) {
//     const optionGroup = e.target.parentNode.children;
//     console.log(optionGroup)
//     if (!e.target.classList.contains('selected')) {
//         deselectAllOptions(optionGroup);
//         selectOption(e.target)
//     } else {
//         deselectAllOptions(optionGroup);
//     }
// }

// event listeners

function initDisplayEvents(nodeList) {
    for (const element of nodeList) {
        element.addEventListener('click', (e) => toggleMenu(e, nodeList))
    }
}

function initOptionEvents(optionGroup) {
    for (const option of optionGroup) {
        option.addEventListener('mouseenter', (e) => selectOption(e));
        option.addEventListener('mouseleave', (e) => deselectOption(e));
    }
}


initDisplayEvents(navMenu_allGroupDivs);
initOptionEvents(options_group1);
initOptionEvents(options_group2);
initOptionEvents(options_group3);


