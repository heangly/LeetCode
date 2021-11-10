/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.snapId = 0
  this.indexAndValue = new Map()
  this.snapIdAndIndexValue = new Map()
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.indexAndValue.set(index, val)
}

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  this.snapIdAndIndexValue.set(this.snapId, new Map(this.indexAndValue))
  this.indexAndValue = new Map()
  let curSnapId = this.snapId
  this.snapId++
  return curSnapId
}

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  let value = undefined
  let curSnapId = snap_id
  while (value === undefined && curSnapId >= 0) {
    value = this.snapIdAndIndexValue.get(curSnapId).get(index)
    curSnapId--
  }

  return value === undefined ? 0 : value
}
