const fs = require('fs');

fs.readFile('puzzle-input.txt', (error, data) => {
    if(error) throw error;

    const numberArray = data.toString().split('\n');
    
    let count = 0;

    for(let i = 1; i < numberArray.length - 2; ++i) {
        const firstMeasurement = getThreeMeasurement(numberArray, i);
        const secondMeasurement = getThreeMeasurement(numberArray, i + 1);

        if(firstMeasurement < secondMeasurement)
            count++;
    }

    console.log(count);
});

function getThreeMeasurement(array, center) {
    return parseInt(array[center - 1]) + 
           parseInt(array[center]) +
           parseInt(array[center + 1]);
}
