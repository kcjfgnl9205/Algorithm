//https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  let answer = true;
  goal.forEach((el) => {
    if (el === cards1[0]) {
      cards1.shift();
    } else if (el === cards2[0]) {
      cards2.shift();
    } else {
      answer = false;
      return;
    }
  });
  return answer ? "Yes" : "No";
}
