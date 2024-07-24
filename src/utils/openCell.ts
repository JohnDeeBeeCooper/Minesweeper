import { getCellNums } from 'utils';
import type { Field } from "types";

const openCell = (field: Field, cellID: number, cellInRow: number, excludeArray: number[]): Field => {
    const cell = field[cellID];
    let newField = field.with(cellID, { ...cell, open: true });

    excludeArray.push(cellID);

    if (!cell.core && !cell.isBoom) {
        const squareIDs = getCellNums(cellID, cellInRow, excludeArray);
        squareIDs.forEach((id) => {
            newField = openCell(newField, id, cellInRow, excludeArray);
        });
    }
    return newField;
};

export default openCell;