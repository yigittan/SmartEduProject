exports.getIndexPage = (req, res) => {
  res.status(200).render("index", {
    pageName: "index",
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about", {
    pageName: "about",
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render("register", {
    pageName: "Register",
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render("login", {
    pageName: "login",
  });
};
