insert into cart(user_id, product_id, quantity)
values($1, $2, $3);
select * from cart
where user_id = $1