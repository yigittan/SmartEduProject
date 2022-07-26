const Course = require("../models/Course");
const Category = require("../models/Category");

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(200).json({
      status: "success",
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const categorySlug = req.query.categories;

    const category = await Category.findOne({slug:categorySlug});

    let filter = {}
    
    if(categorySlug) {
      filter = {category:category._id}
    }
    const courses = await Course.find(filter); //render edilen courses courses.ejs dir.
    const categories = await Category.find();

    res.status(200).render("courses", {
      courses,
      categories,
      pageName: "courses",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findOne({slug:req.params.slug}); //render edilen courses courses.ejs dir
    res.status(200).render("course", {
      course,
      pageName: "courses",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
