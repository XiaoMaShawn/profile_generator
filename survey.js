const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  rl.question("What's your favourite color?", (color) => {
    rl.question("What's your favourite sport?", (sport) => {
      rl.question("What do your listen to while doing that?", (music) => {
        console.log(`Thank you ${name}, your favourite color is ${color}, your a good at ${sport}, you like listen to ${music} while working out`);
        rl.close();
      });
    });
  });
});