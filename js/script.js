function start(){
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("rock").style.visibility = "visible";
    document.getElementById("paper").style.visibility = "visible";
    document.getElementById("scissors").style.visibility = "visible";

}

clickedHand = ["<img src='images/rock.png' id='img1'>","<img src='images/paper.png' id='img1'>","<img src='images/scissors.png' id='img1'>" ];

clickedRightHand = ["<img src='images/rock.png' id='img2'>","<img src='images/paper.png' id='img2'>","<img src='images/scissors.png' id='img2'>" ];

function game(player){
    document.getElementById("img1").style.animation = 'shakeLeft 0.7s 3 ease-in-out';
    document.getElementById("img2").style.animation = 'shakeRight 0.7s 3 ease-in-out';

let historyList = document.querySelector("#historyList");
let playerScore = document.querySelector("#playerScore");
let botScore = document.querySelector("#botScore");
let newPlayerScore = 0;
let newBotScore = 0;

    let random = Math.floor(Math.random()*3);
    let historyItem = document.createElement("li");

    setTimeout(() => {
        document.getElementById("hand2").innerHTML = clickedRightHand[random];
        document.getElementById("hand1").innerHTML = clickedHand[player];
    }, 2000);

    setTimeout(() => {
        if (random == player){
            alert("DRAW !! TRY AGAIN!!");
            // window.location.reload();
            historyItem.textContent = "GAME DRAW";
            historyItem.style.color = "Blue";
            historyItem.style.fontSize = "7px";
            historyList.appendChild(historyItem);
        }
        else if (player == 0 && random == 2){
            alert("YOU WIN , WICKED SICK !!");
            historyItem.textContent = "You defeated Scissor";
            historyItem.style.color = "green";
            historyItem.style.fontSize = "7px";
            newPlayerScore++;
            playerScore.textContent = newPlayerScore;
            historyList.appendChild(historyItem);
        }
        else if (player == 1 && random == 0){
            alert("YOU WIN , DOMINATING !!");
            historyItem.textContent = "You defeated Rock";
            historyItem.style.color = "green";
            historyItem.style.fontSize = "7px";
            newPlayerScore++;
            playerScore.textContent = newPlayerScore;
            historyList.appendChild(historyItem);
        }
        else if (player == 2 && random == 1){
            alert("YOU WIN , RAMPAGE !!");
            historyItem.textContent = "You defeated Paper";
            historyItem.style.color = "green";
            historyItem.style.fontSize = "7px";
            newPlayerScore++;
            playerScore.textContent = newPlayerScore;
            historyList.appendChild(historyItem);
        }
        else{
            alert("WEAK! YOU'VE BEEN SLAYED !!");
            historyItem.textContent = "YOU LOOSE";
            historyItem.style.color = "red";
            historyItem.style.fontSize = "7px";
            newBotScore++;
            botScore.textContent = newBotScore;
            historyList.appendChild(historyItem);
        }

        if(historyList.childElementCount > 6){
            historyList.removeChild(historyList.firstElementChild);
        }
        
    }, 2500);
}