const User = require("../../models/user.model");

const userSocket = require("../../sockets/client/users.socket");

module.exports.notFriend = async (req, res) => {
  // SOCKET
  userSocket(res);
  // end socket

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
