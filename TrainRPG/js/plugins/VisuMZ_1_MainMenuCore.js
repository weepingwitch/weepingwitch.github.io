//=============================================================================
// VisuStella MZ - Main Menu Core
// VisuMZ_1_MainMenuCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MainMenuCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MainMenuCore = VisuMZ.MainMenuCore || {};
VisuMZ.MainMenuCore.version = 1.27;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.27] [MainMenuCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Main_Menu_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Main Menu Core plugin is designed to give you more control over the Main
 * Menu outside of RPG Maker MZ's editor's control. Game devs are given control
 * over how commands work, visual aesthetics pertaining to the Main Menu, and 
 * assign menu images to actors as background portraits.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general Main Menu settings.
 * * The ability to set Menu Background Portraits for individual actors.
 * * Flexibility in changing which commands appear in the Main Menu.
 * * Add new windows like the Playtime Window and Variable windows.
 * * Change the style of how the windows are arranged in the Main Menu.
 * * Change the way the status list is displayed and the way it's displayed.
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
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 *
 * <Menu Portrait: filename>
 *
 * - Used for: Actor
 * - This is used with the "Portrait" style Main Menu List.
 * - Sets the menu image for the actor to 'filename'.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 *
 * ---
 * 
 * <Menu Portrait Offset: +x, +y>
 * <Menu Portrait Offset: -x, -y>
 * 
 * <Menu Portrait Offset X: +x>
 * <Menu Portrait Offset X: -x>
 * 
 * <Menu Portrait Offset Y: +y>
 * <Menu Portrait Offset Y: -y>
 *
 * - Used for: Actor
 * - This is used with the "Portrait" style Main Menu List.
 * - Offsets the X and Y coordinates for the menu image.
 * - Replace 'x' with a number value that offsets the x coordinate.
 * - Negative x values offset left. Positive x values offset right.
 * - Replace 'y' with a number value that offsets the y coordinate.
 * - Negative y values offset up. Positive x values offset down.
 * - This only applies to the Main Menu portraits.
 * 
 * ---
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Menu Image (Group)
 * Actor: Change Menu Image (Range)
 * Actor: Change Menu Image (JS)
 * - Changes the actor's Menu Image.
 * - Each version has a different means of selecting Actor ID's.
 *
 *   Actor ID:
 *   - Select which ID(s) to affect.
 *
 *   Filename:
 *   - Selected actor(s) will have their menu images changed to this.
 *
 * ---
 * 
 * Actor: Change Menu Image (JS) (v1.24)
 * - Changes an actor's Menu Image using JavaScript.
 * - Allows more control with more text entry.
 * 
 *   JS: Actor ID:
 *   - Enter which Actor ID to affect.
 *   - Uses JavaScript code.
 * 
 *   JS: Filename:
 *   - Enter the filename you wish to use.
 *   - Uses JavaScript code.
 * 
 * ---
 * 
 * === Menu Command Plugin Commands ===
 * 
 * ---
 * 
 * Menu Command: Clear Forced Settings
 * - Clear any forced settings for the menu command symbols.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Disable
 * - Forcefully disable specific menu commands via their symbols.
 * - Matching forced enabled symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Enable
 * - Forcefully enable specific menu commands via their symbols.
 * - Matching forced disabled symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Hide
 * - Forcefully hide specific menu commands via their symbols.
 * - Matching forced shown symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Show
 * - Forcefully show specific menu commands via their symbols.
 * - Matching forced hidden symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These general settings contain various settings on how the Main Menu scene
 * displays certain windows, alters how specific windows behave, and determines
 * which scenes would display actor menu images as background portraits.
 *
 * ---
 *
 * Gold Window
 * 
 *   Thinner Gold Window:
 *   - Make the Gold Window thinner in the Main Menu?
 *   - Used to match the Playtime and Variable Windows.
 *   - Only applies to the Command Window style: Default Vertical.
 * 
 *   Auto Adjust Height:
 *   - Automatically adjust the height for the thinner Gold Window?
 *
 *   Auto Adjust Y:
 *   - Automatically adjust the Y position for the thinner Gold Window?
 *
 * ---
 * 
 * Status Window
 * 
 *   Select Last?:
 *   - When picking a personal command from the Command Window, select the
 *     last picked actor or always the first?
 * 
 * ---
 *
 * Solo Party
 *
 *   Solo Quick Mode:
 *   - When selecting "Skills", "Equip", or "Status" with one party member,
 *     immediately go to the scene.
 *
 * ---
 *
 * Sub Menus
 *
 *   Menus with Actor BG's:
 *   - A list of the menus that would be compatible with Actor Menu Backgrounds
 *
 *   JS: Actor BG Action:
 *   - Code used to determine how to display the sprites upon loading.
 *
 * ---
 * 
 * Party Window
 * 
 *   Show Reserve Memebers:
 *   - Show reserve members while on the Main Menu scene?
 * 
 *   Hide Main Menu Only
 *   - If reserve members are hidden, hide them only in the main menu or
 *     all scenes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Command Window List
 * ============================================================================
 *
 * The Command Window functions as a hub to the various scenes linked from the
 * Main Menu. These include 'Item', 'Skill', 'Equip', 'Status', 'Save', and
 * so on. This Plugin Parameter is an array that lets you add, remove, and/or
 * alter the Command Window's various commands, how they're handled, whether or
 * not they're visible, and how they react when selected.
 *
 * These will require knowledge of JavaScript to use them properly.
 *
 * ---
 *
 * Command Window List
 * 
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   Subcategory:
 *   - The subcategory used for this command.
 *   - Leave empty for no subcategory.
 *
 *   Icon:
 *   - Icon used for this command.
 *   - Use 0 for no icon.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 * 
 *   JS: Personal Code:
 *   - JavaScript code that runs once the actor list is selected with this
 *     command highlighted.
 *
 * ---
 * 
 * ==== Subcategories ====
 * 
 * Subcategories are a new addition to the Main Menu Core version 1.18. When a
 * subcategory is set, it will only display Command Window items that belong
 * to that subcategory. Those Command Window items do not appear when there is
 * no subcategory active or if it's a different subcategory.
 * 
 * ---
 * 
 * To create a subcategory, a few things must be done:
 * 
 * 1. The subcategory symbol must be "subcategory".
 * 
 * 2. The string returned by JS: Ext determines the subcategory. In the default
 *    Plugin Parameters, 'datalog' is returned as the subcategory. This becomes
 *    the subcategory when picked.
 * 
 * 3. For the JS: Run Code, have the following code somewhere in it:
 * 
 *    const ext = arguments[0];
 *    this.setSubcategory(ext);
 * 
 * ---
 * 
 * To make a Command Window item be a part of a subcategory do the following:
 * 
 * 1. Take the JS: Ext string value (case sensitive).
 * 
 * 2. Set it as the target Command Window item's "Subcategory" value.
 * 
 * 3. If the subcategory doesn't exist, then this Command Window item will
 *    appear normally.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Playtime Window
 * ============================================================================
 *
 * The Playtime Window is an optional feature that can be displayed in the
 * Main Menu. As its name suggests, it displays the playtime of the player's
 * current play through.
 *
 * ---
 *
 * Playtime Window
 * 
 *   Enable:
 *   - Use the Playtime Window?
 * 
 *   Adjust Command Window:
 *   - Adjust the command window's height to fit in the Playtime Window?
 *
 *   Background Type:
 *   - Select background type for the Playtime window.
 * 
 *   Font Size:
 *   - Font size used for displaying Gold inside the Playtime window.
 * 
 *   Time Icon:
 *   - Icon displayed for the 'Time' label.
 * 
 *   Time Text:
 *   - Text for the display of 'Time' in the Playtime window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the Playtime window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Variable Window
 * ============================================================================
 *
 * The Variable Window is an optional feature that can be displayed in the
 * Main Menu. If enabled, the Variable Window will display variables of the
 * game dev's choice in the Main Menu itself.
 *
 * ---
 *
 * Variable Window
 * 
 *   Enable:
 *   - Use the Variable Window?
 * 
 *   Adjust Command Window:
 *   - Adjust the command window's height to fit in the Variable Window?
 *
 *   Background Type:
 *   - Select background type for the Variable window.
 * 
 *   Font Size:
 *   - Font size used for displaying Gold inside the Variable window.
 * 
 *   Variable List:
 *   - Select variables to be displayed into the window.
 *     Use \i[x] to determine their icon.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the Variable window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Command Window Style & Command Style Settings
 * ============================================================================
 *
 * This determines how the Main Menu appears based on the Command Window Style.
 * If anything but the 'Default' is used, then these settings will take over
 * the window placement settings for the Main Menu. This means that even if you
 * are using VisuStella's Core Engine, the window layouts will be overwritten.
 *
 * ---
 *
 * Command Window Style:
 * - Choose the positioning and style of the Main Menu Command Window.
 * - This will automatically rearrange windows.
 * - We're not responsible for visual incompatibilities.
 * 
 *   Default Vertical Side Style:
 *   - The default Main Menu layout style.
 *   - Affected by VisuStella's Core Engine's Plugin Parameter settings.
 * 
 *   Top Horizontal Style:
 *   - Puts the Command Window at the top of the screen.
 *   - Gold, Playlist, and Variable Windows are moved to the bottom.
 *   - The Actor List Window is placed in the middle.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 *
 *   Bottom Horizontal Style:
 *   - Puts the Command Window at the bottom of the screen.
 *   - Gold, Playlist, and Variable Windows are moved to the top.
 *   - The Actor List Window is placed in the middle.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 * 
 *   Mobile Full Screen Style:
 *   - Puts the Command Window at the center of the screen with larger buttons.
 *   - Gold, Playlist, and Variable Windows are moved to the bottom.
 *   - The Actor List Window is hidden until prompted to be selected.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 *
 * ---
 *
 * Command Style Settings
 *
 *   Style:
 *   - How do you wish to draw command entries in the Command Window?
 *   - Text Only: displays only text.
 *   - Icon Only: displays only the icon.
 *   - Icon + Text: displays icon first, then text.
 *   - Automatic: determines the best fit for the size
 *
 *   Text Alignment:
 *   - Decide how you want the text to be aligned.
 *   - Left, Center, or Right
 * 
 *   Rows:
 *   - Number of visible rows.
 *   - Applies only to Top, Bottom, and Mobile styles.
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - Applies only to Top, Bottom, and Mobile styles.
 * 
 *   Mobile Thickness:
 *   - The thickness of the buttons for mobile version.
 *   - Applies only to Top, Bottom, and Mobile styles.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status Graphic, Status List Style, & List Style Settings
 * ============================================================================
 *
 * Choose how the contents Actor Status List Window in the Main Menu appears.
 * This can range from the which actor graphic is drawn to the style used for
 * the data that's displayed.
 *
 * ---
 *
 * Status Graphic:
 * - Choose how the graphic for actor graphics appear in status-like menus.
 * 
 *   None:
 *   - Don't display any graphic for the actors.
 * 
 *   Face:
 *   - Display the actors' faces. This is the default option in RPG Maker MZ.
 *
 *   Map Sprite:
 *   - Display the actors' map sprites.
 * 
 *   Sideview Battler:
 *   - Display the actors' sideview battlers.
 *
 * ---
 *
 * Main Menu List Style
 * - Choose how the actor status list looks in the Main Menu.
 * - We're not responsible for visual incompatibilities.
 *
 * Inner-Menu List Style
 * - Choose how the actor status list looks in the inner menus like Scene_Item,
 *   Scene_Skill, etc.
 * - We're not responsible for visual incompatibilities.
 *
 *   Default Horizontal Style:
 *   - This is the default style found in RPG Maker MZ's Main Menu.
 *
 *   Vertical Style:
 *   - Makes the display for the actor list vertical instead of horizontal.
 *
 *   Portrait Style:
 *   - Similar to the vertical style, except each actor's Menu Image is
 *     displayed in the background instead. Portraits are required.
 *   - If there is no Menu Image used, this will switch over to the Vertical
 *     Style and use a face graphic instead.
 *
 *   Solo Style:
 *   - Used for solo party member games. Extends the whole view of the Status
 *     Window to accomodate a single actor.
 *
 *   Thin Horizontal Style:
 *   - Makes the selectable menu entries for the actors a single line thin.
 *
 *   Thicker Horizontal Style:
 *   - Makes the selectable menu entries for the actors two lines thick.
 *
 * ---
 *
 * List Styles
 *   JavaScript code used to determine how the individual styles are drawn.
 *
 *   JS: Default:
 *   JS: Vertical:
 *   JS: Portrait:
 *   JS: Solo:
 *   JS: Thin:
 *   JS: Thicker:
 *   - Code used to draw the data for these styles.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Mouse Cursor Settings
 * ============================================================================
 *
 * Add/enable a custom mouse cursor for your game. This will use a graphic
 * found in the game project's /icon/ folder to use as the custom mouse
 * cursor when hovering over the game.
 * 
 * Does not work on mobile devices.
 *
 * ---
 *
 * General Settings
 * 
 *   Enable?:
 *   - Enable custom cursor?
 *   - Requires a custom 'Idle' graphic.
 * 
 * ---
 * 
 * Graphic Settings
 * 
 *   Idle Filename:
 *   - Graphic used for mouse cursor when idle or moving.
 *   - Required for a custom mouse cursor.
 *   - Located in game project's /icon/ folder.
 *   - Include .png extension (ie. Cursor1.png)
 * 
 *   Click Filename:
 *   - Optional.
 *   - Graphic used for mouse cursor when clicked or held.
 *   - Uses the 'Idle' graphic if 'Click' graphic is not used.
 *   - Located in game project's /icon/ folder.
 *   - Include .png extension (ie. Cursor2.png)
 * 
 * ---
 * 
 * Anchor Settings
 * 
 *   Anchor X:
 *   - Anchor X value for the custom cursor.
 *   - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *   Anchor Y:
 *   - Anchor Y value for the custom cursor.
 *   - 0.0 - top; 0.5 - middle; 1.0 - bottom
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
 * Version 1.27: February 20, 2025
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Better compatibility with different icon sizes.
 * 
 * Version 1.26: October 17, 2024
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Due to conflicts with deployment, the Custom Mouse Cursor has its base
 *    location moved from /img/system/ to /icon/.
 * ** Please move the cursor file(s) as well as update the Plugin Parameters.
 * ** Sorry for the inconvenience.
 * 
 * Version 1.25: September 19, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Custom Mouse Cursor
 * ****  Add/enable a custom mouse cursor for your game.
 * 
 * Version 1.24: August 29, 2024
 * * Compatibility Update
 * ** When "Load" command is used with Save Core's Single-Save Mode,
 *    automatically load up the save instead of going to the Load Menu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Plugin Command renamed:
 * *** Actor: Change Menu Image (JS) to Actor: Change Menu Image (JS) (Legacy)
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** Actor: Change Menu Image (JS) (v1.24)
 * **** Changes an actor's Menu Image using JavaScript.
 * **** Allows more control with more text entry.
 * 
 * Version 1.23: February 15, 2024
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Battle Tactics' command.
 * *** This is for the upcoming VisuStella MZ plugins.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'battleGridTactics' option(s)
 *      and click copy. Go to the target project's Main Menu Core's 'Command
 *      Window List' plugin parameter. Paste the command where you want it
 *      to go.
 * 
 * Version 1.22: October 12, 2023
 * * Feature Update!
 * ** Subcategories are now maintained when exiting a scene pushed forward by
 *    a subcategory. Added by Olivia and sponsored by AndyL.
 * 
 * Version 1.21: April 13, 2023
 * * Bug Fixes!
 * ** Multiple subcategories should now work properly. Fix made by Arisu.
 * 
 * Version 1.20: March 16, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Bestiary' command.
 * *** This is for the upcoming VisuStella MZ plugins.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'bestiary' option(s) and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.19: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'CG Gallery', 'Credits Page', and 'Patch Notes' command.
 * *** This is for the upcoming VisuStella MZ plugins.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'cgGallery', 'creditsPage', or
 *      'patchNotes' option(s) and click copy. Go to the target project's Main
 *      Menu Core's 'Command Window List' plugin parameter. Paste the command
 *      where you want it to go.
 * 
 * Version 1.18: October 27, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added a new section into Plugin Parameters: Command Window List for
 *    "Subcategories" and adding info on how they are handled.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Tutorial List' command.
 * *** This is for the upcoming VisuMZ_2_TutorialPanelSys plugin.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'tutorialList' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * ** Subcategory called "Datalog" is now added.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'subcategory' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * **** Existing entries for Quest, Message Log, and Combat Log are now added
 *      to the Datalog subcategory.
 * * New Features!
 * ** Subcategory support is now added for the Main Menu Command Window.
 * *** Subcategories allow you to make some Command Window items invisible
 *     until a subcategory is selected. This helps reduce clutter and save room
 *     on the Command Window command list.
 * 
 * Version 1.17: August 18, 2022
 * * Bug Fixes!
 * ** Changed actor graphics now reflect properly for those using the default
 *    status menu. Fix made by Irina.
 * 
 * Version 1.16: April 21, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Menu Command: Clear Forced Settings
 * *** Menu Command: Force Disable
 * *** Menu Command: Force Enable
 * *** Menu Command: Force Hide
 * *** Menu Command: Force Show
 * **** These new Plugin Commands allow you to forcefully show, hide, enable,
 *      or disable Plugin Commands regardless of their required settings.
 * **** We are not responsible for errors that occur by accessing menus that
 *      should otherwise be disabled or hidden.
 * 
 * Version 1.15: February 10, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: October 25, 2021
 * * Bug Fixes!
 * ** Plugin Parameter settings for automatic Command Window height adjustment
 *    should now work properly. Fix made by Irina.
 * * Documentation Update!
 * ** Added a note for the Help File: Gold Window > Thinner Gold Window
 * *** Only applies to the Command Window style: Default Vertical.
 * 
 * Version 1.13: October 21, 2021
 * * Feature Update!
 * ** Rounding update applied to picture portraits so that coordinates aren't
 *    drawn on non-whole numbers due to base images having odd values. Update
 *    made by Olivia.
 * 
 * Version 1.12: July 16, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Message Log' command.
 * *** This is for the upcoming VisuMZ_3_MessageLog plugin.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'MessageLog' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.11: May 14, 2021
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Load' command after the 'Save' command.
 * *** This allows players to access the load game screen from the Main Menu.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'Load' option and click copy.
 *      Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.10: April 16, 2021
 * * Feature Update!
 * ** Default style for List Styles now have its code updated with the
 *    JS: Default plugin parameter for games whose vertical screen resolution
 *    is larger than normal.
 * *** To update this, do either of the following:
 * **** Open up the Main Menu Core Plugin Parameters. Select and press delete 
 *      on "List Style Settings". Press Enter. New updated settings will be
 *      replaced for the JS: Default settings.
 * **** Or Delete the existing VisuMZ_1_MainMenuCore.js in the Plugin Manager
 *      list and install the newest version.
 * 
 * Version 1.09: March 19, 2021
 * * Documentation Update!
 * ** Added clarity for the "Portrait Style" in Plugin Parameters section for
 *    "Status Graphic, Status List Style, & List Style Settings":
 * *** If there is no Menu Image used, this will switch over to the Vertical
 *     Style and use a face graphic instead.
 * 
 * Version 1.08: February 26, 2021
 * * Feature Update!
 * ** Default Plugin Parameters for the List Style Settings defaults have been
 *    updated with tighter coordinate values to allow for more accurate display
 *    of UI element positioning. Update made by Olivia.
 * 
 * Version 1.07: January 1, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Removed "<Menu Image: filename>" version of notetag to reduce confusion
 *    and to stick with the norm declared by the Battle Core.
 * * New Features!
 * ** New notetags added by Yanfly:
 * *** <Menu Portrait Offset: +x, +y>
 * *** <Menu Portrait Offset X: +x>
 * *** <Menu Portrait Offset Y: +y>
 * **** This is used with the "Portrait" style Main Menu list.
 * **** Offsets the X and Y coordinates for the menu portrait.
 * 
 * Version 1.06: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: October 11, 2020
 * * Documentation Update!
 * ** Documentation added for the new plugin parameter.
 * * New Features!
 * ** New plugin parameter added by Yanfly.
 * *** Plugin Parameters > General > Status Window > Select Last?
 * **** When picking a personal command from the Command Window, select the
 *      last picked actor or always the first?
 * 
 * Version 1.04: October 4, 2020
 * * Feature Update!
 * ** Certain windows will now pre-load all associated image types for the
 *    actor upon being created to avoid custom JS drawing problems.
 *    Change made by Irina.
 * ** Failsafes have been added to prevent non-existent variables from crashing
 *    the game if a user does not remove them from the variable list. Change
 *    made by Irina.
 * 
 * Version 1.03: September 20, 2020
 * * Documentation Update!
 * ** Added the alternative notetag <Menu Portrait: filename> that also works
 *    the same way as <Menu Image: filename>.
 * 
 * Version 1.02: September 13, 2020
 * * Compatibility Update!
 * ** Better compatibility for SV Actor graphics.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Skill check plugin parameter for show fixed. Fixed by Yanfly and Shaz.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Command Window List > skill >
 *     JS: Show > and changing 'this.needsCommand("item")' to
 *     'this.needsCommand("skill")'
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
 * @command ChangeActorMenuImageGroup
 * @text Actor: Change Menu Image (Group)
 * @desc Changes the actor's Menu Image.
 * Select from a group of actor ID's to change.
 *
 * @arg Step1:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageRange
 * @text Actor: Change Menu Image (Range)
 * @desc Changes the actor's Menu Image.
 * Select from a range of actor ID's to change.
 *
 * @arg Step1
 * @text Actor ID Range
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to end at.
 * @default 4
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageJS
 * @text Actor: Change Menu Image (JS) (Legacy)
 * @desc Changes the actor's Menu Image.
 * Select from a group of actor ID's using JavaScript.
 *
 * @arg Step1:arrayeval
 * @text Actor ID(s)
 * @type string[]
 * @desc Enter which Actor ID(s) to affect.
 * You may use JavaScript code.
 * @default ["$gameVariables.value(1)"]
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageJS_v124
 * @text Actor: Change Menu Image (JS) (v1.24)
 * @desc Changes an actor's Menu Image using JavaScript.
 * Allows more control with more text entry.
 *
 * @arg ActorJS:func
 * @text JS: Actor ID
 * @type note
 * @desc Enter which Actor ID to affect.
 * Uses JavaScript code.
 * @default "// Get Actor ID here.\nlet actorID = 0;\nactorID = $gameParty.members()[0].actorId();\n\n// Return Actor ID\nreturn actorID;"
 *
 * @arg FilenameJS:func
 * @text JS: Filename
 * @type note
 * @desc Enter the filename you wish to use.
 * Uses JavaScript code.
 * @default "// Get Filename here.\nlet filename = 'Actor1_';\nfilename += String(Math.randomInt(8) + 1);\n\n// Return Filename\nreturn filename;"
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MenuCommand
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandClear
 * @text Menu Command: Clear Forced Settings
 * @desc Clear any forced settings for the menu command symbols.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceDisable
 * @text Menu Command: Force Disable
 * @desc Forcefully disable specific menu commands via their symbols.
 * Matching forced enabled symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceEnable
 * @text Menu Command: Force Enable
 * @desc Forcefully enable specific menu commands via their symbols.
 * Matching forced disabled symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceHide
 * @text Menu Command: Force Hide
 * @desc Forcefully hide specific menu commands via their symbols.
 * Matching forced shown symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceShow
 * @text Menu Command: Force Show
 * @desc Forcefully show specific menu commands via their symbols.
 * Matching forced hidden symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
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
 * @param MainMenuCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General settings pertaining to the Main Menu and related.
 * @default {"GoldWindow":"","ThinGoldWindow:eval":"true","AutoGoldHeight:eval":"true","AutoGoldY:eval":"true","StatusWindow":"","StatusSelectLast:eval":"false","SoloParty":"","SoloQuick:eval":"true","SubMenus":"","ActorBgMenus:arraystr":"[\"Scene_Skill\"]","ActorBgMenuJS:func":"\"this.anchor.x = 0.5;\\nconst scale = 1.25;\\nthis.scale.x = this.scale.y = scale;\\nthis.x = Graphics.width;\\nthis.y = Graphics.height - (this.bitmap.height * Math.abs(scale));\\nthis._targetX = Graphics.width * 3 / 4;\\nthis._targetY = Graphics.height - (this.bitmap.height * Math.abs(scale));\\nthis._duration = 10;\\nthis.opacity = 0;\"","PartyWindow":"","ShowReserve:eval":"true","HideMainMenuOnly:eval":"true"}
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @parent General:struct
 * @type struct<Command>[]
 * @desc Window commands used by the Main Menu.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"item\",\"Icon:num\":\"208\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.item;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"item\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandItem();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"classChange\",\"Icon:num\":\"133\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.classChangeMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    this.isClassChangeCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled() &&\\\\n    this.isClassChangeCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_ClassChange);\\\"\"}","{\"Symbol:str\":\"skill\",\"Icon:num\":\"101\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.skill;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"skill\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Skill);\\\"\"}","{\"Symbol:str\":\"equip\",\"Icon:num\":\"137\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.equip;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"equip\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Equip);\\\"\"}","{\"Symbol:str\":\"status\",\"Icon:num\":\"82\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.status;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"status\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Status);\\\"\"}","{\"Symbol:str\":\"itemCrafting\",\"Icon:num\":\"223\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.ItemCraftingMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_ItemCraftingSys &&\\\\n    this.isItemCraftingCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isItemCraftingCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandItemCrafting();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"subcategory\",\"Subcategory:str\":\"\",\"Icon:num\":\"230\",\"TextStr:str\":\"Datalog\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return this.isSubcategoryVisible(arguments[1]);\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"// This becomes the subcategory name. Case-sensitive.\\\\n\\\\nreturn 'datalog';\\\"\",\"CallHandlerJS:func\":\"\\\"const ext = arguments[0];\\\\nthis.setSubcategory(ext);\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"quest\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"186\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.questCommandName;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_QuestSystem &&\\\\n    this.isQuestCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isQuestCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandQuest();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"bestiary\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"10\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.BestiaryMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_Bestiary &&\\\\n    this.isBestiaryCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isBestiaryCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandBestiary();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"tutorialList\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"187\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.tutorial.menuCmd;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_TutorialPanelSys &&\\\\n    this.isTutorialListCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isTutorialListCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandTutorialList();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"messageLog\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"193\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.MessageLogMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_3_MessageLog &&\\\\n    this.isMessageLogCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isMessageLogCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandMessageLog();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"combatLog\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"189\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.combatLog_BattleCmd_Name;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CombatLog &&\\\\n    this.isCombatLogCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCombatLogCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCombatLog();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"cgGallery\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"311\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.cgGalleryMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CGGallery &&\\\\n    this.isCgGalleryCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCgGalleryCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCgGallery();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"creditsPage\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"193\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.CreditsPageMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CreditsPage &&\\\\n    this.isCreditsPageCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCreditsPageCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCreditsPage();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"patchNotes\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"83\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.PatchNotesMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_PatchNotes &&\\\\n    this.isPatchNotesCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isPatchNotesCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPatchNotes();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"formation\",\"Icon:num\":\"75\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.formation;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"formation\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isFormationEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandFormation();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"battleGridTactics\",\"Subcategory:str\":\"\",\"Icon:num\":\"76\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.BattleGridTacticsMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_BattleGridSystem &&\\\\n    this.isBattleGridTacticsCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isBattleGridTacticsCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandBattleGridTactics();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"options\",\"Icon:num\":\"83\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"options\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isOptionsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"save\",\"Icon:num\":\"189\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.save;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"save\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isSaveEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandSave();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"load\",\"Icon:num\":\"191\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return 'Load';\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"save\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandLoad();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"commonEvent1\",\"Icon:num\":\"88\",\"TextStr:str\":\"Common Event 1\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return false;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return 1;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCommonEvent();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"commonEvent2\",\"Icon:num\":\"87\",\"TextStr:str\":\"Common Event 2\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return false;\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return 2;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"// Declare Ext\\\\nconst ext = arguments[0];\\\\n\\\\n// Declare Status Window\\\\nconst statusWindow = SceneManager._scene._statusWindow;\\\\n\\\\n// Declare Actor ID\\\\nconst actorId = statusWindow.actor(statusWindow.index()).actorId();\\\\n\\\\n// Set variable 1 to Actor ID\\\\n$gameVariables.setValue(1, actorId);\\\\n\\\\n// Prepare Common Event ext to run\\\\n$gameTemp.reserveCommonEvent(ext);\\\\n\\\\n// Exit Main Menu\\\\nSceneManager._scene.popScene();\\\"\"}","{\"Symbol:str\":\"gameEnd\",\"Icon:num\":\"187\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"gameEnd\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isGameEndEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandGameEnd();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}"]
 *
 * @param Playtime:struct
 * @text Playtime Window
 * @type struct<Playtime>
 * @desc Settings for the Playtime Window.
 * @default {"Enable:eval":"true","AdjustCommandHeight:func":"true","BgType:num":"0","FontSize:num":"24","Icon:num":"75","Time:str":"Time","WindowRect:func":"\"const rows = 1;\\nconst ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(rows, false);\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nlet wy = this.mainAreaBottom() - wh;\\nif (this._goldWindow) wy -= this._goldWindow.height;\\nif (this.canCreateVariableWindow()) wy -= this.variableWindowRect().height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param Variable:struct
 * @text Variable Window
 * @type struct<Variable>
 * @desc Settings for the Variable Window.
 * @default {"Enable:eval":"false","AdjustCommandHeight:func":"true","BgType:num":"0","FontSize:num":"24","VarList:arraynum":"[\"1\",\"2\"]","WindowRect:func":"\"const rows = VisuMZ.MainMenuCore.Settings.Variable.VarList.length;\\nconst ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(rows, false);\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nlet wy = this.mainAreaBottom() - wh;\\nif (this._goldWindow) wy -= this._goldWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param ParamBreak1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param CommandWindowStyle:str
 * @text Command Window Style
 * @type select
 * @option Default Vertical Side Style
 * @value default
 * @option Top Horizontal Style
 * @value top
 * @option Thin Top Horizontal Style
 * @value thinTop
 * @option Bottom Horizontal Style
 * @value bottom
 * @option Thin Bottom Horizontal Style
 * @value thinBottom
 * @option Mobile Full Screen Style
 * @value mobile
 * @desc Choose the positioning and style of the Main Menu Command Window. This will automatically rearrange windows.
 * @default top
 *
 * @param CustomCmdWin:struct
 * @text Command Style Settings
 * @parent CommandWindowStyle:str
 * @type struct<CustomCmdWin>
 * @desc Settings for the non-default Command Window Styles.
 * @default {"Style:str":"auto","TextAlign:str":"center","Rows:num":"2","Cols:num":"4","MobileThickness:num":"5"}
 *
 * @param ParamBreak2
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param StatusGraphic:str
 * @text Status Graphic
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler
 * @value svbattler
 * @desc Choose how the actor graphics appear in status-like menus.
 * @default face
 *
 * @param StatusListStyle:str
 * @text Main Menu List Style
 * @type select
 * @option Default Horizontal Style
 * @value default
 * @option Vertical Style
 * @value vertical
 * @option Portrait Style
 * @value portrait
 * @option Solo Style
 * @value solo
 * @option Thin Horizontal Style
 * @value thin
 * @option Thicker Horizontal Style
 * @value thicker
 * @desc Choose how the actor status list looks in the Main Menu.
 * We're not responsible for visual incompatibilities.
 * @default portrait
 *
 * @param InnerMenuListStyle:str
 * @text Inner-Menu List Style
 * @parent StatusListStyle:str
 * @type select
 * @option Default Horizontal Style
 * @value default
 * @option Vertical Style
 * @value vertical
 * @option Portrait Style
 * @value portrait
 * @option Solo Style
 * @value solo
 * @option Thin Horizontal Style
 * @value thin
 * @option Thicker Horizontal Style
 * @value thicker
 * @desc Choose how the actor status list looks in the inner menus
 * like Scene_Item, Scene_Skill, etc.
 * @default default
 *
 * @param ListStyles:struct
 * @text List Style Settings
 * @parent StatusListStyle:str
 * @type struct<ListStyles>
 * @desc JavaScript code used to determine how the individual styles are drawn.
 * @default {"DefaultStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst sx = rect.x + 180;\\nconst sy = rect.y + rect.height / 2 - this.lineHeight() * 1.5;\\nconst lineHeight = this.lineHeight();\\nconst sx2 = sx + 180;\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorLevel(actor, sx, sy + lineHeight * 1);\\nthis.drawActorIcons(actor, sx, sy + lineHeight * 2);\\nthis.drawActorClass(actor, sx2, sy);\\n\\n// Place Gauges\\nconst sy2 = sy + lineHeight;\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nthis.placeGauge(actor, \\\"hp\\\", sx2, sy2);\\nthis.placeGauge(actor, \\\"mp\\\", sx2, sy2 + gaugeLineHeight);\\nconst roomForTp = (sy2 + gaugeLineHeight * 3) <= rect.y + rect.height;\\nif ($dataSystem.optDisplayTp && roomForTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx2, sy2 + gaugeLineHeight * 2);\\n}\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nconst sx3 = sx2 + 180;\\nconst sw = rect.width - sx3 - 2;\\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    const pw = Math.floor(sw / 2) - 24;\\n    let px = sx3;\\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, py, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            py += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n}\"","VerticalStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\\n\\n// Draw Actor Graphic\\nconst gw = rect.width;\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nconst gx = rect.x;\\nconst gy = Math.max(rect.y, rect.y + (rect.height - totalHeight - gh) / 2);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Actor Name\\nlet sx = rect.x;\\nlet sy = Math.max(gy + gh, rect.y + (rect.height - totalHeight + gh) / 2);\\nlet sw = rect.width;\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Draw Gauges\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nif ($dataSystem.optDisplayTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n}\"","PortraitStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Make Constants\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\\n\\n// Draw Actor Graphic\\nconst gw = rect.width;\\nconst gh = rect.height;\\nconst gx = rect.x;\\nconst gy = rect.y;\\nthis.drawItemActorMenuImage(actor, gx, gy, gw, gh);\\n\\n// Draw Dark Rectangle\\nlet sx = rect.x;\\nlet sy = Math.max(rect.y, rect.y + (rect.height - totalHeight));\\nlet sw = rect.width;\\nlet sh = rect.y + rect.height - sy;\\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\\n\\n// Draw Actor Name\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Draw Gauges\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nif ($dataSystem.optDisplayTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n}\"","SoloStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Make Constants\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\n\\n// Draw Actor Graphic\\nlet sx = rect.x;\\nlet sy = rect.y;\\nlet sw = rect.width;\\nlet sh = rect.height;\\n\\n// Portrait\\nif (actor.getMenuImage() !== '') {\\n    this.drawItemActorMenuImage(actor, rect.x, rect.y, rect.width, rect.height);\\n\\n// Everything Else\\n} else {\\n    const gx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - ImageManager.faceWidth) / 2));\\n    const gy = Math.max(0, rect.y + rect.height - Math.ceil(lineHeight * 4.5) - ImageManager.faceHeight);\\n    this.drawActorGraphic(actor, gx, gy, ImageManager.faceWidth, ImageManager.faceHeight);\\n}\\n\\n// Draw Dark Rectangle\\nsh = Math.ceil(lineHeight * 4.5);\\nsy = rect.y + rect.height - sh;\\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\\n\\n// Draw Actor Name\\nsw = Math.round(rect.width / 2);\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - 128) / 2));\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round(((rect.width / 2) - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round(((rect.width / 2) - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Prepare Stat Coordinates\\nsx = rect.x + Math.floor(rect.width / 2);\\nsw = rect.width / 2;\\nsh = rect.height;\\nconst sx3 = sx;\\nconst cw = rect.width - sx3 - 2;\\n\\n// Prepare Total Content Height to vertically center the content.\\nlet totalHeight = gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    totalHeight += lineHeight;\\n    totalHeight += Math.ceil(params.length / 2) * gaugeLineHeight;\\n}\\nconst equips = actor.equips();\\ntotalHeight += lineHeight;\\ntotalHeight += equips.length * lineHeight;\\nsy = Math.max(rect.y, rect.y + Math.floor((rect.height - totalHeight) / 2));\\n\\n// Place Gauges\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nif ($dataSystem.optDisplayTp) {\\n    sy += gaugeLineHeight;\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n    sy += gaugeLineHeight;\\n}\\nlet ny = sy;\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    sy += lineHeight;\\n    const pw = Math.floor(cw / 2) - 24;\\n    let px = sx3;\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, sy, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, sy, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            sy += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n    ny += lineHeight;\\n    ny += Math.ceil(params.length / 2) * gaugeLineHeight;\\n}\\n\\n// Draw Actor Equipment\\nthis.resetFontSettings();\\nsx = rect.x + Math.floor(rect.width / 2);\\nsy = ny + lineHeight;\\nsw = rect.width / 2;\\nfor (const equip of equips) {\\n    if (equip) {\\n        this.drawItemName(equip, sx, sy, sw);\\n        sy += lineHeight;\\n        if (sy + lineHeight > rect.y + rect.height) return;\\n    }\\n}\"","ThinStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst lineHeight = this.lineHeight();\\nlet sx = rect.x + 160;\\nlet sy = rect.y + ((rect.height - lineHeight) / 2) - 2;\\n\\n// Draw Actor Data\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\\n\\n// Place Gauges\\nsx += 180;\\nsy += (lineHeight - this.gaugeLineHeight()) / 2;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsx += 140;\\nif ((sx + 128) > rect.x + rect.width) return;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsx += 140;\\nif ((sx + 128) > rect.x + rect.width) return;\\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \\\"tp\\\", sx, sy);\"","ThickerStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nlet sx = rect.x + 160;\\nlet sy = rect.y + ((rect.height - (lineHeight * 2)) / 2) - 2;\\n\\n// Draw Actor Data\\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorClass(actor, sx, sy + lineHeight);\\n//this.drawActorLevel(actor, sx, sy + lineHeight);\\n\\n// Place Gauges\\nsx += 180;\\nsy = rect.y + ((rect.height - (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2))) / 2) - 2;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy + gaugeLineHeight);\\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \\\"tp\\\", sx, sy + (gaugeLineHeight * 2));\\nsx += 160;\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nconst sx3 = sx;\\nconst sw = rect.width - sx3 - 2;\\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    const pw = Math.floor(sw / 2) - 24;\\n    sy = rect.y + ((rect.height - (gaugeLineHeight * Math.ceil(params.length / 2))) / 2) - 2;\\n    let px = sx3;\\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, py, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            py += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n}\""}
 *
 * @param ParamBreak3
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MouseCursor:struct
 * @text Custom Mouse Cursor
 * @type struct<MouseCursor>
 * @desc Add/enable a custom mouse cursor for your game.
 * @default {"General":"","Enable:eval":"true","Graphics":"","idleFilenameIcon:str":"","clickFilenameIcon:str":"","Anchor":"","anchorX:num":"0.0","anchorY:num":"0.0"}
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
 * Commands Struct
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc The symbol used for this command.
 * @default Symbol
 *
 * @param Subcategory:str
 * @text Subcategory
 * @desc The subcategory used for this command.
 * Leave empty for no subcategory.
 * @default 
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this command.
 * Use 0 for no icon.
 * @default 0
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this menu command.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param ShowJS:func
 * @text JS: Show
 * @type note
 * @desc JavaScript code used to determine if the item is shown or not.
 * @default "return true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @type note
 * @desc JavaScript code used to determine if the item is enabled or not.
 * @default "return true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @type note
 * @desc JavaScript code used to determine any ext data that should be added.
 * @default "return null;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this command is selected.
 * @default "const ext = arguments[0];"
 *
 * @param PersonalHandlerJS:func
 * @text JS: Personal Code
 * @type note
 * @desc JavaScript code that runs once the actor list is selected with this command highlighted.
 * @default "const ext = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param ThinGoldWindow:eval
 * @text Thinner Gold Window
 * @parent GoldWindow
 * @type boolean
 * @on Thinner
 * @off Normal
 * @desc Make the Gold Window thinner in the Main Menu?
 * Used to match the Playtime and Variable Windows.
 * @default true
 *
 * @param AutoGoldHeight:eval
 * @text Auto Adjust Height
 * @parent GoldWindow
 * @type boolean
 * @on Automatic
 * @off Manual
 * @desc Automatically adjust the height for the thinner Gold Window?
 * @default true
 *
 * @param AutoGoldY:eval
 * @text Auto Adjust Y
 * @parent GoldWindow
 * @type boolean
 * @on Automatic
 * @off Manual
 * @desc Automatically adjust the Y position for the thinner Gold Window?
 * @default true
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusSelectLast:eval
 * @text Select Last?
 * @parent StatusWindow
 * @type boolean
 * @on Last Picked Actor
 * @off Always First Actor
 * @desc When picking a personal command from the Command Window,
 * select the last picked actor or always the first?
 * @default false
 *
 * @param SoloParty
 * @text Solo Party
 *
 * @param SoloQuick:eval
 * @text Solo Quick Mode
 * @parent SoloParty
 * @type boolean
 * @on Quick
 * @off Normal
 * @desc When selecting "Skills", "Equip", or "Status" with one party member, immediately go to the scene.
 * @default true
 *
 * @param SubMenus
 * @text Sub Menus
 *
 * @param ActorBgMenus:arraystr
 * @text Menus with Actor BG's
 * @parent SubMenus
 * @type string[]
 * @desc A list of the menus that would be compatible with Actor Menu Backgrounds.
 * @default ["Scene_Skill","Scene_Equip","Scene_Status"]
 *
 * @param ActorBgMenuJS:func
 * @text JS: Actor BG Action
 * @parent SubMenus
 * @type note
 * @desc Code used to determine how to display the sprites upon loading.
 * @default "this.anchor.x = 0.5;\nconst scale = 1.25;\nthis.scale.x = this.scale.y = scale;\nthis.x = Graphics.width;\nthis.y = Graphics.height - (this.bitmap.height * Math.abs(scale));\nthis._targetX = Graphics.width * 3 / 4;\nthis._targetY = Graphics.height - (this.bitmap.height * Math.abs(scale));\nthis._duration = 10;\nthis.opacity = 0;"
 *
 * @param PartyWindow
 * @text Party Window
 *
 * @param ShowReserve:eval
 * @text Show Reserve Memebers
 * @parent PartyWindow
 * @type boolean
 * @on Show Reserve Members
 * @off Hide Reserve Members
 * @desc Show reserve members while on the Main Menu scene?
 * @default true
 *
 * @param HideMainMenuOnly:eval
 * @text Hide Main Menu Only
 * @parent ShowReserve:eval
 * @type boolean
 * @on Hide in Main Menu Only
 * @off Hide in all Scenes
 * @desc If reserve members are hidden, hide them only in the main menu or all scenes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Playtime Window
 * ----------------------------------------------------------------------------
 */
/*~struct~Playtime:
 *
 * @param Enable:eval
 * @text Use Window
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Use the Playtime Window?
 * @default true
 *
 * @param AdjustCommandHeight:eval
 * @text Adjust Command Window
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Adjust the command window's height to fit in the Playtime Window?
 * @default true
 *
 * @param BgType:num
 * @text Background Type
 * @type select
 * @option Window
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @desc Select background type for the Playtime window.
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside the Playtime window.
 * Default: 26
 * @default 20
 *
 * @param Icon:num
 * @text Time Icon
 * @desc Icon displayed for the 'Time' label.
 * @default 75
 *
 * @param Time:str
 * @text Time Text
 * @desc Text for the display of 'Time' in the Playtime window.
 * @default Time
 *
 * @param WindowRect:func
 * @text JS: X, Y, W, H
 * @type note
 * @desc Code used to determine the dimensions for the Playtime window.
 * @default "const rows = 1;\nconst ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(rows, false);\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nlet wy = this.mainAreaBottom() - wh;\nif (this._goldWindow) wy -= this._goldWindow.height;\nif (this.canCreateVariableWindow()) wy -= this.variableWindowRect().height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Variable Window
 * ----------------------------------------------------------------------------
 */
/*~struct~Variable:
 *
 * @param Enable:eval
 * @text Use Window
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Use the Variable Window?
 * @default false
 *
 * @param AdjustCommandHeight:eval
 * @text Adjust Command Window
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Adjust the command window's height to fit in the Variable Window?
 * @default true
 *
 * @param BgType:num
 * @text Background Type
 * @type select
 * @option Window
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @desc Select background type for the Variable window.
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside the Variable window.
 * Default: 26
 * @default 20
 *
 * @param VarList:arraynum
 * @text Variable List
 * @type variable[]
 * @desc Select variables to be displayed into the window.
 * Use \i[x] to determine their icon.
 * @default ["1","2","3"]
 *
 * @param WindowRect:func
 * @text JS: X, Y, W, H
 * @type note
 * @desc Code used to determine the dimensions for the Variable window.
 * @default "const rows = VisuMZ.MainMenuCore.Settings.Variable.VarList.length;\nconst ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(rows, false);\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nlet wy = this.mainAreaBottom() - wh;\nif (this._goldWindow) wy -= this._goldWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Horizontal Command Window Style
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomCmdWin:
 *
 * @param Style:str
 * @text Command Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw command entries in the Command Window?
 * @default auto
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Rows:num
 * @text Rows
 * @type number
 * @min 1
 * @desc Number of visible rows.
 * @default 2
 *
 * @param Cols:num
 * @text Columns
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 4
 *
 * @param MobileThickness:num
 * @text Mobile Thickness
 * @type number
 * @min 1
 * @desc The thickness of the buttons for mobile version.
 * @default 5
 *
 */
/* ----------------------------------------------------------------------------
 * List Style Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ListStyles:
 *
 * @param DefaultStyle:func
 * @text JS: Default
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + Math.floor((rect.height - gh) / 2);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst sx = rect.x + 180;\nconst sy = rect.y + rect.height / 2 - this.lineHeight() * 1.5;\nconst lineHeight = this.lineHeight();\nconst sx2 = sx + 180;\nthis.drawActorName(actor, sx, sy);\nthis.drawActorLevel(actor, sx, sy + lineHeight * 1);\nthis.drawActorIcons(actor, sx, sy + lineHeight * 2);\nthis.drawActorClass(actor, sx2, sy);\n\n// Place Gauges\nconst sy2 = sy + lineHeight;\nconst gaugeLineHeight = this.gaugeLineHeight();\nthis.placeGauge(actor, \"hp\", sx2, sy2);\nthis.placeGauge(actor, \"mp\", sx2, sy2 + gaugeLineHeight);\nconst roomForTp = (sy2 + gaugeLineHeight * 3) <= rect.y + rect.height;\nif ($dataSystem.optDisplayTp && roomForTp) {\n    this.placeGauge(actor, \"tp\", sx2, sy2 + gaugeLineHeight * 2);\n}\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nconst sx3 = sx2 + 180;\nconst sw = rect.width - sx3 - 2;\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    const pw = Math.floor(sw / 2) - 24;\n    let px = sx3;\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, py, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            py += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n}"
 *
 * @param VerticalStyle:func
 * @text JS: Vertical
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\n\n// Draw Actor Graphic\nconst gw = rect.width;\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nconst gx = rect.x;\nconst gy = Math.max(rect.y, rect.y + (rect.height - totalHeight - gh) / 2);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Actor Name\nlet sx = rect.x;\nlet sy = Math.max(gy + gh, rect.y + (rect.height - totalHeight + gh) / 2);\nlet sw = rect.width;\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Draw Gauges\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsy += gaugeLineHeight;\nif ($dataSystem.optDisplayTp) {\n    this.placeGauge(actor, \"tp\", sx, sy);\n}"
 *
 * @param PortraitStyle:func
 * @text JS: Portrait
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Make Constants\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\n\n// Draw Actor Graphic\nconst gw = rect.width;\nconst gh = rect.height;\nconst gx = rect.x;\nconst gy = rect.y;\nthis.drawItemActorMenuImage(actor, gx, gy, gw, gh);\n\n// Draw Dark Rectangle\nlet sx = rect.x;\nlet sy = Math.max(rect.y, rect.y + (rect.height - totalHeight));\nlet sw = rect.width;\nlet sh = rect.y + rect.height - sy;\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\n\n// Draw Actor Name\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Draw Gauges\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsy += gaugeLineHeight;\nif ($dataSystem.optDisplayTp) {\n    this.placeGauge(actor, \"tp\", sx, sy);\n}"
 *
 * @param SoloStyle:func
 * @text JS: Solo
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Make Constants\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\n\n// Draw Actor Graphic\nlet sx = rect.x;\nlet sy = rect.y;\nlet sw = rect.width;\nlet sh = rect.height;\n\n// Portrait\nif (actor.getMenuImage() !== '') {\n    this.drawItemActorMenuImage(actor, rect.x, rect.y, rect.width, rect.height);\n\n// Everything Else\n} else {\n    const gx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - ImageManager.faceWidth) / 2));\n    const gy = Math.max(0, rect.y + rect.height - Math.ceil(lineHeight * 4.5) - ImageManager.faceHeight);\n    this.drawActorGraphic(actor, gx, gy, ImageManager.faceWidth, ImageManager.faceHeight);\n}\n\n// Draw Dark Rectangle\nsh = Math.ceil(lineHeight * 4.5);\nsy = rect.y + rect.height - sh;\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\n\n// Draw Actor Name\nsw = Math.round(rect.width / 2);\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - 128) / 2));\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round(((rect.width / 2) - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round(((rect.width / 2) - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Prepare Stat Coordinates\nsx = rect.x + Math.floor(rect.width / 2);\nsw = rect.width / 2;\nsh = rect.height;\nconst sx3 = sx;\nconst cw = rect.width - sx3 - 2;\n\n// Prepare Total Content Height to vertically center the content.\nlet totalHeight = gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    totalHeight += lineHeight;\n    totalHeight += Math.ceil(params.length / 2) * gaugeLineHeight;\n}\nconst equips = actor.equips();\ntotalHeight += lineHeight;\ntotalHeight += equips.length * lineHeight;\nsy = Math.max(rect.y, rect.y + Math.floor((rect.height - totalHeight) / 2));\n\n// Place Gauges\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nif ($dataSystem.optDisplayTp) {\n    sy += gaugeLineHeight;\n    this.placeGauge(actor, \"tp\", sx, sy);\n    sy += gaugeLineHeight;\n}\nlet ny = sy;\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    sy += lineHeight;\n    const pw = Math.floor(cw / 2) - 24;\n    let px = sx3;\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, sy, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, sy, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            sy += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n    ny += lineHeight;\n    ny += Math.ceil(params.length / 2) * gaugeLineHeight;\n}\n\n// Draw Actor Equipment\nthis.resetFontSettings();\nsx = rect.x + Math.floor(rect.width / 2);\nsy = ny + lineHeight;\nsw = rect.width / 2;\nfor (const equip of equips) {\n    if (equip) {\n        this.drawItemName(equip, sx, sy, sw);\n        sy += lineHeight;\n        if (sy + lineHeight > rect.y + rect.height) return;\n    }\n}"
 *
 * @param ThinStyle:func
 * @text JS: Thin
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst lineHeight = this.lineHeight();\nlet sx = rect.x + 160;\nlet sy = rect.y + ((rect.height - lineHeight) / 2) - 2;\n\n// Draw Actor Data\nthis.drawActorName(actor, sx, sy);\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\n\n// Place Gauges\nsx += 180;\nsy += (lineHeight - this.gaugeLineHeight()) / 2;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsx += 140;\nif ((sx + 128) > rect.x + rect.width) return;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsx += 140;\nif ((sx + 128) > rect.x + rect.width) return;\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \"tp\", sx, sy);"
 *
 * @param ThickerStyle:func
 * @text JS: Thicker
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nlet sx = rect.x + 160;\nlet sy = rect.y + ((rect.height - (lineHeight * 2)) / 2) - 2;\n\n// Draw Actor Data\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\nthis.drawActorName(actor, sx, sy);\nthis.drawActorClass(actor, sx, sy + lineHeight);\n//this.drawActorLevel(actor, sx, sy + lineHeight);\n\n// Place Gauges\nsx += 180;\nsy = rect.y + ((rect.height - (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2))) / 2) - 2;\nthis.placeGauge(actor, \"hp\", sx, sy);\nthis.placeGauge(actor, \"mp\", sx, sy + gaugeLineHeight);\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \"tp\", sx, sy + (gaugeLineHeight * 2));\nsx += 160;\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nconst sx3 = sx;\nconst sw = rect.width - sx3 - 2;\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    const pw = Math.floor(sw / 2) - 24;\n    sy = rect.y + ((rect.height - (gaugeLineHeight * Math.ceil(params.length / 2))) / 2) - 2;\n    let px = sx3;\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, py, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            py += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n}"
 *
 */
/* ----------------------------------------------------------------------------
 * Mouse Cursor Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MouseCursor:
 *
 * @param General
 * @text General Settings
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Custom Cursor
 * @off Normal Cursor
 * @desc Enable custom cursor?
 * Requires a custom 'Idle' graphic.
 * @default true
 *
 * @param Graphics
 * @text Graphic Settings
 *
 * @param idleFilenameIcon:str
 * @text Idle Filename
 * @parent Graphics
 * @desc Located in game project's /icon/ folder.
 * Include .png extension (ie. Cursor1.png)
 * @default 
 *
 * @param clickFilenameIcon:str
 * @text Click Filename
 * @parent Graphics
 * @desc Optional. Located in game project's /icon/ folder.
 * Include .png extension (ie. Cursor2.png)
 * @default 
 *
 * @param Anchor
 * @text Anchor Settings
 *
 * @param anchorX:num
 * @text Anchor X
 * @parent Anchor
 * @desc Anchor X value for the custom cursor.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.0
 *
 * @param anchorY:num
 * @text Anchor Y
 * @parent Anchor
 * @desc Anchor Y value for the custom cursor.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.0
 *
 */
//=============================================================================

function _0x49c2(_0x42c3c1,_0x269988){const _0x4e2bc5=_0x4e2b();return _0x49c2=function(_0x49c2a7,_0x1f0856){_0x49c2a7=_0x49c2a7-0xf9;let _0x20a646=_0x4e2bc5[_0x49c2a7];return _0x20a646;},_0x49c2(_0x42c3c1,_0x269988);}const _0x4fb4fe=_0x49c2;(function(_0x5312b4,_0x21e50b){const _0x442ce4=_0x49c2,_0x5ee541=_0x5312b4();while(!![]){try{const _0x42034f=-parseInt(_0x442ce4(0x11c))/0x1+parseInt(_0x442ce4(0x25d))/0x2*(parseInt(_0x442ce4(0x21e))/0x3)+parseInt(_0x442ce4(0x1bd))/0x4*(parseInt(_0x442ce4(0x11f))/0x5)+-parseInt(_0x442ce4(0x1ac))/0x6+parseInt(_0x442ce4(0x11b))/0x7*(parseInt(_0x442ce4(0x120))/0x8)+parseInt(_0x442ce4(0x130))/0x9*(parseInt(_0x442ce4(0x29d))/0xa)+-parseInt(_0x442ce4(0x2a3))/0xb;if(_0x42034f===_0x21e50b)break;else _0x5ee541['push'](_0x5ee541['shift']());}catch(_0x113acc){_0x5ee541['push'](_0x5ee541['shift']());}}}(_0x4e2b,0x5bbdb));var label=_0x4fb4fe(0x18b),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x4fb4fe(0x201)](function(_0x3fd459){const _0x26b286=_0x4fb4fe;return _0x3fd459['status']&&_0x3fd459[_0x26b286(0x21d)]['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x4fb4fe(0x12b)]||{},VisuMZ['ConvertParams']=function(_0x2d6c36,_0x2148c3){const _0x315cfa=_0x4fb4fe;for(const _0x50a91a in _0x2148c3){if(_0x50a91a['match'](/(.*):(.*)/i)){const _0x1a3ee2=String(RegExp['$1']),_0x27db5c=String(RegExp['$2'])[_0x315cfa(0x235)]()[_0x315cfa(0x213)]();let _0x495f5e,_0x590ad1,_0x35df19;switch(_0x27db5c){case'NUM':_0x495f5e=_0x2148c3[_0x50a91a]!==''?Number(_0x2148c3[_0x50a91a]):0x0;break;case'ARRAYNUM':_0x590ad1=_0x2148c3[_0x50a91a]!==''?JSON[_0x315cfa(0x13a)](_0x2148c3[_0x50a91a]):[],_0x495f5e=_0x590ad1[_0x315cfa(0x10a)](_0x325aea=>Number(_0x325aea));break;case'EVAL':_0x495f5e=_0x2148c3[_0x50a91a]!==''?eval(_0x2148c3[_0x50a91a]):null;break;case'ARRAYEVAL':_0x590ad1=_0x2148c3[_0x50a91a]!==''?JSON[_0x315cfa(0x13a)](_0x2148c3[_0x50a91a]):[],_0x495f5e=_0x590ad1[_0x315cfa(0x10a)](_0x53e1bc=>eval(_0x53e1bc));break;case _0x315cfa(0xf9):_0x495f5e=_0x2148c3[_0x50a91a]!==''?JSON['parse'](_0x2148c3[_0x50a91a]):'';break;case _0x315cfa(0x200):_0x590ad1=_0x2148c3[_0x50a91a]!==''?JSON[_0x315cfa(0x13a)](_0x2148c3[_0x50a91a]):[],_0x495f5e=_0x590ad1[_0x315cfa(0x10a)](_0x422153=>JSON['parse'](_0x422153));break;case _0x315cfa(0x1ef):_0x495f5e=_0x2148c3[_0x50a91a]!==''?new Function(JSON[_0x315cfa(0x13a)](_0x2148c3[_0x50a91a])):new Function(_0x315cfa(0x258));break;case'ARRAYFUNC':_0x590ad1=_0x2148c3[_0x50a91a]!==''?JSON[_0x315cfa(0x13a)](_0x2148c3[_0x50a91a]):[],_0x495f5e=_0x590ad1['map'](_0xf38b7c=>new Function(JSON['parse'](_0xf38b7c)));break;case _0x315cfa(0x210):_0x495f5e=_0x2148c3[_0x50a91a]!==''?String(_0x2148c3[_0x50a91a]):'';break;case'ARRAYSTR':_0x590ad1=_0x2148c3[_0x50a91a]!==''?JSON[_0x315cfa(0x13a)](_0x2148c3[_0x50a91a]):[],_0x495f5e=_0x590ad1[_0x315cfa(0x10a)](_0xc96586=>String(_0xc96586));break;case'STRUCT':_0x35df19=_0x2148c3[_0x50a91a]!==''?JSON[_0x315cfa(0x13a)](_0x2148c3[_0x50a91a]):{},_0x2d6c36[_0x1a3ee2]={},VisuMZ[_0x315cfa(0x207)](_0x2d6c36[_0x1a3ee2],_0x35df19);continue;case _0x315cfa(0x238):_0x590ad1=_0x2148c3[_0x50a91a]!==''?JSON['parse'](_0x2148c3[_0x50a91a]):[],_0x495f5e=_0x590ad1[_0x315cfa(0x10a)](_0x45130e=>VisuMZ['ConvertParams']({},JSON['parse'](_0x45130e)));break;default:continue;}_0x2d6c36[_0x1a3ee2]=_0x495f5e;}}return _0x2d6c36;},(_0x12df77=>{const _0x35baea=_0x4fb4fe,_0x109645=_0x12df77[_0x35baea(0x269)];for(const _0x15aec2 of dependencies){if(!Imported[_0x15aec2]){alert(_0x35baea(0x179)['format'](_0x109645,_0x15aec2)),SceneManager[_0x35baea(0x1bc)]();break;}}const _0x36f7a1=_0x12df77[_0x35baea(0x21d)];if(_0x36f7a1['match'](/\[Version[ ](.*?)\]/i)){const _0x224356=Number(RegExp['$1']);_0x224356!==VisuMZ[label][_0x35baea(0x140)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x35baea(0x20d)](_0x109645,_0x224356)),SceneManager[_0x35baea(0x1bc)]());}if(_0x36f7a1[_0x35baea(0x117)](/\[Tier[ ](\d+)\]/i)){const _0x587479=Number(RegExp['$1']);_0x587479<tier?(alert(_0x35baea(0x25e)[_0x35baea(0x20d)](_0x109645,_0x587479,tier)),SceneManager[_0x35baea(0x1bc)]()):tier=Math[_0x35baea(0x29f)](_0x587479,tier);}VisuMZ[_0x35baea(0x207)](VisuMZ[label][_0x35baea(0x12b)],_0x12df77[_0x35baea(0x241)]);})(pluginData),PluginManager[_0x4fb4fe(0x1e0)](pluginData[_0x4fb4fe(0x269)],_0x4fb4fe(0x20b),_0x793791=>{const _0x33eb96=_0x4fb4fe;VisuMZ[_0x33eb96(0x207)](_0x793791,_0x793791);const _0x40d382=_0x793791['Step1'],_0x47a041=_0x793791[_0x33eb96(0x1cc)];for(let _0x244be4 of _0x40d382){_0x244be4=parseInt(_0x244be4)||0x0;if(_0x244be4<=0x0)continue;const _0x39f8aa=$gameActors[_0x33eb96(0x196)](_0x244be4);if(!_0x39f8aa)continue;_0x39f8aa[_0x33eb96(0x136)](_0x47a041);}}),PluginManager[_0x4fb4fe(0x1e0)](pluginData[_0x4fb4fe(0x269)],_0x4fb4fe(0x126),_0x544efd=>{const _0x3aa389=_0x4fb4fe;VisuMZ[_0x3aa389(0x207)](_0x544efd,_0x544efd);const _0x2dc017=_0x544efd[_0x3aa389(0x245)]>=_0x544efd[_0x3aa389(0x26d)]?_0x544efd[_0x3aa389(0x26d)]:_0x544efd[_0x3aa389(0x245)],_0x105fae=_0x544efd[_0x3aa389(0x245)]>=_0x544efd[_0x3aa389(0x26d)]?_0x544efd[_0x3aa389(0x245)]:_0x544efd[_0x3aa389(0x26d)],_0x11200d=Array(_0x105fae-_0x2dc017+0x1)['fill']()[_0x3aa389(0x10a)]((_0x17292b,_0x523a9e)=>_0x2dc017+_0x523a9e),_0x18f3f7=_0x544efd[_0x3aa389(0x1cc)];for(let _0x2fcda2 of _0x11200d){_0x2fcda2=parseInt(_0x2fcda2)||0x0;if(_0x2fcda2<=0x0)continue;const _0x5f4748=$gameActors[_0x3aa389(0x196)](_0x2fcda2);if(!_0x5f4748)continue;_0x5f4748[_0x3aa389(0x136)](_0x18f3f7);}}),PluginManager[_0x4fb4fe(0x1e0)](pluginData['name'],_0x4fb4fe(0x135),_0x463134=>{const _0x1e059a=_0x4fb4fe;VisuMZ[_0x1e059a(0x207)](_0x463134,_0x463134);const _0x1aad64=_0x463134[_0x1e059a(0x1b8)];let _0x28875e=[];while(_0x1aad64[_0x1e059a(0x224)]>0x0){const _0x4ee8bb=_0x1aad64[_0x1e059a(0x1f1)]();Array['isArray'](_0x4ee8bb)?_0x28875e=_0x28875e[_0x1e059a(0x1c0)](_0x4ee8bb):_0x28875e['push'](_0x4ee8bb);}const _0x178e55=_0x463134[_0x1e059a(0x1cc)];for(let _0x5b680f of _0x28875e){_0x5b680f=parseInt(_0x5b680f)||0x0;if(_0x5b680f<=0x0)continue;const _0x3b8817=$gameActors['actor'](_0x5b680f);if(!_0x3b8817)continue;_0x3b8817[_0x1e059a(0x136)](_0x178e55);}}),PluginManager[_0x4fb4fe(0x1e0)](pluginData['name'],_0x4fb4fe(0x216),_0x35c0ff=>{const _0x540b1b=_0x4fb4fe;VisuMZ['ConvertParams'](_0x35c0ff,_0x35c0ff);const _0x3711dc=_0x35c0ff[_0x540b1b(0x243)](),_0x12833e=$gameActors[_0x540b1b(0x196)](_0x3711dc)||null;if(!_0x12833e){console[_0x540b1b(0x101)](_0x540b1b(0x1eb));return;}const _0x1d48f6=_0x35c0ff[_0x540b1b(0x2b6)]();_0x12833e[_0x540b1b(0x136)](_0x1d48f6);}),PluginManager[_0x4fb4fe(0x1e0)](pluginData[_0x4fb4fe(0x269)],_0x4fb4fe(0x242),_0x18f4dd=>{const _0x5cd683=_0x4fb4fe;VisuMZ[_0x5cd683(0x207)](_0x18f4dd,_0x18f4dd);const _0x4ad1fb=_0x18f4dd[_0x5cd683(0x14b)]||[];for(const _0x231c20 of _0x4ad1fb){$gameSystem[_0x5cd683(0x2ad)](_0x231c20);}}),PluginManager['registerCommand'](pluginData[_0x4fb4fe(0x269)],_0x4fb4fe(0x10c),_0x42ac93=>{const _0x18f982=_0x4fb4fe;VisuMZ['ConvertParams'](_0x42ac93,_0x42ac93);const _0x46e845=_0x42ac93['Symbols']||[];for(const _0x4658aa of _0x46e845){$gameSystem[_0x18f982(0x274)](_0x4658aa);}}),PluginManager[_0x4fb4fe(0x1e0)](pluginData[_0x4fb4fe(0x269)],_0x4fb4fe(0x279),_0x28fdf4=>{const _0xfe5a83=_0x4fb4fe;VisuMZ[_0xfe5a83(0x207)](_0x28fdf4,_0x28fdf4);const _0x2d747e=_0x28fdf4[_0xfe5a83(0x14b)]||[];for(const _0x217786 of _0x2d747e){$gameSystem[_0xfe5a83(0x256)](_0x217786);}}),PluginManager[_0x4fb4fe(0x1e0)](pluginData[_0x4fb4fe(0x269)],_0x4fb4fe(0x109),_0x155d9e=>{const _0x379ad2=_0x4fb4fe;VisuMZ['ConvertParams'](_0x155d9e,_0x155d9e);const _0x4cd7f1=_0x155d9e[_0x379ad2(0x14b)]||[];for(const _0x581b01 of _0x4cd7f1){$gameSystem[_0x379ad2(0x20a)](_0x581b01);}}),PluginManager[_0x4fb4fe(0x1e0)](pluginData[_0x4fb4fe(0x269)],_0x4fb4fe(0x17b),_0x43898b=>{const _0x192ad5=_0x4fb4fe;VisuMZ[_0x192ad5(0x207)](_0x43898b,_0x43898b);const _0x29aa74=_0x43898b['Symbols']||[];for(const _0x112672 of _0x29aa74){$gameSystem[_0x192ad5(0x16b)](_0x112672);}}),VisuMZ['MainMenuCore']['Scene_Boot_loadSystemImages_MC']=Scene_Boot[_0x4fb4fe(0x254)][_0x4fb4fe(0x15a)],Scene_Boot[_0x4fb4fe(0x254)]['loadSystemImages']=function(){const _0x2c5b2f=_0x4fb4fe;VisuMZ['MainMenuCore'][_0x2c5b2f(0x218)][_0x2c5b2f(0x21f)](this),VisuMZ[_0x2c5b2f(0x18b)][_0x2c5b2f(0x1e5)]()&&VisuMZ[_0x2c5b2f(0x18b)][_0x2c5b2f(0x1ff)]();},VisuMZ[_0x4fb4fe(0x18b)][_0x4fb4fe(0x1e5)]=function(){const _0x122df7=_0x4fb4fe;if(Utils[_0x122df7(0x261)]())return![];const _0x218d35=VisuMZ[_0x122df7(0x18b)][_0x122df7(0x12b)][_0x122df7(0x232)];if(!_0x218d35[_0x122df7(0x251)])return![];if(_0x218d35[_0x122df7(0x20e)]&&_0x218d35[_0x122df7(0x20e)][_0x122df7(0x224)]>0x0)return!![];return _0x218d35[_0x122df7(0x195)]&&_0x218d35[_0x122df7(0x195)]['length']>0x0;},VisuMZ[_0x4fb4fe(0x18b)]['SetupCustomCursor']=function(){const _0x201bd5=_0x4fb4fe,_0x7f36e3=VisuMZ[_0x201bd5(0x18b)]['Settings'][_0x201bd5(0x232)];if(_0x7f36e3[_0x201bd5(0x20e)]!==undefined||_0x7f36e3[_0x201bd5(0x288)]!==undefined){let _0x1fb48c=_0x201bd5(0x21c);_0x1fb48c+=_0x201bd5(0x192),_0x1fb48c+=_0x201bd5(0x208),_0x1fb48c+=_0x201bd5(0x1ca),_0x1fb48c+=_0x201bd5(0x1c4),alert(_0x1fb48c),SceneManager[_0x201bd5(0x1bc)]();return;}const _0x27c341=_0x201bd5(0x2a8)+_0x7f36e3[_0x201bd5(0x195)],_0x821976='icon/'+(_0x7f36e3[_0x201bd5(0x219)]||_0x7f36e3[_0x201bd5(0x195)]),_0x16bf04=new Image();_0x16bf04[_0x201bd5(0x257)]=_0x27c341,_0x16bf04[_0x201bd5(0x28d)]=function(){const _0x32aedb=_0x201bd5,_0x5ca628=document[_0x32aedb(0x23b)](_0x32aedb(0x24b));_0x5ca628[_0x32aedb(0x1e3)][_0x32aedb(0x113)]='absolute',_0x5ca628[_0x32aedb(0x1e3)][_0x32aedb(0x244)]=_0x16bf04[_0x32aedb(0x244)]+'px',_0x5ca628[_0x32aedb(0x1e3)][_0x32aedb(0x1f4)]=_0x16bf04[_0x32aedb(0x1f4)]+'px',_0x5ca628[_0x32aedb(0x1e3)][_0x32aedb(0x143)]=_0x32aedb(0x1f0)+_0x27c341+')',_0x5ca628['style'][_0x32aedb(0x1d5)]=_0x32aedb(0x1d2),_0x5ca628[_0x32aedb(0x1e3)]['zIndex']=_0x32aedb(0x2a9),_0x5ca628[_0x32aedb(0x1e3)][_0x32aedb(0x1b6)]=_0x32aedb(0x1d2),document[_0x32aedb(0x204)][_0x32aedb(0x298)](_0x5ca628),document[_0x32aedb(0x204)][_0x32aedb(0x1e3)][_0x32aedb(0x1b0)]='none',document[_0x32aedb(0x204)][_0x32aedb(0x1e3)][_0x32aedb(0x26b)]=_0x32aedb(0x289),document[_0x32aedb(0x290)](_0x32aedb(0x18c),function(_0x3c5f37){const _0x55a0e5=_0x32aedb;_0x5ca628[_0x55a0e5(0x1e3)][_0x55a0e5(0x1b6)]='';let _0x4555e3=_0x3c5f37[_0x55a0e5(0x139)],_0x1860c8=_0x3c5f37['pageY'];_0x4555e3<=0x0&&_0x1860c8<=0x0&&(_0x4555e3+=Graphics[_0x55a0e5(0x244)]*0xa,_0x1860c8+=Graphics['height']*0xa),_0x4555e3-=Math[_0x55a0e5(0x1ec)](_0x7f36e3['anchorX']*_0x16bf04[_0x55a0e5(0x244)]),_0x1860c8-=Math[_0x55a0e5(0x1ec)](_0x7f36e3['anchorY']*_0x16bf04[_0x55a0e5(0x1f4)]),_0x5ca628[_0x55a0e5(0x1e3)][_0x55a0e5(0x17a)]=_0x4555e3+'px',_0x5ca628[_0x55a0e5(0x1e3)][_0x55a0e5(0x2b4)]=_0x1860c8+'px';}),document[_0x32aedb(0x290)](_0x32aedb(0x199),function(_0x50cd41){const _0x5be687=_0x32aedb,_0x4628c4=_0x50cd41[_0x5be687(0x26a)][0x0];let _0x32d44e=_0x4628c4[_0x5be687(0x139)],_0x86fc51=_0x4628c4[_0x5be687(0x209)];_0x32d44e-=Math['round'](_0x7f36e3[_0x5be687(0x1b7)]*_0x16bf04[_0x5be687(0x244)]),_0x86fc51-=Math['round'](_0x7f36e3['anchorY']*_0x16bf04[_0x5be687(0x1f4)]),_0x5ca628[_0x5be687(0x1e3)][_0x5be687(0x17a)]=_0x32d44e+'px',_0x5ca628[_0x5be687(0x1e3)][_0x5be687(0x2b4)]=_0x86fc51+'px';}),document[_0x32aedb(0x290)]('mousedown',function(){const _0x3ddb00=_0x32aedb;_0x5ca628[_0x3ddb00(0x1e3)][_0x3ddb00(0x143)]=_0x3ddb00(0x1f0)+_0x821976+')';}),document[_0x32aedb(0x290)](_0x32aedb(0x215),function(){const _0xde775e=_0x32aedb;_0x5ca628['style']['backgroundImage']=_0xde775e(0x1f0)+_0x27c341+')';});},_0x16bf04[_0x201bd5(0x145)]=function(){console['error']('Custom\x20cursor\x20image\x20failed\x20to\x20load.');};},VisuMZ[_0x4fb4fe(0x18b)]['SceneManager_push']=SceneManager['push'],SceneManager[_0x4fb4fe(0x268)]=function(_0x5dbb8c){const _0x5b2774=_0x4fb4fe;_0x5dbb8c===Scene_Menu&&($gameTemp['_mainMenuSubcategory']=undefined),VisuMZ[_0x5b2774(0x18b)]['SceneManager_push']['call'](this,_0x5dbb8c);},VisuMZ[_0x4fb4fe(0x18b)][_0x4fb4fe(0x118)]=Game_System[_0x4fb4fe(0x254)][_0x4fb4fe(0x153)],Game_System[_0x4fb4fe(0x254)]['initialize']=function(){const _0x2b0859=_0x4fb4fe;VisuMZ[_0x2b0859(0x18b)][_0x2b0859(0x118)][_0x2b0859(0x21f)](this),this[_0x2b0859(0x1fb)]();},Game_System['prototype']['initMainMenuCore']=function(){const _0x1a94fb=_0x4fb4fe;this[_0x1a94fb(0x1b2)]=this['_mainMenuCore']||{'forceShow':[],'forceHide':[],'forceEnable':[],'forceDisable':[]};},Game_System[_0x4fb4fe(0x254)][_0x4fb4fe(0x286)]=function(){const _0x2f6c92=_0x4fb4fe;if(this[_0x2f6c92(0x1b2)]===undefined)this[_0x2f6c92(0x1fb)]();const _0x6c27e1=[_0x2f6c92(0x276),_0x2f6c92(0x285),_0x2f6c92(0x108),_0x2f6c92(0x1df)];for(const _0x25105c of _0x6c27e1){this[_0x2f6c92(0x1b2)][_0x25105c]=this[_0x2f6c92(0x1b2)][_0x25105c]||[];}return this['_mainMenuCore'];},Game_System[_0x4fb4fe(0x254)][_0x4fb4fe(0x1a5)]=function(_0x55ed7a,_0x45c187){const _0x2cf4e7=_0x4fb4fe,_0x45b524=this[_0x2cf4e7(0x286)]();if(!_0x45b524[_0x45c187])return![];return _0x45b524[_0x45c187][_0x2cf4e7(0x24e)](_0x55ed7a);},Game_System[_0x4fb4fe(0x254)][_0x4fb4fe(0x2ad)]=function(_0x5560f6){const _0x5064fc=_0x4fb4fe,_0x5e5aef=this['mainMenuCoreSettings'](),_0x351a0f=[_0x5064fc(0x276),_0x5064fc(0x285),_0x5064fc(0x108),_0x5064fc(0x1df)];for(const _0x5957d1 of _0x351a0f){_0x5e5aef[_0x5957d1][_0x5064fc(0x230)](_0x5560f6);}},Game_System[_0x4fb4fe(0x254)][_0x4fb4fe(0x16b)]=function(_0x435ee3){const _0x30efd5=_0x4fb4fe,_0x4eddfc=this[_0x30efd5(0x286)]();!_0x4eddfc[_0x30efd5(0x276)][_0x30efd5(0x24e)](_0x435ee3)&&_0x4eddfc[_0x30efd5(0x276)][_0x30efd5(0x268)](_0x435ee3),_0x4eddfc[_0x30efd5(0x285)][_0x30efd5(0x230)](_0x435ee3);},Game_System['prototype'][_0x4fb4fe(0x20a)]=function(_0x3c8fc9){const _0x1f6451=_0x4fb4fe,_0x4eff4d=this[_0x1f6451(0x286)]();!_0x4eff4d['forceHide']['includes'](_0x3c8fc9)&&_0x4eff4d[_0x1f6451(0x285)]['push'](_0x3c8fc9),_0x4eff4d[_0x1f6451(0x276)][_0x1f6451(0x230)](_0x3c8fc9);},Game_System[_0x4fb4fe(0x254)]['forceEnableMainMenuCommand']=function(_0x58bd7d){const _0x5bb44d=_0x4fb4fe,_0x55b982=this[_0x5bb44d(0x286)]();!_0x55b982[_0x5bb44d(0x108)][_0x5bb44d(0x24e)](_0x58bd7d)&&_0x55b982[_0x5bb44d(0x108)][_0x5bb44d(0x268)](_0x58bd7d),_0x55b982['forceDisable'][_0x5bb44d(0x230)](_0x58bd7d);},Game_System[_0x4fb4fe(0x254)][_0x4fb4fe(0x256)]=function(_0x405612){const _0x2641e6=_0x4fb4fe,_0x2ab85a=this[_0x2641e6(0x286)]();!_0x2ab85a[_0x2641e6(0x1df)][_0x2641e6(0x24e)](_0x405612)&&_0x2ab85a[_0x2641e6(0x1df)][_0x2641e6(0x268)](_0x405612),_0x2ab85a[_0x2641e6(0x108)][_0x2641e6(0x230)](_0x405612);},VisuMZ[_0x4fb4fe(0x18b)][_0x4fb4fe(0x1a2)]=Game_Actor['prototype'][_0x4fb4fe(0x28c)],Game_Actor[_0x4fb4fe(0x254)][_0x4fb4fe(0x28c)]=function(_0x5ec1a0){const _0x3d916b=_0x4fb4fe;VisuMZ[_0x3d916b(0x18b)]['Game_Actor_setup'][_0x3d916b(0x21f)](this,_0x5ec1a0),this[_0x3d916b(0x14e)]();},Game_Actor[_0x4fb4fe(0x254)][_0x4fb4fe(0x14e)]=function(){const _0x23f17e=_0x4fb4fe;this[_0x23f17e(0x1de)]='',this[_0x23f17e(0x196)]()&&this[_0x23f17e(0x196)]()[_0x23f17e(0x229)][_0x23f17e(0x117)](/<MENU (?:IMAGE|PORTRAIT):[ ](.*)>/i)&&(this[_0x23f17e(0x1de)]=String(RegExp['$1']));},Game_Actor[_0x4fb4fe(0x254)]['getMenuImage']=function(){const _0x46fc67=_0x4fb4fe;if(this[_0x46fc67(0x1de)]===undefined)this[_0x46fc67(0x14e)]();return this['_menuImage'];},Game_Actor[_0x4fb4fe(0x254)][_0x4fb4fe(0x136)]=function(_0x189dda){const _0x3bec7e=_0x4fb4fe;if(this['_menuImage']===undefined)this[_0x3bec7e(0x14e)]();this[_0x3bec7e(0x1de)]=_0x189dda;},Game_Actor['prototype'][_0x4fb4fe(0x1f2)]=function(){const _0x1120d4=_0x4fb4fe;if(this['actor']()['note'][_0x1120d4(0x117)](/<MENU (?:IMAGE|PORTRAIT) OFFSET X:[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);else{if(this[_0x1120d4(0x196)]()[_0x1120d4(0x229)][_0x1120d4(0x117)](/<MENU (?:IMAGE|PORTRAIT) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);}return 0x0;},Game_Actor[_0x4fb4fe(0x254)][_0x4fb4fe(0x104)]=function(){const _0x4953b0=_0x4fb4fe;if(this['actor']()[_0x4953b0(0x229)][_0x4953b0(0x117)](/<MENU (?:IMAGE|PORTRAIT) OFFSET Y:[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);else{if(this[_0x4953b0(0x196)]()[_0x4953b0(0x229)][_0x4953b0(0x117)](/<MENU (?:IMAGE|PORTRAIT) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i))return Number(RegExp['$2']);}return 0x0;},Scene_MenuBase[_0x4fb4fe(0x254)][_0x4fb4fe(0x1e4)]=function(){const _0x4eeda7=_0x4fb4fe;return VisuMZ['MainMenuCore'][_0x4eeda7(0x12b)][_0x4eeda7(0x1a9)][_0x4eeda7(0x1e9)]['includes'](this['constructor'][_0x4eeda7(0x269)]);},VisuMZ[_0x4fb4fe(0x18b)]['Scene_MenuBase_createBackground']=Scene_MenuBase[_0x4fb4fe(0x254)][_0x4fb4fe(0x14c)],Scene_MenuBase[_0x4fb4fe(0x254)][_0x4fb4fe(0x14c)]=function(){const _0x5cc40e=_0x4fb4fe;VisuMZ['MainMenuCore'][_0x5cc40e(0x170)][_0x5cc40e(0x21f)](this),this[_0x5cc40e(0x15f)]();},Scene_MenuBase[_0x4fb4fe(0x254)][_0x4fb4fe(0x15f)]=function(){const _0x5b132c=_0x4fb4fe;this[_0x5b132c(0x164)]=new Sprite_MenuBackgroundActor(),this[_0x5b132c(0x23c)](this[_0x5b132c(0x164)]);},VisuMZ[_0x4fb4fe(0x18b)][_0x4fb4fe(0x222)]=Scene_MenuBase['prototype'][_0x4fb4fe(0x12d)],Scene_MenuBase[_0x4fb4fe(0x254)]['updateActor']=function(){const _0x24cc9c=_0x4fb4fe;VisuMZ[_0x24cc9c(0x18b)][_0x24cc9c(0x222)][_0x24cc9c(0x21f)](this),this[_0x24cc9c(0x1e4)]()&&this[_0x24cc9c(0x164)]&&this[_0x24cc9c(0x164)][_0x24cc9c(0x184)](this['_actor']);},VisuMZ[_0x4fb4fe(0x18b)]['Scene_Menu_create']=Scene_Menu[_0x4fb4fe(0x254)]['create'],Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x187)]=function(){const _0x32fc3b=_0x4fb4fe;VisuMZ['MainMenuCore'][_0x32fc3b(0x13d)]['call'](this),this[_0x32fc3b(0x165)](),this[_0x32fc3b(0x214)](),this['createDummyWindow']();},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x234)]=function(){const _0x2c88c9=_0x4fb4fe,_0x2c9655=this['commandWindowRect'](),_0x33ed8c=new Window_MenuCommand(_0x2c9655);_0x33ed8c[_0x2c88c9(0x1f3)](_0x2c88c9(0x281),this['commandCancel']['bind'](this)),this['addWindow'](_0x33ed8c),this[_0x2c88c9(0x158)]=_0x33ed8c;},VisuMZ[_0x4fb4fe(0x18b)][_0x4fb4fe(0x189)]=Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x149)],Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x149)]=function(){const _0x575822=_0x4fb4fe,_0x28d897=this[_0x575822(0x161)]();if(_0x28d897===_0x575822(0x2b4))return this[_0x575822(0x2b5)]();else{if(_0x28d897===_0x575822(0x119))return this[_0x575822(0x1d0)]();else{if(_0x28d897===_0x575822(0x246))return this['commandWindowRectBottomStyle']();else{if(_0x28d897===_0x575822(0x156))return this[_0x575822(0x157)]();else{if(_0x28d897==='mobile')return this[_0x575822(0x1ae)]();else{const _0x42eb78=VisuMZ['MainMenuCore'][_0x575822(0x189)]['call'](this);return this[_0x575822(0x203)](_0x42eb78),_0x42eb78;}}}}}},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x203)]=function(_0x539de7){const _0x14af92=_0x4fb4fe;this[_0x14af92(0x1f5)]()&&(_0x539de7[_0x14af92(0x1f4)]-=this[_0x14af92(0x148)]()[_0x14af92(0x1f4)]),this[_0x14af92(0x11a)]()&&(_0x539de7[_0x14af92(0x1f4)]-=this[_0x14af92(0x260)]()['height']);},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x2b5)]=function(){const _0x5be3f6=_0x4fb4fe,_0x1a574a=VisuMZ[_0x5be3f6(0x18b)][_0x5be3f6(0x12b)]['CustomCmdWin'][_0x5be3f6(0x163)],_0x591ae1=Graphics['boxWidth'],_0x5accf8=this[_0x5be3f6(0x1bb)](_0x1a574a,!![]),_0x39bc72=0x0,_0x1dacb9=this[_0x5be3f6(0x174)]();return new Rectangle(_0x39bc72,_0x1dacb9,_0x591ae1,_0x5accf8);},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x1d0)]=function(){const _0xc0c46b=_0x4fb4fe,_0x1c6899=VisuMZ[_0xc0c46b(0x18b)][_0xc0c46b(0x12b)][_0xc0c46b(0x19b)][_0xc0c46b(0x163)],_0x483f64=Graphics['boxWidth'],_0x3905fd=this[_0xc0c46b(0x1bb)](0x1,!![]),_0x368f99=0x0,_0x31d3ce=this['mainAreaTop']();return new Rectangle(_0x368f99,_0x31d3ce,_0x483f64,_0x3905fd);},Scene_Menu[_0x4fb4fe(0x254)]['commandWindowRectBottomStyle']=function(){const _0xbd4776=_0x4fb4fe,_0x571790=VisuMZ[_0xbd4776(0x18b)][_0xbd4776(0x12b)]['CustomCmdWin']['Rows'],_0x19de8b=Graphics['boxWidth'],_0x16e0f9=this['calcWindowHeight'](_0x571790,!![]),_0x4868b0=0x0,_0x2ace9b=this['mainAreaBottom']()-_0x16e0f9;return new Rectangle(_0x4868b0,_0x2ace9b,_0x19de8b,_0x16e0f9);},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x157)]=function(){const _0x4253b3=_0x4fb4fe,_0x2f6914=VisuMZ['MainMenuCore']['Settings'][_0x4253b3(0x19b)]['Rows'],_0x2c37d7=Graphics[_0x4253b3(0x29c)],_0x50b11e=this['calcWindowHeight'](0x1,!![]),_0xac3ac8=0x0,_0x134c58=this[_0x4253b3(0x19c)]()-_0x50b11e;return new Rectangle(_0xac3ac8,_0x134c58,_0x2c37d7,_0x50b11e);},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x1ae)]=function(){const _0x2e0811=_0x4fb4fe,_0x1981bd=VisuMZ[_0x2e0811(0x18b)]['Settings'][_0x2e0811(0x19b)][_0x2e0811(0x163)],_0x1b4f0c=Graphics[_0x2e0811(0x29c)],_0x4a000a=Window_MenuCommand['prototype']['fittingHeight'](_0x1981bd),_0xe02328=0x0,_0x1d58af=Math[_0x2e0811(0x1ec)]((Graphics['boxHeight']-_0x4a000a)/0x2);return new Rectangle(_0xe02328,_0x1d58af,_0x1b4f0c,_0x4a000a);},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x161)]=function(){const _0x403e0f=_0x4fb4fe;return VisuMZ['MainMenuCore'][_0x403e0f(0x12b)]['CommandWindowStyle'];},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x18f)]=function(){const _0xa5d330=_0x4fb4fe;if(this['commandWindowStyle']()!==_0xa5d330(0x294))return!![];return VisuMZ[_0xa5d330(0x18b)][_0xa5d330(0x12b)][_0xa5d330(0x1a9)]['ThinGoldWindow'];},Scene_Menu[_0x4fb4fe(0x254)]['createGoldWindow']=function(){const _0x32a07f=_0x4fb4fe,_0x1d08a4=this['goldWindowRect']();this[_0x32a07f(0x223)]=this[_0x32a07f(0x18f)]()?new Window_ThinGold(_0x1d08a4):new Window_Gold(_0x1d08a4),this['addWindow'](this[_0x32a07f(0x223)]);},VisuMZ[_0x4fb4fe(0x18b)][_0x4fb4fe(0x26e)]=Scene_Menu['prototype']['goldWindowRect'],Scene_Menu['prototype'][_0x4fb4fe(0x1ee)]=function(){const _0x3bb8dd=_0x4fb4fe,_0x42524e=this['commandWindowStyle']();if([_0x3bb8dd(0x2b4),_0x3bb8dd(0x119),_0x3bb8dd(0x2b3)][_0x3bb8dd(0x24e)](_0x42524e))return this['goldWindowRectTopStyle']();else{if([_0x3bb8dd(0x246),'thinBottom'][_0x3bb8dd(0x24e)](_0x42524e))return this[_0x3bb8dd(0x18a)]();else{const _0x120e5b=VisuMZ['MainMenuCore'][_0x3bb8dd(0x26e)][_0x3bb8dd(0x21f)](this);return this[_0x3bb8dd(0x273)](_0x120e5b),_0x120e5b;}}},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x273)]=function(_0x50e188){const _0xa87587=_0x4fb4fe;if(this[_0xa87587(0x18f)]()){if(VisuMZ['MainMenuCore'][_0xa87587(0x12b)][_0xa87587(0x1a9)][_0xa87587(0x1fc)]){const _0x1e0b7f=_0x50e188[_0xa87587(0x1f4)]-this[_0xa87587(0x1bb)](0x1,![]);_0x50e188['y']+=_0x1e0b7f;}VisuMZ[_0xa87587(0x18b)]['Settings']['General'][_0xa87587(0x29a)]&&(_0x50e188[_0xa87587(0x1f4)]=this['calcWindowHeight'](0x1,![]));}},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x293)]=function(){const _0x1742d3=_0x4fb4fe,_0x40fdee=this[_0x1742d3(0x263)](),_0x2698c6=this[_0x1742d3(0x1bb)](0x1,![]),_0x29a2a9=Graphics[_0x1742d3(0x29c)]-_0x40fdee,_0x38c4f9=this['mainAreaBottom']()-_0x2698c6;return new Rectangle(_0x29a2a9,_0x38c4f9,_0x40fdee,_0x2698c6);},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x18a)]=function(){const _0x4fcf8b=_0x4fb4fe,_0x41237b=this[_0x4fcf8b(0x263)](),_0x130a58=this[_0x4fcf8b(0x1bb)](0x1,![]),_0xc064ba=Graphics['boxWidth']-_0x41237b,_0x8b4e83=this[_0x4fcf8b(0x174)]();return new Rectangle(_0xc064ba,_0x8b4e83,_0x41237b,_0x130a58);},VisuMZ[_0x4fb4fe(0x18b)][_0x4fb4fe(0x2b7)]=Scene_Menu['prototype'][_0x4fb4fe(0x231)],Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x231)]=function(){const _0x259e65=_0x4fb4fe;VisuMZ['MainMenuCore'][_0x259e65(0x2b7)][_0x259e65(0x21f)](this),this[_0x259e65(0x2ac)]();},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x2ac)]=function(){const _0x1b5dd7=_0x4fb4fe;this[_0x1b5dd7(0x161)]()===_0x1b5dd7(0x2b3)&&(this['_statusWindow'][_0x1b5dd7(0x264)]=0x0);},VisuMZ['MainMenuCore']['Scene_Menu_statusWindowRect']=Scene_Menu[_0x4fb4fe(0x254)]['statusWindowRect'],Scene_Menu['prototype']['statusWindowRect']=function(){const _0xd85492=_0x4fb4fe,_0x1c2079=this[_0xd85492(0x161)]();if(['top',_0xd85492(0x119)][_0xd85492(0x24e)](_0x1c2079))return this[_0xd85492(0x185)]();else{if([_0xd85492(0x246),_0xd85492(0x156)][_0xd85492(0x24e)](_0x1c2079))return this[_0xd85492(0x1db)]();else return _0x1c2079==='mobile'?this['statusWindowRectMobileStyle']():VisuMZ[_0xd85492(0x18b)][_0xd85492(0x22c)]['call'](this);}},Scene_Menu['prototype'][_0x4fb4fe(0x185)]=function(){const _0x44e42f=_0x4fb4fe,_0x2c1e48=Graphics[_0x44e42f(0x29c)],_0x3bce15=this['mainAreaHeight']()-this[_0x44e42f(0x158)]['height']-this['_goldWindow'][_0x44e42f(0x1f4)],_0x361e69=0x0,_0x332f46=this[_0x44e42f(0x158)]['y']+this[_0x44e42f(0x158)][_0x44e42f(0x1f4)];return new Rectangle(_0x361e69,_0x332f46,_0x2c1e48,_0x3bce15);},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x1db)]=function(){const _0x41b3b1=_0x4fb4fe,_0x15e6f2=Graphics[_0x41b3b1(0x29c)],_0x5dd27b=this[_0x41b3b1(0x137)]()-this[_0x41b3b1(0x158)][_0x41b3b1(0x1f4)]-this['_goldWindow']['height'],_0x174686=0x0,_0x59f2a9=this[_0x41b3b1(0x223)]['y']+this[_0x41b3b1(0x223)]['height'];return new Rectangle(_0x174686,_0x59f2a9,_0x15e6f2,_0x5dd27b);},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x105)]=function(){const _0x2e8261=_0x4fb4fe,_0x4a38b6=Graphics[_0x2e8261(0x29c)],_0x1a03a1=this[_0x2e8261(0x137)]()-this[_0x2e8261(0x223)][_0x2e8261(0x1f4)],_0x557474=0x0,_0x3249bd=this['mainAreaBottom']()-this[_0x2e8261(0x223)][_0x2e8261(0x1f4)]-_0x1a03a1;return new Rectangle(_0x557474,_0x3249bd,_0x4a38b6,_0x1a03a1);},Scene_Menu[_0x4fb4fe(0x254)]['createPlaytimeWindow']=function(){const _0x54897f=_0x4fb4fe;if(!this[_0x54897f(0x111)]())return new Rectangle(0x0,0x0,0x0,0x0);const _0x299b49=this['playtimeWindowRect']();this['_playtimeWindow']=new Window_Playtime(_0x299b49),this['_playtimeWindow'][_0x54897f(0x2a7)](VisuMZ[_0x54897f(0x18b)][_0x54897f(0x12b)][_0x54897f(0x125)]['BgType']),this[_0x54897f(0x1c1)](this['_playtimeWindow']);},Scene_Menu[_0x4fb4fe(0x254)]['canCreatePlaytimeWindow']=function(){const _0x3dc5c5=_0x4fb4fe;return VisuMZ[_0x3dc5c5(0x18b)][_0x3dc5c5(0x12b)][_0x3dc5c5(0x125)]['Enable'];},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x1f5)]=function(){const _0x25e389=_0x4fb4fe;return this['canCreatePlaytimeWindow']()&&(VisuMZ['MainMenuCore'][_0x25e389(0x12b)][_0x25e389(0x125)][_0x25e389(0x146)]??!![]);},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x148)]=function(){const _0x50f741=_0x4fb4fe,_0x12b403=this[_0x50f741(0x161)]();if([_0x50f741(0x2b4),_0x50f741(0x119),'mobile'][_0x50f741(0x24e)](_0x12b403))return this[_0x50f741(0x25c)]();else return['bottom',_0x50f741(0x156)][_0x50f741(0x24e)](_0x12b403)?this[_0x50f741(0x1b1)]():VisuMZ['MainMenuCore'][_0x50f741(0x12b)][_0x50f741(0x125)][_0x50f741(0x1af)][_0x50f741(0x21f)](this);},Scene_Menu['prototype']['playtimeWindowRectTopStyle']=function(){const _0x23ffe1=_0x4fb4fe,_0x434ee2=this[_0x23ffe1(0x263)](),_0xebe8c1=this[_0x23ffe1(0x1bb)](0x1,![]),_0x41ba61=0x0,_0xefa7=this['mainAreaBottom']()-_0xebe8c1;return new Rectangle(_0x41ba61,_0xefa7,_0x434ee2,_0xebe8c1);},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x1b1)]=function(){const _0x1c2324=_0x4fb4fe,_0x19c3d7=this[_0x1c2324(0x263)](),_0x4a9a27=this[_0x1c2324(0x1bb)](0x1,![]),_0xca26fc=0x0,_0x4baa8a=this[_0x1c2324(0x174)]();return new Rectangle(_0xca26fc,_0x4baa8a,_0x19c3d7,_0x4a9a27);},Scene_Menu[_0x4fb4fe(0x254)]['createVariableWindow']=function(){const _0x16dc21=_0x4fb4fe;if(!this[_0x16dc21(0x13f)]())return new Rectangle(0x0,0x0,0x0,0x0);const _0x5bc638=this[_0x16dc21(0x260)]();this[_0x16dc21(0x25b)]=new Window_MenuVariables(_0x5bc638),this[_0x16dc21(0x25b)]['setBackgroundType'](VisuMZ[_0x16dc21(0x18b)]['Settings'][_0x16dc21(0x20f)][_0x16dc21(0x1cd)]),this[_0x16dc21(0x1c1)](this[_0x16dc21(0x25b)]);},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x13f)]=function(){const _0x46beec=_0x4fb4fe;return VisuMZ[_0x46beec(0x18b)][_0x46beec(0x12b)][_0x46beec(0x20f)][_0x46beec(0x251)];},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x11a)]=function(){const _0x2bb657=_0x4fb4fe;return this[_0x2bb657(0x13f)]()&&(VisuMZ[_0x2bb657(0x18b)][_0x2bb657(0x12b)][_0x2bb657(0x20f)][_0x2bb657(0x146)]??!![]);},Scene_Menu[_0x4fb4fe(0x254)]['variableWindowRect']=function(){const _0x267333=_0x4fb4fe,_0x2342d7=this[_0x267333(0x161)]();if([_0x267333(0x2b4),'thinTop',_0x267333(0x2b3)]['includes'](_0x2342d7))return this[_0x267333(0x186)]();else return[_0x267333(0x246),'thinBottom'][_0x267333(0x24e)](_0x2342d7)?this[_0x267333(0x287)]():VisuMZ[_0x267333(0x18b)][_0x267333(0x12b)][_0x267333(0x20f)][_0x267333(0x1af)][_0x267333(0x21f)](this);},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x186)]=function(){const _0x414ecf=_0x4fb4fe,_0x7f1f14=Graphics[_0x414ecf(0x29c)]-this[_0x414ecf(0x223)][_0x414ecf(0x244)]-(this[_0x414ecf(0x198)]?this['_playtimeWindow'][_0x414ecf(0x244)]:0x0),_0x296cab=this[_0x414ecf(0x1bb)](0x1,![]),_0x18ea3e=this[_0x414ecf(0x223)]['x']-_0x7f1f14,_0x21d0d4=this[_0x414ecf(0x19c)]()-_0x296cab;return new Rectangle(_0x18ea3e,_0x21d0d4,_0x7f1f14,_0x296cab);},Scene_Menu[_0x4fb4fe(0x254)]['variableWindowRectBottomStyle']=function(){const _0x4309f9=_0x4fb4fe,_0x3f3a6a=Graphics[_0x4309f9(0x29c)]-this[_0x4309f9(0x223)][_0x4309f9(0x244)]-(this[_0x4309f9(0x198)]?this[_0x4309f9(0x198)][_0x4309f9(0x244)]:0x0),_0x119c0c=this['calcWindowHeight'](0x1,![]),_0x5604a0=this[_0x4309f9(0x223)]['x']-_0x3f3a6a,_0x503d0a=this[_0x4309f9(0x174)]();return new Rectangle(_0x5604a0,_0x503d0a,_0x3f3a6a,_0x119c0c);},Scene_Menu['prototype'][_0x4fb4fe(0x295)]=function(){const _0x508b52=_0x4fb4fe;if(!this[_0x508b52(0x150)]())return;const _0x757a36=this[_0x508b52(0x260)]();this[_0x508b52(0x167)]=new Window_Base(_0x757a36),this['_dummyWindow'][_0x508b52(0x2a7)](VisuMZ[_0x508b52(0x18b)]['Settings'][_0x508b52(0x20f)][_0x508b52(0x1cd)]),this['addWindow'](this[_0x508b52(0x167)]);},Scene_Menu['prototype'][_0x4fb4fe(0x150)]=function(){const _0xac4139=_0x4fb4fe;if([_0xac4139(0x294),_0xac4139(0x2b3)][_0xac4139(0x24e)](this[_0xac4139(0x161)]()))return![];if(this['_variableWindow'])return![];return!![];},VisuMZ[_0x4fb4fe(0x18b)]['Scene_Menu_commandPersonal']=Scene_Menu[_0x4fb4fe(0x254)]['commandPersonal'],Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x23d)]=function(){const _0x578908=_0x4fb4fe;if(this['isSoloQuickMode']()&&this[_0x578908(0x1b5)])$gameParty[_0x578908(0x18e)]($gameParty['members']()[0x0]),this[_0x578908(0x116)]();else{if(this[_0x578908(0x161)]()===_0x578908(0x2b3))this[_0x578908(0x1b5)]['open']();VisuMZ[_0x578908(0x18b)][_0x578908(0x171)]['call'](this);}},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x12c)]=function(){const _0x51c651=_0x4fb4fe;return VisuMZ['MainMenuCore'][_0x51c651(0x12b)][_0x51c651(0x1a9)][_0x51c651(0x17c)]&&$gameParty[_0x51c651(0x1a0)]()[_0x51c651(0x224)]<=0x1;},Scene_Menu[_0x4fb4fe(0x254)]['onPersonalOk']=function(){const _0x2119b7=_0x4fb4fe,_0x1c7372=this[_0x2119b7(0x158)][_0x2119b7(0x180)](),_0x591e55=this[_0x2119b7(0x158)][_0x2119b7(0x2b1)]();for(const _0x57fed4 of Window_MenuCommand[_0x2119b7(0x1f6)]){if(_0x57fed4[_0x2119b7(0x262)]===_0x1c7372){_0x57fed4[_0x2119b7(0x277)]['call'](this,_0x591e55);return;}}},VisuMZ[_0x4fb4fe(0x18b)][_0x4fb4fe(0x1ed)]=Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0xfd)],Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0xfd)]=function(){const _0x28d102=_0x4fb4fe;VisuMZ['MainMenuCore']['Scene_Menu_onPersonalCancel'][_0x28d102(0x21f)](this);if(this[_0x28d102(0x161)]()===_0x28d102(0x2b3))this[_0x28d102(0x1b5)][_0x28d102(0x28b)]();},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x1cb)]=function(){const _0x56d727=_0x4fb4fe,_0x3820a7=parseInt(this[_0x56d727(0x158)][_0x56d727(0x2b1)]());_0x3820a7?($gameTemp[_0x56d727(0x19d)](_0x3820a7),this[_0x56d727(0x123)]()):this['_commandWindow'][_0x56d727(0x1c5)]();},VisuMZ[_0x4fb4fe(0x18b)]['Scene_Menu_commandFormation']=Scene_Menu['prototype'][_0x4fb4fe(0x194)],Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x194)]=function(){const _0x532881=_0x4fb4fe;VisuMZ[_0x532881(0x18b)][_0x532881(0x1b3)][_0x532881(0x21f)](this);if(this[_0x532881(0x161)]()===_0x532881(0x2b3))this[_0x532881(0x1b5)][_0x532881(0x197)]();},VisuMZ[_0x4fb4fe(0x18b)][_0x4fb4fe(0x19f)]=Scene_Menu['prototype'][_0x4fb4fe(0x115)],Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x115)]=function(){const _0x289eba=_0x4fb4fe;VisuMZ[_0x289eba(0x18b)][_0x289eba(0x19f)]['call'](this);if(this[_0x289eba(0x161)]()===_0x289eba(0x2b3))this[_0x289eba(0x1b5)][_0x289eba(0x28b)]();},Scene_Menu['prototype'][_0x4fb4fe(0x12e)]=function(){const _0x3f1d03=_0x4fb4fe;Imported[_0x3f1d03(0x226)]&&StorageManager[_0x3f1d03(0x12f)]()==='single'?DataManager[_0x3f1d03(0x14d)](0x0)['then'](()=>this[_0x3f1d03(0x217)]())[_0x3f1d03(0x1ea)](()=>this[_0x3f1d03(0x147)]()):SceneManager[_0x3f1d03(0x268)](Scene_Load);},Scene_Menu['prototype']['commandCancel']=function(){const _0x5643bf=_0x4fb4fe;this[_0x5643bf(0x158)][_0x5643bf(0x1fe)]()!==''?this['_commandWindow'][_0x5643bf(0x159)]():this[_0x5643bf(0x123)]();},Scene_Menu['prototype']['onSaveCoreLoadSuccess']=function(){const _0x1afa0b=_0x4fb4fe;SoundManager[_0x1afa0b(0x1cf)](),this[_0x1afa0b(0x2a5)](),Scene_Load[_0x1afa0b(0x254)]['reloadMapIfUpdated'](),SceneManager['goto'](Scene_Map),this[_0x1afa0b(0x272)]=!![],VisuMZ[_0x1afa0b(0x27a)]['Settings'][_0x1afa0b(0x1c8)][_0x1afa0b(0xfb)][_0x1afa0b(0x21f)](this);},Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x147)]=function(){const _0x231d1f=_0x4fb4fe;SoundManager[_0x231d1f(0x16e)](),VisuMZ[_0x231d1f(0x27a)][_0x231d1f(0x12b)][_0x231d1f(0x1c8)][_0x231d1f(0x278)][_0x231d1f(0x21f)](this),this[_0x231d1f(0x12a)]();},VisuMZ[_0x4fb4fe(0x18b)]['Scene_Title_terminate']=Scene_Menu[_0x4fb4fe(0x254)][_0x4fb4fe(0x16d)],Scene_Menu['prototype'][_0x4fb4fe(0x16d)]=function(){const _0x46f554=_0x4fb4fe;VisuMZ[_0x46f554(0x18b)][_0x46f554(0x297)][_0x46f554(0x21f)](this);if(this['_loadSuccess'])$gameSystem[_0x46f554(0x24c)]();};function Sprite_MenuBackgroundActor(){this['initialize'](...arguments);}Sprite_MenuBackgroundActor[_0x4fb4fe(0x254)]=Object[_0x4fb4fe(0x187)](Sprite[_0x4fb4fe(0x254)]),Sprite_MenuBackgroundActor[_0x4fb4fe(0x254)]['constructor']=Sprite_MenuBackgroundActor,Sprite_MenuBackgroundActor[_0x4fb4fe(0x254)]['initialize']=function(){const _0x17a3cb=_0x4fb4fe;this[_0x17a3cb(0x1f7)]=null,this['_bitmapReady']=![],Sprite[_0x17a3cb(0x254)][_0x17a3cb(0x153)][_0x17a3cb(0x21f)](this),this['x']=Graphics[_0x17a3cb(0x244)];},Sprite_MenuBackgroundActor[_0x4fb4fe(0x254)][_0x4fb4fe(0x184)]=function(_0x57ff22){const _0x4ae549=_0x4fb4fe;this['_actor']!==_0x57ff22&&(this['_actor']=_0x57ff22,this[_0x4ae549(0x155)]());},Sprite_MenuBackgroundActor[_0x4fb4fe(0x254)][_0x4fb4fe(0x155)]=function(){const _0x418d45=_0x4fb4fe;this[_0x418d45(0x1fd)]=![],this['_actor']?(this['bitmap']=ImageManager['loadPicture'](this[_0x418d45(0x1f7)][_0x418d45(0x1e8)]()),this[_0x418d45(0x152)]['addLoadListener'](this[_0x418d45(0x122)][_0x418d45(0x259)](this))):this[_0x418d45(0x152)]=new Bitmap(0x1,0x1);},Sprite_MenuBackgroundActor[_0x4fb4fe(0x254)][_0x4fb4fe(0x122)]=function(){const _0x39eb26=_0x4fb4fe;this[_0x39eb26(0x1fd)]=!![],VisuMZ[_0x39eb26(0x18b)][_0x39eb26(0x12b)][_0x39eb26(0x1a9)][_0x39eb26(0x1c9)]['call'](this);},Sprite_MenuBackgroundActor[_0x4fb4fe(0x254)][_0x4fb4fe(0x2ba)]=function(){const _0xd7a238=_0x4fb4fe;Sprite['prototype'][_0xd7a238(0x2ba)][_0xd7a238(0x21f)](this),this[_0xd7a238(0x1fd)]&&(this[_0xd7a238(0x103)](),this['updatePosition'](),this[_0xd7a238(0x27d)]());},Sprite_MenuBackgroundActor['prototype'][_0x4fb4fe(0x103)]=function(){const _0x23a81f=_0x4fb4fe;if(this[_0x23a81f(0x233)]>0x0){const _0x5ce4ea=this[_0x23a81f(0x233)];this[_0x23a81f(0x127)]=(this[_0x23a81f(0x127)]*(_0x5ce4ea-0x1)+0xff)/_0x5ce4ea;}},Sprite_MenuBackgroundActor[_0x4fb4fe(0x254)][_0x4fb4fe(0x205)]=function(){const _0x1ac466=_0x4fb4fe;if(this[_0x1ac466(0x233)]>0x0){const _0x4e869e=this['_duration'];this['x']=(this['x']*(_0x4e869e-0x1)+this[_0x1ac466(0x193)])/_0x4e869e,this['y']=(this['y']*(_0x4e869e-0x1)+this[_0x1ac466(0x29e)])/_0x4e869e;}},Sprite_MenuBackgroundActor[_0x4fb4fe(0x254)][_0x4fb4fe(0x27d)]=function(){const _0x366be0=_0x4fb4fe;if(this[_0x366be0(0x233)]>0x0)this[_0x366be0(0x233)]--;},ImageManager['svActorHorzCells']=ImageManager[_0x4fb4fe(0x132)]||0x9,ImageManager[_0x4fb4fe(0x10e)]=ImageManager[_0x4fb4fe(0x10e)]||0x6,Window_Base[_0x4fb4fe(0x254)][_0x4fb4fe(0x1a7)]=function(_0x134a46,_0x35014c,_0x4675ce){const _0x8128b6=_0x4fb4fe,_0x48df05=_0x134a46[_0x8128b6(0x117)](/\$/i),_0x1e2145=ImageManager[_0x8128b6(0x1fa)](_0x134a46),_0xbc52d5=_0x1e2145['width']/(_0x48df05?0x1:ImageManager[_0x8128b6(0x132)]),_0x48161b=_0x1e2145['height']/(_0x48df05?0x1:ImageManager[_0x8128b6(0x10e)]),_0x4dcf27=0x0,_0x11f8a0=0x0;this[_0x8128b6(0x15e)][_0x8128b6(0x237)](_0x1e2145,_0x4dcf27,_0x11f8a0,_0xbc52d5,_0x48161b,_0x35014c-_0xbc52d5/0x2,_0x4675ce-_0x48161b);},Window_MenuCommand[_0x4fb4fe(0x1f6)]=VisuMZ[_0x4fb4fe(0x18b)]['Settings']['CommandList'],Window_MenuCommand[_0x4fb4fe(0x19e)]=undefined,VisuMZ['MainMenuCore'][_0x4fb4fe(0x10d)]=Window_MenuCommand[_0x4fb4fe(0x254)]['initialize'],Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x153)]=function(_0x422025){const _0x4ea7fc=_0x4fb4fe;this[_0x4ea7fc(0x21b)]=$gameTemp[_0x4ea7fc(0x2b2)]||'',VisuMZ[_0x4ea7fc(0x18b)][_0x4ea7fc(0x10d)]['call'](this,_0x422025),this[_0x4ea7fc(0x221)](_0x422025);},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x221)]=function(_0x251ff6){const _0x331fcc=_0x4fb4fe,_0x38760f=new Rectangle(0x0,0x0,_0x251ff6[_0x331fcc(0x244)],_0x251ff6[_0x331fcc(0x1f4)]);this[_0x331fcc(0x114)]=new Window_Base(_0x38760f),this['_commandNameWindow'][_0x331fcc(0x127)]=0x0,this[_0x331fcc(0x23c)](this[_0x331fcc(0x114)]),this[_0x331fcc(0x27c)]();},Window_MenuCommand['prototype']['callUpdateHelp']=function(){const _0x419b50=_0x4fb4fe;Window_HorzCommand[_0x419b50(0x254)]['callUpdateHelp'][_0x419b50(0x21f)](this);if(this[_0x419b50(0x114)])this[_0x419b50(0x27c)]();},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x27c)]=function(){const _0x235a77=_0x4fb4fe,_0x2167ae=this['_commandNameWindow'];_0x2167ae['contents'][_0x235a77(0x1ab)]();const _0xc086d3=this['commandStyleCheck'](this[_0x235a77(0x11d)]());if(_0xc086d3===_0x235a77(0x239)){const _0x2af7ce=this[_0x235a77(0x1da)](this['index']());let _0x22ad8a=this[_0x235a77(0x1f8)](this['index']());_0x22ad8a=_0x22ad8a['replace'](/\\I\[(\d+)\]/gi,''),_0x2167ae[_0x235a77(0x106)](),this[_0x235a77(0x2a4)](_0x22ad8a,_0x2af7ce),this[_0x235a77(0x228)](_0x22ad8a,_0x2af7ce),this[_0x235a77(0x182)](_0x22ad8a,_0x2af7ce);}},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x2a4)]=function(_0x9c0b1e,_0x33b4bf){},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x228)]=function(_0x453da9,_0x2bc10b){const _0x23d15d=_0x4fb4fe,_0x2eb06d=this['_commandNameWindow'];_0x2eb06d[_0x23d15d(0x1b4)](_0x453da9,0x0,_0x2bc10b['y'],_0x2eb06d[_0x23d15d(0x1c6)],_0x23d15d(0x225));},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x182)]=function(_0x32d5c9,_0x5ab31f){const _0xb7ec34=_0x4fb4fe,_0x50274e=this[_0xb7ec34(0x114)],_0x517b06=$gameSystem[_0xb7ec34(0x176)](),_0x141096=_0x5ab31f['x']+Math[_0xb7ec34(0x24f)](_0x5ab31f[_0xb7ec34(0x244)]/0x2)+_0x517b06;_0x50274e['x']=_0x50274e[_0xb7ec34(0x244)]/-0x2+_0x141096,_0x50274e['y']=Math[_0xb7ec34(0x24f)](_0x5ab31f[_0xb7ec34(0x1f4)]/0x4);},Window_MenuCommand[_0x4fb4fe(0x254)]['itemHeight']=function(){const _0x3a2bc8=_0x4fb4fe,_0x379930=SceneManager[_0x3a2bc8(0x240)][_0x3a2bc8(0x161)]();if(_0x379930==='mobile'){const _0x58fcba=VisuMZ[_0x3a2bc8(0x18b)][_0x3a2bc8(0x12b)][_0x3a2bc8(0x19b)][_0x3a2bc8(0x2a2)];return this[_0x3a2bc8(0x22d)]()*_0x58fcba+0x8;}else return Window_Command[_0x3a2bc8(0x254)][_0x3a2bc8(0x265)][_0x3a2bc8(0x21f)](this);},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x27e)]=function(){const _0x14fed8=_0x4fb4fe;this[_0x14fed8(0x21a)]();},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x21a)]=function(){const _0x3f4905=_0x4fb4fe;let _0x19eed4=0x0;for(const _0x165586 of Window_MenuCommand[_0x3f4905(0x1f6)]){let _0x240ed6=_0x165586[_0x3f4905(0x262)];if(this[_0x3f4905(0x14a)](_0x240ed6,_0x165586)){let _0x2bab9b=_0x165586[_0x3f4905(0xfa)];if(['',_0x3f4905(0x15d)][_0x3f4905(0x24e)](_0x2bab9b))_0x2bab9b=_0x165586[_0x3f4905(0x2aa)][_0x3f4905(0x21f)](this);const _0x542925=_0x165586['Icon'];_0x542925>0x0&&this[_0x3f4905(0x23a)]()!==_0x3f4905(0x1e6)&&(_0x2bab9b='\x5cI[%1]%2'[_0x3f4905(0x20d)](_0x542925,_0x2bab9b));const _0x3722d0=this[_0x3f4905(0x23f)](_0x240ed6,_0x165586),_0x38a319=_0x165586['ExtJS'][_0x3f4905(0x21f)](this);_0x240ed6===_0x3f4905(0x296)&&(_0x19eed4++,_0x240ed6+=_0x19eed4),this[_0x3f4905(0x1d8)](_0x2bab9b,_0x240ed6,_0x3722d0,_0x38a319),this[_0x3f4905(0x1f3)](_0x240ed6,_0x165586[_0x3f4905(0x151)]['bind'](this,_0x38a319));}this[_0x3f4905(0x28f)](_0x240ed6);}},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x14a)]=function(_0x2fdaa9,_0x5b999f,_0x543c07){const _0x54c0be=_0x4fb4fe;if(!_0x543c07){if(!this['isIncludedInSubcategory'](_0x2fdaa9,_0x5b999f))return![];}if($gameSystem[_0x54c0be(0x1a5)](_0x2fdaa9,_0x54c0be(0x276)))return!![];if($gameSystem[_0x54c0be(0x1a5)](_0x2fdaa9,_0x54c0be(0x285)))return![];return _0x5b999f[_0x54c0be(0x25f)][_0x54c0be(0x21f)](this,_0x2fdaa9,_0x5b999f);},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x23f)]=function(_0x76f2fa,_0x29cdc){const _0x11709d=_0x4fb4fe;if($gameSystem[_0x11709d(0x1a5)](_0x76f2fa,_0x11709d(0x108)))return!![];if($gameSystem['getMainMenuSymbolState'](_0x76f2fa,_0x11709d(0x1df)))return![];return _0x29cdc[_0x11709d(0x17d)][_0x11709d(0x21f)](this,_0x76f2fa,_0x29cdc);},Window_MenuCommand['prototype'][_0x4fb4fe(0x28f)]=function(_0x3cb7a3){const _0x522a61=_0x4fb4fe;switch(_0x3cb7a3){case _0x522a61(0x141):this[_0x522a61(0x22f)]();break;case _0x522a61(0x299):this[_0x522a61(0x142)](),this[_0x522a61(0x129)]();break;case _0x522a61(0x26f):this[_0x522a61(0x28a)]();break;case'save':this['addSaveCommand']();break;case'gameEnd':this[_0x522a61(0x2b9)]();break;}},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x22f)]=function(){},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x142)]=function(){},Window_MenuCommand['prototype'][_0x4fb4fe(0x129)]=function(){},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x28a)]=function(){},Window_MenuCommand['prototype']['addSaveCommand']=function(){},Window_MenuCommand['prototype']['addGameEndCommand']=function(){},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x16c)]=function(){const _0x3ffb5d=_0x4fb4fe,_0x4e8434=SceneManager[_0x3ffb5d(0x240)][_0x3ffb5d(0x161)]();if(['thinTop',_0x3ffb5d(0x156)][_0x3ffb5d(0x24e)](_0x4e8434))return this[_0x3ffb5d(0x181)]?this[_0x3ffb5d(0x124)]():0x4;else return _0x4e8434!==_0x3ffb5d(0x294)?VisuMZ[_0x3ffb5d(0x18b)][_0x3ffb5d(0x12b)][_0x3ffb5d(0x19b)][_0x3ffb5d(0x13c)]:Window_Command['prototype'][_0x3ffb5d(0x16c)][_0x3ffb5d(0x21f)](this);},Window_MenuCommand['prototype'][_0x4fb4fe(0x1fe)]=function(){return this['_subcategory']||'';},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x2af)]=function(_0x245f1d,_0x1ad78d){const _0x419165=_0x4fb4fe,_0x571bba=_0x1ad78d[_0x419165(0x24d)]||'';if(!this[_0x419165(0x2b8)](_0x571bba)&&this['currentSubcategory']()==='')return!![];return _0x571bba===this[_0x419165(0x1fe)]();},Window_MenuCommand[_0x4fb4fe(0x254)]['doesSubcategoryExist']=function(_0x52ca88){const _0x52c5e7=_0x4fb4fe;return this[_0x52c5e7(0x1b9)]()[_0x52c5e7(0x24e)](_0x52ca88);},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x1b9)]=function(){const _0x2ea131=_0x4fb4fe;if(Window_MenuCommand[_0x2ea131(0x19e)]!==undefined)return Window_MenuCommand[_0x2ea131(0x19e)];Window_MenuCommand[_0x2ea131(0x19e)]=[];for(const _0x590697 of Window_MenuCommand[_0x2ea131(0x1f6)]){const _0xbda10f=_0x590697[_0x2ea131(0x262)];if(_0xbda10f!==_0x2ea131(0x296))continue;const _0x5171c1=_0x590697[_0x2ea131(0x236)][_0x2ea131(0x21f)](this);Window_MenuCommand['SUBCATEGORY_LIST'][_0x2ea131(0x268)](_0x5171c1);}return Window_MenuCommand['SUBCATEGORY_LIST'];},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x1c7)]=function(_0x35660b){const _0x5cdb38=_0x4fb4fe;if(!_0x35660b)return!![];const _0xa53a39=_0x35660b['ExtJS'][_0x5cdb38(0x21f)](this);for(const _0x2fae52 of Window_MenuCommand[_0x5cdb38(0x1f6)]){if(_0x2fae52===_0x35660b)continue;const _0x46dc59=_0x2fae52['Subcategory']||'';if(_0x46dc59!==_0xa53a39)continue;const _0x1745f6=_0x2fae52[_0x5cdb38(0x262)];if(this[_0x5cdb38(0x14a)](_0x1745f6,_0x2fae52,!![]))return!![];}return![];},Window_MenuCommand['prototype'][_0x4fb4fe(0x253)]=function(_0x53ce2c){const _0xce1596=_0x4fb4fe;_0x53ce2c=_0x53ce2c;if(this[_0xce1596(0x1fe)]()===_0x53ce2c)return;this[_0xce1596(0x21b)]=_0x53ce2c,$gameTemp[_0xce1596(0x2b2)]=_0x53ce2c,this[_0xce1596(0x1ad)](),this[_0xce1596(0x292)](0x0),this[_0xce1596(0x10f)](0x0),this[_0xce1596(0x1c5)]();},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x159)]=function(){const _0x104366=_0x4fb4fe,_0x1f4336=this[_0x104366(0x1fe)]();this[_0x104366(0x21b)]='',$gameTemp[_0x104366(0x2b2)]=undefined,this[_0x104366(0x1ad)](),this[_0x104366(0x10f)](0x0);this[_0x104366(0x16a)]>0x1&&(this['_scrollDuration']=0x1,this[_0x104366(0x291)]());const _0x3897c7=Math['max'](this['findExt'](_0x1f4336),0x0);this[_0x104366(0x154)](_0x3897c7),this[_0x104366(0x1c5)]();},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x112)]=function(){const _0x456599=_0x4fb4fe;return VisuMZ['MainMenuCore']['Settings'][_0x456599(0x19b)][_0x456599(0x14f)];},Window_MenuCommand[_0x4fb4fe(0x254)]['drawItem']=function(_0x4782f0){const _0xc3b218=_0x4fb4fe,_0x57bb23=this[_0xc3b218(0x1a4)](_0x4782f0);if(_0x57bb23===_0xc3b218(0xfc))this[_0xc3b218(0x283)](_0x4782f0);else _0x57bb23==='icon'?this[_0xc3b218(0x22b)](_0x4782f0):Window_Command[_0xc3b218(0x254)]['drawItem'][_0xc3b218(0x21f)](this,_0x4782f0);},Window_MenuCommand[_0x4fb4fe(0x254)][_0x4fb4fe(0x23a)]=function(){const _0x3fdd46=_0x4fb4fe;return VisuMZ[_0x3fdd46(0x18b)][_0x3fdd46(0x12b)][_0x3fdd46(0x19b)][_0x3fdd46(0x1ce)];},Window_MenuCommand[_0x4fb4fe(0x254)]['commandStyleCheck']=function(_0x36acad){const _0x5c5566=_0x4fb4fe,_0x205a7d=this['commandStyle']();if(_0x205a7d!==_0x5c5566(0x16f))return _0x205a7d;else{const _0x310940=this[_0x5c5566(0x1f8)](_0x36acad);if(_0x310940['match'](/\\I\[(\d+)\]/i)){const _0x41a4fc=this[_0x5c5566(0x1da)](_0x36acad),_0x552f68=this[_0x5c5566(0x227)](_0x310940)[_0x5c5566(0x244)];return _0x552f68<=_0x41a4fc[_0x5c5566(0x244)]?_0x5c5566(0xfc):_0x5c5566(0x239);}else return _0x5c5566(0x1e6);}},Window_MenuCommand['prototype']['drawItemStyleIconText']=function(_0x18a50a){const _0x5d4b82=_0x4fb4fe,_0x5df46e=this[_0x5d4b82(0x1da)](_0x18a50a),_0x1ba8c7=this[_0x5d4b82(0x1f8)](_0x18a50a),_0x3164be=this[_0x5d4b82(0x227)](_0x1ba8c7)['width'];this[_0x5d4b82(0xfe)](this[_0x5d4b82(0x271)](_0x18a50a));let _0x1800d6=this[_0x5d4b82(0x112)]();if(_0x1800d6==='right')this[_0x5d4b82(0x211)](_0x1ba8c7,_0x5df46e['x']+_0x5df46e['width']-_0x3164be,_0x5df46e['y'],_0x3164be);else{if(_0x1800d6==='center'){const _0x6fe96b=_0x5df46e['x']+Math[_0x5d4b82(0x24f)]((_0x5df46e['width']-_0x3164be)/0x2);this[_0x5d4b82(0x211)](_0x1ba8c7,_0x6fe96b,_0x5df46e['y'],_0x3164be);}else this[_0x5d4b82(0x211)](_0x1ba8c7,_0x5df46e['x'],_0x5df46e['y'],_0x3164be);}},Window_MenuCommand[_0x4fb4fe(0x254)]['drawItemStyleIcon']=function(_0x465acc){const _0x5e9cd4=_0x4fb4fe;this['commandName'](_0x465acc)[_0x5e9cd4(0x117)](/\\I\[(\d+)\]/i);const _0x1bfa82=Number(RegExp['$1']),_0x2c9f01=this['itemLineRect'](_0x465acc),_0x3a1b8e=_0x2c9f01['x']+Math['floor']((_0x2c9f01[_0x5e9cd4(0x244)]-ImageManager[_0x5e9cd4(0x144)])/0x2),_0x292af6=_0x2c9f01['y']+(_0x2c9f01[_0x5e9cd4(0x1f4)]-ImageManager[_0x5e9cd4(0x2ae)])/0x2;this[_0x5e9cd4(0x248)](_0x1bfa82,_0x3a1b8e,_0x292af6);},VisuMZ[_0x4fb4fe(0x18b)][_0x4fb4fe(0xff)]=Window_StatusBase[_0x4fb4fe(0x254)][_0x4fb4fe(0x18d)],Window_StatusBase['prototype'][_0x4fb4fe(0x18d)]=function(){const _0x177f45=_0x4fb4fe;VisuMZ['MainMenuCore']['Window_StatusBase_loadFaceImages'][_0x177f45(0x21f)](this),this[_0x177f45(0x20c)]();},Window_StatusBase[_0x4fb4fe(0x254)][_0x4fb4fe(0x20c)]=function(){const _0x11622f=_0x4fb4fe;for(const _0x3a7f31 of $gameParty[_0x11622f(0x1a0)]()){if(!_0x3a7f31)continue;_0x3a7f31['characterName']()&&ImageManager[_0x11622f(0x22a)](_0x3a7f31[_0x11622f(0x26c)]()),_0x3a7f31[_0x11622f(0x100)]()&&ImageManager[_0x11622f(0x1fa)](_0x3a7f31[_0x11622f(0x100)]()),_0x3a7f31[_0x11622f(0x1e8)]()&&ImageManager[_0x11622f(0x107)](_0x3a7f31['getMenuImage']());}},Window_StatusBase[_0x4fb4fe(0x254)][_0x4fb4fe(0x282)]=function(){const _0x13cedc=_0x4fb4fe;return VisuMZ[_0x13cedc(0x18b)][_0x13cedc(0x12b)][_0x13cedc(0x1a1)];},Window_StatusBase[_0x4fb4fe(0x254)]['drawItemActorFace']=function(_0x1b6028,_0x360e3a,_0x1d8550,_0x275dc3,_0x5b3d7d){const _0x679847=_0x4fb4fe;_0x275dc3=_0x275dc3||ImageManager[_0x679847(0x2a6)],_0x5b3d7d=_0x5b3d7d||ImageManager[_0x679847(0x166)];const _0x5bfd5c=ImageManager[_0x679847(0x2a6)],_0x1027f7=_0x5b3d7d-0x2,_0x3e7a48=_0x360e3a+Math[_0x679847(0x24f)]((_0x275dc3-_0x5bfd5c)/0x2);this[_0x679847(0x162)]===Window_MenuStatus&&this[_0x679847(0xfe)](_0x1b6028[_0x679847(0x267)]()),this['drawActorFace'](_0x1b6028,_0x3e7a48,_0x1d8550,_0x5bfd5c,_0x1027f7),this[_0x679847(0xfe)](!![]);},Window_StatusBase['prototype'][_0x4fb4fe(0x250)]=function(_0x505928,_0x1f91c5,_0x119945,_0x45ffea,_0x2e3baa){const _0x5202d9=_0x4fb4fe;_0x45ffea=_0x45ffea||ImageManager[_0x5202d9(0x2a6)],_0x2e3baa=_0x2e3baa||ImageManager[_0x5202d9(0x166)];const _0x50e2f7=_0x505928['characterName'](),_0x5559f6=_0x505928[_0x5202d9(0x1e1)](),_0x3c8f5f=ImageManager[_0x5202d9(0x22a)](_0x50e2f7),_0x1767a7=ImageManager[_0x5202d9(0x121)](_0x50e2f7),_0x1eef8d=_0x3c8f5f[_0x5202d9(0x244)]/(_0x1767a7?0x3:0xc),_0x148e86=_0x3c8f5f[_0x5202d9(0x1f4)]/(_0x1767a7?0x4:0x8),_0x31aa48=_0x45ffea,_0x427ee3=_0x2e3baa-0x2,_0x215b56=_0x1f91c5+Math[_0x5202d9(0x24f)](_0x31aa48/0x2),_0x42bb50=_0x119945+Math[_0x5202d9(0x2a1)]((_0x2e3baa+_0x148e86)/0x2);this[_0x5202d9(0x162)]===Window_MenuStatus&&this[_0x5202d9(0xfe)](_0x505928['isBattleMember']());const _0x4ab864=Math[_0x5202d9(0x178)](_0x45ffea,_0x1eef8d),_0x384f11=Math[_0x5202d9(0x178)](_0x2e3baa,_0x148e86),_0x269fc1=Math[_0x5202d9(0x24f)](_0x1f91c5+Math[_0x5202d9(0x29f)](_0x45ffea-_0x1eef8d,0x0)/0x2),_0x3a0559=Math[_0x5202d9(0x24f)](_0x119945+Math['max'](_0x2e3baa-_0x148e86,0x0)/0x2),_0x69b761=_0x1767a7?0x0:_0x5559f6,_0x355460=(_0x69b761%0x4*0x3+0x1)*_0x1eef8d,_0x38f2ff=Math[_0x5202d9(0x24f)](_0x69b761/0x4)*0x4*_0x148e86;this[_0x5202d9(0x15e)][_0x5202d9(0x237)](_0x3c8f5f,_0x355460,_0x38f2ff,_0x4ab864,_0x384f11,_0x269fc1,_0x3a0559),this[_0x5202d9(0xfe)](!![]);},Window_StatusBase[_0x4fb4fe(0x254)]['drawItemActorSvBattler']=function(_0x5b2670,_0x460e15,_0x3031fb,_0x28476b,_0x26c597){const _0x15e554=_0x4fb4fe;_0x28476b=_0x28476b||ImageManager['faceWidth'],_0x26c597=_0x26c597||ImageManager[_0x15e554(0x166)];const _0x400f8a=ImageManager[_0x15e554(0x1fa)](_0x5b2670['battlerName']()),_0x1f2dc4=_0x400f8a[_0x15e554(0x244)]/ImageManager['svActorHorzCells'],_0x4303b8=_0x400f8a[_0x15e554(0x1f4)]/ImageManager['svActorVertCells'],_0xe1c7eb=_0x28476b,_0x30fb68=_0x26c597-0x2,_0x4a35bb=_0x460e15+Math[_0x15e554(0x24f)](_0xe1c7eb/0x2),_0x598140=_0x3031fb+Math[_0x15e554(0x2a1)]((_0x26c597+_0x4303b8)/0x2);this[_0x15e554(0x162)]===Window_MenuStatus&&this[_0x15e554(0xfe)](_0x5b2670[_0x15e554(0x267)]());const _0x379823=_0x5b2670[_0x15e554(0x25a)]&&_0x5b2670[_0x15e554(0x25a)](),_0x3f4c94=0x0,_0x26b00f=0x0,_0x473f93=_0x379823?_0x400f8a[_0x15e554(0x244)]:_0x1f2dc4,_0x404c30=_0x379823?_0x400f8a[_0x15e554(0x1f4)]:_0x4303b8,_0x39dfcb=Math['min'](0x1,_0x28476b/_0x473f93,_0x26c597/_0x404c30),_0x1c26d8=_0x39dfcb*_0x473f93,_0x198a62=_0x39dfcb*_0x404c30,_0x2cbf6f=Math['floor'](_0x460e15+Math['max'](_0x28476b-_0x1c26d8,0x0)/0x2),_0x22bf56=Math[_0x15e554(0x24f)](_0x3031fb+Math[_0x15e554(0x29f)](_0x26c597-_0x198a62,0x0)/0x2);this[_0x15e554(0x15e)][_0x15e554(0x237)](_0x400f8a,_0x3f4c94,_0x26b00f,_0x473f93,_0x404c30,_0x2cbf6f,_0x22bf56,_0x1c26d8,_0x198a62),this[_0x15e554(0xfe)](!![]);},Window_StatusBase[_0x4fb4fe(0x254)]['drawItemActorMenuImage']=function(_0x4e098b,_0x50958a,_0x1d1e3b,_0x3dcfa5,_0x2a7f35){const _0x433c1f=_0x4fb4fe,_0x4a2da6=ImageManager[_0x433c1f(0x107)](_0x4e098b['getMenuImage']());_0x3dcfa5=(_0x3dcfa5||ImageManager['faceWidth'])-0x2,_0x2a7f35=(_0x2a7f35||ImageManager['faceHeight'])-0x2;const _0x25048d=_0x4a2da6['width'],_0xcc6ec7=_0x4a2da6['height'],_0xcb5867=_0x3dcfa5,_0x1dfbbe=_0x2a7f35-0x2,_0x2dbe9c=_0x50958a+Math[_0x433c1f(0x24f)](_0xcb5867/0x2),_0x2ba2dd=_0x1d1e3b+Math['ceil']((_0x2a7f35+_0xcc6ec7)/0x2);this[_0x433c1f(0x162)]===Window_MenuStatus&&this[_0x433c1f(0xfe)](_0x4e098b[_0x433c1f(0x267)]());const _0x1c9b96=Math[_0x433c1f(0x178)](_0x3dcfa5,_0x25048d),_0x23c648=Math[_0x433c1f(0x178)](_0x2a7f35,_0xcc6ec7),_0x55406a=_0x50958a+0x1,_0x32698d=Math['max'](_0x1d1e3b+0x1,_0x1d1e3b+_0x1dfbbe-_0xcc6ec7+0x3);let _0xbf6ec9=Math[_0x433c1f(0x1ec)]((_0x25048d-_0x1c9b96)/0x2),_0x5053f9=Math['round']((_0xcc6ec7-_0x23c648)/0x2);_0xbf6ec9-=_0x4e098b[_0x433c1f(0x1f2)](),_0x5053f9-=_0x4e098b[_0x433c1f(0x104)]();if(Imported[_0x433c1f(0x1ba)]){if(VisuMZ[_0x433c1f(0x28e)]['Settings'][_0x433c1f(0x1e7)][_0x433c1f(0x1a8)]){}}this[_0x433c1f(0x15e)][_0x433c1f(0x237)](_0x4a2da6,_0xbf6ec9,_0x5053f9,_0x1c9b96,_0x23c648,_0x55406a,_0x32698d),this['changePaintOpacity'](!![]);},Window_Status['prototype'][_0x4fb4fe(0x183)]=function(_0x2f8143,_0x87e40c,_0x5d0131,_0x53d018,_0x31dee3){const _0x1217b5=_0x4fb4fe;switch(this['graphicType']()){case _0x1217b5(0x1d2):break;case _0x1217b5(0x110):this['drawItemActorSprite'](_0x2f8143,_0x87e40c,_0x5d0131,_0x53d018,_0x31dee3);break;case _0x1217b5(0x134):this[_0x1217b5(0x275)](_0x2f8143,_0x87e40c,_0x5d0131,_0x53d018,_0x31dee3);break;default:Window_StatusBase[_0x1217b5(0x254)][_0x1217b5(0x183)][_0x1217b5(0x21f)](this,_0x2f8143,_0x87e40c,_0x5d0131,_0x53d018,_0x31dee3);break;}},VisuMZ[_0x4fb4fe(0x18b)][_0x4fb4fe(0x202)]=Window_MenuStatus[_0x4fb4fe(0x254)]['selectLast'],Window_MenuStatus[_0x4fb4fe(0x254)]['selectLast']=function(){const _0x1c757d=_0x4fb4fe;VisuMZ[_0x1c757d(0x18b)][_0x1c757d(0x12b)][_0x1c757d(0x1a9)]['StatusSelectLast']?VisuMZ[_0x1c757d(0x18b)][_0x1c757d(0x202)][_0x1c757d(0x21f)](this):this[_0x1c757d(0x154)](0x0);},VisuMZ['MainMenuCore'][_0x4fb4fe(0x2b0)]=Window_MenuStatus[_0x4fb4fe(0x254)][_0x4fb4fe(0x124)],Window_MenuStatus['prototype'][_0x4fb4fe(0x124)]=function(){const _0x2ccb87=_0x4fb4fe;return this[_0x2ccb87(0x173)]()?$gameParty[_0x2ccb87(0x17e)]()[_0x2ccb87(0x224)]:VisuMZ[_0x2ccb87(0x18b)][_0x2ccb87(0x2b0)][_0x2ccb87(0x21f)](this);},Window_MenuStatus[_0x4fb4fe(0x254)]['showOnlyBattleMembers']=function(){const _0x14171f=_0x4fb4fe,_0x13477b=VisuMZ['MainMenuCore'][_0x14171f(0x12b)]['General'];if(_0x13477b[_0x14171f(0x168)]===undefined)_0x13477b[_0x14171f(0x168)]=!![];const _0x2864fa=SceneManager[_0x14171f(0x240)];if(!_0x13477b[_0x14171f(0x168)]){if(_0x13477b[_0x14171f(0x177)])return _0x2864fa[_0x14171f(0x162)]===Scene_Menu;return!![];}return![];},Window_MenuStatus['prototype'][_0x4fb4fe(0x133)]=function(){const _0x1828e3=_0x4fb4fe,_0xefd97=SceneManager[_0x1828e3(0x240)][_0x1828e3(0x162)];return _0xefd97===Scene_Menu?VisuMZ[_0x1828e3(0x18b)][_0x1828e3(0x12b)]['StatusListStyle']:VisuMZ[_0x1828e3(0x18b)]['Settings']['InnerMenuListStyle'];},Window_MenuStatus[_0x4fb4fe(0x254)][_0x4fb4fe(0x172)]=function(){const _0x3fa14b=_0x4fb4fe,_0x4dda09=this[_0x3fa14b(0x133)]();switch(_0x4dda09){case _0x3fa14b(0x1d4):case _0x3fa14b(0x23e):return 0x1;case _0x3fa14b(0x252):return 0x1;default:return $gameParty['maxBattleMembers']();}},Window_MenuStatus['prototype'][_0x4fb4fe(0x16c)]=function(){const _0x394669=_0x4fb4fe,_0x165bca=this[_0x394669(0x133)]();switch(_0x165bca){case _0x394669(0x1d4):case _0x394669(0x23e):return $gameParty[_0x394669(0x11e)]();default:return 0x1;}},VisuMZ[_0x4fb4fe(0x18b)][_0x4fb4fe(0x188)]=Window_MenuStatus[_0x4fb4fe(0x254)][_0x4fb4fe(0x265)],Window_MenuStatus['prototype'][_0x4fb4fe(0x265)]=function(){const _0xedfce7=_0x4fb4fe,_0x2095b7=this[_0xedfce7(0x133)]();switch(_0x2095b7){case _0xedfce7(0x1d4):case _0xedfce7(0x23e):case'solo':return this[_0xedfce7(0x1a6)];case _0xedfce7(0x160):return Window_Selectable[_0xedfce7(0x254)][_0xedfce7(0x265)]['call'](this);case _0xedfce7(0x247):return this[_0xedfce7(0x22d)]()*0x2+0x8;default:return VisuMZ[_0xedfce7(0x18b)][_0xedfce7(0x188)][_0xedfce7(0x21f)](this);}},Window_MenuStatus[_0x4fb4fe(0x254)]['drawItem']=function(_0x4da5d9){const _0x50ba99=_0x4fb4fe;this[_0x50ba99(0x10b)](_0x4da5d9),this[_0x50ba99(0x15c)](_0x4da5d9);},VisuMZ['MainMenuCore'][_0x4fb4fe(0x2ab)]=Window_MenuStatus['prototype'][_0x4fb4fe(0x191)],Window_MenuStatus[_0x4fb4fe(0x254)][_0x4fb4fe(0x131)]=function(_0xdb01c4,_0x11d442,_0x27bfd4,_0x1a9dc4,_0x5bbb58){const _0xe14e8c=_0x4fb4fe;switch(this[_0xe14e8c(0x282)]()){case _0xe14e8c(0x1d2):break;case'sprite':this[_0xe14e8c(0x250)](_0xdb01c4,_0x11d442,_0x27bfd4+0x1,_0x1a9dc4,_0x5bbb58-0x2);break;case _0xe14e8c(0x134):this[_0xe14e8c(0x275)](_0xdb01c4,_0x11d442,_0x27bfd4+0x1,_0x1a9dc4,_0x5bbb58-0x2);break;default:this['drawItemActorFace'](_0xdb01c4,_0x11d442,_0x27bfd4,_0x1a9dc4,_0x5bbb58);break;}},Window_MenuStatus[_0x4fb4fe(0x254)][_0x4fb4fe(0x15c)]=function(_0x2c61b1){const _0x2f9bf7=_0x4fb4fe;this[_0x2f9bf7(0x106)]();const _0x2f205b=this['actor'](_0x2c61b1),_0x3fccb6=this['itemRect'](_0x2c61b1),_0xb4fd14=this['listStyle']();switch(_0xb4fd14){case _0x2f9bf7(0x1d4):this[_0x2f9bf7(0x212)](_0x2f205b,_0x3fccb6);break;case'portrait':this[_0x2f9bf7(0x1e2)](_0x2f205b,_0x3fccb6);break;case _0x2f9bf7(0x252):this[_0x2f9bf7(0x220)](_0x2f205b,_0x3fccb6);break;case _0x2f9bf7(0x160):this[_0x2f9bf7(0x13e)](_0x2f205b,_0x3fccb6);break;case _0x2f9bf7(0x247):this[_0x2f9bf7(0x1dc)](_0x2f205b,_0x3fccb6);break;default:this[_0x2f9bf7(0x102)](_0x2f205b,_0x3fccb6);break;}},Window_MenuStatus[_0x4fb4fe(0x254)][_0x4fb4fe(0x212)]=function(_0x50c5e4,_0x5af490){const _0x2deebc=_0x4fb4fe;VisuMZ[_0x2deebc(0x18b)][_0x2deebc(0x12b)]['ListStyles'][_0x2deebc(0x175)][_0x2deebc(0x21f)](this,_0x50c5e4,_0x5af490);},Window_MenuStatus[_0x4fb4fe(0x254)][_0x4fb4fe(0x1e2)]=function(_0x42e9ef,_0x5eb3ee){const _0x111212=_0x4fb4fe;if(_0x42e9ef[_0x111212(0x1e8)]()!==''){const _0x1b5dae=ImageManager['loadPicture'](_0x42e9ef['getMenuImage']());_0x1b5dae[_0x111212(0x27b)](this['drawItemStatusPortraitStyleOnLoad'][_0x111212(0x259)](this,_0x42e9ef,_0x5eb3ee));}else this[_0x111212(0x212)](_0x42e9ef,_0x5eb3ee);},Window_MenuStatus[_0x4fb4fe(0x254)][_0x4fb4fe(0x206)]=function(_0x4c54cb,_0x8ccc6c){const _0x7c6717=_0x4fb4fe;VisuMZ[_0x7c6717(0x18b)][_0x7c6717(0x12b)][_0x7c6717(0x13b)][_0x7c6717(0x1bf)]['call'](this,_0x4c54cb,_0x8ccc6c);},Window_MenuStatus[_0x4fb4fe(0x254)][_0x4fb4fe(0x220)]=function(_0x168c9f,_0x157216){const _0x5c11ca=_0x4fb4fe,_0x58cb0e=ImageManager['loadPicture'](_0x168c9f[_0x5c11ca(0x1e8)]());_0x58cb0e['addLoadListener'](this[_0x5c11ca(0x1c3)]['bind'](this,_0x168c9f,_0x157216));},Window_MenuStatus['prototype'][_0x4fb4fe(0x1c3)]=function(_0x1731fb,_0x39bf52){const _0x3e07ca=_0x4fb4fe;VisuMZ[_0x3e07ca(0x18b)][_0x3e07ca(0x12b)][_0x3e07ca(0x13b)]['SoloStyle'][_0x3e07ca(0x21f)](this,_0x1731fb,_0x39bf52);},Window_MenuStatus[_0x4fb4fe(0x254)][_0x4fb4fe(0x13e)]=function(_0x4ff994,_0x44e24b){const _0x556dd7=_0x4fb4fe;VisuMZ['MainMenuCore'][_0x556dd7(0x12b)][_0x556dd7(0x13b)]['ThinStyle']['call'](this,_0x4ff994,_0x44e24b);},Window_MenuStatus[_0x4fb4fe(0x254)][_0x4fb4fe(0x1dc)]=function(_0x18a68e,_0x3424b7){const _0x49c66f=_0x4fb4fe;VisuMZ['MainMenuCore']['Settings'][_0x49c66f(0x13b)][_0x49c66f(0x29b)]['call'](this,_0x18a68e,_0x3424b7);},Window_MenuStatus['prototype']['isExpGaugeDrawn']=function(){const _0xa44157=_0x4fb4fe,_0xc2391c=this[_0xa44157(0x133)]();if([_0xa44157(0x160),_0xa44157(0x247)][_0xa44157(0x24e)](_0xc2391c))return![];return Window_StatusBase[_0xa44157(0x254)][_0xa44157(0x19a)][_0xa44157(0x21f)](this);},Window_MenuStatus[_0x4fb4fe(0x254)]['drawItemStatusDefaultStyle']=function(_0x5f5cb2,_0x2a37be){const _0xde4347=_0x4fb4fe;VisuMZ[_0xde4347(0x18b)][_0xde4347(0x12b)][_0xde4347(0x13b)][_0xde4347(0x266)]['call'](this,_0x5f5cb2,_0x2a37be);},Window_SkillStatus[_0x4fb4fe(0x254)][_0x4fb4fe(0x183)]=function(_0x380758,_0x1433fd,_0x207c1f,_0x3cb2f1,_0x4efab0){const _0x4545ce=_0x4fb4fe;switch(this['graphicType']()){case _0x4545ce(0x1d2):break;case'sprite':this[_0x4545ce(0x250)](_0x380758,_0x1433fd,_0x207c1f,_0x3cb2f1,_0x4efab0);break;case _0x4545ce(0x134):this[_0x4545ce(0x275)](_0x380758,_0x1433fd,_0x207c1f,_0x3cb2f1,_0x4efab0);break;default:Window_StatusBase['prototype'][_0x4545ce(0x183)][_0x4545ce(0x21f)](this,_0x380758,_0x1433fd,_0x207c1f,_0x3cb2f1,_0x4efab0);break;}},Window_EquipStatus[_0x4fb4fe(0x254)]['drawActorFace']=function(_0x8f5b36,_0xb413b0,_0x57fee2,_0x2c2b33,_0x4c0f57){const _0x43419e=_0x4fb4fe;switch(this[_0x43419e(0x282)]()){case _0x43419e(0x1d2):break;case _0x43419e(0x110):this[_0x43419e(0x250)](_0x8f5b36,_0xb413b0,_0x57fee2,_0x2c2b33,_0x4c0f57);break;case'svbattler':this[_0x43419e(0x275)](_0x8f5b36,_0xb413b0,_0x57fee2,_0x2c2b33,_0x4c0f57);break;default:Window_StatusBase[_0x43419e(0x254)][_0x43419e(0x183)][_0x43419e(0x21f)](this,_0x8f5b36,_0xb413b0,_0x57fee2,_0x2c2b33,_0x4c0f57);break;}};function _0x4e2b(){const _0x16f3a3=['item','addFormationCommand','backgroundImage','iconWidth','onerror','AdjustCommandHeight','onSaveCoreLoadFailure','playtimeWindowRect','commandWindowRect','isMainMenuCommandVisible','Symbols','createBackground','loadGame','initMenuImage','TextAlign','needsDummyWindow','CallHandlerJS','bitmap','initialize','smoothSelect','loadBitmap','thinBottom','commandWindowRectThinBottomStyle','_commandWindow','removeSubcategory','loadSystemImages','FontSize','drawItemStatus','Untitled','contents','createActorMenuBackgroundImageSprite','thin','commandWindowStyle','constructor','Rows','_actorMenuBgSprite','createPlaytimeWindow','faceHeight','_dummyWindow','ShowReserve','drawTimeIcon','_scrollDuration','forceShowMainMenuCommand','maxCols','terminate','playBuzzer','auto','Scene_MenuBase_createBackground','Scene_Menu_commandPersonal','numVisibleRows','showOnlyBattleMembers','mainAreaTop','VerticalStyle','windowPadding','HideMainMenuOnly','min','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','left','MenuCommandForceShow','SoloQuick','EnableJS','battleMembers','_timer','currentSymbol','_list','commandNameWindowCenter','drawActorFace','setActor','statusWindowRectTopStyle','variableWindowRectTopStyle','create','Window_MenuStatus_itemHeight','Scene_Menu_commandWindowRect','goldWindowRectBottomStyle','MainMenuCore','mousemove','loadFaceImages','setTargetActor','thinGoldWindow','drawTimeLabel','drawItemImage','\x0aMain\x20Menu\x20Core\x27s\x20\x22Custom\x20Mouse\x20Cursor\x22\x20has\x20moved\x20image\x20location','_targetX','commandFormation','idleFilenameIcon','actor','open','_playtimeWindow','touchmove','isExpGaugeDrawn','CustomCmdWin','mainAreaBottom','reserveCommonEvent','SUBCATEGORY_LIST','Scene_Menu_onFormationCancel','members','StatusGraphic','Game_Actor_setup','VarList','commandStyleCheck','getMainMenuSymbolState','innerHeight','drawSvActor','PixelateImageRendering','General','fontSize','clear','1765830YMnWpq','refresh','commandWindowRectMobileStyle','WindowRect','cursor','playtimeWindowRectBottomStyle','_mainMenuCore','Scene_Menu_commandFormation','drawText','_statusWindow','display','anchorX','Step1','getSubcategoryList','VisuMZ_0_CoreEngine','calcWindowHeight','exit','12zWrXbp','right','PortraitStyle','concat','addWindow','Time','drawItemStatusSoloStyleOnLoad','\x0a\x0aSorry\x20for\x20the\x20inconvenience.','activate','innerWidth','isSubcategoryVisible','Save','ActorBgMenuJS','\x0a\x0aPlease\x20move\x20the\x20cursor\x20file(s)\x20as\x20well\x20as\x20update\x20the\x20Plugin\x20Parameters.','commandCommonEvent','Step2','BgType','Style','playLoad','commandWindowRectThinTopStyle','drawAllItems','none','drawItemBackground','vertical','pointerEvents','replace','changeTextColor','addCommand','standardIconWidth','itemLineRect','statusWindowRectBottomStyle','drawItemStatusThickerStyle','variables','_menuImage','forceDisable','registerCommand','characterIndex','drawItemStatusPortraitStyle','style','isDisplayActorMenuBackgroundImage','IsCustomCursorEnabled','text','QoL','getMenuImage','ActorBgMenus','catch','NO\x20ACTOR\x20FOUND!','round','Scene_Menu_onPersonalCancel','goldWindowRect','FUNC','url(','shift','getMenuImageOffsetX','setHandler','height','adjustCommandHeightByPlaytime','_commandList','_actor','commandName','playtimeText','loadSvActor','initMainMenuCore','AutoGoldY','_bitmapReady','currentSubcategory','SetupCustomCursor','ARRAYJSON','filter','Window_MenuStatus_selectLast','adjustDefaultCommandWindowRect','body','updatePosition','drawItemStatusPortraitStyleOnLoad','ConvertParams','\x0ato\x20a\x20different\x20directory:\x20the\x20game\x20project\x27s\x20/icon/\x20folder.','pageY','forceHideMainMenuCommand','ChangeActorMenuImageGroup','loadOtherActorImages','format','idleFilename','Variable','STR','drawTextEx','drawItemStatusVerticalStyle','trim','createVariableWindow','mouseup','ChangeActorMenuImageJS_v124','onSaveCoreLoadSuccess','Scene_Boot_loadSystemImages_MC','clickFilenameIcon','makeMainMenuCoreCommandList','_subcategory','⚠️⚠️⚠️WARNING!⚠️⚠️⚠️','description','885Ijlawu','call','drawItemStatusSoloStyle','createCommandNameWindow','Scene_MenuBase_updateActor','_goldWindow','length','center','VisuMZ_1_SaveCore','textSizeEx','commandNameWindowDrawText','note','loadCharacter','drawItemStyleIcon','Scene_Menu_statusWindowRect','lineHeight','updateTimer','addMainCommands','remove','createStatusWindow','MouseCursor','_duration','createCommandWindow','toUpperCase','ExtJS','blt','ARRAYSTRUCT','icon','commandStyle','createElement','addChild','commandPersonal','portrait','isMainMenuCommandEnabled','_scene','parameters','MenuCommandClear','ActorJS','width','Step1End','bottom','thicker','drawIcon','_data','value','div','onAfterLoad','Subcategory','includes','floor','drawItemActorSprite','Enable','solo','setSubcategory','prototype','resetTextColor','forceDisableMainMenuCommand','src','return\x200','bind','hasStaticSvBattler','_variableWindow','playtimeWindowRectTopStyle','4684QADCpT','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','ShowJS','variableWindowRect','isMobileDevice','Symbol','mainCommandWidth','openness','itemHeight','DefaultStyle','isBattleMember','push','name','touches','overflow','characterName','Step1Start','Scene_Menu_goldWindowRect','options','topIndex','isCommandEnabled','_loadSuccess','applyThinnerGoldWindowRect','forceEnableMainMenuCommand','drawItemActorSvBattler','forceShow','PersonalHandlerJS','OnLoadFailureJS','MenuCommandForceDisable','SaveCore','addLoadListener','updateCommandNameWindow','updateDuration','makeCommandList','drawPlaytime','systemColor','cancel','graphicType','drawItemStyleIconText','drawItem','forceHide','mainMenuCoreSettings','variableWindowRectBottomStyle','clickFilename','hidden','addOptionsCommand','close','setup','onload','CoreEngine','addSymbolBridge','addEventListener','updateSmoothScroll','select','goldWindowRectTopStyle','default','createDummyWindow','subcategory','Scene_Title_terminate','appendChild','formation','AutoGoldHeight','ThickerStyle','boxWidth','410qfuQqn','_targetY','max','Icon','ceil','MobileThickness','8854934SFLZPT','commandNameWindowDrawBackground','fadeOutAll','faceWidth','setBackgroundType','icon/','1000','TextJS','Window_MenuStatus_drawItemImage','adjustStatusWindowMobile','clearShowMainMenuCommand','iconHeight','isIncludedInSubcategory','Window_MenuStatus_maxItems','currentExt','_mainMenuSubcategory','mobile','top','commandWindowRectTopStyle','FilenameJS','Scene_Menu_createStatusWindow','doesSubcategoryExist','addGameEndCommand','update','JSON','TextStr','OnLoadSuccessJS','iconText','onPersonalCancel','changePaintOpacity','Window_StatusBase_loadFaceImages','battlerName','log','drawItemStatusDefaultStyle','updateOpacity','getMenuImageOffsetY','statusWindowRectMobileStyle','resetFontSettings','loadPicture','forceEnable','MenuCommandForceHide','map','drawPendingItemBackground','MenuCommandForceEnable','Window_MenuCommand_initialize','svActorVertCells','setTopRow','sprite','canCreatePlaytimeWindow','itemTextAlign','position','_commandNameWindow','onFormationCancel','onPersonalOk','match','Game_System_initialize','thinTop','adjustCommandHeightByVariable','28hWvaWc','659662dvekri','index','maxBattleMembers','970855QqJRTh','866168lGaJRS','isBigCharacter','onBitmapLoad','popScene','maxItems','Playtime','ChangeActorMenuImageRange','opacity','colSpacing','addOriginalCommands','loadFailureConfirmationWindow','Settings','isSoloQuickMode','updateActor','commandLoad','saveStyle','94005dJngVy','drawActorGraphic','svActorHorzCells','listStyle','svbattler','ChangeActorMenuImageJS','setMenuImage','mainAreaHeight','_playtimeText','pageX','parse','ListStyles','Cols','Scene_Menu_create','drawItemStatusThinStyle','canCreateVariableWindow','version'];_0x4e2b=function(){return _0x16f3a3;};return _0x4e2b();}function Window_ThinGold(){const _0x19e037=_0x4fb4fe;this[_0x19e037(0x153)](...arguments);}Window_ThinGold[_0x4fb4fe(0x254)]=Object['create'](Window_Gold[_0x4fb4fe(0x254)]),Window_ThinGold[_0x4fb4fe(0x254)][_0x4fb4fe(0x162)]=Window_ThinGold,Window_ThinGold['prototype'][_0x4fb4fe(0x265)]=function(){return this['lineHeight']();},Window_ThinGold[_0x4fb4fe(0x254)]['colSpacing']=function(){const _0x5a92c4=_0x4fb4fe;return Window_Selectable[_0x5a92c4(0x254)][_0x5a92c4(0x128)][_0x5a92c4(0x21f)](this);};function Window_Playtime(){const _0x44a1c4=_0x4fb4fe;this[_0x44a1c4(0x153)](...arguments);}Window_Playtime['prototype']=Object[_0x4fb4fe(0x187)](Window_Selectable['prototype']),Window_Playtime['prototype'][_0x4fb4fe(0x162)]=Window_Playtime,Window_Playtime[_0x4fb4fe(0x254)][_0x4fb4fe(0x153)]=function(_0x117fe7){const _0x3e0074=_0x4fb4fe;this[_0x3e0074(0x138)]=$gameSystem[_0x3e0074(0x1f9)](),this[_0x3e0074(0x17f)]=0x3c,Window_Selectable[_0x3e0074(0x254)][_0x3e0074(0x153)][_0x3e0074(0x21f)](this,_0x117fe7),this[_0x3e0074(0x1ad)]();},Window_Playtime[_0x4fb4fe(0x254)][_0x4fb4fe(0x265)]=function(){const _0x3b3a4a=_0x4fb4fe;return this[_0x3b3a4a(0x22d)]();},Window_Playtime[_0x4fb4fe(0x254)][_0x4fb4fe(0x2ba)]=function(){const _0x194692=_0x4fb4fe;Window_Selectable[_0x194692(0x254)][_0x194692(0x2ba)]['call'](this),this[_0x194692(0x22e)]();},Window_Playtime[_0x4fb4fe(0x254)][_0x4fb4fe(0x22e)]=function(){const _0x14f279=_0x4fb4fe;if(this[_0x14f279(0x17f)]-->0x0){if(this[_0x14f279(0x17f)]<=0x0)this['refresh']();}},Window_Playtime[_0x4fb4fe(0x254)][_0x4fb4fe(0x1ad)]=function(){const _0x47cbc4=_0x4fb4fe;this[_0x47cbc4(0x17f)]=0x3c;const _0x3fca11=this['itemLineRect'](0x0),_0x78ffa1=_0x3fca11['x'],_0x28cd1a=_0x3fca11['y'],_0x1487ea=_0x3fca11[_0x47cbc4(0x244)];this[_0x47cbc4(0x15e)][_0x47cbc4(0x1ab)](),this[_0x47cbc4(0x169)](_0x3fca11),this[_0x47cbc4(0x190)](_0x3fca11),this[_0x47cbc4(0x27f)](_0x3fca11);},Window_Playtime[_0x4fb4fe(0x254)]['resetFontSettings']=function(){const _0xa144f2=_0x4fb4fe;Window_Selectable[_0xa144f2(0x254)][_0xa144f2(0x106)][_0xa144f2(0x21f)](this),this[_0xa144f2(0x15e)][_0xa144f2(0x1aa)]=VisuMZ['MainMenuCore'][_0xa144f2(0x12b)][_0xa144f2(0x125)]['FontSize'];},Window_Playtime[_0x4fb4fe(0x254)][_0x4fb4fe(0x169)]=function(_0xeb10db){const _0x429deb=_0x4fb4fe;if(VisuMZ[_0x429deb(0x18b)][_0x429deb(0x12b)]['Playtime']['Icon']>0x0){const _0x5a4d68=ImageManager[_0x429deb(0x1d9)]||0x20,_0x2f9f12=_0x5a4d68-ImageManager[_0x429deb(0x144)],_0xf535fd=_0x5a4d68+0x4,_0x2ea850=VisuMZ['MainMenuCore'][_0x429deb(0x12b)][_0x429deb(0x125)][_0x429deb(0x2a0)],_0x3e7e79=_0xeb10db['y']+(this[_0x429deb(0x22d)]()-ImageManager[_0x429deb(0x2ae)])/0x2;this[_0x429deb(0x248)](_0x2ea850,_0xeb10db['x']+Math['ceil'](_0x2f9f12/0x2),_0x3e7e79),_0xeb10db['x']+=_0xf535fd,_0xeb10db[_0x429deb(0x244)]-=_0xf535fd;}},Window_Playtime[_0x4fb4fe(0x254)][_0x4fb4fe(0x190)]=function(_0x2d022b){const _0x499aaf=_0x4fb4fe;this[_0x499aaf(0x106)](),this[_0x499aaf(0x1d7)](ColorManager[_0x499aaf(0x280)]());const _0xf7f454=VisuMZ[_0x499aaf(0x18b)]['Settings']['Playtime'][_0x499aaf(0x1c2)];this[_0x499aaf(0x1b4)](_0xf7f454,_0x2d022b['x'],_0x2d022b['y'],_0x2d022b[_0x499aaf(0x244)],'left'),this[_0x499aaf(0x255)]();},Window_Playtime[_0x4fb4fe(0x254)][_0x4fb4fe(0x27f)]=function(_0x2431c1){const _0x34b629=_0x4fb4fe,_0x539f58=$gameSystem[_0x34b629(0x1f9)]();this[_0x34b629(0x1b4)](_0x539f58,_0x2431c1['x'],_0x2431c1['y'],_0x2431c1[_0x34b629(0x244)],_0x34b629(0x1be));};function Window_MenuVariables(){this['initialize'](...arguments);}Window_MenuVariables['prototype']=Object[_0x4fb4fe(0x187)](Window_Selectable[_0x4fb4fe(0x254)]),Window_MenuVariables[_0x4fb4fe(0x254)]['constructor']=Window_MenuVariables,Window_MenuVariables['prototype']['initialize']=function(_0x24917c){const _0xb5370d=_0x4fb4fe;Window_Selectable[_0xb5370d(0x254)]['initialize'][_0xb5370d(0x21f)](this,_0x24917c),this[_0xb5370d(0x249)]=VisuMZ['MainMenuCore']['Settings']['Variable'][_0xb5370d(0x1a3)],this['refresh']();},Window_MenuVariables[_0x4fb4fe(0x254)][_0x4fb4fe(0x265)]=function(){const _0x11ae35=_0x4fb4fe;return this[_0x11ae35(0x22d)]();},Window_MenuVariables[_0x4fb4fe(0x254)]['maxCols']=function(){const _0x2b9884=_0x4fb4fe,_0x2e305b=SceneManager['_scene'][_0x2b9884(0x161)]();return _0x2e305b==='default'?0x1:VisuMZ[_0x2b9884(0x18b)][_0x2b9884(0x12b)][_0x2b9884(0x20f)][_0x2b9884(0x1a3)][_0x2b9884(0x224)];},Window_MenuVariables[_0x4fb4fe(0x254)][_0x4fb4fe(0x106)]=function(){const _0x101bc4=_0x4fb4fe;Window_Selectable[_0x101bc4(0x254)]['resetFontSettings'][_0x101bc4(0x21f)](this),this['contents'][_0x101bc4(0x1aa)]=VisuMZ[_0x101bc4(0x18b)][_0x101bc4(0x12b)][_0x101bc4(0x20f)][_0x101bc4(0x15b)],this[_0x101bc4(0x1d7)](ColorManager[_0x101bc4(0x280)]());},Window_MenuVariables[_0x4fb4fe(0x254)][_0x4fb4fe(0x124)]=function(){const _0x18ebc8=_0x4fb4fe;return this[_0x18ebc8(0x249)][_0x18ebc8(0x224)];},Window_MenuVariables['prototype'][_0x4fb4fe(0x1d1)]=function(){const _0x9dd97c=_0x4fb4fe,_0x44b258=this[_0x9dd97c(0x270)]();for(let _0x24d731=0x0;_0x24d731<this['maxVisibleItems']();_0x24d731++){const _0x50ea8d=_0x44b258+_0x24d731;_0x50ea8d<this['maxItems']()&&(this[_0x9dd97c(0x1d3)](_0x50ea8d),this[_0x9dd97c(0x284)](_0x50ea8d));}},Window_MenuVariables[_0x4fb4fe(0x254)][_0x4fb4fe(0x1d3)]=function(_0x38f975){},Window_MenuVariables[_0x4fb4fe(0x254)][_0x4fb4fe(0x284)]=function(_0x3f7a15){const _0x450ef6=_0x4fb4fe,_0x28bc4b=this['_data'][_0x3f7a15];if(_0x28bc4b<=0x0)return;if(!$dataSystem[_0x450ef6(0x1dd)][_0x28bc4b])return;const _0x557a23=this[_0x450ef6(0x1da)](_0x3f7a15);this['resetFontSettings']();let _0x23d401=0x0,_0x15b71b=$dataSystem[_0x450ef6(0x1dd)][_0x28bc4b][_0x450ef6(0x213)]();_0x15b71b[_0x450ef6(0x117)](/\\I\[(\d+)\]/i)&&(_0x23d401=Number(RegExp['$1']),_0x15b71b=_0x15b71b[_0x450ef6(0x1d6)](/\\I\[(\d+)\]/i,'')[_0x450ef6(0x213)]());if(_0x23d401>0x0){const _0x2647d7=ImageManager[_0x450ef6(0x1d9)]||0x20,_0x2f453c=_0x2647d7-ImageManager['iconWidth'],_0x407d10=_0x2647d7+0x4,_0x27e397=_0x557a23['y']+(this[_0x450ef6(0x22d)]()-ImageManager[_0x450ef6(0x2ae)])/0x2;this[_0x450ef6(0x248)](_0x23d401,_0x557a23['x']+Math[_0x450ef6(0x2a1)](_0x2f453c/0x2),_0x27e397),_0x557a23['x']+=_0x407d10,_0x557a23[_0x450ef6(0x244)]-=_0x407d10;}this['drawText'](_0x15b71b,_0x557a23['x'],_0x557a23['y'],_0x557a23['width'],'left'),this[_0x450ef6(0x1d7)](ColorManager['normalColor']()),this[_0x450ef6(0x1b4)]($gameVariables[_0x450ef6(0x24a)](_0x28bc4b),_0x557a23['x'],_0x557a23['y'],_0x557a23[_0x450ef6(0x244)],_0x450ef6(0x1be));};