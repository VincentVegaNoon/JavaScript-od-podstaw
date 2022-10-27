const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ['super', 'działa!']

// passwords.forEach((password, index) => {
//     passwords[index] = password.toLowerCase()
// })

// const showMessage = (e) => {
//     const input = e.target.value.toLowerCase()
//     const div = document.querySelector('div')
//     passwords.forEach((password, i) => {
//         if (password === input) {
//             div.textContent = messages[i];
//         }
//     })
// }
const LCPasswords = passwords.map(password => password.toLowerCase())
const showMessage = (e) => {
const textInput = e.target.value.toLowerCase();

for (let i = 0; i<LCPasswords.length; i++) {
    if(textInput === LCPasswords[i]) {
        document.querySelector('div').innerHTML = messages[i]
    }
}
}

input.addEventListener("input", showMessage);