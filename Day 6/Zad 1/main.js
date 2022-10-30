// const options = ['walcz', 'przemysl to jeszcze raz'];
const options = ['walcz'];
const btnAdd = document.querySelector('.add');
const btnReset = document.querySelector('.clean');
const btnShowAdvice = document.querySelector('.showAdvice');
const btnShowOptions = document.querySelector('.showOptions');

const addOption = (e) => {
    e.preventDefault()
    const input = document.querySelector('input');
    const newOption = input.value;
    if (input.value.length) {
        for(option of options) {
            if(option === newOption) {
                alert('ta mozliwosc juz jest');
                input.value = '';
                return
            }
        }
        options.push(newOption);
        console.log(options);
        input.value = '';
    } 
}
const showAdvice = (e) => {
    e.preventDefault()
        let randomAdvice = Math.floor(Math.random() * options.length);
        document.querySelector('h1').textContent = options[randomAdvice];
        if(options.length > 0){
            alert(options)
            } else {
                alert('nie ma rad')
            }
    }
const showAdvices = (e) => {
    e.preventDefault()
        if(options.length > 0){
        alert(options)
        } else {
            alert('nie ma rad')
        }
    }

const cleanAdvice = (e) => {
    e.preventDefault()
    options.splice(0,options.length)
}

btnReset.addEventListener('click', cleanAdvice)
btnShowOptions.addEventListener('click', showAdvices)
btnShowAdvice.addEventListener('click', showAdvice);
btnAdd.addEventListener('click', addOption);