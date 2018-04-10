import React from 'react'
import PropTypes from 'prop-types'
import SpellParser from './ControlPanel/SpellParser'

export default function ControlPanel({
  spellData, onChange
}) {
  const addSpell = spell => {
    const newData = spellData.slice()
    if(!newData.find(s => s.name === spell.name && s.school === spell.school )) {
      newData.push(spell)
    } else {
      console.warn(`duplicate spell "${spell.school}/${spell.name}" added`)
    }
    onChange(newData)
  }

  return (
    <div className='hide-for-print controls'>
      <SpellParser onSubmit={addSpell} />
    </div>
  )
}

ControlPanel.propTypes = {
  spellData: PropTypes.array,
  onChange: PropTypes.func
}