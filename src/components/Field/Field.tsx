import React from 'react';
import { appSelector } from 'store';
import { Cell } from 'components';
import { StyledContainer, StyledWrapper } from './styled';

const Field: React.FC = () => {
    const field = appSelector((state) => state.common.field);
    const cellInRow = appSelector((state) => state.common.cellInRow);

    const onOpen = () => {

    };

    return (
        <StyledWrapper>
            <StyledContainer cellInRow={cellInRow}>
                {Object.values(field).map((cell) => <Cell onOpen={onOpen} {...cell} />)}
            </StyledContainer>
        </StyledWrapper>

    );
};

export default Field;