//https://school.programmers.co.kr/learn/courses/30/lessons/120888


function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
      answer += answer.includes(my_string[i]) ? "" : my_string[i];
  }
  return answer;
}
