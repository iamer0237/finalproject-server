require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const cloudinary = require("../cloudinary/cloudinary");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/,", (req, res) => {
  res.send("Hello");
});
app.post("/", async (req, res) => {
  const { image } = req.body;
  const uploadedImage = await cloudinary.uploader.upload(
    "image",
    {
      upload_present: "unsigned_upload",
      allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
    },

    function (error, result) {
      if (error) {
        console.log(error);
      }
      console.log(result);
    }
  );
  try {
    res.status(200).json(uploadedImage);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
