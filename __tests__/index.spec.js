const index = require('../index');
const isStartNumLessThanEndNum = index.isStartNumLessThanEndNum;
const isStartNumAndEndNumWithinRange = index.isStartNumAndEndNumWithinRange;
const createMultiplicationTable = index.createMultiplicationTable;

it ('should return true when start num is less than end num', () => {
    const startNum = 2;
    const endNum = 3;
    let result = isStartNumLessThanEndNum(startNum, endNum);
    expect(result).toBe(true);
});

it ('should return false when start num is greater than end num', () => {
    const startNum = 3;
    const endNum = 2;
    let result = isStartNumLessThanEndNum(startNum, endNum);
    expect(result).toBe(false);
});

it ('should return true when start num is equal to end num', () => {
    const startNum = 2;
    const endNum = 2;
    let result = isStartNumLessThanEndNum(startNum, endNum);
    expect(result).toBe(true);
});

it ('should return true when start num and end num is greater than 1', () => {
    const startNum = 2;
    const endNum = 2;
    let result = isStartNumAndEndNumWithinRange(startNum, endNum);
    expect(result).toBe(true);
});

it ('should return true when start num and end num is 1000', () => {
    const startNum = 1000;
    const endNum = 1000;
    let result = isStartNumAndEndNumWithinRange(startNum, endNum);
    expect(result).toBe(true);
});

it ('should return false when start num and end num is 1', () => {
    const startNum = 1;
    const endNum = 1;
    let result = isStartNumAndEndNumWithinRange(startNum, endNum);
    expect(result).toBe(false);
});

it ('should return false when start num and end num is less than 1', () => {
    const startNum = 0;
    const endNum = 0;
    let result = isStartNumAndEndNumWithinRange(startNum, endNum);
    expect(result).toBe(false);
});

it ('should return false when start num and end num is greater than 1000', () => {
    const startNum = 1001;
    const endNum = 1001;
    let result = isStartNumAndEndNumWithinRange(startNum, endNum);
    expect(result).toBe(false);
});

it ('should return null when parameters not within range', () => {
    const startNum = 1001;
    const endNum = 1001;
    let result = createMultiplicationTable(startNum, endNum);
    expect(result).toBe(null);
});

it ('should return null when start num is greater than end num', () => {
    const startNum = 3;
    const endNum = 2;
    let result = createMultiplicationTable(startNum, endNum);
    expect(result).toBe(null);
});

it ('should return multiplication table', () => {
    const startNum = 2;
    const endNum = 4;
    let result = createMultiplicationTable(startNum, endNum);
    let expected =  '2*2=4\n' +
                    '2*3=6  3*3=9\n' +
                    '2*4=8  3*4=12  4*4=16';
    expect(result).toBe(expected);
});