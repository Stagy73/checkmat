const express = require("express");
const router = express.Router();

const categoryController = require("./controllers/categoryController");
const cloudController = require("./controllers/CloudController");

// Categories Routes
router.get("/categories", categoryController.browse);
router.get("/categories/:id", categoryController.read); // Get a specific category by ID
router.post("/categories", categoryController.add); // Create a new category
router.put("/categories/:id", categoryController.edit); // Update a category by ID
router.delete("/categories/:id", categoryController.destroy); // Delete a category by ID
router.get("/categories/search", categoryController.search); // Search for categories

// Clouds Routes
router.get("/clouds", cloudController.browse);
router.get("/clouds/:id", cloudController.browse);

module.exports = router;
