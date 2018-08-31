import React, { Component } from 'react';
import styled from 'styled-components';
import Field from './Field';
import lvlGenerator from '../functions/lvlGenerator';
import Header from './Header';
import inRow from '../functions/inRow';
import update from 'immutability-helper';
import openWounds from '../functions/openWounds';
import gameOver from '../functions/gameOver';

export default class App extends Component {
  state = {
    field: [],
    difficult: '',
    count: 0,
    end: false
  }
  handleClick = (e) => {
    const { field, count } = lvlGenerator(e.target.value);
    this.setState({ difficult: e.target.value, field: field, count: count, end: false });
  }
  handleChange = (id) => (e) => {
    if (!this.state.end) {
      const collection = this.state.field;
      if (collection[id].isBoom) {
        this.setState({ end: true, field: gameOver(collection, id) })
      }
      else {
        const newCollection = openWounds(id, collection, []);
        //const newCollection = update(collection, { [id]: { isClosed: { $set: false } } });
        this.setState({ field: newCollection });
      }
    }
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
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0 auto;
  display: flex;
`;
