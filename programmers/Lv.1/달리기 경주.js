//https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
  for (let i = 0; i < callings.length; i++) {
    const index = players.indexOf(callings[i]);
    [players[index - 1], players[index]] = [players[index], players[index - 1]];
  }
  return players;
}

// 위의 코드를 실행했더니 시간초과 발생
// 해결방법
// 순위랑, 이름을 가지는 객체를 만들어서 값을 수정하고 나중에 객체를 배열로 변환시켜준다.
function solution(players, callings) {
  const keyPlayers = {};
  const keyRanks = {};
  players.forEach((player, index) => {
    const rank = index + 1;
    keyPlayers[player] = rank;
    keyRanks[rank] = player;
  });

  callings.forEach((calling) => {
    const losePlayer = keyRanks[keyPlayers[calling] - 1];
    keyRanks[keyPlayers[calling]] = losePlayer;
    keyRanks[keyPlayers[losePlayer]] = calling;
    keyPlayers[calling] -= 1;
    keyPlayers[losePlayer] += 1;
  });

  return Object.values(keyRanks);
}
