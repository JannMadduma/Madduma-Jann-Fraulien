import { Component } from "react";
import Cart from "./Cart";
class OnlineShopping extends Component {
  render() {
    const cartInfo = [
      { itemName: "Laptop", price: 120000 },
      { itemName: "TV", price: 80000 },
      { itemName: "Washing Machine", price: 50000 },
      { itemName: "Mobile Phone", price: 80000 },
      { itemName: "Fridge", price: 70000 },
    ];

    return (
      <div className="container">
        <h1 className="mt-4 mb-3">Items Ordered: </h1>
        <Cart item={cartInfo}></Cart>
      </div>
    );
  }
}
export default OnlineShopping;
