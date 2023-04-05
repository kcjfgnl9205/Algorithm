//https://school.programmers.co.kr/learn/courses/30/lessons/120830


function solution(n, k) {
  const sheepPrice = 12000;
  const drinkPrice = 2000;
  const drinkService = Math.floor(n / 10)
  
  return (n * sheepPrice) + ((k - drinkService) * drinkPrice);
}
