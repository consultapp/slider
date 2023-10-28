class CASlider {
  currentWPShift = 0;
  current = 0;
  smallAddShiftForGoodlooking = 2;
  pointerDownFlag = false;

  constructor(id, v = false) {
    this.next = document.querySelectorAll(`${id} .nextBtn`);
    this.prev = document.querySelectorAll(id + " .prevBtn");
    this.slider = document.querySelector(id + " .photoSlider__slider");
    this.images = document.querySelectorAll(id + " .photoSlider__thumbnail");
    this.mainPhoto = document.querySelector(id + " .photoSlider__mainPhoto");
    this.thumbnailWrapper = document.querySelector(
      id + " .photoSlider__thumbnailWrapper",
    );
    this.activeImage = this.images[this.current];
    this.vertical = v;

    this.init();
  }

  init() {
    this.next.forEach((item) => {
      item.addEventListener("dblclick", (event) => {
        event.stopPropagation();
      });

      item.addEventListener("pointerdown", () => {
        this.pointerDownFlag = true;
        this.switchImage({ next: true });
      });
    });

    this.prev.forEach((item) => {
      item.addEventListener("dblclick", (event) => {
        event.stopPropagation();
      });
      item.addEventListener("pointerdown", () => {
        this.pointerDownFlag = true;
        this.switchImage({ prev: true });
      });
    });

    for (const item of this.images) {
      item.addEventListener("pointerdown", (e) => {
        this.pointerDownFlag = true;
        this.images.forEach((item, i) => {
          if (item === e.target) {
            this.selectPhoto(i);
          }
        });
        this.adjustImageIfNeed();
      });
    }
  }

  switchImage({ next, prev }) {
    if (next) this.current++;
    if (prev) this.current--;
    if (this.current < 0) {
      this.selectPhoto(this.images.length - 1);
    } else if (this.current > this.images.length - 1) {
      this.selectPhoto(0);
      this.currentWPShift = 0;
    } else {
      this.selectPhoto(this.current);
    }
    this.adjustImageIfNeed();
  }

  // by index - current
  selectPhoto(index = this.current) {
    this.current = index;
    if (this.activeImage && this.activeImage.classList)
      this.activeImage.classList.remove("photoSlider_active");
    this.activeImage = this.images[this.current];
    this.activeImage.classList.add("photoSlider_active");
    this.mainPhoto.src = this.activeImage.src;
  }

  adjustImageIfNeed() {
    if (this.vertical) this.adjustImageY();
    else this.adjustImageX();

    this.moveImageWrapper();
  }
  adjustImageX() {
    if (
      this.slider.clientWidth <
      this.activeImage.offsetLeft + this.activeImage.width + this.currentWPShift
    ) {
      const shiftFromSliderStart =
        this.activeImage.offsetLeft -
        Math.abs(this.currentWPShift) +
        this.activeImage.width;
      const needShift = this.slider.clientWidth - shiftFromSliderStart;
      this.currentWPShift += needShift - this.smallAddShiftForGoodlooking;
    }
    if (this.activeImage.offsetLeft < Math.abs(this.currentWPShift)) {
      this.currentWPShift +=
        Math.abs(this.currentWPShift) - this.activeImage.offsetLeft;
    }
  }

  adjustImageY() {
    if (
      this.slider.clientHeight <
      this.activeImage.offsetTop + this.activeImage.height + this.currentWPShift
    ) {
      const shiftFromSliderStart =
        this.activeImage.offsetTop -
        Math.abs(this.currentWPShift) +
        this.activeImage.height;
      const needShift = this.slider.clientHeight - shiftFromSliderStart;
      this.currentWPShift += needShift - this.smallAddShiftForGoodlooking;
    }
    if (this.activeImage.offsetTop < Math.abs(this.currentWPShift)) {
      this.currentWPShift +=
        Math.abs(this.currentWPShift) - this.activeImage.offsetTop;
    }
    return this.currentWPShift;
  }

  moveImageWrapper(shift = this.currentWPShift) {
    this.currentWPShift = shift;
    this.thumbnailWrapper.style.transform = `translate${
      this.vertical ? "Y" : "X"
    }(${shift}px)`;
  }
}
