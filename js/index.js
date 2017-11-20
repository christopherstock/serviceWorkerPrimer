
    // specify the application title
    const APPLICATION_TITLE = "Service Worker Primer";

    // acclaim debug console and set page title
    console.log(     APPLICATION_TITLE );
    document.title = APPLICATION_TITLE;

    // register service worker
    if ( 'serviceWorker' in navigator ) {
        navigator.serviceWorker.register(
            'js/serviceWorker.js',
            { scope: 'js/' }
        ).then(
            function( reg ) {
                // Registrierung erfolgreich
                console.log( 'Registration successful. Scope is [' + reg.scope + ']' );
            }
        ).catch(
            function( error )
            {
                // Registrierung fehlgeschlagen
                console.log( 'Registrieration failed. Error is [' + error + ']' );
            }
        );
    }
