//NPM
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FormField extends Component {
  render() {
    const { 
      name,
      label,
      value,
      changed
    } = this.props
    return (
      <div className='form-field'>
        <label 
          htmlFor={name}>
          {label}
        </label>
        <input 
          name={name}
          value={value}
          onChange={changed}/>
      </div>
    )
  }
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired
}

export default FormField