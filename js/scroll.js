function on_scroll() {
    var distanceY = $("#content_wrapper")[0].scrollTop;
    var shrinkOn = 100;

    if (distanceY > shrinkOn) {
        $(".header_animation").addClass("shrink");
    } else {
        $(".header_animation").removeClass("shrink");
    }
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    var elem = document.getElementById($.attr(this, 'href').slice(1));
    var srect = elem.getBoundingClientRect();
    var offset = srect.top + $("#content_wrapper")[0].scrollTop;

    $('#content_wrapper').animate({
        scrollTop: offset
    }, 350);
});
