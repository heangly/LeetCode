// https://www.algoexpert.io/questions/topological-sort

// solution 1: DFS
// Time: O(j + d) | Space: O(j + d)

type Dependency = [number, number]

const topologicalSort = (jobs: number[], deps: Dependency[]) => {
  const completed = new Set()
  const inProgress = new Set()
  const map = new Map()

  const canComplete = (job: number) => {
    if (completed.has(job)) return true
    if (inProgress.has(job)) return false

    inProgress.add(job)

    if (map.has(job)) {
      for (const preReq of map.get(job)) {
        if (!completed.has(preReq) && !canComplete(preReq)) return false
      }
    }

    inProgress.delete(job)
    completed.add(job)
    return true
  }

  for (const [preReq, job] of deps) {
    if (map.has(job)) {
      map.set(job, [preReq, ...map.get(job)])
    } else {
      map.set(job, [preReq])
    }
  }

  for (const job of jobs) {
    if (completed.has(job)) continue
    if (!canComplete(job)) return []
  }

  return [...completed]
}

// // ***** Class Implemetation *****
// type Dependency = [number, number]
// const topologicalSort = (jobs: number[], deps: Dependency[]) => {
//   const jobGraph = createJobGraph(jobs, deps)
//   return getOrderedJobs(jobGraph)
// }

// const createJobGraph = (job: number[], deps: Dependency[]) => {
//   const graph = new JobGraph(job)
//   for (const [prereq, job] of deps) {
//     graph.addPrereq(job, prereq)
//   }
//   return graph
// }

// const getOrderedJobs = (graph: JobGraph) => {
//   const orderedJobs: number[] = []
//   const { nodes } = graph
//   while (nodes.length) {
//     const node = nodes.pop()!
//     const containsCycle = depthFirstTraverse(node, orderedJobs)
//     if (containsCycle) return []
//   }
//   return orderedJobs
// }

// const depthFirstTraverse = (node: JobNode, orderedJobs: number[]) => {
//   if (node.visited) return false
//   if (node.visiting) return true
//   node.visiting = true

//   for (const prereqNode of node.prereqs) {
//     const containsCycle = depthFirstTraverse(prereqNode, orderedJobs)
//     if (containsCycle) return true
//   }

//   node.visited = true
//   node.visiting = false
//   orderedJobs.push(node.job)
//   return false
// }

// class JobGraph {
//   nodes: JobNode[]
//   graph: { [key: number]: JobNode }

//   constructor(jobs: number[]) {
//     this.nodes = []
//     this.graph = {}
//     for (const job of jobs) {
//       this.addNode(job)
//     }
//   }

//   addPrereq(job: number, prereq: number) {
//     const jobNode = this.getNode(job)
//     const prereqNode = this.getNode(prereq)
//     jobNode.prereqs.push(prereqNode)
//   }

//   addNode(job: number) {
//     this.graph[job] = new JobNode(job)
//     this.nodes.push(this.graph[job])
//   }

//   getNode(job: number) {
//     if (!(job in this.graph)) this.addNode(job)
//     return this.graph[job]
//   }
// }

// class JobNode {
//   job: number
//   prereqs: JobNode[]
//   visited: boolean
//   visiting: boolean

//   constructor(job: number) {
//     this.job = job
//     this.prereqs = []
//     this.visited = false
//     this.visiting = false
//   }
// }
