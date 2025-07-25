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
        if (!e.target.closest('.menu')) {
            hideAllMenus(nodeList);
        }
    })
}

// Call init fn()s

initMenuEvents(navMenu_allGroupDivs);
initFullDoc(body, navMenu_allGroupDivs);
initOptionEvents(zones);
initOptionEvents(shops);
initOptionEvents(activities);


// Carousel

// Query Selectors

const imgCache = document.querySelectorAll('.img-wrapper > div')
const selectorBtns = document.querySelectorAll('.img-selector button')
const leftArrow = document.querySelector('.left-arrow button')
const rightArrow = document.querySelector('.right-arrow button')


// Carousel fn()s

function setDisplayDiv(index, imgCache) {
    imgCache[index].classList.add('img-selected');
}

function setFadeIn(index, imgCache) {
    imgCache[index].classList.add('fade-in')
}

function setActiveBtn(index, selectorBtns) {
    selectorBtns[index].classList.add('active')
}

function clearImages(imgCache) {
    for (const div of imgCache) {
        div.classList = '';
    }
}

function clearActiveBtn(selectorBtns) {
    for (const btn of selectorBtns) {
        btn.classList = '';
    }
}

function getIndexOfCurrentImg(imgCache) {
    let divIndex;
    imgCache.forEach((div, index) => {
        if (div.classList.contains('img-selected')) {
            divIndex = index;
        }
    })   
    return divIndex;
}

function getIndexOfNext(imgCache) {
    let indexOfNext = ((getIndexOfCurrentImg(imgCache)) +1) % imgCache.length;
    return indexOfNext
}

function getPrevDisplayed(imgCache) {
    let current = getIndexOfCurrentImg(imgCache)
    let indexOfPrevious;
    if (current === 0) {
        current = 4;
    } 
    indexOfPrevious = current - 1
    return indexOfPrevious
}

function shiftNext(imgCache, selectorBtns) {
    const nextToDisplay = getIndexOfNext(imgCache)
    changeDisplay(imgCache, selectorBtns, nextToDisplay);
}

function shiftPrevious(imgCache, selectorBtns){
    const prevDisplayed = getPrevDisplayed(imgCache);
    changeDisplay(imgCache, selectorBtns, prevDisplayed);
}

function changeDisplay(imgCache, selectorBtns, index) {
    clearImages(imgCache);
    clearActiveBtn(selectorBtns);
    setDisplayDiv(index, imgCache);
    setActiveBtn(index, selectorBtns);
    setFadeIn(((getIndexOfNext(imgCache))), imgCache)
}

function autoRotate(imgCache, selectorBtns) {
    setInterval(shiftNext, 5000, imgCache, selectorBtns)
}


// Init Events

function initArrowBtns(imgCache, selectorBtns) {
    leftArrow.addEventListener('click', () => shiftPrevious(imgCache, selectorBtns))
    rightArrow.addEventListener('click', () => shiftNext(imgCache, selectorBtns))
}

function initSelectorBtns(selectorBtns, imgCache) {
    selectorBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => changeDisplay(imgCache, selectorBtns, index))
    })
}


// Call init fn()s and autoRotate

autoRotate(imgCache, selectorBtns);
initArrowBtns(imgCache, selectorBtns);
initSelectorBtns(selectorBtns, imgCache);

