import styled, { css } from 'styled-components';

type StyledCellProps = {
    $open: boolean
    $num: number
    $isExploded?: boolean
};

export const StyledCore = styled.div<StyledCellProps>`
    display: ${(props) => props.$open ? 'flex' : 'none'}
`;
export const StyledCell = styled.div<StyledCellProps>`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-family: 'Arial Black', Arial, sans-serif;
    font-size: 16px;
    text-align: center;
    line-height: 20px;
    vertical-align: middle;
    cursor: default;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-color: #bdbdbd;
    border: solid 2px #7b7b7b;
    border-right: solid 2px #7b7b7b;
    border-top: solid 2px #fff;
    border-left: solid 2px #fff;
    ${props => props.$isExploded && css`
        background-color: red;    
    `}
    ${props => props.$open && css`
        border-left: solid 1px #7b7b7b;
        border-top: solid 1px #7b7b7b;
        border-bottom: none;
        border-right: none;
  `};
    ${props => {
        if (props.$open && props.$num > 0) {
            switch (props.$num) {
                case 1:
                    return css`color: blue`;
                case 2:
                    return css`color: green`;
                case 3:
                    return css`color: red`;
                case 4:
                    return css`color: purple`;
                case 5:
                    return css`color: maroon`;
                case 6:
                    return css`color: turquoise`;
                case 7:
                    return css`color: black`;
                case 8:
                    return css`color: gray`;
                default:
                    css`color: gray`
                    break;
            }
        }
    }
    };
    :active {
        border: none;
    }
`;