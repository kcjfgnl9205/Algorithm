//https://school.programmers.co.kr/learn/courses/30/lessons/120906


function solution(n) {
  return n.toString().split("")
                     .map(el => parseInt(el))
                     .reduce((a, b) => a + b)
}
