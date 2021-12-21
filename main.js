
// (c) Marcel Timm, RhinoDevel, 2021

/** To be executed as last JavaScript file on page load.
 */
(function() // IIFE
{
    'use strict';

    var f = {};

    f.prepareBodyForFullScreen = function()
    {
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.border = '0px none';
        document.body.style.padding = '0px';
        document.body.style.margin = '0px';
    };

    f.createContainer = function(width, height)
    {
        var retVal = document.createElement('div');

        retVal.style.width = String(width) + 'px';
        retVal.style.height = String(height) + 'px';
        retVal.style['background-color'] = 'lightgray';
        retVal.style.display = 'flex';
        retVal.style['justify-content'] = 'center';
        retVal.style['align-items'] = 'center';

        return retVal;
    };

    f.onLoad = function()
    {
        var ele = document.createElement('div'),
            canvas = null,
            container = null,
            outerDim = {};

        if(gamupet.c.fullscreen)
        {
            f.prepareBodyForFullScreen();

            outerDim.width = document.body.clientWidth;
            outerDim.height = document.body.clientHeight;
        }
        else
        {
            outerDim.width = 640;
            outerDim.height = 480;            
        }

        container = f.createContainer(outerDim.width, outerDim.height);
        
        ele.style.order = String(1);
        ele.style.position = 'relative';

        container.appendChild(ele);
        document.body.appendChild(container);

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
