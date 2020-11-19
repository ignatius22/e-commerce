const mongoose = require('mongoose');
const RatingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    product: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    rating: { type: Number, required: true },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Rating', RatingSchema);
