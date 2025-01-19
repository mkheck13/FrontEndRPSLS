// Element Id's
let replayBtn = document.getElementById("replayBtn");
let pvp1PlayBtn = document.getElementById('pvp1PlayBtn');

let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');
let lizardBtn = document.getElementById('lizardBtn');
let spockBtn = document.getElementById('spockBtn');

let p1Points = document.getElementById("p1Points");
let p2Points = document.getElementById("p2Points");

let textBox = document.getElementById("textBox");
let turnText = document.getElementById("turnText");

let headToHead;

replayBtn.style.display = 'none';
rockBtn.style.display = "none";
paperBtn.style.display = "none";
scissorsBtn.style.display = "none";
lizardBtn.style.display = "none";
spockBtn.style.display = "none";

// button logic

pvp1PlayBtn.addEventListener('click', function (e) {
    headToHead = true;
    GameOn(4, headToHead);
    pvp1PlayBtn.style.display = "none";
    rockBtn.style.display = "block";
    paperBtn.style.display = "block";
    scissorsBtn.style.display = "block";
    lizardBtn.style.display = "block";
    spockBtn.style.display = "block";
});

function GameOn(totalCount, headToHead) {
    let player1Score = 0;
    let player2Score = 0;

    let player1Input;
    let player2Input;

    Player1Turn();

    ScoreUpdate();

    function ButtonSelect(Player1Turn, input, Method) {
        if (Player1Turn) {
            player1Input = input;
        } else {
            player2Input = input;
        }
        Method();
    };

    function Player1Turn() {
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

    async function Player2Turn() {
        if (headToHead) {
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

        }
    };

    //Swtich cases to see who won
    function GameLogic() {
        textBox.textContent = player1Input;

        if (player1Input !== player2Input) {
            switch (player1Input) {
                case "Rock":
                    switch (player2Input) {
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
                    switch (player2Input) {
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
                    switch (player2Input) {
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
                    switch (player2Input) {
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
                    switch (player2Input) {
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
        } else {
            textBox.textContent += ` and ${player2Input} are the same. That was a tie.`;
        }

        if (player1Score >= totalCount || player2Score >= totalCount) {
            ScoreUpdate();

            if (player1Score > player2Score) {
                turnText.textContent = 'Player One Wins!!!';
            } else {
                turnText.textContent = 'Player Two Wins!!!';
            }
            replayBtn.style.display = 'block';
            rockBtn.style.display = "none";
            paperBtn.style.display = "none";
            scissorsBtn.style.display = "none";
            lizardBtn.style.display = "none";
            spockBtn.style.display = "none";
        } else {
            ScoreUpdate();
            Player1Turn();

            player1Input = '';
            player2Input = '';
        }
    }

    function ScoreUpdate() {
        p1Points.innerText = `Score: ${player1Score}`;
        p2Points.innerText = `Score: ${player2Score}`;

    }
};