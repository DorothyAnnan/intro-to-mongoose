const router = require("express").Router;
const {
  updateProduct,
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
} = require("../controllers/products.controller");

const productsRouter = router();

productsRouter.route("/").get(getAllProducts).post(createProduct);
productsRouter
  .route("/:productId")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = productsRouter;
