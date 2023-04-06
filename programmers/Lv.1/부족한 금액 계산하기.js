//https://school.programmers.co.kr/learn/courses/30/lessons/82612


function solution(price, money, count) {
  const totalPrice = totalPriceFunction(price, count);

  return money - totalPrice >= 0 ? 0 : totalPrice - money;
}

function totalPriceFunction(price, count) {
  let answer = 0;
  for (let i = 1; i <= count; i++) {
      answer += price * i;
  }
  return answer;
}
