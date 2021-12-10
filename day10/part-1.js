const fs = require('fs');

fs.readFile('puzzle-input.txt', (error, data) => {
    if(error) throw error;

    const lineArray = data.toString().split('\n');
    
    let errorScore = 0;
    for(const line of lineArray) {
        errorScore += checkLine(line);
    }

    console.log(errorScore);
});

function checkLine(line) {
    const bracketList = [];

    for(let i = 0; i < line.length; ++i) {
        switch(line[i]) {
            case '(':
            case '{':
            case '<':
            case '[':
                // opening
                bracketList.push(line[i]);
                break;
            case ')':
            case '}':
            case '>':
            case ']':
                // closing
                const bracket = bracketList.pop().toString();
                if(bracket != getOpeningBracket(line[i])) {
                    return getScore(line[i]);
                }
                break;
        }
    }
    
    return 0;
}

function getScore(char) {
    switch(char) {
        case ')':
            return 3;
        case ']':
            return 57;
        case '}':
            return 1197;
        case '>':
            return 25137;
        default:
            console.error(`Expected bracket, but found ${char}`);
    }
}

function getOpeningBracket(char) {
    switch(char) {
        case ')':
            return '(';
        case ']':
            return '[';
        case '}':
            return '{';
        case '>':
            return '<';
        default:
            console.error(`Expected bracket, but found ${char}`);
    }
}
