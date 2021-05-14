
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called chardraw.
 */
(function() // IIFE
{
    'use strict';

    var f = {}, v = {}, o = {};

    f.init = function(p)
    {
        v.canvas = p.canvas;

        v.dim = {};
        v.dim.char = p.dim.char;
        v.dim.screen = { width: v.canvas.width, height: v.canvas.height };

        v.pix = {};
        v.pix.on = p.pix.on;
        v.pix.off = p.pix.off;

        v.chars = p.chars;

        v.context = v.canvas.getContext('2d');
    };

    /** Return pixel representation of character with given nr.
     */
    f.getPixels = function(c)
    {
        var i = c * v.dim.char.height;

        return v.chars.slice(i, i + v.dim.char.height);
    };

    /** Converts given coordinates of a character into pixel (start) position.
     */
    f.getCharPos = function(charX, charY)
    {
        return { x: v.dim.char.width * charX, y: v.dim.char.height * charY };  
    };

    f.at = function(charX, charY, c)
    {
        var pos = f.getCharPos(charX, charY),
            pixels = f.getPixels(c),
            imgData = v.context.getImageData(
                pos.x, pos.y, v.dim.char.width, v.dim.char.height),
            row = 0,
            col = 0,
            offsetY = 0,
            offsetX = 0,
            channelOffset = 0,
            val = 0,
            pix = null;

        for(row = 0;row < v.dim.char.height; ++row)
        {
            offsetY = row * v.dim.char.width;

            for(col = 0;col < v.dim.char.width; ++col)
            {
                offsetX = offsetY + col;
                channelOffset = offsetX * 4; // (RGBA).

                val = (pixels[row] >> (v.dim.char.width - 1 - col)) & 1;
                pix = val === 0 ? v.pix.off : v.pix.on;

                imgData.data[channelOffset + 0] = pix.r; // R
                imgData.data[channelOffset + 1] = pix.g; // G
                imgData.data[channelOffset + 2] = pix.b; // B
                imgData.data[channelOffset + 3] = pix.a; // A
            }
        }

        v.context.putImageData(imgData, pos.x, pos.y);
    };

    o.init = f.init;
    o.at = f.at;

    gamupet.chardraw = o;
}());
