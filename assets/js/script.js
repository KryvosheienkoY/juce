function googleTagManagerFunc() {
    <!-- Google Tag Manager -->
    (function googleTagManager(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start':
                new Date().getTime(), event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l !== 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-TCW2H77');
    <!-- End Google Tag Manager -->
}

$(document).ready(function () {
    googleTagManagerFunc();
    processContactUsModal();
    addChat();
});

function processContactUsModal() {
    $("#contact_us_form").submit(function (e) {
        e.preventDefault();

        let form_obj = $("#contact_modal form");
        let email = $(form_obj).find("#contact_email").val();
        let message = $(form_obj).find("#contact_message").val();
        let agree_checked = $(form_obj).find("input:checkbox");
        if (agree_checked) {
            $.post('https://client.juce.cloud/contact-us', {'email': email, 'message': message}, function (res) {
                if (res === "ok") {
                    document.location.href = '../../thank-you-for-contact-us.html'
                } else {
                    // Error
                }
            });
        } else {
            // Mr. D asked me to write something here. But he didn't ask with respect.
            // He didn't offer friendship. He didn't even think to call me Godfather.
        }
        $('#contact_modal').modal('hide');
    });
}

function addChat() {
    window.purechatApi = {
        l: [], t: [], on: function () {
            this.l.push(arguments);
        }
    };
    (function () {
        let done = false;
        let script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript';
        document.getElementsByTagName('HEAD').item(0).appendChild(script);
        script.onreadystatechange = script.onload = function (e) {
            if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
                let w = new PCWidget({c: 'f149cdc1-abb5-412a-ab9a-49459a552418', f: true});
                done = true;
            }
        };
    })();
}

