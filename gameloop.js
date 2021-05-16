
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

    // f.drawSample = function()
    // {
    //     var ch = 0, row = 0, col = 0;
    //
    //     for(row = 0; row < c.dim.height; ++row)
    //     {
    //         for(col = 0;col < c.dim.width; ++col)
    //         {
    //             f.drawAt(col, row, ch);
    //
    //             ++ch;
    //             ch = ch % c.charCount; 
    //         }
    //     }
    // };

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

        f.drawAt(
            f.getRand(0, c.dim.width - 1),
            f.getRand(0, c.dim.height - 1),
            f.getRand(0, c.charCount - 1));

        window.requestAnimationFrame(f.loop);
    };

    f.init = function(p)
    {
        c.dim = p.dim;
        c.charCount = p.charCount;

        f.drawAt = p.drawAt;

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
