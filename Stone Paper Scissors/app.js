let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


var a = confirm("Do You like this Webside?");
if(a){
    alert('Thanks to like this website.');
}
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    // console.log("Game was draw.");
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "#0c3563";
};
const showWinner = (userwin,userchoice,compChoice) =>{
    if(userwin){
        userScore++;
        userScorepara.innerText = userScore;
        // console.log("You Win!");
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        // console.log("You Lose");
        msg.innerText = `You Lost, ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userchoice) =>{
    console.log("user choice = ", userchoice);
    const compChoice = genCompChoice();
    console.log("comp coice = ", compChoice);

    if(userchoice === compChoice){
        drawGame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            // scissors, paper
            userwin = compChoice === 'paper'? false:true;
        }else if(userchoice === 'paper'){
            userwin = compChoice === 'scissors'? false:true;
        }else{
            // paper, rock
            userwin = compChoice === 'rock'? false:true;
        }
        showWinner(userwin,userchoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    }); 
});