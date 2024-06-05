module.exports = function () {
  const pictures = document.querySelectorAll('.header .picture');

  function switch_picture() {
    let visible = document.querySelector('.picture.visible')
    let next = visible.nextElementSibling
    if (next.classList.contains('picture')) {
      next.classList.toggle('visible')
    } else {
      let first = document.querySelector('.header .picture')
      first.classList.toggle('visible')
    }
    visible.classList.toggle('visible')
  }

  setInterval(function() {
    switch_picture()
  }, 1000);
}
