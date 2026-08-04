const uploadToCloudinary = require("../../helpers/uploadTodinary");
module.exports.upload = async (req, res, next) => {
  if (req.file) {
    const link = await uploadToCloudinary(req);
    req.body[req.file.fieldname] = link;
  }
  next();
};
