let humanCounter = 0;
let robotCounter = 0;
let gameMode = "endless";

function imageChanger(robot, human){
    let humanHand = document.getElementById("humanHand");
    let robotHand = document.getElementById("robotHand");
    switch(robot){
        case 0: robotHand.src = "Hands/Rock-Robot.svg";
        break;
        case 1: robotHand.src = "Hands/Paper-Robot.svg";
        break;
        case 2: robotHand.src = "Hands/Scissors-Robot.svg";
        break;
    }
    switch(human){
        case 0: humanHand.src = "Hands/Rock-Human.svg";
        break;
        case 1: humanHand.src = "Hands/Paper-Human.svg";
        break;
        case 2: humanHand.src = "Hands/Scissors-Human.svg";
        break;
    }
}

function scoreChange (){
    document.getElementById("score").innerHTML = `${humanCounter} : ${robotCounter}`;
}


function game (){

    document.getElementById("rock").addEventListener("click", () => playedGame(0));
    document.getElementById("paper").addEventListener("click", () => playedGame(1));
    document.getElementById("scissors").addEventListener("click", () => playedGame(2));

}

function winCondition (){
    
    if(gameMode == "firstTo3"){
        if(humanCounter == 3){
            robotCounter = humanCounter = 0;
            alert("YOU WON!");
        }else if(robotCounter == 3){
            robotCounter = humanCounter = 0;
            alert("YOU LOST!");
        }
    }
    
    if(gameMode == "3played"){
        if(humanCounter == 2){
            robotCounter = humanCounter = 0;
            alert("YOU WON!");
        }else if(robotCounter == 2){
            robotCounter = humanCounter = 0;
            alert("YOU LOST!");
        }
    }

}

document.getElementById("end").addEventListener("click", 
    function(){
        if (gameMode = "endless"){
            if(humanCounter > robotCounter){
                alert("YOU WON!");
            }
            else if(humanCounter < robotCounter){
                alert("YOU LOST!");
            }else{calert("IT'S A DRAW!")}
        }
        humanCounter = robotCounter = 0;
})

game();

function playedGame (choice){

    let robot = Math.floor(Math.random()*3);
    console.log(robot);

    if ((choice == 0 && robot == 1) || (choice == 1 && robot == 2) || (choice == 2 && robot == 0)){
        imageChanger(robot, choice);
        document.getElementById("result").innerHTML = "LOSE";
        robotCounter++;
        scoreChange();
        setTimeout(winCondition, 100);

    } else if ((choice == 0 && robot == 2) || (choice == 1 && robot == 0) || (choice == 2 && robot == 1)){
        imageChanger(robot, choice);
        document.getElementById("result").innerHTML = "WIN";
        humanCounter++;
        scoreChange();
        setTimeout(winCondition, 100);

    } else {
        imageChanger(robot, choice);
        document.getElementById("result").innerHTML = "DRAW"; scoreChange();}

}

function gameModeChoice(a){
    if(window.confirm("Start new game?")){
        robotCounter = humanCounter = 0;
        scoreChange();
        gameMode = a;
        if(a == "firstTo3"){document.getElementById("mode").innerHTML = `FIRST TO 3`;}
        if(a == "3played"){document.getElementById("mode").innerHTML = `3 PLAYED`;}
        if(a == "endless"){document.getElementById("mode").innerHTML = `ENDLESS`;}
    }
}

document.getElementById("firstTo3").addEventListener("click", () => gameModeChoice("firstTo3"));
document.getElementById("3played").addEventListener("click", () => gameModeChoice("3played"));
document.getElementById("endless").addEventListener("click", () => gameModeChoice("endless"));








