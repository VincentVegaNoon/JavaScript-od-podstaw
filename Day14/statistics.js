class Statistics {
 constructor() {
    this.gameResult = [];
 }
addGameToStatistics(win, bid) {
    let gameResult = {
        win,
        bid
    }
    console.log(gameResult)
    this.gameResult.push(gameResult)
}
showGameStatistics() {
    let games = this.gameResult.length;
    let wins = this.gameResult.filter(result => result.win).length
    let losses = this.gameResult.filter(result => !result.win).length
    console.log(games, wins, losses)
    return[games, wins, losses]
}
}

const stats = new Statistics()