//https://school.programmers.co.kr/learn/courses/30/lessons/12931


function solution(n) {
  return n.toString()
          .split("")
          .map(el => parseInt(el))
          .reduce((a, b) => { return a + b }, 0);
}
