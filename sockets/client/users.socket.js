const User = require("../../models/user.model");
module.exports = (res) => {
  _io.once("connection", (socket) => {
    // 1 chức năng gửi yêu cầu kết bạn
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

      const exitIdBinA = await User.findOne({
        _id: myUserId,
        requestFriend: userId,
      });
      if (!exitIdBinA) {
        await User.updateOne(
          {
            _id: myUserId,
          },
          {
            $push: { requestFriend: userId },
          },
        );
      }
    });

    // 2 chức năng hủy yêu cầu kết bạn
    socket.on("CLIENT_CANCEL_FRIEND", async (userId) => {
      const myUserId = res.locals.user.id;
      // console.log(myUserId);
      // console.log(myUserId); // id của b
      // console.log(userId); // id của a

      // =======
      // xóa id của a trong acceptFriend của b
      const exitIdAinB = await User.findOne({
        _id: userId,
        acceptFriend: myUserId,
      });
      if (exitIdAinB) {
        await User.updateOne(
          {
            _id: userId,
          },
          {
            $pull: { acceptFriend: myUserId },
          },
        );
      }
      // xóa id của b vào requestFriend của a

      const exitIdBinA = await User.findOne({
        _id: myUserId,
        requestFriend: userId,
      });
      if (exitIdBinA) {
        await User.updateOne(
          {
            _id: myUserId,
          },
          {
            $pull: { requestFriend: userId },
          },
        );
      }
    });

    // 3 chức năng xóa lời mời kết bạn
    socket.on("CLIENT_REFUSE_FRIEND", async (userId) => {
      const myUserId = res.locals.user.id;
      // console.log(myUserId);
      // console.log(myUserId); // id của b
      // console.log(userId); // id của a

      // =======
      // xóa id của a trong acceptFriend của b
      const exitIdAinB = await User.findOne({
        _id: myUserId,
        acceptFriend: userId,
      });
      if (exitIdAinB) {
        await User.updateOne(
          {
            _id: myUserId,
          },
          {
            $pull: { acceptFriend: userId },
          },
        );
      }
      // xóa id của b vào requestFriend của a

      const exitIdBinA = await User.findOne({
        _id: userId,
        requestFriend: myUserId,
      });
      if (exitIdBinA) {
        await User.updateOne(
          {
            _id: userId,
          },
          {
            $pull: { requestFriend: myUserId },
          },
        );
      }
    });

    // 4 chức năng chấp nhận lời mời kết bạn
    socket.on("CLIENT_ACCEPT_FRIEND", async (userId) => {
      const myUserId = res.locals.user.id;
      // console.log(myUserId);
      // console.log(myUserId); // id của b
      // console.log(userId); // id của a
      //  thêm user_id. room_chat_id của a vào friend của b
      // thêm user_id, room_chat_id của b vào friend của a

      // =======
      // xóa id của a trong acceptFriend của b
      const exitIdAinB = await User.findOne({
        _id: myUserId,
        acceptFriend: userId,
      });
      if (exitIdAinB) {
        await User.updateOne(
          {
            _id: myUserId,
          },
          {
            $pull: { acceptFriend: userId },
          },
        );
      }
      // xóa id của b vào requestFriend của a

      const exitIdBinA = await User.findOne({
        _id: userId,
        requestFriend: myUserId,
      });
      if (exitIdBinA) {
        await User.updateOne(
          {
            _id: userId,
          },
          {
            $pull: { requestFriend: myUserId },
          },
        );
      }
    });
  });
};
