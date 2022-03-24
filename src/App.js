import React from 'react';
import Calculator from './components/Calculator';
import { Routes, Route} from "react-router-dom";
import Header from './components/header'

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
        < Header />
        <Routes>
          <Route path="/" element={<Calculator updateState={this.updateState} digitObj={digitObj} />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </>
    );
  }
}
export default App;
