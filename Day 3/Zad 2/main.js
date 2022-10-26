let size = 10
let orderElement = 1
const init = () => {
    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    btn.textContent = 'Stwórz liste';
    btnReset.textContent = 'Reset';
    btn.style.fontSize = "28px"
    btnReset.style.fontSize = "28px"
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    const ul = document.createElement('ul');
    ul.style.listStyle = "none"
    document.body.appendChild(ul);
    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', cleanList);
}

const createLiElements = () => {
    for(i=0; i < 10; i++) {
    const li = document.createElement('li')
    li.textContent = `element nr ${orderElement++}`
    li.style.fontSize = `${size++}px`
    document.querySelector('ul').appendChild(li)
    }
}
const cleanList = () => {
    document.querySelector('ul').textContent = "";
    orderElement = 1
    size = 10
}

init()