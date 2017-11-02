function on_scroll() {
    var distanceY = document.getElementById("scroller").scrollTop;
    var shrinkOn = 150;
    var header = document.querySelector("header");
    var image = document.getElementById("nav_logo");
    if (distanceY > shrinkOn) {
        classie.add(header, "shrink");
    } else {
        if (classie.has(header,"shrink")) {
            classie.remove(header,"shrink");
        }
    }
}

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 80, function(){
                window.location.hash = hash;
            });
        } // End if
    });
});

