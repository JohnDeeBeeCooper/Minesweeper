import React from 'react';
import styled, { css } from 'styled-components';

const Cell = (props) => {
    const { param } = props;
    return (
        <Sq red={param.red} num={param.num} isClosed={param.isClosed} onClick={props.func(props.param.id)}>
            {param.isClosed || param.num === 0 ? null : param.num}
        </Sq>
    )
}
const Sq = styled.td`
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-family: 'Arial Black',Arial,sans-serif;
    font-size: 16px;
    line-height: 16px;
    vertical-align: middle;
    cursor: default;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-color: #bdbdbd;
    border-bottom: solid 2px #7b7b7b;
    border-right: solid 2px #7b7b7b;
    border-top: solid 2px #fff;
    border-left: solid 2px #fff;
    ${props => !props.isClosed && css`
        border-left: solid 1px #7b7b7b;
        border-top: solid 1px #7b7b7b;
        border-bottom: none;
        border-right: none;
        text-align: center;
  `}
    ${props => props.red && css`
    background: red;
  `}
  ${props => {
        switch (props.num) {
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
                break;
        }
    }
}
    :active{
        border: none;
    }
`;
export default Cell;