import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/header';
import Quote from './components/quote';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digitObj: {
        total: 0,
        next: 0,
        operation: null,
      },
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(obj) {
    this.setState({
      digitObj: obj,
    });
  }

  render() {
    const { digitObj } = this.state;
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator updateState={this.updateState} digitObj={digitObj} />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}
export default App;
