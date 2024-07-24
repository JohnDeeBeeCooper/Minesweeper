import React from 'react';
import { appDispatch, appSelector } from 'store';
import { Cell } from 'components';
import { StyledContainer, StyledHeader, StyledWrapper } from './styled';

const Field: React.FC = () => {
    const dispatch = appDispatch();

    const field = appSelector((state) => state.field.field);
    const explodedID = appSelector((state) => state.field.explodedID);
    const cellInRow = appSelector((state) => state.field.cellInRow);
    const end = appSelector((state) => state.common.end);

    const onOpen = (index: number) => (e: React.SyntheticEvent<HTMLDivElement>) => {
        e.preventDefault();
        dispatch.field.open(index);
    };

    const onNote = (index: number) => (e: React.SyntheticEvent<HTMLDivElement>) => {
        e.preventDefault();
        dispatch.field.note(index);
    };

    return (
        <StyledWrapper>
            <StyledHeader>test</StyledHeader>
            <StyledContainer $cellInRow={cellInRow}>
                {field.map((cell, idx) =>
                    <Cell
                        key={`cell-${idx}`}
                        forceOpen={end || Boolean(explodedID)}
                        isExploded={explodedID === idx}
                        onClick={onOpen(idx)}
                        onRightClick={onNote(idx)}
                        {...cell}
                    />)}
            </StyledContainer>
        </StyledWrapper>

    );
};

export default Field;