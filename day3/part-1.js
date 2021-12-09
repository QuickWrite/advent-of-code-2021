const fs = require('fs');

fs.readFile('puzzle-input.txt', (error, data) => {
    if(error) throw error;

    const bits = data.toString().split('\n');

    const ones = createFilledArray(bits[0].length);
    const zeros = createFilledArray(bits[0].length);

    for(const binData of bits) {
        for(let i = 0; i < binData.length - 1; ++i) {
            if(binData[i] === '0') {
                zeros[i]++;
                continue;
            }

            if(binData[i] === '1') {
                ones[i]++;
            } else {
                console.log(`Different: ${binData}`);
            }
        }
    }

    let gamma = 0;
    let epsilon = 0;
    for(let i = 0; i < ones.length - 1; ++i) {
        const power = Math.pow(2, ones.length - 1 - (i + 1));


        console.log(`${ones[i]} > ${zeros[i]}`);

        if(ones[i] > zeros[i]) {
            gamma += power;
            continue;
        }

        epsilon += power;
    }

    console.log(gamma);
    console.log(epsilon);

    console.log(gamma * epsilon);
});

function createFilledArray(size) {
    const array = [];

    for(let i = 0; i < size; ++i) {
        array[i] = 0;
    }

    return array;
}
