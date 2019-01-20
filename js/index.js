window.onload = function () {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    document.getElementById('top').addEventListener('click', scrollToTop);



    function hideScroll() {
        var scrolled = window.pageYOffset;
        var showScroll = document.getElementById('top');

        if (scrolled <= 299) {
            showScroll.classList.add("hide");
        }
        else {
            showScroll.classList.remove("hide");
        }
    }

    window.addEventListener('scroll', hideScroll);

};







