import React, { Component } from 'react';
import './App.css';
import SpellCard from './components/SpellCard'

const spellCardData = {
  name: 'Lightning Bolt I',
  level: 4,
  mp: 6,
  range: '50 feet',
  duration: 'Instant',
  target: '1 target',
  defense: 'Dodge',
  effect: 'Lightning Bolt I fires a bolt of lightning at the target, dealing 2d4+Wisdom damage. This damage ignores all DR.',
  school: 'Aeromancy',
  page: 110,
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <SpellCard {...spellCardData}/>
      </div>
    );
  }
}

export default App;
