const express = require('express');
const router = express.Router();
const { Category } = require("../models/Category");

const { auth } = require("../middleware/auth");

//=================================
//             Category
//=================================

router.get("/category", auth, (req, res) => {
    Category.find({}, (err, categoryList) => {
        res.status(200).json({
            success: true,
            records: categoryList,
        });
    });
});

router.post("/category", auth, (req, res) => {
    const category = new Category(req.body);
    category.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});


module.exports = router;
