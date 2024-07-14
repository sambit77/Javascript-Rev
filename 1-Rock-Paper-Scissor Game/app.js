let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock, paper, scissor .. pick random 
    let options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3); //generate number 0 to 2 by multiplying with 3
    return options[randIdx];


};
const drawGame = () => {
    console.log("Game draw");
    msg.innerHTML = "Game Draw , Play Again";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin)
    {
        console.log("You Win");
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else
    {
        console.log("You Lose");
        msg.innerHTML = `You Lost. Computer's ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    console.log("uuser choice " + userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice "+compChoice);

    if(userChoice === compChoice)
    {
        //Draw
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            //scissors , paper 
            userWin = compChoice === "paper" ? false : true;
        }

        else if(userChoice === "paper")
        {
            //rock, scissors 
            userWin = compChoice === "scissors" ? false : true;
        }
        else
        {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});