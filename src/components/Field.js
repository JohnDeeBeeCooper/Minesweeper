import React from 'react'
import styled, { css } from 'styled-components';
import Cell from './Cell';

const Field = (props) => {
    return (
        <Wrapper>
            <Container>
                <Table gameOver={props.theEnd}>
                    <Tbody>
                        {props.array.map(item => <Row>{item.map(a => <Cell flagOn={props.flagOn} func={props.handleChange} key={a.id} param={a} />)}</Row>)}
                    </Tbody>
                </Table>
            </Container>
        </Wrapper>
    )
}
const Container = styled.div`
    background: #bdbdbd;
    padding: 7px;
    border-bottom: solid 2px #707070;
    border-right: solid 2px #707070;
    border-top: solid 2px #fff;
    border-left: solid 2px #fff;
    display: block;
`;
const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`;
const Table = styled.table`
    border-bottom: solid 2px #fff;
    border-right: solid 2px #fff;
    border-top: solid 2px #7b7b7b;
    border-left: solid 2px #7b7b7b;
    border-spacing: 0px;
    ${props => props.gameOver && css`
    pointer-events: none;
    cursor: default;`}
`;
const Row = styled.tr`
`;
const Tbody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
`;
export default Field;