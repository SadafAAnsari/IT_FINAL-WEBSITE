document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const width = 8;
    const candyColors = ['red', 'yellow', 'green', 'blue'];
    let candies = [];

    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const candy = document.createElement('div');
            let randomColor = Math.floor(Math.random() * candyColors.length);
            candy.classList.add('candy');
            candy.classList.add(candyColors[randomColor]);
            candy.setAttribute('draggable', true);
            candy.setAttribute('id', i);
            gameBoard.appendChild(candy);
            candies.push(candy);
        }
    }

    createBoard();

    // Dragging functionality
    let candyBeingDragged;
    let candyBeingReplaced;

    candies.forEach(candy => candy.addEventListener('dragstart', dragStart));
    candies.forEach(candy => candy.addEventListener('dragend', dragEnd));
    candies.forEach(candy => candy.addEventListener('dragover', dragOver));
    candies.forEach(candy => candy.addEventListener('dragenter', dragEnter));
    candies.forEach(candy => candy.addEventListener('dragleave', dragLeave));
    candies.forEach(candy => candy.addEventListener('drop', dragDrop));

    function dragStart() {
        candyBeingDragged = this;
    }

    function dragEnd() {
        // Get valid moves
        let validMoves = [
            parseInt(candyBeingDragged.id) - 1,
            parseInt(candyBeingDragged.id) - width,
            parseInt(candyBeingDragged.id) + 1,
            parseInt(candyBeingDragged.id) + width
        ];

        let validMove = validMoves.includes(parseInt(candyBeingReplaced.id));
        if (validMove) {
            candyBeingReplaced = null;
        } else if (candyBeingReplaced) {
            let temp = candyBeingDragged.style.backgroundColor;
            candyBeingDragged.style.backgroundColor = candyBeingReplaced.style.backgroundColor;
            candyBeingReplaced.style.backgroundColor = temp;
        }
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
    }

    function dragLeave() { }

    function dragDrop() {
        candyBeingReplaced = this;
    }

    function checkForMatches() {
        // Check for rows and columns of three or more
    }

    window.setInterval(function() {
        checkForMatches();
    }, 100);
});
