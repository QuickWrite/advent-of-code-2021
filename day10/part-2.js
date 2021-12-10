const fs = require('fs');

fs.readFile('puzzle-input.txt', (error, data) => {
    if(error) throw error;

    const lineArray = data.toString().split('\n');
    
    let scores = [];
    for(const line of lineArray) {
        const lineValue = checkLine(line)

        if(lineValue !== 0) {
            scores.push(lineValue);
        }
    }

    scores = scores.sort((a, b) => a - b);

    console.log(scores[Math.floor(scores.length / 2)]);
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
                    return 0;
                }
                break;
        }
    }

    return generateCompletionScore(bracketList);
}

function generateCompletionScore(array) {
    let score = 0;

    for(let i = array.length - 1; i >= 0; i--) {
        let value = 0;

        switch(array[i]) {
            case '(':
                value = 1;
                break;
            case '[':
                value = 2;
                break;
            case '{':
                value = 3;
                break;
            case '<':
                value = 4;
                break;
            default:
                console.error(`Expected bracket, but found ${array[i]}`);
                break;
        }

        score = score * 5 + value;
    }

    return score;
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
