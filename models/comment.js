const { Schema, Types, model } = require("mongoose");
const commentSchema = new Schema({
  comment: { type: String, required: true },
  author: { type: Types.ObjectId, ref: "User", required: true },
  report: { type: Types.ObjectId, ref: "Report", required: true },
  timestamps: true,
});

const Comment = model("Report", commentSchema);

module.exports = {
  Comment,
};
