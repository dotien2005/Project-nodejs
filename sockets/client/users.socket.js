module.exports = (res) => {
  _io.once("connection", (socket) => {
    socket.on("CLIENT_ADD_FRIEND", async (userId) => {
      const myUserId = res.locals.user.id;
      // console.log(myUserId);
      console.log(myUserId); // id của b
      console.log(userId); // id của a
    });
  });
};
