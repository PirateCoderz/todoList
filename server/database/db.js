import mongoose from "mongoose";

/*   
import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
*/
const Connection = () => {

    // const MONGOODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.aruthzo.mongodb.net/`;
    const MONGOODB_URI = `mongodb+srv://galpha964:1xy80j1aT8XeKayj@mern-todo.aruthzo.mongodb.net/`;
    mongoose.connect(MONGOODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Sucessfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database Disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database', error.message);
    })

}

export default Connection;