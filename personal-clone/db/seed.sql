-- Black long sleeve shirt
insert into products(category, product_name, price, info)
values('apparel','long sleeve','$28.00','100% cotton, Pre_Shrunk, Traditional fit, unisex T-Shirt')

insert into color(product_id, name)
values('1','Black')

insert into product_images(image_url, product_id, color_id)
values('https://cdn.shopify.com/s/files/1/1668/0025/products/Adult_LSWordmarkT_Black_800x.jpg?v=1528409020','1','1')

-- Faded Red short sleeve
insert into products(category, product_name, price, info)
values('apparel','Classic Logo Short Sleeve','$25.00','100% cotton, Pre_Shrunk, Traditional fit, unisex T-Shirt')

insert into color(product_id, name)
values('2','Faded Red')

insert into product_images(image_url, product_id, color_id)
values('https://cdn.shopify.com/s/files/1/1668/0025/products/Adult_WordmarkT_Red_800x.jpg?v=1528830091',2,2)