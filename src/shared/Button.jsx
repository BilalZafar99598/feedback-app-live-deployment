import React from 'react'
import PropTypes from 'prop-types'


const Button = ({ children, version, type, isDisabled}) => {
  return (
    <>
      <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
      </button>
    </>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: true,
}

Button.propTypes = {
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,

}

export default Button
