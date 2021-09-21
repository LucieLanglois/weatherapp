var mongoose = require('mongoose')

var citySchema = mongoose.Schema({
    name: String,
    desc: String,
    img: String,
    temp_min: Number,
    temp_max: Number,
    lat: Number,
    lon: Number,
})
console.log(citySchema);
var cityModel = mongoose.model('cities', citySchema)

module.exports = cityModel;