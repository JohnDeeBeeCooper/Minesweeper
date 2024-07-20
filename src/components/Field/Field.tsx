import React from 'react';
import { appSelector } from 'store';
import { Cell } from 'components';
import { StyledContainer, StyledWrapper } from './styled';

const shallowEqual = (prevField: string[], nextField: string[]) => {
    return prevField.length === nextField.length;
};

const Field: React.FC = () => {
    const field = appSelector((state) => Object.keys(state.common.field), shallowEqual);
    const cellInRow = appSelector((state) => state.common.cellInRow);

    return (
        <StyledWrapper>
            <StyledContainer $cellInRow={cellInRow}>
                {Object.keys(field).map((cellID) => <Cell key={cellID} cellID={Number(cellID)} />)}
            </StyledContainer>
        </StyledWrapper>

    );
};

export default Field;