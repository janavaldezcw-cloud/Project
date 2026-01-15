const Moves = ['rock', 'paper', 'scissors'];

function computerMove() {
  let computerNumber = Math.floor(Math.random() * Moves.length);
  let computerVaule = Moves[computerNumber]
  return computerVaule
}

function decideOutcome(player, computer) {
  player = player.toLowerCase();
  computer = computer.toLowerCase();

  const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  if (beats[player] === undefined) throw new Error('invalid move ')
  if (player === computer) return 'tie';
  if (beats[player] === computer) return 'win';
  return 'lose';
}

function playRound(player) {
  const computer = computerMove()
  const outcome = decideOutcome(player, computer)
  return { player: player.toLowerCase(), computer, outcome }
}

function createGame() {
  let score = {
    player: 0,
    computer: 0,
    ties: 0
  }
  return {
    play(playermove) {
     const  computer = computerMove()
      const outcome = decideOutcome(playermove, computer)
      if (outcome === 'win') {
        score.player++
      } else if (outcome === 'lose') {
        score.computer++
      } else score.ties++
    }
  }
}