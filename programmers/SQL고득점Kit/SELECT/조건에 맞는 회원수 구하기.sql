--https://school.programmers.co.kr/learn/courses/30/lessons/131535
--oracle


SELECT COUNT(*) AS USERS
  FROM USER_INFO
 WHERE EXTRACT(YEAR FROM JOINED) = '2021'
   AND AGE BETWEEN 20 AND 29
