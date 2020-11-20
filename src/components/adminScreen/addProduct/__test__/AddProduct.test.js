import React from 'react'
import { render, screen } from '@testing-library/react'
import AddProduct from '../AddProduct'
import userEvent from '@testing-library/user-event'

describe('Test in AddProduct component', () => {
  const setHideDeleteButton = jest.fn(() => {})
  const setHideAddButton = jest.fn()

  const renderComponent = (arg) => {
    const hideComponent = arg || false
    const nameAdmin = "Linus Torvalds"

    return render(<AddProduct
      setHideAddButton={setHideAddButton}
      setHideDeleteButton={setHideDeleteButton}
      hideComponent={hideComponent}
      nameAdmin={nameAdmin}
    />)
  }

  const completeForm = () => {
    userEvent.type(screen.getAllByRole(/textbox/)[0], 'Ubuntu')
    userEvent.type(screen.getAllByRole(/textbox/)[1], '10')
    userEvent.type(screen.getAllByRole(/textbox/)[2], 'http://lorempixel.com/640/480/fashion')
    userEvent.selectOptions(screen.getByRole(/combobox/), 'general')
    userEvent.type(screen.getAllByRole(/textbox/)[3], 'Una distribucion linux ideal para todo el mundo')
    userEvent.click(screen.getByText(/Agregar/))
  }

  beforeEach(() => {
    fetch.mockClear();
  })

  test('the component should only render a button element', () => {
    renderComponent()
    expect(screen.getByRole(/button/)).toBeInTheDocument()
    expect(screen.getByTestId(/add_product/)).toBeInTheDocument()
  })

  test('the hideComponent accesory is passed with a value of true, it will only render a div element', () => {
    renderComponent(true)
    expect(screen.queryByTestId(/add_product/)).toBeFalsy()
  })

  test('the -Agregar Producto- button is pressed, the NewProduct component should be rendered', () => {
    renderComponent()
    userEvent.click(screen.getByRole(/button/))
    expect(screen.getByTestId(/new_product/)).toBeInTheDocument()
  })

  test('the -Add Product- button is pressed, you must call the setHideDeleteButton as setHideAddButton funcions', () => {
    renderComponent()
    userEvent.click(screen.getByRole(/button/))
    expect(setHideDeleteButton).toHaveBeenCalled()
    expect(setHideAddButton).toHaveBeenCalled()
  })

  test('it should return an alert component for each field that is filled incorrectly in the form', () => {
    renderComponent(false)
    userEvent.click(screen.getByRole(/button/))
    userEvent.click(screen.getByText(/agregar/i))
    screen.debug()

    const inputName = screen.getAllByRole(/textbox/)[0].name
    const inputPrice = screen.getAllByRole(/textbox/)[1].name
    const inputImage = screen.getAllByRole(/textbox/)[2].name
    const inputDescription = screen.getAllByRole(/textbox/)[3].name
    const inputSelect = screen.getByRole(/combobox/).name
  })

})