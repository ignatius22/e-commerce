const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    categoryName: { type: String, required: true },
    description: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Category', CategorySchema);