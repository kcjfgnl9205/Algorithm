--https://school.programmers.co.kr/learn/courses/30/lessons/132201
--MYSQL


  SELECT PT_NAME
       , PT_NO
       , GEND_CD
       , AGE
       , CASE WHEN TLNO IS NULL THEN "NONE"
              ELSE TLNO
          END AS TLNO
    FROM PATIENT
   WHERE AGE <= 12
     AND GEND_CD = "W"
ORDER BY AGE DESC
       , PT_NAME
