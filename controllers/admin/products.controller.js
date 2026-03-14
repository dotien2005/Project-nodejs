const Product = require("../../models/product.model");
const filerStatusHelper = require("../../helpers/filerStatus");
// [GET] /admin/products
module.exports.index = async (req, res) => {
  // console.log(req.query.status);
  // filter status
  const filterStatus = filerStatusHelper(req.query);
  // end filter status

  // 1
  let find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }
  // 2 tìm kiếm sản phẩm theo keyword
  let keyword = "";
  if (req.query.keyword) {
    keyword = req.query.keyword;
    // regex: tìm kiếm gần đúng, i: không phân biệt hoa thường
    const regex = new RegExp(keyword, "i");

    find.title = regex;
  }

  const products = await Product.find(find);

  res.render("admin/pages/products/index.pug", {
    pageTitle: "Products",
    productsPug: products,
    filterStatus: filterStatus,
    keyword: keyword,
  });
};
