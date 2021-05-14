
// (c) Marcel Timm, RhinoDevel, 2021

/** To be executed as last JavaScript file on page load.
 */
(function() // IIFE
{
    'use strict';

    var f = {}, v = {};

    f.onLoad = function()
    {
        v.ele = {};

        v.ele.room = document.createElement('div');
        v.ele.room.style.order = String(1);
        v.ele.room.style.position = 'relative';

        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.border = '0px none';
        document.body.style.padding = '0px';
        document.body.style.margin = '0px';

        document.body.style['background-color'] = 'black';

        document.body.style.display = 'flex';
        document.body.style['justify-content'] = 'center';
        document.body.style['align-items'] = 'center';

        document.body.appendChild(v.ele.room);

        gamupet.roomLateInit();

        gamupet.room.init(v.ele.room);

        v.canvas = gamupet.room.getCanvas();
    };

    window.addEventListener('load', f.onLoad);
}());
