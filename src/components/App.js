import React, { Component } from 'react';
import styled from 'styled-components';
import Field from './Field';
import lvlGenerator from '../functions/lvlGenerator';
import Header from './Header';
import inRow from '../functions/inRow';
import update from 'immutability-helper';

export default class App extends Component {
  state = {
    field: [],
    difficult: '',
    count: 0
  }
  handleClick = (e) => {
    const { field, count } = lvlGenerator(e.target.value);
    this.setState({ difficult: e.target.value, field: field, count: count });
    console.log(inRow(field, count));
  }
  handleChange = (id) => (e) => {
    const collection = this.state.field;
    const newCollection = update(collection, { [id]: { isClosed: { $set: false } } });
    this.setState({ field: newCollection });
  }
  render() {
    return (
      <Wrapper>
        <Header func={this.handleClick} />
        {this.state.field.length === 0 ? null : <Field array={inRow(this.state.field, this.state.count)} handleChange={this.handleChange} />}
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
`;
