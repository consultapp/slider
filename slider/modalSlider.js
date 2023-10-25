window.addEventListener("load", () => {
  const modal = document.getElementById("modalSlider");
  const openers = document.querySelectorAll("[data-modal-opener]");

  document.getElementById("closeModalBtn").addEventListener("click", () => {
    const header1 = document.querySelector(".stickytop");
    const header2 = document.querySelector(".stickytop-nav");
    modal.removeAttribute("data-open");
    document.body.removeAttribute("data-open");
    if (header1) header1.style.display = "block";
    if (header2) header2.style.display = "block";
  });
  openers.forEach((item) => {
    item.addEventListener("click", () => {
      const header1 = document.querySelector(".stickytop");
      const header2 = document.querySelector(".stickytop-nav");
      modal.setAttribute("data-open", "");
      document.body.setAttribute("data-open", "");
      if (header1) header1.style.display = "none";
      if (header2) header2.style.display = "none";
    });
  });
});
