-- 코드를 입력하세요
SELECT member_id, member_name, gender, date_format(date_of_birth, "%Y-%m-%d") date_of_birth
from member_profile
where month(date_of_birth) = 3 and gender = "W" 
    and TLNO is not null
order by 1 asc

# date_format(date, "%Y-%m-%d")
# 컬럼명 is not null