//https://school.programmers.co.kr/learn/courses/30/lessons/12939


function solution(s) {
  //문자열을 배열로 변경
  const arr = s.split(" ").map(el => parseInt(el));
  
  //최댓값 최솟값 구하기
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}
