//https://school.programmers.co.kr/learn/courses/30/lessons/120899


function solution(array) {
  const maxVal = Math.max(...array)
  return [maxVal, array.indexOf(maxVal)]
}
