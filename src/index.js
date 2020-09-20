import React from "react";
import ReactDOM from "react-dom";

class Ex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: parseInt(this.props.value) };
  }

  componentDidMount() {
    this.stop = setInterval(() => {
      this.setState({
        counter: this.state.counter + parseInt(this.props.increment)
      });
    }, 1000);
  }

  clearInterval = () => {
    clearInterval(this.stop);
  };
  render() {
    return (
      <div>
        <h1>Counter value : {this.state.counter}</h1>
        <button onClick={this.clearInterval}>
          click to stop counter{" "}
        </button>{" "}
      </div>
    );
  }
}

ReactDOM.render(
  <Ex value="10" increment="100" />,
  document.getElementById("root")
);
