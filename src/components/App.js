import React, { Component } from 'react';
import styled from 'styled-components';
import Field from './Field';
import lvlGenerator from '../functions/lvlGenerator';
import Header from './Header';

export default class App extends Component {
  state = {
    fields: [],
    difficult: ''
  }
  handleClick = (e) => {
    this.setState({ difficult: e.target.value, fields: lvlGenerator(e.target.value)});
  }
  render() {
    return (
      <Wrapper>
        <Header func={this.handleClick} />
        <Field array={this.state.fields} />
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
`;
