import React, { Component } from 'react';
import './Text.css';

export class Text extends Component {

  render() {
    return (
      <h1>
        { this.props.text }
      </h1>
    )
  }
}

export default Text
