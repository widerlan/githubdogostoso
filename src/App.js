
import React, { Component } from 'react';

class gostoso extends Component {
  state = {
    name: 'WIDERLAN'
  };

  render() {
    return (
      <div className="gostoso">
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default gostoso;