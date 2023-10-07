const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  rawMaterials: [String],
  company: String,
  price: Number,
  type: String,
  manufacturingProcess: String,
  transportation: String,
  energyEfficiency: Boolean,
  waterUsage: String,
  carbonEmissions: String,
});

module.exports = mongoose.model('Product', productSchema);
