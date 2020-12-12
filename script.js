// Making a tic tac toe game
// We're first going to make a gameboard

// gameboard will be stored as an array inside of a gameboard object
// Think we need to create 9 boxes within an array of the gameBoard

const gameBoard = (() => {
    const boardArray = [];

    // Need to create boxes within html element and loop to create 9 of them
    const container = document.querySelector('#board-container')

    for (i = 0; i <= 8; i++) {
        boardArray['div' + i];

        boardArray['div' + i] = document.createElement('div');
        boardArray['div' + i].setAttribute('id', 'board-item' + i);
        boardArray['div' + i].classList.add('board-item')
        container.appendChild(boardArray['div' + i]);

    }
    console.log(boardArray);

    // They sould be added to the boardArray
})();

// Players are also going to be stored in an object
// And an object to control the flow of the game