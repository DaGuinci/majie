module.exports = function () {
    const nav = document.querySelector('.landing__menu');

    document.addEventListener("DOMContentLoaded", () => {
        //  little hack to detect if the user is on ie 11
        const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
        // get all the links
        const links = nav.querySelectorAll('a');

        // add ctas button
        // const ctas = document.querySelectorAll('.cta a');

        // let links = [];
        // links.push.apply(links, menu_entries);
        // links.push.apply(links, ctas);


        // loop over all the links
        links.forEach(function (link) {
            // listen for a click
            link.addEventListener('click',  function (e) {
                e.preventDefault();
                // toggle highlight on and off when we click a link
                links.forEach( (link) => {
                    if (link.classList.contains('highlighted')) {
                        link.classList.remove('highlighted');
                    }
                });
                link.classList.add('highlighted');
                // get the element where to scroll
                let ref = link.href.split('#');
                ref = '#' + ref[1];
                ref = ref.replace('_section', '');
                target = document.querySelector(ref);
                // ie 11 does not support smooth scroll, so we will simply scroll
                if (isIE11) {
                    window.scrollTo(0, target.offsetTop);
                } else {
                    let targetTop = target.offsetTop;
                    if (window.innerWidth<1070) {
                        targetTop -= 82;
                    }
                    window.scroll({
                        behavior: 'smooth',
                        left: 0,
                        // top gets the distance from the top of the page of our target element
                        // top: 1400
                        top: targetTop
                    });
                }
            })
        })
    })
}
