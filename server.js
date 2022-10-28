const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const cloudinary = require("./cloudinary/cloudinary");

const { errorHandler } = require("./middelware/errorMiddelware");
const connectDB = require("./config/db");

const port = process.env.PORT || 5001;

connectDB();

const app = express();
app.use(cors());
 const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"})); 
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use("/api/reports", require("./routes/reportRoutes"));
//app.use('/api/users', require('./routes/userRoutes'));
//app.use('/api/admin', require('./routes/adminRoutes'));
app.post("/", async (req, res) => {
  const { image } = req.body;
  const uploadedImage = cloudinary.uploader
    .upload(image, {
      upload_present: "unsigned_upload",
    })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});
// console.log(process.env.MONGO_CONNECT);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
