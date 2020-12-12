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
    return {
        boardArray
    };

})();

// A player can select X or O
// Once a player clicks on an a grid item, the content of the grid is replaced with the selected letter

const gameSelection = (() => {

    const selectionArray = [];
    const container = document.querySelector('#selection-container')

    for (i = 0; i <= 1; i++) {
        selectionArray['div' + i];

        selectionArray['div' + i] = document.createElement('div');
        selectionArray['div' + i].setAttribute('id', 'selection-item' + i);
        selectionArray['div' + i].classList.add('selection-item')
        container.appendChild(selectionArray['div' + i]);

    }

    document.querySelector('#selection-item0').textContent = 'O';
    document.querySelector('#selection-item1').textContent = 'X';

})();
