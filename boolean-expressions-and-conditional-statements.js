/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = true;
let hasMap = false;
let sword = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?\n");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.\n");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.\n");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.\n");
} else {
  console.log("You get lost and wander aimlessly.\n");
}

if (hasTorch === true) {
  let lightTorch = readline.question(`A strong gust of wind blows out your torch, but you're almost home and you know the way.
Do you take the time to relight your torch? y or n:

`)
    if (lightTorch === "y") {
      console.log(`
You stop a moment to relight your torch.
Being able to see your surroundings helps you keep up a quick pace.

`)
        hasTorch = true
    } 
    else if (lightTorch === "n") {
      console.log(`
Lighting the torch will take too much time and effort.
You continue on your way.

`)
        hasTorch = false
    }
    else {
      console.log("Torches? We don't need no stinking torches.\n")
    }
}

let swordChoice = readline.question(`As you continue on, you see a beautiful sword on the ground.
No one is around and you can tell it's been there awhile. Do you pick it up? y or n: 

`);


if (swordChoice === "y" && !hasTorch) {
  console.log(`
Suddenly an ogre jumps from the bushes in a terrifying flurry. 
You swing your sword to protect yourself, but you can't see anything in the darkness.
"HEY! Why you doin me like that, bro?" declares the ogre. "There's a bunch of roaches in that bush. I jump out to avoid them and you're swinging a sword at me? Not cool, bro"
You apologize profusely and continue on home.`);
} 
else if (swordChoice === "n" && !hasTorch) {
  console.log(`
Suddenly an ogre jumps from the bushes in a terrifying flurry. 
With no sword and no torch, you decide to collapse to the ground in a ball and hope the ogre didn't see you.
The ogre runs off yelling something about roaches and you continue on your way home thankful to be alive.`);
}
else if (swordChoice === "y" && hasTorch) {
  console.log(`
Suddenly an ogre jumps from the bushes in a terrifying flurry. 
You consider swinging your sword, but from the light of your torch you notice the ogre doesn't even see you, so you keep your sword at the ready and wait to see what happens.
The ogre runs off yelling something about roaches and you continue on your way home thankful to be alive.`);
}
else  {
  console.log(`
Choosing to leave the sword right where it is, you continue home in the darkness considering if wandering home in the dark with no light and no protection was a wise choice.
You continue to examine your life choices for the next three hours of the fifteen minute walk home.
Without a light, you didn't notice when you wandered off the path toward home.`)
} 