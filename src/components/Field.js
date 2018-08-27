import React from 'react'
import styled from 'styled-components';
import Cell from './Cell';

const Field = (props) => {
    return (
        <Container>
            <tbody>
                {props.array.map(item => <Row>{item.map(a => <Cell func={props.handleChange} key={a.id} param={a} />)}</Row>)}
            </tbody>
        </Container>
    )
}
const Container = styled.table`
`;
const Row = styled.tr`
`;

export default Field;