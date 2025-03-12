const gameboard = (function() {
    let board = [['', '', ''], ['', '', ''], ['', '', '']];
    const printBoard = () => {
        console.log(board.map(row => row.join(" | ")).join("\n-------\n"));
    }
    const updateBoard = (player, row, column) => {
        if (board[row][column]==='') {
            board[row][column] = player;
        }
        else {
            console.log(board[row][column]);
        }
    }
    return {board, printBoard, updateBoard};
})();

gameboard.updateBoard('X', 1, 2);

gameboard.printBoard();