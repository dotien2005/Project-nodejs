// Check box
const checkboxMulti = document.querySelector("[checkbox-multi]");
if (checkboxMulti) {
  // tích chọn tất cả
  const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
  const inputsId = checkboxMulti.querySelectorAll("input[name='id']");
  console.log(inputCheckAll);
  console.log(inputsId);
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

  // tích chọn
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
