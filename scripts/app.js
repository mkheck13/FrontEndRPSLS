const apiLink = "https://heckermanmrpsls-e2aabgevcsfghrcp.westus-01.azurewebsites.net/RPSLS/RPSLS";

let vsCPU = document.getElementById('vsCPU');
let vsHuman = document.getElementById('vsHuman');

let p1Choice = document.getElementById("p1Choice");
let p2Choice = document.getElementById("p2Choice");

let p1Points = document.getElementById("p1Points");
let p2Points = document.getElementById("p2Points");

let textBox = document.getElementById("textBox");
let turnText = document.getElementById("turnText");



let oneRound = document.getElementById("oneRound");
let fourRound = document.getElementById("fourRound");
let fiveRound = document.getElementById("fiveRound");

let replayBtn = document.getElementById("replayBtn");

let dummyElement = document.getElementById('dummy');

let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');
let lizardBtn = document.getElementById('lizardBtn');
let spockBtn = document.getElementById('spockBtn');

let headToHead;

// button logic
vsCPU.addEventListener('click', function (e) {
    headToHead = false;
    HiddenOn(vsCPU, vsHuman);
    HiddenOn(oneRound, fourRound, fiveRound);
    textBox.textContent = "How many rounds?";
});

vsHuman.addEventListener('click', function (e) {
    headToHead = true;
    HiddenOn(vsCPU, vsHuman);
    HiddenOn(oneRound, fourRound, fiveRound);
    textBox.textContent = "How many rounds?";
});

oneRound.addEventListener('click', function (e) {
    GameOn(1, headToHead);
    HiddenOff(oneRound, fourRound, fiveRound);
});

fourRound.addEventListener('click', function (e) {
    GameOn(4, headToHead);
    HiddenOff(oneRound, fourRound, fiveRound);
});

fiveRound.addEventListener('click', function (e) {
    GameOn(5, headToHead);
    HiddenOff(oneRound, fourRound, fiveRound);
});


