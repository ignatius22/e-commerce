const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    product: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    name: { type: String, required: true },
    text: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Comment', CommentSchema);
