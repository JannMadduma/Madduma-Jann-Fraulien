import { Component } from "react";

export class CountPeople extends Component {
  updateEntry = () => {
    this.setState((prevState, props) => {
      return {
        entrycount: prevState.entrycount + 1,
      };
    });
  };
  updateExit = () => {
    this.setState((prevState, props) => {
      return {
        exitcount: prevState.exitcount + 1,
      };
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0,
    };

    //bind this
    this.updateEntry = this.updateEntry.bind(this);
    this.updateExit = this.updateExit.bind(this);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-info mt-5"
          onClick={this.updateEntry}
        >
          Login
        </button>
        <p>{this.state.entrycount} People Entered!!!</p>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.updateExit}
        >
          Exit
        </button>
        <p>{this.state.exitcount} People Left!!!</p>
      </div>
    );
  }
}
