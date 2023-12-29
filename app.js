let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
let userSc=document.querySelector("#user-score");
let compSc=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");

const generateCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    // console.log("Game was draw");
    msg.innerText="Game was Draw. Play again."
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        // console.log("You won!");
        userScore+=1;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        userSc.innerText=userScore;
        msg.style.backgroundColor="green";
    }else{
        // console.log("You lost!");
        compScore+=1;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        compSc.innerText=compScore;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    // console.log("User choice=",userChoice);
    // Generate computer choice
    const compChoice=generateCompChoice();
    // console.log("Comp choice=",compChoice);

    if(userChoice===compChoice){
        // draw condition
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
})