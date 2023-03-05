//https://school.programmers.co.kr/learn/courses/30/lessons/120824


function solution(num_list) {
  const evenCount = num_list.filter(el => el % 2 === 0).length;
  const oddCount = num_list.length - evenCount;
  return [evenCount, oddCount];
}
