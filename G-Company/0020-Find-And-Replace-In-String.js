const findReplaceString = (s, indices, sources, targets) => {
  let deltas = []

  // this can be replaced with _.zip if lodash is allowed
  for (let i = 0; i < indices.length; i++) {
    deltas.push([indices[i], sources[i], targets[i]])
  }

  deltas.sort((a, b) => b[0] - a[0]) // this allows right to left replacement

  for (let [index, source, target] of deltas) {
    if (s.substring(index, index + source.length) === source) {
      s = s.substring(0, index) + target + s.substring(index + source.length)
    }
  }

  return s
}
