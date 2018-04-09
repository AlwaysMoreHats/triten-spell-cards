import React from 'react'
import PropTypes from 'prop-types'

function makeOpenBox(title, data) {
  return (
    <div className={title.toLowerCase()}>
      <span className='box-title'>{title}</span>
      <div className='content'>{data}</div>
    </div>
  )
}

export default function SpellCard({
  name, level, mp,
  range, duration,
  target, defense,
  effect,
  school, page
}) {
  return (
    <div className={`spell-card ${school.toLowerCase()}`}>
      {makeOpenBox('Name', name)}
      {makeOpenBox('Lv', level)}
      {makeOpenBox('MP', mp)}
      {makeOpenBox('Range', range)}
      {makeOpenBox('Duration', duration)}
      {makeOpenBox('Target', target)}
      {makeOpenBox('Defense', defense)}
      {makeOpenBox('Effect', effect)}
      <span className='school'>{school}</span>
      {makeOpenBox('Mem', '')}
      {makeOpenBox('pg', page)}
    </div>
  )
}

SpellCard.propTypes = {
  name: PropTypes.string,
  level: PropTypes.number,
  mp: PropTypes.number,
  range: PropTypes.string,
  duration: PropTypes.string,
  target: PropTypes.string,
  defense: PropTypes.string,
  effect: PropTypes.string,
  page: PropTypes.number,
  school: PropTypes.string,
}