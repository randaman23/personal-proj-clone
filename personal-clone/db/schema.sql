create table users(
user_id serial primary key,
first_name varchar(60),
last_name varchar(60),
email varchar(60),
auth_id text
)

create table products(
product_id serial primary key,
category text,
product_name text,
price text,
info text
)

create table color(
color_id serial primary key,
product_id int references products(product_id),
name text
)

create table product_images(
image_id serial primary key,
image_url text,
product_id int references products(product_id),
color_id int references color(color_id)
)

create table cart(
cart_id serial primary key,
size text,
quantity int,
user_id int references users(user_id),
product_id int references products(product_id),
color int references color(color_id)
)
