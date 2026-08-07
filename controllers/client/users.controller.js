const User = require("../../models/user.model");
module.exports.notFriend = async (req, res) => {
  const userId = res.locals.user.id;
  const users = await User.find({
    _id: { $ne: userId },
    status: "active",
    deleted: false,
  }).select("id fullName");
  res.render("client/pages/users/not-friend", {
    title: "Not Friend",
    users: users,
  });
};
