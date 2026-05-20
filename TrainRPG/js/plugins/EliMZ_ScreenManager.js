//==========================================================================
// EliMZ_ScreenManager.js
//==========================================================================

/*:
@target MZ
@base EliMZ_Book

@plugindesc ♦1.0.1♦ Manage game scale/fullscreen/resolution
@author Hakuen Studio
@url https://docs.google.com/document/d/1QmEzGG_YsFkVQjZYAnoJpZH34Bo8u-RyegXN0KiS26U/edit?usp=sharing

@help
↑↑↑ HOW TO USE / HELP FILE ABOVE ↑↑↑

★★★★★ → Rate the plugin! Please, is very important to me ^^
https://hakuenstudio.itch.io/hakuen-studio-screen-manager-for-rpg-maker-mz/rate?source=game

♦ TERMS OF USE
https://www.hakuenstudio.com/terms-of-use-5-0-0

♦ DOWNLOAD
https://hakuenstudio.itch.io/hakuen-studio-screen-manager-for-rpg-maker-mz

♦ SUPPORT
https://hakuenstudio.itch.io/hakuen-studio-screen-manager-for-rpg-maker-mz/community

♦ FEATURES

- Optionally Integer-based screen scaling
- Screen scale control via the Options menu
- Automatically build the scaling options according to the device screen size and game resolution
- Change scale pressing a keyboard button
- Automatic reset of scale when changing resolution
- Optional resolution selector in the Options menu
- Optional fullscreen toggle in the Options menu
- NW.js window resizing to exact integer scales
- Proper handling of UI area size using either database values or resolution-based values
- Persistent storage of scale, fullscreen, and resolution settings

@param -- Scaling --

@param integerScaling
@text Integer Scale Only
@type boolean
@desc Set to true if you want for the scaling only works by integer numbers.
@default true

@param defaultScale
@text Default Scale
@type number
@min 1
@max 99
@desc Default scale. Must exist in Scale List.
@default 1

@param scaleList
@text Scale List
@type string
@desc 0 → Will fill a list automatically. Or separate each scale with a comma. Always start with 1.
@default 0

@param allowFractionalDownscale
@text Allow Fractional Downscale
@type boolean
@desc If screen is smaller than game, allow scale less than 1. Does not work with Integer Scaling.
@default true

@param scaleKey
@text Scale Key
@type string
@desc Key to cycle scale. Leave empty to not use.
@default F6

@param -- Resolution --

@param resolutionList
@text Resolution list
@type multiline_string
@desc Separate each resolution option on different lines. Leave empty to not use.
@default 816x624
1280x720
1920x1080

@param defaultResolutionIndex
@text Default Resolution Index
@type number
@min 0
@max 99
@desc Default resolution list index. 0 = first resolution.
@default 0

@param uiAreaFollowScreenSize
@text Ui Area = Screen Size
@type boolean
@desc If true, ui area will be equal to screen size. Recommended set to true.
@default true

@param hideOverflow
@text Hide Overflow
@type boolean
@desc Prevent scrollbars on resize/stretch
@default true

@param -- Fullscreen --

@param startFullscreen
@text Start Fullscreen
@type boolean
@desc Start game in fullscreen mode
@default false

@param -- Options --

@param addScaleOption
@text Add Scale Option
@type boolean
@desc Add scale option to options menu.
@default true

@param optionTextScale
@text Scale Text
@type string
@desc Options label for Screen Scale
@default Screen Scale
@parent addScaleOption

@param addFullscreenOption
@text Add Fullscreen Option
@type boolean
@desc Add fullscreen option to options menu.
@default true

@param optionTextFullscreen
@text Fullscreen Text
@type string
@desc Options label for Fullscreen
@default Fullscreen
@parent addFullscreenOption

@param addResolutionOption
@text Add Resolution Option
@type boolean
@desc Add resolution option to options menu.
@default true

@param optionTextResolution
@text Resolution Text
@type string
@desc Options label for Resolution
@default Resolution
@parent addResolutionOption

*/

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_ScreenManager = true

if(!Imported.Eli_Book && !window.eliErrorTriggered){
	window.eliErrorTriggered = true
	if(confirm(`All EliMZ plugins need the core plugin EliMZ_Book. Click OK to download it and install somewhere above all other EliMZ plugins.`)){
		window.location.href = "https://hakuenstudio.itch.io/eli-book-rpg-maker-mv-mz"
	}
	SceneManager.exit()
}

