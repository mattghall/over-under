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

    $('#type').on('change', function() {
        var selectedType = $(this).val();
        var placeholderText;
        var type;

        switch (selectedType) {
            case 'number':
                placeholderText = 'Enter a number';
                type = "number";
                break;
            case 'time':
                placeholderText = 'Enter time (e.g., 12:00)';
                type = "datetime";
                break;
            case 'duration':
                placeholderText = 'Enter duration (e.g., 5s, 10m)';
                type = "time";
                break;
            case 'money':
                placeholderText = 'Enter amount (e.g., $100)';
            
                break;
            case 'size':
                placeholderText = 'Enter size (e.g., 10cm)';
                break;
            default:
                placeholderText = 'Enter value';
        }

        $('#value').attr('placeholder', placeholderText);
    });



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