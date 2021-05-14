
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called ele, which is an object holding functions to create
 *  and handle HTML elements.
 */
(function() // IIFE
{
    'use strict';

    gamupet.ele = {};

    gamupet.ele.createCanvas = function(t, l, w, h)
    {
        var retVal = document.createElement('canvas');

        if(typeof t === 'number')
        {
            retVal.style.position = 'absolute';
            retVal.style.top = String(t) + 'px';
        }
        if(typeof l === 'number')
        {
            retVal.style.position = 'absolute';
            retVal.style.left = String(l) + 'px';
        }

        if(typeof w === 'number')
        {
            retVal.style.width = String(w) + 'px';
        }
        if(typeof h === 'number')
        {
            retVal.style.height = String(h) + 'px';
        }

        return retVal;
    };

    // gamupet.ele.removeChildren = function(ele)
    // {
    //     while(ele.firstChild!==null)
    //     {
    //         ele.removeChild(ele.firstChild);
    //     }
    // };
}());
