//https://school.programmers.co.kr/learn/courses/30/lessons/12951


function solution(s) {
  const words = s.toLowerCase().split(' ');
  const answer = words.map(word => {
    return word !== "" ? word.charAt(0).toUpperCase() + word.slice(1) : "";
  });

  return answer.join(' ');
}
