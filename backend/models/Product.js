const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: [true, 'Please provide product name'],
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Printer', 'Ink/Toner', 'Paper', 'Accessories', 'Replacement Parts', 'Software']
  },
  brand: String,
  sku: {
    type: String,
    unique: true,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  discountPrice: {
    type: Number,
    min: 0
  },
  discountPercentage: Number,
  quantity: {
    type: Number,
    default: 0,
    min: 0
  },
  reorderLevel: {
    type: Number,
    default: 10
  },
  specifications: {
    color: String,
    size: String,
    weight: String,
    material: String,
    warranty: String,
    compatibility: [String]
  },
  images: [
    {
      url: String,
      uploadedAt: Date,
      isPrimary: Boolean
    }
  ],
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 0
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatureProduct: {
    type: Boolean,
    default: false
  },
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Generate unique product ID
productSchema.pre('save', async function(next) {
  if (this.isNew) {
    const count = await mongoose.model('Product').countDocuments();
    this.productId = `PROD-${Date.now()}-${count + 1}`;
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);
