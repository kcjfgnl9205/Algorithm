//https://school.programmers.co.kr/learn/courses/30/lessons/120893


function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
      const char = my_string[i];
      if (char >= 'a' && char <= 'z') {
          answer += char.toUpperCase();
      } else {
          answer += char.toLowerCase();
      }
  }

  return answer;
}
