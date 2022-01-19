const express=require('express');
const dotenv=require('dotenv');
const connectDb=require('./config/db')
dotenv.config({ path: './config/config.env'});

const inventory=require('./routes/inventory')

app=express();

connectDb()

//middleware so i can pass json files
app.use(express.json());

app.use('/api/inventory',inventory)

server=app.listen(5000,console.log('app listening on the port'))

//For unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`error:${err.message}`);
    server.close(() => process.exit(1));
  });