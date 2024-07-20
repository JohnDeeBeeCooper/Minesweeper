import React from 'react';
import { appDispatch, appSelector } from 'store';
import { Cell as CellType } from 'types';
import { StyledCell } from './styled';

type Props = {
    cellID: number
}

const shallowEqual = (prevCell: CellType, nextCell: CellType) => {
    return prevCell.open === nextCell.open;
};

const Cell: React.FC<Props> = (props) => {
    const dispatch = appDispatch();
    const { cellID } = props;
    const cell = appSelector((state) => state.common.field[cellID], shallowEqual);

    const handleOpen = () => {
        dispatch.common.open(cellID);
    };
    const handleNote = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        console.log('right click');
    };
    return (
        <StyledCell $open={cell.open} $num={Number(cell.core)} onClick={handleOpen} onContextMenu={handleNote}>{cell.open && cell.core || null}</StyledCell>
    );
};

export default Cell;