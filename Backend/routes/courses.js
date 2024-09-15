const express = require("express");
const router = express.Router();
const Course = require('../models/course');
const User=require('../models/User');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

// Route to add a course
router.post('/addcourse', [
    body('title', 'The title must be at least 3 characters long').isLength({ min: 3 }),
    body('description', 'The description must be at least 5 characters long').isLength({ min: 5 }),
    body('price', 'Price should be a number').isNumeric(),
    body('hasPaid', 'HasPaid must be a boolean').isBoolean() // Added validation for hasPaid
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description, price, hasPaid } = req.body; // Include hasPaid

        // Create a new course instance
        const newCourse = new Course({
            title,
            description,
            price,
            hasPaid  // Include hasPaid
        });

        // Save the course to the database
        const savedCourse = await newCourse.save();
        res.json(savedCourse);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/getallcourses', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/getPaidCourses', async (req, res) => {
    try {
        // Fetch all courses where hasPaid is true
        const paidCourses = await Course.find({ hasPaid: true });
        res.json(paidCourses); 

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router;
