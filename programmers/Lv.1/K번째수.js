// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  var answer = [];

  let arr = [...array];
  commands.forEach((item) => {
    const a = arr.slice(item[0] - 1, item[1]).sort((a, b) => a - b);
    answer.push(a[item[2] - 1]);
    arr = [...array];
  });

  return answer;
}
