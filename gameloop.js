
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called gameloop.
 */
(function() // IIFE
{
    'use strict';

    var f = {}, v = {}, o = {};

    f.drawSample = function()
    {
        var c = 0, row = 0, col = 0;
    
        for(row = 0; row < v.dim.height && c < v.charCount; ++row)
        {
            for(col = 0;col < v.dim.width && c < v.charCount; ++col)
            {
                f.drawAt(col, row, c);
    
                ++c;
            }
        }
    };

    f.init = function(p)
    {
        v.dim = p.dim;
        v.charCount = p.charCount;

        f.drawAt = p.drawAt;
    };

    f.start = function()
    {
        f.drawSample();
    };

    o.init = f.init;
    o.start = f.start;

    gamupet.gameloop = o;
}());
