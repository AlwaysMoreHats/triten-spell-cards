import React from 'react'
import PropTypes from 'prop-types'

export default function TextBoxSubmit({buttonText, className, data, onSubmit, readOnly}) {
  const textInput = React.createRef()
  const jsonString = data && JSON.stringify(data)

  let valueKey = 'defaultValue'
  if(readOnly) valueKey = 'value'

  const textAreaData = {
    [valueKey]: jsonString,
    readOnly: readOnly
  }
  return (
    <div className={className}>
      <textarea className='large-input' {...textAreaData} ref={textInput} />
      <button className='submit' onClick={() => onSubmit(textInput.current.value)}>
        {buttonText}
      </button>
    </div>
  )
}

TextBoxSubmit.propTypes = {
  data: PropTypes.array,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  readOnly: PropTypes.bool
}