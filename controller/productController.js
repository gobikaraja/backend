const productModel = require("../model/Product");

// GET ALL PRODUCTS
exports.getProduct = async (req, res) => {
    try {
        const product = await productModel.find();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// POST PRODUCT
exports.postProduct = async (req, res) => {
    const { name, price, image, description } = req.body;

    try {
        const newProduct = new productModel({
            name,
            price,
            image,
            description
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// UPDATE PRODUCT  ✅
exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, price, image, description } = req.body;

        const updatedProduct = await productModel.findByIdAndUpdate(
            id,
            { name, price, image, description },
            { new: true } // return updated data
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
    const id = req.params.id;

    const deleted = await productModel.findByIdAndDelete(id);
    if (!deleted) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted" });
};
