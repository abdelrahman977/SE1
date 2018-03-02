var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
 
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required : false
  },
  updatedAt: {
    type : Date,
    required : false
  },
  sellerName: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  }
});

mongoose.model('Product', productSchema);
