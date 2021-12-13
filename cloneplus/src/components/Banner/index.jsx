import React, { Component } from 'react';
import moanaLogo from '../../assets/logo-moana.png';

import { Carousel, Holder } from './style';

export class Banner extends Component {
  render() {
    return (
      <Carousel>
        <Holder className="carousel">
          <div className="item current">
            <img src={moanaLogo} alt="logo" className="logo" />
            <img
              src="https://i.pinimg.com/originals/ce/0f/aa/ce0faa55ff3de4cd828643840b49e6c5.jpg"
              alt="banner"
              className="banner "
            />
          </div>
          <div className="item next">
            <img src={moanaLogo} alt="logo" className="logo" />
            <img
              src="https://i.pinimg.com/originals/ce/0f/aa/ce0faa55ff3de4cd828643840b49e6c5.jpg"
              alt="banner"
              className="banner "
            />
          </div>

          <div className="item previous">
            <img src={moanaLogo} alt="logo" className="logo" />
            <img
              src="https://i.pinimg.com/originals/ce/0f/aa/ce0faa55ff3de4cd828643840b49e6c5.jpg"
              alt="banner"
              className="banner "
            />
          </div>
        </Holder>
        <button>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button>
          <i class="fas fa-chevron-right"></i>
        </button>
      </Carousel>
    );
  }
}
