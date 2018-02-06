import React from 'react'
import mount from 'enzyme/build/mount'

import Form from './form.thunk.component'

const getComponent = (Type, props = {}, renderer = mount) => {
  const wrapper = renderer(<Type {...props} />)
  const component = {
    hasButton: () => wrapper.find('button').length === 1,
    getButtonText: () => wrapper.find('button').text(),
    clickButton: () => wrapper.find('button').simulate('click'),
    hasLabel: () => wrapper.find('label').length === 1,
    getLabelText: () => wrapper.find('label').text(),
  }
  return component
}

describe('the Form (Thunk) component', () => {
  it('should render itself correctly', () => {
    const props = {
      done: false,
      data: '',
      getData: jest.fn()
    }
    const component = getComponent(Form, props)
    component.clickButton()
    expect(component.hasButton()).toBe(true)
    expect(component.getButtonText()).toBe('Get data via thunk')
    expect(component.hasLabel()).toBe(true)
    expect(component.getLabelText()).toBe('loading...')
    expect(props.getData).toHaveBeenCalledTimes(1)
    expect(props.getData).toHaveBeenCalledWith('https://swapi.co/api/people/1')
  })
})
