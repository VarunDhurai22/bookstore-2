import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from "./route/book.route.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// coonect to mongodb
try {
     mongoose.connect(URI,{
        useNewUrlparser:true,
        useUnifiedTopology:true
     });
     console.log("connected to mongoDB");
} catch (error) {
    console.log("Error: ",error);
}

//defining routes
app.use("/book",bookRoute) 

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});