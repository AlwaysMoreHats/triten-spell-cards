import React, { Component } from 'react';
import './App.css';
import SpellCard from './components/SpellCard'
import ControlPanel from './components/ControlPanel'
import { getSpellData } from './helpers/LocalStorage'

const width = 240
const height = width * 7 / 5
const cardDimensions = { width, height }

const spellCardSort = (cardA, cardB) => {
  const schoolA = cardA.school
  const levelA = cardA.level
  const nameA = cardA.name

  const schoolB = cardB.school
  const levelB = cardB.level
  const nameB = cardB.name

  if (schoolA !== schoolB) return schoolA < schoolB ? -1 : 1
  if (levelA !== levelB) return levelA < levelB ? -1 : 1
  return nameA < nameB ? -1 : 1
}

class App extends Component {
  constructor(props) {
    super(props)
    let spellData = getSpellData()
    spellData = spellData && JSON.parse(spellData)
    spellData = spellData || []
    spellData.sort(spellCardSort)
    this.state = { spellData }
  }

  updateSpellData(spellData) {
    spellData.sort(spellCardSort)
    this.setState({ spellData })
  }

  render() {
    const spellData = this.state.spellData.map(s => Object.assign({}, s))
    const cards = spellData.map(
      d => <SpellCard {...d} {...cardDimensions} key={d.name + d.school}/>
    )

    return (
      <div className="App">
        <ControlPanel
          spellData={spellData}
          onChange={spellData => this.updateSpellData( spellData ) }
        />
        {cards}
      </div>
    );
  }
}

export default App;
