//https://school.programmers.co.kr/learn/courses/30/lessons/42584?language=javascript

function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let flg = false;
    const a = prices[i];

    for (let j = i; j < prices.length; j++) {
      if (a > prices[j]) {
        answer.push(j - i);
        flg = true;
        break;
      }
    }

    if (flg) continue;

    answer.push(prices.length - i - 1);
  }

  return answer;
}
