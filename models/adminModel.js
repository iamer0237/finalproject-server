const mongoose = require('mongoose')

const adminSchema = mongoose.Schema(
  {
    role: {
        type: String,
        required: [true, 'Please add a name'],
      },
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    phone: {
        type: Number,
        required: [true, 'Please add a name'],
      },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Admin', adminSchema)
