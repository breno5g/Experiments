import React from 'react';

export class Card extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <>
        {content.map((obj) => (
          <div className={this.props.class} key={obj.module}>
            <img src={obj.logo} alt={obj.title} />
            <span>{obj.module}</span>
            <h1>{obj.title}</h1>
          </div>
        ))}
      </>
    );
  }
}
