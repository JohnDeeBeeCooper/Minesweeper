import React from 'react'
import styled, { css } from 'styled-components';
import Cell from './Cell';

const Field = (props) => {
    return (
        <Container>
            <Table gameOver={props.theEnd}>
                <Tbody>
                    {props.array.map(item => <Row>{item.map(a => <Cell func={props.handleChange} key={a.id} param={a} />)}</Row>)}
                </Tbody>
            </Table>
        </Container>
    )
}
const Container = styled.div`
`;
const Table = styled.table`
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