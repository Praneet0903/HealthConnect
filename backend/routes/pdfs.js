const express = require('express');
const multer = require('multer');
const path = require('path');
const Pdf = require('../models/pdf');
const User = require('../models/User');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('pdf'), (req, res) => {
  let user = User.findById(req.body.id);
  if(!user){
    return res.status(401).send("No such user");
  }
  if(user.isDoctor){
    return res.status(401).send("Not a patient");
  }
  const newPdf = new Pdf({ 
    patientId: user._id,
    filename: req.file.filename,
    filepath: req.file.path
  });

  newPdf.save()
    .then(pdf => res.status(200).json({ message: 'PDF uploaded successfully', pdf }))
    .catch(err => res.status(500).json({ message: err.message }));
});

module.exports = router;
