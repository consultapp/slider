window.addEventListener('load', () => {
  const photo = document.querySelector('#innerSlider .photoSlider__mainPhoto')
  const loupe = document.querySelector('#innerSlider .loupe')

  loupe.addEventListener('mouseenter', () => {
    loupe.style.background = `url(${photo.src})`
  })

  loupe.addEventListener('mousemove', (e) => {
    const currentX =
      100 - ((loupe.clientWidth - e.layerX) / loupe.clientWidth) * 100
    const currentY =
      100 - ((loupe.clientWidth - e.layerY) / loupe.clientWidth) * 100
    loupe.style.backgroundPosition = `${currentX}% ${currentY}% `
  })

  loupe.addEventListener('mouseleave', (e) => {
    loupe.style.background = ''
  })
})
// window.addEventListener("load", () => {
//   const mainPhoto = document.querySelector(
//     "#innerSlider .photoSlider__mainPhoto"
//   );
//   const mainPhotoWrapper = document.querySelector(
//     "#innerSlider .photoSlider__mainPhotoWrapper"
//   );

//   const mainCenterX = Math.round(mainPhotoWrapper.clientWidth / 2);
//   const mainCenterY = Math.round(mainPhotoWrapper.clientHeight / 2);
//   const maxTranslate = 100;
//   const stepX = mainCenterX / maxTranslate;
//   const stepY = mainCenterY / maxTranslate;

//   mainPhotoWrapper.addEventListener("mouseout", (e) => {
//     mainPhoto.style.transform = `scale(1)`;
//     mainPhoto.style.transform += `translateX(0px) `;
//     mainPhoto.style.transform += `translateY(0px) `;
//   });

//   mainPhotoWrapper.addEventListener("mousemove", (e) => {
//     const currentX = (mainCenterX - e.layerX) / stepX;
//     const currentY = (mainCenterY - e.layerY) / stepY;
//     mainPhoto.style.transform = `scale(2)`;
//     mainPhoto.style.transform += `translateX(${currentX}px) `;
//     mainPhoto.style.transform += `translateY(${currentY}px) `;
//   });
// });
