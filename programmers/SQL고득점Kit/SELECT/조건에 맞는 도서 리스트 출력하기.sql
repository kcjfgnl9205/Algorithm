--https://school.programmers.co.kr/learn/courses/30/lessons/144853
--oracle


  SELECT BOOK_ID
       , to_char(PUBLISHED_DATE,'yyyy-mm-dd') AS PUBLISHED_DATE
    FROM BOOK
   WHERE EXTRACT(YEAR FROM PUBLISHED_DATE) = '2021'
     AND CATEGORY = '인문'
ORDER BY PUBLISHED_DATE
