update cart
set quantity = quantity + 1
where color_id = $1
and size = $2;
select * from cart
where user_id = $3
order by cart_id desc