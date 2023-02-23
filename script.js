// Data Structures Exercise
// 1a
const jedi = [];
console.log(jedi); // []

// 1b
jedi[0] = `Luke`;
console.log(jedi); // [ 'Luke' ]

// 1c
jedi.push(`Obi-Wan Kenobi`);
console.log(jedi); // [ 'Luke', 'Obi-Wan Kenobi' ]

// 1d
jedi.unshift("Yoda");
console.log(jedi); // [ 'Yoda', 'Luke', 'Obi-Wan Kenobi' ]

// 1e
console.log(jedi[1]); // Luke

// 1f
jedi.pop();
console.log(jedi); // [ 'Yoda', 'Luke' ]

// 1g
jedi.shift();
console.log(jedi); // [ 'Luke' ]

// 2a
const sithLords = [
  "Darth Vader",
  "Darth Sidious",
  "Darth Maul"
];

// 2b
const imperialOfficers = [
  "Grand Moff Tarkin",
  "Orson Krennic"
];

// 2c
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);
/*
[
  'Darth Vader',
  'Darth Sidious',
  'Darth Maul',
  'Grand Moff Tarkin',
  'Orson Krennic'
]
*/

// 2d
console.log(starWarsVillains.slice(0, 2)); // [ 'Darth Vader', 'Darth Sidious' ]

// 3a
const droids = {
  astromech: "R2-D2",
  protocol: "C-3PO",
  assassin: "IG-88"
};

// 3b
console.log(droids[`astromech`]); // R2-D2

// 3c
console.log(droids.protocol); // C-3PO

// 3d
droids.assassin = `IG-11`;
console.log(droids.assassin); // IG-11
