import React from 'react'
import PropTypes from 'prop-types'

const ErrorAlert = ({message}) => {
  return (
    <div className="bg-red-100 border ml-4 mb-10 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Error:  </strong>
      <span className="block sm:inline">{message}!</span>
    </div>
  )
}

ErrorAlert.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorAlert
