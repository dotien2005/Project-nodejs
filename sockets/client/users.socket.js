const User = require("../../models/user.model");
module.exports = (res) => {
  _io.once("connection", (socket) => {
    socket.on("CLIENT_ADD_FRIEND", async (userId) => {
      const myUserId = res.locals.user.id;
      // console.log(myUserId);
      // console.log(myUserId); // id của b
      // console.log(userId); // id của a

      // =======
      // thêm id của a vào acceptFriend của b
      const exitIdAinB = await User.findOne({
        _id: userId,
        acceptFriend: myUserId,
      });
      if (!exitIdAinB) {
        await User.updateOne(
          {
            _id: userId,
          },
          {
            $push: { acceptFriend: myUserId },
          },
        );
      }
      // thêm id của b vào requestFriend của a
    });
  });
};
