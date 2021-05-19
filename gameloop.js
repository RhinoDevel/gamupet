
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called gameloop.
 */
(function() // IIFE
{
    'use strict';

    var f = {}, c = {}, v = {}, o = {};

    f.getRand = function(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    f.drawAllPetCharsWithModeAt = function(startRow, graphicsMode)
    {
        var ch = 0, row = 0, col = 0;
    
        for(row = startRow; row < c.dim.height && ch < c.charCount; ++row)
        {
            for(col = 0;col < c.dim.width && ch < c.charCount; ++col)
            {
                f.drawPetAt(col, row, graphicsMode, ch);
    
                ++ch;
            }
        }
    };
    f.drawAllPetChars = function()
    {
        f.drawAllPetCharsWithModeAt(0, true);
        f.drawAllPetCharsWithModeAt(8, false);
    };

    f.loop = function(timestamp)
    {
        // This is normally at 60 FPS/Hz:
        //
        console.log(
            'FPS: '
                + String(
                    Math.round(
                        1.0 / ((timestamp - v.last_timestamp) / 1000.0))));
        v.last_timestamp = timestamp;

        f.drawPetAt(
            f.getRand(0, c.dim.width - 1),
            f.getRand(0, c.dim.height - 1),
            true, // Graphics mode ON.
            f.getRand(0, c.charCount - 1));
        //
        //f.drawAllPetChars();

        window.requestAnimationFrame(f.loop);
    };

    f.init = function(p)
    {
        c.dim = p.dim;
        c.charCount = p.charCount;

        f.drawPetAt = p.drawPetAt;

        v.last_timestamp = 0;
    };

    f.start = function()
    {
        window.requestAnimationFrame(f.loop);
    };

    o.init = f.init;
    o.start = f.start;

    gamupet.gameloop = o;
}());
