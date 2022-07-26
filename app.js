const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRoutes");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");

const app = express();

// CONNECT DB
mongoose
  .connect("mongodb://127.0.0.1:27017/smartedu-db", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Db Connectted Succesfully");
  });

// TEMPLATE ENGİNE
app.set("view engine", "ejs");

//MİDDLEWARES
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories",categoryRoute)
app.use("/users", userRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`App started on Port ${port}`);
});
