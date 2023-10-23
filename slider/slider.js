function initSlider(id) {
  console.log("id", id + id ? " " : "" + ".nextBtn");
  console.log("document", document);
  // window.addEventListener("load", () => {
  const next = document.querySelectorAll(`${id} .nextBtn`);
  const prev = document.querySelectorAll(id + " .prevBtn");
  const slider = document.querySelector(id + " .photoSlider__slider");
  const images = document.querySelectorAll(id + " .photoSlider__thumbnail");
  const mainPhoto = document.querySelector(id + " .photoSlider__mainPhoto");
  const wp = document.querySelector(id + " .photoSlider__thumbnailWrapper");

  let currentWPShift = 0;
  let current = 0;
  let activeCurrent = images[current];

  next.forEach((item) => {
    item.addEventListener("dblclick", (event) => {
      event.stopPropagation();
    });

    item.addEventListener("click", () => {
      activeCurrent.classList.remove("photoSlider_active");
      current++;
      if (current > images.length - 1) {
        current = 0;
        activeCurrent = images[current];
        currentWPShift = 0;
      } else {
        activeCurrent = images[current];
      }
      currentWPShift = adjustImageIfNeed(currentWPShift);
      selectPhoto(activeCurrent);
      moveImageWrapper(currentWPShift);
    });
  });
  prev.forEach((item) => {
    item.addEventListener("dblclick", (event) => {
      event.stopPropagation();
    });
    item.addEventListener("click", () => {
      activeCurrent.classList.remove("photoSlider_active");
      current--;
      if (current < 0) {
        current = images.length - 1;
        activeCurrent = images[current];
        //   currentWPShift =
        //     slider.clientWidth - activeCurrent.offsetLeft - activeCurrent.width - 2;
      } else {
        activeCurrent = images[current];
      }
      currentWPShift = adjustImageIfNeed(currentWPShift);
      selectPhoto(activeCurrent);
      moveImageWrapper(currentWPShift);
    });
  });

  for (const item of images) {
    item.addEventListener("click", (e) => {
      activeCurrent.classList.remove("photoSlider_active");
      activeCurrent = e.target;
      let i = 0;
      for (const item1 of images) {
        i++;
        if (current.src === item1.src) {
          current = i;
          break;
        }
      }
      selectPhoto(activeCurrent);
      currentWPShift = adjustImageIfNeed(currentWPShift);
      moveImageWrapper(currentWPShift);
    });
  }

  function moveImageWrapper(shift) {
    wp.style.transform = `translateX(${shift}px)`;
  }

  function selectPhoto(image) {
    image.classList.add("photoSlider_active");
    mainPhoto.src = image.src;
  }

  function adjustImageIfNeed(currentWPShift) {
    if (
      slider.clientWidth <
      activeCurrent.offsetLeft + activeCurrent.width + currentWPShift
    ) {
      const shiftFromSliderStart =
        activeCurrent.offsetLeft -
        Math.abs(currentWPShift) +
        activeCurrent.width;
      const needShift = slider.clientWidth - shiftFromSliderStart;
      currentWPShift += needShift - 2;
    }
    if (activeCurrent.offsetLeft < Math.abs(currentWPShift)) {
      currentWPShift += Math.abs(currentWPShift) - activeCurrent.offsetLeft;
    }
    return currentWPShift;
  }
  // });
}
