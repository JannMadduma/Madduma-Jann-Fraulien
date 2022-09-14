import React from "react";
// import img1 from "src/img/img0.jpg";
// import img2 from "src/img/img1.jpg";
// import img3 from "src/img/img2.jpg";
import DisplayDetails from "./DisplayDetails.js";

const Items = (props) => {
  const rentInfo = [
    {
      name: "Office Space 1",
      rentPrice: 5000,
      address: "Manila",
      src: "/img/img0.jpg",
    },
    {
      name: "Office Space 2",
      rentPrice: 6000,
      address: "New Delhi",
      src: "/img/img1.jpg",
    },
    {
      name: "Office Space 3",
      rentPrice: 7000,
      address: "San Francisco",
      src: "/img/img2.jpg",
    },
  ];
  return (
    <section>
      <h1>Office Space, at Affordable Range</h1>
      {rentInfo.map((e) => (
        <DisplayDetails
          image={e.src}
          name={e.name}
          price={e.rentPrice}
          add={e.address}
        />
      ))}
    </section>
  );
};
export default Items;
