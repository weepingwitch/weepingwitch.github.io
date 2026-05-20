//=============================================================================
// VisuStella MZ - Core Engine
// VisuMZ_0_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_0_CoreEngine = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CoreEngine = VisuMZ.CoreEngine || {};
VisuMZ.CoreEngine.version = 1.90;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 1.90] [CoreEngine]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Core_Engine_VisuStella_MZ
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Core Engine plugin is designed to fix any bugs that may have slipped
 * past RPG Maker MZ's source code and to give game devs more control over
 * RPG Maker MZ's various features, ranging from mechanics to aesthetics to
 * quality of life improvements.
 *
 * Features include all (but not limited to) the following:
 *
 * * Bug fixes for the problems existing in the RPG Maker MZ base code.
 * * Failsafes added for Script Call related event commands.
 * * Lots of Quality of Life Settings that can be activated through the
 *   Plugin Parameters.
 * * Control over the various Text Colors used throughout the game.
 * * Change up the maximum amount of gold carried, give it an icon attached to
 *   the label, and include text for overlap specifics.
 * * Preload images as the game boots up.
 * * Add specific background images for menus found throughout the game.
 * * A button assist window will appear at the top or bottom of the screen,
 *   detailing which buttons do what when inside a menu. This feature can be
 *   turned off.
 * * Choose which in-game battler parameters to display inside menus (ie ATK,
 *   DEF, AGI, etc.) and determine their maximum values, along with plenty of
 *   notetags to give more control over parameter, x-parameter, s-parameter
 *   bonuses through equipment, states, and other trait objects.
 * * Control over how the UI objects appear (such as the menu button, cancel
 *   button, left/right actor switch buttons).
 * * Reposition actors and enemies if the battle resolution is larger.
 * * Allow class names and nicknames to support text codes when displayed.
 * * Determine how windows behave in the game, if they will mask other windows,
 *   their line height properties, and more.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 0 ------
 *
 * This plugin is a Tier 0 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ Plugin library.
 *
 * ============================================================================
 * Important Changes: Bug Fixes
 * ============================================================================
 *
 * This plugin also serves to fix various bugs found in RPG Maker MZ that have
 * been unaddressed or not yet taken care of. The following is a list of bugs
 * that have been fixed by this plugin:
 *
 * ---
 *
 * Attack Skill Trait
 *
 * Enemies are unaffected by the Attack Skill Trait. This means if they have
 * an Attack action, they will always use Attack over and over even if their
 * Attack Skill Trait has been changed. This plugin will change it up so that
 * the Attack skill will comply with whatever their Attack Skill Trait's skill
 * is set to.
 *
 * ---
 *
 * Auto Battle Actor Skill Usage
 *
 * If an actor with Auto Battle has access to a skill but not have any access
 * to that skill's type, that actor will still be able to use the skill during
 * Auto Battle despite the fact that the actor cannot use that skill during
 * manual input.
 *
 * ---
 * 
 * Auto Battle Attack Seal Bypass
 * 
 * By default, if the attack skill is sealed via a trait and an actor has
 * auto-battle, the action can still be used via auto-battle. This is now fixed
 * and actors should not be able to attack via auto-battle if their attack
 * ability is sealed.
 * 
 * ---
 * 
 * Auto Battle Lock Up
 * 
 * If an auto battle Actor fights against an enemy whose DEF/MDF is too high,
 * they will not use any actions at all. This can cause potential game freezing
 * and softlocks. This plugin will change that and have them default to a
 * regular Attack.
 * 
 * ---
 * 
 * Auto Save After New Game
 * 
 * Normally, when starting a new game through the "New Game" option, there is
 * no auto save trigger. However, if you start a new game or load a saved game,
 * then go to the Game End screen, return back to the title screen, then start
 * a New Game, the auto save trigger occurs when it shouldn't. The Core Engine
 * will now patch this and prevent the trigger from taking place.
 * 
 * ---
 * 
 * Battle Forced End Action Crash
 * 
 * Depending on various circumstances, currently active battlers can be cleared
 * from the battle system at will due to a number of reasons. However, if it
 * just so happens that the targets are cleared, too, with actions remaining,
 * then a crash will follow up. This plugin will prevent that change. Fix made
 * by Olivia.
 * 
 * ---
 * 
 * Debug Console Refresh Bug
 * 
 * When pressing F5 to refresh while the debug console (DevTools) is open,
 * some graphics will fail to load properly. This started occurring since the
 * RPG Maker MZ 1.5.0 update and the code for loading the images has now been
 * reverted to the 1.4.4 version where it was last stable.
 * 
 * ---
 * 
 * Gamepad Repeat Input
 * 
 * Cleared inputs on gamepads do not have a downtime and will trigger the
 * following input frame. The causes problems with certain RPG Maker MZ menus
 * where the inputs have to be cleared as the next immediate frame will have
 * them inputted again. This plugin changes it so that whenever inputs are
 * cleared, there is a downtime equal to the keyboard clear frames before the
 * gamepad input is registered once more.
 * 
 * ---
 * 
 * Invisible Battle Sprites
 * 
 * If you removed a party member during battle and added that exact party
 * member back into the same slot, their sprite would appear invisible. The
 * VisuStella Core Engine will fix this problem and prevent it from happening.
 * 
 * ---
 * 
 * Instant Text Discrepancy for Window_Message
 * 
 * Window_Message displays text differently when it draws letters one by one
 * versus when the text is displayed instantly. This isn't noticeable with the
 * default font, but it's very visible when using something like Arial. The
 * error is due to Bitmap.measureTextWidth yielding a rounded value per letter
 * versus per word. The Core Engine will provide a bug fix that will single out
 * the cause and make it so that only Window_Message will not utilize any round
 * number values when determining the width of each letter, whether or not it
 * is shown instantly. This change will only affect Window_Message and not any
 * other window in order to prevent unintended side effects.
 * 
 * This can be disabled through the Plugin Parameters:
 * 
 * Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * 
 * ---
 *
 * Move Picture, Origin Differences
 *
 * If a Show Picture event command is made with an Origin setting of
 * "Upper Left" and a Move Picture event command is made afterwards with an
 * Origin setting of "Center", RPG Maker MZ would originally have it instantly
 * jump into the new origin setting without making a clean transition between
 * them. This plugin will create that clean transition between origins.
 *
 * ---
 * 
 * Overly-Protective Substitute
 * 
 * When an ally with critical health is being targeted by a friendly non-
 * Certain Hit skill (such as a heal or buff) and another ally has the
 * substitute state, the other ally would "protect" the originally targeted
 * ally and take the heal or buff.
 * 
 * The new changed behavior is that now, substitute will not trigger for any
 * actions whose scope targets allies.
 * 
 * ---
 * 
 * Skill List Active After Party Member Change
 * 
 * If the skill list is active (ie. the player can move the cursor around) and
 * the party member currently being viewed is changed via the button commands,
 * then previously, RPG Maker MZ would still have that window be active despite
 * having the cursor hidden temporarily. Upon pressing direction buttons, the
 * cursor reveals itself and both the skill type window and skill list window
 * are both active, making way for lots of potential problems to happen.
 * 
 * ---
 * 
 * Sprite Removal and Destroy Crash
 * 
 * A texture check will now occur for sprites that are being removed and
 * destroyed in order to prevent crashes. In the off chance that someone
 * creates a sprite through a script call and removes it through such, the
 * likelihood of this occurance becomes higher. This makes the "destroy"
 * property take into account a texture check in order to see if the sprite
 * removal is taking extra steps and will reduce those extra steps.
 * 
 * ---
 * 
 * Status Window Name Vertical Cutoffs
 * 
 * In the battle status windows, whenever actor names are displayed, the bitmap
 * used to display their name text do not extend vertically all the way,
 * causing letters like lowercase "Q" and "G" to be cut off, making them hard
 * to distinguish from one another. The Core Engine will remedy this by
 * extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * ---
 * 
 * Termination Clear Effects
 * 
 * In RPG Maker MZ, requesting an animation while transitioning between
 * scenes, such as going from the map scene to the battle scene, can cause
 * crashes. This is because the animation queue does not take off immediately
 * and will likely register incorrect targets for the scene. This plugin will
 * forcefully clear any registered animations and balloon effects when
 * terminating a scene in order to prevent crashes.
 * 
 * ---
 * 
 * Timer Sprite
 * 
 * By default, RPG Maker MZ adds Sprite_Timer into its spriteset, either for
 * maps or for battles. There is one major problem with this: when spritesets
 * are affected by filters, zooms, and/or blurs, this hinders how readable the
 * timer sprite is, making the information perceived by the player to be much
 * harder than it needs to be. The Core Engine adds the sprite to the parent
 * scene instead of the spriteset to ensure it's unobscured by anything else.
 * 
 * ---
 * 
 * Unusable Battle Items
 * 
 * If any party member is able to use an item in battle, then all party members
 * are able to use said item, even if that party member is supposed to be
 * unable to use that item. This is now changed so that battle items are
 * checked on an individual basis and not on a party-wide basis.
 * 
 * ---
 * 
 * Water Tile Bug
 * 
 * It seems like there's a new bug that occurs if you create a tileset from
 * scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 * does is it causes many tiles to become water tiles without intending to.
 * You can find this out by turning off all the plugins in your project,
 * putting a Ship or Boat on what are normally ground tiles, and then seeing
 * the Ship or Boat traverse through it.
 * 
 * There are two ways to fix this. We cannot fix it through code in this plugin
 * as it's a problem that involves the tileset json data there are ways to work
 * around it so that you can get the proper water-flags to go where they need
 * to be at.
 * 
 * 1. Copy a working un-bugged tileset onto the currently bugged one and
 *    reapply the tile features like passability, terrain tags, etc. This will
 *    make sure the water-passability tiles get copied over correctly.
 * 
 * 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *    un-bugged tileset (usually a pre-existing tileset when a new project is
 *    made), click the "Copy Page" button, go to the bugged tileset and press
 *    "Paste Page". You'll have to reapply any different properties like
 *    passabilities and terrain tags, but the water tile flags should now be
 *    working properly.
 * 
 * The plugin will not fix the problem itself since flag data is delicate and
 * should not be tampered with midgame as the changes made by the plugin might
 * not match the desired settings.
 * 
 * This plugin, however, will also send out an alert message when coming across
 * such a tile. Pay attention to it and do one of the following two steps above
 * to fix the problem.
 * 
 * ---
 * 
 * Window Arrows Sprite Tearing
 * 
 * If a window object in RPG Maker MZ were to have an odd number for width size
 * then the arrow elements found for the window would be positioned on a half
 * pixel, giving it a blurry look and also have sprite tearing issues. This is
 * now fixed by rounding the number to the nearest whole number.
 * 
 * ---
 * 
 * Window Client Area Scaling Bug
 * 
 * If the window has a scale value different from 1.0, the client area (the
 * interactable parts) will not scale properly and appear clipped out. This
 * is now fixed by adjusting the client area to the window's scale values and
 * rounding upward to the nearest whole number.
 * 
 * ---
 * 
 * Window Skin Bleeding
 * 
 * This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 * been set from 96 to 95. This results in the window skin bleeding past the
 * window's intended borders. The Core Engine now reverts this change to
 * prevent the bleeding effect from happening.
 * 
 * ---
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Scroll-Linked Pictures
 *
 * - If a Parallax has a ! at the start of its filename, it is bound to the map
 * scrolling. The same thing now happens with pictures. If a Picture has a ! at
 * the start of its filename, it is bound to the map's scrolling as well.
 *
 * ---
 *
 * Movement Route Scripts
 *
 * - If code in a Movement Route Script command fails, instead of crashing the
 * game, it will now act as if nothing happened except to display the cause of
 * the error inside the console.
 *
 * ---
 * 
 * Script Call Failsafes
 * 
 * - If code found in Conditional Branches, Control Variables, and/or Script
 * Calls fail to activate, instead of crashing the game, it will now act as if
 * nothing happened except to display the cause of the error inside the
 * console.
 * 
 * ---
 * 
 * Digit Grouping
 * 
 * - There exists an option to change how numbers are displayed and converted
 * in your game. This option can be enabled or disabled by going into the
 * Plugin Manager > VisuMZ_0_OptionsCore > Quality of Life Settings >
 * Digit Grouping and toggling on/off whichever ones you want.
 * 
 * - Digit Grouping will follow the rules of whatever country/locale the Plugin
 * Parameters are set to. If it's to default 'en-US', then 1234567.123456 will
 * become 1,234,567.123456. Set it to 'es-ES' and it becomes 1.234.567,123456
 * instead.
 * 
 * - This uses JavaScript's Number.toLocaleString() function and will therefore
 * follow whatever rules it has. This means if there are trailing zeroes at the
 * end of a decimal, it will cut them off. Numbers like 123.45000 will become
 * 123.45 instead. Excess numbers past 6 decimal places will be rounded. A
 * number like 0.123456789 will become 0.123457 instead.
 * 
 * - Numbers in between [ and ], < and > will be excluded from digit grouping
 * in order for text codes to be preserved accurately. \I[1234] will remain as
 * \I[1234].
 * 
 * - If you would like to enter in a number without digit grouping, surround it
 * with {{ and }}. Typing in {{1234567890}} will yield 1234567890.
 * 
 * ---
 * 
 * Show Scrolling Text, additional functionality
 * 
 * The event command "Show Scrolling Text" now has additional functionality as
 * long as the VisuStella MZ Core Engine is installed. If the game dev inserts
 * "// Script Call" (without the quotes) inside the scrolling text, then the
 * entirity of the Show Scrolling Text event command will be ran as a giant
 * script call event command.
 * 
 * The reason why this functionality is added is because the "Script..." event
 * command contains only 12 lines maximum. This means for any script call
 * larger than 12 lines of code cannot be done by normal means as each script
 * call is ran as a separate instance.
 * 
 * By repurposing the "Show Scrolling Text" event command to be able to
 * function as an extended "Script..." event command, such a thing is now
 * possible with less hassle and more lines to code with.
 * 
 * This effect does not occur if the Show Scrolling Text event command does not
 * have "// Script Call" in its contents.
 * 
 * ---
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
 * === Actors-Related Notetags ===
 *
 * Parameter limits can be adjusted in the Plugin Parameters, but this won't
 * lift the ability to change the values of an actor's initial or max level
 * past the editor's limits. Instead, this must be done through the usage of
 * notetags to accomplish the feat.
 *
 * ---
 *
 * <Max Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's max level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * <Initial Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's initial level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * === Classes-Related Notetags ===
 *
 * As actor levels can now surpass 99 due to the notetag system, there may be
 * some skills you wish certain classes can learn upon reaching higher levels
 * past 99, too.
 *
 * ---
 * 
 * <Learn At Level: x>
 *
 * - Used for: Class Skill Learn Notetags
 * - Replace 'x' with an integer to determine the level this class will learn
 *   the associated skill at.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the class's database value.
 *
 * ---
 *
 * === Enemies-Related Notetags ===
 *
 * Enemies are now given levels. The levels don't do anything except to serve
 * as a container for a number value. This way, levels can be used in damage
 * formulas (ie. a.atk - b.level) without causing any errors. To give enemies
 * levels, use the notetags below. These notetags also allow you to adjust the
 * base parameters, EXP, and Gold past the database limitations.
 *
 * ---
 *
 * <Level: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's level.
 * - If no level is declared, the level will default to 1.
 *
 * ---
 *
 * <param: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to alter.
 *   - This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * - Replace 'x' with an integer to set an enemy's 'param' base value.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 *
 * <EXP: x>
 * <Gold: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's EXP or Gold values.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 * 
 * === Animations-Related Notetags ===
 * 
 * Animations in RPG Maker MZ are done by Effekseer and the animation system
 * has been revamped. However, the animations are only centered on the targets
 * now, and cannot be attached to the head or foot. Insert these tags into
 * the names of the animations in the database to adjust their positions.
 * 
 * ---
 * 
 * <Head>
 * <Foot>
 * 
 * - Used for: Animation Name Tags
 * - Will set the animation to anchor on top of the sprite (if <Head> is used)
 *   or at the bottom of the sprite (if <Foot> is used).
 * 
 * ---
 * 
 * <Anchor X: x>
 * <Anchor Y: y>
 * 
 * <Anchor: x, y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation at a specific point within the sprite based on
 *   the 'x' and 'y' values.
 * - Replace 'x' and 'y' with numeric values representing their positions based
 *   on a rate where 0.0 is the furthest left/up (x, y respectively) to 1.0 for
 *   the furthest right/down (x, y respectively).
 * 
 * Examples:
 * 
 * <Anchor X: 0.4>
 * <Anchor Y: 0.8>
 * 
 * <Anchor: 0.2, 0.9>
 * 
 * ---
 * 
 * <Offset X: +x>
 * <Offset X: -x>
 * <Offset Y: +y>
 * <Offset Y: -y>
 * 
 * <Offset: +x, +y>
 * <Offset: -x, -y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation to be offset by an exact number of pixels.
 * - This does the same the editor does, except it lets you input values
 *   greater than 999 and lower than -999.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the animation's x and y coordinates by.
 * 
 * Examples:
 * 
 * <Offset X: +20>
 * <Offset Y: -50>
 * 
 * <Offset: +10, -30>
 * 
 * ---
 * 
 * <Mirror Offset X>
 * <No Mirror Offset X>
 * 
 * - Used for: Animation Name Tags
 * - If an animation is mirrored, you can choose to have the animation's Offset
 *   X value be mirrored, too (or not at all).
 * - If no name tag is discovered, this will use the setting found in the
 *   Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset X setting.
 * 
 * ---
 * 
 * <Rate: x>
 * 
 * - Used for: MV Animation Name Tags
 * - Allows you to adjust the update for this MV Animation.
 *   - Does NOT work with Effekseer animations.
 * - The lower the number, the faster.
 * - Replace 'x' with a number representing the animation update rate.
 *   - Default rate: 4.
 *   - Minimum rate: 1.
 *   - Maximum rate: 10.
 * 
 * ---
 *
 * === Quality of Life-Related Notetags ===
 *
 * By default, RPG Maker MZ does not offer an encounter step minimum after a
 * random encounter has finished. This means that one step immediately after
 * finishing a battle, the player can immediately enter another battle. The
 * Quality of Life improvement: Minimum Encounter Steps allows you to set a
 * buffer range between battles for the player to have some breathing room.
 *
 * ---
 *
 * <Minimum Encounter Steps: x>
 *
 * - Used for: Map Notetags
 * - Replace 'x' with the minimum number of steps before the player enters a
 *   random encounter on that map.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => Encounter Rate Min.
 *
 * ---
 *
 * Tile shadows are automatically added to certain tiles in the map editor.
 * These tile shadows may or may not fit some types of maps. You can turn them
 * on/off with the Quality of Life Plugin Parameters or you can override the
 * settings with the following notetags:
 *
 * ---
 *
 * <Show Tile Shadows>
 * <Hide Tile Shadows>
 *
 * - Used for: Map Notetags
 * - Use the respective notetag for the function you wish to achieve.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => No Tile Shadows.
 *
 * ---
 * 
 * <Scroll Lock X>
 * <Scroll Lock Y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - This will use the display nudge setting found in the Plugin Parameters.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 * 
 * <Scroll Lock X: x>
 * <Scroll Lock Y: y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present and will nudge the map camera slightly.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - Replace 'x' and 'y' with numbers between 0 and 1 to represent how much is
 *   being judged.
 *   - For example, for a 1280x720 resolution, a 27 tile wide map will benefit
 *     from a nudge of 0.15625. Play with these numbers to determine the best
 *     value for your maps.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 *
 * === Basic, X, and S Parameters-Related Notetags ===
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * behaviors and give boosts to trait objects in a more controlled manner.
 *
 * ---
 *
 * <param Plus: +x>
 * <param Plus: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Rate: x%>
 * <param Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'param' value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Flat: +x>
 * <param Flat: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Max: x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Sets max caps for the 'param' to be 'x'. If there are multiple max caps
 *   available to the unit, then the highest will be selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer to determine what the max cap should be.
 * - This does NOT set the max cap to be lower than the default cap.
 *
 * ---
 *
 * <xparam Plus: +x%>
 * <xparam Plus: -x%>
 *
 * <xparam Plus: +x.x>
 * <xparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Rate: x%>
 * <xparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'xparam' value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Flat: +x%>
 * <xparam Flat: -x%>
 *
 * <xparam Flat: +x.x>
 * <xparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <sparam Plus: +x%>
 * <sparam Plus: -x%>
 *
 * <sparam Plus: +x.x>
 * <sparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Rate: x%>
 * <sparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'sparam' value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Flat: +x%>
 * <sparam Flat: -x%>
 *
 * <sparam Flat: +x.x>
 * <sparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 * 
 * ---
 * 
 * === Tileset-Related Notetags ===
 * 
 * ---
 * 
 * <Taller By x: id>
 * 
 * - Used for: Tileset Notetags
 * - Changes any page B, C, D, E tile marked by terrain tag 'id' to be taller
 *   by 'x' tiles.
 *   - Replace 'x' with a number representing the tiles to be taller by.
 *   - Replace 'id' with a number representing the Terrain Tag you will use to
 *     mark this tile with in the Database editor.
 * - When placing these tiles on the map, all you have to do is just place the
 *   bottom tile.
 *   - ie.: For a tree that's one tile taller, just place the tile at the
 *     bottom where you see the trunk.
 *   - Then, in-game, the tree will appear taller by one tile as marked.
 * - Depending on the priority settings, the tile will appear on different
 *   layers.
 *   - O will place the tile on the below player layer.
 *   - X will place the tile on the same level as the player.
 *   - ★ will place the tile on the above player layer.
 *   - O/X layer tiles have a special property where tall sprites standing in
 *     front of it will no longer clip the top of the sprite, while sprites
 *     standing behind it will be covered by it.
 *   - The X layer sprite will only have a hitbox of 1x1 at the base.
 * - This does not work with events using tiles as graphics. Instead, if you
 *   want to do similar, use the Event & Movement Core's <Tile Expand> notetags
 *   for better control.
 * 
 * ---
 *
 * === JavaScript Notetags: Basic, X, and S Parameters ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Basic, X, and S Parameters.
 *
 * ---
 *
 * <JS param Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' plus value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 * - Use 'user' to refer to the currently equipping actor.
 *   - If you use code to refer to an actor's other stats like 'atk' and 'def',
 *     there is the potential to cause an infinite loop.
 *   - Use 'user.paramBase(x)' instead of 'user.atk', 'user.def', etc.
 *   - Plugin Parameter setting Parameters > "Convert JS To Base?" will
 *     automatically convert any instances of 'user.mhp', 'user.mmp',
 *     'user.atk', etc. to their base parameters.
 *   - Turn this off if you do not want to use it automatically.
 *   - You are responsible for any infinite loops this may cause.
 *
 * ---
 *
 * <JS param Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' rate value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 * - Use 'user' to refer to the currently equipping actor.
 *   - If you use code to refer to an actor's other stats like 'atk' and 'def',
 *     there is the potential to cause an infinite loop.
 *   - Use 'user.paramBase(x)' instead of 'user.atk', 'user.def', etc.
 *   - Plugin Parameter setting Parameters > "Convert JS To Base?" will
 *     automatically convert any instances of 'user.mhp', 'user.mmp',
 *     'user.atk', etc. to their base parameters.
 *   - Turn this off if you do not want it.
 *   - You are responsible for any infinite loops this may cause.
 *
 * ---
 *
 * <JS param Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' flat value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 * - Use 'user' to refer to the currently equipping actor.
 *   - If you use code to refer to an actor's other stats like 'atk' and 'def',
 *     there is the potential to cause an infinite loop.
 *   - Use 'user.paramBase(x)' instead of 'user.atk', 'user.def', etc.
 *   - Plugin Parameter setting Parameters > "Convert JS To Base?" will
 *     automatically convert any instances of 'user.mhp', 'user.mmp',
 *     'user.atk', etc. to their base parameters.
 *   - Turn this off if you do not want it.
 *   - You are responsible for any infinite loops this may cause.
 *
 * ---
 *
 * <JS param Max: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to determine what the max cap for 'param' should be. If there
 *   are multiple max caps available to the unit, then the highest is selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine the max cap for the
 *   desired parameter.
 * - Use 'user' to refer to the currently equipping actor.
 *   - If you use code to refer to an actor's other stats like 'atk' and 'def',
 *     there is the potential to cause an infinite loop.
 *   - Use 'user.paramBase(x)' instead of 'user.atk', 'user.def', etc.
 *   - Plugin Parameter setting Parameters > "Convert JS To Base?" will
 *     automatically convert any instances of 'user.mhp', 'user.mmp',
 *     'user.atk', etc. to their base parameters.
 *   - Turn this off if you do not want it.
 *   - You are responsible for any infinite loops this may cause.
 *
 * ---
 *
 * <JS xparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' plus value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the X parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 * - Use 'user' to refer to the currently equipping actor.
 *   - If you use code to refer to an actor's other stats like 'atk' and 'def',
 *     there is the potential to cause an infinite loop.
 *   - Use 'user.paramBase(x)' instead of 'user.atk', 'user.def', etc.
 *   - Plugin Parameter setting Parameters > "Convert JS To Base?" will
 *     automatically convert any instances of 'user.mhp', 'user.mmp',
 *     'user.atk', etc. to their base parameters.
 *   - Turn this off if you do not want it.
 *   - You are responsible for any infinite loops this may cause.
 *
 * ---
 *
 * <JS xparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' rate value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the X parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 * - Use 'user' to refer to the currently equipping actor.
 *   - If you use code to refer to an actor's other stats like 'atk' and 'def',
 *     there is the potential to cause an infinite loop.
 *   - Use 'user.paramBase(x)' instead of 'user.atk', 'user.def', etc.
 *   - Plugin Parameter setting Parameters > "Convert JS To Base?" will
 *     automatically convert any instances of 'user.mhp', 'user.mmp',
 *     'user.atk', etc. to their base parameters.
 *   - Turn this off if you do not want it.
 *   - You are responsible for any infinite loops this may cause.
 *
 * ---
 *
 * <JS xparam Flat: code>
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' flat value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the X parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 * - Use 'user' to refer to the currently equipping actor.
 *   - If you use code to refer to an actor's other stats like 'atk' and 'def',
 *     there is the potential to cause an infinite loop.
 *   - Use 'user.paramBase(x)' instead of 'user.atk', 'user.def', etc.
 *   - Plugin Parameter setting Parameters > "Convert JS To Base?" will
 *     automatically convert any instances of 'user.mhp', 'user.mmp',
 *     'user.atk', etc. to their base parameters.
 *   - Turn this off if you do not want it.
 *   - You are responsible for any infinite loops this may cause.
 *
 * ---
 *
 * <JS sparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' plus value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the S parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 * - Use 'user' to refer to the currently equipping actor.
 *   - If you use code to refer to an actor's other stats like 'atk' and 'def',
 *     there is the potential to cause an infinite loop.
 *   - Use 'user.paramBase(x)' instead of 'user.atk', 'user.def', etc.
 *   - Plugin Parameter setting Parameters > "Convert JS To Base?" will
 *     automatically convert any instances of 'user.mhp', 'user.mmp',
 *     'user.atk', etc. to their base parameters.
 *   - Turn this off if you do not want it.
 *   - You are responsible for any infinite loops this may cause.
 *
 * ---
 *
 * <JS sparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' rate value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the S parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 * - Use 'user' to refer to the currently equipping actor.
 *   - If you use code to refer to an actor's other stats like 'atk' and 'def',
 *     there is the potential to cause an infinite loop.
 *   - Use 'user.paramBase(x)' instead of 'user.atk', 'user.def', etc.
 *   - Plugin Parameter setting Parameters > "Convert JS To Base?" will
 *     automatically convert any instances of 'user.mhp', 'user.mmp',
 *     'user.atk', etc. to their base parameters.
 *   - Turn this off if you do not want it.
 *   - You are responsible for any infinite loops this may cause.
 *
 * ---
 *
 * <JS sparam Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' flat value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the S parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 * - Use 'user' to refer to the currently equipping actor.
 *   - If you use code to refer to an actor's other stats like 'atk' and 'def',
 *     there is the potential to cause an infinite loop.
 *   - Use 'user.paramBase(x)' instead of 'user.atk', 'user.def', etc.
 *   - Plugin Parameter setting Parameters > "Convert JS To Base?" will
 *     automatically convert any instances of 'user.mhp', 'user.mmp',
 *     'user.atk', etc. to their base parameters.
 *   - Turn this off if you do not want it.
 *   - You are responsible for any infinite loops this may cause.
 *
 * ---
 * 
 * === Battle Setting-Related Notetags ===
 * 
 * These tags will change the settings for battle regardless of how the battle
 * system is set up normally. Insert these tags in either the noteboxes of maps
 * or the names of troops for them to take effect. If both are present for a
 * specific battle, then priority goes to the setting found in the troop name.
 * 
 * ---
 * 
 * <FV>
 * <Front View>
 * <Battle View: FV>
 * <Battle View: Front View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to front view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/enemies/
 *   folder as they will used instead of the "sv_enemies" graphics.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <SV>
 * <Side View>
 * <Battle View: SV>
 * <Battle View: Side View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to side view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/sv_enemies/
 *   folder as they will used instead of the "enemies" graphics.
 * - Make sure your actors have "sv_actor" graphics attached to them.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <DTB>
 * <Battle System: DTB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the default battle system (DTB).
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <TPB Active>
 * <ATB Active>
 * <Battle System: TPB Active>
 * <Battle System: ATB Active>
 * 
 * <TPB Wait>
 * <ATB Wait>
 * <Battle System: TPB Wait>
 * <Battle System: ATB Wait>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the time progress battle system (TPB) or
 *   active turn battle system (ATB) if you have VisuMZ_2_BattleSystemATB
 *   installed for the game project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <BTB>
 * <Battle System: BTB>
 * 
 * <CTB>
 * <Battle System: CTB>
 * 
 * <ETB>
 * <Battle System: ETB>
 * 
 * <FTB>
 * <Battle System: FTB>
 * 
 * <OTB>
 * <Battle System: OTB>
 * 
 * <PTB>
 * <Battle System: PTB>
 * 
 * <STB>
 * <Battle System: STB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the respective battle system as long as you
 *   have those plugins installed in the current project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <Grid>
 * <Battle Grid>
 * 
 * <No Grid>
 * <No Battle Grid>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Requires VisuMZ_2_BattleGridSystem!
 * - Changes the battle system to utilize the Battle Grid System or not.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * - If none of these notetags or comment tags are found, refer to the default
 *   settings found in the Plugin Parameters.
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
 * === Animation Commands ===
 * 
 * ---
 * 
 * Animation: Play at Coordinate
 * - Plays an animation on the screen at a specific x, y coordinate even if
 *   there is no sprite attached.
 * 
 *   Animation ID:
 *   - Plays this animation.
 * 
 *   Coordinates:
 * 
 *     X:
 *     Y:
 *     - X/Y coordinate used for the animation.
 *       You may use JavaScript code.
 * 
 *   Mirror Animation?:
 *   - Mirror the animation?
 * 
 *   Mute Animation?:
 *   - Mute the animation?
 * 
 * ---
 * 
 * === Audio Plugin Commands ===
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGS Volume
 * - Changes the current BGS volume without changing any of the current BGS's
 *   other properties and without restarting the BGS.
 * 
 *   Volume:
 *   - Change the current BGS's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGS Pitch
 * - Changes the current BGS pitch without changing any of the current BGS's
 *   other properties and without restarting the BGS.
 * 
 *   Pitch:
 *   - Change the current BGS's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGS Pan
 * - Changes the current BGS pan without changing any of the current BGS's
 *   other properties and without restarting the BGS.
 * 
 *   Pan:
 *   - Change the current BGS's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 * 
 * Debug: Current Controller ID
 * - PLAY TEST ONLY.
 * - Shows current controller ID in debug console.
 * - If you press a key on the keyboard, this data will be erased.
 * - Also copies to computer clipboard if possible.
 * 
 * ---
 * 
 * === Export Plugin Commands ===
 * 
 * ---
 * 
 * Export: All Maps Text
 * - PLAY TEST ONLY. Exports all of the text from all maps,
 *   their events, event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: All Troops Text
 * - PLAY TEST ONLY. Exports all of the text from all troops,
 *   their event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: Current Map Text
 * - PLAY TEST ONLY. Exports all of the text on the current map,
 *   its events, the event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * Export: Current Troop Text
 * - PLAY TEST ONLY. Exports all of the text on the current troop,
 *   the troop's event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * === Game Plugin Commands ===
 * 
 * ---
 *
 * Game: Open URL
 * - Opens a website URL from the game.
 *
 *   URL:
 *   - Where do you want to take the player?
 *
 * ---
 * 
 * === Gold Plugin Commands ===
 * 
 * ---
 *
 * Gold: Gain/Lose
 * - Allows you to give/take more gold than the event editor limit.
 *
 *   Value:
 *   - How much gold should the player gain/lose?
 *   - Use negative values to remove gold.
 *
 * ---
 * 
 * === Map Plugin Commands ===
 * 
 * ---
 * 
 * Map: Once Parallel
 * - Plays a Common Event parallel to the event once without repeating itself
 *   when done.
 * - Map only!
 * 
 *   Common Event ID:
 *   - The ID of the parallel Common Event to play.
 *   - Does NOT repeat itself when finished.
 *   - When exiting map scene or changing maps, all Once Parallels are cleared.
 *   - Once Parallels are not retained upon reentering the scene or map.
 *   - Once Parallels are not stored in memory and cannot be saved.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Coordinates Mode
 * - Play Test Mode only! Gets the coordinates of a specific picture as you
 *   move it across the screen.
 * 
 *   Picture ID: 
 *   - The ID of the pictures to track the coordinates of.
 * 
 * ---
 *
 * Picture: Easing Type
 * - Changes the easing type to a number of options.
 *
 *   Picture ID:
 *   - Which picture do you wish to apply this easing to?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 *   Instructions:
 *   - Insert this Plugin Command after a "Move Picture" event command.
 *   - Turn off "Wait for Completion" in the "Move Picture" event.
 *   - You may have to add in your own "Wait" event command after.
 *
 * ---
 * 
 * Picture: Erase All
 * - Erases all pictures on the screen because it's extremely tedious to do it
 *   one by one.
 * 
 * ---
 * 
 * Picture: Erase Range
 * - Erases all pictures within a range of numbers because it's extremely
 *   tedious to do it one by one.
 * 
 *   Starting ID:
 *   - The starting ID of the pictures to erase.
 * 
 *   Ending ID:
 *   - The ending ID of the pictures to erase.
 * 
 * ---
 * 
 * Picture: Rotate by Angle
 * - Rotates target picture by a amount angle over a set duration instead of
 *   continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Adjust Angle:
 *   - What is the angle you wish to rotate the picture by?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Rotate to Angle
 * - Rotates target picture to a certain angle over a set duration
 *   instead of continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Target Angle:
 *   - What is the target angle you wish to rotate the picture?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Show Icon
 * - Shows an icon instead of a picture image.
 * - The picture icon can be controlled like any other picture.
 * 
 *   General:
 *
 *     Picture ID Number:
 *     - What is the ID of the picture you wish to show at?
 *     - Use a number between 1 and 100.
 *     - You may use JavaScript code.
 *
 *     Icon Index:
 *     - Select the icon index to use for this picture.
 *     - You may use JavaScript code.
 *
 *     Smooth Icon?:
 *     - This will make the icon smoothed out or pixelated.
 * 
 *   Picture Settings:
 * 
 *     Position:
 *
 *       Origin:
 *       - What is the origin of this picture icon?
 *         - Upper Left
 *         - Center
 *
 *       Position X:
 *       - X coordinate of the picture.
 *       - You may use JavaScript code.
 *
 *       Position Y:
 *       - Y coordinate of the picture.
 *       - You may use JavaScript code.
 * 
 *     Scale:
 *
 *       Width %:
 *       - Horizontal scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 *
 *       Height %:
 *       - Vertical scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 * 
 *     Blend:
 *
 *       Opacity:
 *       - Insert a number to determine opacity level.
 *       - Use a number between 0 and 255.
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the picture?
 * 
 * ---
 * 
 * === Screen Shake Plugin Commands ===
 * 
 * ---
 * 
 * Screen Shake: Custom:
 * - Creates a custom screen shake effect and also sets the following uses of
 *   screen shake to this style.
 * 
 *   Shake Style:
 *   - Select shake style type.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   Power:
 *   - Power level for screen shake.
 * 
 *   Speed:
 *   - Speed level for screen shake.
 * 
 *   Duration:
 *   - Duration of screenshake.
 *   - You can use code as well.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * === Switch Plugin Commands ===
 * 
 * ---
 * 
 * Switches: Randomize ID(s)
 * - Select specific Switch ID's to randomize ON/OFF.
 * 
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 * 
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 * 
 * ---
 *
 * Switches: Randomize Range
 * - Select specific Switch ID Range to randomize ON/OFF.
 * - The ratio determines the ON/OFF distribution.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 *
 * ---
 *
 * Switches: Toggle ID(s)
 * - Select specific Switch ID's to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 *
 * ---
 *
 * Switches: Toggle Range
 * - Select specific Switch ID Range to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Battle System Change
 * - Switch to a different battle system in-game.
 * - Some battle systems REQUIRE their specific plugins!
 *
 *   Change To:
 *   - Choose which battle system to switch to.
 *     - Database Default (Use game database setting)
 *     - -
 *     - DTB: Default Turn Battle
 *     - TPB Active: Time Progress Battle (Active)
 *     - TPB Wait: Time Progress Battle (Wait)
 *     - -
 *     - BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *     - CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *     - OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *     - STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 *
 * ---
 * 
 * System: Load Images
 * - Allows you to (pre) load up images ahead of time.
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory?
 * 
 * ---
 *
 * System: Main Font Size
 * - Set the game's main font size.
 *
 *   Change To:
 *   - Change the font size to this number.
 *
 * ---
 *
 * System: Side View Battle
 * - Switch between Front View or Side View for battle.
 *
 *   Change To:
 *   - Choose which view type to switch to.
 *
 * ---
 *
 * System: Window Padding
 * - Change the game's window padding amount.
 *
 *   Change To:
 *   - Change the game's standard window padding to this value.
 *
 * ---
 * 
 * === Text Popup Command ===
 * 
 * ---
 * 
 * Text Popup: Show Text
 * - Adds text to a text popup window to briefly appear.
 * - Multiple text popups will be queued.
 * - Does not halt the game and works parallel to game activity.
 * 
 *   Text:
 *   - Write the text that you want to appear here.
 *   - You may use text codes.
 * 
 * ---
 * 
 * === Variable Plugin Commands ===
 * 
 * ---
 * 
 * Variable: JS Eval
 * - Pick a variable ID and value to alter through JS.
 * - Allows one line of code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 * 
 * Variable: JS Block
 * - Pick a variable ID and value to alter through JS.
 * - Allows JS block code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quality of Life Settings
 * ============================================================================
 *
 * A variety of (optional) settings and changes are added with the Core Engine
 * to improve the quality of life for both the game devs and players alike.
 *
 * ---
 *
 * Play Test
 * 
 *   New Game on Boot:
 *   - Automatically start a new game on Play Test?
 *   - Only enabled during Play Test.
 *
 *   No Play Test Mode:
 *   - Force the game to be out of Play Test mode when play testing.
 * 
 *   Open Console on Boot:
 *   - Open the Debug Console upon booting up your game?
 *   - Only enabled during Play Test.
 *
 *   F6: Toggle Sound:
 *   - F6 Key Function: Turn on all sound to 100% or to 0%, toggling between
 *     the two.
 *   - Only enabled during Play Test.
 *
 *   F7: Toggle Fast Mode:
 *   - F7 Key Function: Toggle fast mode.
 *   - Only enabled during Play Test.
 * 
 *   CTRL + n: Quick Load:
 *   - CTRL + a number from 1 to 9 will yield a quick load of that safe file.
 *   - Does not count auto saves.
 *
 *   New Game > Common Event:
 *   - Runs a common event each time a new game is started.
 *   - Only enabled during Play Test.
 *
 * ---
 * 
 * Battle Test
 * 
 *   Add Item Type:
 *   Add Weapon Type:
 *   Add Armor Type:
 *   - Add copies of each database item, weapon, and/or armor?
 *   - Effective only during battle test.
 * 
 *   Added Quantity:
 *   - Determines how many items are added during a battle test instead of
 *     the maximum amount.
 * 
 *   Shift+R: Recover All:
 *   - For Play Test only!
 *   - During battle, pressing SHIFT + R will refill the whole party's HP
 *     and MP and status.
 * 
 *   Shift+T: Full TP
 *   - For Play Test only! 
 *   - During battle, pressing SHIFT + T will refill the whole party's TP.
 * 
 * ---
 *
 * Digit Grouping
 *
 *   Standard Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for standard text
 *     inside windows?
 *
 *   Ex Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for ex text,
 *     written through drawTextEx (like messages)?
 *
 *   Damage Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for in-battle
 *     damage sprites?
 *
 *   Gauge Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for visible gauge
 *     sprites such as HP, MP, and TP gauges?
 * 
 *   Country/Locale
 *   - Base the digit grouping on which country/locale?
 *   - This will follow all of the digit grouping rules found here:
 *     https://www.w3schools.com/JSREF/jsref_tolocalestring_number.asp
 *
 * ---
 *
 * Player Benefit
 *
 *   Encounter Rate Min:
 *   - Minimum number of steps the player can take without any
 *     random encounters.
 *
 *   Escape Always:
 *   - If the player wants to escape a battle, let them escape the battle
 *     with 100% chance.
 *
 *   Accuracy Formula:
 *   - Accuracy formula calculation change to
 *     Skill Hit% * (User HIT - Target EVA) for better results.
 *
 *   Accuracy Boost:
 *   - Boost HIT and EVA rates in favor of the player.
 *
 *   Level Up -> Full HP:
 *   Level Up -> Full MP:
 *   - Recovers full HP or MP when an actor levels up.
 *
 * ---
 * 
 * Picture-Related
 * 
 *   Anti-Zoom Pictures:
 *   - If on, prevents pictures from being affected by zoom.
 * 
 *   Picture Containers > Detach in Battle:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the battle scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 *   Picture Containers > Detach in Map:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the map scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 * ---
 *
 * Misc
 * 
 *   Animation: Mirror Offset X:
 *   - When animations are mirrored, mirror their Offset X values, too.
 *   - The animation name tags <Mirror Offset X> and <No Mirror Offset X> will
 *     override this effect for that specific animation.
 *
 *   Font Shadows:
 *   - If on, text uses shadows instead of outlines.
 *
 *   Font Smoothing:
 *   - If on, smoothes fonts shown in-game.
 * 
 *   Font Width Fix:
 *   - Fixes the font width issue with instant display non-monospaced fonts
 *     in the Message Window.
 *
 *   Key Item Protection:
 *   - If on, prevents Key Items from being able to be sold and from being
 *     able to be consumed.
 * 
 *   Map Name Text Code:
 *   - If on, map names will use text codes.
 *   - If off, only the raw map name will be used.
 *
 *   Modern Controls:
 *   - If on, allows usage of the Home/End buttons.
 *   - Home would scroll to the first item on a list.
 *   - End would scroll to the last item on a list.
 *   - Shift + Up would page up.
 *   - Shift + Down would page down.
 *
 *   MV Animation Rate:
 *   - Adjusts the rate at which MV animations play.
 *   - Default: 4.
 *   - Lower for faster.
 *   - Higher for slower.
 * 
 *   NewGame > CommonEvent:
 *   - Runs a common event each time a new game during any session is started.
 *   - Applies to all types of sessions, play test or not.
 *
 *   No Tile Shadows:
 *   - Removes tile shadows from being displayed in-game.
 *
 *   Pixel Image Rendering:
 *   - If on, pixelates the image rendering (for pixel games).
 *
 *   Require Focus?
 *   - Requires the game to be focused? If the game isn't focused, it will
 *     pause if it's not the active window.
 * 
 *   Shortcut Scripts:
 *   - Enables shortcut-based script variables and functions that can be used
 *     for script calls.
 *   - Shortcut list enabled for this is as follows:
 * 
 *     $commonEvent(id)
 *     - Queues a common event.
 *     - This does not interrupt the current event to run the desired common
 *       event. Any queued common events will run after the current event list
 *       has finished.
 *     - Replace 'id' with the ID of the common event you wish to queue.
 *     - Common events only run in the map scene and battle scene.
 * 
 *     $onceParallel(id)
 *     - Runs a common event in the background as a once parallel event.
 *     - Once parallel events will run in the background like a parallel
 *       process, except that it does not repeat after finishing.
 *     - Replace 'id' with the ID of the common event you wish to run.
 *     - Only works in the map scene and battle scene. Battle scene usage will
 *       require VisuMZ_1_BattleCore.
 * 
 *     $scene
 *     - Returns current scene.
 * 
 *     $spriteset
 *     - Returns current scene's spriteset if there is one.
 * 
 *     $subject
 *     - Returns last recorded identity of the battle's subject/user.
 * 
 *     $targets
 *     - Returns last recorded targets marked in battle.
 * 
 *     $target
 *     - Returns last recorded target marked in battle.
 *     - If multiple targets are recorded, then the first of the recorded
 *       targets will be set for this variable.
 *     - Works better with VisuMZ_1_BattleCore.
 * 
 *     $event
 *     - Returns currently initiated map event.
 *
 *   Smart Event Collision:
 *   - Makes events only able to collide with one another if they're
 *    'Same as characters' priority.
 * 
 *   Subfolder Name Purge:
 *   - Purge subfolder name from Plugin Parameters when reading data to let
 *     Plugin Commands work properly.
 *   - This is for plugins (such as the VisuMZ library) that utilize dynamic
 *     name registrations for Plugin Commands. Turn this on if you plan on
 *     using subfolders with VisuMZ plugins.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle System
 * ============================================================================
 * 
 * Choose which battle system to use for your game.
 * 
 * Some battle systems REQUIRE their specific plugins! This means if you do not
 * have the required battle system plugin installed, it will not change over.
 * The Core Engine plugin does not contain data for all of the battle systems
 * inside its code.
 * 
 * ---
 * 
 *   Database Default (Use game database setting)
 * 
 *   -
 * 
 *   DTB: Default Turn Battle
 *   TPB Active: Time Progress Battle (Active)
 *   TPB Wait: Time Progress Battle (Wait)
 * 
 *   -
 * 
 *   BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *   CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *   ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 *   FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 *   OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *   PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 *   STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * 
 *   -
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Settings
 * ============================================================================
 *
 * These settings allow you, the game dev, to have more control over which
 * colors appear for what conditions found in the game. You can use regular
 * numbers to use the colors predetermined by the game's Window Skin or you
 * can use the #rrggbb format for a hex color code.
 * 
 * If the game's Window Skin is changed mid-game, the colors used will still be
 * based off the default Window Skin's colors. This is due to storing them in a
 * cache and preventing extra processing and reduces lag.
 *
 * You can find out what hex codes belong to which color from this website:
 * https://htmlcolorcodes.com/
 *
 * ---
 *
 * Basic Colors
 * - These are colors that almost never change and are used globally throughout
 *   the in-game engine.
 *
 *   Normal:
 *   System:
 *   Crisis:
 *   Death:
 *   Gauge Back:
 *   HP Gauge:
 *   MP Gauge:
 *   MP Cost:
 *   Power Up:
 *   Power Down:
 *   CT Gauge:
 *   TP Gauge:
 *   Pending Color:
 *   EXP Gauge:
 *   MaxLv Gauge:
 *   - Use #rrggbb for custom colors or regular numbers
 *   for text colors from the Window Skin.
 *
 * ---
 *
 * Alpha Colors:
 * - These are colors that have a bit of transparency to them and are specified
 *   by the 'rgba(red, green, blue, alpha)' format.
 * - Replace 'red' with a number between 0-255 (integer).
 * - Replace 'green' with a number between 0-255 (integer).
 * - Replace 'blue' with a number between 0-255 (integer).
 * - Replace 'alpha' with a number between 0 and 1 (decimal).
 * 
 *   Window Font Outline:
 *   Gauge Number Outline:
 *   Dim Color:
 *   Item Back Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Conditional Colors:
 * - These require a bit of JavaScript knowledge. These determine what colors
 *   to use under which situations and uses such as different values of HP, MP,
 *   TP, for comparing equipment, and determine damage popup colors.
 * 
 *   JS: Actor HP Color:
 *   JS: Actor MP Color:
 *   JS: Actor TP Color:
 *   - Code used for determining what HP, MP, or TP color to use for actors.
 *
 *   JS: Parameter Change:
 *   - Code used for determining whatcolor to use for parameter changes.
 *
 *   JS: Damage Colors:
 *   - Code used for determining what color to use for damage types.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gold Settings
 * ============================================================================
 *
 * Gold is the main currency in RPG Maker MZ. The settings provided here will
 * determine how Gold appears in the game and certain behaviors Gold has.
 *
 * ---
 *
 * Gold Settings
 *
 *   Gold Max:
 *   - Maximum amount of Gold the party can hold.
 *   - Default 99999999
 *
 *   Gold Font Size:
 *   - Font size used for displaying Gold inside Gold Windows.
 *   - Default: 26
 *
 *   Gold Icon:
 *   - Icon used to represent Gold.
 *   - Use 0 for no icon.
 *
 *   Gold Overlap:
 *   - Text used too much Gold to fit in the window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Loading
 * ============================================================================
 *
 * Not all images are loaded at once in-game. RPG Maker MZ uses asynchronous
 * loading which means images are loaded when needed. This may cause delays in
 * when you want certain images to appear. However, if an image is loaded
 * beforehand, they can be used immediately provided they aren't removed from
 * the image cache.
 *
 * ---
 *
 * Image Loading
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory upon starting
 *     up the game?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Keyboard Input Settings
 * ============================================================================
 *
 * Settings for the game that utilize keyboard input. These are primarily for
 * the name input scene (Scene_Name) and the number input event command. These
 * settings have only been tested on English keyboards and may or may not be
 * compatible with other languages, so please disable these features if they do
 * not fit in with your game.
 * 
 * If a controller is connected upon entering the name change scene, it will
 * use the default manual-entry mode instead of the keyboard-entry mode. If a
 * controller button is pressed during the keyboard-entry mode, it will
 * automatically switch to the manual-entry mode.
 * 
 * This plugin does not provide support for controllers that are undetected by
 * RPG Maker MZ's default controller support.
 *
 * ---
 * 
 * Controls
 * 
 *   WASD Movement:
 *   - Enables or disables WASD movement for your game project.
 *   - Moves the W page down button to E.
 * 
 *   R Button: Dash Toggle:
 *   - Enables or disables R button as an Always Dash option toggle.
 * 
 * ---
 *
 * Name Input
 * 
 *   Enable?:
 *   - Enables keyboard input for name entry.
 *   - Only tested with English keyboards.
 * 
 *   Default Mode:
 *   - Select default mode when entering the scene.
 *     - Default - Uses Arrow Keys to select letters.
 *     - Keyboard - Uses Keyboard to type in letters.
 * 
 *   QWERTY Layout:
 *   - Uses the QWERTY layout for manual entry.
 * 
 *   Keyboard Message:
 *   - The message displayed when allowing keyboard entry.
 *   - You may use text codes here.
 * 
 *   Banned Words:
 *   - Players cannot use these words for names.
 *   - These include words inside the names.
 *   - If a banned word is used, a buzzer sound will play.
 *
 * ---
 *
 * Number Input
 * 
 *   Enable?:
 *   - Enables keyboard input for number entry.
 *   - Only tested with English keyboards.
 *
 * ---
 * 
 * Button Assist
 * 
 *   Finish Entry:
 *   - Text used to describe finish entry.
 * 
 *   Page Change:
 *   - Text used to describe character page changing.
 * 
 *   Switch to Keyboard:
 *   - Text used to describe the keyboard switch.
 * 
 *   Switch To Manual:
 *   - Text used to describe the manual entry switch.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Background Settings
 * ============================================================================
 *
 * These settings in the Plugin Parameters allow you to adjust the background
 * images used for each of the scenes. The images will be taken from the game
 * project folders img/titles1/ and img/titles2/ to load into the game.
 *
 * These settings are only available to scenes found within the Main Menu, the
 * Shop scene, and the Actor Naming scene.
 *
 * ---
 *
 * Menu Background Settings:
 * 
 *   Blur Strength:
 *   - Strength used for menu background snapshots.
 *   - Default: 8. Higher is stronger. Lower is weaker.
 *
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Individual background settings for the scene.
 *
 *   Scene_Unlisted
 *   - Individual background settings for any scenes that aren't listed above.
 *
 * ---
 *
 * Background Settings
 *
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 *
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 *
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Button Assist Window
 * ============================================================================
 *
 * In most modern RPG's, there exist small windows on the screen which tell the
 * player what the control schemes are for that scene. This plugin gives you
 * the option to add that window to the menu scenes in the form of a Button
 * Assist Window.
 *
 * ---
 *
 * General
 * 
 *   Enable:
 *   - Enable the Menu Button Assist Window.
 * 
 *   Location:
 *   - Determine the location of the Button Assist Window.
 *   - Requires Plugin Parameters => UI => Side Buttons ON.
 *
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Split "Escape":
 *   - Used ONLY for those making their own custom keyboard key input maps.
 *     - This means you need to go to your own project's rmmz_core.js and
 *       modify Input.keyMapper to have buttons with "cancel" and "menu"
 *       instead of only "escape".
 *     - If there are none found, an error message will appear telling you to
 *       do so, or set the 'Split "Escape"' option to false.
 *     - If you are using Options Core's Rebind Keyboard option, be sure to
 *       have those have "cancel" and "menu" options inside there, too.
 *   - "Split" option makes separate instances of "Cancel" and "Menu" keys.
 *   - "Don't" option will consolidate both into "Escape" keys.
 *
 * ---
 *
 * Text
 * 
 *   Text Format:
 *   - Format on how the buttons are displayed.
 *   - Text codes allowed. %1 - Key, %2 - Text
 * 
 *   Multi-Key Format:
 *   - Format for actions with multiple keys.
 *   - Text codes allowed. %1 - Key 1, %2 - Key 2
 * 
 *   OK Text:
 *   Cancel Text:
 *   Switch Actor Text:
 *   - Default text used to display these various actions.
 *
 * ---
 *
 * Keys
 * 
 *   Key: Unlisted Format:
 *   - If a key is not listed below, use this format.
 *   - Text codes allowed. %1 - Key
 * 
 *   Key: Up:
 *   Key: Down:
 *   Key: Left:
 *   Key: Right:
 *   Key: Shift:
 *   Key: Tab:
 *   Key: A through Z:
 *   - How this key is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Controller Button Assist Settings
 * ============================================================================
 *
 * These are sub-settings for the Button Assist Window Plugin Parameters. Where
 * the Button Assist Window Plugin Parameters are focused on keyboard entries,
 * these sections are focused on gamepad controllers.
 * 
 * Add multiple gamepads to the list to give them different button assist text.
 * If a gamepad is being used but not listed here, the button assist text will
 * default to the keyboard version.
 * 
 * For those looking for more information regarding controllers, visit this
 * site: https://gamepad-tester.com/
 *
 * ---
 *
 * ID Information
 * 
 *   Controller ID Name:
 *   - Exact string used for this controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - Example: Xbox 360 Controller (XInput STANDARD GAMEPAD)
 * 
 *   Similarity Match:
 *   - Partial string used to check for controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - This check occurs secondary to the exact name.
 *   - Example: Xbox
 *
 * ---
 *
 * Directions
 * 
 *   Up:
 *   Left:
 *   Right:
 *   Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * Actions
 * 
 *   OK:
 *   Cancel:
 *   Menu:
 *   Shift:
 *   Page Up:
 *   Page Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *   - *NOTE*: Controllers use a different mapping scheme from keyboards.
 *     - The "cancel" button is separate from the "menu" button though, for the
 *       majority of the button assist window help text, we'll be referring to
 *       the cancel button usually.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Layout Settings
 * ============================================================================
 *
 * These settings allow you to rearrange the positions of the scenes accessible
 * from the Main Menu, the Shop scene, and the Actor Naming scene. This will
 * require you to have some JavaScript knowledge to make the windows work the
 * way you would like.
 *
 * ---
 *
 * Menu Layout Settings
 *
 *   Scene_Title:
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Various options on adjusting the selected scene.
 *
 * ---
 *
 * Scene Window Settings
 *
 *   Background Type:
 *   - Selects the background type for the selected window.
 *   - Window
 *   - Dim
 *   - Transparent
 *
 *   JS: X, Y, W, H
 *   - Code used to determine the dimensions for the selected window.
 *
 * ---
 *
 * Scene_Title Settings
 * - The following are settings unique to Scene_Title.
 *
 * Title Screen
 *
 *   Document Title Format:
 *   - Format to display text in document title.
 *   - %1 - Main Title, %2 - Subtitle, %3 - Version
 *
 *   Subtitle:
 *   - Subtitle to be displayed under the title name.
 *   
 *   Version:
 *   - Version to be display in the title screen corner.
 *   
 *   JS: Draw Title:
 *   - Code used to draw the game title.
 *   
 *   JS: Draw Subtitle:
 *   - Code used to draw the game subtitle.
 *   
 *   JS: Draw Version:
 *   - Code used to draw the game version.
 *   
 *   Button Fade Speed:
 *   - Speed at which the buttons fade in at (1-255).
 *
 * ---
 *
 * Scene_GameEnd Settings
 * - The following are settings unique to Scene_GameEnd.
 *   
 *   Command Window List:
 *   - Window commands used by the title screen.
 *   - Add new commands here.
 *
 * ---
 *
 * Command Window List
 * - This is found under Scene_Title and Scene_GameEnd settings.
 *
 *   Symbol:
 *   - The symbol used for this command.
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
 * ---
 *
 * Title Picture Buttons:
 * - This is found under Scene_Title settings.
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 *
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 *
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 *
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 *
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Parameter Settings
 * ============================================================================
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * their behaviors and give boosts to trait objects in a controlled manner.
 *
 * ---
 *
 * Parameter Settings
 *
 *   Displayed Parameters
 *   - A list of the parameters that will be displayed in-game.
 *   - Shown in the Equip Menu.
 *   - Shown in the Status Menu.
 *
 *   Extended Parameters
 *   - The list shown in extended scenes (for other VisuStella plugins).
 *
 * ---
 *
 * === Basic Parameters ===
 *
 * MHP - MaxHP
 * - This is the maximum health points value. The amount of health points (HP)
 * a battler has determines whether or not the battler is in a living state or
 * a dead state. If the HP value is above 0, then the battler is living. If it
 * is 0 or below, the battler is in a dead state unless the battler has a way
 * to counteract death (usually through immortality). When the battler takes
 * damage, it is usually dealt to the HP value and reduces it. If the battler
 * is healed, then the HP value is increased. The MaxHP value determines what's
 * the maximum amount the HP value can be held at, meaning the battler cannot
 * be healed past that point.
 *
 * MMP - MaxMP
 * - This is the maximum magic points value. Magic points (MP) are typically
 * used for the cost of skills and spells in battle. If the battler has enough
 * MP to fit the cost of the said skill, the battler is able to use the said
 * skill provided that all of the skill's other conditions are met. If not, the
 * battler is then unable to use the skill. Upon using a skill that costs MP,
 * the battler's MP is reduced. However, the battler's MP can be recovered and
 * results in a gain of MP. The MaxMP value determines what is the maximum
 * amount the MP value can be held at, meaning the battler cannot recover MP
 * past the MaxMP value.
 *
 * ATK - Attack
 * - This is the attack value of the battler. By default, this stat is used for
 * the purpose of damage calculations only, and is typically used to represent
 * the battler's physical attack power. Given normal damage formulas, higher
 * values mean higher damage output for physical attacks.
 *
 * DEF - Defense
 * - This is the defense value of the battler. By default, this stat is used
 * for the purpose of damage calculations only, and is typically used to
 * represent the battler's physical defense. Given normal damage formulas,
 * higher values mean less damage received from physical attacks.
 *
 * MAT - Magic Attack
 * - This is the magic attack value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical attack power. Given normal damage formulas,
 * higher values mean higher damage output for magical attacks.
 *
 * MDF - Magic Defense
 * - This is the magic defense value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical defense. Given normal damage formulas,
 * higher values mean less damage received from magical attacks.
 *
 * AGI - Agility
 * - This is the agility value of the battler. By default, this stat is used to
 * determine battler's position in the battle turn's order. Given a normal turn
 * calculation formula, the higher the value, the faster the battler is, and
 * the more likely the battler will have its turn earlier in a turn.
 *
 * LUK - Luck
 * - This is the luck value of the battler. By default, this stat is used to
 * affect the success rate of states, buffs, and debuffs applied by the battler
 * and received by the battler. If the user has a higher LUK value, the state,
 * buff, or debuff is more likely to succeed. If the target has a higher LUK
 * value, then the state, buff, or debuff is less likely to succeed.
 *
 * ---
 *
 * Basic Parameters
 * 
 *   Show Actor Level?:
 *   - Show the actor level when displaying actors?
 *   - Affects for most windows in-game.
 * 
 *   Convert JS To Base?:
 *   - Automatically convert <JS param Plus/Rate/Flat: code> to use base
 *     parameters to prevent infinite loops.
 *
 *   HP Crisis Rate:
 *   - HP Ratio at which a battler can be considered in crisis mode.
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 8 basic parameters:
 *   - MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 *
 * Parameter Caps:
 *
 *   MaxHP Cap:
 *   MaxMP Cap:
 *   ATK Cap:
 *   DEF Cap:
 *   MAT Cap:
 *   MDF Cap:
 *   AGI Cap:
 *   LUK Cap:
 *   - Formula used to determine the selected parameter's cap.
 *   - These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 *
 * ---
 *
 * === X Parameters ===
 *
 * HIT - Hit Rate%
 * - This determines the physical hit success rate of the any physical action.
 * All physical attacks make a check through the HIT rate to see if the attack
 * will connect. If the HIT value passes the randomizer check, the attack will
 * connect. If the HIT value fails to pass the randomizer check, the attack
 * will be considered a MISS.
 *
 * EVA - Evasion Rate%
 * - This determines the physical evasion rate against any incoming physical
 * actions. If the HIT value passes, the action is then passed to the EVA check
 * through a randomizer check. If the randomizer check passes, the physical
 * attack is evaded and will fail to connect. If the randomizer check passes,
 * the attempt to evade the action will fail and the action connects.
 *
 * CRI - Critical Hit Rate%
 * - Any actions that enable Critical Hits will make a randomizer check with
 * this number. If the randomizer check passes, extra damage will be carried
 * out by the initiated action. If the randomizer check fails, no extra damage
 * will be added upon the action.
 *
 * CEV - Critical Evasion Rate%
 * - This value is put against the Critical Hit Rate% in a multiplicative rate.
 * If the Critical Hit Rate is 90% and the Critical Evasion Rate is
 * 20%, then the randomizer check will make a check against 72% as the values
 * are calculated by the source code as CRI * (1 - CEV), therefore, with values
 * as 0.90 * (1 - 0.20) === 0.72.
 *
 * MEV - Magic Evasion Rate%
 * - Where EVA is the evasion rate against physical actions, MEV is the evasion
 * rate against magical actions. As there is not magical version of HIT, the
 * MEV value will always be bit against when a magical action is initiated. If
 * the randomizer check passes for MEV, the magical action will not connect. If
 * the randomizer check fails for MEV, the magical action will connect.
 *
 * MRF - Magic Reflect Rate%
 * - If a magical action connects and passes, there is a chance the magical
 * action can be bounced back to the caster. That chance is the Magic Reflect
 * Rate. If the randomizer check for the Magic Reflect Rate passes, then the
 * magical action is bounced back to the caster, ignoring the caster's Magic
 * Evasion Rate. If the randomizer check for the Magic Reflect Rate fails, then
 * the magical action will connect with its target.
 *
 * CNT - Counter Attack Rate%
 * - If a physical action connects and passes, there is a chance the physical
 * action can be avoided and a counter attack made by the user will land on the
 * attacking unit. This is the Counter Attack Rate. If the randomizer check for
 * the Counter Attack Rate passes, the physical action is evaded and the target
 * will counter attack the user. If the randomizer check fails, the physical
 * action will connect to the target.
 *
 * HRG - HP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxHP as gained HP with a 100% success rate.
 *
 * MRG - MP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxMP as gained MP with a 100% success rate.
 *
 * TRG - TP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxTP as gained TP with a 100% success rate.
 *
 * ---
 *
 * X Parameters
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 10 X parameters:
 *   - HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 *
 * Vocabulary
 *
 *   HIT:
 *   EVA:
 *   CRI:
 *   CEV:
 *   MEV:
 *   MRF:
 *   CNT:
 *   HRG:
 *   MRG:
 *   TRG:
 *   - In-game vocabulary used for the selected X Parameter.
 *
 * ---
 *
 * === S Parameters ===
 *
 * TGR - Target Rate
 * - Against the standard enemy, the Target Rate value determines the odds of
 * an enemy specifically targeting the user for a single target attack. At 0%,
 * the enemy will almost never target the user. At 100%, it will have normal
 * targeting opportunity. At 100%+, the user will have an increased chance of
 * being targeted.
 * *NOTE: For those using the Battle A.I. Core, any actions that have specific
 * target conditions will bypass the TGR rate.
 *
 * GRD - Guard Effect
 * - This is the effectiveness of guarding. This affects the guard divisor
 * value of 2. At 100% GRD, damage will become 'damage / (2 * 1.00)'. At 50%
 * GRD, damage will become 'damage / (2 * 0.50)'. At 200% GRD, damage will
 * become 'damage / (2 * 2.00)' and so forth.
 *
 * REC - Recovery Effect
 * - This is how effective heals are towards the user. The higher the REC rate,
 * the more the user is healed. If a spell were to heal for 100 and the user
 * has 300% REC, then the user is healed for 300 instead.
 *
 * PHA - Pharmacology
 * - This is how effective items are when used by the user. The higher the PHA
 * rate, the more effective the item effect. If the user is using a Potion that
 * recovers 100% on a target ally and the user has 300% PHA, then the target
 * ally will receive healing for 300 instead.
 *
 * MCR - MP Cost Rate
 * - This rate affects how much MP skills with an MP Cost will require to use.
 * If the user has 100% MCR, then the MP Cost will be standard. If the user has
 * 50% MCR, then all skills that cost MP will cost only half the required MP.
 * If the user has 200% MCR, then all skills will cost 200% their MP cost.
 *
 * TCR - TP Charge Rate
 * - This rate affects how much TP skills with an TP will charge when gaining
 * TP through various actions. At 100%, TP will charge normally. At 50%, TP
 * will charge at half speed. At 200%, TP will charge twice as fast.
 *
 * PDR - Physical Damage Rate
 * - This rate affects how much damage the user will take from physical damage.
 * If the user has 100% PDR, then the user takes the normal amount. If the user
 * has 50% PDR, then all physical damage dealt to the user is halved. If the
 * user has 200% PDR, then all physical damage dealt to the user is doubled.
 *
 * MDR - Magical Damage Rate
 * - This rate affects how much damage the user will take from magical damage.
 * If the user has 100% MDR, then the user takes the normal amount. If the user
 * has 50% MDR, then all magical damage dealt to the user is halved. If the
 * user has 200% MDR, then all magical damage dealt to the user is doubled.
 *
 * FDR - Floor Damage Rate
 * - On the field map, this alters how much damage the user will take when the
 * player walks over a tile that damages the party. The FDR value only affects
 * the damage dealt to the particular actor and not the whole party. If FDR is
 * at 100%, then the user takes the full damage. If FDR is at 50%, then only
 * half of the damage goes through. If FDR is at 200%, then floor damage is
 * doubled for that actor.
 *
 * EXR - Experience Rate
 * - This determines the amount of experience gain the user whenever the user
 * gains any kind of EXP. At 100% EXR, the rate of experience gain is normal.
 * At 50%, the experience gain is halved. At 200%, the experience gain for the
 * user is doubled.
 *
 * ---
 *
 * S Parameters
 *
 *   JS: Formula
 *   - Formula used to determine the total value all 10 S parameters:
 *   - TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 *
 * Vocabulary
 *
 *   TGR:
 *   GRD:
 *   REC:
 *   PHA:
 *   MCR:
 *   TCR:
 *   PDR:
 *   MDR:
 *   FDR:
 *   EXR:
 *   - In-game vocabulary used for the selected S Parameter.
 *
 * ---
 *
 * Icons
 * 
 *   Draw Icons?
 *   - Draw icons next to parameter names?
 *
 *   MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK:
 *   HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG:
 *   TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR:
 *   - Icon used for the selected parameter.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Parameters Settings
 * ============================================================================
 *
 * As of version 1.07, you can add Custom Parameters to your game if RPG Maker
 * MZ's default set of parameters isn't enough for you. These parameters can
 * have variable functionality depending on how you code it. More importantly,
 * these are compatible with the VisuStella MZ menus and the VisuStella Core
 * Engine's Parameters settings.
 * 
 * For clarification, these settings do NOT create brand-new parameters for you
 * to use and add to your game nor are the bonuses supported by other plugins
 * in the VisuStella MZ library. These settings exist to function as a bridge
 * for non-VisuStella MZ plugins that have created their own parameter values
 * and to show them inside VisuStella menus.
 *
 * ---
 *
 * Custom Parameter
 * 
 *   Parameter Name:
 *   - What's the parameter's name?
 *   - Used for VisuStella MZ menus.
 * 
 *   Abbreviation:
 *   - What abbreviation do you want to use for the parameter?
 *   - Do not use special characters. Avoid numbers if possible.
 * 
 *   Icon:
 *   - What icon do you want to use to represent this parameter?
 *   - Used for VisuStella MZ menus.
 * 
 *   Type:
 *   - What kind of number value will be returned with this parameter?
 *     - Integer (Whole Numbers Only)
 *     - Float (Decimals are Allowed)
 * 
 *   JS: Value:
 *   - Run this code when this parameter is to be returned.
 *
 * ---
 * 
 * Instructions on Adding Custom Parameters to VisuStella Menus
 * 
 * In the Core Engine and Elements and Status Menu Core plugins, there are
 * plugin parameter fields for you to insert the parameters you want displayed
 * and visible to the player.
 * 
 * Insert in those the abbreviation of the custom parameter. For example, if
 * you want to add the "Strength" custom parameter and the abbreviation is
 * "str", then add "str" to the Core Engine/Elements and Status Menu Core's
 * plugin parameter field for "Strength" to appear in-game. Case does not
 * matter here so you can insert "str" or "STR" and it will register all the
 * same to make them appear in-game.
 * 
 * ---
 * 
 * Instructions on Using Custom Parameters as Mechanics
 * 
 * If you want to use a custom parameter in, say, a damage formula, refer to
 * the abbreviation you have set for the custom parameter. For example, if you
 * want to call upon the "Strength" custom parameter's value and its set
 * abbreviation is "str", then refer to it as such. This is case sensitive.
 * 
 * An example damage formula would be something like the following if using
 * "str" for "Strength" and "con" for "Constitution":
 * 
 *   a.str - b.con
 * 
 * These values are attached to the Game_Battlerbase prototype class.
 * 
 * ---
 * 
 * Instructions on Setting Custom Parameter Values
 * 
 * This requires JavaScript knowledge. There is no way around it. Whatever code
 * you insert into the "JS: Value" field will return the value desired. The
 * 'user' variable will refer to the Game_Battlerbase prototype object in which
 * the information is to be drawn from.
 * 
 * Depending on the "type" you've set for the Custom Parameter, the returned
 * value will be rounded using Math.round for integers and left alone if set as
 * a float number.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Resolution Settings
 * ============================================================================
 *
 * Alter various properties to make the game look better for varying screen
 * resolutions. This is mostly for RPG Maker MZ version 1.3.0 and up where the
 * Troops tab has been updated to match the screen resolution settings found in
 * the System 2 Database tab.
 *
 * ---
 * 
 * Maps
 * 
 *   Scroll Lock Small X?:
 *   Scroll Lock Small Y?:
 *   - Automatically scroll lock X/Y scrolling if the map is too small?
 *   - Useful for 1280x720 resolutions when the map is 27 tiles wide.
 *     - This will get rid of the subtle scrolling when moving from one half of
 *       the screen to the other.
 *   - This setting will be disabled if the map is zoomed in.
 * 
 *   Locked Display X?:
 *   Locked Display Y?:
 *   - What display X/Y value do you want for auto-scroll locked maps?
 *   - Use a number between 0 and 1 for best results.
 * 
 * ---
 *
 * Troops
 * 
 *   Reposition Actors:
 *   - Update the position of actors in battle if the screen resolution
 *     has changed to become larger than 816x624.
 *   - Ignore if using the VisuStella MZ Battle Core.
 *   - When using the VisuStella MZ Battle Core, adjust the position through
 *     Battle Core > Parameters > Actor Battler Settings > JS: Home Position
 *
 *   Reposition Enemies:
 *   - Update the position of enemies in battle if the screen resolution
 *     has changed to become larger than 816x624.
 * 
 *     For MZ 1.3.0+?:
 *     - Both this parameter and its parent parameter need to be on when using
 *       RPG Maker MZ 1.3.0+.
 *     - If the Core Script is below 1.3.0, this setting is ignored. This does
 *       not take into account what version the editor is on. Pay attention to
 *       that as the plugin will not auto adjust for it.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Shake Settings
 * ============================================================================
 *
 * Get more screen shake effects into your game!
 * 
 * These effects have been added by Aries of Sheratan!
 *
 * ---
 *
 * Settings
 * 
 *   Default Style:
 *   - The default style used for screen shakes.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   JS: Original Style:
 *   JS: Random Style
 *   JS: Horizontal Style
 *   JS: Vertical Style
 *   - This code gives you control over screen shake for this screen
 *     shake style.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Command List Settings
 * ============================================================================
 *
 * This plugin parameter allows you to adjust the commands that appear on the
 * title screen. Some JavaScript knowledge is needed.
 *
 * ---
 *
 * Title Command
 * 
 *   Symbol:
 *   - The symbol used for this command.
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
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Picture Buttons Settings
 * ============================================================================
 *
 * These allow you to insert picture buttons on your title screen that can
 * send users to various links on the internet when clicked.
 *
 * ---
 *
 * Settings
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 * 
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 * 
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 * 
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * In previous iterations of RPG Maker, the Core Engine would allow you to
 * change the screen resolution. In MZ, that functionality is provided by
 * default but a number of UI settings still remain. These settings allow you
 * adjust how certain in-game objects and menus are displayed.
 *
 * ---
 *
 * UI Area
 *
 *   Fade Speed:
 *   - Default fade speed for transitions.
 *
 *   Box Margin:
 *   - Set the margin in pixels for the screen borders.
 *
 *   Command Window Width:
 *   - Sets the width for standard Command Windows.
 *
 *   Bottom Help Window:
 *   - Put the Help Window at the bottom of the screen?
 *
 *   Right Aligned Menus:
 *   - Put most command windows to the right side of the screen.
 *
 *   Show Buttons:
 *   - Show clickable buttons in your game?
 * 
 *     Show Cancel Button:
 *     Show Menu Button:
 *     Show Page Up/Down:
 *     Show Number Buttons:
 *     - Show/hide these respective buttons if the above is enabled.
 *     - If 'Show Buttons' is false, these will be hidden no matter what.
 *
 *   Button Area Height:
 *   - Sets the height for the button area.
 *
 *   Bottom Buttons:
 *   - Put the buttons at the bottom of the screen?
 *
 *   Side Buttons:
 *   - Push buttons to the side of the UI if there is room.
 * 
 *   State Icons Non-Frame:
 *   - Replace sprite frame system for non-frame.
 *   - Better for any instances where icons are zoomed.
 *
 * ---
 *
 * Larger Resolutions
 *
 * ---
 *
 * Menu Objects
 *
 *   Level -> EXP Gauge:
 *   - Draw an EXP Gauge under the drawn level.
 *
 *   Parameter Arrow:
 *   - The arrow used to show changes in the parameter values.
 *
 * ---
 *
 * Text Code Support
 *
 *   Class Names:
 *   - Make class names support text codes?
 *
 *   Nicknames:
 *   - Make nicknames support text codes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Adjust the default settings of the windows in-game. This ranges from things
 * such as the line height (to better fit your font size) to the opacity level
 * (to fit your window skins).
 * 
 * These settings also allow you to add scroll bars to scrollable windows,
 * letting the player know how much of the window's contents there are left for
 * scrolling. The scroll bar can be enabled, disabled, have its thickness
 * changed, colors changed, etc.
 *
 * ---
 *
 * Window Defaults
 * 
 *   Enable Masking:
 *   - Enable window masking (windows hide other windows behind them)?
 *   - WARNING: Turning it on can obscure data.
 * 
 *   Correct Skin Bleed:
 *   - Allows you to enable/disable the window skin bleeding correction for
 *     those who wish to use the 95 calculator instead of 96 to augment higher
 *     and larger screen resolutions.
 *   - Read the "Bug Fixes" section if you don't understand what the window
 *     skin bleeding problem is.
 * 
 *   Line Height:
 *   - Default line height used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Item Padding:
 *   - Default line padding used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Back Opacity:
 *   - Default back opacity used for standard windows.
 *   - As of version 1.3.0, this is no longer needed.
 *   - This will still work for lower versions.
 * 
 *   Translucent Opacity:
 *   - Default translucent opacity used for standard windows.
 * 
 *   Window Opening Speed:
 *   - Default open speed used for standard windows.
 *   - Default: 32 (Use a number between 0-255)
 * 
 *   Column Spacing:
 *   - Default column spacing for selectable windows.
 *   - Default: 8
 * 
 *   Row Spacing:
 *   - Default row spacing for selectable windows.
 *   - Default: 4
 *
 * ---
 * 
 * Scroll Bar
 * 
 *   Show Scroll Bar?:
 *   - Show the scroll bar for scrollable windows?
 * 
 *   Thickness:
 *   - How thick do you want the scroll bar to be?
 * 
 *   Offset:
 *   - How much do you want to offset the scroll bar by?
 * 
 *   Bar Body Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Opacity:
 *   - What opacity value do you want the off bar opacity to be?
 *   - Use a number between 0 and 255.
 * 
 * ---
 * 
 * Selectable Items:
 * 
 *   Show Background?:
 *   - Selectable menu items have dark boxes behind them. Show them?
 * 
 *   Item Height Padding:
 *   - Default padding for selectable items.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   JS: Draw Background:
 *   - Code used to draw the background rectangle behind clickable menu objects
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: JS: Quick Functions
 * ============================================================================
 * 
 * WARNING: This feature is highly experimental! Use it at your own risk!
 * 
 * JavaScript Quick Functions allow you to quickly declare functions in the
 * global namespace for ease of access. It's so that these functions can be
 * used in Script Calls, Control Variable Script Inputs, Conditional Branch
 * Script Inputs, Damage Formulas, and more.
 * 
 * ---
 * 
 * JS: Quick Function
 * 
 *   Function Name:
 *   - The function's name in the global namespace.
 *   - Will not overwrite functions/variables of the same name.
 * 
 *   JS: Code:
 *   - Run this code when using the function.
 * 
 * ---
 * 
 * If you have a Function Name of "Example", then typing "Example()" in a
 * Script Call, Conditional Branch Script Input, or similar field will yield
 * whatever the code is instructed to return.
 * 
 * If a function or variable of a similar name already exists in the global
 * namespace, then the quick function will be ignored and not created.
 * 
 * If a quick function contains bad code that would otherwise crash the game,
 * a fail safe has been implemented to prevent it from doing so, display an
 * error log, and then return a 0 value.
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
 * Version 1.90: February 16, 2026
 * * Feature Update!
 * ** Battle System settings for "TPB Active" and "TPB Wait" will no longer
 *    conflict with VisuMZ_2_BattleSystemATB and VisuMZ_1_OptionsCore "Active"
 *    or "Wait" mode options set by the player.
 * 
 * Version 1.89: December 15, 2025
 * * Feature Update!
 * ** Added extra failsafes to ensure TPB Charge Time does not become NaN or
 *    an illegal value. Update made by Arisu.
 * 
 * Version 1.88: September 18, 2025
 * * Documentation Update!
 * ** Extra notes for <JS param Plus/Rate/Flat: code> notetags
 * *** Use 'user' to refer to the currently equipping actor.
 * *** If you use code to refer to an actor's other stats like 'atk' and 'def',
 *     there is the potential to cause an infinite loop.
 * *** Use 'user.paramBase(x)' instead of 'user.atk', 'user.def', etc.
 * *** Plugin Parameter setting Parameters > "Convert JS To Base?" will
 *     automatically convert any instances of 'user.mhp', 'user.mmp',
 *     'user.atk', etc. to their base parameters.
 * *** Turn this off if you do not want it.
 * *** You are responsible for any infinite loops this may cause.
 * * Feature Update!
 * ** <JS param Plus/Rate/Flat: code> now support 'user' as a variable.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > Parameters > Convert JS To Base?
 * **** Automatically convert <JS param Plus/Rate/Flat: code> to use base
 *      parameters to prevent infinite loops.
 * 
 * Version 1.87: February 20, 2025
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Removed picture limit of 100 from Picture-related Plugin Commands.
 * *** Better compatibility with different icon sizes.
 * * Documentation Update!
 * ** Under Plugin Parameters: Menu Button Assist Window
 * *** Added text segments under Split "Escape"
 * **** This means you need to go to your own project's rmmz_core.js and
 *      modify Input.keyMapper to have buttons with "cancel" and "menu"
 *      instead of only "escape".
 * **** If there are none found, an error message will appear telling you to
 *      do so, or set the 'Split "Escape"' option to false.
 * **** If you are using Options Core's Rebind Keyboard option, be sure to
 *      have those have "cancel" and "menu" options inside there, too.
 * * Feature Update!
 * ** Plugin Parameters > Button Assist > Split "Escape" will now show an error
 *    message if a custom Input.keyMapper is not found with the "cancel" and
 *    "menu" keys implemented. Update made by Irina.
 * ** Updated Plugin Parameters > Button Assist > Split "Escape" description
 *    for Plugin Parameters to add in the following text: Requires custom
 *    Input.keyMapper with "cancel" and "menu".
 * ** Added better compatibility with WASD controls as to prioritize showing
 *    the arrow keys rather than the W, A, S, D keys. Also applies to any other
 *    rebindings.
 * 
 * Version 1.86: January 16, 2025
 * * Bug Fixes!
 * ** Fixed an issue where certain icons were not aligning properly at
 *    different line height settings. Fix made by Olivia.
 * 
 * Version 1.85: October 17, 2024
 * * Feature Updates!
 * ** Updated to fit RPG Maker MZ's updated 1.8.1 version better.
 * 
 * Version 1.84: August 29, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New notetags added by Arisu:
 * *** Tileset Notetag: <Taller By x: id>
 * **** Changes any page B, C, D, E tile marked by terrain tag 'id' to be
 *      taller by 'x' tiles.
 * **** When placing these tiles on the map, all you have to do is just place
 *      the bottom tile.
 * ***** ie.: For a tree that's one tile taller, just place the tile at the
 *       bottom where you see the trunk. Then, in-game, the tree will appear
 *       taller by one tile as marked.
 * **** O/X layer tiles have a special property where tall sprites standing in
 *      front of it will no longer clip the top of the sprite, while sprites
 *      standing behind it will be covered by it.
 * **** This does not work with events using tiles as graphics. Instead, if
 *      you want to do similar, use the Event & Movement Core's <Tile Expand>
 *      notetags for better control.
 * 
 * Version 1.83: June 13, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated documentation for <param Max: x> notetag.
 * *** This does not set the max cap to be lower than the default cap.
 * * New Feature!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > UI Settings > State Icons Non-Frame
 * **** Replace sprite frame system for non-frame.
 * **** Better for any instances where icons are zoomed.
 * 
 * Version 1.82: April 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added failsafe for $textPopup when some windows have not been initialized
 *    and requesting the text popup.
 * * New Feature!
 * ** New Plugin Parameter and playtest shortcut added by Arisu:
 * *** Plugin Parameters > QoL Settings > Playtest > CTRL + n: Quick Load
 * **** CTRL + a number from 1 to 9 will yield a quick load of that save file.
 * **** Does not count auto saves.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.81: February 15, 2024
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added for future plugin: VisuMZ_2_BattleGridSystem
 * *** <Grid>
 * *** <No Grid>
 * **** Requires the future plugin VisuMZ_2_BattleGridSystem!
 * **** Read the help section for more information on these.
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > Window > Correct Skin Bleed
 * **** Allows you to enable/disable the window skin bleeding correction for
 *      those who wish to use the 95 calculator instead of 96 to augment higher
 *      and larger screen resolutions.
 * **** Read the "Bug Fixes" section if you don't understand what the window
 *      skin bleeding problem is.
 * 
 * Version 1.80: January 18, 2024
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Auto Save After New Game
 * **** Normally, when starting a new game through the "New Game" option, there
 *      is no auto save trigger. However, if you start a new game or load a
 *      saved game, then go to the Game End screen, return back to the title
 *      screen, then start a New Game, the auto save trigger occurs when it
 *      shouldn't. The Core Engine will now patch this and prevent the trigger
 *      from taking place.
 * 
 * Version 1.79: November 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Plugin Command added by Arisu:
 * ** Text Popup: Show Text
 * *** Adds text to a text popup window to briefly appear.
 * *** Multiple text popups will be queued.
 * *** Does not halt the game and works parallel to game activity.
 * 
 * Version 1.78: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia and sponsored by AndyL:
 * *** QoL Settings > Battle Test > Shift+R: Recover All
 * **** For Play Test only! During battle, pressing SHIFT + R will refill the
 *      whole party's HP and MP and status.
 * *** QoL Settings > Battle Test > Shift+T: Full TP
 * **** For Play Test only! During battle, pressing SHIFT + T will refill the
 *      whole party's TP.
 * 
 * Version 1.77: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the BGS related Plugin Commands to crash.
 *    Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Scroll-Linked Pictures now work if the image file are in a folder within
 *    the img/pictures/ folder without the folder needing a ! at the start.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Picture: Rotate by Angle
 * **** Rotates target picture by a amount angle over a set duration instead of
 *      continuously.
 * **** View help file for more information on the Plugin Command.
 * *** Picture: Rotate to Angle
 * **** Rotates target picture to a certain angle over a set duration instead
 *      of continuously.
 * **** View help file for more information on the Plugin Command.
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Menu Button Assist > General > Split "Escape":
 * **** Used ONLY for those making their own custom keyboard key input maps.
 * **** "Split" option makes separate instances of "Cancel" and "Menu" keys.
 * **** "Don't" option will consolidate both into "Escape" keys.
 * 
 * Version 1.76: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a bug that displayed the incorrect button press key for name input
 *    processing's cancel action. Fix made by Olivia.
 * 
 * Version 1.75: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** In Scene_Name, when using the Keyboard Input, the button assist windows
 *    will no longer display the keyboard shortcuts for Ok and Cancel, but
 *    instead, show them for ENTER and BKSP. Update made by Arisu.
 * ** In Scene_Name, when manual inputting, the Page Up/Dn keys are now
 *    displayed to show changing character pages.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by AndyL:
 * *** Params > Keyboard Input > Button Assist > Finish Entry
 * **** Text used to describe finish entry.
 * *** Params > Keyboard Input > Button Assist > Page Change
 * **** Text used to describe changing character pages.
 * *** Params > Window Settings > Scroll Bar
 * **** These settings also allow you to add scroll bars to scrollable windows,
 *      letting the player know how much of the window's contents there are
 *      left for scrolling. The scroll bar can be enabled, disabled, have its
 *      thickness changed, colors changed, etc.
 * 
 * Version 1.74: February 16, 2023
 * * Compatibility Update!
 * ** Plugin Commands for: Audio: Change Current BGM/BGS Volume/Pitch/Pan
 *    should now work properly with the updated RPG Maker MZ version and
 *    WebAudio changes. Update made by Arisu.
 * 
 * Version 1.73: January 20, 2023
 * * Compatibility Update!
 * ** Added better Effekseer version compatibility.
 * 
 * Version 1.72: December 15, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Skill List Active After Party Member Change
 * **** If the skill list is active (ie. the player can move the cursor around)
 *      and the party member currently being viewed is changed via the button
 *      commands, then previously, RPG Maker MZ would still have that window be
 *      active despite having the cursor hidden temporarily. Upon pressing
 *      direction buttons, the cursor reveals itself and both the skill type
 *      window and skill list window are both active, making way for lots of
 *      potential problems to happen.
 * ** Water Tile Bug
 * *** It seems like there's a new bug that occurs if you create a tileset from
 *     scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 *     does is it causes many tiles to become water tiles without intending to.
 *     You can find this out by turning off all the plugins in your project,
 *     putting a Ship or Boat on what are normally ground tiles, and then
 *     seeing the Ship or Boat traverse through it.
 * *** There are two ways to fix this. We cannot fix it through code in this
 *     plugin as it's a problem that involves the tileset json data there are
 *     ways to work around it so that you can get the proper water-flags to go
 *     where they need to be at.
 * **** 1. Copy a working un-bugged tileset onto the currently bugged one and
 *      reapply the tile features like passability, terrain tags, etc. This
 *      will make sure the water-passability tiles get copied over correctly.
 * **** 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *      un-bugged tileset (usually a pre-existing tileset when a new project is
 *      made), click the "Copy Page" button, go to the bugged tileset and press
 *      "Paste Page". You'll have to reapply any different properties like
 *      passabilities and terrain tags, but the water tile flags should now be
 *      working properly.
 * *** The plugin will not fix the problem itself since flag data is delicate
 *     and should not be tampered with midgame as the changes made by the
 *     plugin might not match the desired settings.
 * *** This plugin, however, will also send out an alert message when coming
 *     across such a tile. Pay attention to it and do one of the following two
 *     steps above to fix the problem.
 * * Documentation Update!
 * ** Added "Skill List Active After Party Member Change" section to the
 *    "Important Changes: Bug Fixes" section of the help file.
 * ** Added "Water Tile Bug" section to the "Important Changes: Bug Fixes"
 *    section of the help file.
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Menu Backgrounds > Blur Strength
 * **** Strength used for menu background snapshots.
 * 
 * Version 1.71: November 10, 2022
 * * Bug Fixes!
 * ** Title Command Window should now allow for more than 4 custom commands
 *    without hidden commands. Fix made by Irina.
 * ** Fixed a problem with repeating animations from Visual State Effects
 *    causing softlocks. Fix made by Olivia.
 * 
 * Version 1.70: October 6, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** A texture check will now occur for sprites that are being removed and
 *     destroyed in order to prevent crashes. In the off chance that someone
 *     creates a sprite through a script call and removes it through such, the
 *     likelihood of this occurance becomes higher. This makes the destroy
 *     property take into account a texture check in order to see if the sprite
 *     removal is taking extra steps and will reduce those extra steps.
 * * Documentation Update!
 * ** Added "Sprite Removal and Destroy Crash" section to the "Important
 *    Changes: Bug Fixes" section.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.69: September 8, 2022
 * * Bug Fixes!
 * ** Fixed the combination of Button Assist Location: Top with Help Location:
 *    Bottom combination not working properly. Fix made by Irina.
 * 
 * Version 1.68: August 4, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Olivia and sponsored by Archeia:
 * *** Audio: Change Current BGM Volume
 * *** Audio: Change Current BGM Pitch
 * *** Audio: Change Current BGM Pan
 * *** Audio: Change Current BGS Volume
 * *** Audio: Change Current BGS Pitch
 * *** Audio: Change Current BGS Pan
 * **** Changes the current BGM/BGS volume/pitch/pan without changing any of
 *      the current BGM/BGS's other properties and without restarting BGM/BGS.
 * 
 * Version 1.67: July 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added notes for Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * *** This setting will be disabled if the map is zoomed in.
 * * New Features!
 * ** New map notetags added by Irina and sponsored by AndyL:
 * *** <Scroll Lock X>
 * *** <Scroll Lock X: x>
 * *** <Scroll Lock Y>
 * *** <Scroll Lock Y: y>
 * **** Causes the map to not scroll left/right(x) or up/down(y). Useful for
 *      when maps are just slightly smaller than normal and the tiny scrolling
 *      is distracting.
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small X?
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small Y?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display X?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display Y?
 * **** Automatically scroll locks small maps to prevent them from scrolling
 *      horizontally/vertically. Useful for 1280x720 resolutions when the map
 *      is 27 tiles wide. This will get rid of the subtle scrolling when moving
 *      from one half of the screen to the other.
 * **** This setting will be disabled if the map is zoomed in.
 * * Feature Update!
 * ** Warnings added to Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 * Version 1.66: July 14, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Debug Console Refresh Bug
 * **** When pressing F5 to refresh while the debug console (DevTools) is open,
 *      some graphics will fail to load properly. This started occurring since
 *      the RPG Maker MZ 1.5.0 update and the code for loading the images has
 *      now been reverted to the 1.4.4 version where it was last stable.
 * * Documentation Update!
 * ** Help file updated for new major bug fix.
 * 
 * Version 1.65: June 30, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Parameter Settings > Show Actor Level?
 * **** Show the actor level when displaying actors?
 * **** Used for most windows in-game.
 * 
 * Version 1.64: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Debug: Current Controller ID
 * **** PLAY TEST ONLY. Shows current controller ID in debug console.
 * **** Also copies to computer clipboard if possible.
 * ** New Plugin Parameters made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Subsettings for Button Assist Window: Controller Button Assist
 * **** These are sub-settings for the Button Assist Window Plugin Parameters.
 *      Where the Button Assist Window Plugin Parameters are focused on
 *      keyboard entries, these sections are focused on gamepad controllers.
 * **** Add multiple gamepads to the list to give them different button assist
 *      text. If a gamepad is being used but not listed here, the button assist
 *      text will default to the keyboard version.
 * 
 * Version 1.63: May 2, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > QoL Settings > Misc > Map Name Text Code
 * **** If on, map names will use text codes.
 * **** If off, only the raw map name will be used.
 * * Feature Update!
 * ** The map name text code change will no longer be on forcefully. It is now
 *    something that can be toggled by Plugin Parameters. Update by Irina.
 * 
 * Version 1.62: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by Archeia:
 * *** Variable: JS Eval
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows one line of code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * *** Variable: JS Block
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows JS block code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * ** Map names can now use text codes. Made by Arisu and sponsored by Archeia.
 * 
 * Version 1.61: April 21, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Battle Forced End Action Crash
 * **** Depending on various circumstances, currently active battlers can be
 *      cleared from the battle system at will due to a number of reasons.
 *      However, if it just so happens that the targets are cleared, too, with
 *      actions remaining, then a crash will follow up. This plugin will
 *      prevent that change. Fix made by Olivia.
 * 
 * Version 1.60: April 14, 2022
 * * Bug Fixes!
 * ** Number Input window will now respond to Home/End keys properly.
 *    Fix made by Olivia.
 * 
 * Version 1.59: April 7, 2022
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.4 compatibility update!
 * *** "Shutdown" command should now be more compatible with other aspects of
 *     the client when running from Node JS client on other OS's.
 * 
 * Version 1.58: March 24, 2022
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.57: March 3, 2022
 * * Compatibility Update!
 * ** The "Shutdown" command from the title screen should now be compatible
 *    with RPG Maker MZ 1.4.4 and up. Update made by Olivia.
 * 
 * Version 1.56: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Arisu and sponsored by Anon:
 * *** Plugin Parameters > QoL > Misc > Shortcut Scripts
 * **** Enables shortcut-based script variables and functions that can be used
 *      for script calls.
 * **** Shortcut list enabled for this is as follows:
 * ***** $commonEvent(id), $onceParallel(id), $scene, $spriteset, $subject, 
 *       $targets, $target, $event
 * ***** For more information on how to use them, review the help file.
 * 
 * Version 1.55: January 27, 2022
 * * Feature Update!
 * ** Once Parallels for the map are now able to update even while other events
 *    are running. Update made by Arisu.
 * 
 * Version 1.54: January 13, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Overly-Protective Substitute
 * *** When an ally with critical health is being targeted by a friendly non-
 *     Certain Hit skill (such as a heal or buff) and another ally has the
 *     substitute state, the other ally would "protect" the originally targeted
 *     ally and take the heal or buff.
 * *** The new changed behavior is that now, substitute will not trigger for
 *     any actions whose scope targets allies.
 * *** Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new MZ Bug: Overly-Protective Substitute.
 * * Feature Update!
 * ** Added a failsafe for those who did not update the plugin parameter
 *    settings and are using MV Animations.
 * 
 * Version 1.53: December 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetag added by Olivia:
 * *** <Rate: x>
 * **** Allows you to adjust the update for this MV Animation.
 * ***** Does NOT work with Effekseer animations.
 * **** The lower the number, the faster.
 * **** Replace 'x' with a number representing the animation update rate.
 * ***** Default rate: 4.
 * ***** Minimum rate: 1.
 * ***** Maximum rate: 10.
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Qualify of Life Settings > MV Animation Rate
 * **** Adjusts the rate at which MV animations play.
 * **** Default: 4. Lower for faster. Higher for slower.
 * * Optimization Update!
 * ** MV Animations should run more optimized.
 * 
 * Version 1.52: December 16, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.0 compatibility update!
 * *** MV Animations played on screen level will now show up properly in the
 *     center of the screen.
 * 
 * Version 1.51: December 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** In the battle status windows, whenever actor names are displayed, the
 *     bitmap used to display their name text do not extend vertically all the
 *     way, causing letters like lowercase "Q" and "G" to be cut off, making
 *     them hard to distinguish from one another. The Core Engine will remedy
 *     this by extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * Version 1.50: November 4, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** By default, if the attack skill is sealed via a trait and an actor has
 *     auto-battle, the action can still be used via auto-battle. This is now
 *     fixed and actors should not be able to attack via auto-battle if their
 *     attack ability is sealed. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.49: October 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Map: Once Parallel
 * **** Plays a Common Event parallel to the event once without repeating
 *      itself when done. Map only!
 * **** When exiting map scene or changing maps, all Once Parallels are cleared
 * **** Once Parallels are not retained upon reentering the scene or map.
 * **** Once Parallels are not stored in memory and cannot be saved.
 * 
 * Version 1.48: October 21, 2021
 * * Feature Update!
 * ** Bitmap.blt function will now have source coordinates and destination X
 *    and Y coordinates rounded to prevent blurring. Update made by Olivia.
 * 
 * Version 1.47: October 14, 2021
 * * Bug Fixes!
 * ** Prevents Number Input window from having a NaN value due to holding down
 *    the fast forward key. Fix made by Arisu.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * **** Fixes the font width issue with non-monospaced fonts in the Message
 *      Window. This is now an optional fix.
 * 
 * Version 1.46: September 23, 2021
 * * Documentation Update!
 * ** Added line to Plugin Command: "System: Battle System Change":
 * *** Some battle systems REQUIRE their specific plugins!
 * ** Added lines to "Plugin Parameters: Battle System":
 * *** Some battle systems REQUIRE their specific plugins! This means if you do
 *     not have the required battle system plugin installed, it will not change
 *     over. The Core Engine plugin does not contain data for all of the battle
 *     systems inside its code.
 * 
 * Version 1.45: September 17, 2021
 * * Bug Fixes!
 * ** Fixed a problem with "Picture: Coordinates Mode" to properly utilize the
 *    correct picture ID. Fix made by Arisu.
 * ** RPG Maker MZ Bug Fix:
 * *** Instant Text Discrepancy for Window_Message
 * **** Window_Message displays text differently when it draws letters one by
 *      one versus when the text is displayed instantly. This isn't noticeable
 *      with the default font, but it's very visible when using something like
 *      Arial. The error is due to Bitmap.measureTextWidth yielding a rounded
 *      value per letter versus per word. The Core Engine will provide a bug
 *      fix that will single out the cause and make it so that only
 *      Window_Message will not utilize any round number values when
 *      determining the width of each letter, whether or not it is shown
 *      instantly. This change will only affect Window_Message and not any
 *      other window in order to prevent unintended side effects.
 * **** Fix made by Yanfly.
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.44: August 20, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Anon.
 * *** "Animation: Play at Coordinate"
 * **** Plays an animation on the screen at a specific x, y coordinate even if
 *      there is no sprite attached.
 * 
 * Version 1.43: July 23, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Archeia!
 * *** "Picture: Coordinates Mode"
 * **** Play Test Mode only!
 * **** Gets the coordinates of a specific picture as you move it across the
 *      screen.
 * **** Helpful for those who don't want to do guess work on the screen
 *      coordinates when it comes to placing down pictures.
 * 
 * Version 1.42: July 16, 2021
 * * Documentation Update
 * ** Added text to "Plugin Parameters: Color Settings" for clarification:
 * *** If the game's Window Skin is changed mid-game, the colors used will
 *     still be based off the default Window Skin's colors. This is due to
 *     storing them in a cache and preventing extra processing and reduces lag.
 * 
 * Version 1.41: July 2, 2021
 * * Compatibility Update
 * ** Further compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update
 * ** Added extra notes to "Important Changes: Bug Fixes" section for the
 *    "Window Skin Bleeding" bug:
 * *** This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Version 1.40: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update:
 * ** Plugin Parameters > Window Settings > Back Opacity
 * *** As of version 1.3.0, this is no longer needed.
 * *** This will still work for lower versions.
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Window Skin Bleeding fix updated to newest version.
 * * New Plugin Parameters added:
 * ** Plugin Parmaeters > Screen Resolution Settings
 * *** These settings have been moved from the UI settings to be its own thing.
 * **** This is mostly for RPG Maker MZ version 1.3.0 and up where the Troops
 *      tab has been updated to match the screen resolution settings found in
 *      the System 2 Database tab.
 * *** Reposition Enemies > For MZ 1.3.0+?
 * **** Both of these plugin parameters need to be set to true in order for the
 *      repositioning to work for MZ v1.3.0.
 * **** If the Core Script is below 1.3.0, this setting is ignored. This does
 *      not take into account what version the editor is on. Pay attention to
 *      that as the plugin will not auto adjust for it.
 * 
 * Version 1.39: June 18, 2021
 * * Bug Fixes!
 * ** Number Inputs should now work with the controller if keyboard Number
 *    Input is enabled. Fix made by Olivia.
 * ** RPG Maker Bug: Termination Clear Effects
 * *** In RPG Maker MZ, requesting an animation while transitioning between
 *     scenes, such as going from the map scene to the battle scene, can cause
 *     crashes. This is because the animation queue does not take off
 *     immediately and will likely register incorrect targets for the scene.
 *     This plugin will forcefully clear any registered animations and balloon
 *     effects when terminating a scene in order to prevent crashes.
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** <Battle View: x> Troop Name tags can now work with comment tags.
 * ** <Battle System: x> Troop Name tags can now work with comment tags.
 * *** Updates made by Irina.
 * 
 * Version 1.38: June 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Caz!
 * *** Picture: Show Icon
 * **** Shows an icon instead of a picture image.
 * **** The picture icon can be controlled like any other picture.
 * 
 * Version 1.37: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Switches: Randomize ID(s)
 * *** Switches: Randomize Range
 * *** Switches: Toggle ID(s)
 * *** Switches: Toggle Range
 * **** These Plugin Commands allow you to randomize the ON/OFF positions of
 *      switches or toggle them so that they flip their ON/OFF status.
 * 
 * Version 1.36: May 14, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Export: All Maps Text
 * *** Export: All Troops Text
 * *** Export: Current Map Text
 * *** Export: Current Troop Text
 * **** Play Test Only Plugin Commands. These Plugin Commands are used for
 *      extracting all messages, show choices, comments, and scrolling text to
 *      parse and export them as a TXT file. Useful for getting a game's script
 *      to a voice actor or voice actress.
 * 
 * Version 1.35: May 7, 2021
 * * Documentation Update!
 * ** Added the following text to "Parameter Settings" Plugin Parameters for
 *    extra clarity regarding Parameter Caps:
 * *** These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 * 
 * Version 1.34: April 23, 2021
 * * Bug Fixes!
 * ** For the vanilla Equip Status window, custom parameters with integer
 *    values will now show up as integers and not percentiles. Fix by Olivia.
 * * Documentation Update!
 * ** Added clarity to the <param: x> notetag for enemies.
 * *** This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * 
 * Version 1.33: April 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Window Skin Bleeding
 * *** Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 *     been set from 96 to 95. This results in the window skin bleeding past
 *     the window's intended borders. The Core Engine now reverts this change
 *     to prevent the bleeding effect from happening.
 * * Feature Update!
 * ** "Encounter Rate Minimum" now has a valid minimum value of 1. Update made
 *    by Olivia.
 * 
 * Version 1.32: April 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Item Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Weapon Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Armor Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Added Quantity
 * **** By default, RPG Maker MZ only adds 99 of items and not weapons or armor
 *      making it awkward for testing specific battle mechanics. These settings
 *      allow you to add in custom amounts of items, weapons, and/or armors if
 *      you so wish.
 * 
 * Version 1.31: March 26, 2021
 * * Feature Update!
 * ** Title screen buttons will now become fully opaque when hovered over them
 *    instead of only when pressed. Update made by Yanfly.
 * 
 * Version 1.30: March 19, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Invisible Battle Sprites
 * *** If you removed a party member during battle and added that exact party
 *     member back into the same slot, their sprite would appear invisible. The
 *     VisuStella Core Engine will fix this problem and prevent it from
 *     happening. Fix made by Olivia.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset
 * **** When animations are mirrored, mirror their Offset X values, too.
 * ** New animation name tags added by Arisu:
 * *** <Mirror Offset X> and <No Mirror Offset X>
 * **** If these text tags are placed in an animation's name, it will cause the
 *      offset X value to be mirrored when the animation is mirrored or have it
 *      ignored despite being mirrored.
 * 
 * Version 1.29: March 12, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Interactable window client area does not conform to the
 *    window's declared scale when the scale is anything but 1.0. This will now
 *    be fixed through this plugin. Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Name Input should be more controller-friendly. If a controller is
 *    connected upon entering the name change scene, it will use the default
 *    manual-entry mode instead of the keyboard-entry mode. If a controller
 *    button is pressed during the keyboard-entry mode, it will automatically
 *    switch to the manual-entry mode.
 * ** This plugin does not provide support for controllers that are undetected
 *    by RPG Maker MZ's default controller support.
 * ** This feature was already implemented since version 1.27 but wasn't
 *    documented so here we are. Update made by Irina.
 * 
 * Version 1.28: March 5, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: The arrows drawn by a window skin will no longer by
 *    placed on a half pixel when a window's size is an odd number. This would
 *    cause sprite tearing problems and look awful. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * 
 * Version 1.27: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Moved "Show Scrolling Text, additional functionality" section from Bug
 *    Fixes to Major Changes as it was placed in the wrong section.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > Keyboard Input > Name Input > Banned Words
 * **** Insert words you don't want your players to use for character names.
 * 
 * Version 1.26: February 19, 2021
 * * Bug Fixes!
 * ** Certain Plugin Parameters no longer have settings that restrict them to
 *    a maximum of 1. Fix made by Arisu.
 * * Feature Update!
 * ** Changed the default value for a New Game > Common Event upon Play Testing
 *    to 0 to prevent confusion. Update made by Arisu.
 * 
 * Version 1.25: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Show Scrolling Text, additional functionality added by Arisu
 * *** The event command "Show Scrolling Text" now has additional functionality
 *     as long as the VisuStella MZ Core Engine is installed. If the game dev
 *     inserts "// Script Call" (without the quotes) inside the scrolling text,
 *     then the entirity of the Show Scrolling Text event command will be ran
 *     as a giant script call event command.
 * *** The reason why this functionality is added is because the "Script..."
 *     event command contains only 12 lines maximum. This means for any script
 *     call larger than 12 lines of code cannot be done by normal means as each
 *     script call is ran as a separate instance.
 * *** By repurposing the "Show Scrolling Text" event command to be able to
 *     function as an extended "Script..." event command, such a thing is now
 *     possible with less hassle and more lines to code with.
 * *** This effect does not occur if the Show Scrolling Text event command does
 *     not have "// Script Call" in its contents.
 * 
 * Version 1.24: January 29, 2021
 * * Documentation Update!
 * ** Plugin Parameters: Custom Parameters Settings added the following note:
 * *** For clarification, these settings do NOT create brand-new parameters for
 *     you to use and add to your game nor are the bonuses supported by other
 *     plugins in the VisuStella MZ library. These settings exist to function
 *     as a bridge for non-VisuStella MZ plugins that have created their own
 *     parameter values and to show them inside VisuStella menus.
 * * Feature Update!
 * ** Default JS Plugin Parameter for the Title Command: "Shutdown" now has a
 *    note in it that reads: "Do NOT use this command with mobile devices or
 *    browser games. All it does is cause the game to display a blank, black
 *    canvas which the player is unable to do anything with. It does NOT force
 *    close the browser tab nor the app."
 * *** This is also why this command is disabled by default for any non-NodeJS
 *     client deployed game versions.
 * ** Disabled some bug fixes made by the Core Engine for the default RMMZ code
 *    base since the 1.1.1 version now contains those very same fixes.
 * 
 * Version 1.23: January 22, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: January 15, 2021
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Sprite_Timer is added to the spriteset for the parent
 *    scene, making it affected by any filers, zooms, and/or blurs, hindering
 *    its readability.
 * 
 * Version 1.21: January 8, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Keyboard Input > Controls > WASD Movement
 * *** Plugin Parameters > Keyboard Input > Controls > R Button: Dash Toggle
 * 
 * Version 1.20: January 1, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.19: December 25, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s) and feature updates!
 * * Bug Fixes!
 * ** Fixed typo inside of the comments inside the JS: Quick Functions.
 * * Feature Update!
 * ** Plugin Parameters > Color Settings > Outline Color is now renamed to
 *    Font Outline.
 * * New Features!
 * ** New Plugin Parameters added by Shaz!
 * *** Plugin Parameters > Color Settings > Gauge Number Outline
 * 
 * Version 1.18: December 18, 2020
 * * Bug Fixes!
 * ** Compatible string text from the Items and Equips Core will no longer
 *    register MaxHP and MaxMP as percentile values for the info window.
 * ** RPG Maker MZ Bug: Gamepads no longer go rapidfire after a cleared input.
 *    There is now a period of delay for gamepads after an input clear.
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * New Features!
 * ** New Plugin Parameters added by Yanfly!
 * *** Plugin Parameters > Button Assist > Key: Shift
 * *** Plugin Parameters > Button Assist > Key: Tab
 * **** These let you assign text codes to the Shift and Tab buttons for the
 *      Button Assist windows.
 * *** Plugin Parameters > QoL Settings > Misc > NewGame > CommonEvent
 * **** For an all version (including non-play test) common event to start new
 *      games with.
 * 
 * Version 1.17: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.16: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Button Assist Window for the change name scene will now default to "Tab"
 *    for switching between both modes. Update made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Keyboard Input > Default Mode
 * **** Select default mode when entering the scene.
 * 
 * Version 1.15: November 29, 2020
 * * Bug Fixes!
 * ** Pressing "Enter" in the change name scene while the actor's name is
 *    completely empty will no longer result in endless buzzer sounds. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** For the name change scene, the "Tab" key now also lets the user switch
 *    between the two modes. Update made by Yanfly.
 * * New Features!
 * ** Two new plugin parameters added to Keyboard Input:
 * *** "Switch To Keyboard" and "Switch To Manual"
 * **** These determine the text used for the button assist window when
 *      switching between the two modes. Update made by Yanfly.
 * **** Button Assist window now takes into consideration for these texts.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: November 22, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Command added by Yanfly!
 * *** System: Load Images
 * **** Allows you to (pre) load up images ahead of time.
 * 
 * Version 1.13: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.12: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Screen Shake Plugin Parameters and JS: Quick Function Plugin Parameters
 *    have been taken off experimental status.
 * * New Features!
 * ** New plugin parameters added by Arisu.
 * *** Plugin Parameters > Keyboard Input
 * **** Settings for the game that utilize keyboard input. These are primarily
 *      for the name input scene (Scene_Name) and the number input event
 *      command. These settings have only been tested on English keyboards and
 *      may or may not be compatible with other languages, so please disable
 *      these features if they do not fit in with your game.
 * 
 * Version 1.11: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Feature Update!
 * ** Bitmap smoothing now takes into consideration for rounding coordinates.
 *    Update made by Irina.
 * 
 * Version 1.10: October 25, 2020
 * * Feature Update!
 * ** Sprite animation location now adjusts position relative to the sprite's
 *    scale, too. Update made by Arisu.
 *
 * Version 1.09: October 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Auto Battle Lock Up. Fixed by Yanfly.
 * *** If an auto battle Actor fights against an enemy whose DEF/MDF is too
 *     high, they will not use any actions at all. This can cause potential
 *     game freezing and softlocks. This plugin will change that and have them
 *     default to a regular Attack.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: October 11, 2020
 * * Feature Update!
 * ** Altered sprite bitmaps via the various draw functions will now be marked
 *    as modified and will automatically purge themselves from graphical memory
 *    upon a sprite's removal to free up more resources. Change made by Yanfly.
 * ** Picture Sprite Origin anchors are now tied to the Game_Picture show and
 *    move commands instead of the Game_Interpretter commands. Change by Arisu.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** New documentation added for the new Plugin Parameter category:
 *    "Custom Parameters".
 * * New Features!
 * ** New Plugin Parameter "Custom Parameters" added by Yanfly.
 * *** Create custom parameters for your game! These will appear in
 *     VisuStella MZ menus.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Battler evasion pose can now occur if there is a miss. These were made
 *    separate in RPG Maker MZ and misses didn't enable the evasion pose. Fix
 *    made by Olivia.
 * * New Features!
 * ** New notetags for Maps and name tags for Troops added by Yanfly!
 * *** <Frontview>, <Sideview> to change the battle view for that specific map,
 *     or troop regardless of what other settings are.
 * *** <DTB>, <TPB Active>, <TPB Wait> to change the battle system for that
 *     specific map or troop regardless of what other settings are.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** <Level: x> notetag for enemies is now fixed! Fix made by Arisu.
 * * Documentation Update!
 * ** Documentation added for the new "System: Battle System Change" Plugin
 *    Command and removed the old "System: Set Time Progress Battle".
 * * Feature Update!
 * ** The Plugin Command "System: Set Time Progress Battle" has been replaced
 *    with "System: Battle System Change" instead. This is to accommodate
 *    future plugins that allow for different battle systems. Added by Yanfly.
 * *** If you have previously used "System: Set Time Progress Battle", please
 *     replace them. We apologize for the inconvenience.
 * * New Features!
 * ** In the Core Engine's plugin parameters, you can now set the Battle System
 *    used. This will default to whatever is the game database's setting. This
 *    feature is used for the future when new battle systems are made. Feature
 *    added by Yanfly.
 * 
 * Version 1.04: September 13, 2020
 * * Documentation Update!
 * ** Added new documentation for the "Title Command List" and Title Picture
 *    Buttons" plugin parameters. They now have a dedicated section each.
 * * Feature Updates!
 * ** Moved the "Title Command List" and "Title Picture Buttons" parameters
 *    from the Menu Layout > Title settings. They were far too hidden away and
 *    users had a hard time finding them. Update made by Yanfly.
 * *** Users who have customized these settings before will need to readjust
 *     them again. We apologize for the inconvenience.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Having QoL > Modern Controls disabled (why would you) used to prevent the
 *    down button from working. It works again. Fix made by Yanfly.
 * * New Feature!
 * ** Plugin default settings now come with a "Game End" option on the title
 *    screen. For those updating from version 1.02 or order, you can add this
 *    in by opening the Core Engine > Plugin Parameters > Menu Layout Settings
 *    > press "delete" on Scene_Title > open it up, then the new settings will
 *    fill in automatically.
 * * New Experimental Feature Added:
 * ** Screen Shake Settings added to the Plugin Parameters.
 * *** Screen Shake: Custom Plugin Command added!
 * *** Credit to Aries of Sheratan, who gave us permission to use her formula.
 * *** We'll be expanding on more screen shaking options in the future.
 * * Optimization Update
 * ** Digit Grouping now works more efficiently.
 * 
 * Version 1.02: August 30, 2020
 * * New Feature!
 * ** New Plugin Command: "Picture: Erase All". Added by Olivia.
 * *** Erases all pictures on the screen because it's extremely tedious to do
 *     it one by one.
 * ** New Plugin Command: "Picture: Erase Range"
 * *** Erases all pictures within a range of numbers because it's extremely
 *     tedious to do it one by one.
 * * Optimization Update
 * ** Added a more accurate means of parsing numbers for Digit Grouping.
 * ** Window_Base.prototype.textSizeEx now stores data to a cache.
 * * Documentation Update
 * ** Added a section to Major Changes: New Hard-Coded Features on
 *    Digit Grouping and explaining its intricacies.
 * ** Added a note to Plugin Parameters > UI > Reposition Actors to ignore the
 *    setting if using the Battle Core.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Digit grouping fixed to allow text codes to detect values larger than
 *    1000. Fix made by Olivia and Yanfly.
 * ** Param Plus, Rate, Flat notetags fixed. Fix made by Yanfly.
 * * New Experimental Feature Added:
 * ** JS: Quick Functions found in the Plugin Parameters
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
 * @command Separator_Animation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AnimationPoint
 * @text Animation: Play at Coordinate
 * @desc Plays an animation on the screen at a specific x, y
 * coordinate even if there is no sprite attached.
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Plays this animation.
 * @default 1
 * 
 * @arg Coordinates
 *
 * @arg pointX:eval
 * @text X
 * @parent Coordinates
 * @desc X coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg pointY:eval
 * @text Y
 * @parent Coordinates
 * @desc Y coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.height / 2
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation?
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the animation?
 * @default false
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Audio
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmVolume
 * @text Audio: Change Current BGM Volume
 * @desc Changes the current BGM volume without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGM's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPitch
 * @text Audio: Change Current BGM Pitch
 * @desc Changes the current BGM pitch without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGM's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPan
 * @text Audio: Change Current BGM Pan
 * @desc Changes the current BGM pan without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGM's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsVolume
 * @text Audio: Change Current BGS Volume
 * @desc Changes the current BGS volume without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGS's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPitch
 * @text Audio: Change Current BGS Pitch
 * @desc Changes the current BGS pitch without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGS's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPan
 * @text Audio: Change Current BGS Pan
 * @desc Changes the current BGS pan without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGS's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Debug
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugConsoleLastControllerID
 * @text Debug: Current Controller ID
 * @desc PLAY TEST ONLY. Shows current controller ID in debug console.
 * Also copies to computer clipboard if possible.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Export
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllMapText
 * @text Export: All Maps Text
 * @desc PLAY TEST ONLY. Exports all of the text from all maps,
 * their events, event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllTroopText
 * @text Export: All Troops Text
 * @desc PLAY TEST ONLY. Exports all of the text from all troops,
 * their event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurMapText
 * @text Export: Current Map Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current map,
 * its events, the event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurTroopText
 * @text Export: Current Troop Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current troop,
 * the troop's event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Game
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OpenURL
 * @text Game: Open URL
 * @desc Opens a website URL from the game.
 *
 * @arg URL:str
 * @text URL
 * @desc Where do you want to take the player?
 * @default https://www.google.com/
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Gold
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GoldChange
 * @text Gold: Gain/Lose
 * @desc Allows you to give/take more gold than the event editor limit.
 *
 * @arg value:eval
 * @text Value
 * @desc How much gold should the player gain/lose?
 * Use negative values to remove gold. You may use JS.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Map
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapOnceParallel
 * @text Map: Once Parallel
 * @desc Plays a Common Event parallel to the event once without
 * repeating itself when done. Map only!
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc The ID of the parallel Common Event to play.
 * Does NOT repeat itself when finished.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureCoordinatesMode
 * @text Picture: Coordinates Mode
 * @desc Play Test Mode only! Gets the coordinates of a specific
 * picture as you move it across the screen.
 *
 * @arg PictureID:num
 * @text Picture ID
 * @type number
 * @min 1
 * @desc The ID of the pictures to track the coordinates of.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEasingType
 * @text Picture: Easing Type
 * @desc Changes the easing type to a number of options.
 *
 * @arg pictureId:num
 * @text Picture ID
 * @type number
 * @min 1
 * @desc Which picture do you wish to apply this easing to?
 * @default 1
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg LineBreak
 * @text ------------------------
 * @default --------------------------------
 *
 * @arg Instructions1
 * @text Instructions
 * @default Insert this Plugin Command after
 *
 * @arg Instructions2
 * @text -
 * @default a "Move Picture" event command.
 * 
 * @arg Instructions3
 * @text -
 * @default Turn off "Wait for Completion"
 *
 * @arg Instructions4
 * @text -
 * @default in the "Move Picture" event.
 *
 * @arg Instructions5
 * @text -
 * @default You may have to add in your own
 *
 * @arg Instructions6
 * @text -
 * @default "Wait" event command after.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseAll
 * @text Picture: Erase All
 * @desc Erases all pictures on the screen because it's extremely
 * tedious to do it one by one.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseRange
 * @text Picture: Erase Range
 * @desc Erases all pictures within a range of numbers because it's
 * extremely tedious to do it one by one.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type number
 * @min 1
 * @desc The starting ID of the pictures to erase.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type number
 * @min 1
 * @desc The ending ID of the pictures to erase.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotateBy
 * @text Picture: Rotate By Angle
 * @desc Rotates target picture by a amount angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg AdjustAngle:eval
 * @text Adjust Angle
 * @desc What is the angle you wish to rotate the picture by?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotate
 * @text Picture: Rotate to Angle
 * @desc Rotates target picture to a certain angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg TargetAngle:eval
 * @text Target Angle
 * @desc What is the target angle you wish to rotate the picture?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command PictureShowIcon
 * @text Picture: Show Icon
 * @desc Shows an icon instead of a picture image.
 * The picture icon can be controlled like any other picture.
 * 
 * @arg General
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @parent General
 * @desc What is the ID of the picture you wish to show at? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg IconIndex:eval
 * @text Icon Index
 * @parent General
 * @desc Select the icon index to use for this picture.
 * You may use JavaScript code.
 * @default 23
 *
 * @arg Smooth:eval
 * @text Smooth Icon?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc This will make the icon smoothed out or pixelated.
 * @default false
 * 
 * @arg PictureSettings
 * @text Picture Settings
 *
 * @arg Settings:struct
 * @text Settings
 * @parent PictureSettings
 * @type struct<ShowPicture>
 * @desc Alter the settings for how the picture will be shown.
 * @default {"Position":"","Origin:num":"0","PositionX:eval":"0","PositionY:eval":"0","Scale":"","ScaleX:eval":"100","ScaleY:eval":"100","Blend":"","Opacity:eval":"255","BlendMode:num":"0"}
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ScreenShake
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ScreenShake
 * @text Screen Shake: Custom
 * @desc Creates a custom screen shake effect and also sets
 * the following uses of screen shake to this style.
 *
 * @arg Type:str
 * @text Shake Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc Select shake style type.
 * @default random
 *
 * @arg Power:num
 * @text Power
 * @type number
 * @min 1
 * @max 9
 * @desc Power level for screen shake.
 * @default 5
 *
 * @arg Speed:num
 * @text Speed
 * @type number
 * @min 1
 * @max 9
 * @desc Speed level for screen shake.
 * @default 5
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of screenshake.
 * You can use code as well.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Switch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeOne
 * @text Switches: Randomize ID(s)
 * @desc Select specific Switch ID's to randomize ON/OFF.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeRange
 * @text Switches: Randomize Range
 * @desc Select specific Switch ID Range to randomize ON/OFF.
 * The ratio determines the ON/OFF distribution.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleOne
 * @text Switches: Toggle ID(s)
 * @desc Select specific Switch ID's to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleRange
 * @text Switches: Toggle Range
 * @desc Select specific Switch ID Range to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetBattleSystem
 * @text System: Battle System Change
 * @desc Switch to a different battle system in-game.
 * Some battle systems REQUIRE their specific plugins!
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB Wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to switch to.
 * @default database
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemLoadImages
 * @text System: Load Images
 * @desc Allows you to (pre) load up images ahead of time.
 *
 * @arg animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetFontSize
 * @text System: Main Font Size
 * @desc Set the game's main font size.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the font size to this number.
 * @default 26
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetSideView
 * @text System: Side View Battle
 * @desc Switch between Front View or Side View for battle.
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Front View
 * @value Front View
 * @option Side View
 * @value Side View
 * @option Toggle
 * @value Toggle
 * @desc Choose which view type to switch to.
 * @default Toggle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetWindowPadding
 * @text System: Window Padding
 * @desc Change the game's window padding amount.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the game's standard window padding to this value.
 * Default: 12
 * @default 12
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_TextPopup
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TextPopupShow
 * @text Text Popup: Show Text
 * @desc Adds text to a text popup window to briefly appear.
 * Multiple text popups will be queued.
 *
 * @arg text:json
 * @text Text
 * @type note
 * @desc Write the text that you want to appear here.
 * You may use text codes.
 * @default "Insert message here."
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Variable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableEvalReference
 * @text Variable: JS Eval
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:eval
 * @text Variable ID
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 1
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:eval
 * @text Operand Modifier
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableJsBlock
 * @text Variable: JS Block
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:func
 * @text Variable ID
 * @type note
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet varID = 1;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn varID;"
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:func
 * @text Operand Modifier
 * @type note
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet value = 0;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn value;"
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
 * @param CoreEngine
 * @default Plugin Parameters
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param QoL:struct
 * @text Quality of Life Settings
 * @type struct<QoLSettings>
 * @desc Quality of Life settings for both developers and players.
 * @default {"PlayTest":"","NewGameBoot:eval":"false","ForceNoPlayTest:eval":"false","OpenConsole:eval":"true","F6key:eval":"true","F7key:eval":"true","NewGameCommonEvent:num":"0","BattleTest":"","BTestItems:eval":"true","BTestWeapons:eval":"true","BTestArmors:eval":"true","BTestAddedQuantity:num":"90","ShiftR_Toggle:eval":"true","ShiftT_Toggle:eval":"true","DigitGrouping":"","DigitGroupingStandardText:eval":"true","DigitGroupingExText:eval":"true","DigitGroupingDamageSprites:eval":"true","DigitGroupingGaugeSprites:eval":"true","DigitGroupingLocale:str":"en-US","PlayerBenefit":"","EncounterRateMinimum:num":"10","EscapeAlways:eval":"true","ImprovedAccuracySystem:eval":"true","AccuracyBoost:eval":"true","LevelUpFullHp:eval":"true","LevelUpFullMp:eval":"true","Pictures":"","AntiZoomPictures:eval":"true","PictureContainers":"","DetachBattlePictureContainer:eval":"false","DetachMapPictureContainer:eval":"false","Misc":"","AnimationMirrorOffset:eval":"false","AutoStretch:str":"default","FontShadows:eval":"false","FontSmoothing:eval":"true","FontWidthFix:eval":"true","KeyItemProtect:eval":"true","MapNameTextCode:eval":"true","ModernControls:eval":"true","MvAnimationRate:num":"4","NewGameCommonEventAll:num":"0","NoTileShadows:eval":"false","PixelateImageRendering:eval":"false","RequireFocus:eval":"false","ShortcutScripts:eval":"true","SmartEventCollisionPriority:eval":"true","SubfolderParse:eval":"true"}
 * 
 * @param BattleSystem:str
 * @text Battle System
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to use for your game.
 * Some battle systems REQUIRE their specific plugins!
 * @default database
 *
 * @param Color:struct
 * @text Color Settings
 * @type struct<Color>
 * @desc Change the colors used for in-game text.
 * @default {"BasicColors":"","ColorNormal:str":"0","ColorSystem:str":"16","ColorCrisis:str":"17","ColorDeath:str":"18","ColorGaugeBack:str":"19","ColorHPGauge1:str":"20","ColorHPGauge2:str":"21","ColorMPGauge1:str":"22","ColorMPGauge2:str":"23","ColorMPCost:str":"23","ColorPowerUp:str":"24","ColorPowerDown:str":"25","ColorCTGauge1:str":"26","ColorCTGauge2:str":"27","ColorTPGauge1:str":"28","ColorTPGauge2:str":"29","ColorTPCost:str":"29","ColorPending:str":"#2a847d","ColorExpGauge1:str":"30","ColorExpGauge2:str":"31","ColorMaxLvGauge1:str":"14","ColorMaxLvGauge2:str":"6","AlphaColors":"","OutlineColor:str":"rgba(0, 0, 0, 0.6)","DimColor1:str":"rgba(0, 0, 0, 0.6)","DimColor2:str":"rgba(0, 0, 0, 0)","ItemBackColor1:str":"rgba(32, 32, 32, 0.5)","ItemBackColor2:str":"rgba(0, 0, 0, 0.5)","ConditionalColors":"","ActorHPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If the actor is dead, return death color.\\n} else if (actor.isDead()) {\\n    return this.deathColor();\\n\\n// If the actor is dying, return crisis color.\\n} else if (actor.isDying()) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorMPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If MP rate is below 25%, return crisis color.\\n} else if (actor.mpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorTPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If TP rate is below 25%, return crisis color.\\n} else if (actor.tpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ParamChange:func":"\"// Set the variables used in this function.\\nlet change = arguments[0];\\n\\n// If a positive change, use power up color.\\nif (change > 0) {\\n    return this.powerUpColor();\\n\\n// If a negative change, use power down color.\\n} else if (change < 0) {\\n    return this.powerDownColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","DamageColor:func":"\"// Set the variables used in this function.\\nlet colorType = arguments[0];\\n\\n// Check the value of the color type\\n// and return an appropriate color.\\nswitch (colorType) {\\n\\n    case 0: // HP damage\\n        return \\\"#ffffff\\\";\\n\\n    case 1: // HP recover\\n        return \\\"#b9ffb5\\\";\\n\\n    case 2: // MP damage\\n        return \\\"#bb88bb\\\";\\n\\n    case 3: // MP recover\\n        return \\\"#80b0ff\\\";\\n\\n    default:\\n        return \\\"#808080\\\";\\n}\""}
 *
 * @param Gold:struct
 * @text Gold Settings
 * @type struct<Gold>
 * @desc Change up how gold operates and is displayed in-game.
 * @default {"GoldMax:num":"999999999","GoldFontSize:num":"24","GoldIcon:num":"314","GoldOverlap:str":"A Lot","ItemStyle:eval":"true"}
 *
 * @param ImgLoad:struct
 * @text Image Loading
 * @type struct<ImgLoad>
 * @desc Game images that will be loaded upon booting up the game.
 * Use this responsibly!!!
 * @default {"animations:arraystr":"[]","battlebacks1:arraystr":"[]","battlebacks2:arraystr":"[]","characters:arraystr":"[]","enemies:arraystr":"[]","faces:arraystr":"[]","parallaxes:arraystr":"[]","pictures:arraystr":"[]","sv_actors:arraystr":"[]","sv_enemies:arraystr":"[]","system:arraystr":"[\"Balloon\",\"IconSet\"]","tilesets:arraystr":"[]","titles1:arraystr":"[]","titles2:arraystr":"[]"}
 *
 * @param KeyboardInput:struct
 * @text Keyboard Input
 * @type struct<KeyboardInput>
 * @desc Settings for the game that utilize keyboard input.
 * @default {"Controls":"","WASD:eval":"false","DashToggleR:eval":"false","NameInput":"","EnableNameInput:eval":"true","DefaultMode:str":"keyboard","QwertyLayout:eval":"true","NameInputMessage:eval":"\"Type in this character's name.\\nPress \\\\c[5]ENTER\\\\c[0] when you're done.\\n\\n-or-\\n\\nPress \\\\c[5]arrow keys\\\\c[0]/\\\\c[5]TAB\\\\c[0] to switch\\nto manual character entry.\\n\\nPress \\\\c[5]ESC\\\\c[0]/\\\\c[5]TAB\\\\c[0] to use to keyboard.\"","NumberInput":"","EnableNumberInput:eval":"true","ButtonAssist":"","Keyboard:str":"Keyboard","Manual:str":"Manual"}
 *
 * @param MenuBg:struct
 * @text Menu Background Settings
 * @type struct<MenuBg>
 * @desc Change how menu backgrounds look for each scene.
 * @default {"Scene_Menu:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Item:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Skill:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Equip:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Status:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Options:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Save:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Load:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_GameEnd:struct":"{\"SnapshotOpacity:num\":\"128\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Shop:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Name:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Unlisted:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}"}
 *
 * @param ButtonAssist:struct
 * @text Menu Button Assist Window
 * @type struct<ButtonAssist>
 * @desc Settings pertaining to the Button Assist window found in in-game menus.
 * @default {"General":"","Enable:eval":"true","Location:str":"bottom","BgType:num":"0","Text":"","TextFmt:str":"%1:%2","MultiKeyFmt:str":"%1/%2","OkText:str":"Select","CancelText:str":"Back","SwitchActorText:str":"Switch Ally","Keys":"","KeyUnlisted:str":"\\}❪%1❫\\{","KeyUP:str":"^","KeyDOWN:str":"v","KeyLEFT:str":"<<","KeyRIGHT:str":">>","KeySHIFT:str":"\\}❪SHIFT❫\\{","KeyTAB:str":"\\}❪TAB❫\\{","KeyA:str":"A","KeyB:str":"B","KeyC:str":"C","KeyD:str":"D","KeyE:str":"E","KeyF:str":"F","KeyG:str":"G","KeyH:str":"H","KeyI:str":"I","KeyJ:str":"J","KeyK:str":"K","KeyL:str":"L","KeyM:str":"M","KeyN:str":"N","KeyO:str":"O","KeyP:str":"P","KeyQ:str":"Q","KeyR:str":"R","KeyS:str":"S","KeyT:str":"T","KeyU:str":"U","KeyV:str":"V","KeyW:str":"W","KeyX:str":"X","KeyY:str":"Y","KeyZ:str":"Z"}
 *
 * @param ControllerButtons:arraystruct
 * @text Controller Button Assist
 * @parent ButtonAssist:struct
 * @type struct<ControllerButtons>[]
 * @desc Make different icons appear for the Button Assist window when using different controllers.
 * @default []
 *
 * @param MenuLayout:struct
 * @text Menu Layout Settings
 * @type struct<MenuLayout>
 * @desc Change how menu layouts look for each scene.
 * @default {"Title:struct":"{\"TitleScreen\":\"\",\"DocumentTitleFmt:str\":\"%1: %2 - Version %3\",\"Subtitle:str\":\"Subtitle\",\"Version:str\":\"0.00\",\"drawGameTitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = $dataSystem.gameTitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 8;\\\\nbitmap.fontSize = 72;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameSubtitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4 + 72;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = Scene_Title.subtitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 6;\\\\nbitmap.fontSize = 48;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameVersion:func\":\"\\\"const bitmap = this._gameTitleSprite.bitmap;\\\\nconst x = 0;\\\\nconst y = Graphics.height - 20;\\\\nconst width = Math.round(Graphics.width / 4);\\\\nconst height = 20;\\\\nconst c1 = ColorManager.dimColor1();\\\\nconst c2 = ColorManager.dimColor2();\\\\nconst text = 'Version ' + Scene_Title.version;\\\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 3;\\\\nbitmap.fontSize = 16;\\\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\\\\\"left\\\\\\\");\\\"\",\"CommandRect:func\":\"\\\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\\\nconst rows = this.commandWindowRows();\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ButtonFadeSpeed:num\":\"4\"}","MainMenu:struct":"{\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const width = this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight();\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ItemMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaBottom() - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SkillMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SkillTypeWindow\":\"\",\"SkillTypeBgType:num\":\"0\",\"SkillTypeRect:func\":\"\\\"const rows = 3;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this._skillTypeWindow.height;\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._statusWindow.y + this._statusWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","EquipMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = this.statusWidth();\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = this.statusWidth();\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SlotWindow\":\"\",\"SlotBgType:num\":\"0\",\"SlotRect:func\":\"\\\"const commandWindowRect = this.commandWindowRect();\\\\nconst x = this.statusWidth();\\\\nconst y = commandWindowRect.y + commandWindowRect.height;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"return this.slotWindowRect();\\\"\"}","StatusMenu:struct":"{\"ProfileWindow\":\"\",\"ProfileBgType:num\":\"0\",\"ProfileRect:func\":\"\\\"const width = Graphics.boxWidth;\\\\nconst height = this.profileHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.statusParamsWindowRect().y - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusParamsWindow\":\"\",\"StatusParamsBgType:num\":\"0\",\"StatusParamsRect:func\":\"\\\"const width = this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusEquipWindow\":\"\",\"StatusEquipBgType:num\":\"0\",\"StatusEquipRect:func\":\"\\\"const width = Graphics.boxWidth - this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = this.statusParamsWidth();\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","OptionsMenu:struct":"{\"OptionsWindow\":\"\",\"OptionsBgType:num\":\"0\",\"OptionsRect:func\":\"\\\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\\\nconst width = 400;\\\\nconst height = this.calcWindowHeight(n, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SaveMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","LoadMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","GameEnd:struct":"{\"CommandList:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"toTitle\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.toTitle;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"cancel\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.cancel;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.popScene();\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const rows = 2;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ShopMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const wx = 0;\\\\nconst wy = this.helpAreaTop();\\\\nconst ww = Graphics.boxWidth;\\\\nconst wh = this.helpAreaHeight();\\\\nreturn new Rectangle(wx, wy, ww, wh);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = this._goldWindow.x;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"DummyWindow\":\"\",\"DummyBgType:num\":\"0\",\"DummyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._commandWindow.y + this._commandWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"NumberWindow\":\"\",\"NumberBgType:num\":\"0\",\"NumberRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this._dummyWindow.y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"BuyWindow\":\"\",\"BuyBgType:num\":\"0\",\"BuyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SellWindow\":\"\",\"SellBgType:num\":\"0\",\"SellRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height =\\\\n    this.mainAreaHeight() -\\\\n    this._commandWindow.height -\\\\n    this._categoryWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","NameMenu:struct":"{\"EditWindow\":\"\",\"EditBgType:num\":\"0\",\"EditRect:func\":\"\\\"const rows = 9;\\\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\\\nconst padding = $gameSystem.windowPadding();\\\\nconst width = 600;\\\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"InputWindow\":\"\",\"InputBgType:num\":\"0\",\"InputRect:func\":\"\\\"const x = this._editWindow.x;\\\\nconst y = this._editWindow.y + this._editWindow.height;\\\\nconst rows = 9;\\\\nconst width = this._editWindow.width;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}"}
 *
 * @param Param:struct
 * @text Parameter Settings
 * @type struct<Param>
 * @desc Change up the limits of parameters and how they're calculated.
 * @default {"DisplayedParams:arraystr":"[\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","ExtDisplayedParams:arraystr":"[\"MaxHP\",\"MaxMP\",\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","BasicParameters":"","CrisisRate:num":"0.25","BasicParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet paramId = arguments[0];\\nlet base = this.paramBase(paramId);\\nlet plus = this.paramPlus(paramId);\\nlet paramRate = this.paramRate(paramId);\\nlet buffRate = this.paramBuffRate(paramId);\\nlet flatBonus = this.paramFlatBonus(paramId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\\n\\n// Determine the limits\\nconst maxValue = this.paramMax(paramId);\\nconst minValue = this.paramMin(paramId);\\n\\n// Final value\\nreturn Math.round(value.clamp(minValue, maxValue));\"","BasicParamCaps":"","BasicActorParamCaps":"","BasicActorParamMax0:str":"9999","BasicActorParamMax1:str":"9999","BasicActorParamMax2:str":"999","BasicActorParamMax3:str":"999","BasicActorParamMax4:str":"999","BasicActorParamMax5:str":"999","BasicActorParamMax6:str":"999","BasicActorParamMax7:str":"999","BasicEnemyParamCaps":"","BasicEnemyParamMax0:str":"999999","BasicEnemyParamMax1:str":"9999","BasicEnemyParamMax2:str":"999","BasicEnemyParamMax3:str":"999","BasicEnemyParamMax4:str":"999","BasicEnemyParamMax5:str":"999","BasicEnemyParamMax6:str":"999","BasicEnemyParamMax7:str":"999","XParameters":"","XParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet xparamId = arguments[0];\\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\\nlet plus = this.xparamPlus(xparamId);\\nlet paramRate = this.xparamRate(xparamId);\\nlet flatBonus = this.xparamFlatBonus(xparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","XParamVocab":"","XParamVocab0:str":"Hit","XParamVocab1:str":"Evasion","XParamVocab2:str":"Critical Rate","XParamVocab3:str":"Critical Evade","XParamVocab4:str":"Magic Evade","XParamVocab5:str":"Magic Reflect","XParamVocab6:str":"Counter","XParamVocab7:str":"HP Regen","XParamVocab8:str":"MP Regen","XParamVocab9:str":"TP Regen","SParameters":"","SParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet sparamId = arguments[0];\\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\\nlet plus = this.sparamPlus(sparamId);\\nlet paramRate = this.sparamRate(sparamId);\\nlet flatBonus = this.sparamFlatBonus(sparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","SParamVocab":"","SParamVocab0:str":"Aggro","SParamVocab1:str":"Guard","SParamVocab2:str":"Recovery","SParamVocab3:str":"Item Effect","SParamVocab4:str":"MP Cost","SParamVocab5:str":"TP Charge","SParamVocab6:str":"Physical DMG","SParamVocab7:str":"Magical DMG","SParamVocab8:str":"Floor DMG","SParamVocab9:str":"EXP Gain","Icons":"","DrawIcons:eval":"true","IconParam0:str":"84","IconParam1:str":"165","IconParam2:str":"76","IconParam3:str":"81","IconParam4:str":"101","IconParam5:str":"133","IconParam6:str":"140","IconParam7:str":"87","IconXParam0:str":"102","IconXParam1:str":"82","IconXParam2:str":"78","IconXParam3:str":"82","IconXParam4:str":"171","IconXParam5:str":"222","IconXParam6:str":"77","IconXParam7:str":"72","IconXParam8:str":"72","IconXParam9:str":"72","IconSParam0:str":"5","IconSParam1:str":"128","IconSParam2:str":"72","IconSParam3:str":"176","IconSParam4:str":"165","IconSParam5:str":"164","IconSParam6:str":"76","IconSParam7:str":"79","IconSParam8:str":"141","IconSParam9:str":"73"}
 *
 * @param CustomParam:arraystruct
 * @text Custom Parameters
 * @parent Param:struct
 * @type struct<CustomParam>[]
 * @desc Create custom parameters for your game!
 * These will appear in VisuStella MZ menus.
 * @default ["{\"ParamName:str\":\"Strength\",\"Abbreviation:str\":\"str\",\"Icon:num\":\"77\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.atk * 0.75) + (user.def * 0.25);\\\"\"}","{\"ParamName:str\":\"Dexterity\",\"Abbreviation:str\":\"dex\",\"Icon:num\":\"82\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.agi * 0.75) + (user.atk * 0.25);\\\"\"}","{\"ParamName:str\":\"Constitution\",\"Abbreviation:str\":\"con\",\"Icon:num\":\"81\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.def * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Intelligence\",\"Abbreviation:str\":\"int\",\"Icon:num\":\"79\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mat * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Wisdom\",\"Abbreviation:str\":\"wis\",\"Icon:num\":\"72\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mdf * 0.75) + (user.luk * 0.25);\\\"\"}","{\"ParamName:str\":\"Charisma\",\"Abbreviation:str\":\"cha\",\"Icon:num\":\"84\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.luk * 0.75) + (user.agi * 0.25);\\\"\"}"]
 *
 * @param ScreenResolution:struct
 * @text Screen Resolution Settings
 * @type struct<ScreenResolution>
 * @desc Alter various properties to make the game look better for varying screen resolutions.
 * @default {"Maps":"","AutoScrollLockX:eval":"true","AutoScrollLockY:eval":"true","DisplayLockX:num":"0.15625","DisplayLockY:num":"0.00000","Troops":"","RepositionActors:eval":"true","RepositionEnemies:eval":"true","RepositionEnemies130:eval":"false"}
 *
 * @param ScreenShake:struct
 * @text Screen Shake Settings
 * @type struct<ScreenShake>
 * @desc Get more screen shake effects into your game!
 * @default {"DefaultStyle:str":"random","originalJS:func":"\"// Calculation\\nthis.x += Math.round($gameScreen.shake());\"","randomJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","horzJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","vertJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\""}
 *
 * @param TitleCommandList:arraystruct
 * @text Title Command List
 * @type struct<Command>[]
 * @desc Window commands used by the title screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"newGame\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.newGame;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandNewGame();\\\"\"}","{\"Symbol:str\":\"continue\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.continue_;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandContinue();\\\"\"}","{\"Symbol:str\":\"options\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\"}","{\"Symbol:str\":\"shutdown\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return Utils.isNwjs();\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager.exit();\\\\n\\\\n// Note!\\\\n// Do NOT use this command with mobile devices or\\\\n// browser games. All it does is cause the game to\\\\n// display a blank, black canvas which the player\\\\n// is unable to do anything with. It does NOT force\\\\n// close the browser tab nor the app.\\\"\"}"]
 *
 * @param TitlePicButtons:arraystruct
 * @text Title Picture Buttons
 * @type struct<TitlePictureButton>[]
 * @desc Buttons that can be inserted into the title screen.
 * Add new title buttons here.
 * @default []
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc Change up various in-game UI aspects.
 * @default {"UIArea":"","FadeSpeed:num":"24","BoxMargin:num":"4","CommandWidth:num":"240","BottomHelp:eval":"false","RightMenus:eval":"true","ShowButtons:eval":"true","cancelShowButton:eval":"true","menuShowButton:eval":"true","pagedownShowButton:eval":"true","numberShowButton:eval":"true","ButtonHeight:num":"52","BottomButtons:eval":"false","SideButtons:eval":"true","MenuObjects":"","LvExpGauge:eval":"true","ParamArrow:str":"→","TextCodeSupport":"","TextCodeClassNames:eval":"true","TextCodeNicknames:eval":"true"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Adjust various in-game window settings.
 * @default {"WindowDefaults":"","EnableMasking:eval":"false","LineHeight:num":"36","ItemPadding:num":"8","BackOpacity:num":"192","TranslucentOpacity:num":"160","OpenSpeed:num":"32","ColSpacing:num":"8","RowSpacing:num":"4","ScrollBar":"","ShowScrollBar:eval":"true","BarThickness:num":"2","BarOffset:num":"+2","BarBodyColor:str":"0","OffBarColor:str":"7","OffBarOpacity:num":"128","SelectableItems":"","ShowItemBackground:eval":"true","ItemHeight:num":"8","DrawItemBackgroundJS:func":"\"const rect = arguments[0];\\nconst c1 = ColorManager.itemBackColor1();\\nconst c2 = ColorManager.itemBackColor2();\\nconst x = rect.x;\\nconst y = rect.y;\\nconst w = rect.width;\\nconst h = rect.height;\\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\\nthis.contentsBack.strokeRect(x, y, w, h, c1);\"","TextPopup":"","DurationPerChat:num":"1.5","MinDuration:num":"90","MaxDuration:num":"300"}
 *
 * @param jsQuickFunc:arraystruct
 * @text JS: Quick Functions
 * @type struct<jsQuickFunc>[]
 * @desc Create quick JavaScript functions available from the
 * global namespace. Use with caution and moderation!!!
 * @default ["{\"FunctionName:str\":\"Example\",\"CodeJS:json\":\"\\\"// Insert this as a function anywhere you can input code\\\\n// such as Script Calls or Conditional Branch Scripts.\\\\n\\\\n// Process Code\\\\nreturn 'Example';\\\"\"}","{\"FunctionName:str\":\"Bad  Code  Name\",\"CodeJS:json\":\"\\\"// If a function name has spaces in them, the spaces will\\\\n// be removed. \\\\\\\"Bad  Code  Name\\\\\\\" becomes \\\\\\\"BadCodeName\\\\\\\".\\\\n\\\\n// Process Code\\\\nOhNoItsBadCode()\\\\n\\\\n// If a function has bad code, a fail safe will catch the\\\\n// error and display it in the console.\\\"\"}","{\"FunctionName:str\":\"RandomNumber\",\"CodeJS:json\":\"\\\"// This generates a random number from 0 to itself.\\\\n// Example: RandomNumber(10)\\\\n\\\\n// Process Code\\\\nconst number = (arguments[0] || 0) + 1;\\\\nreturn Math.floor(number * Math.random());\\\"\"}","{\"FunctionName:str\":\"RandomBetween\",\"CodeJS:json\":\"\\\"// This generates a random number between two arguments.\\\\n// Example: RandomBetween(5, 10)\\\\n\\\\n// Process Code\\\\nlet min = Math.min(arguments[0] || 0, arguments[1] || 0);\\\\nlet max = Math.max(arguments[0] || 0, arguments[1] || 0);\\\\nreturn Math.floor(Math.random() * (max - min + 1) + min);\\\"\"}","{\"FunctionName:str\":\"RandomFrom\",\"CodeJS:json\":\"\\\"// Selects a number from the list of inserted numbers.\\\\n// Example: RandomFrom(5, 10, 15, 20)\\\\n\\\\n// Process Code\\\\nreturn arguments[Math.randomInt(arguments.length)];\\\"\"}"]
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
 * Quality of Life Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~QoLSettings:
 *
 * @param PlayTest
 * @text Play Test
 *
 * @param NewGameBoot:eval
 * @text New Game on Boot
 * @parent PlayTest
 * @type boolean
 * @on Start New Game
 * @off Keep Title Screen
 * @desc Automatically start a new game on Play Test?
 * Only enabled during Play Test.
 * @default false
 *
 * @param ForceNoPlayTest:eval
 * @text No Play Test Mode
 * @parent PlayTest
 * @type boolean
 * @on Cancel Play Test
 * @off Keep Play Test
 * @desc Force the game to be out of Play Test mode when play testing.
 * @default false
 *
 * @param OpenConsole:eval
 * @text Open Console on Boot
 * @parent PlayTest
 * @type boolean
 * @on Open
 * @off Don't Open
 * @desc Open the Debug Console upon booting up your game?
 * Only enabled during Play Test.
 * @default true
 *
 * @param F6key:eval
 * @text F6: Toggle Sound
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F6 Key Function: Turn on all sound to 100% or to 0%,
 * toggling between the two.
 * @default true
 *
 * @param F7key:eval
 * @text F7: Toggle Fast Mode
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F7 Key Function: Toggle fast mode.
 * @default true
 *
 * @param CtrlQuickLoad:eval
 * @text CTRL + n: Quick Load
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc CTRL + a number from 1 to 9 will yield a quick load of
 * that safe file. Does not count auto saves.
 * @default true
 *
 * @param NewGameCommonEvent:num
 * @text NewGame > CommonEvent
 * @parent PlayTest
 * @type common_event
 * @desc Runs a common event each time a new game during play test
 * session is started.
 * @default 0
 *
 * @param BattleTest
 * @text Battle Test
 *
 * @param BTestItems:eval
 * @text Add Item Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database item?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestWeapons:eval
 * @text Add Weapon Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database weapon?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestArmors:eval
 * @text Add Armor Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database armor?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestAddedQuantity:num
 * @text Added Quantity
 * @parent BattleTest
 * @type number
 * @min 1
 * @desc Determines how many items are added during a battle test instead of the maximum amount.
 * @default 90
 *
 * @param ShiftR_Toggle:eval
 * @text Shift+R: Recover All
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + R will refill the whole party's HP and MP and status.
 * @default true
 *
 * @param ShiftT_Toggle:eval
 * @text Shift+T: Full TP
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + T will refill the whole party's TP.
 * @default true
 *
 * @param DigitGrouping
 * @text Digit Grouping
 *
 * @param DigitGroupingStandardText:eval
 * @text Standard Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * standard text inside windows?
 * @default true
 *
 * @param DigitGroupingExText:eval
 * @text Ex Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * ex text, written through drawTextEx (like messages)?
 * @default true
 *
 * @param DigitGroupingDamageSprites:eval
 * @text Damage Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * in-battle damage sprites?
 * @default true
 *
 * @param DigitGroupingGaugeSprites:eval
 * @text Gauge Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * visible gauge sprites such as HP, MP, and TP gauges?
 * @default true
 *
 * @param DigitGroupingLocale:str
 * @text Country/Locale
 * @parent DigitGrouping
 * @type combo
 * @option ar-SA
 * @option bn-BD
 * @option bn-IN
 * @option cs-CZ
 * @option da-DK
 * @option de-AT
 * @option de-CH
 * @option de-DE
 * @option el-GR
 * @option en-AU
 * @option en-CA
 * @option en-GB
 * @option en-IE
 * @option en-IN
 * @option en-NZ
 * @option en-US
 * @option en-ZA
 * @option es-AR
 * @option es-CL
 * @option es-CO
 * @option es-ES
 * @option es-MX
 * @option es-US
 * @option fi-FI
 * @option fr-BE
 * @option fr-CA
 * @option fr-CH
 * @option fr-FR
 * @option he-IL
 * @option hi-IN
 * @option hu-HU
 * @option id-ID
 * @option it-CH
 * @option it-IT
 * @option jp-JP
 * @option ko-KR
 * @option nl-BE
 * @option nl-NL
 * @option no-NO
 * @option pl-PL
 * @option pt-BR
 * @option pt-PT
 * @option ro-RO
 * @option ru-RU
 * @option sk-SK
 * @option sv-SE
 * @option ta-IN
 * @option ta-LK
 * @option th-TH
 * @option tr-TR
 * @option zh-CN
 * @option zh-HK
 * @option zh-TW
 * @desc Base the digit grouping on which country/locale?
 * @default en-US
 *
 * @param PlayerBenefit
 * @text Player Benefit
 *
 * @param EncounterRateMinimum:num
 * @text Encounter Rate Min
 * @parent PlayerBenefit
 * @min 1
 * @desc Minimum number of steps the player can take without any random encounters.
 * @default 10
 *
 * @param EscapeAlways:eval
 * @text Escape Always
 * @parent PlayerBenefit
 * @type boolean
 * @on Always
 * @off Default
 * @desc If the player wants to escape a battle, let them escape the battle with 100% chance.
 * @default true
 *
 * @param ImprovedAccuracySystem:eval
 * @text Accuracy Formula
 * @parent PlayerBenefit
 * @type boolean
 * @on Improve
 * @off Default
 * @desc Accuracy formula calculation change to
 * Skill Hit% * (User HIT - Target EVA) for better results.
 * @default true
 *
 * @param AccuracyBoost:eval
 * @text Accuracy Boost
 * @parent PlayerBenefit
 * @type boolean
 * @on Boost
 * @off Default
 * @desc Boost HIT and EVA rates in favor of the player.
 * @default true
 *
 * @param LevelUpFullHp:eval
 * @text Level Up -> Full HP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full HP when an actor levels up.
 * @default true
 *
 * @param LevelUpFullMp:eval
 * @text Level Up -> Full MP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full MP when an actor levels up.
 * @default true
 *
 * @param Pictures
 * @text Picture-Related
 *
 * @param AntiZoomPictures:eval
 * @text Anti-Zoom Pictures
 * @parent Pictures
 * @type boolean
 * @on Anti-Zoom
 * @off Normal
 * @desc If on, prevents pictures from being affected by zoom.
 * @default true
 * 
 * @param PictureContainers
 * @text Picture Containers
 * @parent Pictures
 *
 * @param DetachBattlePictureContainer:eval
 * @text Detach in Battle
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the battle scene.
 * @default false
 *
 * @param DetachMapPictureContainer:eval
 * @text Detach in Map
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the map scene.
 * @default false
 *
 * @param Misc
 * @text Misc
 *
 * @param AnimationMirrorOffset:eval
 * @text Ani: Mirror Offset
 * @parent Misc
 * @type boolean
 * @on Mirror
 * @off Don't Mirror
 * @desc When animations are mirrored,
 * mirror their Offset X values, too.
 * @default false
 *
 * @param AutoStretch:str
 * @text Auto-Stretch
 * @parent Misc
 * @type select
 * @option Default
 * @value default
 * @option Stretch
 * @value stretch
 * @option Normal
 * @value normal
 * @desc Automatically stretch the game to fit the size of the client?
 * @default default
 *
 * @param FontShadows:eval
 * @text Font Shadows
 * @parent Misc
 * @type boolean
 * @on Shadows
 * @off Outlines
 * @desc If on, text uses shadows instead of outlines.
 * @default false
 *
 * @param FontSmoothing:eval
 * @text Font Smoothing
 * @parent Misc
 * @type boolean
 * @on Smooth
 * @off None
 * @desc If on, smoothes fonts shown in-game.
 * @default true
 *
 * @param FontWidthFix:eval
 * @text Font Width Fix
 * @parent Misc
 * @type boolean
 * @on Fix
 * @off Default
 * @desc Fixes the font width issue with instant display
 * non-monospaced fonts in the Message Window.
 * @default true
 *
 * @param KeyItemProtect:eval
 * @text Key Item Protection
 * @parent Misc
 * @type boolean
 * @on Unsellable
 * @off Sellable
 * @desc If on, prevents Key Items from being able to be sold and from being able to be consumed.
 * @default true
 *
 * @param MapNameTextCode:eval
 * @text Map Name Text Code
 * @parent Misc
 * @type boolean
 * @on Text Codes
 * @off Raw Text
 * @desc If on, map names will use text codes.
 * If off, only the raw map name will be used.
 * @default true
 *
 * @param ModernControls:eval
 * @text Modern Controls
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Default
 * @desc If on, allows usage of the Home/End buttons as well as other modern configs. Affects other VisuStella plugins.
 * @default true
 *
 * @param MvAnimationRate:num
 * @text MV Animation Rate
 * @parent Misc
 * @min 1
 * @max 10
 * @desc Adjusts the rate at which MV animations play.
 * Default: 4. Lower for faster. Higher for slower.
 * @default 4
 *
 * @param NewGameCommonEventAll:num
 * @text NewGame > CommonEvent
 * @parent Misc
 * @type common_event
 * @desc Runs a common event each time a new game during any session is started.
 * @default 0
 *
 * @param NoTileShadows:eval
 * @text No Tile Shadows
 * @parent Misc
 * @type boolean
 * @on Disable Tile Shadows
 * @off Default
 * @desc Removes tile shadows from being displayed in-game.
 * @default false
 *
 * @param PixelateImageRendering:eval
 * @text Pixel Image Rendering
 * @parent Misc
 * @type boolean
 * @on Pixelate
 * @off Smooth
 * @desc If on, pixelates the image rendering (for pixel games).
 * @default false
 *
 * @param RequireFocus:eval
 * @text Require Focus?
 * @parent Misc
 * @type boolean
 * @on Require
 * @off No Requirement
 * @desc Requires the game to be focused? If the game isn't
 * focused, it will pause if it's not the active window.
 * @default true
 *
 * @param ShortcutScripts:eval
 * @text Shortcut Scripts
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables shortcut-based scripts.
 * View the helpfile for more information.
 * @default true
 *
 * @param SmartEventCollisionPriority:eval
 * @text Smart Event Collision
 * @parent Misc
 * @type boolean
 * @on Only Same Level
 * @off Default
 * @desc Makes events only able to collide with one another if they're 'Same as characters' priority.
 * @default true
 *
 * @param SubfolderParse:eval
 * @text Subfolder Name Purge
 * @parent Misc
 * @type boolean
 * @on Purge Subfolders Names
 * @off Don't Purge Name
 * @desc Purge subfolder name from Plugin Parameters when reading
 * data to let Plugin Commands work properly.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param BasicColors
 * @text Basic Colors
 *
 * @param ColorNormal:str
 * @text Normal
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorSystem:str
 * @text System
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param ColorCrisis:str
 * @text Crisis
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param ColorDeath:str
 * @text Death
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param ColorGaugeBack:str
 * @text Gauge Back
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ColorHPGauge1:str
 * @text HP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 20
 *
 * @param ColorHPGauge2:str
 * @text HP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 21
 *
 * @param ColorMPGauge1:str
 * @text MP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param ColorMPGauge2:str
 * @text MP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorMPCost:str
 * @text MP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorPowerUp:str
 * @text Power Up
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorPowerDown:str
 * @text Power Down
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 25
 *
 * @param ColorCTGauge1:str
 * @text CT Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param ColorCTGauge2:str
 * @text CT Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param ColorTPGauge1:str
 * @text TP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 28
 *
 * @param ColorTPGauge2:str
 * @text TP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorTPCost:str
 * @text TP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorPending:str
 * @text Pending Color
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #2a847d
 *
 * @param ColorExpGauge1:str
 * @text EXP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 30
 *
 * @param ColorExpGauge2:str
 * @text EXP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 31
 *
 * @param ColorMaxLvGauge1:str
 * @text MaxLv Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param ColorMaxLvGauge2:str
 * @text MaxLv Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param AlphaColors
 * @text Alpha Colors
 *
 * @param OutlineColor:str
 * @text Window Font Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param OutlineColorGauge:str
 * @text Gauge Number Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param DimColor1:str
 * @text Dim Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param DimColor2:str
 * @text Dim Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0)
 *
 * @param ItemBackColor1:str
 * @text Item Back Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(32, 32, 32, 0.5)
 *
 * @param ItemBackColor2:str
 * @text Item Back Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param ConditionalColors
 * @text Conditional Colors
 *
 * @param ActorHPColor:func
 * @text JS: Actor HP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what HP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If the actor is dead, return death color.\n} else if (actor.isDead()) {\n    return this.deathColor();\n\n// If the actor is dying, return crisis color.\n} else if (actor.isDying()) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorMPColor:func
 * @text JS: Actor MP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what MP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If MP rate is below 25%, return crisis color.\n} else if (actor.mpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorTPColor:func
 * @text JS: Actor TP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what TP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If TP rate is below 25%, return crisis color.\n} else if (actor.tpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ParamChange:func
 * @text JS: Parameter Change
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining whatcolor to use for parameter changes.
 * @default "// Set the variables used in this function.\nlet change = arguments[0];\n\n// If a positive change, use power up color.\nif (change > 0) {\n    return this.powerUpColor();\n\n// If a negative change, use power down color.\n} else if (change < 0) {\n    return this.powerDownColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param DamageColor:func
 * @text JS: Damage Colors
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what color to use for damage types.
 * @default "// Set the variables used in this function.\nlet colorType = arguments[0];\n\n// Check the value of the color type\n// and return an appropriate color.\nswitch (colorType) {\n\n    case 0: // HP damage\n        return \"#ffffff\";\n\n    case 1: // HP recover\n        return \"#b9ffb5\";\n\n    case 2: // MP damage\n        return \"#bb88bb\";\n\n    case 3: // MP recover\n        return \"#80b0ff\";\n\n    default:\n        return \"#808080\";\n}"
 */
/* ----------------------------------------------------------------------------
 * Gold Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gold:
 *
 * @param GoldMax:num
 * @text Gold Max
 * @type num
 * @min 1
 * @desc Maximum amount of Gold the party can hold.
 * Default 99999999
 * @default 99999999
 *
 * @param GoldFontSize:num
 * @text Gold Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside Gold Windows.
 * Default: 26
 * @default 24
 *
 * @param GoldIcon:num
 * @text Gold Icon
 * @desc Icon used to represent Gold.
 * Use 0 for no icon.
 * @default 314
 *
 * @param GoldOverlap:str
 * @text Gold Overlap
 * @desc Text used too much Gold to fit in the window.
 * @default A Lot
 *
 * @param ItemStyle:eval
 * @text Item Style
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Draw gold in the item style?
 * ie: Icon, Label, Value
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Image Loading Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ImgLoad:
 *
 * @param animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default ["Balloon","IconSet"]
 *
 * @param tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Keyboard Input Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~KeyboardInput:
 *
 * @param Controls
 *
 * @param WASD:eval
 * @text WASD Movement
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables WASD movement for your game project.
 * Moves the W page down button to E.
 * @default false
 *
 * @param DashToggleR:eval
 * @text R Button: Dash Toggle
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables R button as an Always Dash option toggle.
 * @default false
 *
 * @param NameInput
 * @text Name Input
 *
 * @param EnableNameInput:eval
 * @text Enable?
 * @parent NameInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for name entry.
 * Only tested with English keyboards.
 * @default true
 * 
 * @param DefaultMode:str
 * @text Default Mode
 * @parent NameInput
 * @type select
 * @option Default - Uses Arrow Keys to select letters.
 * @value default
 * @option Keyboard - Uses Keyboard to type in letters.
 * @value keyboard
 * @desc Select default mode when entering the scene.
 * @default keyboard
 *
 * @param QwertyLayout:eval
 * @text QWERTY Layout
 * @parent NameInput
 * @type boolean
 * @on QWERTY Layout
 * @off ABCDEF Layout
 * @desc Uses the QWERTY layout for manual entry.
 * @default true
 *
 * @param NameInputMessage:eval
 * @text Keyboard Message
 * @parent NameInput
 * @type note
 * @desc The message displayed when allowing keyboard entry.
 * You may use text codes here.
 * @default "Type in this character's name.\nPress \\c[5]ENTER\\c[0] when you're done.\n\n-or-\n\nPress \\c[5]arrow keys\\c[0]/\\c[5]TAB\\c[0] to switch\nto manual character entry.\n\nPress \\c[5]ESC\\c[0]/\\c[5]TAB\\c[0] to use to keyboard."
 * 
 * @param BannedWords:arraystr
 * @text Banned Words
 * @parent NameInput
 * @type string[]
 * @desc Players cannot use these words for names.
 * These include words inside the names.
 * @default []
 *
 * @param NumberInput
 * @text Number Input
 *
 * @param EnableNumberInput:eval
 * @text Enable?
 * @parent NumberInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for number entry.
 * Only tested with English keyboards.
 * @default true
 *
 * @param ButtonAssist
 * @text Button Assist
 * 
 * @param Finish:str
 * @text Finish Entry
 * @parent ButtonAssist
 * @desc Text used to describe finish entry.
 * @default Finish
 * 
 * @param PageChange:str
 * @text Page Change
 * @parent ButtonAssist
 * @desc Text used to describe character page changing.
 * @default Page
 * 
 * @param Keyboard:str
 * @text Switch To Keyboard
 * @parent ButtonAssist
 * @desc Text used to describe the keyboard switch.
 * @default Keyboard
 * 
 * @param Manual:str
 * @text Switch To Manual
 * @parent ButtonAssist
 * @desc Text used to describe the manual entry switch.
 * @default Manual
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuBg:
 * 
 * @param BlurStrength:num
 * @text Blur Strength
 * @desc Strength used for menu background snapshots.
 * Default: 8. Higher is stronger. Lower is weaker.
 * @default 8
 *
 * @param Scene_Menu:struct
 * @text Scene_Menu
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Item:struct
 * @text Scene_Item
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Skill:struct
 * @text Scene_Skill
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Equip:struct
 * @text Scene_Equip
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Status:struct
 * @text Scene_Status
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Options:struct
 * @text Scene_Options
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Save:struct
 * @text Scene_Save
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Load:struct
 * @text Scene_Load
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_GameEnd:struct
 * @text Scene_GameEnd
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"128","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Shop:struct
 * @text Scene_Shop
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Name:struct
 * @text Scene_Name
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Unlisted:struct
 * @text Scene_Unlisted
 * @type struct<BgSettings>
 * @desc The individual background settings for any scenes that aren't listed here.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Button Assist Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ButtonAssist:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Enable the Menu Button Assist Window.
 * @default true
 *
 * @param Location:str
 * @text Location
 * @parent General
 * @type select
 * @option Top of Screen
 * @value top
 * @option Bottom of Screen
 * @value bottom
 * @desc Determine the location of the Button Assist Window.
 * Requires Plugin Parameters => UI => Side Buttons ON.
 * @default bottom
 *
 * @param BgType:num
 * @text Background Type
 * @parent General
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SplitEscape:eval
 * @text Split "Escape"
 * @parent General
 * @type boolean
 * @on Split
 * @off Don't
 * @desc "Split" makes separate instances of "Cancel" and "Menu".
 * Requires custom Input.keyMapper with "cancel" and "menu".
 * @default false
 *
 * @param Text
 *
 * @param TextFmt:str
 * @text Text Format
 * @parent Text
 * @desc Format on how the buttons are displayed.
 * Text codes allowed. %1 - Key, %2 - Text
 * @default %1:%2
 *
 * @param MultiKeyFmt:str
 * @text Multi-Key Format
 * @parent Text
 * @desc Format for actions with multiple keys.
 * Text codes allowed. %1 - Key 1, %2 - Key 2
 * @default %1/%2
 *
 * @param OkText:str
 * @text OK Text
 * @parent Text
 * @desc Default text used to display OK Key Action.
 * Text codes allowed.
 * @default Select
 *
 * @param CancelText:str
 * @text Cancel Text
 * @parent Text
 * @desc Default text used to display Cancel Key Action.
 * Text codes allowed.
 * @default Back
 *
 * @param SwitchActorText:str
 * @text Switch Actor Text
 * @parent Text
 * @desc Default text used to display Switch Actor Action.
 * Text codes allowed.
 * @default Switch Ally
 *
 * @param Keys
 *
 * @param KeyUnlisted:str
 * @text Key: Unlisted Format
 * @parent Keys
 * @desc If a key is not listed below, use this format.
 * Text codes allowed. %1 - Key
 * @default \}❪%1❫\{
 *
 * @param KeyUP:str
 * @text Key: Up
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default ^
 *
 * @param KeyDOWN:str
 * @text Key: Down
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default v
 *
 * @param KeyLEFT:str
 * @text Key: Left
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default <<
 *
 * @param KeyRIGHT:str
 * @text Key: Right
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default >>
 *
 * @param KeySHIFT:str
 * @text Key: Shift
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪SHIFT❫\{
 *
 * @param KeyTAB:str
 * @text Key: Tab
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪TAB❫\{
 *
 * @param KeyA:str
 * @text Key: A
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default A
 *
 * @param KeyB:str
 * @text Key: B
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default B
 *
 * @param KeyC:str
 * @text Key: C
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default C
 *
 * @param KeyD:str
 * @text Key: D
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default D
 *
 * @param KeyE:str
 * @text Key: E
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default E
 *
 * @param KeyF:str
 * @text Key: F
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default F
 *
 * @param KeyG:str
 * @text Key: G
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default G
 *
 * @param KeyH:str
 * @text Key: H
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default H
 *
 * @param KeyI:str
 * @text Key: I
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default I
 *
 * @param KeyJ:str
 * @text Key: J
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default J
 *
 * @param KeyK:str
 * @text Key: K
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default K
 *
 * @param KeyL:str
 * @text Key: L
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default L
 *
 * @param KeyM:str
 * @text Key: M
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default M
 *
 * @param KeyN:str
 * @text Key: N
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default N
 *
 * @param KeyO:str
 * @text Key: O
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default O
 *
 * @param KeyP:str
 * @text Key: P
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default P
 *
 * @param KeyQ:str
 * @text Key: Q
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Q
 *
 * @param KeyR:str
 * @text Key: R
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default R
 *
 * @param KeyS:str
 * @text Key: S
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default S
 *
 * @param KeyT:str
 * @text Key: T
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default T
 *
 * @param KeyU:str
 * @text Key: U
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default U
 *
 * @param KeyV:str
 * @text Key: V
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default V
 *
 * @param KeyW:str
 * @text Key: W
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default W
 *
 * @param KeyX:str
 * @text Key: X
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default X
 *
 * @param KeyY:str
 * @text Key: Y
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Y
 *
 * @param KeyZ:str
 * @text Key: Z
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Z
 *
 */
/* ----------------------------------------------------------------------------
 * Controller Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ControllerButtons:
 *
 * @param ID
 * @text ID Information
 *
 * @param Name:str
 * @text Controller ID Name
 * @parent ID
 * @desc Exact string used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 *
 * @param Match:str
 * @text Similarity Match
 * @parent ID
 * @desc Similar text used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 * 
 * @param Directions
 *
 * @param up:str
 * @text Up
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param left:str
 * @text Left
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param right:str
 * @text Right
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param down:str
 * @text Down
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 * 
 * @param Actions
 *
 * @param ok:str
 * @text OK
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param cancel:str
 * @text Cancel
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param menu:str
 * @text Menu
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param shift:str
 * @text Shift
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pageup:str
 * @text Page Up
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pagedown:str
 * @text Page Down
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Layout Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuLayout:
 *
 * @param Title:struct
 * @text Scene_Title
 * @parent SceneSettings
 * @type struct<Title>
 * @desc Various options on adjusting the Title Scene.
 * @default {"TitleScreen":"","DocumentTitleFmt:str":"%1: %2 - Version %3","Subtitle:str":"Subtitle","Version:str":"0.00","drawGameTitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = $dataSystem.gameTitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 8;\\nbitmap.fontSize = 72;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameSubtitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4 + 72;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = Scene_Title.subtitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 6;\\nbitmap.fontSize = 48;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameVersion:func":"\"const bitmap = this._gameTitleSprite.bitmap;\\nconst x = 0;\\nconst y = Graphics.height - 20;\\nconst width = Math.round(Graphics.width / 4);\\nconst height = 20;\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\nconst text = 'Version ' + Scene_Title.version;\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 3;\\nbitmap.fontSize = 16;\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\"left\\\");\"","CommandRect:func":"\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\nconst rows = this.commandWindowRows();\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\nreturn new Rectangle(x, y, width, height);\"","ButtonFadeSpeed:num":"4"}
 *
 * @param MainMenu:struct
 * @text Scene_Menu
 * @parent SceneSettings
 * @type struct<MainMenu>
 * @desc Various options on adjusting the Main Menu Scene.
 * @default {"CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const width = this.mainCommandWidth();\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this.mainAreaHeight();\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ItemMenu:struct
 * @text Scene_Item
 * @parent SceneSettings
 * @type struct<ItemMenu>
 * @desc Various options on adjusting the Item Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaBottom() - y;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SkillMenu:struct
 * @text Scene_Skill
 * @parent SceneSettings
 * @type struct<SkillMenu>
 * @desc Various options on adjusting the Skill Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","SkillTypeWindow":"","SkillTypeBgType:num":"0","SkillTypeRect:func":"\"const rows = 3;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this._skillTypeWindow.height;\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._statusWindow.y + this._statusWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param EquipMenu:struct
 * @text Scene_Equip
 * @parent SceneSettings
 * @type struct<EquipMenu>
 * @desc Various options on adjusting the Equip Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = this.statusWidth();\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = this.statusWidth();\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SlotWindow":"","SlotBgType:num":"0","SlotRect:func":"\"const commandWindowRect = this.commandWindowRect();\\nconst x = this.statusWidth();\\nconst y = commandWindowRect.y + commandWindowRect.height;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"return this.slotWindowRect();\""}
 *
 * @param StatusMenu:struct
 * @text Scene_Status
 * @parent SceneSettings
 * @type struct<StatusMenu>
 * @desc Various options on adjusting the Status Menu Scene.
 * @default {"ProfileWindow":"","ProfileBgType:num":"0","ProfileRect:func":"\"const width = Graphics.boxWidth;\\nconst height = this.profileHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.statusParamsWindowRect().y - y;\\nreturn new Rectangle(x, y, width, height);\"","StatusParamsWindow":"","StatusParamsBgType:num":"0","StatusParamsRect:func":"\"const width = this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusEquipWindow":"","StatusEquipBgType:num":"0","StatusEquipRect:func":"\"const width = Graphics.boxWidth - this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = this.statusParamsWidth();\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param OptionsMenu:struct
 * @text Scene_Options
 * @parent SceneSettings
 * @type struct<OptionsMenu>
 * @desc Various options on adjusting the Options Menu Scene.
 * @default {"OptionsWindow":"","OptionsBgType:num":"0","OptionsRect:func":"\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\nconst width = 400;\\nconst height = this.calcWindowHeight(n, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SaveMenu:struct
 * @text Scene_Save
 * @parent SceneSettings
 * @type struct<SaveMenu>
 * @desc Various options on adjusting the Save Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param LoadMenu:struct
 * @text Scene_Load
 * @parent SceneSettings
 * @type struct<LoadMenu>
 * @desc Various options on adjusting the Load Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param GameEnd:struct
 * @text Scene_GameEnd
 * @parent SceneSettings
 * @type struct<GameEnd>
 * @desc Various options on adjusting the Game End Scene.
 * @default {"CommandList:arraystruct":"[\"{\\\"Symbol:str\\\":\\\"toTitle\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.toTitle;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"cancel\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.cancel;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.popScene();\\\\\\\"\\\"}\"]","CommandBgType:num":"0","CommandRect:func":"\"const rows = 2;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ShopMenu:struct
 * @text Scene_Shop
 * @parent SceneSettings
 * @type struct<ShopMenu>
 * @desc Various options on adjusting the Shop Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const wx = 0;\\nconst wy = this.helpAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.helpAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = this._goldWindow.x;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","DummyWindow":"","DummyBgType:num":"0","DummyRect:func":"\"const x = 0;\\nconst y = this._commandWindow.y + this._commandWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","NumberWindow":"","NumberBgType:num":"0","NumberRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._dummyWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._dummyWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","BuyWindow":"","BuyBgType:num":"0","BuyRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SellWindow":"","SellBgType:num":"0","SellRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height =\\n    this.mainAreaHeight() -\\n    this._commandWindow.height -\\n    this._categoryWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param NameMenu:struct
 * @text Scene_Name
 * @parent SceneSettings
 * @type struct<NameMenu>
 * @desc Various options on adjusting the Actor Rename Scene.
 * @default {"EditWindow":"","EditBgType:num":"0","EditRect:func":"\"const rows = 9;\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\nconst padding = $gameSystem.windowPadding();\\nconst width = 600;\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","InputWindow":"","InputBgType:num":"0","InputRect:func":"\"const x = this._editWindow.x;\\nconst y = this._editWindow.y + this._editWindow.height;\\nconst rows = 9;\\nconst width = this._editWindow.width;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\""}
 *
 */
/* ----------------------------------------------------------------------------
 * Main Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.mainCommandWidth();\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this.mainAreaHeight();\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaBottom() - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param SkillTypeBgType:num
 * @text Background Type
 * @parent SkillTypeWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SkillTypeRect:func
 * @text JS: X, Y, W, H
 * @parent SkillTypeWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 3;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this._skillTypeWindow.height;\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._statusWindow.y + this._statusWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._statusWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = this.statusWidth();\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this.statusWidth();\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SlotWindow
 * @text Slot Window
 *
 * @param SlotBgType:num
 * @text Background Type
 * @parent SlotWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SlotRect:func
 * @text JS: X, Y, W, H
 * @parent SlotWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const commandWindowRect = this.commandWindowRect();\nconst x = this.statusWidth();\nconst y = commandWindowRect.y + commandWindowRect.height;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.mainAreaHeight() - commandWindowRect.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "return this.slotWindowRect();"
 *
 */
/* ----------------------------------------------------------------------------
 * Status Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusMenu:
 *
 * @param ProfileWindow
 * @text Profile Window
 *
 * @param ProfileBgType:num
 * @text Background Type
 * @parent ProfileWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ProfileRect:func
 * @text JS: X, Y, W, H
 * @parent ProfileWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth;\nconst height = this.profileHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.statusParamsWindowRect().y - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusParamsWindow
 * @text Parameters Window
 *
 * @param StatusParamsBgType:num
 * @text Background Type
 * @parent StatusParamsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusParamsRect:func
 * @text JS: X, Y, W, H
 * @parent StatusParamsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusEquipWindow
 * @text Equipment Window
 *
 * @param StatusEquipBgType:num
 * @text Background Type
 * @parent StatusEquipWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusEquipRect:func
 * @text JS: X, Y, W, H
 * @parent StatusEquipWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = this.statusParamsWidth();\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OptionsMenu:
 *
 * @param OptionsWindow
 * @text Options Window
 *
 * @param OptionsBgType:num
 * @text Background Type
 * @parent OptionsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param OptionsRect:func
 * @text JS: X, Y, W, H
 * @parent OptionsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\nconst width = 400;\nconst height = this.calcWindowHeight(n, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Save Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Load Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LoadMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Game End Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameEnd:
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @type struct<Command>[]
 * @desc Window commands used by the Game End screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"toTitle\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.toTitle;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandToTitle();\\\"\"}","{\"Symbol:str\":\"cancel\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.cancel;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.popScene();\\\"\"}"]
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandList:arraystruct
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandList:arraystruct
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 2;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.helpAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.helpAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = this._goldWindow.x;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param DummyWindow
 * @text Dummy Window
 *
 * @param DummyBgType:num
 * @text Background Type
 * @parent DummyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param DummyRect:func
 * @text JS: X, Y, W, H
 * @parent DummyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._commandWindow.y + this._commandWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._commandWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param NumberWindow
 * @text Number Window
 *
 * @param NumberBgType:num
 * @text Background Type
 * @parent NumberWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param NumberRect:func
 * @text JS: X, Y, W, H
 * @parent NumberWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusWidth();\nconst height = this._dummyWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._dummyWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param BuyWindow
 * @text Buy Window
 *
 * @param BuyBgType:num
 * @text Background Type
 * @parent BuyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BuyRect:func
 * @text JS: X, Y, W, H
 * @parent BuyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SellWindow
 * @text Sell Window
 *
 * @param SellBgType:num
 * @text Background Type
 * @parent SellWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SellRect:func
 * @text JS: X, Y, W, H
 * @parent SellWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height =\n    this.mainAreaHeight() -\n    this._commandWindow.height -\n    this._categoryWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Name Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NameMenu:
 *
 * @param EditWindow
 * @text Edit Window
 *
 * @param EditBgType:num
 * @text Background Type
 * @parent EditWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param EditRect:func
 * @text JS: X, Y, W, H
 * @parent EditWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 9;\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\nconst padding = $gameSystem.windowPadding();\nconst width = 600;\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param InputWindow
 * @text Input Window
 *
 * @param InputBgType:num
 * @text Background Type
 * @parent InputWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param InputRect:func
 * @text JS: X, Y, W, H
 * @parent InputWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this._editWindow.x;\nconst y = this._editWindow.y + this._editWindow.height;\nconst rows = 9;\nconst width = this._editWindow.width;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Title Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Title:
 *
 * @param TitleScreen
 * @text Title Screen
 *
 * @param DocumentTitleFmt:str
 * @text Document Title Format
 * @parent TitleScreen
 * @desc Format to display text in document title.
 * %1 - Main Title, %2 - Subtitle, %3 - Version
 * @default %1: %2 - Version %3
 *
 * @param Subtitle:str
 * @text Subtitle
 * @parent TitleScreen
 * @desc Subtitle to be displayed under the title name.
 * @default Subtitle
 *
 * @param Version:str
 * @text Version
 * @parent TitleScreen
 * @desc Version to be display in the title screen corner.
 * @default 0.00
 *
 * @param drawGameTitle:func
 * @text JS: Draw Title
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game title.
 * @default "const x = 20;\nconst y = Graphics.height / 4;\nconst maxWidth = Graphics.width - x * 2;\nconst text = $dataSystem.gameTitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 8;\nbitmap.fontSize = 72;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameSubtitle:func
 * @text JS: Draw Subtitle
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game subtitle.
 * @default "const x = 20;\nconst y = Graphics.height / 4 + 72;\nconst maxWidth = Graphics.width - x * 2;\nconst text = Scene_Title.subtitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 6;\nbitmap.fontSize = 48;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameVersion:func
 * @text JS: Draw Version
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game version.
 * @default "const bitmap = this._gameTitleSprite.bitmap;\nconst x = 0;\nconst y = Graphics.height - 20;\nconst width = Math.round(Graphics.width / 4);\nconst height = 20;\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\nconst text = 'Version ' + Scene_Title.version;\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 3;\nbitmap.fontSize = 16;\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \"left\");"
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent TitleScreen
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const offsetX = $dataSystem.titleCommandWindow.offsetX;\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\nconst rows = this.commandWindowRows();\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\nconst y = Graphics.boxHeight - height - 96 + offsetY;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonFadeSpeed:num
 * @text Button Fade Speed
 * @parent TitleScreen
 * @type number
 * @min 1
 * @max 255
 * @desc Speed at which the buttons fade in at (1-255).
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Param:
 *
 * @param DisplayedParams:arraystr
 * @text Displayed Parameters
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc A list of the parameters that will be displayed in-game.
 * @default ["ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param ExtDisplayedParams:arraystr
 * @text Extended Parameters
 * @parent DisplayedParams:arraystr
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc The list shown in extended scenes (for other VisuStella plugins).
 * @default ["MaxHP","MaxMP","ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param BasicParameters
 * @text Basic Parameters
 *
 * @param ShowActorLevel:eval
 * @text Show Actor Level?
 * @parent BasicParameters
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor level when displaying actors?
 * Affects for most windows in-game.
 * @default true
 *
 * @param ConvertToBase:eval
 * @text Convert JS To Base?
 * @parent BasicParameters
 * @type boolean
 * @on Convert
 * @off Don't
 * @desc Automatically convert <JS param Plus/Rate/Flat: code>
 * to use base parameters to prevent infinite loops.
 * @default true
 *
 * @param CrisisRate:num
 * @text HP Crisis Rate
 * @parent BasicParameters
 * @desc HP Ratio at which a battler can be considered in crisis mode.
 * @default 0.25
 *
 * @param BasicParameterFormula:func
 * @text JS: Formula
 * @parent BasicParameters
 * @type note
 * @desc Formula used to determine the total value all 8 basic parameters: MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 * @default "// Determine the variables used in this calculation.\nlet paramId = arguments[0];\nlet base = this.paramBase(paramId);\nlet plus = this.paramPlus(paramId);\nlet paramRate = this.paramRate(paramId);\nlet buffRate = this.paramBuffRate(paramId);\nlet flatBonus = this.paramFlatBonus(paramId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\n\n// Determine the limits\nconst maxValue = this.paramMax(paramId);\nconst minValue = this.paramMin(paramId);\n\n// Final value\nreturn Math.round(value.clamp(minValue, maxValue));"
 *
 * @param BasicParamCaps
 * @text Parameter Caps
 * @parent BasicParameters
 *
 * @param BasicActorParamCaps
 * @text Actors
 * @parent BasicParamCaps
 *
 * @param BasicActorParamMax0:str
 * @text MaxHP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax1:str
 * @text MaxMP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax2:str
 * @text ATK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax3:str
 * @text DEF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax4:str
 * @text MAT Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax5:str
 * @text MDF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax6:str
 * @text AGI Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax7:str
 * @text LUK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamCaps
 * @text Enemies
 * @parent BasicParamCaps
 *
 * @param BasicEnemyParamMax0:str
 * @text MaxHP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999999
 *
 * @param BasicEnemyParamMax1:str
 * @text MaxMP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicEnemyParamMax2:str
 * @text ATK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax3:str
 * @text DEF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax4:str
 * @text MAT Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax5:str
 * @text MDF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax6:str
 * @text AGI Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax7:str
 * @text LUK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param XParameters
 * @text X Parameters
 *
 * @param XParameterFormula:func
 * @text JS: Formula
 * @parent XParameters
 * @type note
 * @desc Formula used to determine the total value all 10 X parameters: HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 * @default "// Determine the variables used in this calculation.\nlet xparamId = arguments[0];\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\nlet plus = this.xparamPlus(xparamId);\nlet paramRate = this.xparamRate(xparamId);\nlet flatBonus = this.xparamFlatBonus(xparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param XParamVocab
 * @text Vocabulary
 * @parent XParameters
 *
 * @param XParamVocab0:str
 * @text HIT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Hit
 *
 * @param XParamVocab1:str
 * @text EVA
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Evasion
 *
 * @param XParamVocab2:str
 * @text CRI
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Rate
 *
 * @param XParamVocab3:str
 * @text CEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Evade
 *
 * @param XParamVocab4:str
 * @text MEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Evade
 *
 * @param XParamVocab5:str
 * @text MRF
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Reflect
 *
 * @param XParamVocab6:str
 * @text CNT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Counter
 *
 * @param XParamVocab7:str
 * @text HRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default HP Regen
 *
 * @param XParamVocab8:str
 * @text MRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default MP Regen
 *
 * @param XParamVocab9:str
 * @text TRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default TP Regen
 *
 * @param SParameters
 * @text S Parameters
 *
 * @param SParameterFormula:func
 * @text JS: Formula
 * @parent SParameters
 * @type note
 * @desc Formula used to determine the total value all 10 S parameters: TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 * @default "// Determine the variables used in this calculation.\nlet sparamId = arguments[0];\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\nlet plus = this.sparamPlus(sparamId);\nlet paramRate = this.sparamRate(sparamId);\nlet flatBonus = this.sparamFlatBonus(sparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param SParamVocab
 * @text Vocabulary
 * @parent SParameters
 *
 * @param SParamVocab0:str
 * @text TGR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Aggro
 *
 * @param SParamVocab1:str
 * @text GRD
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Guard
 *
 * @param SParamVocab2:str
 * @text REC
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Recovery
 *
 * @param SParamVocab3:str
 * @text PHA
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Item Effect
 *
 * @param SParamVocab4:str
 * @text MCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default MP Cost
 *
 * @param SParamVocab5:str
 * @text TCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default TP Charge
 *
 * @param SParamVocab6:str
 * @text PDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Physical DMG
 *
 * @param SParamVocab7:str
 * @text MDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Magical DMG
 *
 * @param SParamVocab8:str
 * @text FDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Floor DMG
 *
 * @param SParamVocab9:str
 * @text EXR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default EXP Gain
 *
 * @param Icons
 * @text Icons
 *
 * @param DrawIcons:eval
 * @text Draw Icons?
 * @parent Icons
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Draw icons next to parameter names?
 * @default true
 *
 * @param IconParam0:str
 * @text MaxHP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 84
 *
 * @param IconParam1:str
 * @text MaxMP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconParam2:str
 * @text ATK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconParam3:str
 * @text DEF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 81
 *
 * @param IconParam4:str
 * @text MAT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 101
 *
 * @param IconParam5:str
 * @text MDF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 133
 *
 * @param IconParam6:str
 * @text AGI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 140
 *
 * @param IconParam7:str
 * @text LUK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 87
 *
 * @param IconXParam0:str
 * @text HIT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 102
 *
 * @param IconXParam1:str
 * @text EVA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam2:str
 * @text CRI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 78
 *
 * @param IconXParam3:str
 * @text CEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam4:str
 * @text MEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 171
 *
 * @param IconXParam5:str
 * @text MRF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 222
 *
 * @param IconXParam6:str
 * @text CNT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 77
 *
 * @param IconXParam7:str
 * @text HRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam8:str
 * @text MRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam9:str
 * @text TRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam0:str
 * @text TGR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 5
 *
 * @param IconSParam1:str
 * @text GRD
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 128
 *
 * @param IconSParam2:str
 * @text REC
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam3:str
 * @text PHA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 176
 *
 * @param IconSParam4:str
 * @text MCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconSParam5:str
 * @text TCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 164
 *
 * @param IconSParam6:str
 * @text PDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconSParam7:str
 * @text MDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 79
 *
 * @param IconSParam8:str
 * @text FDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 141
 *
 * @param IconSParam9:str
 * @text EXR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 73
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
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this title command.
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
 * @default ""
 *
 */
/* ----------------------------------------------------------------------------
 * Title Picture Buttons
 * ----------------------------------------------------------------------------
 */
/*~struct~TitlePictureButton:
 *
 * @param PictureFilename:str
 * @text Picture's Filename
 * @type file
 * @dir img/pictures/
 * @desc Filename used for the picture.
 * @default 
 *
 * @param ButtonURL:str
 * @text Button URL
 * @desc URL for the button to go to upon being clicked.
 * @default https://www.google.com/
 *
 * @param PositionJS:func
 * @text JS: Position
 * @type note
 * @desc JavaScript code that helps determine the button's Position.
 * @default "this.x = Graphics.width - this.bitmap.width - 20;\nthis.y = Graphics.height - this.bitmap.height - 20;"
 *
 * @param OnLoadJS:func
 * @text JS: On Load
 * @type note
 * @desc JavaScript code that runs once this button bitmap is loaded.
 * @default "this.opacity = 0;\nthis.visible = true;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this button is pressed.
 * @default "const url = this._data.ButtonURL;\nVisuMZ.openURL(url);"
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param UIArea
 * @text UI Area
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent UIArea
 * @desc Default fade speed for transitions.
 * @default 24
 *
 * @param BoxMargin:num
 * @text Box Margin
 * @parent UIArea
 * @type number
 * @min 0
 * @desc Set the margin in pixels for the screen borders.
 * Default: 4
 * @default 4
 *
 * @param CommandWidth:num
 * @text Command Window Width
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the width for standard Command Windows.
 * Default: 240
 * @default 240
 *
 * @param BottomHelp:eval
 * @text Bottom Help Window
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the Help Window at the bottom of the screen?
 * @default false
 *
 * @param RightMenus:eval
 * @text Right Aligned Menus
 * @parent UIArea
 * @type boolean
 * @on Right
 * @off Left
 * @desc Put most command windows to the right side of the screen.
 * @default true
 *
 * @param ShowButtons:eval
 * @text Show Buttons
 * @parent UIArea
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show clickable buttons in your game?
 * This will affect all buttons.
 * @default true
 *
 * @param cancelShowButton:eval
 * @text Show Cancel Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show cancel button?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param menuShowButton:eval
 * @text Show Menu Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show main menu button from the map scene?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param pagedownShowButton:eval
 * @text Show Page Up/Down
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show page up/down buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param numberShowButton:eval
 * @text Show Number Buttons
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show number adjustment buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param ButtonHeight:num
 * @text Button Area Height
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the height for the button area.
 * Default: 52
 * @default 52
 *
 * @param BottomButtons:eval
 * @text Bottom Buttons
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the buttons at the bottom of the screen?
 * @default false
 *
 * @param SideButtons:eval
 * @text Side Buttons
 * @parent UIArea
 * @type boolean
 * @on Side
 * @off Normal
 * @desc Push buttons to the side of the UI if there is room.
 * @default true
 *
 * @param StateIconsNonFrame:eval
 * @text State Icons Non-Frame
 * @parent UIArea
 * @type boolean
 * @on Non-Frame
 * @off Normal
 * @desc Replace sprite frame system for non-frame.
 * Better for any instances where icons are zoomed.
 * @default true
 *
 * @param MenuObjects
 * @text Menu Objects
 *
 * @param LvExpGauge:eval
 * @text Level -> EXP Gauge
 * @parent MenuObjects
 * @type boolean
 * @on Draw Gauge
 * @off Keep As Is
 * @desc Draw an EXP Gauge under the drawn level.
 * @default true
 *
 * @param ParamArrow:str
 * @text Parameter Arrow
 * @parent MenuObjects
 * @desc The arrow used to show changes in the parameter values.
 * @default →
 *
 * @param TextCodeSupport
 * @text Text Code Support
 *
 * @param TextCodeClassNames:eval
 * @text Class Names
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make class names support text codes?
 * @default true
 *
 * @param TextCodeNicknames:eval
 * @text Nicknames
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make nicknames support text codes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param WindowDefaults
 * @text Defaults
 *
 * @param EnableMasking:eval
 * @text Enable Masking
 * @parent WindowDefaults
 * @type boolean
 * @on Masking On
 * @off Masking Off
 * @desc Enable window masking (windows hide other windows behind 
 * them)? WARNING: Turning it on can obscure data.
 * @default false
 *
 * @param CorrectSkinBleeding:eval
 * @text Correct Skin Bleed
 * @parent WindowDefaults
 * @type boolean
 * @on Correct
 * @off Don't Correct
 * @desc Corrects window skin bleeding bug when used with higher
 * screen resolutions?
 * @default true
 *
 * @param LineHeight:num
 * @text Line Height
 * @parent WindowDefaults
 * @desc Default line height used for standard windows.
 * Default: 36. Avoid using odd numbers.
 * @default 36
 *
 * @param ItemPadding:num
 * @text Item Padding
 * @parent WindowDefaults
 * @desc Default line padding used for standard windows.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param BackOpacity:num
 * @text Back Opacity
 * @parent WindowDefaults
 * @desc Default back opacity used for standard windows.
 * Default: 192
 * @default 192
 *
 * @param TranslucentOpacity:num
 * @text Translucent Opacity
 * @parent WindowDefaults
 * @desc Default translucent opacity used for standard windows.
 * Default: 160
 * @default 160
 *
 * @param OpenSpeed:num
 * @text Window Opening Speed
 * @parent WindowDefaults
 * @desc Default open speed used for standard windows.
 * Default: 32 (Use a number between 0-255)
 * @default 32
 * @default 24
 *
 * @param ColSpacing:num
 * @text Column Spacing
 * @parent WindowDefaults
 * @desc Default column spacing for selectable windows.
 * Default: 8
 * @default 8
 *
 * @param RowSpacing:num
 * @text Row Spacing
 * @parent WindowDefaults
 * @desc Default row spacing for selectable windows.
 * Default: 4
 * @default 4
 * 
 * @param ScrollBar
 * @text Scroll Bar
 *
 * @param ShowScrollBar:eval
 * @text Show Scroll Bar?
 * @parent ScrollBar
 * @type boolean
 * @on Show Scroll Bar
 * @off Don't Show
 * @desc Show the scroll bar for scrollable windows?
 * @default true
 *
 * @param BarThickness:num
 * @text Thickness
 * @parent ScrollBar
 * @type number
 * @min 1
 * @desc How thick do you want the scroll bar to be?
 * @default 2
 *
 * @param BarOffset:num
 * @text Offset
 * @parent ScrollBar
 * @desc How much do you want to offset the scroll bar by?
 * @default +2
 *
 * @param BarBodyColor:str
 * @text Bar Body Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param OffBarColor:str
 * @text Off Bar Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param OffBarOpacity:num
 * @text Off Bar Opacity
 * @parent ScrollBar
 * @type number
 * @min 1
 * @max 255
 * @desc What opacity value do you want the off bar opacity
 * to be? Use a number between 0 and 255.
 * @default 128
 * 
 * @param SelectableItems
 * @text Selectable Items
 *
 * @param ShowItemBackground:eval
 * @text Show Background?
 * @parent SelectableItems
 * @type boolean
 * @on Show Backgrounds
 * @off No Backgrounds
 * @desc Selectable menu items have dark boxes behind them. Show them?
 * @default true
 *
 * @param ItemHeight:num
 * @text Item Height Padding
 * @parent SelectableItems
 * @desc Default padding for selectable items.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param DrawItemBackgroundJS:func
 * @text JS: Draw Background
 * @parent SelectableItems
 * @type note
 * @desc Code used to draw the background rectangle behind clickable menu objects
 * @default "const rect = arguments[0];\nconst c1 = ColorManager.itemBackColor1();\nconst c2 = ColorManager.itemBackColor2();\nconst x = rect.x;\nconst y = rect.y;\nconst w = rect.width;\nconst h = rect.height;\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\nthis.contentsBack.strokeRect(x, y, w, h, c1);"
 *
 * @param TextPopup
 * @text Text Popup Window
 *
 * @param DurationPerChat:num
 * @text Duration Per Text
 * @parent TextPopup
 * @desc What is the increase in duration per text character?
 * @default 1.5
 *
 * @param MinDuration:num
 * @text Minimum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Minimum duration for window to stay on the screen.
 * @default 90
 *
 * @param MaxDuration:num
 * @text Maximum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Maximum duration for window to stay on the screen.
 * @default 300
 * 
 */
/* ----------------------------------------------------------------------------
 * Screen Resolution Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenResolution:
 *
 * @param Maps
 * 
 * @param AutoScrollLockX:eval
 * @text Scroll Lock Small X?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock X scrolling if the map is too small?
 * @default true
 * 
 * @param AutoScrollLockY:eval
 * @text Scroll Lock Small Y?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock Y scrolling if the map is too small?
 * @default true
 * 
 * @param DisplayLockX:num
 * @text Locked Display X?
 * @parent Maps
 * @desc What display X value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.15625
 * 
 * @param DisplayLockY:num
 * @text Locked Display Y?
 * @parent Maps
 * @desc What display Y value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.00000
 * 
 * @param Troops
 *
 * @param RepositionActors:eval
 * @text Reposition Actors
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of actors in battle if the screen resolution has changed. Ignore if using Battle Core.
 * @default true
 *
 * @param RepositionEnemies:eval
 * @text Reposition Enemies
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of enemies in battle if the screen resolution has changed.
 * @default true
 *
 * @param RepositionEnemies130:eval
 * @text For MZ 1.3.0+?
 * @parent RepositionEnemies:eval
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Both this parameter and its parent parameter need to be on when using RPG Maker MZ 1.3.0+.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Screen Shake Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenShake:
 *
 * @param DefaultStyle:str
 * @text Default Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc The default style used for screen shakes.
 * @default random
 *
 * @param originalJS:func
 * @text JS: Original Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\nthis.x += Math.round($gameScreen.shake());"
 *
 * @param randomJS:func
 * @text JS: Random Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param horzJS:func
 * @text JS: Horizontal Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param vertJS:func
 * @text JS: Vertical Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomParam:
 *
 * @param ParamName:str
 * @text Parameter Name
 * @desc What's the parameter's name?
 * Used for VisuStella MZ menus.
 * @default Untitled
 *
 * @param Abbreviation:str
 * @text Abbreviation
 * @parent ParamName:str
 * @desc What abbreviation do you want to use for the parameter?
 * Do not use special characters. Avoid numbers if possible.
 * @default unt
 *
 * @param Icon:num
 * @text Icon
 * @parent ParamName:str
 * @desc What icon do you want to use to represent this parameter?
 * Used for VisuStella MZ menus.
 * @default 160
 *
 * @param Type:str
 * @text Type
 * @parent ParamName:str
 * @type select
 * @option Integer (Whole Numbers Only)
 * @value integer
 * @option Float (Decimals are Allowed)
 * @value float
 * @desc What kind of number value will be returned with this parameter?
 * @default integer
 *
 * @param ValueJS:json
 * @text JS: Value
 * @type note
 * @desc Run this code when this parameter is to be returned.
 * @default "// Declare Constants\nconst user = this;\n\n// Calculations\nreturn 1;"
 *
 */
/* ----------------------------------------------------------------------------
 * Show Picture Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShowPicture:
 * 
 * @param Position
 *
 * @param Origin:num
 * @text Origin
 * @parent Position
 * @type select
 * @option 0 - Upper Left
 * @value 0
 * @option 1 - Center
 * @value 1
 * @desc What is the origin of this picture icon?
 * @default 0
 *
 * @param PositionX:eval
 * @text Position X
 * @parent Position
 * @desc X coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 *
 * @param PositionY:eval
 * @text Position Y
 * @parent Position
 * @desc Y coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 * 
 * @param Scale
 *
 * @param ScaleX:eval
 * @text Width %
 * @parent Scale
 * @desc Horizontal scale of the picture.
 * You may use JavaScript code.
 * @default 100
 *
 * @param ScaleY:eval
 * @text Height %
 * @parent Scale
 * @desc Vertical scale of the picture.
 * You may use JavaScript code.
 * @default 100
 * 
 * @param Blend
 *
 * @param Opacity:eval
 * @text Opacity
 * @parent Blend
 * @desc Insert a number to determine opacity level. Use a
 * number between 0 and 255. You may use JavaScript code.
 * @default 255
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Blend
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the picture?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * JS Quick Function Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~jsQuickFunc:
 *
 * @param FunctionName:str
 * @text Function Name
 * @desc The function's name in the global namespace.
 * Will not overwrite functions/variables of the same name.
 * @default Untitled
 *
 * @param CodeJS:json
 * @text JS: Code
 * @type note
 * @desc Run this code when using the function.
 * @default "// Insert this as a function anywhere you can input code\n// such as Script Calls or Conditional Branch Scripts.\n\n// Process Code\n"
 *
 */
//=============================================================================

const _0x19616c=_0x484b;function _0x2db6(){const _0x4591e9=['getBattleSystem','Click\x20\x22Copy\x20Page\x22\x20from\x20another\x20tileset\x27s\x20pages','OUTQUAD','open','renderNoMask','offsetY','mainAreaTop','_stored_deathColor','OkText','EXCLAMATION','buttonAssistKey4','PreserveNumbers','Game_Picture_move','xparamRate','Untitled','Current\x20tileset\x20has\x20incomplete\x20flag\x20data.','Game_Troop_setup','framesPerChar','DEF','Window','loadTitle1','ShowItemBackground','SParameterFormula','_statusWindow','backOpacity','adjustSprite','pendingColor','valueOutlineColor','_dummyWindow','AudioChangeBgsPan','updatePositionCoreEngine','RPGMAKER_VERSION','isNwjs','Game_Map_scrollRight','Bitmap_blt','concat','innerWidth','zoomScale','Game_Map_setDisplayPos','Wait','buttonAssistWindowRect','ExtractStrFromList','updateDocumentTitle','Chance','LATIN1','4457202RFBzOs','parallaxes','destroyScrollBarBitmaps','numberWindowRect','exit','StateIconsNonFrame','Scene_Map_updateMain','gainGold','Sprite_AnimationMV_updatePosition','setEvent','xparamFlat2','OutlineColorGauge','targets','Spriteset_Base_isAnimationPlaying','BlurStrength','Game_Interpreter_PluginCommand','DataManager_setupNewGame','NUMPAD9','padding','sparamRate1','TextCodeClassNames','Bitmap_fillRect','IconSParam5','isLoopVertical','initVisuMZCoreEngine','_anglePlus','isBottomHelpMode','RIGHT','HelpBgType','params','startNormalGame','ConvertNumberToString','Scene_MenuBase_mainAreaHeight','learnings','Weapon-%1-%2','_stored_powerUpColor','includes','numActions','SkillTypeBgType','PositionJS','Game_Actor_isPreserveTp','tilesetNames','Window_Selectable_drawBackgroundRect','Scene_Title','changeTextColor','84qSJYig','PERCENT','getInputMultiButtonStrings','Rate','turn','setEasingType','WIN_ICO_HELP','isSmartEventCollisionOn','repositionEnemiesByResolution','currentValue','vert','_statusParamsWindow','ItemRect','isUseModernControls','repositionCancelButtonSideButtonLayout','Flat2','mainAreaTopSideButtonLayout','updatePictureSettings','Map%1','MaxDuration','select','_stored_expGaugeColor2','Scene_Map_initialize','Keyboard','updateText','forceOutOfPlaytest','INCIRC','WIN_OEM_FJ_MASSHOU','IconSParam6','Troop%1','sv_actors','Window_NameInput_cursorRight','item','SideView','Scene_Equip_create','retrieveFauxAnimation','PTB','ZOOM','_tileExtendTerrainTags','min','isScrollBarVisible','bind','drawActorSimpleStatus','FDR','_drawTextBody','_onceParallelInterpreters','pixelated','playtestQuickLoad','AdjustAngle','PictureFilename','setCoreEngineUpdateWindowBg','_CoreEngineSettings','F22','1.4.4','Scene_Base_terminateAnimationClearBugFix','applyEasingAnglePlus','move','removePointAnimation','isEnemy','registerCommand','updateTransform','maxLvGaugeColor1','LoadError','_colorTone','_itemWindow','PositionX','toFixed','easingType','_context','NewGameCommonEventAll','playTestShiftR','SystemLoadImages','setAnglePlusData','_scrollBarHorz','keyCode','drawCurrentParam','isNormalPriority','CheckSplitEscape','initRotation','TitleCommandList','PDR','_commonEventLayers','sparamFlatJS','Manual','ColSpacing','GoldMax','drawBackground','processDrawIcon','updateScene','_text','randomJS','adjustPictureAntiZoom','Spriteset_Map_createTilemap','maxTp','Scene_MenuBase_createCancelButton','Scene_Boot_updateDocumentTitle','cursorLeft','buttonAssistOffset4','_centerElementCoreEngine','Show\x20Scrolling\x20Text\x20Script\x20Error','paramValueByName','_actor','getLastUsedGamepadType','processCursorHomeEndTrigger','CONVERT','skipBranch','ParseItemNotetags','left','paramBaseAboveLevel99','font-smooth','OffBarOpacity','system','VOLUME_UP','_addSpotTile','_cache','setMainFontSize','_lastY','_profileWindow','isPreserveTp','makeFontBigger','helpWindowRect','contentsOpacity','createPageButtons','drawFace','xparamPlus','animationBaseDelay','Input_update','ARRAYFUNC','Plus1','_forcedBattleGridSystem','PHA','CustomParamType','VisuMZ_1_BattleCore','LESS_THAN','initDigitGrouping','iconHeight','end','doesNameContainBannedWords','INQUAD','sparamPlusJS','SceneManager_initialize','0.00','DebugConsoleLastControllerID','cancelShowButton','filters','DIVIDE','_targetScaleY','PixelateImageRendering','vertical','this.paramBase(4)','_pictureCoordinatesMode','Window_NameInput_cursorLeft','initCoreEasing','%1\x0a','createCommandWindow','VisuMZ_2_BattleSystemBTB','_tilemap','Scene_TitleTransition','CRI','windowPadding','(\x5cd+\x5c.?\x5cd+)>','_playTestFastMode','_colorCache','mhp','scrollRight','_lastX','encounterStepsMinimum','blt','VOLUME_DOWN','home','onDatabaseLoaded','ImgLoad','_effectsContainer','Scene_Map_updateMainMultiply','titles2','removeAllFauxAnimations','_anchor','_texture','isInputting','F13','createChildSprite','ConvertToBase','ActorMPColor','createAnimationSprite','Window_StatusBase_drawActorSimpleStatus','isGamepadAxisMoved','resetFontSettings','_startLoading','_scrollDuration','sparamPlus','_animationSprites','mainFontSize','ALTGR','operand','BACK_SLASH','tpColor','setupValueFont','_stored_hpGaugeColor1','isDying','lineHeight','373312KWdjnt','Location','level','ControllerButtons','updateRotation','TGR','filter','addChild','xparamPlus1','〘Scrolling\x20Text〙\x0a','isFullDocumentTitle','ColorSystem','helpAreaTopSideButtonLayout','this.paramBase(6)','getControllerInputButtonMatch','Game_Event_start','text','loadIconBitmap','createFauxAnimationSprite','Window_Selectable_cursorDown','isMenuButtonAssistEnabled','_animation','centerX','responseText','_margin','parse','Window_NameInput_cursorPageup','WIN_ICO_00','OUTEXPO','isOpenAndActive','OptionsBgType','SLASH','_height','\x20this.','current','members','restore','CtrlQuickLoad','inputWindowRect','OpenSpeed','setColorTone','COMMA','Flat','createCustomBackgroundImages','buttons!\x20Go\x20to\x20project\x27s\x20rmmz_core.js\x20and\x20modify\x20Input.keyMapper\x20','Scene_Boot_onDatabaseLoaded','sparamRate2','isMaskingEnabled','hide','setupScrollBarBitmap','createExtendedTileSprite','send','refreshDimmerBitmap','horz','EnableJS','OUTBACK','makeDeepCopy','checkPassage','xparamFlatBonus','MapOnceParallel','object','loadBitmap','setLastPluginCommandInterpreter','setSideView','ImprovedAccuracySystem','strokeRect','ONE_MINUS_SRC_ALPHA','IconXParam0','areButtonsHidden','setAnchor','smoothSelect','missed','paramMax','Type','QoL','AnimationPoint','CategoryRect','KeyTAB','hpGaugeColor1','itemBackColor2','BattleManager_update','Scene_Map_shouldAutosave','playOnceParallelInterpreter','Sprite_Picture_loadBitmap','IconParam2','_mirror','enabled','jsonToZip','144CcVrgp','_battlerName','getCustomBackgroundSettings','VisuMZ_2_BattleSystemETB','destroy','Scene_Skill_create','BgFilename2','ProfileRect','drawActorLevel','StatusBgType','quit','center','〖〖〖\x20Map\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','setViewport','drawCharacter','addWindow','WIN_OEM_JUMP','ExportAllMapText','Name','WIN_OEM_FJ_ROYA','ButtonAssist','_moveEasingType','_upArrowSprite','processKeyboardHandling','_customModified','randomInt','remove','ARRAYSTR','STB','this.paramBase(0)','target','endBattlerActions','Plus2','_paramPlus','setTileFrame','setTopRow','INSERT','WIN_OEM_ENLW','levelUpRecovery','catchException','render','setLastGamepadUsed','replace','maxItems','_commandWindow','version','IconSParam4','SystemLoadAudio','Sprite_Actor_setActorHome','_pictureContainer','1.10.0','pos','_backgroundSprite','ShowButtons','tpGaugeColor1','EVA','updatePointAnimations','targetPosition','createTroopNote','updatePadding','Scene_Map_createSpriteset','maxVisibleItems','command111','BannedWords','WIN_OEM_COPY','isPlaytest','DigitGroupingGaugeSprites','GRD','IconXParam9','measureTextWidthNoRounding','createTitleButtons','createPointAnimationSprite','ExtDisplayedParams','_shakePower','drawActorIcons','button','FontSmoothing','keyboard','_targetScaleX','isKeyItem','buttonAssistOffset3','KeyboardInput','_pageupButton','BattleManager_invokeCounterAttack','erasePicture','refreshActor','onButtonImageLoad','DisplayLockY','_stored_powerDownColor','Upper\x20Left','Sprite_Animation_setViewport','MULTIPLY','onBattleEnd','AudioChangeBgsPitch','_stored_mpGaugeColor2','CEV','KANA','and\x20add\x20it\x20onto\x20this\x20one.','yScrollLinkedOffset','consumable','BaseTexture','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','nah','EXR','sparamFlat2','createButtonAssistWindow','_onKeyDown','maxScrollY','destroyContents','onBattleStart','F12','save','HIT','XParamVocab1','isAnimationOffsetXMirrored','processBack','setupButtonImage','_actorWindow','translucentOpacity','Bitmap_drawCircle','performEscape','INOUTCIRC','_categoryWindow','Window_NameInput_processHandling','contains','horzJS','GoldFontSize','none','FadeSpeed','uiAreaWidth','TCR','SwitchActorText','updateLastTarget','checkCoreEngineDisplayCenter','_updateFilterArea','INELASTIC','TRG','itypeId','_active','scale','PGUP','subtitle','buttonAssistKey3','_stored_maxLvGaugeColor2','showPointAnimations','textAlign','executeLoad','playCursorSound','Sprite_AnimationMV_processTimingData','RepositionEnemies130','processTouchModernControls','win32','F24','escape','ASTERISK','Game_Map_setup','charCode','Symbol','fromCharCode','textWidth','Spriteset_Battle_createEnemies','this.paramBase(3)','EXSEL','Window_Base_drawText','STENCIL_BUFFER_BIT','processKeyboardDigitChange','Game_Actor_paramBase','SLEEP','TPB\x20WAIT','createEnemies','drawGameTitle','Bitmap_clearRect','evaded','framebuffer','WIN_OEM_FJ_TOUROKU','targetBackOpacity','Scene_Battle_createCancelButton','isGamepadTriggered','Y:\x20%1','cursorUp','Spriteset_Battle_createLowerLayer','Game_Party_consumeItem','DrawItemBackgroundJS','sparamFlatBonus','IconSParam3','_forcedTroopView','onInputOk','isCursorMovable','Tilemap_addSpotTile','TextStr','processKeyboardHome','_onLoad','_isButtonHidden','_digitGrouping','baseId','WIN_OEM_CUSEL','_url','Input_clear','XParamVocab4','ControllerMatches','keys\x20for\x20both\x20\x22cancel\x22\x20and\x20\x22menu\x22!\x0a\x0a','processCursorMove','terminate','Window_Base_update','_sideButtonLayout','getGamepads','value','sparamFlat1','ItemBackColor2','ColorTPGauge1','_stored_pendingColor','STR','_dimmerSprite','moveRelativeToResolutionChange','updateScrollBars','makeEncounterCount','\x5c}❪TAB❫\x5c{','LvExpGauge','Scene_MenuBase_helpAreaTop','clearRect','_repositioned','SUBTRACT','option','_stored_tpGaugeColor1','addQueue','powerDownColor','createWindowLayer','initMembers','WIN_OEM_ATTN','key%1','enable','Window_TitleCommand_selectLast','dimColor2','ParseAllNotetags','useDigitGrouping','Input_setupEventHandlers','floor','BuyRect','10hknSIp','createContents','paramRate','_stored_maxLvGaugeColor1','Armor-%1-%2','Finish','NUM','Window_NameInput_cursorDown','Scene_Name_create','duration','Opacity','ARRAYSTRUCT','JUNJA','statusParamsWindowRect','drawTextTopAligned','_lastIconIndex','PERIOD','Game_Action_setAttack','_muteSound','drawBackgroundRect','IconSParam7','ConvertParams','TAB','updateClose','ActorTPColor','exp','selectLast','pagedown','114406IEDtpi','pictureButtons','REPLACE','focus','_duration','ParseClassNotetags','toUpperCase','_origin','DummyRect','DATABASE','OutlineColor','Max','Conditional\x20Branch\x20Script\x20Error','updateSmoothScroll','updateKeyText','Bitmap_measureTextWidth','CategoryBgType','clearForcedGameTroopSettingsCoreEngine','MEV','RequireFocus','Title','updateMainMultiply','contents','index','data/','1739600bfHdps','hit','IconXParam3','tileWidth','_targetY','repeat','editWindowRect','SystemSetWindowPadding','requestMotion','removeAllPointAnimations','_bgsBuffer','onLoad','Renderer','itemRect','stringKeyMap','ParamName','targetOpacity','setTargetAnchor','_slotWindow','_isWindow','performMiss','changeAnglePlusData','return\x200','process_VisuMZ_CoreEngine_Settings','targetContentsOpacity','operation','subjectHitRate','ARRAYNUM','Window_MapName_refresh','_onKeyPress','Sprite_destroy','ParseSkillNotetags','ItemBackColor1','cos','bodyColor','Spriteset_Base_updatePosition','sparamPlus1','FontWidthFix','xScrollLinkedOffset','parameters','BasicParameterFormula','description','createCustomParameter','overallHeight','TextManager_param','Game_Action_updateLastTarget','ListBgType','MinDuration','setViewportCoreEngineFix','TextCodeNicknames','applyEasing','scrollLeft','_data','ColorPowerUp','_displayedPassageError','buttonAssistText4','isPressed','drawIconBySize','isGamepadConnected','overallWidth','NUMPAD2','_bgmBuffer','processPointAnimationRequests','paramX','test','maxBattleMembers','REC','displayName','makeCommandList','displayY','createPointAnimationQueue','ALT','nickname','length','ApplyEasing','removeTileExtendSprites','updateBgsParameters','refresh','retreat','_shiftY','indexOf','ZERO','getTileExtendTerrainTags','setSkill','ScreenShake','Game_System_initialize','loadMapData','Rate2','hideButtonFromView','dimColor1','subject','IconSParam8','boxWidth','EditRect','ExportCurTroopText','OTB','_scene','setFrame','Game_Actor_changeClass','inBattle','Sprite_StateIcon_loadBitmap','SETTINGS','LevelUpFullMp','scrollUp','Game_Map_scrollDown','SCROLL_LOCK','_internalTextures','battleSystem','Window_Gold_refresh','ExportString','_buyWindow','_allTextHeight','rgba(0,\x200,\x200,\x200.7)','createCancelButton','JsReplaceUserVar','_smooth','drawItem','removeChild','keyRepeatWait','Scene_Map_createSpritesetFix','listWindowRect','buttonAssistText1','OptionsMenu','ctrl','scaleSprite','anchor','command355','Scene_MenuBase_createBackground','processMoveCommand','update','SwitchToggleRange','addAnimationSpriteToContainer','toString','_drawTextOutline','openingSpeed','itemLineRect','initTpbChargeTime','Window_ShopSell_isEnabled','SParamVocab4','EndingID','etypeId','wait','mute','command105','this.paramBase(2)','Game_Actor_levelUp','ShowDevTools','up2','Window_Base_createContents','_battleField','CallHandlerJS','SmartEventCollisionPriority','_pointAnimationQueue','RepositionEnemies','CustomParamAbb','ParamChange','getCombinedScrollingText','powerUpColor','ShowScrollBar','ExportStrFromAllMaps','PRESERVCONVERSION(%1)','Input_pollGamepads','retrievePointAnimation','_pauseSignSprite','WindowLayer_render','Game_Picture_angle','SELECT','isTriggered','framesMax','bitmapHeight','bgsVolume','ONE','_backgroundFilter','_optionsWindow','DrawIcons','requestPointAnimation','context','MAXMP','isGamepadButtonPressed','itemPadding','width','viewport','TimeProgress','_opening','HASH','_currentMap','QwertyLayout','lastAnimationSprite','IconSParam9','name','OpenURL','Bitmap_strokeRect','setSideButtonLayout','(\x5cd+)([%％])>','bgmVolume','updatePositionCoreEngineShakeVert','gradientFillRect','ExtractStrFromTroop','text%1','F16','_lastOrigin','VisuMZ_2_BattleSystemPTB','StatusRect','originalJS','numRepeats','centerCameraCheckData','ParseActorNotetags','WIN_ICO_CLEAR','Scene_MenuBase_createPageButtons','writeFile','ParseTilesetNotetags','attackSkillId','SParamVocab3','textColor','centerY','gainSilentTp','WIN_OEM_PA3','EscapeAlways','Spriteset_Base_initialize','_helpWindow','addEventListener','xparamPlus2','DEFAULT_SHIFT_Y','END','textBaseline','statusEquipWindowRect','IconParam6','Window_SkillList_includes','LINEAR','_eventId','isPointAnimationPlaying','height','top','pages','_refreshArrows','UpdatePictureCoordinates','_width','BuyBgType','IconParam4','_realScale','sparamRate','startMove','checkCacheKey','RegExp','MenuLayout','CodeJS','updateEffekseer','createScrollBarSprites','buttonAssistWindowButtonRect','Window_Scrollable_update','stypeId','ActorBgType','maxVert','updatePictureCoordinates','ParseEnemyNotetags','Scene_MenuBase_mainAreaTop','drawGoldItemStyle','playBgm','ExportAllTroopText','ADD','storeMapData','reserveNewGameCommonEvent','application/json','_targetX','onerror','advanced','resetBattleSystem','random','WIN_OEM_PA1','title','_hovered','_coreEasing','drawGauge','paramFlatBonus','Sprite_Gauge_gaugeRate','isHandled','INOUTEXPO','BoxMargin','buttonAssistOffset1','EISU','buttonAssistOffset%1','updateMove','layeredTiles','updateBgmParameters','_mapNameWindow','ESC','flush','_lastCommandSymbol','wholeDuration','targetSpritePosition','baseTextRect','clearOnceParallelInterpreters','_defaultStretchMode','showIncompleteTilesetError','Game_Map_scrollLeft','Bitmap_initialize','fadeSpeed','useFontWidthFix','Window_Base_initialize','isGameActive','paramRateJS','drawActorNickname','RightMenus','_bypassCanCounterCheck','round','NUMPAD7','isMapScrollLinked','faceWidth','updatePositionCoreEngineShakeHorz','HANJA','DisplayLockX','showFauxAnimations','ColorExpGauge1','xparamRate2','animationNextDelay','setupTileExtendTerrainTags','getPointAnimationLayer','createSpriteset','_list','initialBattleSystem','guardSkillId','TextJS','forceStencil','setActorHome','RowSpacing','alignBottom','AutoScrollLockX','Sprite_Battler_startMove','maxLvGaugeColor2','Spriteset_Base_update','onKeyDown','Param','shouldAutosave','_stored_systemColor','outlineColorGauge','removeAnimation','initCoreEngine','scrollbarHeight','process_VisuMZ_CoreEngine_Functions','_sellWindow','updateMain','StartID','paramFlat','updateFauxAnimations','setValue','scaleMode','DOWN','_mode','seek','_clientArea','createFauxAnimationQueue','_screenY','reduce','smooth','_inBattle','BarBodyColor','match','MRF','SceneManager_onKeyDown','Enemy-%1-%2','Game_Interpreter_command355','Spriteset_Base_destroy','blendFunc','_loadingState','setup','battlebacks1','NameMenu','_targetOffsetX','TPB\x20ACTIVE','_windowLayer','adjustBoxSize','Scene_Base_create','createPointAnimation','coreEngineRepositionEnemies','_tileSprite','crisisColor','LEFT','call','AudioChangeBgsVolume','Control\x20Variables\x20Script\x20Error','VisuMZ_2_BattleSystemSTB','_isPlaytest','CNT','updatePositionCoreEngineShakeOriginal','F11','keyMapper','makeDocumentTitle','isNumpadPressed','setBattleSystem','GameEnd','menuShowButton','catchNormalError','WIN_OEM_FINISH','IconParam1','_mainSprite','pageup','Game_Picture_x','SParamVocab1','MIN_SAFE_INTEGER','ColorMaxLvGauge1','getCoreEngineScreenShakeStyle','playMiss','changeClass','damageColor','sqrt','drawText','_refreshPauseSign','XParamVocab9','blockWidth','initBasic','Game_Interpreter_command122','_name','_backSprite','SCALE_MODES','EXECUTE','_cancelButton','CustomParamNames','NUMPAD5','darwin','slotWindowRect','ExtractStrFromMap','_lastScrollBarValues','addOnceParallelInterpreter','currencyUnit','clamp','_startDecrypting','\x0a\x0a\x0a\x0a\x0a','_targetAnchor','systemColor','bgm','isItemStyle','children','tilesets','Scene_Menu_create','isPhysical','updatePictureAntiZoom','_rate','BlurFilter','loadBitmapCoreEngine','paramBase','F15','down2','isAnimationPlaying','Game_Picture_initBasic','Script\x20Call\x20Error','reserveCommonEvent','INBACK','drawTextEx','loadSystemImages','prepare','isEventRunning','isCancelled','_spriteset','xparam','isNextScene','IconXParam4','AutoStretch','CoreEngine','Bitmap_gradientFillRect','_textQueue','isActiveTpb','_animationQueue','mapId','opacity','_currentBgm','ctGaugeColor2','%1:\x20Exit\x20','endAnimation','characters','addCommand','GoldBgType','valueOutlineWidth','areButtonsOutsideMainUI','updateOrigin','checkPlayerLocation','ColorCTGauge2','GoldIcon','_balloonQueue','_targets','Scene_Battle_createSpriteset_detach','ARRAYJSON','_tpbChargeTime','_shakeSpeed','BTB','processSoundTimings','buttonAssistKey1','setupNewGame','processFauxAnimationRequests','processKeyboardDelete','CommandBgType','Tilemap_addShadow','ColorDeath','Scene_Base_terminate','type','Smooth','origin','ShowJS','Window_NameInput_processTouch','Rate1','Window_Selectable_cursorUp','CLOSE_BRACKET','drawAllParams','outlineColor','tpbAcceleration','setupCoreEngine','Game_Action_numRepeats','_gamepadWait','ItemPadding','《《《\x20Page\x20%1\x20》》》\x0a%2\x0a','playBuzzer','Input_shouldPreventDefault','cancel','ColorMaxLvGauge2','playOk','BACK_QUOTE','expGaugeColor1','ACCEPT','addLoadListener','setAction','paramPlus','stencilFunc','GoldChange','updateAnchor','hpGaugeColor2','Scene_Map_createSpriteset_detach','F23','evade','resize','isMVAnimation','_addShadow','openness','SlotRect','startShake','_commandList','itemBackColor1','Bitmap_drawTextOutline','tpGaugeColor2','MDR','_pointAnimationSprites','isArrowPressed','toLocaleString','createTextPopupWindow','buttonY','cursorRight','map','OpenConsole','enemies','SystemSetSideView','drawActorExpGauge','terms','Mirror','WIN_OEM_WSCTRL','determineSideButtonLayoutValid','_startPlaying','KeyItemProtect','Scene_Name_onInputOk','NUMPAD8','updateFrame','ARRAYEVAL','_fauxAnimationQueue','menu','TextPopupShow','getBackgroundOpacity','drawValue','XParamVocab7','OUTELASTIC','Padding','EquipMenu','drawNewParam','ButtonHeight','clearTp','F6key','Settings','process_VisuMZ_CoreEngine_CustomParameters','xparamRateJS','_coreEasingType','INCUBIC','ERROR!\x0a\x0aCore\x20Engine\x20>\x20Plugin\x20Parameters\x20>\x20Button\x20Assist\x20>\x20Split\x20Escape\x0a\x0a','colSpacing','Gold','Origin','startAutoNewGame','pan','fillAll','outlineColorDmg','STENCIL_TEST','isEnabled','getKeyboardInputButtonString','displayX','DETACH_PICTURE_CONTAINER','ItemStyle','scaleX','isFauxAnimationPlaying','pressed','Game_Temp_initialize','Skill-%1-%2','horizontal','asin','EnableNumberInput','pictureId','createFauxAnimation','createTileExtendSprites','thickness','isPlaying','Scene_Base_createWindowLayer','RevertPreserveNumbers','EnableNameInput','imageSmoothingEnabled','([\x5c+\x5c-]\x5cd+)([%％])>','_registerKeyInput','LevelUpFullHp','CLEAR','Game_Interpreter_updateWaitMode','CommandRect','Game_Action_itemEva','nextLevelExp','DTB','_cacheScaleX','createDimmerSprite','constructor','processKeyboardEnd','Graphics_printError','DOUBLE_QUOTE','Enable','img/%1/','isActor','innerHeight','anchorCoreEasing','isAutoColorAffected','AnimationMirrorOffset','param','_inputString','wtypeId','Sprite_StateIcon_updateFrame','startAnimation','moveMenuButtonSideButtonLayout','ShowActorLevel','buttonAssistKey%1','BKSP','Scene_Item_create','SideButtons','MainMenu','command357','currentClass','TRAIT_PARAM','Game_Picture_y','HELP','App','setMoveEasingType','AudioChangeBgmPan','setDisplayPos','GET','〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','offOpacity','MAXHP','_displayX','WARNING:\x20%1\x20has\x20already\x20been\x20declared\x0aand\x20cannot\x20be\x20used\x20as\x20a\x20Quick\x20JS\x20Function','tab','drawGameVersion','hasEncryptedImages','onKeyDownKeysF6F7','Game_Picture_updateMove','refreshScrollBarBitmap','max','setMute','categoryWindowRect','PIPE','Mute','PositionY','F10','scrollX','Scene_Boot_startNormalGame','Game_Picture_updateRotation','initialize','Basic','_subject','pictures','gaugeRate','shake','([\x5c+\x5c-]\x5cd+\x5c.?\x5cd+)>','pow','eventsXyNt','_displayY','mpColor','offColor','worldTransform','AGI','Key%1','EditBgType','savefileInfo','commandWindowRows','note','%2%1%3','_baseTexture','processEscape','SwitchRandomizeOne','buttonAssistWindowSideRect','processAlwaysEscape','createPointAnimationTargets','_bitmap','maxLevel','activate','PictureEasingType','%1〘End\x20Choice\x20Selection〙%1','drawSegment','NONCONVERT','Bitmap_resize','_setupEventHandlers','Window_Base_drawCharacter','buttonAssistOffset5','_targetOffsetY','isSideView','mainAreaHeight','XParamVocab3','updateOpacity','Window_Selectable_processCursorMove','Item-%1-%2','onActorChange','slice','KeySHIFT','([\x5c+\x5c-]\x5cd+)>','drawIcon','requestFauxAnimation','helpAreaTop','_playtestF7Looping','CAPSLOCK','style','Window_NumberInput_processDigitChange','ParseArmorNotetags','GoldRect','_downArrowSprite','gainItem','loadSystem','_buttonAssistWindow','DimColor2','XParamVocab8','keys','exportAllTroopStrings','cursorPageup','isBusy','SceneManager_exit','_baseSprite','standardIconHeight','gaugeLineHeight','applyCoreEasing','getLastPluginCommandInterpreter','Game_BattlerBase_refresh','IconIndex','refreshSpritesetForExtendedTiles','Abbreviation','Game_Battler_initTpbChargeTime','process_VisuMZ_CoreEngine_jsQuickFunctions','Scene_Unlisted','INBOUNCE','Scene_Battle_createSpriteset','textHeight','isAlive','IconParam7','SCROLLBAR','WASD','_mapX','Linear','toLowerCase','_pressed','enemy','Subtitle','VOLUME_MUTE','helpAreaHeight','movePageButtonSideButtonLayout','_digitGroupingEx','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','OptionsRect','create','itemHitImprovedAccuracy','KEEP','\x20Origin:\x20%1','ShiftT_Toggle','evaluate','destroyCoreEngineMarkedBitmaps','sceneTerminationClearEffects','_centerCameraCheck','markCoreEngineModified','setHandler','This\x20scene\x20cannot\x20utilize\x20a\x20Once\x20Parallel!','getLevel','targetScaleX','setClickHandler','traitObjects','ETB','_stored_hpGaugeColor2','areTileShadowsHidden','FontSize','Game_Unit_onBattleStart','tilesetFlags','events','Icon','expGaugeColor2','titles1','ModernControls','_stored_normalColor','UNDERSCORE','touchUI','JSON','CONTEXT_MENU','%1%2','_screenX','updatePositionCoreEngineShakeRand','Window_Base_drawIcon','drawCircle','LUK','Sprite_Picture_updateOrigin','STRUCT','gameTitle','getColor','AudioChangeBgmPitch','_inputSpecialKeyCode','volume','Game_Interpreter_command111','Window_NameInput_initialize','isRepeated','AutoScrollLockY','traitsPi','SHIFT','FunctionName','clearStencil','scrollDown','clearZoom','currentLevelExp','xparamPlusJS','removeFauxAnimation','ExportCurMapText','MAX_SAFE_INTEGER','defineProperty','updateAnglePlus','textSizeEx','MDF','createMenuButton','standardIconWidth','SEPARATOR','_stored_tpCostColor','setActionState','OUTBOUNCE','getColorDataFromPluginParameters','_iconIndex','measureText','snapForBackground','isClosed','changeTileset','META','AntiZoomPictures','format','F21','Sprite_Button_initialize','DocumentTitleFmt','command122','Graphics_defaultStretchMode','smallParamFontSize','PageChange','SkillMenu','sparamRateJS','setWindowPadding','Graphics_centerElement','transform','_viewportSize','contentsBack','batch','PictureShowIcon','shift','Scene_Load','getControllerInputButtonString','Game_BattlerBase_initMembers','connected','Game_Action_itemHit','windowRect','_goldWindow','paramMaxJS','DigitGroupingDamageSprites','_offsetY','paramPlusJS','isOpen','_clickHandler','Version','isWindowMaskingEnabled','push','XParamVocab2','Game_Picture_initRotation','getButtonAssistLocation','ctrlKey','showPicture','DetachMapPictureContainer','_inputWindow','CRSEL','GetParamIcon','updateCoreEasing','ColorMPCost','Window_NameInput_cursorPagedown','drawCurrencyValue','pointY','VisuMZ_3_EventChainReact','this.paramBase(1)','Game_Map_scrollUp','setGuard','PGDN','_patternHeight','list','itemHit','ProfileBgType','clone','AllMaps','isLoopHorizontal','alwaysDash','358630LMziOh','EnableMasking','_tempActor','printError','MultiKeyFmt','ParseWeaponNotetags','COLON','defaultInputMode','autoRemovalTiming','overrideMimeType','successRate','ItemBgType','〘Common\x20Event\x20%1:\x20%2〙\x20Start','catchUnknownError','ENTER_SPECIAL','buttonAssistOffset2','sparamPlus2','isOpening','_shouldPreventDefault','IconSParam0','MRG','AllTroops','CustomParam','buttonAssistKey2','TILDE','pointX','xparamRate1','Game_Picture_scaleX','setupCustomRateCoreEngine','ceil','_originalViewport','tileset','this.paramBase(7)','KeyUnlisted','xparamFlat1','processTouch','buttonAssistText5','dropItems','_lastPluginCommandInterpreter','statusWindowRect','buttonAssistKey5','right','_windowskin','process_VisuMZ_CoreEngine_ControllerButtons','Sprite_Gauge_currentValue','868116TnytEN','_listWindow','CreateBattleSystemID','updateData','_pictureCoordinatesWindow','animationShouldMirror','default','original','process_VisuMZ_CoreEngine_Notetags','playBgs','DisplayedParams','mainAreaBottom','allowShiftScrolling','buttonAssistCancel','ShiftR_Toggle','X:\x20%1','show','buttonAssistText3','INOUTBACK','windowOpacity','picture','fontSize','QUOTE','sellWindowRect','OUTQUINT','_forcedBattleSys','DurationPerChat','_drawTextShadow','DigitGroupingExText','backspace','Window_Base_destroyContents','seVolume','pop','Game_Picture_scaleY','_numberWindow','1275927MjiqPh','Game_Map_changeTileset','globalAlpha','axes','ScreenResolution','OnLoadJS','anglePlus','deathColor','GroupDigits','updateOpen','playTestF7','IconParam5','maxHorz','SParamVocab5','charging','showDevTools','pitch','Window_Selectable_processTouch','#%1','paramFlatJS','BlendMode','CancelText','HYPHEN_MINUS','INOUTCUBIC','IDs','targetEvaRate','charAt','getInputButtonString','_coreEngineShakeStyle','_hideButtons','createLowerLayer','tileHeight','_currentBgs','Page','updateShadow','canAttack','DELETE','allIcons','setEnemyAction','_hp','SParamVocab7','OUTSINE','BgFilename1','Unnamed','loadWindowskin','_textPopupWindow','Power','canEquip','currentExp','Enemy','processHandling','BTestWeapons','Window_NameInput_cursorUp','HRG','【%1】\x0a','makeActionList','PA1','faceHeight','_pagedownButton','_lastGamepad','paramRate1','animationId','Scene_Status_create','Plus','INOUTELASTIC','_editWindow','prepareNextScene','gaugeHeight','_makeFontNameText','padZero','setCommonEvent','MCR','processCursorMoveModernControls','MvAnimationRate','onlyfilename','$dataMap','sin','%1/','TargetAngle','bitmapWidth','deflate','updateScrollBarVisibility','_movementDuration','font','createJsQuickFunction','ShopMenu','Input_onKeyDown','onNameOk','MAT','F14','log','visible','paramName','PictureRotate','checkSmartEventCollision','_maxDigits','Window_Base_drawFace','cursorDown','loadTitle2','setBackgroundType','en-US','F17','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','clear','OutlineColorDmg','faces','_cacheScaleY','_previousClass','mirror','updateCurrentEvent','_stored_mpCostColor','AnimationID','Scene_Boot_loadSystemImages','_timeDuration','encounterStep','itemEva','MenuBg','useDigitGroupingEx','isItem','targetX','updatePlayTestF7','updateMotion','boxHeight','ActorRect','isEventTest','VisuMZ_2_BattleSystemOTB','CommandList','ItemHeight','_statusEquipWindow','SplitEscape','createTilemap','XParamVocab6','_stored_ctGaugeColor2','_image','Class-%1-%2','Scene_Map_createMenuButton','_stored_ctGaugeColor1','updateFrameCoreEngine','OffBarColor','ExportStrFromAllTroops','isAnimationForEach','Flat1','OUTCIRC','removeOnceParallelInterpreter','IconSParam2','PictureEraseRange','makeAutoBattleActions','buttonAssistSwitch','initRotationCoreEngine','start','src','drawGameSubtitle','dashToggle','uiAreaHeight','_scaleX','ATK','SParamVocab2','OPEN_CURLY_BRACKET','integer','checkScrollBarBitmap','setHome','xdg-open','atypeId','_refreshBack','GoldOverlap','ColorHPGauge1','_changingClass','_pollGamepads','setCoreEngineScreenShakeStyle','onMoveEnd','NUMPAD3','updateOnceParallelInterpreters','F19','isInstanceOfSceneMap','Saved\x20file\x20as\x20%1\x20in\x20project\x20folder.','IconXParam7','isSceneMap','SEMICOLON','usableSkills','paramRate2','isBottomButtonMode','maxScrollX','SubfolderParse','CrisisRate','updateBackOpacity','ParseStateNotetags','%1〘Choice\x20%2〙\x20%3%1','actor','framesMin','mmp','paramWidth','targetObjects','INSINE','deselect','buyWindowRect','buttons','playCursor','BattleManager_processEscape','createKeyJS','this.paramBase(','code','CorrectSkinBleeding','Pixelated','iconWidth','sv_enemies','meVolume','sparam','Scene_Battle_update','nw.gui','isSideButtonLayout','IconSet','drawing','SceneManager_isGameActive','hpColor','Scene_Options_create','_storedMapText','createBackground','INOUTQUAD','deactivate','canUse','buttonAssistOk','exportAllMapStrings','PAUSE','cursorPagedown','setAttack','_timerSprite','ButtonFadeSpeed','number','fillRect','Sprite_Button_updateOpacity','StatusParamsRect','goldWindowRect','ColorGaugeBack','_index','child_process','initButtonHidden','string','switchModes','prototype','_centerElement','IconParam3','refreshWithTextCodeSupport','createTextState','parseForcedGameTroopSettingsCoreEngine','FUNC','stretch','BattleSystem','DigitGroupingLocale','GREATER_THAN','WIN_OEM_BACKTAB','ENTER','isSceneBattle','bitmap','getLastGamepadUsed','Game_Screen_initialize','FTB','Input_updateGamepadState','isSpecialCode','onEscapeSuccess','FontShadows','updateBattleVariables','makeCoreEngineCommandList','_menuButton','loadGameImagesCoreEngine','playTestF6','rowSpacing','Window_StatusBase_drawActorLevel','NUMPAD6','calcEasing','itemHeight','AccuracyBoost','PLUS','runCombinedScrollingTextAsCode','processDigitChange','Map%1.json','levelUp','CommonEventID','ColorExpGauge2','scrollY','altKey','INEXPO','Window_refreshBack','AMPERSAND','resetTextColor','playTestShiftT','_fauxAnimationSprites','FINAL','isTileExtended','SwitchRandomizeRange','IconXParam1','_shakeDuration','VisuMZ_2_BattleSystemFTB','Scene_Battle_createSpritesetFix','AudioChangeBgmVolume','SystemSetBattleSystem','Scene_GameEnd_createBackground','CTRL','mainAreaHeightSideButtonLayout','NON_FRAME','battlebacks2','removeAnimationFromContainer','DOLLAR','isCollidedWithEvents','_stypeId','CTB','ScaleY','mpCostColor','bgs','setupFont','buttonAssistText%1','_skillTypeWindow','Game_Unit_onBattleEnd','offset','Game_Character_processMoveCommand','paintOpacity','Color','SkillTypeRect','Window_Base_createTextState','_updateGamepadState','onClick','keypress','numberShowButton','updatePosition','OPEN_PAREN','HelpRect','enter','targetY','updateScrollBarPosition','PictureID','_movementWholeDuration','split','IconXParam6','_backSprite2','Duration','_mp','checkSubstitute','CLOSE_CURLY_BRACKET','_srcBitmap','apply','createSubSprite','measureTextWidth','down','_saveFileID','trim','_number','_closing','gold','commandWindowRect','_pictureName','maxCols','_hideTileShadows','Layer','_tileExtendSprites','Window_Selectable_itemRect','active','Bitmap_drawText','rgba(0,\x200,\x200,\x201.0)','initCoreEngineScreenShake','applyForcedGameTroopSettingsCoreEngine','endAction','buttonAreaHeight','_backSprite1','onInputBannedWords','join','calcCoreEasing','needsUpdate','Sprite_Animation_processSoundTimings','position','layoutSettings','itemWindowRect','_scrollBarVert','_scaleY','itemSuccessRate','Game_Interpreter_command105','makeInputButtonString','playCancel','tpCostColor','destroyed','inbounce','CIRCUMFLEX','NameInputMessage','profileWindowRect','PRINTSCREEN','ExtJS','moveCancelButtonSideButtonLayout','EQUALS','_destroyInternalTextures'];_0x2db6=function(){return _0x4591e9;};return _0x2db6();}(function(_0x4ac9fc,_0x3d9ffc){const _0x2ba281=_0x484b,_0x2ef2a8=_0x4ac9fc();while(!![]){try{const _0x385525=-parseInt(_0x2ba281(0x313))/0x1+parseInt(_0x2ba281(0x6e8))/0x2+parseInt(_0x2ba281(0x70b))/0x3+-parseInt(_0x2ba281(0x32c))/0x4*(parseInt(_0x2ba281(0x2f7))/0x5)+parseInt(_0x2ba281(0x8bb))/0x6+parseInt(_0x2ba281(0x8e8))/0x7*(-parseInt(_0x2ba281(0x1b1))/0x8)+parseInt(_0x2ba281(0x209))/0x9*(parseInt(_0x2ba281(0x6bb))/0xa);if(_0x385525===_0x3d9ffc)break;else _0x2ef2a8['push'](_0x2ef2a8['shift']());}catch(_0x18e79b){_0x2ef2a8['push'](_0x2ef2a8['shift']());}}}(_0x2db6,0x9a43c));var label=_0x19616c(0x4f5),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x19616c(0x1b7)](function(_0x4d6648){const _0x43554d=_0x19616c;return _0x4d6648['status']&&_0x4d6648[_0x43554d(0x355)][_0x43554d(0x8df)]('['+label+']');})[0x0];VisuMZ[label][_0x19616c(0x568)]=VisuMZ[label][_0x19616c(0x568)]||{},VisuMZ[_0x19616c(0x30c)]=function(_0x185fc4,_0x23606a){const _0x225bc8=_0x19616c;for(const _0x49b985 in _0x23606a){if(_0x49b985['match'](/(.*):(.*)/i)){const _0x578ad6=String(RegExp['$1']),_0x1ece97=String(RegExp['$2'])[_0x225bc8(0x319)]()['trim']();let _0x3c0906,_0x5d0e3b,_0x19bd92;switch(_0x1ece97){case _0x225bc8(0x2fd):_0x3c0906=_0x23606a[_0x49b985]!==''?Number(_0x23606a[_0x49b985]):0x0;break;case _0x225bc8(0x347):_0x5d0e3b=_0x23606a[_0x49b985]!==''?JSON['parse'](_0x23606a[_0x49b985]):[],_0x3c0906=_0x5d0e3b[_0x225bc8(0x54c)](_0x249f67=>Number(_0x249f67));break;case'EVAL':_0x3c0906=_0x23606a[_0x49b985]!==''?eval(_0x23606a[_0x49b985]):null;break;case _0x225bc8(0x55a):_0x5d0e3b=_0x23606a[_0x49b985]!==''?JSON[_0x225bc8(0x1ca)](_0x23606a[_0x49b985]):[],_0x3c0906=_0x5d0e3b[_0x225bc8(0x54c)](_0x41d924=>eval(_0x41d924));break;case _0x225bc8(0x64e):_0x3c0906=_0x23606a[_0x49b985]!==''?JSON[_0x225bc8(0x1ca)](_0x23606a[_0x49b985]):'';break;case _0x225bc8(0x50c):_0x5d0e3b=_0x23606a[_0x49b985]!==''?JSON[_0x225bc8(0x1ca)](_0x23606a[_0x49b985]):[],_0x3c0906=_0x5d0e3b[_0x225bc8(0x54c)](_0x1c163d=>JSON[_0x225bc8(0x1ca)](_0x1c163d));break;case _0x225bc8(0x7ff):_0x3c0906=_0x23606a[_0x49b985]!==''?new Function(JSON[_0x225bc8(0x1ca)](_0x23606a[_0x49b985])):new Function(_0x225bc8(0x342));break;case _0x225bc8(0x967):_0x5d0e3b=_0x23606a[_0x49b985]!==''?JSON[_0x225bc8(0x1ca)](_0x23606a[_0x49b985]):[],_0x3c0906=_0x5d0e3b[_0x225bc8(0x54c)](_0x5b2329=>new Function(JSON['parse'](_0x5b2329)));break;case _0x225bc8(0x2dc):_0x3c0906=_0x23606a[_0x49b985]!==''?String(_0x23606a[_0x49b985]):'';break;case _0x225bc8(0x224):_0x5d0e3b=_0x23606a[_0x49b985]!==''?JSON['parse'](_0x23606a[_0x49b985]):[],_0x3c0906=_0x5d0e3b[_0x225bc8(0x54c)](_0x516352=>String(_0x516352));break;case _0x225bc8(0x657):_0x19bd92=_0x23606a[_0x49b985]!==''?JSON[_0x225bc8(0x1ca)](_0x23606a[_0x49b985]):{},_0x185fc4[_0x578ad6]={},VisuMZ[_0x225bc8(0x30c)](_0x185fc4[_0x578ad6],_0x19bd92);continue;case _0x225bc8(0x302):_0x5d0e3b=_0x23606a[_0x49b985]!==''?JSON[_0x225bc8(0x1ca)](_0x23606a[_0x49b985]):[],_0x3c0906=_0x5d0e3b[_0x225bc8(0x54c)](_0x1a3379=>VisuMZ[_0x225bc8(0x30c)]({},JSON['parse'](_0x1a3379)));break;default:continue;}_0x185fc4[_0x578ad6]=_0x3c0906;}}return _0x185fc4;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x610)]=SceneManager[_0x19616c(0x8bf)],SceneManager[_0x19616c(0x8bf)]=function(){const _0x3aced2=_0x19616c;VisuMZ['CoreEngine'][_0x3aced2(0x610)][_0x3aced2(0x4a5)](this);if(Utils[_0x3aced2(0x8ad)]>=_0x3aced2(0x91d)){if(typeof nw===_0x3aced2(0x1ed))nw[_0x3aced2(0x5b3)]['quit']();}if(Utils[_0x3aced2(0x8ad)]>=_0x3aced2(0x23b)){if(typeof nw===_0x3aced2(0x1ed))nw[_0x3aced2(0x5b3)][_0x3aced2(0x213)]();}},(_0x263bbd=>{const _0x4885f8=_0x19616c,_0x4e5204=_0x263bbd[_0x4885f8(0x3e9)];for(const _0x48eec9 of dependencies){if(!Imported[_0x48eec9]){alert(_0x4885f8(0x62e)['format'](_0x4e5204,_0x48eec9)),SceneManager['exit']();break;}}const _0xf33896=_0x263bbd[_0x4885f8(0x355)];if(_0xf33896[_0x4885f8(0x490)](/\[Version[ ](.*?)\]/i)){const _0x1f6d06=Number(RegExp['$1']);_0x1f6d06!==VisuMZ[label][_0x4885f8(0x236)]&&(alert(_0x4885f8(0x26e)[_0x4885f8(0x67e)](_0x4e5204,_0x1f6d06)),SceneManager[_0x4885f8(0x8bf)]());}if(_0xf33896[_0x4885f8(0x490)](/\[Tier[ ](\d+)\]/i)){const _0xaaf689=Number(RegExp['$1']);_0xaaf689<tier?(alert(_0x4885f8(0x771)['format'](_0x4e5204,_0xaaf689,tier)),SceneManager[_0x4885f8(0x8bf)]()):tier=Math[_0x4885f8(0x5c3)](_0xaaf689,tier);}VisuMZ[_0x4885f8(0x30c)](VisuMZ[label][_0x4885f8(0x568)],_0x263bbd[_0x4885f8(0x353)]);})(pluginData),((()=>{const _0x3e1b53=_0x19616c;if(VisuMZ[_0x3e1b53(0x4f5)][_0x3e1b53(0x568)]['QoL'][_0x3e1b53(0x7c1)]??!![])for(const _0x48e201 in $plugins){const _0x4dc616=$plugins[_0x48e201];_0x4dc616[_0x3e1b53(0x3e9)][_0x3e1b53(0x490)](/(.*)\/(.*)/i)&&(_0x4dc616[_0x3e1b53(0x3e9)]=String(RegExp['$2'][_0x3e1b53(0x862)]()));}})()),PluginManager[_0x19616c(0x923)](pluginData['name'],_0x19616c(0x1fc),_0x1d6b1a=>{const _0x2bf94a=_0x19616c;if(!SceneManager['_scene'])return;if(!SceneManager['_scene'][_0x2bf94a(0x4f0)])return;VisuMZ[_0x2bf94a(0x30c)](_0x1d6b1a,_0x1d6b1a);const _0x41679d=Math[_0x2bf94a(0x45c)](_0x1d6b1a[_0x2bf94a(0x6d4)]),_0x92508e=Math[_0x2bf94a(0x45c)](_0x1d6b1a[_0x2bf94a(0x6ad)]);$gameTemp[_0x2bf94a(0x3db)](_0x41679d,_0x92508e,_0x1d6b1a[_0x2bf94a(0x77a)],_0x1d6b1a[_0x2bf94a(0x552)],_0x1d6b1a[_0x2bf94a(0x5c7)]);}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x830),_0x42fe83=>{const _0xa60c5b=_0x19616c;VisuMZ[_0xa60c5b(0x30c)](_0x42fe83,_0x42fe83);const _0x5186b9=Math[_0xa60c5b(0x45c)](_0x42fe83[_0xa60c5b(0x65c)])['clamp'](0x0,0x64),_0x5e7efa=AudioManager[_0xa60c5b(0x4fc)];_0x5e7efa&&(_0x5e7efa[_0xa60c5b(0x65c)]=_0x5186b9,_0x5e7efa[_0xa60c5b(0x23c)]=AudioManager[_0xa60c5b(0x369)][_0xa60c5b(0x488)](),AudioManager[_0xa60c5b(0x447)](_0x5e7efa),AudioManager[_0xa60c5b(0x42d)](_0x5e7efa,_0x5e7efa[_0xa60c5b(0x23c)]),AudioManager[_0xa60c5b(0x369)][_0xa60c5b(0x555)](_0x5e7efa[_0xa60c5b(0x23c)]));}),PluginManager['registerCommand'](pluginData[_0x19616c(0x3e9)],_0x19616c(0x65a),_0x103c38=>{const _0x391e=_0x19616c;VisuMZ[_0x391e(0x30c)](_0x103c38,_0x103c38);const _0x1730b1=Math[_0x391e(0x45c)](_0x103c38[_0x391e(0x71b)])[_0x391e(0x4d4)](0x32,0x96),_0x43e6e9=AudioManager[_0x391e(0x4fc)];_0x43e6e9&&(_0x43e6e9[_0x391e(0x71b)]=_0x1730b1,_0x43e6e9[_0x391e(0x23c)]=AudioManager[_0x391e(0x369)][_0x391e(0x488)](),AudioManager[_0x391e(0x447)](_0x43e6e9),AudioManager['playBgm'](_0x43e6e9,_0x43e6e9[_0x391e(0x23c)]),AudioManager[_0x391e(0x369)][_0x391e(0x555)](_0x43e6e9[_0x391e(0x23c)]));}),PluginManager[_0x19616c(0x923)](pluginData['name'],_0x19616c(0x5b5),_0x2860cd=>{const _0x19e467=_0x19616c;VisuMZ[_0x19e467(0x30c)](_0x2860cd,_0x2860cd);const _0x1c718f=Math['round'](_0x2860cd[_0x19e467(0x572)])[_0x19e467(0x4d4)](-0x64,0x64),_0xd68db3=AudioManager[_0x19e467(0x4fc)];_0xd68db3&&(_0xd68db3[_0x19e467(0x572)]=_0x1c718f,_0xd68db3['pos']=AudioManager[_0x19e467(0x369)]['seek'](),AudioManager[_0x19e467(0x447)](_0xd68db3),AudioManager['playBgm'](_0xd68db3,_0xd68db3[_0x19e467(0x23c)]),AudioManager[_0x19e467(0x369)]['_startPlaying'](_0xd68db3[_0x19e467(0x23c)]));}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x4a6),_0x549155=>{const _0x4ff4e3=_0x19616c;VisuMZ['ConvertParams'](_0x549155,_0x549155);const _0x57ed97=Math[_0x4ff4e3(0x45c)](_0x549155[_0x4ff4e3(0x65c)])['clamp'](0x0,0x64),_0x586648=AudioManager[_0x4ff4e3(0x72b)];_0x586648&&(_0x586648[_0x4ff4e3(0x65c)]=_0x57ed97,_0x586648[_0x4ff4e3(0x23c)]=AudioManager[_0x4ff4e3(0x336)][_0x4ff4e3(0x488)](),AudioManager['updateBgsParameters'](_0x586648),AudioManager[_0x4ff4e3(0x6f1)](_0x586648,_0x586648[_0x4ff4e3(0x23c)]),AudioManager['_bgsBuffer']['_startPlaying'](_0x586648[_0x4ff4e3(0x23c)]));}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x266),_0x36e6d5=>{const _0x308c08=_0x19616c;VisuMZ[_0x308c08(0x30c)](_0x36e6d5,_0x36e6d5);const _0x392e32=Math[_0x308c08(0x45c)](_0x36e6d5[_0x308c08(0x71b)])[_0x308c08(0x4d4)](0x32,0x96),_0x218818=AudioManager[_0x308c08(0x72b)];_0x218818&&(_0x218818[_0x308c08(0x71b)]=_0x392e32,_0x218818[_0x308c08(0x23c)]=AudioManager[_0x308c08(0x336)][_0x308c08(0x488)](),AudioManager[_0x308c08(0x378)](_0x218818),AudioManager[_0x308c08(0x6f1)](_0x218818,_0x218818[_0x308c08(0x23c)]),AudioManager[_0x308c08(0x336)][_0x308c08(0x555)](_0x218818[_0x308c08(0x23c)]));}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x8ab),_0x536a3f=>{const _0x256a70=_0x19616c;VisuMZ[_0x256a70(0x30c)](_0x536a3f,_0x536a3f);const _0x125296=Math[_0x256a70(0x45c)](_0x536a3f['pan'])[_0x256a70(0x4d4)](-0x64,0x64),_0x135944=AudioManager[_0x256a70(0x72b)];_0x135944&&(_0x135944['pan']=_0x125296,_0x135944[_0x256a70(0x23c)]=AudioManager[_0x256a70(0x336)]['seek'](),AudioManager[_0x256a70(0x378)](_0x135944),AudioManager[_0x256a70(0x6f1)](_0x135944,_0x135944[_0x256a70(0x23c)]),AudioManager['_bgsBuffer'][_0x256a70(0x555)](_0x135944['pos']));}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x976),_0x493032=>{const _0x224443=_0x19616c;if(!$gameTemp['isPlaytest']())return;const _0x122626=Input[_0x224443(0x94e)]();console[_0x224443(0x765)](_0x122626);}),PluginManager['registerCommand'](pluginData[_0x19616c(0x3e9)],_0x19616c(0x21a),_0x2f4d20=>{const _0xe58104=_0x19616c;if(!$gameTemp[_0xe58104(0x24a)]())return;if(!Utils[_0xe58104(0x8ae)]())return;SceneManager[_0xe58104(0x38c)][_0xe58104(0x293)]=![],VisuMZ[_0xe58104(0x4f5)][_0xe58104(0x3cb)]();}),PluginManager[_0x19616c(0x923)](pluginData['name'],_0x19616c(0x42e),_0x40939d=>{const _0x4cc2e5=_0x19616c;if(!$gameTemp[_0x4cc2e5(0x24a)]())return;if(!Utils[_0x4cc2e5(0x8ae)]())return;SceneManager[_0x4cc2e5(0x38c)][_0x4cc2e5(0x293)]=![],VisuMZ['CoreEngine'][_0x4cc2e5(0x796)]();}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x66a),_0x25c324=>{const _0xedfdf7=_0x19616c;if(!$gameTemp[_0xedfdf7(0x24a)]())return;if(!Utils['isNwjs']())return;if(!$gameMap)return;if($gameMap[_0xedfdf7(0x4fa)]()<=0x0)return;VisuMZ[_0xedfdf7(0x30c)](_0x25c324,_0x25c324);const _0x4282e7=_0xedfdf7(0x8fa)[_0xedfdf7(0x67e)]($gameMap[_0xedfdf7(0x4fa)]()[_0xedfdf7(0x750)](0x3)),_0x562f8e=VisuMZ[_0xedfdf7(0x4f5)][_0xedfdf7(0x4d0)]($gameMap[_0xedfdf7(0x4fa)]());VisuMZ['CoreEngine'][_0xedfdf7(0x399)](_0x562f8e,_0x4282e7,!![]);}),PluginManager[_0x19616c(0x923)](pluginData['name'],_0x19616c(0x38a),_0x5bb855=>{const _0x5b8a3c=_0x19616c;if(!$gameTemp[_0x5b8a3c(0x24a)]())return;if(!Utils[_0x5b8a3c(0x8ae)]())return;if(!$gameParty[_0x5b8a3c(0x38f)]())return;VisuMZ[_0x5b8a3c(0x30c)](_0x5bb855,_0x5bb855);const _0x3daf32=_0x5b8a3c(0x905)[_0x5b8a3c(0x67e)]($gameTroop['_troopId'][_0x5b8a3c(0x750)](0x4)),_0x3949a0=VisuMZ[_0x5b8a3c(0x4f5)]['ExtractStrFromTroop']($gameTroop['_troopId']);VisuMZ[_0x5b8a3c(0x4f5)][_0x5b8a3c(0x399)](_0x3949a0,_0x3daf32,!![]);}),VisuMZ['CoreEngine'][_0x19616c(0x399)]=function(_0x415910,_0x16cfd9,_0x35b99a){const _0x5c0d92=_0x19616c,_0x3ba377=require('fs');let _0x1beb1c='Exported_Script_%1.txt'['format'](_0x16cfd9||'0');_0x3ba377[_0x5c0d92(0x3fd)](_0x1beb1c,_0x415910,_0x2a1873=>{const _0x10e8ad=_0x5c0d92;if(_0x2a1873)throw err;else _0x35b99a&&alert(_0x10e8ad(0x7b9)[_0x10e8ad(0x67e)](_0x1beb1c));});},VisuMZ['CoreEngine'][_0x19616c(0x3cb)]=function(){const _0x415b0e=_0x19616c,_0x2328ba=[];for(const _0x428d34 of $dataMapInfos){if(!_0x428d34)continue;_0x2328ba['push'](_0x428d34['id']);}const _0x1cbfd9=_0x2328ba['length']*0x64+Math[_0x415b0e(0x222)](0x64);alert('Export\x20Map\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)'[_0x415b0e(0x67e)](_0x1cbfd9)),this[_0x415b0e(0x7e2)]=[],this[_0x415b0e(0x3e5)]=$dataMap;for(const _0x5b86a4 of _0x2328ba){VisuMZ[_0x415b0e(0x4f5)][_0x415b0e(0x382)](_0x5b86a4);}setTimeout(VisuMZ[_0x415b0e(0x4f5)]['exportAllMapStrings']['bind'](this),_0x1cbfd9);},VisuMZ['CoreEngine'][_0x19616c(0x382)]=function(_0x25e082){const _0x421719=_0x19616c,_0xebf924=_0x421719(0x81d)['format'](_0x25e082[_0x421719(0x750)](0x3)),_0x54e1c3=new XMLHttpRequest(),_0x4f3b83=_0x421719(0x32b)+_0xebf924;_0x54e1c3[_0x421719(0x891)](_0x421719(0x5b7),_0x4f3b83),_0x54e1c3[_0x421719(0x6c4)](_0x421719(0x432)),_0x54e1c3['onload']=()=>this[_0x421719(0x430)](_0x54e1c3,_0x25e082,_0xebf924,_0x4f3b83),_0x54e1c3[_0x421719(0x434)]=()=>DataManager['onXhrError'](_0x421719(0x756),_0xebf924,_0x4f3b83),_0x54e1c3[_0x421719(0x1e4)]();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x430)]=function(_0x920edb,_0x20d0db,_0x2d0ced,_0x35081f){const _0xc303fc=_0x19616c;$dataMap=JSON[_0xc303fc(0x1ca)](_0x920edb[_0xc303fc(0x1c8)]),DataManager[_0xc303fc(0x337)]($dataMap),this[_0xc303fc(0x7e2)][_0x20d0db]=VisuMZ[_0xc303fc(0x4f5)]['ExtractStrFromMap'](_0x20d0db),$dataMap=this[_0xc303fc(0x3e5)];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x7e8)]=function(){const _0x560b90=_0x19616c,_0x4a78cd=_0x560b90(0x6b8);this['_storedMapText'][_0x560b90(0x223)](undefined)[_0x560b90(0x223)]('')['remove'](null);const _0xf7dd4=this[_0x560b90(0x7e2)]['join'](_0x560b90(0x4d6))['trim']();VisuMZ[_0x560b90(0x4f5)]['ExportString'](_0xf7dd4,_0x4a78cd,!![]),SceneManager['_scene']['_active']=!![];},VisuMZ['CoreEngine']['ExtractStrFromMap']=function(_0x940776){const _0x22320a=_0x19616c;if(!$dataMap)return'';let _0x1baa27='█'[_0x22320a(0x331)](0x46)+'\x0a\x0a',_0x242f99='═'[_0x22320a(0x331)](0x46)+'\x0a\x0a',_0x335713='';this[_0x22320a(0x939)]=0x0;for(const _0xb0bced of $dataMap[_0x22320a(0x646)]){if(!_0xb0bced)continue;let _0x5ca871=_0xb0bced['id'],_0x39021c=_0xb0bced[_0x22320a(0x3e9)],_0x464090=_0xb0bced[_0x22320a(0x415)];for(const _0x52399c of _0x464090){const _0xc2e97c=_0x464090[_0x22320a(0x37c)](_0x52399c)+0x1;let _0x430bcd=_0x242f99+'《《《\x20Event\x20%1:\x20%2,\x20Page\x20%3\x20》》》\x0a%4\x0a',_0x4cd3b2=VisuMZ['CoreEngine'][_0x22320a(0x8b7)](_0x52399c[_0x22320a(0x6b4)]);if(_0x4cd3b2[_0x22320a(0x375)]>0x0){if(_0x335713[_0x22320a(0x375)]>0x0)_0x335713+=_0x242f99+_0x22320a(0x4d6);else{const _0x49e1d7=$dataMapInfos[_0x940776]['name'];_0x335713+=_0x1baa27+_0x22320a(0x215)[_0x22320a(0x67e)](_0x940776,_0x49e1d7||_0x22320a(0x736))+_0x1baa27;}_0x335713+=_0x430bcd[_0x22320a(0x67e)](_0x5ca871,_0x39021c,_0xc2e97c,_0x4cd3b2);}}}return _0x335713['length']>0x0&&(_0x335713+=_0x242f99),_0x335713;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x796)]=function(){const _0x1b7cb6=_0x19616c,_0xee9e46=$dataTroops['length']*0xa+Math[_0x1b7cb6(0x222)](0xa);alert('Export\x20Troop\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)'['format'](_0xee9e46));const _0x34ba51=[];for(const _0x397e63 of $dataTroops){if(!_0x397e63)continue;const _0x186747=_0x397e63['id'];_0x34ba51[_0x186747]=VisuMZ[_0x1b7cb6(0x4f5)][_0x1b7cb6(0x3f1)](_0x186747);}setTimeout(VisuMZ[_0x1b7cb6(0x4f5)]['exportAllTroopStrings'][_0x1b7cb6(0x911)](this,_0x34ba51),_0xee9e46);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x3f1)]=function(_0x5228a6){const _0x4a7308=_0x19616c;if(!$dataTroops[_0x5228a6])return'';let _0x2df5f6='█'[_0x4a7308(0x331)](0x46)+'\x0a\x0a',_0x4e5375='═'['repeat'](0x46)+'\x0a\x0a',_0x142b94='';this[_0x4a7308(0x939)]=0x0;const _0x302b2e=$dataTroops[_0x5228a6];let _0x2f54b5=_0x302b2e['pages'];for(const _0x415ff5 of _0x2f54b5){const _0x2253e4=_0x2f54b5[_0x4a7308(0x37c)](_0x415ff5)+0x1;let _0x2ab7ca=_0x4e5375+_0x4a7308(0x528),_0xecf47e=VisuMZ[_0x4a7308(0x4f5)][_0x4a7308(0x8b7)](_0x415ff5['list']);_0xecf47e[_0x4a7308(0x375)]>0x0&&(_0x142b94[_0x4a7308(0x375)]>0x0?_0x142b94+=_0x4e5375+_0x4a7308(0x4d6):_0x142b94+=_0x2df5f6+_0x4a7308(0x5b8)[_0x4a7308(0x67e)](_0x5228a6,_0x302b2e[_0x4a7308(0x3e9)]||_0x4a7308(0x736))+_0x2df5f6,_0x142b94+=_0x2ab7ca[_0x4a7308(0x67e)](_0x2253e4,_0xecf47e));}return _0x142b94[_0x4a7308(0x375)]>0x0&&(_0x142b94+=_0x4e5375),_0x142b94;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x60d)]=function(_0x56437b){const _0x316631=_0x19616c,_0x3bc846=_0x316631(0x6d0);_0x56437b['remove'](undefined)[_0x316631(0x223)]('')[_0x316631(0x223)](null);const _0x308a82=_0x56437b[_0x316631(0x876)]('\x0a\x0a\x0a\x0a\x0a')[_0x316631(0x862)]();VisuMZ[_0x316631(0x4f5)]['ExportString'](_0x308a82,_0x3bc846,!![]),SceneManager[_0x316631(0x38c)][_0x316631(0x293)]=!![];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x8b7)]=function(_0x5d92ae){const _0x2d9d65=_0x19616c;let _0x5e287d='\x0a'+'─'['repeat'](0x46)+'\x0a',_0x44d1fd='\x0a'+'┄'[_0x2d9d65(0x331)](0x46)+'\x0a',_0x490f6a='';for(const _0x3a4328 of _0x5d92ae){if(!_0x3a4328)continue;if(_0x3a4328[_0x2d9d65(0x7d3)]===0x65)_0x490f6a+=_0x5e287d+'\x0a',_0x490f6a+='〘Show\x20Text〙\x0a',_0x3a4328[_0x2d9d65(0x353)][0x4]!==''&&_0x3a4328[_0x2d9d65(0x353)][0x4]!==undefined&&(_0x490f6a+=_0x2d9d65(0x741)[_0x2d9d65(0x67e)](_0x3a4328[_0x2d9d65(0x353)][0x4]));else{if(_0x3a4328['code']===0x191)_0x490f6a+='%1\x0a'[_0x2d9d65(0x67e)](_0x3a4328['parameters'][0x0]);else{if(_0x3a4328['code']===0x192)_0x490f6a+=_0x5e287d,_0x490f6a+=_0x2d9d65(0x7c5)[_0x2d9d65(0x67e)](_0x44d1fd,_0x3a4328['parameters'][0x0]+0x1,_0x3a4328[_0x2d9d65(0x353)][0x1]);else{if(_0x3a4328[_0x2d9d65(0x7d3)]===0x193)_0x490f6a+=_0x5e287d,_0x490f6a+='%1〘Choice\x20Cancel〙%1'['format'](_0x44d1fd);else{if(_0x3a4328['code']===0x194)_0x490f6a+=_0x5e287d,_0x490f6a+=_0x2d9d65(0x5eb)[_0x2d9d65(0x67e)](_0x44d1fd);else{if(_0x3a4328[_0x2d9d65(0x7d3)]===0x69)_0x490f6a+=_0x5e287d+'\x0a',_0x490f6a+=_0x2d9d65(0x1ba);else{if(_0x3a4328[_0x2d9d65(0x7d3)]===0x6c)_0x490f6a+=_0x5e287d+'\x0a',_0x490f6a+='》Comment《\x0a%1\x0a'[_0x2d9d65(0x67e)](_0x3a4328['parameters'][0x0]);else{if(_0x3a4328['code']===0x198)_0x490f6a+=_0x2d9d65(0x981)[_0x2d9d65(0x67e)](_0x3a4328[_0x2d9d65(0x353)][0x0]);else{if(_0x3a4328[_0x2d9d65(0x7d3)]===0x75){const _0x58a2a9=$dataCommonEvents[_0x3a4328[_0x2d9d65(0x353)][0x0]];if(_0x58a2a9&&this[_0x2d9d65(0x939)]<=0xa){this['_commonEventLayers']++;let _0x1da02f=VisuMZ[_0x2d9d65(0x4f5)][_0x2d9d65(0x8b7)](_0x58a2a9[_0x2d9d65(0x6b4)]);_0x1da02f[_0x2d9d65(0x375)]>0x0&&(_0x490f6a+=_0x5e287d,_0x490f6a+=_0x44d1fd,_0x490f6a+=_0x2d9d65(0x6c7)[_0x2d9d65(0x67e)](_0x58a2a9['id'],_0x58a2a9[_0x2d9d65(0x3e9)]),_0x490f6a+=_0x44d1fd,_0x490f6a+=_0x1da02f,_0x490f6a+=_0x44d1fd,_0x490f6a+='〘Common\x20Event\x20%1:\x20%2〙\x20End'['format'](_0x58a2a9['id'],_0x58a2a9['name']),_0x490f6a+=_0x44d1fd),this['_commonEventLayers']--;}}}}}}}}}}}return _0x490f6a[_0x2d9d65(0x375)]>0x0&&(_0x490f6a+=_0x5e287d),_0x490f6a;},PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x3ea),_0x1156f7=>{const _0x4aaade=_0x19616c;VisuMZ[_0x4aaade(0x30c)](_0x1156f7,_0x1156f7);const _0x530b22=_0x1156f7['URL'];VisuMZ['openURL'](_0x530b22);}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x535),_0x2f285a=>{const _0x50deab=_0x19616c;VisuMZ[_0x50deab(0x30c)](_0x2f285a,_0x2f285a);const _0x12ce62=_0x2f285a[_0x50deab(0x2d7)]||0x0;$gameParty[_0x50deab(0x8c2)](_0x12ce62);}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x1ec),_0xf72f12=>{const _0x2315b7=_0x19616c;if(!SceneManager['isSceneMap']())return;VisuMZ[_0x2315b7(0x30c)](_0xf72f12,_0xf72f12);const _0x3c39cf=_0xf72f12[_0x2315b7(0x81f)];SceneManager[_0x2315b7(0x38c)]['playOnceParallelInterpreter'](_0x3c39cf);}),PluginManager[_0x19616c(0x923)](pluginData['name'],'PictureCoordinatesMode',_0x2936ab=>{const _0x289052=_0x19616c;if(!$gameTemp['isPlaytest']())return;if(!Utils[_0x289052(0x8ae)]())return;VisuMZ[_0x289052(0x30c)](_0x2936ab,_0x2936ab);const _0x117ccd=_0x2936ab[_0x289052(0x853)]||0x1;$gameTemp['_pictureCoordinatesMode']=_0x117ccd;}),PluginManager['registerCommand'](pluginData[_0x19616c(0x3e9)],_0x19616c(0x5ea),_0x2e68a9=>{const _0x88ae0a=_0x19616c;VisuMZ[_0x88ae0a(0x30c)](_0x2e68a9,_0x2e68a9);const _0x3e3fa2=_0x2e68a9[_0x88ae0a(0x583)]||0x1,_0x49b91a=_0x2e68a9[_0x88ae0a(0x92b)]||_0x88ae0a(0x625),_0x26bee7=$gameScreen['picture'](_0x3e3fa2);_0x26bee7&&_0x26bee7['setEasingType'](_0x49b91a);}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],'PictureEraseAll',_0x58a11d=>{const _0x17aadb=_0x19616c;for(let _0x3ab4a2=0x1;_0x3ab4a2<=$gameScreen['maxPictures']();_0x3ab4a2++){$gameScreen[_0x17aadb(0x25d)](_0x3ab4a2);}}),PluginManager['registerCommand'](pluginData[_0x19616c(0x3e9)],_0x19616c(0x79c),_0x154264=>{const _0x133a30=_0x19616c;VisuMZ[_0x133a30(0x30c)](_0x154264,_0x154264);const _0x2dbf86=Math[_0x133a30(0x90f)](_0x154264[_0x133a30(0x481)],_0x154264['EndingID']),_0x2d609a=Math['max'](_0x154264[_0x133a30(0x481)],_0x154264[_0x133a30(0x3b7)]);for(let _0x454d03=_0x2dbf86;_0x454d03<=_0x2d609a;_0x454d03++){$gameScreen[_0x133a30(0x25d)](_0x454d03);}}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],'PictureRotateBy',_0x48397c=>{const _0x527ef4=_0x19616c;VisuMZ['ConvertParams'](_0x48397c,_0x48397c);const _0x6e62f3=Math[_0x527ef4(0x45c)](_0x48397c['PictureID'])[_0x527ef4(0x4d4)](0x1,0x64),_0x2ee2bf=-Number(_0x48397c[_0x527ef4(0x918)]||0x0),_0x21a622=Math[_0x527ef4(0x5c3)](_0x48397c[_0x527ef4(0x858)]||0x0,0x0),_0x599d41=_0x48397c[_0x527ef4(0x92b)]||_0x527ef4(0x625),_0x560e4c=_0x48397c[_0x527ef4(0x8b5)],_0x534a87=$gameScreen['picture'](_0x6e62f3);if(!_0x534a87)return;_0x534a87[_0x527ef4(0x341)](_0x2ee2bf,_0x21a622,_0x599d41);if(_0x560e4c){const _0x2e25c6=$gameTemp['getLastPluginCommandInterpreter']();if(_0x2e25c6)_0x2e25c6[_0x527ef4(0x3b9)](_0x21a622);}}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x768),_0x515755=>{const _0x1b27c5=_0x19616c;VisuMZ[_0x1b27c5(0x30c)](_0x515755,_0x515755);const _0x1d65d6=Math[_0x1b27c5(0x45c)](_0x515755['PictureID'])['clamp'](0x1,0x64),_0x5ac865=-Number(_0x515755[_0x1b27c5(0x759)]||0x0),_0x50b7f9=Math['max'](_0x515755[_0x1b27c5(0x858)]||0x0,0x0),_0x203699=_0x515755['easingType']||_0x1b27c5(0x625),_0xa0c10d=_0x515755[_0x1b27c5(0x8b5)],_0x94a2a1=$gameScreen['picture'](_0x1d65d6);if(!_0x94a2a1)return;_0x94a2a1[_0x1b27c5(0x930)](_0x5ac865,_0x50b7f9,_0x203699);if(_0xa0c10d){const _0x141b62=$gameTemp[_0x1b27c5(0x615)]();if(_0x141b62)_0x141b62[_0x1b27c5(0x3b9)](_0x50b7f9);}}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x68e),_0x2378ac=>{const _0x5a687a=_0x19616c;VisuMZ[_0x5a687a(0x30c)](_0x2378ac,_0x2378ac);const _0x931e9=Math[_0x5a687a(0x45c)](_0x2378ac[_0x5a687a(0x853)])[_0x5a687a(0x4d4)](0x1,0x64),_0x10d162=_0x2378ac[_0x5a687a(0x568)],_0xef739=_0x10d162[_0x5a687a(0x570)][_0x5a687a(0x4d4)](0x0,0x1),_0x5a0031=Math[_0x5a687a(0x45c)](_0x10d162[_0x5a687a(0x929)]||0x0),_0x1da9ea=Math[_0x5a687a(0x45c)](_0x10d162[_0x5a687a(0x5c8)]||0x0),_0x4988d8=Math['round'](_0x10d162['ScaleX']||0x0),_0x180b23=Math['round'](_0x10d162[_0x5a687a(0x83c)]||0x0),_0x3b49c2=Math[_0x5a687a(0x45c)](_0x10d162[_0x5a687a(0x301)])[_0x5a687a(0x4d4)](0x0,0xff),_0x938795=_0x10d162[_0x5a687a(0x71f)],_0x5eb031='VisuMZ\x20CoreEngine\x20PictureIcon\x20%1\x20%2',_0x1bcf3a=_0x2378ac[_0x5a687a(0x51a)]?'Smooth':_0x5a687a(0x7d5),_0xc9b0be=_0x5eb031['format'](_0x2378ac[_0x5a687a(0x617)],_0x1bcf3a);$gameScreen[_0x5a687a(0x6a4)](_0x931e9,_0xc9b0be,_0xef739,_0x5a0031,_0x1da9ea,_0x4988d8,_0x180b23,_0x3b49c2,_0x938795);}),PluginManager[_0x19616c(0x923)](pluginData['name'],_0x19616c(0x380),_0x1fe321=>{const _0x4a98d7=_0x19616c;VisuMZ[_0x4a98d7(0x30c)](_0x1fe321,_0x1fe321);const _0x4f7e87=_0x1fe321[_0x4a98d7(0x1fa)]||_0x4a98d7(0x437),_0x2f09ee=_0x1fe321[_0x4a98d7(0x739)][_0x4a98d7(0x4d4)](0x1,0x9),_0x32db18=_0x1fe321['Speed'][_0x4a98d7(0x4d4)](0x1,0x9),_0x40b4d1=_0x1fe321['Duration']||0x1,_0x97aa93=_0x1fe321[_0x4a98d7(0x8b5)];$gameScreen[_0x4a98d7(0x7b3)](_0x4f7e87),$gameScreen[_0x4a98d7(0x540)](_0x2f09ee,_0x32db18,_0x40b4d1);if(_0x97aa93){const _0x3033bb=$gameTemp[_0x4a98d7(0x615)]();if(_0x3033bb)_0x3033bb[_0x4a98d7(0x3b9)](_0x40b4d1);}}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x5e3),_0x1be1ad=>{const _0x340122=_0x19616c;if($gameParty[_0x340122(0x38f)]())return;VisuMZ[_0x340122(0x30c)](_0x1be1ad,_0x1be1ad);const _0x2f3c1c=_0x1be1ad[_0x340122(0x723)],_0x3c5baf=(_0x1be1ad[_0x340122(0x8b9)]||0x0)/0x64;for(const _0x4ca138 of _0x2f3c1c){const _0x5deb4c=Math[_0x340122(0x437)]()<=_0x3c5baf;$gameSwitches[_0x340122(0x484)](_0x4ca138,_0x5deb4c);}}),PluginManager[_0x19616c(0x923)](pluginData['name'],_0x19616c(0x82b),_0x2697fc=>{const _0x5d89a0=_0x19616c;if($gameParty['inBattle']())return;VisuMZ[_0x5d89a0(0x30c)](_0x2697fc,_0x2697fc);const _0x235f7f=Math[_0x5d89a0(0x90f)](_0x2697fc[_0x5d89a0(0x481)],_0x2697fc[_0x5d89a0(0x3b7)]),_0x3db710=Math[_0x5d89a0(0x5c3)](_0x2697fc[_0x5d89a0(0x481)],_0x2697fc[_0x5d89a0(0x3b7)]),_0x45139e=(_0x2697fc[_0x5d89a0(0x8b9)]||0x0)/0x64;for(let _0xafd7cf=_0x235f7f;_0xafd7cf<=_0x3db710;_0xafd7cf++){const _0x397093=Math[_0x5d89a0(0x437)]()<=_0x45139e;$gameSwitches[_0x5d89a0(0x484)](_0xafd7cf,_0x397093);}}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],'SwitchToggleOne',_0x4c9f95=>{const _0x4215ce=_0x19616c;if($gameParty[_0x4215ce(0x38f)]())return;VisuMZ[_0x4215ce(0x30c)](_0x4c9f95,_0x4c9f95);const _0x5f40c3=_0x4c9f95[_0x4215ce(0x723)];for(const _0x493dd7 of _0x5f40c3){const _0x8037fc=$gameSwitches[_0x4215ce(0x2d7)](_0x493dd7);$gameSwitches[_0x4215ce(0x484)](_0x493dd7,!_0x8037fc);}}),PluginManager['registerCommand'](pluginData[_0x19616c(0x3e9)],_0x19616c(0x3ae),_0x384401=>{const _0x327310=_0x19616c;if($gameParty[_0x327310(0x38f)]())return;VisuMZ['ConvertParams'](_0x384401,_0x384401);const _0x1528aa=Math[_0x327310(0x90f)](_0x384401[_0x327310(0x481)],_0x384401[_0x327310(0x3b7)]),_0x38f8ea=Math[_0x327310(0x5c3)](_0x384401[_0x327310(0x481)],_0x384401['EndingID']);for(let _0x6ddd25=_0x1528aa;_0x6ddd25<=_0x38f8ea;_0x6ddd25++){const _0x2ae7be=$gameSwitches[_0x327310(0x2d7)](_0x6ddd25);$gameSwitches[_0x327310(0x484)](_0x6ddd25,!_0x2ae7be);}}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],'SystemSetFontSize',_0x15db5c=>{const _0x509307=_0x19616c;VisuMZ[_0x509307(0x30c)](_0x15db5c,_0x15db5c);const _0x4ec190=_0x15db5c[_0x509307(0x2e7)]||0x1;$gameSystem[_0x509307(0x95b)](_0x4ec190);}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x54f),_0x2e500d=>{const _0x4a949e=_0x19616c;if($gameParty['inBattle']())return;VisuMZ[_0x4a949e(0x30c)](_0x2e500d,_0x2e500d);const _0x50d338=_0x2e500d[_0x4a949e(0x2e7)];if(_0x50d338['match'](/Front/i))$gameSystem['setSideView'](![]);else _0x50d338[_0x4a949e(0x490)](/Side/i)?$gameSystem[_0x4a949e(0x1f0)](!![]):$gameSystem[_0x4a949e(0x1f0)](!$gameSystem[_0x4a949e(0x5f3)]());}),PluginManager[_0x19616c(0x923)](pluginData['name'],_0x19616c(0x238),_0x3942a8=>{const _0x43fe45=_0x19616c;if($gameParty[_0x43fe45(0x38f)]())return;VisuMZ[_0x43fe45(0x30c)](_0x3942a8,_0x3942a8);const _0x1e488a=[_0x43fe45(0x4d9),_0x43fe45(0x83e),'me','se'];for(const _0x242134 of _0x1e488a){const _0x465cda=_0x3942a8[_0x242134],_0x354a8d=_0x43fe45(0x758)['format'](_0x242134);for(const _0x366fab of _0x465cda){AudioManager['createBuffer'](_0x354a8d,_0x366fab);}}}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x92f),_0x513424=>{const _0x39b0a7=_0x19616c;if($gameParty[_0x39b0a7(0x38f)]())return;VisuMZ[_0x39b0a7(0x30c)](_0x513424,_0x513424);const _0x2833a6=['animations',_0x39b0a7(0x499),'battlebacks2',_0x39b0a7(0x500),_0x39b0a7(0x54e),_0x39b0a7(0x774),_0x39b0a7(0x8bc),_0x39b0a7(0x5d0),_0x39b0a7(0x906),_0x39b0a7(0x7d7),'system',_0x39b0a7(0x4dc),_0x39b0a7(0x649),_0x39b0a7(0x996)];for(const _0x54d617 of _0x2833a6){const _0x2df2fb=_0x513424[_0x54d617],_0x911fbe='img/%1/'['format'](_0x54d617);for(const _0x304ed0 of _0x2df2fb){ImageManager['loadBitmap'](_0x911fbe,_0x304ed0);}}}),PluginManager['registerCommand'](pluginData[_0x19616c(0x3e9)],_0x19616c(0x831),_0x5b514d=>{const _0x26381c=_0x19616c;if($gameParty[_0x26381c(0x38f)]())return;VisuMZ[_0x26381c(0x30c)](_0x5b514d,_0x5b514d);const _0x29afc0=_0x5b514d[_0x26381c(0x2e7)][_0x26381c(0x319)]()[_0x26381c(0x862)](),_0x4e206e=VisuMZ['CoreEngine']['CreateBattleSystemID'](_0x29afc0);$gameSystem[_0x26381c(0x4b0)](_0x4e206e);}),VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x6ea)]=function(_0x561b05){const _0x2dbc01=_0x19616c;_0x561b05=_0x561b05||_0x2dbc01(0x31c),_0x561b05=String(_0x561b05)[_0x2dbc01(0x319)]()[_0x2dbc01(0x862)]();switch(_0x561b05){case _0x2dbc01(0x594):return 0x0;case _0x2dbc01(0x49c):return 0x1;case _0x2dbc01(0x2b1):return 0x2;case _0x2dbc01(0x83b):if(Imported['VisuMZ_2_BattleSystemCTB'])return _0x2dbc01(0x83b);break;case _0x2dbc01(0x225):if(Imported[_0x2dbc01(0x4a8)])return'STB';break;case _0x2dbc01(0x50f):if(Imported['VisuMZ_2_BattleSystemBTB'])return _0x2dbc01(0x50f);break;case _0x2dbc01(0x80a):if(Imported['VisuMZ_2_BattleSystemFTB'])return _0x2dbc01(0x80a);break;case _0x2dbc01(0x38b):if(Imported[_0x2dbc01(0x788)])return'OTB';break;case _0x2dbc01(0x640):if(Imported['VisuMZ_2_BattleSystemETB'])return'ETB';break;case _0x2dbc01(0x90c):if(Imported[_0x2dbc01(0x3f5)])return _0x2dbc01(0x90c);break;}return $dataSystem[_0x2dbc01(0x397)];},PluginManager['registerCommand'](pluginData[_0x19616c(0x3e9)],_0x19616c(0x333),_0x495da2=>{const _0x53f8b3=_0x19616c;VisuMZ[_0x53f8b3(0x30c)](_0x495da2,_0x495da2);const _0x3c7f03=_0x495da2['option']||0x1;$gameSystem[_0x53f8b3(0x688)](_0x3c7f03);}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],_0x19616c(0x55d),_0x303796=>{const _0xd735fa=_0x19616c;VisuMZ[_0xd735fa(0x30c)](_0x303796,_0x303796);const _0x22f44a=_0x303796[_0xd735fa(0x1c1)]||'';$textPopup(_0x22f44a);}),PluginManager[_0x19616c(0x923)](pluginData[_0x19616c(0x3e9)],'VariableEvalReference',_0xa8d7d4=>{const _0x5d51c9=_0x19616c;VisuMZ[_0x5d51c9(0x30c)](_0xa8d7d4,_0xa8d7d4);const _0x422bd4=_0xa8d7d4['id']||0x1,_0x5b539e=_0xa8d7d4[_0x5d51c9(0x345)],_0x388d75=_0xa8d7d4[_0x5d51c9(0x1aa)]||0x0;let _0x4991b6=$gameVariables[_0x5d51c9(0x2d7)](_0x422bd4)||0x0;switch(_0x5b539e){case'=':_0x4991b6=_0x388d75;break;case'+':_0x4991b6+=_0x388d75;break;case'-':_0x4991b6-=_0x388d75;break;case'*':_0x4991b6*=_0x388d75;break;case'/':_0x4991b6/=_0x388d75;break;case'%':_0x4991b6%=_0x388d75;break;}_0x4991b6=_0x4991b6||0x0,$gameVariables[_0x5d51c9(0x484)](_0x422bd4,_0x4991b6);}),PluginManager['registerCommand'](pluginData['name'],'VariableJsBlock',_0x1e2b59=>{const _0x53dc4b=_0x19616c;VisuMZ[_0x53dc4b(0x30c)](_0x1e2b59,_0x1e2b59);const _0xbd1609=_0x1e2b59['id']()||0x1,_0x17fb0b=_0x1e2b59[_0x53dc4b(0x345)],_0x1bc735=_0x1e2b59[_0x53dc4b(0x1aa)]()||0x0;let _0x31dd6b=$gameVariables['value'](_0xbd1609)||0x0;switch(_0x17fb0b){case'=':_0x31dd6b=_0x1bc735;break;case'+':_0x31dd6b+=_0x1bc735;break;case'-':_0x31dd6b-=_0x1bc735;break;case'*':_0x31dd6b*=_0x1bc735;break;case'/':_0x31dd6b/=_0x1bc735;break;case'%':_0x31dd6b%=_0x1bc735;break;}_0x31dd6b=_0x31dd6b||0x0,$gameVariables[_0x53dc4b(0x484)](_0xbd1609,_0x31dd6b);}),VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x1de)]=Scene_Boot['prototype'][_0x19616c(0x992)],Scene_Boot['prototype'][_0x19616c(0x992)]=function(){const _0x546ae8=_0x19616c;VisuMZ[_0x546ae8(0x4f5)][_0x546ae8(0x1de)][_0x546ae8(0x4a5)](this),this['process_VisuMZ_CoreEngine_RegExp'](),this['process_VisuMZ_CoreEngine_Notetags'](),this[_0x546ae8(0x343)](),this[_0x546ae8(0x47e)](),this[_0x546ae8(0x569)](),this[_0x546ae8(0x6e6)](),VisuMZ[_0x546ae8(0x2f2)]();},VisuMZ['CoreEngine'][_0x19616c(0x41f)]={},Scene_Boot[_0x19616c(0x7f9)]['process_VisuMZ_CoreEngine_RegExp']=function(){const _0x53f5c7=_0x19616c,_0x2d7cdd=[_0x53f5c7(0x5ba),'MAXMP',_0x53f5c7(0x7a6),_0x53f5c7(0x8a0),_0x53f5c7(0x763),_0x53f5c7(0x66f),'AGI',_0x53f5c7(0x655)],_0x16a641=[_0x53f5c7(0x279),_0x53f5c7(0x240),_0x53f5c7(0x986),_0x53f5c7(0x268),_0x53f5c7(0x325),'MRF',_0x53f5c7(0x4aa),_0x53f5c7(0x740),_0x53f5c7(0x6cf),_0x53f5c7(0x291)],_0x3985ae=[_0x53f5c7(0x1b6),_0x53f5c7(0x24c),_0x53f5c7(0x36e),_0x53f5c7(0x96a),_0x53f5c7(0x752),_0x53f5c7(0x28b),_0x53f5c7(0x938),_0x53f5c7(0x545),'FDR','EXR'],_0x44abad=[_0x2d7cdd,_0x16a641,_0x3985ae],_0x439012=[_0x53f5c7(0x74a),_0x53f5c7(0x968),'Plus2',_0x53f5c7(0x31e),_0x53f5c7(0x8eb),_0x53f5c7(0x51e),_0x53f5c7(0x383),_0x53f5c7(0x1db),_0x53f5c7(0x798),_0x53f5c7(0x8f7)];for(const _0x26726f of _0x44abad){let _0x58d763='';if(_0x26726f===_0x2d7cdd)_0x58d763='param';if(_0x26726f===_0x16a641)_0x58d763=_0x53f5c7(0x4f1);if(_0x26726f===_0x3985ae)_0x58d763=_0x53f5c7(0x7d9);for(const _0x461fcc of _0x439012){let _0x2243e6=_0x53f5c7(0x650)[_0x53f5c7(0x67e)](_0x58d763,_0x461fcc);VisuMZ[_0x53f5c7(0x4f5)][_0x53f5c7(0x41f)][_0x2243e6]=[],VisuMZ[_0x53f5c7(0x4f5)][_0x53f5c7(0x41f)][_0x2243e6+'JS']=[];let _0x153f56='<%1\x20%2:[\x20]';if([_0x53f5c7(0x74a),_0x53f5c7(0x1db)][_0x53f5c7(0x8df)](_0x461fcc))_0x153f56+=_0x53f5c7(0x5fc);else{if([_0x53f5c7(0x968),_0x53f5c7(0x798)][_0x53f5c7(0x8df)](_0x461fcc))_0x153f56+=_0x53f5c7(0x58c);else{if([_0x53f5c7(0x229),'Flat2'][_0x53f5c7(0x8df)](_0x461fcc))_0x153f56+=_0x53f5c7(0x5d3);else{if(_0x461fcc==='Max')_0x153f56+='(\x5cd+)>';else{if(_0x461fcc===_0x53f5c7(0x51e))_0x153f56+=_0x53f5c7(0x3ed);else _0x461fcc===_0x53f5c7(0x383)&&(_0x153f56+=_0x53f5c7(0x988));}}}}for(const _0x1c3f54 of _0x26726f){let _0x49fe1b=_0x461fcc[_0x53f5c7(0x233)](/[\d+]/g,'')[_0x53f5c7(0x319)]();const _0xde0ed3=_0x153f56['format'](_0x1c3f54,_0x49fe1b);VisuMZ['CoreEngine'][_0x53f5c7(0x41f)][_0x2243e6][_0x53f5c7(0x69f)](new RegExp(_0xde0ed3,'i'));const _0x1362ea='<JS\x20%1\x20%2:[\x20](.*)>'[_0x53f5c7(0x67e)](_0x1c3f54,_0x49fe1b);VisuMZ[_0x53f5c7(0x4f5)][_0x53f5c7(0x41f)][_0x2243e6+'JS'][_0x53f5c7(0x69f)](new RegExp(_0x1362ea,'i'));}}}},Scene_Boot[_0x19616c(0x7f9)][_0x19616c(0x6f0)]=function(){const _0x3e9b97=_0x19616c;if(VisuMZ[_0x3e9b97(0x2f2)])return;},Scene_Boot[_0x19616c(0x7f9)][_0x19616c(0x343)]=function(){const _0x12e97f=_0x19616c,_0x4933f0=VisuMZ[_0x12e97f(0x4f5)]['Settings'];_0x4933f0[_0x12e97f(0x1fb)][_0x12e97f(0x54d)]&&VisuMZ[_0x12e97f(0x3be)](!![]);_0x4933f0[_0x12e97f(0x1fb)][_0x12e97f(0x64a)]&&(Input[_0x12e97f(0x4ad)][0x23]='end',Input[_0x12e97f(0x4ad)][0x24]=_0x12e97f(0x991));if(_0x4933f0[_0x12e97f(0x21d)]){const _0x29af5b=_0x4933f0[_0x12e97f(0x21d)];_0x29af5b[_0x12e97f(0x5fb)]=_0x29af5b['KeySHIFT']||'\x5c}❪SHIFT❫\x5c{',_0x29af5b[_0x12e97f(0x1fe)]=_0x29af5b[_0x12e97f(0x1fe)]||_0x12e97f(0x2e1);}_0x4933f0[_0x12e97f(0x25a)][_0x12e97f(0x623)]&&(Input[_0x12e97f(0x4ad)][0x57]='up',Input['keyMapper'][0x41]=_0x12e97f(0x953),Input[_0x12e97f(0x4ad)][0x53]=_0x12e97f(0x860),Input[_0x12e97f(0x4ad)][0x44]='right',Input[_0x12e97f(0x4ad)][0x45]=_0x12e97f(0x312)),_0x4933f0[_0x12e97f(0x25a)]['DashToggleR']&&(Input[_0x12e97f(0x4ad)][0x52]=_0x12e97f(0x7a3)),_0x4933f0['Param']['DisplayedParams']=_0x4933f0['Param'][_0x12e97f(0x6f2)][_0x12e97f(0x54c)](_0x4b2fab=>_0x4b2fab[_0x12e97f(0x319)]()[_0x12e97f(0x862)]()),_0x4933f0[_0x12e97f(0x477)][_0x12e97f(0x251)]=_0x4933f0[_0x12e97f(0x477)][_0x12e97f(0x251)][_0x12e97f(0x54c)](_0x264a76=>_0x264a76[_0x12e97f(0x319)]()[_0x12e97f(0x862)]()),_0x4933f0['QoL'][_0x12e97f(0x6f6)]=_0x4933f0['QoL']['ShiftR_Toggle']??!![],_0x4933f0[_0x12e97f(0x1fb)][_0x12e97f(0x634)]=_0x4933f0['QoL'][_0x12e97f(0x634)]??!![],_0x4933f0[_0x12e97f(0x21d)][_0x12e97f(0x78c)]&&VisuMZ[_0x12e97f(0x4f5)][_0x12e97f(0x935)]();},VisuMZ['CoreEngine'][_0x19616c(0x935)]=function(){const _0x1c6a46=_0x19616c;let _0x4fa53b=![],_0x392645=![];for(let _0x6ef930 in Input['keyMapper']){const _0x1a8169=Input[_0x1c6a46(0x4ad)][_0x6ef930];if(_0x1a8169===_0x1c6a46(0x55c))_0x4fa53b=!![];if(_0x1a8169===_0x1c6a46(0x52b))_0x392645=!![];if(_0x4fa53b&&_0x392645)return;}let _0x134e8f=_0x1c6a46(0x56d);_0x134e8f+='You\x20do\x20not\x20have\x20a\x20custom\x20Input.keyMapper\x20with\x20\x22cancel\x22\x20and\x20\x22menu\x22\x20',_0x134e8f+=_0x1c6a46(0x1dd),_0x134e8f+=_0x1c6a46(0x2d1),_0x134e8f+='If\x20you\x20don\x27t\x20want\x20this\x20option,\x20set\x20Split\x20Escape\x20option\x20back\x20to\x20false.',alert(_0x134e8f),SceneManager[_0x1c6a46(0x8bf)]();},Scene_Boot[_0x19616c(0x7f9)]['process_VisuMZ_CoreEngine_Functions']=function(){const _0x253300=_0x19616c;this[_0x253300(0x61b)]();},Scene_Boot[_0x19616c(0x7f9)][_0x19616c(0x61b)]=function(){const _0x321c06=_0x19616c,_0x53fdfa=VisuMZ[_0x321c06(0x4f5)][_0x321c06(0x568)]['jsQuickFunc'];for(const _0x49e516 of _0x53fdfa){const _0xeb2b65=_0x49e516[_0x321c06(0x663)][_0x321c06(0x233)](/[ ]/g,''),_0xe78cd=_0x49e516[_0x321c06(0x421)];VisuMZ[_0x321c06(0x4f5)][_0x321c06(0x75f)](_0xeb2b65,_0xe78cd);}},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x75f)]=function(_0x2f74ea,_0x29bf5f){const _0x3c4c70=_0x19616c;if(!!window[_0x2f74ea]){if($gameTemp[_0x3c4c70(0x24a)]())console[_0x3c4c70(0x765)](_0x3c4c70(0x5bc)[_0x3c4c70(0x67e)](_0x2f74ea));}const _0x3df3c2='\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%2\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27JS\x20Quick\x20Function\x20\x22%1\x22\x20Error!\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20'[_0x3c4c70(0x67e)](_0x2f74ea,_0x29bf5f);window[_0x2f74ea]=new Function(_0x3df3c2);},Scene_Boot[_0x19616c(0x7f9)][_0x19616c(0x569)]=function(){const _0xccc216=_0x19616c,_0x3fc744=VisuMZ['CoreEngine'][_0xccc216(0x568)][_0xccc216(0x6d1)];if(!_0x3fc744)return;for(const _0x6a37cc of _0x3fc744){if(!_0x6a37cc)continue;VisuMZ[_0xccc216(0x4f5)][_0xccc216(0x356)](_0x6a37cc);}},VisuMZ[_0x19616c(0x4f5)]['CustomParamNames']={},VisuMZ['CoreEngine']['CustomParamIcons']={},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x96b)]={},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x3c6)]={},VisuMZ['CoreEngine'][_0x19616c(0x356)]=function(_0xba9cb){const _0x404561=_0x19616c,_0x318a64=_0xba9cb[_0x404561(0x619)],_0x4aa1e1=_0xba9cb[_0x404561(0x33b)],_0x53ec28=_0xba9cb[_0x404561(0x647)],_0x4c90b8=_0xba9cb[_0x404561(0x1fa)],_0xf0344d=new Function(_0xba9cb['ValueJS']);VisuMZ[_0x404561(0x4f5)][_0x404561(0x4cc)][_0x318a64[_0x404561(0x319)]()[_0x404561(0x862)]()]=_0x4aa1e1,VisuMZ['CoreEngine']['CustomParamIcons'][_0x318a64[_0x404561(0x319)]()[_0x404561(0x862)]()]=_0x53ec28,VisuMZ[_0x404561(0x4f5)][_0x404561(0x96b)][_0x318a64[_0x404561(0x319)]()['trim']()]=_0x4c90b8,VisuMZ[_0x404561(0x4f5)][_0x404561(0x3c6)][_0x318a64[_0x404561(0x319)]()[_0x404561(0x862)]()]=_0x318a64,Object['defineProperty'](Game_BattlerBase[_0x404561(0x7f9)],_0x318a64,{'get'(){const _0x3d16c5=_0x404561,_0x3d1bf6=_0xf0344d['call'](this);return _0x4c90b8===_0x3d16c5(0x7a9)?Math[_0x3d16c5(0x45c)](_0x3d1bf6):_0x3d1bf6;}});},VisuMZ[_0x19616c(0x4f5)]['ControllerButtons']={},VisuMZ[_0x19616c(0x4f5)]['ControllerMatches']={},Scene_Boot['prototype'][_0x19616c(0x6e6)]=function(){const _0x2e9372=_0x19616c,_0x52f2e1=VisuMZ[_0x2e9372(0x4f5)]['Settings']['ControllerButtons'];for(const _0x323039 of _0x52f2e1){const _0x9c5c13=(_0x323039[_0x2e9372(0x21b)]||'')['toLowerCase']()[_0x2e9372(0x862)](),_0x5218f0=(_0x323039['Match']||'')[_0x2e9372(0x626)]()[_0x2e9372(0x862)]();VisuMZ[_0x2e9372(0x4f5)][_0x2e9372(0x1b4)][_0x9c5c13]=_0x323039,VisuMZ[_0x2e9372(0x4f5)][_0x2e9372(0x2d0)][_0x5218f0]=_0x9c5c13;}},VisuMZ[_0x19616c(0x2f2)]=function(){const _0x1231bb=_0x19616c;for(const _0x1aee88 of $dataActors){if(_0x1aee88)VisuMZ[_0x1231bb(0x3fa)](_0x1aee88);}for(const _0xdccbc0 of $dataClasses){if(_0xdccbc0)VisuMZ[_0x1231bb(0x318)](_0xdccbc0);}for(const _0x28ebb8 of $dataSkills){if(_0x28ebb8)VisuMZ[_0x1231bb(0x34b)](_0x28ebb8);}for(const _0x35b0d3 of $dataItems){if(_0x35b0d3)VisuMZ[_0x1231bb(0x952)](_0x35b0d3);}for(const _0x159786 of $dataWeapons){if(_0x159786)VisuMZ[_0x1231bb(0x6c0)](_0x159786);}for(const _0x39694 of $dataArmors){if(_0x39694)VisuMZ[_0x1231bb(0x604)](_0x39694);}for(const _0x266593 of $dataEnemies){if(_0x266593)VisuMZ[_0x1231bb(0x42a)](_0x266593);}for(const _0x5f0eb4 of $dataStates){if(_0x5f0eb4)VisuMZ['ParseStateNotetags'](_0x5f0eb4);}for(const _0x126300 of $dataTilesets){if(_0x126300)VisuMZ[_0x1231bb(0x3fe)](_0x126300);}},VisuMZ[_0x19616c(0x3fa)]=function(_0x2e6abb){},VisuMZ[_0x19616c(0x318)]=function(_0x3bc541){},VisuMZ[_0x19616c(0x34b)]=function(_0x2df286){},VisuMZ[_0x19616c(0x952)]=function(_0x1d04f2){},VisuMZ[_0x19616c(0x6c0)]=function(_0x53cebf){},VisuMZ[_0x19616c(0x604)]=function(_0x3917de){},VisuMZ['ParseEnemyNotetags']=function(_0x3fb3e7){},VisuMZ[_0x19616c(0x7c4)]=function(_0x368b34){},VisuMZ[_0x19616c(0x3fe)]=function(_0x434c6a){},VisuMZ[_0x19616c(0x4f5)]['ParseActorNotetags']=VisuMZ['ParseActorNotetags'],VisuMZ[_0x19616c(0x3fa)]=function(_0x1e726d){const _0x59e2f0=_0x19616c;VisuMZ[_0x59e2f0(0x4f5)][_0x59e2f0(0x3fa)][_0x59e2f0(0x4a5)](this,_0x1e726d);const _0x7e87c5=_0x1e726d['note'];if(_0x7e87c5['match'](/<MAX LEVEL:[ ](\d+)>/i)){_0x1e726d['maxLevel']=Number(RegExp['$1']);if(_0x1e726d[_0x59e2f0(0x5e8)]===0x0)_0x1e726d[_0x59e2f0(0x5e8)]=Number[_0x59e2f0(0x66b)];}_0x7e87c5[_0x59e2f0(0x490)](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x1e726d['initialLevel']=Math[_0x59e2f0(0x90f)](Number(RegExp['$1']),_0x1e726d[_0x59e2f0(0x5e8)]));},VisuMZ[_0x19616c(0x4f5)]['ParseClassNotetags']=VisuMZ[_0x19616c(0x318)],VisuMZ[_0x19616c(0x318)]=function(_0x55a219){const _0x28e98d=_0x19616c;VisuMZ['CoreEngine'][_0x28e98d(0x318)][_0x28e98d(0x4a5)](this,_0x55a219);if(_0x55a219[_0x28e98d(0x8dc)])for(const _0x1e1c48 of _0x55a219['learnings']){_0x1e1c48[_0x28e98d(0x5df)][_0x28e98d(0x490)](/<LEARN AT LEVEL:[ ](\d+)>/i)&&(_0x1e1c48['level']=Math[_0x28e98d(0x5c3)](Number(RegExp['$1']),0x1));}},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x42a)]=VisuMZ[_0x19616c(0x42a)],VisuMZ[_0x19616c(0x42a)]=function(_0x1516f5){const _0x3d343f=_0x19616c;VisuMZ[_0x3d343f(0x4f5)][_0x3d343f(0x42a)][_0x3d343f(0x4a5)](this,_0x1516f5),_0x1516f5[_0x3d343f(0x1b3)]=0x1;const _0x3e7ff8=_0x1516f5[_0x3d343f(0x5df)];if(_0x3e7ff8[_0x3d343f(0x490)](/<LEVEL:[ ](\d+)>/i))_0x1516f5[_0x3d343f(0x1b3)]=Number(RegExp['$1']);if(_0x3e7ff8[_0x3d343f(0x490)](/<MAXHP:[ ](\d+)>/i))_0x1516f5[_0x3d343f(0x8d8)][0x0]=Number(RegExp['$1']);if(_0x3e7ff8['match'](/<MAXMP:[ ](\d+)>/i))_0x1516f5['params'][0x1]=Number(RegExp['$1']);if(_0x3e7ff8[_0x3d343f(0x490)](/<ATK:[ ](\d+)>/i))_0x1516f5[_0x3d343f(0x8d8)][0x2]=Number(RegExp['$1']);if(_0x3e7ff8['match'](/<DEF:[ ](\d+)>/i))_0x1516f5['params'][0x3]=Number(RegExp['$1']);if(_0x3e7ff8['match'](/<MAT:[ ](\d+)>/i))_0x1516f5['params'][0x4]=Number(RegExp['$1']);if(_0x3e7ff8['match'](/<MDF:[ ](\d+)>/i))_0x1516f5['params'][0x5]=Number(RegExp['$1']);if(_0x3e7ff8[_0x3d343f(0x490)](/<AGI:[ ](\d+)>/i))_0x1516f5[_0x3d343f(0x8d8)][0x6]=Number(RegExp['$1']);if(_0x3e7ff8[_0x3d343f(0x490)](/<LUK:[ ](\d+)>/i))_0x1516f5[_0x3d343f(0x8d8)][0x7]=Number(RegExp['$1']);if(_0x3e7ff8[_0x3d343f(0x490)](/<EXP:[ ](\d+)>/i))_0x1516f5[_0x3d343f(0x310)]=Number(RegExp['$1']);if(_0x3e7ff8[_0x3d343f(0x490)](/<GOLD:[ ](\d+)>/i))_0x1516f5[_0x3d343f(0x865)]=Number(RegExp['$1']);},VisuMZ[_0x19616c(0x4f5)]['Graphics_defaultStretchMode']=Graphics[_0x19616c(0x450)],Graphics[_0x19616c(0x450)]=function(){const _0x21a6d2=_0x19616c;switch(VisuMZ[_0x21a6d2(0x4f5)][_0x21a6d2(0x568)][_0x21a6d2(0x1fb)][_0x21a6d2(0x4f4)]){case _0x21a6d2(0x800):return!![];case'normal':return![];default:return VisuMZ[_0x21a6d2(0x4f5)][_0x21a6d2(0x683)][_0x21a6d2(0x4a5)](this);}},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x599)]=Graphics[_0x19616c(0x6be)],Graphics[_0x19616c(0x6be)]=function(_0x398646,_0x1239e1,_0x2900be=null){const _0x38daf2=_0x19616c;VisuMZ['CoreEngine'][_0x38daf2(0x599)][_0x38daf2(0x4a5)](this,_0x398646,_0x1239e1,_0x2900be),VisuMZ[_0x38daf2(0x3be)](![]);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x689)]=Graphics['_centerElement'],Graphics[_0x19616c(0x7fa)]=function(_0x158837){const _0x5a88dc=_0x19616c;VisuMZ['CoreEngine'][_0x5a88dc(0x689)][_0x5a88dc(0x4a5)](this,_0x158837),this[_0x5a88dc(0x94a)](_0x158837);},Graphics[_0x19616c(0x94a)]=function(_0x5e3652){const _0x28d9a5=_0x19616c;VisuMZ[_0x28d9a5(0x4f5)]['Settings'][_0x28d9a5(0x1fb)][_0x28d9a5(0x255)]&&(_0x5e3652['style'][_0x28d9a5(0x955)]=_0x28d9a5(0x288));VisuMZ['CoreEngine'][_0x28d9a5(0x568)][_0x28d9a5(0x1fb)][_0x28d9a5(0x97b)]&&(_0x5e3652[_0x28d9a5(0x602)]['image-rendering']=_0x28d9a5(0x916));const _0x397476=Math[_0x28d9a5(0x5c3)](0x0,Math['floor'](_0x5e3652[_0x28d9a5(0x3e0)]*this['_realScale'])),_0x3cde89=Math[_0x28d9a5(0x5c3)](0x0,Math[_0x28d9a5(0x2f5)](_0x5e3652[_0x28d9a5(0x413)]*this[_0x28d9a5(0x41b)]));_0x5e3652['style'][_0x28d9a5(0x3e0)]=_0x397476+'px',_0x5e3652[_0x28d9a5(0x602)]['height']=_0x3cde89+'px';},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x453)]=Bitmap['prototype']['initialize'],Bitmap[_0x19616c(0x7f9)][_0x19616c(0x5cd)]=function(_0x2351c0,_0x1bdd80){const _0x36c370=_0x19616c;VisuMZ['CoreEngine'][_0x36c370(0x453)][_0x36c370(0x4a5)](this,_0x2351c0,_0x1bdd80),this[_0x36c370(0x39f)]=!(VisuMZ[_0x36c370(0x4f5)][_0x36c370(0x568)][_0x36c370(0x1fb)][_0x36c370(0x97b)]??!![]);},Bitmap['prototype'][_0x19616c(0x639)]=function(){this['_customModified']=!![];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x34a)]=Sprite['prototype'][_0x19616c(0x20d)],Sprite[_0x19616c(0x7f9)]['destroy']=function(){const _0x165c7d=_0x19616c;if(this[_0x165c7d(0x19a)])VisuMZ[_0x165c7d(0x4f5)]['Sprite_destroy'][_0x165c7d(0x4a5)](this);this[_0x165c7d(0x636)]();},Sprite[_0x19616c(0x7f9)][_0x19616c(0x636)]=function(){const _0x2db695=_0x19616c;if(!this[_0x2db695(0x807)])return;if(!this['bitmap'][_0x2db695(0x221)])return;this[_0x2db695(0x807)]['_baseTexture']&&!this[_0x2db695(0x5e7)][_0x2db695(0x5e1)][_0x2db695(0x884)]&&this['bitmap'][_0x2db695(0x20d)]();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x5ee)]=Bitmap[_0x19616c(0x7f9)]['resize'],Bitmap[_0x19616c(0x7f9)][_0x19616c(0x53b)]=function(_0x3a8168,_0x2a999d){const _0x47b4e8=_0x19616c;VisuMZ['CoreEngine']['Bitmap_resize']['call'](this,_0x3a8168,_0x2a999d),this[_0x47b4e8(0x639)]();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x8b0)]=Bitmap['prototype']['blt'],Bitmap[_0x19616c(0x7f9)][_0x19616c(0x98f)]=function(_0x62af29,_0x4ac065,_0x4e9584,_0x450cf3,_0x1d77f8,_0x17b9f9,_0x2b25dc,_0x1092c9,_0x11891b){const _0x442116=_0x19616c;_0x4ac065=Math[_0x442116(0x45c)](_0x4ac065),_0x4e9584=Math[_0x442116(0x45c)](_0x4e9584),_0x450cf3=Math[_0x442116(0x45c)](_0x450cf3),_0x1d77f8=Math[_0x442116(0x45c)](_0x1d77f8),_0x17b9f9=Math[_0x442116(0x45c)](_0x17b9f9),_0x2b25dc=Math[_0x442116(0x45c)](_0x2b25dc),VisuMZ['CoreEngine'][_0x442116(0x8b0)]['call'](this,_0x62af29,_0x4ac065,_0x4e9584,_0x450cf3,_0x1d77f8,_0x17b9f9,_0x2b25dc,_0x1092c9,_0x11891b),this[_0x442116(0x639)]();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x2b4)]=Bitmap[_0x19616c(0x7f9)][_0x19616c(0x2e4)],Bitmap['prototype']['clearRect']=function(_0x1700b5,_0x56830d,_0x4a6ec3,_0x3c5de7){const _0x109c1d=_0x19616c;VisuMZ[_0x109c1d(0x4f5)]['Bitmap_clearRect']['call'](this,_0x1700b5,_0x56830d,_0x4a6ec3,_0x3c5de7),this[_0x109c1d(0x639)]();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x8d0)]=Bitmap['prototype'][_0x19616c(0x7ef)],Bitmap[_0x19616c(0x7f9)][_0x19616c(0x7ef)]=function(_0x39e698,_0x5cf05f,_0x119572,_0x318b65,_0x1602ca){const _0x283e25=_0x19616c;VisuMZ['CoreEngine'][_0x283e25(0x8d0)][_0x283e25(0x4a5)](this,_0x39e698,_0x5cf05f,_0x119572,_0x318b65,_0x1602ca),this[_0x283e25(0x639)]();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x3eb)]=Bitmap[_0x19616c(0x7f9)][_0x19616c(0x1f2)],Bitmap[_0x19616c(0x7f9)][_0x19616c(0x1f2)]=function(_0x4d8873,_0x4313bb,_0x579c08,_0x42353d,_0x105f4a){const _0x1ad346=_0x19616c;VisuMZ[_0x1ad346(0x4f5)][_0x1ad346(0x3eb)][_0x1ad346(0x4a5)](this,_0x4d8873,_0x4313bb,_0x579c08,_0x42353d,_0x105f4a),this[_0x1ad346(0x639)]();},VisuMZ['CoreEngine'][_0x19616c(0x4f6)]=Bitmap[_0x19616c(0x7f9)][_0x19616c(0x3f0)],Bitmap[_0x19616c(0x7f9)][_0x19616c(0x3f0)]=function(_0x161a7a,_0x26a0a8,_0x532d27,_0x3d8c98,_0x1ad07c,_0x563731,_0x99b2cb){const _0x285abf=_0x19616c;VisuMZ[_0x285abf(0x4f5)][_0x285abf(0x4f6)][_0x285abf(0x4a5)](this,_0x161a7a,_0x26a0a8,_0x532d27,_0x3d8c98,_0x1ad07c,_0x563731,_0x99b2cb),this['markCoreEngineModified']();},VisuMZ[_0x19616c(0x4f5)]['Bitmap_drawCircle']=Bitmap[_0x19616c(0x7f9)][_0x19616c(0x654)],Bitmap[_0x19616c(0x7f9)][_0x19616c(0x654)]=function(_0x2b9ce8,_0x5d74e7,_0x278947,_0x485e71){const _0x4d9207=_0x19616c;_0x2b9ce8=Math[_0x4d9207(0x45c)](_0x2b9ce8),_0x5d74e7=Math[_0x4d9207(0x45c)](_0x5d74e7),_0x278947=Math[_0x4d9207(0x45c)](_0x278947),VisuMZ[_0x4d9207(0x4f5)][_0x4d9207(0x280)]['call'](this,_0x2b9ce8,_0x5d74e7,_0x278947,_0x485e71),this[_0x4d9207(0x639)]();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x322)]=Bitmap[_0x19616c(0x7f9)][_0x19616c(0x85f)],Bitmap[_0x19616c(0x7f9)]['measureTextWidth']=function(_0x494f4d){const _0x15ab2d=_0x19616c;return Math[_0x15ab2d(0x6d8)](VisuMZ[_0x15ab2d(0x4f5)][_0x15ab2d(0x322)][_0x15ab2d(0x4a5)](this,_0x494f4d));},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x86e)]=Bitmap[_0x19616c(0x7f9)]['drawText'],Bitmap[_0x19616c(0x7f9)][_0x19616c(0x4c1)]=function(_0x4c24f8,_0x2f95c5,_0x411193,_0x39665e,_0x2b4efb,_0x31fd0e){const _0x188b16=_0x19616c;_0x2f95c5=Math[_0x188b16(0x45c)](_0x2f95c5),_0x411193=Math['round'](_0x411193),_0x39665e=Math[_0x188b16(0x6d8)](_0x39665e),_0x2b4efb=Math[_0x188b16(0x6d8)](_0x2b4efb),VisuMZ[_0x188b16(0x4f5)][_0x188b16(0x86e)][_0x188b16(0x4a5)](this,_0x4c24f8,_0x2f95c5,_0x411193,_0x39665e,_0x2b4efb,_0x31fd0e),this['markCoreEngineModified']();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x543)]=Bitmap[_0x19616c(0x7f9)][_0x19616c(0x3b1)],Bitmap[_0x19616c(0x7f9)]['_drawTextOutline']=function(_0x2e565b,_0x50f760,_0x5ae702,_0x45a3c2){const _0x66a923=_0x19616c;VisuMZ[_0x66a923(0x4f5)][_0x66a923(0x568)][_0x66a923(0x1fb)][_0x66a923(0x80e)]?this['_drawTextShadow'](_0x2e565b,_0x50f760,_0x5ae702,_0x45a3c2):VisuMZ[_0x66a923(0x4f5)][_0x66a923(0x543)][_0x66a923(0x4a5)](this,_0x2e565b,_0x50f760,_0x5ae702,_0x45a3c2);},Bitmap[_0x19616c(0x7f9)][_0x19616c(0x703)]=function(_0x1ffda0,_0x4106d9,_0x5cacae,_0x28f282){const _0x17d6b5=_0x19616c,_0x189538=this[_0x17d6b5(0x3dc)];_0x189538['fillStyle']=this[_0x17d6b5(0x522)],_0x189538['fillText'](_0x1ffda0,_0x4106d9+0x2,_0x5cacae+0x2,_0x28f282);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x2ce)]=Input['clear'],Input[_0x19616c(0x772)]=function(){const _0x451e9a=_0x19616c;VisuMZ['CoreEngine'][_0x451e9a(0x2ce)]['call'](this),this[_0x451e9a(0x5a3)]=undefined,this[_0x451e9a(0x65b)]=undefined,this[_0x451e9a(0x526)]=Input[_0x451e9a(0x3a2)];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x966)]=Input[_0x19616c(0x3ad)],Input['update']=function(){const _0x3acb6e=_0x19616c;VisuMZ[_0x3acb6e(0x4f5)][_0x3acb6e(0x966)][_0x3acb6e(0x4a5)](this);if(this[_0x3acb6e(0x526)])this[_0x3acb6e(0x526)]--;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x3cd)]=Input['_pollGamepads'],Input[_0x19616c(0x7b2)]=function(){const _0x150659=_0x19616c;if(this[_0x150659(0x526)])return;VisuMZ['CoreEngine'][_0x150659(0x3cd)][_0x150659(0x4a5)](this);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x2f4)]=Input['_setupEventHandlers'],Input[_0x19616c(0x5ef)]=function(){const _0xc8ef5f=_0x19616c;VisuMZ['CoreEngine']['Input_setupEventHandlers']['call'](this),document[_0xc8ef5f(0x408)](_0xc8ef5f(0x84b),this[_0xc8ef5f(0x349)][_0xc8ef5f(0x911)](this));},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x761)]=Input[_0x19616c(0x273)],Input[_0x19616c(0x273)]=function(_0x5207dc){const _0x2203d4=_0x19616c;this[_0x2203d4(0x65b)]=_0x5207dc[_0x2203d4(0x932)],VisuMZ[_0x2203d4(0x4f5)][_0x2203d4(0x761)]['call'](this,_0x5207dc),this[_0x2203d4(0x232)](null);},Input['_onKeyPress']=function(_0x131c8f){this['_registerKeyInput'](_0x131c8f);},Input[_0x19616c(0x58d)]=function(_0x123f78){const _0x445106=_0x19616c;this[_0x445106(0x65b)]=_0x123f78[_0x445106(0x932)];let _0x24821=String[_0x445106(0x2a7)](_0x123f78[_0x445106(0x2a5)]);this['_inputString']===undefined?this[_0x445106(0x5a3)]=_0x24821:this[_0x445106(0x5a3)]+=_0x24821;},VisuMZ[_0x19616c(0x4f5)]['Input_shouldPreventDefault']=Input[_0x19616c(0x6cd)],Input[_0x19616c(0x6cd)]=function(_0x16488e){const _0x3f5d36=_0x19616c;if(_0x16488e===0x8)return![];return VisuMZ[_0x3f5d36(0x4f5)][_0x3f5d36(0x52a)]['call'](this,_0x16488e);},Input[_0x19616c(0x80c)]=function(_0x24edfa){const _0x232749=_0x19616c;if(_0x24edfa[_0x232749(0x490)](/backspace/i))return this['_inputSpecialKeyCode']===0x8;if(_0x24edfa[_0x232749(0x490)](/enter/i))return this[_0x232749(0x65b)]===0xd;if(_0x24edfa[_0x232749(0x490)](/escape/i))return this[_0x232749(0x65b)]===0x1b;},Input['isNumpadPressed']=function(){const _0x541a6=_0x19616c;return[0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39][_0x541a6(0x285)](this[_0x541a6(0x65b)]);},Input[_0x19616c(0x547)]=function(){const _0x583eb8=_0x19616c;return[0x25,0x26,0x27,0x28][_0x583eb8(0x285)](this[_0x583eb8(0x65b)]);},Input[_0x19616c(0x366)]=function(){const _0xf26265=_0x19616c;if(navigator[_0xf26265(0x2d6)]){const _0xc5594=navigator[_0xf26265(0x2d6)]();if(_0xc5594)for(const _0x492832 of _0xc5594){if(_0x492832&&_0x492832['connected'])return!![];}}return![];},Input['isGamepadTriggered']=function(){const _0x7c3116=_0x19616c;if(navigator[_0x7c3116(0x2d6)]){const _0x209c7f=navigator[_0x7c3116(0x2d6)]();if(_0x209c7f)for(const _0xa21667 of _0x209c7f){if(_0xa21667&&_0xa21667[_0x7c3116(0x693)]){if(this[_0x7c3116(0x3de)](_0xa21667))return!![];if(this[_0x7c3116(0x1a2)](_0xa21667))return!![];}}}return![];},Input[_0x19616c(0x3de)]=function(_0x132eda){const _0x447da9=_0x19616c,_0x3f3853=_0x132eda[_0x447da9(0x7ce)];for(let _0x542ea5=0x0;_0x542ea5<_0x3f3853[_0x447da9(0x375)];_0x542ea5++){if(_0x3f3853[_0x542ea5][_0x447da9(0x57d)])return!![];}return![];},Input[_0x19616c(0x1a2)]=function(_0x1081a6){const _0x201717=_0x19616c,_0x5885bb=_0x1081a6[_0x201717(0x70e)],_0x3af2c4=0.5;if(_0x5885bb[0x0]<-_0x3af2c4)return!![];if(_0x5885bb[0x0]>_0x3af2c4)return!![];if(_0x5885bb[0x1]<-_0x3af2c4)return!![];if(_0x5885bb[0x1]>_0x3af2c4)return!![];return![];},Input[_0x19616c(0x808)]=function(){const _0x399ec8=_0x19616c;return this[_0x399ec8(0x746)]||null;},Input[_0x19616c(0x232)]=function(_0x48a8a1){const _0x2e0743=_0x19616c;this[_0x2e0743(0x746)]=_0x48a8a1;},VisuMZ[_0x19616c(0x4f5)]['Input_updateGamepadState']=Input['_updateGamepadState'],Input[_0x19616c(0x849)]=function(_0x2b551d){const _0x2c58af=_0x19616c;VisuMZ['CoreEngine'][_0x2c58af(0x80b)]['call'](this,_0x2b551d),(this['isGamepadButtonPressed'](_0x2b551d)||this[_0x2c58af(0x1a2)](_0x2b551d))&&this['setLastGamepadUsed'](_0x2b551d);},Input[_0x19616c(0x94e)]=function(){const _0x582c81=_0x19616c;return this['_lastGamepad']?this[_0x582c81(0x746)]['id']:_0x582c81(0x8ff);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x516)]=Tilemap[_0x19616c(0x7f9)][_0x19616c(0x53d)],Tilemap[_0x19616c(0x7f9)]['_addShadow']=function(_0x119f82,_0x251a2d,_0x50b379,_0x1abb14){const _0x46c418=_0x19616c;if($gameMap&&$gameMap[_0x46c418(0x642)]())return;VisuMZ[_0x46c418(0x4f5)][_0x46c418(0x516)][_0x46c418(0x4a5)](this,_0x119f82,_0x251a2d,_0x50b379,_0x1abb14);},Tilemap[_0x19616c(0x338)][_0x19616c(0x7f9)]['_createInternalTextures']=function(){const _0x36943d=_0x19616c;this[_0x36943d(0x88d)]();for(let _0x1db8f6=0x0;_0x1db8f6<Tilemap[_0x36943d(0x86a)]['MAX_GL_TEXTURES'];_0x1db8f6++){const _0xd4750e=new PIXI[(_0x36943d(0x26d))]();_0xd4750e['setSize'](0x800,0x800),VisuMZ[_0x36943d(0x4f5)]['Settings'][_0x36943d(0x1fb)][_0x36943d(0x97b)]&&(_0xd4750e[_0x36943d(0x485)]=PIXI[_0x36943d(0x4c9)]['NEAREST']),this[_0x36943d(0x396)]['push'](_0xd4750e);}},WindowLayer['prototype'][_0x19616c(0x1e0)]=function(){const _0x192403=_0x19616c;return SceneManager&&SceneManager[_0x192403(0x38c)]?SceneManager['_scene'][_0x192403(0x69e)]():!![];},VisuMZ[_0x19616c(0x4f5)]['WindowLayer_render']=WindowLayer[_0x19616c(0x7f9)][_0x19616c(0x231)],WindowLayer[_0x19616c(0x7f9)][_0x19616c(0x231)]=function render(_0x494325){const _0x3091f0=_0x19616c;this['isMaskingEnabled']()?VisuMZ[_0x3091f0(0x4f5)][_0x3091f0(0x3d0)][_0x3091f0(0x4a5)](this,_0x494325):this[_0x3091f0(0x892)](_0x494325);},WindowLayer[_0x19616c(0x7f9)]['renderNoMask']=function render(_0x480b8c){const _0x58fb74=_0x19616c;if(!this['visible'])return;const _0x537050=new PIXI['Graphics'](),_0x4b64bb=_0x480b8c['gl'],_0x458253=this[_0x58fb74(0x4db)][_0x58fb74(0x6b7)]();_0x480b8c[_0x58fb74(0x2b6)][_0x58fb74(0x46e)](),_0x537050[_0x58fb74(0x68a)]=this[_0x58fb74(0x68a)],_0x480b8c[_0x58fb74(0x68d)]['flush'](),_0x4b64bb[_0x58fb74(0x2ef)](_0x4b64bb['STENCIL_TEST']);while(_0x458253[_0x58fb74(0x375)]>0x0){const _0x51327d=_0x458253[_0x58fb74(0x68f)]();_0x51327d[_0x58fb74(0x33f)]&&_0x51327d[_0x58fb74(0x766)]&&_0x51327d[_0x58fb74(0x53e)]>0x0&&(_0x4b64bb[_0x58fb74(0x534)](_0x4b64bb['EQUAL'],0x0,~0x0),_0x4b64bb['stencilOp'](_0x4b64bb['KEEP'],_0x4b64bb[_0x58fb74(0x632)],_0x4b64bb[_0x58fb74(0x632)]),_0x51327d[_0x58fb74(0x231)](_0x480b8c),_0x480b8c['batch'][_0x58fb74(0x44a)](),_0x537050[_0x58fb74(0x772)](),_0x4b64bb[_0x58fb74(0x534)](_0x4b64bb['ALWAYS'],0x1,~0x0),_0x4b64bb['stencilOp'](_0x4b64bb[_0x58fb74(0x315)],_0x4b64bb['REPLACE'],_0x4b64bb['REPLACE']),_0x4b64bb[_0x58fb74(0x496)](_0x4b64bb[_0x58fb74(0x37d)],_0x4b64bb['ONE']),_0x537050['render'](_0x480b8c),_0x480b8c[_0x58fb74(0x68d)][_0x58fb74(0x44a)](),_0x4b64bb['blendFunc'](_0x4b64bb[_0x58fb74(0x3d7)],_0x4b64bb[_0x58fb74(0x1f3)]));}_0x4b64bb['disable'](_0x4b64bb[_0x58fb74(0x575)]),_0x4b64bb[_0x58fb74(0x772)](_0x4b64bb[_0x58fb74(0x2ad)]),_0x4b64bb[_0x58fb74(0x664)](0x0),_0x480b8c[_0x58fb74(0x68d)][_0x58fb74(0x44a)]();for(const _0x4da52b of this[_0x58fb74(0x4db)]){!_0x4da52b[_0x58fb74(0x33f)]&&_0x4da52b[_0x58fb74(0x766)]&&_0x4da52b[_0x58fb74(0x231)](_0x480b8c);}_0x480b8c[_0x58fb74(0x68d)][_0x58fb74(0x44a)]();},DataManager[_0x19616c(0x258)]=function(_0x2c8b75){const _0x4cd2c2=_0x19616c;return this[_0x4cd2c2(0x781)](_0x2c8b75)&&_0x2c8b75[_0x4cd2c2(0x292)]===0x2;},VisuMZ[_0x19616c(0x4f5)]['DataManager_setupNewGame']=DataManager['setupNewGame'],DataManager[_0x19616c(0x512)]=function(){const _0x5e6770=_0x19616c;VisuMZ[_0x5e6770(0x4f5)][_0x5e6770(0x8cb)][_0x5e6770(0x4a5)](this),this['reservePlayTestNewGameCommonEvent'](),this['reserveNewGameCommonEvent']();},DataManager['reservePlayTestNewGameCommonEvent']=function(){const _0x1a0027=_0x19616c;if($gameTemp['isPlaytest']()){const _0x1b65f0=VisuMZ['CoreEngine'][_0x1a0027(0x568)][_0x1a0027(0x1fb)]['NewGameCommonEvent'];if(_0x1b65f0>0x0)$gameTemp[_0x1a0027(0x4e9)](_0x1b65f0);}},DataManager[_0x19616c(0x431)]=function(){const _0x35f0c2=_0x19616c,_0x15247f=VisuMZ[_0x35f0c2(0x4f5)]['Settings']['QoL'][_0x35f0c2(0x92d)]||0x0;if(_0x15247f>0x0)$gameTemp['reserveCommonEvent'](_0x15247f);},DataManager[_0x19616c(0x243)]=function(_0xc51093){const _0x177b54=_0x19616c,_0x59df26=$dataTroops[_0xc51093];if(!_0x59df26)return'';let _0x16b4c8='';_0x16b4c8+=_0x59df26[_0x177b54(0x3e9)];for(const _0x4ec7e0 of _0x59df26[_0x177b54(0x415)]){for(const _0x241e61 of _0x4ec7e0[_0x177b54(0x6b4)]){[0x6c,0x198][_0x177b54(0x8df)](_0x241e61[_0x177b54(0x7d3)])&&(_0x16b4c8+='\x0a',_0x16b4c8+=_0x241e61[_0x177b54(0x353)][0x0]);}}return _0x16b4c8;};(VisuMZ['CoreEngine'][_0x19616c(0x568)]['QoL']['ShortcutScripts']??!![])&&($scene=null,VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x49f)]=Scene_Base['prototype'][_0x19616c(0x630)],Scene_Base['prototype']['create']=function(){const _0x33f17e=_0x19616c;VisuMZ['CoreEngine'][_0x33f17e(0x49f)]['call'](this),$scene=this;},$spriteset=null,VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x245)]=Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x469)],Scene_Map[_0x19616c(0x7f9)]['createSpriteset']=function(){const _0x53884c=_0x19616c;VisuMZ['CoreEngine'][_0x53884c(0x245)]['call'](this),$spriteset=this[_0x53884c(0x4f0)];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x61e)]=Scene_Battle[_0x19616c(0x7f9)][_0x19616c(0x469)],Scene_Battle['prototype']['createSpriteset']=function(){const _0x1e0269=_0x19616c;VisuMZ[_0x1e0269(0x4f5)][_0x1e0269(0x61e)][_0x1e0269(0x4a5)](this),$spriteset=this[_0x1e0269(0x4f0)];},VisuMZ[_0x19616c(0x4f5)]['Scene_Base_terminate']=Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x2d3)],Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x2d3)]=function(){const _0x434b2f=_0x19616c;VisuMZ[_0x434b2f(0x4f5)][_0x434b2f(0x518)]['call'](this),$spriteset=null,$subject=null,$targets=null,$target=null;},$subject=null,$targets=null,$target=null,VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x201)]=BattleManager[_0x19616c(0x3ad)],BattleManager[_0x19616c(0x3ad)]=function(_0x316689){const _0x34d2bd=_0x19616c;VisuMZ[_0x34d2bd(0x4f5)][_0x34d2bd(0x201)]['call'](this,_0x316689),this[_0x34d2bd(0x80f)]();},BattleManager[_0x19616c(0x80f)]=function(){const _0x151756=_0x19616c;$subject=this[_0x151756(0x5cf)],$targets=this[_0x151756(0x50a)],$target=this['_target']||this[_0x151756(0x50a)][0x0];},$event=null,VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x1c0)]=Game_Event['prototype'][_0x19616c(0x7a0)],Game_Event[_0x19616c(0x7f9)][_0x19616c(0x7a0)]=function(){const _0x5248ce=_0x19616c;VisuMZ[_0x5248ce(0x4f5)][_0x5248ce(0x1c0)][_0x5248ce(0x4a5)](this),$event=this;},VisuMZ[_0x19616c(0x4f5)]['Scene_Map_update']=Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x3ad)],Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x3ad)]=function(){const _0x2db380=_0x19616c;VisuMZ[_0x2db380(0x4f5)]['Scene_Map_update'][_0x2db380(0x4a5)](this),$gameMap['updateCurrentEvent']();},Game_Map['prototype'][_0x19616c(0x778)]=function(){const _0x27150f=_0x19616c;!this[_0x27150f(0x4ee)]()&&$event!==null&&($event=null);},$commonEvent=function(_0x5f02b5){const _0xa2f88e=_0x19616c;if($gameTemp)$gameTemp[_0xa2f88e(0x4e9)](_0x5f02b5);});;$onceParallel=function(_0x2e423b,_0x2dd684){const _0x7ce87e=_0x19616c;if(SceneManager[_0x7ce87e(0x7bb)]())SceneManager[_0x7ce87e(0x38c)]['playOnceParallelInterpreter'](_0x2e423b,_0x2dd684);else{if(SceneManager[_0x7ce87e(0x806)]()){if(Imported[_0x7ce87e(0x96c)])SceneManager[_0x7ce87e(0x38c)][_0x7ce87e(0x203)](_0x2e423b);else $gameTemp&&$gameTemp[_0x7ce87e(0x24a)]()&&alert('Once\x20Parallel\x20for\x20Battle\x20requires\x20VisuMZ_1_BattleCore!');}else $gameTemp&&$gameTemp[_0x7ce87e(0x24a)]()&&alert(_0x7ce87e(0x63b));}},StorageManager[_0x19616c(0x208)]=function(_0x1b4931){return new Promise((_0x32880f,_0x5ed46d)=>{const _0x452a3c=_0x484b;try{const _0x4a4733=pako[_0x452a3c(0x75b)](_0x1b4931,{'to':'string','level':0x1});if(_0x4a4733[_0x452a3c(0x375)]>=0xc350){}_0x32880f(_0x4a4733);}catch(_0x5ac07e){_0x5ed46d(_0x5ac07e);}});},TextManager[_0x19616c(0x33a)]=['','','','CANCEL','','',_0x19616c(0x5b2),'','BACKSPACE',_0x19616c(0x30d),'','',_0x19616c(0x58f),_0x19616c(0x805),_0x19616c(0x6c9),'',_0x19616c(0x662),_0x19616c(0x833),_0x19616c(0x373),_0x19616c(0x7e9),_0x19616c(0x601),_0x19616c(0x269),_0x19616c(0x443),_0x19616c(0x303),_0x19616c(0x829),_0x19616c(0x461),'',_0x19616c(0x449),_0x19616c(0x950),_0x19616c(0x5ed),_0x19616c(0x530),'MODECHANGE','SPACE',_0x19616c(0x295),_0x19616c(0x6b2),_0x19616c(0x40b),'HOME',_0x19616c(0x4a4),'UP',_0x19616c(0x8d6),_0x19616c(0x486),_0x19616c(0x3d2),'PRINT',_0x19616c(0x4ca),_0x19616c(0x889),_0x19616c(0x22d),_0x19616c(0x72f),'','0','1','2','3','4','5','6','7','8','9',_0x19616c(0x6c1),_0x19616c(0x7bc),_0x19616c(0x96d),_0x19616c(0x88c),_0x19616c(0x803),'QUESTION_MARK','AT','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','OS_KEY','',_0x19616c(0x64f),'',_0x19616c(0x2b0),'NUMPAD0','NUMPAD1',_0x19616c(0x368),_0x19616c(0x7b5),'NUMPAD4',_0x19616c(0x4cd),_0x19616c(0x816),_0x19616c(0x45d),_0x19616c(0x558),_0x19616c(0x8cc),_0x19616c(0x264),_0x19616c(0x42f),_0x19616c(0x672),_0x19616c(0x2e6),'DECIMAL',_0x19616c(0x979),'F1','F2','F3','F4','F5','F6','F7','F8','F9',_0x19616c(0x5c9),_0x19616c(0x4ac),_0x19616c(0x277),_0x19616c(0x19c),_0x19616c(0x764),_0x19616c(0x4e4),_0x19616c(0x3f3),_0x19616c(0x770),'F18',_0x19616c(0x7b7),'F20',_0x19616c(0x67f),_0x19616c(0x91c),_0x19616c(0x539),_0x19616c(0x2a1),'','','','','','','','','NUM_LOCK',_0x19616c(0x395),'WIN_OEM_FJ_JISHO',_0x19616c(0x903),_0x19616c(0x2b7),'WIN_OEM_FJ_LOYA',_0x19616c(0x21c),'','','','','','','','','',_0x19616c(0x886),_0x19616c(0x897),_0x19616c(0x59a),_0x19616c(0x3e4),_0x19616c(0x838),_0x19616c(0x8e9),_0x19616c(0x825),_0x19616c(0x64c),_0x19616c(0x84e),'CLOSE_PAREN',_0x19616c(0x2a3),_0x19616c(0x81a),_0x19616c(0x5c6),_0x19616c(0x721),_0x19616c(0x7a8),_0x19616c(0x85b),_0x19616c(0x6d3),'','','','',_0x19616c(0x62a),_0x19616c(0x990),_0x19616c(0x958),'','',_0x19616c(0x7bc),'EQUALS',_0x19616c(0x1da),'MINUS',_0x19616c(0x307),_0x19616c(0x1d0),_0x19616c(0x52e),'','','','','','','','','','','','','','','','','','','','','','','','','','','OPEN_BRACKET',_0x19616c(0x1ab),_0x19616c(0x520),_0x19616c(0x6fe),'',_0x19616c(0x67c),_0x19616c(0x1a9),'',_0x19616c(0x8ee),_0x19616c(0x1cc),'',_0x19616c(0x3fb),'','','WIN_OEM_RESET',_0x19616c(0x219),_0x19616c(0x438),'WIN_OEM_PA2',_0x19616c(0x404),_0x19616c(0x553),_0x19616c(0x2cc),_0x19616c(0x2ed),_0x19616c(0x4b4),_0x19616c(0x249),'WIN_OEM_AUTO',_0x19616c(0x22e),_0x19616c(0x804),'ATTN',_0x19616c(0x6a7),_0x19616c(0x2ab),'EREOF','PLAY',_0x19616c(0x90d),'',_0x19616c(0x743),'WIN_OEM_CLEAR',''],TextManager[_0x19616c(0x7e7)]=VisuMZ['CoreEngine'][_0x19616c(0x568)][_0x19616c(0x21d)][_0x19616c(0x896)],TextManager[_0x19616c(0x6f5)]=VisuMZ['CoreEngine']['Settings'][_0x19616c(0x21d)][_0x19616c(0x720)],TextManager[_0x19616c(0x79e)]=VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)][_0x19616c(0x21d)][_0x19616c(0x28c)],VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x358)]=TextManager[_0x19616c(0x5a2)],TextManager['param']=function(_0x4a8ae4){const _0x14a69f=_0x19616c;return typeof _0x4a8ae4===_0x14a69f(0x7ee)?VisuMZ[_0x14a69f(0x4f5)][_0x14a69f(0x358)][_0x14a69f(0x4a5)](this,_0x4a8ae4):this[_0x14a69f(0x767)](_0x4a8ae4);},TextManager['paramName']=function(_0xb492c7){const _0x57d8e8=_0x19616c;_0xb492c7=String(_0xb492c7||'')[_0x57d8e8(0x319)]();const _0x4e519b=VisuMZ['CoreEngine'][_0x57d8e8(0x568)][_0x57d8e8(0x477)];if(_0xb492c7===_0x57d8e8(0x5ba))return $dataSystem['terms']['params'][0x0];if(_0xb492c7===_0x57d8e8(0x3dd))return $dataSystem[_0x57d8e8(0x551)][_0x57d8e8(0x8d8)][0x1];if(_0xb492c7===_0x57d8e8(0x7a6))return $dataSystem[_0x57d8e8(0x551)][_0x57d8e8(0x8d8)][0x2];if(_0xb492c7===_0x57d8e8(0x8a0))return $dataSystem[_0x57d8e8(0x551)][_0x57d8e8(0x8d8)][0x3];if(_0xb492c7===_0x57d8e8(0x763))return $dataSystem[_0x57d8e8(0x551)][_0x57d8e8(0x8d8)][0x4];if(_0xb492c7===_0x57d8e8(0x66f))return $dataSystem[_0x57d8e8(0x551)]['params'][0x5];if(_0xb492c7===_0x57d8e8(0x5da))return $dataSystem[_0x57d8e8(0x551)][_0x57d8e8(0x8d8)][0x6];if(_0xb492c7===_0x57d8e8(0x655))return $dataSystem[_0x57d8e8(0x551)][_0x57d8e8(0x8d8)][0x7];if(_0xb492c7===_0x57d8e8(0x279))return _0x4e519b['XParamVocab0'];if(_0xb492c7==='EVA')return _0x4e519b[_0x57d8e8(0x27a)];if(_0xb492c7===_0x57d8e8(0x986))return _0x4e519b[_0x57d8e8(0x6a0)];if(_0xb492c7===_0x57d8e8(0x268))return _0x4e519b[_0x57d8e8(0x5f5)];if(_0xb492c7===_0x57d8e8(0x325))return _0x4e519b[_0x57d8e8(0x2cf)];if(_0xb492c7===_0x57d8e8(0x491))return _0x4e519b['XParamVocab5'];if(_0xb492c7===_0x57d8e8(0x4aa))return _0x4e519b[_0x57d8e8(0x78e)];if(_0xb492c7==='HRG')return _0x4e519b[_0x57d8e8(0x560)];if(_0xb492c7===_0x57d8e8(0x6cf))return _0x4e519b[_0x57d8e8(0x60b)];if(_0xb492c7===_0x57d8e8(0x291))return _0x4e519b[_0x57d8e8(0x4c3)];if(_0xb492c7===_0x57d8e8(0x1b6))return _0x4e519b['SParamVocab0'];if(_0xb492c7===_0x57d8e8(0x24c))return _0x4e519b[_0x57d8e8(0x4b9)];if(_0xb492c7===_0x57d8e8(0x36e))return _0x4e519b[_0x57d8e8(0x7a7)];if(_0xb492c7==='PHA')return _0x4e519b[_0x57d8e8(0x400)];if(_0xb492c7==='MCR')return _0x4e519b[_0x57d8e8(0x3b6)];if(_0xb492c7===_0x57d8e8(0x28b))return _0x4e519b[_0x57d8e8(0x718)];if(_0xb492c7===_0x57d8e8(0x938))return _0x4e519b['SParamVocab6'];if(_0xb492c7===_0x57d8e8(0x545))return _0x4e519b[_0x57d8e8(0x733)];if(_0xb492c7===_0x57d8e8(0x913))return _0x4e519b['SParamVocab8'];if(_0xb492c7==='EXR')return _0x4e519b['SParamVocab9'];if(VisuMZ['CoreEngine']['CustomParamNames'][_0xb492c7])return VisuMZ[_0x57d8e8(0x4f5)][_0x57d8e8(0x4cc)][_0xb492c7];return'';},TextManager[_0x19616c(0x726)]=function(_0x1845b2){const _0x7439b4=_0x19616c,_0x5bbd71=Input[_0x7439b4(0x94e)]();return _0x5bbd71===_0x7439b4(0x8ff)?this[_0x7439b4(0x577)](_0x1845b2):this[_0x7439b4(0x691)](_0x5bbd71,_0x1845b2);},TextManager[_0x19616c(0x577)]=function(_0x3791a1){const _0xe607bf=_0x19616c;let _0x323c05=VisuMZ['CoreEngine'][_0xe607bf(0x568)]['ButtonAssist'][_0xe607bf(0x78c)];if(!_0x323c05){if(_0x3791a1===_0xe607bf(0x52b))_0x3791a1=_0xe607bf(0x2a2);if(_0x3791a1===_0xe607bf(0x55c))_0x3791a1=_0xe607bf(0x2a2);}let _0x4829ea=[];for(let _0x377158 in Input[_0xe607bf(0x4ad)]){_0x377158=Number(_0x377158);if(_0x377158>=0x60&&_0x377158<=0x69)continue;if([0x12,0x20][_0xe607bf(0x8df)](_0x377158))continue;_0x3791a1===Input['keyMapper'][_0x377158]&&_0x4829ea[_0xe607bf(0x69f)](_0x377158);}for(let _0x4ac512=0x0;_0x4ac512<_0x4829ea[_0xe607bf(0x375)];_0x4ac512++){_0x4829ea[_0x4ac512]=TextManager[_0xe607bf(0x33a)][_0x4829ea[_0x4ac512]];}return this[_0xe607bf(0x881)](_0x4829ea);},TextManager[_0x19616c(0x881)]=function(_0x4584bf){const _0x349d77=_0x19616c,_0x5a97e6=VisuMZ['CoreEngine'][_0x349d77(0x568)][_0x349d77(0x21d)],_0x4250a8=_0x5a97e6[_0x349d77(0x6dc)];let _0x4ab1e1='';if(_0x4584bf[_0x349d77(0x8df)]('UP'))_0x4ab1e1='UP';else{if(_0x4584bf[_0x349d77(0x8df)](_0x349d77(0x486)))_0x4ab1e1=_0x349d77(0x486);else{if(_0x4584bf[_0x349d77(0x8df)]('LEFT'))_0x4ab1e1=_0x349d77(0x4a4);else _0x4584bf[_0x349d77(0x8df)](_0x349d77(0x8d6))?_0x4ab1e1=_0x349d77(0x8d6):_0x4ab1e1=_0x4584bf[_0x349d77(0x708)]();}}const _0x4ecd06=_0x349d77(0x5db)[_0x349d77(0x67e)](_0x4ab1e1);return _0x5a97e6[_0x4ecd06]?_0x5a97e6[_0x4ecd06]:_0x4250a8[_0x349d77(0x67e)](_0x4ab1e1);},TextManager[_0x19616c(0x8ea)]=function(_0x27d644,_0x34f3c4){const _0x23ce0f=_0x19616c,_0x2ff9d9=VisuMZ[_0x23ce0f(0x4f5)]['Settings'][_0x23ce0f(0x21d)],_0x82077e=_0x2ff9d9[_0x23ce0f(0x6bf)],_0x5921f7=this[_0x23ce0f(0x726)](_0x27d644),_0x263ddd=this[_0x23ce0f(0x726)](_0x34f3c4);return _0x82077e[_0x23ce0f(0x67e)](_0x5921f7,_0x263ddd);},TextManager[_0x19616c(0x691)]=function(_0x11a9a8,_0x12b218){const _0x52b52e=_0x19616c,_0x2ea6a0=_0x11a9a8[_0x52b52e(0x626)]()[_0x52b52e(0x862)](),_0x1d461e=VisuMZ[_0x52b52e(0x4f5)][_0x52b52e(0x1b4)][_0x2ea6a0];if(!_0x1d461e)return this[_0x52b52e(0x1bf)](_0x11a9a8,_0x12b218);return _0x1d461e[_0x12b218]||this['getKeyboardInputButtonString'](_0x11a9a8,_0x12b218);},TextManager[_0x19616c(0x1bf)]=function(_0x4d36b7,_0x52296f){const _0x39d05f=_0x19616c,_0x533151=_0x4d36b7[_0x39d05f(0x626)]()[_0x39d05f(0x862)]();for(const _0x281183 in VisuMZ[_0x39d05f(0x4f5)][_0x39d05f(0x2d0)]){if(_0x533151[_0x39d05f(0x8df)](_0x281183)){const _0x282bb9=VisuMZ['CoreEngine'][_0x39d05f(0x2d0)][_0x281183],_0x4f0378=VisuMZ['CoreEngine'][_0x39d05f(0x1b4)][_0x282bb9];return _0x4f0378[_0x52296f]||this[_0x39d05f(0x577)](_0x52296f);}}return this[_0x39d05f(0x577)](_0x52296f);},VisuMZ[_0x19616c(0x4f5)]['ColorManager_loadWindowskin']=ColorManager[_0x19616c(0x737)],ColorManager[_0x19616c(0x737)]=function(){const _0x46db4c=_0x19616c;VisuMZ[_0x46db4c(0x4f5)]['ColorManager_loadWindowskin'][_0x46db4c(0x4a5)](this),this['_colorCache']=this[_0x46db4c(0x98a)]||{};},ColorManager['getColorDataFromPluginParameters']=function(_0x5e468f,_0x1b02e0){const _0x419b87=_0x19616c;return _0x1b02e0=String(_0x1b02e0),this['_colorCache']=this[_0x419b87(0x98a)]||{},_0x1b02e0[_0x419b87(0x490)](/#(.*)/i)?this[_0x419b87(0x98a)][_0x5e468f]=_0x419b87(0x71d)['format'](String(RegExp['$1'])):this[_0x419b87(0x98a)][_0x5e468f]=this[_0x419b87(0x401)](Number(_0x1b02e0)),this['_colorCache'][_0x5e468f];},ColorManager[_0x19616c(0x659)]=function(_0x1bb47f){const _0x2e16d4=_0x19616c;return _0x1bb47f=String(_0x1bb47f),_0x1bb47f['match'](/#(.*)/i)?'#%1'[_0x2e16d4(0x67e)](String(RegExp['$1'])):this['textColor'](Number(_0x1bb47f));},ColorManager['clearCachedKeys']=function(){const _0xf3194d=_0x19616c;this[_0xf3194d(0x98a)]={};},ColorManager['normalColor']=function(){const _0x23155c=_0x19616c,_0x524812=_0x23155c(0x64b);this[_0x23155c(0x98a)]=this[_0x23155c(0x98a)]||{};if(this[_0x23155c(0x98a)][_0x524812])return this['_colorCache'][_0x524812];const _0x27ac04=VisuMZ['CoreEngine'][_0x23155c(0x568)][_0x23155c(0x846)]['ColorNormal'];return this['getColorDataFromPluginParameters'](_0x524812,_0x27ac04);},ColorManager[_0x19616c(0x4d8)]=function(){const _0x1b8f7a=_0x19616c,_0x473b81=_0x1b8f7a(0x479);this[_0x1b8f7a(0x98a)]=this['_colorCache']||{};if(this[_0x1b8f7a(0x98a)][_0x473b81])return this[_0x1b8f7a(0x98a)][_0x473b81];const _0x3a352a=VisuMZ[_0x1b8f7a(0x4f5)][_0x1b8f7a(0x568)][_0x1b8f7a(0x846)][_0x1b8f7a(0x1bc)];return this['getColorDataFromPluginParameters'](_0x473b81,_0x3a352a);},ColorManager[_0x19616c(0x4a3)]=function(){const _0x7b0ef1=_0x19616c,_0x295681='_stored_crisisColor';this[_0x7b0ef1(0x98a)]=this[_0x7b0ef1(0x98a)]||{};if(this['_colorCache'][_0x295681])return this[_0x7b0ef1(0x98a)][_0x295681];const _0x1859e8=VisuMZ[_0x7b0ef1(0x4f5)][_0x7b0ef1(0x568)]['Color']['ColorCrisis'];return this[_0x7b0ef1(0x676)](_0x295681,_0x1859e8);},ColorManager[_0x19616c(0x712)]=function(){const _0x54ee36=_0x19616c,_0x487c04=_0x54ee36(0x895);this[_0x54ee36(0x98a)]=this['_colorCache']||{};if(this[_0x54ee36(0x98a)][_0x487c04])return this[_0x54ee36(0x98a)][_0x487c04];const _0x188e37=VisuMZ[_0x54ee36(0x4f5)]['Settings'][_0x54ee36(0x846)][_0x54ee36(0x517)];return this[_0x54ee36(0x676)](_0x487c04,_0x188e37);},ColorManager['gaugeBackColor']=function(){const _0x176bad=_0x19616c,_0x47ebaa='_stored_gaugeBackColor';this[_0x176bad(0x98a)]=this[_0x176bad(0x98a)]||{};if(this[_0x176bad(0x98a)][_0x47ebaa])return this['_colorCache'][_0x47ebaa];const _0x410ed0=VisuMZ[_0x176bad(0x4f5)][_0x176bad(0x568)][_0x176bad(0x846)][_0x176bad(0x7f3)];return this[_0x176bad(0x676)](_0x47ebaa,_0x410ed0);},ColorManager[_0x19616c(0x1ff)]=function(){const _0x4d9ca5=_0x19616c,_0x5300f5=_0x4d9ca5(0x1ae);this[_0x4d9ca5(0x98a)]=this[_0x4d9ca5(0x98a)]||{};if(this['_colorCache'][_0x5300f5])return this[_0x4d9ca5(0x98a)][_0x5300f5];const _0x3cec1b=VisuMZ[_0x4d9ca5(0x4f5)][_0x4d9ca5(0x568)][_0x4d9ca5(0x846)][_0x4d9ca5(0x7b0)];return this[_0x4d9ca5(0x676)](_0x5300f5,_0x3cec1b);},ColorManager[_0x19616c(0x537)]=function(){const _0x5f2567=_0x19616c,_0x3aeee2=_0x5f2567(0x641);this[_0x5f2567(0x98a)]=this[_0x5f2567(0x98a)]||{};if(this[_0x5f2567(0x98a)][_0x3aeee2])return this[_0x5f2567(0x98a)][_0x3aeee2];const _0x5c7d82=VisuMZ[_0x5f2567(0x4f5)]['Settings'][_0x5f2567(0x846)]['ColorHPGauge2'];return this['getColorDataFromPluginParameters'](_0x3aeee2,_0x5c7d82);},ColorManager['mpGaugeColor1']=function(){const _0x221d5b=_0x19616c,_0x47b9f8='_stored_mpGaugeColor1';this['_colorCache']=this[_0x221d5b(0x98a)]||{};if(this['_colorCache'][_0x47b9f8])return this[_0x221d5b(0x98a)][_0x47b9f8];const _0x4eeeec=VisuMZ[_0x221d5b(0x4f5)][_0x221d5b(0x568)][_0x221d5b(0x846)]['ColorMPGauge1'];return this[_0x221d5b(0x676)](_0x47b9f8,_0x4eeeec);},ColorManager['mpGaugeColor2']=function(){const _0x47856a=_0x19616c,_0x3aa1f2=_0x47856a(0x267);this[_0x47856a(0x98a)]=this[_0x47856a(0x98a)]||{};if(this[_0x47856a(0x98a)][_0x3aa1f2])return this[_0x47856a(0x98a)][_0x3aa1f2];const _0x22554a=VisuMZ['CoreEngine']['Settings'][_0x47856a(0x846)]['ColorMPGauge2'];return this[_0x47856a(0x676)](_0x3aa1f2,_0x22554a);},ColorManager[_0x19616c(0x83d)]=function(){const _0x2aeb82=_0x19616c,_0x4906ed=_0x2aeb82(0x779);this[_0x2aeb82(0x98a)]=this['_colorCache']||{};if(this[_0x2aeb82(0x98a)][_0x4906ed])return this[_0x2aeb82(0x98a)][_0x4906ed];const _0x5e042c=VisuMZ[_0x2aeb82(0x4f5)][_0x2aeb82(0x568)][_0x2aeb82(0x846)][_0x2aeb82(0x6aa)];return this['getColorDataFromPluginParameters'](_0x4906ed,_0x5e042c);},ColorManager[_0x19616c(0x3c9)]=function(){const _0x10307f=_0x19616c,_0x55d012=_0x10307f(0x8de);this[_0x10307f(0x98a)]=this[_0x10307f(0x98a)]||{};if(this[_0x10307f(0x98a)][_0x55d012])return this[_0x10307f(0x98a)][_0x55d012];const _0x54964f=VisuMZ[_0x10307f(0x4f5)][_0x10307f(0x568)][_0x10307f(0x846)][_0x10307f(0x361)];return this[_0x10307f(0x676)](_0x55d012,_0x54964f);},ColorManager[_0x19616c(0x2ea)]=function(){const _0x5e2a35=_0x19616c,_0x10bc8b=_0x5e2a35(0x261);this[_0x5e2a35(0x98a)]=this[_0x5e2a35(0x98a)]||{};if(this[_0x5e2a35(0x98a)][_0x10bc8b])return this[_0x5e2a35(0x98a)][_0x10bc8b];const _0xafeca5=VisuMZ[_0x5e2a35(0x4f5)]['Settings'][_0x5e2a35(0x846)]['ColorPowerDown'];return this['getColorDataFromPluginParameters'](_0x10bc8b,_0xafeca5);},ColorManager['ctGaugeColor1']=function(){const _0x5a7a7b=_0x19616c,_0x35b3f3=_0x5a7a7b(0x793);this[_0x5a7a7b(0x98a)]=this[_0x5a7a7b(0x98a)]||{};if(this['_colorCache'][_0x35b3f3])return this['_colorCache'][_0x35b3f3];const _0x4bceee=VisuMZ['CoreEngine'][_0x5a7a7b(0x568)]['Color']['ColorCTGauge1'];return this[_0x5a7a7b(0x676)](_0x35b3f3,_0x4bceee);},ColorManager[_0x19616c(0x4fd)]=function(){const _0x56bb60=_0x19616c,_0x5a8d55=_0x56bb60(0x78f);this['_colorCache']=this['_colorCache']||{};if(this['_colorCache'][_0x5a8d55])return this[_0x56bb60(0x98a)][_0x5a8d55];const _0x585c03=VisuMZ[_0x56bb60(0x4f5)][_0x56bb60(0x568)][_0x56bb60(0x846)][_0x56bb60(0x507)];return this[_0x56bb60(0x676)](_0x5a8d55,_0x585c03);},ColorManager[_0x19616c(0x23f)]=function(){const _0x501273=_0x19616c,_0x163820=_0x501273(0x2e8);this[_0x501273(0x98a)]=this[_0x501273(0x98a)]||{};if(this['_colorCache'][_0x163820])return this[_0x501273(0x98a)][_0x163820];const _0x49a73f=VisuMZ[_0x501273(0x4f5)][_0x501273(0x568)]['Color'][_0x501273(0x2da)];return this['getColorDataFromPluginParameters'](_0x163820,_0x49a73f);},ColorManager[_0x19616c(0x544)]=function(){const _0x12d2cb=_0x19616c,_0x52994f='_stored_tpGaugeColor2';this['_colorCache']=this[_0x12d2cb(0x98a)]||{};if(this[_0x12d2cb(0x98a)][_0x52994f])return this[_0x12d2cb(0x98a)][_0x52994f];const _0x254161=VisuMZ['CoreEngine']['Settings'][_0x12d2cb(0x846)]['ColorTPGauge2'];return this[_0x12d2cb(0x676)](_0x52994f,_0x254161);},ColorManager[_0x19616c(0x883)]=function(){const _0x5ee476=_0x19616c,_0xaf935b=_0x5ee476(0x673);this[_0x5ee476(0x98a)]=this[_0x5ee476(0x98a)]||{};if(this[_0x5ee476(0x98a)][_0xaf935b])return this[_0x5ee476(0x98a)][_0xaf935b];const _0x5edb54=VisuMZ[_0x5ee476(0x4f5)][_0x5ee476(0x568)][_0x5ee476(0x846)]['ColorTPCost'];return this[_0x5ee476(0x676)](_0xaf935b,_0x5edb54);},ColorManager[_0x19616c(0x8a8)]=function(){const _0x15ab52=_0x19616c,_0x1f6963=_0x15ab52(0x2db);this['_colorCache']=this[_0x15ab52(0x98a)]||{};if(this[_0x15ab52(0x98a)][_0x1f6963])return this['_colorCache'][_0x1f6963];const _0xff32ba=VisuMZ[_0x15ab52(0x4f5)][_0x15ab52(0x568)][_0x15ab52(0x846)]['ColorTPCost'];return this[_0x15ab52(0x676)](_0x1f6963,_0xff32ba);},ColorManager['expGaugeColor1']=function(){const _0x33502d=_0x19616c,_0x4cf9f7='_stored_expGaugeColor1';this[_0x33502d(0x98a)]=this[_0x33502d(0x98a)]||{};if(this[_0x33502d(0x98a)][_0x4cf9f7])return this['_colorCache'][_0x4cf9f7];const _0x54d45a=VisuMZ['CoreEngine']['Settings']['Color'][_0x33502d(0x464)];return this[_0x33502d(0x676)](_0x4cf9f7,_0x54d45a);},ColorManager[_0x19616c(0x648)]=function(){const _0x3a1cea=_0x19616c,_0x89886c=_0x3a1cea(0x8fd);this['_colorCache']=this[_0x3a1cea(0x98a)]||{};if(this[_0x3a1cea(0x98a)][_0x89886c])return this[_0x3a1cea(0x98a)][_0x89886c];const _0x409c46=VisuMZ[_0x3a1cea(0x4f5)][_0x3a1cea(0x568)][_0x3a1cea(0x846)][_0x3a1cea(0x820)];return this[_0x3a1cea(0x676)](_0x89886c,_0x409c46);},ColorManager[_0x19616c(0x925)]=function(){const _0x21bc71=_0x19616c,_0x28a2af=_0x21bc71(0x2fa);this[_0x21bc71(0x98a)]=this['_colorCache']||{};if(this[_0x21bc71(0x98a)][_0x28a2af])return this[_0x21bc71(0x98a)][_0x28a2af];const _0x3b78bd=VisuMZ[_0x21bc71(0x4f5)][_0x21bc71(0x568)][_0x21bc71(0x846)][_0x21bc71(0x4bb)];return this['getColorDataFromPluginParameters'](_0x28a2af,_0x3b78bd);},ColorManager[_0x19616c(0x474)]=function(){const _0x5896ac=_0x19616c,_0x5f4c9a=_0x5896ac(0x298);this[_0x5896ac(0x98a)]=this[_0x5896ac(0x98a)]||{};if(this[_0x5896ac(0x98a)][_0x5f4c9a])return this[_0x5896ac(0x98a)][_0x5f4c9a];const _0x4561b4=VisuMZ[_0x5896ac(0x4f5)][_0x5896ac(0x568)][_0x5896ac(0x846)][_0x5896ac(0x52c)];return this['getColorDataFromPluginParameters'](_0x5f4c9a,_0x4561b4);},ColorManager[_0x19616c(0x7e0)]=function(_0x13fccb){const _0x4f4c89=_0x19616c;return VisuMZ[_0x4f4c89(0x4f5)]['Settings']['Color']['ActorHPColor'][_0x4f4c89(0x4a5)](this,_0x13fccb);},ColorManager[_0x19616c(0x5d7)]=function(_0x32d818){const _0x38e8ed=_0x19616c;return VisuMZ[_0x38e8ed(0x4f5)][_0x38e8ed(0x568)][_0x38e8ed(0x846)][_0x38e8ed(0x19f)][_0x38e8ed(0x4a5)](this,_0x32d818);},ColorManager[_0x19616c(0x1ac)]=function(_0x48ffbb){const _0x5c17f3=_0x19616c;return VisuMZ[_0x5c17f3(0x4f5)]['Settings']['Color'][_0x5c17f3(0x30f)]['call'](this,_0x48ffbb);},ColorManager['paramchangeTextColor']=function(_0x29b3d0){const _0x38172e=_0x19616c;return VisuMZ[_0x38172e(0x4f5)]['Settings'][_0x38172e(0x846)][_0x38172e(0x3c7)][_0x38172e(0x4a5)](this,_0x29b3d0);},ColorManager[_0x19616c(0x4bf)]=function(_0x16310f){const _0x11fc55=_0x19616c;return VisuMZ[_0x11fc55(0x4f5)][_0x11fc55(0x568)][_0x11fc55(0x846)]['DamageColor'][_0x11fc55(0x4a5)](this,_0x16310f);},ColorManager[_0x19616c(0x522)]=function(){const _0x132995=_0x19616c;return VisuMZ[_0x132995(0x4f5)]['Settings'][_0x132995(0x846)][_0x132995(0x31d)];},ColorManager[_0x19616c(0x574)]=function(){const _0x44ab97=_0x19616c;return VisuMZ[_0x44ab97(0x4f5)][_0x44ab97(0x568)][_0x44ab97(0x846)][_0x44ab97(0x773)]||_0x44ab97(0x39c);},ColorManager[_0x19616c(0x47a)]=function(){const _0x11f7b3=_0x19616c;return VisuMZ[_0x11f7b3(0x4f5)][_0x11f7b3(0x568)][_0x11f7b3(0x846)][_0x11f7b3(0x8c6)]||_0x11f7b3(0x86f);},ColorManager['dimColor1']=function(){const _0x4809fe=_0x19616c;return VisuMZ[_0x4809fe(0x4f5)][_0x4809fe(0x568)]['Color']['DimColor1'];},ColorManager[_0x19616c(0x2f1)]=function(){const _0x484cf5=_0x19616c;return VisuMZ[_0x484cf5(0x4f5)][_0x484cf5(0x568)][_0x484cf5(0x846)][_0x484cf5(0x60a)];},ColorManager[_0x19616c(0x542)]=function(){const _0x10d209=_0x19616c;return VisuMZ[_0x10d209(0x4f5)]['Settings'][_0x10d209(0x846)][_0x10d209(0x34c)];},ColorManager[_0x19616c(0x200)]=function(){const _0x558a7a=_0x19616c;return VisuMZ['CoreEngine'][_0x558a7a(0x568)]['Color'][_0x558a7a(0x2d9)];},SceneManager['_storedStack']=[],SceneManager[_0x19616c(0x806)]=function(){const _0x322274=_0x19616c;return this[_0x322274(0x38c)]&&this[_0x322274(0x38c)][_0x322274(0x597)]===Scene_Battle;},SceneManager['isSceneMap']=function(){const _0x4e5ac7=_0x19616c;return this[_0x4e5ac7(0x38c)]&&this[_0x4e5ac7(0x38c)][_0x4e5ac7(0x597)]===Scene_Map;},SceneManager[_0x19616c(0x7b8)]=function(){const _0x47a3bc=_0x19616c;return this[_0x47a3bc(0x38c)]&&this[_0x47a3bc(0x38c)]instanceof Scene_Map;},VisuMZ['CoreEngine']['SceneManager_initialize']=SceneManager[_0x19616c(0x5cd)],SceneManager['initialize']=function(){const _0x5e3959=_0x19616c;VisuMZ[_0x5e3959(0x4f5)][_0x5e3959(0x974)][_0x5e3959(0x4a5)](this),this[_0x5e3959(0x8d3)]();},VisuMZ[_0x19616c(0x4f5)]['SceneManager_onKeyDown']=SceneManager[_0x19616c(0x476)],SceneManager['onKeyDown']=function(_0x345dd5){const _0x5af655=_0x19616c;if($gameTemp)this[_0x5af655(0x5c0)](_0x345dd5);VisuMZ[_0x5af655(0x4f5)][_0x5af655(0x492)]['call'](this,_0x345dd5);},SceneManager['onKeyDownKeysF6F7']=function(_0x2f3c46){const _0x4c6859=_0x19616c;if(!_0x2f3c46['ctrlKey']&&!_0x2f3c46[_0x4c6859(0x822)])switch(_0x2f3c46[_0x4c6859(0x932)]){case 0x52:this['playTestShiftR']();break;case 0x54:this[_0x4c6859(0x827)]();break;case 0x75:this[_0x4c6859(0x813)]();break;case 0x76:if(Input[_0x4c6859(0x364)](_0x4c6859(0x68f))||Input[_0x4c6859(0x364)](_0x4c6859(0x3a7)))return;this['playTestF7']();break;}else{if(_0x2f3c46[_0x4c6859(0x6a3)]){let _0x4300a3=_0x2f3c46[_0x4c6859(0x932)];if(_0x4300a3>=0x31&&_0x4300a3<=0x39){const _0x1a7ab3=_0x4300a3-0x30;return SceneManager['playtestQuickLoad'](_0x1a7ab3);}else{if(_0x4300a3>=0x61&&_0x4300a3<=0x69){const _0x175a58=_0x4300a3-0x60;return SceneManager[_0x4c6859(0x917)](_0x175a58);}}}}},SceneManager[_0x19616c(0x813)]=function(){const _0x4b21ef=_0x19616c;if($gameTemp[_0x4b21ef(0x24a)]()&&VisuMZ[_0x4b21ef(0x4f5)]['Settings']['QoL'][_0x4b21ef(0x567)]){ConfigManager['seVolume']!==0x0?(ConfigManager[_0x4b21ef(0x3ee)]=0x0,ConfigManager[_0x4b21ef(0x3d6)]=0x0,ConfigManager[_0x4b21ef(0x7d8)]=0x0,ConfigManager[_0x4b21ef(0x707)]=0x0):(ConfigManager['bgmVolume']=0x64,ConfigManager[_0x4b21ef(0x3d6)]=0x64,ConfigManager[_0x4b21ef(0x7d8)]=0x64,ConfigManager['seVolume']=0x64);ConfigManager['save']();if(this['_scene'][_0x4b21ef(0x597)]===Scene_Options){if(this[_0x4b21ef(0x38c)][_0x4b21ef(0x3d9)])this[_0x4b21ef(0x38c)][_0x4b21ef(0x3d9)][_0x4b21ef(0x379)]();if(this['_scene'][_0x4b21ef(0x6e9)])this[_0x4b21ef(0x38c)][_0x4b21ef(0x6e9)]['refresh']();}}},SceneManager[_0x19616c(0x715)]=function(){const _0x1b2819=_0x19616c;$gameTemp[_0x1b2819(0x24a)]()&&VisuMZ[_0x1b2819(0x4f5)][_0x1b2819(0x568)][_0x1b2819(0x1fb)]['F7key']&&($gameTemp[_0x1b2819(0x989)]=!$gameTemp[_0x1b2819(0x989)]);},SceneManager[_0x19616c(0x92e)]=function(){const _0x1f9cc1=_0x19616c;if(!VisuMZ['CoreEngine'][_0x1f9cc1(0x568)][_0x1f9cc1(0x1fb)][_0x1f9cc1(0x6f6)])return;if(!$gameTemp['isPlaytest']())return;if(!SceneManager[_0x1f9cc1(0x806)]())return;if(!Input[_0x1f9cc1(0x364)](_0x1f9cc1(0x68f)))return;for(const _0x558290 of $gameParty[_0x1f9cc1(0x1d4)]()){if(!_0x558290)continue;_0x558290['recoverAll']();}},SceneManager[_0x19616c(0x827)]=function(){const _0x1c4680=_0x19616c;if(!VisuMZ[_0x1c4680(0x4f5)][_0x1c4680(0x568)][_0x1c4680(0x1fb)][_0x1c4680(0x634)])return;if(!$gameTemp[_0x1c4680(0x24a)]())return;if(!SceneManager['isSceneBattle']())return;if(!Input[_0x1c4680(0x364)]('shift'))return;for(const _0xed49af of $gameParty[_0x1c4680(0x1d4)]()){if(!_0xed49af)continue;_0xed49af[_0x1c4680(0x403)](_0xed49af[_0x1c4680(0x945)]());}},SceneManager['playtestQuickLoad']=function(_0x4163d8){const _0x139b09=_0x19616c;if(!$gameTemp[_0x139b09(0x24a)]())return;if(!DataManager[_0x139b09(0x5dd)](_0x4163d8))return;if(!(VisuMZ['CoreEngine'][_0x139b09(0x568)][_0x139b09(0x1fb)][_0x139b09(0x1d6)]??!![]))return;this[_0x139b09(0x69f)](Scene_QuickLoad),this[_0x139b09(0x74d)](_0x4163d8);},SceneManager[_0x19616c(0x8d3)]=function(){const _0x36a022=_0x19616c;this[_0x36a022(0x2d5)]=![],this[_0x36a022(0x728)]=!VisuMZ[_0x36a022(0x4f5)][_0x36a022(0x568)]['UI'][_0x36a022(0x23e)];},SceneManager['setSideButtonLayout']=function(_0x2749a9){const _0xca0238=_0x19616c;VisuMZ[_0xca0238(0x4f5)][_0xca0238(0x568)]['UI'][_0xca0238(0x5ac)]&&(this[_0xca0238(0x2d5)]=_0x2749a9);},SceneManager[_0x19616c(0x7dc)]=function(){const _0x2eba77=_0x19616c;return this[_0x2eba77(0x2d5)];},SceneManager[_0x19616c(0x1f5)]=function(){const _0x5d434c=_0x19616c;return this[_0x5d434c(0x728)];},SceneManager[_0x19616c(0x504)]=function(){const _0xe2cafa=_0x19616c;return this[_0xe2cafa(0x1f5)]()||this['isSideButtonLayout']();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x7df)]=SceneManager[_0x19616c(0x457)],SceneManager['isGameActive']=function(){const _0x33e683=_0x19616c;return VisuMZ[_0x33e683(0x4f5)][_0x33e683(0x568)]['QoL'][_0x33e683(0x326)]?VisuMZ[_0x33e683(0x4f5)]['SceneManager_isGameActive'][_0x33e683(0x4a5)](this):!![];},SceneManager[_0x19616c(0x230)]=function(_0x4f217b){const _0x1b3e08=_0x19616c;if(_0x4f217b instanceof Error)this[_0x1b3e08(0x4b3)](_0x4f217b);else _0x4f217b instanceof Array&&_0x4f217b[0x0]===_0x1b3e08(0x926)?this['catchLoadError'](_0x4f217b):this[_0x1b3e08(0x6c8)](_0x4f217b);this['stop']();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x7d0)]=BattleManager[_0x19616c(0x5e2)],BattleManager[_0x19616c(0x5e2)]=function(){const _0x419bbf=_0x19616c;return VisuMZ[_0x419bbf(0x4f5)][_0x419bbf(0x568)][_0x419bbf(0x1fb)][_0x419bbf(0x405)]?this['processAlwaysEscape']():VisuMZ[_0x419bbf(0x4f5)]['BattleManager_processEscape'][_0x419bbf(0x4a5)](this);},BattleManager[_0x19616c(0x5e5)]=function(){const _0x3f7cba=_0x19616c;return $gameParty[_0x3f7cba(0x281)](),SoundManager['playEscape'](),this[_0x3f7cba(0x80d)](),!![];},BattleManager['isTpb']=function(){const _0x44d54a=_0x19616c;return $gameSystem[_0x44d54a(0x88e)]()>=0x1;},BattleManager[_0x19616c(0x4f8)]=function(){const _0x30545a=_0x19616c;return $gameSystem[_0x30545a(0x88e)]()===0x1;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x57e)]=Game_Temp[_0x19616c(0x7f9)][_0x19616c(0x5cd)],Game_Temp[_0x19616c(0x7f9)][_0x19616c(0x5cd)]=function(){const _0x382553=_0x19616c;VisuMZ[_0x382553(0x4f5)][_0x382553(0x57e)][_0x382553(0x4a5)](this),this[_0x382553(0x901)](),this[_0x382553(0x48a)](),this[_0x382553(0x372)]();},Game_Temp['prototype']['forceOutOfPlaytest']=function(){const _0x35a477=_0x19616c;VisuMZ['CoreEngine'][_0x35a477(0x568)][_0x35a477(0x1fb)]['ForceNoPlayTest']&&(this[_0x35a477(0x4a9)]=![]);},Game_Temp[_0x19616c(0x7f9)][_0x19616c(0x1ef)]=function(_0x4a4871){const _0x1f1217=_0x19616c;this[_0x1f1217(0x6e1)]=_0x4a4871;},Game_Temp['prototype'][_0x19616c(0x615)]=function(){const _0x40c8e5=_0x19616c;return this[_0x40c8e5(0x6e1)];},Game_Temp[_0x19616c(0x7f9)][_0x19616c(0x324)]=function(){const _0x58f4f4=_0x19616c;this[_0x58f4f4(0x2c2)]=undefined,this[_0x58f4f4(0x701)]=undefined,this[_0x58f4f4(0x969)]=undefined;},Game_Temp[_0x19616c(0x7f9)][_0x19616c(0x871)]=function(_0x2af647){const _0x44bb42=_0x19616c;$gameMap&&$dataMap&&$dataMap[_0x44bb42(0x5df)]&&this['parseForcedGameTroopSettingsCoreEngine']($dataMap[_0x44bb42(0x5df)]);const _0x5f30a8=$dataTroops[_0x2af647];if(_0x5f30a8){let _0x2fd71e=DataManager['createTroopNote'](_0x5f30a8['id']);this[_0x44bb42(0x7fe)](_0x2fd71e);}},Game_Temp[_0x19616c(0x7f9)][_0x19616c(0x7fe)]=function(_0x4701c5){const _0x548886=_0x19616c;if(!_0x4701c5)return;if(_0x4701c5[_0x548886(0x490)](/<(?:FRONTVIEW|FRONT VIEW|FV)>/i))this[_0x548886(0x2c2)]='FV';else{if(_0x4701c5[_0x548886(0x490)](/<(?:SIDEVIEW|SIDE VIEW|SV)>/i))this[_0x548886(0x2c2)]='SV';else{if(_0x4701c5['match'](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x389284=String(RegExp['$1']);if(_0x389284[_0x548886(0x490)](/(?:FRONTVIEW|FRONT VIEW|FV)/i))this['_forcedTroopView']='FV';else _0x389284[_0x548886(0x490)](/(?:SIDEVIEW|SIDE VIEW|SV)/i)&&(this[_0x548886(0x2c2)]='SV');}}}if(_0x4701c5[_0x548886(0x490)](/<(?:DTB)>/i))this[_0x548886(0x701)]=0x0;else{if(_0x4701c5[_0x548886(0x490)](/<(?:TPB|ATB)[ ]ACTIVE>/i))this[_0x548886(0x701)]=0x1;else{if(_0x4701c5[_0x548886(0x490)](/<(?:TPB|ATB)[ ]WAIT>/i))this[_0x548886(0x701)]=0x2;else{if(_0x4701c5[_0x548886(0x490)](/<(?:TPB|ATB)>/i))this[_0x548886(0x701)]=0x2;else{if(_0x4701c5['match'](/<(?:CTB)>/i))Imported['VisuMZ_2_BattleSystemCTB']&&(this[_0x548886(0x701)]=_0x548886(0x83b));else{if(_0x4701c5[_0x548886(0x490)](/<(?:STB)>/i))Imported['VisuMZ_2_BattleSystemSTB']&&(this['_forcedBattleSys']=_0x548886(0x225));else{if(_0x4701c5[_0x548886(0x490)](/<(?:BTB)>/i))Imported[_0x548886(0x983)]&&(this[_0x548886(0x701)]=_0x548886(0x50f));else{if(_0x4701c5['match'](/<(?:FTB)>/i))Imported[_0x548886(0x82e)]&&(this[_0x548886(0x701)]=_0x548886(0x80a));else{if(_0x4701c5['match'](/<(?:OTB)>/i))Imported['VisuMZ_2_BattleSystemOTB']&&(this[_0x548886(0x701)]=_0x548886(0x38b));else{if(_0x4701c5[_0x548886(0x490)](/<(?:ETB)>/i))Imported['VisuMZ_2_BattleSystemETB']&&(this[_0x548886(0x701)]=_0x548886(0x640));else{if(_0x4701c5[_0x548886(0x490)](/<(?:PTB)>/i))Imported[_0x548886(0x3f5)]&&(this[_0x548886(0x701)]=_0x548886(0x90c));else{if(_0x4701c5[_0x548886(0x490)](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x492df5=String(RegExp['$1']);if(_0x492df5[_0x548886(0x490)](/DTB/i))this[_0x548886(0x701)]=0x0;else{if(_0x492df5[_0x548886(0x490)](/(?:TPB|ATB)[ ]ACTIVE/i))this[_0x548886(0x701)]=0x1;else{if(_0x492df5[_0x548886(0x490)](/(?:TPB|ATB)[ ]WAIT/i))this[_0x548886(0x701)]=0x2;else{if(_0x492df5[_0x548886(0x490)](/CTB/i))Imported['VisuMZ_2_BattleSystemCTB']&&(this['_forcedBattleSys']=_0x548886(0x83b));else{if(_0x492df5[_0x548886(0x490)](/STB/i))Imported['VisuMZ_2_BattleSystemSTB']&&(this[_0x548886(0x701)]=_0x548886(0x225));else{if(_0x492df5[_0x548886(0x490)](/BTB/i))Imported[_0x548886(0x983)]&&(this[_0x548886(0x701)]=_0x548886(0x50f));else{if(_0x492df5[_0x548886(0x490)](/FTB/i))Imported['VisuMZ_2_BattleSystemFTB']&&(this[_0x548886(0x701)]=_0x548886(0x80a));else{if(_0x492df5[_0x548886(0x490)](/OTB/i))Imported[_0x548886(0x788)]&&(this['_forcedBattleSys']='OTB');else{if(_0x492df5[_0x548886(0x490)](/ETB/i))Imported[_0x548886(0x20c)]&&(this['_forcedBattleSys']=_0x548886(0x640));else _0x492df5['match'](/PTB/i)&&(Imported[_0x548886(0x3f5)]&&(this[_0x548886(0x701)]=_0x548886(0x90c)));}}}}}}}}}}}}}}}}}}}}if(_0x4701c5[_0x548886(0x490)](/<(?:|BATTLE )GRID>/i))this[_0x548886(0x969)]=!![];else _0x4701c5[_0x548886(0x490)](/<NO (?:|BATTLE )GRID>/i)&&(this[_0x548886(0x969)]=![]);},Game_Temp['prototype'][_0x19616c(0x48a)]=function(){const _0x172965=_0x19616c;this[_0x172965(0x55b)]=[];},Game_Temp[_0x19616c(0x7f9)][_0x19616c(0x5fe)]=function(_0x48ad2c,_0xc2df80,_0x2a2765,_0x1cdf8f){const _0x457ee8=_0x19616c;if(!this[_0x457ee8(0x463)]())return;_0x2a2765=_0x2a2765||![],_0x1cdf8f=_0x1cdf8f||![];if($dataAnimations[_0xc2df80]){const _0x559ec7={'targets':_0x48ad2c,'animationId':_0xc2df80,'mirror':_0x2a2765,'mute':_0x1cdf8f};this[_0x457ee8(0x55b)][_0x457ee8(0x69f)](_0x559ec7);for(const _0x5107de of _0x48ad2c){_0x5107de[_0x457ee8(0x5a6)]&&_0x5107de['startAnimation']();}}},Game_Temp[_0x19616c(0x7f9)][_0x19616c(0x463)]=function(){return!![];},Game_Temp['prototype'][_0x19616c(0x90b)]=function(){const _0x329780=_0x19616c;return this['_fauxAnimationQueue'][_0x329780(0x68f)]();},Game_Temp[_0x19616c(0x7f9)][_0x19616c(0x372)]=function(){const _0x4c6a50=_0x19616c;this[_0x4c6a50(0x3c4)]=[];},Game_Temp[_0x19616c(0x7f9)]['requestPointAnimation']=function(_0x330f9b,_0x2dccf2,_0x4d1277,_0x33f9e5,_0x267654){const _0x3cf5f1=_0x19616c;if(!this[_0x3cf5f1(0x299)]())return;_0x33f9e5=_0x33f9e5||![],_0x267654=_0x267654||![];if($dataAnimations[_0x4d1277]){const _0x3b08d2={'x':_0x330f9b,'y':_0x2dccf2,'animationId':_0x4d1277,'mirror':_0x33f9e5,'mute':_0x267654};this[_0x3cf5f1(0x3c4)][_0x3cf5f1(0x69f)](_0x3b08d2);}},Game_Temp['prototype']['showPointAnimations']=function(){return!![];},Game_Temp[_0x19616c(0x7f9)][_0x19616c(0x3ce)]=function(){const _0x37d82f=_0x19616c;return this[_0x37d82f(0x3c4)][_0x37d82f(0x68f)]();},VisuMZ[_0x19616c(0x4f5)]['Game_System_initialize']=Game_System[_0x19616c(0x7f9)][_0x19616c(0x5cd)],Game_System[_0x19616c(0x7f9)][_0x19616c(0x5cd)]=function(){const _0x1d632c=_0x19616c;VisuMZ[_0x1d632c(0x4f5)][_0x1d632c(0x381)][_0x1d632c(0x4a5)](this),this[_0x1d632c(0x47c)]();},Game_System[_0x19616c(0x7f9)][_0x19616c(0x47c)]=function(){const _0x4730e6=_0x19616c;this['_CoreEngineSettings']={'SideView':$dataSystem['optSideView'],'BattleSystem':this['initialBattleSystem'](),'FontSize':$dataSystem[_0x4730e6(0x435)]['fontSize'],'Padding':0xc};},Game_System['prototype'][_0x19616c(0x5f3)]=function(){const _0x2134b0=_0x19616c;if($gameTemp[_0x2134b0(0x2c2)]==='SV')return!![];else{if($gameTemp[_0x2134b0(0x2c2)]==='FV')return![];}if(this[_0x2134b0(0x91b)]===undefined)this['initCoreEngine']();if(this['_CoreEngineSettings'][_0x2134b0(0x909)]===undefined)this[_0x2134b0(0x47c)]();return this[_0x2134b0(0x91b)][_0x2134b0(0x909)];},Game_System[_0x19616c(0x7f9)]['setSideView']=function(_0x2ee781){const _0x370382=_0x19616c;if(this[_0x370382(0x91b)]===undefined)this[_0x370382(0x47c)]();if(this['_CoreEngineSettings'][_0x370382(0x909)]===undefined)this[_0x370382(0x47c)]();this['_CoreEngineSettings']['SideView']=_0x2ee781;},Game_System[_0x19616c(0x7f9)][_0x19616c(0x436)]=function(){const _0x5f03c7=_0x19616c;if(this[_0x5f03c7(0x91b)]===undefined)this[_0x5f03c7(0x47c)]();this[_0x5f03c7(0x91b)][_0x5f03c7(0x801)]=this[_0x5f03c7(0x46b)]();},Game_System['prototype']['initialBattleSystem']=function(){const _0xd0765e=_0x19616c,_0x402e21=(VisuMZ[_0xd0765e(0x4f5)][_0xd0765e(0x568)][_0xd0765e(0x801)]||_0xd0765e(0x31c))['toUpperCase']()[_0xd0765e(0x862)]();return VisuMZ['CoreEngine'][_0xd0765e(0x6ea)](_0x402e21);},Game_System[_0x19616c(0x7f9)][_0x19616c(0x88e)]=function(){const _0x95e22d=_0x19616c;if($gameTemp[_0x95e22d(0x701)]!==undefined)return $gameTemp['_forcedBattleSys'];if(this[_0x95e22d(0x91b)]===undefined)this[_0x95e22d(0x47c)]();if(this[_0x95e22d(0x91b)][_0x95e22d(0x801)]===undefined)this[_0x95e22d(0x436)]();return this[_0x95e22d(0x91b)][_0x95e22d(0x801)];},Game_System['prototype'][_0x19616c(0x4b0)]=function(_0x12841c){const _0x359044=_0x19616c;if(this['_CoreEngineSettings']===undefined)this[_0x359044(0x47c)]();if(this[_0x359044(0x91b)]['BattleSystem']===undefined)this[_0x359044(0x436)]();this['_CoreEngineSettings'][_0x359044(0x801)]=_0x12841c;},Game_System[_0x19616c(0x7f9)][_0x19616c(0x1a8)]=function(){const _0x26aadc=_0x19616c;if(this[_0x26aadc(0x91b)]===undefined)this[_0x26aadc(0x47c)]();if(this[_0x26aadc(0x91b)][_0x26aadc(0x643)]===undefined)this[_0x26aadc(0x47c)]();return this[_0x26aadc(0x91b)][_0x26aadc(0x643)];},Game_System[_0x19616c(0x7f9)][_0x19616c(0x95b)]=function(_0x3f0d52){const _0x234fc6=_0x19616c;if(this['_CoreEngineSettings']===undefined)this[_0x234fc6(0x47c)]();if(this[_0x234fc6(0x91b)][_0x234fc6(0x3e2)]===undefined)this[_0x234fc6(0x47c)]();this[_0x234fc6(0x91b)][_0x234fc6(0x643)]=_0x3f0d52;},Game_System[_0x19616c(0x7f9)][_0x19616c(0x987)]=function(){const _0x401b01=_0x19616c;if(this['_CoreEngineSettings']===undefined)this[_0x401b01(0x47c)]();if(this['_CoreEngineSettings'][_0x401b01(0x562)]===undefined)this[_0x401b01(0x47c)]();return this[_0x401b01(0x91b)]['Padding'];},Game_System[_0x19616c(0x7f9)][_0x19616c(0x688)]=function(_0x3a246d){const _0x1a21ee=_0x19616c;if(this[_0x1a21ee(0x91b)]===undefined)this['initCoreEngine']();if(this[_0x1a21ee(0x91b)]['TimeProgress']===undefined)this[_0x1a21ee(0x47c)]();this[_0x1a21ee(0x91b)][_0x1a21ee(0x562)]=_0x3a246d;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x809)]=Game_Screen['prototype']['initialize'],Game_Screen[_0x19616c(0x7f9)][_0x19616c(0x5cd)]=function(){const _0x74494f=_0x19616c;VisuMZ[_0x74494f(0x4f5)]['Game_Screen_initialize'][_0x74494f(0x4a5)](this),this['initCoreEngineScreenShake']();},Game_Screen[_0x19616c(0x7f9)]['initCoreEngineScreenShake']=function(){const _0x52e2ff=_0x19616c,_0x25acd6=VisuMZ['CoreEngine'][_0x52e2ff(0x568)][_0x52e2ff(0x380)];this[_0x52e2ff(0x727)]=_0x25acd6?.['DefaultStyle']||_0x52e2ff(0x437);},Game_Screen['prototype'][_0x19616c(0x4bc)]=function(){const _0x544d82=_0x19616c;if(this['_coreEngineShakeStyle']===undefined)this[_0x544d82(0x870)]();return this[_0x544d82(0x727)];},Game_Screen[_0x19616c(0x7f9)][_0x19616c(0x7b3)]=function(_0x5e1a0c){const _0x5d8107=_0x19616c;if(this[_0x5d8107(0x727)]===undefined)this[_0x5d8107(0x870)]();this['_coreEngineShakeStyle']=_0x5e1a0c[_0x5d8107(0x626)]()[_0x5d8107(0x862)]();},Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x45e)]=function(){const _0x1ad169=_0x19616c;if($gameParty['inBattle']())return![];return this[_0x1ad169(0x755)]()&&this[_0x1ad169(0x755)]()[_0x1ad169(0x725)](0x0)==='!';},Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x755)]=function(){const _0x3e4a78=_0x19616c;return this[_0x3e4a78(0x4c7)][_0x3e4a78(0x855)]('/')['pop']();},VisuMZ[_0x19616c(0x4f5)]['Game_Picture_x']=Game_Picture[_0x19616c(0x7f9)]['x'],Game_Picture[_0x19616c(0x7f9)]['x']=function(){const _0x2de04f=_0x19616c;return this['isMapScrollLinked']()?this[_0x2de04f(0x352)]():VisuMZ[_0x2de04f(0x4f5)][_0x2de04f(0x4b8)][_0x2de04f(0x4a5)](this);},Game_Picture[_0x19616c(0x7f9)]['xScrollLinkedOffset']=function(){const _0x585806=_0x19616c,_0x13bc6e=$gameMap[_0x585806(0x578)]()*$gameMap[_0x585806(0x32f)]();return(this['_x']-_0x13bc6e)*$gameScreen[_0x585806(0x8b3)]();},VisuMZ[_0x19616c(0x4f5)]['Game_Picture_y']=Game_Picture[_0x19616c(0x7f9)]['y'],Game_Picture[_0x19616c(0x7f9)]['y']=function(){const _0x3524c6=_0x19616c;return this[_0x3524c6(0x45e)]()?this[_0x3524c6(0x26b)]():VisuMZ['CoreEngine'][_0x3524c6(0x5b1)]['call'](this);},Game_Picture['prototype'][_0x19616c(0x26b)]=function(){const _0x4641b1=_0x19616c,_0x168eef=$gameMap[_0x4641b1(0x371)]()*$gameMap[_0x4641b1(0x72a)]();return(this['_y']-_0x168eef)*$gameScreen[_0x4641b1(0x8b3)]();},VisuMZ[_0x19616c(0x4f5)]['Game_Picture_scaleX']=Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x57b)],Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x57b)]=function(){const _0x3d492d=_0x19616c;let _0x27a4c7=VisuMZ['CoreEngine'][_0x3d492d(0x6d6)][_0x3d492d(0x4a5)](this);return this['isMapScrollLinked']()&&(_0x27a4c7*=$gameScreen[_0x3d492d(0x8b3)]()),_0x27a4c7;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x709)]=Game_Picture['prototype']['scaleY'],Game_Picture[_0x19616c(0x7f9)]['scaleY']=function(){const _0x1ec0ac=_0x19616c;let _0x4c4966=VisuMZ[_0x1ec0ac(0x4f5)][_0x1ec0ac(0x709)][_0x1ec0ac(0x4a5)](this);return this[_0x1ec0ac(0x45e)]()&&(_0x4c4966*=$gameScreen['zoomScale']()),_0x4c4966;},Game_Picture['prototype'][_0x19616c(0x8ed)]=function(_0x1c67a3){const _0x5472c8=_0x19616c;this[_0x5472c8(0x56b)]=_0x1c67a3;},VisuMZ[_0x19616c(0x4f5)]['Game_Picture_calcEasing']=Game_Picture['prototype']['calcEasing'],Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x817)]=function(_0x1cb699){const _0xdfed3c=_0x19616c;return this['_coreEasingType']=this[_0xdfed3c(0x56b)]||0x0,[0x0,0x1,0x2,0x3][_0xdfed3c(0x8df)](this[_0xdfed3c(0x56b)])?VisuMZ[_0xdfed3c(0x4f5)]['Game_Picture_calcEasing'][_0xdfed3c(0x4a5)](this,_0x1cb699):VisuMZ[_0xdfed3c(0x376)](_0x1cb699,this['_coreEasingType']);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x6a1)]=Game_Picture['prototype'][_0x19616c(0x936)],Game_Picture['prototype'][_0x19616c(0x936)]=function(){const _0x58a0fa=_0x19616c;VisuMZ[_0x58a0fa(0x4f5)]['Game_Picture_initRotation'][_0x58a0fa(0x4a5)](this),this[_0x58a0fa(0x79f)]();},Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x79f)]=function(){const _0x1580fe=_0x19616c;this[_0x1580fe(0x8d4)]={'current':0x0,'target':0x0,'duration':0x0,'wholeDuration':0x0,'easingType':_0x1580fe(0x625)};},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x3d1)]=Game_Picture[_0x19616c(0x7f9)]['angle'],Game_Picture[_0x19616c(0x7f9)]['angle']=function(){const _0x350fa=_0x19616c;let _0x140138=VisuMZ['CoreEngine'][_0x350fa(0x3d1)][_0x350fa(0x4a5)](this);return _0x140138+=this[_0x350fa(0x711)](),_0x140138;},Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x711)]=function(){const _0x43a17f=_0x19616c;if(this['_anglePlus']===undefined)this[_0x43a17f(0x79f)]();return this[_0x43a17f(0x8d4)][_0x43a17f(0x1d3)]||0x0;},Game_Picture[_0x19616c(0x7f9)]['setAnglePlusData']=function(_0x4b8eca,_0x1515fd,_0x184886){const _0x896607=_0x19616c;if(this[_0x896607(0x8d4)]===undefined)this['initRotationCoreEngine']();this[_0x896607(0x8d4)][_0x896607(0x227)]=_0x4b8eca||0x0,this[_0x896607(0x8d4)]['duration']=_0x1515fd||0x0,this[_0x896607(0x8d4)]['wholeDuration']=_0x1515fd||0x0,this['_anglePlus']['easingType']=_0x184886||'Linear',_0x1515fd<=0x0&&(this[_0x896607(0x8d4)][_0x896607(0x1d3)]=this['_anglePlus'][_0x896607(0x227)]);},Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x341)]=function(_0x5132a9,_0x2c2f48,_0x137324){const _0x459b41=_0x19616c;if(this[_0x459b41(0x8d4)]===undefined)this[_0x459b41(0x79f)]();this[_0x459b41(0x8d4)]['target']+=_0x5132a9||0x0,this[_0x459b41(0x8d4)][_0x459b41(0x300)]=_0x2c2f48||0x0,this[_0x459b41(0x8d4)][_0x459b41(0x44c)]=_0x2c2f48||0x0,this['_anglePlus'][_0x459b41(0x92b)]=_0x137324||'Linear',_0x2c2f48<=0x0&&(this[_0x459b41(0x8d4)][_0x459b41(0x1d3)]=this[_0x459b41(0x8d4)]['target']);},VisuMZ[_0x19616c(0x4f5)]['Game_Picture_updateRotation']=Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x1b5)],Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x1b5)]=function(){const _0x5d69cb=_0x19616c;VisuMZ[_0x5d69cb(0x4f5)][_0x5d69cb(0x5cc)][_0x5d69cb(0x4a5)](this),this[_0x5d69cb(0x66d)]();},Game_Picture[_0x19616c(0x7f9)]['updateAnglePlus']=function(){const _0x542c95=_0x19616c;if(this['_anglePlus']===undefined)this[_0x542c95(0x79f)]();const _0x3c07c2=this[_0x542c95(0x8d4)];if(_0x3c07c2['duration']<=0x0)return;_0x3c07c2[_0x542c95(0x1d3)]=this['applyEasingAnglePlus'](_0x3c07c2[_0x542c95(0x1d3)],_0x3c07c2['target']),_0x3c07c2['duration']--,_0x3c07c2[_0x542c95(0x300)]<=0x0&&(_0x3c07c2[_0x542c95(0x1d3)]=_0x3c07c2['target']);},Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x91f)]=function(_0x210516,_0x18ec75){const _0x3a3095=_0x19616c,_0x23bbd3=this[_0x3a3095(0x8d4)],_0x1fce6f=_0x23bbd3[_0x3a3095(0x92b)],_0x33bf04=_0x23bbd3[_0x3a3095(0x300)],_0x300249=_0x23bbd3[_0x3a3095(0x44c)],_0xccc062=VisuMZ[_0x3a3095(0x376)]((_0x300249-_0x33bf04)/_0x300249,_0x1fce6f),_0x1e2628=VisuMZ[_0x3a3095(0x376)]((_0x300249-_0x33bf04+0x1)/_0x300249,_0x1fce6f),_0x3fcb7b=(_0x210516-_0x18ec75*_0xccc062)/(0x1-_0xccc062);return _0x3fcb7b+(_0x18ec75-_0x3fcb7b)*_0x1e2628;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x694)]=Game_Action[_0x19616c(0x7f9)][_0x19616c(0x6b5)],Game_Action[_0x19616c(0x7f9)][_0x19616c(0x6b5)]=function(_0x4ad1a9){const _0x369e65=_0x19616c;return VisuMZ[_0x369e65(0x4f5)][_0x369e65(0x568)]['QoL'][_0x369e65(0x1f1)]?this[_0x369e65(0x631)](_0x4ad1a9):VisuMZ[_0x369e65(0x4f5)][_0x369e65(0x694)]['call'](this,_0x4ad1a9);},Game_Action[_0x19616c(0x7f9)][_0x19616c(0x631)]=function(_0x2a46f2){const _0x3b85f1=_0x19616c,_0x1b0d7e=this[_0x3b85f1(0x87f)](_0x2a46f2),_0x4800de=this[_0x3b85f1(0x346)](_0x2a46f2),_0xf029ca=this[_0x3b85f1(0x724)](_0x2a46f2);return _0x1b0d7e*(_0x4800de-_0xf029ca);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x592)]=Game_Action[_0x19616c(0x7f9)][_0x19616c(0x77e)],Game_Action['prototype'][_0x19616c(0x77e)]=function(_0x149f32){const _0x335100=_0x19616c;return VisuMZ[_0x335100(0x4f5)][_0x335100(0x568)][_0x335100(0x1fb)][_0x335100(0x1f1)]?0x0:VisuMZ[_0x335100(0x4f5)]['Game_Action_itemEva'][_0x335100(0x4a5)](this,_0x149f32);},Game_Action['prototype'][_0x19616c(0x87f)]=function(_0x2c13bd){const _0x70dc67=_0x19616c;return this[_0x70dc67(0x908)]()[_0x70dc67(0x6c5)]*0.01;},Game_Action[_0x19616c(0x7f9)][_0x19616c(0x346)]=function(_0x54c434){const _0x5f0bc6=_0x19616c;if(VisuMZ[_0x5f0bc6(0x4f5)]['Settings'][_0x5f0bc6(0x1fb)][_0x5f0bc6(0x819)]&&this['isItem']())return 0x1;return this[_0x5f0bc6(0x4de)]()?VisuMZ['CoreEngine'][_0x5f0bc6(0x568)][_0x5f0bc6(0x1fb)][_0x5f0bc6(0x819)]&&this[_0x5f0bc6(0x386)]()[_0x5f0bc6(0x59d)]()?this[_0x5f0bc6(0x386)]()[_0x5f0bc6(0x32d)]+0.05:this[_0x5f0bc6(0x386)]()['hit']:0x1;},Game_Action[_0x19616c(0x7f9)][_0x19616c(0x724)]=function(_0x439150){const _0x2b65f2=_0x19616c;if(this[_0x2b65f2(0x386)]()['isActor']()===_0x439150['isActor']())return 0x0;if(this['isPhysical']())return VisuMZ['CoreEngine'][_0x2b65f2(0x568)][_0x2b65f2(0x1fb)]['AccuracyBoost']&&_0x439150[_0x2b65f2(0x922)]()?_0x439150['eva']-0.05:_0x439150['eva'];else return this['isMagical']()?_0x439150['mev']:0x0;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x359)]=Game_Action[_0x19616c(0x7f9)][_0x19616c(0x28d)],Game_Action['prototype'][_0x19616c(0x28d)]=function(_0x41789a){const _0x10ee50=_0x19616c;VisuMZ[_0x10ee50(0x4f5)][_0x10ee50(0x359)][_0x10ee50(0x4a5)](this,_0x41789a);if(VisuMZ['CoreEngine'][_0x10ee50(0x568)]['QoL']['ImprovedAccuracySystem'])return;const _0x3a63fb=_0x41789a['result']();_0x3a63fb[_0x10ee50(0x1f8)]&&(0x1-this[_0x10ee50(0x77e)](_0x41789a)>this['itemHit'](_0x41789a)&&(_0x3a63fb['missed']=![],_0x3a63fb[_0x10ee50(0x2b5)]=!![]));},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x692)]=Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x2ec)],Game_BattlerBase['prototype']['initMembers']=function(){const _0x18899c=_0x19616c;this[_0x18899c(0x95a)]={},VisuMZ[_0x18899c(0x4f5)]['Game_BattlerBase_initMembers'][_0x18899c(0x4a5)](this);},VisuMZ['CoreEngine'][_0x19616c(0x616)]=Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x379)],Game_BattlerBase['prototype']['refresh']=function(){const _0x3ed1cc=_0x19616c;this['_cache']={},VisuMZ[_0x3ed1cc(0x4f5)][_0x3ed1cc(0x616)][_0x3ed1cc(0x4a5)](this);},Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x41e)]=function(_0x2309f3){const _0x92ba29=_0x19616c;return this[_0x92ba29(0x95a)]=this[_0x92ba29(0x95a)]||{},this['_cache'][_0x2309f3]!==undefined;},VisuMZ[_0x19616c(0x4f5)]['JsReplaceUserVar']=function(_0x52b2cd){const _0x208a00=_0x19616c;return _0x52b2cd=_0x52b2cd||'',_0x52b2cd='\x20'+_0x52b2cd,(VisuMZ[_0x208a00(0x4f5)][_0x208a00(0x568)][_0x208a00(0x477)][_0x208a00(0x19e)]??!![])&&(_0x52b2cd=_0x52b2cd['replace'](/\s(?:USER|THIS)\.mhp\b/gi,_0x208a00(0x226)),_0x52b2cd=_0x52b2cd[_0x208a00(0x233)](/\s(?:USER|THIS)\.mmp\b/gi,_0x208a00(0x6af)),_0x52b2cd=_0x52b2cd[_0x208a00(0x233)](/\s(?:USER|THIS)\.atk\b/gi,_0x208a00(0x3bc)),_0x52b2cd=_0x52b2cd['replace'](/\s(?:USER|THIS)\.def\b/gi,_0x208a00(0x2aa)),_0x52b2cd=_0x52b2cd['replace'](/\s(?:USER|THIS)\.mat\b/gi,_0x208a00(0x97d)),_0x52b2cd=_0x52b2cd[_0x208a00(0x233)](/\s(?:USER|THIS)\.mdf\b/gi,'this.paramBase(5)'),_0x52b2cd=_0x52b2cd[_0x208a00(0x233)](/\s(?:USER|THIS)\.agi\b/gi,_0x208a00(0x1be)),_0x52b2cd=_0x52b2cd[_0x208a00(0x233)](/\s(?:USER|THIS)\.luk\b/gi,_0x208a00(0x6db)),_0x52b2cd=_0x52b2cd['replace'](/\s(?:USER|THIS)\.param\(/gi,_0x208a00(0x7d2))),_0x52b2cd=_0x52b2cd[_0x208a00(0x233)](/\suser\./gi,_0x208a00(0x1d2)),_0x52b2cd;},Game_BattlerBase[_0x19616c(0x7f9)]['paramPlus']=function(_0xc822fd){const _0x5cca1a=_0x19616c,_0x3f3309=(_0x2a3bd8,_0x10a5ee)=>{const _0x39bf16=_0x484b;if(!_0x10a5ee)return _0x2a3bd8;if(_0x10a5ee[_0x39bf16(0x5df)][_0x39bf16(0x490)](VisuMZ[_0x39bf16(0x4f5)][_0x39bf16(0x41f)][_0x39bf16(0x533)][_0xc822fd])){var _0x45b107=Number(RegExp['$1']);_0x2a3bd8+=_0x45b107;}if(_0x10a5ee[_0x39bf16(0x5df)]['match'](VisuMZ[_0x39bf16(0x4f5)][_0x39bf16(0x41f)][_0x39bf16(0x69a)][_0xc822fd])){var _0x208ca5=String(RegExp['$1']);_0x208ca5=VisuMZ[_0x39bf16(0x4f5)]['JsReplaceUserVar'](_0x208ca5);try{_0x2a3bd8+=eval(_0x208ca5);}catch(_0x3fff2f){if($gameTemp['isPlaytest']())console['log'](_0x3fff2f);}}return _0x2a3bd8;};return this[_0x5cca1a(0x63f)]()['reduce'](_0x3f3309,this[_0x5cca1a(0x22a)][_0xc822fd]);},Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x1f9)]=function(_0x49d5e4){const _0x931e65=_0x19616c;var _0x1a5295=_0x931e65(0x5ce)+(this[_0x931e65(0x59d)]()?'Actor':_0x931e65(0x73c))+'ParamMax'+_0x49d5e4;if(this[_0x931e65(0x41e)](_0x1a5295))return this['_cache'][_0x1a5295];this[_0x931e65(0x95a)][_0x1a5295]=eval(VisuMZ[_0x931e65(0x4f5)]['Settings'][_0x931e65(0x477)][_0x1a5295]);const _0x137ff1=(_0x12bb27,_0x1671fe)=>{const _0x1f9998=_0x931e65;if(!_0x1671fe)return _0x12bb27;if(_0x1671fe[_0x1f9998(0x5df)][_0x1f9998(0x490)](VisuMZ[_0x1f9998(0x4f5)][_0x1f9998(0x41f)][_0x1f9998(0x1f9)][_0x49d5e4])){var _0x55e68e=Number(RegExp['$1']);if(_0x55e68e===0x0)_0x55e68e=Number['MAX_SAFE_INTEGER'];_0x12bb27=Math[_0x1f9998(0x5c3)](_0x12bb27,_0x55e68e);}if(_0x1671fe['note'][_0x1f9998(0x490)](VisuMZ[_0x1f9998(0x4f5)]['RegExp'][_0x1f9998(0x697)][_0x49d5e4])){var _0x5f3345=String(RegExp['$1']);_0x5f3345=VisuMZ[_0x1f9998(0x4f5)][_0x1f9998(0x39e)](_0x5f3345);try{_0x12bb27=Math[_0x1f9998(0x5c3)](_0x12bb27,Number(eval(_0x5f3345)));}catch(_0xd7ae48){if($gameTemp['isPlaytest']())console[_0x1f9998(0x765)](_0xd7ae48);}}return _0x12bb27;};if(this[_0x931e65(0x95a)][_0x1a5295]===0x0)this[_0x931e65(0x95a)][_0x1a5295]=Number[_0x931e65(0x66b)];return this[_0x931e65(0x95a)][_0x1a5295]=this['traitObjects']()[_0x931e65(0x48c)](_0x137ff1,this[_0x931e65(0x95a)][_0x1a5295]),this[_0x931e65(0x95a)][_0x1a5295];},Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x2f9)]=function(_0xe8d163){const _0x2ee23b=_0x19616c,_0x2078dc=this[_0x2ee23b(0x661)](Game_BattlerBase[_0x2ee23b(0x5b0)],_0xe8d163),_0x3a0ac0=(_0x3c99ad,_0x5774f7)=>{const _0x21e69e=_0x2ee23b;if(!_0x5774f7)return _0x3c99ad;if(_0x5774f7[_0x21e69e(0x5df)][_0x21e69e(0x490)](VisuMZ[_0x21e69e(0x4f5)][_0x21e69e(0x41f)][_0x21e69e(0x747)][_0xe8d163])){var _0x2b8531=Number(RegExp['$1'])/0x64;_0x3c99ad*=_0x2b8531;}if(_0x5774f7[_0x21e69e(0x5df)][_0x21e69e(0x490)](VisuMZ[_0x21e69e(0x4f5)][_0x21e69e(0x41f)][_0x21e69e(0x7be)][_0xe8d163])){var _0x2b8531=Number(RegExp['$1']);_0x3c99ad*=_0x2b8531;}if(_0x5774f7[_0x21e69e(0x5df)][_0x21e69e(0x490)](VisuMZ[_0x21e69e(0x4f5)]['RegExp'][_0x21e69e(0x458)][_0xe8d163])){var _0x5249af=String(RegExp['$1']);_0x5249af=VisuMZ['CoreEngine'][_0x21e69e(0x39e)](_0x5249af);try{_0x3c99ad*=eval(_0x5249af);}catch(_0x4be688){if($gameTemp[_0x21e69e(0x24a)]())console['log'](_0x4be688);}}return _0x3c99ad;};return this[_0x2ee23b(0x63f)]()[_0x2ee23b(0x48c)](_0x3a0ac0,_0x2078dc);},Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x43d)]=function(_0x4c541c){const _0x2f6e0a=_0x19616c,_0x146d5c=(_0x27b4d2,_0x2bfb30)=>{const _0x22cf5d=_0x484b;if(!_0x2bfb30)return _0x27b4d2;if(_0x2bfb30[_0x22cf5d(0x5df)][_0x22cf5d(0x490)](VisuMZ['CoreEngine'][_0x22cf5d(0x41f)][_0x22cf5d(0x482)][_0x4c541c])){var _0x50cd01=Number(RegExp['$1']);_0x27b4d2+=_0x50cd01;}if(_0x2bfb30[_0x22cf5d(0x5df)][_0x22cf5d(0x490)](VisuMZ['CoreEngine'][_0x22cf5d(0x41f)][_0x22cf5d(0x71e)][_0x4c541c])){var _0x1e6d1a=String(RegExp['$1']);_0x1e6d1a=VisuMZ[_0x22cf5d(0x4f5)][_0x22cf5d(0x39e)](_0x1e6d1a);try{_0x27b4d2+=eval(_0x1e6d1a);}catch(_0x2f3337){if($gameTemp['isPlaytest']())console[_0x22cf5d(0x765)](_0x2f3337);}}return _0x27b4d2;};return this[_0x2f6e0a(0x63f)]()['reduce'](_0x146d5c,0x0);},Game_BattlerBase['prototype'][_0x19616c(0x5a2)]=function(_0x30e8b7){const _0xa3d4f8=_0x19616c;let _0x10ccb3='param'+_0x30e8b7+'Total';if(this[_0xa3d4f8(0x41e)](_0x10ccb3))return this[_0xa3d4f8(0x95a)][_0x10ccb3];return this[_0xa3d4f8(0x95a)][_0x10ccb3]=Math[_0xa3d4f8(0x45c)](VisuMZ[_0xa3d4f8(0x4f5)][_0xa3d4f8(0x568)]['Param'][_0xa3d4f8(0x354)][_0xa3d4f8(0x4a5)](this,_0x30e8b7)),this[_0xa3d4f8(0x95a)][_0x10ccb3];},Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x964)]=function(_0x8bb335){const _0x55633b=_0x19616c,_0x2929a3=(_0x25f13a,_0x46e03f)=>{const _0x27fe3f=_0x484b;if(!_0x46e03f)return _0x25f13a;if(_0x46e03f[_0x27fe3f(0x5df)]['match'](VisuMZ[_0x27fe3f(0x4f5)][_0x27fe3f(0x41f)][_0x27fe3f(0x1b9)][_0x8bb335])){var _0x597ad1=Number(RegExp['$1'])/0x64;_0x25f13a+=_0x597ad1;}if(_0x46e03f['note'][_0x27fe3f(0x490)](VisuMZ[_0x27fe3f(0x4f5)]['RegExp'][_0x27fe3f(0x409)][_0x8bb335])){var _0x597ad1=Number(RegExp['$1']);_0x25f13a+=_0x597ad1;}if(_0x46e03f[_0x27fe3f(0x5df)][_0x27fe3f(0x490)](VisuMZ[_0x27fe3f(0x4f5)][_0x27fe3f(0x41f)][_0x27fe3f(0x668)][_0x8bb335])){var _0x2a0b90=String(RegExp['$1']);_0x2a0b90=VisuMZ[_0x27fe3f(0x4f5)][_0x27fe3f(0x39e)](_0x2a0b90);try{_0x25f13a+=eval(_0x2a0b90);}catch(_0x5c4cc5){if($gameTemp[_0x27fe3f(0x24a)]())console[_0x27fe3f(0x765)](_0x5c4cc5);}}return _0x25f13a;};return this[_0x55633b(0x63f)]()['reduce'](_0x2929a3,0x0);},Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x89b)]=function(_0x393fca){const _0x534708=_0x19616c,_0x5dd809=(_0x41e085,_0x4187cd)=>{const _0x37d0f1=_0x484b;if(!_0x4187cd)return _0x41e085;if(_0x4187cd['note'][_0x37d0f1(0x490)](VisuMZ[_0x37d0f1(0x4f5)][_0x37d0f1(0x41f)][_0x37d0f1(0x6d5)][_0x393fca])){var _0x1334c0=Number(RegExp['$1'])/0x64;_0x41e085*=_0x1334c0;}if(_0x4187cd[_0x37d0f1(0x5df)][_0x37d0f1(0x490)](VisuMZ['CoreEngine'][_0x37d0f1(0x41f)][_0x37d0f1(0x465)][_0x393fca])){var _0x1334c0=Number(RegExp['$1']);_0x41e085*=_0x1334c0;}if(_0x4187cd['note']['match'](VisuMZ[_0x37d0f1(0x4f5)][_0x37d0f1(0x41f)][_0x37d0f1(0x56a)][_0x393fca])){var _0x5dde7a=String(RegExp['$1']);_0x5dde7a=VisuMZ['CoreEngine'][_0x37d0f1(0x39e)](_0x5dde7a);try{_0x41e085*=eval(_0x5dde7a);}catch(_0xb5755c){if($gameTemp[_0x37d0f1(0x24a)]())console[_0x37d0f1(0x765)](_0xb5755c);}}return _0x41e085;};return this[_0x534708(0x63f)]()[_0x534708(0x48c)](_0x5dd809,0x1);},Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x1eb)]=function(_0x5c6db2){const _0x2af12c=_0x19616c,_0x2799a7=(_0x31d48b,_0x3ca44c)=>{const _0x2dd2e5=_0x484b;if(!_0x3ca44c)return _0x31d48b;if(_0x3ca44c[_0x2dd2e5(0x5df)]['match'](VisuMZ[_0x2dd2e5(0x4f5)][_0x2dd2e5(0x41f)][_0x2dd2e5(0x6dd)][_0x5c6db2])){var _0x16206c=Number(RegExp['$1'])/0x64;_0x31d48b+=_0x16206c;}if(_0x3ca44c['note'][_0x2dd2e5(0x490)](VisuMZ['CoreEngine'][_0x2dd2e5(0x41f)][_0x2dd2e5(0x8c5)][_0x5c6db2])){var _0x16206c=Number(RegExp['$1']);_0x31d48b+=_0x16206c;}if(_0x3ca44c['note'][_0x2dd2e5(0x490)](VisuMZ[_0x2dd2e5(0x4f5)][_0x2dd2e5(0x41f)]['xparamFlatJS'][_0x5c6db2])){var _0x1e6dc5=String(RegExp['$1']);_0x1e6dc5=VisuMZ[_0x2dd2e5(0x4f5)][_0x2dd2e5(0x39e)](_0x1e6dc5);try{_0x31d48b+=eval(_0x1e6dc5);}catch(_0x22cc3e){if($gameTemp[_0x2dd2e5(0x24a)]())console[_0x2dd2e5(0x765)](_0x22cc3e);}}return _0x31d48b;};return this[_0x2af12c(0x63f)]()['reduce'](_0x2799a7,0x0);},Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x4f1)]=function(_0x5aa78f){const _0x5dec9d=_0x19616c;let _0x151395=_0x5dec9d(0x4f1)+_0x5aa78f+'Total';if(this[_0x5dec9d(0x41e)](_0x151395))return this['_cache'][_0x151395];return this[_0x5dec9d(0x95a)][_0x151395]=VisuMZ[_0x5dec9d(0x4f5)][_0x5dec9d(0x568)][_0x5dec9d(0x477)]['XParameterFormula']['call'](this,_0x5aa78f),this['_cache'][_0x151395];},Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x1a6)]=function(_0x517ca2){const _0xf0c559=_0x19616c,_0x226ffe=(_0x17c4e2,_0x3c0113)=>{const _0x3015e3=_0x484b;if(!_0x3c0113)return _0x17c4e2;if(_0x3c0113[_0x3015e3(0x5df)]['match'](VisuMZ['CoreEngine'][_0x3015e3(0x41f)][_0x3015e3(0x350)][_0x517ca2])){var _0x1f8d86=Number(RegExp['$1'])/0x64;_0x17c4e2+=_0x1f8d86;}if(_0x3c0113[_0x3015e3(0x5df)]['match'](VisuMZ[_0x3015e3(0x4f5)]['RegExp'][_0x3015e3(0x6cb)][_0x517ca2])){var _0x1f8d86=Number(RegExp['$1']);_0x17c4e2+=_0x1f8d86;}if(_0x3c0113[_0x3015e3(0x5df)][_0x3015e3(0x490)](VisuMZ[_0x3015e3(0x4f5)]['RegExp'][_0x3015e3(0x973)][_0x517ca2])){var _0x360424=String(RegExp['$1']);_0x360424=VisuMZ[_0x3015e3(0x4f5)][_0x3015e3(0x39e)](_0x360424);try{_0x17c4e2+=eval(_0x360424);}catch(_0x57960d){if($gameTemp[_0x3015e3(0x24a)]())console[_0x3015e3(0x765)](_0x57960d);}}return _0x17c4e2;};return this[_0xf0c559(0x63f)]()[_0xf0c559(0x48c)](_0x226ffe,0x0);},Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x41c)]=function(_0x4258d2){const _0x3192b6=(_0x24a631,_0x29f066)=>{const _0x36f795=_0x484b;if(!_0x29f066)return _0x24a631;if(_0x29f066[_0x36f795(0x5df)]['match'](VisuMZ[_0x36f795(0x4f5)][_0x36f795(0x41f)][_0x36f795(0x8ce)][_0x4258d2])){var _0xf5e345=Number(RegExp['$1'])/0x64;_0x24a631*=_0xf5e345;}if(_0x29f066['note']['match'](VisuMZ[_0x36f795(0x4f5)]['RegExp'][_0x36f795(0x1df)][_0x4258d2])){var _0xf5e345=Number(RegExp['$1']);_0x24a631*=_0xf5e345;}if(_0x29f066[_0x36f795(0x5df)][_0x36f795(0x490)](VisuMZ[_0x36f795(0x4f5)]['RegExp'][_0x36f795(0x687)][_0x4258d2])){var _0x3863b6=String(RegExp['$1']);_0x3863b6=VisuMZ[_0x36f795(0x4f5)][_0x36f795(0x39e)](_0x3863b6);try{_0x24a631*=eval(_0x3863b6);}catch(_0x41079a){if($gameTemp['isPlaytest']())console[_0x36f795(0x765)](_0x41079a);}}return _0x24a631;};return this['traitObjects']()['reduce'](_0x3192b6,0x1);},Game_BattlerBase['prototype'][_0x19616c(0x2c0)]=function(_0x1fe840){const _0x1ec898=_0x19616c,_0x1cd1e5=(_0x4cb12c,_0x1c056f)=>{const _0x4bca17=_0x484b;if(!_0x1c056f)return _0x4cb12c;if(_0x1c056f['note']['match'](VisuMZ[_0x4bca17(0x4f5)][_0x4bca17(0x41f)][_0x4bca17(0x2d8)][_0x1fe840])){var _0x1f739f=Number(RegExp['$1'])/0x64;_0x4cb12c+=_0x1f739f;}if(_0x1c056f[_0x4bca17(0x5df)][_0x4bca17(0x490)](VisuMZ[_0x4bca17(0x4f5)][_0x4bca17(0x41f)][_0x4bca17(0x271)][_0x1fe840])){var _0x1f739f=Number(RegExp['$1']);_0x4cb12c+=_0x1f739f;}if(_0x1c056f[_0x4bca17(0x5df)][_0x4bca17(0x490)](VisuMZ['CoreEngine']['RegExp'][_0x4bca17(0x93a)][_0x1fe840])){var _0x2b94d5=String(RegExp['$1']);_0x2b94d5=VisuMZ['CoreEngine']['JsReplaceUserVar'](_0x2b94d5);try{_0x4cb12c+=eval(_0x2b94d5);}catch(_0x2c1fef){if($gameTemp[_0x4bca17(0x24a)]())console[_0x4bca17(0x765)](_0x2c1fef);}}return _0x4cb12c;};return this[_0x1ec898(0x63f)]()['reduce'](_0x1cd1e5,0x0);},Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x7d9)]=function(_0x53c400){const _0x1ca197=_0x19616c;let _0x1274dc='sparam'+_0x53c400+'Total';if(this[_0x1ca197(0x41e)](_0x1274dc))return this['_cache'][_0x1274dc];return this[_0x1ca197(0x95a)][_0x1274dc]=VisuMZ['CoreEngine'][_0x1ca197(0x568)][_0x1ca197(0x477)][_0x1ca197(0x8a4)][_0x1ca197(0x4a5)](this,_0x53c400),this['_cache'][_0x1274dc];},Game_BattlerBase[_0x19616c(0x7f9)]['paramValueByName']=function(_0x2e121c,_0x481fe0){const _0x255d84=_0x19616c;if(typeof paramId===_0x255d84(0x7ee))return this[_0x255d84(0x5a2)](_0x2e121c);_0x2e121c=String(_0x2e121c||'')[_0x255d84(0x319)]();if(_0x2e121c===_0x255d84(0x5ba))return this[_0x255d84(0x5a2)](0x0);if(_0x2e121c==='MAXMP')return this[_0x255d84(0x5a2)](0x1);if(_0x2e121c===_0x255d84(0x7a6))return this[_0x255d84(0x5a2)](0x2);if(_0x2e121c==='DEF')return this[_0x255d84(0x5a2)](0x3);if(_0x2e121c===_0x255d84(0x763))return this[_0x255d84(0x5a2)](0x4);if(_0x2e121c===_0x255d84(0x66f))return this[_0x255d84(0x5a2)](0x5);if(_0x2e121c===_0x255d84(0x5da))return this[_0x255d84(0x5a2)](0x6);if(_0x2e121c===_0x255d84(0x655))return this[_0x255d84(0x5a2)](0x7);if(_0x2e121c==='HIT')return _0x481fe0?String(Math[_0x255d84(0x45c)](this[_0x255d84(0x4f1)](0x0)*0x64))+'%':this[_0x255d84(0x4f1)](0x0);if(_0x2e121c==='EVA')return _0x481fe0?String(Math[_0x255d84(0x45c)](this[_0x255d84(0x4f1)](0x1)*0x64))+'%':this['xparam'](0x1);if(_0x2e121c===_0x255d84(0x986))return _0x481fe0?String(Math['round'](this[_0x255d84(0x4f1)](0x2)*0x64))+'%':this[_0x255d84(0x4f1)](0x2);if(_0x2e121c===_0x255d84(0x268))return _0x481fe0?String(Math[_0x255d84(0x45c)](this['xparam'](0x3)*0x64))+'%':this[_0x255d84(0x4f1)](0x3);if(_0x2e121c===_0x255d84(0x325))return _0x481fe0?String(Math[_0x255d84(0x45c)](this[_0x255d84(0x4f1)](0x4)*0x64))+'%':this[_0x255d84(0x4f1)](0x4);if(_0x2e121c==='MRF')return _0x481fe0?String(Math['round'](this['xparam'](0x5)*0x64))+'%':this['xparam'](0x5);if(_0x2e121c===_0x255d84(0x4aa))return _0x481fe0?String(Math[_0x255d84(0x45c)](this[_0x255d84(0x4f1)](0x6)*0x64))+'%':this[_0x255d84(0x4f1)](0x6);if(_0x2e121c===_0x255d84(0x740))return _0x481fe0?String(Math['round'](this[_0x255d84(0x4f1)](0x7)*0x64))+'%':this[_0x255d84(0x4f1)](0x7);if(_0x2e121c==='MRG')return _0x481fe0?String(Math[_0x255d84(0x45c)](this[_0x255d84(0x4f1)](0x8)*0x64))+'%':this[_0x255d84(0x4f1)](0x8);if(_0x2e121c===_0x255d84(0x291))return _0x481fe0?String(Math[_0x255d84(0x45c)](this[_0x255d84(0x4f1)](0x9)*0x64))+'%':this['xparam'](0x9);if(_0x2e121c==='TGR')return _0x481fe0?String(Math[_0x255d84(0x45c)](this[_0x255d84(0x7d9)](0x0)*0x64))+'%':this[_0x255d84(0x7d9)](0x0);if(_0x2e121c===_0x255d84(0x24c))return _0x481fe0?String(Math[_0x255d84(0x45c)](this[_0x255d84(0x7d9)](0x1)*0x64))+'%':this[_0x255d84(0x7d9)](0x1);if(_0x2e121c==='REC')return _0x481fe0?String(Math[_0x255d84(0x45c)](this[_0x255d84(0x7d9)](0x2)*0x64))+'%':this[_0x255d84(0x7d9)](0x2);if(_0x2e121c===_0x255d84(0x96a))return _0x481fe0?String(Math['round'](this['sparam'](0x3)*0x64))+'%':this[_0x255d84(0x7d9)](0x3);if(_0x2e121c==='MCR')return _0x481fe0?String(Math[_0x255d84(0x45c)](this[_0x255d84(0x7d9)](0x4)*0x64))+'%':this[_0x255d84(0x7d9)](0x4);if(_0x2e121c===_0x255d84(0x28b))return _0x481fe0?String(Math[_0x255d84(0x45c)](this[_0x255d84(0x7d9)](0x5)*0x64))+'%':this[_0x255d84(0x7d9)](0x5);if(_0x2e121c==='PDR')return _0x481fe0?String(Math[_0x255d84(0x45c)](this[_0x255d84(0x7d9)](0x6)*0x64))+'%':this[_0x255d84(0x7d9)](0x6);if(_0x2e121c===_0x255d84(0x545))return _0x481fe0?String(Math[_0x255d84(0x45c)](this[_0x255d84(0x7d9)](0x7)*0x64))+'%':this['sparam'](0x7);if(_0x2e121c===_0x255d84(0x913))return _0x481fe0?String(Math[_0x255d84(0x45c)](this['sparam'](0x8)*0x64))+'%':this['sparam'](0x8);if(_0x2e121c===_0x255d84(0x270))return _0x481fe0?String(Math['round'](this[_0x255d84(0x7d9)](0x9)*0x64))+'%':this['sparam'](0x9);if(VisuMZ['CoreEngine'][_0x255d84(0x3c6)][_0x2e121c]){const _0x13a1be=VisuMZ[_0x255d84(0x4f5)]['CustomParamAbb'][_0x2e121c],_0x503ec9=this[_0x13a1be];return VisuMZ[_0x255d84(0x4f5)]['CustomParamType'][_0x2e121c]==='integer'?_0x503ec9:_0x481fe0?String(Math[_0x255d84(0x45c)](_0x503ec9*0x64))+'%':_0x503ec9;}return'';},Game_BattlerBase[_0x19616c(0x7f9)][_0x19616c(0x1af)]=function(){const _0x3bbbdc=_0x19616c;return this[_0x3bbbdc(0x620)]()&&this[_0x3bbbdc(0x732)]<this[_0x3bbbdc(0x98b)]*VisuMZ[_0x3bbbdc(0x4f5)][_0x3bbbdc(0x568)]['Param'][_0x3bbbdc(0x7c2)];},Game_Battler['prototype'][_0x19616c(0x340)]=function(){const _0x472c01=_0x19616c;SoundManager[_0x472c01(0x4bd)](),this[_0x472c01(0x334)](_0x472c01(0x53a));},VisuMZ['CoreEngine'][_0x19616c(0x2af)]=Game_Actor['prototype'][_0x19616c(0x4e3)],Game_Actor['prototype'][_0x19616c(0x4e3)]=function(_0x58e7ad){const _0x201930=_0x19616c;if(this['level']>0x63)return this[_0x201930(0x954)](_0x58e7ad);return VisuMZ['CoreEngine'][_0x201930(0x2af)][_0x201930(0x4a5)](this,_0x58e7ad);},Game_Actor['prototype'][_0x19616c(0x954)]=function(_0x49c87c){const _0x4a9446=_0x19616c,_0xcb3bf6=this[_0x4a9446(0x5af)]()[_0x4a9446(0x8d8)][_0x49c87c][0x63],_0x5e19b0=this[_0x4a9446(0x5af)]()[_0x4a9446(0x8d8)][_0x49c87c][0x62];return _0xcb3bf6+(_0xcb3bf6-_0x5e19b0)*(this[_0x4a9446(0x1b3)]-0x63);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x38e)]=Game_Actor['prototype'][_0x19616c(0x4be)],Game_Actor['prototype'][_0x19616c(0x4be)]=function(_0x24c0ff,_0x38fd8e){const _0x1ba93e=_0x19616c;$gameTemp[_0x1ba93e(0x7b1)]=!![],VisuMZ[_0x1ba93e(0x4f5)][_0x1ba93e(0x38e)][_0x1ba93e(0x4a5)](this,_0x24c0ff,_0x38fd8e),$gameTemp[_0x1ba93e(0x7b1)]=undefined;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x3bd)]=Game_Actor[_0x19616c(0x7f9)][_0x19616c(0x81e)],Game_Actor['prototype'][_0x19616c(0x81e)]=function(){const _0x4529bf=_0x19616c;VisuMZ[_0x4529bf(0x4f5)]['Game_Actor_levelUp'][_0x4529bf(0x4a5)](this);if(!$gameTemp[_0x4529bf(0x7b1)])this[_0x4529bf(0x22f)]();},Game_Actor[_0x19616c(0x7f9)][_0x19616c(0x22f)]=function(){const _0x467396=_0x19616c;this[_0x467396(0x95a)]={};if(VisuMZ['CoreEngine']['Settings'][_0x467396(0x1fb)][_0x467396(0x58e)])this[_0x467396(0x732)]=this[_0x467396(0x98b)];if(VisuMZ[_0x467396(0x4f5)]['Settings'][_0x467396(0x1fb)][_0x467396(0x392)])this[_0x467396(0x859)]=this[_0x467396(0x7c8)];},Game_Actor[_0x19616c(0x7f9)]['expRate']=function(){const _0x34749b=_0x19616c;if(this['isMaxLevel']())return 0x1;const _0x4dfee0=this[_0x34749b(0x593)]()-this[_0x34749b(0x667)](),_0x96ffb9=this[_0x34749b(0x73b)]()-this['currentLevelExp']();return(_0x96ffb9/_0x4dfee0)[_0x34749b(0x4d4)](0x0,0x1);},Game_Actor[_0x19616c(0x7f9)][_0x19616c(0x63f)]=function(){const _0x5e6d4a=_0x19616c,_0x911bae=Game_Battler[_0x5e6d4a(0x7f9)][_0x5e6d4a(0x63f)][_0x5e6d4a(0x4a5)](this);for(const _0x10bcf4 of this['equips']()){_0x10bcf4&&_0x911bae[_0x5e6d4a(0x69f)](_0x10bcf4);}return _0x911bae['push'](this[_0x5e6d4a(0x5af)](),this[_0x5e6d4a(0x7c6)]()),_0x911bae;},VisuMZ['CoreEngine'][_0x19616c(0x8e3)]=Game_Actor['prototype'][_0x19616c(0x95e)],Game_Actor['prototype'][_0x19616c(0x95e)]=function(){const _0x5afbf5=_0x19616c;if(!$gameParty[_0x5afbf5(0x38f)]())return!![];return VisuMZ[_0x5afbf5(0x4f5)]['Game_Actor_isPreserveTp'][_0x5afbf5(0x4a5)](this);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x644)]=Game_Unit[_0x19616c(0x7f9)]['onBattleStart'],Game_Unit[_0x19616c(0x7f9)][_0x19616c(0x276)]=function(_0x423e9b){const _0x2f3d07=_0x19616c;this[_0x2f3d07(0x48e)]=!![],VisuMZ['CoreEngine']['Game_Unit_onBattleStart'][_0x2f3d07(0x4a5)](this,_0x423e9b);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x842)]=Game_Unit[_0x19616c(0x7f9)][_0x19616c(0x265)],Game_Unit[_0x19616c(0x7f9)][_0x19616c(0x265)]=function(){const _0x54e90c=_0x19616c;for(const _0x5aca1a of this[_0x54e90c(0x1d4)]()){_0x5aca1a&&!_0x5aca1a[_0x54e90c(0x95e)]()&&_0x5aca1a[_0x54e90c(0x566)]();}VisuMZ['CoreEngine'][_0x54e90c(0x842)]['call'](this);},Object[_0x19616c(0x66c)](Game_Enemy[_0x19616c(0x7f9)],'level',{'get':function(){const _0x24273d=_0x19616c;return this[_0x24273d(0x63c)]();},'configurable':!![]}),Game_Enemy['prototype'][_0x19616c(0x63c)]=function(){const _0x23ca29=_0x19616c;return this[_0x23ca29(0x628)]()[_0x23ca29(0x1b3)];},Game_Enemy[_0x19616c(0x7f9)]['moveRelativeToResolutionChange']=function(){const _0x278727=_0x19616c;!this[_0x278727(0x2e5)]&&(this[_0x278727(0x48b)]+=Math[_0x278727(0x45c)]((Graphics[_0x278727(0x413)]-0x270)/0x2),this[_0x278727(0x48b)]-=Math['floor']((Graphics[_0x278727(0x413)]-Graphics[_0x278727(0x785)])/0x2),$gameSystem[_0x278727(0x5f3)]()?this[_0x278727(0x651)]-=Math['floor']((Graphics[_0x278727(0x3e0)]-Graphics[_0x278727(0x388)])/0x2):this[_0x278727(0x651)]+=Math[_0x278727(0x45c)]((Graphics[_0x278727(0x388)]-0x330)/0x2)),this['_repositioned']=!![];},Game_Party[_0x19616c(0x7f9)]['maxGold']=function(){const _0x28e477=_0x19616c;return VisuMZ[_0x28e477(0x4f5)][_0x28e477(0x568)]['Gold'][_0x28e477(0x93d)];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x2be)]=Game_Party[_0x19616c(0x7f9)]['consumeItem'],Game_Party['prototype']['consumeItem']=function(_0x2581f6){const _0x3054d3=_0x19616c;if(VisuMZ[_0x3054d3(0x4f5)][_0x3054d3(0x568)][_0x3054d3(0x1fb)][_0x3054d3(0x556)]&&DataManager['isKeyItem'](_0x2581f6))return;VisuMZ[_0x3054d3(0x4f5)][_0x3054d3(0x2be)][_0x3054d3(0x4a5)](this,_0x2581f6);},Game_Party[_0x19616c(0x7f9)]['setupBattleTestItems']=function(){const _0x4aa6a3=_0x19616c,_0x33795a=VisuMZ[_0x4aa6a3(0x4f5)]['Settings'][_0x4aa6a3(0x1fb)],_0x129681=_0x33795a['BTestAddedQuantity']??0x63;let _0x3ddb3e=[];(_0x33795a['BTestItems']??!![])&&(_0x3ddb3e=_0x3ddb3e[_0x4aa6a3(0x8b1)]($dataItems));(_0x33795a[_0x4aa6a3(0x73e)]??!![])&&(_0x3ddb3e=_0x3ddb3e[_0x4aa6a3(0x8b1)]($dataWeapons));(_0x33795a['BTestArmors']??!![])&&(_0x3ddb3e=_0x3ddb3e[_0x4aa6a3(0x8b1)]($dataArmors));for(const _0xd213b0 of _0x3ddb3e){if(!_0xd213b0)continue;if(_0xd213b0[_0x4aa6a3(0x3e9)][_0x4aa6a3(0x862)]()<=0x0)continue;if(_0xd213b0[_0x4aa6a3(0x3e9)][_0x4aa6a3(0x490)](/-----/i))continue;this[_0x4aa6a3(0x607)](_0xd213b0,_0x129681);}},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x89e)]=Game_Troop[_0x19616c(0x7f9)][_0x19616c(0x498)],Game_Troop['prototype']['setup']=function(_0x366aae){const _0xc015ac=_0x19616c;$gameTemp['clearForcedGameTroopSettingsCoreEngine'](),$gameTemp['applyForcedGameTroopSettingsCoreEngine'](_0x366aae),VisuMZ[_0xc015ac(0x4f5)][_0xc015ac(0x89e)]['call'](this,_0x366aae);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x2a4)]=Game_Map['prototype'][_0x19616c(0x498)],Game_Map[_0x19616c(0x7f9)]['setup']=function(_0xd5e6b3){const _0x53c961=_0x19616c;VisuMZ[_0x53c961(0x4f5)][_0x53c961(0x2a4)]['call'](this,_0xd5e6b3),this[_0x53c961(0x28e)](),this[_0x53c961(0x524)](_0xd5e6b3),this[_0x53c961(0x467)]();},Game_Map['prototype'][_0x19616c(0x524)]=function(){const _0x572d4b=_0x19616c;this[_0x572d4b(0x869)]=VisuMZ[_0x572d4b(0x4f5)][_0x572d4b(0x568)]['QoL']['NoTileShadows']||![];const _0x22fb0e=VisuMZ[_0x572d4b(0x4f5)][_0x572d4b(0x568)][_0x572d4b(0x70f)],_0x33429f=$dataMap?$dataMap['note']||'':'';if(_0x33429f[_0x572d4b(0x490)](/<SHOW TILE SHADOWS>/i))this[_0x572d4b(0x869)]=![];else _0x33429f[_0x572d4b(0x490)](/<HIDE TILE SHADOWS>/i)&&(this['_hideTileShadows']=!![]);if(_0x33429f[_0x572d4b(0x490)](/<SCROLL LOCK X>/i))this[_0x572d4b(0x3f9)]()['centerX']=!![],this['centerCameraCheckData']()[_0x572d4b(0x578)]=_0x22fb0e[_0x572d4b(0x462)];else _0x33429f[_0x572d4b(0x490)](/<SCROLL LOCK X: (.*?)>/i)&&(this[_0x572d4b(0x3f9)]()[_0x572d4b(0x1c7)]=!![],this[_0x572d4b(0x3f9)]()[_0x572d4b(0x578)]=Number(RegExp['$1']));if(_0x33429f[_0x572d4b(0x490)](/<SCROLL LOCK Y>/i))this[_0x572d4b(0x3f9)]()[_0x572d4b(0x402)]=!![],this[_0x572d4b(0x3f9)]()['displayY']=_0x22fb0e[_0x572d4b(0x260)];else _0x33429f[_0x572d4b(0x490)](/<SCROLL LOCK Y: (.*?)>/i)&&(this[_0x572d4b(0x3f9)]()['centerY']=!![],this[_0x572d4b(0x3f9)]()[_0x572d4b(0x371)]=Number(RegExp['$1']));},Game_Map[_0x19616c(0x7f9)][_0x19616c(0x642)]=function(){const _0x3c60b1=_0x19616c;if(this[_0x3c60b1(0x869)]===undefined)this[_0x3c60b1(0x524)]();return this[_0x3c60b1(0x869)];},Game_Map[_0x19616c(0x7f9)]['checkCoreEngineDisplayCenter']=function(){const _0x451997=_0x19616c,_0xdfbe30=VisuMZ[_0x451997(0x4f5)][_0x451997(0x568)][_0x451997(0x70f)];this[_0x451997(0x638)]={'centerX':![],'centerY':![],'displayX':0x0,'displayY':0x0};if(_0xdfbe30[_0x451997(0x472)]){const _0x5c1a9c=Graphics[_0x451997(0x3e0)]/this[_0x451997(0x32f)]();_0x5c1a9c%0x1!==0x0&&Math[_0x451997(0x6d8)](_0x5c1a9c)===this[_0x451997(0x3e0)]()&&!this['isLoopHorizontal']()&&(this[_0x451997(0x638)]['centerX']=!![],this[_0x451997(0x638)][_0x451997(0x578)]=_0xdfbe30['DisplayLockX']||0x0);}if(_0xdfbe30[_0x451997(0x660)]){const _0x16d162=Graphics[_0x451997(0x413)]/this[_0x451997(0x72a)]();_0x16d162%0x1!==0x0&&Math[_0x451997(0x6d8)](_0x16d162)===this[_0x451997(0x413)]()&&!this[_0x451997(0x8d2)]()&&(this[_0x451997(0x638)][_0x451997(0x402)]=!![],this['_centerCameraCheck']['displayY']=_0xdfbe30[_0x451997(0x260)]||0x0);}$gameScreen[_0x451997(0x8b3)]()===0x1&&(this['centerCameraCheckData']()[_0x451997(0x1c7)]&&(this[_0x451997(0x5bb)]=this[_0x451997(0x3f9)]()['displayX']),this['centerCameraCheckData']()[_0x451997(0x402)]&&(this['_displayY']=this[_0x451997(0x3f9)]()[_0x451997(0x371)]));},VisuMZ['CoreEngine']['Game_Map_setDisplayPos']=Game_Map[_0x19616c(0x7f9)][_0x19616c(0x5b6)],Game_Map[_0x19616c(0x7f9)][_0x19616c(0x5b6)]=function(_0x5e4400,_0x1fb3b6){const _0x5dc52c=_0x19616c;VisuMZ[_0x5dc52c(0x4f5)][_0x5dc52c(0x8b4)][_0x5dc52c(0x4a5)](this,_0x5e4400,_0x1fb3b6),$gameScreen['zoomScale']()===0x1&&(!this[_0x5dc52c(0x6b9)]()&&this['centerCameraCheckData']()[_0x5dc52c(0x1c7)]&&(this[_0x5dc52c(0x5bb)]=this['centerCameraCheckData']()[_0x5dc52c(0x578)]),!this[_0x5dc52c(0x8d2)]()&&this[_0x5dc52c(0x3f9)]()[_0x5dc52c(0x402)]&&(this[_0x5dc52c(0x5d6)]=this[_0x5dc52c(0x3f9)]()[_0x5dc52c(0x371)]));},Game_Map[_0x19616c(0x7f9)][_0x19616c(0x3f9)]=function(){const _0xe68392=_0x19616c;if(this[_0xe68392(0x638)]===undefined)this[_0xe68392(0x28e)]();return this[_0xe68392(0x638)];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x394)]=Game_Map[_0x19616c(0x7f9)][_0x19616c(0x665)],Game_Map[_0x19616c(0x7f9)][_0x19616c(0x665)]=function(_0x3fa75f){const _0x4be982=_0x19616c;if(this[_0x4be982(0x3f9)]()[_0x4be982(0x402)]&&$gameScreen[_0x4be982(0x8b3)]()===0x1){this[_0x4be982(0x5d6)]=this[_0x4be982(0x3f9)]()[_0x4be982(0x371)];return;}VisuMZ[_0x4be982(0x4f5)][_0x4be982(0x394)][_0x4be982(0x4a5)](this,_0x3fa75f);},VisuMZ[_0x19616c(0x4f5)]['Game_Map_scrollLeft']=Game_Map[_0x19616c(0x7f9)][_0x19616c(0x35f)],Game_Map[_0x19616c(0x7f9)][_0x19616c(0x35f)]=function(_0x3ba111){const _0x40d9d1=_0x19616c;if(this[_0x40d9d1(0x3f9)]()[_0x40d9d1(0x1c7)]&&$gameScreen[_0x40d9d1(0x8b3)]()===0x1){this[_0x40d9d1(0x5bb)]=this[_0x40d9d1(0x3f9)]()['displayX'];return;}VisuMZ[_0x40d9d1(0x4f5)][_0x40d9d1(0x452)][_0x40d9d1(0x4a5)](this,_0x3ba111);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x8af)]=Game_Map['prototype']['scrollRight'],Game_Map[_0x19616c(0x7f9)][_0x19616c(0x98c)]=function(_0x48565b){const _0x10c039=_0x19616c;if(this[_0x10c039(0x3f9)]()[_0x10c039(0x1c7)]&&$gameScreen[_0x10c039(0x8b3)]()===0x1){this[_0x10c039(0x5bb)]=this[_0x10c039(0x3f9)]()[_0x10c039(0x578)];return;}VisuMZ[_0x10c039(0x4f5)]['Game_Map_scrollRight'][_0x10c039(0x4a5)](this,_0x48565b);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x6b0)]=Game_Map['prototype']['scrollUp'],Game_Map[_0x19616c(0x7f9)][_0x19616c(0x393)]=function(_0x18ab28){const _0x5420a0=_0x19616c;if(this[_0x5420a0(0x3f9)]()['centerY']&&$gameScreen[_0x5420a0(0x8b3)]()===0x1){this[_0x5420a0(0x5d6)]=this[_0x5420a0(0x3f9)]()[_0x5420a0(0x371)];return;}VisuMZ['CoreEngine']['Game_Map_scrollUp'][_0x5420a0(0x4a5)](this,_0x18ab28);},Game_Map[_0x19616c(0x7f9)]['setupTileExtendTerrainTags']=function(){const _0x4fcdc3=_0x19616c;this[_0x4fcdc3(0x90e)]={};const _0x2c6af2=this[_0x4fcdc3(0x6da)]();if(!_0x2c6af2)return{};const _0x3e4529=_0x2c6af2[_0x4fcdc3(0x5df)]||'',_0x217c8a=/<(?:TALLER|EXT|EXTEND|RAISE)[ ]BY[ ](\d+):[ ](.*)>/gi;let _0x923fbc={};const _0x3e4365=_0x3e4529[_0x4fcdc3(0x490)](_0x217c8a);if(_0x3e4365)for(const _0x1e838c of _0x3e4365){_0x1e838c[_0x4fcdc3(0x490)](_0x217c8a);const _0x410748=Number(RegExp['$1'])[_0x4fcdc3(0x4d4)](0x1,0x10),_0x4a6016=String(RegExp['$2'])['split'](',')['map'](_0x337bf5=>Number(_0x337bf5)[_0x4fcdc3(0x4d4)](0x1,0x7));for(const _0x26c065 of _0x4a6016){_0x923fbc[_0x26c065]=_0x410748;}}this[_0x4fcdc3(0x90e)]=_0x923fbc;},Game_Map[_0x19616c(0x7f9)]['getTileExtendTerrainTags']=function(){const _0x5ae7b5=_0x19616c;if(this[_0x5ae7b5(0x90e)]===undefined)this[_0x5ae7b5(0x467)]();return this[_0x5ae7b5(0x90e)];},Game_Map['prototype']['isTileExtended']=function(_0xa375d9){const _0x450687=_0x19616c;if(_0xa375d9>=0x400)return![];const _0x504f0e=$gameMap[_0x450687(0x37e)]();if(Object[_0x450687(0x60c)](_0x504f0e)[_0x450687(0x375)]<=0x0)return![];const _0x238e3b=this[_0x450687(0x645)](),_0x46fcdc=_0x238e3b[_0xa375d9]>>0xc,_0xd4018f=_0x504f0e[_0x46fcdc]||0x0;return _0xd4018f>0x0;},VisuMZ[_0x19616c(0x4f5)]['Game_Map_changeTileset']=Game_Map[_0x19616c(0x7f9)]['changeTileset'],Game_Map[_0x19616c(0x7f9)][_0x19616c(0x67b)]=function(_0x4818e1){const _0x1c8cdc=_0x19616c;VisuMZ[_0x1c8cdc(0x4f5)][_0x1c8cdc(0x70c)][_0x1c8cdc(0x4a5)](this,_0x4818e1),this[_0x1c8cdc(0x618)](),SceneManager[_0x1c8cdc(0x38c)]['_spriteset'][_0x1c8cdc(0x3ad)]();},Game_Map['prototype'][_0x19616c(0x618)]=function(){const _0x4c8333=_0x19616c,_0x5274c8=this[_0x4c8333(0x37e)]();if(Object[_0x4c8333(0x60c)](_0x5274c8)[_0x4c8333(0x375)]<=0x0)return;const _0x3d6499=SceneManager['_scene'][_0x4c8333(0x4f0)];_0x3d6499&&(_0x3d6499[_0x4c8333(0x377)]&&_0x3d6499[_0x4c8333(0x377)](),_0x3d6499[_0x4c8333(0x585)]&&_0x3d6499[_0x4c8333(0x585)]());},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x844)]=Game_Character['prototype']['processMoveCommand'],Game_Character[_0x19616c(0x7f9)][_0x19616c(0x3ac)]=function(_0xb2fe6d){const _0x3bb1b9=_0x19616c;try{VisuMZ['CoreEngine'][_0x3bb1b9(0x844)][_0x3bb1b9(0x4a5)](this,_0xb2fe6d);}catch(_0x1a7805){if($gameTemp[_0x3bb1b9(0x24a)]())console[_0x3bb1b9(0x765)](_0x1a7805);}},Game_Player[_0x19616c(0x7f9)][_0x19616c(0x2e0)]=function(){const _0x37e544=_0x19616c,_0x596699=$gameMap[_0x37e544(0x77d)]();this['_encounterCount']=Math[_0x37e544(0x222)](_0x596699)+Math[_0x37e544(0x222)](_0x596699)+this['encounterStepsMinimum']();},Game_Player['prototype'][_0x19616c(0x98e)]=function(){const _0x2f3759=_0x19616c;return $dataMap&&$dataMap['note']&&$dataMap[_0x2f3759(0x5df)]['match'](/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i)?Number(RegExp['$1']):VisuMZ[_0x2f3759(0x4f5)]['Settings'][_0x2f3759(0x1fb)]['EncounterRateMinimum'];},VisuMZ[_0x19616c(0x4f5)]['Game_Event_isCollidedWithEvents']=Game_Event[_0x19616c(0x7f9)][_0x19616c(0x839)],Game_Event[_0x19616c(0x7f9)][_0x19616c(0x839)]=function(_0x4319c8,_0x2cddf0){const _0x4423b7=_0x19616c;return this['isSmartEventCollisionOn']()?this[_0x4423b7(0x769)](_0x4319c8,_0x2cddf0):VisuMZ[_0x4423b7(0x4f5)]['Game_Event_isCollidedWithEvents']['call'](this,_0x4319c8,_0x2cddf0);},Game_Event[_0x19616c(0x7f9)][_0x19616c(0x8ef)]=function(){const _0x258bbe=_0x19616c;return VisuMZ['CoreEngine'][_0x258bbe(0x568)][_0x258bbe(0x1fb)][_0x258bbe(0x3c3)];},Game_Event[_0x19616c(0x7f9)][_0x19616c(0x769)]=function(_0x54f785,_0x1d4c5c){const _0x45b7aa=_0x19616c;if(!this[_0x45b7aa(0x934)]())return![];else{const _0x231d17=$gameMap[_0x45b7aa(0x5d5)](_0x54f785,_0x1d4c5c)[_0x45b7aa(0x1b7)](_0x152600=>_0x152600[_0x45b7aa(0x934)]());return _0x231d17[_0x45b7aa(0x375)]>0x0;}},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x880)]=Game_Interpreter[_0x19616c(0x7f9)][_0x19616c(0x3bb)],Game_Interpreter[_0x19616c(0x7f9)][_0x19616c(0x3bb)]=function(_0x412e60){const _0x278e25=_0x19616c,_0x555543=this[_0x278e25(0x3c8)]();return _0x555543[_0x278e25(0x490)](/\/\/[ ]SCRIPT[ ]CALL/i)?this['runCombinedScrollingTextAsCode'](_0x555543):VisuMZ[_0x278e25(0x4f5)]['Game_Interpreter_command105'][_0x278e25(0x4a5)](this,_0x412e60);},Game_Interpreter[_0x19616c(0x7f9)][_0x19616c(0x3c8)]=function(){const _0x270f10=_0x19616c;let _0x2eda23='',_0xfde97=this[_0x270f10(0x7f4)]+0x1;while(this['_list'][_0xfde97]&&this[_0x270f10(0x46a)][_0xfde97][_0x270f10(0x7d3)]===0x195){_0x2eda23+=this[_0x270f10(0x46a)][_0xfde97][_0x270f10(0x353)][0x0]+'\x0a',_0xfde97++;}return _0x2eda23;},Game_Interpreter[_0x19616c(0x7f9)][_0x19616c(0x81b)]=function(_0x45f231){const _0xa59747=_0x19616c;try{eval(_0x45f231);}catch(_0x1702bc){$gameTemp[_0xa59747(0x24a)]()&&(console[_0xa59747(0x765)](_0xa59747(0x94b)),console[_0xa59747(0x765)](_0x1702bc));}return!![];},VisuMZ['CoreEngine'][_0x19616c(0x65d)]=Game_Interpreter[_0x19616c(0x7f9)][_0x19616c(0x247)],Game_Interpreter['prototype'][_0x19616c(0x247)]=function(_0x1a390c){const _0x54191b=_0x19616c;try{VisuMZ[_0x54191b(0x4f5)][_0x54191b(0x65d)][_0x54191b(0x4a5)](this,_0x1a390c);}catch(_0x3ee6ef){$gameTemp[_0x54191b(0x24a)]()&&(console[_0x54191b(0x765)](_0x54191b(0x31f)),console[_0x54191b(0x765)](_0x3ee6ef)),this[_0x54191b(0x951)]();}return!![];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x4c6)]=Game_Interpreter[_0x19616c(0x7f9)][_0x19616c(0x682)],Game_Interpreter[_0x19616c(0x7f9)]['command122']=function(_0x41db91){const _0x3ebe55=_0x19616c;try{VisuMZ['CoreEngine'][_0x3ebe55(0x4c6)][_0x3ebe55(0x4a5)](this,_0x41db91);}catch(_0x2da9b7){$gameTemp[_0x3ebe55(0x24a)]()&&(console['log'](_0x3ebe55(0x4a7)),console[_0x3ebe55(0x765)](_0x2da9b7));}return!![];},VisuMZ['CoreEngine'][_0x19616c(0x494)]=Game_Interpreter[_0x19616c(0x7f9)][_0x19616c(0x3aa)],Game_Interpreter[_0x19616c(0x7f9)][_0x19616c(0x3aa)]=function(){const _0x58988c=_0x19616c;try{VisuMZ[_0x58988c(0x4f5)][_0x58988c(0x494)][_0x58988c(0x4a5)](this);}catch(_0x13b211){$gameTemp[_0x58988c(0x24a)]()&&(console['log'](_0x58988c(0x4e8)),console['log'](_0x13b211));}return!![];},VisuMZ[_0x19616c(0x4f5)]['Game_Interpreter_PluginCommand']=Game_Interpreter[_0x19616c(0x7f9)][_0x19616c(0x5ae)],Game_Interpreter[_0x19616c(0x7f9)][_0x19616c(0x5ae)]=function(_0x5a0d22){const _0x4b75ca=_0x19616c;return $gameTemp[_0x4b75ca(0x1ef)](this),VisuMZ[_0x4b75ca(0x4f5)][_0x4b75ca(0x8ca)][_0x4b75ca(0x4a5)](this,_0x5a0d22);},Scene_Base['prototype'][_0x19616c(0x454)]=function(){const _0x49f8dd=_0x19616c;return VisuMZ[_0x49f8dd(0x4f5)][_0x49f8dd(0x568)]['UI'][_0x49f8dd(0x289)];},Scene_Base['prototype'][_0x19616c(0x8d5)]=function(){const _0x3e4cb0=_0x19616c;return VisuMZ['CoreEngine'][_0x3e4cb0(0x568)]['UI']['BottomHelp'];},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x7bf)]=function(){const _0x1a793f=_0x19616c;return VisuMZ[_0x1a793f(0x4f5)]['Settings']['UI']['BottomButtons'];},Scene_Base[_0x19616c(0x7f9)]['isRightInputMode']=function(){const _0x1c96b8=_0x19616c;return VisuMZ[_0x1c96b8(0x4f5)]['Settings']['UI'][_0x1c96b8(0x45a)];},Scene_Base['prototype']['mainCommandWidth']=function(){const _0x26a474=_0x19616c;return VisuMZ[_0x26a474(0x4f5)][_0x26a474(0x568)]['UI']['CommandWidth'];},Scene_Base[_0x19616c(0x7f9)]['buttonAreaHeight']=function(){const _0x1e3bc3=_0x19616c;return VisuMZ[_0x1e3bc3(0x4f5)][_0x1e3bc3(0x568)]['UI'][_0x1e3bc3(0x565)];},Scene_Base['prototype'][_0x19616c(0x69e)]=function(){const _0x1f441f=_0x19616c;return VisuMZ[_0x1f441f(0x4f5)][_0x1f441f(0x568)][_0x1f441f(0x8a1)][_0x1f441f(0x6bc)];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x588)]=Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x2eb)],Scene_Base['prototype'][_0x19616c(0x2eb)]=function(){const _0x2e4b5d=_0x19616c;VisuMZ[_0x2e4b5d(0x4f5)][_0x2e4b5d(0x588)][_0x2e4b5d(0x4a5)](this),this['createButtonAssistWindow'](),this[_0x2e4b5d(0x549)](),this[_0x2e4b5d(0x49d)]['x']=Math['round'](this[_0x2e4b5d(0x49d)]['x']),this[_0x2e4b5d(0x49d)]['y']=Math[_0x2e4b5d(0x45c)](this[_0x2e4b5d(0x49d)]['y']);},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x272)]=function(){},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x549)]=function(){const _0x25b048=_0x19616c;this['_textPopupWindow']=new Window_TextPopup(),this[_0x25b048(0x1b8)](this[_0x25b048(0x738)]);},$textPopup=function(_0x195629){const _0x38f964=_0x19616c,_0x11596d=SceneManager[_0x38f964(0x38c)][_0x38f964(0x738)];_0x11596d&&_0x11596d['addQueue'](_0x195629);},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x511)]=function(){const _0x35974a=_0x19616c;return TextManager[_0x35974a(0x8ea)](_0x35974a(0x4b7),_0x35974a(0x312));},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x6d2)]=function(){const _0x536f2f=_0x19616c;return TextManager['getInputButtonString'](_0x536f2f(0x5bd));},Scene_Base[_0x19616c(0x7f9)]['buttonAssistKey3']=function(){const _0x2d8110=_0x19616c;return TextManager[_0x2d8110(0x726)](_0x2d8110(0x68f));},Scene_Base[_0x19616c(0x7f9)]['buttonAssistKey4']=function(){const _0x425fd2=_0x19616c;return TextManager[_0x425fd2(0x726)]('ok');},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x6e3)]=function(){const _0x420e44=_0x19616c;return TextManager[_0x420e44(0x726)]('cancel');},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x3a5)]=function(){const _0x23c838=_0x19616c;return this['_pageupButton']&&this[_0x23c838(0x25b)][_0x23c838(0x766)]?TextManager['buttonAssistSwitch']:'';},Scene_Base[_0x19616c(0x7f9)]['buttonAssistText2']=function(){return'';},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x6f9)]=function(){return'';},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x363)]=function(){const _0x3decf5=_0x19616c;return TextManager[_0x3decf5(0x7e7)];},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x6df)]=function(){const _0x42a312=_0x19616c;return TextManager[_0x42a312(0x6f5)];},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x442)]=function(){return 0x0;},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x6ca)]=function(){return 0x0;},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x259)]=function(){return 0x0;},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x949)]=function(){return 0x0;},Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x5f1)]=function(){return 0x0;},VisuMZ['CoreEngine'][_0x19616c(0x77b)]=Scene_Boot[_0x19616c(0x7f9)][_0x19616c(0x4ec)],Scene_Boot[_0x19616c(0x7f9)][_0x19616c(0x4ec)]=function(){const _0x2a24d5=_0x19616c;VisuMZ[_0x2a24d5(0x4f5)][_0x2a24d5(0x77b)]['call'](this),this[_0x2a24d5(0x812)]();},Scene_Boot['prototype']['loadGameImagesCoreEngine']=function(){const _0x23955a=_0x19616c,_0x32b9b0=['animations','battlebacks1',_0x23955a(0x836),'characters',_0x23955a(0x54e),'faces',_0x23955a(0x8bc),'pictures',_0x23955a(0x906),'sv_enemies',_0x23955a(0x957),_0x23955a(0x4dc),_0x23955a(0x649),_0x23955a(0x996)];for(const _0x16e406 of _0x32b9b0){const _0x1fb02f=VisuMZ[_0x23955a(0x4f5)][_0x23955a(0x568)][_0x23955a(0x993)][_0x16e406],_0x1683c4=_0x23955a(0x59c)[_0x23955a(0x67e)](_0x16e406);for(const _0x2cf1cb of _0x1fb02f){ImageManager['loadBitmap'](_0x1683c4,_0x2cf1cb);}}},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x5cb)]=Scene_Boot[_0x19616c(0x7f9)][_0x19616c(0x8d9)],Scene_Boot[_0x19616c(0x7f9)][_0x19616c(0x8d9)]=function(){const _0x191d67=_0x19616c;Utils['isOptionValid'](_0x191d67(0x36c))&&VisuMZ[_0x191d67(0x4f5)][_0x191d67(0x568)][_0x191d67(0x1fb)]['NewGameBoot']?this[_0x191d67(0x571)]():VisuMZ[_0x191d67(0x4f5)][_0x191d67(0x5cb)][_0x191d67(0x4a5)](this);},Scene_Boot['prototype'][_0x19616c(0x571)]=function(){const _0x5d0671=_0x19616c;this[_0x5d0671(0x506)](),DataManager[_0x5d0671(0x512)](),SceneManager['goto'](Scene_Map);},Scene_Boot['prototype'][_0x19616c(0x49e)]=function(){const _0xfedb13=_0x19616c,_0x5f2a04=$dataSystem[_0xfedb13(0x435)][_0xfedb13(0x28a)],_0x3559c5=$dataSystem['advanced'][_0xfedb13(0x7a4)],_0x12a784=VisuMZ[_0xfedb13(0x4f5)][_0xfedb13(0x568)]['UI'][_0xfedb13(0x441)];Graphics[_0xfedb13(0x388)]=_0x5f2a04-_0x12a784*0x2,Graphics[_0xfedb13(0x785)]=_0x3559c5-_0x12a784*0x2,this[_0xfedb13(0x554)]();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x947)]=Scene_Boot[_0x19616c(0x7f9)][_0x19616c(0x8b8)],Scene_Boot[_0x19616c(0x7f9)][_0x19616c(0x8b8)]=function(){const _0x4b3965=_0x19616c;this[_0x4b3965(0x1bb)]()?this[_0x4b3965(0x4ae)]():VisuMZ[_0x4b3965(0x4f5)][_0x4b3965(0x947)][_0x4b3965(0x4a5)](this);},Scene_Boot[_0x19616c(0x7f9)]['isFullDocumentTitle']=function(){const _0x5338d0=_0x19616c;if(Scene_Title[_0x5338d0(0x296)]==='')return![];if(Scene_Title['subtitle']===_0x5338d0(0x629))return![];if(Scene_Title[_0x5338d0(0x236)]==='')return![];if(Scene_Title[_0x5338d0(0x236)]===_0x5338d0(0x975))return![];return!![];},Scene_Boot[_0x19616c(0x7f9)]['makeDocumentTitle']=function(){const _0x16b7d0=_0x19616c,_0x3c13fa=$dataSystem[_0x16b7d0(0x658)],_0x3fcfbe=Scene_Title[_0x16b7d0(0x296)]||'',_0x54d091=Scene_Title[_0x16b7d0(0x236)]||'',_0x5a6d6a=VisuMZ[_0x16b7d0(0x4f5)][_0x16b7d0(0x568)]['MenuLayout'][_0x16b7d0(0x327)][_0x16b7d0(0x681)],_0x6ec2f0=_0x5a6d6a['format'](_0x3c13fa,_0x3fcfbe,_0x54d091);document[_0x16b7d0(0x439)]=_0x6ec2f0;},Scene_Boot[_0x19616c(0x7f9)][_0x19616c(0x554)]=function(){const _0x506f82=_0x19616c;if(VisuMZ[_0x506f82(0x4f5)][_0x506f82(0x568)]['UI'][_0x506f82(0x5ac)]){const _0x47f486=Graphics[_0x506f82(0x3e0)]-Graphics['boxWidth']-VisuMZ[_0x506f82(0x4f5)]['Settings']['UI'][_0x506f82(0x441)]*0x2,_0x1ee8c4=Sprite_Button[_0x506f82(0x7f9)][_0x506f82(0x4c4)][_0x506f82(0x4a5)](this)*0x4;if(_0x47f486>=_0x1ee8c4)SceneManager[_0x506f82(0x3ec)](!![]);}},Scene_Title[_0x19616c(0x296)]=VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)]['MenuLayout'][_0x19616c(0x327)][_0x19616c(0x629)],Scene_Title[_0x19616c(0x236)]=VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)][_0x19616c(0x420)]['Title'][_0x19616c(0x69d)],Scene_Title[_0x19616c(0x314)]=VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)]['TitlePicButtons'],VisuMZ[_0x19616c(0x4f5)]['Scene_Title_drawGameTitle']=Scene_Title[_0x19616c(0x7f9)]['drawGameTitle'],Scene_Title[_0x19616c(0x7f9)][_0x19616c(0x2b3)]=function(){const _0x19533e=_0x19616c;VisuMZ[_0x19533e(0x4f5)][_0x19533e(0x568)][_0x19533e(0x420)][_0x19533e(0x327)][_0x19533e(0x2b3)]['call'](this);if(Scene_Title[_0x19533e(0x296)]!==''&&Scene_Title[_0x19533e(0x296)]!==_0x19533e(0x629))this[_0x19533e(0x7a2)]();if(Scene_Title[_0x19533e(0x236)]!==''&&Scene_Title[_0x19533e(0x236)]!==_0x19533e(0x975))this[_0x19533e(0x5be)]();},Scene_Title[_0x19616c(0x7f9)][_0x19616c(0x7a2)]=function(){const _0xf0f32d=_0x19616c;VisuMZ[_0xf0f32d(0x4f5)][_0xf0f32d(0x568)][_0xf0f32d(0x420)][_0xf0f32d(0x327)][_0xf0f32d(0x7a2)]['call'](this);},Scene_Title[_0x19616c(0x7f9)][_0x19616c(0x5be)]=function(){const _0x45a7d6=_0x19616c;VisuMZ[_0x45a7d6(0x4f5)][_0x45a7d6(0x568)]['MenuLayout'][_0x45a7d6(0x327)][_0x45a7d6(0x5be)]['call'](this);},Scene_Title[_0x19616c(0x7f9)][_0x19616c(0x982)]=function(){const _0x773cd1=_0x19616c;this[_0x773cd1(0x24f)]();const _0x20b094=$dataSystem['titleCommandWindow']['background'],_0x415f8a=this['commandWindowRect']();this['_commandWindow']=new Window_TitleCommand(_0x415f8a),this[_0x773cd1(0x235)]['setBackgroundType'](_0x20b094);const _0x3b5726=this[_0x773cd1(0x866)]();this[_0x773cd1(0x235)][_0x773cd1(0x920)](_0x3b5726['x'],_0x3b5726['y'],_0x3b5726[_0x773cd1(0x3e0)],_0x3b5726['height']),this[_0x773cd1(0x235)][_0x773cd1(0x2f8)](),this[_0x773cd1(0x235)][_0x773cd1(0x379)](),this[_0x773cd1(0x235)]['selectLast'](),this[_0x773cd1(0x218)](this[_0x773cd1(0x235)]);},Scene_Title[_0x19616c(0x7f9)][_0x19616c(0x5de)]=function(){const _0x487f53=_0x19616c;return this[_0x487f53(0x235)]?this['_commandWindow'][_0x487f53(0x234)]():VisuMZ[_0x487f53(0x4f5)][_0x487f53(0x568)][_0x487f53(0x937)]['length'];},Scene_Title[_0x19616c(0x7f9)]['commandWindowRect']=function(){const _0x5a775a=_0x19616c;return VisuMZ[_0x5a775a(0x4f5)][_0x5a775a(0x568)][_0x5a775a(0x420)][_0x5a775a(0x327)][_0x5a775a(0x591)][_0x5a775a(0x4a5)](this);},Scene_Title[_0x19616c(0x7f9)][_0x19616c(0x24f)]=function(){const _0x129e88=_0x19616c;for(const _0x2e83c7 of Scene_Title[_0x129e88(0x314)]){const _0x363287=new Sprite_TitlePictureButton(_0x2e83c7);this[_0x129e88(0x1b8)](_0x363287);}},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x8fe)]=Scene_Map[_0x19616c(0x7f9)]['initialize'],Scene_Map['prototype'][_0x19616c(0x5cd)]=function(){const _0x599f69=_0x19616c;VisuMZ['CoreEngine']['Scene_Map_initialize'][_0x599f69(0x4a5)](this),$gameTemp[_0x599f69(0x324)](),this[_0x599f69(0x44f)]();},VisuMZ['CoreEngine'][_0x19616c(0x995)]=Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x328)],Scene_Map[_0x19616c(0x7f9)]['updateMainMultiply']=function(){const _0x240f87=_0x19616c;VisuMZ[_0x240f87(0x4f5)]['Scene_Map_updateMainMultiply'][_0x240f87(0x4a5)](this),$gameTemp[_0x240f87(0x989)]&&!$gameMessage[_0x240f87(0x60f)]()&&(this[_0x240f87(0x480)](),SceneManager[_0x240f87(0x422)]());},Scene_Map[_0x19616c(0x7f9)]['terminate']=function(){const _0x7837a7=_0x19616c;Scene_Message[_0x7837a7(0x7f9)][_0x7837a7(0x2d3)][_0x7837a7(0x4a5)](this),!SceneManager[_0x7837a7(0x4f2)](Scene_Battle)&&(this[_0x7837a7(0x4f0)][_0x7837a7(0x3ad)](),this[_0x7837a7(0x448)][_0x7837a7(0x1e1)](),this[_0x7837a7(0x49d)][_0x7837a7(0x766)]=![],SceneManager[_0x7837a7(0x679)]()),$gameScreen[_0x7837a7(0x666)](),this[_0x7837a7(0x44f)]();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x792)]=Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x670)],Scene_Map['prototype'][_0x19616c(0x670)]=function(){const _0x248efd=_0x19616c;VisuMZ['CoreEngine'][_0x248efd(0x792)]['call'](this),SceneManager[_0x248efd(0x7dc)]()&&this[_0x248efd(0x5a7)]();},Scene_Map['prototype'][_0x19616c(0x5a7)]=function(){const _0x32b98c=_0x19616c;this[_0x32b98c(0x811)]['x']=Graphics[_0x32b98c(0x388)]+0x4;},VisuMZ[_0x19616c(0x4f5)]['Scene_Map_updateScene']=Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x940)],Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x940)]=function(){const _0x28ac8d=_0x19616c;VisuMZ[_0x28ac8d(0x4f5)]['Scene_Map_updateScene'][_0x28ac8d(0x4a5)](this),this['updateDashToggle']();},Scene_Map['prototype']['updateDashToggle']=function(){const _0x551d9b=_0x19616c;Input[_0x551d9b(0x3d3)](_0x551d9b(0x7a3))&&(ConfigManager[_0x551d9b(0x6ba)]=!ConfigManager[_0x551d9b(0x6ba)],ConfigManager[_0x551d9b(0x278)]());},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x8c1)]=Scene_Map['prototype'][_0x19616c(0x480)],Scene_Map[_0x19616c(0x7f9)]['updateMain']=function(){const _0x4e5cf3=_0x19616c;VisuMZ['CoreEngine'][_0x4e5cf3(0x8c1)][_0x4e5cf3(0x4a5)](this),this[_0x4e5cf3(0x7b6)]();},Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x44f)]=function(){const _0x24f655=_0x19616c;this[_0x24f655(0x915)]=[];},Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x7b6)]=function(){const _0xf4819c=_0x19616c;if(!this[_0xf4819c(0x915)])return;for(const _0x41161e of this[_0xf4819c(0x915)]){_0x41161e&&_0x41161e[_0xf4819c(0x3ad)]();}},Scene_Map['prototype'][_0x19616c(0x203)]=function(_0x2486b3,_0x58e557){const _0x5823e2=_0x19616c,_0x245d80=$dataCommonEvents[_0x2486b3];if(!_0x245d80)return;const _0xe490ba=new Game_OnceParallelInterpreter();this[_0x5823e2(0x4d2)](_0xe490ba),_0xe490ba[_0x5823e2(0x751)](_0x2486b3),_0xe490ba[_0x5823e2(0x8c4)](_0x58e557);},Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x4d2)]=function(_0x420bcb){const _0x59d846=_0x19616c;this['_onceParallelInterpreters']=this[_0x59d846(0x915)]||[],this['_onceParallelInterpreters'][_0x59d846(0x69f)](_0x420bcb);},Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x79a)]=function(_0x449606){const _0xf099f7=_0x19616c;this[_0xf099f7(0x915)]=this[_0xf099f7(0x915)]||[],this['_onceParallelInterpreters'][_0xf099f7(0x223)](_0x449606);};function Game_OnceParallelInterpreter(){const _0x74471d=_0x19616c;this[_0x74471d(0x5cd)](...arguments);}function _0x484b(_0x44c927,_0xd1e1f5){const _0x2db6d2=_0x2db6();return _0x484b=function(_0x484bea,_0xeef5c3){_0x484bea=_0x484bea-0x19a;let _0x556c81=_0x2db6d2[_0x484bea];return _0x556c81;},_0x484b(_0x44c927,_0xd1e1f5);}Game_OnceParallelInterpreter[_0x19616c(0x7f9)]=Object['create'](Game_Interpreter[_0x19616c(0x7f9)]),Game_OnceParallelInterpreter[_0x19616c(0x7f9)][_0x19616c(0x597)]=Game_OnceParallelInterpreter,Game_OnceParallelInterpreter[_0x19616c(0x7f9)][_0x19616c(0x751)]=function(_0x1a34de){const _0x4440b9=_0x19616c,_0x56d21a=$dataCommonEvents[_0x1a34de];_0x56d21a?this[_0x4440b9(0x498)](_0x56d21a[_0x4440b9(0x6b4)],0x0):this[_0x4440b9(0x2d3)]();},Game_OnceParallelInterpreter[_0x19616c(0x7f9)][_0x19616c(0x8c4)]=function(_0x207fdd){const _0x2f9c37=_0x19616c;this[_0x2f9c37(0x411)]=_0x207fdd||0x0;},Game_OnceParallelInterpreter[_0x19616c(0x7f9)][_0x19616c(0x2d3)]=function(){const _0x29eaef=_0x19616c;if(!SceneManager[_0x29eaef(0x7bb)]())return;SceneManager[_0x29eaef(0x38c)]['removeOnceParallelInterpreter'](this),Game_Interpreter[_0x29eaef(0x7f9)][_0x29eaef(0x2d3)]['call'](this);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x2e3)]=Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x5ff)],Scene_MenuBase['prototype']['helpAreaTop']=function(){const _0x132575=_0x19616c;let _0x7a6e5e=0x0;return SceneManager[_0x132575(0x504)]()?_0x7a6e5e=this[_0x132575(0x1bd)]():_0x7a6e5e=VisuMZ[_0x132575(0x4f5)][_0x132575(0x2e3)]['call'](this),_0x7a6e5e;},Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x1bd)]=function(){const _0x20726a=_0x19616c;return this[_0x20726a(0x8d5)]()?this[_0x20726a(0x6f3)]():0x0;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x42b)]=Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x894)],Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x894)]=function(){const _0x59a9af=_0x19616c;return SceneManager['areButtonsOutsideMainUI']()?this[_0x59a9af(0x8f8)]():VisuMZ[_0x59a9af(0x4f5)][_0x59a9af(0x42b)]['call'](this);},Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x8f8)]=function(){const _0x1c0d19=_0x19616c;if(!this[_0x1c0d19(0x8d5)]())return this['helpAreaBottom']();else return this[_0x1c0d19(0x1c5)]()&&this[_0x1c0d19(0x6a2)]()===_0x1c0d19(0x414)?Window_ButtonAssist['prototype'][_0x1c0d19(0x1b0)]():0x0;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x8db)]=Scene_MenuBase['prototype']['mainAreaHeight'],Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x5f4)]=function(){const _0x4c4254=_0x19616c;let _0x181668=0x0;return SceneManager['areButtonsOutsideMainUI']()?_0x181668=this[_0x4c4254(0x834)]():_0x181668=VisuMZ[_0x4c4254(0x4f5)]['Scene_MenuBase_mainAreaHeight']['call'](this),this[_0x4c4254(0x1c5)]()&&this[_0x4c4254(0x6a2)]()!==_0x4c4254(0x254)&&(_0x181668-=Window_ButtonAssist[_0x4c4254(0x7f9)][_0x4c4254(0x1b0)]()),_0x181668;},Scene_MenuBase['prototype'][_0x19616c(0x834)]=function(){const _0x13d643=_0x19616c;return Graphics[_0x13d643(0x785)]-this['helpAreaHeight']();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x3ab)]=Scene_MenuBase['prototype']['createBackground'],Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x7e3)]=function(){const _0x13dc5a=_0x19616c,_0x3277e1=VisuMZ[_0x13dc5a(0x4f5)][_0x13dc5a(0x568)][_0x13dc5a(0x77f)][_0x13dc5a(0x8c9)]??0x8;this[_0x13dc5a(0x3d8)]=new PIXI[(_0x13dc5a(0x978))][(_0x13dc5a(0x4e1))](_0x3277e1),this[_0x13dc5a(0x23d)]=new Sprite(),this['_backgroundSprite'][_0x13dc5a(0x807)]=SceneManager['backgroundBitmap'](),this[_0x13dc5a(0x23d)][_0x13dc5a(0x978)]=[this[_0x13dc5a(0x3d8)]],this['addChild'](this[_0x13dc5a(0x23d)]),this['setBackgroundOpacity'](0xc0),this['setBackgroundOpacity'](this['getBackgroundOpacity']()),this[_0x13dc5a(0x1dc)]();},Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x55e)]=function(){const _0xa12c34=_0x19616c,_0x58347b=String(this[_0xa12c34(0x597)][_0xa12c34(0x3e9)]),_0x151886=this[_0xa12c34(0x20b)](_0x58347b);return _0x151886?_0x151886['SnapshotOpacity']:0xc0;},Scene_MenuBase['prototype'][_0x19616c(0x1dc)]=function(){const _0x2f958e=_0x19616c,_0x987c30=String(this[_0x2f958e(0x597)][_0x2f958e(0x3e9)]),_0x135d53=this[_0x2f958e(0x20b)](_0x987c30);_0x135d53&&(_0x135d53[_0x2f958e(0x735)]!==''||_0x135d53[_0x2f958e(0x20f)]!=='')&&(this[_0x2f958e(0x874)]=new Sprite(ImageManager[_0x2f958e(0x8a2)](_0x135d53[_0x2f958e(0x735)])),this['_backSprite2']=new Sprite(ImageManager[_0x2f958e(0x76d)](_0x135d53[_0x2f958e(0x20f)])),this[_0x2f958e(0x1b8)](this[_0x2f958e(0x874)]),this[_0x2f958e(0x1b8)](this['_backSprite2']),this['_backSprite1']['bitmap'][_0x2f958e(0x531)](this[_0x2f958e(0x8a7)]['bind'](this,this[_0x2f958e(0x874)])),this['_backSprite2'][_0x2f958e(0x807)]['addLoadListener'](this['adjustSprite']['bind'](this,this[_0x2f958e(0x857)])));},Scene_MenuBase[_0x19616c(0x7f9)]['getCustomBackgroundSettings']=function(_0x3df087){const _0x26ee26=_0x19616c;return VisuMZ['CoreEngine'][_0x26ee26(0x568)][_0x26ee26(0x77f)][_0x3df087]||VisuMZ[_0x26ee26(0x4f5)][_0x26ee26(0x568)][_0x26ee26(0x77f)][_0x26ee26(0x61c)];},Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x8a7)]=function(_0x269fa0){const _0xf0baf=_0x19616c;this[_0xf0baf(0x3a8)](_0x269fa0),this['centerSprite'](_0x269fa0);},VisuMZ['CoreEngine'][_0x19616c(0x946)]=Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x39d)],Scene_MenuBase['prototype']['createCancelButton']=function(){const _0x554ced=_0x19616c;VisuMZ[_0x554ced(0x4f5)][_0x554ced(0x946)][_0x554ced(0x4a5)](this),SceneManager['isSideButtonLayout']()&&this[_0x554ced(0x88b)]();},Scene_MenuBase[_0x19616c(0x7f9)]['moveCancelButtonSideButtonLayout']=function(){const _0x18b2aa=_0x19616c;this[_0x18b2aa(0x4cb)]['x']=Graphics[_0x18b2aa(0x388)]+0x4;},VisuMZ['CoreEngine'][_0x19616c(0x3fc)]=Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x962)],Scene_MenuBase['prototype'][_0x19616c(0x962)]=function(){const _0x254b38=_0x19616c;VisuMZ[_0x254b38(0x4f5)][_0x254b38(0x3fc)][_0x254b38(0x4a5)](this),SceneManager[_0x254b38(0x7dc)]()&&this['movePageButtonSideButtonLayout']();},Scene_MenuBase['prototype'][_0x19616c(0x62c)]=function(){const _0x16fdee=_0x19616c;this[_0x16fdee(0x25b)]['x']=-0x1*(this[_0x16fdee(0x25b)][_0x16fdee(0x3e0)]+this['_pagedownButton']['width']+0x8),this['_pagedownButton']['x']=-0x1*(this[_0x16fdee(0x745)][_0x16fdee(0x3e0)]+0x4);},Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x1c5)]=function(){const _0x5527c0=_0x19616c;return VisuMZ[_0x5527c0(0x4f5)][_0x5527c0(0x568)]['ButtonAssist'][_0x5527c0(0x59b)];},Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x6a2)]=function(){const _0x4c50e0=_0x19616c;return SceneManager[_0x4c50e0(0x7dc)]()||SceneManager[_0x4c50e0(0x1f5)]()?VisuMZ[_0x4c50e0(0x4f5)][_0x4c50e0(0x568)][_0x4c50e0(0x21d)][_0x4c50e0(0x1b2)]:_0x4c50e0(0x254);},Scene_MenuBase[_0x19616c(0x7f9)]['createButtonAssistWindow']=function(){const _0x4613e2=_0x19616c;if(!this[_0x4613e2(0x1c5)]())return;const _0xe82ac6=this[_0x4613e2(0x8b6)]();this['_buttonAssistWindow']=new Window_ButtonAssist(_0xe82ac6),this[_0x4613e2(0x218)](this[_0x4613e2(0x609)]);},Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x8b6)]=function(){const _0x1b6a19=_0x19616c;return this[_0x1b6a19(0x6a2)]()===_0x1b6a19(0x254)?this['buttonAssistWindowButtonRect']():this[_0x1b6a19(0x5e4)]();},Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x424)]=function(){const _0x2b4a6f=_0x19616c,_0x378f43=ConfigManager[_0x2b4a6f(0x64d)]?(Sprite_Button[_0x2b4a6f(0x7f9)][_0x2b4a6f(0x4c4)]()+0x6)*0x2:0x0,_0x360c9a=this[_0x2b4a6f(0x54a)](),_0x1702c7=Graphics[_0x2b4a6f(0x388)]-_0x378f43*0x2,_0xaa3192=this[_0x2b4a6f(0x873)]();return new Rectangle(_0x378f43,_0x360c9a,_0x1702c7,_0xaa3192);},Scene_MenuBase[_0x19616c(0x7f9)][_0x19616c(0x5e4)]=function(){const _0x453f0a=_0x19616c,_0x33fb9e=Graphics['boxWidth'],_0x1ecea9=Window_ButtonAssist[_0x453f0a(0x7f9)]['lineHeight'](),_0x28cb1b=0x0;let _0x5aa051=0x0;return this['getButtonAssistLocation']()===_0x453f0a(0x414)?_0x5aa051=0x0:_0x5aa051=Graphics[_0x453f0a(0x785)]-_0x1ecea9,new Rectangle(_0x28cb1b,_0x5aa051,_0x33fb9e,_0x1ecea9);},Scene_Menu['layoutSettings']=VisuMZ['CoreEngine']['Settings'][_0x19616c(0x420)][_0x19616c(0x5ad)],VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x4dd)]=Scene_Menu['prototype']['create'],Scene_Menu[_0x19616c(0x7f9)][_0x19616c(0x630)]=function(){const _0x35e426=_0x19616c;VisuMZ[_0x35e426(0x4f5)][_0x35e426(0x4dd)]['call'](this),this[_0x35e426(0x91a)]();},Scene_Menu[_0x19616c(0x7f9)][_0x19616c(0x91a)]=function(){const _0x249223=_0x19616c;this['_commandWindow']&&this['_commandWindow'][_0x249223(0x76e)](Scene_Menu[_0x249223(0x87b)][_0x249223(0x515)]),this['_goldWindow']&&this[_0x249223(0x696)]['setBackgroundType'](Scene_Menu['layoutSettings'][_0x249223(0x502)]),this['_statusWindow']&&this[_0x249223(0x8a5)]['setBackgroundType'](Scene_Menu[_0x249223(0x87b)][_0x249223(0x212)]);},Scene_Menu[_0x19616c(0x7f9)][_0x19616c(0x866)]=function(){const _0x1f29ae=_0x19616c;return Scene_Menu[_0x1f29ae(0x87b)][_0x1f29ae(0x591)]['call'](this);},Scene_Menu[_0x19616c(0x7f9)]['goldWindowRect']=function(){const _0x188bb6=_0x19616c;return Scene_Menu[_0x188bb6(0x87b)][_0x188bb6(0x605)][_0x188bb6(0x4a5)](this);},Scene_Menu[_0x19616c(0x7f9)][_0x19616c(0x6e2)]=function(){const _0x2f9d0b=_0x19616c;return Scene_Menu[_0x2f9d0b(0x87b)][_0x2f9d0b(0x3f6)][_0x2f9d0b(0x4a5)](this);},Scene_Item[_0x19616c(0x87b)]=VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)][_0x19616c(0x420)]['ItemMenu'],VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x5ab)]=Scene_Item[_0x19616c(0x7f9)][_0x19616c(0x630)],Scene_Item[_0x19616c(0x7f9)][_0x19616c(0x630)]=function(){const _0x43749d=_0x19616c;VisuMZ[_0x43749d(0x4f5)][_0x43749d(0x5ab)][_0x43749d(0x4a5)](this),this[_0x43749d(0x91a)]();},Scene_Item[_0x19616c(0x7f9)][_0x19616c(0x91a)]=function(){const _0x506081=_0x19616c;this[_0x506081(0x407)]&&this['_helpWindow'][_0x506081(0x76e)](Scene_Item[_0x506081(0x87b)][_0x506081(0x8d7)]),this[_0x506081(0x283)]&&this[_0x506081(0x283)][_0x506081(0x76e)](Scene_Item[_0x506081(0x87b)][_0x506081(0x323)]),this[_0x506081(0x928)]&&this[_0x506081(0x928)]['setBackgroundType'](Scene_Item[_0x506081(0x87b)][_0x506081(0x6c6)]),this[_0x506081(0x27e)]&&this['_actorWindow']['setBackgroundType'](Scene_Item[_0x506081(0x87b)][_0x506081(0x427)]);},Scene_Item['prototype'][_0x19616c(0x960)]=function(){const _0x1c9f6b=_0x19616c;return Scene_Item[_0x1c9f6b(0x87b)][_0x1c9f6b(0x84f)][_0x1c9f6b(0x4a5)](this);},Scene_Item[_0x19616c(0x7f9)][_0x19616c(0x5c5)]=function(){const _0x1191ae=_0x19616c;return Scene_Item[_0x1191ae(0x87b)]['CategoryRect'][_0x1191ae(0x4a5)](this);},Scene_Item[_0x19616c(0x7f9)][_0x19616c(0x87c)]=function(){const _0x46bfe4=_0x19616c;return Scene_Item[_0x46bfe4(0x87b)][_0x46bfe4(0x8f4)][_0x46bfe4(0x4a5)](this);},Scene_Item[_0x19616c(0x7f9)]['actorWindowRect']=function(){const _0x55e419=_0x19616c;return Scene_Item['layoutSettings']['ActorRect'][_0x55e419(0x4a5)](this);},Scene_Skill[_0x19616c(0x87b)]=VisuMZ['CoreEngine'][_0x19616c(0x568)][_0x19616c(0x420)][_0x19616c(0x686)],VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x20e)]=Scene_Skill[_0x19616c(0x7f9)]['create'],Scene_Skill[_0x19616c(0x7f9)]['create']=function(){const _0x26f66e=_0x19616c;VisuMZ['CoreEngine'][_0x26f66e(0x20e)][_0x26f66e(0x4a5)](this),this[_0x26f66e(0x91a)]();},Scene_Skill[_0x19616c(0x7f9)][_0x19616c(0x91a)]=function(){const _0x453ff3=_0x19616c;this[_0x453ff3(0x407)]&&this[_0x453ff3(0x407)]['setBackgroundType'](Scene_Skill[_0x453ff3(0x87b)]['HelpBgType']),this['_skillTypeWindow']&&this[_0x453ff3(0x841)][_0x453ff3(0x76e)](Scene_Skill[_0x453ff3(0x87b)][_0x453ff3(0x8e1)]),this[_0x453ff3(0x8a5)]&&this[_0x453ff3(0x8a5)]['setBackgroundType'](Scene_Skill[_0x453ff3(0x87b)][_0x453ff3(0x212)]),this[_0x453ff3(0x928)]&&this[_0x453ff3(0x928)][_0x453ff3(0x76e)](Scene_Skill[_0x453ff3(0x87b)][_0x453ff3(0x6c6)]),this[_0x453ff3(0x27e)]&&this[_0x453ff3(0x27e)][_0x453ff3(0x76e)](Scene_Skill[_0x453ff3(0x87b)][_0x453ff3(0x427)]);},Scene_Skill[_0x19616c(0x7f9)][_0x19616c(0x960)]=function(){const _0x1cf011=_0x19616c;return Scene_Skill[_0x1cf011(0x87b)][_0x1cf011(0x84f)][_0x1cf011(0x4a5)](this);},Scene_Skill['prototype']['skillTypeWindowRect']=function(){const _0x296b8f=_0x19616c;return Scene_Skill[_0x296b8f(0x87b)][_0x296b8f(0x847)][_0x296b8f(0x4a5)](this);},Scene_Skill[_0x19616c(0x7f9)][_0x19616c(0x6e2)]=function(){const _0x5df916=_0x19616c;return Scene_Skill[_0x5df916(0x87b)][_0x5df916(0x3f6)]['call'](this);},Scene_Skill[_0x19616c(0x7f9)][_0x19616c(0x87c)]=function(){const _0x1eab2f=_0x19616c;return Scene_Skill[_0x1eab2f(0x87b)]['ItemRect'][_0x1eab2f(0x4a5)](this);},Scene_Skill[_0x19616c(0x7f9)]['actorWindowRect']=function(){const _0xb855a4=_0x19616c;return Scene_Skill[_0xb855a4(0x87b)][_0xb855a4(0x786)][_0xb855a4(0x4a5)](this);},Scene_Equip[_0x19616c(0x87b)]=VisuMZ[_0x19616c(0x4f5)]['Settings'][_0x19616c(0x420)][_0x19616c(0x563)],VisuMZ['CoreEngine'][_0x19616c(0x90a)]=Scene_Equip['prototype'][_0x19616c(0x630)],Scene_Equip['prototype'][_0x19616c(0x630)]=function(){const _0x562870=_0x19616c;VisuMZ[_0x562870(0x4f5)][_0x562870(0x90a)]['call'](this),this[_0x562870(0x91a)]();},Scene_Equip[_0x19616c(0x7f9)]['setCoreEngineUpdateWindowBg']=function(){const _0x398f81=_0x19616c;this['_helpWindow']&&this[_0x398f81(0x407)]['setBackgroundType'](Scene_Equip[_0x398f81(0x87b)][_0x398f81(0x8d7)]),this[_0x398f81(0x8a5)]&&this[_0x398f81(0x8a5)][_0x398f81(0x76e)](Scene_Equip[_0x398f81(0x87b)]['StatusBgType']),this[_0x398f81(0x235)]&&this[_0x398f81(0x235)][_0x398f81(0x76e)](Scene_Equip[_0x398f81(0x87b)][_0x398f81(0x515)]),this[_0x398f81(0x33e)]&&this[_0x398f81(0x33e)][_0x398f81(0x76e)](Scene_Equip['layoutSettings']['SlotBgType']),this['_itemWindow']&&this[_0x398f81(0x928)]['setBackgroundType'](Scene_Equip[_0x398f81(0x87b)][_0x398f81(0x6c6)]);},Scene_Equip[_0x19616c(0x7f9)]['helpWindowRect']=function(){const _0x270ab1=_0x19616c;return Scene_Equip['layoutSettings']['HelpRect'][_0x270ab1(0x4a5)](this);},Scene_Equip['prototype'][_0x19616c(0x6e2)]=function(){const _0x51a9e5=_0x19616c;return Scene_Equip[_0x51a9e5(0x87b)]['StatusRect'][_0x51a9e5(0x4a5)](this);},Scene_Equip[_0x19616c(0x7f9)][_0x19616c(0x866)]=function(){const _0x154b14=_0x19616c;return Scene_Equip[_0x154b14(0x87b)]['CommandRect'][_0x154b14(0x4a5)](this);},Scene_Equip[_0x19616c(0x7f9)][_0x19616c(0x4cf)]=function(){const _0x5adada=_0x19616c;return Scene_Equip['layoutSettings'][_0x5adada(0x53f)][_0x5adada(0x4a5)](this);},Scene_Equip[_0x19616c(0x7f9)][_0x19616c(0x87c)]=function(){const _0x1985aa=_0x19616c;return Scene_Equip['layoutSettings'][_0x1985aa(0x8f4)][_0x1985aa(0x4a5)](this);},Scene_Status[_0x19616c(0x87b)]=VisuMZ['CoreEngine'][_0x19616c(0x568)]['MenuLayout']['StatusMenu'],VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x749)]=Scene_Status[_0x19616c(0x7f9)]['create'],Scene_Status[_0x19616c(0x7f9)][_0x19616c(0x630)]=function(){const _0x3da596=_0x19616c;VisuMZ[_0x3da596(0x4f5)][_0x3da596(0x749)][_0x3da596(0x4a5)](this),this[_0x3da596(0x91a)]();},Scene_Status[_0x19616c(0x7f9)][_0x19616c(0x91a)]=function(){const _0x1105f7=_0x19616c;this[_0x1105f7(0x95d)]&&this[_0x1105f7(0x95d)]['setBackgroundType'](Scene_Status[_0x1105f7(0x87b)][_0x1105f7(0x6b6)]),this['_statusWindow']&&this['_statusWindow'][_0x1105f7(0x76e)](Scene_Status[_0x1105f7(0x87b)][_0x1105f7(0x212)]),this[_0x1105f7(0x8f3)]&&this[_0x1105f7(0x8f3)][_0x1105f7(0x76e)](Scene_Status['layoutSettings']['StatusParamsBgType']),this[_0x1105f7(0x78b)]&&this[_0x1105f7(0x78b)][_0x1105f7(0x76e)](Scene_Status[_0x1105f7(0x87b)]['StatusEquipBgType']);},Scene_Status[_0x19616c(0x7f9)][_0x19616c(0x888)]=function(){const _0x33c7ec=_0x19616c;return Scene_Status[_0x33c7ec(0x87b)][_0x33c7ec(0x210)][_0x33c7ec(0x4a5)](this);},Scene_Status[_0x19616c(0x7f9)][_0x19616c(0x6e2)]=function(){const _0x548461=_0x19616c;return Scene_Status['layoutSettings'][_0x548461(0x3f6)][_0x548461(0x4a5)](this);},Scene_Status[_0x19616c(0x7f9)][_0x19616c(0x304)]=function(){const _0x5a051a=_0x19616c;return Scene_Status['layoutSettings'][_0x5a051a(0x7f1)][_0x5a051a(0x4a5)](this);},Scene_Status['prototype'][_0x19616c(0x40d)]=function(){const _0x1d71ad=_0x19616c;return Scene_Status[_0x1d71ad(0x87b)]['StatusEquipRect'][_0x1d71ad(0x4a5)](this);},Scene_Options[_0x19616c(0x87b)]=VisuMZ[_0x19616c(0x4f5)]['Settings']['MenuLayout'][_0x19616c(0x3a6)],VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x7e1)]=Scene_Options[_0x19616c(0x7f9)][_0x19616c(0x630)],Scene_Options[_0x19616c(0x7f9)][_0x19616c(0x630)]=function(){const _0x58ac48=_0x19616c;VisuMZ[_0x58ac48(0x4f5)][_0x58ac48(0x7e1)][_0x58ac48(0x4a5)](this),this[_0x58ac48(0x91a)]();},Scene_Options['prototype']['setCoreEngineUpdateWindowBg']=function(){const _0x505131=_0x19616c;this[_0x505131(0x3d9)]&&this[_0x505131(0x3d9)]['setBackgroundType'](Scene_Options[_0x505131(0x87b)][_0x505131(0x1cf)]);},Scene_Options[_0x19616c(0x7f9)]['optionsWindowRect']=function(){const _0x562ce4=_0x19616c;return Scene_Options[_0x562ce4(0x87b)][_0x562ce4(0x62f)][_0x562ce4(0x4a5)](this);},Scene_Save[_0x19616c(0x87b)]=VisuMZ['CoreEngine']['Settings'][_0x19616c(0x420)]['SaveMenu'],Scene_Save['prototype']['create']=function(){const _0x21c231=_0x19616c;Scene_File[_0x21c231(0x7f9)][_0x21c231(0x630)]['call'](this),this[_0x21c231(0x91a)]();},Scene_Save[_0x19616c(0x7f9)][_0x19616c(0x91a)]=function(){const _0x91d9c6=_0x19616c;this[_0x91d9c6(0x407)]&&this['_helpWindow'][_0x91d9c6(0x76e)](Scene_Save[_0x91d9c6(0x87b)][_0x91d9c6(0x8d7)]),this[_0x91d9c6(0x6e9)]&&this['_listWindow'][_0x91d9c6(0x76e)](Scene_Save[_0x91d9c6(0x87b)][_0x91d9c6(0x35a)]);},Scene_Save[_0x19616c(0x7f9)][_0x19616c(0x960)]=function(){const _0x20586f=_0x19616c;return Scene_Save[_0x20586f(0x87b)][_0x20586f(0x84f)]['call'](this);},Scene_Save['prototype'][_0x19616c(0x3a4)]=function(){const _0x4490af=_0x19616c;return Scene_Save[_0x4490af(0x87b)]['ListRect'][_0x4490af(0x4a5)](this);},Scene_Load[_0x19616c(0x87b)]=VisuMZ['CoreEngine'][_0x19616c(0x568)]['MenuLayout']['LoadMenu'],Scene_Load['prototype'][_0x19616c(0x630)]=function(){const _0x2397de=_0x19616c;Scene_File[_0x2397de(0x7f9)][_0x2397de(0x630)][_0x2397de(0x4a5)](this),this[_0x2397de(0x91a)]();},Scene_Load[_0x19616c(0x7f9)][_0x19616c(0x91a)]=function(){const _0x3995f6=_0x19616c;this[_0x3995f6(0x407)]&&this[_0x3995f6(0x407)]['setBackgroundType'](Scene_Load[_0x3995f6(0x87b)]['HelpBgType']),this['_listWindow']&&this[_0x3995f6(0x6e9)][_0x3995f6(0x76e)](Scene_Load[_0x3995f6(0x87b)][_0x3995f6(0x35a)]);},Scene_Load['prototype'][_0x19616c(0x960)]=function(){const _0x30d6f0=_0x19616c;return Scene_Load[_0x30d6f0(0x87b)]['HelpRect'][_0x30d6f0(0x4a5)](this);},Scene_Load['prototype'][_0x19616c(0x3a4)]=function(){const _0x5f34e9=_0x19616c;return Scene_Load[_0x5f34e9(0x87b)]['ListRect'][_0x5f34e9(0x4a5)](this);};function Scene_QuickLoad(){const _0x155556=_0x19616c;this[_0x155556(0x5cd)](...arguments);}Scene_QuickLoad[_0x19616c(0x7f9)]=Object[_0x19616c(0x630)](Scene_Load[_0x19616c(0x7f9)]),Scene_QuickLoad['prototype'][_0x19616c(0x597)]=Scene_QuickLoad,Scene_QuickLoad[_0x19616c(0x7f9)]['initialize']=function(){const _0x4aa043=_0x19616c;Scene_Load[_0x4aa043(0x7f9)][_0x4aa043(0x5cd)][_0x4aa043(0x4a5)](this);},Scene_QuickLoad['prototype'][_0x19616c(0x630)]=function(){const _0x5706e6=_0x19616c;this[_0x5706e6(0x29b)](this[_0x5706e6(0x861)]);},Scene_QuickLoad[_0x19616c(0x7f9)][_0x19616c(0x4ed)]=function(_0x48dcd4){const _0x3877ce=_0x19616c;this[_0x3877ce(0x861)]=_0x48dcd4;},Scene_QuickLoad['prototype'][_0x19616c(0x7a0)]=function(){const _0xe3c818=_0x19616c;Scene_MenuBase[_0xe3c818(0x7f9)][_0xe3c818(0x7a0)]['call'](this);},Scene_GameEnd[_0x19616c(0x87b)]=VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)]['MenuLayout'][_0x19616c(0x4b1)],VisuMZ['CoreEngine'][_0x19616c(0x832)]=Scene_GameEnd[_0x19616c(0x7f9)][_0x19616c(0x7e3)],Scene_GameEnd[_0x19616c(0x7f9)][_0x19616c(0x7e3)]=function(){const _0x408bac=_0x19616c;Scene_MenuBase['prototype'][_0x408bac(0x7e3)][_0x408bac(0x4a5)](this);},Scene_GameEnd[_0x19616c(0x7f9)]['createCommandWindow']=function(){const _0x1c7b2f=_0x19616c,_0x39000d=this[_0x1c7b2f(0x866)]();this['_commandWindow']=new Window_GameEnd(_0x39000d),this['_commandWindow'][_0x1c7b2f(0x63a)]('cancel',this['popScene']['bind'](this)),this[_0x1c7b2f(0x218)](this['_commandWindow']),this['_commandWindow'][_0x1c7b2f(0x76e)](Scene_GameEnd[_0x1c7b2f(0x87b)][_0x1c7b2f(0x515)]);},Scene_GameEnd[_0x19616c(0x7f9)][_0x19616c(0x866)]=function(){const _0xc377c6=_0x19616c;return Scene_GameEnd[_0xc377c6(0x87b)]['CommandRect'][_0xc377c6(0x4a5)](this);},Scene_Shop[_0x19616c(0x87b)]=VisuMZ['CoreEngine'][_0x19616c(0x568)][_0x19616c(0x420)][_0x19616c(0x760)],VisuMZ[_0x19616c(0x4f5)]['Scene_Shop_create']=Scene_Shop[_0x19616c(0x7f9)][_0x19616c(0x630)],Scene_Shop[_0x19616c(0x7f9)][_0x19616c(0x630)]=function(){const _0x4b24b7=_0x19616c;VisuMZ['CoreEngine']['Scene_Shop_create']['call'](this),this[_0x4b24b7(0x91a)]();},Scene_Shop[_0x19616c(0x7f9)]['setCoreEngineUpdateWindowBg']=function(){const _0x278383=_0x19616c;this[_0x278383(0x407)]&&this[_0x278383(0x407)][_0x278383(0x76e)](Scene_Shop[_0x278383(0x87b)][_0x278383(0x8d7)]),this[_0x278383(0x696)]&&this['_goldWindow']['setBackgroundType'](Scene_Shop[_0x278383(0x87b)][_0x278383(0x502)]),this[_0x278383(0x235)]&&this['_commandWindow'][_0x278383(0x76e)](Scene_Shop[_0x278383(0x87b)][_0x278383(0x515)]),this[_0x278383(0x8aa)]&&this[_0x278383(0x8aa)][_0x278383(0x76e)](Scene_Shop['layoutSettings']['DummyBgType']),this['_numberWindow']&&this[_0x278383(0x70a)]['setBackgroundType'](Scene_Shop[_0x278383(0x87b)]['NumberBgType']),this[_0x278383(0x8a5)]&&this[_0x278383(0x8a5)][_0x278383(0x76e)](Scene_Shop[_0x278383(0x87b)][_0x278383(0x212)]),this[_0x278383(0x39a)]&&this['_buyWindow'][_0x278383(0x76e)](Scene_Shop[_0x278383(0x87b)][_0x278383(0x419)]),this[_0x278383(0x283)]&&this['_categoryWindow']['setBackgroundType'](Scene_Shop['layoutSettings'][_0x278383(0x323)]),this['_sellWindow']&&this[_0x278383(0x47f)][_0x278383(0x76e)](Scene_Shop[_0x278383(0x87b)]['SellBgType']);},Scene_Shop[_0x19616c(0x7f9)][_0x19616c(0x960)]=function(){const _0x397a91=_0x19616c;return Scene_Shop[_0x397a91(0x87b)][_0x397a91(0x84f)][_0x397a91(0x4a5)](this);},Scene_Shop[_0x19616c(0x7f9)][_0x19616c(0x7f2)]=function(){const _0x38db9c=_0x19616c;return Scene_Shop[_0x38db9c(0x87b)]['GoldRect']['call'](this);},Scene_Shop[_0x19616c(0x7f9)][_0x19616c(0x866)]=function(){const _0x214149=_0x19616c;return Scene_Shop[_0x214149(0x87b)][_0x214149(0x591)][_0x214149(0x4a5)](this);},Scene_Shop[_0x19616c(0x7f9)]['dummyWindowRect']=function(){const _0xc21da7=_0x19616c;return Scene_Shop[_0xc21da7(0x87b)][_0xc21da7(0x31b)][_0xc21da7(0x4a5)](this);},Scene_Shop[_0x19616c(0x7f9)][_0x19616c(0x8be)]=function(){const _0x3d1fcc=_0x19616c;return Scene_Shop[_0x3d1fcc(0x87b)]['NumberRect'][_0x3d1fcc(0x4a5)](this);},Scene_Shop['prototype'][_0x19616c(0x6e2)]=function(){const _0xfd5ed0=_0x19616c;return Scene_Shop[_0xfd5ed0(0x87b)]['StatusRect'][_0xfd5ed0(0x4a5)](this);},Scene_Shop[_0x19616c(0x7f9)][_0x19616c(0x7cd)]=function(){const _0x16470d=_0x19616c;return Scene_Shop[_0x16470d(0x87b)][_0x16470d(0x2f6)]['call'](this);},Scene_Shop['prototype'][_0x19616c(0x5c5)]=function(){const _0x2d864c=_0x19616c;return Scene_Shop[_0x2d864c(0x87b)][_0x2d864c(0x1fd)][_0x2d864c(0x4a5)](this);},Scene_Shop[_0x19616c(0x7f9)][_0x19616c(0x6ff)]=function(){const _0x4b8799=_0x19616c;return Scene_Shop['layoutSettings']['SellRect'][_0x4b8799(0x4a5)](this);},Scene_Name[_0x19616c(0x87b)]=VisuMZ['CoreEngine'][_0x19616c(0x568)][_0x19616c(0x420)][_0x19616c(0x49a)],VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x2ff)]=Scene_Name[_0x19616c(0x7f9)]['create'],Scene_Name['prototype'][_0x19616c(0x630)]=function(){const _0x5132dc=_0x19616c;VisuMZ['CoreEngine']['Scene_Name_create'][_0x5132dc(0x4a5)](this),this[_0x5132dc(0x91a)]();},Scene_Name[_0x19616c(0x7f9)][_0x19616c(0x91a)]=function(){const _0xd1b6bf=_0x19616c;this[_0xd1b6bf(0x74c)]&&this['_editWindow'][_0xd1b6bf(0x76e)](Scene_Name[_0xd1b6bf(0x87b)][_0xd1b6bf(0x5dc)]),this[_0xd1b6bf(0x6a6)]&&this[_0xd1b6bf(0x6a6)][_0xd1b6bf(0x76e)](Scene_Name['layoutSettings']['InputBgType']);},Scene_Name[_0x19616c(0x7f9)][_0x19616c(0x62b)]=function(){return 0x0;},Scene_Name[_0x19616c(0x7f9)][_0x19616c(0x332)]=function(){const _0x1e6564=_0x19616c;return Scene_Name[_0x1e6564(0x87b)][_0x1e6564(0x389)]['call'](this);},Scene_Name[_0x19616c(0x7f9)][_0x19616c(0x1d7)]=function(){const _0x4d2b28=_0x19616c;return Scene_Name[_0x4d2b28(0x87b)]['InputRect'][_0x4d2b28(0x4a5)](this);},Scene_Name['prototype'][_0x19616c(0x58a)]=function(){const _0x112223=_0x19616c;if(!this[_0x112223(0x6a6)])return![];return VisuMZ['CoreEngine'][_0x112223(0x568)][_0x112223(0x25a)][_0x112223(0x58a)];},Scene_Name[_0x19616c(0x7f9)]['buttonAssistKey1']=function(){const _0x93f5bb=_0x19616c;if(this[_0x93f5bb(0x58a)]()&&this[_0x93f5bb(0x6a6)][_0x93f5bb(0x487)]!=='keyboard')return TextManager[_0x93f5bb(0x8ea)](_0x93f5bb(0x4b7),_0x93f5bb(0x312));return Scene_MenuBase[_0x93f5bb(0x7f9)][_0x93f5bb(0x511)][_0x93f5bb(0x4a5)](this);},Scene_Name[_0x19616c(0x7f9)][_0x19616c(0x297)]=function(){const _0x531965=_0x19616c;return this[_0x531965(0x58a)]()?TextManager['getInputButtonString'](_0x531965(0x5bd)):Scene_MenuBase[_0x531965(0x7f9)][_0x531965(0x297)][_0x531965(0x4a5)](this);},Scene_Name['prototype'][_0x19616c(0x898)]=function(){const _0x3eb385=_0x19616c;if(this['EnableNameInput']()&&this[_0x3eb385(0x6a6)][_0x3eb385(0x487)]===_0x3eb385(0x256))return TextManager[_0x3eb385(0x881)](['ENTER']);return Scene_MenuBase[_0x3eb385(0x7f9)][_0x3eb385(0x898)]['call'](this);},Scene_Name[_0x19616c(0x7f9)][_0x19616c(0x6e3)]=function(){const _0x290df7=_0x19616c;if(this[_0x290df7(0x58a)]()&&this[_0x290df7(0x6a6)]['_mode']==='keyboard')return TextManager[_0x290df7(0x881)]([_0x290df7(0x5aa)]);return Scene_MenuBase[_0x290df7(0x7f9)][_0x290df7(0x6e3)]['call'](this);},Scene_Name[_0x19616c(0x7f9)][_0x19616c(0x3a5)]=function(){const _0x406490=_0x19616c;if(this[_0x406490(0x58a)]()&&this[_0x406490(0x6a6)][_0x406490(0x487)]!==_0x406490(0x256)){const _0x24bb5d=VisuMZ[_0x406490(0x4f5)]['Settings'][_0x406490(0x25a)];return _0x24bb5d[_0x406490(0x685)]||_0x406490(0x72c);}return Scene_MenuBase[_0x406490(0x7f9)][_0x406490(0x3a5)][_0x406490(0x4a5)](this);},Scene_Name[_0x19616c(0x7f9)][_0x19616c(0x6f9)]=function(){const _0x58f147=_0x19616c;if(this[_0x58f147(0x58a)]()){const _0x47b522=VisuMZ[_0x58f147(0x4f5)][_0x58f147(0x568)][_0x58f147(0x25a)];return this[_0x58f147(0x6a6)]['_mode']===_0x58f147(0x256)?_0x47b522[_0x58f147(0x8ff)]||_0x58f147(0x8ff):_0x47b522[_0x58f147(0x93b)]||_0x58f147(0x93b);}else return Scene_MenuBase['prototype'][_0x58f147(0x6f9)]['call'](this);},Scene_Name[_0x19616c(0x7f9)][_0x19616c(0x363)]=function(){const _0x596a47=_0x19616c;if(this['EnableNameInput']()){const _0x2acf95=VisuMZ[_0x596a47(0x4f5)][_0x596a47(0x568)][_0x596a47(0x25a)];if(this[_0x596a47(0x6a6)][_0x596a47(0x487)]==='keyboard')return _0x2acf95[_0x596a47(0x2fc)]||_0x596a47(0x2fc);}return Scene_MenuBase[_0x596a47(0x7f9)]['buttonAssistText4'][_0x596a47(0x4a5)](this);},VisuMZ['CoreEngine']['Scene_Name_onInputOk']=Scene_Name[_0x19616c(0x7f9)][_0x19616c(0x2c3)],Scene_Name[_0x19616c(0x7f9)][_0x19616c(0x2c3)]=function(){const _0xac493b=_0x19616c;this[_0xac493b(0x971)]()?this['onInputBannedWords']():VisuMZ[_0xac493b(0x4f5)][_0xac493b(0x557)]['call'](this);},Scene_Name[_0x19616c(0x7f9)][_0x19616c(0x971)]=function(){const _0x4716b3=_0x19616c,_0x943fa1=VisuMZ[_0x4716b3(0x4f5)][_0x4716b3(0x568)][_0x4716b3(0x25a)];if(!_0x943fa1)return![];const _0x1fc20e=_0x943fa1[_0x4716b3(0x248)];if(!_0x1fc20e)return![];const _0x3f3ffe=this[_0x4716b3(0x74c)][_0x4716b3(0x3e9)]()['toLowerCase']();for(const _0x13aa99 of _0x1fc20e){if(_0x3f3ffe['includes'](_0x13aa99[_0x4716b3(0x626)]()))return!![];}return![];},Scene_Name['prototype'][_0x19616c(0x875)]=function(){const _0x2cbdac=_0x19616c;SoundManager[_0x2cbdac(0x529)]();},VisuMZ['CoreEngine'][_0x19616c(0x7da)]=Scene_Battle[_0x19616c(0x7f9)]['update'],Scene_Battle['prototype'][_0x19616c(0x3ad)]=function(){const _0x2309fc=_0x19616c;VisuMZ[_0x2309fc(0x4f5)]['Scene_Battle_update'][_0x2309fc(0x4a5)](this);if($gameTemp['_playTestFastMode'])this['updatePlayTestF7']();},Scene_Battle[_0x19616c(0x7f9)][_0x19616c(0x783)]=function(){const _0x28207d=_0x19616c;!BattleManager[_0x28207d(0x19b)]()&&!this['_playtestF7Looping']&&!$gameMessage[_0x28207d(0x60f)]()&&(this[_0x28207d(0x600)]=!![],this[_0x28207d(0x3ad)](),SceneManager['updateEffekseer'](),this[_0x28207d(0x600)]=![]);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x2b9)]=Scene_Battle[_0x19616c(0x7f9)][_0x19616c(0x39d)],Scene_Battle[_0x19616c(0x7f9)][_0x19616c(0x39d)]=function(){const _0x1cad6f=_0x19616c;VisuMZ[_0x1cad6f(0x4f5)][_0x1cad6f(0x2b9)]['call'](this),SceneManager[_0x1cad6f(0x7dc)]()&&this[_0x1cad6f(0x8f6)]();},Scene_Battle['prototype'][_0x19616c(0x8f6)]=function(){const _0x482e65=_0x19616c;this['_cancelButton']['x']=Graphics[_0x482e65(0x388)]+0x4,this['isBottomButtonMode']()?this['_cancelButton']['y']=Graphics[_0x482e65(0x785)]-this['buttonAreaHeight']():this[_0x482e65(0x4cb)]['y']=0x0;},VisuMZ[_0x19616c(0x4f5)]['Sprite_Button_initialize']=Sprite_Button[_0x19616c(0x7f9)][_0x19616c(0x5cd)],Sprite_Button[_0x19616c(0x7f9)]['initialize']=function(_0x5bda32){const _0x479c2e=_0x19616c;VisuMZ[_0x479c2e(0x4f5)][_0x479c2e(0x680)]['call'](this,_0x5bda32),this[_0x479c2e(0x7f6)]();},Sprite_Button[_0x19616c(0x7f9)]['initButtonHidden']=function(){const _0x1a1925=_0x19616c,_0x529e9e=VisuMZ[_0x1a1925(0x4f5)][_0x1a1925(0x568)]['UI'];this[_0x1a1925(0x2c9)]=![];switch(this['_buttonType']){case _0x1a1925(0x52b):this[_0x1a1925(0x2c9)]=!_0x529e9e[_0x1a1925(0x977)];break;case _0x1a1925(0x4b7):case _0x1a1925(0x312):this[_0x1a1925(0x2c9)]=!_0x529e9e['pagedownShowButton'];break;case _0x1a1925(0x860):case'up':case _0x1a1925(0x4e5):case _0x1a1925(0x3bf):case'ok':this[_0x1a1925(0x2c9)]=!_0x529e9e[_0x1a1925(0x84c)];break;case _0x1a1925(0x55c):this['_isButtonHidden']=!_0x529e9e[_0x1a1925(0x4b2)];break;}},VisuMZ[_0x19616c(0x4f5)]['Sprite_Button_updateOpacity']=Sprite_Button['prototype'][_0x19616c(0x5f6)],Sprite_Button['prototype'][_0x19616c(0x5f6)]=function(){const _0x317250=_0x19616c;SceneManager[_0x317250(0x1f5)]()||this[_0x317250(0x2c9)]?this[_0x317250(0x384)]():VisuMZ[_0x317250(0x4f5)][_0x317250(0x7f0)][_0x317250(0x4a5)](this);},Sprite_Button[_0x19616c(0x7f9)]['hideButtonFromView']=function(){const _0x40ee35=_0x19616c;this['visible']=![],this[_0x40ee35(0x4fb)]=0x0,this['x']=Graphics[_0x40ee35(0x3e0)]*0xa,this['y']=Graphics[_0x40ee35(0x413)]*0xa;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x473)]=Sprite_Battler['prototype'][_0x19616c(0x41d)],Sprite_Battler[_0x19616c(0x7f9)][_0x19616c(0x41d)]=function(_0x352856,_0x1667e2,_0x550c82){const _0x330a37=_0x19616c;(this[_0x330a37(0x49b)]!==_0x352856||this[_0x330a37(0x5f2)]!==_0x1667e2)&&(this[_0x330a37(0x5b4)](_0x330a37(0x625)),this[_0x330a37(0x854)]=_0x550c82),VisuMZ[_0x330a37(0x4f5)][_0x330a37(0x473)][_0x330a37(0x4a5)](this,_0x352856,_0x1667e2,_0x550c82);},Sprite_Battler[_0x19616c(0x7f9)][_0x19616c(0x5b4)]=function(_0x44b67f){const _0x4cf41a=_0x19616c;this[_0x4cf41a(0x21e)]=_0x44b67f;},Sprite_Battler[_0x19616c(0x7f9)]['updateMove']=function(){const _0x295489=_0x19616c;if(this[_0x295489(0x75d)]<=0x0)return;const _0x2ef0f8=this[_0x295489(0x75d)],_0x39fa9a=this['_movementWholeDuration'],_0x20aec6=this['_moveEasingType'];this['_offsetX']=this['applyEasing'](this['_offsetX'],this[_0x295489(0x49b)],_0x2ef0f8,_0x39fa9a,_0x20aec6),this[_0x295489(0x699)]=this[_0x295489(0x35e)](this[_0x295489(0x699)],this[_0x295489(0x5f2)],_0x2ef0f8,_0x39fa9a,_0x20aec6),this[_0x295489(0x75d)]--;if(this['_movementDuration']<=0x0)this[_0x295489(0x7b4)]();},Sprite_Battler[_0x19616c(0x7f9)]['applyEasing']=function(_0x3c83ab,_0x106950,_0x15892e,_0x3f30d3,_0x5919ca){const _0x4e7295=_0x19616c,_0x345890=VisuMZ['ApplyEasing']((_0x3f30d3-_0x15892e)/_0x3f30d3,_0x5919ca||_0x4e7295(0x625)),_0x1a7ed7=VisuMZ['ApplyEasing']((_0x3f30d3-_0x15892e+0x1)/_0x3f30d3,_0x5919ca||_0x4e7295(0x625)),_0x57a61b=(_0x3c83ab-_0x106950*_0x345890)/(0x1-_0x345890);return _0x57a61b+(_0x106950-_0x57a61b)*_0x1a7ed7;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x239)]=Sprite_Actor[_0x19616c(0x7f9)][_0x19616c(0x46f)],Sprite_Actor['prototype']['setActorHome']=function(_0x2c9d10){const _0x509215=_0x19616c;VisuMZ['CoreEngine'][_0x509215(0x568)]['UI']['RepositionActors']?this['setActorHomeRepositioned'](_0x2c9d10):VisuMZ['CoreEngine'][_0x509215(0x239)][_0x509215(0x4a5)](this,_0x2c9d10);},Sprite_Actor['prototype']['setActorHomeRepositioned']=function(_0x28efd8){const _0xda246c=_0x19616c;let _0x109c45=Math[_0xda246c(0x45c)](Graphics[_0xda246c(0x3e0)]/0x2+0xc0);_0x109c45-=Math[_0xda246c(0x2f5)]((Graphics[_0xda246c(0x3e0)]-Graphics[_0xda246c(0x388)])/0x2),_0x109c45+=_0x28efd8*0x20;let _0x3cf5aa=Graphics[_0xda246c(0x413)]-0xc8-$gameParty[_0xda246c(0x36d)]()*0x30;_0x3cf5aa-=Math[_0xda246c(0x2f5)]((Graphics[_0xda246c(0x413)]-Graphics['boxHeight'])/0x2),_0x3cf5aa+=_0x28efd8*0x30,this[_0xda246c(0x7ab)](_0x109c45,_0x3cf5aa);},Sprite_Actor[_0x19616c(0x7f9)][_0x19616c(0x37a)]=function(){const _0x5dd707=_0x19616c;this[_0x5dd707(0x41d)](0x4b0,0x0,0x78);},Sprite_Animation[_0x19616c(0x7f9)]['setMute']=function(_0x577531){this['_muteSound']=_0x577531;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x879)]=Sprite_Animation[_0x19616c(0x7f9)]['processSoundTimings'],Sprite_Animation['prototype'][_0x19616c(0x510)]=function(){const _0x244bbc=_0x19616c;if(this[_0x244bbc(0x309)])return;VisuMZ[_0x244bbc(0x4f5)]['Sprite_Animation_processSoundTimings']['call'](this);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x263)]=Sprite_Animation['prototype'][_0x19616c(0x216)],Sprite_Animation['prototype'][_0x19616c(0x216)]=function(_0x86779){const _0x108ff1=_0x19616c;this[_0x108ff1(0x27b)]()?this[_0x108ff1(0x35c)](_0x86779):VisuMZ[_0x108ff1(0x4f5)][_0x108ff1(0x263)][_0x108ff1(0x4a5)](this,_0x86779);},Sprite_Animation[_0x19616c(0x7f9)][_0x19616c(0x27b)]=function(){const _0x296fc1=_0x19616c;if(!this[_0x296fc1(0x1c6)])return![];const _0x3c80f6=this[_0x296fc1(0x1c6)][_0x296fc1(0x3e9)]||'';if(_0x3c80f6[_0x296fc1(0x490)](/<MIRROR OFFSET X>/i))return!![];if(_0x3c80f6[_0x296fc1(0x490)](/<NO MIRROR OFFSET X>/i))return![];return VisuMZ[_0x296fc1(0x4f5)][_0x296fc1(0x568)][_0x296fc1(0x1fb)][_0x296fc1(0x5a1)];},Sprite_Animation[_0x19616c(0x7f9)]['setViewportCoreEngineFix']=function(_0x544744){const _0x326f2e=_0x19616c,_0x1d8e72=this['_viewportSize'],_0x382df8=this[_0x326f2e(0x68b)],_0x49200b=this['_animation']['offsetX']*(this[_0x326f2e(0x206)]?-0x1:0x1)-_0x1d8e72/0x2,_0x2b82d3=this[_0x326f2e(0x1c6)][_0x326f2e(0x893)]-_0x382df8/0x2,_0x3d2351=this[_0x326f2e(0x242)](_0x544744);_0x544744['gl'][_0x326f2e(0x3e1)](_0x49200b+_0x3d2351['x'],_0x2b82d3+_0x3d2351['y'],_0x1d8e72,_0x382df8);},Sprite_Animation['prototype'][_0x19616c(0x44d)]=function(_0x5031b2){const _0x51e360=_0x19616c;if(_0x5031b2[_0x51e360(0x4b6)]){}const _0x307a7b=this['_animation'][_0x51e360(0x3e9)];let _0x1e2231=_0x5031b2['height']*_0x5031b2[_0x51e360(0x294)]['y'],_0x7dc0a6=0x0,_0x2b204e=-_0x1e2231/0x2;if(_0x307a7b['match'](/<(?:HEAD|HEADER|TOP)>/i))_0x2b204e=-_0x1e2231;if(_0x307a7b[_0x51e360(0x490)](/<(?:FOOT|FOOTER|BOTTOM)>/i))_0x2b204e=0x0;if(this['_animation'][_0x51e360(0x471)])_0x2b204e=0x0;if(_0x307a7b['match'](/<(?:LEFT)>/i))_0x7dc0a6=-_0x5031b2['width']/0x2;if(_0x307a7b[_0x51e360(0x490)](/<(?:RIGHT)>/i))_0x7dc0a6=_0x5031b2[_0x51e360(0x3e0)]/0x2;_0x307a7b[_0x51e360(0x490)](/<ANCHOR X:[ ](\d+\.?\d*)>/i)&&(_0x7dc0a6=Number(RegExp['$1'])*_0x5031b2[_0x51e360(0x3e0)]);_0x307a7b[_0x51e360(0x490)](/<ANCHOR Y:[ ](\d+\.?\d*)>/i)&&(_0x2b204e=(0x1-Number(RegExp['$1']))*-_0x1e2231);_0x307a7b[_0x51e360(0x490)](/<ANCHOR:[ ](\d+\.?\d*),[ ](\d+\.?\d*)>/i)&&(_0x7dc0a6=Number(RegExp['$1'])*_0x5031b2[_0x51e360(0x3e0)],_0x2b204e=(0x1-Number(RegExp['$2']))*-_0x1e2231);if(_0x307a7b[_0x51e360(0x490)](/<OFFSET X:[ ]([\+\-]\d+)>/i))_0x7dc0a6+=Number(RegExp['$1']);if(_0x307a7b[_0x51e360(0x490)](/<OFFSET Y:[ ]([\+\-]\d+)>/i))_0x2b204e+=Number(RegExp['$1']);_0x307a7b[_0x51e360(0x490)](/<OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(_0x7dc0a6+=Number(RegExp['$1']),_0x2b204e+=Number(RegExp['$2']));const _0x4fb15d=new Point(_0x7dc0a6,_0x2b204e);return _0x5031b2[_0x51e360(0x924)](),_0x5031b2[_0x51e360(0x5d9)]['apply'](_0x4fb15d);},Sprite_AnimationMV['prototype']['setupRate']=function(){const _0x213e53=_0x19616c;this[_0x213e53(0x4e0)]=VisuMZ[_0x213e53(0x4f5)][_0x213e53(0x568)]['QoL'][_0x213e53(0x754)]??0x4,this[_0x213e53(0x6d7)](),this[_0x213e53(0x4e0)]=this[_0x213e53(0x4e0)][_0x213e53(0x4d4)](0x1,0xa);},Sprite_AnimationMV[_0x19616c(0x7f9)][_0x19616c(0x6d7)]=function(){const _0x1de0e0=_0x19616c;if(!this[_0x1de0e0(0x1c6)]);const _0x201613=this[_0x1de0e0(0x1c6)][_0x1de0e0(0x3e9)]||'';_0x201613[_0x1de0e0(0x490)](/<RATE:[ ](\d+)>/i)&&(this[_0x1de0e0(0x4e0)]=(Number(RegExp['$1'])||0x1)['clamp'](0x1,0xa));},Sprite_AnimationMV[_0x19616c(0x7f9)][_0x19616c(0x5c4)]=function(_0x33f7a5){this['_muteSound']=_0x33f7a5;},VisuMZ['CoreEngine'][_0x19616c(0x29d)]=Sprite_AnimationMV[_0x19616c(0x7f9)]['processTimingData'],Sprite_AnimationMV[_0x19616c(0x7f9)]['processTimingData']=function(_0xabe651){const _0xafe45d=_0x19616c;this[_0xafe45d(0x309)]&&(_0xabe651=JsonEx[_0xafe45d(0x1e9)](_0xabe651),_0xabe651['se']&&(_0xabe651['se'][_0xafe45d(0x65c)]=0x0)),VisuMZ[_0xafe45d(0x4f5)]['Sprite_AnimationMV_processTimingData']['call'](this,_0xabe651);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x8c3)]=Sprite_AnimationMV[_0x19616c(0x7f9)][_0x19616c(0x84d)],Sprite_AnimationMV[_0x19616c(0x7f9)][_0x19616c(0x84d)]=function(){const _0x3f9e4d=_0x19616c;VisuMZ['CoreEngine'][_0x3f9e4d(0x8c3)][_0x3f9e4d(0x4a5)](this);if(this['_animation'][_0x3f9e4d(0x87a)]===0x3){if(this['x']===0x0)this['x']=Math['round'](Graphics[_0x3f9e4d(0x3e0)]/0x2);if(this['y']===0x0)this['y']=Math[_0x3f9e4d(0x45c)](Graphics[_0x3f9e4d(0x413)]/0x2);}},Sprite_Damage[_0x19616c(0x7f9)]['createDigits']=function(_0x230092){const _0x49c004=_0x19616c;let _0x10b0d5=Math['abs'](_0x230092)[_0x49c004(0x3b0)]();this[_0x49c004(0x2f3)]()&&(_0x10b0d5=VisuMZ['GroupDigits'](_0x10b0d5));const _0x12c582=this[_0x49c004(0x6fd)](),_0x3ff44d=Math['floor'](_0x12c582*0.75);for(let _0x245d6f=0x0;_0x245d6f<_0x10b0d5['length'];_0x245d6f++){const _0x2e11ee=this[_0x49c004(0x19d)](_0x3ff44d,_0x12c582);_0x2e11ee[_0x49c004(0x807)]['drawText'](_0x10b0d5[_0x245d6f],0x0,0x0,_0x3ff44d,_0x12c582,_0x49c004(0x214)),_0x2e11ee['x']=(_0x245d6f-(_0x10b0d5[_0x49c004(0x375)]-0x1)/0x2)*_0x3ff44d,_0x2e11ee['dy']=-_0x245d6f;}},Sprite_Damage[_0x19616c(0x7f9)][_0x19616c(0x2f3)]=function(){const _0x2520f3=_0x19616c;return VisuMZ[_0x2520f3(0x4f5)][_0x2520f3(0x568)]['QoL'][_0x2520f3(0x698)];},Sprite_Damage['prototype'][_0x19616c(0x8a9)]=function(){return ColorManager['outlineColorDmg']();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x43e)]=Sprite_Gauge['prototype'][_0x19616c(0x5d1)],Sprite_Gauge[_0x19616c(0x7f9)]['gaugeRate']=function(){const _0x555218=_0x19616c;return VisuMZ[_0x555218(0x4f5)][_0x555218(0x43e)][_0x555218(0x4a5)](this)[_0x555218(0x4d4)](0x0,0x1);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x6e7)]=Sprite_Gauge[_0x19616c(0x7f9)][_0x19616c(0x8f1)],Sprite_Gauge[_0x19616c(0x7f9)][_0x19616c(0x8f1)]=function(){const _0x14ffa0=_0x19616c;let _0x4a28f0=VisuMZ[_0x14ffa0(0x4f5)]['Sprite_Gauge_currentValue'][_0x14ffa0(0x4a5)](this);return _0x4a28f0;},Sprite_Gauge[_0x19616c(0x7f9)][_0x19616c(0x55f)]=function(){const _0x3e6c3f=_0x19616c;let _0x570e10=this[_0x3e6c3f(0x8f1)]();this['useDigitGrouping']()&&(_0x570e10=VisuMZ[_0x3e6c3f(0x713)](_0x570e10));const _0x198840=this[_0x3e6c3f(0x75a)]()-0x1,_0x34c8b8=this[_0x3e6c3f(0x61f)]?this[_0x3e6c3f(0x61f)]():this[_0x3e6c3f(0x3d5)]();this[_0x3e6c3f(0x1ad)](),this['bitmap'][_0x3e6c3f(0x4c1)](_0x570e10,0x0,0x0,_0x198840,_0x34c8b8,_0x3e6c3f(0x6e4));},Sprite_Gauge[_0x19616c(0x7f9)][_0x19616c(0x503)]=function(){return 0x3;},Sprite_Gauge[_0x19616c(0x7f9)][_0x19616c(0x2f3)]=function(){const _0x3d0020=_0x19616c;return VisuMZ[_0x3d0020(0x4f5)][_0x3d0020(0x568)]['QoL'][_0x3d0020(0x24b)];},Sprite_Gauge[_0x19616c(0x7f9)][_0x19616c(0x8a9)]=function(){return ColorManager['outlineColorGauge']();},Sprite_StateIcon[_0x19616c(0x835)]=VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)]['UI'][_0x19616c(0x8c0)]??!![],VisuMZ[_0x19616c(0x4f5)]['Sprite_StateIcon_loadBitmap']=Sprite_StateIcon[_0x19616c(0x7f9)][_0x19616c(0x1ee)],Sprite_StateIcon[_0x19616c(0x7f9)][_0x19616c(0x1ee)]=function(){const _0x53a9bf=_0x19616c;Sprite_StateIcon[_0x53a9bf(0x835)]?this[_0x53a9bf(0x4e2)]():VisuMZ[_0x53a9bf(0x4f5)][_0x53a9bf(0x390)][_0x53a9bf(0x4a5)](this);},Sprite_StateIcon['prototype'][_0x19616c(0x4e2)]=function(){const _0x3592e9=_0x19616c;this[_0x3592e9(0x807)]=new Bitmap(ImageManager[_0x3592e9(0x7d6)],ImageManager[_0x3592e9(0x96f)]),this[_0x3592e9(0x85c)]=ImageManager[_0x3592e9(0x608)](_0x3592e9(0x7dd));},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x5a5)]=Sprite_StateIcon[_0x19616c(0x7f9)][_0x19616c(0x559)],Sprite_StateIcon[_0x19616c(0x7f9)][_0x19616c(0x559)]=function(){const _0x2d4e18=_0x19616c;Sprite_StateIcon[_0x2d4e18(0x835)]?this[_0x2d4e18(0x794)]():VisuMZ['CoreEngine'][_0x2d4e18(0x5a5)][_0x2d4e18(0x4a5)](this);},Sprite_StateIcon[_0x19616c(0x7f9)][_0x19616c(0x794)]=function(){const _0x1d187e=_0x19616c;if(this[_0x1d187e(0x306)]===this[_0x1d187e(0x677)])return;this['_lastIconIndex']=this[_0x1d187e(0x677)];const _0x2bfbe0=ImageManager[_0x1d187e(0x7d6)],_0x5726c9=ImageManager[_0x1d187e(0x96f)],_0x231ca2=this[_0x1d187e(0x677)]%0x10*_0x2bfbe0,_0x4f5b6f=Math[_0x1d187e(0x2f5)](this[_0x1d187e(0x677)]/0x10)*_0x5726c9,_0xb3ec2f=this[_0x1d187e(0x85c)],_0x1a3cab=this[_0x1d187e(0x807)];_0x1a3cab['clear'](),_0x1a3cab[_0x1d187e(0x98f)](_0xb3ec2f,_0x231ca2,_0x4f5b6f,_0x2bfbe0,_0x5726c9,0x0,0x0,_0x1a3cab[_0x1d187e(0x3e0)],_0x1a3cab[_0x1d187e(0x413)]);},VisuMZ[_0x19616c(0x4f5)]['Sprite_Picture_loadBitmap']=Sprite_Picture[_0x19616c(0x7f9)][_0x19616c(0x1ee)],Sprite_Picture['prototype'][_0x19616c(0x1ee)]=function(){const _0x33b959=_0x19616c;this['_pictureName']&&this['_pictureName']['match'](/VisuMZ CoreEngine PictureIcon (\d+)/i)?this['loadIconBitmap'](Number(RegExp['$1'])):VisuMZ[_0x33b959(0x4f5)][_0x33b959(0x204)]['call'](this);},Sprite_Picture['prototype'][_0x19616c(0x1c2)]=function(_0x2e23e3){const _0x559212=_0x19616c,_0x5a19de=ImageManager['iconWidth'],_0x145468=ImageManager['iconHeight'],_0x575e43=this[_0x559212(0x867)][_0x559212(0x490)](/SMOOTH/i);this[_0x559212(0x807)]=new Bitmap(_0x5a19de,_0x145468);const _0x4459dc=ImageManager['loadSystem'](_0x559212(0x7dd)),_0x5b058a=_0x2e23e3%0x10*_0x5a19de,_0x5f313b=Math['floor'](_0x2e23e3/0x10)*_0x145468;this[_0x559212(0x807)][_0x559212(0x48d)]=_0x575e43,this[_0x559212(0x807)][_0x559212(0x98f)](_0x4459dc,_0x5b058a,_0x5f313b,_0x5a19de,_0x145468,0x0,0x0,_0x5a19de,_0x145468);};function Sprite_TitlePictureButton(){const _0x4e6511=_0x19616c;this[_0x4e6511(0x5cd)](...arguments);}Sprite_TitlePictureButton[_0x19616c(0x7f9)]=Object[_0x19616c(0x630)](Sprite_Clickable[_0x19616c(0x7f9)]),Sprite_TitlePictureButton[_0x19616c(0x7f9)][_0x19616c(0x597)]=Sprite_TitlePictureButton,Sprite_TitlePictureButton['prototype'][_0x19616c(0x5cd)]=function(_0x256b77){const _0xefb570=_0x19616c;Sprite_Clickable[_0xefb570(0x7f9)]['initialize'][_0xefb570(0x4a5)](this),this[_0xefb570(0x360)]=_0x256b77,this[_0xefb570(0x69c)]=null,this[_0xefb570(0x498)]();},Sprite_TitlePictureButton[_0x19616c(0x7f9)][_0x19616c(0x498)]=function(){const _0x3dbea1=_0x19616c;this['x']=Graphics[_0x3dbea1(0x3e0)],this['y']=Graphics[_0x3dbea1(0x413)],this[_0x3dbea1(0x766)]=![],this[_0x3dbea1(0x27d)]();},Sprite_TitlePictureButton[_0x19616c(0x7f9)]['setupButtonImage']=function(){const _0x59ab35=_0x19616c;this[_0x59ab35(0x807)]=ImageManager['loadPicture'](this[_0x59ab35(0x360)][_0x59ab35(0x919)]),this['bitmap']['addLoadListener'](this[_0x59ab35(0x25f)][_0x59ab35(0x911)](this));},Sprite_TitlePictureButton[_0x19616c(0x7f9)][_0x19616c(0x25f)]=function(){const _0x519f0b=_0x19616c;this[_0x519f0b(0x360)][_0x519f0b(0x710)]['call'](this),this[_0x519f0b(0x360)][_0x519f0b(0x8e2)][_0x519f0b(0x4a5)](this),this[_0x519f0b(0x63e)](this['_data'][_0x519f0b(0x3c2)][_0x519f0b(0x911)](this));},Sprite_TitlePictureButton[_0x19616c(0x7f9)][_0x19616c(0x3ad)]=function(){const _0x5c7883=_0x19616c;Sprite_Clickable['prototype']['update'][_0x5c7883(0x4a5)](this),this[_0x5c7883(0x5f6)](),this['processTouch']();},Sprite_TitlePictureButton[_0x19616c(0x7f9)][_0x19616c(0x454)]=function(){const _0x573223=_0x19616c;return VisuMZ[_0x573223(0x4f5)][_0x573223(0x568)][_0x573223(0x420)][_0x573223(0x327)][_0x573223(0x7ed)];},Sprite_TitlePictureButton['prototype'][_0x19616c(0x5f6)]=function(){const _0x75d5dd=_0x19616c;this[_0x75d5dd(0x627)]||this[_0x75d5dd(0x43a)]?this[_0x75d5dd(0x4fb)]=0xff:(this[_0x75d5dd(0x4fb)]+=this[_0x75d5dd(0x766)]?this[_0x75d5dd(0x454)]():-0x1*this[_0x75d5dd(0x454)](),this['opacity']=Math['min'](0xc0,this[_0x75d5dd(0x4fb)]));},Sprite_TitlePictureButton[_0x19616c(0x7f9)][_0x19616c(0x63e)]=function(_0xce6522){const _0xadbf6a=_0x19616c;this[_0xadbf6a(0x69c)]=_0xce6522;},Sprite_TitlePictureButton[_0x19616c(0x7f9)][_0x19616c(0x84a)]=function(){const _0x3a66a6=_0x19616c;this[_0x3a66a6(0x69c)]&&this[_0x3a66a6(0x69c)]();};function Sprite_ExtendedTile(){const _0xe9c898=_0x19616c;this[_0xe9c898(0x5cd)](...arguments);}Sprite_ExtendedTile['prototype']=Object['create'](Sprite[_0x19616c(0x7f9)]),Sprite_ExtendedTile[_0x19616c(0x7f9)]['constructor']=Sprite_ExtendedTile,Sprite_ExtendedTile['prototype'][_0x19616c(0x5cd)]=function(_0x408159,_0x110d8d,_0xcd7171,_0x61e3ec){const _0x450871=_0x19616c;this[_0x450871(0x37b)]=Game_CharacterBase[_0x450871(0x40a)]||-0x6,this[_0x450871(0x624)]=_0x408159,this['_mapY']=_0x110d8d,this['_tile']=_0xcd7171,this[_0x450871(0x6b3)]=_0x61e3ec,Sprite[_0x450871(0x7f9)][_0x450871(0x5cd)]['call'](this),this['createSubSprite'](),this['loadTileBitmap'](),this[_0x450871(0x22b)](),this[_0x450871(0x3ad)]();},Sprite_ExtendedTile[_0x19616c(0x7f9)][_0x19616c(0x85e)]=function(){const _0x3e050e=_0x19616c;this[_0x3e050e(0x4a2)]=new Sprite(),this[_0x3e050e(0x4a2)]['anchor']['x']=0.5,this[_0x3e050e(0x4a2)][_0x3e050e(0x3a9)]['y']=0x1,this[_0x3e050e(0x4a2)]['y']=-this[_0x3e050e(0x37b)]+0x1,this[_0x3e050e(0x1b8)](this['_tileSprite']);},Sprite_ExtendedTile[_0x19616c(0x7f9)]['loadTileBitmap']=function(){const _0xa87b01=_0x19616c,_0x3917a1=$gameMap[_0xa87b01(0x6da)](),_0x3409df=0x5+Math[_0xa87b01(0x2f5)](this['_tile']/0x100);this[_0xa87b01(0x4a2)][_0xa87b01(0x807)]=ImageManager['loadTileset'](_0x3917a1[_0xa87b01(0x8e4)][_0x3409df]);},Sprite_ExtendedTile[_0x19616c(0x7f9)]['setTileFrame']=function(){const _0x1a0b03=_0x19616c,_0xbf2d87=this['_tile'],_0x24a916=$gameMap[_0x1a0b03(0x32f)](),_0x53e1c0=$gameMap[_0x1a0b03(0x72a)](),_0x3a4880=(Math[_0x1a0b03(0x2f5)](_0xbf2d87/0x80)%0x2*0x8+_0xbf2d87%0x8)*_0x24a916,_0x4aa684=Math[_0x1a0b03(0x2f5)](_0xbf2d87%0x100/0x8)%0x10*_0x53e1c0,_0x374f43=this[_0x1a0b03(0x6b3)]*_0x53e1c0;this[_0x1a0b03(0x4a2)][_0x1a0b03(0x38d)](_0x3a4880,_0x4aa684-_0x374f43,_0x24a916,_0x53e1c0+_0x374f43);},Sprite_ExtendedTile[_0x19616c(0x7f9)][_0x19616c(0x3ad)]=function(){const _0x25a07b=_0x19616c;Sprite['prototype'][_0x25a07b(0x3ad)][_0x25a07b(0x4a5)](this),this[_0x25a07b(0x84d)]();},Sprite_ExtendedTile['prototype']['updatePosition']=function(){const _0x2ce96d=_0x19616c,_0x2f6528=$gameMap[_0x2ce96d(0x32f)](),_0x430453=$gameMap[_0x2ce96d(0x72a)](),_0x57352f=this[_0x2ce96d(0x624)],_0x269723=this['_mapY'];this['x']=Math[_0x2ce96d(0x2f5)](($gameMap['adjustX'](_0x57352f)+0.5)*_0x2f6528),this['y']=Math[_0x2ce96d(0x2f5)](($gameMap['adjustY'](_0x269723)+0x1)*_0x430453)+this[_0x2ce96d(0x37b)]-0x1;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x406)]=Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x5cd)],Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x5cd)]=function(){const _0x11d061=_0x19616c;VisuMZ['CoreEngine'][_0x11d061(0x406)][_0x11d061(0x4a5)](this),this['initMembersCoreEngine']();},Spriteset_Base[_0x19616c(0x7f9)]['initMembersCoreEngine']=function(){const _0x159e86=_0x19616c;this['_fauxAnimationSprites']=[],this[_0x159e86(0x546)]=[],this[_0x159e86(0x595)]=this[_0x159e86(0x294)]['x'],this[_0x159e86(0x775)]=this['scale']['y'];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x495)]=Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x20d)],Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x20d)]=function(_0x48b508){const _0x4a4fc0=_0x19616c;this[_0x4a4fc0(0x997)](),this[_0x4a4fc0(0x335)](),VisuMZ[_0x4a4fc0(0x4f5)][_0x4a4fc0(0x495)]['call'](this,_0x48b508);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x475)]=Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x3ad)],Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x3ad)]=function(){const _0x48f025=_0x19616c;VisuMZ[_0x48f025(0x4f5)][_0x48f025(0x475)]['call'](this),this[_0x48f025(0x8f9)](),this[_0x48f025(0x4df)](),this[_0x48f025(0x483)](),this['updatePointAnimations']();},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x8f9)]=function(){},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x4df)]=function(){const _0x4691d3=_0x19616c;if(!VisuMZ[_0x4691d3(0x4f5)][_0x4691d3(0x568)][_0x4691d3(0x1fb)][_0x4691d3(0x67d)])return;if(this[_0x4691d3(0x595)]===this[_0x4691d3(0x294)]['x']&&this[_0x4691d3(0x775)]===this[_0x4691d3(0x294)]['y'])return;this[_0x4691d3(0x943)](),this[_0x4691d3(0x595)]=this[_0x4691d3(0x294)]['x'],this[_0x4691d3(0x775)]=this[_0x4691d3(0x294)]['y'];},Spriteset_Base['prototype']['adjustPictureAntiZoom']=function(){const _0x2be550=_0x19616c;if(SceneManager[_0x2be550(0x7bb)]()&&Spriteset_Map[_0x2be550(0x579)])return;else{if(SceneManager['isSceneBattle']()&&Spriteset_Battle[_0x2be550(0x579)])return;}this[_0x2be550(0x294)]['x']!==0x0&&(this[_0x2be550(0x23a)][_0x2be550(0x294)]['x']=0x1/this[_0x2be550(0x294)]['x'],this['_pictureContainer']['x']=-(this['x']/this[_0x2be550(0x294)]['x'])),this[_0x2be550(0x294)]['y']!==0x0&&(this['_pictureContainer'][_0x2be550(0x294)]['y']=0x1/this[_0x2be550(0x294)]['y'],this[_0x2be550(0x23a)]['y']=-(this['y']/this[_0x2be550(0x294)]['y']));},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x34f)]=Spriteset_Base[_0x19616c(0x7f9)]['updatePosition'],Spriteset_Base['prototype']['updatePosition']=function(){const _0x2194e1=_0x19616c;VisuMZ[_0x2194e1(0x4f5)][_0x2194e1(0x34f)][_0x2194e1(0x4a5)](this),this[_0x2194e1(0x8ac)]();},Spriteset_Base[_0x19616c(0x7f9)]['updatePositionCoreEngine']=function(){const _0x8de3ae=_0x19616c;if(!$gameScreen)return;if($gameScreen['_shakeDuration']<=0x0)return;this['x']-=Math[_0x8de3ae(0x45c)]($gameScreen[_0x8de3ae(0x5d2)]());const _0x152a3a=$gameScreen[_0x8de3ae(0x4bc)]();switch($gameScreen['getCoreEngineScreenShakeStyle']()){case _0x8de3ae(0x6ef):this[_0x8de3ae(0x4ab)]();break;case _0x8de3ae(0x580):this[_0x8de3ae(0x460)]();break;case _0x8de3ae(0x97c):this['updatePositionCoreEngineShakeVert']();break;default:this['updatePositionCoreEngineShakeRand']();break;}},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x4ab)]=function(){const _0x4ec8a8=_0x19616c,_0x399f30=VisuMZ[_0x4ec8a8(0x4f5)][_0x4ec8a8(0x568)]['ScreenShake'];if(_0x399f30&&_0x399f30[_0x4ec8a8(0x3f7)])return _0x399f30[_0x4ec8a8(0x3f7)]['call'](this);this['x']+=Math[_0x4ec8a8(0x45c)]($gameScreen[_0x4ec8a8(0x5d2)]());},Spriteset_Base['prototype'][_0x19616c(0x652)]=function(){const _0x47c05a=_0x19616c,_0x4360ad=VisuMZ[_0x47c05a(0x4f5)][_0x47c05a(0x568)]['ScreenShake'];if(_0x4360ad&&_0x4360ad[_0x47c05a(0x942)])return _0x4360ad['randomJS'][_0x47c05a(0x4a5)](this);const _0x3ce86a=$gameScreen[_0x47c05a(0x252)]*0.75,_0x92b269=$gameScreen['_shakeSpeed']*0.6,_0x461e14=$gameScreen[_0x47c05a(0x82d)];this['x']+=Math[_0x47c05a(0x45c)](Math[_0x47c05a(0x222)](_0x3ce86a)-Math[_0x47c05a(0x222)](_0x92b269))*(Math[_0x47c05a(0x90f)](_0x461e14,0x1e)*0.5),this['y']+=Math[_0x47c05a(0x45c)](Math[_0x47c05a(0x222)](_0x3ce86a)-Math[_0x47c05a(0x222)](_0x92b269))*(Math[_0x47c05a(0x90f)](_0x461e14,0x1e)*0.5);},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x460)]=function(){const _0x3c5787=_0x19616c,_0x335284=VisuMZ[_0x3c5787(0x4f5)][_0x3c5787(0x568)][_0x3c5787(0x380)];if(_0x335284&&_0x335284[_0x3c5787(0x286)])return _0x335284[_0x3c5787(0x286)][_0x3c5787(0x4a5)](this);const _0x694175=$gameScreen[_0x3c5787(0x252)]*0.75,_0x2fc963=$gameScreen[_0x3c5787(0x50e)]*0.6,_0x3ea657=$gameScreen[_0x3c5787(0x82d)];this['x']+=Math[_0x3c5787(0x45c)](Math[_0x3c5787(0x222)](_0x694175)-Math[_0x3c5787(0x222)](_0x2fc963))*(Math['min'](_0x3ea657,0x1e)*0.5);},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x3ef)]=function(){const _0x103a4a=_0x19616c,_0x36816b=VisuMZ['CoreEngine'][_0x103a4a(0x568)][_0x103a4a(0x380)];if(_0x36816b&&_0x36816b['vertJS'])return _0x36816b['vertJS']['call'](this);const _0x3ef822=$gameScreen[_0x103a4a(0x252)]*0.75,_0x3caa2d=$gameScreen[_0x103a4a(0x50e)]*0.6,_0x55b3d3=$gameScreen[_0x103a4a(0x82d)];this['y']+=Math[_0x103a4a(0x45c)](Math[_0x103a4a(0x222)](_0x3ef822)-Math['randomInt'](_0x3caa2d))*(Math[_0x103a4a(0x90f)](_0x55b3d3,0x1e)*0.5);},Spriteset_Base['prototype']['updateFauxAnimations']=function(){const _0x395ec7=_0x19616c;for(const _0xbd585 of this[_0x395ec7(0x828)]){!_0xbd585['isPlaying']()&&this[_0x395ec7(0x669)](_0xbd585);}this[_0x395ec7(0x513)]();},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x513)]=function(){for(;;){const _0x35254e=$gameTemp['retrieveFauxAnimation']();if(_0x35254e)this['createFauxAnimation'](_0x35254e);else break;}},Spriteset_Base['prototype'][_0x19616c(0x584)]=function(_0x4cdf03){const _0x4eed6e=_0x19616c,_0x39aca5=$dataAnimations[_0x4cdf03[_0x4eed6e(0x748)]],_0x4f6695=_0x4cdf03[_0x4eed6e(0x8c7)],_0x585426=_0x4cdf03[_0x4eed6e(0x777)],_0x11d87a=_0x4cdf03[_0x4eed6e(0x3ba)];let _0x4e4f3a=this[_0x4eed6e(0x965)]();const _0x417e3=this['animationNextDelay']();if(this[_0x4eed6e(0x797)](_0x39aca5))for(const _0x56944d of _0x4f6695){this[_0x4eed6e(0x1c3)]([_0x56944d],_0x39aca5,_0x585426,_0x4e4f3a,_0x11d87a),_0x4e4f3a+=_0x417e3;}else this[_0x4eed6e(0x1c3)](_0x4f6695,_0x39aca5,_0x585426,_0x4e4f3a,_0x11d87a);},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x1a0)]=function(_0x59b295,_0xd22902,_0x51229d,_0x2981aa){const _0x1b209e=_0x19616c,_0x17e811=this[_0x1b209e(0x53c)](_0xd22902),_0x3e168c=new(_0x17e811?Sprite_AnimationMV:Sprite_Animation)(),_0x21710d=this['makeTargetSprites'](_0x59b295),_0x2a4e80=this[_0x1b209e(0x965)](),_0x4836e0=_0x2981aa>_0x2a4e80?this[_0x1b209e(0x3e7)]():null;this['animationShouldMirror'](_0x59b295[0x0])&&(_0x51229d=!_0x51229d),_0x3e168c[_0x1b209e(0x7ca)]=_0x59b295,_0x3e168c[_0x1b209e(0x498)](_0x21710d,_0xd22902,_0x51229d,_0x2981aa,_0x4836e0),this['addAnimationSpriteToContainer'](_0x3e168c),this['_animationSprites'][_0x1b209e(0x69f)](_0x3e168c);},Spriteset_Base['prototype']['createFauxAnimationSprite']=function(_0x3e09fb,_0xc975ff,_0x20a158,_0x4a6a49,_0x22cbf1){const _0x182021=_0x19616c,_0x282943=this[_0x182021(0x53c)](_0xc975ff),_0x1f3d40=new(_0x282943?Sprite_AnimationMV:Sprite_Animation)(),_0x1314a7=this['makeTargetSprites'](_0x3e09fb);this[_0x182021(0x6ed)](_0x3e09fb[0x0])&&(_0x20a158=!_0x20a158);_0x1f3d40[_0x182021(0x7ca)]=_0x3e09fb,_0x1f3d40[_0x182021(0x498)](_0x1314a7,_0xc975ff,_0x20a158,_0x4a6a49),_0x1f3d40[_0x182021(0x5c4)](_0x22cbf1),this[_0x182021(0x3af)](_0x1f3d40);if(this[_0x182021(0x1a7)])this[_0x182021(0x1a7)][_0x182021(0x223)](_0x1f3d40);this['_fauxAnimationSprites'][_0x182021(0x69f)](_0x1f3d40);},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x3af)]=function(_0xcdfc17){const _0x1f58ce=_0x19616c;this[_0x1f58ce(0x994)]['addChild'](_0xcdfc17);},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x47b)]=function(_0x1431bc){const _0x28750e=_0x19616c;this[_0x28750e(0x1a7)][_0x28750e(0x223)](_0x1431bc),this[_0x28750e(0x837)](_0x1431bc);for(const _0x1c28fd of _0x1431bc['targetObjects']){_0x1c28fd['endAnimation']&&_0x1c28fd['endAnimation']();}_0x1431bc['destroy']();},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x669)]=function(_0x3f07f2){const _0x2ccfca=_0x19616c;this[_0x2ccfca(0x828)][_0x2ccfca(0x223)](_0x3f07f2),this['removeAnimationFromContainer'](_0x3f07f2);for(const _0x288bee of _0x3f07f2[_0x2ccfca(0x7ca)]){_0x288bee[_0x2ccfca(0x4ff)]&&_0x288bee[_0x2ccfca(0x4ff)]();}_0x3f07f2['destroy']();},Spriteset_Base['prototype'][_0x19616c(0x837)]=function(_0x4ddcf5){const _0x3e4934=_0x19616c;this[_0x3e4934(0x994)][_0x3e4934(0x3a1)](_0x4ddcf5);},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x997)]=function(){const _0x4f6217=_0x19616c;for(const _0x5c4f3c of this[_0x4f6217(0x828)]){this[_0x4f6217(0x669)](_0x5c4f3c);}},Spriteset_Base['prototype'][_0x19616c(0x57c)]=function(){const _0x3e515f=_0x19616c;return this[_0x3e515f(0x828)][_0x3e515f(0x375)]>0x0;},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x241)]=function(){const _0x22fb55=_0x19616c;for(const _0x262a42 of this[_0x22fb55(0x546)]){!_0x262a42[_0x22fb55(0x587)]()&&this['removePointAnimation'](_0x262a42);}this[_0x22fb55(0x36a)]();},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x36a)]=function(){const _0x403530=_0x19616c;for(;;){const _0x465dc7=$gameTemp[_0x403530(0x3ce)]();if(_0x465dc7)this[_0x403530(0x4a0)](_0x465dc7);else break;}},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x4a0)]=function(_0x21dd3d){const _0x348f65=_0x19616c,_0xe7792d=$dataAnimations[_0x21dd3d[_0x348f65(0x748)]],_0x199f12=this['createPointAnimationTargets'](_0x21dd3d),_0x2d76e9=_0x21dd3d[_0x348f65(0x777)],_0x44fa29=_0x21dd3d[_0x348f65(0x3ba)];let _0x44fde3=this[_0x348f65(0x965)]();const _0x3ad841=this[_0x348f65(0x466)]();if(this[_0x348f65(0x797)](_0xe7792d))for(const _0x4d10fe of _0x199f12){this['createPointAnimationSprite']([_0x4d10fe],_0xe7792d,_0x2d76e9,_0x44fde3,_0x44fa29),_0x44fde3+=_0x3ad841;}else this[_0x348f65(0x250)](_0x199f12,_0xe7792d,_0x2d76e9,_0x44fde3,_0x44fa29);},Spriteset_Base['prototype'][_0x19616c(0x5e6)]=function(_0x1711f0){const _0x29517f=_0x19616c,_0x39e0ff=new Sprite_Clickable(),_0x189756=this[_0x29517f(0x468)]();_0x39e0ff['x']=_0x1711f0['x']-_0x189756['x'],_0x39e0ff['y']=_0x1711f0['y']-_0x189756['y'],_0x39e0ff['z']=0x64;const _0x568112=this[_0x29517f(0x468)]();return _0x568112[_0x29517f(0x1b8)](_0x39e0ff),[_0x39e0ff];},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x468)]=function(){return this;},Spriteset_Map[_0x19616c(0x7f9)][_0x19616c(0x468)]=function(){const _0x5de068=_0x19616c;return this[_0x5de068(0x984)]||this;},Spriteset_Battle[_0x19616c(0x7f9)]['getPointAnimationLayer']=function(){const _0x12d191=_0x19616c;return this[_0x12d191(0x3c1)]||this;},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x250)]=function(_0x190f59,_0xf398f7,_0x5b204d,_0x3e67f7,_0x475b4f){const _0x1d19d8=_0x19616c,_0x345aa7=this['isMVAnimation'](_0xf398f7),_0x63918d=new(_0x345aa7?Sprite_AnimationMV:Sprite_Animation)();_0x63918d[_0x1d19d8(0x7ca)]=_0x190f59,_0x63918d[_0x1d19d8(0x498)](_0x190f59,_0xf398f7,_0x5b204d,_0x3e67f7),_0x63918d['setMute'](_0x475b4f),this[_0x1d19d8(0x3af)](_0x63918d),this[_0x1d19d8(0x546)][_0x1d19d8(0x69f)](_0x63918d);},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x921)]=function(_0xffd0b1){const _0x26e940=_0x19616c;this[_0x26e940(0x546)]['remove'](_0xffd0b1),this[_0x26e940(0x994)][_0x26e940(0x3a1)](_0xffd0b1);for(const _0x33d662 of _0xffd0b1[_0x26e940(0x7ca)]){_0x33d662['endAnimation']&&_0x33d662['endAnimation']();const _0x13e896=this[_0x26e940(0x468)]();if(_0x13e896)_0x13e896[_0x26e940(0x3a1)](_0x33d662);}_0xffd0b1[_0x26e940(0x20d)]();},Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x335)]=function(){for(const _0x47e763 of this['_pointAnimationSprites']){this['removePointAnimation'](_0x47e763);}},Spriteset_Base[_0x19616c(0x7f9)]['isPointAnimationPlaying']=function(){const _0x58f3f1=_0x19616c;return this[_0x58f3f1(0x546)]['length']>0x0;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x8c8)]=Spriteset_Base[_0x19616c(0x7f9)][_0x19616c(0x4e6)],Spriteset_Base['prototype'][_0x19616c(0x4e6)]=function(){const _0x77686e=_0x19616c;return VisuMZ[_0x77686e(0x4f5)][_0x77686e(0x8c8)][_0x77686e(0x4a5)](this)||this[_0x77686e(0x412)]();},Spriteset_Map['DETACH_PICTURE_CONTAINER']=VisuMZ[_0x19616c(0x4f5)]['Settings'][_0x19616c(0x1fb)][_0x19616c(0x6a5)]||![],VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x538)]=Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x469)],Scene_Map['prototype'][_0x19616c(0x469)]=function(){const _0x92178=_0x19616c;VisuMZ[_0x92178(0x4f5)][_0x92178(0x538)][_0x92178(0x4a5)](this);if(!Spriteset_Map[_0x92178(0x579)])return;const _0x193d8c=this[_0x92178(0x4f0)];if(!_0x193d8c)return;this[_0x92178(0x23a)]=_0x193d8c[_0x92178(0x23a)];if(!this[_0x92178(0x23a)])return;this[_0x92178(0x1b8)](this[_0x92178(0x23a)]);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x944)]=Spriteset_Map['prototype'][_0x19616c(0x78d)],Spriteset_Map[_0x19616c(0x7f9)][_0x19616c(0x78d)]=function(){const _0x4355fb=_0x19616c;VisuMZ[_0x4355fb(0x4f5)][_0x4355fb(0x944)]['call'](this),this[_0x4355fb(0x585)]();},Spriteset_Map[_0x19616c(0x7f9)][_0x19616c(0x585)]=function(){const _0x403e1f=_0x19616c,_0x192495=$gameMap[_0x403e1f(0x6da)]();if(!_0x192495)return;const _0x37d996=$gameMap['getTileExtendTerrainTags']();if(Object[_0x403e1f(0x60c)](_0x37d996)['length']<=0x0)return;const _0x29c780=$gameMap[_0x403e1f(0x645)]();this[_0x403e1f(0x86b)]=this['_tileExtendSprites']||[];for(let _0x226f24=0x0;_0x226f24<$gameMap[_0x403e1f(0x413)]();_0x226f24++){for(let _0x599385=0x0;_0x599385<$gameMap[_0x403e1f(0x3e0)]();_0x599385++){for(const _0x305db9 of $gameMap[_0x403e1f(0x446)](_0x599385,_0x226f24)){const _0x2cd7b7=_0x29c780[_0x305db9]>>0xc,_0x437123=_0x37d996[_0x2cd7b7]||0x0;if(_0x437123<=0x0)continue;this[_0x403e1f(0x1e3)](_0x599385,_0x226f24,_0x305db9,_0x437123);}}}},Spriteset_Map[_0x19616c(0x7f9)][_0x19616c(0x377)]=function(){const _0x5ed6dd=_0x19616c;this['_tileExtendSprites']=this[_0x5ed6dd(0x86b)]||[];for(const _0x3563a4 of this['_tileExtendSprites']){this[_0x5ed6dd(0x984)][_0x5ed6dd(0x3a1)](_0x3563a4);}this[_0x5ed6dd(0x86b)]=[];},Spriteset_Map['prototype'][_0x19616c(0x1e3)]=function(_0x17c857,_0x22b0b9,_0x37b11d,_0x2b046c){const _0x36b3ef=_0x19616c,_0x483a1f=new Sprite_ExtendedTile(_0x17c857,_0x22b0b9,_0x37b11d,_0x2b046c),_0x1f43bf=$gameMap[_0x36b3ef(0x645)]();_0x1f43bf[_0x37b11d]&0x10?_0x483a1f['z']=0x4:_0x483a1f['z']=0x3,this[_0x36b3ef(0x984)]['addChild'](_0x483a1f),this['_tileExtendSprites']['push'](_0x483a1f);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x2c5)]=Tilemap[_0x19616c(0x7f9)][_0x19616c(0x959)],Tilemap[_0x19616c(0x7f9)]['_addSpotTile']=function(_0xe8ace4,_0x586906,_0x366ec2){const _0x1dcef2=_0x19616c;if($gameMap[_0x1dcef2(0x82a)](_0xe8ace4))return;VisuMZ[_0x1dcef2(0x4f5)][_0x1dcef2(0x2c5)]['call'](this,_0xe8ace4,_0x586906,_0x366ec2);},Spriteset_Battle['DETACH_PICTURE_CONTAINER']=VisuMZ['CoreEngine'][_0x19616c(0x568)][_0x19616c(0x1fb)]['DetachBattlePictureContainer']||![],VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x50b)]=Scene_Battle[_0x19616c(0x7f9)][_0x19616c(0x469)],Scene_Battle[_0x19616c(0x7f9)][_0x19616c(0x469)]=function(){const _0x1cfc94=_0x19616c;VisuMZ[_0x1cfc94(0x4f5)]['Scene_Battle_createSpriteset_detach']['call'](this);if(!Spriteset_Battle[_0x1cfc94(0x579)])return;const _0x14144e=this[_0x1cfc94(0x4f0)];if(!_0x14144e)return;this['_pictureContainer']=_0x14144e['_pictureContainer'];if(!this[_0x1cfc94(0x23a)])return;this[_0x1cfc94(0x1b8)](this['_pictureContainer']);},Spriteset_Battle['prototype'][_0x19616c(0x7e3)]=function(){const _0x3bc765=_0x19616c;this['_backgroundFilter']=new PIXI['filters']['BlurFilter'](clamp=!![]),this[_0x3bc765(0x23d)]=new Sprite(),this[_0x3bc765(0x23d)][_0x3bc765(0x807)]=SceneManager['backgroundBitmap'](),this['_backgroundSprite']['filters']=[this['_backgroundFilter']],this[_0x3bc765(0x611)]['addChild'](this[_0x3bc765(0x23d)]);},VisuMZ['CoreEngine'][_0x19616c(0x2a9)]=Spriteset_Battle[_0x19616c(0x7f9)][_0x19616c(0x2b2)],Spriteset_Battle['prototype'][_0x19616c(0x2b2)]=function(){const _0x5c27c7=_0x19616c;this[_0x5c27c7(0x4a1)]()&&this[_0x5c27c7(0x8f0)](),VisuMZ['CoreEngine']['Spriteset_Battle_createEnemies'][_0x5c27c7(0x4a5)](this);},VisuMZ[_0x19616c(0x4f5)]['Spriteset_Battle_createLowerLayer']=Spriteset_Battle[_0x19616c(0x7f9)][_0x19616c(0x729)],Spriteset_Battle['prototype']['createLowerLayer']=function(){const _0x12f0e4=_0x19616c;VisuMZ[_0x12f0e4(0x4f5)][_0x12f0e4(0x2bd)][_0x12f0e4(0x4a5)](this),this[_0x12f0e4(0x3c1)]&&this[_0x12f0e4(0x3c1)][_0x12f0e4(0x3ad)]();},Spriteset_Battle[_0x19616c(0x7f9)]['coreEngineRepositionEnemies']=function(){const _0x409f9e=_0x19616c,_0x369e91=VisuMZ[_0x409f9e(0x4f5)][_0x409f9e(0x568)][_0x409f9e(0x70f)];if(!_0x369e91)return![];if(Utils[_0x409f9e(0x8ad)]>='1.3.0'&&!_0x369e91[_0x409f9e(0x29e)])return![];if(Utils['RPGMAKER_VERSION']>=_0x409f9e(0x23b)&&!_0x369e91['RepositionEnemies130'])return![];return _0x369e91[_0x409f9e(0x3c5)];},Spriteset_Battle[_0x19616c(0x7f9)][_0x19616c(0x8f0)]=function(){const _0x2cc701=_0x19616c;for(member of $gameTroop['members']()){member[_0x2cc701(0x2de)]();}},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x456)]=Window_Base[_0x19616c(0x7f9)]['initialize'],Window_Base[_0x19616c(0x7f9)][_0x19616c(0x5cd)]=function(_0x2186a7){const _0x16e77b=_0x19616c;_0x2186a7['x']=Math[_0x16e77b(0x45c)](_0x2186a7['x']),_0x2186a7['y']=Math[_0x16e77b(0x45c)](_0x2186a7['y']),_0x2186a7[_0x16e77b(0x3e0)]=Math[_0x16e77b(0x45c)](_0x2186a7[_0x16e77b(0x3e0)]),_0x2186a7[_0x16e77b(0x413)]=Math[_0x16e77b(0x45c)](_0x2186a7[_0x16e77b(0x413)]),this[_0x16e77b(0x96e)](),VisuMZ[_0x16e77b(0x4f5)][_0x16e77b(0x456)][_0x16e77b(0x4a5)](this,_0x2186a7),this[_0x16e77b(0x980)]();},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x96e)]=function(){const _0x4af815=_0x19616c;this[_0x4af815(0x2ca)]=VisuMZ[_0x4af815(0x4f5)][_0x4af815(0x568)][_0x4af815(0x1fb)]['DigitGroupingStandardText'],this[_0x4af815(0x62d)]=VisuMZ['CoreEngine']['Settings'][_0x4af815(0x1fb)][_0x4af815(0x704)];},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x1b0)]=function(){const _0x444357=_0x19616c;return VisuMZ[_0x444357(0x4f5)][_0x444357(0x568)][_0x444357(0x8a1)]['LineHeight'];},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x3df)]=function(){const _0x47a4f0=_0x19616c;return VisuMZ[_0x47a4f0(0x4f5)]['Settings'][_0x47a4f0(0x8a1)][_0x47a4f0(0x527)];},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x7c3)]=function(){const _0x581d81=_0x19616c;$gameSystem['windowOpacity']&&$dataSystem[_0x581d81(0x435)][_0x581d81(0x6fb)]!==undefined?this[_0x581d81(0x8a6)]=$gameSystem[_0x581d81(0x6fb)]():this[_0x581d81(0x8a6)]=VisuMZ[_0x581d81(0x4f5)][_0x581d81(0x568)]['Window']['BackOpacity'];},Window_Base['prototype'][_0x19616c(0x27f)]=function(){const _0x6b8b36=_0x19616c;return VisuMZ[_0x6b8b36(0x4f5)][_0x6b8b36(0x568)][_0x6b8b36(0x8a1)]['TranslucentOpacity'];},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x3b2)]=function(){const _0x18f500=_0x19616c;return VisuMZ[_0x18f500(0x4f5)][_0x18f500(0x568)][_0x18f500(0x8a1)][_0x18f500(0x1d8)];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x2d4)]=Window_Base[_0x19616c(0x7f9)][_0x19616c(0x3ad)],Window_Base['prototype'][_0x19616c(0x3ad)]=function(){const _0x44ff23=_0x19616c;VisuMZ['CoreEngine'][_0x44ff23(0x2d4)][_0x44ff23(0x4a5)](this),this[_0x44ff23(0x6a9)]();},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x714)]=function(){const _0x4104c4=_0x19616c;this[_0x4104c4(0x3e3)]&&(this['openness']+=this['openingSpeed'](),this['isOpen']()&&(this[_0x4104c4(0x3e3)]=![]));},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x30e)]=function(){const _0x28ba9a=_0x19616c;this[_0x28ba9a(0x864)]&&(this[_0x28ba9a(0x53e)]-=this['openingSpeed'](),this[_0x28ba9a(0x67a)]()&&(this[_0x28ba9a(0x864)]=![]));},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x2ac)]=Window_Base[_0x19616c(0x7f9)]['drawText'],Window_Base[_0x19616c(0x7f9)]['drawText']=function(_0xf970b4,_0x3cbd93,_0x180304,_0x536df6,_0xe56bca){const _0x26acc9=_0x19616c;if(this['useDigitGrouping']())_0xf970b4=VisuMZ['GroupDigits'](_0xf970b4);VisuMZ[_0x26acc9(0x4f5)][_0x26acc9(0x2ac)][_0x26acc9(0x4a5)](this,_0xf970b4,_0x3cbd93,_0x180304,_0x536df6,_0xe56bca);},Window_Base['prototype'][_0x19616c(0x2f3)]=function(){const _0x104863=_0x19616c;return this[_0x104863(0x2ca)];},VisuMZ['CoreEngine'][_0x19616c(0x848)]=Window_Base[_0x19616c(0x7f9)][_0x19616c(0x7fd)],Window_Base[_0x19616c(0x7f9)][_0x19616c(0x7fd)]=function(_0x53b143,_0x3685bf,_0x2be8cf,_0x636949){const _0x1d797c=_0x19616c;var _0x216ffc=VisuMZ[_0x1d797c(0x4f5)][_0x1d797c(0x848)][_0x1d797c(0x4a5)](this,_0x53b143,_0x3685bf,_0x2be8cf,_0x636949);if(this[_0x1d797c(0x780)]())_0x216ffc['text']=String(VisuMZ[_0x1d797c(0x713)](_0x216ffc[_0x1d797c(0x1c1)]))||'';return _0x216ffc;},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x780)]=function(){const _0x9ffa78=_0x19616c;return this[_0x9ffa78(0x62d)];},Window_Base[_0x19616c(0x7f9)]['enableDigitGrouping']=function(_0x5d8c8a){const _0x30e901=_0x19616c;this[_0x30e901(0x2ca)]=_0x5d8c8a;},Window_Base[_0x19616c(0x7f9)]['enableDigitGroupingEx']=function(_0x4fc5f3){const _0x39eed5=_0x19616c;this[_0x39eed5(0x62d)]=_0x4fc5f3;},VisuMZ['CoreEngine'][_0x19616c(0x653)]=Window_Base[_0x19616c(0x7f9)][_0x19616c(0x5fd)],Window_Base[_0x19616c(0x7f9)][_0x19616c(0x5fd)]=function(_0x4dcbf3,_0x30a8dd,_0x29d7c6){const _0x42a9ee=_0x19616c;_0x30a8dd=Math[_0x42a9ee(0x45c)](_0x30a8dd),_0x29d7c6=Math[_0x42a9ee(0x45c)](_0x29d7c6),VisuMZ[_0x42a9ee(0x4f5)][_0x42a9ee(0x653)][_0x42a9ee(0x4a5)](this,_0x4dcbf3,_0x30a8dd,_0x29d7c6);},VisuMZ['CoreEngine']['Window_Base_drawFace']=Window_Base[_0x19616c(0x7f9)][_0x19616c(0x963)],Window_Base[_0x19616c(0x7f9)][_0x19616c(0x963)]=function(_0x277363,_0x4336ce,_0x56455e,_0x57d7c1,_0x5187d3,_0xe047aa){const _0x5954d7=_0x19616c;_0x5187d3=_0x5187d3||ImageManager[_0x5954d7(0x45f)],_0xe047aa=_0xe047aa||ImageManager[_0x5954d7(0x744)],_0x56455e=Math[_0x5954d7(0x45c)](_0x56455e),_0x57d7c1=Math[_0x5954d7(0x45c)](_0x57d7c1),_0x5187d3=Math['round'](_0x5187d3),_0xe047aa=Math[_0x5954d7(0x45c)](_0xe047aa),VisuMZ[_0x5954d7(0x4f5)][_0x5954d7(0x76b)]['call'](this,_0x277363,_0x4336ce,_0x56455e,_0x57d7c1,_0x5187d3,_0xe047aa);},VisuMZ[_0x19616c(0x4f5)]['Window_Base_drawCharacter']=Window_Base[_0x19616c(0x7f9)][_0x19616c(0x217)],Window_Base['prototype'][_0x19616c(0x217)]=function(_0x16fbee,_0x27d6b2,_0x180e49,_0x4b3010){const _0x1f6989=_0x19616c;_0x180e49=Math[_0x1f6989(0x45c)](_0x180e49),_0x4b3010=Math[_0x1f6989(0x45c)](_0x4b3010),VisuMZ[_0x1f6989(0x4f5)][_0x1f6989(0x5f0)]['call'](this,_0x16fbee,_0x27d6b2,_0x180e49,_0x4b3010);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x86c)]=Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x339)],Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x339)]=function(_0x470a4d){const _0x1da047=_0x19616c;let _0x293ca8=VisuMZ['CoreEngine'][_0x1da047(0x86c)]['call'](this,_0x470a4d);return _0x293ca8['x']=Math[_0x1da047(0x45c)](_0x293ca8['x']),_0x293ca8['y']=Math['round'](_0x293ca8['y']),_0x293ca8[_0x1da047(0x3e0)]=Math[_0x1da047(0x45c)](_0x293ca8['width']),_0x293ca8[_0x1da047(0x413)]=Math[_0x1da047(0x45c)](_0x293ca8['height']),_0x293ca8;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x1a1)]=Window_StatusBase[_0x19616c(0x7f9)][_0x19616c(0x912)],Window_StatusBase[_0x19616c(0x7f9)]['drawActorSimpleStatus']=function(_0x46185e,_0x3ecc5b,_0x4e5b71){const _0x2f2d3b=_0x19616c;_0x3ecc5b=Math[_0x2f2d3b(0x45c)](_0x3ecc5b),_0x4e5b71=Math['round'](_0x4e5b71),VisuMZ[_0x2f2d3b(0x4f5)][_0x2f2d3b(0x1a1)][_0x2f2d3b(0x4a5)](this,_0x46185e,_0x3ecc5b,_0x4e5b71);},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x980)]=function(){const _0x596185=_0x19616c;this[_0x596185(0x43b)]={'duration':0x0,'wholeDuration':0x0,'type':_0x596185(0x410),'targetX':this['x'],'targetY':this['y'],'targetScaleX':this[_0x596185(0x294)]['x'],'targetScaleY':this[_0x596185(0x294)]['y'],'targetOpacity':this[_0x596185(0x4fb)],'targetBackOpacity':this['backOpacity'],'targetContentsOpacity':this[_0x596185(0x961)]};},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x6a9)]=function(){const _0x390312=_0x19616c;if(!this[_0x390312(0x43b)])return;if(this[_0x390312(0x43b)][_0x390312(0x300)]<=0x0)return;this['x']=this['applyCoreEasing'](this['x'],this['_coreEasing'][_0x390312(0x782)]),this['y']=this[_0x390312(0x614)](this['y'],this['_coreEasing'][_0x390312(0x851)]),this['scale']['x']=this[_0x390312(0x614)](this[_0x390312(0x294)]['x'],this[_0x390312(0x43b)][_0x390312(0x63d)]),this[_0x390312(0x294)]['y']=this['applyCoreEasing'](this[_0x390312(0x294)]['y'],this['_coreEasing']['targetScaleY']),this[_0x390312(0x4fb)]=this[_0x390312(0x614)](this[_0x390312(0x4fb)],this[_0x390312(0x43b)]['targetOpacity']),this[_0x390312(0x8a6)]=this[_0x390312(0x614)](this['backOpacity'],this[_0x390312(0x43b)][_0x390312(0x2b8)]),this[_0x390312(0x961)]=this[_0x390312(0x614)](this[_0x390312(0x961)],this[_0x390312(0x43b)][_0x390312(0x344)]),this[_0x390312(0x43b)][_0x390312(0x300)]--;},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x614)]=function(_0x4e8076,_0x41c71b){const _0x3a00f4=_0x19616c;if(!this[_0x3a00f4(0x43b)])return _0x41c71b;const _0x39045d=this[_0x3a00f4(0x43b)][_0x3a00f4(0x300)],_0x317b3b=this[_0x3a00f4(0x43b)]['wholeDuration'],_0x515889=this[_0x3a00f4(0x877)]((_0x317b3b-_0x39045d)/_0x317b3b),_0x32faa8=this[_0x3a00f4(0x877)]((_0x317b3b-_0x39045d+0x1)/_0x317b3b),_0x31cbc8=(_0x4e8076-_0x41c71b*_0x515889)/(0x1-_0x515889);return _0x31cbc8+(_0x41c71b-_0x31cbc8)*_0x32faa8;},Window_Base['prototype'][_0x19616c(0x877)]=function(_0x4a863b){const _0x4dabfd=_0x19616c;if(!this[_0x4dabfd(0x43b)])return _0x4a863b;return VisuMZ['ApplyEasing'](_0x4a863b,this[_0x4dabfd(0x43b)][_0x4dabfd(0x519)]||_0x4dabfd(0x410));},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x59f)]=function(_0x1002fc,_0x33b16a){const _0x16126d=_0x19616c;if(!this[_0x16126d(0x43b)])return;this['x']=this[_0x16126d(0x43b)][_0x16126d(0x782)],this['y']=this[_0x16126d(0x43b)][_0x16126d(0x851)],this[_0x16126d(0x294)]['x']=this[_0x16126d(0x43b)][_0x16126d(0x63d)],this['scale']['y']=this[_0x16126d(0x43b)]['targetScaleY'],this[_0x16126d(0x4fb)]=this[_0x16126d(0x43b)][_0x16126d(0x33c)],this[_0x16126d(0x8a6)]=this[_0x16126d(0x43b)]['targetBackOpacity'],this['contentsOpacity']=this[_0x16126d(0x43b)][_0x16126d(0x344)],this['setupCoreEasing'](_0x1002fc,_0x33b16a,this['x'],this['y'],this[_0x16126d(0x294)]['x'],this[_0x16126d(0x294)]['y'],this[_0x16126d(0x4fb)],this['backOpacity'],this[_0x16126d(0x961)]);},Window_Base[_0x19616c(0x7f9)]['setupCoreEasing']=function(_0x30f4bf,_0x57a82b,_0x4b1828,_0x60fff9,_0x3c49f6,_0xe249d8,_0x259e63,_0xec738f,_0x422a6f){const _0x4f82cf=_0x19616c;this[_0x4f82cf(0x43b)]={'duration':_0x30f4bf,'wholeDuration':_0x30f4bf,'type':_0x57a82b,'targetX':_0x4b1828,'targetY':_0x60fff9,'targetScaleX':_0x3c49f6,'targetScaleY':_0xe249d8,'targetOpacity':_0x259e63,'targetBackOpacity':_0xec738f,'targetContentsOpacity':_0x422a6f};},Window_Base['prototype'][_0x19616c(0x6ac)]=function(_0x229ddd,_0x31dd9e,_0x4ddc41,_0x58bf21,_0x42139e){const _0x324de3=_0x19616c;this['resetFontSettings'](),this[_0x324de3(0x329)][_0x324de3(0x6fd)]=VisuMZ[_0x324de3(0x4f5)][_0x324de3(0x568)][_0x324de3(0x56f)][_0x324de3(0x287)];const _0x2faf6b=VisuMZ[_0x324de3(0x4f5)][_0x324de3(0x568)][_0x324de3(0x56f)]['GoldIcon'];if(_0x2faf6b>0x0&&_0x31dd9e===TextManager['currencyUnit']){const _0x2976b9=_0x58bf21+(this[_0x324de3(0x1b0)]()-ImageManager[_0x324de3(0x96f)])/0x2;this[_0x324de3(0x5fd)](_0x2faf6b,_0x4ddc41+(_0x42139e-ImageManager[_0x324de3(0x7d6)]),_0x2976b9),_0x42139e-=ImageManager[_0x324de3(0x7d6)]+0x4;}else this[_0x324de3(0x8e7)](ColorManager[_0x324de3(0x4d8)]()),this[_0x324de3(0x4c1)](_0x31dd9e,_0x4ddc41,_0x58bf21,_0x42139e,_0x324de3(0x6e4)),_0x42139e-=this[_0x324de3(0x2a8)](_0x31dd9e)+0x6;this[_0x324de3(0x826)]();const _0x160982=this[_0x324de3(0x2a8)](this['_digitGrouping']?VisuMZ[_0x324de3(0x713)](_0x229ddd):_0x229ddd);_0x160982>_0x42139e?this['drawText'](VisuMZ['CoreEngine'][_0x324de3(0x568)]['Gold'][_0x324de3(0x7af)],_0x4ddc41,_0x58bf21,_0x42139e,_0x324de3(0x6e4)):this['drawText'](_0x229ddd,_0x4ddc41,_0x58bf21,_0x42139e,_0x324de3(0x6e4)),this[_0x324de3(0x1a3)]();},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x365)]=function(_0x39a688,_0x46790a,_0x1fdaee,_0x34e29a,_0x384e63){const _0x53b0c4=_0x19616c,_0x1c6fbc=ImageManager[_0x53b0c4(0x608)]('IconSet'),_0x2f32d7=ImageManager[_0x53b0c4(0x7d6)],_0xadaa10=ImageManager['iconHeight'],_0x3fee80=_0x39a688%0x10*_0x2f32d7,_0x2cdd04=Math[_0x53b0c4(0x2f5)](_0x39a688/0x10)*_0xadaa10,_0x248a39=_0x34e29a,_0x2bd271=_0x34e29a;this[_0x53b0c4(0x329)]['_context'][_0x53b0c4(0x58b)]=_0x384e63,this[_0x53b0c4(0x329)][_0x53b0c4(0x98f)](_0x1c6fbc,_0x3fee80,_0x2cdd04,_0x2f32d7,_0xadaa10,_0x46790a,_0x1fdaee,_0x248a39,_0x2bd271),this[_0x53b0c4(0x329)][_0x53b0c4(0x92c)][_0x53b0c4(0x58b)]=!![];},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x43c)]=function(_0x407103,_0x590d51,_0x55f4f0,_0x5ebd2f,_0x567331,_0x4068dd){const _0x3532ba=_0x19616c,_0x3f1e9a=Math[_0x3532ba(0x2f5)]((_0x55f4f0-0x2)*_0x5ebd2f),_0x527dad=Sprite_Gauge[_0x3532ba(0x7f9)][_0x3532ba(0x74e)][_0x3532ba(0x4a5)](this),_0x1fdf2f=_0x590d51+this[_0x3532ba(0x1b0)]()-_0x527dad-0x2;this[_0x3532ba(0x329)][_0x3532ba(0x7ef)](_0x407103,_0x1fdf2f,_0x55f4f0,_0x527dad,ColorManager['gaugeBackColor']()),this[_0x3532ba(0x329)]['gradientFillRect'](_0x407103+0x1,_0x1fdf2f+0x1,_0x3f1e9a,_0x527dad-0x2,_0x567331,_0x4068dd);},Window_Scrollable[_0x19616c(0x622)]={'enabled':VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)][_0x19616c(0x8a1)][_0x19616c(0x3ca)]??!![],'thickness':VisuMZ[_0x19616c(0x4f5)]['Settings']['Window']['BarThickness']??0x2,'offset':VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)][_0x19616c(0x8a1)]['BarOffset']??0x2,'bodyColor':VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)][_0x19616c(0x8a1)][_0x19616c(0x48f)]??0x0,'offColor':VisuMZ[_0x19616c(0x4f5)]['Settings'][_0x19616c(0x8a1)][_0x19616c(0x795)]??0x7,'offOpacity':VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)][_0x19616c(0x8a1)][_0x19616c(0x956)]??0x80},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x910)]=function(){const _0x39ecab=_0x19616c;return Window_Scrollable[_0x39ecab(0x622)][_0x39ecab(0x207)]&&Window_Scrollable[_0x39ecab(0x622)][_0x39ecab(0x586)]>0x0;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x3c0)]=Window_Base['prototype'][_0x19616c(0x2f8)],Window_Base[_0x19616c(0x7f9)][_0x19616c(0x2f8)]=function(){const _0x3f6ab1=_0x19616c;VisuMZ[_0x3f6ab1(0x4f5)][_0x3f6ab1(0x3c0)][_0x3f6ab1(0x4a5)](this),this[_0x3f6ab1(0x423)](),this[_0x3f6ab1(0x1e2)](!![]),this['setupScrollBarBitmap'](![]);},Window_Base[_0x19616c(0x7f9)]['createScrollBarSprites']=function(){const _0x747ca5=_0x19616c;if(!this[_0x747ca5(0x910)]())return;if(this[_0x747ca5(0x931)]||this[_0x747ca5(0x87d)])return;this['_lastScrollBarValues']={'horz':null,'vert':null,'maxHorz':null,'maxVert':null},this['_scrollBarHorz']=new Sprite(),this['_scrollBarVert']=new Sprite(),this['addChild'](this[_0x747ca5(0x931)]),this[_0x747ca5(0x1b8)](this['_scrollBarVert']);},Window_Base['prototype'][_0x19616c(0x1e2)]=function(_0x3410d5){const _0x149f61=_0x19616c,_0x195168=_0x3410d5?this[_0x149f61(0x931)]:this[_0x149f61(0x87d)];if(!_0x195168)return;const _0x59d3a2=Window_Scrollable[_0x149f61(0x622)],_0x412dd8=_0x59d3a2[_0x149f61(0x586)],_0x612e7c=_0x3410d5?this[_0x149f61(0x8b2)]-_0x412dd8*0x2:_0x412dd8,_0x10239a=_0x3410d5?_0x412dd8:this[_0x149f61(0x59e)]-_0x412dd8*0x2;_0x195168['bitmap']=new Bitmap(_0x612e7c,_0x10239a),_0x195168[_0x149f61(0x38d)](0x0,0x0,_0x612e7c,_0x10239a),this[_0x149f61(0x852)](_0x3410d5);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x706)]=Window_Base[_0x19616c(0x7f9)][_0x19616c(0x275)],Window_Base[_0x19616c(0x7f9)]['destroyContents']=function(){const _0x1b8abd=_0x19616c;VisuMZ['CoreEngine'][_0x1b8abd(0x706)][_0x1b8abd(0x4a5)](this),this[_0x1b8abd(0x8bd)]();},Window_Base[_0x19616c(0x7f9)]['destroyScrollBarBitmaps']=function(){const _0x11baaf=_0x19616c,_0xce92be=[this[_0x11baaf(0x931)],this[_0x11baaf(0x87d)]];for(const _0x4b0375 of _0xce92be){if(_0x4b0375&&_0x4b0375[_0x11baaf(0x807)])_0x4b0375[_0x11baaf(0x807)]['destroy']();}},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x425)]=Window_Scrollable['prototype'][_0x19616c(0x3ad)],Window_Scrollable['prototype'][_0x19616c(0x3ad)]=function(){const _0x5ad17b=_0x19616c;VisuMZ[_0x5ad17b(0x4f5)][_0x5ad17b(0x425)]['call'](this),this[_0x5ad17b(0x2df)]();},Window_Scrollable[_0x19616c(0x7f9)][_0x19616c(0x2df)]=function(){const _0x504e51=_0x19616c;this[_0x504e51(0x75c)](),this[_0x504e51(0x7aa)](!![]),this[_0x504e51(0x7aa)](![]),this[_0x504e51(0x852)](!![]),this[_0x504e51(0x852)](![]);},Window_Scrollable[_0x19616c(0x7f9)][_0x19616c(0x75c)]=function(){const _0x772a29=_0x19616c,_0x5e36c6=[this[_0x772a29(0x931)],this[_0x772a29(0x87d)]];for(const _0xefef38 of _0x5e36c6){_0xefef38&&(_0xefef38['visible']=this[_0x772a29(0x910)]()&&this['isOpen']());}},Window_Scrollable[_0x19616c(0x7f9)][_0x19616c(0x7aa)]=function(_0x653675){const _0x32fb6e=_0x19616c;if(!this['_lastScrollBarValues'])return;const _0x877fdd=this['scrollbar'](_0x653675),_0x994f6c=this['maxScrollbar'](_0x653675),_0x8b3495=_0x653675?_0x32fb6e(0x1e6):_0x32fb6e(0x8f2),_0x3a1f65=_0x653675?_0x32fb6e(0x717):_0x32fb6e(0x428);(this[_0x32fb6e(0x4d1)][_0x8b3495]!==_0x877fdd||this[_0x32fb6e(0x4d1)][_0x3a1f65]!==_0x994f6c)&&(this[_0x32fb6e(0x4d1)][_0x8b3495]=_0x877fdd,this[_0x32fb6e(0x4d1)][_0x3a1f65]=_0x994f6c,this[_0x32fb6e(0x5c2)](_0x653675,_0x877fdd,_0x994f6c));},Window_Scrollable[_0x19616c(0x7f9)]['scrollbar']=function(_0x3860c8){const _0x17ea51=_0x19616c;if(this['_allTextHeight']!==undefined)return _0x3860c8?this[_0x17ea51(0x5ca)]():this['origin']['y'];return _0x3860c8?this['scrollX']():this[_0x17ea51(0x821)]();},Window_Scrollable[_0x19616c(0x7f9)]['maxScrollbar']=function(_0x5dcd2a){const _0x45a105=_0x19616c;if(this[_0x45a105(0x39b)]!==undefined)return _0x5dcd2a?this['maxScrollX']():Math[_0x45a105(0x5c3)](0x0,this[_0x45a105(0x39b)]-this[_0x45a105(0x59e)]);return _0x5dcd2a?this[_0x45a105(0x7c0)]():this[_0x45a105(0x274)]();},Window_Scrollable[_0x19616c(0x7f9)]['scrollbarHeight']=function(){const _0xa76d5f=_0x19616c;if(this[_0xa76d5f(0x39b)]!==undefined)return Math[_0xa76d5f(0x5c3)](0x0,this[_0xa76d5f(0x39b)]);return this[_0xa76d5f(0x357)]();},Window_Scrollable[_0x19616c(0x7f9)][_0x19616c(0x5c2)]=function(_0x4f4269,_0x1b5f6b,_0x725db2){const _0x7a4bd0=_0x19616c,_0x4cffcb=_0x4f4269?this['_scrollBarHorz']:this[_0x7a4bd0(0x87d)];if(!_0x4cffcb)return;if(!_0x4cffcb[_0x7a4bd0(0x807)])return;const _0x595a16=_0x4cffcb[_0x7a4bd0(0x807)];_0x595a16[_0x7a4bd0(0x772)]();if(_0x725db2<=0x0)return;const _0x2c265f=_0x4f4269?this[_0x7a4bd0(0x8b2)]/this[_0x7a4bd0(0x367)]():this[_0x7a4bd0(0x59e)]/this[_0x7a4bd0(0x47d)](),_0x155bb2=_0x4f4269?Math[_0x7a4bd0(0x45c)](_0x1b5f6b*_0x2c265f):0x0,_0x3d624a=_0x4f4269?0x0:Math['round'](_0x1b5f6b*_0x2c265f),_0x1b958d=_0x4f4269?Math[_0x7a4bd0(0x45c)](_0x595a16['width']*_0x2c265f):_0x595a16[_0x7a4bd0(0x3e0)],_0x27438e=_0x4f4269?_0x595a16['height']:Math[_0x7a4bd0(0x45c)](_0x595a16[_0x7a4bd0(0x413)]*_0x2c265f),_0x488871=Window_Scrollable[_0x7a4bd0(0x622)],_0x1a481a=ColorManager[_0x7a4bd0(0x659)](_0x488871[_0x7a4bd0(0x5d8)]),_0x1d6218=ColorManager[_0x7a4bd0(0x659)](_0x488871[_0x7a4bd0(0x34e)]),_0xaadaf0=_0x488871[_0x7a4bd0(0x5b9)];_0x595a16[_0x7a4bd0(0x845)]=_0xaadaf0,_0x595a16[_0x7a4bd0(0x573)](_0x1a481a),_0x595a16[_0x7a4bd0(0x845)]=0xff,_0x595a16[_0x7a4bd0(0x7ef)](_0x155bb2,_0x3d624a,_0x1b958d,_0x27438e,_0x1d6218);},Window_Base['prototype'][_0x19616c(0x852)]=function(_0xbe8215){const _0x3dd488=_0x19616c,_0x102fe6=_0xbe8215?this[_0x3dd488(0x931)]:this['_scrollBarVert'];if(!_0x102fe6)return;const _0x19fb05=Window_Scrollable['SCROLLBAR'],_0xe16271=_0x19fb05['thickness'],_0x318bb8=_0x19fb05[_0x3dd488(0x843)];if(!_0x102fe6[_0x3dd488(0x68a)])return;_0x102fe6['x']=this[_0x3dd488(0x8cd)]+(_0xbe8215?_0xe16271:this['innerWidth']+_0x318bb8),_0x102fe6['y']=this['padding']+(_0xbe8215?this[_0x3dd488(0x59e)]+_0x318bb8:_0xe16271);},Window_Selectable[_0x19616c(0x7f9)]['cursorDown']=function(_0x4a2dc8){const _0x32c565=_0x19616c;let _0x1dfb7b=this[_0x32c565(0x32a)]();const _0x217f36=this[_0x32c565(0x234)](),_0x2e4322=this['maxCols']();if(this[_0x32c565(0x8f5)]()&&(_0x1dfb7b<_0x217f36||_0x4a2dc8&&_0x2e4322===0x1)){_0x1dfb7b+=_0x2e4322;if(_0x1dfb7b>=_0x217f36)_0x1dfb7b=_0x217f36-0x1;this[_0x32c565(0x1f7)](_0x1dfb7b);}else!this[_0x32c565(0x8f5)]()&&((_0x1dfb7b<_0x217f36-_0x2e4322||_0x4a2dc8&&_0x2e4322===0x1)&&this[_0x32c565(0x1f7)]((_0x1dfb7b+_0x2e4322)%_0x217f36));},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x1c4)]=Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x76c)],Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x76c)]=function(_0x32b46d){const _0x3834f2=_0x19616c;this[_0x3834f2(0x8f5)]()&&_0x32b46d&&this[_0x3834f2(0x868)]()===0x1&&this[_0x3834f2(0x32a)]()===this[_0x3834f2(0x234)]()-0x1?this[_0x3834f2(0x1f7)](0x0):VisuMZ[_0x3834f2(0x4f5)][_0x3834f2(0x1c4)][_0x3834f2(0x4a5)](this,_0x32b46d);},Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x2bc)]=function(_0x402767){const _0x137193=_0x19616c;let _0x1ca216=Math[_0x137193(0x5c3)](0x0,this[_0x137193(0x32a)]());const _0x103450=this[_0x137193(0x234)](),_0x1daf03=this[_0x137193(0x868)]();if(this[_0x137193(0x8f5)]()&&_0x1ca216>0x0||_0x402767&&_0x1daf03===0x1){_0x1ca216-=_0x1daf03;if(_0x1ca216<=0x0)_0x1ca216=0x0;this[_0x137193(0x1f7)](_0x1ca216);}else!this[_0x137193(0x8f5)]()&&((_0x1ca216>=_0x1daf03||_0x402767&&_0x1daf03===0x1)&&this[_0x137193(0x1f7)]((_0x1ca216-_0x1daf03+_0x103450)%_0x103450));},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x51f)]=Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x2bc)],Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x2bc)]=function(_0xf59bd0){const _0x4176e9=_0x19616c;this['isUseModernControls']()&&_0xf59bd0&&this[_0x4176e9(0x868)]()===0x1&&this[_0x4176e9(0x32a)]()===0x0?this[_0x4176e9(0x1f7)](this[_0x4176e9(0x234)]()-0x1):VisuMZ['CoreEngine']['Window_Selectable_cursorUp'][_0x4176e9(0x4a5)](this,_0xf59bd0);},Window_Selectable[_0x19616c(0x7f9)]['isUseModernControls']=function(){const _0x5d46c0=_0x19616c;return VisuMZ['CoreEngine'][_0x5d46c0(0x568)][_0x5d46c0(0x1fb)][_0x5d46c0(0x64a)];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x5f7)]=Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x2d2)],Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x2d2)]=function(){const _0xe42f08=_0x19616c;this[_0xe42f08(0x8f5)]()?(this[_0xe42f08(0x753)](),this[_0xe42f08(0x94f)]()):VisuMZ[_0xe42f08(0x4f5)][_0xe42f08(0x5f7)][_0xe42f08(0x4a5)](this);},Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x6f4)]=function(){return!![];},Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x753)]=function(){const _0x506996=_0x19616c;if(this[_0x506996(0x2c4)]()){const _0x43c425=this['index']();Input[_0x506996(0x65f)](_0x506996(0x860))&&(Input[_0x506996(0x364)](_0x506996(0x68f))&&this[_0x506996(0x6f4)]()?this['cursorPagedown']():this[_0x506996(0x76c)](Input['isTriggered'](_0x506996(0x860)))),Input[_0x506996(0x65f)]('up')&&(Input['isPressed']('shift')&&this[_0x506996(0x6f4)]()?this[_0x506996(0x60e)]():this['cursorUp'](Input['isTriggered']('up'))),Input[_0x506996(0x65f)]('right')&&this[_0x506996(0x54b)](Input[_0x506996(0x3d3)]('right')),Input['isRepeated'](_0x506996(0x953))&&this[_0x506996(0x948)](Input['isTriggered'](_0x506996(0x953))),!this[_0x506996(0x43f)](_0x506996(0x312))&&Input['isRepeated']('pagedown')&&this[_0x506996(0x7ea)](),!this[_0x506996(0x43f)](_0x506996(0x4b7))&&Input[_0x506996(0x65f)](_0x506996(0x4b7))&&this['cursorPageup'](),this[_0x506996(0x32a)]()!==_0x43c425&&this['playCursorSound']();}},Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x94f)]=function(){const _0x1e742e=_0x19616c;if(this[_0x1e742e(0x2c4)]()){const _0x1014ac=this[_0x1e742e(0x32a)]();Input[_0x1e742e(0x3d3)]('home')&&this[_0x1e742e(0x1f7)](Math['min'](this[_0x1e742e(0x32a)](),0x0)),Input['isTriggered'](_0x1e742e(0x970))&&this[_0x1e742e(0x1f7)](Math['max'](this[_0x1e742e(0x32a)](),this['maxItems']()-0x1)),this['index']()!==_0x1014ac&&this[_0x1e742e(0x29c)]();}},VisuMZ[_0x19616c(0x4f5)]['Window_Selectable_processTouch']=Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x6de)],Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x6de)]=function(){const _0x59b225=_0x19616c;this['isUseModernControls']()?this[_0x59b225(0x29f)]():VisuMZ[_0x59b225(0x4f5)][_0x59b225(0x71c)]['call'](this);},Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x29f)]=function(){const _0x2ee592=_0x19616c;VisuMZ[_0x2ee592(0x4f5)][_0x2ee592(0x71c)][_0x2ee592(0x4a5)](this);},Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x56e)]=function(){const _0x7ee96f=_0x19616c;return VisuMZ[_0x7ee96f(0x4f5)]['Settings'][_0x7ee96f(0x8a1)][_0x7ee96f(0x93c)];},Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x814)]=function(){const _0x3e2b38=_0x19616c;return VisuMZ[_0x3e2b38(0x4f5)][_0x3e2b38(0x568)][_0x3e2b38(0x8a1)][_0x3e2b38(0x470)];},Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x818)]=function(){const _0x4a737e=_0x19616c;return Window_Scrollable[_0x4a737e(0x7f9)][_0x4a737e(0x818)][_0x4a737e(0x4a5)](this)+VisuMZ['CoreEngine'][_0x4a737e(0x568)][_0x4a737e(0x8a1)][_0x4a737e(0x78a)];;},VisuMZ['CoreEngine']['Window_Selectable_drawBackgroundRect']=Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x30a)],Window_Selectable[_0x19616c(0x7f9)][_0x19616c(0x30a)]=function(_0x517960){const _0x173302=_0x19616c,_0x371a0f=VisuMZ['CoreEngine'][_0x173302(0x568)][_0x173302(0x8a1)];if(_0x371a0f[_0x173302(0x8a3)]===![])return;_0x371a0f[_0x173302(0x2bf)]?_0x371a0f[_0x173302(0x2bf)][_0x173302(0x4a5)](this,_0x517960):VisuMZ[_0x173302(0x4f5)][_0x173302(0x8e5)]['call'](this,_0x517960);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x398)]=Window_Gold[_0x19616c(0x7f9)]['refresh'],Window_Gold[_0x19616c(0x7f9)][_0x19616c(0x379)]=function(){const _0x4bf1ce=_0x19616c;this[_0x4bf1ce(0x4da)]()?this['drawGoldItemStyle']():VisuMZ[_0x4bf1ce(0x4f5)][_0x4bf1ce(0x398)][_0x4bf1ce(0x4a5)](this);},Window_Gold[_0x19616c(0x7f9)]['isItemStyle']=function(){const _0x22f4d7=_0x19616c;if(TextManager[_0x22f4d7(0x4d3)]!==this[_0x22f4d7(0x4d3)]())return![];return VisuMZ['CoreEngine'][_0x22f4d7(0x568)]['Gold'][_0x22f4d7(0x57a)];},Window_Gold[_0x19616c(0x7f9)][_0x19616c(0x42c)]=function(){const _0x3b15d9=_0x19616c;this[_0x3b15d9(0x1a3)](),this[_0x3b15d9(0x329)][_0x3b15d9(0x772)](),this['contents']['fontSize']=VisuMZ[_0x3b15d9(0x4f5)]['Settings']['Gold'][_0x3b15d9(0x287)];const _0x4023b8=VisuMZ[_0x3b15d9(0x4f5)][_0x3b15d9(0x568)][_0x3b15d9(0x56f)][_0x3b15d9(0x508)],_0x43a083=this['itemLineRect'](0x0);if(_0x4023b8>0x0){const _0x19c123=ImageManager['standardIconWidth']||0x20,_0x2091f8=_0x19c123-ImageManager[_0x3b15d9(0x7d6)],_0x21bf9b=_0x43a083['y']+(this[_0x3b15d9(0x1b0)]()-ImageManager[_0x3b15d9(0x96f)])/0x2;this['drawIcon'](_0x4023b8,_0x43a083['x']+Math[_0x3b15d9(0x6d8)](_0x2091f8/0x2),_0x21bf9b);const _0x495ca5=_0x19c123+0x4;_0x43a083['x']+=_0x495ca5,_0x43a083['width']-=_0x495ca5;}this['changeTextColor'](ColorManager[_0x3b15d9(0x4d8)]()),this[_0x3b15d9(0x4c1)](this[_0x3b15d9(0x4d3)](),_0x43a083['x'],_0x43a083['y'],_0x43a083[_0x3b15d9(0x3e0)],'left');const _0x2bc3f3=this['textWidth'](this[_0x3b15d9(0x4d3)]())+0x6;;_0x43a083['x']+=_0x2bc3f3,_0x43a083[_0x3b15d9(0x3e0)]-=_0x2bc3f3,this[_0x3b15d9(0x826)]();const _0x6ed6f=this[_0x3b15d9(0x2d7)](),_0x44d73a=this[_0x3b15d9(0x2a8)](this[_0x3b15d9(0x2ca)]?VisuMZ[_0x3b15d9(0x713)](this['value']()):this[_0x3b15d9(0x2d7)]());_0x44d73a>_0x43a083['width']?this[_0x3b15d9(0x4c1)](VisuMZ[_0x3b15d9(0x4f5)][_0x3b15d9(0x568)][_0x3b15d9(0x56f)][_0x3b15d9(0x7af)],_0x43a083['x'],_0x43a083['y'],_0x43a083[_0x3b15d9(0x3e0)],_0x3b15d9(0x6e4)):this[_0x3b15d9(0x4c1)](this[_0x3b15d9(0x2d7)](),_0x43a083['x'],_0x43a083['y'],_0x43a083[_0x3b15d9(0x3e0)],_0x3b15d9(0x6e4)),this[_0x3b15d9(0x1a3)]();},Window_StatusBase[_0x19616c(0x7f9)]['drawParamText']=function(_0x394310,_0x16d3d2,_0x309d29,_0x19313a,_0x28c823){const _0x1dc004=_0x19616c;_0x19313a=String(_0x19313a||'')['toUpperCase']();if(VisuMZ[_0x1dc004(0x4f5)]['Settings']['Param'][_0x1dc004(0x3da)]){const _0x102fd4=VisuMZ[_0x1dc004(0x6a8)](_0x19313a);if(_0x28c823)this[_0x1dc004(0x365)](_0x102fd4,_0x394310,_0x16d3d2,this[_0x1dc004(0x613)]()),_0x309d29-=this['gaugeLineHeight']()+0x2,_0x394310+=this[_0x1dc004(0x613)]()+0x2;else{const _0x4d5ada=ImageManager['standardIconWidth']||0x20,_0x78446e=ImageManager[_0x1dc004(0x612)]||0x20,_0x4db243=_0x4d5ada-ImageManager[_0x1dc004(0x7d6)],_0x2987a6=_0x78446e-ImageManager[_0x1dc004(0x96f)];let _0x36295d=0x2,_0x7bcc5c=0x2;this['lineHeight']()!==0x24&&(_0x7bcc5c=Math[_0x1dc004(0x2f5)]((this[_0x1dc004(0x1b0)]()-_0x78446e)/0x2));const _0x4d0ab7=_0x394310+Math[_0x1dc004(0x2f5)](_0x4db243/0x2)+_0x36295d,_0x2c41f2=_0x16d3d2+Math['floor'](_0x2987a6/0x2)+_0x7bcc5c;this[_0x1dc004(0x5fd)](_0x102fd4,_0x4d0ab7,_0x2c41f2),_0x309d29-=_0x4d5ada+0x4,_0x394310+=_0x4d5ada+0x4;}}const _0x15f8d0=TextManager[_0x1dc004(0x5a2)](_0x19313a);this[_0x1dc004(0x1a3)](),this[_0x1dc004(0x8e7)](ColorManager[_0x1dc004(0x4d8)]()),_0x28c823?(this[_0x1dc004(0x329)]['fontSize']=this[_0x1dc004(0x684)](),this[_0x1dc004(0x329)][_0x1dc004(0x4c1)](_0x15f8d0,_0x394310,_0x16d3d2,_0x309d29,this['gaugeLineHeight'](),'left')):this['drawText'](_0x15f8d0,_0x394310,_0x16d3d2,_0x309d29),this[_0x1dc004(0x1a3)]();},Window_StatusBase['prototype'][_0x19616c(0x684)]=function(){const _0x11ab52=_0x19616c;return $gameSystem[_0x11ab52(0x1a8)]()-0x8;},Window_StatusBase[_0x19616c(0x7f9)]['drawActorClass']=function(_0x34b126,_0x2a6e93,_0x1592d5,_0x54cbde){const _0xd2df70=_0x19616c;_0x54cbde=_0x54cbde||0xa8,this[_0xd2df70(0x826)]();if(VisuMZ[_0xd2df70(0x4f5)][_0xd2df70(0x568)]['UI'][_0xd2df70(0x8cf)])this[_0xd2df70(0x4eb)](_0x34b126['currentClass']()[_0xd2df70(0x3e9)],_0x2a6e93,_0x1592d5,_0x54cbde);else{const _0x1fc48a=_0x34b126[_0xd2df70(0x5af)]()['name'][_0xd2df70(0x233)](/\\I\[(\d+)\]/gi,'');this[_0xd2df70(0x4c1)](_0x1fc48a,_0x2a6e93,_0x1592d5,_0x54cbde);}},Window_StatusBase['prototype'][_0x19616c(0x459)]=function(_0x512bd5,_0x568858,_0x47a277,_0x59f400){const _0x3a35f9=_0x19616c;_0x59f400=_0x59f400||0x10e,this[_0x3a35f9(0x826)]();if(VisuMZ[_0x3a35f9(0x4f5)][_0x3a35f9(0x568)]['UI'][_0x3a35f9(0x35d)])this[_0x3a35f9(0x4eb)](_0x512bd5[_0x3a35f9(0x374)](),_0x568858,_0x47a277,_0x59f400);else{const _0x1b9ec7=_0x512bd5[_0x3a35f9(0x374)]()[_0x3a35f9(0x233)](/\\I\[(\d+)\]/gi,'');this[_0x3a35f9(0x4c1)](_0x512bd5[_0x3a35f9(0x374)](),_0x568858,_0x47a277,_0x59f400);}},VisuMZ[_0x19616c(0x4f5)]['Window_StatusBase_drawActorLevel']=Window_StatusBase[_0x19616c(0x7f9)]['drawActorLevel'],Window_StatusBase[_0x19616c(0x7f9)][_0x19616c(0x211)]=function(_0x354dc8,_0x254997,_0x24750b){const _0x4bc19a=_0x19616c;if(VisuMZ[_0x4bc19a(0x4f5)][_0x4bc19a(0x568)][_0x4bc19a(0x477)][_0x4bc19a(0x5a8)]===![])return;if(this['isExpGaugeDrawn']())this['drawActorExpGauge'](_0x354dc8,_0x254997,_0x24750b);VisuMZ['CoreEngine'][_0x4bc19a(0x815)][_0x4bc19a(0x4a5)](this,_0x354dc8,_0x254997,_0x24750b);},Window_StatusBase[_0x19616c(0x7f9)]['isExpGaugeDrawn']=function(){const _0xfe9812=_0x19616c;return VisuMZ[_0xfe9812(0x4f5)][_0xfe9812(0x568)]['UI'][_0xfe9812(0x2e2)];},Window_StatusBase[_0x19616c(0x7f9)][_0x19616c(0x550)]=function(_0xba145d,_0x4043fe,_0x418657){const _0x531b65=_0x19616c;if(!_0xba145d)return;if(!_0xba145d[_0x531b65(0x59d)]())return;const _0x73a1e8=0x80,_0xa79f1=_0xba145d['expRate']();let _0x2b0620=ColorManager[_0x531b65(0x52f)](),_0x44fc3c=ColorManager[_0x531b65(0x648)]();_0xa79f1>=0x1&&(_0x2b0620=ColorManager['maxLvGaugeColor1'](),_0x44fc3c=ColorManager[_0x531b65(0x474)]()),this[_0x531b65(0x43c)](_0x4043fe,_0x418657,_0x73a1e8,_0xa79f1,_0x2b0620,_0x44fc3c);},Window_EquipStatus[_0x19616c(0x7f9)][_0x19616c(0x521)]=function(){const _0x16748c=_0x19616c;let _0x525383=0x0;for(const _0x56f77c of VisuMZ['CoreEngine'][_0x16748c(0x568)]['Param'][_0x16748c(0x6f2)]){const _0x31acf3=this[_0x16748c(0x3df)](),_0x4b2eff=this['paramY'](_0x525383);this[_0x16748c(0x3a0)](_0x31acf3,_0x4b2eff,_0x56f77c),_0x525383++;}},Window_EquipStatus[_0x19616c(0x7f9)]['drawParamName']=function(_0x1bc29c,_0x6c98b8,_0x5d5858){const _0x3d9240=_0x19616c,_0x1658d4=this[_0x3d9240(0x36b)]()-this[_0x3d9240(0x3df)]()*0x2;this['drawParamText'](_0x1bc29c,_0x6c98b8,_0x1658d4,_0x5d5858,![]);},Window_EquipStatus[_0x19616c(0x7f9)][_0x19616c(0x933)]=function(_0x553783,_0x3346b0,_0x4d496d){const _0xcadfd5=_0x19616c,_0x5a5fbe=this['paramWidth']();this[_0xcadfd5(0x826)](),this[_0xcadfd5(0x4c1)](this['_actor']['paramValueByName'](_0x4d496d,!![]),_0x553783,_0x3346b0,_0x5a5fbe,_0xcadfd5(0x6e4));},Window_EquipStatus['prototype']['drawRightArrow']=function(_0x5daf2b,_0x41c26c){const _0x4b643f=_0x19616c,_0x2c24b7=this['rightArrowWidth']();this[_0x4b643f(0x8e7)](ColorManager[_0x4b643f(0x4d8)]());const _0x5a7502=VisuMZ['CoreEngine']['Settings']['UI']['ParamArrow'];this[_0x4b643f(0x4c1)](_0x5a7502,_0x5daf2b,_0x41c26c,_0x2c24b7,_0x4b643f(0x214));},Window_EquipStatus['prototype'][_0x19616c(0x564)]=function(_0x2d4112,_0x37eee3,_0x1cf89a){const _0x485d50=_0x19616c,_0x29f986=this[_0x485d50(0x7c9)](),_0x3f6c6f=this[_0x485d50(0x6bd)][_0x485d50(0x94c)](_0x1cf89a),_0x1bc69f=_0x3f6c6f-this[_0x485d50(0x94d)][_0x485d50(0x94c)](_0x1cf89a);this['changeTextColor'](ColorManager['paramchangeTextColor'](_0x1bc69f)),this[_0x485d50(0x4c1)](this[_0x485d50(0x6bd)]['paramValueByName'](_0x1cf89a,!![]),_0x2d4112,_0x37eee3,_0x29f986,_0x485d50(0x6e4));},VisuMZ[_0x19616c(0x4f5)]['Window_EquipItem_isEnabled']=Window_EquipItem[_0x19616c(0x7f9)][_0x19616c(0x576)],Window_EquipItem[_0x19616c(0x7f9)][_0x19616c(0x576)]=function(_0x520af6){const _0x4b9b0a=_0x19616c;return _0x520af6&&this[_0x4b9b0a(0x94d)]?this[_0x4b9b0a(0x94d)][_0x4b9b0a(0x73a)](_0x520af6):VisuMZ['CoreEngine']['Window_EquipItem_isEnabled'][_0x4b9b0a(0x4a5)](this,_0x520af6);},Window_StatusParams[_0x19616c(0x7f9)][_0x19616c(0x234)]=function(){const _0xc07a9c=_0x19616c;return VisuMZ[_0xc07a9c(0x4f5)][_0xc07a9c(0x568)]['Param'][_0xc07a9c(0x6f2)][_0xc07a9c(0x375)];},Window_StatusParams[_0x19616c(0x7f9)]['drawItem']=function(_0xe845ac){const _0x102045=_0x19616c,_0x36e68f=this[_0x102045(0x3b3)](_0xe845ac),_0x31cdc8=VisuMZ[_0x102045(0x4f5)][_0x102045(0x568)][_0x102045(0x477)][_0x102045(0x6f2)][_0xe845ac],_0x54799f=TextManager[_0x102045(0x5a2)](_0x31cdc8),_0x399db8=this[_0x102045(0x94d)][_0x102045(0x94c)](_0x31cdc8,!![]);this['drawParamText'](_0x36e68f['x'],_0x36e68f['y'],0xa0,_0x31cdc8,![]),this[_0x102045(0x826)](),this['drawText'](_0x399db8,_0x36e68f['x']+0xa0,_0x36e68f['y'],0x3c,_0x102045(0x6e4));};if(VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)]['KeyboardInput'][_0x19616c(0x58a)]){VisuMZ[_0x19616c(0x4f5)]['Settings'][_0x19616c(0x25a)][_0x19616c(0x3e6)]&&(Window_NameInput[_0x19616c(0x8ba)]=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','\x27','`','Z','X','C','V','B','N','M',',','.','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',':','~','z','x','c','v','b','n','m','\x22',';','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','<','>','[',']','-','_','/','\x20',_0x19616c(0x72c),'OK']);;VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x65e)]=Window_NameInput[_0x19616c(0x7f9)]['initialize'],Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x5cd)]=function(_0x17efbf){const _0x54ec4f=_0x19616c;this['_mode']=this[_0x54ec4f(0x6c2)](),VisuMZ['CoreEngine'][_0x54ec4f(0x65e)]['call'](this,_0x17efbf),this[_0x54ec4f(0x487)]===_0x54ec4f(0x6ee)?this[_0x54ec4f(0x8fc)](0x0):(Input[_0x54ec4f(0x772)](),this[_0x54ec4f(0x7cc)]());},Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x6c2)]=function(){const _0x168fb9=_0x19616c;if(Input[_0x168fb9(0x366)]())return'default';return VisuMZ[_0x168fb9(0x4f5)][_0x168fb9(0x568)]['KeyboardInput']['DefaultMode']||'keyboard';},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x284)]=Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x73d)],Window_NameInput['prototype']['processHandling']=function(){const _0x3d9f01=_0x19616c;if(!this[_0x3d9f01(0x69b)]())return;if(!this[_0x3d9f01(0x86d)])return;if(this[_0x3d9f01(0x487)]===_0x3d9f01(0x256)&&Input[_0x3d9f01(0x2ba)]())this[_0x3d9f01(0x7f8)](_0x3d9f01(0x6ee));else{if(Input['isSpecialCode'](_0x3d9f01(0x705)))Input[_0x3d9f01(0x772)](),this[_0x3d9f01(0x27c)]();else{if(Input[_0x3d9f01(0x3d3)](_0x3d9f01(0x5bd)))Input[_0x3d9f01(0x772)](),this[_0x3d9f01(0x487)]===_0x3d9f01(0x256)?this['switchModes']('default'):this[_0x3d9f01(0x7f8)](_0x3d9f01(0x256));else{if(this[_0x3d9f01(0x487)]==='keyboard')this[_0x3d9f01(0x220)]();else Input[_0x3d9f01(0x80c)](_0x3d9f01(0x2a2))?(Input[_0x3d9f01(0x772)](),this[_0x3d9f01(0x7f8)](_0x3d9f01(0x256))):VisuMZ[_0x3d9f01(0x4f5)][_0x3d9f01(0x284)]['call'](this);}}}},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x51d)]=Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x6de)],Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x6de)]=function(){const _0xa6b439=_0x19616c;if(!this[_0xa6b439(0x1ce)]())return;if(this[_0xa6b439(0x487)]==='keyboard'){if(TouchInput[_0xa6b439(0x3d3)]()&&this['isTouchedInsideFrame']())this[_0xa6b439(0x7f8)](_0xa6b439(0x6ee));else TouchInput[_0xa6b439(0x4ef)]()&&this[_0xa6b439(0x7f8)]('default');}else VisuMZ[_0xa6b439(0x4f5)][_0xa6b439(0x51d)][_0xa6b439(0x4a5)](this);},Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x220)]=function(){const _0x39950b=_0x19616c;if(Input['isSpecialCode'](_0x39950b(0x850)))Input[_0x39950b(0x772)](),this[_0x39950b(0x762)]();else{if(Input['_inputString']!==undefined){let _0x4bdc3b=Input['_inputString'],_0x5e0b30=_0x4bdc3b['length'];for(let _0x3907e3=0x0;_0x3907e3<_0x5e0b30;++_0x3907e3){this[_0x39950b(0x74c)]['add'](_0x4bdc3b[_0x3907e3])?SoundManager[_0x39950b(0x52d)]():SoundManager['playBuzzer']();}Input[_0x39950b(0x772)]();}}},Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x7f8)]=function(_0x2d291d){const _0x1d5da2=_0x19616c;let _0x4edf8b=this[_0x1d5da2(0x487)];this[_0x1d5da2(0x487)]=_0x2d291d,_0x4edf8b!==this['_mode']&&(this[_0x1d5da2(0x379)](),SoundManager[_0x1d5da2(0x52d)](),this[_0x1d5da2(0x487)]===_0x1d5da2(0x6ee)?this[_0x1d5da2(0x8fc)](0x0):this[_0x1d5da2(0x8fc)](-0x1));},VisuMZ['CoreEngine'][_0x19616c(0x2fe)]=Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x76c)],Window_NameInput['prototype'][_0x19616c(0x76c)]=function(_0x55dcf9){const _0x1562b7=_0x19616c;if(this['_mode']===_0x1562b7(0x256)&&!Input[_0x1562b7(0x547)]())return;if(Input[_0x1562b7(0x4af)]())return;VisuMZ[_0x1562b7(0x4f5)]['Window_NameInput_cursorDown']['call'](this,_0x55dcf9),this[_0x1562b7(0x7f8)](_0x1562b7(0x6ee));},VisuMZ['CoreEngine'][_0x19616c(0x73f)]=Window_NameInput['prototype'][_0x19616c(0x2bc)],Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x2bc)]=function(_0x26352c){const _0x2d1bad=_0x19616c;if(this[_0x2d1bad(0x487)]===_0x2d1bad(0x256)&&!Input[_0x2d1bad(0x547)]())return;if(Input['isNumpadPressed']())return;VisuMZ['CoreEngine'][_0x2d1bad(0x73f)][_0x2d1bad(0x4a5)](this,_0x26352c),this[_0x2d1bad(0x7f8)](_0x2d1bad(0x6ee));},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x907)]=Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x54b)],Window_NameInput[_0x19616c(0x7f9)]['cursorRight']=function(_0x5e3e75){const _0xce8a33=_0x19616c;if(this[_0xce8a33(0x487)]==='keyboard'&&!Input[_0xce8a33(0x547)]())return;if(Input[_0xce8a33(0x4af)]())return;VisuMZ['CoreEngine'][_0xce8a33(0x907)][_0xce8a33(0x4a5)](this,_0x5e3e75),this[_0xce8a33(0x7f8)](_0xce8a33(0x6ee));},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x97f)]=Window_NameInput[_0x19616c(0x7f9)]['cursorLeft'],Window_NameInput['prototype'][_0x19616c(0x948)]=function(_0x46eb79){const _0xbb39bb=_0x19616c;if(this[_0xbb39bb(0x487)]===_0xbb39bb(0x256)&&!Input['isArrowPressed']())return;if(Input['isNumpadPressed']())return;VisuMZ[_0xbb39bb(0x4f5)][_0xbb39bb(0x97f)][_0xbb39bb(0x4a5)](this,_0x46eb79),this[_0xbb39bb(0x7f8)](_0xbb39bb(0x6ee));},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x6ab)]=Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x7ea)],Window_NameInput[_0x19616c(0x7f9)]['cursorPagedown']=function(){const _0x23c5bf=_0x19616c;if(this[_0x23c5bf(0x487)]===_0x23c5bf(0x256))return;if(Input[_0x23c5bf(0x4af)]())return;VisuMZ[_0x23c5bf(0x4f5)][_0x23c5bf(0x6ab)][_0x23c5bf(0x4a5)](this),this[_0x23c5bf(0x7f8)](_0x23c5bf(0x6ee));},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x1cb)]=Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x60e)],Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x60e)]=function(){const _0x37ff04=_0x19616c;if(this[_0x37ff04(0x487)]===_0x37ff04(0x256))return;if(Input[_0x37ff04(0x4af)]())return;VisuMZ[_0x37ff04(0x4f5)][_0x37ff04(0x1cb)]['call'](this),this[_0x37ff04(0x7f8)](_0x37ff04(0x6ee));},VisuMZ['CoreEngine']['Window_NameInput_refresh']=Window_NameInput[_0x19616c(0x7f9)]['refresh'],Window_NameInput[_0x19616c(0x7f9)][_0x19616c(0x379)]=function(){const _0xe0419a=_0x19616c;if(this[_0xe0419a(0x487)]===_0xe0419a(0x256)){this[_0xe0419a(0x329)]['clear'](),this[_0xe0419a(0x68c)][_0xe0419a(0x772)](),this[_0xe0419a(0x826)]();let _0x460229=VisuMZ['CoreEngine'][_0xe0419a(0x568)][_0xe0419a(0x25a)][_0xe0419a(0x887)]['split']('\x0a'),_0x4b256c=_0x460229['length'],_0x42090a=(this[_0xe0419a(0x59e)]-_0x4b256c*this[_0xe0419a(0x1b0)]())/0x2;for(let _0x17360d=0x0;_0x17360d<_0x4b256c;++_0x17360d){let _0x2d91af=_0x460229[_0x17360d],_0x3061c8=this[_0xe0419a(0x66e)](_0x2d91af)['width'],_0x1aa206=Math[_0xe0419a(0x2f5)]((this[_0xe0419a(0x329)]['width']-_0x3061c8)/0x2);this[_0xe0419a(0x4eb)](_0x2d91af,_0x1aa206,_0x42090a),_0x42090a+=this[_0xe0419a(0x1b0)]();}}else VisuMZ[_0xe0419a(0x4f5)]['Window_NameInput_refresh']['call'](this);};};VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x3b5)]=Window_ShopSell['prototype'][_0x19616c(0x576)],Window_ShopSell[_0x19616c(0x7f9)][_0x19616c(0x576)]=function(_0x7ec080){const _0x444887=_0x19616c;return VisuMZ['CoreEngine'][_0x444887(0x568)][_0x444887(0x1fb)][_0x444887(0x556)]&&DataManager[_0x444887(0x258)](_0x7ec080)?![]:VisuMZ[_0x444887(0x4f5)][_0x444887(0x3b5)][_0x444887(0x4a5)](this,_0x7ec080);},Window_NumberInput[_0x19616c(0x7f9)][_0x19616c(0x8f5)]=function(){return![];};VisuMZ[_0x19616c(0x4f5)]['Settings']['KeyboardInput'][_0x19616c(0x582)]&&(VisuMZ[_0x19616c(0x4f5)]['Window_NumberInput_start']=Window_NumberInput['prototype'][_0x19616c(0x7a0)],Window_NumberInput[_0x19616c(0x7f9)][_0x19616c(0x7a0)]=function(){const _0x1f74e5=_0x19616c;VisuMZ[_0x1f74e5(0x4f5)]['Window_NumberInput_start'][_0x1f74e5(0x4a5)](this),this[_0x1f74e5(0x8fc)](this[_0x1f74e5(0x76a)]-0x1),Input[_0x1f74e5(0x772)]();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x603)]=Window_NumberInput[_0x19616c(0x7f9)]['processDigitChange'],Window_NumberInput['prototype'][_0x19616c(0x81c)]=function(){const _0x56eb3d=_0x19616c;if(!this[_0x56eb3d(0x1ce)]())return;if(Input['isNumpadPressed']())this[_0x56eb3d(0x2ae)]();else{if(Input['isSpecialCode'](_0x56eb3d(0x705)))this['processKeyboardBackspace']();else{if(Input[_0x56eb3d(0x65b)]===0x2e)this[_0x56eb3d(0x514)]();else{if(Input['_inputSpecialKeyCode']===0x24)this[_0x56eb3d(0x2c7)]();else Input['_inputSpecialKeyCode']===0x23?this[_0x56eb3d(0x598)]():VisuMZ[_0x56eb3d(0x4f5)][_0x56eb3d(0x603)][_0x56eb3d(0x4a5)](this);}}}},Window_NumberInput[_0x19616c(0x7f9)][_0x19616c(0x2d2)]=function(){const _0x12042e=_0x19616c;if(!this[_0x12042e(0x2c4)]())return;Input[_0x12042e(0x4af)]()?this[_0x12042e(0x2ae)]():Window_Selectable[_0x12042e(0x7f9)][_0x12042e(0x2d2)][_0x12042e(0x4a5)](this);},Window_NumberInput[_0x19616c(0x7f9)][_0x19616c(0x94f)]=function(){},Window_NumberInput[_0x19616c(0x7f9)][_0x19616c(0x2ae)]=function(){const _0xa98151=_0x19616c;if(String(this[_0xa98151(0x863)])[_0xa98151(0x375)]>=this[_0xa98151(0x76a)])return;const _0x46e589=Number(String(this['_number'])+Input[_0xa98151(0x5a3)]);if(isNaN(_0x46e589))return;this[_0xa98151(0x863)]=_0x46e589;const _0x2886fd='9'['repeat'](this[_0xa98151(0x76a)]);this['_number']=this['_number']['clamp'](0x0,_0x2886fd),Input[_0xa98151(0x772)](),this[_0xa98151(0x379)](),SoundManager[_0xa98151(0x7cf)](),this[_0xa98151(0x8fc)](this['_maxDigits']-0x1);},Window_NumberInput['prototype']['processKeyboardBackspace']=function(){const _0x54767a=_0x19616c;this['_number']=Number(String(this[_0x54767a(0x863)])[_0x54767a(0x5fa)](0x0,-0x1)),this['_number']=Math[_0x54767a(0x5c3)](0x0,this[_0x54767a(0x863)]),Input[_0x54767a(0x772)](),this[_0x54767a(0x379)](),SoundManager['playCursor'](),this[_0x54767a(0x8fc)](this[_0x54767a(0x76a)]-0x1);},Window_NumberInput[_0x19616c(0x7f9)][_0x19616c(0x514)]=function(){const _0x4384de=_0x19616c;this['_number']=Number(String(this[_0x4384de(0x863)])['substring'](0x1)),this[_0x4384de(0x863)]=Math[_0x4384de(0x5c3)](0x0,this[_0x4384de(0x863)]),Input['clear'](),this[_0x4384de(0x379)](),SoundManager['playCursor'](),this[_0x4384de(0x8fc)](this[_0x4384de(0x76a)]-0x1);},Window_NumberInput[_0x19616c(0x7f9)]['processKeyboardHome']=function(){const _0x63c561=_0x19616c;if(this[_0x63c561(0x32a)]()===0x0)return;Input[_0x63c561(0x772)](),this[_0x63c561(0x379)](),SoundManager[_0x63c561(0x7cf)](),this[_0x63c561(0x8fc)](0x0);},Window_NumberInput['prototype']['processKeyboardEnd']=function(){const _0x19c281=_0x19616c;if(this[_0x19c281(0x32a)]()===this[_0x19c281(0x76a)]-0x1)return;Input[_0x19c281(0x772)](),this['refresh'](),SoundManager[_0x19c281(0x7cf)](),this[_0x19c281(0x8fc)](this[_0x19c281(0x76a)]-0x1);});;VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x348)]=Window_MapName['prototype'][_0x19616c(0x379)],Window_MapName[_0x19616c(0x7f9)][_0x19616c(0x379)]=function(){const _0x41a4fd=_0x19616c;VisuMZ[_0x41a4fd(0x4f5)]['Settings'][_0x41a4fd(0x1fb)]['MapNameTextCode']?this[_0x41a4fd(0x7fc)]():VisuMZ[_0x41a4fd(0x4f5)]['Window_MapName_refresh']['call'](this);},Window_MapName[_0x19616c(0x7f9)][_0x19616c(0x7fc)]=function(){const _0x3551f2=_0x19616c;this['contents'][_0x3551f2(0x772)]();if($gameMap[_0x3551f2(0x36f)]()){const _0x229cd2=this['innerWidth'];this[_0x3551f2(0x93e)](0x0,0x0,_0x229cd2,this[_0x3551f2(0x1b0)]());const _0x24c590=this[_0x3551f2(0x66e)]($gameMap[_0x3551f2(0x36f)]())[_0x3551f2(0x3e0)];this[_0x3551f2(0x4eb)]($gameMap[_0x3551f2(0x36f)](),Math[_0x3551f2(0x2f5)]((_0x229cd2-_0x24c590)/0x2),0x0);}},Window_TitleCommand[_0x19616c(0x541)]=VisuMZ['CoreEngine'][_0x19616c(0x568)][_0x19616c(0x937)],Window_TitleCommand[_0x19616c(0x7f9)]['makeCommandList']=function(){const _0x4bddb6=_0x19616c;this[_0x4bddb6(0x810)]();},Window_TitleCommand['prototype']['makeCoreEngineCommandList']=function(){const _0x4e9f0e=_0x19616c;for(const _0x3ff492 of Window_TitleCommand[_0x4e9f0e(0x541)]){if(_0x3ff492[_0x4e9f0e(0x51c)][_0x4e9f0e(0x4a5)](this)){const _0x983761=_0x3ff492[_0x4e9f0e(0x2a6)];let _0x3e81fe=_0x3ff492[_0x4e9f0e(0x2c6)];if(['',_0x4e9f0e(0x89c)][_0x4e9f0e(0x8df)](_0x3e81fe))_0x3e81fe=_0x3ff492[_0x4e9f0e(0x46d)][_0x4e9f0e(0x4a5)](this);const _0x3a45e1=_0x3ff492[_0x4e9f0e(0x1e7)][_0x4e9f0e(0x4a5)](this),_0x5d88ae=_0x3ff492['ExtJS'][_0x4e9f0e(0x4a5)](this);this[_0x4e9f0e(0x501)](_0x3e81fe,_0x983761,_0x3a45e1,_0x5d88ae),this[_0x4e9f0e(0x63a)](_0x983761,_0x3ff492[_0x4e9f0e(0x3c2)][_0x4e9f0e(0x911)](this,_0x5d88ae));}}},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x2f0)]=Window_TitleCommand['prototype'][_0x19616c(0x311)],Window_TitleCommand[_0x19616c(0x7f9)][_0x19616c(0x311)]=function(){const _0x241f9f=_0x19616c;VisuMZ['CoreEngine'][_0x241f9f(0x2f0)][_0x241f9f(0x4a5)](this);if(!Window_TitleCommand[_0x241f9f(0x44b)])return;const _0x496a56=this['findSymbol'](Window_TitleCommand[_0x241f9f(0x44b)]),_0x3e2f0a=Math[_0x241f9f(0x2f5)](this[_0x241f9f(0x246)]()/0x2)-0x1;this['smoothSelect'](_0x496a56),this[_0x241f9f(0x1a5)]>0x1&&(this[_0x241f9f(0x1a5)]=0x1,this[_0x241f9f(0x320)]()),this[_0x241f9f(0x22c)](_0x496a56-_0x3e2f0a);},Window_GameEnd['_commandList']=VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)][_0x19616c(0x420)]['GameEnd'][_0x19616c(0x789)],Window_GameEnd['prototype'][_0x19616c(0x370)]=function(){const _0x5186f6=_0x19616c;this[_0x5186f6(0x810)]();},Window_GameEnd[_0x19616c(0x7f9)]['makeCoreEngineCommandList']=function(){const _0x42f820=_0x19616c;for(const _0x239c53 of Window_GameEnd[_0x42f820(0x541)]){if(_0x239c53[_0x42f820(0x51c)][_0x42f820(0x4a5)](this)){const _0x143ef3=_0x239c53[_0x42f820(0x2a6)];let _0x561c84=_0x239c53[_0x42f820(0x2c6)];if(['',_0x42f820(0x89c)][_0x42f820(0x8df)](_0x561c84))_0x561c84=_0x239c53[_0x42f820(0x46d)]['call'](this);const _0x49b59f=_0x239c53[_0x42f820(0x1e7)][_0x42f820(0x4a5)](this),_0x1d7a5f=_0x239c53[_0x42f820(0x88a)]['call'](this);this[_0x42f820(0x501)](_0x561c84,_0x143ef3,_0x49b59f,_0x1d7a5f),this[_0x42f820(0x63a)](_0x143ef3,_0x239c53[_0x42f820(0x3c2)]['bind'](this,_0x1d7a5f));}}};function Window_ButtonAssist(){const _0x5dba74=_0x19616c;this[_0x5dba74(0x5cd)](...arguments);}Window_ButtonAssist['prototype']=Object[_0x19616c(0x630)](Window_Base[_0x19616c(0x7f9)]),Window_ButtonAssist['prototype'][_0x19616c(0x597)]=Window_ButtonAssist,Window_ButtonAssist[_0x19616c(0x7f9)][_0x19616c(0x5cd)]=function(_0x38dcaa){const _0xd2bd2b=_0x19616c;this[_0xd2bd2b(0x360)]={},Window_Base[_0xd2bd2b(0x7f9)]['initialize'][_0xd2bd2b(0x4a5)](this,_0x38dcaa),this[_0xd2bd2b(0x76e)](VisuMZ[_0xd2bd2b(0x4f5)][_0xd2bd2b(0x568)][_0xd2bd2b(0x21d)]['BgType']||0x0),this[_0xd2bd2b(0x379)]();},Window_ButtonAssist['prototype']['lineHeight']=function(){const _0x4ece68=_0x19616c;return this['innerHeight']||Window_Base[_0x4ece68(0x7f9)][_0x4ece68(0x1b0)][_0x4ece68(0x4a5)](this);},Window_ButtonAssist[_0x19616c(0x7f9)][_0x19616c(0x95f)]=function(){const _0x30a579=_0x19616c;this['contents'][_0x30a579(0x6fd)]<=0x60&&(this[_0x30a579(0x329)][_0x30a579(0x6fd)]+=0x6);},Window_ButtonAssist[_0x19616c(0x7f9)]['makeFontSmaller']=function(){const _0x1d28a6=_0x19616c;this[_0x1d28a6(0x329)]['fontSize']>=0x18&&(this[_0x1d28a6(0x329)][_0x1d28a6(0x6fd)]-=0x6);},Window_ButtonAssist[_0x19616c(0x7f9)][_0x19616c(0x3ad)]=function(){const _0x2bfb9c=_0x19616c;Window_Base[_0x2bfb9c(0x7f9)][_0x2bfb9c(0x3ad)][_0x2bfb9c(0x4a5)](this),this[_0x2bfb9c(0x321)]();},Window_ButtonAssist[_0x19616c(0x7f9)][_0x19616c(0x244)]=function(){const _0x46401b=_0x19616c;this[_0x46401b(0x8cd)]=SceneManager[_0x46401b(0x38c)][_0x46401b(0x6a2)]()!==_0x46401b(0x254)?0x0:0x8;},Window_ButtonAssist['prototype'][_0x19616c(0x321)]=function(){const _0x31a6dc=_0x19616c,_0x1057ad=SceneManager['_scene'];for(let _0x51c3ad=0x1;_0x51c3ad<=0x5;_0x51c3ad++){if(this[_0x31a6dc(0x360)][_0x31a6dc(0x2ee)[_0x31a6dc(0x67e)](_0x51c3ad)]!==_0x1057ad[_0x31a6dc(0x5a9)[_0x31a6dc(0x67e)](_0x51c3ad)]())return this[_0x31a6dc(0x379)]();if(this['_data'][_0x31a6dc(0x3f2)[_0x31a6dc(0x67e)](_0x51c3ad)]!==_0x1057ad['buttonAssistText%1'['format'](_0x51c3ad)]())return this[_0x31a6dc(0x379)]();}},Window_ButtonAssist[_0x19616c(0x7f9)][_0x19616c(0x379)]=function(){const _0x99250d=_0x19616c;this[_0x99250d(0x329)][_0x99250d(0x772)]();for(let _0x534d39=0x1;_0x534d39<=0x5;_0x534d39++){this[_0x99250d(0x5ec)](_0x534d39);}},Window_ButtonAssist[_0x19616c(0x7f9)]['drawSegment']=function(_0x1166c8){const _0x51debb=_0x19616c,_0x2a7a2c=this['innerWidth']/0x5,_0x3d4a53=SceneManager['_scene'],_0x43e9cd=_0x3d4a53['buttonAssistKey%1'[_0x51debb(0x67e)](_0x1166c8)](),_0x109718=_0x3d4a53[_0x51debb(0x840)[_0x51debb(0x67e)](_0x1166c8)]();this['_data']['key%1'[_0x51debb(0x67e)](_0x1166c8)]=_0x43e9cd,this[_0x51debb(0x360)]['text%1'[_0x51debb(0x67e)](_0x1166c8)]=_0x109718;if(_0x43e9cd==='')return;if(_0x109718==='')return;const _0xf2e1aa=_0x3d4a53[_0x51debb(0x444)[_0x51debb(0x67e)](_0x1166c8)](),_0x588338=this[_0x51debb(0x3df)](),_0xe0fce0=_0x2a7a2c*(_0x1166c8-0x1)+_0x588338+_0xf2e1aa,_0x11caff=VisuMZ[_0x51debb(0x4f5)][_0x51debb(0x568)][_0x51debb(0x21d)]['TextFmt'];this[_0x51debb(0x4eb)](_0x11caff[_0x51debb(0x67e)](_0x43e9cd,_0x109718),_0xe0fce0,0x0,_0x2a7a2c-_0x588338*0x2);},VisuMZ[_0x19616c(0x4f5)]['Game_Interpreter_updateWaitMode']=Game_Interpreter[_0x19616c(0x7f9)]['updateWaitMode'],Game_Interpreter['prototype']['updateWaitMode']=function(){const _0x36c660=_0x19616c;if($gameTemp[_0x36c660(0x97e)]!==undefined)return VisuMZ['CoreEngine'][_0x36c660(0x417)]();return VisuMZ[_0x36c660(0x4f5)][_0x36c660(0x590)]['call'](this);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x417)]=function(){const _0x38f491=_0x19616c,_0xa82c34=$gameTemp[_0x38f491(0x97e)]||0x0;(_0xa82c34<0x0||_0xa82c34>0x64||TouchInput[_0x38f491(0x4ef)]()||Input[_0x38f491(0x3d3)](_0x38f491(0x52b)))&&($gameTemp[_0x38f491(0x97e)]=undefined,Input[_0x38f491(0x772)](),TouchInput[_0x38f491(0x772)]());const _0x4bad81=$gameScreen['picture'](_0xa82c34);return _0x4bad81&&(_0x4bad81['_x']=TouchInput['_x'],_0x4bad81['_y']=TouchInput['_y']),VisuMZ[_0x38f491(0x4f5)][_0x38f491(0x429)](),$gameTemp['_pictureCoordinatesMode']!==undefined;},VisuMZ[_0x19616c(0x4f5)]['updatePictureCoordinates']=function(){const _0x1cf5b6=_0x19616c,_0x5c858f=SceneManager['_scene'];if(!_0x5c858f)return;!_0x5c858f[_0x1cf5b6(0x6ec)]&&(SoundManager['playLoad'](),_0x5c858f[_0x1cf5b6(0x6ec)]=new Window_PictureCoordinates(),_0x5c858f[_0x1cf5b6(0x1b8)](_0x5c858f[_0x1cf5b6(0x6ec)])),$gameTemp[_0x1cf5b6(0x97e)]===undefined&&(SoundManager[_0x1cf5b6(0x882)](),_0x5c858f[_0x1cf5b6(0x3a1)](_0x5c858f['_pictureCoordinatesWindow']),_0x5c858f['_pictureCoordinatesWindow']=undefined);};function Window_PictureCoordinates(){const _0xc16d54=_0x19616c;this[_0xc16d54(0x5cd)](...arguments);}Window_PictureCoordinates['prototype']=Object[_0x19616c(0x630)](Window_Base[_0x19616c(0x7f9)]),Window_PictureCoordinates['prototype'][_0x19616c(0x597)]=Window_PictureCoordinates,Window_PictureCoordinates['prototype']['initialize']=function(){const _0x245e33=_0x19616c;this[_0x245e33(0x3f4)]='nah',this['_lastX']=_0x245e33(0x26f),this[_0x245e33(0x95c)]=_0x245e33(0x26f);const _0x31b831=this[_0x245e33(0x695)]();Window_Base['prototype'][_0x245e33(0x5cd)][_0x245e33(0x4a5)](this,_0x31b831),this[_0x245e33(0x76e)](0x2);},Window_PictureCoordinates[_0x19616c(0x7f9)][_0x19616c(0x695)]=function(){const _0x1fc453=_0x19616c;let _0x2f29ad=0x0,_0x33f6c2=Graphics[_0x1fc453(0x413)]-this[_0x1fc453(0x1b0)](),_0x4fc40d=Graphics[_0x1fc453(0x3e0)],_0x2e5110=this[_0x1fc453(0x1b0)]();return new Rectangle(_0x2f29ad,_0x33f6c2,_0x4fc40d,_0x2e5110);},Window_PictureCoordinates['prototype'][_0x19616c(0x244)]=function(){const _0x90462e=_0x19616c;this[_0x90462e(0x8cd)]=0x0;},Window_PictureCoordinates[_0x19616c(0x7f9)][_0x19616c(0x3ad)]=function(){const _0x1cd3cd=_0x19616c;Window_Base['prototype'][_0x1cd3cd(0x3ad)][_0x1cd3cd(0x4a5)](this),this[_0x1cd3cd(0x6eb)]();},Window_PictureCoordinates[_0x19616c(0x7f9)][_0x19616c(0x6eb)]=function(){const _0x5a54cb=_0x19616c;if(!this['needsUpdate']())return;this[_0x5a54cb(0x379)]();},Window_PictureCoordinates['prototype'][_0x19616c(0x878)]=function(){const _0x1748a5=_0x19616c,_0x4fea27=$gameTemp[_0x1748a5(0x97e)],_0x379334=$gameScreen[_0x1748a5(0x6fc)](_0x4fea27);return _0x379334?this[_0x1748a5(0x3f4)]!==_0x379334[_0x1748a5(0x31a)]||this[_0x1748a5(0x98d)]!==_0x379334['_x']||this[_0x1748a5(0x95c)]!==_0x379334['_y']:![];},Window_PictureCoordinates[_0x19616c(0x7f9)][_0x19616c(0x379)]=function(){const _0xaa513d=_0x19616c;this[_0xaa513d(0x329)]['clear']();const _0x5f4638=$gameTemp[_0xaa513d(0x97e)],_0x148933=$gameScreen[_0xaa513d(0x6fc)](_0x5f4638);if(!_0x148933)return;this[_0xaa513d(0x3f4)]=_0x148933[_0xaa513d(0x31a)],this[_0xaa513d(0x98d)]=_0x148933['_x'],this[_0xaa513d(0x95c)]=_0x148933['_y'];const _0x384f11=ColorManager['itemBackColor1']();this[_0xaa513d(0x329)]['fillRect'](0x0,0x0,this[_0xaa513d(0x8b2)],this[_0xaa513d(0x59e)],_0x384f11);const _0x3498ff=_0xaa513d(0x633)[_0xaa513d(0x67e)](_0x148933['_origin']===0x0?_0xaa513d(0x262):'Center'),_0x3c7018=_0xaa513d(0x6f7)[_0xaa513d(0x67e)](_0x148933['_x']),_0x1e7133=_0xaa513d(0x2bb)[_0xaa513d(0x67e)](_0x148933['_y']),_0x1ef062=_0xaa513d(0x4fe)[_0xaa513d(0x67e)](TextManager[_0xaa513d(0x726)]('cancel'));let _0x5df705=Math['floor'](this[_0xaa513d(0x8b2)]/0x4);this[_0xaa513d(0x4c1)](_0x3498ff,_0x5df705*0x0,0x0,_0x5df705),this[_0xaa513d(0x4c1)](_0x3c7018,_0x5df705*0x1,0x0,_0x5df705,_0xaa513d(0x214)),this['drawText'](_0x1e7133,_0x5df705*0x2,0x0,_0x5df705,_0xaa513d(0x214));const _0x126ae6=this[_0xaa513d(0x66e)](_0x1ef062)[_0xaa513d(0x3e0)],_0x5d9f47=this['innerWidth']-_0x126ae6;this['drawTextEx'](_0x1ef062,_0x5d9f47,0x0,_0x126ae6);};function Window_TextPopup(){const _0x398b57=_0x19616c;this[_0x398b57(0x5cd)](...arguments);}Window_TextPopup['prototype']=Object[_0x19616c(0x630)](Window_Base['prototype']),Window_TextPopup['prototype'][_0x19616c(0x597)]=Window_TextPopup,Window_TextPopup[_0x19616c(0x391)]={'framesPerChar':VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)][_0x19616c(0x8a1)][_0x19616c(0x702)]??1.5,'framesMin':VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x568)][_0x19616c(0x8a1)][_0x19616c(0x35b)]??0x5a,'framesMax':VisuMZ[_0x19616c(0x4f5)]['Settings']['Window'][_0x19616c(0x8fb)]??0x12c},Window_TextPopup[_0x19616c(0x7f9)][_0x19616c(0x5cd)]=function(){const _0x4d0e11=_0x19616c,_0x8f0b7d=new Rectangle(0x0,0x0,0x1,0x1);Window_Base[_0x4d0e11(0x7f9)]['initialize'][_0x4d0e11(0x4a5)](this,_0x8f0b7d),this['openness']=0x0,this[_0x4d0e11(0x941)]='',this[_0x4d0e11(0x4f7)]=[],this[_0x4d0e11(0x77c)]=0x0;},Window_TextPopup[_0x19616c(0x7f9)][_0x19616c(0x5a0)]=function(){return!![];},Window_TextPopup[_0x19616c(0x7f9)][_0x19616c(0x2e9)]=function(_0x3944ed){const _0x4f583c=_0x19616c;if(this[_0x4f583c(0x4f7)][this[_0x4f583c(0x4f7)][_0x4f583c(0x375)]-0x1]===_0x3944ed)return;this[_0x4f583c(0x4f7)][_0x4f583c(0x69f)](_0x3944ed),SceneManager[_0x4f583c(0x38c)]['addChild'](this);},Window_TextPopup['prototype'][_0x19616c(0x3ad)]=function(){const _0x101b9b=_0x19616c;Window_Base['prototype'][_0x101b9b(0x3ad)][_0x101b9b(0x4a5)](this),this[_0x101b9b(0x900)](),this['updateDuration']();},Window_TextPopup[_0x19616c(0x7f9)]['updateText']=function(){const _0xdac723=_0x19616c;if(this['_text']!=='')return;if(this[_0xdac723(0x4f7)]['length']<=0x0)return;if(!this[_0xdac723(0x67a)]())return;this['_text']=this[_0xdac723(0x4f7)][_0xdac723(0x68f)]();const _0x274733=Window_TextPopup[_0xdac723(0x391)],_0x415386=Math[_0xdac723(0x6d8)](this[_0xdac723(0x941)][_0xdac723(0x375)]*_0x274733[_0xdac723(0x89f)]);this['_timeDuration']=_0x415386[_0xdac723(0x4d4)](_0x274733[_0xdac723(0x7c7)],_0x274733[_0xdac723(0x3d4)]);const _0x46cfff=this[_0xdac723(0x66e)](this[_0xdac723(0x941)]);let _0x191820=_0x46cfff[_0xdac723(0x3e0)]+this[_0xdac723(0x3df)]()*0x2;_0x191820+=$gameSystem[_0xdac723(0x987)]()*0x2;let _0x253ac6=Math[_0xdac723(0x5c3)](_0x46cfff['height'],this[_0xdac723(0x1b0)]());_0x253ac6+=$gameSystem[_0xdac723(0x987)]()*0x2;const _0x1ab9cc=Math[_0xdac723(0x45c)]((Graphics[_0xdac723(0x3e0)]-_0x191820)/0x2),_0xe3f95d=Math['round']((Graphics[_0xdac723(0x413)]-_0x253ac6)/0x2),_0xdc6437=new Rectangle(_0x1ab9cc,_0xe3f95d,_0x191820,_0x253ac6);this[_0xdac723(0x920)](_0xdc6437['x'],_0xdc6437['y'],_0xdc6437[_0xdac723(0x3e0)],_0xdc6437['height']),this[_0xdac723(0x2f8)](),this[_0xdac723(0x379)](),this[_0xdac723(0x891)](),SceneManager[_0xdac723(0x38c)]['addChild'](this);},Window_TextPopup['prototype'][_0x19616c(0x379)]=function(){const _0x514e0d=_0x19616c,_0x18c8cf=this[_0x514e0d(0x44e)]();this[_0x514e0d(0x329)][_0x514e0d(0x772)](),this[_0x514e0d(0x4eb)](this[_0x514e0d(0x941)],_0x18c8cf['x'],_0x18c8cf['y'],_0x18c8cf[_0x514e0d(0x3e0)]);},Window_TextPopup[_0x19616c(0x7f9)]['updateDuration']=function(){const _0x4756d3=_0x19616c;if(this[_0x4756d3(0x6cc)]()||this['isClosing']())return;if(this['_timeDuration']<=0x0)return;this[_0x4756d3(0x77c)]--,this[_0x4756d3(0x77c)]<=0x0&&(this['close'](),this[_0x4756d3(0x941)]='');},VisuMZ['ShowDevTools']=function(_0x33f2fa){const _0x5c331e=_0x19616c;if(Utils['isOptionValid']('test')){var _0x1624fc=require(_0x5c331e(0x7db))[_0x5c331e(0x8a1)]['get']();SceneManager[_0x5c331e(0x71a)]();if(_0x33f2fa)setTimeout(_0x1624fc[_0x5c331e(0x316)][_0x5c331e(0x911)](_0x1624fc),0x190);}},VisuMZ[_0x19616c(0x376)]=function(_0x9a9a7e,_0x358cf0){const _0x4ea40e=_0x19616c;_0x358cf0=_0x358cf0[_0x4ea40e(0x319)]();var _0x43292e=1.70158,_0x38980b=0.7;switch(_0x358cf0){case _0x4ea40e(0x410):return _0x9a9a7e;case _0x4ea40e(0x7cb):return-0x1*Math[_0x4ea40e(0x34d)](_0x9a9a7e*(Math['PI']/0x2))+0x1;case _0x4ea40e(0x734):return Math[_0x4ea40e(0x757)](_0x9a9a7e*(Math['PI']/0x2));case'INOUTSINE':return-0.5*(Math[_0x4ea40e(0x34d)](Math['PI']*_0x9a9a7e)-0x1);case _0x4ea40e(0x972):return _0x9a9a7e*_0x9a9a7e;case _0x4ea40e(0x890):return _0x9a9a7e*(0x2-_0x9a9a7e);case _0x4ea40e(0x7e4):return _0x9a9a7e<0.5?0x2*_0x9a9a7e*_0x9a9a7e:-0x1+(0x4-0x2*_0x9a9a7e)*_0x9a9a7e;case _0x4ea40e(0x56c):return _0x9a9a7e*_0x9a9a7e*_0x9a9a7e;case'OUTCUBIC':var _0x22b5fd=_0x9a9a7e-0x1;return _0x22b5fd*_0x22b5fd*_0x22b5fd+0x1;case _0x4ea40e(0x722):return _0x9a9a7e<0.5?0x4*_0x9a9a7e*_0x9a9a7e*_0x9a9a7e:(_0x9a9a7e-0x1)*(0x2*_0x9a9a7e-0x2)*(0x2*_0x9a9a7e-0x2)+0x1;case'INQUART':return _0x9a9a7e*_0x9a9a7e*_0x9a9a7e*_0x9a9a7e;case'OUTQUART':var _0x22b5fd=_0x9a9a7e-0x1;return 0x1-_0x22b5fd*_0x22b5fd*_0x22b5fd*_0x22b5fd;case'INOUTQUART':var _0x22b5fd=_0x9a9a7e-0x1;return _0x9a9a7e<0.5?0x8*_0x9a9a7e*_0x9a9a7e*_0x9a9a7e*_0x9a9a7e:0x1-0x8*_0x22b5fd*_0x22b5fd*_0x22b5fd*_0x22b5fd;case'INQUINT':return _0x9a9a7e*_0x9a9a7e*_0x9a9a7e*_0x9a9a7e*_0x9a9a7e;case _0x4ea40e(0x700):var _0x22b5fd=_0x9a9a7e-0x1;return 0x1+_0x22b5fd*_0x22b5fd*_0x22b5fd*_0x22b5fd*_0x22b5fd;case'INOUTQUINT':var _0x22b5fd=_0x9a9a7e-0x1;return _0x9a9a7e<0.5?0x10*_0x9a9a7e*_0x9a9a7e*_0x9a9a7e*_0x9a9a7e*_0x9a9a7e:0x1+0x10*_0x22b5fd*_0x22b5fd*_0x22b5fd*_0x22b5fd*_0x22b5fd;case _0x4ea40e(0x823):if(_0x9a9a7e===0x0)return 0x0;return Math['pow'](0x2,0xa*(_0x9a9a7e-0x1));case _0x4ea40e(0x1cd):if(_0x9a9a7e===0x1)return 0x1;return-Math[_0x4ea40e(0x5d4)](0x2,-0xa*_0x9a9a7e)+0x1;case _0x4ea40e(0x440):if(_0x9a9a7e===0x0||_0x9a9a7e===0x1)return _0x9a9a7e;var _0xc2ef1e=_0x9a9a7e*0x2,_0x2d8f1d=_0xc2ef1e-0x1;if(_0xc2ef1e<0x1)return 0.5*Math[_0x4ea40e(0x5d4)](0x2,0xa*_0x2d8f1d);return 0.5*(-Math[_0x4ea40e(0x5d4)](0x2,-0xa*_0x2d8f1d)+0x2);case _0x4ea40e(0x902):var _0xc2ef1e=_0x9a9a7e/0x1;return-0x1*(Math[_0x4ea40e(0x4c0)](0x1-_0xc2ef1e*_0x9a9a7e)-0x1);case _0x4ea40e(0x799):var _0x22b5fd=_0x9a9a7e-0x1;return Math[_0x4ea40e(0x4c0)](0x1-_0x22b5fd*_0x22b5fd);case _0x4ea40e(0x282):var _0xc2ef1e=_0x9a9a7e*0x2,_0x2d8f1d=_0xc2ef1e-0x2;if(_0xc2ef1e<0x1)return-0.5*(Math[_0x4ea40e(0x4c0)](0x1-_0xc2ef1e*_0xc2ef1e)-0x1);return 0.5*(Math[_0x4ea40e(0x4c0)](0x1-_0x2d8f1d*_0x2d8f1d)+0x1);case _0x4ea40e(0x4ea):return _0x9a9a7e*_0x9a9a7e*((_0x43292e+0x1)*_0x9a9a7e-_0x43292e);case _0x4ea40e(0x1e8):var _0xc2ef1e=_0x9a9a7e/0x1-0x1;return _0xc2ef1e*_0xc2ef1e*((_0x43292e+0x1)*_0xc2ef1e+_0x43292e)+0x1;break;case _0x4ea40e(0x6fa):var _0xc2ef1e=_0x9a9a7e*0x2,_0x3842c4=_0xc2ef1e-0x2,_0x108ac4=_0x43292e*1.525;if(_0xc2ef1e<0x1)return 0.5*_0xc2ef1e*_0xc2ef1e*((_0x108ac4+0x1)*_0xc2ef1e-_0x108ac4);return 0.5*(_0x3842c4*_0x3842c4*((_0x108ac4+0x1)*_0x3842c4+_0x108ac4)+0x2);case _0x4ea40e(0x290):if(_0x9a9a7e===0x0||_0x9a9a7e===0x1)return _0x9a9a7e;var _0xc2ef1e=_0x9a9a7e/0x1,_0x2d8f1d=_0xc2ef1e-0x1,_0x5f15f2=0x1-_0x38980b,_0x108ac4=_0x5f15f2/(0x2*Math['PI'])*Math['asin'](0x1);return-(Math['pow'](0x2,0xa*_0x2d8f1d)*Math['sin']((_0x2d8f1d-_0x108ac4)*(0x2*Math['PI'])/_0x5f15f2));case _0x4ea40e(0x561):var _0x5f15f2=0x1-_0x38980b,_0xc2ef1e=_0x9a9a7e*0x2;if(_0x9a9a7e===0x0||_0x9a9a7e===0x1)return _0x9a9a7e;var _0x108ac4=_0x5f15f2/(0x2*Math['PI'])*Math['asin'](0x1);return Math[_0x4ea40e(0x5d4)](0x2,-0xa*_0xc2ef1e)*Math['sin']((_0xc2ef1e-_0x108ac4)*(0x2*Math['PI'])/_0x5f15f2)+0x1;case _0x4ea40e(0x74b):var _0x5f15f2=0x1-_0x38980b;if(_0x9a9a7e===0x0||_0x9a9a7e===0x1)return _0x9a9a7e;var _0xc2ef1e=_0x9a9a7e*0x2,_0x2d8f1d=_0xc2ef1e-0x1,_0x108ac4=_0x5f15f2/(0x2*Math['PI'])*Math[_0x4ea40e(0x581)](0x1);if(_0xc2ef1e<0x1)return-0.5*(Math[_0x4ea40e(0x5d4)](0x2,0xa*_0x2d8f1d)*Math[_0x4ea40e(0x757)]((_0x2d8f1d-_0x108ac4)*(0x2*Math['PI'])/_0x5f15f2));return Math[_0x4ea40e(0x5d4)](0x2,-0xa*_0x2d8f1d)*Math[_0x4ea40e(0x757)]((_0x2d8f1d-_0x108ac4)*(0x2*Math['PI'])/_0x5f15f2)*0.5+0x1;case _0x4ea40e(0x675):var _0xc2ef1e=_0x9a9a7e/0x1;if(_0xc2ef1e<0x1/2.75)return 7.5625*_0xc2ef1e*_0xc2ef1e;else{if(_0xc2ef1e<0x2/2.75){var _0x3842c4=_0xc2ef1e-1.5/2.75;return 7.5625*_0x3842c4*_0x3842c4+0.75;}else{if(_0xc2ef1e<2.5/2.75){var _0x3842c4=_0xc2ef1e-2.25/2.75;return 7.5625*_0x3842c4*_0x3842c4+0.9375;}else{var _0x3842c4=_0xc2ef1e-2.625/2.75;return 7.5625*_0x3842c4*_0x3842c4+0.984375;}}}case _0x4ea40e(0x61d):var _0xb9249f=0x1-VisuMZ[_0x4ea40e(0x376)](0x1-_0x9a9a7e,'outbounce');return _0xb9249f;case'INOUTBOUNCE':if(_0x9a9a7e<0.5)var _0xb9249f=VisuMZ[_0x4ea40e(0x376)](_0x9a9a7e*0x2,_0x4ea40e(0x885))*0.5;else var _0xb9249f=VisuMZ[_0x4ea40e(0x376)](_0x9a9a7e*0x2-0x1,'outbounce')*0.5+0.5;return _0xb9249f;default:return _0x9a9a7e;}},VisuMZ[_0x19616c(0x6a8)]=function(_0x225e6a){const _0x447144=_0x19616c;_0x225e6a=String(_0x225e6a)[_0x447144(0x319)]();const _0x268392=VisuMZ[_0x447144(0x4f5)][_0x447144(0x568)][_0x447144(0x477)];if(_0x225e6a===_0x447144(0x5ba))return _0x268392['IconParam0'];if(_0x225e6a==='MAXMP')return _0x268392[_0x447144(0x4b5)];if(_0x225e6a==='ATK')return _0x268392[_0x447144(0x205)];if(_0x225e6a==='DEF')return _0x268392[_0x447144(0x7fb)];if(_0x225e6a===_0x447144(0x763))return _0x268392[_0x447144(0x41a)];if(_0x225e6a===_0x447144(0x66f))return _0x268392[_0x447144(0x716)];if(_0x225e6a==='AGI')return _0x268392[_0x447144(0x40e)];if(_0x225e6a===_0x447144(0x655))return _0x268392[_0x447144(0x621)];if(_0x225e6a===_0x447144(0x279))return _0x268392[_0x447144(0x1f4)];if(_0x225e6a==='EVA')return _0x268392[_0x447144(0x82c)];if(_0x225e6a===_0x447144(0x986))return _0x268392['IconXParam2'];if(_0x225e6a==='CEV')return _0x268392[_0x447144(0x32e)];if(_0x225e6a===_0x447144(0x325))return _0x268392[_0x447144(0x4f3)];if(_0x225e6a===_0x447144(0x491))return _0x268392['IconXParam5'];if(_0x225e6a===_0x447144(0x4aa))return _0x268392[_0x447144(0x856)];if(_0x225e6a===_0x447144(0x740))return _0x268392[_0x447144(0x7ba)];if(_0x225e6a===_0x447144(0x6cf))return _0x268392['IconXParam8'];if(_0x225e6a==='TRG')return _0x268392[_0x447144(0x24d)];if(_0x225e6a==='TGR')return _0x268392[_0x447144(0x6ce)];if(_0x225e6a===_0x447144(0x24c))return _0x268392['IconSParam1'];if(_0x225e6a===_0x447144(0x36e))return _0x268392[_0x447144(0x79b)];if(_0x225e6a===_0x447144(0x96a))return _0x268392[_0x447144(0x2c1)];if(_0x225e6a===_0x447144(0x752))return _0x268392[_0x447144(0x237)];if(_0x225e6a===_0x447144(0x28b))return _0x268392[_0x447144(0x8d1)];if(_0x225e6a===_0x447144(0x938))return _0x268392[_0x447144(0x904)];if(_0x225e6a===_0x447144(0x545))return _0x268392[_0x447144(0x30b)];if(_0x225e6a==='FDR')return _0x268392[_0x447144(0x387)];if(_0x225e6a===_0x447144(0x270))return _0x268392[_0x447144(0x3e8)];if(VisuMZ[_0x447144(0x4f5)]['CustomParamIcons'][_0x225e6a])return VisuMZ['CoreEngine']['CustomParamIcons'][_0x225e6a]||0x0;return 0x0;},VisuMZ[_0x19616c(0x8da)]=function(_0x2b60bf,_0x4ed2d2,_0xf4d2fa){const _0x2e2db1=_0x19616c;if(_0xf4d2fa===undefined&&_0x2b60bf%0x1===0x0)return _0x2b60bf;if(_0xf4d2fa!==undefined&&['MAXHP','MAXMP',_0x2e2db1(0x7a6),_0x2e2db1(0x8a0),'MAT','MDF','AGI','LUK'][_0x2e2db1(0x8df)](String(_0xf4d2fa)['toUpperCase']()[_0x2e2db1(0x862)]()))return _0x2b60bf;_0x4ed2d2=_0x4ed2d2||0x0;if(VisuMZ[_0x2e2db1(0x4f5)][_0x2e2db1(0x3c6)][_0xf4d2fa])return VisuMZ['CoreEngine'][_0x2e2db1(0x96b)][_0xf4d2fa]===_0x2e2db1(0x7a9)?_0x2b60bf:String((_0x2b60bf*0x64)[_0x2e2db1(0x92a)](_0x4ed2d2))+'%';return String((_0x2b60bf*0x64)[_0x2e2db1(0x92a)](_0x4ed2d2))+'%';},VisuMZ[_0x19616c(0x713)]=function(_0x4a1132){const _0x12b696=_0x19616c;_0x4a1132=String(_0x4a1132);if(!_0x4a1132)return _0x4a1132;if(typeof _0x4a1132!==_0x12b696(0x7f7))return _0x4a1132;const _0x51c6eb=VisuMZ[_0x12b696(0x4f5)][_0x12b696(0x568)][_0x12b696(0x1fb)][_0x12b696(0x802)]||_0x12b696(0x76f),_0x304e2e={'maximumFractionDigits':0x6};_0x4a1132=_0x4a1132[_0x12b696(0x233)](/\[(.*?)\]/g,(_0xc329d1,_0x499331)=>{const _0x23d8c2=_0x12b696;return VisuMZ[_0x23d8c2(0x899)](_0x499331,'[',']');}),_0x4a1132=_0x4a1132[_0x12b696(0x233)](/<(.*?)>/g,(_0x4064b6,_0x31caab)=>{return VisuMZ['PreserveNumbers'](_0x31caab,'<','>');}),_0x4a1132=_0x4a1132[_0x12b696(0x233)](/\{\{(.*?)\}\}/g,(_0x1bd1e2,_0x4f934d)=>{const _0x14363c=_0x12b696;return VisuMZ[_0x14363c(0x899)](_0x4f934d,'','');}),_0x4a1132=_0x4a1132[_0x12b696(0x233)](/(\d+\.?\d*)/g,(_0x20d252,_0x5ed222)=>{const _0x952551=_0x12b696;let _0x40c3ba=_0x5ed222;if(_0x40c3ba[0x0]==='0')return _0x40c3ba;if(_0x40c3ba[_0x40c3ba[_0x952551(0x375)]-0x1]==='.')return Number(_0x40c3ba)[_0x952551(0x548)](_0x51c6eb,_0x304e2e)+'.';else return _0x40c3ba[_0x40c3ba[_0x952551(0x375)]-0x1]===','?Number(_0x40c3ba)[_0x952551(0x548)](_0x51c6eb,_0x304e2e)+',':Number(_0x40c3ba)[_0x952551(0x548)](_0x51c6eb,_0x304e2e);});let _0x1d8b0d=0x3;while(_0x1d8b0d--){_0x4a1132=VisuMZ[_0x12b696(0x589)](_0x4a1132);}return _0x4a1132;},VisuMZ[_0x19616c(0x899)]=function(_0x3233c1,_0x58ea8e,_0x465639){const _0x2d9ab9=_0x19616c;return _0x3233c1=_0x3233c1['replace'](/(\d)/gi,(_0x35af96,_0x25979d)=>_0x2d9ab9(0x3cc)[_0x2d9ab9(0x67e)](Number(_0x25979d))),_0x2d9ab9(0x5e0)['format'](_0x3233c1,_0x58ea8e,_0x465639);},VisuMZ[_0x19616c(0x589)]=function(_0x1f2a4d){return _0x1f2a4d=_0x1f2a4d['replace'](/PRESERVCONVERSION\((\d+)\)/gi,(_0x222b23,_0x36f1de)=>Number(parseInt(_0x36f1de))),_0x1f2a4d;},VisuMZ['openURL']=function(_0xbcf1e8){const _0x947e3b=_0x19616c;SoundManager['playOk']();if(!Utils[_0x947e3b(0x8ae)]()){const _0x54e180=window['open'](_0xbcf1e8,'_blank');}else{const _0x39726b=process['platform']==_0x947e3b(0x4ce)?_0x947e3b(0x891):process['platform']==_0x947e3b(0x2a0)?_0x947e3b(0x7a0):_0x947e3b(0x7ac);require(_0x947e3b(0x7f5))['exec'](_0x39726b+'\x20'+_0xbcf1e8);}},VisuMZ[_0x19616c(0x7d1)]=function(_0x1b5f03,_0x5dc905){const _0x24d911=_0x19616c;if(!_0x1b5f03)return'';const _0x11fc68=_0x1b5f03[_0x24d911(0x2cb)]||_0x1b5f03['id'];let _0x38b216='';return _0x1b5f03['initialLevel']!==undefined&&_0x1b5f03[_0x24d911(0x374)]!==undefined&&(_0x38b216='Actor-%1-%2'[_0x24d911(0x67e)](_0x11fc68,_0x5dc905)),_0x1b5f03['expParams']!==undefined&&_0x1b5f03['learnings']!==undefined&&(_0x38b216=_0x24d911(0x791)[_0x24d911(0x67e)](_0x11fc68,_0x5dc905)),_0x1b5f03[_0x24d911(0x426)]!==undefined&&_0x1b5f03['requiredWtypeId1']!==undefined&&(_0x38b216=_0x24d911(0x57f)[_0x24d911(0x67e)](_0x11fc68,_0x5dc905)),_0x1b5f03[_0x24d911(0x292)]!==undefined&&_0x1b5f03[_0x24d911(0x26c)]!==undefined&&(_0x38b216=_0x24d911(0x5f8)[_0x24d911(0x67e)](_0x11fc68,_0x5dc905)),_0x1b5f03[_0x24d911(0x5a4)]!==undefined&&_0x1b5f03['etypeId']===0x1&&(_0x38b216=_0x24d911(0x8dd)[_0x24d911(0x67e)](_0x11fc68,_0x5dc905)),_0x1b5f03[_0x24d911(0x7ad)]!==undefined&&_0x1b5f03[_0x24d911(0x3b8)]>0x1&&(_0x38b216=_0x24d911(0x2fb)['format'](_0x11fc68,_0x5dc905)),_0x1b5f03[_0x24d911(0x6e0)]!==undefined&&_0x1b5f03['battlerHue']!==undefined&&(_0x38b216=_0x24d911(0x493)[_0x24d911(0x67e)](_0x11fc68,_0x5dc905)),_0x1b5f03[_0x24d911(0x6c3)]!==undefined&&_0x1b5f03['maxTurns']!==undefined&&(_0x38b216='State-%1-%2'[_0x24d911(0x67e)](_0x11fc68,_0x5dc905)),_0x38b216;},Window_Base['prototype'][_0x19616c(0x93f)]=function(_0x2d9a6c,_0xc15304){const _0x4d46be=_0x19616c,_0x2fb97c=ImageManager[_0x4d46be(0x671)]||0x20,_0xa4072=ImageManager['standardIconHeight']||0x20;if(_0xc15304[_0x4d46be(0x7de)]){const _0x1ff7aa=_0x2fb97c-ImageManager[_0x4d46be(0x7d6)],_0x88a89=_0xa4072-ImageManager['iconHeight'];let _0x280a3c=0x2,_0x15a164=0x2;this[_0x4d46be(0x1b0)]()!==0x24&&(_0x15a164=Math['floor']((this['lineHeight']()-_0xa4072)/0x2));const _0x5d883a=_0xc15304['x']+Math[_0x4d46be(0x2f5)](_0x1ff7aa/0x2)+_0x280a3c,_0x1cadfb=_0xc15304['y']+Math[_0x4d46be(0x2f5)](_0x88a89/0x2)+_0x15a164;this[_0x4d46be(0x5fd)](_0x2d9a6c,_0x5d883a,_0x1cadfb);}_0xc15304['x']+=_0x2fb97c+0x4;},Window_StatusBase[_0x19616c(0x7f9)][_0x19616c(0x253)]=function(_0x50eafd,_0x311ad6,_0x436d71,_0x285931){const _0xc52c6=_0x19616c;_0x285931=_0x285931||0x90;const _0x18e155=ImageManager[_0xc52c6(0x671)]||0x20,_0x297df1=ImageManager[_0xc52c6(0x612)]||0x20,_0x4ae4da=_0x18e155-ImageManager[_0xc52c6(0x7d6)],_0x16127d=_0x297df1-ImageManager['iconHeight'],_0x43a1e6=_0x18e155,_0x473863=_0x50eafd[_0xc52c6(0x730)]()[_0xc52c6(0x5fa)](0x0,Math[_0xc52c6(0x2f5)](_0x285931/_0x43a1e6));let _0x5b22eb=_0x311ad6+Math[_0xc52c6(0x6d8)](_0x4ae4da/0x2),_0xf25224=_0x436d71+Math[_0xc52c6(0x6d8)](_0x16127d/0x2);for(const _0xd8e8a4 of _0x473863){this[_0xc52c6(0x5fd)](_0xd8e8a4,_0x5b22eb,_0xf25224),_0x5b22eb+=_0x43a1e6;}},Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x3a9)]=function(){return this['_anchor'];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x4e7)]=Game_Picture['prototype'][_0x19616c(0x4c5)],Game_Picture[_0x19616c(0x7f9)]['initBasic']=function(){const _0x46a77d=_0x19616c;VisuMZ[_0x46a77d(0x4f5)]['Game_Picture_initBasic'][_0x46a77d(0x4a5)](this),this[_0x46a77d(0x998)]={'x':0x0,'y':0x0},this['_targetAnchor']={'x':0x0,'y':0x0};},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x5c1)]=Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x445)],Game_Picture['prototype']['updateMove']=function(){const _0x22f864=_0x19616c;this[_0x22f864(0x536)]();const _0x5d59c6=this['_duration'];VisuMZ[_0x22f864(0x4f5)][_0x22f864(0x5c1)][_0x22f864(0x4a5)](this),_0x5d59c6>0x0&&this['_duration']<=0x0&&(this['_x']=this[_0x22f864(0x433)],this['_y']=this[_0x22f864(0x330)],this[_0x22f864(0x7a5)]=this[_0x22f864(0x257)],this[_0x22f864(0x87e)]=this[_0x22f864(0x97a)],this['_opacity']=this['_targetOpacity'],this[_0x22f864(0x998)]&&(this['_anchor']['x']=this[_0x22f864(0x4d7)]['x'],this['_anchor']['y']=this[_0x22f864(0x4d7)]['y']));},VisuMZ[_0x19616c(0x4f5)]['Game_Picture_show']=Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x6f8)],Game_Picture['prototype'][_0x19616c(0x6f8)]=function(_0x4e8f38,_0x439373,_0x31e82c,_0x34309b,_0x1e6f9b,_0x3997f7,_0x18cb93,_0x1c92fc){const _0x12ad23=_0x19616c;VisuMZ[_0x12ad23(0x4f5)]['Game_Picture_show'][_0x12ad23(0x4a5)](this,_0x4e8f38,_0x439373,_0x31e82c,_0x34309b,_0x1e6f9b,_0x3997f7,_0x18cb93,_0x1c92fc),this[_0x12ad23(0x1f6)]([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x439373]||{'x':0x0,'y':0x0});},VisuMZ['CoreEngine'][_0x19616c(0x89a)]=Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x920)],Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x920)]=function(_0x2d1560,_0x117622,_0x51bbaf,_0x3d2565,_0x49a35b,_0x2c86ef,_0xfcaeaf,_0x137c0b,_0x53c490){const _0x58ffa3=_0x19616c;VisuMZ[_0x58ffa3(0x4f5)][_0x58ffa3(0x89a)]['call'](this,_0x2d1560,_0x117622,_0x51bbaf,_0x3d2565,_0x49a35b,_0x2c86ef,_0xfcaeaf,_0x137c0b,_0x53c490),this[_0x58ffa3(0x33d)]([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x2d1560]||{'x':0x0,'y':0x0});},Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x536)]=function(){const _0x2e8c55=_0x19616c;this[_0x2e8c55(0x317)]>0x0&&(this['_anchor']['x']=this[_0x2e8c55(0x35e)](this[_0x2e8c55(0x998)]['x'],this[_0x2e8c55(0x4d7)]['x']),this[_0x2e8c55(0x998)]['y']=this['applyEasing'](this[_0x2e8c55(0x998)]['y'],this[_0x2e8c55(0x4d7)]['y']));},Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x1f6)]=function(_0x4aa42b){const _0x59c0aa=_0x19616c;this[_0x59c0aa(0x998)]=_0x4aa42b,this[_0x59c0aa(0x4d7)]=JsonEx[_0x59c0aa(0x1e9)](this[_0x59c0aa(0x998)]);},Game_Picture[_0x19616c(0x7f9)][_0x19616c(0x33d)]=function(_0x4846ed){const _0x56ddb3=_0x19616c;this[_0x56ddb3(0x4d7)]=_0x4846ed;},VisuMZ['CoreEngine'][_0x19616c(0x656)]=Sprite_Picture[_0x19616c(0x7f9)][_0x19616c(0x505)],Sprite_Picture[_0x19616c(0x7f9)][_0x19616c(0x505)]=function(){const _0x22a8bb=_0x19616c,_0x2df03a=this['picture']();!_0x2df03a[_0x22a8bb(0x3a9)]()?VisuMZ['CoreEngine']['Sprite_Picture_updateOrigin'][_0x22a8bb(0x4a5)](this):(this[_0x22a8bb(0x3a9)]['x']=_0x2df03a['anchor']()['x'],this[_0x22a8bb(0x3a9)]['y']=_0x2df03a[_0x22a8bb(0x3a9)]()['y']);},Game_Action[_0x19616c(0x7f9)][_0x19616c(0x731)]=function(_0x123d1c){const _0x1d7e6f=_0x19616c;if(_0x123d1c){const _0x59cf5b=_0x123d1c['skillId'];if(_0x59cf5b===0x1&&this[_0x1d7e6f(0x386)]()[_0x1d7e6f(0x3ff)]()!==0x1)this[_0x1d7e6f(0x7eb)]();else _0x59cf5b===0x2&&this[_0x1d7e6f(0x386)]()[_0x1d7e6f(0x46c)]()!==0x2?this[_0x1d7e6f(0x6b1)]():this[_0x1d7e6f(0x37f)](_0x59cf5b);}else this['clear']();},Game_Actor[_0x19616c(0x7f9)][_0x19616c(0x7bd)]=function(){const _0x526730=_0x19616c;return this['skills']()[_0x526730(0x1b7)](_0x184477=>this['canUse'](_0x184477)&&this['skillTypes']()['includes'](_0x184477[_0x526730(0x426)]));},Window_Base['prototype'][_0x19616c(0x596)]=function(){const _0x387bdb=_0x19616c;this[_0x387bdb(0x2dd)]=new Sprite(),this[_0x387bdb(0x2dd)][_0x387bdb(0x807)]=new Bitmap(0x0,0x0),this['_dimmerSprite']['x']=0x0,this['addChildToBack'](this[_0x387bdb(0x2dd)]);},Window_Base[_0x19616c(0x7f9)][_0x19616c(0x1e5)]=function(){const _0x3e0098=_0x19616c;if(this[_0x3e0098(0x2dd)]){const _0x5424fe=this[_0x3e0098(0x2dd)][_0x3e0098(0x807)],_0x17eefa=this[_0x3e0098(0x3e0)],_0x45fc3d=this[_0x3e0098(0x413)],_0x398272=this[_0x3e0098(0x8cd)],_0xb9e1ed=ColorManager[_0x3e0098(0x385)](),_0x88b5fe=ColorManager[_0x3e0098(0x2f1)]();_0x5424fe['resize'](_0x17eefa,_0x45fc3d),_0x5424fe['gradientFillRect'](0x0,0x0,_0x17eefa,_0x398272,_0x88b5fe,_0xb9e1ed,!![]),_0x5424fe['fillRect'](0x0,_0x398272,_0x17eefa,_0x45fc3d-_0x398272*0x2,_0xb9e1ed),_0x5424fe[_0x3e0098(0x3f0)](0x0,_0x45fc3d-_0x398272,_0x17eefa,_0x398272,_0xb9e1ed,_0x88b5fe,!![]),this[_0x3e0098(0x2dd)][_0x3e0098(0x38d)](0x0,0x0,_0x17eefa,_0x45fc3d);}},Game_Actor[_0x19616c(0x7f9)][_0x19616c(0x79d)]=function(){const _0x2e289f=_0x19616c;for(let _0x3c074f=0x0;_0x3c074f<this[_0x2e289f(0x8e0)]();_0x3c074f++){const _0x1a553e=this[_0x2e289f(0x742)]();let _0x2b7127=Number[_0x2e289f(0x4ba)];this[_0x2e289f(0x532)](_0x3c074f,_0x1a553e[0x0]);for(const _0x587f94 of _0x1a553e){const _0x4280e6=_0x587f94[_0x2e289f(0x635)]();_0x4280e6>_0x2b7127&&(_0x2b7127=_0x4280e6,this['setAction'](_0x3c074f,_0x587f94));}}this[_0x2e289f(0x674)]('waiting');},Window_BattleItem[_0x19616c(0x7f9)][_0x19616c(0x576)]=function(_0xc63a07){const _0x5162ac=_0x19616c;return BattleManager[_0x5162ac(0x7c6)]()?BattleManager[_0x5162ac(0x7c6)]()[_0x5162ac(0x7e6)](_0xc63a07):Window_ItemList[_0x5162ac(0x7f9)][_0x5162ac(0x576)][_0x5162ac(0x4a5)](this,_0xc63a07);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x3a3)]=Scene_Map['prototype'][_0x19616c(0x469)],Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x469)]=function(){const _0x2859ce=_0x19616c;VisuMZ[_0x2859ce(0x4f5)][_0x2859ce(0x3a3)][_0x2859ce(0x4a5)](this);const _0x45eecc=this['_spriteset'][_0x2859ce(0x7ec)];if(_0x45eecc)this[_0x2859ce(0x1b8)](_0x45eecc);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x82f)]=Scene_Battle[_0x19616c(0x7f9)][_0x19616c(0x469)],Scene_Battle[_0x19616c(0x7f9)][_0x19616c(0x469)]=function(){const _0x1e0199=_0x19616c;VisuMZ[_0x1e0199(0x4f5)]['Scene_Battle_createSpritesetFix']['call'](this);const _0x5424be=this[_0x1e0199(0x4f0)]['_timerSprite'];if(_0x5424be)this[_0x1e0199(0x1b8)](_0x5424be);},Sprite_Actor[_0x19616c(0x7f9)][_0x19616c(0x3ad)]=function(){const _0x7ff7b7=_0x19616c;Sprite_Battler[_0x7ff7b7(0x7f9)][_0x7ff7b7(0x3ad)][_0x7ff7b7(0x4a5)](this),this[_0x7ff7b7(0x72d)]();if(this['_actor'])this[_0x7ff7b7(0x784)]();else this[_0x7ff7b7(0x20a)]!==''&&(this[_0x7ff7b7(0x20a)]='');},Window['prototype'][_0x19616c(0x416)]=function(){const _0x55baa5=_0x19616c,_0x1f1b71=this[_0x55baa5(0x418)],_0x25be25=this[_0x55baa5(0x1d1)],_0x17a7ab=0x18,_0xfd540c=_0x17a7ab/0x2,_0xdff511=0x60+_0x17a7ab,_0x450d22=0x0+_0x17a7ab;this[_0x55baa5(0x606)][_0x55baa5(0x807)]=this['_windowskin'],this['_downArrowSprite']['anchor']['x']=0.5,this['_downArrowSprite'][_0x55baa5(0x3a9)]['y']=0.5,this[_0x55baa5(0x606)][_0x55baa5(0x38d)](_0xdff511+_0xfd540c,_0x450d22+_0xfd540c+_0x17a7ab,_0x17a7ab,_0xfd540c),this[_0x55baa5(0x606)][_0x55baa5(0x920)](Math['round'](_0x1f1b71/0x2),Math[_0x55baa5(0x45c)](_0x25be25-_0xfd540c)),this[_0x55baa5(0x21f)][_0x55baa5(0x807)]=this['_windowskin'],this[_0x55baa5(0x21f)][_0x55baa5(0x3a9)]['x']=0.5,this[_0x55baa5(0x21f)][_0x55baa5(0x3a9)]['y']=0.5,this['_upArrowSprite'][_0x55baa5(0x38d)](_0xdff511+_0xfd540c,_0x450d22,_0x17a7ab,_0xfd540c),this[_0x55baa5(0x21f)][_0x55baa5(0x920)](Math['round'](_0x1f1b71/0x2),Math[_0x55baa5(0x45c)](_0xfd540c));},Window[_0x19616c(0x7f9)][_0x19616c(0x4c2)]=function(){const _0x306d9e=_0x19616c,_0x4b4888=0x90,_0x5b252b=0x60,_0x548298=0x18;this[_0x306d9e(0x3cf)][_0x306d9e(0x807)]=this[_0x306d9e(0x6e5)],this[_0x306d9e(0x3cf)][_0x306d9e(0x3a9)]['x']=0.5,this[_0x306d9e(0x3cf)]['anchor']['y']=0x1,this[_0x306d9e(0x3cf)][_0x306d9e(0x920)](Math[_0x306d9e(0x45c)](this[_0x306d9e(0x418)]/0x2),this['_height']),this[_0x306d9e(0x3cf)][_0x306d9e(0x38d)](_0x4b4888,_0x5b252b,_0x548298,_0x548298),this[_0x306d9e(0x3cf)]['alpha']=0xff;},Window[_0x19616c(0x7f9)][_0x19616c(0x28f)]=function(){const _0x3f97cb=_0x19616c,_0x510d58=this[_0x3f97cb(0x489)][_0x3f97cb(0x5d9)][_0x3f97cb(0x85d)](new Point(0x0,0x0)),_0x13236e=this[_0x3f97cb(0x489)]['filterArea'];_0x13236e['x']=_0x510d58['x']+this[_0x3f97cb(0x51b)]['x'],_0x13236e['y']=_0x510d58['y']+this[_0x3f97cb(0x51b)]['y'],_0x13236e[_0x3f97cb(0x3e0)]=Math[_0x3f97cb(0x6d8)](this[_0x3f97cb(0x8b2)]*this[_0x3f97cb(0x294)]['x']),_0x13236e[_0x3f97cb(0x413)]=Math[_0x3f97cb(0x6d8)](this[_0x3f97cb(0x59e)]*this['scale']['y']);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x824)]=Window['prototype'][_0x19616c(0x7ae)],Window[_0x19616c(0x7f9)]['_refreshBack']=function(){const _0x541db3=_0x19616c,_0x38bb6f=VisuMZ['CoreEngine'][_0x541db3(0x568)][_0x541db3(0x8a1)][_0x541db3(0x7d4)]??!![];if(!_0x38bb6f)return VisuMZ[_0x541db3(0x4f5)][_0x541db3(0x824)][_0x541db3(0x4a5)](this);const _0x315216=this[_0x541db3(0x1c9)],_0x432f40=Math[_0x541db3(0x5c3)](0x0,this[_0x541db3(0x418)]-_0x315216*0x2),_0x561558=Math[_0x541db3(0x5c3)](0x0,this[_0x541db3(0x1d1)]-_0x315216*0x2),_0x177ffc=this[_0x541db3(0x4c8)],_0x470663=_0x177ffc[_0x541db3(0x4db)][0x0];_0x177ffc[_0x541db3(0x807)]=this['_windowskin'],_0x177ffc[_0x541db3(0x38d)](0x0,0x0,0x60,0x60),_0x177ffc[_0x541db3(0x920)](_0x315216,_0x315216),_0x177ffc[_0x541db3(0x294)]['x']=_0x432f40/0x60,_0x177ffc[_0x541db3(0x294)]['y']=_0x561558/0x60,_0x470663['bitmap']=this[_0x541db3(0x6e5)],_0x470663['setFrame'](0x0,0x60,0x60,0x60),_0x470663['move'](0x0,0x0,_0x432f40,_0x561558),_0x470663[_0x541db3(0x294)]['x']=0x1/_0x177ffc[_0x541db3(0x294)]['x'],_0x470663[_0x541db3(0x294)]['y']=0x1/_0x177ffc['scale']['y'],_0x177ffc[_0x541db3(0x1d9)](this[_0x541db3(0x927)]);},Game_Temp['prototype'][_0x19616c(0x637)]=function(){const _0x2e7ac6=_0x19616c;this[_0x2e7ac6(0x4f9)]=[],this[_0x2e7ac6(0x55b)]=[],this['_pointAnimationQueue']=[],this[_0x2e7ac6(0x509)]=[];},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x91e)]=Scene_Base[_0x19616c(0x7f9)]['terminate'],Scene_Base[_0x19616c(0x7f9)][_0x19616c(0x2d3)]=function(){const _0x274085=_0x19616c;if($gameTemp)$gameTemp[_0x274085(0x637)]();VisuMZ[_0x274085(0x4f5)][_0x274085(0x91e)][_0x274085(0x4a5)](this);},Bitmap[_0x19616c(0x7f9)][_0x19616c(0x24e)]=function(_0x2aef65){const _0x2d685b=_0x19616c,_0x695bbe=this[_0x2d685b(0x3dc)];_0x695bbe[_0x2d685b(0x278)](),_0x695bbe[_0x2d685b(0x75e)]=this[_0x2d685b(0x74f)]();const _0xf033d2=_0x695bbe[_0x2d685b(0x678)](_0x2aef65)[_0x2d685b(0x3e0)];return _0x695bbe[_0x2d685b(0x1d5)](),_0xf033d2;},Window_Message[_0x19616c(0x7f9)][_0x19616c(0x2a8)]=function(_0x478ced){const _0x26b5ae=_0x19616c;return this['useFontWidthFix']()?this['contents'][_0x26b5ae(0x24e)](_0x478ced):Window_Base[_0x26b5ae(0x7f9)]['textWidth']['call'](this,_0x478ced);},Window_Message[_0x19616c(0x7f9)][_0x19616c(0x455)]=function(){const _0x877993=_0x19616c;return VisuMZ[_0x877993(0x4f5)]['Settings'][_0x877993(0x1fb)][_0x877993(0x351)]??!![];},VisuMZ[_0x19616c(0x4f5)]['Game_Action_numRepeats']=Game_Action[_0x19616c(0x7f9)][_0x19616c(0x3f8)],Game_Action[_0x19616c(0x7f9)][_0x19616c(0x3f8)]=function(){const _0x1cec7e=_0x19616c;return this[_0x1cec7e(0x908)]()?VisuMZ['CoreEngine'][_0x1cec7e(0x525)]['call'](this):0x0;},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x308)]=Game_Action['prototype'][_0x19616c(0x7eb)],Game_Action['prototype'][_0x19616c(0x7eb)]=function(){const _0x42ad=_0x19616c;if(this['subject']()&&this[_0x42ad(0x386)]()[_0x42ad(0x72e)]())VisuMZ[_0x42ad(0x4f5)]['Game_Action_setAttack'][_0x42ad(0x4a5)](this);else BattleManager[_0x42ad(0x45b)]?VisuMZ[_0x42ad(0x4f5)][_0x42ad(0x308)][_0x42ad(0x4a5)](this):this[_0x42ad(0x772)]();},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x25c)]=BattleManager['invokeCounterAttack'],BattleManager['invokeCounterAttack']=function(_0x179e84,_0x3d6c81){const _0x258789=_0x19616c;this['_bypassCanCounterCheck']=!![],VisuMZ[_0x258789(0x4f5)][_0x258789(0x25c)]['call'](this,_0x179e84,_0x3d6c81),this[_0x258789(0x45b)]=undefined;},Sprite_Name[_0x19616c(0x7f9)][_0x19616c(0x3d5)]=function(){return 0x24;},Sprite_Name['prototype']['redraw']=function(){const _0x2febd2=_0x19616c,_0x4b5b1b=this[_0x2febd2(0x3e9)](),_0xed15b2=this[_0x2febd2(0x75a)](),_0x53a2d4=this[_0x2febd2(0x3d5)]();this[_0x2febd2(0x83f)](),this[_0x2febd2(0x807)][_0x2febd2(0x772)](),this[_0x2febd2(0x807)][_0x2febd2(0x305)](_0x4b5b1b,0x4,0x0,_0xed15b2-0xa,_0x53a2d4,_0x2febd2(0x953));},Bitmap[_0x19616c(0x7f9)][_0x19616c(0x305)]=function(_0x2a2e01,_0x2d4db4,_0xc54929,_0x1d519e,_0x4de61a,_0x3bbc55){const _0x96cf90=_0x19616c,_0x5e3715=this[_0x96cf90(0x3dc)],_0x4c80ef=_0x5e3715[_0x96cf90(0x70d)];_0x1d519e=_0x1d519e||0xffffffff;let _0x9fd55=_0x2d4db4,_0x561e9b=Math[_0x96cf90(0x45c)](_0xc54929+0x18/0x2+this[_0x96cf90(0x6fd)]*0.35);_0x3bbc55===_0x96cf90(0x214)&&(_0x9fd55+=_0x1d519e/0x2),_0x3bbc55==='right'&&(_0x9fd55+=_0x1d519e),_0x5e3715['save'](),_0x5e3715[_0x96cf90(0x75e)]=this[_0x96cf90(0x74f)](),_0x5e3715[_0x96cf90(0x29a)]=_0x3bbc55,_0x5e3715[_0x96cf90(0x40c)]='alphabetic',_0x5e3715[_0x96cf90(0x70d)]=0x1,this[_0x96cf90(0x3b1)](_0x2a2e01,_0x9fd55,_0x561e9b,_0x1d519e),_0x5e3715[_0x96cf90(0x70d)]=_0x4c80ef,this[_0x96cf90(0x914)](_0x2a2e01,_0x9fd55,_0x561e9b,_0x1d519e),_0x5e3715[_0x96cf90(0x1d5)](),this[_0x96cf90(0x5e1)][_0x96cf90(0x3ad)]();},VisuMZ[_0x19616c(0x4f5)]['BattleManager_checkSubstitute']=BattleManager['checkSubstitute'],BattleManager[_0x19616c(0x85a)]=function(_0x391c3e){const _0x48e0ce=_0x19616c;if(this[_0x48e0ce(0x5cf)]&&this[_0x48e0ce(0x5cf)][_0x48e0ce(0x59d)]()===_0x391c3e[_0x48e0ce(0x59d)]())return![];return VisuMZ[_0x48e0ce(0x4f5)]['BattleManager_checkSubstitute'][_0x48e0ce(0x4a5)](this,_0x391c3e);},BattleManager['endAction']=function(){const _0x572c83=_0x19616c;if(this[_0x572c83(0x5cf)])this['_logWindow'][_0x572c83(0x872)](this[_0x572c83(0x5cf)]);this['_phase']=_0x572c83(0x8ec),this[_0x572c83(0x5cf)]&&this[_0x572c83(0x5cf)][_0x572c83(0x8e0)]()===0x0&&(this[_0x572c83(0x228)](this[_0x572c83(0x5cf)]),this['_subject']=null);},Bitmap['prototype'][_0x19616c(0x1a4)]=function(){const _0x20f44e=_0x19616c;this['_image']=new Image(),this['_image']['onload']=this['_onLoad'][_0x20f44e(0x911)](this),this['_image'][_0x20f44e(0x434)]=this['_onError'][_0x20f44e(0x911)](this),this['_destroyCanvas'](),this[_0x20f44e(0x497)]='loading',Utils[_0x20f44e(0x5bf)]()?this[_0x20f44e(0x4d5)]():(this['_image'][_0x20f44e(0x7a1)]=this[_0x20f44e(0x2cd)],![]&&this[_0x20f44e(0x790)][_0x20f44e(0x3e0)]>0x0&&(this[_0x20f44e(0x790)]['onload']=null,this[_0x20f44e(0x2c8)]()));},Scene_Skill[_0x19616c(0x7f9)][_0x19616c(0x5f9)]=function(){const _0x2212bd=_0x19616c;Scene_MenuBase[_0x2212bd(0x7f9)]['onActorChange'][_0x2212bd(0x4a5)](this),this[_0x2212bd(0x25e)](),this[_0x2212bd(0x928)][_0x2212bd(0x7e5)](),this[_0x2212bd(0x928)][_0x2212bd(0x7cc)](),this[_0x2212bd(0x841)][_0x2212bd(0x5e9)]();},Scene_Skill[_0x19616c(0x7f9)]['arePageButtonsEnabled']=function(){const _0x5941a0=_0x19616c;return this[_0x5941a0(0x841)]&&this[_0x5941a0(0x841)][_0x5941a0(0x86d)];},Game_Map[_0x19616c(0x7f9)][_0x19616c(0x1ea)]=function(_0xdb7dcd,_0x4bceb8,_0x21d0c6){const _0x2b84ab=_0x19616c,_0x3d1998=this[_0x2b84ab(0x645)](),_0x56bc5d=this['allTiles'](_0xdb7dcd,_0x4bceb8);for(const _0xf2a0b5 of _0x56bc5d){const _0x460d0d=_0x3d1998[_0xf2a0b5];if(_0x460d0d===undefined||_0x460d0d===null){if($gameTemp[_0x2b84ab(0x24a)]()&&!DataManager[_0x2b84ab(0x787)]()){let _0x9ad759=_0x2b84ab(0x89d)+'\x0a';_0x9ad759+=_0x2b84ab(0x88f)+'\x0a',_0x9ad759+=_0x2b84ab(0x26a);if(this['showIncompleteTilesetError']())alert(_0x9ad759),SceneManager[_0x2b84ab(0x8bf)]();else{if(!this['_displayedPassageError'])console['log'](_0x9ad759);this[_0x2b84ab(0x362)]=!![];}}}if((_0x460d0d&0x10)!==0x0)continue;if((_0x460d0d&_0x21d0c6)===0x0)return!![];if((_0x460d0d&_0x21d0c6)===_0x21d0c6)return![];}return![];},Game_Map[_0x19616c(0x7f9)][_0x19616c(0x451)]=function(){const _0x2c4ef8=_0x19616c;if(Imported[_0x2c4ef8(0x6ae)])return!![];if(Imported['VisuMZ_4_UniqueTileEffects'])return!![];return![];},Sprite_Animation[_0x19616c(0x7f9)]['saveViewport']=function(_0x1eec90){const _0x34513a=_0x19616c;!this['_originalViewport']&&(this[_0x34513a(0x6d9)]=_0x1eec90['gl']['getParameter'](_0x1eec90['gl']['VIEWPORT']));},VisuMZ['CoreEngine'][_0x19616c(0x202)]=Scene_Map[_0x19616c(0x7f9)][_0x19616c(0x478)],Scene_Map[_0x19616c(0x7f9)]['shouldAutosave']=function(){const _0x5065f6=_0x19616c,_0x275557=SceneManager[_0x5065f6(0x776)][_0x5065f6(0x3e9)];if([_0x5065f6(0x8e6),_0x5065f6(0x690),_0x5065f6(0x985),'Scene_SingleLoadTransition'][_0x5065f6(0x8df)](_0x275557))return![];return VisuMZ[_0x5065f6(0x4f5)][_0x5065f6(0x202)]['call'](this);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x40f)]=Window_SkillList['prototype'][_0x19616c(0x8df)],Window_SkillList[_0x19616c(0x7f9)]['includes']=function(_0x5b0bcb){const _0x35d616=_0x19616c;if(this[_0x35d616(0x83a)]<=0x0)return![];return VisuMZ[_0x35d616(0x4f5)]['Window_SkillList_includes']['call'](this,_0x5b0bcb);},VisuMZ[_0x19616c(0x4f5)][_0x19616c(0x61a)]=Game_Battler[_0x19616c(0x7f9)][_0x19616c(0x3b4)],Game_Battler[_0x19616c(0x7f9)][_0x19616c(0x3b4)]=function(_0x176d61){const _0x44eddb=_0x19616c;VisuMZ[_0x44eddb(0x4f5)]['Game_Battler_initTpbChargeTime'][_0x44eddb(0x4a5)](this,_0x176d61),isNaN(this[_0x44eddb(0x50d)])&&(VisuMZ[_0x44eddb(0x4f5)]['Game_Battler_initTpbChargeTime'][_0x44eddb(0x4a5)](this,_0x176d61),isNaN(this['_tpbChargeTime'])&&(this[_0x44eddb(0x50d)]=0x0));},Game_Battler['prototype']['updateTpbChargeTime']=function(){const _0x5ec060=_0x19616c;this['_tpbState']===_0x5ec060(0x719)&&(this[_0x5ec060(0x50d)]+=this[_0x5ec060(0x523)](),isNaN(this[_0x5ec060(0x50d)])&&(this['_tpbChargeTime']=this[_0x5ec060(0x523)](),isNaN(this[_0x5ec060(0x50d)])&&(this[_0x5ec060(0x50d)]=0x0)),this['_tpbChargeTime']>=0x1&&(this['_tpbChargeTime']=0x1,this['onTpbCharged']()));};