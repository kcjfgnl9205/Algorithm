--https://school.programmers.co.kr/learn/courses/30/lessons/131115
--oracle


  SELECT *
    FROM FOOD_PRODUCT
   WHERE PRICE = (SELECT MAX(PRICE) AS PRICE FROM FOOD_PRODUCT)
