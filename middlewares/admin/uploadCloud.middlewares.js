const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

let streamUpload = (buffer) => {
  return new Promise((resolve, reject) => {
    let stream = cloudinary.uploader.upload_stream((error, result) => {
      if (result) {
        resolve(result);
      } else {
        reject(error);
      }
    });

    streamifier.createReadStream(buffer).pipe(stream);
  });
};
module.exports.uploadCloud = (req, res, next) => {
  if (req.file) {
    const uploadToCloudinary = async (req) => {
      let result = await streamUpload(req.file.buffer);
      // console.log(result);

      // console.log(result.secure_url);
      // req.body.thumbnail = result.secure_url;
      req.body[req.file.fieldname] = result.secure_url;
    };

    uploadToCloudinary(req);
  }
  next();
};
