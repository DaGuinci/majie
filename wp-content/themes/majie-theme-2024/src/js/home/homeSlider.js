module.exports = function () {
  const pictures = document.querySelectorAll('.header .picture');
  pictures[0].classList.add('visible')

  // adjust the images ratio
  function resizeBackgrounds() {

    const windowRatio = window.innerWidth/window.innerHeight;
    pictures.forEach(picture => {
      let imageSrc = picture
        .style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2')
        .split(',')[0];

      let image = new Image();
      image.src = imageSrc;

      image.onload = function () {
        let width = image.width,
          height = image.height;
        let imageRatio = width/height;

        if (imageRatio>windowRatio) {
          picture.style.backgroundSize = "auto 120vh";
        } else {
          picture.style.backgroundSize = "120vw auto";
        };
      };
    });
  };

  window.onload = function () {
    resizeBackgrounds()
  };

  window.addEventListener('resize', function(event){
    resizeBackgrounds()
  });

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
