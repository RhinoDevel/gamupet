
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called keyboard.
 */
(function() // IIFE
{
    'use strict';

    var f = {}, v = {}, o = {};

    v.state = {};
    v.whitelist = null;

    f.onUp = function(e)
    {
        if(e.key in v.state)
        {
            v.state[e.key] = false;
        }
    };
    f.onDown = function(e)
    {
        if(Array.isArray(v.whitelist) && v.whitelist.indexOf(e.key) === -1)
        {
            return; // Ignore, because key is not on (existing) whitelist.
        }

        // No whitelist, or key is on whitelist.

        v.state[e.key] = true;
    };

    f.isPressed = function(key)
    {
        // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key

        if(!(key in v.state))
        {
            return false;
        }
        return v.state[key];
    };

    /**
     * - Maximum length given is optional. If set, just the first found pressed
     *   keys will be returned, until the maximum length equals the count of
     *   found keys.
     */
    f.getPressed = function(maxLen)
    {
        var retVal = [],
            key = null,
            maxLenToUse = typeof maxLen === 'number' && !isNaN(maxLen)
                ? maxLen : null;

        for(key in v.state)
        {
            if(!v.state[key])
            {
                continue;
            }
            
            retVal.push(key);
            
            if(maxLenToUse !== null && retVal.length === maxLen)
            {
                break;
            }
        }
        return retVal;
    };

    /**
     * p = {
     *     whitelist: Optional array of key values leading to ignoring all other
     *                keys getting pressed/released, see:
     *                https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
     * }
     */
    f.init = function(p)
    {
        if(typeof p === 'object' && p !== null)
        {
            if(Array.isArray(p.whitelist))
            {
                v.whitelist = p.whitelist;
            }
            //
            // Otherwise: A non-existing whitelist will be ignored,
            //            an empty whitelist will work (stupid?).
        }

        window.addEventListener('keyup', f.onUp);
        window.addEventListener('keydown', f.onDown);
    };

    o.init = f.init;
    o.isPressed = f.isPressed;
    o.getPressed = f.getPressed;

    gamupet.keyboard = o;
}());
