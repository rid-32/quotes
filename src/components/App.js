import React, { Component } from 'react';

// Components
import Navbar from './Navbar';
import HeaderCarusel from './HeaderCarusel';
import FreeTemplate from './FreeTemplate';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <HeaderCarusel />
        <FreeTemplate />
      </div>
    );
  }
}

export default App;
