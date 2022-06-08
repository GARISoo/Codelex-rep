
const btn = document.querySelectorAll<HTMLButtonElement>('.js-btn');
const box = document.querySelectorAll<HTMLDivElement>('.js-box');

const colorArr = ['green', 'purple', 'brown', 'lgreen', 'yellow'];

const random = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);


btn[0].addEventListener('click', () => {
    box[0].style.backgroundColor = 'yellow'
});

btn[1].addEventListener('click', () => {
    box[1].innerText = 'SUCCESS';
});

btn[2].addEventListener('click', () => {
    box[2].classList.add('hidden');
});

btn[3].addEventListener('click', () => {
    box[3].classList.toggle('hidden');
});

btn[4].addEventListener('click', () => {
    box[4].classList.toggle(colorArr[random(0, 5)]); 
});

btn[5].addEventListener('click', () => {
    btn[5].disabled = true;
    let number = 0
    const interval = setInterval(() => {
        number++
        box[5].innerText = number.toString()
        if (number === 10) {
            clearInterval(interval)
            btn[5].disabled = false;
        } 
    }, 500)
});

btn[6].addEventListener('click', () => {
    box.forEach(box => {
        box.style.backgroundColor = '#18D5E1';
    })
    document.body.style.backgroundColor = '#000000';
});

box[0].addEventListener('mouseover', () => {
    box[0].style.backgroundColor = 'red';
    box[0].addEventListener('mouseout', () => box[0].style.backgroundColor = '#1FC2AE')
});

box[4].addEventListener('mouseover', () => {
    let number = 0

    const interval = setInterval(() => {
        number++
        box[4].innerText = number.toString()
        if (number === 10) {
            clearInterval(interval)
        } 

        box[4].onmouseout = () => {
            clearInterval(interval)
            box[4].innerText = '0'
        }
    }, 500)
})