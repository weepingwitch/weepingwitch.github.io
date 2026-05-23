/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/battlecommandwindow/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Allows you to change the commands on battle windows
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: Beta R7
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.10.0
 * ----------------------------------------------------------------------------
 * Description: Change the party or actor command window in battle. Party
 * window is the one that includes fight or escape options. Actor command
 * window is the one that includes guard, skill, item, etc. by default.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ------------------------------Beta Notes------------------------------------
 * Want additional features not already present/listed above? Make suggestions
 * on the Patreon Post or in my discord under the #suggestions channel!
 * https://discord.gg/Gbx7JXP
 * ----------------------------Plugin Commands---------------------------------
 * This plugin does not have any plugin commands.
 * -------------------------------Conflicts------------------------------------
 * This plugin will overwrite the default window commands if keep originals is
 * off. It is best to place this above any other plugins that add commands to
 * the battle command windows if this option is used.
 * ----------------------------Command Symbol----------------------------------
 * The command symbol should be unique and not blank for every command. This
 * symbol is how the plugin knows internally which JS code to run.
 * ---------------------------Original Symbols---------------------------------
 * Some Command Symbols can have special meanings, mainly when they represent
 * the original commands.
 * 
 * The following symbols represent the original party commands:
 * fight - Will handle like the original fight command
 * escape - Will handle like the original escape command
 * 
 * The following symbols represent the original actor commands:
 * attack - Will handle like the original attack command
 * skill - Will handle like the original skill command(s)
 * item - Will handle like the original item command
 * guard - Will handle like the original guard command
 * 
 * It is important that you do not use these strings as the Command Symbol
 * property unless you mean to refer to the original commands.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games.
 *
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change any plugin params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * ----------------------------Required Plugin---------------------------------
 * Please note that all [CGMZ] plugins require [CGMZ] Core to be installed
 * above them in the plugin manager. You can download it from my website:
 * https://www.caspergaming.com/plugins/cgmz/core/
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_BattleCommandWindow.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * --------------------------Latest Version------------------------------------
 * Hi all, this latest version adds a new parameter to both party and actor
 * commands, which is an array of states that will automatically disable the
 * associated command. For party commands, they will be disabled if any battle
 * member is afflicted. For actor commands, they will be disabled if the
 * inputting actor is afflicted. This has always been possible via JS, but
 * now you can do it without needing any code.
 *
 * This update also makes the plugin more forgiving if you do not understand
 * the symbol parameter. The symbol is how the plugin tells commands apart
 * internally, so it has to be unique, however I tend to get quite a lot of
 * support requests for commands doing the same thing as another command, and
 * the user has left both command symbols blank so the second command is doing
 * the same thing as the first command. This plugin now generates a random
 * symbol for you if you leave symbol blank.
 *
 * Version Beta R7
 * - Added ability for states to disable commands
 * - Plugin more forgiving if you do not understand the symbol parameter
 *
 * @param Mechanics
 * 
 * @param Skip Party Commands
 * @parent Mechanics
 * @type boolean
 * @default false
 * @desc If true, battle will skip party commands (fight, escape)
 *
 * @param Keep Original Commands Party
 * @parent Mechanics
 * @type boolean
 * @default true
 * @desc Determine whether to show the original party commands in their original order.
 *
 * @param Keep Original Commands Actor
 * @parent Mechanics
 * @type boolean
 * @default true
 * @desc Determine whether to show the original actor commands in their original order.
 *
 * @param Command Window Settings
 *
 * @param Party Command Alignment
 * @parent Command Window Settings
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 * @desc The alignment of the command text in the party command window
 *
 * @param Actor Command Alignment
 * @parent Command Window Settings
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 * @desc The alignment of the command text in the actor command window
 *
 * @param Icon Alignment
 * @parent Command Window Settings
 * @type select
 * @option left
 * @option right
 * @default left
 * @desc Whether icons drawn are aligned to the left or right of the window
 *
 * @param Command Setup
 *
 * @param Actor Commands
 * @parent Command Setup
 * @type struct<ActorHandler>[]
 * @desc Command Name and associated js commands for actors
 * @default []
 *
 * @param Party Commands
 * @parent Command Setup
 * @type struct<Handler>[]
 * @desc Command Name and associated js commands for party
 * @default []
 *
 * @param Debug Options
 *
 * @param Report Command Size
 * @parent Debug Options
 * @type boolean
 * @default false
 * @desc Report the width and height of command backgrounds to console during playtest?
