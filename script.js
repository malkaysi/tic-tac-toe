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

})();

// A player can select X or O
// Once a player clicks on an a grid item, the content of the grid is replaced with the selected letter

const gameSelection = (() => {
    
})();
