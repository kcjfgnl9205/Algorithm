--https://school.programmers.co.kr/learn/courses/30/lessons/59408
--oracle


SELECT count(*) AS count FROM (
SELECT DISTINCT NAME
  FROM ANIMAL_INS
 WHERE NAME IS NOT NULL
) 
