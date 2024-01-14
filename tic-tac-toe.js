<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <style>
        .board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            gap: 2px;
        }
        .cell {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: bold;
            border: 1px solid #000;
            cursor: pointer;
        }
    </style>
</head>
<body>

<div id="board" class="board"></div>
<script>
    const boardElement = document.getElementById('board');
    const board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        return null;
    }

    function checkDraw() {
        return !board.includes('');
    }

    function handleCellClick(index) {
        if (!gameActive || board[index] !== '') {
            return;
        }

        board[index] = currentPlayer;
        renderBoard();

        const winner = checkWinner();
        if (winner) {
            alert(`Player ${winner} wins!`);
            gameActive = false;
        } else if (checkDraw()) {
            alert("It's a draw!");
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function renderBoard() {
        boardElement.innerHTML = '';
        board.forEach((value, index) => {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = value;
            cell.addEventListener('click', () => handleCellClick(index));
            boardElement.appendChild(cell);
        });
    }

    renderBoard();
</script>

</body>
</html>
