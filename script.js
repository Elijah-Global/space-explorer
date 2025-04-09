// // Step 1.
// const planetLog = [
//     {name: "Mercury", distance: "78", explored: "true", type: "Ice"},
//     {name: "Venus", distance: "55", explored: "false", type: "Ice"},
//     {name: "Earth", distance: "89", explored: "true", type: "Rocky"},
//     {name: "Mars", distance: "110", explored: "false", type: "Pop"},
//     {name: "Jupiter", distance: "45", explored: "true", type: "Gas"},
//     {name: "Saturn", distance: "60", explored: "false", type: "Gas"},
// ]
// console.table(planetLog);

// // Step 2.
// planetLog.forEach((value,index) => {
//     if (value.explored == true){
//         console.table(`${index +1} Explored: ${value.name} ${value.type}`)
//     }
//     else if (value.explored !== true){
//         console.table(`${index +1} Unchartered: ${value.name} ${value.distance} M Km away`)
//     }
// }) 

// planetLog.forEach((value,index) => {
//     if (value.distance < 100 && value.explored == false){
// console.table(`Nearby ${value.distance} unexplored ${value.explored}}`);
//     }
// })

// // Step 3.
// // Function to validate a planet object
// function validatePlanet(planet){
//     // Loop through each property of the planet
//     for (let key in planetLog) {
//       // Check if the value of the property is null or undefined
//       if (planet[key] === null || planet[key] === undefined) {
//         console.error(`Error: ${planet.name} has an incomplete data!`)
//         return
//       }
//     }
//   }
//   validatePlanet('dam');


// Step 1
// const planetLog = [
//     { name: "Mars", distance: 78, explored: true, type: "Rocky" },
//     { name: "Venus", distance: 42, explored: false, type: "Rocky" },
//     { name: "Jupiter", distance: 628, explored: false, type: "Gas" },
//     { name: "Saturn", distance: 1200, explored: true, type: "Gas" },
//     { name: "Neptune", distance: 4500, explored: false, type: "Ice" },
//   ];
  
//   console.table(planetLog); // Display the log in a table format in the console.

// //   Step 2
// for (let i = 0; i < planetLog.length; i++) {
//     const planet = planetLog[i];
    
//     if (planet.explored) {
//       console.log(`Explored: ${planet.name} - ${planet.type}`);
//     } else {
//       let message = `Uncharted: ${planet.name} - ${planet.distance}M km away`;
//       if (planet.distance < 100) {
//         message += " - Nearby!";
//       }
//       console.log(message);
//     }
//   }

  
// // Step 3
// function validatePlanet(planet) {
//     if (planet.name === undefined || planet.distance === undefined || planet.explored === undefined || planet.type === undefined) {
//       console.log(`Error: ${planet.name || "Unknown"} has incomplete data!`);
//     }
//   }
  
//   for (let i = 0; i < planetLog.length; i++) {
//     validatePlanet(planetLog[i]);
//   }

  
// //   Step 4
// function getClosePlanets() {
//     const closePlanets = planetLog.filter(planet => planet.distance < 200 && !planet.explored);
    
//     if (closePlanets.length > 0) {
//       console.table(closePlanets);
//     } else {
//       console.log("No close unexplored planets!");
//     }
//   }
  
//   getClosePlanets();

// //   Step 5
// function markExplored(name) {
//     if (!name) {
//       console.log("Please provide a valid planet name!");
//       return;
//     }
  
//     const planet = planetLog.find(p => p.name.toLowerCase() === name.toLowerCase());
    
//     if (planet) {
//       planet.explored = true;
//       console.log(`${planet.name} has been explored!`);
//     } else {
//       console.log("Planet not in log!");
//     }
//   }
  
//   markExplored("Mars"); // Should mark Mars as explored.
//   markExplored("Pluto"); // Should log "Planet not in log!"
//   markExplored(null); // Should log "Please provide a valid planet name!"

  
  // Step 1- 5
const planetLog = [
    { name: "Mars", distance: 78, explored: true, type: "Rocky" },
    { name: "Venus", distance: 42, explored: false, type: "Rocky" },
    { name: "Jupiter", distance: 628, explored: false, type: "Gas" },
    { name: "Saturn", distance: 1200, explored: true, type: "Gas" },
    { name: "Neptune", distance: 4500, explored: false, type: "Ice" },
  ];
  
  console.table(planetLog);
  
  // Step 2: Loop through the log
  for (let i = 0; i < planetLog.length; i++) {
    const planet = planetLog[i];
    if (planet.explored) {
      console.log(`Explored: ${planet.name} - ${planet.type}`);
    } else {
      let message = `Uncharted: ${planet.name} - ${planet.distance}M km away`;
      if (planet.distance < 100) {
        message += " - Nearby!";
      }
      console.log(message);
    }
  }
  
  // Step 3: Validate planet data
  function validatePlanet(planet) {
    if (planet.name === undefined || planet.distance === undefined || planet.explored === undefined || planet.type === undefined) {
      console.log(`Error: ${planet.name || "Unknown"} has incomplete data!`);
    }
  }
  for (let i = 0; i < planetLog.length; i++) {
    validatePlanet(planetLog[i]);
  }
  
  // Step 4: Find close planets
  function getClosePlanets() {
    const closePlanets = planetLog.filter(planet => planet.distance < 200 && !planet.explored);
    if (closePlanets.length > 0) {
      console.table(closePlanets);
    } else {
      console.log("No close unexplored planets!");
    }
  }
  getClosePlanets();
  
  // Step 5: Mark a planet as explored
  function markExplored(name) {
    if (!name) {
      console.log("Please provide a valid planet name!");
      return;
    }
  
    const planet = planetLog.find(p => p.name.toLowerCase() === name.toLowerCase());
    
    if (planet) {
      planet.explored = true;
      console.log(`${planet.name} has been explored!`);
    } else {
      console.log("Planet not in log!");
    }
  }
  
  markExplored("Mars");
  markExplored("Pluto");
  markExplored(null);
   

 
  