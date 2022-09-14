const DisplayDetails = (props) => (
  <div className="position">
    <img src={props.image} alt="imageItem" />
    <p className={props.price <= 6000 ? "red" : "green"}>Rent: {props.price}</p>
    <p>Address:{props.add}</p>
  </div>
);
export default DisplayDetails;