*/
/*~struct~Handler:
 * @param Command Name
 * @desc Name of the command to display in the command window.
 *
 * @param Command Symbol
 * @desc This symbol is used internally to recognize the command.
 * Special meaning for original commands (see documentation).
 *
 * @param JS Command
 * @type multiline_string
 * @desc JavaScript to run when command is selected.
 *
 * @param JS Condition
 * @type multiline_string
 * @desc JavaScript conditional to check to enable the command
 * @default return true;
 *
 * @param JS Show Condition
 * @type multiline_string
 * @desc JavaScript conditional to check to show the command
 * @default return true;
 *
 * @param Icon
 * @type icon
 * @default 0
 * @desc An icon to show aligned separately from the command text. 0 = no icon
 *
 * @param Disable States
 * @type state[]
 * @default []
 * @desc If any actor in the battle is afflicted with a state listed here, this command will be disabled.
 *
 * @param Background Image
 * @type file
 * @dir img/
 * @desc A background image to use for the command. Blank = default black rectangle
 *
 * @param Background Image X
 * @type number
 * @default 0
 * @min 0
 * @desc The x coordinate to start the background image from the source image (upper left corner)
 *
 * @param Background Image Y
 * @type number
 * @default 0
 * @min 0
 * @desc The y coordinate to start the background image from the source image (upper left corner)
 *
 * @param Selected Info
 *
 * @param Selected Text
 * @parent Selected Info
 * @desc Text to display when selected. Blank = same as default command name
 *
 * @param Selected Icon
 * @parent Selected Info
 * @type icon
 * @default 0
 * @desc An icon to show aligned separately from the command text. 0 = same as default icon
 *
 * @param Selected Back Img
 * @parent Selected Info
 * @type file
 * @dir img/
 * @desc A background image to use for the command. Blank = default back image
 *
 * @param Selected Back Img X
 * @parent Selected Info
 * @type number
 * @default 0
 * @min 0
 * @desc The x coordinate to start the background image from the source image (upper left corner) while selected
 *
 * @param Selected Back Img Y
 * @parent Selected Info
 * @type number
 * @default 0
 * @min 0
 * @desc The y coordinate to start the background image from the source image (upper left corner) while selected
*/
/*~struct~ActorHandler:
 * @param Actor
 * @type actor
 * @desc The actor to display the command for
 *
 * @param Command Name
 * @desc Name of the command to display in the command window.
 *
 * @param Command Symbol
 * @desc This symbol is used internally to recognize the command.
 * Special meaning for original commands (see documentation).
 *
 * @param JS Command
 * @type multiline_string
 * @desc JavaScript to run when command is selected.
 *
 * @param JS Condition
 * @type multiline_string
 * @desc JavaScript conditional to check to enable the command
 * @default return true;
 *
 * @param JS Show Condition
 * @type multiline_string
 * @desc JavaScript conditional to check to show the command
 * @default return true;
 *
 * @param Icon
 * @type icon
 * @default 0
 * @desc An icon to show aligned separately from the command text. 0 = no icon
 *
 * @param Disable States
 * @type state[]
 * @default []
 * @desc If the actor is afflicted with a state listed here, this command will be disabled.
 *
 * @param Skill
 * @type skill
 * @default 0
 * @desc If this is not 0, this command will use this skill id instead of the code in the JS Command.
 *
 * @param Background Image
 * @type file
 * @dir img/
 * @desc A background image to use for the command. Blank = default black rectangle
 *
 * @param Background Image X
 * @type number
 * @default 0
 * @min 0
 * @desc The x coordinate to start the background image from the source image (upper left corner)
 *
 * @param Background Image Y
 * @type number
 * @default 0
 * @min 0
 * @desc The y coordinate to start the background image from the source image (upper left corner)
 *
 * @param Selected Info
 *
 * @param Selected Text
 * @parent Selected Info
 * @desc Text to display when selected. Blank = same as default command name
 *
 * @param Selected Icon
 * @parent Selected Info
 * @type icon
 * @default 0
 * @desc An icon to show aligned separately from the command text. 0 = same as default icon
 *
 * @param Selected Back Img
 * @parent Selected Info
 * @type file
 * @dir img/
 * @desc A background image to use for the command. Blank = default back image
 *
 * @param Selected Back Img X
 * @parent Selected Info
 * @type number
 * @default 0
 * @min 0
 * @desc The x coordinate to start the background image from the source image (upper left corner) while selected
 *
 * @param Selected Back Img Y
 * @parent Selected Info
 * @type number
 * @default 0
 * @min 0
 * @desc The y coordinate to start the background image from the source image (upper left corner) while selected
*/
Imported.CGMZ_BattleCommandWindow = true;
CGMZ.Versions["Battle Command Window"] = "Beta R7";
CGMZ.BattleCommandWindow = {};
CGMZ.BattleCommandWindow.parameters = PluginManager.parameters('CGMZ_BattleCommandWindow');
CGMZ.BattleCommandWindow.PartyCommandAlignment = CGMZ.BattleCommandWindow.parameters["Party Command Alignment"];
CGMZ.BattleCommandWindow.ActorCommandAlignment = CGMZ.BattleCommandWindow.parameters["Actor Command Alignment"];
CGMZ.BattleCommandWindow.IconAlignment = CGMZ.BattleCommandWindow.parameters["Icon Alignment"];
CGMZ.BattleCommandWindow.KeepOriginalsParty = (CGMZ.BattleCommandWindow.parameters["Keep Original Commands Party"] === "true");
CGMZ.BattleCommandWindow.KeepOriginalsActor = (CGMZ.BattleCommandWindow.parameters["Keep Original Commands Actor"] === "true");
CGMZ.BattleCommandWindow.SkipPartyCommands = (CGMZ.BattleCommandWindow.parameters["Skip Party Commands"] === "true");
CGMZ.BattleCommandWindow.ReportCommandSize = (CGMZ.BattleCommandWindow.parameters["Report Command Size"] === "true");
CGMZ.BattleCommandWindow.PartyCommands = CGMZ_Utils.parseJSON(CGMZ.BattleCommandWindow.parameters["Party Commands"], [], "[CGMZ] Battle Command Window", "Your Party Commands parameter could not be parsed. No custom party commands will be loaded.").map(cmdP => {
	const cmd = CGMZ_Utils.parseJSON(cmdP, null, "[CGMZ] Battle Command Window", "One of your party commands was set up incorrectly and could not be read.")
	if(!cmd) return null;
	return {
		name: cmd["Command Name"],
		symbol: cmd["Command Symbol"] || Math.random().toString(36),
		js: cmd["JS Command"],
		jsShow: cmd["JS Show Condition"],
		jsCondition: cmd["JS Condition"],
		icon: Number(cmd["Icon"]),
		disableStates: CGMZ_Utils.parseJSON(cmd["Disable States"], [], '[CGMZ] Battle Command Window', `A party command with name ${cmd["Command Name"]} had invalid disable states, they will be ignored.`).map(x => Number(x)),
		backImg: {
			img: cmd["Background Image"],
			x: Number(cmd["Background Image X"]),
			y: Number(cmd["Background Image Y"])
		},
		selectedInfo: {
			icon: Number(cmd["Selected Icon"]) || Number(cmd["Icon"]),
			name: cmd["Selected Text"] || cmd["Command Name"],
			backImg: {
				img: cmd["Selected Back Img"] || cmd["Background Image"],
				x: Number(cmd["Selected Back Img X"]) || Number(cmd["Background Image X"]),
				y: Number(cmd["Selected Back Img Y"]) ||Number(cmd["Background Image Y"])
			}
		}
	};
}).filter(x => !!x);
CGMZ.BattleCommandWindow.ActorCommands = CGMZ_Utils.parseJSON(CGMZ.BattleCommandWindow.parameters["Actor Commands"], [], "[CGMZ] Battle Command Window", "Your Actor Commands parameter could not be parsed. No custom party commands will be loaded.").map(cmdP => {
	const cmd = CGMZ_Utils.parseJSON(cmdP, null, "[CGMZ] Battle Command Window", "One of your actor commands was set up incorrectly and could not be read.")
	if(!cmd) return null;
	return {
		name: cmd["Command Name"],
		actor: Number(cmd["Actor"]),
		symbol: cmd["Command Symbol"] || Math.random().toString(36),
		js: cmd["JS Command"],
		jsShow: cmd["JS Show Condition"],
		jsCondition: cmd["JS Condition"],
		icon: Number(cmd["Icon"]),
		skill: Number(cmd["Skill"]),
		disableStates: CGMZ_Utils.parseJSON(cmd["Disable States"], [], '[CGMZ] Battle Command Window', `An actor command with name ${cmd["Command Name"]} had invalid disable states, they will be ignored.`).map(x => Number(x)),
		backImg: {
			img: cmd["Background Image"],
			x: Number(cmd["Background Image X"]),
			y: Number(cmd["Background Image Y"])
		},
		selectedInfo: {
			icon: Number(cmd["Selected Icon"]) || Number(cmd["Icon"]),
			name: cmd["Selected Text"] || cmd["Command Name"],
			backImg: {
				img: cmd["Selected Back Img"] || cmd["Background Image"],
				x: Number(cmd["Selected Back Img X"]) || Number(cmd["Background Image X"]),
				y: Number(cmd["Selected Back Img Y"]) ||Number(cmd["Background Image Y"])
			}
		}
	};
}).filter(x => !!x);
//=============================================================================
// Scene Battle
//-----------------------------------------------------------------------------
// Handling for command window entries
//=============================================================================
//-----------------------------------------------------------------------------
// Handling for custom Party Commands added through the plugin
//-----------------------------------------------------------------------------
Scene_Battle.prototype.CGMZ_BattleCommandWindow_commandPartyCustom = function() {
	for(const cmd of CGMZ.BattleCommandWindow.PartyCommands) {
		if(this._partyCommandWindow.currentSymbol() === cmd.symbol) {
			try {
				const hookFunc = new Function(cmd.js);
				hookFunc.call(this);
			}
			catch (e) {
				const origin = "[CGMZ] Battle Command Window";
				const suggestion = "Check your JavaScript party commands";
				CGMZ_Utils.reportError(e.message, origin, suggestion);
			}
			break;
		}
	}
};
//-----------------------------------------------------------------------------
// Handling for custom Actor Commands added through the plugin
//-----------------------------------------------------------------------------
Scene_Battle.prototype.CGMZ_BattleCommandWindow_commandActorCustom = function() {
	for(const cmd of CGMZ.BattleCommandWindow.ActorCommands) {
		if(this._actorCommandWindow.currentSymbol() === cmd.symbol) {
			try {
				const hookFunc = new Function(cmd.js);
				hookFunc.call(this);
			}
			catch (e) {
				const origin = "[CGMZ] Battle Command Window";
				const suggestion = "Check your JavaScript party commands";
				CGMZ_Utils.reportError(e.message, origin, suggestion);
			}
			break;
		}
	}
};
//-----------------------------------------------------------------------------
// Handling for skill Actor Commands added through the plugin
//-----------------------------------------------------------------------------
Scene_Battle.prototype.CGMZ_BattleCommandWindow_commandActorSkill = function(skillId) {
	const action = BattleManager.inputtingAction();
	action.setSkill(skillId);
	this.onSelectAction();
};
//-----------------------------------------------------------------------------
// Add additional party commands.
//-----------------------------------------------------------------------------
const alias_CGMZ_BattleCommandWindow_createPartyCommandWindow = Scene_Battle.prototype.createPartyCommandWindow;
Scene_Battle.prototype.createPartyCommandWindow = function() {
	alias_CGMZ_BattleCommandWindow_createPartyCommandWindow.call(this);
	for(const cmd of CGMZ.BattleCommandWindow.PartyCommands) {
		if(this.CGMZ_BattleCommandWindow_isCustomCommand(cmd.symbol)) {
			this._partyCommandWindow.setHandler(cmd.symbol, this.CGMZ_BattleCommandWindow_commandPartyCustom.bind(this));
		}
	}
};
//-----------------------------------------------------------------------------
// Add additional actor commands.
//-----------------------------------------------------------------------------
const alias_CGMZ_BattleCommandWindow_createActorCommandWindow = Scene_Battle.prototype.createActorCommandWindow;
Scene_Battle.prototype.createActorCommandWindow = function() {
	alias_CGMZ_BattleCommandWindow_createActorCommandWindow.call(this);
	for(const cmd of CGMZ.BattleCommandWindow.ActorCommands) {
		if(this.CGMZ_BattleCommandWindow_isCustomCommand(cmd.symbol)) {
			if(cmd.skill) {
				this._actorCommandWindow.setHandler(cmd.symbol, this.CGMZ_BattleCommandWindow_commandActorSkill.bind(this, cmd.skill));
			} else {
				this._actorCommandWindow.setHandler(cmd.symbol, this.CGMZ_BattleCommandWindow_commandActorCustom.bind(this));
			}
		}
	}
};
//-----------------------------------------------------------------------------
// Determine if command is a custom command in need of custom handler
//-----------------------------------------------------------------------------
Scene_Battle.prototype.CGMZ_BattleCommandWindow_isCustomCommand = function(symbol) {
	const defaultCommands = ['fight', 'escape', 'attack', 'skill', 'guard', 'item'];
	return !defaultCommands.includes(symbol);
};
//=============================================================================
// Window Party Command
//-----------------------------------------------------------------------------
// Change commands in the command window
//=============================================================================
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
const alias_CGMZ_BattleCommandWindow_PartyCommand_initialize = Window_PartyCommand.prototype.initialize;
Window_PartyCommand.prototype.initialize = function(rect) {
	alias_CGMZ_BattleCommandWindow_PartyCommand_initialize.apply(this, arguments);
	if($gameTemp.isPlaytest() && CGMZ.BattleCommandWindow.ReportCommandSize) {
		const rect = this.itemRect(0);
		CGMZ_Utils.reportDimensions(rect.width, rect.height, "[CGMZ] Battle Command Window - Party Command Dimensions");
	}
};
//-----------------------------------------------------------------------------
// Add original commands in original order if user wishes
//-----------------------------------------------------------------------------
const alias_CGMZ_BattleCommandWindow_PartyCommand_makeCommandList = Window_PartyCommand.prototype.makeCommandList;
Window_PartyCommand.prototype.makeCommandList = function() {
	if(CGMZ.BattleCommandWindow.KeepOriginalsParty) {
		alias_CGMZ_BattleCommandWindow_PartyCommand_makeCommandList.call(this);
	}
	for(const cmd of CGMZ.BattleCommandWindow.PartyCommands) {
		const showFunc = new Function(cmd.jsShow);
		if(showFunc.call(this)) {
			const enabledFunc = new Function(cmd.jsCondition);
			const enabled = this.CGMZ_isCommandEnabled(cmd) && enabledFunc.call(this);
			this.addCommand(cmd.name, cmd.symbol, enabled, {img: cmd.backImg, icon: cmd.icon, selectedInfo: cmd.selectedInfo});
		}
	}
};
//-----------------------------------------------------------------------------
// Check if command is enabled
//-----------------------------------------------------------------------------
Window_PartyCommand.prototype.CGMZ_isCommandEnabled = function(cmd) {
	for(const state of cmd.disableStates) {
		for(const actor of $gameParty.members()) {
			if(actor.isStateAffected(state)) return false;
		}
	}
	return true;
};
//-----------------------------------------------------------------------------
// Change alignment of command text
//-----------------------------------------------------------------------------
Window_PartyCommand.prototype.itemTextAlign = function() {
	return CGMZ.BattleCommandWindow.PartyCommandAlignment;
};
//-----------------------------------------------------------------------------
// Get the command icon
//-----------------------------------------------------------------------------
Window_PartyCommand.prototype.CGMZ_icon = function(index) {
	const ext = this._list[index]?.ext;
	if(!ext) return 0;
	const selected = (this._cgmz_lastIndex === index);
	let icon = ext.icon;
	if(selected && ext.selectedInfo?.icon) icon = ext.selectedInfo.icon;
	return icon;
};
//-----------------------------------------------------------------------------
// Get the command name
//-----------------------------------------------------------------------------
const alias_CGMZ_BattleCommandWindow_PartyCommand_commandName = Window_PartyCommand.prototype.commandName;
Window_PartyCommand.prototype.commandName = function(index) {
	const selected = (this._cgmz_lastIndex === index);
	const ext = this._list[index]?.ext;
	const originalName = alias_CGMZ_BattleCommandWindow_ActorCommand_commandName.call(this, index);
	if(!selected || !ext) return originalName;
    return ext.selectedInfo?.name || originalName;
};
//-----------------------------------------------------------------------------
// Allow use of text codes in command
//-----------------------------------------------------------------------------
Window_PartyCommand.prototype.drawItem = function(index) {
	const rect = this.itemLineRect(index);
	const align = this.itemTextAlign();
	this.resetTextColor();
	this.changePaintOpacity(this.isCommandEnabled(index));
	const icon = this.CGMZ_icon(index);
	if(icon) {
		const iconX = (CGMZ.BattleCommandWindow.IconAlignment === 'left') ? rect.x : rect.x + rect.width - ImageManager.iconWidth;
		this.drawIcon(icon, iconX, rect.y + 2);
		rect.x += ImageManager.iconWidth * (CGMZ.BattleCommandWindow.IconAlignment === 'left');
		rect.width -= ImageManager.iconWidth;
	}
	this.CGMZ_drawTextLine(this.commandName(index), rect.x, rect.y, rect.width, align);
};
//-----------------------------------------------------------------------------
// Check if command has a background image to show, set proper return value
//-----------------------------------------------------------------------------
Window_PartyCommand.prototype.CGMZ_getSelectableCGMZOptions = function(index) {
	const ext = this._list[index].ext;
	const selected = (this._cgmz_lastIndex === index);
	if(selected && ext?.selectedInfo?.backImg?.img) {
		const selectBg = {
			img: ext.selectedInfo.backImg.img,
			imgX: ext.selectedInfo.backImg.x,
			imgY: ext.selectedInfo.backImg.y
		}
		return {bg: selectBg};
	}
	if(ext && ext.img && ext.img.img) {
		const bg = {
			img: ext.img.img,
			imgX: ext.img.x,
			imgY: ext.img.y
		}
		return {bg: bg};
	}
	return Window_Command.prototype.CGMZ_getSelectableCGMZOptions.call(this, index);
};
//-----------------------------------------------------------------------------
// Redraw old index
//-----------------------------------------------------------------------------
Window_PartyCommand.prototype.CGMZ_handleSelectionChangePrevious = function(index) {
	if(this._list?.[index]) this.redrawItem(index);
};
//-----------------------------------------------------------------------------
// Redraw new index
//-----------------------------------------------------------------------------
Window_PartyCommand.prototype.CGMZ_handleSelectionChangeNext = function(index) {
	if(this._list?.[index]) this.redrawItem(index);
};
//=============================================================================
// Window Actor Command
//-----------------------------------------------------------------------------
// Change commands in the command window
//=============================================================================
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
const alias_CGMZ_BattleCommandWindow_ActorCommand_initialize = Window_ActorCommand.prototype.initialize;
Window_ActorCommand.prototype.initialize = function(rect) {
	alias_CGMZ_BattleCommandWindow_ActorCommand_initialize.apply(this, arguments);
	if($gameTemp.isPlaytest() && CGMZ.BattleCommandWindow.ReportCommandSize) {
		const rect = this.itemRect(0);
		CGMZ_Utils.reportDimensions(rect.width, rect.height, "[CGMZ] Battle Command Window - Actor Command Dimensions");
	}
};
//-----------------------------------------------------------------------------
// Add original commands in original order if user wishes
//-----------------------------------------------------------------------------
const alias_CGMZ_BattleCommandWindow_ActorCommand_makeCommandList = Window_ActorCommand.prototype.makeCommandList;
Window_ActorCommand.prototype.makeCommandList = function() {
	if(CGMZ.BattleCommandWindow.KeepOriginalsActor) {
		alias_CGMZ_BattleCommandWindow_ActorCommand_makeCommandList.call(this);
	}
	if(!this._actor) return;
	for(const cmd of CGMZ.BattleCommandWindow.ActorCommands) {
		const ext = {img: cmd.backImg, icon: cmd.icon, selectedInfo: cmd.selectedInfo};
		if(this._actor._actorId === cmd.actor || cmd.actor === 0) {
			switch(cmd.symbol) {
				case 'attack':
					this.addAttackCommand();
					this._list[this._list.length-1].cgmzext = ext;
					this._list[this._list.length-1].enabled = this._list[this._list.length-1].enabled && this.CGMZ_isCommandEnabled(cmd);
					break;
				case 'skill':
					this.addSkillCommands();
					for(const item of this._list) {
						if(item.symbol === 'skill') {
							item.cgmzext = ext;
							item.enabled = item.enabled && this.CGMZ_isCommandEnabled(cmd);
						}
					}
					break;
				case 'item':
					this.addItemCommand();
					this._list[this._list.length-1].cgmzext = ext;
					this._list[this._list.length-1].enabled = this._list[this._list.length-1].enabled && this.CGMZ_isCommandEnabled(cmd);
					break;
				case 'guard':
					this.addGuardCommand();
					this._list[this._list.length-1].cgmzext = ext;
					this._list[this._list.length-1].enabled = this._list[this._list.length-1].enabled && this.CGMZ_isCommandEnabled(cmd);
					break;
				default:
					const showFunc = new Function(cmd.jsShow);
					if(showFunc.call(this)) {
						const enabledFunc = new Function(cmd.jsCondition);
						const enabled = this.CGMZ_isCommandEnabled(cmd) && enabledFunc.call(this);
						this.addCommand(cmd.name, cmd.symbol, enabled, ext);
					}
			}
		}
	}
};
//-----------------------------------------------------------------------------
// Check if command is enabled
//-----------------------------------------------------------------------------
Window_ActorCommand.prototype.CGMZ_isCommandEnabled = function(cmd) {
	for(const state of cmd.disableStates) {
		if(this._actor.isStateAffected(state)) return false;
	}
	return true;
};
//-----------------------------------------------------------------------------
// Is Default Command ?
//-----------------------------------------------------------------------------
Window_ActorCommand.prototype.CGMZ_isDefaultCommand = function(symbol) {
	return (symbol === 'attack' || symbol === 'skill' || symbol === 'item' || symbol === 'guard');
};
//-----------------------------------------------------------------------------
// Change alignment of command text
//-----------------------------------------------------------------------------
Window_ActorCommand.prototype.itemTextAlign = function() {
	return CGMZ.BattleCommandWindow.ActorCommandAlignment;
};
//-----------------------------------------------------------------------------
// Get the command icon
//-----------------------------------------------------------------------------
Window_ActorCommand.prototype.CGMZ_icon = function(index) {
	const ext = this._list[index].cgmzext || this._list[index].ext;
	if(!ext) return 0;
	const selected = (this._cgmz_lastIndex === index);
	let icon = ext.icon;
	if(selected && ext.selectedInfo?.icon) icon = ext.selectedInfo.icon;
	return icon;
};
//-----------------------------------------------------------------------------
// Get the command name
//-----------------------------------------------------------------------------
const alias_CGMZ_BattleCommandWindow_ActorCommand_commandName = Window_ActorCommand.prototype.commandName;
Window_ActorCommand.prototype.commandName = function(index) {
	const selected = (this._cgmz_lastIndex === index);
	const ext = this._list[index].ext || this._list[index].cgmzext;
	const originalName = alias_CGMZ_BattleCommandWindow_ActorCommand_commandName.call(this, index);
	if(!selected || !ext) return originalName;
    return ext.selectedInfo?.name || originalName;
};
//-----------------------------------------------------------------------------
// Draw an item, route to either unselected or selected
//-----------------------------------------------------------------------------
Window_ActorCommand.prototype.drawItem = function(index) {
	const rect = this.itemLineRect(index);
	const align = this.itemTextAlign();
	this.resetTextColor();
	this.changePaintOpacity(this.isCommandEnabled(index));
	const icon = this.CGMZ_icon(index);
	if(icon) {
		const iconX = (CGMZ.BattleCommandWindow.IconAlignment === 'left') ? rect.x : rect.x + rect.width - ImageManager.iconWidth;
		this.drawIcon(icon, iconX, rect.y + 2);
		rect.x += ImageManager.iconWidth * (CGMZ.BattleCommandWindow.IconAlignment === 'left');
		rect.width -= ImageManager.iconWidth;
	}
	this.CGMZ_drawTextLine(this.commandName(index), rect.x, rect.y, rect.width, align);
};
//-----------------------------------------------------------------------------
// Check if command has a background image to show, set proper return value
//-----------------------------------------------------------------------------
Window_ActorCommand.prototype.CGMZ_getSelectableCGMZOptions = function(index) {
	const ext = this._list[index].cgmzext || this._list[index].ext;
	const selected = (this._cgmz_lastIndex === index);
	if(selected && ext?.selectedInfo?.backImg?.img) {
		const selectBg = {
			img: ext.selectedInfo.backImg.img,
			imgX: ext.selectedInfo.backImg.x,
			imgY: ext.selectedInfo.backImg.y
		}
		return {bg: selectBg};
	}
	if(ext && ext.img && ext.img.img) {
		const bg = {
			img: ext.img.img,
			imgX: ext.img.x,
			imgY: ext.img.y
		}
		return {bg: bg};
	}
	return Window_Command.prototype.CGMZ_getSelectableCGMZOptions.call(this, index);
};
//-----------------------------------------------------------------------------
// Redraw old index
//-----------------------------------------------------------------------------
Window_ActorCommand.prototype.CGMZ_handleSelectionChangePrevious = function(index) {
	if(this._list?.[index]) this.redrawItem(index);
};
//-----------------------------------------------------------------------------
// Redraw new index
//-----------------------------------------------------------------------------
Window_ActorCommand.prototype.CGMZ_handleSelectionChangeNext = function(index) {
	if(this._list?.[index]) this.redrawItem(index);
};
//=============================================================================
// BattleManager
//-----------------------------------------------------------------------------
// If skipping party commands, do not let current actor be null
//=============================================================================
//-----------------------------------------------------------------------------
// Select the next actor if phase is input
//-----------------------------------------------------------------------------
const alias_CGMZ_BattleCommandWindow_BattleManager_startInput = BattleManager.startInput;
BattleManager.startInput = function() {
	alias_CGMZ_BattleCommandWindow_BattleManager_startInput.call(this);
	if(CGMZ.BattleCommandWindow.SkipPartyCommands && this._phase === "input" && !this._currentActor) {
		this.selectNextActor();
	}
};
//-----------------------------------------------------------------------------
// Do not allow to go back to party command window if 
//-----------------------------------------------------------------------------
const alias_CGMZ_BattleCommandWindow_BattleManager_changeCurrentActor = BattleManager.changeCurrentActor;
BattleManager.changeCurrentActor = function(forward) {
	alias_CGMZ_BattleCommandWindow_BattleManager_changeCurrentActor.call(this, forward);
	if(CGMZ.BattleCommandWindow.SkipPartyCommands && !this._currentActor && !forward) {
		this.selectNextActor();
	}
};