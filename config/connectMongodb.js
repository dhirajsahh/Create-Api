const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const password = process.env.Password;

const uri = process.env.uri;
const connectdb = async () => {
  try {
    const connect = await mongoose.connect(uri, {});
    console.log("mongodbconnectd");
    console.log(connect.connection.host);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectdb;
