const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({})

module.exports = mongoose.model("cards",cardSchema)
