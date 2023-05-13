//https://school.programmers.co.kr/learn/courses/30/lessons/12949


function solution(arr1, arr2) {
  const n = arr1.length;
  const m = arr1[0].length;
  const k = arr2[0].length;
  const answer = Array.from(Array(n), () => Array(k).fill(null));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < k; j++) {
      for (let l = 0; l < m; l++) {
        answer[i][j] += arr1[i][l] * arr2[l][j];
      }
    }
  }

  return answer;
}
