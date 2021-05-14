
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  properties called roomLateInit and room.
 *  roomLateInit() is a function to be run AFTER page load (to get correct body
 *  dimensions), room.init() must be run after that.
 */
(function() // IIFE
{
    'use strict';

    var f = {}, c = {}, v = {};

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

    // f.getRand = function(min, max)
    // {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // };

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
    f.init = function(ele)
    {
        v.bg = gamupet.ele.createCanvas(
            0, 0, c.dim.bg.w, c.dim.bg.h, c.dim.bgAbs.w, c.dim.bgAbs.h);
        ele.appendChild(v.bg);

        ele.style.width = String(c.dim.bg.w) + 'px';
        ele.style.height = String(c.dim.bg.h) + 'px';
    };

    /** To be run AFTER page load to augment global gamupet object with new
     *  property called room, which is an object holding functions to create
     *  and handle a dressing room.
     */
    gamupet.roomLateInit = function(width, height)
    {
        c.dim.bgAbs = { w: width, h: height };

        c.pixelFactor = f.getPixelFactor();
        
        c.dim.bg = { 
            w: f.pixelFactor(c.dim.bgAbs.w), h: f.pixelFactor(c.dim.bgAbs.h)
        };
        
        gamupet.room = {};
        gamupet.room.init = f.init;
        gamupet.room.getCanvas = f.getCanvas;
    };
}());
