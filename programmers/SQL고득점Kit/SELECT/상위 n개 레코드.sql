--https://school.programmers.co.kr/learn/courses/30/lessons/59405
--oracle


SELECT * FROM (
   SELECT NAME
     FROM ANIMAL_INS
 ORDER BY DATETIME
) WHERE ROWNUM <= 1
