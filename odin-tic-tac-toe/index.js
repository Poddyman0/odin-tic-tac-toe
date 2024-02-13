


document.addEventListener("DOMContentLoaded", function() {    
    let module = (function() {
        function initialisation() {
            renderMove();
            newGame();
            restartMatch();
            addNames()
        }

        initialisation();

        return {

        };
    })();

});


function addNames() {
    document.getElementById('player-x-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var playerName = document.getElementById('player-x-name').value;
        document.getElementById('player-x-name-change').innerText = playerName;
        document.getElementById('player-x-form').reset()
    });
    
    document.getElementById('player-o-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var playerName = document.getElementById('player-o-name').value;
        document.getElementById('player-o-name-change').innerText = playerName;
        document.getElementById('player-o-form').reset()

    });
}

    
let Gameboard = {
    gameboard: [
        {tile: "game-tile-one",
        playedBy: "",
        whatPlayed: ""},
        {tile: "game-tile-two",
        playedBy: "",
        whatPlayed: ""},
        {tile: "game-tile-three",
        playedBy: "",
        whatPlayed: ""},
        {tile: "game-tile-four",
        playedBy: "",
        whatPlayed: ""},
        {tile: "game-tile-five",
        playedBy: "",
        whatPlayed: ""},
        {tile: "game-tile-six",
        playedBy: "",
        whatPlayed: ""},
        {tile: "game-tile-seven",
        playedBy: "",
        whatPlayed: ""},
        {tile: "game-tile-eight",
        playedBy: "",
        whatPlayed: ""},
        {tile: "game-tile-nine",
        playedBy: "",
        whatPlayed: ""}
    ]
}

let playerOneMove = false

function renderMove() {
    Gameboard.gameboard.forEach((tileObject) => {
        const allTiles = document.getElementById(`${tileObject.tile}`)
        allTiles.addEventListener('click', function() {
            if (tileObject.whatPlayed === "") {
                if (playerOneMove) {
                    tileObject.playedBy = "playerOne"
                    tileObject.whatPlayed = "X"
                    document.getElementById(`${tileObject.tile}`).innerHTML = tileObject.whatPlayed;
                    document.getElementById('player-x').style.backgroundColor = "lightblue"
                    document.getElementById('player-o').style.backgroundColor = "antiquewhite"
                    playGame(Gameboard)
                    playerOneMove = !playerOneMove;

                    return Gameboard;
                } else if (!playerOneMove) {
                    tileObject.playedBy = "playerTwo"
                    tileObject.whatPlayed = "O"
                    document.getElementById(`${tileObject.tile}`).innerHTML = tileObject.whatPlayed;
                    document.getElementById('player-o').style.backgroundColor = "lightpink"
                    document.getElementById('player-x').style.backgroundColor = "antiquewhite"
                    playGame(Gameboard)                    
                    playerOneMove = !playerOneMove;
                    return Gameboard;

                }
            }
        
        })
    })
}

let gameScore = {
    playerXOneWins: 0,
    draws: 0,
    playerOTwoWins: 0
};

