import React from 'react';
import { Cell as CellType } from 'types';

import { StyledCell } from './styled';

type Props = {
    onOpen: () => void
} & CellType

const Cell: React.FC<Props> = (props) => {
    const { id, onOpen } = props;

    return (
        <StyledCell onClick={onOpen}>{id}</StyledCell>
    );
};

export default Cell;