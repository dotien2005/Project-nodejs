const Product = require("../../models/product.model");
const filerStatusHelper = require("../../helpers/filerStatus");
const searchHelper = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");

// [GET] /admin/products
module.exports.index = async (req, res) => {
  // console.log(req.query.status);

  // 1
  let find = {
    // deleted: false,
  };
  // filter status
  const filterStatus = filerStatusHelper(req.query);
  // end filter status

  if (req.query.status) {
    find.status = req.query.status;
  }
  // 2 tìm kiếm sản phẩm theo keyword
  const objectSearch = searchHelper(req.query);
  if (req.query.keyword) {
    find.title = objectSearch.regex;
  }
  // 3 Pagination
  let objectPagination = await paginationHelper(req.query);

  // ==================================================================================
  const products = await Product.find(find)
    .limit(objectPagination.limitItem)
    .skip(objectPagination.skip);

  res.render("admin/pages/products/index.pug", {
    pageTitle: "Products",
    productsPug: products,
    filterStatus: filterStatus,
    keyword: objectSearch.keyword,
    objectPagination: objectPagination,
  });
};

module.exports.changeStatus = (req, res) => {
  const status = req.params.status;
  const id = req.params.id;
  res.send(`change status ${status} with id ${id}`);
  res.send("change status");
};
