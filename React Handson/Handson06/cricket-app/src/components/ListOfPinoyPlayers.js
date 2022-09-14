const ListOfPinoyPlayers = ({ players }) => {
  return players.map((item) => {
    return (
      <div>
        <li>Player Place: {item}</li>
      </div>
    );
  });
};

export default ListOfPinoyPlayers;
