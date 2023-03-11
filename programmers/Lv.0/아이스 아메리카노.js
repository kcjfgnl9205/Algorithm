//https://school.programmers.co.kr/learn/courses/30/lessons/120819


function solution(money) {
  const coffeePrice = 5500;
  const buyCoffee = Math.floor(money / coffeePrice)
  const changes = money - (buyCoffee * coffeePrice) 
  return [buyCoffee, changes];
}
