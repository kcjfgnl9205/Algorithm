//https://school.programmers.co.kr/learn/courses/30/lessons/42747


function solution(citations) {
  citations.sort((a, b) => b - a);

  let index = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      index = i + 1;
    } else {
      break;
    }
  }

  return index;
}
