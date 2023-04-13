//https://school.programmers.co.kr/learn/courses/30/lessons/120845


function solution(box, n) {
  const 가로 = Math.floor(box[0] / n);
  const 세로 = Math.floor(box[1] / n);
  const 높이 = Math.floor(box[2] / n);

  return 가로 * 세로 * 높이;
}
