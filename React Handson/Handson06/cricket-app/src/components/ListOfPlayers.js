const ListOfPlayers = ({ players }) => {
  return players.map((item) => (
    <div>
      <li>
        Mr. {item.name} <span>{item.score}</span>
      </li>
    </div>
  ));
};

export default ListOfPlayers;
