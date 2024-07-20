import styled from 'styled-components';

export const StyledWrapper = styled.div`
    margin: 0 auto;
`;

type ContainerProps = {
    $cellInRow: number
};

export const StyledContainer = styled.div<ContainerProps>`
    background: #bdbdbd;
    padding: 7px;
    border-bottom: solid 2px #707070;
    border-right: solid 2px #707070;
    border-top: solid 2px #fff;
    border-left: solid 2px #fff;
    display: grid;
    grid-template-columns: ${props => `repeat(${props.$cellInRow}, 0.01fr)`};
    grid-auto-rows: 20px;
    grid-column-gap: 0;
`;