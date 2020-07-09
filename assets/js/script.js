$(document).ready(function () {

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

    addChat();
});
function addChat() {
    window.purechatApi = {
        l: [], t: [], on: function () {
            this.l.push(arguments);
        }
    };
    (function () {
        var done = false;
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript';
        document.getElementsByTagName('HEAD').item(0).appendChild(script);
        script.onreadystatechange = script.onload = function (e) {
            if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                var w = new PCWidget({c: 'f149cdc1-abb5-412a-ab9a-49459a552418', f: true});
                done = true;
            }
        };
    })();
}