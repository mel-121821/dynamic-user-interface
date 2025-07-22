// npm-dropdown module
// const run = require('npm-dropdown');

// run.test();


// Dropdown

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


// Carousel

const imgCache = document.querySelectorAll('.img-wrapper > div')

function setDisplayDiv(index, imgCache) {
    imgCache[index].classList.add('img-selected');
}

function setFadeIn(index, imgCache) {
    imgCache[index].classList.add('fade-in')
}

function clearAll(imgCache) {
    for (const div of imgCache) {
        div.classList = '';
    }
}

function getIndexOfDisplayed(imgCache) {
    let divIndex;
    imgCache.forEach((div, index) => {
        if (div.classList.contains('img-selected')) {
            divIndex = index;
            console.log(`Currently displayed: ${divIndex}`)
        }
    })   
    return divIndex;
}

function shiftNext(imgCache) {
    let nextToDisplay = (((getIndexOfDisplayed(imgCache))+1) % imgCache.length);
    let nextToFadeIn = (((getIndexOfDisplayed(imgCache)) +2) % imgCache.length);

    clearAll(imgCache);
    setDisplayDiv(nextToDisplay, imgCache);
    setFadeIn(nextToFadeIn, imgCache);
}

function autoRotate(imgCache) {
    setInterval(shiftNext, 6000, imgCache)
}


autoRotate(imgCache);

