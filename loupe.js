window.addEventListener("load", () => {
  const mainPhoto = document.querySelector(
    "#innerSlider .photoSlider__mainPhoto"
  );
  const mainPhotoWrapper = document.querySelector(
    "#innerSlider .photoSlider__mainPhotoWrapper"
  );

  const mainCenterX = Math.round(mainPhotoWrapper.clientWidth / 2);
  const mainCenterY = Math.round(mainPhotoWrapper.clientHeight / 2);
  const maxTranslate = 100;
  const stepX = mainCenterX / maxTranslate;
  const stepY = mainCenterY / maxTranslate;

  mainPhotoWrapper.addEventListener("mouseout", (e) => {
    mainPhoto.style.transform = `scale(1)`;
    mainPhoto.style.transform += `translateX(0px) `;
    mainPhoto.style.transform += `translateY(0px) `;
  });

  mainPhotoWrapper.addEventListener("mousemove", (e) => {
    const currentX = (mainCenterX - e.layerX) / stepX;
    const currentY = (mainCenterY - e.layerY) / stepY;
    mainPhoto.style.transform = `scale(2)`;
    mainPhoto.style.transform += `translateX(${currentX}px) `;
    mainPhoto.style.transform += `translateY(${currentY}px) `;
  });
});
