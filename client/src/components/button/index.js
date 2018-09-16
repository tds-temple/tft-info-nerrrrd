//NPM
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  render() {
    const { clicked, label } = this.props
    return (
      <button
        onClick={clicked}>
        {label}
      </button>
    )
  }
}

Button.propTypes = {
  clicked: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default Button