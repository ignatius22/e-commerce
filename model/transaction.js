const mongoose = require('mongoose');
const TransactionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
		paid: false,
		dispatch: false,
		tansit: false,
		delivered: false,
		arrival: [{action:{type: String}, date:{type: Date.now}} ]
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Transaction', TransactionSchema);
