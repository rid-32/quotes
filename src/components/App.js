import React, { Component } from 'react';

// Components
import Navbar from './Navbar';
import HeaderCarusel from './HeaderCarusel';
import FreeTemplate from './FreeTemplate';
import Reasons from './Reasons';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <HeaderCarusel />
        <FreeTemplate />
        <Reasons />
      </div>
    );
  }
}

export default App;
