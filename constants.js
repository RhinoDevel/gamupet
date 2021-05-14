
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called c, which is an object to hold constants.
 */
(function() // IIFE
{
    'use strict';

    var c = {};

    c.dim = {};

    c.dim.screen = { width: 320, height: 200 }; // Commodore screen dimensions.

    c.dim.char = { width: 8, height: 8 }; // Commodore character dimensions.

    c.pix = {};
    c.pix.on = { r: 0, g: 255, b: 0, a: 255 }; // Pixel values for ON.
    c.pix.off = { r: 100, g: 100, b: 100, a: 255 }; // Pixel values for OFF.

    gamupet.c = c;
}());
