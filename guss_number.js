// const readline=require("readline");
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let a = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
// let inp;
// let score = 100;
// while (inp !== a) {
//     score--;
//     inp = prompt("Guess a Number (between 1 and 100):");
//     if (inp === null) { // Handle if user cancels the prompt
//         alert("Game ended. You cancelled the game.");
//         break;
//     }
//     inp = parseInt(inp); // Parse user input to an integer
//     if (isNaN(inp)) {
//         alert("Please enter a valid number.");
//         continue;
//     }
//     if (inp === a) {
//         alert("Congratulations! You won the game.");
//         console.log(`You guessed the number in ${100 - score} guess(es).`);
//         let wr = confirm("Do you want to play again");
//         if(wr){
//             break;
//         }
//     } else if (inp > a) {
//         alert("The number is less than your guess.");
//     } else {
//         alert("The number is greater than your guess.");
//     }
// }


let a = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
let inp;
let score = 100;

while (inp !== a) {
    score--;
    const prompt = require("prompt-sync")();
    inp = prompt("Guess a Number (between 1 and 100):");
    
    if (inp === null) { // Handle if user cancels the prompt
        console.log("Game ended. You cancelled the game.");
        break;
    }
    
    inp = parseInt(inp); // Parse user input to an integer

    if (isNaN(inp)) {
        console.log("Please enter a valid number.");
        continue;
    }

    if (inp === a) {
        console.log("Congratulations! You won the game.");
        console.log(`You guessed the number in ${100 - score} guess(es).`);
        let wr = prompt("Do you want to play again? (yes/no): ");
        if (wr.toLowerCase() === "yes") {
            a = Math.floor(Math.random() * 100) + 1;
            score = 100;
            continue;
        } else {
            break;
        }
    } else if (inp > a) {
        console.log("The number is less than your guess.");
    } else {
        console.log("The number is greater than your guess.");
    }
}
