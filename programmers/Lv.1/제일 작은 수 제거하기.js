//https://school.programmers.co.kr/learn/courses/30/lessons/12935


function solution(arr) {
  const min = Math.min(...arr);
  const minIndex = arr.indexOf(min);
  const answer = arr.filter((el, index) => index !== minIndex);
  return answer.length === 0 ? [-1] : answer;
}
