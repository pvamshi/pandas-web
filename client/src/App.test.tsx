import { mount, shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import datafilesStore from './datafiles/datafiles.store';
import datatableStore from './datatable/datatable.store';
import layoutStore from './layout/layout.store';

describe('"App" component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have "Provider" ', () => {
    const a = shallow(<App />);
    expect(a).toBeTruthy();

    expect(a.find('Provider').exists()).toBeTruthy();
  });

  it('should have "Provider" with prop layoutStore ', () => {
    const a = shallow(<App />);
    expect(a).toBeTruthy();
    expect(a.find('Provider').exists()).toBeTruthy();
    expect(a.find('Provider').prop('layoutStore')).toBeTruthy();
    expect(a.find('Provider').prop('layoutStore')).toEqual(layoutStore);
  });

  it('should have "Provider" with prop dataTableStore ', () => {
    const a = shallow(<App />);
    expect(a).toBeTruthy();
    expect(a.find('Provider').exists()).toBeTruthy();
    expect(a.find('Provider').prop('dataTableStore')).toBeTruthy();
    expect(a.find('Provider').prop('dataTableStore')).toEqual(datatableStore);
  });

  it('should have "Layout"', () => {
    const a = mount(<App />);
    expect(a).toBeTruthy();
    expect(a.find('Layout').exists()).toBeTruthy();
    expect(a.find('Provider').at(0)).toBeTruthy();
    expect(
      a
        .find('Provider')
        .childAt(0)
        .name(),
    ).toBe('inject-Layout-with-layoutStore');
  });
  it('should have "DataFiles"', () => {
    const a = mount(<App />);
    expect(a).toBeTruthy();
    expect(a.find('DataFiles').exists()).toBeTruthy();
  });

  it('should have "DataFiles"  with prop dataFilesStore ', () => {
    const a = mount(<App />);
    expect(a).toBeTruthy();
    expect(a.find('DataFiles').exists()).toBeTruthy();
    expect(a.find('DataFiles').prop('dataFilesStore')).toBeTruthy();
    expect(a.find('DataFiles').prop('dataFilesStore')).toEqual(datafilesStore);
  });
  it('should have "DataTables"', () => {
    const a = mount(<App />);
    expect(a).toBeTruthy();
    expect(a.find('DataTable').exists()).toBeTruthy();
  });
});
