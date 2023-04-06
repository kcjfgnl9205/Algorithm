//https://school.programmers.co.kr/learn/courses/30/lessons/76501


function solution(absolutes, signs) {
  return absolutes.reduce((a, b, i) => {
      return signs[i] ? a + b : a - b;
  }, 0);
}
