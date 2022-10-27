const btn =  document.querySelector('button');
const names = ['Ania', 'Jagienka','Kasia', 'Michalina']
const phrases = ['Szczerze powiedziawszy myśle', 'Jestem pewien','Na 100% twierdze']

btn.addEventListener('click', () => {
   let number = Math.floor(Math.random() * names.length)
   let phrasesNum = Math.floor(Math.random() * phrases.length)
   let phrase = phrases[phrasesNum]
   let name = names[number]
    console.log(name)
    document.querySelector('div').textContent = `${phrase},że najlepsze będzie imię ${name}`
})