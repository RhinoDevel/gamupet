
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called c, which is an object to hold constants.
 */
(function() // IIFE
{
    'use strict';

    gamupet.c = {};

    gamupet.c.screen = { width: 320, height: 200 };
}());
