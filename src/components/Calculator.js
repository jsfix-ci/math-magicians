import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i += 1) {
      digits.push(
        <button key={i} type="button">{i}</button>,
      );
    }
    return digits;
  };

  render() {
    return (
      <div className="calculator">
        <div className="display"> 0</div>

        <div className="operators">
          <button type="button">/</button>
          <button type="button">*</button>
          <button type="button">+</button>
          <button type="button">-</button>

          <button type="button">DEL</button>
        </div>

        <div className="digits">
          { this.createDigits() }
          <button type="button">0</button>
          <button type="button">.</button>
          <button type="button">=</button>
        </div>

      </div>
    );
  }
}

export default Calculator;
