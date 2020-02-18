import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setUp = (props={}) => {
  return shallow(<Header {...props}/>);
};

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    // console.log(component.debug());
    const wrapper = component.find('.headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    // console.log(component.debug());
    const logo = component.find('.logoImg');
    expect(logo.length).toBe(1);

  })
});
