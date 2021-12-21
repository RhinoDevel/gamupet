
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called gameloop.
 */
(function() // IIFE
{
    'use strict';

    var f = {}, c = {}, v = {}, o = {};

    c.freq = 60.0; // Hz (default value). Refresh rate (usually 50Hz or 60Hz).

    v.last_timestamp = 0.0;
    v.time = -1.0; // ms
    v.onLoop = null;

    f.loop = function(timestamp)
    {
        var elapsed = timestamp - v.last_timestamp; // ms

        window.requestAnimationFrame(f.loop);

        if(elapsed < v.time)
        {
            return;
        }
        
        // Getting exactly 50Hz, 60Hz or other wanted values is not always
        // possible, depends on elapsed time between two calls of the loop
        // function which itself depends on hardware and OS:
        //
        console.log(
        'Elapsed: ' + String(elapsed)
        + ' '
        + 'FPS: '
            + String(
                Math.round(
                    1.0 / (elapsed / 1000.0))));
        
        v.last_timestamp = timestamp;

        v.onLoop(timestamp); // ms
    };

    f.init = function(p)
    {
        var freq = c.freq;

        v.onLoop = p.onLoop;

        if(typeof p.freq === 'number')
        {
            freq = p.freq;
        }
        v.time = 1.0 / freq; // s (because frequency is in Hz).
        v.time = 1000.0 * v.time; // ms
    };

    f.start = function()
    {
        window.requestAnimationFrame(f.loop);
    };

    o.init = f.init;
    o.start = f.start;

    gamupet.gameloop = o;
}());
 