import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextBoxSubmit from './TextBoxSubmit'
import { saveSpellData } from '../../helpers/LocalStorage'

export default function JsonIo({ data, onSubmit }) {
  const parseAndSubmit = value => {
    if(!value) return
    onSubmit(JSON.parse(value))
  }
  return (
    <div className='json'>
      <TextBoxSubmit className='json-input' buttonText='Parse JSON' onSubmit={parseAndSubmit} />
      <TextBoxSubmit className='json-input' buttonText='Save JSON' onSubmit={saveSpellData} data={data} readOnly={true} />
    </div>
  )
}

JsonIo.propTypes = {
  data: PropTypes.array,
  onSubmit: PropTypes.func
}