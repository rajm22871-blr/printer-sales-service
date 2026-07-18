const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  serviceId: {
    type: String,
    unique: true,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  printerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Printer',
    required: true
  },
  serviceType: {
    type: String,
    enum: ['Maintenance', 'Repair', 'Installation', 'Cleaning', 'Troubleshooting', 'Upgrade'],
    required: true
  },
  issueDescription: {
    type: String,
    required: true
  },
  severity: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Critical'],
    default: 'Medium'
  },
  priorityLevel: {
    type: String,
    enum: ['Normal', 'Urgent', 'Emergency'],
    default: 'Normal'
  },
  requestDate: {
    type: Date,
    default: Date.now
  },
  scheduledDate: Date,
  startDate: Date,
  completionDate: Date,
  duration: Number, // in hours
  assignedTechnician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['Open', 'Assigned', 'In Progress', 'Completed', 'Cancelled', 'On Hold'],
    default: 'Open'
  },
  workPerformed: String,
  partsReplaced: [
    {
      partName: String,
      cost: Number,
      quantity: Number
    }
  ],
  laborCost: Number,
  materialCost: Number,
  totalCost: Number,
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Partial', 'Overdue'],
    default: 'Pending'
  },
  attachments: [
    {
      fileName: String,
      fileUrl: String,
      uploadDate: Date
    }
  ],
  notes: String,
  followUpRequired: Boolean,
  followUpDate: Date,
  customerSatisfaction: {
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    feedback: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Generate unique service ID
serviceSchema.pre('save', async function(next) {
  if (this.isNew) {
    const count = await mongoose.model('Service').countDocuments();
    this.serviceId = `SERVICE-${Date.now()}-${count + 1}`;
  }
  next();
});

module.exports = mongoose.model('Service', serviceSchema);
