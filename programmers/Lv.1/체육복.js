// https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript#

function solution(n, lost, reserve) {
  let answer = n - lost.length;

  // 순서대로 정렬
  lost = lost.sort();
  reserve = reserve.sort();

  // 여벌 체육복을 가져온학생이 도난당한경우 남에게 빌려줄 수 없으므로 여벌 체육복을 가져온학생중에 체육복을 도난당한 학생의 수를 구함
  lost = lost.filter((el) => {
    const i = reserve.findIndex((reserveEl) => reserveEl === el);
    if (i !== -1) {
      reserve.splice(i, 1);
      answer++;
      return false;
    }
    return el;
  });

  // 남은 학생에서 전후 학생에게 체육복을 빌려줄 수 있는 수를 구함
  reserve.forEach((el) => {
    let index = lost.findIndex(
      (lostEl) => lostEl === el - 1 || lostEl === el + 1
    );
    if (index !== -1) {
      lost.splice(index, 1);
      answer++;
    }
  });

  return answer;
}
