
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called room.
 *  room.init() is a function to be run AFTER page load (to get correct body
 *  dimensions).
 */
(function() // IIFE
{
    'use strict';

    var f = {}, c = {}, v = {}, o = {};

    c.dim = {};

    /**
     *  - To be called during initialization. 
     */
    f.getPixelFactor = function()
    {
        var dev = {
                w: document.body.clientWidth, h: document.body.clientHeight
        };

        if(dev.w / dev.h > c.dim.bgAbs.w / c.dim.bgAbs.h)
        {
            return dev.h / c.dim.bgAbs.h;
        }
        return dev.w / c.dim.bgAbs.w;
    };

    f.pixelFactor = function(num)
    {
        return Math.trunc(c.pixelFactor * num);
    };

    f.getCanvas = function()
    {
        return v.bg;
    };

    /**
     * - Alters given element's dimensions.
     */
    f.init = function(p)
    {
        c.dim.bgAbs = { w: p.width, h: p.height };

        c.pixelFactor = f.getPixelFactor();
        
        c.dim.bg = { 
            w: f.pixelFactor(c.dim.bgAbs.w), h: f.pixelFactor(c.dim.bgAbs.h)
        };
        
        v.bg = p.createCanvas(
            0, 0, c.dim.bg.w, c.dim.bg.h, c.dim.bgAbs.w, c.dim.bgAbs.h);
        p.ele.appendChild(v.bg);

        p.ele.style.width = String(c.dim.bg.w) + 'px';
        p.ele.style.height = String(c.dim.bg.h) + 'px';
    };

    o.init = f.init;
    o.getCanvas = f.getCanvas;

    gamupet.room = o;
}());
