const mongoose = require('mongoose');

const PdfSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
},
  filename: {
    type: String,
    required: true
  },
  filepath: {
    type: String,
    required: true
  },
  uploadDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pdf', PdfSchema);
