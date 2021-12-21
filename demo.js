
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called demo.
 */
(function() // IIFE
{
    'use strict';

    var f = {}, c = {}, v = {}, o = {};

    f.drawAllPetCharsWithModeAt = function(startRow, graphicsMode)
    {
        var ch = 0, row = 0, col = 0;
    
        for(row = startRow; row < c.dim.height && ch < c.charCount; ++row)
        {
            for(col = 0;col < c.dim.width && ch < c.charCount; ++col)
            {
                f.drawPetAt(col, row, graphicsMode, ch);
    
                ++ch;
            }
        }
    };
    f.drawAllPetChars = function()
    {
        f.drawAllPetCharsWithModeAt(0, true);
        f.drawAllPetCharsWithModeAt(8, false);
    };

    f.onLoop = function(/*timestamp*/)
    {
        f.drawPetAt(
            f.getRand(0, c.dim.width - 1),
            f.getRand(0, c.dim.height - 1),
            true, // Graphics mode ON.
            f.getRand(0, c.charCount - 1));
        //
        //f.drawAllPetChars();

        if(v.keyboard.isPressed(c.key))
        {
            if(!v.isPlaying)
            {
                v.freqplay.on(c.freq);
                v.isPlaying = true;
            }
        }
        else
        {
            if(v.isPlaying)
            {
                v.freqplay.off();
                v.isPlaying = false;
            }
        }
    };

    f.init = function(p)
    {
        c.key = 'a';
        c.freq = 440; // Hz
        c.dim = p.dim;
        c.charCount = p.charCount;

        f.drawPetAt = p.drawPetAt;
        f.getRand = p.getRand;

        v.freqplay = p.freqplay;
        v.keyboard = p.keyboard;

        v.playing = false;
    };

    o.init = f.init;
    o.onLoop = f.onLoop;

    gamupet.demo = o;
}());
