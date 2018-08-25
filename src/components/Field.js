import React from 'react'
import styled from 'styled-components';
import Cell from './Cell';

const Field = (props) => {
    return (
        <Container>
            {props.array.map(item => <Cell param={item} />)}
        </Container>
    )
}
const Container = styled.div`
    display: block;
`;

export default Field;