//https://school.programmers.co.kr/learn/courses/30/lessons/12932


function solution(n) {
  return n.toString().split("").map(el => parseInt(el)).reverse();
}