function playGame(Gameboard) {


        let tileOne = Gameboard.gameboard[0].whatPlayed
        let tileTwo = Gameboard.gameboard[1].whatPlayed
        let tileThree = Gameboard.gameboard[2].whatPlayed
        let tileFour = Gameboard.gameboard[3].whatPlayed
        let tileFive = Gameboard.gameboard[4].whatPlayed
        let tileSix = Gameboard.gameboard[5].whatPlayed
        let tileSeven = Gameboard.gameboard[6].whatPlayed
        let tileEight = Gameboard.gameboard[7].whatPlayed
        let tileNine = Gameboard.gameboard[8].whatPlayed

     
    if (tileOne !== "" && tileTwo !== "" && tileThree !== "" && tileOne === tileTwo && tileTwo === tileThree) {
        if (tileOne === "O") {
            gameScore.playerOTwoWins += 1;
            document.getElementById('player-o-score').innerText = `${gameScore.playerOTwoWins}`
            document.getElementById('player-o').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-one').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-two').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-three').style.backgroundColor = "lightpink"
        } else if (tileOne === "X") {
            gameScore.playerXOneWins += 1;
            document.getElementById('player-x-score').innerText = `${gameScore.playerXOneWins}`
            document.getElementById('player-x').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-one').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-two').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-three').style.backgroundColor = "lightblue"

        }
    } else if (tileFour !== "" && tileFive !== "" && tileSix !== "" && tileFour === tileFive && tileFive === tileSix) {
        if (tileFour === "O") {
            gameScore.playerOTwoWins += 1;
            document.getElementById('player-o-score').innerText = `${gameScore.playerOTwoWins}`
            document.getElementById('player-o').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-four').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-five').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-six').style.backgroundColor = "lightpink"
        } else if (tileFour === "X") {
            gameScore.playerXOneWins += 1;
            document.getElementById('player-x-score').innerText = `${gameScore.playerXOneWins}`
            document.getElementById('player-x').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-four').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-five').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-six').style.backgroundColor = "lightblue"
        }
    } else if (tileSeven !== "" && tileEight !== "" && tileNine !== "" && tileSeven === tileEight && tileEight === tileNine) {
        if (tileSeven === "O") {
            gameScore.playerOTwoWins += 1;
            document.getElementById('player-o-score').innerText = `${gameScore.playerOTwoWins}`
            document.getElementById('player-o').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-seven').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-eight').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-nine').style.backgroundColor = "lightpink"
        } else if (tileSeven === "X") {
            gameScore.playerXOneWins += 1;
            document.getElementById('player-x-score').innerText = `${gameScore.playerXOneWins}`
            document.getElementById('player-x').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-seven').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-eight').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-nine').style.backgroundColor = "lightblue"
        }
    } else if (tileOne !== "" && tileFour !== "" && tileSeven !== "" && tileOne === tileFour && tileFour === tileSeven) {
        if (tileOne === "O") {
            gameScore.playerOTwoWins += 1;
            document.getElementById('player-o-score').innerText = `${gameScore.playerOTwoWins}`
            document.getElementById('player-o').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-one').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-four').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-seven').style.backgroundColor = "lightpink"
        } else if (tileOne === "X") {
            gameScore.playerXOneWins += 1;
            document.getElementById('player-x-score').innerText = `${gameScore.playerXOneWins}`
            document.getElementById('player-x').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-one').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-four').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-seven').style.backgroundColor = "lightblue"
        }
    } else if (tileTwo !== "" && tileFive !== "" && tileEight !== "" && tileTwo === tileFive && tileFive === tileEight) {
        if (tileTwo === "O") {
            gameScore.playerOTwoWins += 1;
            document.getElementById('player-o-score').innerText = `${gameScore.playerOTwoWins}`
            document.getElementById('player-o').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-two').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-five').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-eight').style.backgroundColor = "lightpink"
        } else if (tileTwo === "X") {
            gameScore.playerXOneWins += 1;
            document.getElementById('player-x-score').innerText = `${gameScore.playerXOneWins}`
            document.getElementById('player-x').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-two').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-five').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-eight').style.backgroundColor = "lightblue"
        }
    } else if (tileThree !== "" && tileSix !== "" && tileNine !== "" && tileThree === tileSix && tileSix === tileNine) {
        if (tileThree === "O") {
            gameScore.playerOTwoWins += 1;
            document.getElementById('player-o-score').innerText = `${gameScore.playerOTwoWins}`
            document.getElementById('player-o').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-three').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-six').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-nine').style.backgroundColor = "lightpink"
        } else if (tileThree === "X") {
            gameScore.playerXOneWins += 1;
            document.getElementById('player-x-score').innerText = `${gameScore.playerXOneWins}`
            document.getElementById('player-x').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-three').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-six').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-nine').style.backgroundColor = "lightblue"
        }
    } else if (tileOne !== "" && tileFive !== "" && tileNine !== "" && tileOne === tileFive && tileFive === tileNine) {
        if (tileOne === "O") {
            gameScore.playerOTwoWins += 1;
            document.getElementById('player-o-score').innerText = `${gameScore.playerOTwoWins}`
            document.getElementById('player-o').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-one').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-five').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-nine').style.backgroundColor = "lightpink"
        } else if (tileOne === "X") {
            gameScore.playerXOneWins += 1;
            document.getElementById('player-x-score').innerText = `${gameScore.playerXOneWins}`
            document.getElementById('player-x').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-one').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-five').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-nine').style.backgroundColor = "lightblue"
        }
    } else if (tileThree !== "" && tileFive !== "" && tileSeven !== "" && tileThree === tileFive && tileFive === tileSeven) {
        if (tileThree === "O") {
            gameScore.playerOTwoWins += 1;
            document.getElementById('player-o-score').innerText = `${gameScore.playerOTwoWins}`
            document.getElementById('player-o').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-three').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-five').style.backgroundColor = "lightpink"
            document.getElementById('game-tile-seven').style.backgroundColor = "lightpink"
        } else if (tileThree === "X") {
            gameScore.playerXOneWins += 1;
            document.getElementById('player-x-score').innerText = `${gameScore.playerXOneWins}`
            document.getElementById('player-x').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-three').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-five').style.backgroundColor = "lightblue"
            document.getElementById('game-tile-seven').style.backgroundColor = "lightblue"
        }
    } else if (tileOne !== "" && tileTwo !== "" && tileThree !== "" && tileFour !== "" && tileFive !== "" && tileSix !== "" && tileSeven !=="" && tileEight !=="" && tileNine !== "") {
            gameScore.draws += 1;
            document.getElementById('draws-num').innerText = `${gameScore.draws}`
            document.getElementById('draws').style.backgroundColor = 'red'
            document.getElementById('game-tile-one').style.backgroundColor = 'red'
            document.getElementById('game-tile-two').style.backgroundColor = 'red'
            document.getElementById('game-tile-three').style.backgroundColor = 'red'
            document.getElementById('game-tile-four').style.backgroundColor = 'red'
            document.getElementById('game-tile-five').style.backgroundColor = 'red'
            document.getElementById('game-tile-six').style.backgroundColor = 'red'
            document.getElementById('game-tile-seven').style.backgroundColor = 'red'
            document.getElementById('game-tile-eight').style.backgroundColor = 'red'
            document.getElementById('game-tile-nine').style.backgroundColor = 'red'
            document.getElementById('player-o').style.backgroundColor = "antiquewhite"
            document.getElementById('player-x').style.backgroundColor = "antiquewhite"



    }
}

