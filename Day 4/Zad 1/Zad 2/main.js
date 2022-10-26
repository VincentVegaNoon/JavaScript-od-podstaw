document.body.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY)
    const x = e.clientX
    const y = e.clientY

    if (x % 2 == 0 && y % 2 == 0) {
        document.body.style.backgroundColor = 'red'
    } else if (x % 2 > 0 && y % 2 > 0) {
        document.body.style.backgroundColor = 'green'
    } else {
        document.body.style.backgroundColor = 'blue'
    }
})