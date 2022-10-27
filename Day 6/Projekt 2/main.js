const chars = 'ABCDEFGIJK0123456789';
const btn = document.querySelector('button')
let section = document.querySelector('section')
let password = ''

btn.addEventListener('click', ()=>{
    for (j=0;j<1000;j++){
    for (i=0; i < 10; i++) {
    let roll = Math.floor(Math.random() * chars.length)
    let char = chars[roll]
    password += char
    console.log(password)
    }
    const div = document.createElement('div');
    div.textContent = password;
    section.appendChild(div)
    password = ''
}
})
