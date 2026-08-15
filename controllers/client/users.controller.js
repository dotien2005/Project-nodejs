const User = require("../../models/user.model");

const userSocket = require("../../sockets/client/users.socket");

module.exports.notFriend = async (req, res) => {
  // SOCKET
  userSocket(res);
  // end socket

  const userId = res.locals.user.id;

  const myUser = await User.findOne({
    _id: userId,
  });
  const requestFriend = myUser.requestFriend;
  const acceptFriend = myUser.acceptFriend;
  const users = await User.find({
    $and: [
      { _id: { $ne: userId } },
      { _id: { $nin: requestFriend } },
      { _id: { $nin: acceptFriend } },
    ],

    status: "active",
    deleted: false,
  }).select("id fullName");
  res.render("client/pages/users/not-friend", {
    title: "Not Friend",
    users: users,
  });
};

// GET REQUEST FRIEND user/request
module.exports.requestFriend = async (req, res) => {
  res.send("request friend");
};
