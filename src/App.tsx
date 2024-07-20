import React from 'react';
import { Header, Field } from 'components';
import { styled } from 'styled-components';

const App: React.FC = () => {
    return (
        <Container>
            <Header />
            <Field />
        </Container>
    );
};

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    gap: 32px 0;
    max-width: 960px;
    user-select: none;
`;

export default App;

