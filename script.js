const randomYear = Math.floor(Math.random() * 30);
const deathReason = ['killed by a Chihuahua', 'raped to death by a dolphin', "choked whit your own saliva"];
const funeralGuess = ['all the homeless people of your town', 'only two random dwarf guys', 'nobody'];



const randomMessage = () => `You will dead in ${randomYear} years, ${deathReason[Math.floor(Math.random()*deathReason.length)]}, at your funeral ${funeralGuess[Math.floor(Math.random()*funeralGuess.length)]} will be present`;

console.log(randomMessage());

