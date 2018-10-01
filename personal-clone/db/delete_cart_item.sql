delete from cart 
where user_id =$1
 and cart_id = $1;

select * from cart