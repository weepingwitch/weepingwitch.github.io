//=============================================================================
// JK_DirectShop.js
//=============================================================================


/*:
 * @plugindesc allows for direct buy OR direct sell of items at a shop.
 * @author Pirobi
 * 
 * @param Using Default Shop
 * @desc Is the default Shop system being used? MUST be false if using another shop plugin!!!!
 * @type boolean
 * @default true
 * @on yes
 * @off no
 * @help
 * Version 1.6
 * 
 * 
 * * @command set
* @text Set Water Speed
* @desc Adjust the water animation from an event.
* 
 *
 :=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=
	Plugin Commands
:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=


	DirectBuy
		- This will make the NEXT shop command called a purchaseOnly shop.
		
	DirectSell
		- This will make the NEXT shop command called a sellOnly shop.
		
	If using the plugins, they must be called each time BEFORE the shop 
	processing is called because the shop will "reset" after 
	the processing ends.
	
:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=
	Instructions for Use
:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:= 
	There are essentially 4 ways to call shops when using this plugin:
	
	1) Call the shop normally.
		-Use the ShopProcessing command just like always.
		-Will work like the default shop.
	2) Check purchase only on the ShopProcessing
		-Will Skip the buy/sell window and go right into purchasing
	3) Add PluginCommand "DirectBuy" before the shop processing command
		-Will do the same as 2. 
		-The box for "Purchase Only" does NOT need to be ticked in order for 
			the plugin command to run.
	4) Add PluginCommand "DirectSell" before the shop processing command
		-Will skip the buy/sell window and go right into selling
	
:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=
	Updates
:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=
	-v1.6
		Hiding unused command window from the shop scene. 
		Added plugin parameter for plugin compatibility
	-v1.5
		PurchaseOnly checkbox in Shop Processing no longer matters when
		DirectSell is called. Using proper aliasing to call shop for
		normal shop situations.
	-v1.4
		Minor fixes. If both DirectBuy and DirectSell are active, make it
		normal shop processing. Should definitely be compatible with other
		shop plugins now(tested with Yanfly's Core Shop).
	-v1.3
		Removed code that automatically handles window position, in order to 
		make this plugin compatible with other shop plugins, such as Yanfly's
		Shop Core.
	-v1.2
		Renamed to JK_Directshop to reflect new features.
		Added ability to "Direct Sell" items. Added plugin commands for
		both DirectBuy and DirectSell.
	-v1.1
		Adjusted position of Gold window with Status and Buy windows, to close
		The gap left behind by taking out the buy/sell option window.
	-v1.0
		Initial release
 */
 
var Imported = Imported || {};
var JK_DirectShop = JK_DirectShop || {};
 (function($) {
	var JKParams = PluginManager.parameters('JK_DirectShop');
	$.Param = {};


	$.Param.UseDefaultShop = eval(JKParams['Using Default Shop']);


	$.directSell = false;
	$.directBuy = false;




	var JK_createCommandWindow = Scene_Shop.prototype.createCommandWindow;
	Scene_Shop.prototype.createCommandWindow = function() {
		if(this._purchaseOnly || this._sellOnly)
		{//Do not add the window to the shop window.
			this._commandWindow = new Window_ShopCommand(this._helpWindow.x, this._purchaseOnly);//Move the window based on help window position, NOT gold.
			this._commandWindow.y = this._helpWindow.height;
			this._commandWindow.width = 0;
			//this.addWindow(this._commandWindow);
			if($.Param.UseDefaultShop){
				this._blankWindow = new Window_Base(0, this._helpWindow.height, Graphics.boxWidth - this._goldWindow.width, this._commandWindow.fittingHeight(1));
				this.addWindow(this._blankWindow);
			}
		}
		else
		{    //As normally written
			JK_createCommandWindow.call(this);
		}
	};


JK_onBuyCancel = Scene_Shop.prototype.onBuyCancel;
Scene_Shop.prototype.onBuyCancel = function() {
	if(this._purchaseOnly)
	{//Skip right to exiting the shop processing.
		this.popScene();
	}
	else
	{//As normally written
		JK_onBuyCancel.call(this);
	}
};


JK_onCategoryCancel = Scene_Shop.prototype.onCategoryCancel;
Scene_Shop.prototype.onCategoryCancel = function() {
    if(this._sellOnly)
	{
		this.popScene();
	}
	else
	{
		//As normally written
		JK_onCategoryCancel.call(this);
	}
};


var JK_createScene = Scene_Shop.prototype.create;
Scene_Shop.prototype.create = function() {
	if($.directBuy){
	this._purchaseOnly = true;
	this._sellOnly = false;
	$.directBuy = false;
	}
	else if($.directSell){
		this._sellOnly = true;
		this._purchaseOnly = false;
		$.directSell = false;
	}
	JK_createScene.call(this);
	if(this._purchaseOnly){
		this._commandWindow.selectSymbol('buy');
		this._commandWindow.deactivate();
		this.commandBuy();
	}
	if(this._sellOnly){
		this._commandWindow.deactivate();
		this._commandWindow.selectSymbol('sell');
		this._commandWindow.deactivate();
		this.commandSell();
	}
};

PluginManager.registerCommand('JK_DirectShop', "DirectBuy", args => {
        autotileWaterSpeed.speed = args.speed;
		$.directBuy = true;
		$.directSell = false;
        
    });


	
})(JK_DirectShop);
Imported["JK_DirectShop"] = 1.6;
