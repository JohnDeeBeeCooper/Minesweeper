import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
    const def = props.func;
    return (
        <Container>
            <Button value='very easy' onClick={def}>ez</Button>
            <Button value='easy' onClick={def}>easy</Button>
            <Button value='normal' onClick={def}>normal</Button>
            <Button value='hard' onClick={def}>hard</Button>
            <Button value='i just wanna die' onClick={def}>ijwd</Button>
        </Container>
    )
}
export default Header;

const Button = styled.button`
    padding: 5px 10px;
    margin: 5px 10px;
`;
const Container = styled.div`
    margin: 0 auto;
    display: block;
`;