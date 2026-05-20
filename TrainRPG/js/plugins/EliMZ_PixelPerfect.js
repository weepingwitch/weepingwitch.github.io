//==========================================================================
// EliMZ_PixelPerfect.js
//==========================================================================

/*:
@target MZ
@base EliMZ_Book

@plugindesc ♦1.0.0♦ Pixel perfect rendering
@author Hakuen Studio
@url https://docs.google.com/document/d/1pf9V5VRbmZwbJKMSyEFpcPso6tIT504QaGAfuIdtz1Y/edit?usp=sharing

@help
↑↑↑ HOW TO USE / HELP FILE ABOVE ↑↑↑

★★★★★ → Rate the plugin! Please, is very important to me ^^
https://hakuenstudio.itch.io/hakuen-studio-pixel-perfect-for-rpg-maker-mz/rate?source=game

♦ TERMS OF USE
https://www.hakuenstudio.com/terms-of-use-5-0-0

♦ DOWNLOAD
https://hakuenstudio.itch.io/hakuen-studio-pixel-perfect-for-rpg-maker-mz

♦ SUPPORT
https://hakuenstudio.itch.io/hakuen-studio-pixel-perfect-for-rpg-maker-mz/community

♦ FEATURES
- Pixelated Rendering → Forces the game canvas and related HTML elements 
to use pixelated rendering (image-rendering)
- PIXI Nearest Scaling → Sets PIXI to use NEAREST scale mode, ensuring 
textures are scaled without interpolation.
- Pixel Rounding → Enables PIXI.settings.ROUND_PIXELS to avoid sub-pixel 
positioning artifacts during movement and scrolling.
- Bitmap Smoothing Disabled → Forces the internal Bitmap smoothing flag 
to remain disabled.
- Plug and Play → Just install the plugin to activate pixel-perfect 
rendering.
- Use EliMZ_ScreenManager.js if you want to only let the game window resize
using only integer values.

*/

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_PixelPerfect = true

if(!Imported.Eli_Book && !window.eliErrorTriggered){
	window.eliErrorTriggered = true
	if(confirm(`All EliMZ plugins need the core plugin EliMZ_Book. Click OK to download it and install somewhere above all other EliMZ plugins.`)){
		window.location.href = "https://hakuenstudio.itch.io/eli-book-rpg-maker-mv-mz"
	}
	SceneManager.exit()
}

Eli.PixelPerfect = {

	Parameters: class Parameters{
		constructor(parameters){
			
		}	
	},

	initialize(){
		// this.initParameters()
		// this.initPluginCommands()
		Eli.VersionManager.register("EliMZ_PixelPerfect", "1.0.0")
	},

	initParameters(){
		const parameters = PluginManager.parameters("EliMZ_PixelPerfect")
		this.parameters = new this.Parameters(parameters)
	},

	initPluginCommands(){
		const commands = []
		Eli.PluginManager.registerCommands(this, commands, "EliMZ_PixelPerfect")
	},

	getParam(){
		return this.parameters
	},

	setPixelPerfect(elements){
		for(const element of elements){
			this.setElementToPixelPerfect(element)
		}
		this.setPixelPerfectOnPIXI()
	},

	setElementToPixelPerfect(element){
		if(element?.style){
			element.style.imageRendering = "crisp-edges"
			element.style.imageRendering = "-moz-crisp-edges"
			element.style.imageRendering = "pixelated"
		}
	},

	setPixelPerfectOnPIXI(){
		PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
		PIXI.settings.ROUND_PIXELS = true
	},

}

{

const Plugin = Eli.PixelPerfect
const Alias = {}

Plugin.initialize()

/* ========================================================================== */
/*                                  GRAPHICS                                  */
/* ========================================================================== */

Alias.Graphics_createCanvas = Graphics._createCanvas
Graphics._createCanvas = function() {
	Alias.Graphics_createCanvas.call(this)
	Plugin.setPixelPerfect([document.body, this._canvas])
}

Alias.Graphics_updateCanvas = Graphics._updateCanvas
Graphics._updateCanvas = function() {
	Alias.Graphics_updateCanvas.call(this)
	Plugin.setPixelPerfect([document.body, this._canvas])
}

Alias.Graphics_onPixiSetup = Graphics.onPixiSetup
Graphics.onPixiSetup = function() {
	Plugin.setPixelPerfectOnPIXI()
	Alias.Graphics_onPixiSetup.call(this)
}

Alias.Graphics__createLoadingSpinner = Graphics._createLoadingSpinner
Graphics._createLoadingSpinner = function() {
	Alias.Graphics__createLoadingSpinner.call(this)
	Plugin.setElementToPixelPerfect(this._loadingSpinner)
}

Alias.Graphics__centerElement = Graphics._centerElement
Graphics._centerElement = function(element) {
	Alias.Graphics__centerElement.call(this, element)
	Plugin.setElementToPixelPerfect(element)
}

/* ========================================================================== */
/*                                   BITMAP                                   */
/* ========================================================================== */

Alias.Bitmap__createBaseTexture = Bitmap.prototype._createBaseTexture
Bitmap.prototype._createBaseTexture = function(source) {
	if(source){
		Plugin.setElementToPixelPerfect(source)
	}
	Alias.Bitmap__createBaseTexture.call(this, source)
}

Object.defineProperty(Bitmap.prototype, "_smooth", {
	get(){
		return false
	},
	set(value){
	},
	configurable: false
})

}