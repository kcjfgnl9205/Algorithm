//https://school.programmers.co.kr/learn/courses/30/lessons/120912


function solution(array) {
  let answer = 0;
  const str = array.join("")
  
  for (let i = 0; i < str.length; i++) {
      if (str[i] === "7") {
          answer++;
      }
  }
  return answer;
}
