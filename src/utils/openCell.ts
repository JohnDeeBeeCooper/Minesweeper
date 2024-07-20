import { getCellNums } from 'utils';
import type { Field } from "types";

const openCell = (field: Field, cellID: number, cellInRow: number, excludeArray: number[]) => {
    field[cellID].open = true;
    excludeArray.push(cellID);
    if (!field[cellID].core) {
        const squareIDs = getCellNums(cellID, cellInRow, excludeArray);
        squareIDs.forEach((id) => {
            openCell(field, id, cellInRow, excludeArray);
        });
    }
};

export default openCell;