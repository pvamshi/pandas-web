import { mount } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
describe('Sidebar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sidebar elem={<a />} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should have component "Card"', () => {
    const a = mount(<Sidebar elem={<div id="abc" />} />);
    expect(a.childAt(0).name()).toBeTruthy();
    expect(a.childAt(0).name()).toBe('Blueprint3.Card');
  });
  it('should have the component passed in props', () => {
    const a = mount(<Sidebar elem={<div id="abc" />} />);
    expect(a.find('#abc')).toBeTruthy();
  });
});
