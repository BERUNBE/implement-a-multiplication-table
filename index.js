function isStartNumLessThanEndNum(startNum, endNum) {
    if (startNum <= endNum) {
        return true;
    } else {
        return false;
    }
}

function isStartNumAndEndNumWithinRange(startNum, endNum) {
    const isStartNumWithinRange = startNum > 1 && startNum <= 1000;
    const isEndNumWithinRange = endNum > 1 && endNum <= 1000;
    if (isStartNumWithinRange && isEndNumWithinRange) {
        return true;
    } else {
        return false;
    }
}

function createMultiplicationTable(startNum, endNum) {
    if (isStartNumLessThanEndNum(startNum, endNum) && 
        isStartNumAndEndNumWithinRange(startNum, endNum)) {
            let multiplicationTable = "";
            for (let y=startNum; y <= endNum; y++) {
                for (let x=startNum; x <= y; x++) {
                    multiplicationTable += x + '*' + y + '=' + x*y + '  ';
                }
                multiplicationTable = multiplicationTable.trim();
                multiplicationTable += '\n';
            }
        return multiplicationTable.trim();
    } else {
        return null;
    }
}

module.exports = {
    isStartNumLessThanEndNum,
    isStartNumAndEndNumWithinRange,
    createMultiplicationTable
}