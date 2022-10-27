const mongoose = require("mongoose");

const reportSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: false,
    //   ref: "User",
    // },
    name: {
        type: String,
        required: [false, "Please add your name"],
      },
      
      // phone: {
      //   type: Number,
      //   required: false,
      // },
      
      // email: {
      //   type: String,
      //   required: false,
      // },

    image: {
      type: String,
      required: [false, "Please select an image"],
      ref: "Image",
    },
 
      coordinates: {
        type: [Number],
        required: false,
      },
    
    category: {
      type: String,
      required: [false, "Please select a category"],
    },
    title: {
      type: String,
      required: [false, "Please add a title"],
    },
    description: {
      type: String,
      required: [false, "Please add a description"],
    },
    isPending: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", reportSchema);
