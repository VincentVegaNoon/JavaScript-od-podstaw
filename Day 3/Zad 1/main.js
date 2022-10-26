const list = document.querySelectorAll('li');
const btn = document.querySelector('button');
let fontSize = 10

// btn.addEventListener('click', function() {
//     fontSize++
//     for (let i = 0; i<=list.length - 1; i++){
//         if (!list[i].style.display) {
//                 console.log('dodalem block')
//                 list[i].style.display = "block"
//         }
//     list[i].style.display = 'block'
//     list[i].style.fontSize = `${fontSize}px`
//     }
// })

btn.addEventListener('click', () => {
    list.forEach((liItem)=> {
        liItem.style.display = "block"
        liItem.style.fontSize = fontSize + 'px'
    })
    fontSize++;
})