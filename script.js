const gameBoard = (() => { // Creates game grid

    let boardArray = [];

    // Need to create boxes within html element and loop to create 9 of them
    const container = document.querySelector('#board-container')

    const createBoard = () => {

        for (i = 0; i <= 8; i++) { // Creates the grid items and board array that includes each item

            boardArray.push('div' + i);
    
            boardArray['div' + i] = document.createElement('div');
            boardArray['div' + i].setAttribute('id', 'board-item' + i);
            boardArray['div' + i].classList.add('board-item')
            container.appendChild(boardArray['div' + i]);
        }
    }

    return {
        createBoard
    };

})();

gameBoard.createBoard();


const gameController = (() => { // Logic for game process

    this.count = 0;

    const init = () => {
        cacheDom();
        bindEvents();
        resetGame();
    }

    const cacheDom = () => { // Grabs the board-item class (grid items)
        this.boardItems = document.querySelectorAll('.board-item');
        this.btn = document.querySelector('#btn');
        this.gameStatus = 'In Progress'; // Tracks life cycle of the game
        // this.div0 = this.boardItems[0].innerText;
    };

    const bindEvents = () => { // Creates the listener to add the player selection

        this.boardItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                selectChoice();
                

                
                if(e.target.textContent && this.gameStatus == 'In Progress') {
                    alert('Something is already here')
                    this.count++;
                } else if(this.gameStatus == 'In Progress') {
                    e.target.textContent = this.playerSelection; // This adds text content to the clicked on item
                    determineWinner();
                }


                this.count++;
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

    const determineWinner = () => { // Checks the grid items to determine if there is a winner

        this.result = [];
        for (i = 0; i <= 8; i++) {

            this.result.push(this.boardItems[i].innerText)

        }

        this.rowOne = this.result[0] + this.result[1] + this.result[2];
        this.rowTwo = this.result[3] + this.result[4] + this.result[5];
        this.rowThree = this.result[6] + this.result[7] + this.result[8];

        this.colOne = this.result[0] + this.result[3] + this.result[6];
        this.colTwo = this.result[1] + this.result[4] + this.result[7];
        this.colThree = this.result[2] + this.result[5] + this.result[8];

        this.diaOne = this.result[0] + this.result[4] + this.result[8];
        this.diaTwo = this.result[2] + this.result[4] + this.result[6];



        if (this.rowOne == 'XXX' || this.rowOne == 'YYY' ||
            this.rowTwo == 'XXX' || this.rowTwo == 'YYY' ||
            this.rowThree == 'XXX' || this.rowThree == 'YYY' ||
            this.colOne == 'XXX' || this.colOne == 'YYY' ||
            this.colTwo == 'XXX' || this.colTwo == 'YYY' ||
            this.colThree == 'XXX' || this.colThree == 'YYY' ||
            this.diaOne == 'XXX' || this.diaOne == 'YYY' ||
            this.diaTwo == 'XXX' || this.diaTwo == 'YYY') {

            setTimeout(function () {
                alert('We have a winner');
            }, 0)

            this.gameStatus = 'Winner'

        }

        if(this.result.indexOf('') == -1 && this.gameStatus != 'Winner'){

            setTimeout(function () {
                alert('Tie Game');
            }, 0);

            this.gameStatus == 'Tie'

        }

    }

    const resetGame = () => {
        this.gameStatus = 'In Progress'

        this.btn.addEventListener('click', () => {
            this.boardItems.forEach((item) => {
                item.textContent = '';
                this.count = 0;
            });
        });
        
    }
    
    console.log(this.count);

    return { init };

})();

gameController.init();

const Player = (name) => {
    const getName = () => name;

    return { getName }
};


// Has to be vs AI or Player first
// If against AI then they are automatically X and AI is O
// If they select PvP then they can input their names and click start game
// Let's start with PvP first, Players can input their names for X and O, then hit start game to begin
