import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Count: {this.props.count}</div>
        <button
          onClick={() => {
            this.props.increaseCounter();
          }}
        >
          Increase Count
        </button>

        <button
          onClick={() => {
            this.props.decreaseCounter();
          }}
        >
          Decrease Count
        </button>
      </div>
    );
  }
}
export default Counter;
