console.log("users.js loaded");
// chức năng gửi yêu cầu
const listBtnAddFriend = document.querySelectorAll("[btn-add-friend]");
if (listBtnAddFriend.length > 0) {
  listBtnAddFriend.forEach((button) => {
    button.addEventListener("click", () => {
      const userId = button.getAttribute("btn-add-friend");
      // console.log("User ID:", userId);
      // console.log(button.closest(".box-user"));
      button.closest(".box-user").classList.add("add");
      socket.emit("CLIENT_ADD_FRIEND", userId);
    });
  });
}

// end chức năng gửi yêu cầu

// chức năng hủy yêu cầu
const listBtnCancelFriend = document.querySelectorAll("[btn-cancel-friend]");
if (listBtnCancelFriend.length > 0) {
  listBtnCancelFriend.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Cancel friend button clicked");
      // console.log("User ID:", userId);
      // console.log(button.closest(".box-user"));
      button.closest(".box-user").classList.remove("add");
      const userId = button.getAttribute("btn-cancel-friend");

      socket.emit("CLIENT_CANCEL_FRIEND", userId);
    });
  });
}
// end chức năng hủy yêu cầu

// chức năng xóa lời mời kb
const listBtnRefuseFriend = document.querySelectorAll("[btn-refuse-friend]");
if (listBtnRefuseFriend.length > 0) {
  listBtnRefuseFriend.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Refuse friend button clicked");
      // console.log("User ID:", userId);
      // console.log(button.closest(".box-user"));
      button.closest(".box-user").classList.add("refuse");
      const userId = button.getAttribute("btn-refuse-friend");

      socket.emit("CLIENT_REFUSE_FRIEND", userId);
    });
  });
}
// end chức năng xóa lời mời kb

// chức năng chấp nhận lời mời kb
const listBtnAcceptFriend = document.querySelectorAll("[btn-accept-friend]");
if (listBtnAcceptFriend.length > 0) {
  listBtnAcceptFriend.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Accept friend button clicked");
      // console.log("User ID:", userId);
      // console.log(button.closest(".box-user"));
      button.closest(".box-user").classList.add("accept");
      const userId = button.getAttribute("btn-accept-friend");

      socket.emit("CLIENT_ACCEPT_FRIEND", userId);
    });
  });
}
// end chức năng chấp nhận lời mời kb
