//==============================================================================
// autotileWaterSpeed.js
//==============================================================================

var Imported = Imported || {};
Imported.autotileWaterSpeed = true;

var autotileWaterSpeed = {};

/*:
* @plugindesc Adjusts the speed of the animated water autotiles.
* @target MZ
* @author willow
* @url https://forums.rpgmakerweb.com/threads/autotile-water-speed-animation-adjustment.183752/
*
* @param speed
* @text Water update speed
* @desc Frames between water tile updates. 60 frames = 1 second 
* @default 10
* @min 1
*
*
* @command set
* @text Set Water Speed
* @desc Adjust the water animation from an event.
* 
* @arg speed
* @type number
* @min 1
* @default 10
* @text Water update speed
* @desc Frames between water tile updates. 60 frames = 1 second 
* 
* 
* 
* 
* @help 
* ----------------------------------------------------------------------------
*  autotile water speed v1.0 by willow
*  released into the public domain / free for any usage
* ----------------------------------------------------------------------------
*
* Plugin command "set" lets you adjust this from an event! :)

*/


(() => {

autotileWaterSpeed.Parameters = PluginManager.parameters('autotileWaterSpeed');
autotileWaterSpeed.speed = Number(autotileWaterSpeed.Parameters['speed']);


PluginManager.registerCommand('autotileWaterSpeed', "set", args => {
        autotileWaterSpeed.speed = args.speed;
        
    });

Tilemap.prototype.update = function() {
    this.animationCount++;
    this.animationFrame = Math.floor(this.animationCount / autotileWaterSpeed.speed);
    for (const child of this.children) {
        if (child.update) {
            child.update();
        }
    }
};

})();