Eli.ScreenManager = {

	symbols: {
		screenScale: "screenScale",
		fullscreen: "fullscreen",
		screenResolutionIndex: "screenResolutionIndex",
	},
	currentScaleList: [1],
	autoScaleCacheKey: "",
	autoScaleCacheList: null,
	nwFrameWidth: 0,
	nwFrameHeight: 0,
	hasNwFrame: false,
	centerCamera: false,

	Parameters: class Parameters{
		constructor(parameters){
			this.scaleKey = parameters.scaleKey.trim().toUpperCase()
			this.defaultScale = Number(parameters.defaultScale) || 1
			this.scaleList = parameters.scaleList ? parameters.scaleList.split(",").map(item => Number(item)) : []
			this.integerScaling = parameters.integerScaling === "true"

			this.resolutionList = parameters.resolutionList ? parameters.resolutionList.split("\n").map(item => {
				const text = item.trim()
				const [width, height] = item.split("x")
				return {width:Number(width), height: Number(height), text: text}
			}) : null

			this.defaultResolutionIndex = Number(parameters.defaultResolutionIndex)

			this.uiAreaFollowScreenSize = parameters.uiAreaFollowScreenSize === "true"
			this.startFullscreen = parameters.startFullscreen === "true"

			this.addScaleOption = parameters.addScaleOption === "true"
			this.addFullscreenOption = parameters.addFullscreenOption === "true"
			this.addResolutionOption = parameters.addResolutionOption === "true"

			this.optionTextScale = parameters.optionTextScale || "Screen Scale"
			this.optionTextFullscreen = parameters.optionTextFullscreen || "Fullscreen"
			this.optionTextResolution = parameters.optionTextResolution || "Resolution"

			this.allowFractionalDownscale = parameters.allowFractionalDownscale === "true"
			this.hideOverflow = parameters.hideOverflow === "true"
		}
	},

	initialize(){
		this.initParameters()
		Eli.VersionManager.register("EliMZ_ScreenManager", "1.0.1")
	},

	initParameters(){
		const parameters = PluginManager.parameters("EliMZ_ScreenManager")
		this.parameters = new this.Parameters(parameters)
	},

	initPluginCommands(){
		const commands = []
		Eli.PluginManager.registerCommands(this, commands, "EliMZ_ScreenManager")
	},

	getParam(){
		return this.parameters
	},

	hideOverflow(){
		if(this.getParam().hideOverflow){
			document.body.style.overflow = "hidden"
			document.documentElement.style.overflow = "hidden"
		}
	},

	needCenterCamera(){
		return this.centerCamera
	},

	centralizeCamera(){
		$gamePlayer.center($gamePlayer.x, $gamePlayer.y)
		this.centerCamera = false
	},

	getSavedFullscreen(){
		return ConfigManager[this.symbols.fullscreen]
	},

	setSavedFullScreen(value){
		ConfigManager[this.symbols.fullscreen] = !!value
		ConfigManager.save()
	},

	restoreSavedResolution(){
		if(this.hasResolutionList()){
			const res = this.getCurrentResolution()

			if(res){
				this.applyResolution(res.width, res.height, true)
			}
		}
	},

	getCurrentResolution(){
		const index = this.getSavedResolutionIndex()
		const res = this.getResolutionByIndex(index)

		return res
	},

	getSavedResolutionIndex(){
		return ConfigManager[this.symbols.screenResolutionIndex]
	},

	getResolutionByIndex(index){
		return this.getParam().resolutionList[index]
	},

	applyResolution(w, h, isRestoringResolution){
		Graphics.resize(w, h)

		if(this.getParam().uiAreaFollowScreenSize){
			this.refreshBoxSize(Graphics.width, Graphics.height)
		}else{
			this.refreshBoxSize($dataSystem.advanced.uiAreaWidth, $dataSystem.advanced.uiAreaHeight)
		}

		if(!isRestoringResolution){
			this.setSavedScale(1)
		}
		
		this.resetAutoScaleCache()
		this.refreshCurrentScaleList()
		this.requestCameraRefresh()

		Graphics._stretchEnabled = true
		Graphics._updateAllElements()

		this.updateNwFrameCache()
		this.applyWindowScaleNwjs(1)
	},

	refreshBoxSize(width, height){
		const boxMargin = 4

		Graphics.boxWidth = width - boxMargin * 2
		Graphics.boxHeight = height - boxMargin * 2
	},

	setSavedScale(value){
		ConfigManager[this.symbols.screenScale] = value
		ConfigManager.save()
	},

	resetAutoScaleCache(){
		this.autoScaleCacheKey = ""
		this.autoScaleCacheList = null
	},

	refreshCurrentScaleList(){
		let scales = []

		if(this.isAutoScaleMode()){
			scales = this.getCachedAutoScaleList()
		}else{
			const maxScale = this.getMaxValidScaleAuto()

			for(const scale of this.getParam().scaleList){
				if(scale > maxScale){
					scales.push(maxScale)
					break
				}else{
					scales.push(scale)
				}
			}
		}

		if(scales.length === 0){
			scales = [1]
		}

		this.currentScaleList = scales

		const current = this.getSavedScale()
		if(!this.currentScaleList.includes(current)){
			this.setSavedScale(this.currentScaleList[0])
		}
	},

	isAutoScaleMode(){
		return this.getParam().scaleList.length === 1 && this.getParam().scaleList[0] === 0
	},

	getCachedAutoScaleList(){
		const key = this.makeAutoScaleCacheKey()

		if(this.autoScaleCacheList && this.autoScaleCacheKey === key){
			return this.autoScaleCacheList
		}else{
			const max = this.getMaxValidScaleAuto()
			const list = Eli.Array.createProgressiveNumbers(1, max)

			this.autoScaleCacheKey = key
			this.autoScaleCacheList = list.length ? list : [1]
			
			return this.autoScaleCacheList
		}
	},

	makeAutoScaleCacheKey(){
		const baseWidth = Graphics.width
		const baseHeight = Graphics.height

		if(Utils.isNwjs()){
			const availWidth = screen.availWidth || screen.width || 0
			const availHeight = screen.availHeight || screen.height || 0

			if(this.hasNwFrame){
				var frameWidth = this.nwFrameWidth
				var frameHeight = this.nwFrameHeight
			}else{
				var frameWidth = Math.max(0, window.outerWidth - window.innerWidth)
				var frameHeight = Math.max(0, window.outerHeight - window.innerHeight)
			}

			return "nw:" + String(availWidth) + "x" + String(availHeight) + ":" + String(frameWidth) + "x" + String(frameHeight) + ":" + String(baseWidth) + "x" + String(baseHeight)
		}else{
			const stretchWidth = Graphics._stretchWidth()
			const stretchHeight = Graphics._stretchHeight()

			return `web:${stretchWidth}x${stretchHeight}:${baseWidth}x${baseHeight}`
			
		}
	},

	getMaxValidScaleAuto(){
		if(Utils.isNwjs()){
			return this.getMaxValidScaleForNwjs()

		}else if(Graphics.width > 0 && Graphics.height > 0){
			const horizontal = Graphics._stretchWidth() / Graphics.width
			const vertical = Graphics._stretchHeight() / Graphics.height

			if(this.getParam().integerScaling){
				return Math.max(1, Math.floor(Math.min(horizontal, vertical)))
			}else{
				return Math.max(1, Math.min(horizontal, vertical))
			}
			
		}else{
			return 1
		}
	},

	getMaxValidScaleForNwjs(){
		if(this.hasNwFrame){
			var frameWidth = this.nwFrameWidth
			var frameheight = this.nwFrameHeight
		}else{
			var frameWidth = Math.max(0, window.outerWidth - window.innerWidth)
			var frameheight = Math.max(0, window.outerHeight - window.innerHeight)
		}

		const availWidth = screen.availWidth || screen.width
		const availHeight = screen.availHeight || screen.height

		const baseWidth = Graphics.width
		const baseHeight = Graphics.height

		const usableWidth = Math.max(1, availWidth - frameWidth)
		const usableHeight = Math.max(1, availHeight - frameheight)

		const horizontal = usableWidth / baseWidth
		const vertical = usableHeight / baseHeight

		if(this.getParam().integerScaling){
			return Math.max(1, Math.floor(Math.min(horizontal, vertical)))
		}else{
			return Math.max(1, Math.min(horizontal, vertical))
		}
	},

	getSavedScale(){
		return ConfigManager[this.symbols.screenScale] || 1
	},

	requestCameraRefresh(){
		this.centerCamera = true
	},

	updateNwFrameCache(){
		if(Utils.isNwjs() && !this.isFullScreen() && !Graphics.goingFullScreen){
			const frameW = Math.max(0, window.outerWidth - window.innerWidth)
			const frameH = Math.max(0, window.outerHeight - window.innerHeight)

			this.nwFrameWidth = frameW
			this.nwFrameHeight = frameH
			this.hasNwFrame = true			
		}else{
			this.hasNwFrame = false
		}
	},

	applyWindowScaleNwjs(scale){
		if(Utils.isNwjs() && !this.isFullScreen() && !Graphics.goingFullScreen){
			this.updateNwFrameCache()

			const win = nw.Window.get()
			const w = Graphics.width * scale
			const h = Graphics.height * scale

			win.setInnerWidth(Math.floor(w))
			win.setInnerHeight(Math.floor(h))

			setTimeout(() => {
				this.centerWindowNwjs()
			}, 150)
		}
	},

	centerWindowNwjs(){
		const win = nw.Window.get()
		const outerWidth = window.outerWidth
		const outerHeight = window.outerHeight

		const left = screen.availLeft || 0
		const top = screen.availTop || 0
		const availWidth = screen.availWidth || screen.width
		const availHeight = screen.availHeight || screen.height

		const x = Math.max(0, Math.floor(left + (availWidth - outerWidth) / 2))
		const y = Math.max(0, Math.floor(top + (availHeight - outerHeight) / 2))

		win.moveTo(x, y)
	},

	cycleScale(changeDirection = 1){
		this.refreshCurrentScaleList()

		const scales = this.currentScaleList
		let index = this.getScaleIndex()

		index += changeDirection

		if(index >= scales.length){
			index = 0
		}else if(index < 0){
			index = scales.length-1
		}

		this.setSavedScale(scales[index])

		if(this.isFullScreen()){
			Graphics._updateAllElements()
		}else{
			this.applyScaleFromConfig()
		}
	},

	getScaleIndex(){
		const current = this.getSavedScale()
		const index = this.currentScaleList.indexOf(current)

		return index >= 0 ? index : 0
	},

	applyScaleFromConfig(){
		this.refreshCurrentScaleList()

		Graphics._stretchEnabled = true

		if(Utils.isNwjs()){
			const scale = this.getTargetWindowScaleNwjs()
			this.applyWindowScaleNwjs(scale)
		}

		Graphics._updateAllElements()
	},

	getTargetWindowScaleNwjs(){
		const configScale = this.getSavedScale()
		const max = this.getMaxValidScaleForNwjs()

		if(this.getParam().integerScaling){
			return Math.floor(Math.max(1, Math.min(configScale, max)))
		}else{
			return Math.max(1, Math.min(configScale, max))
		}
	},

	cycleResolutionList(changeDirection){
		let index = this.getSavedResolutionIndex()

		index += changeDirection

		if(index >= this.getParam().resolutionList.length){
			index = 0
		}else if(index < 0){
			index = this.getParam().resolutionList.length-1
		}

		this.setConfigResolutionIndex(index)

		const res = this.getResolutionByIndex(index)
		if(res){
			this.applyResolution(res.width, res.height)
		}
	},

	hasResolutionList(){
		return !!this.getParam().resolutionList
	},

	setConfigResolutionIndex(value){
		ConfigManager[this.symbols.screenResolutionIndex] = Number(value)
		ConfigManager.save()
	},

	isFullScreen(){
		return !!Graphics._isFullScreen()
	},

	onBootStart(){
		if(this.getParam().startFullscreen){
			this.updateNwFrameCache()
			Graphics._requestFullScreen()
			this.applyScaleFromConfig()
		}else{
			this.updateNwFrameCache()
			this.restoreSavedResolution()
			this.applyScaleFromConfig()
		}
	},

	initConfigManagerData(){
		ConfigManager[this.symbols.screenScale] = this.getParam().defaultScale
		ConfigManager[this.symbols.fullscreen] = false
		ConfigManager[this.symbols.screenResolutionIndex] = this.getParam().defaultResolutionIndex
	}

}

