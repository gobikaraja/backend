const express = require("express");
const {
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
} = require("../controller/productController");

const router = express.Router();

router.get("/getproduct", getProduct);
router.post("/postProduct", postProduct);
router.put("/updateProduct/:id", updateProduct);   // ✅ UPDATE
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;
