select * from products
join product_images pi on pi.product_id = products.product_id
where category = $1

-- gets products for specified category