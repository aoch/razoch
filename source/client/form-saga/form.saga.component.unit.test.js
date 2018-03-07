import React from 'react'
import mount from 'enzyme/build/mount'

import Form from './form.saga.component'

const getComponent = (Type, props = {}, renderer = mount) => {
  const wrapper = renderer(<Type {...props} />)
  const component = {
    hasButton: () => wrapper.find('button').length === 1,
    getButtonText: () => wrapper.find('button').text(),
    clickButton: () => wrapper.find('button').simulate('click'),
    hasLabel: () => wrapper.find('label').length === 1,
    getLabelText: () => wrapper.find('[name="state"]').text(),
  }
  return component
}

describe('the Form (Saga) component', () => {
  it('should render itself correctly', () => {
    const props = { api: jest.fn(), message: 'loading...' }
    const component = getComponent(Form, props)
    component.clickButton()
    expect(component.hasButton()).toBe(true)
    expect(component.getButtonText()).toBe('Get data via Saga')
    expect(component.hasLabel()).toBe(true)
    expect(component.getLabelText()).toBe('loading...')
    expect(props.api).toHaveBeenCalledTimes(1)
  })
})
