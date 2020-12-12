// Making a tic tac toe game
// We're first going to make a gameboard

// gameboard will be stored as an array inside of a gameboard object
// Think we need to create 9 boxes within an array of the gameBoard

const gameBoard = (() => {
    const boardArray = [];

    // Need to create boxes within html element and loop to create 9 of them
    const container = document.querySelector('#board-container')
    const div = document.createElement('div');
    div.setAttribute('id', 'board-item');
    div.classList.add('board-item')
    container.appendChild(div);
    // They sould be added to the boardArray
})();

// Players are also going to be stored in an object
// And an object to control the flow of the game