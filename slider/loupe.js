window.addEventListener("load", () => {
  const loupe = document.querySelector(".loupe");
  const photo = loupe.firstElementChild;

  if (window.screen.width > 768) {
    loupe.addEventListener("mouseenter", () => {
      loupe.style.background = `url(${photo.src})`;
      loupe.style.backgroundRepeat = "no-repeat";
    });

    loupe.addEventListener("mousemove", (e) => {
      const currentX =
        100 - ((loupe.clientWidth - e.layerX) / loupe.clientWidth) * 100;
      const currentY =
        100 - ((loupe.clientWidth - e.layerY) / loupe.clientWidth) * 100;
      loupe.style.backgroundPosition = `${currentX}% ${currentY}% `;
    });

    loupe.addEventListener("mouseleave", (e) => {
      loupe.style.background = "";
    });
  }
});
