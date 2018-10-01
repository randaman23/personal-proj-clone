insert into cart(user_id, product_id, quantity, color_id, size)
values($1, $2, $3, $4, $5);
select * from cart
where user_id = $1