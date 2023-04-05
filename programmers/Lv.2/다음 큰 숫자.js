//https://school.programmers.co.kr/learn/courses/30/lessons/12911



function getCount(num) {
  return num.toString(2).split("1").length - 1;
}
function solution(n) {
  const cnt = getCount(n);
  let answer = n + 1;
  while (answer <= 1000000) {
      if (getCount(n) === getCount(answer)) {
          break;
      }
      answer++;
  }
  return answer;
}
