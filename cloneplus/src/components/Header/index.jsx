import React from 'react';
import logoImg from '../../assets/disney-plus-white-logo.png';
import { StyledHeader } from './style';

export class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <div className="container">
          <img src={logoImg} alt="logo" />
          <nav>
            <ol>
              <li>
                <a href="/">INÍCIO</a>
              </li>
              <li>
                <a href="/">PESQUISA</a>
              </li>
              <li>
                <a href="/">MINHA LISTA</a>
              </li>
              <li>
                <a href="/">ORIGINAIS</a>
              </li>
              <li>
                <a href="/">FILMES</a>
              </li>
              <li>
                <a href="/">SÉRIES</a>
              </li>
            </ol>
          </nav>
        </div>
        <img
          src="https://i.pinimg.com/originals/30/5c/c3/305cc349a2836cec4fa10b9df53e772e.jpg"
          alt="Icon"
        />
      </StyledHeader>
    );
  }
}
