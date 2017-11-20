
    console.log( 'js/serviceWorker.js being invoked ..' );

    this.addEventListener(
        'install',
        function( event )
        {
            event.waitUntil(
                caches.open( 'v1' ).then(
                    function( cache )
                    {
                        return cache.addAll(
                            [
                                'res/gallery/1.jpg',
                                'res/gallery/2.jpg',
                                'res/gallery/3.jpg',
                                'res/gallery/4.jpg'
                            ]
                        );
                    }
                )
            );
        }
    );
