window.addEventListener("load", () => {
  const photo = document.querySelector("#innerSlider .photoSlider__mainPhoto");
  const loupe = document.querySelector("#innerSlider .loupe");

  if (window.screen.width > 768) {
    console.log("desctop loupe");
    loupe.addEventListener("mouseenter", () => {
      loupe.style.background = `url(${photo.src})`;
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
