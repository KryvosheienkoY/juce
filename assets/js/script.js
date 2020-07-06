$(document).ready(function () {
    $(document).on('click', '.hamburger', function () {
        if ($(this).hasClass("inactive")) {
            $(this).addClass("active").removeClass("inactive");
            $(".nav").css('display', 'flex');
        } else {
            $(this).addClass("inactive").removeClass("active");
            $(".nav").css('display', 'none');
        }
    });

    $("#contact_modal form a.login_button").click(function(e) {
        e.preventDefault();

        let form_obj = $("#contact_modal form");
        let email = $(form_obj).find("#contact_email").val();
        let message = $(form_obj).find("#contact_message").val();
        let agree_checked = $(form_obj).find("input:checkbox");
        if (agree_checked) {
            $.post('https://client.juce.cloud/contact-us', {'email': email, 'message': message}, function(res) {
                if (res == "ok") {
                    document.location.href = '../../thank-you-for-contact-us.html'
                } else {
                    // Error
                }
            });
        } else {
            // Mr. D asked me to write something here. But he didn't ask with respect.
            // He didn't offer friendship. He didn't even think to call me Godfather.
        }
    });
});