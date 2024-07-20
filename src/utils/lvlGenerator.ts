import { bombsAlignment, getCellNums } from 'utils';
import type { Cell, Difficulty, Field } from 'types';
import type { CommonStore } from 'store/models/common';

type Returned = Pick<CommonStore, 'availableFlags' | 'cellInRow' | 'field'>;

const lvlGenerator = (difficulty: Difficulty): Returned => {
    let cellInRow = 0;
    let mines = 0;

    switch (difficulty) {
        case 'very easy':
            cellInRow = 7;
            mines = 5;
            break;
        case 'easy':
            cellInRow = 10;
            mines = 20;
            break;
        case 'normal':
            cellInRow = 20;
            mines = 55;
            break;
        case 'hard':
            cellInRow = 25;
            mines = 99;
            break;
        case 'impossible':
            cellInRow = 30;
            mines = 777;
            break;
        default:
            console.log('aaeaeaeaeaeae');
            break;
    }
    const cellLen = cellInRow * cellInRow;
    const bombIDs = bombsAlignment(cellLen - 1, mines);
    const cellIDs: number[] = [...Array(cellLen).keys()];

    const field: Field = cellIDs.reduce((acc, cellID) => {
        const cellItem: Cell = { id: cellID, open: false, core: 0, isBoom: bombIDs.includes(cellID) };
        return { ...acc, [cellID]: cellItem };
    }, {});

    bombIDs.forEach((id) => {
        const incrementCellIDs = getCellNums(id, cellInRow, bombIDs);
        incrementCellIDs.forEach((cellID) => {
            field[cellID].core += 1;
        });
    });
    return { field, availableFlags: mines, cellInRow };
}

export default lvlGenerator;