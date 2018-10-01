select products.*,
        pi.image_url,
        color.name as color,
        color.color_id
from products
join product_images pi on pi.product_id = products.product_id
left join color on color.color_id = pi.color_id
where products.product_id = $1