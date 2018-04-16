import React from 'react'
import PropTypes from 'prop-types'
import SpellParser from './ControlPanel/SpellParser'
import JsonIo from './ControlPanel/JsonIo'

import './ControlPanel/ControlPanel.css'

export default function ControlPanel({
  spellData, onChange
}) {
  const addSpell = spell => {
    const newData = spellData.slice()

    const existingSpell = newData
      .find(s => s.name === spell.name && s.school === spell.school)

    if(!existingSpell) {
      newData.push(spell)
    } else {
      Object.assign(existingSpell, spell)
    }

    onChange(newData)
  }

  return (
    <div className='hide-for-print controls'>
      <SpellParser onSubmit={addSpell} />
      <JsonIo data={spellData} onSubmit={onChange} />
    </div>
  )
}

ControlPanel.propTypes = {
  spellData: PropTypes.array,
  onChange: PropTypes.func
}