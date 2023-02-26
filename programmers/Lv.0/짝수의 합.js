//https://school.programmers.co.kr/learn/courses/30/lessons/120831


function solution(n) {
  return Array(n).fill()
                 .map((el, i) => i + 1)
                 .filter(el => el % 2 === 0)
                 .reduce((a, b) => { return a + b }, 0);
}
