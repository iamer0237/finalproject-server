const express = require('express')
const reportRouter = express.Router()
const {
  getReports,
  setReport,
  getReport,

} = require('../controllers/reportController')

// const { protect } = require('../middelware/authMiddelware')

reportRouter.route('/').get( getReports).post(setReport)
reportRouter.route('/:id').get( getReport)

module.exports = reportRouter
