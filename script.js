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

const Player = (name) => {

    return { name };
};


const gameController = (() => { // Logic for game process

    this.count = 0;
    const player1 = Player('');
    const player2 = Player('');

    const init = () => {
        cacheDom();
        bindEvents();
    }

    const cacheDom = () => { // Grabs the board-item class (grid items)
        this.boardItems = document.querySelectorAll('.board-item');
        this.btn = document.querySelector('#btn');
        this.gameStatus = 'In Progress'; // Tracks life cycle of the game
        this.playerBtn = document.querySelector('#playerbtn');
        this.container = document.querySelector('#container');
    };

    const bindEvents = () => { // Creates the listener to add the player selection

        this.boardItems.forEach((item) => { // Controls gameplay
            item.addEventListener('click', (e) => {

                if (e.target.textContent && this.gameStatus == 'In Progress') {
                    alert('Something is already here')
                    this.count++;
                } else if (this.gameStatus == 'In Progress') {
                    selectChoice();
                    e.target.textContent = this.playerSelection; // This adds text content to the clicked on item
                    determineWinner();
                }


                this.count++;
            })
        })

        this.playerBtn.addEventListener('click', () => { // Sets players names

            player1.name = document.querySelector('#playerOne').value;
            player2.name = document.querySelector('#playerTwo').value;

        })

        this.btn.addEventListener('click', () => { // Reset game button
            this.gameStatus = 'In Progress'
            this.boardItems.forEach((item) => {
                item.textContent = '';
                this.count = 0;
            });
        });

    };


    const selectChoice = () => { // Alternates between X and Y depending on the count/round

        const content = document.createElement('div');
        content.setAttribute('id', 'playerUpdate');



        if (this.count % 2 == 0 || this.count == 0) {
            this.playerSelection = 'X'
            content.textContent = player1.name + "'s" + " turn!";
            this.container.appendChild(content);
        } else {
            this.playerSelection = 'Y'
            content.textContent = player2.name + "'s" + " turn!";
            container.appendChild(content);
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

        this.conditions = [];

        this.conditions.push(this.rowOne == 'XXX');
        this.conditions.push(this.rowOne == 'YYY');
        this.conditions.push(this.rowTwo == 'XXX');
        this.conditions.push(this.rowTwo == 'YYY');
        this.conditions.push(this.rowThree == 'XXX');
        this.conditions.push(this.rowThree == 'YYY');
        this.conditions.push(this.colOne == 'XXX');
        this.conditions.push(this.colOne == 'YYY');
        this.conditions.push(this.colTwo == 'XXX');
        this.conditions.push(this.colTwo == 'YYY');
        this.conditions.push(this.colThree == 'XXX');
        this.conditions.push(this.colThree == 'YYY');
        this.conditions.push(this.diaOne == 'XXX');
        this.conditions.push(this.diaOne == 'YYY');
        this.conditions.push(this.diaTwo == 'XXX');
        this.conditions.push(this.diaTwo == 'YYY');

        for (i = 0; i < this.conditions.length; i++) {
            if (this.conditions[i]) {
                setTimeout(function () {
                    alert('We have a winner: ' + this.playerSelection);
                }, 0)

                this.gameStatus = 'Winner'
            }
        }


        if (this.result.indexOf('') == -1 && this.gameStatus != 'Winner') {

            setTimeout(function () {
                alert('Tie Game');
            }, 0);

            this.gameStatus == 'Tie'

        }

    }

    return { init };

})();

gameController.init();
