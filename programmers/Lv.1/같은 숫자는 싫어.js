//https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  let answer = [];
  let newArr = -1;

  arr.forEach((el) => {
    if (newArr !== el) {
      answer.push(el);
    }
    newArr = el;
  });

  return answer;
}
