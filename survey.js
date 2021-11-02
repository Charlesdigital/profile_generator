const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Whats your name?", (answer) => {
  console.log(`Your name: ${answer}`);
  rl.question("Whats an activity you like doing", (answer1) => {
    console.log(`activity: ${answer1}`);
    rl.question("What do you listen to while doing that?", (answer2) => {
      console.log(`Listening on: ${answer2}`);
      rl.question("Which meal is your favourite ", (answer3) => {
        console.log(`Favourite meal: ${answer3}`);
        rl.question(
          "Whats your favourite thing to eat for that meal?",
          (answer4) => {
            console.log(`Favourite thing: ${answer4}`);
            rl.question(
              "Which sport is your absolute favourite?",
              (answer5) => {
                console.log(`Favourite sport: ${answer5}`);
                rl.question(
                  "What is your superpower? In a few words, tell us what you are amazing at!",
                  (answer6) => {
                    console.log(`Favourite superpower: ${answer6}`);
                    rl.close();
                  }
                );
              }
            );
          }
        );
      });
    });
  });
});
