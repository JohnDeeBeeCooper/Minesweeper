import React, { Component } from 'react';
import styled from 'styled-components';
import Field from './Field';
import lvlGenerator from '../utils/lvlGenerator';
import Header from './Header';
import inRow from '../utils/inRow';
import openWounds from '../utils/openWounds';
import gameOver from '../utils/gameOver';
import update from 'immutability-helper';
import nextNote from '../utils/nextNote';
import oppaWin from '../utils/oppaWin';

export default class App extends Component {
  state = {
    field: [],
    difficult: '',
    count: 0,
    avalFlags: 0,
    end: false,
    win: false
  }
  handleClick = (e) => {
    const { field, count, avalFlags } = lvlGenerator(e.target.value);
    this.setState({ difficult: e.target.value, field, count, end: false, avalFlags });
  }
  handleChange = (id) => (e) => {
    if (!this.state.end) {
      const collection = this.state.field;
      if (collection[id].note !== '') {
        this.flagOn(id)(e);
      }
      else {
        if (collection[id].isBoom) {
          this.setState({ end: true, field: gameOver(collection, id) });
        }
        else {
          const ids = openWounds(id, collection);
          const newCollection = collection.map((item, idx) => {
            if (ids.includes(idx)) {
              item = update(item, { isClosed: { $set: false } });
            }
            return item;
          });
          oppaWin(newCollection) ? this.setState({ field: gameOver(newCollection), end: true, win: true }) : this.setState({ field: newCollection });
        }
      }
    }
  }
  flagOn = (id) => (e) => {
    e.preventDefault();
    const collection = this.state.field;
    const item = collection[id];
    if (item.isClosed) {
      const bool = this.state.avalFlags === 0;
      const newCollection = update(collection, { [id]: { note: { $set: nextNote(item.note, bool) } } });
      const newCount = newCollection.filter(item => item.isBoom).length - newCollection.filter(item => item.note === 'flag').length;
      this.setState({ field: newCollection, avalFlags: newCount });
    }
  }
  dblClick = (id) => (e) => {
    e.preventDefault();
    console.log('test ' + id);
  }

  render() {
    return (
      <Wrapper>
        <Header func={this.handleClick} />
        {this.state.field.length === 0 ? null : <Field dblClick={this.dblClick} flags={this.state.avalFlags} flagOn={this.flagOn} theEnd={this.state.end} array={inRow(this.state.field, this.state.count)} handleChange={this.handleChange} />}
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  user-select: none;
  margin: 0 auto;
`; // little dwarf
