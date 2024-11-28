$(document).ready(function() {
    $('#up-arrow').on('click', function() {
        toggleSelected('up-arrow');
    });

    $('#down-arrow').on('click', function() {
        toggleSelected('down-arrow');
    });

    function toggleSelected(buttonId) {
        if (buttonId === 'up-arrow') {
            $('#up-arrow').addClass('selected');
            $('#down-arrow').removeClass('selected');
        } else {
            $('#down-arrow').addClass('selected');
            $('#up-arrow').removeClass('selected');
        }
    }

    // Register the service worker
    if ('serviceWorker' in navigator) {
        $(window).on('load', function() {
            navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
});