//https://school.programmers.co.kr/learn/courses/30/lessons/12910


function solution(arr, divisor) {
  const resultArr = arr.filter(el => el % divisor === 0);
  return resultArr.length === 0 ? [-1] : resultArr.sort((a, b) => a - b);
}
