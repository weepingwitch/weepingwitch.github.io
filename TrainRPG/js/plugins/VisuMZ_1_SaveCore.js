//=============================================================================
// VisuStella MZ - Save Core
// VisuMZ_1_SaveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_SaveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SaveCore = VisuMZ.SaveCore || {};
VisuMZ.SaveCore.version = 1.14;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.14] [SaveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Save_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Save Core plugin adds upon the existing functionality of how saves
 * operate in RPG Maker MZ and how the Save Menu appears in-game. Control over
 * autosaves is also provided by this plugin as well as the ability to make
 * Global Switches and Variables accessible across all game saves (including
 * new games).
 *
 * Features include all (but not limited to) the following:
 * 
 * * Save file technicalities including how filenames are made and or how
 *   forage keys are labeled to distinguish games from one another.
 * * Save types (standard, slot-locked, or single) to change saving to be
 *   suited for each game type.
 * * Save confirmation window added to relay information to player on whether
 *   or not a save has been made successfully.
 * * Global Switches and Variables that span across all saves and new games.
 * * Control over how autosaves handle (their own file, save over existing
 *   files, and/or both).
 * * Plugin Commands that enable/disable autosaves and forcefully activate them
 *   or request them.
 * * Change up how the Save Menu appears with various save styles.
 * * Add descriptions and pictures to the save files.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Global Switches and Global Variables
 * ============================================================================
 *
 * Global Switches and Global Variables are now added into the game engine via
 * this plugin. Global Switches and Global Variables exist in the same state
 * across all save files. This means if Switch 40 is declared to be a Global
 * Switch and is turned ON, then whether you start up a new game or open a
 * different save file, Switch 40 will be in the ON state. Similar will occur
 * with Global Variables.
 *
 * ---
 *
 * <Global> Switch/Variable Name
 *
 * To declare Global Switches and/or Global Variables, insert <Global> into
 * the Switch/Variable's name. That's all there is to it. Whatever value you
 * change the Global Switch/Variable to after declaring it will be changed
 * across all saves.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <Global>, <JS>, or <Self> simultaneously.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Autosave Plugin Commands ===
 * 
 * ---
 *
 * Autosave: Enable/Disable
 * - Enables/disables Autosave on a local (lowest) level.
 * - Requires Database => System 1 => [x] Enable Autosave
 * - This does NOT mean it will change autosaving for other loaded game saves
 *   or new game sessions.
 * - This ONLY applies to the local session for the dev to control whether or
 *   not autosaving will occur at its usual conditions and scenarios.
 *
 *   Enable or Disable?:
 *   - Enable or disable autosave?
 *
 * ---
 *
 * Autosave: (Stage 1) Request
 * - Autosaves the game at current point if enabled.
 * - Requires Database => System 1 => [x] Enable Autosave
 * - Autosave does not go through if it is neither enabled in the database or
 *   in-game through the "Autosave: Enable/Disable" plugin command.
 * - This Plugin Command will not autosave if the player turned off "Autosave"
 *   in the Options Menu.
 *
 * ---
 *
 * Autosave: (Stage 2) Execute
 * - Executes autosaves the game at the current point.
 * - Requires Database => System 1 => [x] Enable Autosave
 * - This will require autosave to be enabled through the database, but it will
 *   ignore the "Autosave: Enable/Disable" plugin command state.
 * - This Plugin Command will not autosave if the player turned off "Autosave"
 *   in the Options Menu.
 *
 * ---
 *
 * Autosave: (Stage 3) Force
 * - Forces autosaves the game at the current point.
 * - Requires Database => System 1 => [x] Enable Autosave
 * - This will require autosave to be enabled through the database, but it will
 *   ignore the "Autosave: Enable/Disable" plugin command state.
 *
 * ---
 *
 * Save: Current Slot
 * - Process the game's current save at the current point.
 * - Must be outside of battle and on the map.
 *
 * ---
 * 
 * === Save Plugin Commands ===
 * 
 * ---
 *
 * Save: Set Description
 * - Set the description text that will appear in the save files.
 *
 *   Text:
 *   - Insert desired save description text here.
 *   - Text codes supported.
 *   - \V[x], \N[x], \P[x] are save local.
 *   - Other text codes will draw data from the currently active game.
 *
 * ---
 *
 * Save: Set Picture
 * - Set the picture that would appear in the save file.
 *
 *   Filename:
 *   - Input the filename here of the desired picture.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Save Settings
 * ============================================================================
 *
 * These are general settings pertaining to saves and the technicalities behind
 * how saves work in your game.
 *
 * ---
 *
 * General
 * 
 *   Save Style:
 *   - Select a save style for the game. Some of these options may alter other
 *     Plugin Parameter settings.
 *   - Standard: Save freely in any slot.
 *   - Slot-Locked: Select one dedicated slot at New Game.
 *   - Single: Only one slot is available for the game.
 * 
 *   Max Save Files:
 *   - Maximum number of save files for the game.
 * 
 *   Autosave Counts?:
 *   - Count the autosave file towards the max count?
 *
 * ---
 *
 * Local Mode
 * 
 *   Local Mode?:
 *   - When running the game on client, use the Local Mode of saving via files
 *     or store saves to forage keys?
 * 
 *   Filename Format:
 *   - Filename format for save files.
 *   - %1 - Save File ID
 * 
 *   Extension Format:
 *   - Filename extension format for save files.
 *   - %1 - Save Name
 *
 * ---
 *
 * Forage Key
 * 
 *   Forage Key Format:
 *   - Forage Key format when saving to memory.
 *   - %1 - Game ID, %2 - Save Name
 * 
 *   Forage Key Test:
 *   - Key used to test if saving a forage key is possible.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Help: Slot-Locked:
 *   - Help description used for initial slot-locked selection.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: On Save Success:
 *   - Code to perform when a save is successful.
 * 
 *   JS: On Save Failure:
 *   - Code to perform when a save has failed.
 * 
 *   JS: On Load Success:
 *   - Code to perform when a load is successful.
 * 
 *   JS: On Load Failure:
 *   - Code to perform when a load has failed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Save Confirm Window Settings
 * ============================================================================
 *
 * The Save Confirmation Window is a new feature added through this plugin.
 * It gives the player visual feedback letting the player know that a save is
 * successful or not.
 *
 * ---
 *
 * General
 * 
 *   Enable Window?:
 *   - Enable the Save Confirmation Window?
 * 
 *   Pop Up Duration:
 *   - How long should the window be open for before closing?
 *   - Insert the time in milliseconds.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions of the Save Confirmation Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Pop Up: Save Success:
 *   - Text used for a "Save Success" message popup.
 *   - Text codes are allowed.
 * 
 *   Pop Up: Save Failure:
 *   - Text used for a "Save Failure" message popup.
 *   - Text codes are allowed.
 * 
 *   Pop Up: Load Failure:
 *   - Text used for a "Load Failure" message popup.
 *   - Text codes are allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Autosave Settings
 * ============================================================================
 *
 * These settings adjust how autosaves work in your game project. The settings
 * will encompass the original autosave settings made by RPG Maker MZ as well
 * as new settings added through this plugin.
 *
 * ---
 *
 * General
 * 
 *   Autosave Type:
 *   - Select autosave type.
 *   - Requires Database => System 1 => [x] Enable Autosave
 *   - Autosave File: Dedicated save file for autosaves.
 *   - Current File: Overwrites the current save file.
 *   - Autosave File + Current File: Both of the above.
 *
 * ---
 *
 * Requests
 * 
 *   Requires Save Enable?:
 *   - Autosave requests require Saving to be enabled?
 * 
 *   Request after Battle?:
 *   - Requests an autosave after battle?
 * 
 *   Request on Transfer?:
 *   - Requests an autosave after a map transfer?
 * 
 *   Request on Menu Open?:
 *   - Requests an autosave after opening the main menu?
 * 
 *   Request on Menu Exit?:
 *   - Requests an autosave after exiting the main menu?
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: On Success:
 *   - Code to perform when an autosave is successful.
 * 
 *   JS: On Failure:
 *   - Code to perform when an autosave has failed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Autosave Confirm Window Settings
 * ============================================================================
 *
 * The Autosave Confirmation Window is a new feature added by this plugin to
 * notify the player whenever autosaving occurs.
 *
 * ---
 *
 * General
 * 
 *   Enable Window?:
 *   - Enable the Autoave Confirmation Window?
 * 
 *   Pop Up Duration:
 *   - How long should the window be open for before closing?
 *   - Insert the time in milliseconds.
 * 
 *   Screen Position:
 *   - Where does this window appear on the screen?
 *   - Lower Left
 *   - Lower Center
 *   - Lower Right
 *   - Middle Left
 *   - Middle Center
 *   - Middle Right
 *   - Upper Left
 *   - Upper Center
 *   - Upper Right
 *
 * ---
 *
 * Vocabulary
 * 
 *   Pop Up: Save Success:
 *   - Text used for an "Autosave Success" message popup.
 *   - Text codes are allowed
 * 
 *   Pop Up: Save Failure:
 *   - Text used for an "Autosave Failure" message popup.
 *   - Text codes are allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Autosave Options Settings
 * ============================================================================
 *
 * This plugin adds the "Autosave" option to the Options menu, allowing players
 * to decide if they want autosave enabled or not. This feature can be disabled
 * as well, to better suit games. If the "Autosave" option is turned off by the
 * player, then any Autosave requests and executions.
 *
 * ---
 *
 * Autosave Options
 * 
 *   Add Option?:
 *   - Add the 'Autosave' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 *
 *   Default Value:
 *   - Determine the default value of this option.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Actor Graphic Settings
 * ============================================================================
 *
 * This Plugin Parameter lets you select which graphic to use for displaying
 * the actor party found inside the save menu.
 *
 * ---
 *
 * Actor Graphic
 * 
 *   None:
 *   - Don't display any actors.
 * 
 *   Face:
 *   - Display the face graphics for the actors.
 * 
 *   Map Sprite:
 *   - Display the sprite graphics for the actors.
 * 
 *   Sideview Battler:
 *   - Display the SV Battler graphics for the actors.
 *   - Note: If you have an existing save made before this plugin was
 *     installed, you may need to save over the existing ones to see the
 *     Sideview Battler graphics.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Save Menu Styles
 * ============================================================================
 *
 * Save Menu Styles affect how the save files themselves appear to the player,
 * as long horizontal lists, vertical columns, small boxes, or a large file.
 *
 * ---
 *
 * Save Menu Styles
 * 
 *   List:
 *   - Save files stretch horizontally across the screen.
 *   - Save files are listed as rows.
 * 
 *   Vertical:
 *   - Save files are stretched vertically across the screen.
 *   - Save files are depicted as columns.
 * 
 *   Box:
 *   - Save files are small boxes shown on the screen.
 *   - Save files are sign in both rows and columns.
 * 
 *   Large:
 *   - Save files take up the whole screen.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Style Settings
 * ============================================================================
 *
 * These settings allow you, the game dev, to manipulate how the save styles
 * appear in-game if they're not to your liking. JavaScript familiarity is a
 * must to adjust them.
 *
 * ---
 *
 * General
 * 
 *   Latest Text:
 *   - Text used to depict latest save file.
 *   - The "NEW!" text will not appear on auto save slots. This is intentional.
 * 
 *   Latest Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Sprite Width:
 *   - Pixel width of map sprites when drawn in the Save Menu.
 * 
 *   SV Battler Width:
 *   - Pixel width of sv battlers when drawn in the Save Menu.
 *
 *   JS: Save Display Info:
 *   - Code that, upon saving, determines which info is quickly stored
 *     for displaying.
 *
 * ---
 *
 * List Style
 * Vertical Style
 * Box Style
 * Large Style
 * 
 *   Rows:
 *   - Number of rows for this style.
 * 
 *   Columns:
 *   - Number of column for this style.
 * 
 *   JS: Draw Contents:
 *   - Code on how to draw the contents for this style.
 * 
 *   JS: Draw File Data:
 *   - Code on how to draw the file data for this style.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.14: February 20, 2025
 * * Feature Update!
 * ** Whenever the background picture is now snapped for a screenshot (usually
 *    for a menu), the autosave confirmation window will no longer be included
 *    in it if the player reenters a menu immediately after going to map scene.
 *    Update made by Irina.
 * 
 * Version 1.13: August 29, 2024
 * * Bug Fixes!
 * ** Fixed a bug where single-mode save games would freeze after executed
 *    event movements made by Events & Movement Core. Fix made by Arisu.
 * ** Fixed a bug where if the main menu is skipped, face graphics won't be
 *    loaded in time for the save or load menu. Fix made by Arisu.
 * ** Fixed a bug where the pop up duration of the autosave confirmation text
 *    was using the pop up duration of the save menu confirmation.
 * 
 * Version 1.12: December 14, 2023
 * * Documentation Update!
 * ** Updated Plugin Command "Autosave: Enable/Disable" description for clarity
 * *** Enables/disables Autosave on a local (lowest) level.
 * ** Added extra text in the Plugin Commands help section for the Command:
 *    "Autosave: Enable/Disable":
 * *** This does NOT mean it will change autosaving for other loaded game saves
 *     or new game sessions.
 * *** This ONLY applies to the local session for the dev to control whether or
 *     not autosaving will occur at its usual conditions and scenarios.
 * 
 * Version 1.11: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where there is not a soft fade in after using the single slot
 *    loading screen from the VisuMZ Save Core. Fix made by Olivia.
 * 
 * Version 1.10: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a rare bug that prevents plugin commands from saving in the current
 *    save slot upon certain types of loading. Fix made by Arisu.
 * 
 * Version 1.09: February 10, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.08: December 16, 2021
 * * Bug Fixes!
 * ** Fixed default Plugin Parameters where the Autosave option was not
 *    properly working without the Options Core. Fix made by Olivia.
 * * Documentation Update!
 * ** Added further documentation on "Plugin Parameters: Style Settings"
 * ** Removal of "Start Enabled?" setting.
 * *** The "NEW!" text will not appear on auto save slots. This is intentional.
 * * Feature Update!
 * ** Plugin Parameter > Auto Save Settings > Start Enabled? is now removed.
 * *** This is due to it going against what RPG Maker MZ is supposed to behave
 *     like, causing potential misunderstandings when other autosave related
 *     features are utilized. Update made by Olivia.
 * 
 * Version 1.07: October 14, 2021
 * * Bug Fixes!
 * ** Fixed bugs caused by Core Engine's digit grouping that would make dates
 *    appear incorrectly. Fix made by Olivia.
 * 
 * Version 1.06: July 16, 2021
 * * Compatibility Update!
 * ** Compatibility update with Party System's max member change to fit a non-
 *    default amount of party members inside of the window. Update by Irina.
 * 
 * Version 1.05: May 14, 2021
 * * Feature Update!
 * ** Confirmation windows now have rounded coordinates to prevent distortions.
 *    Update made by Arisu.
 * 
 * Version 1.04: March 12, 2021
 * * Bug Fixes!
 * ** Fixed a bug where using the Plugin Command to save the current slot would
 *    not reload properly if the audio file BGM was not synched. Fix made by
 *    Arisu.
 * 
 * Version 1.03: November 29, 2020
 * * Bug Fixes!
 * ** Displayed month should now show the correct numeric value.
 *    Fix made by Arisu.
 * 
 * Version 1.02: September 13, 2020
 * * Compatibility Update!
 * ** Better compatibility for SV Actor graphics.
 * * Documentation Update!
 * ** The Plugin Command 'Save: Set Description' now has updated documentation
 *    for the text codes that are parsed on the local level.
 * * Feature Update!
 * ** The Plugin Command 'Save: Set Description' will now parse text code
 *    data for \V[x], \N[x], \P[x] on a local save file level. Feature updated
 *    by Yanfly.
 * 
 * Version 1.01: September 6, 2020
 * * Bug Fixes!
 * ** Disabling confirmation windows no longer cause crashes.
 *    Fix made by Yanfly.
 * ** Plugin Commands for for setting descriptions and save images work despite
 *    save settings found in the database. Fix made by Yanfly.
 * ** Save Core no longer crashes when going to the Save/Load scenes without
 *    the Core Engine enabled.
 * ** Single and Locked save styles no longer crash the game when loading.
 *    Fix made by Olivia.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutosaveEnable
 * @text Autosave: Enable/Disable
 * @desc Requires Enables/disables Autosave on a local (lowest) level.
 * Requires Database => System 1 => [x] Enable Autosave
 *
 * @arg Enable:eval
 * @text Enable or Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable or disable autosave?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutosaveRequest
 * @text Autosave: (Stage 1) Request
 * @desc Autosaves the game at current point if enabled.
 * Requires Database => System 1 => [x] Enable Autosave
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutosaveExecute
 * @text Autosave: (Stage 2) Execute
 * @desc Executes autosaves the game at the current point.
 * Requires Database => System 1 => [x] Enable Autosave
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutosaveForce
 * @text Autosave: (Stage 3) Force
 * @desc Force autosaves the game at the current point.
 * Requires Database => System 1 => [x] Enable Autosave
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Save
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SaveCurrentSlot
 * @text Save: Current Slot
 * @desc Process the game's current save at the current point.
 * Must be outside of battle and on the map.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SaveDescription
 * @text Save: Set Description
 * @desc Set the description text that will appear in the save files.
 *
 * @arg Text:str
 * @text Text
 * @desc Insert desired save description text here. 
 * Text codes supported. \V[x], \N[x], \P[x] are save local.
 * @default Text
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SavePicture
 * @text Save: Set Picture
 * @desc Set the picture that would appear in the save file.
 *
 * @arg Filename:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Input the filename here of the desired picture.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param SaveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Save:struct
 * @text Save Settings
 * @type struct<Save>
 * @desc General save settings pertaining to the game.
 * @default {"General":"","SaveStyle:str":"standard","MaxSaveFiles:num":"20","AutosaveMaxCount:eval":"false","LocalMode":"","LocalMode:eval":"true","FilenameFmt:str":"file%1","ExtensionFmt:str":"%1.rmmzsave","ForageKey":"","KeyFmt:str":"rmmzsave.%1.%2","TestKey:str":"rmmzsave.test","Vocabulary":"","VocabLockedSaveSlot:str":"Pick a file to start a new game.","JavaScript":"","OnSaveSuccessJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\"","OnSaveFailureJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\"","OnLoadSuccessJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\"","OnLoadFailureJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\""}
 *
 * @param SaveConfirm:struct
 * @text Confirm Window
 * @parent Save:struct
 * @type struct<SaveConfirm>
 * @desc Settings regarding the Save Confirmation Window.
 * @default {"General":"","Enable:eval":"true","Duration:num":"1000","ConfirmRect:func":"\"const width = Graphics.boxWidth / 2;\\nconst height = this.calcWindowHeight(1, false);\\nconst x = (Graphics.width - width) / 2;\\nconst y = (Graphics.height - height) / 2;\\nreturn new Rectangle(x, y, width, height);\"","Vocabulary":"","VocabSaveSuccess:str":"Save Successful!","VocabSaveFailure:str":"Could not save!","VocabLoadFailure:str":"Could not load save file!"}
 *
 * @param Autosave:struct
 * @text Autoave Settings
 * @type struct<Autosave>
 * @desc Game settings related to autosave.
 * @default {"General":"","AutosaveType:str":"file0","StartEnabled:eval":"true","Requests":"","RequestsRequireSaveEnable:eval":"true","AfterBattle:eval":"true","AfterTransfer:eval":"true","AfterMenuCall:eval":"true","AfterExitMenu:eval":"true","JavaScript":"","OnAutosaveSuccessJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\"","OnAutosaveFailureJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\""}
 *
 * @param AutosaveConfirm:struct
 * @text Confirm Window
 * @parent Autosave:struct
 * @type struct<AutosaveConfirm>
 * @desc Settings regarding the Autosave Confirmation Window.
 * @default {"General":"","Enable:eval":"true","Duration:num":"1000","ScreenPosition:str":"lower right","Vocabulary":"","VocabAutosaveSuccess:str":"\\I[193]Autosaved!","VocabAutosaveFailure:str":"\\I[194]Autosave failed!"}
 *
 * @param AutosaveOption:struct
 * @text Options Settings
 * @parent Autosave:struct
 * @type struct<AutosaveOption>
 * @desc Options Menu settings regarding Autosave.
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Autosave","Default:eval":"true"}
 *
 * @param StyleBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ActorGraphic:str
 * @text Actor Graphic
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler
 * @value svbattler
 * @desc Choose how the actor graphics appear in save menus.
 * @default face
 *
 * @param SaveMenuStyle:str
 * @text Save Menu Style
 * @type select
 * @option List
 * @value list
 * @option Vertical
 * @value vertical
 * @option Box
 * @value box
 * @option Large
 * @value large
 * @desc Choose what kind of style to use for the Save Menu.
 * @default box
 *
 * @param SaveMenu:struct
 * @text Style Settings
 * @parent SaveMenuStyle:str
 * @type struct<SaveMenu>
 * @desc Settings regarding the individual Save Menu styles.
 * @default {"General":"","LatestText:str":"NEW!","LatestColor:str":"#f49ac1","SpriteWidth:num":"48","SvBattlerWidth:num":"64","MakeSavefileInfoJS:func":"\"// Declare Constants\\nconst info = arguments[0];\\n\\n// Store Displayed Save Data\\ninfo.gold = $gameParty.gold();\\ninfo.svbattlers = $gameParty.svbattlersForSaveFile();\\ninfo.description = $gameSystem.getSaveDescription() || '';\\ninfo.picture = $gameSystem.getSavePicture() || '';\\n\\n// Return Save Info\\nreturn info;\"","List":"","ListRows:num":"4","ListCols:num":"1","ListContentsJS:func":"\"// Declare Variables\\nconst info = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\n\\n// Draw Actors\\nconst minimumScale = true;\\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\\nlet ch = rect.height;\\nif (this.actorStyle() === 'sprite') {\\n    ch -= lineHeight - 8;\\n} else if (this.actorStyle() === 'svbattler') {\\n    ch -= lineHeight - 12;\\n}\\nthis.drawActors(info, rect.x + padding, rect.y, rect.width - padding * 2, ch);\\n\\n// Draw Gradients\\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\\nif (info.gold || info.description) {\\n    const gy = rect.y + rect.height - lineHeight;\\n    this.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight, c1, c2, true);\\n}\\n\\n// Draw Data\\nthis.contents.fontSize = 18;\\ny = rect.y;\\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'right');\\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'center');\\ny = rect.y + rect.height - lineHeight;\\nif (info.gold) {\\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\\n}\\n\\n// Draw Description\\ny = rect.y + rect.height - lineHeight;\\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\"","ListFileDataJS:func":"\"// Declare Constants\\nconst savefileId = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst y2 = rect.y + ((rect.height - lineHeight) / 2);\\n\\n// Draw File Data\\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\\nthis.drawLatestMarker(savefileId, rect.x + padding, y2);\"","Vertical":"","VertRows:num":"1","VertCols:num":"3","VertContentsJS:func":"\"// Declare Variables\\nconst info = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\n\\n// Draw Actors\\nconst minimumScale = true;\\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\\nconst ch = this.actorStyle() === 'face' ? ImageManager.faceHeight : ImageManager.saveMenuSvBattlerWidth;\\nconst cy = rect.y + ((rect.height - ch) / 2);\\nthis.drawActors(info, rect.x + padding, cy, rect.width - padding * 2, ch);\\n\\n// Draw Gradients\\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\\nconst gy = rect.y + rect.height - lineHeight * 2;\\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight * 2, c1, c2, true);\\n\\n// Draw Description\\ny = rect.y + lineHeight * 2;\\nthis.setWordWrap(true);\\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\\nthis.resetWordWrap(false);\\n\\n// Draw Data\\nthis.contents.fontSize = 18;\\ny = rect.y + rect.height - lineHeight;\\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'center');\\ny -= lineHeight;\\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'center');\\nif (info.gold) {\\n    y -= lineHeight;\\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\\n}\"","VertFileDataJS:func":"\"// Declare Constants\\nconst savefileId = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\n\\n// Draw File Data\\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\\nthis.drawLatestMarker(savefileId, x2, rect.y);\"","Box":"","BoxRows:num":"2","BoxCols:num":"3","BoxContentsJS:func":"\"// Declare Variables\\nconst info = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\n\\n// Draw Actors\\nconst minimumScale = false;\\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\\nconst rh = rect.height - lineHeight * 3;\\nconst ch = ImageManager.faceHeight;\\nconst cy = rect.y + ((rh - ch) / 2) + lineHeight;\\nthis.drawActors(info, rect.x + 1, cy, rect.width - 2, ch);\\n\\n// Draw Gradients\\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\\nconst gy = rect.y + rect.height - lineHeight * 2;\\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight * 2, c1, c2, true);\\n\\n// Draw Data\\nthis.contents.fontSize = 18;\\ny = rect.y + lineHeight;\\nthis.contents.gradientFillRect(rect.x, y, rect.width, lineHeight, c2, c1, false);\\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'right');\\ny += lineHeight;\\nconst hw = rect.width / 2;\\nthis.contents.gradientFillRect(rect.x + hw, y, hw, lineHeight, c2, c1, false);\\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'right');\\nif (info.gold) {\\n    // Ignore drawing gold in this style\\n    // y = rect.y + rect.height - lineHeight * 3;\\n    // this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\\n}\\n\\n// Draw Description\\ny = rect.y + rect.height - lineHeight * 2;\\nthis.setWordWrap(true);\\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\\nthis.resetWordWrap(false);\"","BoxFileDataJS:func":"\"// Declare Constants\\nconst savefileId = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\n\\n// Draw File Data\\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\\nthis.drawLatestMarker(savefileId, x2, rect.y);\"","Large":"","LargeRows:num":"1","LargeCols:num":"1","LargeContentsJS:func":"\"// Declare Variables\\nconst info = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\n\\n// Draw Actors\\nconst minimumScale = false;\\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\\nconst ch = this.actorStyle() === 'face' ? ImageManager.faceHeight : ImageManager.saveMenuSvBattlerWidth;\\nconst cy = rect.y + ((rect.height - ch) / 2);\\nthis.drawActors(info, rect.x + padding, cy, rect.width - padding * 2, ch);\\n\\n// Draw Gradients\\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\\nconst gy = rect.y + rect.height - lineHeight;\\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight, c1, c2, true);\\n\\n// Draw Description\\ny = rect.y + lineHeight * 1.5;\\nthis.setWordWrap(true);\\nthis.drawDescription(info, rect.x + padding * 4, y, rect.width - padding * 8, 'left');\\nthis.resetWordWrap(false);\\n\\n// Draw Data\\nthis.contents.fontSize = 18;\\nthis.drawTimestamp(info, rect.x + padding, rect.y, rect.width - padding * 2, 'center');\\ny = rect.y + rect.height - lineHeight;\\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'center');\\nif (info.gold) {\\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\\n}\"","LargeFileDataJS:func":"\"// Declare Constants\\nconst savefileId = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\n\\n// Draw File Data\\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\\nthis.drawLatestMarker(savefileId, x2, rect.y);\""}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * General Save Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Save:
 *
 * @param General
 *
 * @param SaveStyle:str
 * @text Save Style
 * @parent General
 * @type select
 * @option Standard: Save freely in any slot.
 * @value standard
 * @option Slot-Locked: Select one dedicated slot at New Game.
 * @value locked
 * @option Single: Only one slot is available for the game.
 * @value single
 * @desc Select a save style for the game. Some of these options
 * may alter other Plugin Parameter settings.
 * @default standard
 *
 * @param MaxSaveFiles:num
 * @text Max Save Files
 * @parent General
 * @desc Maximum number of save files for the game.
 * @default 20
 *
 * @param AutosaveMaxCount:eval
 * @text Autosave Counts?
 * @parent General
 * @type boolean
 * @on Counts Towards Max
 * @off Doesn't Count
 * @desc Count the autosave file towards the max count?
 * @default false
 *
 * @param LocalMode
 * @text Local Mode
 *
 * @param LocalMode:eval
 * @text Local Mode?
 * @parent LocalMode
 * @type boolean
 * @on Local File
 * @off Forage Key
 * @desc When running the game on client, use the Local Mode of
 * saving via files or store saves to forage keys?
 * @default true
 *
 * @param FilenameFmt:str
 * @text Filename Format
 * @parent LocalMode
 * @desc Filename format for save files.
 * %1 - Save File ID
 * @default file%1
 *
 * @param ExtensionFmt:str
 * @text Extension Format
 * @parent LocalMode
 * @desc Filename extension format for save files.
 * %1 - Save Name
 * @default %1.rmmzsave
 *
 * @param ForageKey
 * @text Forage Key
 *
 * @param KeyFmt:str
 * @text Forage Key Format
 * @parent ForageKey
 * @desc Forage Key format when saving to memory.
 * %1 - Game ID, %2 - Save Name
 * @default rmmzsave.%1.%2
 *
 * @param TestKey:str
 * @text Forage Key Test
 * @parent ForageKey
 * @desc Key used to test if saving a forage key is possible.
 * @default rmmzsave.test
 *
 * @param Vocabulary
 *
 * @param VocabLockedSaveSlot:str
 * @text Help: Slot-Locked
 * @parent Vocabulary
 * @desc Help description used for initial slot-locked selection.
 * @default Pick a file to start a new game.
 *
 * @param JavaScript
 *
 * @param OnSaveSuccessJS:func
 * @text JS: On Save Success
 * @parent JavaScript
 * @type note
 * @desc Code to perform when a save is successful.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 * @param OnSaveFailureJS:func
 * @text JS: On Save Failure
 * @parent JavaScript
 * @type note
 * @desc Code to perform when a save has failed.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 * @param OnLoadSuccessJS:func
 * @text JS: On Load Success
 * @parent JavaScript
 * @type note
 * @desc Code to perform when a load is successful.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 * @param OnLoadFailureJS:func
 * @text JS: On Load Failure
 * @parent JavaScript
 * @type note
 * @desc Code to perform when a load has failed.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Save Confirm Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveConfirm:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable Window?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable the Save Confirmation Window?
 * @default true
 *
 * @param Duration:num
 * @text Pop Up Duration
 * @parent General
 * @type number
 * @min 1
 * @desc How long should the window be open for before closing?
 * Insert the time in milliseconds.
 * @default 1000
 *
 * @param ConfirmRect:func
 * @text JS: X, Y, W, H
 * @parent General
 * @type note
 * @desc Code used to determine the dimensions of the 
 * Save Confirmation Window.
 * @default "const width = Graphics.boxWidth / 2;\nconst height = this.calcWindowHeight(1, false);\nconst x = (Graphics.width - width) / 2;\nconst y = (Graphics.height - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param Vocabulary
 *
 * @param VocabSaveSuccess:str
 * @text Pop Up: Save Success
 * @parent Vocabulary
 * @desc Text used for a "Save Success" message popup.
 * Text codes are allowed.
 * @default Save Successful!
 *
 * @param VocabSaveFailure:str
 * @text Pop Up: Save Failure
 * @parent Vocabulary
 * @desc Text used for a "Save Failure" message popup.
 * Text codes are allowed.
 * @default Could not save!
 *
 * @param VocabLoadFailure:str
 * @text Pop Up: Load Failure
 * @parent Vocabulary
 * @desc Text used for a "Load Failure" message popup.
 * Text codes are allowed.
 * @default Could not load save file!
 *
 */
/* ----------------------------------------------------------------------------
 * Autosave Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Autosave:
 *
 * @param General
 *
 * @param AutosaveType:str
 * @text Autosave Type
 * @parent General
 * @type select
 * @option Autosave File: Dedicated file for autosaves.
 * @value file0
 * @option Current File: Overwrites the current save file.
 * @value current
 * @option Autosave File + Current File: Both of the above.
 * @value both
 * @desc Select autosave type.
 * Requires Database => System 1 => [x] Enable Autosave
 * @default file0
 *
 * @param Requests
 *
 * @param RequestsRequireSaveEnable:eval
 * @text Requires Save Enable?
 * @parent Requests
 * @type boolean
 * @on Requires Save Enable
 * @off Doesn't Require
 * @desc Autosave requests require Saving to be enabled?
 * @default true
 *
 * @param AfterBattle:eval
 * @text Request after Battle?
 * @parent Requests
 * @type boolean
 * @on Autosave
 * @off Don't
 * @desc Requests an autosave after battle?
 * @default true
 *
 * @param AfterTransfer:eval
 * @text Request on Transfer?
 * @parent Requests
 * @type boolean
 * @on Autosave
 * @off Don't
 * @desc Requests an autosave after a map transfer?
 * @default true
 *
 * @param AfterMenuCall:eval
 * @text Request on Menu Open?
 * @parent Requests
 * @type boolean
 * @on Autosave
 * @off Don't
 * @desc Requests an autosave after opening the main menu?
 * @default true
 *
 * @param AfterExitMenu:eval
 * @text Request on Menu Exit?
 * @parent Requests
 * @type boolean
 * @on Autosave
 * @off Don't
 * @desc Requests an autosave after exiting the main menu?
 * @default true
 *
 * @param JavaScript
 *
 * @param OnAutosaveSuccessJS:func
 * @text JS: On Success
 * @parent JavaScript
 * @type note
 * @desc Code to perform when an autosave is successful.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 * @param OnAutosaveFailureJS:func
 * @text JS: On Failure
 * @parent JavaScript
 * @type note
 * @desc Code to perform when an autosave has failed.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Autosave Confirm Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutosaveConfirm:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable Window?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable the Autoave Confirmation Window?
 * @default true
 *
 * @param Duration:num
 * @text Pop Up Duration
 * @parent General
 * @type number
 * @min 1
 * @desc How long should the window be open for before closing?
 * Insert the time in milliseconds.
 * @default 1000
 *
 * @param ScreenPosition:str
 * @text Screen Position
 * @parent General
 * @type select
 * @option Lower Left
 * @value lower left
 * @option Lower Center
 * @value lower center
 * @option Lower Right
 * @value lower right
 * @option Middle Left
 * @value middle left
 * @option Middle Center
 * @value middle center
 * @option Middle Right
 * @value middle right
 * @option Upper Left
 * @value upper left
 * @option Upper Center
 * @value upper center
 * @option Upper Right
 * @value upper right
 * @desc Where does this window appear on the screen?
 * @default lower right
 *
 * @param Vocabulary
 *
 * @param VocabAutosaveSuccess:str
 * @text Pop Up: Save Success
 * @parent Vocabulary
 * @desc Text used for an "Autosave Success" message popup.
 * Text codes are allowed.
 * @default \I[193]Autosaved!
 *
 * @param VocabAutosaveFailure:str
 * @text Pop Up: Save Failure
 * @parent Vocabulary
 * @desc Text used for an "Autosave Failure" message popup.
 * Text codes are allowed.
 * @default \I[194]Autosave failed!
 *
 */
/* ----------------------------------------------------------------------------
 * Autosave Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutosaveOption:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Autosave' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @desc Command name of the option.
 * @default Autosave
 *
 * @param Default:eval
 * @text Default Value
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Determine the default value of this option.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Save Menu Style Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveMenu:
 *
 * @param General
 *
 * @param LatestText:str
 * @text Latest Text
 * @parent General
 * @desc Text used to depict latest save file.
 * @default NEW!
 *
 * @param LatestColor:str
 * @text Latest Color
 * @parent General
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #f49ac1
 *
 * @param SpriteWidth:num
 * @text Sprite Width
 * @parent General
 * @type number
 * @desc Pixel width of map sprites when drawn in the Save Menu.
 * @default 48
 *
 * @param SvBattlerWidth:num
 * @text SV Battler Width
 * @parent General
 * @type number
 * @desc Pixel width of sv battlers when drawn in the Save Menu.
 * @default 64
 *
 * @param MakeSavefileInfoJS:func
 * @text JS: Save Display Info
 * @parent General
 * @type note
 * @desc Code that, upon saving, determines which info is quickly stored for displaying.
 * @default "// Declare Constants\nconst info = arguments[0];\n\n// Store Displayed Save Data\ninfo.gold = $gameParty.gold();\ninfo.svbattlers = $gameParty.svbattlersForSaveFile();\ninfo.description = $gameSystem.getSaveDescription() || '';\ninfo.picture = $gameSystem.getSavePicture() || '';\n\n// Return Save Info\nreturn info;"
 *
 * @param List
 * @text List Style
 *
 * @param ListRows:num
 * @text Rows
 * @parent List
 * @type number
 * @min 1
 * @desc Number of rows for this style.
 * @default 4
 *
 * @param ListCols:num
 * @text Columns
 * @parent List
 * @type number
 * @min 1
 * @desc Number of column for this style.
 * @default 1
 *
 * @param ListContentsJS:func
 * @text JS: Draw Contents
 * @parent List
 * @type note
 * @desc Code on how to draw the contents for this style.
 * @default "// Declare Variables\nconst info = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\n\n// Draw Actors\nconst minimumScale = true;\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\nlet ch = rect.height;\nif (this.actorStyle() === 'sprite') {\n    ch -= lineHeight - 8;\n} else if (this.actorStyle() === 'svbattler') {\n    ch -= lineHeight - 12;\n}\nthis.drawActors(info, rect.x + padding, rect.y, rect.width - padding * 2, ch);\n\n// Draw Gradients\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\nif (info.gold || info.description) {\n    const gy = rect.y + rect.height - lineHeight;\n    this.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight, c1, c2, true);\n}\n\n// Draw Data\nthis.contents.fontSize = 18;\ny = rect.y;\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'right');\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'center');\ny = rect.y + rect.height - lineHeight;\nif (info.gold) {\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\n}\n\n// Draw Description\ny = rect.y + rect.height - lineHeight;\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');"
 *
 * @param ListFileDataJS:func
 * @text JS: Draw File Data
 * @parent List
 * @type note
 * @desc Code on how to draw the file data for this style.
 * @default "// Declare Constants\nconst savefileId = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst y2 = rect.y + ((rect.height - lineHeight) / 2);\n\n// Draw File Data\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\nthis.drawLatestMarker(savefileId, rect.x + padding, y2);"
 *
 * @param Vertical
 * @text Vertical Style
 *
 * @param VertRows:num
 * @text Rows
 * @parent Vertical
 * @type number
 * @min 1
 * @desc Number of rows for this style.
 * @default 1
 *
 * @param VertCols:num
 * @text Columns
 * @parent Vertical
 * @type number
 * @min 1
 * @desc Number of column for this style.
 * @default 3
 *
 * @param VertContentsJS:func
 * @text JS: Draw Contents
 * @parent Vertical
 * @type note
 * @desc Code on how to draw the contents for this style.
 * @default "// Declare Variables\nconst info = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\n\n// Draw Actors\nconst minimumScale = true;\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\nconst ch = this.actorStyle() === 'face' ? ImageManager.faceHeight : ImageManager.saveMenuSvBattlerWidth;\nconst cy = rect.y + ((rect.height - ch) / 2);\nthis.drawActors(info, rect.x + padding, cy, rect.width - padding * 2, ch);\n\n// Draw Gradients\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\nconst gy = rect.y + rect.height - lineHeight * 2;\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight * 2, c1, c2, true);\n\n// Draw Description\ny = rect.y + lineHeight * 2;\nthis.setWordWrap(true);\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\nthis.resetWordWrap(false);\n\n// Draw Data\nthis.contents.fontSize = 18;\ny = rect.y + rect.height - lineHeight;\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'center');\ny -= lineHeight;\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'center');\nif (info.gold) {\n    y -= lineHeight;\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\n}"
 *
 * @param VertFileDataJS:func
 * @text JS: Draw File Data
 * @parent Vertical
 * @type note
 * @desc Code on how to draw the file data for this style.
 * @default "// Declare Constants\nconst savefileId = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\n\n// Draw File Data\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\nthis.drawLatestMarker(savefileId, x2, rect.y);"
 *
 * @param Box
 * @text Box Style
 *
 * @param BoxRows:num
 * @text Rows
 * @parent Box
 * @type number
 * @min 1
 * @desc Number of rows for this style.
 * @default 2
 *
 * @param BoxCols:num
 * @text Columns
 * @parent Box
 * @type number
 * @min 1
 * @desc Number of column for this style.
 * @default 3
 *
 * @param BoxContentsJS:func
 * @text JS: Draw Contents
 * @parent Box
 * @type note
 * @desc Code on how to draw the contents for this style.
 * @default "// Declare Variables\nconst info = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\n\n// Draw Actors\nconst minimumScale = false;\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\nconst rh = rect.height - lineHeight * 3;\nconst ch = ImageManager.faceHeight;\nconst cy = rect.y + ((rh - ch) / 2) + lineHeight;\nthis.drawActors(info, rect.x + 1, cy, rect.width - 2, ch);\n\n// Draw Gradients\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\nconst gy = rect.y + rect.height - lineHeight * 2;\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight * 2, c1, c2, true);\n\n// Draw Data\nthis.contents.fontSize = 18;\ny = rect.y + lineHeight;\nthis.contents.gradientFillRect(rect.x, y, rect.width, lineHeight, c2, c1, false);\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'right');\ny += lineHeight;\nconst hw = rect.width / 2;\nthis.contents.gradientFillRect(rect.x + hw, y, hw, lineHeight, c2, c1, false);\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'right');\nif (info.gold) {\n    // Ignore drawing gold in this style\n    // y = rect.y + rect.height - lineHeight * 3;\n    // this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\n}\n\n// Draw Description\ny = rect.y + rect.height - lineHeight * 2;\nthis.setWordWrap(true);\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\nthis.resetWordWrap(false);"
 *
 * @param BoxFileDataJS:func
 * @text JS: Draw File Data
 * @parent Box
 * @type note
 * @desc Code on how to draw the file data for this style.
 * @default "// Declare Constants\nconst savefileId = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\n\n// Draw File Data\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\nthis.drawLatestMarker(savefileId, x2, rect.y);"
 *
 * @param Large
 * @text Large Style
 *
 * @param LargeRows:num
 * @text Rows
 * @parent Large
 * @type number
 * @min 1
 * @desc Number of rows for this style.
 * @default 1
 *
 * @param LargeCols:num
 * @text Columns
 * @parent Large
 * @type number
 * @min 1
 * @desc Number of column for this style.
 * @default 1
 *
 * @param LargeContentsJS:func
 * @text JS: Draw Contents
 * @parent Large
 * @type note
 * @desc Code on how to draw the contents for this style.
 * @default "// Declare Variables\nconst info = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\n\n// Draw Actors\nconst minimumScale = false;\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\nconst ch = this.actorStyle() === 'face' ? ImageManager.faceHeight : ImageManager.saveMenuSvBattlerWidth;\nconst cy = rect.y + ((rect.height - ch) / 2);\nthis.drawActors(info, rect.x + padding, cy, rect.width - padding * 2, ch);\n\n// Draw Gradients\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\nconst gy = rect.y + rect.height - lineHeight;\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight, c1, c2, true);\n\n// Draw Description\ny = rect.y + lineHeight * 1.5;\nthis.setWordWrap(true);\nthis.drawDescription(info, rect.x + padding * 4, y, rect.width - padding * 8, 'left');\nthis.resetWordWrap(false);\n\n// Draw Data\nthis.contents.fontSize = 18;\nthis.drawTimestamp(info, rect.x + padding, rect.y, rect.width - padding * 2, 'center');\ny = rect.y + rect.height - lineHeight;\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'center');\nif (info.gold) {\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\n}"
 *
 * @param LargeFileDataJS:func
 * @text JS: Draw File Data
 * @parent Large
 * @type note
 * @desc Code on how to draw the file data for this style.
 * @default "// Declare Constants\nconst savefileId = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\n\n// Draw File Data\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\nthis.drawLatestMarker(savefileId, x2, rect.y);"
 *
 */
//=============================================================================

const _0x351ecc=_0x4356;(function(_0x2cd103,_0x39f763){const _0x577211=_0x4356,_0x140158=_0x2cd103();while(!![]){try{const _0x5e9805=parseInt(_0x577211(0x2ef))/0x1+parseInt(_0x577211(0x297))/0x2+-parseInt(_0x577211(0x27d))/0x3*(-parseInt(_0x577211(0x2e2))/0x4)+parseInt(_0x577211(0x2ac))/0x5+-parseInt(_0x577211(0x2c0))/0x6+-parseInt(_0x577211(0x2c7))/0x7*(parseInt(_0x577211(0x1ec))/0x8)+-parseInt(_0x577211(0x1fa))/0x9*(parseInt(_0x577211(0x1b8))/0xa);if(_0x5e9805===_0x39f763)break;else _0x140158['push'](_0x140158['shift']());}catch(_0x5294b1){_0x140158['push'](_0x140158['shift']());}}}(_0x4c19,0xab0bd));var label='SaveCore',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x351ecc(0x2e1)](function(_0x52c024){const _0xbd8a74=_0x351ecc;return _0x52c024[_0xbd8a74(0x318)]&&_0x52c024[_0xbd8a74(0x229)][_0xbd8a74(0x300)]('['+label+']');})[0x0];VisuMZ[label][_0x351ecc(0x259)]=VisuMZ[label][_0x351ecc(0x259)]||{},VisuMZ[_0x351ecc(0x1f6)]=function(_0x49fa35,_0x25d221){const _0x2850f3=_0x351ecc;for(const _0x39e870 in _0x25d221){if(_0x39e870[_0x2850f3(0x30d)](/(.*):(.*)/i)){const _0x348ec5=String(RegExp['$1']),_0x830082=String(RegExp['$2'])[_0x2850f3(0x296)]()[_0x2850f3(0x2ae)]();let _0x323cda,_0x4d3f10,_0x4a288a;switch(_0x830082){case'NUM':_0x323cda=_0x25d221[_0x39e870]!==''?Number(_0x25d221[_0x39e870]):0x0;break;case'ARRAYNUM':_0x4d3f10=_0x25d221[_0x39e870]!==''?JSON[_0x2850f3(0x207)](_0x25d221[_0x39e870]):[],_0x323cda=_0x4d3f10['map'](_0x2fe7eb=>Number(_0x2fe7eb));break;case _0x2850f3(0x267):_0x323cda=_0x25d221[_0x39e870]!==''?eval(_0x25d221[_0x39e870]):null;break;case'ARRAYEVAL':_0x4d3f10=_0x25d221[_0x39e870]!==''?JSON[_0x2850f3(0x207)](_0x25d221[_0x39e870]):[],_0x323cda=_0x4d3f10['map'](_0x188a05=>eval(_0x188a05));break;case _0x2850f3(0x26c):_0x323cda=_0x25d221[_0x39e870]!==''?JSON['parse'](_0x25d221[_0x39e870]):'';break;case'ARRAYJSON':_0x4d3f10=_0x25d221[_0x39e870]!==''?JSON['parse'](_0x25d221[_0x39e870]):[],_0x323cda=_0x4d3f10['map'](_0x1d50ad=>JSON[_0x2850f3(0x207)](_0x1d50ad));break;case'FUNC':_0x323cda=_0x25d221[_0x39e870]!==''?new Function(JSON[_0x2850f3(0x207)](_0x25d221[_0x39e870])):new Function('return\x200');break;case _0x2850f3(0x242):_0x4d3f10=_0x25d221[_0x39e870]!==''?JSON[_0x2850f3(0x207)](_0x25d221[_0x39e870]):[],_0x323cda=_0x4d3f10['map'](_0x11a23e=>new Function(JSON[_0x2850f3(0x207)](_0x11a23e)));break;case _0x2850f3(0x31c):_0x323cda=_0x25d221[_0x39e870]!==''?String(_0x25d221[_0x39e870]):'';break;case _0x2850f3(0x2c1):_0x4d3f10=_0x25d221[_0x39e870]!==''?JSON[_0x2850f3(0x207)](_0x25d221[_0x39e870]):[],_0x323cda=_0x4d3f10[_0x2850f3(0x1c4)](_0x1c7a26=>String(_0x1c7a26));break;case _0x2850f3(0x1bf):_0x4a288a=_0x25d221[_0x39e870]!==''?JSON[_0x2850f3(0x207)](_0x25d221[_0x39e870]):{},_0x49fa35[_0x348ec5]={},VisuMZ[_0x2850f3(0x1f6)](_0x49fa35[_0x348ec5],_0x4a288a);continue;case _0x2850f3(0x2e5):_0x4d3f10=_0x25d221[_0x39e870]!==''?JSON[_0x2850f3(0x207)](_0x25d221[_0x39e870]):[],_0x323cda=_0x4d3f10[_0x2850f3(0x1c4)](_0x1ab05b=>VisuMZ['ConvertParams']({},JSON[_0x2850f3(0x207)](_0x1ab05b)));break;default:continue;}_0x49fa35[_0x348ec5]=_0x323cda;}}return _0x49fa35;},(_0x25540d=>{const _0x9a18b2=_0x351ecc,_0x5dcc95=_0x25540d[_0x9a18b2(0x22f)];for(const _0x3acece of dependencies){if(!Imported[_0x3acece]){alert(_0x9a18b2(0x1bb)[_0x9a18b2(0x1f8)](_0x5dcc95,_0x3acece)),SceneManager['exit']();break;}}const _0x113d14=_0x25540d[_0x9a18b2(0x229)];if(_0x113d14['match'](/\[Version[ ](.*?)\]/i)){const _0x3411af=Number(RegExp['$1']);_0x3411af!==VisuMZ[label][_0x9a18b2(0x31d)]&&(alert(_0x9a18b2(0x24c)[_0x9a18b2(0x1f8)](_0x5dcc95,_0x3411af)),SceneManager[_0x9a18b2(0x2bc)]());}if(_0x113d14[_0x9a18b2(0x30d)](/\[Tier[ ](\d+)\]/i)){const _0x3eea27=Number(RegExp['$1']);_0x3eea27<tier?(alert(_0x9a18b2(0x1d3)[_0x9a18b2(0x1f8)](_0x5dcc95,_0x3eea27,tier)),SceneManager[_0x9a18b2(0x2bc)]()):tier=Math[_0x9a18b2(0x1b5)](_0x3eea27,tier);}VisuMZ[_0x9a18b2(0x1f6)](VisuMZ[label][_0x9a18b2(0x259)],_0x25540d[_0x9a18b2(0x256)]);})(pluginData),PluginManager[_0x351ecc(0x31e)](pluginData[_0x351ecc(0x22f)],_0x351ecc(0x232),_0x2cc3e1=>{const _0x443e4e=_0x351ecc;if(!DataManager[_0x443e4e(0x238)]())return;VisuMZ[_0x443e4e(0x1f6)](_0x2cc3e1,_0x2cc3e1);if($gameSystem)$gameSystem[_0x443e4e(0x1ba)](_0x2cc3e1['Enable']);}),PluginManager['registerCommand'](pluginData[_0x351ecc(0x22f)],'AutosaveRequest',_0x5b63b3=>{const _0x22f109=_0x351ecc;if(!DataManager[_0x22f109(0x238)]()||$gameParty[_0x22f109(0x2ad)]())return;SceneManager[_0x22f109(0x291)][_0x22f109(0x2fb)]();}),PluginManager[_0x351ecc(0x31e)](pluginData[_0x351ecc(0x22f)],'AutosaveExecute',_0x4a3b57=>{const _0x44951a=_0x351ecc;if(!DataManager[_0x44951a(0x238)]()||$gameParty['inBattle']())return;SceneManager['_scene']['executeAutosave']();}),PluginManager[_0x351ecc(0x31e)](pluginData['name'],'AutosaveForce',_0x46db41=>{const _0x4898b5=_0x351ecc;if(!DataManager[_0x4898b5(0x238)]()||$gameParty['inBattle']())return;SceneManager[_0x4898b5(0x291)]['forceAutosave']();}),PluginManager['registerCommand'](pluginData[_0x351ecc(0x22f)],'SaveCurrentSlot',_0x540ead=>{const _0x38f49d=_0x351ecc;SceneManager['_scene'][_0x38f49d(0x2d3)]();}),PluginManager[_0x351ecc(0x31e)](pluginData[_0x351ecc(0x22f)],_0x351ecc(0x25d),_0x47eee9=>{const _0x4161ca=_0x351ecc;VisuMZ[_0x4161ca(0x1f6)](_0x47eee9,_0x47eee9);if($gameSystem)$gameSystem[_0x4161ca(0x304)](_0x47eee9[_0x4161ca(0x1e6)]);}),PluginManager['registerCommand'](pluginData['name'],'SavePicture',_0x53850d=>{const _0xedfb8b=_0x351ecc;VisuMZ[_0xedfb8b(0x1f6)](_0x53850d,_0x53850d);if($gameSystem)$gameSystem[_0xedfb8b(0x2df)](_0x53850d[_0xedfb8b(0x30b)]);}),VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x1b6)]=Scene_Boot[_0x351ecc(0x281)]['onDatabaseLoaded'],Scene_Boot['prototype']['onDatabaseLoaded']=function(){const _0x3bad4d=_0x351ecc;VisuMZ['SaveCore'][_0x3bad4d(0x1b6)][_0x3bad4d(0x266)](this),this[_0x3bad4d(0x20c)](),this['process_VisuMZ_SaveCore_Switches_Variables']();},Scene_Boot[_0x351ecc(0x281)][_0x351ecc(0x20c)]=function(){const _0x54bcbb=_0x351ecc;StorageManager[_0x54bcbb(0x22c)]()===_0x54bcbb(0x250)&&($dataSystem[_0x54bcbb(0x262)]=!![]);},VisuMZ[_0x351ecc(0x301)]=[],VisuMZ[_0x351ecc(0x2bf)]=[],Scene_Boot[_0x351ecc(0x281)][_0x351ecc(0x29b)]=function(){const _0x461c1b=_0x351ecc;for(let _0x508ddf=0x1;_0x508ddf<$dataSystem[_0x461c1b(0x20d)]['length'];_0x508ddf++){if($dataSystem[_0x461c1b(0x20d)][_0x508ddf][_0x461c1b(0x30d)](/<GLOBAL>/i))VisuMZ[_0x461c1b(0x301)]['push'](_0x508ddf);}for(let _0x13a11c=0x1;_0x13a11c<$dataSystem[_0x461c1b(0x29e)]['length'];_0x13a11c++){if($dataSystem[_0x461c1b(0x29e)][_0x13a11c]['match'](/<GLOBAL>/i))VisuMZ[_0x461c1b(0x2bf)][_0x461c1b(0x2a8)](_0x13a11c);}},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x1b7)]=DataManager[_0x351ecc(0x1a1)],DataManager['createGameObjects']=function(){const _0x262095=_0x351ecc;VisuMZ[_0x262095(0x2ba)][_0x262095(0x1b7)]['call'](this),Scene_File[_0x262095(0x2ee)]=$gameParty[_0x262095(0x26a)]();},DataManager[_0x351ecc(0x238)]=function(){const _0x4844c6=_0x351ecc;return!DataManager[_0x4844c6(0x1e7)]()&&!DataManager[_0x4844c6(0x1a5)]()&&$dataSystem[_0x4844c6(0x262)];},DataManager[_0x351ecc(0x194)]=function(){const _0x3ef146=_0x351ecc;if(StorageManager[_0x3ef146(0x22c)]()==='single')return 0x1;let _0x4ffbcd=VisuMZ[_0x3ef146(0x2ba)]['Settings'][_0x3ef146(0x272)][_0x3ef146(0x200)]?0x0:0x1;return VisuMZ[_0x3ef146(0x2ba)]['Settings'][_0x3ef146(0x272)][_0x3ef146(0x1af)]+_0x4ffbcd;},DataManager[_0x351ecc(0x307)]=function(_0x3ef643){const _0x468811=_0x351ecc,_0x278d47=VisuMZ[_0x468811(0x2ba)][_0x468811(0x259)][_0x468811(0x272)]['FilenameFmt'];return _0x278d47[_0x468811(0x1f8)](_0x3ef643);},VisuMZ['SaveCore'][_0x351ecc(0x23f)]=DataManager[_0x351ecc(0x1d4)],DataManager[_0x351ecc(0x1d4)]=function(){const _0x355b5b=_0x351ecc,_0x5a5795=VisuMZ[_0x355b5b(0x2ba)]['DataManager_makeSavefileInfo'][_0x355b5b(0x266)](this);return VisuMZ['SaveCore'][_0x355b5b(0x259)][_0x355b5b(0x1df)][_0x355b5b(0x305)][_0x355b5b(0x266)](this,_0x5a5795);},VisuMZ[_0x351ecc(0x2ba)]['DataManager_loadAllSavefileImages']=DataManager[_0x351ecc(0x218)],DataManager[_0x351ecc(0x218)]=function(){const _0x28daea=_0x351ecc;VisuMZ[_0x28daea(0x2ba)][_0x28daea(0x302)][_0x28daea(0x266)](this),this[_0x28daea(0x1be)]();},DataManager['loadPartyImagesForSavefile']=function(){const _0x3e0383=_0x351ecc;for(const _0x40ec4e of $gameParty[_0x3e0383(0x2e9)]()){_0x40ec4e['faceName']()&&ImageManager[_0x3e0383(0x1a9)](_0x40ec4e[_0x3e0383(0x220)]()),_0x40ec4e[_0x3e0383(0x20e)]()&&ImageManager[_0x3e0383(0x236)](_0x40ec4e[_0x3e0383(0x20e)]()),_0x40ec4e['battlerName']()&&ImageManager[_0x3e0383(0x271)](_0x40ec4e[_0x3e0383(0x253)]());}},ConfigManager[_0x351ecc(0x2b7)]=VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x259)]['AutosaveOption'][_0x351ecc(0x1b3)],ConfigManager[_0x351ecc(0x1ef)]=[],ConfigManager[_0x351ecc(0x2a0)]=[],VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x1ae)]=ConfigManager[_0x351ecc(0x211)],ConfigManager[_0x351ecc(0x211)]=function(){const _0x5005b4=_0x351ecc,_0x5088a1=VisuMZ['SaveCore'][_0x5005b4(0x1ae)][_0x5005b4(0x266)](this);return _0x5088a1[_0x5005b4(0x2b7)]=this['autosave']||VisuMZ[_0x5005b4(0x2ba)][_0x5005b4(0x259)][_0x5005b4(0x197)]['Default'],_0x5088a1[_0x5005b4(0x1ef)]=this[_0x5005b4(0x1ef)]||[],_0x5088a1[_0x5005b4(0x2a0)]=this[_0x5005b4(0x2a0)]||[],_0x5088a1;},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x209)]=ConfigManager[_0x351ecc(0x1d7)],ConfigManager[_0x351ecc(0x1d7)]=function(_0x408bfe){const _0x130dac=_0x351ecc;VisuMZ[_0x130dac(0x2ba)][_0x130dac(0x209)][_0x130dac(0x266)](this,_0x408bfe),this[_0x130dac(0x2b7)]=_0x408bfe[_0x130dac(0x2b7)]!==undefined?_0x408bfe[_0x130dac(0x2b7)]:VisuMZ[_0x130dac(0x2ba)][_0x130dac(0x259)][_0x130dac(0x197)][_0x130dac(0x1b3)],this['globalSwitches']=_0x408bfe[_0x130dac(0x1ef)]||[],this[_0x130dac(0x2a0)]=_0x408bfe[_0x130dac(0x2a0)]||[];},StorageManager[_0x351ecc(0x24b)]=function(){const _0x478443=_0x351ecc;return Utils[_0x478443(0x2f7)]()?VisuMZ[_0x478443(0x2ba)][_0x478443(0x259)]['Save'][_0x478443(0x263)]:![];},StorageManager[_0x351ecc(0x22d)]=function(_0x189896){const _0x20c34b=_0x351ecc,_0x43552b=this[_0x20c34b(0x1f3)](),_0x3baba2=VisuMZ[_0x20c34b(0x2ba)]['Settings'][_0x20c34b(0x272)][_0x20c34b(0x2f6)];return _0x43552b+_0x3baba2['format'](_0x189896);},StorageManager[_0x351ecc(0x214)]=function(_0x12bf18){const _0x391ab8=_0x351ecc,_0x35c228=$dataSystem['advanced'][_0x391ab8(0x2f9)],_0x49793b=VisuMZ['SaveCore'][_0x391ab8(0x259)][_0x391ab8(0x272)][_0x391ab8(0x1d2)];return _0x49793b[_0x391ab8(0x1f8)](_0x35c228,_0x12bf18);},StorageManager[_0x351ecc(0x1eb)]=function(){const _0x44c087=_0x351ecc;return VisuMZ[_0x44c087(0x2ba)][_0x44c087(0x259)][_0x44c087(0x272)][_0x44c087(0x1da)];},StorageManager[_0x351ecc(0x22c)]=function(){const _0x27b28b=_0x351ecc;return VisuMZ[_0x27b28b(0x2ba)][_0x27b28b(0x259)][_0x27b28b(0x272)][_0x27b28b(0x2b0)];},StorageManager[_0x351ecc(0x251)]=function(){const _0x3b7b8f=_0x351ecc;return this['saveStyle']()===_0x3b7b8f(0x250)?_0x3b7b8f(0x270):VisuMZ['SaveCore'][_0x3b7b8f(0x259)][_0x3b7b8f(0x22b)]['AutosaveType'];},TextManager['pickLockedSaveSlot']=VisuMZ['SaveCore'][_0x351ecc(0x259)][_0x351ecc(0x272)]['VocabLockedSaveSlot'],TextManager[_0x351ecc(0x2b8)]=VisuMZ['SaveCore'][_0x351ecc(0x259)]['SaveConfirm'][_0x351ecc(0x2be)],TextManager[_0x351ecc(0x2e3)]=VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x259)][_0x351ecc(0x2c4)][_0x351ecc(0x2d4)],TextManager['loadFailure']=VisuMZ[_0x351ecc(0x2ba)]['Settings'][_0x351ecc(0x2c4)][_0x351ecc(0x2c9)],TextManager[_0x351ecc(0x1b9)]=VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x259)][_0x351ecc(0x197)][_0x351ecc(0x1fe)],TextManager[_0x351ecc(0x27a)]=VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x259)][_0x351ecc(0x312)][_0x351ecc(0x1e5)],TextManager[_0x351ecc(0x23d)]=VisuMZ['SaveCore']['Settings'][_0x351ecc(0x312)]['VocabAutosaveFailure'],TextManager[_0x351ecc(0x2a7)]=VisuMZ['SaveCore']['Settings'][_0x351ecc(0x1df)][_0x351ecc(0x2eb)],ColorManager[_0x351ecc(0x1c1)]=function(){const _0x19ce5d=_0x351ecc,_0x57d727=_0x19ce5d(0x198);this[_0x19ce5d(0x2bb)]=this[_0x19ce5d(0x2bb)]||{};if(this[_0x19ce5d(0x2bb)][_0x57d727])return this[_0x19ce5d(0x2bb)][_0x57d727];const _0x10acff=VisuMZ[_0x19ce5d(0x2ba)]['Settings'][_0x19ce5d(0x1df)]['LatestColor'];return this[_0x19ce5d(0x260)](_0x57d727,_0x10acff);},ColorManager[_0x351ecc(0x260)]=function(_0x4bb7a8,_0x366e30){const _0x554979=_0x351ecc;return _0x366e30=String(_0x366e30),this[_0x554979(0x2bb)]=this[_0x554979(0x2bb)]||{},_0x366e30['match'](/#(.*)/i)?this[_0x554979(0x2bb)][_0x4bb7a8]=_0x554979(0x1ed)[_0x554979(0x1f8)](String(RegExp['$1'])):this['_colorCache'][_0x4bb7a8]=this[_0x554979(0x1d1)](Number(_0x366e30)),this[_0x554979(0x2bb)][_0x4bb7a8];},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x26f)]=Game_System['prototype'][_0x351ecc(0x2a2)],Game_System[_0x351ecc(0x281)][_0x351ecc(0x2a2)]=function(){const _0x47bb56=_0x351ecc;VisuMZ[_0x47bb56(0x2ba)]['Game_System_initialize'][_0x47bb56(0x266)](this),this['initSaveCore']();},Game_System[_0x351ecc(0x281)][_0x351ecc(0x2c2)]=function(){const _0x1a9b61=_0x351ecc;this[_0x1a9b61(0x240)]={'autosaveEnabled':!![],'saveDescription':'','savePicture':''};},Game_System[_0x351ecc(0x281)][_0x351ecc(0x28b)]=function(){const _0x937163=_0x351ecc;if(!$dataSystem[_0x937163(0x262)])return![];if(this['_SaveCoreSettings']===undefined)this[_0x937163(0x2c2)]();if(this[_0x937163(0x240)]['autosaveEnabled']===undefined)this['initSaveCore']();return this[_0x937163(0x240)][_0x937163(0x276)];},Game_System[_0x351ecc(0x281)][_0x351ecc(0x1ba)]=function(_0x282f2f){const _0x3f1a42=_0x351ecc;if(!$dataSystem['optAutosave'])return;if(this['_SaveCoreSettings']===undefined)this[_0x3f1a42(0x2c2)]();if(this[_0x3f1a42(0x240)][_0x3f1a42(0x276)]===undefined)this[_0x3f1a42(0x2c2)]();this[_0x3f1a42(0x240)]['autosaveEnabled']=_0x282f2f;},Game_System['prototype']['getSaveDescription']=function(){const _0x32ee4d=_0x351ecc;if(this[_0x32ee4d(0x240)]===undefined)this[_0x32ee4d(0x2c2)]();if(this[_0x32ee4d(0x240)][_0x32ee4d(0x2ed)]===undefined)this[_0x32ee4d(0x2c2)]();return this[_0x32ee4d(0x240)][_0x32ee4d(0x2ed)];},Game_System['prototype']['setSaveDescription']=function(_0x45a185){const _0x46c42e=_0x351ecc;if(this[_0x46c42e(0x240)]===undefined)this[_0x46c42e(0x2c2)]();if(this[_0x46c42e(0x240)]['saveDescription']===undefined)this[_0x46c42e(0x2c2)]();this[_0x46c42e(0x240)][_0x46c42e(0x2ed)]=VisuMZ[_0x46c42e(0x2ba)][_0x46c42e(0x1f9)](_0x45a185);},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x1f9)]=function(_0x470613){const _0x361953=_0x351ecc;while(_0x470613[_0x361953(0x30d)](/\\V\[(\d+)\]/gi)){_0x470613=_0x470613[_0x361953(0x1ca)](/\\V\[(\d+)\]/gi,(_0x56707a,_0x448fc9)=>$gameVariables[_0x361953(0x2d5)](parseInt(_0x448fc9)));}while(_0x470613[_0x361953(0x30d)](/\\N\[(\d+)\]/gi)){_0x470613=_0x470613[_0x361953(0x1ca)](/\\N\[(\d+)\]/gi,(_0x17c410,_0x51db93)=>Window_Base['prototype']['actorName'](parseInt(_0x51db93)));}while(_0x470613['match'](/\\P\[(\d+)\]/gi)){_0x470613=_0x470613[_0x361953(0x1ca)](/\\P\[(\d+)\]/gi,(_0x4f76f9,_0x55518b)=>Window_Base['prototype'][_0x361953(0x20a)](parseInt(_0x55518b)));}return _0x470613;},Game_System[_0x351ecc(0x281)][_0x351ecc(0x235)]=function(){const _0x5a8fad=_0x351ecc;if(this[_0x5a8fad(0x240)]===undefined)this[_0x5a8fad(0x2c2)]();if(this[_0x5a8fad(0x240)][_0x5a8fad(0x1de)]===undefined)this[_0x5a8fad(0x2c2)]();return this[_0x5a8fad(0x240)][_0x5a8fad(0x1de)];},Game_System[_0x351ecc(0x281)][_0x351ecc(0x2df)]=function(_0x13bbe8){const _0x574e94=_0x351ecc;if(this[_0x574e94(0x240)]===undefined)this[_0x574e94(0x2c2)]();if(this[_0x574e94(0x240)]['savePicture']===undefined)this[_0x574e94(0x2c2)]();this[_0x574e94(0x240)]['savePicture']=_0x13bbe8;},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x231)]=Game_System['prototype'][_0x351ecc(0x314)],Game_System[_0x351ecc(0x281)]['savefileId']=function(){const _0x33390a=_0x351ecc,_0x278a91=StorageManager[_0x33390a(0x22c)]();switch(_0x278a91){case'locked':return VisuMZ['SaveCore'][_0x33390a(0x231)][_0x33390a(0x266)](this)||0x1;break;case _0x33390a(0x250):return 0x0;break;default:return VisuMZ['SaveCore'][_0x33390a(0x231)]['call'](this);break;}},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x1cf)]=Game_System[_0x351ecc(0x281)][_0x351ecc(0x2ec)],Game_System[_0x351ecc(0x281)][_0x351ecc(0x2ec)]=function(){const _0x49baf7=_0x351ecc;VisuMZ[_0x49baf7(0x2ba)]['Game_System_onAfterLoad'][_0x49baf7(0x266)](this);if($gameMap&&Imported['VisuMZ_1_EventsMoveCore'])$gameMap[_0x49baf7(0x19e)]();const _0x35635d=VisuMZ['SaveCore'][_0x49baf7(0x259)]['SaveConfirm'][_0x49baf7(0x2d2)];setTimeout(VisuMZ[_0x49baf7(0x2ba)][_0x49baf7(0x246)][_0x49baf7(0x2c5)](this),_0x35635d+0xa);},Game_Switches[_0x351ecc(0x281)][_0x351ecc(0x22a)]=function(_0x364460){const _0x56bfa1=_0x351ecc;return $dataSystem[_0x56bfa1(0x20d)][_0x364460]&&VisuMZ[_0x56bfa1(0x301)][_0x56bfa1(0x300)](_0x364460);},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x2cc)]=Game_Switches[_0x351ecc(0x281)][_0x351ecc(0x2d5)],Game_Switches['prototype'][_0x351ecc(0x2d5)]=function(_0x3624cb){const _0x48745d=_0x351ecc;return this[_0x48745d(0x22a)](_0x3624cb)?this['globalValue'](_0x3624cb):VisuMZ[_0x48745d(0x2ba)][_0x48745d(0x2cc)][_0x48745d(0x266)](this,_0x3624cb);},Game_Switches[_0x351ecc(0x281)][_0x351ecc(0x277)]=function(_0x30300c){const _0x18b551=_0x351ecc;return ConfigManager[_0x18b551(0x1ef)]=ConfigManager[_0x18b551(0x1ef)]||[],!!ConfigManager[_0x18b551(0x1ef)][_0x30300c];},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x2a9)]=Game_Switches[_0x351ecc(0x281)]['setValue'],Game_Switches[_0x351ecc(0x281)][_0x351ecc(0x2e0)]=function(_0x1d6dad,_0x3a8d9b){const _0x35ace5=_0x351ecc;if(this[_0x35ace5(0x22a)](_0x1d6dad))this[_0x35ace5(0x2d1)](_0x1d6dad,_0x3a8d9b);VisuMZ[_0x35ace5(0x2ba)][_0x35ace5(0x2a9)][_0x35ace5(0x266)](this,_0x1d6dad,_0x3a8d9b);},Game_Switches[_0x351ecc(0x281)][_0x351ecc(0x2d1)]=function(_0x57aa9a,_0x5f018f){const _0x356bdd=_0x351ecc;_0x57aa9a>0x0&&_0x57aa9a<$dataSystem[_0x356bdd(0x20d)][_0x356bdd(0x23a)]&&(ConfigManager[_0x356bdd(0x1ef)]=ConfigManager[_0x356bdd(0x1ef)]||[],ConfigManager[_0x356bdd(0x1ef)][_0x57aa9a]=_0x5f018f,ConfigManager[_0x356bdd(0x1dc)]());},Game_Variables['prototype'][_0x351ecc(0x22a)]=function(_0x3b7d45){const _0x50778b=_0x351ecc;return $dataSystem[_0x50778b(0x29e)][_0x3b7d45]&&VisuMZ[_0x50778b(0x2bf)][_0x50778b(0x300)](_0x3b7d45);},VisuMZ[_0x351ecc(0x2ba)]['Game_Variables_value']=Game_Variables[_0x351ecc(0x281)][_0x351ecc(0x2d5)],Game_Variables['prototype'][_0x351ecc(0x2d5)]=function(_0x460f7b){const _0x58ac0d=_0x351ecc;return this['isGlobal'](_0x460f7b)?this[_0x58ac0d(0x277)](_0x460f7b):VisuMZ['SaveCore'][_0x58ac0d(0x1ee)]['call'](this,_0x460f7b);},Game_Variables[_0x351ecc(0x281)][_0x351ecc(0x277)]=function(_0xbd376c){const _0x217b81=_0x351ecc;return ConfigManager[_0x217b81(0x2a0)]=ConfigManager[_0x217b81(0x2a0)]||[],ConfigManager['globalVariables'][_0xbd376c]===undefined&&(ConfigManager['globalVariables'][_0xbd376c]=0x0),ConfigManager[_0x217b81(0x2a0)][_0xbd376c];},VisuMZ[_0x351ecc(0x2ba)]['Game_Variables_setValue']=Game_Variables[_0x351ecc(0x281)][_0x351ecc(0x2e0)],Game_Variables[_0x351ecc(0x281)][_0x351ecc(0x2e0)]=function(_0xe5c58e,_0xc27fed){const _0x5ba186=_0x351ecc;if(this[_0x5ba186(0x22a)](_0xe5c58e))this['setGlobalValue'](_0xe5c58e,_0xc27fed);VisuMZ[_0x5ba186(0x2ba)][_0x5ba186(0x1cd)][_0x5ba186(0x266)](this,_0xe5c58e,_0xc27fed);},Game_Variables[_0x351ecc(0x281)][_0x351ecc(0x2d1)]=function(_0x5133f9,_0x46bc2e){const _0x15120c=_0x351ecc;if(_0x5133f9>0x0&&_0x5133f9<$dataSystem[_0x15120c(0x29e)]['length']){ConfigManager['globalVariables']=ConfigManager[_0x15120c(0x2a0)]||[];if(typeof _0x46bc2e===_0x15120c(0x19f))_0x46bc2e=Math['floor'](_0x46bc2e);ConfigManager['globalVariables'][_0x5133f9]=_0x46bc2e,ConfigManager[_0x15120c(0x1dc)]();}},Game_Party['prototype'][_0x351ecc(0x308)]=function(){const _0x57dedb=_0x351ecc;return this['battleMembers']()[_0x57dedb(0x1c4)](_0x2a94d9=>_0x2a94d9['battlerName']());},Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x28d)]=function(_0x566686){const _0x381c61=_0x351ecc,_0x34d381=VisuMZ[_0x381c61(0x2ba)]['Settings'][_0x381c61(0x22b)];switch(_0x566686){case _0x381c61(0x273):this[_0x381c61(0x294)]=!_0x34d381[_0x381c61(0x1d6)];break;case _0x381c61(0x248):if(!this[_0x381c61(0x2dd)]())return;this[_0x381c61(0x294)]=!_0x34d381[_0x381c61(0x2e8)];break;case _0x381c61(0x310):this[_0x381c61(0x294)]=!_0x34d381['AfterMenuCall'];break;case _0x381c61(0x226):this['_bypassAutosave']=!_0x34d381[_0x381c61(0x2d0)];break;}},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x293)]=Scene_Base['prototype'][_0x351ecc(0x2fb)],Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x2fb)]=function(){const _0x44f716=_0x351ecc;!this[_0x44f716(0x294)]&&VisuMZ[_0x44f716(0x2ba)][_0x44f716(0x293)][_0x44f716(0x266)](this),this['_bypassAutosave']=![];},Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x28b)]=function(){const _0x35fef3=_0x351ecc;return!DataManager[_0x35fef3(0x1e7)]()&&!DataManager[_0x35fef3(0x1a5)]()&&$gameSystem[_0x35fef3(0x28b)]()&&(VisuMZ[_0x35fef3(0x2ba)]['Settings']['Autosave'][_0x35fef3(0x2fd)]?$gameSystem[_0x35fef3(0x2ea)]():!![]);},Scene_Base[_0x351ecc(0x281)]['executeAutosave']=function(){const _0x24d774=_0x351ecc;if(!ConfigManager[_0x24d774(0x2b7)])return;this[_0x24d774(0x278)]();},Scene_Base[_0x351ecc(0x281)]['forceAutosave']=function(){const _0x18163b=_0x351ecc;$gameSystem[_0x18163b(0x192)](),this[_0x18163b(0x1b2)]=![];const _0x1f42d8=StorageManager[_0x18163b(0x251)]();[_0x18163b(0x270),_0x18163b(0x288)]['includes'](_0x1f42d8)&&DataManager[_0x18163b(0x1a7)](0x0)[_0x18163b(0x2f1)](()=>this['onAutosaveSuccess']())[_0x18163b(0x2ff)](()=>this['onAutosaveFailure']());if([_0x18163b(0x26d),_0x18163b(0x288)]['includes'](_0x1f42d8)){const _0x5451b5=$gameSystem[_0x18163b(0x314)]();_0x5451b5>0x0&&DataManager[_0x18163b(0x1a7)](_0x5451b5)[_0x18163b(0x2f1)](()=>this[_0x18163b(0x1a4)]())[_0x18163b(0x2ff)](()=>this[_0x18163b(0x1ff)]());}this['_processingAutosave']=![];},VisuMZ['SaveCore'][_0x351ecc(0x1e0)]=Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x1a4)],Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x1a4)]=function(){const _0x93688e=_0x351ecc;if(this['_processingAutosave'])return;VisuMZ[_0x93688e(0x2ba)][_0x93688e(0x1e0)]['call'](this),VisuMZ['SaveCore'][_0x93688e(0x259)][_0x93688e(0x22b)][_0x93688e(0x1e2)][_0x93688e(0x266)](this),this[_0x93688e(0x316)](!![]),this[_0x93688e(0x1b2)]=!![];},VisuMZ[_0x351ecc(0x2ba)]['Scene_Base_onAutosaveFailure']=Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x1ff)],Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x1ff)]=function(){const _0x159864=_0x351ecc;if(this[_0x159864(0x1b2)])return;VisuMZ[_0x159864(0x2ba)][_0x159864(0x25e)]['call'](this),VisuMZ[_0x159864(0x2ba)][_0x159864(0x259)][_0x159864(0x22b)]['OnAutosaveFailureJS'][_0x159864(0x266)](this),this[_0x159864(0x316)](![]);},Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x2da)]=function(){const _0x4994c2=_0x351ecc;if(this[_0x4994c2(0x1cb)])return;const _0x4f4f17=this[_0x4994c2(0x1f5)]();this['_saveConfirmWindow']=new Window_Base(_0x4f4f17),this[_0x4994c2(0x1cb)][_0x4994c2(0x205)]=0x0;},Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x1f5)]=function(){const _0x29aa4a=_0x351ecc;return VisuMZ[_0x29aa4a(0x2ba)][_0x29aa4a(0x259)][_0x29aa4a(0x2c4)]['ConfirmRect'][_0x29aa4a(0x266)](this);},Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x274)]=function(){const _0x154dcf=_0x351ecc;return VisuMZ['SaveCore']['Settings'][_0x154dcf(0x2c4)][_0x154dcf(0x1d8)];},Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x23b)]=function(_0x3b290d,_0x4c4ca3){const _0x1df892=_0x351ecc;if(!this[_0x1df892(0x274)]())return this['closeSaveConfirmationWindow'](_0x3b290d);if(!this['_saveConfirmWindow'])this[_0x1df892(0x2da)]();const _0x527ab0=this[_0x1df892(0x1cb)];this[_0x1df892(0x26e)](_0x527ab0),this[_0x1df892(0x237)](_0x527ab0),_0x527ab0[_0x1df892(0x19c)](),_0x527ab0[_0x1df892(0x30f)](),_0x527ab0[_0x1df892(0x2b5)][_0x1df892(0x254)]();let _0x21fb54='';_0x4c4ca3?_0x21fb54=TextManager['loadFailure']:_0x21fb54=_0x3b290d?TextManager[_0x1df892(0x2b8)]:TextManager[_0x1df892(0x2e3)];const _0x239c2a=_0x527ab0[_0x1df892(0x306)](_0x21fb54)[_0x1df892(0x2f3)],_0x45724c=(_0x527ab0[_0x1df892(0x255)]-_0x239c2a)/0x2;_0x527ab0[_0x1df892(0x2a4)](_0x21fb54,_0x45724c,0x0,_0x239c2a);const _0x46816e=VisuMZ['SaveCore'][_0x1df892(0x259)][_0x1df892(0x2c4)][_0x1df892(0x2d2)];setTimeout(this['closeSaveConfirmationWindow'][_0x1df892(0x2c5)](this,_0x3b290d),_0x46816e);},Scene_Base['prototype'][_0x351ecc(0x2b2)]=function(){this['openSaveConfirmationWindow'](![],!![]);},Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x1aa)]=function(_0x50a40d){const _0x1711d9=_0x351ecc;if(this['_saveConfirmWindow'])this[_0x1711d9(0x1cb)][_0x1711d9(0x225)]();},Scene_Base[_0x351ecc(0x281)]['createAutosaveConfirmationWindow']=function(){const _0x32edde=_0x351ecc;if(this[_0x32edde(0x25b)])return;const _0x412ef9=this[_0x32edde(0x268)]();this[_0x32edde(0x25b)]=new Window_AutosaveConfirm(_0x412ef9);},Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x268)]=function(){const _0x1cd2fb=_0x351ecc,_0x487581=this[_0x1cd2fb(0x1ea)](),_0x3ce9ef=this[_0x1cd2fb(0x1a2)](0x1,![]),_0x45e9b1=Graphics[_0x1cd2fb(0x2f3)]-_0x487581,_0x523ecb=Graphics[_0x1cd2fb(0x230)]-_0x3ce9ef;return new Rectangle(_0x45e9b1,_0x523ecb,_0x487581,_0x3ce9ef);},Scene_Base[_0x351ecc(0x281)]['isAutosaveConfirmWindowEnabled']=function(){const _0x42893e=_0x351ecc;return VisuMZ[_0x42893e(0x2ba)][_0x42893e(0x259)][_0x42893e(0x312)]['Enable'];},Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x316)]=function(_0x181ded){const _0x89e08d=_0x351ecc;if(!this[_0x89e08d(0x279)]())return this[_0x89e08d(0x1c9)](_0x181ded);if(!this[_0x89e08d(0x25b)])this[_0x89e08d(0x1e3)]();const _0x20fef8=this['_autosaveConfirmWindow'];this[_0x89e08d(0x26e)](_0x20fef8),this['addChild'](_0x20fef8),_0x20fef8['setSetSuccess'](_0x181ded),_0x20fef8[_0x89e08d(0x216)]();const _0x3f53af=VisuMZ[_0x89e08d(0x2ba)][_0x89e08d(0x259)]['AutosaveConfirm'][_0x89e08d(0x2d2)];setTimeout(this[_0x89e08d(0x1c9)][_0x89e08d(0x2c5)](this,_0x181ded),_0x3f53af);},Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x1c9)]=function(_0x88d550){const _0x5c180b=_0x351ecc;if(this['_autosaveConfirmWindow'])this[_0x5c180b(0x25b)][_0x5c180b(0x2b9)]();},Scene_Base[_0x351ecc(0x281)][_0x351ecc(0x2d3)]=function(){},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x298)]=SceneManager['snapForBackground'],SceneManager[_0x351ecc(0x21c)]=function(){const _0x487a05=_0x351ecc;let _0x816001=0x0;this['_scene']&&this['_scene'][_0x487a05(0x25b)]&&(_0x816001=this[_0x487a05(0x291)][_0x487a05(0x25b)]['y'],this[_0x487a05(0x291)][_0x487a05(0x25b)]['y']=Graphics[_0x487a05(0x230)]*0x3),VisuMZ[_0x487a05(0x2ba)][_0x487a05(0x298)][_0x487a05(0x266)](this),this[_0x487a05(0x291)]&&this[_0x487a05(0x291)][_0x487a05(0x25b)]&&(this[_0x487a05(0x291)]['_autosaveConfirmWindow']['y']=_0x816001);},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x28e)]=Scene_Title[_0x351ecc(0x281)]['initialize'],Scene_Title[_0x351ecc(0x281)][_0x351ecc(0x2a2)]=function(){const _0x108b0b=_0x351ecc;VisuMZ[_0x108b0b(0x2ba)][_0x108b0b(0x28e)][_0x108b0b(0x266)](this),this['_loadSuccess']=![];},VisuMZ[_0x351ecc(0x2ba)]['Scene_Title_terminate']=Scene_Title[_0x351ecc(0x281)][_0x351ecc(0x239)],Scene_Title[_0x351ecc(0x281)]['terminate']=function(){const _0x365bb2=_0x351ecc;VisuMZ[_0x365bb2(0x2ba)][_0x365bb2(0x20b)][_0x365bb2(0x266)](this);if(this['_loadSuccess'])$gameSystem[_0x365bb2(0x2ec)]();},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x202)]=Scene_Title[_0x351ecc(0x281)][_0x351ecc(0x282)],Scene_Title['prototype'][_0x351ecc(0x282)]=function(){const _0x153d46=_0x351ecc;StorageManager[_0x153d46(0x22c)]()==='locked'?this[_0x153d46(0x244)]():VisuMZ[_0x153d46(0x2ba)][_0x153d46(0x202)][_0x153d46(0x266)](this);},Scene_Title['prototype']['commandNewGameSaveCoreLocked']=function(){const _0x405d20=_0x351ecc;DataManager[_0x405d20(0x2fa)](),$gameTemp[_0x405d20(0x1f1)]=!![],this[_0x405d20(0x2aa)]['close'](),SceneManager[_0x405d20(0x2a8)](Scene_Save);},VisuMZ['SaveCore'][_0x351ecc(0x2dc)]=Scene_Title[_0x351ecc(0x281)][_0x351ecc(0x27e)],Scene_Title[_0x351ecc(0x281)][_0x351ecc(0x27e)]=function(){const _0x5e40d5=_0x351ecc;StorageManager[_0x5e40d5(0x22c)]()===_0x5e40d5(0x250)?this['commandContinueSaveCoreSingle']():VisuMZ['SaveCore'][_0x5e40d5(0x2dc)][_0x5e40d5(0x266)](this);},Scene_Title[_0x351ecc(0x281)]['commandContinueSaveCoreSingle']=function(){const _0x19f136=_0x351ecc;DataManager[_0x19f136(0x1d9)](0x0)[_0x19f136(0x2f1)](()=>this[_0x19f136(0x1fc)]())[_0x19f136(0x2ff)](()=>this[_0x19f136(0x2fe)]());},Scene_Title['prototype'][_0x351ecc(0x1fc)]=function(){const _0x2b2593=_0x351ecc;this[_0x2b2593(0x2aa)][_0x2b2593(0x225)](),SoundManager['playLoad'](),this[_0x2b2593(0x203)](),Scene_Load['prototype'][_0x2b2593(0x1c6)](),SceneManager['goto'](Scene_Map),this['_loadSuccess']=!![],VisuMZ[_0x2b2593(0x2ba)]['Settings'][_0x2b2593(0x272)][_0x2b2593(0x28c)]['call'](this);},Scene_Title[_0x351ecc(0x281)][_0x351ecc(0x2fe)]=function(){const _0x1ee863=_0x351ecc;SoundManager[_0x1ee863(0x1c0)](),VisuMZ[_0x1ee863(0x2ba)][_0x1ee863(0x259)][_0x1ee863(0x272)][_0x1ee863(0x227)]['call'](this),this['loadFailureConfirmationWindow']();},Scene_Title['prototype'][_0x351ecc(0x1aa)]=function(_0x4439c4){const _0x27c462=_0x351ecc;Scene_Base[_0x27c462(0x281)][_0x27c462(0x1aa)][_0x27c462(0x266)](this,_0x4439c4),this['_commandWindow'][_0x27c462(0x19c)](),this[_0x27c462(0x2aa)][_0x27c462(0x21a)]();},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x295)]=Scene_Map[_0x351ecc(0x281)]['onMapLoaded'],Scene_Map[_0x351ecc(0x281)]['onMapLoaded']=function(){const _0x34e354=_0x351ecc;VisuMZ['SaveCore']['Scene_Map_onMapLoaded'][_0x34e354(0x266)](this);if(SceneManager[_0x34e354(0x2d9)](Scene_Menu))this[_0x34e354(0x28d)]('exitMenu'),this[_0x34e354(0x2fb)]();else SceneManager[_0x34e354(0x2d9)](Scene_Battle)&&(this[_0x34e354(0x28d)]('battle'),this[_0x34e354(0x2fb)]());},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x25c)]=Scene_Map[_0x351ecc(0x281)]['onTransferEnd'],Scene_Map['prototype'][_0x351ecc(0x287)]=function(){const _0x44cb09=_0x351ecc;this['shouldAutosave']()&&this[_0x44cb09(0x28d)](_0x44cb09(0x248)),VisuMZ[_0x44cb09(0x2ba)][_0x44cb09(0x25c)][_0x44cb09(0x266)](this);},Scene_Map[_0x351ecc(0x281)][_0x351ecc(0x2d3)]=function(){const _0x40cc55=_0x351ecc;if($gameSystem[_0x40cc55(0x313)])return;const _0x3d638e=$gameSystem[_0x40cc55(0x314)]();if(StorageManager[_0x40cc55(0x22c)]()!==_0x40cc55(0x250)&&_0x3d638e<=0x0)return;this[_0x40cc55(0x215)]=![],$gameSystem[_0x40cc55(0x31f)](_0x3d638e),$gameSystem['onBeforeSave'](),$gameSystem[_0x40cc55(0x313)]=!![],DataManager[_0x40cc55(0x1a7)](_0x3d638e)['then'](()=>this['onSaveSuccess']())[_0x40cc55(0x2ff)](()=>this[_0x40cc55(0x233)]()),$gameSystem[_0x40cc55(0x313)]=undefined;},Scene_Map[_0x351ecc(0x281)][_0x351ecc(0x245)]=function(){const _0x9cf62e=_0x351ecc;SoundManager['playSave'](),VisuMZ[_0x9cf62e(0x2ba)]['Settings']['Save']['OnSaveSuccessJS'][_0x9cf62e(0x266)](this),this[_0x9cf62e(0x23b)](!![]);},Scene_Map[_0x351ecc(0x281)][_0x351ecc(0x233)]=function(){const _0x2af4e1=_0x351ecc;SoundManager[_0x2af4e1(0x1c0)](),VisuMZ['SaveCore'][_0x2af4e1(0x259)][_0x2af4e1(0x272)][_0x2af4e1(0x1a0)]['call'](this),this[_0x2af4e1(0x23b)](![]);},Scene_Map[_0x351ecc(0x281)]['closeSaveConfirmationWindow']=function(_0x27951b){const _0x1a67a2=_0x351ecc;Scene_Message[_0x1a67a2(0x281)][_0x1a67a2(0x1aa)][_0x1a67a2(0x266)](this,_0x27951b),this[_0x1a67a2(0x215)]=!![];},VisuMZ[_0x351ecc(0x2ba)]['Scene_Map_needsFadeIn']=Scene_Map[_0x351ecc(0x281)][_0x351ecc(0x1bc)],Scene_Map['prototype'][_0x351ecc(0x1bc)]=function(){const _0x4c11fb=_0x351ecc;return VisuMZ[_0x4c11fb(0x2ba)][_0x4c11fb(0x30a)][_0x4c11fb(0x266)](this)||SceneManager['isPreviousScene'](Scene_Title);},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x221)]=Scene_Menu['prototype'][_0x351ecc(0x317)],Scene_Menu[_0x351ecc(0x281)][_0x351ecc(0x317)]=function(){const _0xce2429=_0x351ecc;VisuMZ['SaveCore'][_0xce2429(0x221)][_0xce2429(0x266)](this),SceneManager[_0xce2429(0x2d9)](Scene_Map)&&(this[_0xce2429(0x28d)](_0xce2429(0x310)),this[_0xce2429(0x2fb)]());},VisuMZ['SaveCore'][_0x351ecc(0x1e9)]=Scene_Menu[_0x351ecc(0x281)]['commandSave'],Scene_Menu[_0x351ecc(0x281)]['commandSave']=function(){const _0x3702c0=_0x351ecc,_0x47ab9b=StorageManager[_0x3702c0(0x22c)]();switch(_0x47ab9b){case _0x3702c0(0x269):case _0x3702c0(0x250):this['commandSaveLocked']();break;default:VisuMZ['SaveCore'][_0x3702c0(0x1e9)][_0x3702c0(0x266)](this);break;}},Scene_Menu['prototype']['commandSaveLocked']=function(){const _0x1b931c=_0x351ecc,_0x219f37=$gameSystem[_0x1b931c(0x314)]();$gameSystem[_0x1b931c(0x31f)](_0x219f37),$gameSystem['onBeforeSave'](),DataManager[_0x1b931c(0x1a7)](_0x219f37)['then'](()=>this['onSaveCoreSaveSuccess']())[_0x1b931c(0x2ff)](()=>this[_0x1b931c(0x2c3)]());},Scene_Menu[_0x351ecc(0x281)][_0x351ecc(0x26b)]=function(){const _0x56bb18=_0x351ecc;SoundManager['playSave'](),VisuMZ[_0x56bb18(0x2ba)]['Settings'][_0x56bb18(0x272)]['OnSaveSuccessJS'][_0x56bb18(0x266)](this),this['openSaveConfirmationWindow'](!![]);},Scene_Menu[_0x351ecc(0x281)][_0x351ecc(0x2c3)]=function(){const _0xad6d09=_0x351ecc;SoundManager[_0xad6d09(0x1c0)](),VisuMZ[_0xad6d09(0x2ba)][_0xad6d09(0x259)][_0xad6d09(0x272)][_0xad6d09(0x1a0)][_0xad6d09(0x266)](this),this['openSaveConfirmationWindow'](![]);},Scene_Menu[_0x351ecc(0x281)]['closeSaveConfirmationWindow']=function(_0x1d8cb3){const _0x2993bf=_0x351ecc;Scene_MenuBase[_0x2993bf(0x281)]['closeSaveConfirmationWindow']['call'](this,_0x1d8cb3),this[_0x2993bf(0x2aa)]['activate']();},Scene_Battle[_0x351ecc(0x281)][_0x351ecc(0x2fb)]=function(){},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x25a)]=Scene_Options[_0x351ecc(0x281)][_0x351ecc(0x283)],Scene_Options[_0x351ecc(0x281)][_0x351ecc(0x283)]=function(){const _0xc24851=_0x351ecc;let _0x61f76c=VisuMZ[_0xc24851(0x2ba)][_0xc24851(0x25a)][_0xc24851(0x266)](this);const _0x250fe8=VisuMZ['SaveCore'][_0xc24851(0x259)];if(_0x250fe8[_0xc24851(0x197)]['AddOption']&&_0x250fe8[_0xc24851(0x197)]['AdjustRect'])_0x61f76c++;return _0x61f76c;},Scene_Save[_0x351ecc(0x281)]['onSaveSuccess']=function(){const _0x1b551d=_0x351ecc;SoundManager[_0x1b551d(0x24f)](),VisuMZ['SaveCore']['Settings']['Save'][_0x1b551d(0x234)][_0x1b551d(0x266)](this),this['_listWindow'][_0x1b551d(0x1e4)](),this[_0x1b551d(0x23b)](!![]);},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x2b4)]=Scene_Save[_0x351ecc(0x281)][_0x351ecc(0x233)],Scene_Save[_0x351ecc(0x281)][_0x351ecc(0x233)]=function(){const _0x36635a=_0x351ecc;SoundManager[_0x36635a(0x1c0)](),VisuMZ[_0x36635a(0x2ba)]['Settings'][_0x36635a(0x272)][_0x36635a(0x1a0)][_0x36635a(0x266)](this),this[_0x36635a(0x23b)](![]);},Scene_Save[_0x351ecc(0x281)]['closeSaveConfirmationWindow']=function(_0x16aec9){const _0x4f2153=_0x351ecc;Scene_File[_0x4f2153(0x281)][_0x4f2153(0x1aa)][_0x4f2153(0x266)](this,_0x16aec9),_0x16aec9?this['activateListWindow']():this[_0x4f2153(0x1e8)]();},Scene_Save[_0x351ecc(0x281)]['popScene']=function(){const _0x541958=_0x351ecc;$gameTemp[_0x541958(0x1f1)]=![],Scene_File[_0x541958(0x281)][_0x541958(0x1a6)][_0x541958(0x266)](this);},VisuMZ['SaveCore']['Scene_Save_helpWindowText']=Scene_Save[_0x351ecc(0x281)]['helpWindowText'],Scene_Save[_0x351ecc(0x281)][_0x351ecc(0x1f4)]=function(){const _0x2bae30=_0x351ecc;return $gameTemp[_0x2bae30(0x1f1)]?TextManager[_0x2bae30(0x2b6)]:VisuMZ[_0x2bae30(0x2ba)][_0x2bae30(0x284)]['call'](this);},VisuMZ[_0x351ecc(0x2ba)]['Scene_Save_executeSave']=Scene_Save[_0x351ecc(0x281)][_0x351ecc(0x311)],Scene_Save['prototype']['executeSave']=function(_0x2d6191){const _0x1e6b4f=_0x351ecc;$gameTemp[_0x1e6b4f(0x1f1)]?this[_0x1e6b4f(0x27b)](_0x2d6191):VisuMZ['SaveCore'][_0x1e6b4f(0x1f7)][_0x1e6b4f(0x266)](this,_0x2d6191);},Scene_Save[_0x351ecc(0x281)][_0x351ecc(0x27b)]=function(_0x1c8886){const _0x2053c5=_0x351ecc;$gameTemp['_pickLockedSaveSlot']=![],SoundManager[_0x2053c5(0x286)](),$gameSystem[_0x2053c5(0x31f)](_0x1c8886),this[_0x2053c5(0x203)](),SceneManager[_0x2053c5(0x261)](Scene_Map);},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x289)]=Scene_Load[_0x351ecc(0x281)]['onLoadSuccess'],Scene_Load[_0x351ecc(0x281)][_0x351ecc(0x27f)]=function(){const _0x50000b=_0x351ecc;VisuMZ[_0x50000b(0x2ba)]['Scene_Load_onLoadSuccess'][_0x50000b(0x266)](this),VisuMZ[_0x50000b(0x2ba)]['Settings']['Save'][_0x50000b(0x28c)][_0x50000b(0x266)](this),setTimeout(VisuMZ[_0x50000b(0x2ba)][_0x50000b(0x246)][_0x50000b(0x2c5)](this),0x3e8);},Scene_Load[_0x351ecc(0x281)][_0x351ecc(0x22e)]=function(){const _0x35ef4e=_0x351ecc;SoundManager[_0x35ef4e(0x1c0)](),VisuMZ['SaveCore'][_0x35ef4e(0x259)][_0x35ef4e(0x272)][_0x35ef4e(0x227)][_0x35ef4e(0x266)](this),this[_0x35ef4e(0x2b2)]();},Scene_Load[_0x351ecc(0x281)][_0x351ecc(0x1aa)]=function(_0xe2c1ff){const _0x4daee2=_0x351ecc;Scene_File['prototype'][_0x4daee2(0x1aa)][_0x4daee2(0x266)](this,_0xe2c1ff),this[_0x4daee2(0x1e8)]();},VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x246)]=function(){const _0xd40107=_0x351ecc;$gameSystem[_0xd40107(0x313)]=undefined;},ImageManager[_0x351ecc(0x31a)]=ImageManager['svActorHorzCells']||0x9,ImageManager[_0x351ecc(0x1ac)]=ImageManager[_0x351ecc(0x1ac)]||0x6;!Imported[_0x351ecc(0x30c)]&&(Window_Base[_0x351ecc(0x281)]['drawSvActor']=function(_0x53c81c,_0x402ae8,_0x1b6e72){const _0x31d089=_0x351ecc,_0x428e6e=_0x53c81c[_0x31d089(0x30d)](/\$/i),_0x285281=ImageManager[_0x31d089(0x271)](_0x53c81c),_0x3d3e0a=_0x285281['width']/(_0x428e6e?0x1:ImageManager[_0x31d089(0x31a)]),_0x4c8c39=_0x285281[_0x31d089(0x230)]/(_0x428e6e?0x1:ImageManager['svActorVertCells']),_0x516aa3=0x0,_0xeb81c7=0x0;this[_0x31d089(0x2b5)][_0x31d089(0x28f)](_0x285281,_0x516aa3,_0xeb81c7,_0x3d3e0a,_0x4c8c39,_0x402ae8-_0x3d3e0a/0x2,_0x1b6e72-_0x4c8c39);});;VisuMZ['SaveCore'][_0x351ecc(0x2a1)]=Window_Options[_0x351ecc(0x281)]['addGeneralOptions'],Window_Options[_0x351ecc(0x281)][_0x351ecc(0x280)]=function(){const _0x42f3f8=_0x351ecc;VisuMZ[_0x42f3f8(0x2ba)][_0x42f3f8(0x2a1)][_0x42f3f8(0x266)](this),this[_0x42f3f8(0x2a3)]();},Window_Options['prototype'][_0x351ecc(0x2a3)]=function(){const _0x38ac15=_0x351ecc;VisuMZ[_0x38ac15(0x2ba)][_0x38ac15(0x259)]['AutosaveOption'][_0x38ac15(0x2bd)]&&this['addSaveCoreAutosaveCommand']();},Window_Options['prototype']['addSaveCoreAutosaveCommand']=function(){const _0x5836a7=_0x351ecc,_0x54f6f5=TextManager['autosaveOption'],_0x533c26=_0x5836a7(0x2b7);this[_0x5836a7(0x2d8)](_0x54f6f5,_0x533c26);};function Window_AutosaveConfirm(){const _0x1bf858=_0x351ecc;this[_0x1bf858(0x2a2)](...arguments);}function _0x4356(_0x2c0c6c,_0x44108c){const _0x4c1974=_0x4c19();return _0x4356=function(_0x43565d,_0xc669e2){_0x43565d=_0x43565d-0x192;let _0x175559=_0x4c1974[_0x43565d];return _0x175559;},_0x4356(_0x2c0c6c,_0x44108c);}Window_AutosaveConfirm[_0x351ecc(0x281)]=Object[_0x351ecc(0x317)](Window_Base[_0x351ecc(0x281)]),Window_AutosaveConfirm[_0x351ecc(0x281)]['constructor']=Window_AutosaveConfirm,Window_AutosaveConfirm[_0x351ecc(0x281)][_0x351ecc(0x2a2)]=function(_0x150e30){const _0x3115ac=_0x351ecc;this[_0x3115ac(0x1c8)]=0x0,Window_Base[_0x3115ac(0x281)][_0x3115ac(0x2a2)][_0x3115ac(0x266)](this,_0x150e30),this[_0x3115ac(0x28a)]=0x0,this[_0x3115ac(0x1ab)]=0x0;},Window_AutosaveConfirm['prototype'][_0x351ecc(0x1fd)]=function(){const _0x1daa3b=_0x351ecc,_0x4bc4b0=0x0,_0x305c5f=0x0,_0x48a450=this['innerWidth'],_0x34d566=this[_0x1daa3b(0x1c3)],_0x52aa66=ColorManager[_0x1daa3b(0x219)](),_0x3492ca=ColorManager['dimColor2'](),_0x321c0c=_0x48a450/0x2;this['contents'][_0x1daa3b(0x2c6)](_0x4bc4b0,_0x305c5f,_0x321c0c,_0x34d566,_0x3492ca,_0x52aa66),this[_0x1daa3b(0x2b5)][_0x1daa3b(0x2c6)](_0x4bc4b0+_0x321c0c,_0x305c5f,_0x321c0c,_0x34d566,_0x52aa66,_0x3492ca);},Window_AutosaveConfirm[_0x351ecc(0x281)][_0x351ecc(0x210)]=function(_0x137ffd){const _0x1a9b93=_0x351ecc;this[_0x1a9b93(0x2c8)]=_0x137ffd,this[_0x1a9b93(0x1e4)]();},Window_AutosaveConfirm['prototype'][_0x351ecc(0x1e4)]=function(){const _0x25dd62=_0x351ecc;this[_0x25dd62(0x2b5)]['clear']();const _0x40b136=this[_0x25dd62(0x2c8)]?TextManager[_0x25dd62(0x27a)]:TextManager[_0x25dd62(0x23d)],_0x565808=Math['ceil'](this['textSizeEx'](_0x40b136)[_0x25dd62(0x2f3)]);this[_0x25dd62(0x2f3)]=_0x565808+($gameSystem[_0x25dd62(0x275)]()+this[_0x25dd62(0x1b0)]())*0x2,this['updatePosition'](),this['createContents']();const _0x4ab931=Math[_0x25dd62(0x29a)]((this[_0x25dd62(0x255)]-_0x565808)/0x2);this[_0x25dd62(0x1fd)](),this[_0x25dd62(0x2a4)](_0x40b136,_0x4ab931,0x0,_0x565808);},Window_AutosaveConfirm['prototype'][_0x351ecc(0x2ab)]=function(){const _0x30073e=_0x351ecc;return VisuMZ[_0x30073e(0x2ba)]['Settings'][_0x30073e(0x312)][_0x30073e(0x303)];},Window_AutosaveConfirm[_0x351ecc(0x281)]['updatePosition']=function(){const _0x2a90f5=_0x351ecc,_0x292b89=this['getScreenPosition']();if(_0x292b89['match'](/upper/i))this['y']=-0x1*$gameSystem['windowPadding']();else _0x292b89[_0x2a90f5(0x30d)](/lower/i)?this['y']=Graphics['height']-this[_0x2a90f5(0x230)]+$gameSystem['windowPadding']():this['y']=(Graphics['height']-this[_0x2a90f5(0x230)])/0x2;if(_0x292b89[_0x2a90f5(0x30d)](/left/i))this['x']=-0x1*$gameSystem[_0x2a90f5(0x275)]();else _0x292b89[_0x2a90f5(0x30d)](/right/i)?this['x']=Graphics['width']-this[_0x2a90f5(0x2f3)]+$gameSystem[_0x2a90f5(0x275)]():this['x']=(Graphics['width']-this[_0x2a90f5(0x2f3)])/0x2;this['x']=Math['round'](this['x']),this['y']=Math[_0x2a90f5(0x292)](this['y']);},Window_AutosaveConfirm['prototype'][_0x351ecc(0x2e4)]=function(){const _0xfeb18d=_0x351ecc;Window_Base['prototype'][_0xfeb18d(0x2e4)][_0xfeb18d(0x266)](this);if(this[_0xfeb18d(0x1c8)]!==0x0)this[_0xfeb18d(0x1b1)]();},Window_AutosaveConfirm[_0x351ecc(0x281)][_0x351ecc(0x1b1)]=function(){const _0x11bf63=_0x351ecc;this[_0x11bf63(0x1ab)]+=this[_0x11bf63(0x1c8)];if(this[_0x11bf63(0x1ab)]>=0xff||this[_0x11bf63(0x1ab)]<=0x0)this[_0x11bf63(0x2ca)](0x0);},Window_AutosaveConfirm[_0x351ecc(0x281)]['setFadeSpeed']=function(_0x27b79b){this['_fadeSpeed']=_0x27b79b;},Window_AutosaveConfirm[_0x351ecc(0x281)][_0x351ecc(0x216)]=function(){const _0x35f7a4=_0x351ecc;this[_0x35f7a4(0x2ca)](0x10);},Window_AutosaveConfirm[_0x351ecc(0x281)]['fadeOut']=function(){this['setFadeSpeed'](-0x10);},VisuMZ[_0x351ecc(0x2ba)]['Window_SavefileList_setMode']=Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x2a6)],Window_SavefileList['prototype'][_0x351ecc(0x2a6)]=function(_0x2239c6,_0x24502f){const _0x4948f9=_0x351ecc;if(StorageManager[_0x4948f9(0x251)]()===_0x4948f9(0x26d))_0x24502f=![];if($gameTemp[_0x4948f9(0x1f1)])_0x24502f=![];VisuMZ['SaveCore'][_0x4948f9(0x208)][_0x4948f9(0x266)](this,_0x2239c6,_0x24502f);},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x206)]=function(){const _0x5077e2=_0x351ecc,_0x525021=VisuMZ['SaveCore'][_0x5077e2(0x259)][_0x5077e2(0x1df)],_0x8fb63b=this[_0x5077e2(0x2b3)]();switch(_0x8fb63b){case _0x5077e2(0x19b):return _0x525021[_0x5077e2(0x264)];break;case _0x5077e2(0x201):return _0x525021['BoxRows'];break;case _0x5077e2(0x1c7):return _0x525021['LargeRows'];break;default:return _0x525021[_0x5077e2(0x29d)];break;}},Window_SavefileList[_0x351ecc(0x281)]['maxCols']=function(){const _0x11de8f=_0x351ecc,_0x19d703=VisuMZ[_0x11de8f(0x2ba)][_0x11de8f(0x259)]['SaveMenu'],_0x2eabb2=this[_0x11de8f(0x2b3)]();switch(_0x2eabb2){case _0x11de8f(0x19b):return _0x19d703[_0x11de8f(0x315)];break;case _0x11de8f(0x201):return _0x19d703['BoxCols'];break;case _0x11de8f(0x1c7):return _0x19d703[_0x11de8f(0x1f2)];break;default:return _0x19d703[_0x11de8f(0x19a)];break;}},Window_SavefileList['prototype'][_0x351ecc(0x249)]=function(){const _0x32f629=_0x351ecc;Imported['VisuMZ_1_MessageCore']&&Window_Selectable[_0x32f629(0x281)][_0x32f629(0x249)][_0x32f629(0x266)](this);},Window_SavefileList[_0x351ecc(0x281)]['setWordWrap']=function(_0x1c19df){const _0x1a32b4=_0x351ecc;return Imported[_0x1a32b4(0x1c5)]?Window_Selectable[_0x1a32b4(0x281)]['setWordWrap'][_0x1a32b4(0x266)](this,_0x1c19df):'';},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x224)]=function(){const _0x1fb538=_0x351ecc;return VisuMZ[_0x1fb538(0x2ba)][_0x1fb538(0x259)][_0x1fb538(0x2d7)];},Window_SavefileList[_0x351ecc(0x281)]['menuStyle']=function(){const _0x34526a=_0x351ecc;return VisuMZ['SaveCore'][_0x34526a(0x259)]['SaveMenuStyle'];},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x195)]=function(_0x2764a6){const _0x158163=Math['max'](0x0,this['savefileIdToIndex'](_0x2764a6));this['smoothSelect'](_0x158163);},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x1e1)]=function(_0x3934a0){const _0x53b44d=_0x351ecc,_0x4e0716=this[_0x53b44d(0x2b1)](_0x3934a0),_0x5c7b60=DataManager['savefileInfo'](_0x4e0716);if(_0x5c7b60)_0x5c7b60['savefileId']=_0x4e0716;this[_0x53b44d(0x21d)]=_0x4e0716;const _0x32a442=this[_0x53b44d(0x1d5)](_0x3934a0);this['resetFontSettings'](),this[_0x53b44d(0x21e)](this[_0x53b44d(0x1bd)](_0x4e0716)),this['drawContents'](_0x5c7b60,_0x32a442);},Window_SavefileList[_0x351ecc(0x281)]['drawTitle']=function(_0x198de4,_0x53d150,_0x5be717){const _0x571bc2=_0x351ecc;_0x198de4===0x0?this[_0x571bc2(0x1a3)](TextManager[_0x571bc2(0x2b7)],_0x53d150,_0x5be717,0xb4):this[_0x571bc2(0x1a3)](TextManager[_0x571bc2(0x1cc)]+'\x20'+_0x198de4,_0x53d150,_0x5be717,0xb4);},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x213)]=function(_0x325052,_0x33b2fc,_0x3aa429){const _0x41824c=_0x351ecc;if(_0x325052===0x0||DataManager['latestSavefileId']()!==_0x325052)return;const _0x1f7712=TextManager[_0x41824c(0x2a7)];this[_0x41824c(0x27c)](ColorManager[_0x41824c(0x1c1)]()),this[_0x41824c(0x1a3)](_0x1f7712,_0x33b2fc,_0x3aa429,0xb4);},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x258)]=function(_0x4bdccd,_0x4744f7,_0x5553bd,_0x19adcb,_0x1efdd8){const _0x3768cb=_0x351ecc;if(!_0x4bdccd['characters'])return;const _0x41668b=this[_0x3768cb(0x224)]();switch(_0x41668b){case _0x3768cb(0x2af):this[_0x3768cb(0x1c2)](_0x4bdccd,_0x4744f7,_0x5553bd,_0x19adcb,_0x1efdd8);break;case _0x3768cb(0x2f4):this['drawActorSprites'](_0x4bdccd,_0x4744f7,_0x5553bd,_0x19adcb,_0x1efdd8);break;case _0x3768cb(0x241):this[_0x3768cb(0x1a8)](_0x4bdccd,_0x4744f7,_0x5553bd,_0x19adcb,_0x1efdd8);break;default:break;}},Window_SavefileList['prototype']['drawActorFaces']=function(_0xefd031,_0x2f7d95,_0x31a825,_0x4877eb,_0x4f8557){const _0x271370=_0x351ecc;let _0x5a5ac1=Math[_0x271370(0x1b5)](_0xefd031[_0x271370(0x222)][_0x271370(0x23a)],Scene_File['MAX_BATTLE_MEMBERS']);const _0x3e1025=Math[_0x271370(0x217)](ImageManager['faceWidth'],Math['floor'](_0x4877eb/_0x5a5ac1));_0x2f7d95=_0x2f7d95+Math[_0x271370(0x292)]((_0x4877eb-_0x5a5ac1*_0x3e1025)/0x2);for(const _0x587bdc of _0xefd031[_0x271370(0x222)]){this[_0x271370(0x1f0)](_0x587bdc[0x0],_0x587bdc[0x1],_0x2f7d95,_0x31a825+0x1,_0x3e1025,_0x4f8557-0x2),_0x2f7d95+=_0x3e1025;}},ImageManager[_0x351ecc(0x243)]=VisuMZ[_0x351ecc(0x2ba)]['Settings']['SaveMenu'][_0x351ecc(0x299)],ImageManager[_0x351ecc(0x20f)]=VisuMZ[_0x351ecc(0x2ba)][_0x351ecc(0x259)][_0x351ecc(0x1df)][_0x351ecc(0x2de)],Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x2f8)]=function(_0x1cc8a3,_0x2dfa3d,_0x1507ec,_0x42359b,_0xdb312f){const _0xa3fee1=_0x351ecc;let _0x2f44d7=Math[_0xa3fee1(0x1b5)](_0x1cc8a3[_0xa3fee1(0x31b)][_0xa3fee1(0x23a)],Scene_File['MAX_BATTLE_MEMBERS']);const _0x3b646a=ImageManager[_0xa3fee1(0x243)];_0x2dfa3d=_0x2dfa3d+Math[_0xa3fee1(0x292)]((_0x42359b-_0x2f44d7*_0x3b646a)/0x2)+_0x3b646a/0x2,_0x1507ec=_0x1507ec+_0xdb312f-0x8;for(const _0x11656c of _0x1cc8a3[_0xa3fee1(0x31b)]){this[_0xa3fee1(0x193)](_0x11656c[0x0],_0x11656c[0x1],_0x2dfa3d,_0x1507ec),_0x2dfa3d+=_0x3b646a;}},Window_SavefileList['prototype'][_0x351ecc(0x1a8)]=function(_0x408762,_0x5e5d92,_0x7fb764,_0x30b8c1,_0xd83150){const _0x636556=_0x351ecc;if(!_0x408762['svbattlers'])return this[_0x636556(0x2f8)](_0x408762,_0x5e5d92,_0x7fb764,_0x30b8c1,_0xd83150);let _0x2af91e=Math[_0x636556(0x1b5)](_0x408762[_0x636556(0x2a5)][_0x636556(0x23a)],Scene_File[_0x636556(0x2ee)]);const _0x3387f1=ImageManager['saveMenuSvBattlerWidth'];_0x5e5d92=_0x5e5d92+Math['round']((_0x30b8c1-_0x2af91e*_0x3387f1)/0x2)+_0x3387f1/0x2,_0x7fb764=_0x7fb764+_0xd83150-0x8;for(const _0x3ebe84 of _0x408762[_0x636556(0x2a5)]){this['drawSvActor'](_0x3ebe84,_0x5e5d92,_0x7fb764),_0x5e5d92+=_0x3387f1;}},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x2ce)]=function(_0x44b3bc,_0x228972,_0xc2a1ba,_0x11529d,_0x5cc929,_0x351ca7){const _0x32db19=_0x351ecc;if(_0x44b3bc==='')return;_0x228972+=0x2,_0xc2a1ba+=0x2,_0x11529d-=0x4,_0x5cc929-=0x4;const _0x5b98a4=ImageManager[_0x32db19(0x319)](_0x44b3bc),_0x172eef=_0x5b98a4[_0x32db19(0x2f3)],_0x3d41d0=_0x5b98a4['height'],_0x3ce522=Math['min'](_0x11529d/_0x172eef,_0x5cc929/_0x3d41d0,_0x351ca7?0x1:0x3e8),_0x2cac37=Math['ceil'](_0x5b98a4['width']*_0x3ce522),_0x243073=Math[_0x32db19(0x204)](_0x5b98a4[_0x32db19(0x230)]*_0x3ce522);this[_0x32db19(0x290)][_0x32db19(0x28f)](_0x5b98a4,0x0,0x0,_0x172eef,_0x3d41d0,_0x228972,_0xc2a1ba,_0x2cac37,_0x243073);},Window_SavefileList[_0x351ecc(0x281)]['drawCenteredPicture']=function(_0x220038,_0xe1610,_0xb6be07,_0x13d2bb,_0x2653e5,_0x391dce){const _0x143d8c=_0x351ecc;if(_0x220038==='')return;_0xe1610+=0x2,_0xb6be07+=0x2,_0x13d2bb-=0x4,_0x2653e5-=0x4;const _0x5b61c9=ImageManager[_0x143d8c(0x319)](_0x220038),_0x181563=_0x5b61c9['width'],_0x1047e6=_0x5b61c9[_0x143d8c(0x230)],_0x5d0581=Math[_0x143d8c(0x217)](_0x13d2bb/_0x181563,_0x2653e5/_0x1047e6,_0x391dce?0x1:0x3e8),_0x4c84b9=Math[_0x143d8c(0x204)](_0x5b61c9[_0x143d8c(0x2f3)]*_0x5d0581),_0x1654bb=Math[_0x143d8c(0x204)](_0x5b61c9[_0x143d8c(0x230)]*_0x5d0581);_0xe1610+=(_0x13d2bb-_0x4c84b9)/0x2,_0xb6be07+=(_0x2653e5-_0x1654bb)/0x2,this[_0x143d8c(0x290)]['blt'](_0x5b61c9,0x0,0x0,_0x181563,_0x1047e6,_0xe1610,_0xb6be07,_0x4c84b9,_0x1654bb);},Window_SavefileList[_0x351ecc(0x281)]['drawPlaytime']=function(_0x12b232,_0x2f6dfd,_0x3fb3ba,_0x115028,_0x952fbc){const _0x44acb7=_0x351ecc;_0x12b232[_0x44acb7(0x265)]&&(_0x952fbc=_0x952fbc||_0x44acb7(0x2cf),this[_0x44acb7(0x1a3)](_0x12b232[_0x44acb7(0x265)],_0x2f6dfd,_0x3fb3ba,_0x115028,_0x952fbc));},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x309)]=function(_0x418015,_0x25fd07,_0x11d253,_0x5279a7,_0x5ad792){const _0x4c5062=_0x351ecc;if(_0x418015['timestamp']){_0x5ad792=_0x5ad792||_0x4c5062(0x2cf);let _0x5ea7be=this['getTimestamp'](_0x418015);Imported[_0x4c5062(0x2cd)]&&this[_0x4c5062(0x19d)]()&&(_0x5ea7be=_0x4c5062(0x29f)[_0x4c5062(0x1f8)](_0x5ea7be)),this[_0x4c5062(0x1a3)](_0x5ea7be,_0x25fd07,_0x11d253,_0x5279a7,_0x5ad792);}},Window_SavefileList['prototype'][_0x351ecc(0x24e)]=function(_0x559b19){const _0x5bf03b=_0x351ecc,_0x3e4fba=_0x559b19[_0x5bf03b(0x2e6)],_0x1e6ffa=new Date(_0x3e4fba);let _0x16b270='[Year].[Month].[Date]\x20[Hour]:[Minute]:[Second]';_0x16b270=_0x16b270[_0x5bf03b(0x1ca)](/\[YEAR\]/gi,'%1'),_0x16b270=_0x16b270[_0x5bf03b(0x1ca)](/\[MONTH\]/gi,'%2'),_0x16b270=_0x16b270['replace'](/\[DATE\]/gi,'%3'),_0x16b270=_0x16b270[_0x5bf03b(0x1ca)](/\[HOUR\]/gi,'%4'),_0x16b270=_0x16b270['replace'](/\[MINUTE\]/gi,'%5'),_0x16b270=_0x16b270[_0x5bf03b(0x1ca)](/\[SECOND\]/gi,'%6');let _0x1483b6=String(_0x1e6ffa[_0x5bf03b(0x285)]())['split']('')[_0x5bf03b(0x21f)]('​'),_0xd671ae=String(_0x1e6ffa[_0x5bf03b(0x1d0)]()+0x1),_0x5c61a4=String(_0x1e6ffa['getDate']())[_0x5bf03b(0x1ce)](0x2,'0'),_0x4275d2=String(_0x1e6ffa[_0x5bf03b(0x1ad)]())['padStart'](0x2,'0'),_0x2c9032=String(_0x1e6ffa[_0x5bf03b(0x2d6)]())[_0x5bf03b(0x1ce)](0x2,'0'),_0x102f08=String(_0x1e6ffa[_0x5bf03b(0x2f2)]())[_0x5bf03b(0x1ce)](0x2,'0'),_0x5be5f2=_0x16b270[_0x5bf03b(0x1f8)](_0x1483b6,_0xd671ae,_0x5c61a4,_0x4275d2,_0x2c9032,_0x102f08);return _0x5be5f2;},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x2f5)]=function(_0x3e7967,_0x430c02,_0x415aa0,_0x7c42ae){const _0x45e8c9=_0x351ecc;if(_0x3e7967[_0x45e8c9(0x247)]===undefined)return;const _0x11ebe6=_0x3e7967[_0x45e8c9(0x247)],_0x37bf8a=TextManager[_0x45e8c9(0x228)];Window_SavefileList[_0x45e8c9(0x281)][_0x45e8c9(0x223)][_0x45e8c9(0x266)](this,_0x11ebe6,_0x37bf8a,_0x430c02,_0x415aa0,_0x7c42ae);},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x25f)]=function(_0xf9e42f,_0x275e01,_0x319c0d,_0x5cab6d,_0x39215f){const _0x6d57fc=_0x351ecc;if(_0xf9e42f[_0x6d57fc(0x229)]){const _0x2b7eda=this[_0x6d57fc(0x306)](_0xf9e42f[_0x6d57fc(0x229)])['width'];_0x39215f=_0x39215f||_0x6d57fc(0x2cf);if(_0x39215f===_0x6d57fc(0x2cb))_0x275e01=_0x275e01+_0x5cab6d-_0x2b7eda;else _0x39215f==='center'&&(_0x275e01=_0x275e01+(_0x5cab6d-_0x2b7eda)/0x2);this[_0x6d57fc(0x2a4)](_0xf9e42f['description'],_0x275e01,_0x319c0d,_0x5cab6d);}},Window_SavefileList['prototype'][_0x351ecc(0x23e)]=function(_0x1a765f,_0xed90f9){const _0x582f84=_0x351ecc;if(_0x1a765f){const _0x4ef5be=ImageManager[_0x582f84(0x319)](_0x1a765f[_0x582f84(0x23c)]||'');_0x4ef5be[_0x582f84(0x1b4)](this[_0x582f84(0x2e7)][_0x582f84(0x2c5)](this,_0x1a765f,_0xed90f9));}else this['drawFileData'](this['_savefileId'],_0xed90f9);},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x2e7)]=function(_0x48446d,_0x17831b){const _0x435bd3=_0x351ecc,_0x3bc514=this['menuStyle']();switch(_0x3bc514){case'vertical':this[_0x435bd3(0x196)](_0x48446d,_0x17831b);break;case'box':this['drawBoxStyleContents'](_0x48446d,_0x17831b);break;case _0x435bd3(0x1c7):this['drawLargeStyleContents'](_0x48446d,_0x17831b);break;default:this[_0x435bd3(0x1dd)](_0x48446d,_0x17831b);break;}this[_0x435bd3(0x30f)]();const _0x63f19b=_0x48446d['savefileId'];this[_0x435bd3(0x24a)](_0x63f19b,_0x17831b);},Window_SavefileList['prototype']['drawFileData']=function(_0x132a4a,_0x2f408d){const _0x19bce5=_0x351ecc,_0x1f93cd=this['menuStyle']();switch(_0x1f93cd){case'vertical':this[_0x19bce5(0x2db)](_0x132a4a,_0x2f408d);break;case _0x19bce5(0x201):this[_0x19bce5(0x29c)](_0x132a4a,_0x2f408d);break;case _0x19bce5(0x1c7):this[_0x19bce5(0x257)](_0x132a4a,_0x2f408d);break;default:this[_0x19bce5(0x24d)](_0x132a4a,_0x2f408d);break;}},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x1dd)]=function(_0x1028b4,_0x56cdf9){const _0x1f2273=_0x351ecc;VisuMZ[_0x1f2273(0x2ba)][_0x1f2273(0x259)][_0x1f2273(0x1df)]['ListContentsJS'][_0x1f2273(0x266)](this,_0x1028b4,_0x56cdf9);},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x196)]=function(_0x2bd28f,_0x5af28c){const _0x327e41=_0x351ecc;VisuMZ[_0x327e41(0x2ba)]['Settings'][_0x327e41(0x1df)][_0x327e41(0x199)][_0x327e41(0x266)](this,_0x2bd28f,_0x5af28c);},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x252)]=function(_0x46c70b,_0x244dff){const _0x3e2d99=_0x351ecc;VisuMZ[_0x3e2d99(0x2ba)][_0x3e2d99(0x259)][_0x3e2d99(0x1df)][_0x3e2d99(0x30e)][_0x3e2d99(0x266)](this,_0x46c70b,_0x244dff);},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x1fb)]=function(_0xdc9da5,_0x4fbc41){const _0x54cf5c=_0x351ecc;VisuMZ[_0x54cf5c(0x2ba)][_0x54cf5c(0x259)][_0x54cf5c(0x1df)][_0x54cf5c(0x212)][_0x54cf5c(0x266)](this,_0xdc9da5,_0x4fbc41);},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x24d)]=function(_0x8e9066,_0x47b3fa){const _0x238f9b=_0x351ecc;VisuMZ[_0x238f9b(0x2ba)][_0x238f9b(0x259)][_0x238f9b(0x1df)][_0x238f9b(0x21b)]['call'](this,_0x8e9066,_0x47b3fa);},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x2db)]=function(_0x19263d,_0x4e66d9){const _0x586ea=_0x351ecc;VisuMZ['SaveCore']['Settings']['SaveMenu'][_0x586ea(0x1db)]['call'](this,_0x19263d,_0x4e66d9);},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x29c)]=function(_0xcaf00,_0x2aacfb){const _0x1b2859=_0x351ecc;VisuMZ[_0x1b2859(0x2ba)][_0x1b2859(0x259)][_0x1b2859(0x1df)][_0x1b2859(0x2fc)][_0x1b2859(0x266)](this,_0xcaf00,_0x2aacfb);},Window_SavefileList[_0x351ecc(0x281)][_0x351ecc(0x257)]=function(_0x2764fb,_0x3ac6f8){const _0xf2a4a3=_0x351ecc;VisuMZ[_0xf2a4a3(0x2ba)][_0xf2a4a3(0x259)][_0xf2a4a3(0x1df)][_0xf2a4a3(0x2f0)][_0xf2a4a3(0x266)](this,_0x2764fb,_0x3ac6f8);};function _0x4c19(){const _0x5b21fd=['onSaveSuccess','RemoveSaveCoreCache','gold','transfer','resetWordWrap','drawFileData','isLocalMode','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','drawListStyleFileData','getTimestamp','playSave','single','autosaveType','drawBoxStyleContents','battlerName','clear','innerWidth','parameters','drawLargeStyleFileData','drawActors','Settings','Scene_Options_maxCommands','_autosaveConfirmWindow','Scene_Map_onTransferEnd','SaveDescription','Scene_Base_onAutosaveFailure','drawDescription','getColorDataFromPluginParameters','goto','optAutosave','LocalMode','VertRows','playtime','call','EVAL','autosaveConfirmationWindowRect','locked','maxBattleMembers','onSaveCoreSaveSuccess','JSON','current','removeChild','Game_System_initialize','file0','loadSvActor','Save','battle','isSaveConfirmWindowEnabled','windowPadding','autosaveEnabled','globalValue','forceAutosave','isAutosaveConfirmWindowEnabled','autosaveSuccess','startNewGameLockedSave','changeTextColor','3392601xXmcOq','commandContinue','onLoadSuccess','addGeneralOptions','prototype','commandNewGame','maxCommands','Scene_Save_helpWindowText','getFullYear','playLoad','onTransferEnd','both','Scene_Load_onLoadSuccess','opacity','isAutosaveEnabled','OnLoadSuccessJS','determineAutosaveBypass','Scene_Title_initialize','blt','contentsBack','_scene','round','Scene_Base_requestAutosave','_bypassAutosave','Scene_Map_onMapLoaded','toUpperCase','338526lFakQs','SceneManager_snapForBackground','SpriteWidth','floor','process_VisuMZ_SaveCore_Switches_Variables','drawBoxStyleFileData','ListRows','variables','{{%1}}','globalVariables','Window_Options_addGeneralOptions','initialize','addSaveCoreCommands','drawTextEx','svbattlers','setMode','latestSave','push','Game_Switches_setValue','_commandWindow','getScreenPosition','247530FNUjMK','inBattle','trim','face','SaveStyle','indexToSavefileId','loadFailureConfirmationWindow','menuStyle','Scene_Save_onSaveFailure','contents','pickLockedSaveSlot','autosave','saveSuccess','fadeOut','SaveCore','_colorCache','exit','AddOption','VocabSaveSuccess','GlobalVariables','2211060RkcCBH','ARRAYSTR','initSaveCore','onSaveCoreSaveFailure','SaveConfirm','bind','gradientFillRect','19334aIUqzp','_success','VocabLoadFailure','setFadeSpeed','right','Game_Switches_value','VisuMZ_0_CoreEngine','drawPicture','left','AfterExitMenu','setGlobalValue','Duration','saveCurrentSlot','VocabSaveFailure','value','getMinutes','ActorGraphic','addCommand','isPreviousScene','createSaveConfirmationWindow','drawVerticalStyleFileData','Scene_Title_commandContinue','shouldAutosave','SvBattlerWidth','setSavePicture','setValue','filter','4eTFccA','saveFailure','update','ARRAYSTRUCT','timestamp','drawContentsLoaded','AfterTransfer','members','isSaveEnabled','LatestText','onAfterLoad','saveDescription','MAX_BATTLE_MEMBERS','130283GroQvl','LargeFileDataJS','then','getSeconds','width','sprite','drawCurrency','ExtensionFmt','isNwjs','drawActorSprites','gameId','setupNewGame','requestAutosave','BoxFileDataJS','RequestsRequireSaveEnable','onSaveCoreLoadFailure','catch','includes','GlobalSwitches','DataManager_loadAllSavefileImages','ScreenPosition','setSaveDescription','MakeSavefileInfoJS','textSizeEx','makeSavename','svbattlersForSaveFile','drawTimestamp','Scene_Map_needsFadeIn','Filename','VisuMZ_1_MainMenuCore','match','BoxContentsJS','resetFontSettings','callMenu','executeSave','AutosaveConfirm','_saveCorePluginCommandSave','savefileId','VertCols','openAutosaveConfirmationWindow','create','status','loadPicture','svActorHorzCells','characters','STR','version','registerCommand','setSavefileId','onBeforeSave','drawCharacter','maxSavefiles','selectSavefile','drawVerticalStyleContents','AutosaveOption','_stored_latestSavefile','VertContentsJS','ListCols','vertical','open','useDigitGrouping','clearEventCache','number','OnSaveFailureJS','createGameObjects','calcWindowHeight','drawText','onAutosaveSuccess','isEventTest','popScene','saveGame','drawSvBattlerSprites','loadFace','closeSaveConfirmationWindow','contentsOpacity','svActorVertCells','getHours','ConfigManager_makeData','MaxSaveFiles','itemPadding','updateFade','_processingAutosave','Default','addLoadListener','max','Scene_Boot_onDatabaseLoaded','DataManager_createGameObjects','1870PMlgIU','autosaveOption','enableAutosave','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','needsFadeIn','isEnabled','loadPartyImagesForSavefile','STRUCT','playBuzzer','latestSavefile','drawActorFaces','innerHeight','map','VisuMZ_1_MessageCore','reloadMapIfUpdated','large','_fadeSpeed','closeAutosaveConfirmationWindow','replace','_saveConfirmWindow','file','Game_Variables_setValue','padStart','Game_System_onAfterLoad','getMonth','textColor','KeyFmt','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','makeSavefileInfo','itemRect','AfterBattle','applyData','Enable','loadGame','TestKey','VertFileDataJS','save','drawListStyleContents','savePicture','SaveMenu','Scene_Base_onAutosaveSuccess','drawItem','OnAutosaveSuccessJS','createAutosaveConfirmationWindow','refresh','VocabAutosaveSuccess','Text','isBattleTest','activateListWindow','Scene_Menu_commandSave','mainCommandWidth','forageTestKey','424ROSOyG','#%1','Game_Variables_value','globalSwitches','drawFace','_pickLockedSaveSlot','LargeCols','fileDirectoryPath','helpWindowText','saveConfirmationWindowRect','ConvertParams','Scene_Save_executeSave','format','ParseTextCodes','12726uKvDGy','drawLargeStyleContents','onSaveCoreLoadSuccess','drawBackground','Name','onAutosaveFailure','AutosaveMaxCount','box','Scene_Title_commandNewGame','fadeOutAll','ceil','openness','numVisibleRows','parse','Window_SavefileList_setMode','ConfigManager_applyData','partyMemberName','Scene_Title_terminate','process_VisuMZ_SaveCore_Settings','switches','characterName','saveMenuSvBattlerWidth','setSetSuccess','makeData','LargeContentsJS','drawLatestMarker','forageKey','_active','fadeIn','min','loadAllSavefileImages','dimColor1','activate','ListFileDataJS','snapForBackground','_savefileId','changePaintOpacity','join','faceName','Scene_Menu_create','faces','drawCurrencyValue','actorStyle','close','exitMenu','OnLoadFailureJS','currencyUnit','description','isGlobal','Autosave','saveStyle','filePath','onLoadFailure','name','height','Game_System_savefileId','AutosaveEnable','onSaveFailure','OnSaveSuccessJS','getSavePicture','loadCharacter','addChild','isAutosaveCompatible','terminate','length','openSaveConfirmationWindow','picture','autosaveFailure','drawContents','DataManager_makeSavefileInfo','_SaveCoreSettings','svbattler','ARRAYFUNC','saveMenuSpriteWidth','commandNewGameSaveCoreLocked'];_0x4c19=function(){return _0x5b21fd;};return _0x4c19();}