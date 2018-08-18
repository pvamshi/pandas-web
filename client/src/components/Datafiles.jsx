import React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFiles: [],
    };
    this.menuSelected = this.menuSelected.bind(this);
  }

  menuSelected(dataFile) {
    this.props.menuSelected(dataFile);
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/read/')
      .then((response) => response.json())
      .then((data) => this.setState({ dataFiles: data }));
  }
  render() {
    return (
      <Menu>
        {this.state.dataFiles.map((data, index) => (
          <MenuItem
            key={index}
            text={data.name}
            onClick={() => this.menuSelected(data)}
          />
        ))}
      </Menu>
    );
  }
}
