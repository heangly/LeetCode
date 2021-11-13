var MyCalendar = function () {
  this.calendars = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (!this.calendars.length) {
    this.calendars.push([start, end])
    return true
  }

  for (const calendar of this.calendars) {
    if (start >= calendar[0] && start < calendar[1]) return false
    if (start < calendar[0] && end > calendar[0]) return false
  }

  this.calendars.push([start, end])
  return true
}
