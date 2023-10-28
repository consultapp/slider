class CASlider {
  currentWPShift = 0
  current = 0
  smallAddShiftForGoodlooking = 2
  pointerDownFlag = false

  initialState = {
    innerId: 'innerSlider',
    modalId: 'modalSlider',
    mode: 'inner',
    vertical: false,
    nextBtnSelector: '.nextBtn',
    prevBtnSelector: '.prevBtn',
    loupeSelector: '.loupe',
    sliderSelector: '.innerSlider__slider',
    thumbnailSelector: '.innerSlider__thumbnail',
    mainPhotoSelector: '.innerSlider__mainPhoto',
    thumbnailWrapperSelector: '.innerSlider__thumbnailWrapper',
  }

  constructor(initial) {
    initial = { ...this.initialState, ...initial }
    this.sliderId = initial.mode === 'modal' ? initial.modalId : initial.innerId

    this.next = document.querySelectorAll(
      `#${this.sliderId} ${initial.nextBtnSelector}`
    )
    this.prev = document.querySelectorAll(
      `#${this.sliderId} ${initial.prevBtnSelector}`
    )
    this.slider = document.querySelector(
      `#${this.sliderId} ${initial.sliderSelector}`
    )
    this.images = document.querySelectorAll(
      `#${this.sliderId} ${initial.thumbnailSelector}`
    )
    this.mainPhoto = document.querySelector(
      `#${this.sliderId} ${initial.mainPhotoSelector}`
    )
    this.thumbnailWrapper = document.querySelector(
      `#${this.sliderId} ${initial.thumbnailWrapperSelector}`
    )
    this.activeImage = this.images[this.current]
    this.vertical = initial.vertical

    this.init()
    if (initial.mode === 'modal') this.initModal()
    this.initLoupe(`#${this.sliderId} ${initial.loupeSelector}`)
  }

  init() {
    this.next.forEach((item) => {
      item.addEventListener('dblclick', (event) => {
        event.stopPropagation()
      })

      item.addEventListener('pointerdown', () => {
        this.pointerDownFlag = true
        this.switchImage({ next: true })
      })
    })

    this.prev.forEach((item) => {
      item.addEventListener('dblclick', (event) => {
        event.stopPropagation()
      })
      item.addEventListener('pointerdown', () => {
        this.pointerDownFlag = true
        this.switchImage({ prev: true })
      })
    })

    for (const item of this.images) {
      item.addEventListener('pointerdown', (e) => {
        this.pointerDownFlag = true
        this.images.forEach((item, i) => {
          if (item === e.target) this.selectPhoto(i)
        })
        this.adjustImageIfNeed()
      })
    }
  }

  initLoupe(selector) {
    const loupe = document.querySelector(selector)
    if (loupe) {
      const photo = loupe.firstElementChild
      if (photo) {
        if (window.screen.width > 768) {
          loupe.addEventListener('mouseenter', () => {
            loupe.style.background = `url(${photo.src})`
            loupe.style.backgroundRepeat = 'no-repeat'
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
        }
      }
    }
  }

  initModal() {
    this.modal = document.getElementById(this.sliderId)
    if (this.modal) {
      const openers = document.querySelectorAll(`[data-modal-opener]`)
      if (openers && openers.length) {
        document
          .getElementById('closeModalBtn')
          .addEventListener('pointerdown', () => {
            this.modal.removeAttribute('data-open')
            document.body.removeAttribute('data-open')
          })
        openers.forEach((item) => {
          item.addEventListener('pointerdown', () => {
            this.modal.setAttribute('data-open', '')
            document.body.setAttribute('data-open', '')
          })
        })
      }
    }
  }

  switchImage({ next, prev }) {
    if (next) this.current++
    if (prev) this.current--
    if (this.current < 0) {
      this.selectPhoto(this.images.length - 1)
    } else if (this.current > this.images.length - 1) {
      this.selectPhoto(0)
      this.currentWPShift = 0
    } else {
      this.selectPhoto(this.current)
    }
    this.adjustImageIfNeed()
  }

  // by index - current
  selectPhoto(index = this.current) {
    this.current = index
    if (this.activeImage && this.activeImage.classList)
      this.activeImage.removeAttribute('data-active')
    this.activeImage = this.images[this.current]
    this.activeImage.setAttribute('data-active', '')
    this.mainPhoto.src = this.activeImage.src
  }

  adjustImageIfNeed() {
    if (this.vertical) this.adjustImageY()
    else this.adjustImageX()

    this.moveImageWrapper()
  }
  adjustImageX() {
    if (
      this.slider.clientWidth <
      this.activeImage.offsetLeft + this.activeImage.width + this.currentWPShift
    ) {
      const shiftFromSliderStart =
        this.activeImage.offsetLeft -
        Math.abs(this.currentWPShift) +
        this.activeImage.width
      const needShift = this.slider.clientWidth - shiftFromSliderStart
      this.currentWPShift += needShift - this.smallAddShiftForGoodlooking
    }
    if (this.activeImage.offsetLeft < Math.abs(this.currentWPShift)) {
      this.currentWPShift +=
        Math.abs(this.currentWPShift) - this.activeImage.offsetLeft
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
        this.activeImage.height
      const needShift = this.slider.clientHeight - shiftFromSliderStart
      this.currentWPShift += needShift - this.smallAddShiftForGoodlooking
    }
    if (this.activeImage.offsetTop < Math.abs(this.currentWPShift)) {
      this.currentWPShift +=
        Math.abs(this.currentWPShift) - this.activeImage.offsetTop
    }
    return this.currentWPShift
  }

  moveImageWrapper(shift = this.currentWPShift) {
    this.currentWPShift = shift
    this.thumbnailWrapper.style.transform = `translate${
      this.vertical ? 'Y' : 'X'
    }(${shift}px)`
  }
}
