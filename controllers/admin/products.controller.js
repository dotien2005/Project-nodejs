const Product = require("../../models/product.model");
module.exports.index = async (req, res) => {
  const products = await Product.find();
  res.render("admin/pages/products/index.pug", {
    pageTitle: "Products",
    productsPug: products,
  });
};
