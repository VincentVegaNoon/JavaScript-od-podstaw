const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
   playerHand: "",
   aiHand: "",
}
const hands = [...document.querySelectorAll('.select img')];

function handSelection () {
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px yellow';
}
function aiChoice() {
    return hands[Math.floor(Math.random() * hands.length)].dataset.option;
}

function checkResult(player, ai) {
if(player == ai) {
    gameSummary.draws++
    // return 'draw'
    document.querySelector('[data-summary="who-win"]').textContent = 'Remis'
} else if ((player === "Papier" && ai === "Kamień") || (player === 'Kamień' && ai === "Nożyczki") || (player === "Nożyczki" && ai === "Papier")) {
    gameSummary.wins++
    // return 'win'
    document.querySelector('[data-summary="who-win"]').textContent = 'Wygrałeś'
} else {
    gameSummary.losses++
    // return 'loss'
    document.querySelector('[data-summary="who-win"]').textContent = 'Przegrałeś'
}
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers
    document.querySelector('p.wins span').textContent = gameSummary.wins
    document.querySelector('p.draws span').textContent = gameSummary.draws
    document.querySelector('p.losses span').textContent = gameSummary.losses
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
}

function startGame() {
    if(!game.playerHand) return alert('wybierz dlon')
    game.aiHand = aiChoice()
    const gameResult = checkResult(game.playerHand, game.aiHand)
    // console.log(gameResult)
    publishResult(game.playerHand, game.aiHand, game.result)
    endGame()
}

hands.forEach(hand => hand.addEventListener('click', handSelection));
document.querySelector('.start').addEventListener('click', startGame)