// let number = 0;
// const add = () => {
//     let number = 0;
//     number++;
//     document.body.textContent = `aktualny stan licznika to ${number}`
// }
// document.addEventListener('click', add)

// function x() {
//     let number = 0;
//     function y() {
//         console.log(number)
//     }
//     return y
// }
// const example = x()
// example()
const add = (start = 0) => {
    let number = start;
    return () => {
        number++;
        document.body.textContent = `aktualny stan licznika kliknięć to ${number}`
    }
}
const counter = add()
const counterFrom5 = add(5)
document.addEventListener('click', counter);