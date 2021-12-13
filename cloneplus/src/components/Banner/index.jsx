import React, { Component } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import moanaLogo from '../../assets/logo-moana.png';

import './style.css';

const item = ['moana', 'moana', 'moana', 'moana'];

export class Banner extends Component {
  render() {
    return (
      <>
        <Carousel show={1} className="carousel">
          {item.map((movie) => (
            <div className="item">
              <img className="logo" src={moanaLogo} alt="moana" />
              <img src="https://wallpaperaccess.com/full/3721099.png" alt="" />
            </div>
          ))}
        </Carousel>
      </>
    );
  }
}
