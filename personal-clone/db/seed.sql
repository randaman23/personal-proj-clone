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
-- lavender soap
insert into products(category, product_name, price, info)
values('soap','Lavender','$5.00','Our hand-crafted soaps are made with care at Sundance Art Studio in small batches.

The creative artistry results in soap that is not only natural but functional and beautiful. Every bar is made with natural ingredients, pure essential oils, nurturing botanicals and natural pigment.

Each bar is safe and gentle for all skin types. Those with skin sensitivities may find handmade bars especially beneficial. The bars naturally retain glycerin created during the soap-making process, resulting in a naturally moisturizing soap that alleviates dryness and acts as a natural lotion.

Ingredients: Saponified 100% organic coconut oil, vegetable shortening, canola & olive oil, with herbs, pure essential oils, and natural pigment.

Size: 3 oz')

insert into product_images(image_url, product_id, color_id)
values('https://cdn.shopify.com/s/files/1/1668/0025/products/Soap_Lavendar_800x.jpg?v=1528409452','3',null)
