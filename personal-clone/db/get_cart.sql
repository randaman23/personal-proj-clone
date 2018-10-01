select * from cart
join products on products.product_id = cart.product_id
join product_images on product_images.product_id = products.product_id
and product_images.color_id = cart.color_id
left join color on color.color_id = product_images.color_id 
where user_id = 1;

