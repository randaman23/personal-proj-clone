update cart
set quantity = quantity + 1
where cart_id = $1;
select * from cart
join products on products.product_id = cart.product_id
join product_images on product_images.product_id = products.product_id
and (product_images.color_id = cart.color_id or cart.color_id is null)
left join color on color.color_id = product_images.color_id 
where user_id = $2
order by cart_id desc;