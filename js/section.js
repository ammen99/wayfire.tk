$(document).on('click', ".toggle_button", function(event)
    {
        var elem = $(event.target).parent();
        var content = elem.find(".plugin_content");

        var is_hiding = content.is(":visible");

        content.toggle('fast');

        if (!is_hiding)
        {
            var srect = elem[0].getBoundingClientRect();
            var offset = srect.top + $("#content_wrapper")[0].scrollTop;

            console.log(offset);

            $('#content_wrapper').animate({
                scrollTop: offset
            }, 350);
        }
    });
