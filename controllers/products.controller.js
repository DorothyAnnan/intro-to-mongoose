const Product = require("../models/product.model");

exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
};

exports.getSingleProduct = (req, res) => {
  res.status(200).send("Get Single Products");
};

exports.createProduct = async (req, res) => {
  // version 1
  // const product = new Product({})
  // product.save()

  // version 2
  const product = await Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  res.status(201).json({ product });
};

exports.updateProduct = (req, res) => {
  res.status(200).send("Update A Product");
};

exports.deleteProduct = (req, res) => {
  res.status(200).send("Delete A Product");
};
