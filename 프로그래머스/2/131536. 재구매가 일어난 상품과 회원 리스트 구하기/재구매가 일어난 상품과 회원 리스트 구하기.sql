# 재구매한 회원 ID, 재구매한 상품 ID
select user_id, product_id
from online_sale
group by user_id, product_id
having count(user_id)>1
order by 1, 2 desc

# group by + having 구조
