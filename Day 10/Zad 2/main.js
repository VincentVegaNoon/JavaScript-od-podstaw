const user = (name = "", age) => {
    let userName = name;
    let userAge = age;
    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupic piwo': 'Nie mozesz kupic piwa'}`);
    }
    return showName
}
const mieszko = user("mieszko", 20)
const jagienka = user("Jagienka", 17)
mieszko()
jagienka()

const noName = user();
noName()