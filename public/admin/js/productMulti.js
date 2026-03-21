// click Check box all

const checkboxMulti = document.querySelector("[checkbox-multi]");
if (checkboxMulti) {
  // tích chọn tất cả
  const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
  const inputsId = checkboxMulti.querySelectorAll("input[name='id']");
  // console.log(inputCheckAll);
  // console.log(inputsId);
  inputCheckAll.addEventListener("click", () => {
    if (inputCheckAll.checked) {
      inputsId.forEach((item) => {
        item.checked = true;
      });
    } else {
      inputsId.forEach((item) => {
        item.checked = false;
      });
    }
  });

  // tích chọn tích hợp
  inputsId.forEach((input) => {
    // console.log(inputsId.length);
    input.addEventListener("click", () => {
      const countInputChecked = checkboxMulti.querySelectorAll(
        "input[name='id']:checked",
      ).length;
      // console.log(countInputChecked);
      if (countInputChecked == inputsId.length) {
        inputCheckAll.checked = true;
      } else {
        inputCheckAll.checked = false;
      }
    });
  });
}
// FORM ChangeMulti
const formChangeMulti = document.querySelector("[form-change-multi]");
if (formChangeMulti) {
  formChangeMulti.addEventListener("submit", (e) => {
    e.preventDefault();
    const checkboxMulti = document.querySelector("[checkbox-multi]");
    const InputChecked = checkboxMulti.querySelectorAll(
      "input[name='id']:checked",
    );
    if (InputChecked.length > 0) {
      let ids = [];
      const inputIds = formChangeMulti.querySelector("input[name='ids']");
      InputChecked.forEach((input) => {
        const id = input.getAttribute("value");
        ids.push(id);
        inputIds.value = ids.join(", ");
        formChangeMulti.submit();
      });
    } else {
      alert("Vui lòng chọn lại");
    }
  });
}
