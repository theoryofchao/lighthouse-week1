const minecraftWorld = require("./minecraft-world.js");

var wood = 0;

wood += minecraftWorld.chopWood();

console.log(`You have ${wood} block of wood!`);
