var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var alumnoSchema = new Schema({
	name: 		{ type: String },
	year: 		{ type: Number },
  summary: 		{ type: String }
});

module.exports = mongoose.model('TVShow', alumnoSchema);
