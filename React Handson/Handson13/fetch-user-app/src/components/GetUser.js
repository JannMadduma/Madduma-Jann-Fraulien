import { Component } from "react";
import { format } from "date-fns";

export default class GetUser extends Component {
  constructor() {
    super();
    this.state = {
      person: {},
      loading: true,
    };

    this.handleRefresh = this.handleRefresh.bind(this);
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ person: data.results[0], loading: false });
    console.log(data.results[0]);
  }

  async handleRefresh() {
    const url = "https://api.randomuser.me";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ person: data.results[0], loading: false });
    console.log(data.results[0]);
  }

  getDate(date) {
    if (date) {
      return format(new Date(date), "MM/dd/yyyy");
    } else return "";
  }

  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={this.state.person?.picture?.large || "/logo192.png"}
            className="card-img-top"
            alt="img"
          />
          <div className="card-body">
            <h5 className="card-title">
              {this.state.person?.name?.title} {this.state.person?.name?.first}{" "}
              {this.state.person?.name?.last}
            </h5>
            <p className="card-text">📱{this.state.person?.cell}</p>
            <p className="card-text">✉️{this.state.person?.email}</p>
            <p className="card-text">
              🎂{this.getDate(this.state.person?.dob?.date)}
            </p>
            <button onClick={this.handleRefresh}>Refresh</button>
          </div>
        </div>
      </div>
    );
  }
}
