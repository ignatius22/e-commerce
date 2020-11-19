const { boolean } = require('joi');
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    userType: { type: String },
    isVerified: { type: boolean, default: false },
    productImage: [{ type: String }],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    rating: { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' },
    price: { type: String },
    quantity: { type: Number },
    long: { type: Number },
    lat: { type: Number },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', ProductSchema);
