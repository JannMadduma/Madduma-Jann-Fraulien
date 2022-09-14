import PlayerScoreBelow70 from "./PlayerScoreBelow70";
import ListOfPlayers from "./ListOfPlayers";
import ListOfPinoyPlayers from "./ListOfPinoyPlayers";

const players = [
  { name: "Marvin", score: 50 },
  { name: "Roxanne", score: 70 },
  { name: "Mary", score: 40 },
  { name: "Jerico", score: 61 },
  { name: "Kenneth", score: 61 },
  { name: "Mikka", score: 95 },
  { name: "Lalaine", score: 100 },
  { name: "Mark", score: 84 },
  { name: "Prince", score: 64 },
  { name: "Jan", score: 75 },
  { name: "Jeric", score: 80 },
];

export function Oddplayers([first, , third, , fifth]) {
  return (
    <div>
      <li>
        First: {first.name}
        {first.score}
      </li>
      <li>
        Third: {third.name}
        {third.score}
      </li>
      <li>
        Fifth: {fifth.name}
        {fifth.score}
      </li>
    </div>
  );
}
export function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <div>
      <li>
        Second: {second.name}
        {second.score}
      </li>
      <li>
        Fourth: {fourth.name}
        {fourth.score}
      </li>
      <li>
        Sixth: {sixth.name}
        {sixth.score}
      </li>
    </div>
  );
}

//destructuring
let a, b, c, d, e, rest;
[a, b, c, d, e, ...rest] = players;

const FilipinoTeam = rest;

const GetLast6thPlayerOdd = ["First Player", "Second Player", "Third Player"];
const GetLast6thPlayerEven = ["Fourth Player", "Fifth Player", "Sixth Player"];
export const FilipinoPlayers = [
  ...GetLast6thPlayerOdd,
  ...GetLast6thPlayerEven,
];

function MainDisplay() {
  var flag = true;
  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListOfPlayers players={players} />
        <h1>List of Players Below 70</h1>
        <PlayerScoreBelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Filipino Team</h1>
        <h1>Odd Players</h1>
        {Oddplayers(FilipinoTeam)}
        <h1>Even Players</h1>
        {EvenPlayers(FilipinoTeam)}
        <h1>List of Filipino Player Merge</h1>
        <ListOfPinoyPlayers players={FilipinoPlayers} />
      </div>
    );
  }
}

export default MainDisplay;
