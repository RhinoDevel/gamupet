
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called math, which is an object holding functions related to
 *  mathematics.
 */
(function() // IIFE
{
    'use strict';

    var f = {}, o = {};

    f.getRand = function(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    o.getRand = f.getRand;

    gamupet.math = o;
}());
