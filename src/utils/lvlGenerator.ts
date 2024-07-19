import { bombsAlignment } from 'utils';
import type { Cell, Difficulty, Field } from 'types';

type Returned = {
    field: Field
    availableFlags: number
    cellInRow: number
};

const lvlGenerator = (difficulty: Difficulty): Returned => {
    let cellCount = 0;
    let mines = 0;

    switch (difficulty) {
        case 'very easy':
            cellCount = 7;
            mines = 5;
            break;
        case 'easy':
            cellCount = 10;
            mines = 20;
            break;
        case 'normal':
            cellCount = 20;
            mines = 55;
            break;
        case 'hard':
            cellCount = 25;
            mines = 99;
            break;
        case 'impossible':
            cellCount = 30;
            mines = 777;
            break;
        default:
            console.log('aaeaeaeaeaeae');
            break;
    }
    const cellLen = cellCount * cellCount;
    const bombIDs = bombsAlignment(cellLen - 1, mines);
    const cellIDs: number[] = [...Array(cellLen).keys()];
    const arrayField: Field = cellIDs.reduce((acc, cellID) => {
        const cellItem: Cell = { id: cellID, open: false, core: bombIDs.includes(cellID) ? 'bomb' : 0 };
        return { ...acc, [cellID]: cellItem };
    }, {});

    return { field: arrayField, availableFlags: mines, cellInRow: cellCount };
}

export default lvlGenerator;