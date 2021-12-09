const fs = require('fs');

fs.readFile('puzzle-input.txt', (error, data) => {
    if(error) throw error;

    const numberArray = data.toString().split('\n');
    
    let count = 0;

    for(let i = 1; i < numberArray.length; ++i) {
        if(parseInt(numberArray[i]) > parseInt(numberArray[i - 1]))
            count++;
    }

    console.log(count);
});
