import React, { Component } from 'react';
import styled from 'styled-components';
import Field from './Field';
import lvlGenerator from '../functions/lvlGenerator';
import Header from './Header';
import inRow from '../functions/inRow';
import openWounds from '../functions/openWounds';
import gameOver from '../functions/gameOver';
import update from 'immutability-helper';
import nextNote from '../functions/nextNote';
import oppaWin from '../functions/oppaWin';

export default class App extends Component {
  state = {
    field: [],
    difficult: '',
    count: 0,
    end: false,
    win: false
  }
  handleClick = (e) => {
    const { field, count } = lvlGenerator(e.target.value);
    this.setState({ difficult: e.target.value, field: field, count: count, end: false });
  }
  handleChange = (id) => (e) => {
    if (!this.state.end) {
      const collection = this.state.field;
      if (collection[id].note !== '') {
        this.flagOn(id)(e);
      }
      else {
        if (collection[id].isBoom) {
          this.setState({ end: true, field: gameOver(collection, id) })
        }
        else {
          const newCollection = openWounds(id, collection);
          oppaWin(newCollection) ? this.setState({ field: gameOver(newCollection), end: true, win: true }) : this.setState({field: newCollection});
        }
      }
    }
  }
  flagOn = (id) => (e) => {
    e.preventDefault();
    const collection = this.state.field;
    const item = collection[id];
    if (item.isClosed) {
      const newCollection = update(collection, { [id]: { note: { $set: nextNote(item.note) } } });
      this.setState({ field: newCollection });
    }
  }
  render() {
    return (
      <Wrapper>
        <Header func={this.handleClick} />
        {this.state.field.length === 0 ? null : <Field flagOn={this.flagOn} theEnd={this.state.end} array={inRow(this.state.field, this.state.count)} handleChange={this.handleChange} />}
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  user-select: none;
  margin: 0 auto;
`; // little dwarf
