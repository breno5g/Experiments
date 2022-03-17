import React from 'react';
import { Component } from 'react/cjs/react.development';
import { Card } from '../Card/Card';

import { contentOfContent } from '../../data';

import './styles.css';

export class Content extends Component {
  render() {
    return (
      <>
        <h2>Conteúdo</h2>
        <p>
          Acesse a agenda de cada módulo abaixo, ou continue aprendendo com
          nossas aulas ao vivo e trilha de Soft Skills.
        </p>

        <div className="cards">
          <Card content={contentOfContent.modules} class="smallCard" />
        </div>
      </>
    );
  }
}
