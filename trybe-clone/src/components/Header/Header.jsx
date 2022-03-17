import React from 'react';

import './styles.css';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.name}</h1>
        <img
          src="https://avatars.githubusercontent.com/u/51424478?v=4"
          alt="Foto"
        />
      </header>
    );
  }
}
