//https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  const x = s.length % 2 === 0 ? s.length / 2 - 1 : Math.floor(s.length / 2);
  const y = s.length % 2 === 0 ? 1 : 0;
  return s.slice(x, x + y + 1);
}
