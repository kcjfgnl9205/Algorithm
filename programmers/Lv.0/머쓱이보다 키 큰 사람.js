//https://school.programmers.co.kr/learn/courses/30/lessons/120585


function solution(array, height) {
  const arr = array.sort((a, b) => a - b);
  return arr.filter(el => el > height).length;
}
