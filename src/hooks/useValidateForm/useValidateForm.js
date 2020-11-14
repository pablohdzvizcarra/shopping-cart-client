import React from 'react'


export const useValidateForm = (name, price, category, image) => {
  const [showAlert, setShowAlert] = React.useState({
    alert: false,
    message: '',
    step: 1
  })

  function validateUrl(url) {
    const re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&=]*)/;
    return re.test(url)
  }

  const validateForm = () => {
    
    if (name.length <= 3) {
      setShowAlert({
        alert: true,
        message: 'El nombre no puede ser menor a 3 caracteres'
      })
      return null
    }

    if (parseInt(price) <= 0 || price === '') {
      setShowAlert({
        alert: true,
        message: 'El articulo tiene que tener un valor valido'
      })
      return null
    }
    

    if (!validateUrl(image)) {
      setShowAlert({
        alert: true,
        message: 'La url que ingresaste no es valida'
      })
      return null
    }

    if (category === '') {
      setShowAlert({
        alert: true,
        message: 'Debes seleccionar una categoria'
      })
      return null
    }

    setShowAlert({
      alert: false,
      message: ''
    })
  }
  
  return [validateForm, showAlert]
}