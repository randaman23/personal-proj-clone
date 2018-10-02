update cart
set quantity = quantity + 1
where product_id = $1;
select * from cart
where user_id = $2
order by cart_id desc