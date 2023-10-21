window.addEventListener("load", () => {
  const modal = document.getElementById("modalSlider");
  const openers = document.querySelectorAll("[data-modal-opener]");

  document.getElementById("closeModalBtn").addEventListener("click", () => {
    modal.removeAttribute("data-open");
  });
  openers.forEach((item) => {
    item.addEventListener("click", () => {
      modal.setAttribute("data-open", "");
    });
  });
});
