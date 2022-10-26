const wall = document.createElement('div');
document.body.appendChild(wall)
let size = 1
let grow = true
wall.style.height = size + 'px'

window.addEventListener('scroll', function () {
    if (size >= window.innerHeight / 2) {
        grow = !grow
    } else if (size <= 0) {
        grow = !grow
    }
    if (grow) {
        wall.style.backgroundColor = 'red'
        size += 10
        wall.style.height = size + 'px'
    } else {
        wall.style.backgroundColor = 'green'
        size -= 10
        wall.style.height = size + 'px'
    }
})