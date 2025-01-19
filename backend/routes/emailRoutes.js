const express = require('express');
const multer = require('multer');
const {
  getEmailLayout,
  uploadImage,
  saveEmailTemplate,
  renderTemplate,
} = require('../controllers/emailController');

const router = express.Router();

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  },
});
const upload = multer({ storage });

// Debug: Log router initialization
console.log('emailRoutes.js: Router initialized');

// Routes
router.get('/layout', getEmailLayout); // Fetch email layouts
router.post('/uploadImage', upload.single('image'), uploadImage); // Upload image
router.post('/save', saveEmailTemplate); // Save email template
router.post('/render', renderTemplate); // Render email template

module.exports = router;
