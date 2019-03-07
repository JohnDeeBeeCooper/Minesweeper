import React from 'react'
import styled, { css } from 'styled-components';
import Cell from './Cell';

export default (props) => {
    return (
        <Wrapper>
            <Container>
                <Header>
                    count:{props.flags}
                    <Img><ThugLife src="https://banner2.kisspng.com/20180402/dlw/kisspng-t-shirt-sunglasses-clip-art-thug-life-5ac1b26dbc5755.3735686315226435657715.jpg" /></Img>
                </Header>
            </Container>
            <Container>
                <Table gameOver={props.theEnd}>
                    <Tbody>
                        {props.array.map(item => <Row>{item.map(a => <Cell dblClick={props.dblClick} flagOn={props.flagOn} func={props.handleChange} key={a.id} param={a} />)}</Row>)}
                    </Tbody>
                </Table>
            </Container>
        </Wrapper>
    )
}
const ThugLife = styled.img`
    width: 20px;
    height: 20px;
    `;
const Header = styled.div`
    display: flex;
    flex-direction: row;
    `;
const Img = styled.div`
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    border-bottom: solid 2px #7b7b7b;
    border-right: solid 2px #7b7b7b;
    border-top: solid 2px #fff;
    border-left: solid 2px #fff; 
    content: url('https://ficardo-weddings.com/images/smiley-faces-pics/Smiley-Face-06-large.png')
    `;
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