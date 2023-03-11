//https://school.programmers.co.kr/learn/courses/30/lessons/12930


function changeWord(word) {
  let answer = "";
  
  for (let i = 0; i < word.length; i++) {
      answer += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase()
  }
  
  return answer;
}

function solution(s) {
  return s.split(" ").map(el => changeWord(el)).join(" ");
}
