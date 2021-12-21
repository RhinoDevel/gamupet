
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called freqplay.
 */
(function() // IIFE
{
    'use strict';

    var f = {}, v = {}, o = {};

    v.ctx = null;
    v.osci = null;

    f.on = function(freq)
    {
        v.osci.frequency.setValueAtTime(freq, v.ctx.currentTime);
    };
    f.off = function()
    {
        f.on(0);
    };

    f.init = function()
    {
        var osciParams = {
                type: 'square',
                channelCount: 1,
                channelCountMode: 'explicit',
                frequency: 0 // Hz
                //detune
                // ...
            };

        v.ctx = new AudioContext();//webkitAudioContext
        v.osci = new OscillatorNode(v.ctx, osciParams);
        
        v.osci.connect(v.ctx.destination);
        
        v.osci.start();
    };

    o.on = f.on;
    o.off = f.off;
    o.init = f.init;

    gamupet.freqplay = o;
}());
