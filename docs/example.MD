Header
Home - GET /restaurants
Contact - GET /contacts
Cart - GET /restaurants/cart

Homepage
Order Now - GET /restaurants/menu >> res.render - menu.ejs 
Info GET restaurants/info >> res.render - info.ejs 

Menu Page 
Add Cart - POST /restaurants/cart >> cart.session

Cart Page 
Update - POST /restaurants/cart/update 
Remove - POST /restaurants/cart/delete
Submit Order - POST /restaurants/confirm >> push cart.session into order table >> res.render - confirmation.ejs 

Order Confirmation 
View Order - GET /restaurants/orders/:id 







