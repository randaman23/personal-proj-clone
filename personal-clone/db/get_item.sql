select products.*,
        pi.image_url
from products
join product_images pi on pi.product_id = products.product_id
where products.product_id = $1