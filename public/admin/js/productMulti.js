// Check box
const checkboxMulti = document.querySelector("[checkbox-multi]");
if (checkboxMulti) {
  const checkAll = checkboxMulti.querySelector("input[name='checkall']");
  const checkboxId = checkboxMulti.querySelectorAll("input[name='id']");
  console.log(checkAll);
  console.log(checkboxId);
  checkAll.addEventListener("click", () => {
    if (checkAll.checked) {
      checkboxId.forEach((item) => {
        item.checked = true;
      });
    } else {
      checkboxId.forEach((item) => {
        item.checked = false;
      });
    }
  });
}
