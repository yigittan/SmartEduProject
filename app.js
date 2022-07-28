const flash = require("connect-flash");
const methodOverride = require("method-override");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
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

// GLOBAL VARİABLE
global.userIN = null;

//MİDDLEWARES
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "my_keyboard_cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/smartedu-db",
    }),
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.flashMessage = req.flash();
  next();
});
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

//ROUTES
app.use("*", (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`App started on Port ${port}`);
});
