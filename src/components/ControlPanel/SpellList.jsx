import React from 'react'
import PropTypes from 'prop-types'

// TODO
export default function SpellList({
  spellData, onChange
}) {
  return (
    <div className='spell-list'>

    </div>
  )
}

SpellList.propTypes = {
  spellData: PropTypes.array,
  onChange: PropTypes.func
}