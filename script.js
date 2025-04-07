// Step 1.
const planetLog = [
    {name: "Mercury", distance: "78", explored: "true", type: "Ice"},
    {name: "Venus", distance: "55", explored: "false", type: "Ice"},
    {name: "Earth", distance: "89", explored: "true", type: "Rocky"},
    {name: "Mars", distance: "110", explored: "false", type: "Pop"},
    {name: "Jupiter", distance: "45", explored: "true", type: "Gas"},
    {name: "Saturn", distance: "60", explored: "false", type: "Gas"},
]
console.table(planetLog);

// Step 2.
planetLog.forEach((value,index) => {
    if (value.explored == true){
        console.table(`${index +1} Explored: ${value.name} ${value.type}`)
    }
    else if (value.explored !== true){
        console.table(`${index +1} Unchartered: ${value.name} ${value.distance} M Km away`)
    }
}) 

planetLog.forEach((value,index) => {
    if (value.distance < 100 && value.explored == false){
console.table(`Nearby ${value.distance} unexplored ${value.explored}}`);
    }
})

// Step 3.
// Function to validate a planet object
function validatePlanet(planet){
    // Loop through each property of the planet
    for (let key in planetLog) {
      // Check if the value of the property is null or undefined
      if (planet[key] === null || planet[key] === undefined) {
        console.error(`Error: ${planet.name} has an incomplete data!`)
        return
      }
    }
  }
  validatePlanet('dam');