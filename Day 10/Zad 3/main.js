const timer = (start = 0) => {
    let number = start
    function setTimer() {
        number++
        document.body.textContent = `${number} sekund`
    }
    return setTimer, setInterval (setTimer, 1000);
}
const begin = timer
begin()
