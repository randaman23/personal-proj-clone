select * from products
join (
    select distinct on (product_images.product_id) product_images.product_id as dis, product_images.*
    from product_images
    order by product_images.product_id 
) pi on pi.dis = products.product_id
where category = $1

-- gets products for specified category