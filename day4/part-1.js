const fs = require('fs')

fs.readFile('puzzle-input.txt', (error, data) => {
    if(error) throw error;

    let input = data.toString().split("\n");

    let numbers = input[0].split(',').map(Number);

    let boards = [];
    input.shift();
    input.shift();

    while(input.length > 0){
        boards.push(readBoard(input, boards));
        input.shift();
    }

    outerLoop: for(var number of numbers){
        for(var board of boards){
            for(let row = 0; row < 5;row++){
                for(let column = 0; column < 5;column++){
                    if(board[row][column] == number){
                        board[row][column] = null;
                        if(isWinningBoard(board, row, column)){
                            break outerLoop;
                        }
                    }
                }
            }
        }
    }

    console.log(board, sumBoard(board), sumBoard(board)*number);
});

function readBoard(data, boards){
    let board = [];
    for(let i = 0;i<5;i++){
        let line = data[0].match(/(-?\d)+/g);
        let lineNumber = line.map(Number);
        board.push(lineNumber);
        data.shift();
    }

    return board;
}


function isWinningBoard(board, rowRemoved, columnRemoved){
    if(board[rowRemoved].every((item)=> item === null)){
        return true;
    }
    for(let rowCheck = 0 ; rowCheck < 5;rowCheck++){
        if(board[rowCheck][columnRemoved] !== null) return false;
    }
    return true;
}

function sumBoard(board){
    let sum = 0;
    board.map((row) => {
        row.map((value) => {
            if(value !== null){
                sum+=value;
            }
        })
    })
    return sum;
}
