//https://school.programmers.co.kr/learn/courses/30/lessons/12928


function solution(n) {
  return Array(n).fill()
                 .map((el, i) => i + 1)
                 .filter(el => n % el === 0)
                 .reduce((a, b) => { return a + b }, 0);
}