function GameOn(totalCount, headToHead){
    let player1Score = 0;
    let player2Score = 0;

    let player1Input;
    let player2Input;

    ScoreUpdate();

    Player1Turn();

    HiddenOn(rockBtn, paperBtn, scissorsBtn, lizardBtn, spockBtn);
    HiddenOn(p1Points, p2Points, turnText);

    textBox.textContent = 'Rock, Paper, Scissors, Lizard, or Spock';


    function ButtonSelect(Player1Turn, input, Method){
        if(Player1Turn){
            player1Input = input;
        }else{
            player2Input = input;
        }
        Method();
    };


    function Player1Turn(){
        turnText.textContent = 'Player 1 Turn';

        rockBtn.onclick = function () {
            ButtonSelect(true, "Rock", Player2Turn);
        };
        paperBtn.onclick = function () {
            ButtonSelect(true, "Paper", Player2Turn);
        };
        scissorsBtn.onclick = function () {
            ButtonSelect(true, "Scissors", Player2Turn);
        };
        lizardBtn.onclick = function () {
            ButtonSelect(true, "Lizard", Player2Turn);
        };
        spockBtn.onclick = function () {
            ButtonSelect(true, "Spock", Player2Turn);
        };


    };


    async function Player2Turn(){
        if(headToHead){
            turnText.textContent = 'Player 2 Turn';

            rockBtn.onclick = function () {
                ButtonSelect(false, "Rock", GameLogic);
            };
            paperBtn.onclick = function () {
                ButtonSelect(false, "Paper", GameLogic);
            };
            scissorsBtn.onclick = function () {
                ButtonSelect(false, "Scissors", GameLogic);
            };
            lizardBtn.onclick = function () {
                ButtonSelect(false, "Lizard", GameLogic);
            };
            spockBtn.onclick = function () {
                ButtonSelect(false, "Spock", GameLogic);
            };
        }else{
            TurnCPU();
        }
    };

    async function TurnCPU() {
        const promise = await fetch("https://heckermanmrpsls-e2aabgevcsfghrcp.westus-01.azurewebsites.net/RPSLS/RPSLS");
        const data = await promise.text();
        player2Input = data;
        GameLogic();
    }




//Swtich cases to see who won
    function GameLogic(){
        textBox.textContent = player1Input;

        if(player1Input !== player2Input){
            switch(player1Input){
                case "Rock":
                    switch(player2Input){
                        case "Paper":
                            textBox.textContent += ' gets covered by ';
                            player2Score++;
                            break;

                        case "Scissors":
                            textBox.textContent += ' smashes ';
                            player1Score++;
                            break;
        
                        case "Lizard":
                            textBox.textContent += ' crushes ';
                            player1Score++;
                            break;
        
                        case "Spock":
                            textBox.textContent += ' gets vaporized by ';
                            player2Score++;
                            break;
                    }
                    break;

                case "Paper":
                    switch(player2Input){
                        case "Rock":
                            textBox.textContent += ' covers ';
                            player1Score++;
                            break;

                        case "Scissors":
                            textBox.textContent += ' gets cut by ';
                            player2Score++;
                            break;
    
                        case "Lizard":
                            textBox.textContent += ' gets eaten by ';
                            player2Score++;
                            break;
    
                        case "Spock":
                            textBox.textContent += ' disproves ';
                            player1Score++;
                            break;
                    }
                    break;

                case "Scissors":
                    switch(player2Input){
                        case "Rock":
                            textBox.textContent += ' gets smashed by ';
                            player2Score++;
                            break;

                        case "Paper":
                            textBox.textContent += ' cuts ';
                            player1Score++;
                            break;

                        case "Lizard":
                            textBox.textContent += ' decapitates ';
                            player1Score++;
                            break;

                        case "Spock":
                            textBox.textContent += ' gets smashed by ';
                            player2Score++;
                            break;
                    }
                    break;

                case "Lizard":
                    switch(player2Input){
                        case "Rock":
                            textBox.textContent += ' gets crushed by ';
                            player2Score++;
                            break;

                        case "Paper":
                            textBox.textContent += ' eats ';
                            player1Score++;
                            break;

                        case "Scissors":
                            textBox.textContent += ' gets decapitated by ';
                            player2Score++;
                            break;

                        case "Spock":
                            textBox.textContent += ' poisons ';
                            player1Score++;
                            break;
                    }
                    break;

                case "Spock":
                    switch(player2Input){
                        case "Rock":
                            textBox.textContent += ' vaporizes ';
                            player1Score++;
                            break;

                        case "Paper":
                            textBox.textContent += ' gets disproved by ';
                            player2Score++;
                            break;

                        case "Scissors":
                            textBox.textContent += ' smashes ';
                            player1Score++;
                            break;

                        case "Lizard":
                            textBox.textContent += ' gets poisoned by ';
                            player2Score++;
                            break;
                    }
                    break;
            }
            textBox.textContent += `${player2Input}!`
        }else{
            textBox.textContent += ` and ${player2Input} are the same. That was a tie.`;
        }

        if(player1Score >= totalCount || player2Score >= totalCount){
            ScoreUpdate();
            HiddenOff(rockBtn, scissorsBtn, paperBtn, lizardBtn, spockBtn);

            if(player1Score > player2Score){
                textBox.textContent = 'Player One Wins!!!';
            }else{
                textBox.textContent = 'Player Two Wins!!!';
            }

            HiddenOn(replayBtn);

            turnText.textContent = 'Game Over.';

            replayBtn.onclick = function(){
                player1Score = 0;
                player2Score = 0;

                HiddenOn(vsCPU, vsHuman);
                HiddenOff(replayBtn);

                textBox.textContent = 'Choose your opponent';

                ScoreUpdate();
            };

        }else{
            ScoreUpdate();
            Player1Turn();

            player1Input = '';
            player2Input = '';
        }
    }

    function ScoreUpdate(){
        p1Points.innerText = `Score: ${player1Score}`;
        p2Points.innerText = `Score: ${player2Score}`;
    
    }
};


// Functions to show and hide elements
// function HiddenOn(variable1 = dummyElm, variable2 = dummyElm, variable3 = dummyElm, variable4 = dummyElm, variable5 = dummyElm){
//     variable1.classList.add("d-none");
//     variable2.classList.add("d-none");
//     variable3.classList.add("d-none");
//     variable4.classList.add("d-none");
//     variable5.classList.add("d-none");
// };

// function HiddenOff(variable1 = dummyElm, variable2 = dummyElm, variable3 = dummyElm, variable4 = dummyElm, variable5 = dummyElm){
//     variable1.classList.remove("d-none");
//     variable2.classList.remove("d-none");
//     variable3.classList.remove("d-none");
//     variable4.classList.remove("d-none");
//     variable5.classList.remove("d-none");
// };

