const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({})

module.exports = mongoose.model('activities',activitySchema)