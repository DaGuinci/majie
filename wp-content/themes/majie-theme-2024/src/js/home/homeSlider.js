module.exports = function () {
  const pictures = document.querySelectorAll('.header .picture');
  pictures[0].classList.add('visible')

  function switch_picture() {
    let visible = document.querySelector('.picture.visible')
    let next = visible.nextElementSibling
    if (next) {
      next.classList.toggle('visible')
    } else {
      let first = document.querySelector('.header .picture')
      first.classList.toggle('visible')
    }
    visible.classList.toggle('visible')
  }

  setInterval(function() {
    switch_picture()
  }, 4000);
}
