import React from 'react';
import { appDispatch } from 'store';
import { StyledHeader, StyledButton } from './styled';

const Header: React.FC = () => {
    const dispatch = appDispatch();

    const changeDifficulty = (e: React.FormEvent<HTMLButtonElement>) => {
        dispatch.common.init(e.currentTarget.value);
    };

    return (
        <StyledHeader>
            <StyledButton value='very easy' onClick={changeDifficulty}>ez</StyledButton>
            <StyledButton value='easy' onClick={changeDifficulty}>easy</StyledButton>
            <StyledButton value='normal' onClick={changeDifficulty}>normal</StyledButton>
            <StyledButton value='hard' onClick={changeDifficulty}>hard</StyledButton>
            <StyledButton value='impossible' onClick={changeDifficulty}>impossible</StyledButton>
        </StyledHeader>
    )
};

export default Header;