import React, { Component } from 'react';
import './App.css';
import SpellCard from './components/SpellCard'
import ControlPanel from './components/ControlPanel'
import spellData from './data/spellData'

const width = 240
const height = width * 7 / 5

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { spellData }
  }

  render() {
    const cards = this.state.spellData.map(d => <SpellCard {...d} width={width} height={height} key={d.name + d.school}/>)
    return (
      <div className="App">
        <ControlPanel spellData={this.state.spellData} onChange={(spellData) => this.setState({ spellData }) } />
        {cards}
      </div>
    );
  }
}

export default App;
