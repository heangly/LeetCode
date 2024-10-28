/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  const table = {}
  for (const vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      if (!(vote[i] in table)) {
        table[vote[i]] = new Array(vote.length).fill(0)
      }
      table[vote[i]][i]++
    }
  }

  console.log(table)

  const res = Object.keys(table).sort((a, b) => {
    for (let i = 0; i < votes[0].length; i++) {
      if (table[a][i] !== table[b][i]) {
        return table[b][i] - table[a][i]
      }
    }
    return a > b ? 1 : -1
  })

  console.log(res)

  return res.join('')
}
