// https://leetcode.com/problems/kill-process/

/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
const killProcess = (pid, ppid, kill) => {
  const parents = {}

  for (let i = 0; i < ppid.length; i++) {
    const parentId = ppid[i]
    const childId = pid[i]

    parents[parentId] = parents[parentId] || []
    parents[parentId].push(childId)
  }

  const ans = []
  dfs(parents, kill, ans)
  return ans
}

const dfs = (parents, kill, ans) => {
  ans.push(kill)
  if (!parents[kill]) return
  for (const pid of parents[kill]) {
    dfs(parents, pid, ans)
  }
}

const pid = [1, 2, 3]
const ppid = [0, 1, 2]
const kill = 1

console.log(killProcess(pid, ppid, kill))
