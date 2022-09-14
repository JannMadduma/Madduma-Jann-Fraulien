import { Component } from "react";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.item = [];
  }
  render() {
    return (
      <div className="container">
        <table className="table table-dark table-striped table-hover text-start">
          <thead className="table table-info">
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.item.map((item) => (
              <tr>
                <td>{item.itemName}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Cart;
