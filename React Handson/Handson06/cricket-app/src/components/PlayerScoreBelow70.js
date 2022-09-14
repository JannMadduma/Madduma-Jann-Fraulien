const PlayerScoreBelow70 = ({ players }) => {
  var PlayerBelow70 = players.filter((player) => player.score <= 70);
  return PlayerBelow70.map((player) => (
    <div>
      <li>
        Mr.{player.name} <span>{player.score}</span>
      </li>
    </div>
  ));
};
export default PlayerScoreBelow70;
