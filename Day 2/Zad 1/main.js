const square = document.createElement('div');
document.body.appendChild(square);
let size = 10;
let grow = true
square.style.width = size + 'px';
square.style.height = size + 'px';
// let squareWidth = window.innerHeight

window.addEventListener("scroll", function () {
    if (size >= window.innerWidth / 2) {
        grow = !grow
    } else if(size <= 0) {
       grow = !grow
    }
    if (grow) {
      size += 5
      square.style.width = size + 'px';
      square.style.height = size + 'px';
    } else {
        size -= 5
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    }
})