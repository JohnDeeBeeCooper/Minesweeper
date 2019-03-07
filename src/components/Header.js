import React from 'react';
import styled from 'styled-components';

export default (props) => {
    const def = props.func;
    return (
        <Container>
            <Button value='very easy' onClick={def}>ez</Button>
            <Button value='easy' onClick={def}>easy</Button>
            <Button value='normal' onClick={def}>normal</Button>
            <Button value='hard' onClick={def}>hard</Button>
            <Button value='impossible' onClick={def}>impossible</Button>
        </Container>
    )
}

const Button = styled.button`
    padding: 5px 10px;
    margin: 5px 10px;
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
`;