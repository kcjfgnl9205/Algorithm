//https://school.programmers.co.kr/learn/courses/30/lessons/147355


function solution(t, p) {
  const arr = [];
  for (let i = 0; i < t.length - p.length + 1; i++) {
      arr.push(Number(t.substring(i, i + p.length)));
  }

  return arr.filter((el) => el <= Number(p)).length
}
