console.log("Delete item");
const buttonDelete = document.querySelectorAll("[button-delete]");
console.log(buttonDelete);
if (buttonDelete) {
  const formDelete = document.querySelector("#form-delete-item");
  const path = formDelete.getAttribute("data-path");
  buttonDelete.forEach((button) => {
    button.addEventListener("click", () => {
      const isConform = confirm("Bạn có chắc chắn muốn xoá không?");
      if (isConform) {
        const id = button.getAttribute("data-id");
        console.log(id);
        const action = `${path}/${id}?_method=DELETE`;
        console.log(action);
        formDelete.action = action;
        formDelete.submit();
      }
    });
  });
}
