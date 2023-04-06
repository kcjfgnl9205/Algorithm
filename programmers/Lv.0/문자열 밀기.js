//https://school.programmers.co.kr/learn/courses/30/lessons/120921


function solution(A, B) {
  if (A === B) return 0;
  
  let newA = A;
  let answer = 0;
  let flg = false;

  for (let i = 0; i < A.length; i++) {
      newA = changeWord(newA);
      if (newA === B) {
          answer = i + 1;
          flg = true;
          break;
      }
  }
  
  if (!flg) {
      answer = -1;
  }

  return answer;
}

function changeWord(word) {
  let answer = [];
  const a = word.split("");
  a.unshift(a.pop());
  answer = a;
  return answer.join("");
}


//다른사람풀이
let solution = (a, b) => (b + b).indexOf(a);
