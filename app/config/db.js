import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config()
const user = process.env.DATABASE_USER
const password = process.env.DATABASE_PASSWORD
const url = `mongodb+srv://${user}:${password}@api.qcxwstq.mongodb.net`


const connection = () => {
  mongoose.connect(url, {maxPoolSize : 2})
    .then(() => {
      console.log("Conectado ao banco");
    })
    .catch(error => {
      console.log(error);
    })
}

export default connection;