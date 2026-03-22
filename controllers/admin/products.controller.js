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

//4 PATCH /admin/products/change-status
module.exports.changeStatus = async (req, res) => {
  const status = req.params.status;
  const id = req.params.id;

  await Product.updateOne({ _id: id }, { status: status });
  // res.send(` ${status} with id ${id}`);
  // res.send("change status");
  res.redirect(req.get("Referrer") || "/");
};

//4 PATCH /admin/products/changeMulti
module.exports.changeMulti = async (req, res) => {
  const type = req.body.type;
  const ids = req.body.ids.split(", ");
  switch (type) {
    case "active":
      await Product.updateMany({ _id: { $in: ids } }, { status: "active" });
      break;

    case "inactive":
      await Product.updateMany({ _id: { $in: ids } }, { status: "inactive" });

      break;
  }
  res.redirect(req.get("Referrer") || "/");
};

//5 DELETE /admin/products/delete/:id
module.exports.deleteItem = async (req, res) => {
  const id = req.params.id;

  //  xoá vĩnh viễn
  // await Product.deleteOne({ _id: id });

  //  xoá mềm :
  await Product.updateOne(
    { _id: id },
    { deleted: false, deletedAt: new Date() },
  );

  res.redirect(req.get("Referrer") || "/");
};
