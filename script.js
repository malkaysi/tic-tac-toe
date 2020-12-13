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

    return{
        selectionArray
    }

})();

const game = gameBoard.boardArray;
// const selection = gameSelection.selectionArray;

const Game = (game) => {
    
    const playerSelection = pSelection =>{
        pSelection = document.querySelector('selection-item');
        pSelection.addEventListener('click', (e) => {
            let selection = e.target.textContent;
            console.log(selection);
        })
    }

};

// Object to control the flow of the game
// You must first select from the selection array
// Then you can click on a tile on the board
// The text from the 