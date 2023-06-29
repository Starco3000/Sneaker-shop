require('../utils/MongooseUtil');
const Models = require('./Models');

const CategoryDAO = {
  // Show CategoryList
  async selectAll() {
    const query = {};
    const categories = await Models.Category.find(query).exec();
    return categories;
  },
  // Insert NewCategory
  async insert(category) {
    const mongoose = require('mongoose');
    category._id = new mongoose.Types.ObjectId();
    const result = await Models.Category.create(category);
    return result;
  },
  // Update Category
  async update(category) {
    const newvalues = { name: category.name }
    const result = await Models.Category.findByIdAndUpdate(category._id, newvalues, { new: true });
    return result;
  },
  // Delete Category
  async delete(_id) {
    const result = await Models.Category.findByIdAndRemove(_id);
    return result;
  },
  // Update Product
  async selectByID(_id) {
    const category = await Models.Category.findById(_id).exec();
    return category;
  }
};
module.exports = CategoryDAO;