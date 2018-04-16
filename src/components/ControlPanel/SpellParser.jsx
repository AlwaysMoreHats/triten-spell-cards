import React, { Component } from 'react'
import PropTypes from 'prop-types'

const schools = [
  'Aeromancy',
  'Divination',
  'Druidism',
  'Geomancy',
  'Necromancy',
  'Sorcery',
  'Thaumaturgy'
]

const isRomanNumeral = w => w.match(/^[IV]+$/)

const fixNameCase = name => name
  .split(' ')
  .map(w => isRomanNumeral(w) ? w : w[0] + w.substring(1).toLowerCase()).join(' ')

export default class SpellParser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      school: schools[0],
      page: '107',
      source: ''
    }
  }

  parse() {
    const { school, page, source } = this.state

    const rows = source.replace('\r\n', '\n').split('\n')
    const grabRow = label => rows.shift().substring(label.length + 2) // ': '

    const name = fixNameCase(rows.shift())
    const level = grabRow('Level')
    const mp = grabRow('MP Cost')
    const range = grabRow('Range')
    const duration = grabRow('Duration')
    const target = grabRow('Target')
    const defense = grabRow('Defense')

    //find special text, if it exists
    const special = rows.findIndex(r => r.match(/^Special: /))
    if(special > -1) rows.splice(special)

    const effect = rows.join(' ').substring('Effect: '.length)

    this.props.onSubmit({
      name, level, mp,
      range, duration,
      target, defense,
      effect,
      school, page
    })
  }

  render() {
    const { school, page } = this.state
    const options = schools.map(s => <option value={s} key={s}>{s}</option>)

    const update = field => e => this.setState({ [field]: e.target.value })

    return (
      <div className='parser'>
        <div className='school-select'>
          <span className='label'>School: </span>
          <select
            className='input' name='school'
            value={school} onChange={update('school')}
          >
            {options}
          </select>
        </div>
        <div className='page'>
          <span className='label'>Page #: </span>
          <input
            className='input' type='number' name='page'
            value={page} onChange={update('page')}
          />
        </div>
        <div className='pdf-source'>
          <p className='title'>PDF Source Text</p>
          <textarea
            className='large-input' name='source'
            onChange={update('source')}
          />
        </div>
        <div className='submit'>
          <button className='submit' onClick={() => this.parse()}>
            Parse
          </button>
        </div>
      </div>
    )
  }
}

SpellParser.propTypes = {
  onSubmit: PropTypes.func
}