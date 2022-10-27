const input = document.getElementById('pass');
const div = document.querySelector('.message')

const passwords = ["user", "wiosna", "Ania"];
const messages = ["wyjechałam na zawsze", "piekna pora roku", "Fajny styl masz"];

input.addEventListener('input', (e) => {
    div.textContent = '';
// console.log(e.target.value);
// console.log(this.value)
// if(password === e.target.value) {
//     div.textContent = message;
//     e.target.value = '';
// } else {
//     div.textContent = '';
// }
const text = e.target.value;
passwords.forEach((password, i) => {
    if(password === text) {
        div.textContent = messages[i];
        e.target.value = '';
    }
})
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active')
})
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active')
})