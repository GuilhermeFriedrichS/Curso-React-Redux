const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchama = new mongoose.Schema({
    description: {type: String, require: true},
    done: {type: Boolean, require:true, default:true},
    createAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Todo', todoSchama)