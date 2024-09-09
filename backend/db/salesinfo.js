const mongoose = require('mongoose')

const salesSchema = new mongoose.Schema({})

module.exports = mongoose.model('sales',salesSchema)