{

const Plugin = Eli.ScreenManager
const Alias = {}

Plugin.initialize()

/* ========================================================================== */
/*                                  GRAPHICS                                  */
/* ========================================================================== */
Alias.Graphics_initialize = Graphics.initialize
Graphics.initialize = function() {
	this.goingFullScreen = false
    return Alias.Graphics_initialize.call(this)
}

Alias.Graphics__switchFullScreen = Graphics._switchFullScreen
Graphics._switchFullScreen = function() {
	Alias.Graphics__switchFullScreen.call(this)
	Plugin.setSavedFullScreen(Plugin.isFullScreen())
}

Alias.Graphics__requestFullScreen = Graphics._requestFullScreen
Graphics._requestFullScreen = function() {
	Plugin.setSavedFullScreen(true)
    this.goingFullScreen = true
    Alias.Graphics__requestFullScreen.call(this)
	setTimeout(this.afterRequestFullScreen.bind(this), 100)
}

Graphics.afterRequestFullScreen = function() {
	this.goingFullScreen = false
}

Alias.Graphics__cancelFullScreen = Graphics._cancelFullScreen
Graphics._cancelFullScreen = function() {
	Plugin.setSavedFullScreen(false)
	this.goingFullScreen = false
	Alias.Graphics__cancelFullScreen.call(this)
	Plugin.setSavedFullScreen(false)
	setTimeout(this.afterCancelFullScreen.bind(this), 200)
}

Graphics.afterCancelFullScreen = function() {
	Plugin.updateNwFrameCache()
	Plugin.applyScaleFromConfig()
}

Alias.Graphics_createCanvas = Graphics._createCanvas
Graphics._createCanvas = function() {
	Alias.Graphics_createCanvas.call(this)
	Plugin.hideOverflow()
}

Alias.Graphics_updateCanvas = Graphics._updateCanvas
Graphics._updateCanvas = function() {
	Alias.Graphics_updateCanvas.call(this)
	Plugin.hideOverflow()
}

Alias.Graphics__onResize = Graphics._onResize
Graphics._onResize = function() {
	Alias.Graphics__onResize.call(this)

	if(Plugin.isAutoScaleMode()){
		Plugin.applyScaleFromConfig()
	}
}

Alias.Graphics__updateRealScale = Graphics._updateRealScale
Graphics._updateRealScale = function() {
	Alias.Graphics__updateRealScale.call(this)
	if(this._stretchEnabled && this._width > 0 && this._height > 0){
		const h = this._stretchWidth() / this._width
		const v = this._stretchHeight() / this._height
		const rawScale = Math.min(h, v)
		const configScale = Plugin.getSavedScale()
		let targetScale = rawScale

		if(rawScale >= 1){
			const integerMax = Math.max(1, rawScale)
			targetScale = Math.min(configScale, integerMax)

		}else if(Plugin.getParam().allowFractionalDownscale){
			targetScale = rawScale

		}else{
			targetScale = 1
		}

		if(Plugin.getParam().integerScaling){
			this._realScale = Math.floor(targetScale) || 1
		}else{
			this._realScale = targetScale <= 0 ? 1 : targetScale
		}
		
		window.scrollTo(0, 0)
	}else{
		this._realScale = this._defaultScale
	}
}

/**
 * #EliBook
 */
Alias.Graphics__onKeyDown = Graphics._onKeyDown
Graphics._onKeyDown = function(event) {
	if(!event.ctrlKey && !event.altKey && event.key.toUpperCase() === Plugin.getParam().scaleKey) {
		Plugin.cycleScale()
		event.preventDefault()
	}else{
		Alias.Graphics__onKeyDown.call(this, event)
	}
}

/* ========================================================================== */
/*                                CONFIG MANAGER                              */
/* ========================================================================== */
Plugin.initConfigManagerData()

Alias.ConfigManager_makeData = ConfigManager.makeData
ConfigManager.makeData = function() {
	const config = Alias.ConfigManager_makeData.call(this)
	config[Plugin.symbols.screenScale] = this[Plugin.symbols.screenScale]
	config[Plugin.symbols.fullscreen] = this[Plugin.symbols.fullscreen]
	config[Plugin.symbols.screenResolutionIndex] = this[Plugin.symbols.screenResolutionIndex]

	return config
}

ConfigManager.makeScreenManagerData = function(config) {
	config[Plugin.symbols.screenScale] = this[Plugin.symbols.screenScale]
	config[Plugin.symbols.fullscreen] = this[Plugin.symbols.fullscreen]
	config[Plugin.symbols.screenResolutionIndex] = this[Plugin.symbols.screenResolutionIndex]
}

Alias.ConfigManager_applyData = ConfigManager.applyData
ConfigManager.applyData = function(config) {
	Alias.ConfigManager_applyData.call(this, config)
	this.applyEliMZScreenManagerData(config)
}

ConfigManager.applyEliMZScreenManagerData = function(config){
	const param = Plugin.getParam()
	const symbols = Plugin.symbols
	this[symbols.screenScale] = this.readNumber(config, symbols.screenScale, param.defaultScale)
	this[symbols.fullscreen] = this.readFlag(config, symbols.fullscreen, false)
	this[symbols.screenResolutionIndex] = this.readNumber(config, symbols.screenResolutionIndex, param.defaultResolutionIndex)
}

/**
 * 
 * #EliBook.
 */
ConfigManager.readNumber = function(config, name, defaultValue){
    if(name in config){
        return Number(config[name])
    }else{
        return defaultValue
    }
}

/* ========================================================================== */
/*                                 SCENE BOOT                                 */
/* ========================================================================== */
Alias.Scene_Boot_resizeScreen = Scene_Boot.prototype.resizeScreen
Scene_Boot.prototype.resizeScreen = function() {
	if(Plugin.hasResolutionList()){
		const res = Plugin.getResolutionByIndex(Plugin.getSavedResolutionIndex())

		if(res){
			const screenWidth = $dataSystem.advanced.screenWidth
			const screenHeight = $dataSystem.advanced.screenHeight
			$dataSystem.advanced.screenWidth = res.width
			$dataSystem.advanced.screenHeight = res.height
			Alias.Scene_Boot_resizeScreen.call(this)
			$dataSystem.advanced.screenWidth = screenWidth
			$dataSystem.advanced.screenHeight = screenHeight
			
		}else{
			Alias.Scene_Boot_resizeScreen.call(this)
		}

	}else{
		Alias.Scene_Boot_resizeScreen.call(this)
	}
}

Alias.Scene_Boot_adjustBoxSize = Scene_Boot.prototype.adjustBoxSize
Scene_Boot.prototype.adjustBoxSize = function() {
	if(Plugin.hasResolutionList() && Plugin.getParam().uiAreaFollowScreenSize){
		const res = Plugin.getResolutionByIndex(Plugin.getSavedResolutionIndex())

		if(res){
			const uiAreaWidth = $dataSystem.advanced.uiAreaWidth
			const uiAreaHeight = $dataSystem.advanced.uiAreaHeight
			$dataSystem.advanced.uiAreaWidth = res.width
			$dataSystem.advanced.uiAreaHeight = res.height
			Alias.Scene_Boot_adjustBoxSize.call(this)
			$dataSystem.advanced.uiAreaWidth = uiAreaWidth
			$dataSystem.advanced.uiAreaHeight = uiAreaHeight
			
		}else{
			Alias.Scene_Boot_adjustBoxSize.call(this)
		}

	}else{
		Alias.Scene_Boot_adjustBoxSize.call(this)
	}
}

Alias.Scene_Boot_start = Scene_Boot.prototype.start
Scene_Boot.prototype.start = function() {
	Alias.Scene_Boot_start.call(this)
	this.adjustGameScreen()
}

Scene_Boot.prototype.adjustGameScreen = function(){
	setTimeout(Plugin.onBootStart.bind(Plugin), 300)
}

/* ========================================================================== */
/*                                  SCENE MAP                                 */
/* ========================================================================== */
Alias.Scene_Map_start = Scene_Map.prototype.start
Scene_Map.prototype.start = function() {
	Alias.Scene_Map_start.call(this)

	if(Plugin.needCenterCamera()){
		Plugin.centralizeCamera()
	}
}

/* ========================================================================== */
/*                                WINDOW OPTIONS                              */
/* ========================================================================== */
Alias.Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions
Window_Options.prototype.addGeneralOptions = function() {
	Alias.Window_Options_addGeneralOptions.call(this)

	if(Plugin.getParam().addScaleOption){
		this.addCommand(Plugin.getParam().optionTextScale, Plugin.symbols.screenScale)
	}

	if(Plugin.getParam().addFullscreenOption){
		this.addCommand(Plugin.getParam().optionTextFullscreen, Plugin.symbols.fullscreen)
	}

	if(Plugin.getParam().addResolutionOption && Plugin.hasResolutionList()){
		this.addCommand(Plugin.getParam().optionTextResolution, Plugin.symbols.screenResolutionIndex)
	}
}

Alias.Window_Options_statusText = Window_Options.prototype.statusText
Window_Options.prototype.statusText = function(index) {
	const symbol = this.commandSymbol(index)

	if(symbol === Plugin.symbols.screenScale){
		return this.statusTextForWindowScale()

	}else if(symbol === Plugin.symbols.fullscreen){
		return this.statusTextForFullscreen()

	}else if(symbol === Plugin.symbols.screenResolutionIndex){
		return this.statusTextForResolution()

	}else{
		return Alias.Window_Options_statusText.call(this, index)
	}
}

Window_Options.prototype.statusTextForWindowScale = function(){
	const value = this.getConfigValue(Plugin.symbols.screenScale)
	return `x:${Number(value.toFixed(1))}`
}

Window_Options.prototype.statusTextForFullscreen = function(){
	return Graphics.goingFullScreen ? "ON" : "OFF"
}

Window_Options.prototype.statusTextForResolution = function(){
	const value = this.getConfigValue(Plugin.symbols.screenResolutionIndex)
	const res = Plugin.getResolutionByIndex(value)
	return res?.text || "unknown"
}

Alias.Window_Options_processOk = Window_Options.prototype.processOk
Window_Options.prototype.processOk = function() {
	const symbol = this.commandSymbol(this.index())

	if(symbol === Plugin.symbols.screenScale){
		this.onWindowScaleOk(1)

	}else if(symbol === Plugin.symbols.fullscreen){
		this.onFullScreenOk()

	}else if(symbol === Plugin.symbols.screenResolutionIndex){
		this.onResolutionOk(1)
	}else{
		Alias.Window_Options_processOk.call(this)
	}
}

Window_Options.prototype.onWindowScaleOk = function(changeDirection){
	Plugin.cycleScale(changeDirection)
	this.redrawItem(this.findSymbol(Plugin.symbols.screenScale))
	this.playCursorSound()
}

Window_Options.prototype.onFullScreenOk = function(){
	Graphics._switchFullScreen()
	this.redrawItem(this.findSymbol(Plugin.symbols.fullscreen))
	this.playCursorSound()
}

Window_Options.prototype.onResolutionOk = function(changeDirection){
	Plugin.cycleResolutionList(changeDirection)
	this.redrawItem(this.findSymbol(Plugin.symbols.screenResolutionIndex))
	this.playCursorSound()
}

Alias.Window_Options_cursorRight = Window_Options.prototype.cursorRight
Window_Options.prototype.cursorRight = function(wrap) {
	const symbol = this.commandSymbol(this.index())

	if(symbol === Plugin.symbols.screenScale){
		this.onWindowScaleOk(1)
	}else if(symbol === Plugin.symbols.fullscreen){
		this.onFullScreenOk()
	}else if(symbol === Plugin.symbols.screenResolutionIndex){
		this.onResolutionOk(1)
	}else{
		Alias.Window_Options_cursorRight.call(this, wrap)
	}
}

Alias.Window_Options_cursorLeft = Window_Options.prototype.cursorLeft
Window_Options.prototype.cursorLeft = function(wrap) {
	const symbol = this.commandSymbol(this.index())

	if(symbol === Plugin.symbols.screenScale){
		this.onWindowScaleOk(-1)
	}else if(symbol === Plugin.symbols.fullscreen){
		this.onFullScreenOk()
	}else if(symbol === Plugin.symbols.screenResolutionIndex){
		this.onResolutionOk(-1)
	}else{
		Alias.Window_Options_cursorLeft.call(this, wrap)
	}
}

}