const asyncHandler = require("express-async-handler");
const cloudinary = require("../cloudinary/cloudinary");

const Report = require("../models/reportModel");
//const User = require("../models/adminModel");
//const Image = require("../models/imageModule");

const getReports = asyncHandler(async (req, res) => {
  const reports = await Report.find({});

  res.status(200).json(reports);
});

const getReport = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const report = await Report.findById(id);

  res.status(200).json(report);
});

const setReport = asyncHandler(async (req, res) => {
  // if (!req.body.description) {
  //   res.status(400);
  //   throw new Error("Please add a text field");
  // }
  console.log("1")
  const uploadedImage = await cloudinary.uploader.upload(
    req.body.image,
    {
      upload_present: "unsigned_upload",
      allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
    },
    async function (error, result) {
      if (error) {
        console.log(error);
      }
      console.log(result);
      const report = await Report.create({
        name: req.body.name,
        // phone: req.body.phone,
        // email: req.body.email,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        coordinates: req.body.coordinates,
        image: result.secure_url,
      });
      res.status(200).json(report);
    }
  );
});

module.exports = {
  getReports,
  setReport,
  getReport,
};