function newGame() {
    document.getElementById('restart-game').addEventListener('click', function() {
        Gameboard.gameboard.forEach((tileObject) => {
                document.getElementById(`${tileObject.tile}`).innerHTML = "";
                document.getElementById(`${tileObject.tile}`).style.backgroundColor = "antiquewhite";
                tileObject.playedBy = ""
                tileObject.whatPlayed = ""
                gameScore.playerOTwoWins = 0;
                gameScore.playerXOneWins = 0;
                gameScore.draws = 0;
                document.getElementById('player-x-score').innerHTML = ""
                document.getElementById('player-x').style.backgroundColor = "antiquewhite"
                document.getElementById('player-o-score').innerHTML = ""
                document.getElementById('player-o').style.backgroundColor = "antiquewhite"
                document.getElementById('draws-num').innerHTML = ""
                document.getElementById('draws').style.backgroundColor = 'antiquewhite'
                document.getElementById('player-x-name-change').innerText = "";
                document.getElementById('player-o-name-change').innerText = "";


                

        })
    })
}

function restartMatch() {
    document.getElementById('restart-match').addEventListener('click', function() {
        Gameboard.gameboard.forEach((tileObject) => {
                document.getElementById(`${tileObject.tile}`).innerHTML = "";
                document.getElementById(`${tileObject.tile}`).style.backgroundColor = "antiquewhite";
                tileObject.playedBy = ""
                tileObject.whatPlayed = ""
                document.getElementById('player-x').style.backgroundColor = "antiquewhite"
                document.getElementById('player-o').style.backgroundColor = "antiquewhite"
                document.getElementById('draws').style.backgroundColor = 'antiquewhite'



        })
    })
}





