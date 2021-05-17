
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called room.
 *  room.init() is a function to be run AFTER page load (to get correct body
 *  dimensions).
 */
(function() // IIFE
{
    'use strict';

    var f = {}, c = {}, o = {};

    /**
     *  - To be called during initialization. 
     */
    f.getPixelFactor = function(dimInner, dimOuter)
    {
        if(dimOuter.width / dimOuter.height > dimInner.width / dimInner.height)
        {
            return dimOuter.height / dimInner.height;
        }
        return dimOuter.width / dimInner.width;
    };

    f.pixelFactor = function(num)
    {
        return Math.trunc(c.pixelFactor * num);
    };

    /**
     * - Alters given element's dimensions.
     * - Returns canvas element.
     */
    f.init = function(p)
    {
        var retVal = null, eleDim = null;

        c.pixelFactor = f.getPixelFactor(p.dim.inner, p.dim.outer);
        
        eleDim = { 
            width: f.pixelFactor(p.dim.inner.width),
            height: f.pixelFactor(p.dim.inner.height)
        };
        
        retVal = p.createCanvas(
            0, 0, 
            eleDim.width, eleDim.height, 
            p.dim.inner.width, p.dim.inner.height);
        p.ele.appendChild(retVal);

        p.ele.style.width = String(eleDim.width) + 'px';
        p.ele.style.height = String(eleDim.height) + 'px';

        return retVal;
    };

    o.init = f.init;

    gamupet.room = o;
}());
