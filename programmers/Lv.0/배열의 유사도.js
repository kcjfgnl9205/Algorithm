//https://school.programmers.co.kr/learn/courses/30/lessons/120903


function solution(s1, s2) {
  const s1Set = [... new Set(s1)]
  const s2Set = [... new Set(s2)]
  let answer = 0;
  
  s1Set.forEach(el => {
      if (s2Set.includes(el)) answer++;
  })

  return answer;
}
