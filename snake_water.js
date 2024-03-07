 const prompt = require("prompt-sync")();
 let turns = parseInt(prompt("How many turns do you want to play? ")); 
 let user_count=0;
 let camp_count=0;
while(turns--){
    let camp = Math.floor(Math.random()*3);
    let user_choice = prompt("Your Turn ('Snake','Water','Gun'): ");
    let camp_choice;
    if (camp === 0) {
        camp_choice = 'Water';
    } else if (camp === 1) {
        camp_choice = 'Gun';
    } else {
        camp_choice = 'Snake';
    }
    console.log(`Computer's choice: ${camp_choice}`);
    if ((user_choice === 'Gun' && camp === 2) || (user_choice === 'Snake' && camp === 0) || (user_choice === 'Water' && camp === 1)) {       
        user_count += 1;
        console.log("You win this round!");
        console.log("continue Playing..");
    }
    else if ((user_choice === 'Gun' && camp === 0) || (user_choice === 'Snake' && camp === 1) || (user_choice === 'Water' && camp === 2)) {
        camp_count += 1;
        console.log("Computer wins this round!");
    } else {
        console.log("It's a tie!");
    }
}
if(user_count > camp_count){
    console.log("You Win!!");
}
else if (user_count < camp_count) {
    console.log("Computer Wins!!");
} else {
    console.log("Wow It's a tie!");
}