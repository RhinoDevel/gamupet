
// (c) Marcel Timm, RhinoDevel, 2021

/** To be executed as last JavaScript file on page load.
 */
(function() // IIFE
{
    'use strict';

    var f = {}, v = {};

    f.drawSample = function()
    {
        var charCount = 256, // Hard-coded
            charHeight = 
                gamupet.c.dim.screen.height / gamupet.c.dim.char.height,
            charWidth = 
                gamupet.c.dim.screen.width / gamupet.c.dim.char.width,
            c = 0, row = 0, col = 0;

        for(row = 0; row < charHeight && c < charCount; ++row)
        {
            for(col = 0;col < charWidth && c < charCount; ++col)
            {
                gamupet.chardraw.at(col, row, c);

                ++c;
            }
        }
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

        gamupet.roomLateInit(
            gamupet.c.dim.screen.width, gamupet.c.dim.screen.height);

        gamupet.room.init(v.ele.room);

        v.canvas = gamupet.room.getCanvas();

        gamupet.chardraw.init(
            {
                canvas: v.canvas,
                dim: {
                    char: gamupet.c.dim.char
                },
                pix: {
                    on: gamupet.c.pix.on,
                    off: gamupet.c.pix.off
                },
                chars: gamupet.c.chars
            });

        f.drawSample();
    };

    window.addEventListener('load', f.onLoad);
}());
