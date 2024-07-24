import React from 'react';
import { appDispatch } from 'store';
import { StyledHeader, StyledButton } from './styled';
import { DIFFICULTY } from 'constants/index';
import { Difficulty } from 'types';

const Header: React.FC = () => {
    const dispatch = appDispatch();

    const changeDifficulty = (difficult: Difficulty) => {
        dispatch.field.init(difficult);
    };

    const openAll = () => {
        dispatch.field.openAll();
    };

    return (
        <StyledHeader>
            {DIFFICULTY.map((difficult) => <StyledButton onClick={() => changeDifficulty(difficult)}>{difficult}</StyledButton>)}
            <StyledButton onClick={openAll}>OPEN</StyledButton>
        </StyledHeader>
    )
};

export default Header;