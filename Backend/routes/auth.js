const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwt_secret = "Thisisrishi";

// Route 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
  body('name', 'The name must be at least 3 characters long').isLength({ min: 3 }),
  body('email', 'Please enter a valid email').isEmail(),
  body('password', 'The password must be at least 5 characters long').isLength({ min: 5 }),
  body('phno', 'Phone number must be a valid number').optional().isMobilePhone(), // Validation for phone number
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check whether the user with this email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry, a user with this email already exists" });
    }

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
      phno: req.body.phno // Add phone number to user creation
    });

    res.json(user);

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


// Route 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  body('email', 'Please enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // Check if the user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    // Compare the password
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    const authToken = jwt.sign(payload, jwt_secret);
    res.json({ authToken });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});





module.exports = router;
