const express = require("express");

const app = express();

// TEMPLATE ENGİNE
app.set("view engine", "ejs");

//MİDDLEWARES
app.use(express.static('public'));

//ROUTES
app.get("/", (req, res) => {
  res.status(200).render('index', {
    pageName:"index"
  })
});

app.get("/about", (req,res) => {
  res.status(200).render('about' , {
    pageName:'about'
  })
})

app.get("/contact", (req, res) => {
  res.status(200).render('contact')
});

app.get("/dashboard", (req, res) => {
  res.status(200).render('dashboard')
});

app.get("/courses", (req, res) => {
  res.status(200).render('courses')
});

const port = 3000;

app.listen(port, () => {
  console.log(`App started on Port ${port}`);
});
