"use strict";
(function () {

    var startBtn = document.querySelector('#start-btn')
        , stopBtn = document.querySelector('#stop-btn')
        , startTid = null
        , timerId = null
        ;

    function startaSpel() {
        console.log('Spelet startar...')
        var delay = 1000 + Math.random() * 2000;
        startTid = null;
        timerId = setTimeout(tidsEvent, delay);

    }

    function tidsEvent() {
        console.log('Nuuu!!!');
        document.body.style['background-color'] = 'red';
        startTid = new Date();
    }

    function stoppaSpel() {
        console.log('Stoppa spelet');
        if (startTid === null) {
            clearTimeout(timerId);
            alert('FUSK!!!');
        } else {
            document.body.style['background-color'] = '';
            var stopTid = new Date();
            var reaktionsTid = stopTid.getTime() - startTid.getTime();
            alert('Din reaktion var: ' + reaktionsTid / 1000 + ' sekunder');
        }
    }

    startBtn.addEventListener('click', startaSpel);
    stopBtn.addEventListener('click', stoppaSpel);





})();