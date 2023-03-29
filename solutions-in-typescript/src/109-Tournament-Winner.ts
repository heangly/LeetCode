// Time: O(N) | Sapce: O(N)
const tournamentWinner = (competitions: string[][], results: number[]) => {
  const table: Record<string, number> = {}
  const output: { name: string; points: number } = { name: '', points: 0 }

  for (let i = 0; i < competitions.length; i++) {
    const winnerIndex = results[i] === 1 ? 0 : 1
    const winner = competitions[i][winnerIndex]
    console.log(winnerIndex, winner)
    table[winner] = (table[winner] || 0) + 3

    if (output.points <= table[winner]) {
      output.name = winner
      output.points = table[winner]
    }
  }

  return output.name
}

//[homeTeam, awayTeam]
// 1 = homeTeam wins
// 0 = awayTeam wins
// Each win get 3 points
// Find the winner who has the most points
const competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML']
]
const results = [0, 0, 1]
console.log(tournamentWinner(competitions, results))
