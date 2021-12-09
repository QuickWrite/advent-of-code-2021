const fs = require('fs');

fs.readFile('puzzle-input.txt', (error, data) => {
    if(error) throw error;

    const instructions = data.toString().split('\n');

    let horizontal = 0;
    let aim = 0;
    let depth = 0;

    for(const instruction of instructions) {
        const instructionValues = instruction.split(' ');

        const value = parseInt(instructionValues[1]);

        switch(instructionValues[0]) {
            case 'forward':
                horizontal += value;
                depth += aim * value;
                break;
            case 'up':
                aim -= value;
                break;
            case 'down':
                aim += value;
                break;
            default:
                console.error(`Expected <forward|up|down>, but got ${instructionValues[0]}`);
                break;
        }
    }

    console.log(horizontal * depth);
});
