const express = require("express");
const mainRouter = require("./Router/mainRouter");
const connectdb = require("./config/connectMongodb");
const app = express();
const port = 4000;
app.use("/api", mainRouter);
connectdb();

app.listen(port, () => {
  console.log("app is running in port", port);
});
