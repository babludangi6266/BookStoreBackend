const express = require("express");
const { getBooks, addBook } = require("../controllers/bookController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/getbooks", authMiddleware, getBooks);
router.post("/addbooks", authMiddleware, addBook);

module.exports = router;
