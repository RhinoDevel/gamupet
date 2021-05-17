
// (c) Marcel Timm, RhinoDevel, 2021

/** To be executed as last JavaScript file on page load.
 */
(function() // IIFE
{
    'use strict';

    var f = {};

    f.onLoad = function()
    {
        var ele = document.createElement('div'),
            canvas = null;

        ele.style.order = String(1);
        ele.style.position = 'relative';

        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.border = '0px none';
        document.body.style.padding = '0px';
        document.body.style.margin = '0px';

        document.body.style['background-color'] = 'lightgray';

        document.body.style.display = 'flex';
        document.body.style['justify-content'] = 'center';
        document.body.style['align-items'] = 'center';

        document.body.appendChild(ele);

        canvas = gamupet.room.init(
            {
                dim: {
                    inner: gamupet.c.dim.screen,
                    outer: {
                        width: document.body.clientWidth,
                        height: document.body.clientHeight
                    }
                },
                createCanvas: gamupet.ele.createCanvas,
                ele: ele
            });

        canvas.style['background-color'] = 'rgba('
                + String(gamupet.c.pix.off.r)
                + ',' + String(gamupet.c.pix.off.g)
                + ',' + String(gamupet.c.pix.off.b)
                + ',' + String(gamupet.c.pix.off.a)
            + ')';

        gamupet.chardraw.init(
            {
                canvas: canvas,
                dim: {
                    char: gamupet.c.dim.char
                },
                pix: {
                    on: gamupet.c.pix.on,
                    off: gamupet.c.pix.off
                },
                chars: gamupet.c.chars
            });

        gamupet.gameloop.init(
            {
                dim: {
                    width: gamupet.c.dim.screen.width
                            / gamupet.c.dim.char.width,
                    height: gamupet.c.dim.screen.height
                            / gamupet.c.dim.char.height
                },
                charCount: gamupet.c.charCount,
                drawAt: gamupet.chardraw.at
            });

        gamupet.gameloop.start();
    };

    window.addEventListener('load', f.onLoad);
}());
