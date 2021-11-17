// create array of objects with car position and speed
const cars = []
for (let i = 0; i < position.length; i++) {
  cars.push({ pos: position[i], speed: speed[i] })
}

// sort cars by their position (largest first)
// if same position then by speed (largest first)
cars.sort((car1, car2) => {
  if (car1.pos === car2.pos) return car2.speed - car1.speed
  return car2.pos - car1.pos
})

let fleets = 0 // total number of fleets
let lastFleetIn = 0 // time needed to reach target by last fleet

for (let i = 0; i < cars.length; i++) {
  // time needed to reach destination
  const timeNeeded = (target - cars[i].pos) / cars[i].speed

  // if this car needs more time to reach target
  // then this will be part of next fleet
  if (timeNeeded > lastFleetIn) {
    fleets++
    lastFleetIn = timeNeeded
  }
}

return fleets
