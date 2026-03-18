//  Button change status
const buttonChangeStatus = document.querySelectorAll("[button-change-status]");
if (buttonChangeStatus.length > 0) {
  buttonChangeStatus.forEach((button) => {
    // Phần tử form thay đổi trạng thái
    const formChangeStatus = document.querySelector("#form-change-status");
    const path = formChangeStatus.getAttribute("data-path");
    button.addEventListener("click", () => {
      const statusCurrent = button.getAttribute("data-status");
      const id = button.getAttribute("data-id");
      let statusChange = statusCurrent == "active" ? "inactive" : "active";

      // console.log(statusCurrent, id, statusChange);
      // console.log(path);
      const action = path + `/${statusChange}/${id}`;
      // console.log(action);
      formChangeStatus.action = action;
      formChangeStatus.submit();
    });
  });
}

// End Button change status
