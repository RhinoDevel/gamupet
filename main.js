
// (c) Marcel Timm, RhinoDevel, 2021

/** To be executed as last JavaScript file on page load.
 */
(function() // IIFE
{
    'use strict';

    var f = {}, v = {};

    f.drawSample = function()
    {
        var ctx = v.canvas.getContext('2d'),
            imgData = ctx.getImageData(0, 0, 320, 200), // Hard-coded!
            i = 0;
        
        while(i < imgData.data.length)
        {
            imgData.data[i + 0] = 0;   // R value
            imgData.data[i + 1] = 255; // G value
            imgData.data[i + 2] = 0;   // B value
            imgData.data[i + 3] = 255; // A value

            i += 4;
        }
        
        // Draw image data to the canvas
        ctx.putImageData(imgData, 0, 0);
    };

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

        gamupet.roomLateInit(gamupet.c.screen.width, gamupet.c.screen.height);

        gamupet.room.init(v.ele.room);

        v.canvas = gamupet.room.getCanvas();

        f.drawSample();
    };

    window.addEventListener('load', f.onLoad);
}());
