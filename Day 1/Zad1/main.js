const btn = document.querySelector('button');
let count = 1
btn.addEventListener('click', function() {
    const div = document.body.appendChild(document.createElement('div'));
    div.textContent = count
    if(count % 5 == 0) {
        div.classList.add("circle")
    }
    count++
})
