import React from 'react'
import styled from 'styled-components';
import Cell from './Cell';

const Field = (props) => {
    return (
        <Container>
            <Table>
                <Tbody>
                    {props.array.map(item => <Row>{item.map(a => <Cell func={props.handleChange} key={a.id} param={a} />)}</Row>)}
                </Tbody>
            </Table>
        </Container>
    )
}
const Container = styled.div`
    margin: 0 auto;
`;
const Table = styled.table`
`;
const Row = styled.tr`
`;
const Tbody = styled.tbody`
`;

export default Field;