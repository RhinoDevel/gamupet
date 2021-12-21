
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
            canvas = null,
            container = null,
            outerDim = {};

        if(gamupet.c.fullscreen)
        {
            container = document.body;

            container.style.width = '100%';
            container.style.height = '100%';
            container.style.border = '0px none';
            container.style.padding = '0px';
            container.style.margin = '0px';

            outerDim.width = document.body.clientWidth;
            outerDim.height = document.body.clientHeight;
        }
        else
        {
            container = document.createElement('div');

            outerDim.width = 640;
            outerDim.height = 480;

            container.style.width = String(outerDim.width) + 'px';
            container.style.height =  String(outerDim.height) + 'px';

            document.body.appendChild(container);
        }

        ele.style.order = String(1);
        ele.style.position = 'relative';

        container.style['background-color'] = 'lightgray';

        container.style.display = 'flex';
        container.style['justify-content'] = 'center';
        container.style['align-items'] = 'center';

        container.appendChild(ele);

        canvas = gamupet.room.init(
            {
                dim: {
                    inner: gamupet.c.dim.screen,
                    outer: outerDim
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

        gamupet.demo.init(
            {
                dim: {
                    width: gamupet.c.dim.screen.width
                            / gamupet.c.dim.char.width,
                    height: gamupet.c.dim.screen.height
                            / gamupet.c.dim.char.height
                },
                charCount: gamupet.c.charCount,

                drawPetAt: gamupet.chardraw.petAt,
                getRand: gamupet.math.getRand
            });

        gamupet.gameloop.init(
            {
                freq: gamupet.c.freq,
                onLoop: gamupet.demo.onLoop
            });

        gamupet.gameloop.start();
    };

    window.addEventListener('load', f.onLoad);
}());
