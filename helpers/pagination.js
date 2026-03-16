const Product = require("../models/product.model");
module.exports = async (query) => {
  let objectPagination = {
    currentPage: 1,
    limitItem: 8,
  };
  if (query.page) {
    objectPagination.currentPage = parseInt(query.page);
  }
  objectPagination.skip =
    (objectPagination.currentPage - 1) * objectPagination.limitItem;

  // 3.1 đếm tổng số sản phẩm
  const countProducts = await Product.countDocuments();
  const totalPage = Math.ceil(countProducts / objectPagination.limitItem);
  objectPagination.totalPage = totalPage;
  return objectPagination;
};
