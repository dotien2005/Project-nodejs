console.log("Hello World!");
// BUTTON ACTIVE
const buttonStatus = document.querySelectorAll("[button-status]");
if (buttonStatus.length > 0) {
  const url = new URL(window.location.href);
  buttonStatus.forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("button-status");
      // console.log(status);
      if (status) {
        url.searchParams.set("status", status);
        // console.log(url.href);
        window.location.href = url.href;
      } else {
        url.searchParams.delete("status");
        window.location.href = url.href;
      }
    });
  });
}
// END BUTTON ACTIVE
