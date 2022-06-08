
//NAV////////////////////////////////////////////////////////////

const nav = document.querySelector<HTMLElement>('.actions__ul')
let items = ['Home', 'Events', 'About', 'Blog', 'Contact']

items.forEach((item) => {
    let aRef = document.createElement('a');
    aRef.innerText = item;
    aRef.href = '#';
    nav.appendChild(aRef);
    aRef.classList.add('actions__li')
})

//TOAST//////////////////////////////////////////////////////////

const toast = document.querySelector<HTMLDivElement>('.toast');
const showToast = document.querySelector<HTMLDivElement>('.show-toast');
const closeBtn = document.querySelector<HTMLButtonElement>('.toast__close-button')

showToast.addEventListener('click', () => {
    toast.classList.add('toast-active')
})

closeBtn.addEventListener("click", () => {
    toast.classList.remove("toast-active");
})

///////////////////////////////////////////////////////////////


//SLIDER///////////////////////////////////////////////////////

const leftBtn = document.querySelector<HTMLButtonElement>('.js-left')
const rightBtn = document.querySelector<HTMLButtonElement>('.js-right')
let slider = document.querySelector<HTMLDivElement>('.js-slide')
let slideBox = document.querySelectorAll<HTMLDivElement>('.js-box')

let counter = 0;
leftBtn.disabled = true

slideBox[3].style.visibility = 'hidden'
slideBox[4].style.visibility = 'hidden'
slideBox[5].style.visibility = 'hidden'

rightBtn.addEventListener('click', () => {

    counter++

    if (counter === 0) {
        slider.style.left = '0'
    }

    if (counter === 1) {
        slider.style.left = '-510px'
        leftBtn.disabled = false
        slideBox[0].style.visibility = 'hidden'
        slideBox[3].style.visibility = 'visible'
    }

    if (counter === 2) {
        slider.style.left = '-1020px'
        slideBox[1].style.visibility = 'hidden'
        slideBox[4].style.visibility = 'visible'
    }

    if (counter === 3) {
        slider.style.left = '-1530px'
        rightBtn.disabled = true
        slideBox[2].style.visibility = 'hidden'
        slideBox[5].style.visibility = 'visible'
    }
})

leftBtn.addEventListener('click', () => {

    counter--

    if (counter === 2) {
        slider.style.left = '-1020px'
        rightBtn.disabled = false
        slideBox[2].style.visibility = 'visible'
        slideBox[5].style.visibility = 'hidden'
    }
    
    if (counter === 1) {
        slider.style.left = '-510px'
        slideBox[1].style.visibility = 'visible'
        slideBox[4].style.visibility = 'hidden'
    }

    if (counter === 0) {
        slider.style.left = '0'
        leftBtn.disabled = true
        slideBox[0].style.visibility = 'visible'
        slideBox[3].style.visibility = 'hidden'
    }
})

//FOOTER////////////////////////////////////////////

const inputField = document.querySelector<HTMLInputElement>('.subscribe__input')
let footer = document.querySelector('footer')
let formEl = document.querySelector<HTMLFormElement>('.subscribe__form')
const emailUlElement = document.querySelector('.js-ul');
const errorEl = document.querySelector('.subscribe__error');
const subBtnEl = document.querySelector<HTMLButtonElement>('.subscribe__btn');


const changeColor = () => {
    let newArray = ["#34568B", "#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1"];

    let random = Math.floor(Math.random() * Math.floor(newArray.length - 1));

    if (footer.style.backgroundColor != newArray[random]) {
      footer.style.backgroundColor = newArray[random];
    } else {
      changeColor();
    }
}

inputField.addEventListener('input', changeColor)

subBtnEl.disabled = true

inputField.addEventListener('input', () => {
    let messages: string[] = []

    if (inputField.value.length < 3 || inputField.value.length > 20 ||  
        !inputField.value.includes('@') || inputField.value.slice(-3) !== '.lv') {
        subBtnEl.disabled = true
        errorEl.innerHTML = 'Please enter minimum of 3 characters and maximum of 20 characters'+ "<BR />" + 
        'Must contain symbol @ and must end with .lv'
    } else {
        subBtnEl.disabled = false
        errorEl.innerHTML = ''
    }
})

const addElement = () => {
    const inputValue = inputField.value;
    const newLiElement = document.createElement('li');
    newLiElement.innerText = inputValue;
    emailUlElement.appendChild(newLiElement);
}


formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    addElement();
    inputField.value = ''
})