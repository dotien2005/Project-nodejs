const Product = require("../../models/product.model");
// [GET] /admin/products
module.exports.index = async (req, res) => {
  // console.log(req.query.status);
  // filter status
  let filterStatus = [
    {
      name: "Tất cả",
      status: "",
      class: "",
    },
    {
      name: "Hoạt động",
      status: "active",
      class: "",
    },
    {
      name: "Không hoạt động",
      status: "inactive",
      class: "",
    },
  ];

  if (req.query.status) {
    const index = filterStatus.findIndex(
      (item) => item.status == req.query.status,
    );
    filterStatus[index].class = "active";
  } else {
    const index = filterStatus.findIndex((item) => item.status == "");
    filterStatus[index].class = "active";
  }
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
    find.title = keyword;
  }

  const products = await Product.find(find);

  res.render("admin/pages/products/index.pug", {
    pageTitle: "Products",
    productsPug: products,
    filterStatus: filterStatus,
    keyword: keyword,
  });
};
