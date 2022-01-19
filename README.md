# Shopify-backend-challenge
This is my solution to the shopify backend challenge

This is a simple API for an inventory tracking web app, built using javascript express web microframework.


# Getting started

In order to run the API locally, you need the node.js installed and will have to install some dependencies

-express

-dotenv

-mongoose

you can install them via npm install

Install NPM packages and development packages

npm install

npm install --dev

(Still within /server), rename .env.example to .env and then enter environment variables for MongoDB and AWS as described
To build and start the app: npm run build

# Features:
1. Create inventory items

2. Edit Them

3. Delete Them

4. View a list of them

5. As the extra feature >> Filtering based on inventory count

# REST API Documentation

create item : POST /api/inventory/

get an item : GET /api/inventory/{id}/

get items : GET /api/inventory/

Delete items : DELETE /api/inventory/{id}

Update items : PUT /api/inventory/{id}/

get items by quantity : GET /api/inventory/qty/{qty}
