//https://school.programmers.co.kr/learn/courses/30/lessons/120851


function solution(my_string) {
  let answer = 0;
  for (let i = 0; i < my_string.length; i++) {
      if (Number.isInteger(Number(my_string[i]))) {
          answer += Number(my_string[i]);
      }
  }
  return answer;
}
