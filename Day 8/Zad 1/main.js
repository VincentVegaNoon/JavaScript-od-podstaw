const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni excepturi cumque, deleniti qui, perferendis animi possimus ipsam atque, ullam consectetur culpa incidunt! Molestias consequuntur ullam optio? Modi, perferendis optio.'

let indexText = 0
const time = 40

function addLetter() {
   spnText.textContent += txt[indexText];
   indexText++;
   if(indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    document.querySelector('.cursor').classList.toggle('active')
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);