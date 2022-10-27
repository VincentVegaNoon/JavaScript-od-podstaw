let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
    let key = e.keyCode
    // switch (key) {
    //     case 38:
    //         console.log('klawisz 38')
    //         document.body.style.backgroundColor = `rgb(${red++}, ${green++}, ${blue++})`;
    //         break;
    //     case 40:
    //         console.log('klawisz 40')
    //         document.body.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`;
    //         break;
    //         default:
    //             console.log('zly klawisz')
    // }
    if (key == 38 && red < 256) {
        console.log('klawisz 38')
            document.body.style.backgroundColor = `rgb(${red++}, ${green++}, ${blue++})`;
    } else if (key == 40 && red >= 0) {
        console.log('klawisz 40')
        document.body.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`;
    } else {
        console.log('zly klawisz')
    }

}

window.addEventListener('keydown', changeColor)