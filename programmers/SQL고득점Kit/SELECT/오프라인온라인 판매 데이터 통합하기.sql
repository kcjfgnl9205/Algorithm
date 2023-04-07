--https://school.programmers.co.kr/learn/courses/30/lessons/131537
--oracle


SELECT * FROM (
    SELECT to_char(SALES_DATE, 'yyyy-mm-dd') AS SALES_DATE
         , PRODUCT_ID
         , USER_ID
         , SALES_AMOUNT
      FROM ONLINE_SALE
    UNION ALL
    SELECT to_char(SALES_DATE, 'yyyy-mm-dd') AS SALES_DATE
         , PRODUCT_ID
         , NULL AS USER_ID
         , SALES_AMOUNT
      FROM OFFLINE_SALE
) 
   WHERE SALES_DATE LIKE '2022-03-%'
ORDER BY SALES_DATE, PRODUCT_ID, USER_ID
