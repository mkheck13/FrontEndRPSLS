// Element Id's
let replayBtn = document.getElementById('replayBtn');
let cpu1PlayBtn = document.getElementById('cpu1PlayBtn');

let cpu1RockBtn = document.getElementById('cpu1RockBtn');
let cpu1PaperBtn = document.getElementById('cpu1PaperBtn');
let cpu1ScissorsBtn = document.getElementById('cpu1ScissorsBtn');
let cpu1LizardBtn = document.getElementById('cpu1LizardBtn');
let cpu1SpockBtn = document.getElementById('cpu1SpockBtn');

let cpu1P1Points = document.getElementById('cpu1P1Points');
let cpu1P2Points = document.getElementById('cpu1P2Points');

let cpu1TextBox = document.getElementById('cpu1TextBox');
let cpu1TurnText = document.getElementById('cpu1TurnText');

replayBtn.style.display = 'none';
cpu1RockBtn.style.display = "none";
cpu1PaperBtn.style.display = "none";
cpu1ScissorsBtn.style.display = "none";
cpu1LizardBtn.style.display = "none";
cpu1SpockBtn.style.display = "none";

cpu1PlayBtn.addEventListener('click', function (e) {
    CPU1Round(4);
    cpu1PlayBtn.style.display = "none";
    cpu1RockBtn.style.display = "block";
    cpu1PaperBtn.style.display = "block";
    cpu1ScissorsBtn.style.display = "block";
    cpu1LizardBtn.style.display = "block";
    cpu1SpockBtn.style.display = "block";
});

function CPU1Round(endScore) {
    let player1Score = 0;
    let cpuScore = 0;

    let player1Input;
    let cpuInput;

    Player1Turn();

    ScoreUpdate();

    function ButtonSelect(Player1Turn, input, Method) {
        if (Player1Turn) {
            player1Input = input;
        } else {
            cpuInput = input;
        }
        Method();

    };

    function Player1Turn() {
        cpu1TurnText.textContent = 'Player 1 Turn';

        cpu1RockBtn.onclick = function () {
            ButtonSelect(true, "Rock", TurnCPU);
        };
        cpu1PaperBtn.onclick = function () {
            ButtonSelect(true, "Paper", TurnCPU);
        };
        cpu1ScissorsBtn.onclick = function () {
            ButtonSelect(true, "Scissors", TurnCPU);
        };
        cpu1LizardBtn.onclick = function () {
            ButtonSelect(true, "Lizard", TurnCPU);
        };
        cpu1SpockBtn.onclick = function () {
            ButtonSelect(true, "Spock", TurnCPU);
        };


    };

    async function TurnCPU() {
        const promise = await fetch("https://heckermanmrpsls-e2aabgevcsfghrcp.westus-01.azurewebsites.net/RPSLS/RPSLS");
        const data = await promise.text();
        cpuInput = data;
        console.log(data);
        GameLogic();
    };

    function GameLogic() {
        cpu1TextBox.textContent = player1Input;

        if (player1Input !== cpuInput) {
            switch (player1Input) {
                case "Rock":
                    switch (cpuInput) {
                        case "Paper":
                            cpu1TextBox.textContent += ' gets covered by ';
                            cpuScore++;
                            break;

                        case "Scissors":
                            cpu1TextBox.textContent += ' smashes ';
                            player1Score++;
                            break;

                        case "Lizard":
                            cpu1TextBox.textContent += ' crushes ';
                            player1Score++;
                            break;

                        case "Spock":
                            cpu1TextBox.textContent += ' gets vaporized by ';
                            cpuScore++;
                            break;
                    }
                    break;

                case "Paper":
                    switch (cpuInput) {
                        case "Rock":
                            cpu1TextBox.textContent += ' covers ';
                            player1Score++;
                            break;

                        case "Scissors":
                            cpu1TextBox.textContent += ' gets cut by ';
                            cpuScore++;
                            break;

                        case "Lizard":
                            cpu1TextBox.textContent += ' gets eaten by ';
                            cpuScore++;
                            break;

                        case "Spock":
                            cpu1TextBox.textContent += ' disproves ';
                            player1Score++;
                            break;
                    }
                    break;

                case "Scissors":
                    switch (cpuInput) {
                        case "Rock":
                            cpu1TextBox.textContent += ' gets smashed by ';
                            cpuScore++;
                            break;

                        case "Paper":
                            cpu1TextBox.textContent += ' cuts ';
                            player1Score++;
                            break;

                        case "Lizard":
                            cpu1TextBox.textContent += ' decapitates ';
                            player1Score++;
                            break;

                        case "Spock":
                            cpu1TextBox.textContent += ' gets smashed by ';
                            cpuScore++;
                            break;
                    }
                    break;

                case "Lizard":
                    switch (cpuInput) {
                        case "Rock":
                            cpu1TextBox.textContent += ' gets crushed by ';
                            cpuScore++;
                            break;

                        case "Paper":
                            cpu1TextBox.textContent += ' eats ';
                            player1Score++;
                            break;

                        case "Scissors":
                            cpu1TextBox.textContent += ' gets decapitated by ';
                            cpuScore++;
                            break;

                        case "Spock":
                            cpu1TextBox.textContent += ' poisons ';
                            player1Score++;
                            break;
                    }
                    break;

                case "Spock":
                    switch (cpuInput) {
                        case "Rock":
                            cpu1TextBox.textContent += ' vaporizes ';
                            player1Score++;
                            break;

                        case "Paper":
                            cpu1TextBox.textContent += ' gets disproved by ';
                            cpuScore++;
                            break;

                        case "Scissors":
                            cpu1TextBox.textContent += ' smashes ';
                            player1Score++;
                            break;

                        case "Lizard":
                            cpu1TextBox.textContent += ' gets poisoned by ';
                            cpuScore++;
                            break;
                    }
                    break;
            }
            cpu1TextBox.textContent += `${cpuInput}!`
        } else {
            cpu1TextBox.textContent += ` and ${cpuInput} are the same. That was a tie.`;
        }

        if (player1Score >= endScore || cpuScore >= endScore) {
            ScoreUpdate();

            if (player1Score > cpuScore) {
                cpu1TurnText.textContent = "Player One Wins, Game Over";
            } else {
                cpu1TurnText.textContent = "CPU Wins, Game Over";
            }
            replayBtn.style.display = 'block';
            cpu1RockBtn.style.display = "none";
            cpu1PaperBtn.style.display = "none";
            cpu1ScissorsBtn.style.display = "none";
            cpu1LizardBtn.style.display = "none";
            cpu1SpockBtn.style.display = "none";
        } else {
            ScoreUpdate();
            Player1Turn();

            player1Input = "";
            cpuInput = "";
        };
    };

    function ScoreUpdate() {
        cpu1P1Points.innerText = `Score: ${player1Score}`;
        cpu1P2Points.innerText = `Score: ${cpuScore}`;
    };
};