const getCellNums = (cellID: number, cellCount: number, excludeArray: number[]) => {
    const remainder = cellID % cellCount;
    const leftCoordinates = remainder !== 0 ? [-1, cellCount - 1, -cellCount - 1] : [];
    const rightCoordinates = remainder !== cellCount - 1 ? [1, cellCount + 1, 1 - cellCount] : [];
    const squareCoordinates = [...leftCoordinates, -cellCount, cellCount, ...rightCoordinates]
        .map((num: number) => num + cellID)
        .filter((num: number) => num > 0 && num < cellCount * cellCount && !excludeArray.includes(num));
    return squareCoordinates;
};

export default getCellNums;