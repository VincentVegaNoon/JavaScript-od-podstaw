const btn = document.querySelector('button');
const list = document.querySelector("ul");
let count = 1
btn.addEventListener('click', function() {
    const liAdd = document.createElement('li')
    liAdd.textContent = count
    list.appendChild(liAdd)
    if (count % 3 == 0) {
        liAdd.classList.add('big')
    } else if (count == 1) {
        liAdd.classList.add('big')
    }
    count+= 2
})