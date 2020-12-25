const gameBoard = (() => {

    let boardArray = [];

    // Need to create boxes within html element and loop to create 9 of them
    const container = document.querySelector('#board-container')

    for (i = 0; i <= 8; i++) { // Creates the grid items and board array that includes each item

        boardArray.push('div' + i);

        boardArray['div' + i] = document.createElement('div');
        boardArray['div' + i].setAttribute('id', 'board-item' + i);
        boardArray['div' + i].classList.add('board-item')
        container.appendChild(boardArray['div' + i]);

    }

    return {
        boardArray
    };

})();


const gameController = (() => {

    this.count = 0;

    const init = () => {
        cacheDom();
        bindEvents();
        determineWinner();
    }

    const cacheDom = () => { // Grabs the board-item class (grid items)
        this.boardItems = document.querySelectorAll('.board-item');
    };

    const bindEvents = () => { // Creates the listener to add the player selection

        this.boardItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                selectChoice();

                if (this.count >= 9) {
                    alert('Game Over');
                } else {
                    e.target.textContent = this.playerSelection; // This adds text content to the clicked on item
                }

                this.count++;
                console.log(this.winningCombinations);
            })
        })

    };

    const selectChoice = () => { // Alternates between X and Y depending on the count/round

        if (this.count % 2 == 0 || this.count == 0) {
            this.playerSelection = 'X'
        } else {
            this.playerSelection = 'Y'
        };

    }

    const determineWinner = () => {

        this.winningCombinations = [(this.boardItems[0].textContent + this.boardItems[1].textContent)];
        
    }

    

    return { init };

})();

gameController.init();

const Player = (name) => {
    const getName = () => name;

    return { getName }
};
