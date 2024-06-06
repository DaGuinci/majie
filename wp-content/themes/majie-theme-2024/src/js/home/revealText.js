module.exports = function () {
    // texts = document.querySelectorAll('p');

    function reveal() {
        var texts = document.querySelectorAll(".landing p");
        console.log(texts);
        for (var i = 0; i < texts.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = texts[i].getBoundingClientRect().top;
          var elementVisible = 50;
          if (elementTop < windowHeight - elementVisible) {
            texts[i].classList.add("is-visible");
          } else {
            texts[i].classList.remove("is-visible");
          }
        }
      }

    window.addEventListener("scroll", reveal);

    // To check the scroll position on page load
    reveal();
}