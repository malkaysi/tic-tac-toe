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

const gameSelection = (() => {

    let playerSelection = 'X';
    let round = 0;
    // let pTwoSelection = 'O';
/*     while((round % 2 == 0 || round == 0) && round < 10){
        playerSelection = 'O';
        round++;
        console.log(round);
    } */

    const boardItems = document.querySelectorAll('.board-item');

    boardItems.forEach((item) => { 
        item.addEventListener('click', (e) => {
            console.log(item.id);
            e.target.textContent = playerSelection; // This adds text content to the clicked on item
        })
    })

    // We have the necessary functions - now we need to alternate between X and O depending on the round



    return {

    }

})();




const Player = (name) => {
    const getName = () => name;

    return { getName }
};
