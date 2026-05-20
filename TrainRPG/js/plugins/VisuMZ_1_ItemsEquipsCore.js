//=============================================================================
// VisuStella MZ - Items & Equips Core
// VisuMZ_1_ItemsEquipsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ItemsEquipsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemsEquipsCore = VisuMZ.ItemsEquipsCore || {};
VisuMZ.ItemsEquipsCore.version = 1.61;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.61] [ItemsEquipsCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Items_and_Equips_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Items & Equips Core makes improvements to the RPG Maker MZ item and
 * equipment dedicated scenes (including the shop) and how they're handled.
 * From more item categories, better parameter control, rulings, and more, game
 * devs are able to take control over key aspects of their game's items.
 *
 * Features include all (but not limited to) the following:
 *
 * * Modifying the appearances to the Item Scene, Equip Scene, and Shop Scene.
 * * Categorizing items in unique and multiple categories.
 * * Item Scene and Shop Scene will now display detailed information on items.
 * * NEW! marker can be displayed over recently acquired items in-game.
 * * Equipment notetags to adjust parameters past the editor limitations.
 * * Equipment Rulings to adjust what slot types can and can't be unequipped
 *   and/or optimized.
 * * Equipment Type Handling offers more control over equipment loadouts.
 * * Items sold in shops can be hidden/shown based on Switches.
 * * Items sold in shops can have varying prices adjusted by notetags.
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
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Equipment Type Handling
 *
 * - Characters will no longer have one universal equipment slot setting.
 * Classes can have different equipment type loadouts, made possible through
 * the usage of notetags. Also, equipment types of matching names would be
 * treated as the same type, where previously, they would be different types.
 * This means if you have two "Accessory" slots, be it in the form of notetags
 * or through the Database > Types tab, they can both equip the same type of
 * accessories.
 *
 * - The Change Equip event command is now updated to reflect this new change.
 * When processing an equip change, the slot changed will go to the first
 * empty slot of matching type. If all of the actor's matching slot types are
 * equipped, then the equip will replace the last slot available.
 *
 * ---
 *
 * Shop Status Window
 *
 * - The Status Window found in the Shop Scene was originally barren and did
 * not display much information at all. This is changed through this plugin's
 * new features. While the contents of the Shop Status Window can be customized
 * through the Plugin Parameters, it is a change that cannot be reversed and
 * for the better since it gives players the much needed information revolving
 * around the game's items.
 *
 * ---
 *
 * Core Engine Compatibility: Modern Controls
 *
 * - If the VisuStella Core Engine is added to your game with Modern Controls
 * enabled, then the Item Menu Scene, Equip Menu Scene, and Shop Menu Scene's
 * controls will be changed a bit.
 *
 * - The Item Menu Scene will automatically have the Item List Window active,
 * with using the Left/Right (for single column) or Page Up/Page Down (for
 * multi-columns) to navigate between the Item Categories. Similar will occur
 * when trying to sell items in the Shop Menu Scene.
 *
 * - The Equip Menu Scene will automatically have the Equip Slots Window active
 * and only activate the command window upon moving up to it.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 * 
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * Changing the "Damage Multiplier" or "Healing Multiplier" vocabulary for the
 * Item and Equip Core's Shop Status Window is not done with the Item and Equip
 * Core's Plugin Parameters if you have the Battle Core installed.
 * 
 * Instead, go to Battle Core's Plugin Parameters, Damage Settings, Damage
 * Styles, and adjust the style's version of the "Damage Multiplier" or
 * "Healing Multiplier" text instead.
 * 
 * Why does this work this way? Because not all damage styles work off
 * "Multipliers" so in order for it to convey the proper message to the player,
 * each damage style has its own vocabulary to be more accurate.
 * 
 * In case you forget about that, when you visit the Item and Equip Core's
 * plugin parameters for these, it should also remind you in the parameter's
 * description on where to change it.
 * 
 * ---
 *
 * VisuMZ_2_WeaponSwapSystem
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
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
 * === General ===
 * 
 * These notetags affect the Items, Weapons, and Armors on a general scale.
 *
 * ---
 *
 * <Max: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the maximum quantity that can be held for this item.
 * - Replace 'x' with a number value to determine the maximum amount.
 *
 * ---
 *
 * <Color: x>
 * <Color: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor, Skill Notetags
 * - Determines the color of the object inside the in-game menus.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <Category: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace 'x' with a category name to mark this item as.
 *
 * ---
 *
 * <Categories>
 *  x
 *  x
 * </Categories>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace each 'x' with a category name to mark this item as.
 *
 * ---
 * 
 * <Conserve: x%>
 * 
 * - Used for: Item
 * - Gives the item a percent chance when used to not consume the item.
 * - Replace 'x' with a number representing the percent chance to successfully
 *   conserve the item.
 * - If an item cannot be consumed, conserve chance will be 100% regardless.
 * 
 * ---
 * 
 * <ID Sort Priority: x>
 * 
 * - Used for: Item, Weapon, and Armor Notetags
 * - Used for Scene_Item, Scene_Equip, Scene_Battle, and Scene_Shop's sell
 *   option (only when selling).
 * - Changes sorting priority by ID for item, weapon, or armor to 'x'. 
 *   - Default priority level is '50'.
 * - Items, weapons, and armors with higher priority values will be sorted
 *   higher up on the list while lower values will be lower on the list.
 * 
 * ---
 *
 * === Item Accessibility Notetags ===
 *
 * The following notetags allow you to choose when items can/cannot be used
 * based on switches.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, item will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, item will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Item Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if an item can be accessible by code.
 *
 * ---
 *
 * <JS Item Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Item Enable>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on JavaScript code.
 * - If the actor this is disabled for is the only party member, it will not be
 *   visible in the item list unless the VisuStella Battle Core is installed.
 *   - If the VisuStella Battle Core is installed, then all battle scope items
 *     will be visible even if they're disabled.
 * - Replace 'code' to determine the type enabled status of the item.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   item will be enabled or not.
 * - The 'user' variable refers to the user with the item.
 * - The 'item' variable refers to the item being checked.
 * - All other item conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === Equipment Notetags ===
 *
 * The following notetags provide equipment-related effects from deciding what
 * equip slots can be given to classes to the base parameter changes asigned
 * to weapons and armors.
 *
 * ---
 *
 * <Equip Slots>
 *  slotName
 *  slotName
 *  slotName
 * </Equip Slots>
 *
 * - Used for: Class Notetags
 * - Changes the equipment slot loadout for any actor who is that class.
 * - Replace 'slotName' with an Equipment Type name from Database > Types.
 *   This is case-sensitive.
 * - Insert or remove as many "slotName" equipment types as needed.
 *
 * ---
 *
 * <param: +x>
 * <param: -x>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes the base parameter value for the equip item.
 * - Replace 'param' with any of the following: 'MaxHP', 'MaxMP', 'ATK', 'DEF',
 *   'MAT', 'MDF', 'AGI', or 'LUK' to change that specific parameter's value.
 *   - These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * - Replace 'x' with a number value to set the parameter value to.
 * - This allows you to bypass the Database Editor's number limitations.
 *
 * ---
 * 
 * <Equip Copy Limit: x>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Sets a maximum number of copies that the actor can wear of this equipment.
 * - Replace 'x' with a number value to determine the copy limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: Actors can only equip one copy of the "One-of-a-Kind Ring"
 *   on at any time despite having empty accessory slots because the ring has a
 *   <Equip Copy Limit: 1> notetag.
 * 
 * ---
 * 
 * <Equip Weapon Type Limit: x>
 * 
 * - Used for: Weapon
 * - This weapon cannot be equipped with other weapons of the same type once
 *   the limited amount has been reached.
 * - Replace 'x' with a number value to determine the weapon type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: A dualwielding warrior who can only equip one sword and a
 *   dagger but never two swords or two daggers because the swords and daggers
 *   all have the <Equip Weapon Type Limit: 1> notetags on them.
 * 
 * ---
 * 
 * <Equip Armor Type Limit: x>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped with other armors of the same type once the
 *   limited amount has been reached.
 * - Replace 'x' with a number value to determine the armor type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: People cannot equip more than two glove accessories on at a
 *   time because the glove is a "Glove" armor-type and each glove item has the
 *   <Equip Armor Type Limit: 2> notetags on them.
 * 
 * ---
 * 
 * <Party Artifact>
 * <Troop Artifact>
 * 
 * <Stackable Party Artifact>
 * <Stackable Troop Artifact>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped at all. However, by simply being in the
 *   party's inventory, its parameter bonuses and traits will be applied
 *   globally throughout the whole party or troop (depending on the notetag).
 * - Add both notetags to affect both groups.
 * - The normal versions of the notetag is only applied once regardless of the
 *   number of copies are found in the party's inventory.
 * - The stackable versions of the notetag will have the bonuses and traits
 *   stacked multiple times relative to the number of copies found in the
 *   party's inventory.
 * - This item will NOT be added during the setup phase for Battle Tests.
 *   - If you want to add the item, do it manually.
 * 
 * ---
 * 
 * <Equip For Class Only: x>
 * <Equip For Classes Only: x, x, x>
 * <Equip For Class Only: name>
 * <Equip For Classes Only: name, name, name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - This piece of equipment can only be worn by members with 'x' as the main
 *   class. If there are multiple classes listed, at least one of them need to
 *   be the actor's main class.
 * - Replace 'x' with a number representing the ID of the class required.
 * - For the 'name' variant, replace 'name' with the name of the required class
 *   the actor needs to have in order to equip this object.
 * 
 * ---
 * 
 * <Equip Requirements>
 *  requirement
 *  requirement
 *  requirement
 * </Equip Requirements>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Defines a requirement(s) for the actor to meet in order for the equip item
 *   to be equippable.
 * - Failure to meet these requirements will cause the equipment to unequip
 *   automatically.
 *   - Keep in mind that in some cases, this will not happen immediately.
 *     Things like switches will require the actor to meet its cache clear
 *     in order to trigger the automatic unequip.
 *   - Some ways to trigger a cache clear would be to change the actor's HP/MP,
 *     or adding and then removing a state for the actor (preferrably an unused
 *     state that has no real effect).
 * - Replace 'requirement' with one of the settings bellow:
 * - Add multiple 'requirement' lines for more requirements.
 * 
 *   Requirements:
 *
 *   param > x
 *   param >= x
 *   param === x
 *   param <= x
 *   param < x
 *   - Replace 'param' with 'level', 'maxhp', 'maxmp', 'atk', 'def', 'mat',
 *     'mdf', 'agi', or 'luk'.
 *   - This will make the piece of equipment require the actor's base parameter
 *     to be greater than (>), greater than or equal to (>=), equal to (===),
 *     less than or equal to (<=), or less than (<).
 *   - This is NOT the value for the total parameter, only the base parameter.
 *   - The base parameter is calculated by the user's class parameter value and
 *     any bonuses received through permanent stat increases.
 *
 *   learned skill: x
 *   learned skill: name
 *   - This will make the piece of equipment require the actor to have learned
 *     skill 'x'. 
 *   - If 'name' is used, priority will be given to the skill with the highest
 *     ID in the database.
 *   - The actor needs to have LEARNED the skill. This means that if you have
 *     added a skill to the actor's kit through a trait, it will not count.
 *
 *   switch: x
 *   - This will require switch X to be on.
 *   - If it isn't, the piece of equipment cannot be worn.
 *   - Insert multiple of these to add more switches that are are required to
 *     be on.
 * 
 *   ***NOTE 1***
 *   There is no "class: x" for these equip requirements. Instead, use the
 *   <Equip For Class Only: x> notetags.
 * 
 *   ***NOTE 2***
 *   For those wondering where "unique only" is, that does not exist in this
 *   plugin. Instead, use the <Equip Copy Limit: x> notetag listed above.
 * 
 *   Example A:
 * 
 *     <Equip Requirements>
 *     level >= 20
 *     </Equip Requirements>
 * 
 *     - Requires the user to be at least level 20 in order to equip.
 * 
 *   Example B:
 * 
 *     <Equip Requirements>
 *     atk >= 50
 *     def <= 50
 *     </Equip Requirements>
 *     - Requires the user have at least 50 base ATK to equip.
 *     - Requires the user to be under 50 base DEF to equip.
 * 
 * ---
 * 
 * <Added EType: x>
 * <Added ETypes: x, x, x>
 * 
 * - Used for: Armor Notetags
 * - This is for armors only and does NOT work with weapons!
 * - Allows a piece of armor to belong to multiple ETypes. This means a glove
 *   can be equipped as "Armgear" or as an "Accessory" if you so choose.
 * - Replace 'x' with a number representing the ID of the EType you wish to add
 *   to the list of ETypes.
 *   - Insert multiple 'x' entries to add more than one EType ID.
 * 
 * ---
 * 
 * <Cursed>
 * 
 * - Used for: Weapon, Armor Notetags
 * - If this weapon or armor is equipped, it cannot manually be removed by the
 *   player until it is purified.
 * - To remove it, it must be done by event commands, script calls, or through
 *   the Purify-related Plugin Commands provided by this plugin.
 * - Once purified, the weapon or armor will become unequipped unless it has a
 *   purify transformation.
 *   - If the newly transformed weapon/armor is equippable, it will remain in
 *     the actor's equipment slots.
 * - If you are using VisuMZ_2_WeaponSwapSystem, weapons cannot become cursed
 *   in order to allow free weapon swapping. Weaponry will not be cursed
 *   if VisuMZ_2_WeaponSwapSystem is installed.
 * 
 * ---
 * 
 * <Purify Transform: id>
 * <Purify Transform: name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - If this notetag is present on a <Cursed> weapon or armor, then upon the
 *   actor receiving purification, the weapon or armor will transform into a
 *   different item.
 * - Replace 'id' with a number representing the transformed weapon/armor's ID.
 * - Replace 'name' with text representing the transformed weapon/armor's name.
 * - Weapons can only transform into weapons.
 * - Armors can only transform into armors.
 * 
 * ---
 *
 * === JavaScript Notetags: Equipment ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * adjust the parameter through code.
 *
 * ---
 *
 * <JS Parameters>
 *  MaxHP = code;
 *  MaxMP = code;
 *  ATK = code;
 *  DEF = code;
 *  MAT = code;
 *  MDF = code;
 *  AGI = code;
 *  LUK = code;
 * </JS Parameters>
 *
 * - Used for: Weapon, Armor Notetags
 * - Uses JavaScript to determine the values for the basic parameters based on
 *   the code used to calculate its value.
 * - The variables 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and
 *   'LUK' are used to determine the finalized value of the parameter. This
 *   variable is case sensitive.
 * - If a parameter is not present, its value will be treated as +0.
 * 
 * '''WARNING!''' If you are trying to calculate a value based off a full
 * parameter value, such as "ATK = user.atk * 0.10", it's going to break and
 * will cause an infinite loop. Use base parameter values instead.
 *
 * ---
 *
 * === Status Window Notetags ===
 *
 * The following notetags will affect the Shop Status Window info. If for any
 * reason the data that is displayed is not to your liking or insufficient,
 * you can change it up using the following notetags.
 *
 * ---
 *
 * <Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Status Info>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - If you do not like the generated data that's displayed, you can change it
 *   using this notetag to display what you want.
 * - Replace 'key' with one of the following for skills and items:
 *   - Consumable
 *   - Quantity
 *   - Occasion
 *   - Scope
 *   - Speed
 *   - Success Rate
 *   - Repeat
 *   - Hit Type
 *   - Element
 *   - Damage Multiplier
 *   - HP Recovery
 *   - MP Recovery
 *   - TP Recovery
 *   - HP Damage
 *   - MP Damage
 *   - TP Damage
 *   - User TP Gain
 *   - Added Effects
 *   - Removed Effects
 * - Replace 'key' with one of the following for weapons and armors:
 *   - 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', or 'LUK'
 *   - For those with VisuMZ_0_CoreEngine:
 *     - 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT', 'HRG', 'MRG', 'TRG'
 *     - 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR', 'MDR', 'FDR', 'EXR'
 *   - Only relevant if the Draw Style for equipment is "classic" or "double".
 * - Replace 'data' with the text data you want to visually appear. You may use
 *   text codes for this.
 * - This only affects info entries that are already visible and won't make
 *   other categories suddenly appear.
 * - For clarity regarding "Damage Multiplier" and "HP Recovery"/"HP Damage":
 *   - "Damage Multiplier" refers to the amount determined by damage formulas.
 *   - "HP Recovery"/"HP Damage" refers to the "Recover HP" database effect.
 *   - Likewise, the same will apply to "MP Recovery"/"MP Damage" if the damage
 *     formula type is to deal MP recovery/damage instead.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 *
 * <Custom Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Custom Status Info>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - If you want custom categories and data to be displayed for your items that
 *   aren't provided by the Shop Status Window Info to begin with, you can use
 *   this notetag to add in your own entries.
 *   - When used with weapon or armor database objects, this information is
 *     only relevant if the Draw Style for equipment is "classic" or "double".
 * - Replace 'key' with text of the exact label you want. You may use text
 *   codes for this.
 * - Replace 'data' with text of the exact text data you want. You may use text
 *   codes for this.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 * 
 * <Status Style: Compare>
 * <Status Style: Classic>
 * <Status Style: Double>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes up the way the shop status window displays data for this database
 *   object in particular.
 *     - Compare - Compares selected equip to equipped gear
 *       - Lists all main party actors
 *       - Displays the parameter differences when equipped
 *       - Calculates custom JS values
 *     - Classic - Shows basic parameters of selected equip
 *       - Involves no actors, only shows the item's stats
 *       - Shows weapon or armor specific parameters
 *       - Does not show custom JS values as those are calculated per actor
 *       - Does not show custom parameters as those are calculated per actor
 *       - Use <Status Info> and <Custom Status Info> notetags to overwrite or
 *         add custom data to classic equip data
 *     - Double - Shows basic parameters in double columns
 *       - Involves no actors, only shows the item's stats
 *       - Shows weapon or armor specific parameters
 *       - Does not show custom JS values as those are calculated per actor
 *       - Does not show custom parameters as those are calculated per actor
 *       - Use <Status Info> and <Custom Status Info> notetags to overwrite or
 *         add custom data to classic equip data
 * 
 * ---
 * 
 * <Custom Status Parameters: name, name, name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Requires VisuMZ_0_CoreEngine!
 *   - This will not work otherwise!
 * - Customize which parameters are displayed for this equipment object's shop
 *   status window.
 *   - This ONLY applies to the shop status window and not other windows.
 * - Replace 'name' with any of the following to display custom parameters:
 *   - 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and 'LUK'
 *   - 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT', 'HRG', 'MRG', 'TRG'
 *   - 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR', 'MDR', 'FDR', 'EXR'
 *   - Does not work with custom parameters as those are calculated per actor.
 * - Parameters will be displayed in the order inserted into the notetag.
 *
 * ---
 * 
 * <Shop Picture Name: filename>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Enables a shop picture for the status window. This image can be seen in
 *   the item scene, shop scene, and skill scene if enabled.
 * - If this notetag is not used, there will be no image.
 * - Replace 'filename' with the filename of the graphic to use from the game
 *   project's img/pictures/ folder. Filenames are case sensitive. Leave out
 *   the filename extension from the notetag.
 * - Use the supporting notetags to determine where the image appears. If not,
 *   they will default to the background, fit to the window dimensions,
 *   centered at the middle of the window.
 * 
 * ---
 * 
 * <Shop Picture Layer: Background>
 * <Shop Picture Layer: Foreground>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines which layer the graphic will be drawn on.
 * - If the background layer is selected, the picture will appear behind the
 *   data text.
 * - If the foreground layer is selected, the picture will appear in front of
 *   the data text.
 * - If this notetag is not used, it will default to the background layer.
 * 
 * ---
 * 
 * <Shop Picture Max Width: x>
 * <Shop Picture Max Height: y>
 * <Shop Picture Max Dimensions: x, y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines the maximum width and/or height for the image.
 * - This means the image will be automatically scaled proportionally to that
 *   width or height as long as everything else does not break boundaries.
 * - Replace 'x' and 'y' with number values representing the maximum dimensions
 *   the image can be in pixels.
 * - If these notetags are not used, the image will be automatically scaled to
 *   the dimensions of the shop status window.
 * 
 * ---
 * 
 * <Shop Picture Alignment: Left>
 * <Shop Picture Alignment: Center>
 * <Shop Picture Alignment: Right>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the horizontal alignment for the image.
 * - Left, center, right determines how it's aligned horizontally if the
 *   image does not horizontally fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'center' alignment.
 * 
 * ---
 * 
 * <Shop Picture Position: Top>
 * <Shop Picture Position: Middle>
 * <Shop Picture Position: Bottom>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the vertical position for the image.
 * - Top, middle, bottom determines how it's positioned vertically if the
 *   image does not vertically fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'middle' position.
 * 
 * ---
 * 
 * <Shop Picture Offset X: +x>
 * <Shop Picture Offset X: -x>
 * 
 * <Shop Picture Offset Y: +y>
 * <Shop Picture Offset Y: -y>
 * 
 * <Shop Picture Offset: +x, +y>
 * <Shop Picture Offset: -y, -y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Offsets the X and Y positions of the image in the shop status window.
 * - X offsets adjust the horizontal position by x pixels.
 *   - Positive goes right.
 *   - Negative goes left.
 * - Y offsets adjust the horizontal position by y pixels.
 *   - Positive goes down.
 *   - Negative goes up.
 * - Replace 'x' and 'y' with number values representing the pixels to offset
 *   the image by. The '+' and '-' signs are required.
 * - If none of these notetags are used, there will be no offsets.
 * 
 * ---
 * 
 * <Shop Picture Opacity: x>
 * <Shop Picture Opacity: x%>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the opacity of the image used.
 * - When using 'x' and not 'x%', use a number between 0 and 255.
 *   - The closer to 0, the more transparent the image is.
 *   - The closer to 255, the more opaque the image is.
 * - When using 'x%' and not 'x', use a number between 0% and 100%.
 *   - The closer to 0%, the more transparent the image is.
 *   - The closer to 100%, the more opaque the image is.
 * 
 * ---
 *
 * === Shop Menu Notetags ===
 *
 * These notetags adjust how prices and such are managed inside the Shop Menu
 * as well as whether or not some items are visible depending on switch states.
 *
 * ---
 *
 * <Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adjusts the buying price for this item.
 * - Replace 'x' with a number depicting the desired value for the buy price.
 * - This allows you to bypass the RPG Maker MZ editor's limitation of 999,999.
 *
 * ---
 *
 * <Can Sell>
 * <Cannot Sell>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Makes the item either always sellable or cannot be sold.
 * - This bypasses the game's internal hard-coding to prevent items with a
 *   price of 0 from being able to be sold.
 * - This bypasses the game's internal hard-coding to always allow items with
 *   a price value of being able to be sold.
 *
 * ---
 *
 * <Sell Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the sell price to be something different than the default amount.
 * - Replace 'x' with a number depicting the desired value for the sell price.
 *
 * ---
 *
 * <Show Shop Switch: x>
 *
 * <Show Shop All Switches: x,x,x>
 * <Show Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Shop Switch: x>
 *
 * <Hide Shop All Switches: x,x,x>
 * <Hide Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, item will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Cannot Sell Switch: x>
 *
 * <Cannot Sell All Switches: x,x,x>
 * <Cannot Sell Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the sellability of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's sellability.
 * - If 'All' notetag variant is used, item cannot be sold until all switches
 *   are ON. Otherwise, it can be sold.
 * - If 'Any' notetag variant is used, item cannot be sold if any of the
 *   switches are ON. Otherwise, it can be sold.
 *
 * ---
 * 
 * <Buy Turn On Switch: x>
 * <Buy Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon buying.
 * 
 * ---
 * 
 * <Buy Turn Off Switch: x>
 * <Buy Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon buying.
 * 
 * ---
 * 
 * <Sell Turn On Switch: x>
 * <Sell Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon selling.
 * 
 * ---
 * 
 * <Sell Turn Off Switch: x>
 * <Sell Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon selling.
 * 
 * ---
 *
 * === JavaScript Notetags: Shop Menu ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Buy and Sell prices.
 *
 * ---
 *
 * <JS Buy Price>
 *  code
 *  code
 *  price = code;
 * </JS Buy Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the buying 'price' of the item.
 * - Insert the final buy price into the 'price' variable.
 * - The 'item' variable refers to the item being bought.
 *
 * ---
 *
 * <JS Sell Price>
 *  code
 *  code
 *  price = code;
 * </JS Sell Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the selling 'price' of the item.
 * - Insert the final sell price into the 'price' variable.
 * - The 'item' variable refers to the item being sold.
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
 * Actor: Change Equip Slots
 * - Forcefully change the actor(s) equip slots.
 * - These will persist through class changes.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Equip Slots:
 *   - Insert the equip slots you want the actor(s) to have.
 *   - These entries are case-sensitive.
 *
 * ---
 *
 * Actor: Reset Equip Slots
 * - Reset any forced equip slots for the actor(s).
 * - Equip slots will then be based on class.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Purify Plugin Commands ===
 * 
 * ---
 * 
 * Purify: Target Actor(s)
 * - Purifies target actor(s) of any cursed weapons or armors.
 * - Cannot be used in battle.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 * ---
 * 
 * Purify: Whole Party
 * - Purifies whole party of any cursed weapons or armors.
 * - Cannot be used in battle.
 * 
 * ---
 * 
 * === Shop Plugin Commands ===
 * 
 * ---
 *
 * Shop: Advanced
 * - Make it easier to put together inventories for a shop.
 * - WARNING: Does not allow for event-specific prices.
 *
 *   Step 1: Item ID's
 *   - Select which Item ID ranges to add.
 *
 *   Step 2: Weapon ID's
 *   - Select which Weapon ID ranges to add.
 *
 *   Step 3: Armor ID's
 *   - Select which Armor ID ranges to add.
 *
 *   Step 4: Purchase Only?
 *   - Make the shop purchase-only?
 * 
 *   Optional:
 * 
 *     Blacklist
 *     - A list of categories to blacklist from the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 * 
 *     Whitelist
 *     - A list of categories to whitelist for the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 *
 * This Plugin Command primarily functions as an alternative to the editor's
 * "Shop Processing" event command as that one requires you to add items one at
 * a time, making it extremely tedious to add large amounts of items. This
 * Plugin Command will mitigate that by allowing ID ranges to determine which
 * items to make available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Menu Settings
 * ============================================================================
 *
 * The Item Menu Settings allow you to adjust specifics on how key objects and
 * windows in the Item Menu Scene operate.
 *
 * ---
 *
 * General Window
 *
 *   Use Updated Layout:
 *   - Use the Updated Item Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 * 
 *     Disabled: Vanilla:
 *     - If NOT using the updated layout, keep all settings to pure vanilla and
 *       ignore other Plugin Parameters.
 *     - Used for those who do not wish to fiddle with the Plugin Parameter
 *       settings to return the item menu back to default MZ vanilla.
 *     - Does not apply if using updated layout.
 *     - The following settings are disabled if using vanilla:
 *       - Categories: Only the default 4
 *       - Category Names only display text and no icons
 *       - No Shop Status Window
 *       - Modern Controls Disabled
 *       - Columns: Any -> 2
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *
 * ---
 *
 * Item Quantity
 *
 *   Item Max:
 *   Weapon Max:
 *   Armor Max:
 *   - The default maximum quantity for items, weapons, and/or armors.
 * 
 *   Quantity Format:
 *   - How to display an item's quantity.
 *   - %1 - Item Quantity
 *
 *   Font Size:
 *   - Default font size for item quantity.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Item Menu?:
 *   - Show the Shop Status Window in the Item Menu?
 *   - This is enabled if the Updated Layout is on.
 *
 *   Adjust List Window?:
 *   - Automatically adjust the Item List Window in the Item Menu if using the
 *     Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 *
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Status Window in the
 *     Item Menu.
 *   - Needs "Use Updated Layout" + "Disabled: Vanilla" as false.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Switch Category:
 *   - Button assist text used for switching categories.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Categories
 * ============================================================================
 *
 * Item Categories appear both in the Item Menu Scene and Shop Menu Scene (but
 * only under the Sell command). These Plugin Parameters give you the ability
 * to add in the specific categories you want displayed, remove the ones you
 * don't, and associate them with icons.
 *
 * ---
 *
 * List
 *
 *   Category List
 *   - A list of the item categories displayed in the Item/Shop menus.
 * 
 *     Type:
 *     - A list of the item categories displayed in the Item/Shop menus.
 *     - Replace x with ID numbers or text.
 *     - AllItems, RegularItems, KeyItems
 *     - HiddenItemA, HiddenItemB
 *     - Consumable, Nonconsumable
 *     - AlwaysUsable, BattleUsable, FieldUsable, NeverUsable
 *     - AllWeapons, WType:x
 *     - AllArmors, AType:x, EType:x
 *     - Category:x
 * 
 *     Icon:
 *     - Icon used for this category.
 *     - Use 0 for no icon.
 * 
 *     Visibility Switch:
 *     - This Switch must be turned ON in order for the category to show.
 *     - Use 0 for no Switch requirement.
 * 
 *     Sort By:
 *     - Sort this category (in Scene_Item and Scene_Shop only) this way.
 *
 *   Style:
 *   - How do you wish to draw categorie entries in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 *
 *   Text Alignment
 *   - Decide how you want the text to be aligned.
 *
 * ---
 *
 * Vocabulary
 *
 *   Hidden Item A
 *   Hidden Item B
 *   Consumable
 *   Nonconsumable
 *   Always Usable
 *   Battle Usable
 *   Field Usable
 *   Never Usable
 *   - How these categories are named in the Item Menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: NEW! Labels
 * ============================================================================
 *
 * Whenever the player receives a new item(s), a NEW! Label can be placed on
 * top of the item's icon when browsing a menu displaying the item(s). This is
 * a quality of life addition from more modern RPG's to help players figure out
 * what they've recently received. The following are Plugin Parameters made to
 * adjust how the NEW! Labels are handled in-game.
 *
 * ---
 *
 * NEW! Labels
 * 
 *   Use NEW! Labels?:
 *   - Use the NEW! Labels or not?
 * 
 *   Icon:
 *   - The icon index used to represent the NEW! text.
 *   - Use 0 to not draw any icons.
 * 
 *   Text:
 *   - The text written on the NEW! Label.
 * 
 *     Font Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Font Size:
 *     - The font size used for the NEW! text.
 * 
 *   Fade Limit:
 *   - What's the upper opaque limit before reversing?
 * 
 *   Fade Speed:
 *   - What's the fade speed of the NEW! Label?
 * 
 *   Offset X:
 *   - How much to offset the NEW! Label's X position by.
 * 
 *   Offset Y:
 *   - How much to offset the NEW! Label's Y position by.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Equip Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust the Equipment Menu Scene, ranging from using
 * a more updated and modern layout, changing the styles of other windows, and
 * other key visual aspects of the Equip Menu Scene. Other settings here allow
 * you to adjust how equipment operate under certain rulings, too.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Equip Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 * 
 *     Param Font Size:
 *     - The font size used for parameter values.
 * 
 *     Show Menu Portraits?:
 *     - If Main Menu Core is installed, display the Menu Portraits instead of
 *       the actor's face in the status window?
 * 
 *     JS: Portrait Upper:
 *     - If Menu Portraits are available, this is code used to draw the upper
 *       data like this in the Status Window.
 * 
 *     JS: Face Upper:
 *     - If faces used used, this is code used to draw the upper data like this
 *       in the Status Window.
 * 
 *     JS: Parameter Lower:
 *     - Code to determine how parameters are drawn in the Status Window.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 * 
 *   Status Window Width:
 *   - The usual width of the status window if using the non-Updated Equip
 *     Menu Layout.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *   Cursed Equip Popup:
 *   - Text popup appears when an actor equips a cursed weapon/armor.
 *   - Text codes allowed.
 *   - Requires VisuMZ_0_CoreEngine!
 *   - Empty to not use.
 *   -  %1 - Actor, %2 - Equip, %3 - Icon.
 *
 * ---
 *
 * Command Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Equip Icon:
 *   - The icon used for the Equip command.
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *   Add Optimize Command?:
 *   - Add the "Optimize" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Optimize Icon:
 *     - The icon used for the Optimize command.
 * 
 *   Add Clear Command?:
 *   - Add the "Clear" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Clear Icon:
 *     - The icon used for the Clear command.
 *
 * ---
 *
 * Remove Equip
 * 
 *   Icon:
 *   - Icon used for equipment removal.
 * 
 *   Text:
 *   - Text used for equipment removal.
 * 
 *   Use SHIFT Shortcut?:
 *   - Add the "Shift" button as a shortcut key to removing items?
 *
 * ---
 *
 * Rulings
 * 
 *   Equip-Adjust HP/MP:
 *   - Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * 
 *   Non-Removable Types:
 *   - Insert ID's of the Equipment Types that must always have an item
 *     equipped and cannot be empty.
 * 
 *   Non-Optimized Types:
 *   - Insert ID's of the Equipment Types that will be ignored when equipment
 *     is being optimized.
 *
 * ---
 *
 * Button Assist Window
 *
 *   SHIFT: Remove:
 *   - Button assist text used for the SHIFT Remove Shortcut.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you a number of options to adjust the Shop
 * Menu Scene. These options range from enabling an updated and modern layout,
 * adjust how various key visual aspects appear, and determine how prices can
 * be affected when it comes to selling them or buying them (for coders).
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Shop Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 * 
 * Switches:
 * 
 *   Switch: Buy:
 *   - Buying items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 *   Switch: Sell
 *   - Selling items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 * ---
 *
 * Command Window
 * 
 *   Hide Unavailable?:
 *   - Hide all unavailable commands like when a shop is set to Purchase Only?
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Buy Icon:
 *   - The icon used for the Buy command.
 * 
 *   Sell Icon:
 *   - The icon used for the Sell command.
 * 
 *   Cancel Icon:
 *   - The icon used for the Cancel command.
 * 
 *   Rename "Cancel":
 *   - Rename Cancel to something more logical for the Shop Menu Scene.
 *
 * ---
 *
 * Prices
 * 
 *   Sell Price Rate:
 *   - The default sell price rate.
 * 
 *   JS: Buy Price:
 *   - Modificatons made to the buy price before finalizing it.
 * 
 *   JS: Sell Price:
 *   - Modificatons made to the sell price before finalizing it.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Small Increment:
 *   Large Increment:
 *   - Text used for changing amount bought/sold.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Status Window
 * ============================================================================
 *
 * These Plugin Parameters focuses on the Shop Status Window and determines how
 * its data is displayed.
 *
 * ---
 *
 * General
 * 
 *   Window Width:
 *   - The usual width of the status window.
 * 
 *   Parameter Font Size:
 *   - Font size used for parameter changes.
 * 
 *   Translucent Opacity:
 *   - Opacity setting used for translucent window objects.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Equipment Data
 * 
 *   Data Style:
 *   - How do you wish to display equipment data?
 *     - Compare - Compares selected equip to equipped gear
 *       - Lists all main party actors
 *       - Displays the parameter differences when equipped
 *       - Calculates custom JS values
 *     - Classic - Shows basic parameters of selected equip
 *       - Involves no actors, only shows the item's stats
 *       - Shows weapon or armor specific parameters
 *       - Does not show custom JS values as those are calculated per actor
 *       - Does not show custom parameters as those are calculated per actor
 *       - Use <Status Info> and <Custom Status Info> notetags to overwrite or
 *         add custom data to classic equip data
 *     - Double - Shows basic parameters in double columns
 *       - Involves no actors, only shows the item's stats
 *       - Shows weapon or armor specific parameters
 *       - Does not show custom JS values as those are calculated per actor
 *       - Does not show custom parameters as those are calculated per actor
 *       - Use <Status Info> and <Custom Status Info> notetags to overwrite or
 *         add custom data to classic equip data
 * 
 *     Compare Style:
 * 
 *       Already Equipped:
 *       - Marker used to show an actor cannot equip an item.
 * 
 *       Can't Equip:
 *       - Marker used to show an actor cannot equip an item.
 * 
 *       No Changes:
 *       - Marker used to show no changes have occurred.
 * 
 *       JS: Draw Equip Data:
 *       - Code used to draw the equipment data for the Shop Status Window.
 * 
 *     Classic Style:
 * 
 *       Added Weapon Params:
 *       Added Armor Params:
 *       - Display these parameters when a weapon/armor is selected.
 *       - Requires VisuMZ_0_CoreEngine!
 * 
 *       JS: Draw Equip Data:
 *       - Code used to draw the equipment data for the Shop Status Window.
 * 
 *     Double Style:
 * 
 *       Added Weapon Params:
 *       Added Armor Params:
 *       - Display these parameters when a weapon/armor is selected.
 *       - Requires VisuMZ_0_CoreEngine!
 * 
 *       JS: Draw Equip Data:
 *       - Code used to draw the equipment data for the Shop Status Window.
 * 
 *   Delay MS:
 *   - How many milliseconds (MS) to delay the preview update?
 *   - This is to prevent lag spikes for equips only.
 *
 * ---
 *
 * Item Data
 * 
 *   Max State/Buff Icons:
 *   - Maximum number of icons that can be displayed for Add/Remove
 *     States/Buffs.
 * 
 *   Multiplier Standard:
 *   - Constant standard to filter out random values when calculating the
 *     damage multiplier.
 * 
 *   JS: Draw Item Data:
 *   - Code used to draw the item data for the Shop Status Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Consumable:
 *   Occasions:
 *   Scope:
 *   Speed:
 *   Success Rate:
 *   Repeats:
 *   Hit Type:
 *   Element:
 *   Damage Type:
 *   Effects:
 *   - Vocabulary used for these data entries.
 *   - Some of these have Plugin Parameters have sub-entries.
 * 
 *   NOTE: Regarding Damage Labels
 * 
 *   If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * 
 *   Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
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
 * Version 1.61: May 18, 2026
 * * Documentation Update!
 * ** Added extra clarity for Plugin Parameters
 * *** Parameters > Item Menu Scene > Shop Status Window > JS: X, Y, W, H
 * **** Needs "Use Updated Layout" + "Disabled: Vanilla" as false.
 * 
 * Version 1.60: March 16, 2026
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Parameters > Item Menu Settings > Use Updated Layout > Disabled: Vanilla
 * **** If NOT using the updated layout, keep all settings to pure vanilla and
 *      ignore other Plugin Parameters.
 * **** Used for those who do not wish to fiddle with the Plugin Parameter
 *      settings to return the item menu back to default MZ vanilla.
 * **** Does not apply if using updated layout.
 * **** The following settings are disabled if using vanilla:
 * ***** Categories: Only the default 4
 * ***** Category Names only display text and no icons
 * ***** No Shop Status Window
 * ***** Modern Controls Disabled
 * ***** Columns: Any -> 2
 * 
 * Version 1.59: October 16, 2025
 * * Bug Fixes!
 * ** Fixed a bug where a changed parameter in the equipment menu would
 *    accidentally highlight the next parameter's name. Fix made by Irina.
 * 
 * Version 1.58: February 20, 2025
 * * Bug Fixes!
 * ** Optimize no longer allows player to bypass the following notetags:
 *    <Equip Copy Limit: x>, <Equip Weapon Type Limit: x>, and
 *    <Equip Armor Type Limit: x>. Fix made by Arisu.
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Better compatibility with different icon sizes.
 * 
 * Version 1.57: January 16, 2025
 * * Bug Fixes!
 * ** Fixed an issue where certain icons were not aligning properly at
 *    different line height settings. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarity for <Status Info> notetag:
 * *** For clarity regarding "Damage Multiplier" and "HP Recovery"/"HP Damage":
 * **** "Damage Multiplier" refers to the amount determined by damage formulas.
 * **** "HP Recovery"/"HP Damage" refers to the "Recover HP" database effect.
 * **** Likewise, the same will apply to "MP Recovery"/"MP Damage" if the
 *      damage formula type is to deal MP recovery/damage instead.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Status Style: type>
 * **** Changes up the way the shop status window displays data for this
 *      database object in particular.
 * *** <Custom Status Parameters: name, name, name>
 * **** Customize which parameters are displayed for this equipment object's
 *      shop status window.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.56: December 19, 2024
 * * Bug Fixes!
 * ** Fixed a bug where newly added equipment would cause crashes upon
 *    interaction. Fix made by Irina.
 * 
 * Version 1.55: November 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where you can no longer attempt to equip an actor with zero
 *    equip slots and causing a crash. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated <Status Info>
 * *** Used for: Skill, Item, Weapon, Armor Notetags
 * **** Replace 'key' with one of the following for weapons and armors:
 * ***** 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', or 'LUK'
 * ***** For those with VisuMZ_0_CoreEngine:
 * ****** 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT', 'HRG', 'MRG', 'TRG'
 * ****** 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR', 'MDR', 'FDR', 'EXR'
 * **** Only relevant if the Draw Style for equipment is "classic" or "double".
 * ** Updated <Custom Status Info> notetag:
 * *** Used for: Skill, Item, Weapon, Armor Notetags
 * **** When used with weapon or armor database objects, this information is
 *      only relevant if the Draw Style for equipment is "classic" or "double".
 * * New Feature!
 * ** New Plugin Parameters: 
 * *** Parameters > Shop Status Window > Data Style:
 * **** How do you wish to display equipment data?
 * ***** Compare - Compares selected equip to equipped gear
 * ****** Lists all main party actors
 * ****** Displays the parameter differences when equipped
 * ****** Calculates custom JS values
 * ***** Classic - Shows basic parameters of selected equip
 * ***** Double - Shows basic parameters in double columns
 * ****** Involves no actors, only shows the item's stats
 * ****** Shows weapon or armor specific parameters
 * ****** Does not show custom JS values as those are calculated per actor
 * ****** Does not show custom parameters as those are calculated per actor
 * ****** Use <Status Info> and <Custom Status Info> notetags to overwrite or
 *        add custom data to classic equip data
 * **** Data Style > Classic Style:
 * **** Data Style > Double Style:
 * ***** Added Weapon Params
 * ***** Added Armor Params
 * ****** Display these parameters when a weapon/armor is selected.
 * ****** Requires VisuMZ_0_CoreEngine!
 * 
 * Version 1.54: October 17, 2024
 * * Feature Update!
 * ** If "Modern Controls" is selected while "Remove Equip" and "Optimize" are
 *    gone from the Equip Menu, right click will exit the menu. Feature added
 *    by Arisu.
 * 
 * Version 1.53: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added warning to <JS Parameters>:
 * *** If you are trying to calculate a value based off a full parameter value,
 *     such as "ATK = user.atk * 0.10", it's going to break and will cause an
 *     infinite loop. Use base parameter values instead.
 * * New Features!
 * ** New notetags added by Irina:
 * *** <ID Sort Priority: x>
 * **** Used for Scene_Item, Scene_Equip, Scene_Battle, and Scene_Shop's sell
 *      option (only when selling).
 * **** Changes sorting priority by ID for item, weapon, or armor to 'x'. 
 * **** Default priority level is '50'.
 * **** Items, weapons, and armors with higher priority values will be sorted
 *      higher up on the list while lower values will be lower on the list.
 * 
 * Version 1.52: May 16, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Item Categories > Category List > Category > Sorted By:
 * **** You can now sort specific item categories by ID or Name.
 * **** Only usable within Scene_Item and Scene_Shop.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.51: December 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where if an item is unequipped, it may cause a crash. Fix
 *    made by Arisu.
 * ** Fixed a bug where <Proxy: id> did not properly give the proxy item. Fix
 *    made by Arisu.
 * 
 * Version 1.50: November 16, 2023
 * * Bug Fixes!
 * ** <JS Buy Price> and <JS Sell Price> was not working properly. Fix made
 *    by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Cursed>
 * **** If this weapon or armor is equipped, it cannot manually be removed by
 *      the player until it is purified.
 * **** To remove it, it must be done by event commands, script calls, or
 *     through the Purify-related Plugin Commands provided by this plugin.
 * **** Once purified, the weapon or armor will become unequipped unless it has
 *     a purify transformation.
 * **** If the newly transformed weapon/armor is equippable, it will remain in
 *     the actor's equipment slots.
 * **** If you are using VisuMZ_2_WeaponSwapSystem, weapons cannot become
 *      cursed in order to allow free weapon swapping. Weaponry will not be
 *      cursed if VisuMZ_2_WeaponSwapSystem is installed.
 * *** <Purify Transform: id>
 * *** <Purify Transform: name>
 * **** If this notetag is present on a <Cursed> weapon or armor, then upon the
 *      actor receiving purification, the weapon or armor will transform into a
 *      different item.
 * ** New Plugin Commands added by Arisu:
 * *** Purify: Target Actor(s)
 * **** Purifies target actor(s) of any cursed weapons or armors.
 * *** Purify: Whole Party
 * **** Purifies whole party of any cursed weapons or armors.
 * ** Added "Cursed Equip Popup" to Equip Scene Plugin Parameters.
 * *** Text popup appears when an actor equips a cursed weapon/armor.
 * ** Added "Ally or Enemy" or "Enemy or Ally" scopes to Shop Status Window
 *    Plugin Parameters.
 * *** If unused, will default to "1 Ally" or "1 Enemy" like usual.
 *     Added by Irina.
 * 
 * Version 1.49: October 12, 2023
 * * Bug Fixes!
 * ** Fixed a problem where for weapon types, all weapon types are listed in
 *    the equip menu even when the actor cannot equip them (though they would
 *    be disabled). Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Olivia and sponsored by AndyL:
 * *** <Added EType: x>
 * *** <Added ETypes: x, x, x>
 * **** This is for armors only and does NOT work with weapons!
 * **** Allows a piece of armor to belong to multiple ETypes. This means a
 *      glove can be equipped as "Armgear" or as an "Accessory" if you so
 *      choose.
 * 
 * Version 1.48: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help window position of the non-updated layout
 *    would appear in the wrong position. Fix made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized when weapons and armors exceed 2000
 *    in database quantity.
 * 
 * Version 1.47: July 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the shop status window to display incorrect
 *    removed buffs and debuffs. Fix made by Olivia.
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Changes made to dynamic shop listings in order to update upon listing
 *    changes rather than having to enter and exit the shop again. Update made
 *    by Arisu.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by AndyL:
 * *** <Conserve: x%>
 * **** Gives the item a percent chance when used to not consume the item.
 * *** <Buy Turn On Switches: x, x, x>
 * *** <Buy Turn Off Switches: x, x, x>
 * *** <Sell Turn On Switches: x, x, x>
 * *** <Sell Turn Off Switches: x, x, x>
 * **** When buying/selling an item, weapon, or armor with these notetags,
 *      turn on/off switch(es) 'x'.
 * *** New Plugin Parameters added by Arisu:
 * **** Params > Settings > Shop Status Window > Equipment Data > Delay MS:
 * ***** How many milliseconds (MS) to delay the preview update?
 * ***** This is to prevent lag spikes for equips only.
 * 
 * Version 1.46: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help and input modes are not adequately
 *    adjusted when not used with the updated layout or without the Options
 *    Core custom UI placement. Fix made by Arisu.
 * 
 * Version 1.45: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause equip slots to not be recognized properly if
 *    the equip slot name ends in a space.
 * 
 * Version 1.44: April 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by Anon:
 * *** <Equip For Class Only: x>
 * *** <Equip For Classes Only: x, x, x>
 * *** <Equip For Class Only: name>
 * *** <Equip For Classes Only: name, name, name>
 * **** The piece of equipment can only be worn by the listed classes.
 * *** <Equip Requirements> notetag added.
 * **** Define multiple requirements that the actor needs to meet in order for
 *      this equip item to be equippable.
 * **** See help file for more information on the types of requirements that
 *      can be added.
 * 
 * Version 1.43: March 16, 2023
 * * Bug Fixes!
 * ** Artifact armors should now update and refresh the party members' cache
 *    upon acquisition. Fix made by Olivia.
 * 
 * Version 1.42: February 16, 2023
 * * Bug Fixes!
 * ** Proxy items should no longer cause infinite loops if they're made to
 *    reference other proxy items in a circular fashion. Instead, they just
 *    give the exact first found proxy instead of cycling through others.
 *    Fix made by Arisu.
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by Anon:
 * *** Equip Scene > Equip Command > Help Description
 * *** Equip Scene > Optimize Command > Help Description
 * *** Equip Scene > Clear Command > Help Description
 * **** Help description used when these commands are selected.
 * 
 * Version 1.40: October 20, 2022
 * * Feature Update!
 * ** For the shop status window, when comparing equipment of a type where
 *    there are multiple equipment slots (such as accessories), the plugin will
 *    now check for an empty equipment slot first and then make calculations
 *    there. Otherwise, it will use the first available equipment slot of that
 *    type regardless of the equipped item. Update made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.39: September 29, 2022:
 * * Feature Update!
 * ** Changed the default code for the equip scene's status window display to
 *    prevent the face graphic and basic actor stats from going above the
 *    window boundaries if there are too many parameters displayed in the
 *    status window at a time.
 * ** If you already have this plugin installed the changes will not be
 *    reflected unless you do the following:
 * **** BACKUP your game project.
 * **** REMOVE this plugin from the Plugin Manager list.
 * **** REINSTALL this plugin into the Plugin Manager list.
 * **** SAVE the game project.
 * 
 * Version 1.38: March 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New mechanics and notetags added by Olivia and sponsored by Anon:
 * *** <Party Artifact>
 * *** <Troop Artifact>
 * *** <Stackable Party Artifact>
 * *** <Stackable Troop Artifact>
 * **** Armors only! This armor cannot be equipped at all. However, by simply
 *      being in the party's inventory, its parameter bonuses and traits will
 *      be applied globally throughout the whole party or troop (depending on
 *      the notetag). Add both notetags to affect both groups.
 * **** The normal versions of the notetag is only applied once regardless of
 *      the number of copies are found in the party's inventory.
 * **** The stackable versions of the notetag will have the bonuses and traits
 *      stacked multiple times relative to the number of copies found in the
 *      party's inventory.
 * **** This item will NOT be added during the setup phase for Battle Tests.
 * ***** If you want to add the item, do it manually.
 * 
 * Version 1.37: December 23, 2021
 * * Compatibility Update
 * ** Created foundation for proxy items to be used in any applicable system
 *    and extension plugins. Update made by Arisu.
 * 
 * Version 1.36: December 2, 2021
 * * Feature Update!
 * ** For those using custom parameters from the Core Engine and do not have
 *    the parameters all-capitalized, the plugin will automatically do it for
 *    you to prevent errors. Update made by Olivia.
 * 
 * Version 1.35: November 18, 2021
 * * Compatibility Update!
 * ** If this plugin's updated scene is disabled, the Help Window locations for
 *    the Item, Equip, and Shop Scenes should now be at their designated
 *    locations as calculated by the VisuMZ Core Engine instead of the RMMZ
 *    default location. Update made by Irina.
 * 
 * Version 1.34: October 28, 2021
 * * Feature Update
 * ** Added fail safe checks for projects that are using old data for starting
 *    equipment that no longer exist, thus preventing the game from opening.
 *    Update made by Arisu.
 * 
 * Version 1.33: August 6, 2021
 * * Documentation Update!
 * ** Removed "Weapon" and "Armor" from "Used For" for <Status Info>. This was
 *    an unintended piece of documentation.
 * 
 * Version 1.32: July 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause armor duplication when changing to classes
 *    with unaligned equipment slot types. Fix made by Arisu.
 * 
 * Version 1.31: July 9, 2021
 * * Feature Update!
 * ** Added a failsafe for price manipulation JavaScript to never have prices
 *    drop below 0 if possible. Update made by Arisu.
 * 
 * Version 1.30: July 2, 2021
 * * Documentation Update!
 * ** Added an extra note to the help file for the following:
 *    Plugin Parameters > Item Menu Settings > List Window > Columns
 * *** If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *    
 * 
 * Version 1.29: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Feature Update!
 * ** Phantom data when changing equipment types in the database should no
 *    longer affect actors with cached equip ID's. Update made by Arisu.
 * 
 * Version 1.28: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.27: May 21, 2021
 * * Bug Fixes!
 * ** Using the mouse right click in the Equip Scene while inside of the item
 *    to slot window will no longer exit the Equip Scene. Fix made by Yanfly.
 * 
 * Version 1.26: April 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** "VisuStella MZ Compatibility" added VisuMZ_1_BattleCore section regarding
 *    Damage Multiplier and Healing Multiplier vocabulary settings to reduce
 *    commonly asked questions.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Archeia:
 * *** <Shop Picture Name: filename>
 * *** <Shop Picture Layer: x>
 * *** <Shop Picture Max Width: x>
 * *** <Shop Picture Max Height: y>
 * *** <Shop Picture Max Dimensions: x, y>
 * *** <Shop Picture Alignment: x>
 * *** <Shop Picture Position: y>
 * *** <Shop Picture Offset X: +x>
 * *** <Shop Picture Offset X: -x>
 * *** <Shop Picture Offset Y: +y>
 * *** <Shop Picture Offset Y: -y>
 * *** <Shop Picture Offset: +x, +y>
 * *** <Shop Picture Offset: -x, -y>
 * *** <Shop Picture Opacity: x>
 * *** <Shop Picture Opacity: x%>
 * **** Add images from the game project's img/pictures/ folder to display in
 *      the Shop Status Window.
 * 
 * Version 1.25: April 23, 2021
 * * Documentation Update!
 * ** Added clarity to the <param: +x> and <param: -x> notetags:
 * *** These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * 
 * Version 1.24: April 16, 2021
 * * Bug Fixes!
 * ** Changing an actor's equipment slots to past their original amount will no
 *    longer yield errors with duplicate slot types. Fix made by Arisu.
 * ** Completely selling an item should now refresh the help window to the new
 *    selected item's help description. Fix made by Arisu.
 * * Optimization Update!
 * ** Non-removable equipment restrictions for the equipment scene are now
 *    better optimized. Update made by Olivia.
 * 
 * Version 1.23: April 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.21: March 5, 2021
 * * Feature Update!
 * ** Custom equipment slots are disabled during Battle Testing for better
 *    accuracy and results.
 * 
 * Version 1.20: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Buy
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Sell
 * **** Buying/selling items in the Shop Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Shop Scene opens.
 * **** These switches can be used after a "Shop Processing" event command to
 *      determine if the player has bought an item, bought and sold an item,
 *      sold an item, or neither.
 * 
 * Version 1.19: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina.
 * *** <Equip Copy Limit: x>
 * **** Sets a maximum number of copies that the actor can wear of this
 *      equipment. Usage Example: Actors can only equip one copy of the
 *      "One-of-a-Kind Ring" on at any time despite having empty accessory
 *      slots because the ring has a <Equip Copy Limit: 1> notetag.
 * *** <Equip Weapon Type Limit: x>
 * **** This weapon cannot be equipped with other weapons of the same type once
 *      the limited amount has been reached. Usage Example: A dualwielding
 *      warrior who can only equip one sword and a dagger but never two swords
 *      or two daggers because the swords and daggers all have the
 *      <Equip Weapon Type Limit: 1> notetags on them.
 * *** <Equip Armor Type Limit: x>
 * **** This armor cannot be equipped with other armors of the same type once
 *      the limited amount has been reached. Usage Example: People cannot equip
 *      more than two glove accessories on at a time because the glove is a
 *      "Glove" armor-type and each glove item has the
 *      <Equip Armor Type Limit: 2> notetags on them.
 * 
 * Version 1.18: January 15, 2021
 * * Bug Fixes!
 * ** Pressing "Shift" to remove equipment will now refresh the status window
 *    unlike before. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Item Menu Settings > Background Type
 * 
 * Version 1.17: January 1, 2021
 * * Bug Fixes!
 * ** Equipping should be working properly again. Fix made by Yanfly.
 * 
 * Version 1.16: December 25, 2020
 * * Bug Fixes!
 * ** Equip-Adjust HP/MP should work properly now. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that if the VisuStella
 *    Battle Core is installed, then all battle scope items are visible, but
 *    not necessarily enabled if they are disabled otherwise.
 * 
 * Version 1.15: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that it removes the
 *    usable item from visibility as well if the actor unable to use it is the
 *    only person in the party.
 * 
 * Version 1.14: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.13: December 4, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Actor: Change Equip Slots
 * *** Actor: Reset Equip Slots
 * **** These plugin commands allow you to forcefully change the equip slots
 *      available to an actor regardless of the slots provided by its class as
 *      well as reset them.
 * 
 * Version 1.12: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 8, 2020
 * * Bug Fix!
 * ** Font size ratio for the shop status window now scales to a hard coded
 *    value to prevent smaller font sizes from expanding icon sizes. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Currency display in the shop menu is now reflected upon how the plugin
 *    parameters set them to display. Update made by Arisu.
 * 
 * Version 1.10: November 1, 2020
 * * Feature Update!
 * ** Modern Controls compatibility with Core Engine no longer enables the
 *    Item Categories window and child classes to utilize the Home/End keys.
 * 
 * Version 1.09: October 25, 2020
 * * Bug Fixes!
 * ** "All Items" category should now display the "Items" text. Fix by Irina.
 * ** WType, AType, and EType categories now work with text. Fix by Irina.
 *
 * Version 1.08: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: October 11, 2020
 * * Bug Fixes!
 * ** XParams and SParams in the Window_EquipStatus window will no longer show
 *    a non-percentile difference if the original value is not a whole value.
 *    Fix made by Yanfly.
 * 
 * Version 1.06: October 4, 2020
 * * Bug Fixes!
 * ** Select Item event command now displays the default amount of columns
 *    instead of whatever setting is made with the plugin parameters.
 * 
 * Version 1.05: September 27, 2020
 * * Bug Fixes!
 * ** When using the updated shop layout, leaving the sell option will no
 *    longer cause the dummy window to appear.
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Pressing Shift to quickly remove equipment should no longer crash the
 *    game. This will also clear the help window text. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** If both Optimize and Clear commands have been removed and using modern
 *    controls, pressing up at the top of the slot window list will not go to
 *    the window. Fix made by Yanfly.
 * ** If both Optimize and Clear commands have been removed, the window will no
 *    longer appear and the slot window will be moved upward to fill any empty
 *    spaces. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added in NEW! Label to let you adjust the font face.
 * ** New Plugin Parameters added in Equip Menu Scene Settings for disabling
 *    the back rectangles and/or changing their colors.
 * ** New Plugin Parameters added in Shop Status Window Settings for disabling
 *    the back rectangles and/or changing their colors.
 * 
 * Version 1.02: August 30, 2020
 * * Documentation Fix!
 * ** Added: NOTE: Regarding Damage Labels
 * *** If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * *** Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 * *** Documentation update added by Yanfly.
 * 
 * Version 1.01: August 23, 2020
 * * Added failsafe to prevent non-existent equipment (because the database
 *   entries have been deleted) from being equipped as initial equipment.
 *   Fix made by Olivia.
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
 * @command ActorChangeEquipSlots
 * @text Actor: Change Equip Slots
 * @desc Forcefully change the actor(s) equip slots.
 * These will persist through class changes.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 * 
 * @arg Slots:arraystr
 * @text Equip Slots
 * @type string[]
 * @desc Insert the equip slots you want the actor(s) to have.
 * These entries are case-sensitive.
 * @default ["Weapon","Shield","Head","Body","Accessory"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorResetEquipSlots
 * @text Actor: Reset Equip Slots
 * @desc Reset any forced equip slots for the actor(s).
 * Equip slots will then be based on class.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Purify
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PurifyActors
 * @text Purify: Target Actor(s)
 * @desc Purifies target actor(s) of any cursed weapons or armors.
 * Cannot be used in battle.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PurifyParty
 * @text Purify: Whole Party
 * @desc Purifies whole party of any cursed weapons or armors.
 * Cannot be used in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Shop
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BatchShop
 * @text Shop: Advanced
 * @desc Make it easier to put together inventories for a shop.
 * WARNING: Does not allow for event-specific prices.
 *
 * @arg Step1
 * @text Step 1: Item ID's
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type item
 * @desc Select which Item ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type item
 * @desc Select which Item ID to end at.
 * @default 4
 *
 * @arg Step2
 * @text Step 2: Weapon ID's
 *
 * @arg Step2Start:num
 * @text Range Start
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to start from.
 * @default 1
 *
 * @arg Step2End:num
 * @text Range End
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to end at.
 * @default 4
 *
 * @arg Step3
 * @text Step 3: Armor ID's
 *
 * @arg Step3Start:num
 * @text Range Start
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to start from.
 * @default 1
 *
 * @arg Step3End:num
 * @text Range End
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to end at.
 * @default 4
 *
 * @arg PurchaseOnly:eval
 * @text Step 4: Purchase Only?
 * @type boolean
 * @on Purchase-Only
 * @off Sell Accessible
 * @desc Make the shop purchase-only?
 * @default false
 * 
 * @arg Optional
 * 
 * @arg Blacklist:arraystr
 * @text Blacklisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to blacklist from the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 * 
 * @arg Whitelist:arraystr
 * @text Whitelisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to whitelist for the shop.
 * Not used if empty. Mark categories with <Category: x>
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
 * @param ItemsEquipsCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemScene:struct
 * @text Item Menu Settings
 * @type struct<ItemScene>
 * @desc Change the Item Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","ListWindow":"","ListWindowCols:num":"1","ItemQt":"","MaxItems:num":"99","MaxWeapons:num":"99","MaxArmors:num":"99","ItemQuantityFmt:str":"×%1","ItemQuantityFontSize:num":"22","ShopStatusWindow":"","ShowShopStatus:eval":"true","ItemSceneAdjustItemList:eval":"true","ItemMenuStatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._itemWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._itemWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","ButtonAssist":"","buttonAssistCategory:str":"Switch Category"}
 *
 * @param Categories:struct
 * @text Item Categories
 * @parent ItemScene:struct
 * @type struct<Categories>
 * @desc Change the categories displayed in the Item/Shop menus.
 * @default {"MainList":"","List:arraystruct":"[\"{\\\"Type:str\\\":\\\"FieldUsable\\\",\\\"Icon:num\\\":\\\"208\\\"}\",\"{\\\"Type:str\\\":\\\"BattleUsable\\\",\\\"Icon:num\\\":\\\"218\\\"}\",\"{\\\"Type:str\\\":\\\"NeverUsable\\\",\\\"Icon:num\\\":\\\"302\\\"}\",\"{\\\"Type:str\\\":\\\"AllWeapons\\\",\\\"Icon:num\\\":\\\"97\\\"}\",\"{\\\"Type:str\\\":\\\"EType:2\\\",\\\"Icon:num\\\":\\\"128\\\"}\",\"{\\\"Type:str\\\":\\\"EType:3\\\",\\\"Icon:num\\\":\\\"131\\\"}\",\"{\\\"Type:str\\\":\\\"EType:4\\\",\\\"Icon:num\\\":\\\"137\\\"}\",\"{\\\"Type:str\\\":\\\"EType:5\\\",\\\"Icon:num\\\":\\\"145\\\"}\",\"{\\\"Type:str\\\":\\\"KeyItems\\\",\\\"Icon:num\\\":\\\"195\\\"}\"]","Style:str":"icon","TextAlign:str":"center","Vocabulary":"","HiddenItemA:str":"Special Items","HiddenItemB:str":"Unique Items","Consumable:str":"Consumable","Nonconsumable:str":"Nonconsumable","AlwaysUsable:str":"Usable","BattleUsable:str":"Battle","FieldUsable:str":"Field","NeverUsable:str":"Materials"}
 *
 * @param New:struct
 * @text NEW! Labels
 * @parent ItemScene:struct
 * @type struct<NewLabel>
 * @desc Change how NEW! Labels apply to your game project.
 * @default {"Enable:eval":"true","Icon:num":"0","Text:str":"NEW!","FontColor:str":"17","FontFace:str":"Verdana","FontSize:str":"16","FadeLimit:num":"360","FadeSpeed:num":"4","OffsetX:num":"0","OffsetY:num":"4"}
 *
 * @param EquipScene:struct
 * @text Equip Menu Settings
 * @type struct<EquipScene>
 * @desc Adjust the settings regarding the Equip Menu Scene.
 * @default {"General":"","EnableLayout:eval":"true","ParamValueFontSize:num":"22","MenuPortraits:eval":"true","DrawPortraitJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst x1 = padding;\\nconst x2 = this.innerWidth - 128 - padding;\\n\\n// Draw Menu Image\\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\\n\\n// Draw Data\\nthis.drawActorName(this._actor, x1, lineHeight * 0);\\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);\"","DrawFaceJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst x = Math.floor(this.innerWidth / 2);\\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\\nlet dataHeight = lineHeight * 3;\\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\\n\\n// Draw Data\\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\\nif (this.innerHeight > 444) {\\n    this.drawActorClass(this._actor, x, dataY + lineHeight * 2);\\n    this.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\\n} else {\\n    this.placeBasicGauges(this._actor, x, dataY + lineHeight * 2);\\n}\"","DrawParamJS:func":"\"// Declare variables\\nconst params = this.actorParams();\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst baseX = 0;\\nconst baseY = this.innerHeight - params.length * lineHeight;\\nconst baseWidth = this.innerWidth;\\nconst valueFontSize = this.paramValueFontSize();\\n\\n// Calculate Widths\\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\\nparamNameWidth += padding * 2;\\nif (this.isUseParamNamesWithIcons()) {\\n    const standardWidth = ImageManager.standardIconWidth || 32;\\n    paramNameWidth += standardWidth + 4;\\n}\\nlet arrowWidth = this.rightArrowWidth();\\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\\n\\n// Draw Parameters\\nlet x = baseX;\\nlet y = baseY;\\nlet value = 0;\\nlet diffValue = 0;\\nlet alter = 2;\\nfor (const paramId of params) {\\n    // Draw Param Name\\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\\n    this.resetFontSettings();\\n    x += paramNameWidth;\\n\\n    // Draw Param Before\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\\n    this.resetFontSettings();\\n    x += paramValueWidth;\\n\\n    // Draw Arrow\\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\\n    this.drawRightArrow(x, y);\\n    x += arrowWidth;\\n\\n    // Draw Param After\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\\n    x += paramValueWidth;\\n\\n    // Draw Param Change\\n    if (totalDivides > 2) {\\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\\n    }\\n\\n    // Prepare Next Parameter\\n    x = baseX;\\n    y += lineHeight;\\n    alter = alter === 2 ? 1 : 2;\\n}\"","LayoutStyle:str":"upper/right","StatusWindowWidth:num":"312","DrawBackRect:eval":"true","BackRectColor:str":"19","CursedTextPopup:json":"\"%1 is cursed by %3%2!\"","Command":"","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconEquip:num":"136","equipCmdDesc:json":"\"Pick and choose equipment to change.\"","CommandAddOptimize:eval":"true","optimizeCmdDesc:json":"\"Equip the strongest available equipment.\"","CmdIconOptimize:num":"137","CommandAddClear:eval":"true","clearCmdDesc:json":"\"Remove all available equipment.\"","CmdIconClear:num":"135","RemoveEquip":"","RemoveEquipIcon:num":"16","RemoveEquipText:str":"Remove","ShiftShortcutKey:eval":"true","Rulings":"","EquipAdjustHpMp:eval":"true","NonRemoveETypes:arraynum":"[]","NonOptimizeETypes:arraynum":"[]","ButtonAssist":"","buttonAssistRemove:str":"Unequip"}
 *
 * @param ShopScene:struct
 * @text Shop Menu Settings
 * @type struct<ShopScene>
 * @desc Change the Shop Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","Command":"","CmdHideDisabled:eval":"true","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconBuy:num":"208","CmdIconSell:num":"314","CmdIconCancel:num":"82","CmdCancelRename:str":"Exit","Prices":"","SellPriceRate:num":"0.50","BuyPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","SellPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","ButtonAssist":"","buttonAssistSmallIncrement:str":"-1/+1","buttonAssistLargeIncrement:str":"-10/+10"}
 *
 * @param StatusWindow:struct
 * @text Shop Status Window
 * @parent ShopScene:struct
 * @type struct<StatusWindow>
 * @desc Change the Item Status Window settings.
 * @default {"General":"","Width:num":"352","ParamChangeFontSize:num":"22","Translucent:num":"64","DrawBackRect:eval":"true","BackRectColor:str":"19","EquipData":"","EquipDataStyle:str":"compare","EquipDataCompare":"","AlreadyEquipMarker:str":"E","CannotEquipMarker:str":"-","NoChangeMarker:str":"-","DrawEquipData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nconst paramheight = this.gaugeLineHeight() + 8;\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Parameter Names\\nconst params = this.actorParams();\\nconst backY = y;\\ny = height - (params.length * paramheight) - 4;\\nlet paramX = x;\\nlet paramWidth = 0;\\nlet tableY = y;\\nfor (const paramId of params) {\\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\\n    y += paramheight;\\n}\\n\\n// Draw Actor Data\\nconst actorMax = $gameParty.maxBattleMembers();\\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\\nparamWidth = width - (actorWidth * actorMax);\\nfor (const actor of $gameParty.battleMembers()) {\\n    const index = $gameParty.battleMembers().indexOf(actor);\\n    const actorX = paramX + paramWidth + (index * actorWidth);\\n    this.changePaintOpacity(actor.canEquip(this._item));\\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\\n    let actorY = tableY;\\n\\n    // Draw Parameter Changes\\n    for (const paramId of params) {\\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\\n        actorY += paramheight;\\n    }\\n}\\n\\n// Draw Back Rectangles\\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\\nfor (let i = 0; i < actorMax; i++) {\\n    const actorX = paramX + paramWidth + (i * actorWidth);\\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\\n}\\nfor (const paramId of params) {\\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\\n    for (let i = 0; i < actorMax; i++) {\\n        const actorX = paramX + paramWidth + (i * actorWidth);\\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\\n    }\\n    tableY += paramheight;\\n}\"","EquipDataClassic":"","ClassicWeaponParameters:arraystr":"[\"HIT\"]","ClassicArmorParameters:arraystr":"[\"EVA\"]","DrawEquipClassicData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Item Weapon Type or Armor Type\\nif (this.drawItemEquipSubType(x, y, width)) y += lineHeight;\\n\\n// Draw Parameter Values\\nconst params = this.actorParams();\\nfor (const paramId of params) {\\n    if (this.isCustomParameter(paramId)) continue;\\n    this.drawActorParamClassic(paramId, x, y, width);\\n    y += lineHeight;\\n}\\n\\n// Draw Custom Entries\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","EquipDataDouble":"","DoubleWeaponParameters:arraystr":"[\"HIT\",\"CNT\"]","DoubleArmorParameters:arraystr":"[\"EVA\",\"GRD\"]","DrawEquipDoubleData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Item Weapon Type or Armor Type\\nif (this.drawItemEquipSubType(x, y, width)) y += lineHeight;\\n\\n// Draw Parameter Values\\nconst params = this.actorParams();\\nfor (const paramId of params) {\\n    if (this.isCustomParameter(paramId)) continue;\\n    this.drawActorParamClassic(paramId, x, y, hw);\\n    if (x === hw) {\\n        y += lineHeight;\\n        x = 0;\\n    } else {\\n        x = hw;\\n    }\\n}\\n// Realign\\nif (x === hw) {\\n    this.drawItemDarkRect(hw, y, hw, lineHeight);\\n    y += lineHeight;\\n    x = 0;\\n}\\n\\n// Draw Custom Entries\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","EquipDelayMS:num":"240","ItemData":"","ItemGeneral":"","MaxIcons:num":"8","MultiplierStandard:num":"1000000","DrawItemData:func":"\"const lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\n\\n// Draw Main Item Properties\\nif (this.drawItemConsumable(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\nif (this._item.occasion < 3) {\\n    y = this.drawItemDamage(x, y, width);\\n    y = this.drawItemEffects(x, y, width);\\n}\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Draw Remaining Item Properties\\nif (this._item.occasion < 3) {\\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemHitType(x, y, hw)) y += 0;\\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\\n}\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","Vocabulary":"","LabelConsume:str":"Consumable","Consumable:str":"✔","NotConsumable:str":"✘","Occasions":"","Occasion0:str":"Anytime Use","Occasion1:str":"Battle-Only","Occasion2:str":"Field-Only","Occasion3:str":"-","Scope":"","Scope0:str":"No Target","Scope1:str":"1 Foe","Scope2:str":"All Foes","Scope3:str":"Random Foe","Scope4:str":"2 Random Foes","Scope5:str":"3 Random Foes","Scope6:str":"4 Random Foes","Scope7:str":"1 Ally","Scope8:str":"Alive Allies","Scope9:str":"Dead Ally","Scope10:str":"Dead Allies","Scope11:str":"User","Scope12:str":"Any Ally","Scope13:str":"All Allies","Scope14:str":"Everybody","BattleCore":"","ScopeRandomAny:str":"%1 Random Units","ScopeRandomEnemies:str":"%1 Random Foes","ScopeRandomAllies:str":"%1 Random Allies","ScopeAlliesButUser:str":"Other Allies","ScopeAllyOrEnemy:str":"Ally/Enemy","ScopeEnemyOrAlly:str":"Enemy/Ally","LabelSpeed:str":"Speed","Speed2000:str":"Fastest","Speed1000:str":"Faster","Speed1:str":"Fast","Speed0:str":"Normal","SpeedNeg999:str":"Slow","SpeedNeg1999:str":"Slower","SpeedNeg2000:str":"Slowest","LabelSuccessRate:str":"Accuracy","LabelRepeats:str":"Hits","LabelHitType:str":"Type","HitType0:str":"Neutral","HitType1:str":"Physical","HitType2:str":"Magical","LabelElement:str":"Element","ElementWeapon:str":"\\I[97]Weapon","ElementNone:str":"\\I[160]No Element","DamageType":"","DamageType1:str":"%1 Damage Multiplier","DamageType2:str":"%1 Damage Multiplier","DamageType3:str":"%1 Recovery Multiplier","DamageType4:str":"%1 Recovery Multiplier","DamageType5:str":"%1 Drain Multiplier","DamageType6:str":"%1 Drain Multiplier","Effects":"","LabelRecoverHP:str":"%1 Recovery","LabelRecoverMP:str":"%1 Recovery","LabelRecoverTP:str":"%1 Recovery","LabelSelfGainTP:str":"User %1","LabelDamageHP:str":"%1 Damage","LabelDamageMP:str":"%1 Damage","LabelDamageTP:str":"%1 Damage","LabelApply:str":"Applies","LabelRemove:str":"Removes","EquipType":"","WeaponType:str":"Weapon Type","ArmorType:str":"Armor Type","NoEquipTypeResult:str":"-"}
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
 * Item Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Item Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param DisabledVanilla:eval
 * @text Disabled: Vanilla
 * @parent EnableLayout:eval
 * @type boolean
 * @on Pure Vanilla
 * @off Allow Options
 * @desc If NOT using the updated layout, keep all settings to
 * pure vanilla and ignore other Plugin Parameters.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ItemQt
 * @text Item Quantity
 *
 * @param MaxItems:num
 * @text Item Max
 * @parent ItemQt
 * @desc The default maximum quantity for items.
 * @default 99
 *
 * @param MaxWeapons:num
 * @text Weapon Max
 * @parent ItemQt
 * @desc The default maximum quantity for weapons.
 * @default 99
 *
 * @param MaxArmors:num
 * @text Armor Max
 * @parent ItemQt
 * @desc The default maximum quantity for armors.
 * @default 99
 *
 * @param ItemQuantityFmt:str
 * @text Quantity Format
 * @parent ItemQt
 * @desc How to display an item's quantity.
 * %1 - Item Quantity
 * @default ×%1
 *
 * @param ItemQuantityFontSize:num
 * @text Font Size
 * @parent ItemQt
 * @desc Default font size for item quantity.
 * @default 22
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Item Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Item Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param ItemSceneAdjustItemList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Item List Window in the Item Menu if using the Shop Status Window?
 * @default true
 *
 * @param ItemMenuStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
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
 * @param ItemMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code dimensions for this Status Window in the Item Menu.
 * Needs "Use Updated Layout" + "Disabled: Vanilla" as false.
 * @default "const width = this.statusWidth();\nconst height = this._itemWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._itemWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistCategory:str
 * @text Switch Category
 * @parent ButtonAssist
 * @desc Button assist text used for switching categories.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Switch Category
 *
 */
/* ----------------------------------------------------------------------------
 * Item Categories
 * ----------------------------------------------------------------------------
 */
/*~struct~Categories:
 *
 * @param MainList
 * @text List
 * 
 * @param List:arraystruct
 * @text Category List
 * @parent MainList
 * @type struct<Category>[]
 * @desc A list of the item categories displayed in the Item/Shop menus.
 * @default ["{\"Type:str\":\"RegularItems\",\"Icon:num\":\"208\"}","{\"Type:str\":\"AllWeapons\",\"Icon:num\":\"97\"}","{\"Type:str\":\"AllArmors\",\"Icon:num\":\"137\"}","{\"Type:str\":\"KeyItems\",\"Icon:num\":\"195\"}"]
 *
 * @param Style:str
 * @text Category Style
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
 * @desc How do you wish to draw categorie entries in the Category Window?
 * @default icon
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @parent MainList
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Vocabulary
 *
 * @param HiddenItemA:str
 * @text Hidden Item A
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Special Items
 *
 * @param HiddenItemB:str
 * @text Hidden Item B
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Unique Items
 *
 * @param Consumable:str
 * @text Consumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Consumable
 *
 * @param Nonconsumable:str
 * @text Nonconsumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Nonconsumable
 *
 * @param AlwaysUsable:str
 * @text Always Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Usable
 *
 * @param BattleUsable:str
 * @text Battle Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Battle
 *
 * @param FieldUsable:str
 * @text Field Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Field
 *
 * @param NeverUsable:str
 * @text Never Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Materials
 *
 */
/* ----------------------------------------------------------------------------
 * Category Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Type:str
 * @text Type
 * @type combo
 * @option AllItems
 * @option 
 * @option RegularItems
 * @option KeyItems
 * @option HiddenItemA
 * @option HiddenItemB
 * @option 
 * @option Consumable
 * @option Nonconsumable
 * @option 
 * @option AlwaysUsable
 * @option BattleUsable
 * @option FieldUsable
 * @option NeverUsable
 * @option 
 * @option AllWeapons
 * @option WType:x
 * @option 
 * @option AllArmors
 * @option AType:x
 * @option 
 * @option EType:x
 * @option 
 * @option Category:x
 * @option
 * @desc A list of the item categories displayed in the Item/Shop
 * menus. Replace x with ID numbers or text.
 * @default RegularItems
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param SwitchID:num
 * @text Visibility Switch
 * @type switch
 * @desc This Switch must be turned ON in order for the category to show.
 * Use 0 for no Switch requirement.
 * @default 0
 *
 * @param SortBy:str
 * @text Sorted By
 * @type select
 * @option ID
 * @option Name
 * @desc Sort this category (in Scene_Item and Scene_Shop only) this way.
 * @default ID
 *
 */
/* ----------------------------------------------------------------------------
 * New Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NewLabel:
 *
 * @param Enable:eval
 * @text Use NEW! Labels?
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the NEW! Labels or not?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @desc The icon index used to represent the NEW! text.
 * Use 0 to not draw any icons.
 * @default 0
 *
 * @param Text:str
 * @text Text
 * @desc The text written on the NEW! Label.
 * @default NEW!
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param FontFace:str
 * @text Font Face
 * @parent Text:str
 * @desc Font face used for the NEW! Label.
 * @default Verdana
 *
 * @param FontSize:str
 * @text Font Size
 * @parent Text:str
 * @desc The font size used for the NEW! text.
 * @default 16
 *
 * @param FadeLimit:num
 * @text Fade Limit
 * @desc What's the upper opaque limit before reversing?
 * @default 360
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @desc What's the fade speed of the NEW! Label?
 * @default 4
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the NEW! Label's X position by.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the NEW! Label's Y position by.
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Equip Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/right
 *
 * @param ParamValueFontSize:num
 * @text Param Font Size
 * @parent EnableLayout:eval
 * @desc The font size used for parameter values.
 * @default 22
 *
 * @param MenuPortraits:eval
 * @text Show Menu Portraits?
 * @parent EnableLayout:eval
 * @type boolean
 * @on Use Portraits
 * @off Use Faces
 * @desc If Main Menu Core is installed, display the Menu Portraits
 * instead of the actor's face in the status window?
 * @default true
 *
 * @param DrawPortraitJS:func
 * @text JS: Portrait Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If Menu Portraits are available, this is code used to draw
 * the upper data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst x1 = padding;\nconst x2 = this.innerWidth - 128 - padding;\n\n// Draw Menu Image\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\n\n// Draw Data\nthis.drawActorName(this._actor, x1, lineHeight * 0);\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);"
 *
 * @param DrawFaceJS:func
 * @text JS: Face Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If faces used used, this is code used to draw the upper
 * data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst x = Math.floor(this.innerWidth / 2);\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\nlet dataHeight = lineHeight * 3;\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\n\n// Draw Data\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\nif (this.innerHeight > 444) {\n    this.drawActorClass(this._actor, x, dataY + lineHeight * 2);\n    this.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\n} else {\n    this.placeBasicGauges(this._actor, x, dataY + lineHeight * 2);\n}"
 *
 * @param DrawParamJS:func
 * @text JS: Parameter Lower
 * @parent EnableLayout:eval
 * @type note
 * @desc Code to determine how parameters are drawn in the
 * Status Window.
 * @default "// Declare variables\nconst params = this.actorParams();\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst baseX = 0;\nconst baseY = this.innerHeight - params.length * lineHeight;\nconst baseWidth = this.innerWidth;\nconst valueFontSize = this.paramValueFontSize();\n\n// Calculate Widths\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\nparamNameWidth += padding * 2;\nif (this.isUseParamNamesWithIcons()) {\n    const standardWidth = ImageManager.standardIconWidth || 32;\n    paramNameWidth += standardWidth + 4;\n}\nlet arrowWidth = this.rightArrowWidth();\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\n\n// Draw Parameters\nlet x = baseX;\nlet y = baseY;\nlet value = 0;\nlet diffValue = 0;\nlet alter = 2;\nfor (const paramId of params) {\n    // Draw Param Name\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\n    this.resetFontSettings();\n    x += paramNameWidth;\n\n    // Draw Param Before\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\n    this.resetFontSettings();\n    x += paramValueWidth;\n\n    // Draw Arrow\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\n    this.drawRightArrow(x, y);\n    x += arrowWidth;\n\n    // Draw Param After\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\n    x += paramValueWidth;\n\n    // Draw Param Change\n    if (totalDivides > 2) {\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\n    }\n\n    // Prepare Next Parameter\n    x = baseX;\n    y += lineHeight;\n    alter = alter === 2 ? 1 : 2;\n}"
 *
 * @param StatusWindowWidth:num
 * @text Status Window Width
 * @parent General
 * @desc The usual width of the status window if using the 
 * non-Updated Equip Menu Layout.
 * @default 312
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param CursedTextPopup:json
 * @text Cursed Equip Popup
 * @parent General
 * @type note
 * @desc %1 - Actor, %2 - Equip, %3 - Icon. Text codes allowed.
 * Requires VisuMZ_0_CoreEngine! Empty to not use.
 * @default "%1 is cursed by %3%2!"
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconEquip:num
 * @text Equip Icon
 * @parent Command
 * @desc The icon used for the Equip command.
 * @default 136
 *
 * @param equipCmdDesc:json
 * @text Help Description
 * @parent CmdIconEquip:num
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Pick and choose equipment to change."
 *
 * @param CommandAddOptimize:eval
 * @text Add Optimize Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Optimize" command to the Command Window?
 * @default true
 *
 * @param optimizeCmdDesc:json
 * @text Help Description
 * @parent CommandAddOptimize:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Equip the strongest available equipment."
 *
 * @param CmdIconOptimize:num
 * @text Optimize Icon
 * @parent CommandAddOptimize:eval
 * @desc The icon used for the Optimize command.
 * @default 137
 *
 * @param CommandAddClear:eval
 * @text Add Clear Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Clear" command to the Command Window?
 * @default true
 *
 * @param clearCmdDesc:json
 * @text Help Description
 * @parent CommandAddClear:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Remove all available equipment."
 *
 * @param CmdIconClear:num
 * @text Clear Icon
 * @parent CommandAddClear:eval
 * @desc The icon used for the Clear command.
 * @default 135
 *
 * @param RemoveEquip
 * @text Remove Equip
 *
 * @param RemoveEquipIcon:num
 * @text Icon
 * @parent RemoveEquip
 * @desc Icon used for equipment removal.
 * @default 16
 *
 * @param RemoveEquipText:str
 * @text Text
 * @parent RemoveEquip
 * @desc Text used for equipment removal.
 * @default Remove
 *
 * @param ShiftShortcutKey:eval
 * @text Use SHIFT Shortcut?
 * @parent RemoveEquip
 * @type boolean
 * @on Use
 * @off Don't
 * @desc Add the "Shift" button as a shortcut key to removing items?
 * @default true

 * @param Rulings
 *
 * @param EquipAdjustHpMp:eval
 * @text Equip-Adjust HP/MP
 * @parent Rulings
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * @default true
 * 
 * @param NonRemoveETypes:arraynum
 * @text Non-Removable Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that must always have
 * an item equipped and cannot be empty.
 * @default []
 *
 * @param NonOptimizeETypes:arraynum
 * @text Non-Optimized Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that will be ignored
 * when equipment is being optimized.
 * @default []
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistRemove:str
 * @text SHIFT: Remove
 * @parent ButtonAssist
 * @desc Button assist text used for the SHIFT Remove Shortcut.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Unequip
 * 
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Shop Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param Switches
 *
 * @param SwitchBuy:num
 * @text Switch: Buy
 * @parent Switches
 * @type switch
 * @desc Buying items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param SwitchSell:num
 * @text Switch: Sell
 * @parent Switches
 * @type switch
 * @desc Selling items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdHideDisabled:eval
 * @text Hide Unavailable?
 * @parent Command
 * @type boolean
 * @on Hide
 * @off Default
 * @desc Hide all unavailable commands like when a shop is set to Purchase Only?
 * @default true
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconBuy:num
 * @text Buy Icon
 * @parent Command
 * @desc The icon used for the Buy command.
 * @default 208
 *
 * @param CmdIconSell:num
 * @text Sell Icon
 * @parent Command
 * @desc The icon used for the Sell command.
 * @default 314
 *
 * @param CmdIconCancel:num
 * @text Cancel Icon
 * @parent Command
 * @desc The icon used for the Cancel command.
 * @default 82
 *
 * @param CmdCancelRename:str
 * @text Rename "Cancel"
 * @parent Command
 * @desc Rename Cancel to something more logical for the Shop Menu Scene.
 * @default Exit
 *
 * @param Prices
 *
 * @param SellPriceRate:num
 * @text Sell Price Rate
 * @parent Prices
 * @desc The default sell price rate.
 * @default 0.50
 *
 * @param BuyPriceJS:func
 * @text JS: Buy Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the buy price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 *
 * @param SellPriceJS:func
 * @text JS: Sell Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the sell price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 * 
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistSmallIncrement:str
 * @text Small Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -1/+1
 *
 * @param buttonAssistLargeIncrement:str
 * @text Large Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -10/+10
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param General
 *
 * @param Width:num
 * @text Window Width
 * @parent General
 * @desc The usual width of the status window.
 * @default 352
 *
 * @param ParamChangeFontSize:num
 * @text Parameter Font Size
 * @parent General
 * @desc Font size used for parameter changes.
 * @default 22
 *
 * @param Translucent:num
 * @text Translucent Opacity
 * @parent General
 * @desc Opacity setting used for translucent window objects.
 * @default 64
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param EquipData
 * @text Equipment Data
 * 
 * @param EquipDataStyle:str
 * @text Data Style
 * @parent EquipData
 * @type select
 * @option Compare - Compares selected equip to equipped gear
 * @value compare
 * @option Classic - Shows basic parameters of selected equip
 * @value classic
 * @option Double - Shows basic parameters in double columns
 * @value double
 * @desc How do you wish to display equipment data?
 * @default compare
 *
 * @param EquipDataCompare
 * @text Compare Style
 * @parent EquipDataStyle:str
 *
 * @param AlreadyEquipMarker:str
 * @text Already Equipped
 * @parent EquipDataCompare
 * @desc Marker used to show an actor cannot equip an item.
 * @default E
 *
 * @param CannotEquipMarker:str
 * @text Can't Equip
 * @parent EquipDataCompare
 * @desc Marker used to show an actor cannot equip an item.
 * @default -
 *
 * @param NoChangeMarker:str
 * @text No Changes
 * @parent EquipDataCompare
 * @desc Marker used to show no changes have occurred.
 * @default -
 *
 * @param DrawEquipData:func
 * @text JS: Draw Equip Data
 * @parent EquipDataCompare
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nconst paramheight = this.gaugeLineHeight() + 8;\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Parameter Names\nconst params = this.actorParams();\nconst backY = y;\ny = height - (params.length * paramheight) - 4;\nlet paramX = x;\nlet paramWidth = 0;\nlet tableY = y;\nfor (const paramId of params) {\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\n    y += paramheight;\n}\n\n// Draw Actor Data\nconst actorMax = $gameParty.maxBattleMembers();\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\nparamWidth = width - (actorWidth * actorMax);\nfor (const actor of $gameParty.battleMembers()) {\n    const index = $gameParty.battleMembers().indexOf(actor);\n    const actorX = paramX + paramWidth + (index * actorWidth);\n    this.changePaintOpacity(actor.canEquip(this._item));\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\n    let actorY = tableY;\n\n    // Draw Parameter Changes\n    for (const paramId of params) {\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\n        actorY += paramheight;\n    }\n}\n\n// Draw Back Rectangles\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\nfor (let i = 0; i < actorMax; i++) {\n    const actorX = paramX + paramWidth + (i * actorWidth);\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\n}\nfor (const paramId of params) {\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\n    for (let i = 0; i < actorMax; i++) {\n        const actorX = paramX + paramWidth + (i * actorWidth);\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\n    }\n    tableY += paramheight;\n}"
 *
 * @param EquipDataClassic
 * @text Classic Style
 * @parent EquipDataStyle:str
 *
 * @param ClassicWeaponParameters:arraystr
 * @text Added Weapon Params
 * @parent EquipDataClassic
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
 * @desc Display these parameters when a weapon is selected.
 * Requires VisuMZ_0_CoreEngine!
 * @default ["HIT"]
 *
 * @param ClassicArmorParameters:arraystr
 * @text Added Armor Params
 * @parent EquipDataClassic
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
 * @desc Display these parameters when an armor is selected.
 * Requires VisuMZ_0_CoreEngine!
 * @default ["EVA"]
 *
 * @param DrawEquipClassicData:func
 * @text JS: Draw Equip Data
 * @parent EquipDataClassic
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Item Weapon Type or Armor Type\nif (this.drawItemEquipSubType(x, y, width)) y += lineHeight;\n\n// Draw Parameter Values\nconst params = this.actorParams();\nfor (const paramId of params) {\n    if (this.isCustomParameter(paramId)) continue;\n    this.drawActorParamClassic(paramId, x, y, width);\n    y += lineHeight;\n}\n\n// Draw Custom Entries\ny = this.drawItemCustomEntries(x, y, width);\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param EquipDataDouble
 * @text Double Style
 * @parent EquipDataStyle:str
 *
 * @param DoubleWeaponParameters:arraystr
 * @text Added Weapon Params
 * @parent EquipDataDouble
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
 * @desc Display these parameters when a weapon is selected.
 * Requires VisuMZ_0_CoreEngine!
 * @default ["HIT","CNT"]
 *
 * @param DoubleArmorParameters:arraystr
 * @text Added Armor Params
 * @parent EquipDataDouble
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
 * @desc Display these parameters when an armor is selected.
 * Requires VisuMZ_0_CoreEngine!
 * @default ["EVA","GRD"]
 *
 * @param DrawEquipDoubleData:func
 * @text JS: Draw Equip Data
 * @parent EquipDataDouble
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Item Weapon Type or Armor Type\nif (this.drawItemEquipSubType(x, y, width)) y += lineHeight;\n\n// Draw Parameter Values\nconst params = this.actorParams();\nfor (const paramId of params) {\n    if (this.isCustomParameter(paramId)) continue;\n    this.drawActorParamClassic(paramId, x, y, hw);\n    if (x === hw) {\n        y += lineHeight;\n        x = 0;\n    } else {\n        x = hw;\n    }\n}\n// Realign\nif (x === hw) {\n    this.drawItemDarkRect(hw, y, hw, lineHeight);\n    y += lineHeight;\n    x = 0;\n}\n\n// Draw Custom Entries\ny = this.drawItemCustomEntries(x, y, width);\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param EquipDelayMS:num
 * @text Delay MS
 * @parent EquipData
 * @type number
 * @min 1
 * @max 999
 * @desc How many milliseconds (MS) to delay the preview update?
 * This is to prevent lag spikes for equips only.
 * @default 240
 *
 * @param ItemData
 * @text Item Data
 *
 * @param ItemGeneral
 * @parent ItemData
 * @text Data Settings
 *
 * @param MaxIcons:num
 * @text Max State/Buff Icons
 * @parent ItemGeneral
 * @desc Maximum number of icons that can be displayed for Add/Remove States/Buffs.
 * @default 8
 *
 * @param MultiplierStandard:num
 * @text Multiplier Standard
 * @parent ItemGeneral
 * @desc Constant standard to filter out random values when calculating the damage multiplier.
 * @default 1000000
 *
 * @param DrawItemData:func
 * @text JS: Draw Item Data
 * @parent ItemGeneral
 * @type note
 * @desc Code used to draw the item data for the Shop Status Window.
 * @default "const lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\n\n// Draw Main Item Properties\nif (this.drawItemConsumable(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\nif (this._item.occasion < 3) {\n    y = this.drawItemDamage(x, y, width);\n    y = this.drawItemEffects(x, y, width);\n}\ny = this.drawItemCustomEntries(x, y, width);\n\n// Draw Remaining Item Properties\nif (this._item.occasion < 3) {\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\n    if (this.drawItemHitType(x, y, hw)) y += 0;\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\n}\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param Vocabulary
 * @parent ItemData
 *
 * @param LabelConsume:str
 * @text Consumable
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Consumable
 *
 * @param Consumable:str
 * @text Yes
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✔
 *
 * @param NotConsumable:str
 * @text No
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✘
 *
 * @param Occasions
 * @parent Vocabulary
 *
 * @param Occasion0:str
 * @text Always
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Anytime Use
 *
 * @param Occasion1:str
 * @text Battle Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Battle-Only
 *
 * @param Occasion2:str
 * @text Menu Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Field-Only
 *
 * @param Occasion3:str
 * @text Never
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default -
 *
 * @param Scope
 * @parent Vocabulary
 *
 * @param Scope0:str
 * @text None
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default No Target
 *
 * @param Scope1:str
 * @text 1 Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Foe
 *
 * @param Scope2:str
 * @text All Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Foes
 *
 * @param Scope3:str
 * @text 1 Random Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Random Foe
 *
 * @param Scope4:str
 * @text 2 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 2 Random Foes
 *
 * @param Scope5:str
 * @text 3 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 3 Random Foes
 *
 * @param Scope6:str
 * @text 4 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 4 Random Foes
 *
 * @param Scope7:str
 * @text 1 Ally
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Ally
 *
 * @param Scope8:str
 * @text All Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Alive Allies
 *
 * @param Scope9:str
 * @text 1 Ally (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Ally
 *
 * @param Scope10:str
 * @text All Allies (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Allies
 *
 * @param Scope11:str
 * @text The User
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default User
 *
 * @param Scope12:str
 * @text 1 Ally (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Any Ally
 *
 * @param Scope13:str
 * @text All Allies (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Allies
 *
 * @param Scope14:str
 * @text Enemies & Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Everybody
 *
 * @param BattleCore
 * @text Battle Core Support
 * @parent Vocabulary
 *
 * @param ScopeRandomAny:str
 * @text x Random Any
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Any> notetag.
 * @default %1 Random Units
 *
 * @param ScopeRandomEnemies:str
 * @text x Random Enemies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Enemies> notetag.
 * @default %1 Random Foes
 *
 * @param ScopeRandomAllies:str
 * @text x Random Allies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Allies> notetag.
 * @default %1 Random Allies
 *
 * @param ScopeAlliesButUser:str
 * @text All Allies But User
 * @parent BattleCore
 * @desc Vocabulary used for <Target: All Allies But User> notetag.
 * @default Other Allies
 *
 * @param ScopeAllyOrEnemy:str
 * @text Ally or Enemy
 * @parent BattleCore
 * @desc Vocabulary used for <Target: Ally or Enemy> notetag.
 * @default Ally/Enemy
 *
 * @param ScopeEnemyOrAlly:str
 * @text Enemy or Ally
 * @parent BattleCore
 * @desc Vocabulary used for <Target: Enemy or Ally> notetag.
 * @default Enemy/Ally
 *
 * @param LabelSpeed:str
 * @text Speed
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Speed
 *
 * @param Speed2000:str
 * @text >= 2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fastest
 *
 * @param Speed1000:str
 * @text >= 1000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Faster
 *
 * @param Speed1:str
 * @text >= 1 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fast
 *
 * @param Speed0:str
 * @text == 0 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Normal
 *
 * @param SpeedNeg999:str
 * @text >= -999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slow
 *
 * @param SpeedNeg1999:str
 * @text >= -1999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slower
 *
 * @param SpeedNeg2000:str
 * @text <= -2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slowest
 *
 * @param LabelSuccessRate:str
 * @text Success Rate
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Accuracy
 *
 * @param LabelRepeats:str
 * @text Repeats
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Hits
 *
 * @param LabelHitType:str
 * @text Hit Type
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Type
 *
 * @param HitType0:str
 * @text Certain Hit
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Neutral
 *
 * @param HitType1:str
 * @text Physical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Physical
 *
 * @param HitType2:str
 * @text Magical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Magical
 *
 * @param LabelElement:str
 * @text Element
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Element
 *
 * @param ElementWeapon:str
 * @text Weapon-Based
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[97]Weapon
 *
 * @param ElementNone:str
 * @text Nonelement Element
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[160]No Element
 *
 * @param DamageType
 * @text Damage Type
 * @parent Vocabulary
 *
 * @param DamageType1:str
 * @text HP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType2:str
 * @text MP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType3:str
 * @text HP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType4:str
 * @text MP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType5:str
 * @text HP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param DamageType6:str
 * @text MP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param Effects
 * @parent Vocabulary
 *
 * @param LabelRecoverHP:str
 * @text Recover HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverMP:str
 * @text Recover MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverTP:str
 * @text Recover TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelSelfGainTP:str
 * @text Self Gain TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default User %1
 *
 * @param LabelDamageHP:str
 * @text Damage HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageMP:str
 * @text Damage MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageTP:str
 * @text Damage TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelApply:str
 * @text Add State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Applies
 *
 * @param LabelRemove:str
 * @text Remove State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Removes
 *
 * @param EquipType
 * @parent Vocabulary
 * @text Equip Type
 *
 * @param WeaponType:str
 * @text Weapon Type
 * @parent EquipType
 * @desc Vocabulary used for this data entry.
 * @default Weapon Type
 *
 * @param ArmorType:str
 * @text Armor Type
 * @parent EquipType
 * @desc Vocabulary used for this data entry.
 * @default Armor Type
 *
 * @param NoEquipTypeResult:str
 * @text No Equip Type
 * @parent EquipType
 * @desc Marker used to show an unlisted equip type.
 * @default -
 *
 */
//=============================================================================

const _0x312955=_0x44e0;function _0x5966(){const _0x2a92ef=['trim','members','isOpen','Game_BattlerBase_meetsItemConditions','_categoryNameWindow','addShopTrackingItemBuy','indexOf','LabelRecoverMP','isPageChangeRequested','getMatchingInitEquip','createCommandNameWindow','isHoverEnabled','drawTextEx','Scene_Shop_numberWindowRect','helpDescriptionText','isProxyItem','bitmap','parameters','addState','numberWindowRect','refreshCursor','NoEquipTypeResult','tradeItemWithParty','price','drawUpdatedBeforeParamValue','buttonAssistRemove','addInnerChild','commandWindowRect','Scene_Item_createCategoryWindow','buyingPrice','isRightInputMode','makeCommandList','isDualWield','constructor','LUK','isPressed','contentsBack','isEnabled','MaxMP','drawItemDamageAmount','addEquipCommand','commandNameWindowDrawText','TP\x20DAMAGE','_data','Window_ItemList_item','processTouchModernControls','setMp','Scene_Shop_statusWindowRect','Scene_Shop_buyWindowRect','processShiftRemoveShortcut','start','purifyCursedEquips','AGI','isEquipCommandAdded','canUse','buttonAssistKey3','NoChangeMarker','KeyItemProtect','Scene_Equip_onSlotCancel','buttonAssistLargeIncrement','_item','addShopTrackingGoldBuy','processCursorMove','BackRectColor','buyWindowRectItemsEquipsCore','equipHasCustomParams','slotWindowRectItemsEquipsCore','colSpacing','DEF','mainAreaBottom','KeyItems','prepareRefreshItemsEquipsCoreLayout','user','name','paramchangeTextColor','_allowArtifactTraitObjects','getItemEffectsHpDamageText','modifiedBuyPriceItemsEquipsCore','ItemQuantityFontSize','CheckCursedItemMsg','addShopTrackingGoldSell','version','EquipAdjustHpMp','armor-%1','BuyTurnSwitchOff','onTouchSelect','paramValueByName','isCustomParameter','split','helpAreaHeight','isGoodShown','Settings','buttonAssistKey2','revertGlobalNamespaceVariables','drawItemDarkRect','REPEAT','TGR','helpWindowRectItemsEquipsCore','ATK','addItemCategory','isMainMenuCoreMenuImageOptionAvailable','helpAreaTop','isArray','REC','ActorResetEquipSlots','drawPossession','geUpdatedLayoutStatusWidth','call','blt','Step2Start','onSlotOk','addCommand','sellPriceRate','categoryNameWindowDrawBackground','CmdHideDisabled','New','isPlaytest','alterSkillName','meetsItemConditionsJS','English','goodsToItem','defaultItemMax','REMOVED\x20EFFECTS','bestEquipItem','systemColor','Game_Actor_tradeItemWithParty','Window_Selectable_refresh','mhp','SellTurnSwitchOn','shouldCommandWindowExist','Game_Actor_equips_artifacts','nonOptimizeEtypes','Scene_Shop_doSell','postCreateItemsEquipsCore','getEquipRequirements','262161aZxJMh','slotWindowRect','Parse_Notetags_Batch','format','FUNC','onCategoryOk','Game_Enemy_traitObjects_artifact','buttonAssistText2','CEV','forceChangeEquip','equipSlots','EFFECT_RECOVER_MP','EFFECT_REMOVE_STATE','<%1:[\x20]([\x5c+\x5c-]\x5cd+)>','Scene_Shop_createSellWindow','mainAreaHeight','hitType','isTroopArtifact','postCreateSlotWindowItemsEquipsCore','SetupProxyItemGroups','getItemDamageAmountTextOriginal','categoryItemTypes','DrawEquipClassicData','setCategory','addItemCategories','double','Window_ItemList_maxCols','updateHelp','_categoryWindow','equip','isOptimizeCommandEnabled','createSlotWindow','_itemIDs','CommandAddClear','Scene_Shop_activateSellWindow','getClassRequirements','prepareNextScene','_shopStatusMenuMode','getItemEffectsMpDamageText','MANUAL','tpGain','Speed1000','StatusWindow','hasItem','onSellOk','auto','drawItemScope','ShowShopStatus','SwitchSell','optimizeCmdDesc','mainFontFace','isBattleTest','ARRAYNUM','setNewItem','ITEMS_EQUIPS_CORE','Scene_Shop_createCategoryWindow','buy','drawActorParamDifference','drawItemNumber','Type','hide','processDrawIcon','isCommandEnabled','description','Scene_Equip','bind','EquipScene','Parse_Notetags_ParamValues','getPurifyTransformation','_scrollDuration','onCategoryCancel','etypeId','WEAPON','ScopeRandomAllies','parseLocalizedText','isClicked','hideAdditionalSprites','categoryNameWindowCenter','NUM','categoryStyle','right','isBuyCommandEnabled','optimize','onMenuImageLoad','Scene_Item_helpWindowRect','_actor','SetupProxyItemGroup','onSellOkItemsEquipsCore','EFFECT_ADD_STATE','Scene_Item_create','processHandling','LabelRepeats','nextActor','setStatusWindow','Scene_Shop_goldWindowRect','isEquipItem','commandNameWindowDrawBackground','show','PurifyParty','floor','onSlotOkAutoSelect','getItemDamageElementText','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','currentSymbol','processShopCondListingOnSellItem','isEquipChangeOk','Speed0','equips','textLocale','getMenuImage','replace','onSlotCancel','refreshDelay','mainCommandWidth','EquipDelayMS','Scene_Shop_onSellOk','Parse_Notetags_Sorting','playBuzzerSound','fontSizeRatio','setItemWindow','paramBase','LayoutStyle','_scene','min','Actors','Game_Actor_changeClass','_buyWindow','processCursorMoveModernControls','buffIconIndex','_tempActorB','QUANTITY','itemDataFontSize','5180556BgluvJ','addShopTrackingItemSell','_bypassReleaseUnequippableItemsItemsEquipsCore','updateMoneyAmount','gaugeLineHeight','getItemConsumableLabel','mmp','LabelDamageHP','getShopTrackingItem','Scope%1','BatchShop','ActorChangeEquipSlots','ScopeRandomEnemies','EquipParams','meetsShopListingConditions','drawItemEffectsRemovedStatesBuffs','ConvertParams','textColor','ItemScene','partyArtifacts','MAT','Scene_Shop_onSellCancel','setHelpWindowItem','changeClass','item','ARRAYEVAL','ShopScene','paramPlus','_slotId','createCategoryNameWindow','exit','_skillIDs','9676956tgZfrO','deepCopy','isNewItem','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','drawUpdatedAfterParamValue','RegExp','newLabelEnabled','hideNewLabelSprites','getItemScopeText','refreshItemsEquipsCoreNoMenuImage','paramPlusItemsEquipsCoreCustomJS','isVisuMzLocalizationEnabled','getItemDamageAmountText','_numberWindow','HideAllSwitches','_goods','171110pCjEHX','Scene_Item_createItemWindow','addClearCommand','drawItem','mainAreaTop','buttonAssistCategory','Parse_Notetags_EnableJS','CmdCancelRename','Scene_Shop_commandWindowRect','SpeedNeg999','MAXMP','addStateBuffChanges','getShopTrackingData','onDatabaseLoaded','Remove\x20all\x20available\x20equipment.','activateItemWindow','itemEnableJS','keyItem','getShopTrackingGoldBuy','standardIconHeight','isItem','CmdIconSell','Scene_Equip_commandEquip','maxVisibleItems','ADDED\x20EFFECTS','meetsClassRequirements','Parse_Notetags_EquipSlots','getItemSpeedLabel','_newItemsList','_bypassNewLabel','BattleUsable','getShopTrackingItemSell','cancel','possession','parse','Window_ItemList_colSpacing','Consumable','allowCommandWindowCursorUp','LabelRecoverTP','process_VisuMZ_ItemsEquipsCore_Notetags','map','optimizeEquipments','meetsItemConditions','push','drawItemEffectsTpRecovery','getItemSuccessRateLabel','TCR','buttonAssistSlotWindowShift','clearNewLabelFromItem','initShopTrackingData','isClearCommandEnabled','isSoleWeaponType','value1','SwitchID','Scene_Equip_create','drawItemStyleIcon','CannotEquipMarker','checkShiftRemoveShortcut','addChild','ItemMenuStatusRect','changeBuff','_helpWindow','TRG','Window_ShopStatus_setItem','drawIcon','(+%1)','makeItemList','onActorChange','updateSmoothScroll','isPureVanillaMode','IncludeShopItem','adjustItemWidthByStatus','max','placeNewLabel','_commandNameWindow','_classIDs','getItemRepeatsText','_dummyWindow','DrawBackRect','meetsEquipRequirement','uiInputPosition','getItemEffectsRemovedStatesBuffsText','_statusWindow','CRI','currencyUnit','getItemHitTypeText','Window_ShopBuy_goodsToItem','setText','ShopListingRegExp','anyEmptyEquipSlotsOfSameEtype','EXR','drawParamName','gold','EnableLayout','drawItemEffectsHpDamage','maxCols','_newLabelOpacity','getItemDamageAmountLabelOriginal','+%1','commandSellItemsEquipsCore','_shopTrackingData','addOptimizeCommand','MaxArmors','pageup','getEmptyEquipSlotOfSameEtype','commandEquip','height','initialize','gaugeBackColor','n/a','updateCategoryNameWindow','equipCmdDesc','%1%','SPEED','_equips','isDrawItemNumber','isEquipWtypeOk','drawItemCustomEntryLine','_newLabelOpacityChange','scrollTo','DAMAGE\x20MULTIPLIER','playCursorSound','addBuyCommand','HideAnySwitches','hideDisabledCommands','Scene_Equip_onSlotOk','drawItemCost','getItemEffectsMpRecoveryLabel','_doubleTouch','Translucent','foreground','getItemEffectsAddedStatesBuffsLabel','elements','addSellCommand','standardIconWidth','CommandAddOptimize','Window_ShopBuy_refresh','Window_ShopBuy_item','ScopeEnemyOrAlly','getProxyItem','QoL','setItem','addWindow','formula','params','artifactIDs','shift','onTouchSelectModern','Window_EquipItem_includes','Scene_Equip_slotWindowRect','helpDesc','mainFontSize','MDF','commandWindowRectItemsEquipsCore','isClearEquipOk','Game_Actor_changeEquip','drawUpdatedParamValueDiff','cursorUp','===','commandBuyItemsEquipsCore','addLoadListener','ExtDisplayedParams','LabelSelfGainTP','paramValueFontSize','createItemWindow','compare','changeTextColor','Scene_Shop_create','splice','LabelRemove','loadCharacter','MAXHP','releaseUnequippableItems','_paramPlus','calcEquipItemPerformance','armors','pop','down','partyArtifactIDs','687028XImWRD','ItemQuantityFmt','onBuyOk','fontSize','popScene','Scene_ItemBase_activateItemWindow','loadPicture','MRF','numItems','Speed2000','SellPriceJS','\x5cb%1\x5cb','isWeapon','LabelDamageMP','isClearCommandAdded','CmdIconEquip','drawItemKeyData','flatMP','smoothSelect','LabelDamageTP','GRD','update','statusWindowRect','itemTextAlign','object','gainTP','Game_Party_initialize','cursorPageup','return\x200','isEquipCommandEnabled','_cache_etypeIDs','pagedown','actorId','Equip\x20the\x20strongest\x20available\x20equipment.','DisabledVanilla','buttonAssistOffset3','setupBattleTestItems','MDR','initEquips','drawItemDamageElement','DoubleWeaponParameters','removeBattleTestArtifacts','consumeItem','Step3Start','AlreadyEquipMarker','troopArtifacts','isShiftRemoveShortcutEnabled','ConvertNumberToString','MCR','active','getItemEffects','sortPriority','getWeaponIdWithName','maxItems','maxItemAmount','updateChangedSlots','FadeLimit','SwitchBuy','isOptimizeEquipOk','visible','Scene_Equip_createSlotWindow','clearNewItem','562381QVusAB','OCCASION','Scene_Equip_commandWindowRect','buttonAssistKey1','CNT','statusWidth','smoothScrollTo','isShowNew','item-%1','getItemSuccessRateText','discardEquip','flatHP','_shopStatusMenuAlly','onTouchOk','ARRAYFUNC','Scene_Equip_statusWindowRect','getItemEffectsRemovedStatesBuffsLabel','isCursedItem','Parse_Notetags_Prices','ARMOR','equip2','iconText','localeCompare','SUCCESS\x20RATE','uiHelpPosition','changeEquipBase','move','SortBy','drawItemEffects','drawItemActorMenuImage','ScopeAlliesButUser','_category','_customItemInfo','occasion','drawEquipDataDouble','%1-%2','playOkSound','drawItemSpeed','setHelpWindow','drawItemEffectsAddedStatesBuffs','ParamChangeFontSize','EVA','setValue','armorTypes','?????','Step1End','fontFace','registerCommand','Scene_Boot_onDatabaseLoaded','itypeId','Speed1','onBuyItem','loseItem','Scene_Shop_commandBuy','PurchaseOnly','toggleType','smallParamFontSize','USER\x20TP\x20GAIN','drawItemHitType','EQUIP_DELAY_MS','_forcedSlots','drawEquipData','DoubleArmorParameters','getItemConsumableText','categoryList','getEquipDataStyle','canEquipWithOptimize','LabelSuccessRate','isHovered','contents','Game_Actor_forceChangeEquip','EFFECT_RECOVER_HP','ParseClassNotetags','EFFECT_REMOVE_BUFF','elementId','_weaponIDs','checkItemConditionsSwitchNotetags','troopArtifactIDs','drawActorParamClassic','concat','meetsEquipRequirements','PHA','ListWindowCols','ScopeAllyOrEnemy','isBottomHelpMode','setupItemDamageTempActors','ceil','setHandler','switchProxyItem','prepareNewEquipSlotsOnLoad','getItemDamageAmountLabelBattleCore','Scope7','textWidth','_itemData','commandName','determineBaseSellingPrice','Game_Item_setObject','onBuyCancel','MaxIcons','isToggleSkill','Window_ItemList_drawItem','isUseParamNamesWithIcons','FontFace','itemAt','wtypeId','statusWindowRectItemsEquipsCore','DrawEquipData','Game_Actor_discardEquip','Game_BattlerBase_paramPlus_artifact','index','isUseModernControls','test','commandStyle','MaxWeapons','Scene_Shop_prepare','processCursorHomeEndTrigger','ParseItemNotetags','Game_Actor_artifact','needsNewTempActor','getClassIdWithName','MaxHP','Parse_Notetags_Category','_tempActorA','baseSellingPrice','7XcplLM','initNewLabelSprites','_bypassProxy','categoryStyleCheck','isPartyArtifact','meetsItemConditionsNotetags','drawItemEffectsMpDamage','Damage\x20Formula\x20Error\x20for\x20%1','SortByIDandPriority','sellWindowRectItemsEquipsCore','actor','StatusWindowWidth','filter','battleMembers','getEtypeIdWithName','drawItemQuantity','_commandWindow','makeDeepCopy','gainItem','deactivate','ItemsEquipsCore','MRG','drawItemEffectsHpRecovery','NonOptimizeETypes','_resetFontColor','clear','drawItemConsumable','drawRemoveItem','SpeedNeg2000','prototype','getParamValueClassicNoCore','note','Game_Party_gainItem_artifact','addShopTrackingItem','VisuMZ_1_MainMenuCore','6456592LxqbXH','FieldUsable','ShowAllSwitches','OffsetY','drawParamsItemsEquipsCore','weapon-%1','Game_Party_consumeItem','_etypeIDs','_getClassRequirements','damageColor','Scene_Equip_onActorChange','_purchaseOnly','createNewLabelSprite','Scene_Shop_sellWindowRect','customEquipParams','_goodsCount','EFFECT_ADD_DEBUFF','Scene_Equip_itemWindowRect','convertInitEquipsToItems','powerUpColor','create','getItemQuantityText','random','_getEquipRequirements','onSellItem','_armorIDs','commandBuy','isSkill','proxyItem','getItemEffectsAddedStatesBuffsText','HiddenItemB','postCreateCategoryWindowItemsEquipsCore','Game_Party_numItems','rateMP','Param','drawItemStyleIconText','getItemEffectsTpRecoveryLabel','SellPriceRate','ShiftShortcutKey','CoreEngine','getShopTrackingGoldSell','getItemDamageElementLabel','commandStyleCheck','_calculatingJSParameters','LabelRecoverHP','drawing','Window_ItemList_updateHelp','List','innerWidth','isOpenAndActive','getItemHitTypeLabel','calcWindowHeight','categories','Occasion%1','numberWindowRectItemsEquipsCore','remove','Scene_Item_categoryWindowRect','0000','_handlers','onTouchSelectModernControls','createCommandWindow','setTopRow','find','isTriggered','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MaxHP\x20=\x200;\x20let\x20MaxMP\x20=\x200;\x20let\x20ATK\x20=\x200;\x20let\x20DEF\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MAT\x20=\x200;\x20let\x20MDF\x20=\x200;\x20let\x20AGI\x20=\x200;\x20let\x20LUK\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20[MaxHP,\x20MaxMP,\x20ATK,\x20DEF,\x20MAT,\x20MDF,\x20AGI,\x20LUK][paramId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','drawCurrencyValue','LabelApply','removeStateBuffChanges','DrawIcons','RegularItems','isOptimizeCommandAdded','toUpperCase','processCursorSpecialCheckModernControls','includes','cursorLeft','Game_BattlerBase_param_artifact','createTempActorEquips','_buyWindowLastIndex','addCancelCommand','SetupArtifactItemIDs','Window_ItemCategory_makeCommandList','scope','sortListItemScene','changeEquip','BorderRegExp','initNewItemsList','currentClass','processShopCondListingOnBuyItem','AllArmors','getItemEffectsHpDamageLabel','JSON','resetFontSettings','background','commandNameWindowCenter','getItemEffectsTpDamageText','activate','NotConsumable','MEV','ItemSceneAdjustItemList','createBitmap','isEquipTypeSealed','setBackgroundType','itemLineRect','isArmor','categoryNameWindowDrawText','deselect','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','callUpdateHelp','getItemsEquipsCoreBackColor1','getShopTrackingItemBuy','uiMenuStyle','updatedLayoutStyle','isArtifact','onSellCancel','reloadMapIfUpdated','Game_BattlerBase_param','icon','getItemEffectsMpRecoveryText','_allowArtifactParamBase','ARRAYJSON','ShopMenuStatusStandard','iconIndex','mdf','drawUpdatedParamName','traits','drawEquipDataCompare','goldWindowRectItemsEquipsCore','+%1%','helpWindowRect','allowCreateStatusWindow','PDR','EFFECT_GAIN_TP','weapons','DrawItemData','value','Weapon\x20Type','drawEquipDataClassic','def','itemWindowRectItemsEquipsCore','values','VisuMZ_1_BattleCore','\x5cI[%1]','Scene_Shop_commandSell','Game_Actor_paramPlus','atypeId','_itemWindow','width','traitObjects','getNextAvailableEtypeId','getItemEffectsTpRecoveryText','atk','log','isSellCommandEnabled','Scene_Battle','dataId','refresh','getItemSpeedText','drawItemEquipType','Scene_Shop_onBuyCancel','equipAdjustHpMp','select','removeBuff','onBuyCancelItemsEquipsCore','670aWFEqS','forceResetEquipSlots','Scene_Equip_helpWindowRect','drawItemDamage','rateHP','getItemColor','_slotWindow','Window_Selectable_setHelpWindowItem','categoryWindowRect','Scene_Shop_onBuyOk','previousActor','ARRAYSTR','Categories','isShiftShortcutKeyForRemove','Window_Selectable_initialize','ARRAYSTRUCT','Window_EquipCommand_initialize','getItemEffectsHpRecoveryLabel','getItemEffectsSelfTpGainText','cursorRight','drawItemCustomEntries','ELEMENT','loadFaceImages','categoryWindowRectItemsEquipsCore','left','isLearnedSkill','maxBattleMembers','getItemDamageAmountLabel','fill','isKeyItem','_tempActor','itemWindowRect','Nonconsumable','Parse_Notetags_ParamJS','\x5cI[%1]%2','onTouchCancel','textSizeEx','boxWidth','DrawEquipDoubleData','round','setObject','text','characterName','HIT','MP\x20DAMAGE','buttonAssistItemListRequirement','CmdIconCancel','weapon','Window_EquipStatus_refresh','drawText','getInputMultiButtonStrings','isRepeated','LabelConsume','Window_ShopSell_isEnabled','refreshActorEquipSlotsIfUpdated','Step1Start','DrawPortraitJS','_newLabelSprites','inBattle','ParseWeaponNotetags','cursorPagedown','Game_Party_setupBattleTestItems_artifact','classic','AllItems','Window_Selectable_update','_list','changePaintOpacity','Window_EquipSlot_isEnabled','resetTextColor','OffsetX','HP\x20DAMAGE','sell','TextAlign','MP\x20RECOVERY','_newLabelOpacityUpperLimit','param','getItemDamageAmountTextBattleCore','getItemsEquipsCoreBackColor2','actorParams','Scene_Shop_onCategoryCancel','isUseItemsEquipsCoreUpdatedLayout','ParseArmorNotetags','innerHeight','translucentOpacity','FadeSpeed','mpRate','paramJS','clearCmdDesc','CmdTextAlign','Icon','CmdIconClear','selfTP','onCategoryCancelItemsEquipsCore','CustomParamNames','sellingPrice','postCreateSellWindowItemsEquipsCore','STR','getItemIdWithName','money','adjustHiddenShownGoods','match','isSoleArmorType','allowShiftScrolling','some','Pick\x20and\x20choose\x20equipment\x20to\x20change.','IconSet','getItemEffectsHpRecoveryText','A%1','isHandled','getItemEffectsMpDamageLabel','isCursorMovable','Game_Party_gainItem','CursedTextPopup','Armor\x20Type','FontSize','artifacts','getArmorIdWithName','fillRect','drawItemData','getDamageStyle','FDR','Window_ItemCategory_initialize','speed','equipSlotIndex','optKeyItemsNumber','Scene_Shop_helpWindowRect','HRG','Scene_Item_itemWindowRect','canEquipArmor','getEtypeIDs','Step2End','length','iconHeight','mat','center','normalColor','buyWindowRect','allMembers','30yDoxhO','isCancelled','doSell','(%1)','cursorDown','category','limitedPageUpDownSceneCheck','setShopStatusWindowMode','isPurifyItemSwapOk','updateNewLabelOpacity','getTextColor','drawItemEffectsSelfTpGain','weaponTypes','VisuMZ_0_CoreEngine','createCategoryWindow','Scene_Shop_buyingPrice','consumable','effects','hitIndex','Scope1','_resetFontSize','getSkillIdWithName','doBuy','itemHasEquipLimit','type','prepare','clamp','Window_ItemList_makeItemList','getItemEffectsSelfTpGainLabel','setItemDelay','_checkEquipRequirements','code','isStackableArtifact','TP\x20RECOVERY','items','drawItemEffectsTpDamage','Window_ShopCommand_initialize','Scene_Shop_categoryWindowRect','AllWeapons','every','Scene_Shop_doBuy','Window_EquipItem_isEnabled','toLowerCase','removeDebuff','CONSUMABLE','goldWindowRect','canEquip','paintOpacity','resetShopSwitches','equipTypes','versionId','updateCommandNameWindow','sellWindowRect','NAME','itemPadding','HP\x20RECOVERY','createStatusWindow','drawNewLabelIcon','level','opacity','getItemRepeatsLabel','drawItemEffectsMpRecovery','powerDownColor','nonRemovableEtypes','Game_BattlerBase_canEquip_artifact','ScopeRandomAny','getEtypeIDsCache','prepareItemCustomData','CmdIconBuy','postCreateItemWindowModernControls','middle','canShiftRemoveEquipment','damage','processDownCursorSpecialCheckModernControls','ShowAnySwitches','drawCustomShopGraphic','lineHeight','setTempActor','buttonAssistText1','W%1','isEquipAtypeOk','×%1','ArmorType','process_VisuMZ_ItemsEquipsCore_RegExp','forceChangeEquipSlots','iconWidth','getColor','_sellWindow','Scene_Load_reloadMapIfUpdated','drawCustomShopGraphicLoad','Window_ItemCategory_setItemWindow','drawParamText','Style','drawItemName'];_0x5966=function(){return _0x2a92ef;};return _0x5966();}(function(_0x46c6ca,_0x407f02){const _0x35678f=_0x44e0,_0x4b0724=_0x46c6ca();while(!![]){try{const _0x252134=parseInt(_0x35678f(0x11f))/0x1+-parseInt(_0x35678f(0x484))/0x2+-parseInt(_0x35678f(0x454))/0x3+parseInt(_0x35678f(0xe1))/0x4*(parseInt(_0x35678f(0x2eb))/0x5)+-parseInt(_0x35678f(0x474))/0x6+-parseInt(_0x35678f(0x19b))/0x7*(-parseInt(_0x35678f(0x1be))/0x8)+-parseInt(_0x35678f(0x3d0))/0x9*(-parseInt(_0x35678f(0x261))/0xa);if(_0x252134===_0x407f02)break;else _0x4b0724['push'](_0x4b0724['shift']());}catch(_0x20f0dc){_0x4b0724['push'](_0x4b0724['shift']());}}}(_0x5966,0xe22c7));var label=_0x312955(0x1af),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x312955(0x1a7)](function(_0x186869){const _0x20837b=_0x312955;return _0x186869['status']&&_0x186869[_0x20837b(0x40f)]['includes']('['+label+']');})[0x0];function _0x44e0(_0xa9239d,_0x401f0b){const _0x596667=_0x5966();return _0x44e0=function(_0x44e03b,_0x1f5b78){_0x44e03b=_0x44e03b-0x66;let _0x41c595=_0x596667[_0x44e03b];return _0x41c595;},_0x44e0(_0xa9239d,_0x401f0b);}VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x312955(0x464)]=function(_0x3df3c5,_0x14e802){const _0x8e7b58=_0x312955;for(const _0x42c26 in _0x14e802){if(_0x42c26[_0x8e7b58(0x2c5)](/(.*):(.*)/i)){const _0x44d2f7=String(RegExp['$1']),_0x143053=String(RegExp['$2'])[_0x8e7b58(0x205)]()[_0x8e7b58(0x349)]();let _0x12ed6e,_0x3c0292,_0x481206;switch(_0x143053){case _0x8e7b58(0x41e):_0x12ed6e=_0x14e802[_0x42c26]!==''?Number(_0x14e802[_0x42c26]):0x0;break;case _0x8e7b58(0x404):_0x3c0292=_0x14e802[_0x42c26]!==''?JSON[_0x8e7b58(0x4a6)](_0x14e802[_0x42c26]):[],_0x12ed6e=_0x3c0292[_0x8e7b58(0x4ac)](_0x30f2b8=>Number(_0x30f2b8));break;case'EVAL':_0x12ed6e=_0x14e802[_0x42c26]!==''?eval(_0x14e802[_0x42c26]):null;break;case _0x8e7b58(0x46d):_0x3c0292=_0x14e802[_0x42c26]!==''?JSON[_0x8e7b58(0x4a6)](_0x14e802[_0x42c26]):[],_0x12ed6e=_0x3c0292['map'](_0x350648=>eval(_0x350648));break;case _0x8e7b58(0x218):_0x12ed6e=_0x14e802[_0x42c26]!==''?JSON[_0x8e7b58(0x4a6)](_0x14e802[_0x42c26]):'';break;case _0x8e7b58(0x235):_0x3c0292=_0x14e802[_0x42c26]!==''?JSON['parse'](_0x14e802[_0x42c26]):[],_0x12ed6e=_0x3c0292[_0x8e7b58(0x4ac)](_0x5eb399=>JSON[_0x8e7b58(0x4a6)](_0x5eb399));break;case _0x8e7b58(0x3d4):_0x12ed6e=_0x14e802[_0x42c26]!==''?new Function(JSON[_0x8e7b58(0x4a6)](_0x14e802[_0x42c26])):new Function(_0x8e7b58(0xfd));break;case _0x8e7b58(0x12d):_0x3c0292=_0x14e802[_0x42c26]!==''?JSON['parse'](_0x14e802[_0x42c26]):[],_0x12ed6e=_0x3c0292[_0x8e7b58(0x4ac)](_0x50c3d1=>new Function(JSON[_0x8e7b58(0x4a6)](_0x50c3d1)));break;case _0x8e7b58(0x2c1):_0x12ed6e=_0x14e802[_0x42c26]!==''?String(_0x14e802[_0x42c26]):'';break;case _0x8e7b58(0x26c):_0x3c0292=_0x14e802[_0x42c26]!==''?JSON['parse'](_0x14e802[_0x42c26]):[],_0x12ed6e=_0x3c0292['map'](_0x3429af=>String(_0x3429af));break;case'STRUCT':_0x481206=_0x14e802[_0x42c26]!==''?JSON[_0x8e7b58(0x4a6)](_0x14e802[_0x42c26]):{},_0x3df3c5[_0x44d2f7]={},VisuMZ[_0x8e7b58(0x464)](_0x3df3c5[_0x44d2f7],_0x481206);continue;case _0x8e7b58(0x270):_0x3c0292=_0x14e802[_0x42c26]!==''?JSON[_0x8e7b58(0x4a6)](_0x14e802[_0x42c26]):[],_0x12ed6e=_0x3c0292[_0x8e7b58(0x4ac)](_0x53db42=>VisuMZ[_0x8e7b58(0x464)]({},JSON['parse'](_0x53db42)));break;default:continue;}_0x3df3c5[_0x44d2f7]=_0x12ed6e;}}return _0x3df3c5;},(_0x1e1578=>{const _0x1a3041=_0x312955,_0x23c499=_0x1e1578[_0x1a3041(0x392)];for(const _0x515811 of dependencies){if(!Imported[_0x515811]){alert(_0x1a3041(0x477)['format'](_0x23c499,_0x515811)),SceneManager[_0x1a3041(0x472)]();break;}}const _0x3468f2=_0x1e1578['description'];if(_0x3468f2[_0x1a3041(0x2c5)](/\[Version[ ](.*?)\]/i)){const _0x3766b5=Number(RegExp['$1']);_0x3766b5!==VisuMZ[label][_0x1a3041(0x39a)]&&(alert(_0x1a3041(0x228)[_0x1a3041(0x3d3)](_0x23c499,_0x3766b5)),SceneManager[_0x1a3041(0x472)]());}if(_0x3468f2[_0x1a3041(0x2c5)](/\[Tier[ ](\d+)\]/i)){const _0x16d4b5=Number(RegExp['$1']);_0x16d4b5<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x1a3041(0x3d3)](_0x23c499,_0x16d4b5,tier)),SceneManager[_0x1a3041(0x472)]()):tier=Math['max'](_0x16d4b5,tier);}VisuMZ[_0x1a3041(0x464)](VisuMZ[label][_0x1a3041(0x3a4)],_0x1e1578[_0x1a3041(0x35a)]);})(pluginData),PluginManager[_0x312955(0x14e)](pluginData[_0x312955(0x392)],_0x312955(0x45f),_0x173a65=>{const _0x533bb8=_0x312955;VisuMZ[_0x533bb8(0x464)](_0x173a65,_0x173a65);const _0x334ba7=_0x173a65[_0x533bb8(0x44c)][_0x533bb8(0x4ac)](_0x357df5=>$gameActors[_0x533bb8(0x1a5)](_0x357df5)),_0x3e1ead=_0x173a65['Slots']['map'](_0x511748=>$dataSystem[_0x533bb8(0x31c)][_0x533bb8(0x34f)](_0x511748['trim']()));for(const _0x59053f of _0x334ba7){if(!_0x59053f)continue;_0x59053f['forceChangeEquipSlots'](_0x3e1ead);}}),PluginManager['registerCommand'](pluginData[_0x312955(0x392)],_0x312955(0x3b1),_0x5e35c6=>{const _0xd6988d=_0x312955;VisuMZ[_0xd6988d(0x464)](_0x5e35c6,_0x5e35c6);const _0x1f214b=_0x5e35c6[_0xd6988d(0x44c)]['map'](_0x2dcf95=>$gameActors[_0xd6988d(0x1a5)](_0x2dcf95));for(const _0x2ba92a of _0x1f214b){if(!_0x2ba92a)continue;_0x2ba92a[_0xd6988d(0x262)]();}}),PluginManager[_0x312955(0x14e)](pluginData[_0x312955(0x392)],'PurifyActors',_0x489083=>{const _0x258a80=_0x312955;if($gameParty[_0x258a80(0x29b)]())return;VisuMZ['ConvertParams'](_0x489083,_0x489083);const _0x4e1061=_0x489083[_0x258a80(0x44c)]['map'](_0xa07d11=>$gameActors[_0x258a80(0x1a5)](_0xa07d11));for(const _0xd5a10f of _0x4e1061){if(!_0xd5a10f)continue;_0xd5a10f[_0x258a80(0x37c)]();}}),PluginManager['registerCommand'](pluginData['name'],_0x312955(0x432),_0x10fcbd=>{const _0xc8690d=_0x312955;if($gameParty['inBattle']())return;$gameParty[_0xc8690d(0x37c)]();}),PluginManager[_0x312955(0x14e)](pluginData['name'],_0x312955(0x45e),_0x5840e0=>{const _0x3e7b4f=_0x312955;VisuMZ[_0x3e7b4f(0x464)](_0x5840e0,_0x5840e0);const _0x473c45=[],_0x553894=_0x5840e0['Blacklist'][_0x3e7b4f(0x4ac)](_0x57b9cf=>_0x57b9cf[_0x3e7b4f(0x205)]()['trim']()),_0x487a29=_0x5840e0['Whitelist'][_0x3e7b4f(0x4ac)](_0x122251=>_0x122251['toUpperCase']()[_0x3e7b4f(0x349)]()),_0x266947=_0x5840e0[_0x3e7b4f(0x14c)]>=_0x5840e0[_0x3e7b4f(0x298)]?_0x5840e0[_0x3e7b4f(0x298)]:_0x5840e0[_0x3e7b4f(0x14c)],_0x1c5869=_0x5840e0['Step1End']>=_0x5840e0[_0x3e7b4f(0x298)]?_0x5840e0[_0x3e7b4f(0x14c)]:_0x5840e0[_0x3e7b4f(0x298)],_0x3301cc=Array(_0x1c5869-_0x266947+0x1)[_0x3e7b4f(0x27d)]()[_0x3e7b4f(0x4ac)]((_0x3419cb,_0x50ebc5)=>_0x266947+_0x50ebc5);for(const _0x4d9d5b of _0x3301cc){const _0x831aa9=$dataItems[_0x4d9d5b];if(!_0x831aa9)continue;if(!VisuMZ[_0x3e7b4f(0x1af)]['IncludeShopItem'](_0x831aa9,_0x553894,_0x487a29))continue;_0x473c45[_0x3e7b4f(0x4af)]([0x0,_0x4d9d5b,0x0,_0x831aa9[_0x3e7b4f(0x360)]]);}const _0x726367=_0x5840e0[_0x3e7b4f(0x2e3)]>=_0x5840e0['Step2Start']?_0x5840e0['Step2Start']:_0x5840e0[_0x3e7b4f(0x2e3)],_0x3e8c8e=_0x5840e0['Step2End']>=_0x5840e0[_0x3e7b4f(0x3b6)]?_0x5840e0[_0x3e7b4f(0x2e3)]:_0x5840e0[_0x3e7b4f(0x3b6)],_0x5bc9fc=Array(_0x3e8c8e-_0x726367+0x1)[_0x3e7b4f(0x27d)]()[_0x3e7b4f(0x4ac)]((_0x2b4a2a,_0x54187e)=>_0x726367+_0x54187e);for(const _0x577132 of _0x5bc9fc){const _0x3d313c=$dataWeapons[_0x577132];if(!_0x3d313c)continue;if(!VisuMZ[_0x3e7b4f(0x1af)][_0x3e7b4f(0x74)](_0x3d313c,_0x553894,_0x487a29))continue;_0x473c45[_0x3e7b4f(0x4af)]([0x1,_0x577132,0x0,_0x3d313c[_0x3e7b4f(0x360)]]);}const _0x5250e1=_0x5840e0['Step3End']>=_0x5840e0['Step3Start']?_0x5840e0[_0x3e7b4f(0x10c)]:_0x5840e0['Step3End'],_0x186c3=_0x5840e0['Step3End']>=_0x5840e0['Step3Start']?_0x5840e0['Step3End']:_0x5840e0[_0x3e7b4f(0x10c)],_0x3cbd1f=Array(_0x186c3-_0x5250e1+0x1)[_0x3e7b4f(0x27d)]()[_0x3e7b4f(0x4ac)]((_0xedaa4d,_0x404382)=>_0x5250e1+_0x404382);for(const _0x48b618 of _0x3cbd1f){const _0x5f2303=$dataArmors[_0x48b618];if(!_0x5f2303)continue;if(!VisuMZ['ItemsEquipsCore'][_0x3e7b4f(0x74)](_0x5f2303,_0x553894,_0x487a29))continue;_0x473c45['push']([0x2,_0x48b618,0x0,_0x5f2303['price']]);}SceneManager['push'](Scene_Shop),SceneManager[_0x3e7b4f(0x3f4)](_0x473c45,_0x5840e0[_0x3e7b4f(0x155)]);}),VisuMZ[_0x312955(0x1af)][_0x312955(0x74)]=function(_0x38b48b,_0x22e1e1,_0x2bce56){const _0x27e913=_0x312955;if(_0x38b48b[_0x27e913(0x392)][_0x27e913(0x349)]()==='')return![];if(_0x38b48b[_0x27e913(0x392)][_0x27e913(0x2c5)](/-----/i))return![];const _0x3c633f=_0x38b48b[_0x27e913(0x1f2)];if(_0x22e1e1['length']>0x0)for(const _0x5cd5db of _0x22e1e1){if(!_0x5cd5db)continue;if(_0x3c633f[_0x27e913(0x207)](_0x5cd5db))return![];}if(_0x2bce56[_0x27e913(0x2e4)]>0x0){for(const _0x7ec6af of _0x2bce56){if(!_0x7ec6af)continue;if(_0x3c633f[_0x27e913(0x207)](_0x7ec6af))return!![];}return![];}return!![];},VisuMZ[_0x312955(0x1af)][_0x312955(0x14f)]=Scene_Boot[_0x312955(0x1b8)][_0x312955(0x491)],Scene_Boot[_0x312955(0x1b8)][_0x312955(0x491)]=function(){const _0x1e4bdb=_0x312955;this[_0x1e4bdb(0x33e)](),VisuMZ['ItemsEquipsCore']['Scene_Boot_onDatabaseLoaded']['call'](this),this[_0x1e4bdb(0x4ab)](),VisuMZ[_0x1e4bdb(0x1af)][_0x1e4bdb(0x3e3)](),VisuMZ[_0x1e4bdb(0x1af)][_0x1e4bdb(0x20d)]();},Scene_Boot[_0x312955(0x1b8)][_0x312955(0x33e)]=function(){const _0x4fc0c2=_0x312955;VisuMZ[_0x4fc0c2(0x1af)][_0x4fc0c2(0x479)]={},VisuMZ[_0x4fc0c2(0x1af)][_0x4fc0c2(0x479)]['EquipParams']=[],VisuMZ[_0x4fc0c2(0x1af)][_0x4fc0c2(0x479)][_0x4fc0c2(0x212)]=[];const _0x323893=[_0x4fc0c2(0x197),_0x4fc0c2(0x36f),'ATK',_0x4fc0c2(0x38d),_0x4fc0c2(0x468),_0x4fc0c2(0xc6),_0x4fc0c2(0x37d),_0x4fc0c2(0x36b)];for(const _0x23b254 of _0x323893){const _0x48e4b6=_0x4fc0c2(0x3dd)[_0x4fc0c2(0x3d3)](_0x23b254);VisuMZ[_0x4fc0c2(0x1af)][_0x4fc0c2(0x479)][_0x4fc0c2(0x461)]['push'](new RegExp(_0x48e4b6,'i'));const _0x5cb820=_0x4fc0c2(0xec)['format'](_0x23b254);VisuMZ['ItemsEquipsCore']['RegExp'][_0x4fc0c2(0x212)][_0x4fc0c2(0x4af)](new RegExp(_0x5cb820,'g'));}},Scene_Boot[_0x312955(0x1b8)][_0x312955(0x4ab)]=function(){const _0x4f3942=_0x312955;if(VisuMZ['ParseAllNotetags'])return;this['process_VisuMZ_ItemsEquipsCore_EquipSlots']();const _0x158342=[$dataItems,$dataWeapons,$dataArmors];for(const _0x1c14a0 of _0x158342){for(const _0x425bf3 of _0x1c14a0){if(!_0x425bf3)continue;VisuMZ[_0x4f3942(0x1af)][_0x4f3942(0x198)](_0x425bf3,_0x1c14a0),VisuMZ[_0x4f3942(0x1af)][_0x4f3942(0x131)](_0x425bf3,_0x1c14a0),VisuMZ['ItemsEquipsCore'][_0x4f3942(0x413)](_0x425bf3,_0x1c14a0),VisuMZ[_0x4f3942(0x1af)][_0x4f3942(0x282)](_0x425bf3,_0x1c14a0),VisuMZ[_0x4f3942(0x1af)]['Parse_Notetags_EnableJS'](_0x425bf3,_0x1c14a0);}}},Scene_Boot[_0x312955(0x1b8)]['process_VisuMZ_ItemsEquipsCore_EquipSlots']=function(){const _0x2c2622=_0x312955;for(const _0x3a0fea of $dataClasses){if(!_0x3a0fea)continue;VisuMZ['ItemsEquipsCore'][_0x2c2622(0x49e)](_0x3a0fea);}},VisuMZ[_0x312955(0x1af)]['ParseClassNotetags']=VisuMZ[_0x312955(0x167)],VisuMZ[_0x312955(0x167)]=function(_0x45998b){const _0x53ac7b=_0x312955;VisuMZ[_0x53ac7b(0x1af)][_0x53ac7b(0x167)]['call'](this,_0x45998b),VisuMZ[_0x53ac7b(0x1af)][_0x53ac7b(0x49e)](_0x45998b);},VisuMZ[_0x312955(0x1af)]['ParseItemNotetags']=VisuMZ[_0x312955(0x193)],VisuMZ[_0x312955(0x193)]=function(_0x131ae2){const _0x1cc57f=_0x312955;VisuMZ[_0x1cc57f(0x1af)][_0x1cc57f(0x193)][_0x1cc57f(0x3b4)](this,_0x131ae2),VisuMZ['ItemsEquipsCore'][_0x1cc57f(0x3d2)](_0x131ae2,$dataItems);},VisuMZ[_0x312955(0x1af)]['ParseWeaponNotetags']=VisuMZ[_0x312955(0x29c)],VisuMZ['ParseWeaponNotetags']=function(_0x2eb30d){const _0x3dd803=_0x312955;VisuMZ[_0x3dd803(0x1af)][_0x3dd803(0x29c)]['call'](this,_0x2eb30d),VisuMZ['ItemsEquipsCore'][_0x3dd803(0x3d2)](_0x2eb30d,$dataWeapons);},VisuMZ[_0x312955(0x1af)][_0x312955(0x2b2)]=VisuMZ[_0x312955(0x2b2)],VisuMZ[_0x312955(0x2b2)]=function(_0x49b217){const _0x3b05d1=_0x312955;VisuMZ[_0x3b05d1(0x1af)][_0x3b05d1(0x2b2)][_0x3b05d1(0x3b4)](this,_0x49b217),VisuMZ[_0x3b05d1(0x1af)][_0x3b05d1(0x3d2)](_0x49b217,$dataArmors);},VisuMZ[_0x312955(0x1af)][_0x312955(0x49e)]=function(_0x39afd2){const _0x56f793=_0x312955;_0x39afd2[_0x56f793(0x3da)]=[];const _0x38b9e1=$dataSystem[_0x56f793(0x31c)][_0x56f793(0x4ac)](_0x389501=>_0x389501?_0x389501[_0x56f793(0x349)]():'');if(!BattleManager[_0x56f793(0x403)]()&&_0x39afd2[_0x56f793(0x1ba)][_0x56f793(0x2c5)](/<EQUIP SLOTS>\s*([\s\S]*)\s*<\/EQUIP SLOTS>/i)){const _0x51349e=String(RegExp['$1'])[_0x56f793(0x3a1)](/[\r\n]+/);for(const _0x4b7c04 of _0x51349e){const _0x55c133=_0x38b9e1[_0x56f793(0x34f)](_0x4b7c04[_0x56f793(0x349)]());if(_0x55c133>0x0)_0x39afd2['equipSlots'][_0x56f793(0x4af)](_0x55c133);}}else for(const _0x4433de of _0x38b9e1){const _0x2414cc=_0x38b9e1['indexOf'](_0x4433de['trim']());if(_0x2414cc>0x0)_0x39afd2[_0x56f793(0x3da)][_0x56f793(0x4af)](_0x2414cc);}},VisuMZ[_0x312955(0x1af)][_0x312955(0x3d2)]=function(_0x50e36a,_0x48c6ea){const _0x4ddc87=_0x312955;VisuMZ[_0x4ddc87(0x1af)][_0x4ddc87(0x198)](_0x50e36a,_0x48c6ea),VisuMZ[_0x4ddc87(0x1af)][_0x4ddc87(0x131)](_0x50e36a,_0x48c6ea),VisuMZ['ItemsEquipsCore'][_0x4ddc87(0x413)](_0x50e36a,_0x48c6ea),VisuMZ['ItemsEquipsCore'][_0x4ddc87(0x282)](_0x50e36a,_0x48c6ea),VisuMZ[_0x4ddc87(0x1af)][_0x4ddc87(0x48a)](_0x50e36a,_0x48c6ea);},VisuMZ['ItemsEquipsCore'][_0x312955(0x198)]=function(_0x564f7f,_0x50a815){const _0x50b4b1=_0x312955;_0x564f7f[_0x50b4b1(0x1f2)]=[];const _0x246d4b=_0x564f7f[_0x50b4b1(0x1ba)]||'',_0x21f099=_0x246d4b[_0x50b4b1(0x2c5)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x21f099)for(const _0x37e9fe of _0x21f099){_0x37e9fe[_0x50b4b1(0x2c5)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x198331=String(RegExp['$1'])['toUpperCase']()[_0x50b4b1(0x349)]()[_0x50b4b1(0x3a1)](',');for(const _0xb8d8f1 of _0x198331){_0x564f7f[_0x50b4b1(0x1f2)][_0x50b4b1(0x4af)](_0xb8d8f1[_0x50b4b1(0x349)]());}}if(_0x246d4b[_0x50b4b1(0x2c5)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){const _0x44f2dc=RegExp['$1'][_0x50b4b1(0x3a1)](/[\r\n]+/);for(const _0x28e287 of _0x44f2dc){_0x564f7f['categories']['push'](_0x28e287[_0x50b4b1(0x205)]()[_0x50b4b1(0x349)]());}}},VisuMZ[_0x312955(0x1af)][_0x312955(0x444)]=function(_0x39507a,_0x2b77d7){const _0x4a964c=_0x312955;if(!_0x39507a)return;_0x39507a[_0x4a964c(0x114)]=0x32;const _0x57765a=_0x39507a[_0x4a964c(0x1ba)]||'';_0x57765a['match'](/<(?:|ID )SORT(?:|ING)[ ]PRIORITY:[ ](\d+)>/i)&&(_0x39507a[_0x4a964c(0x114)]=Number(RegExp['$1']));},VisuMZ[_0x312955(0x1af)][_0x312955(0x131)]=function(_0x3c0c77,_0x2b202f){const _0x302a00=_0x312955;_0x3c0c77['note'][_0x302a00(0x2c5)](/<PRICE:[ ](\d+)>/i)&&(_0x3c0c77[_0x302a00(0x360)]=Number(RegExp['$1']));},VisuMZ[_0x312955(0x1af)][_0x312955(0x413)]=function(_0x4b170c,_0x81b473){const _0x486cdc=_0x312955;if(_0x81b473===$dataItems)return;for(let _0x3311de=0x0;_0x3311de<0x8;_0x3311de++){const _0x35f2f1=VisuMZ[_0x486cdc(0x1af)]['RegExp'][_0x486cdc(0x461)][_0x3311de];_0x4b170c[_0x486cdc(0x1ba)]['match'](_0x35f2f1)&&(_0x4b170c['params'][_0x3311de]=parseInt(RegExp['$1']));}},VisuMZ[_0x312955(0x1af)][_0x312955(0x2b7)]={},VisuMZ[_0x312955(0x1af)][_0x312955(0x282)]=function(_0x2a1d31,_0x208e72){const _0x5b73fe=_0x312955;if(_0x208e72===$dataItems)return;if(_0x2a1d31[_0x5b73fe(0x1ba)][_0x5b73fe(0x2c5)](/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)){const _0x467fa6=String(RegExp['$1']),_0x56232c=(_0x208e72===$dataWeapons?'W%1':_0x5b73fe(0x2cc))['format'](_0x2a1d31['id']),_0x5d8ddb=_0x5b73fe(0x1fe)[_0x5b73fe(0x3d3)](_0x467fa6);for(let _0x5983c9=0x0;_0x5983c9<0x8;_0x5983c9++){if(_0x467fa6[_0x5b73fe(0x2c5)](VisuMZ['ItemsEquipsCore'][_0x5b73fe(0x479)][_0x5b73fe(0x212)][_0x5983c9])){const _0x30114b=_0x5b73fe(0x142)[_0x5b73fe(0x3d3)](_0x56232c,_0x5983c9);VisuMZ[_0x5b73fe(0x1af)][_0x5b73fe(0x2b7)][_0x30114b]=new Function('item','paramId',_0x5d8ddb);}}}},VisuMZ['ItemsEquipsCore'][_0x312955(0x494)]={},VisuMZ[_0x312955(0x1af)][_0x312955(0x48a)]=function(_0x436537,_0x317259){const _0x189374=_0x312955;if(_0x317259!==$dataItems)return;if(_0x436537[_0x189374(0x1ba)][_0x189374(0x2c5)](/<JS ITEM ENABLE>\s*([\s\S]*)\s*<\/JS ITEM ENABLE>/i)){const _0x3dcbff=String(RegExp['$1']),_0x8c3a30=_0x189374(0x436)[_0x189374(0x3d3)](_0x3dcbff);VisuMZ[_0x189374(0x1af)][_0x189374(0x494)][_0x436537['id']]=new Function('item',_0x8c3a30);}},DataManager[_0x312955(0x27e)]=function(_0x5ae092){return this['isItem'](_0x5ae092)&&_0x5ae092['itypeId']===0x2;},DataManager[_0x312955(0x117)]=function(_0x5ec92d){const _0x4fcb49=_0x312955;if(!_0x5ec92d)return 0x63;else return _0x5ec92d[_0x4fcb49(0x1ba)]['match'](/<MAX:[ ](\d+)>/i)?parseInt(RegExp['$1']):this[_0x4fcb49(0x3c2)](_0x5ec92d);},DataManager[_0x312955(0x3c2)]=function(_0x4b97a6){const _0x1690da=_0x312955;if(this[_0x1690da(0x498)](_0x4b97a6))return VisuMZ[_0x1690da(0x1af)][_0x1690da(0x3a4)][_0x1690da(0x466)]['MaxItems'];else{if(this[_0x1690da(0xed)](_0x4b97a6))return VisuMZ[_0x1690da(0x1af)][_0x1690da(0x3a4)][_0x1690da(0x466)][_0x1690da(0x190)];else{if(this[_0x1690da(0x225)](_0x4b97a6))return VisuMZ['ItemsEquipsCore'][_0x1690da(0x3a4)][_0x1690da(0x466)][_0x1690da(0x94)];}}},DataManager[_0x312955(0x196)]=function(_0x3887f3){const _0x473e05=_0x312955;_0x3887f3=_0x3887f3[_0x473e05(0x205)]()[_0x473e05(0x349)](),this[_0x473e05(0x79)]=this[_0x473e05(0x79)]||{};if(this[_0x473e05(0x79)][_0x3887f3])return this[_0x473e05(0x79)][_0x3887f3];for(const _0x1397d1 of $dataClasses){if(!_0x1397d1)continue;let _0x2c87c6=_0x1397d1[_0x473e05(0x392)];_0x2c87c6=_0x2c87c6[_0x473e05(0x43e)](/\x1I\[(\d+)\]/gi,''),_0x2c87c6=_0x2c87c6['replace'](/\\I\[(\d+)\]/gi,''),this[_0x473e05(0x79)][_0x2c87c6[_0x473e05(0x205)]()[_0x473e05(0x349)]()]=_0x1397d1['id'];}return this['_classIDs'][_0x3887f3]||0x0;},DataManager[_0x312955(0x300)]=function(_0x59495e){const _0x1a0c04=_0x312955;_0x59495e=_0x59495e['toUpperCase']()[_0x1a0c04(0x349)](),this[_0x1a0c04(0x473)]=this[_0x1a0c04(0x473)]||{};if(this[_0x1a0c04(0x473)][_0x59495e])return this['_skillIDs'][_0x59495e];for(const _0x642ccb of $dataSkills){if(!_0x642ccb)continue;this[_0x1a0c04(0x473)][_0x642ccb['name'][_0x1a0c04(0x205)]()[_0x1a0c04(0x349)]()]=_0x642ccb['id'];}return this[_0x1a0c04(0x473)][_0x59495e]||0x0;},DataManager[_0x312955(0x2c2)]=function(_0x4d1dbf){const _0xa50860=_0x312955;_0x4d1dbf=_0x4d1dbf[_0xa50860(0x205)]()[_0xa50860(0x349)](),this[_0xa50860(0x3f0)]=this[_0xa50860(0x3f0)]||{};if(this[_0xa50860(0x3f0)][_0x4d1dbf])return this['_itemIDs'][_0x4d1dbf];for(const _0x2780c4 of $dataItems){if(!_0x2780c4)continue;this[_0xa50860(0x3f0)][_0x2780c4[_0xa50860(0x392)][_0xa50860(0x205)]()[_0xa50860(0x349)]()]=_0x2780c4['id'];}return this[_0xa50860(0x3f0)][_0x4d1dbf]||0x0;},DataManager[_0x312955(0x115)]=function(_0x2207e7){const _0x4404e3=_0x312955;_0x2207e7=_0x2207e7['toUpperCase']()[_0x4404e3(0x349)](),this[_0x4404e3(0x16a)]=this['_weaponIDs']||{};if(this[_0x4404e3(0x16a)][_0x2207e7])return this[_0x4404e3(0x16a)][_0x2207e7];for(const _0x115299 of $dataWeapons){if(!_0x115299)continue;this[_0x4404e3(0x16a)][_0x115299['name'][_0x4404e3(0x205)]()[_0x4404e3(0x349)]()]=_0x115299['id'];}return this[_0x4404e3(0x16a)][_0x2207e7]||0x0;},DataManager['getArmorIdWithName']=function(_0x2584e8){const _0x186a13=_0x312955;_0x2584e8=_0x2584e8[_0x186a13(0x205)]()[_0x186a13(0x349)](),this[_0x186a13(0x1d7)]=this[_0x186a13(0x1d7)]||{};if(this[_0x186a13(0x1d7)][_0x2584e8])return this[_0x186a13(0x1d7)][_0x2584e8];for(const _0x31483e of $dataArmors){if(!_0x31483e)continue;this[_0x186a13(0x1d7)][_0x31483e[_0x186a13(0x392)][_0x186a13(0x205)]()['trim']()]=_0x31483e['id'];}return this[_0x186a13(0x1d7)][_0x2584e8]||0x0;},DataManager['getEtypeIdWithName']=function(_0x4b4aa5){const _0x4e863c=_0x312955;_0x4b4aa5=_0x4b4aa5[_0x4e863c(0x205)]()[_0x4e863c(0x349)](),this[_0x4e863c(0x1c5)]=this[_0x4e863c(0x1c5)]||{};if(this[_0x4e863c(0x1c5)][_0x4b4aa5])return this[_0x4e863c(0x1c5)][_0x4b4aa5];for(const _0x7cc148 of $dataSystem[_0x4e863c(0x31c)]){this[_0x4e863c(0x1c5)][_0x7cc148['toUpperCase']()[_0x4e863c(0x349)]()]=$dataSystem[_0x4e863c(0x31c)]['indexOf'](_0x7cc148);}return this[_0x4e863c(0x1c5)][_0x4b4aa5]||0x0;},VisuMZ[_0x312955(0x1af)][_0x312955(0x3e3)]=function(){const _0x220feb=_0x312955;VisuMZ['ItemsEquipsCore'][_0x220feb(0x426)]($dataItems),VisuMZ[_0x220feb(0x1af)][_0x220feb(0x426)]($dataWeapons),VisuMZ['ItemsEquipsCore'][_0x220feb(0x426)]($dataArmors);},VisuMZ[_0x312955(0x1af)][_0x312955(0x426)]=function(_0x4ec3ab){const _0x8dfffc=_0x312955;for(const _0x1cad49 of _0x4ec3ab){if(!_0x1cad49)continue;if(!DataManager['isProxyItem'](_0x1cad49))continue;const _0x4b0426=DataManager['getProxyItem'](_0x1cad49),_0x2a8d3d=[_0x8dfffc(0x392),_0x8dfffc(0x237),_0x8dfffc(0x40f)];for(const _0x71eac4 of _0x2a8d3d){_0x1cad49[_0x71eac4]=_0x4b0426[_0x71eac4];}}},DataManager[_0x312955(0x358)]=function(_0x1d15fe){const _0xddd8c9=_0x312955;if(!_0x1d15fe)return![];if(!_0x1d15fe['note'])return![];return _0x1d15fe&&_0x1d15fe[_0xddd8c9(0x1ba)]['match'](/<PROXY:[ ](.*)>/i);},DataManager[_0x312955(0xb9)]=function(_0x3d095b){const _0x1d04cd=_0x312955;return this[_0x1d04cd(0x358)](_0x3d095b)?this[_0x1d04cd(0x177)](_0x3d095b)||_0x3d095b:_0x3d095b;},DataManager[_0x312955(0x177)]=function(_0x2c35b2){const _0x28ea6f=_0x312955;_0x2c35b2[_0x28ea6f(0x1ba)][_0x28ea6f(0x2c5)](/<PROXY:[ ](.*)>/i);const _0x2a9109=RegExp['$1']['trim'](),_0x825966=/^\d+$/[_0x28ea6f(0x18e)](_0x2a9109);if(this[_0x28ea6f(0x498)](_0x2c35b2)){const _0x4e718b=_0x825966?Number(_0x2a9109):DataManager[_0x28ea6f(0x2c2)](_0x2a9109);return $dataItems[_0x4e718b]||_0x2c35b2;}else{if(this[_0x28ea6f(0xed)](_0x2c35b2)){const _0x5e42d9=_0x825966?Number(_0x2a9109):DataManager[_0x28ea6f(0x115)](_0x2a9109);return $dataWeapons[_0x5e42d9]||_0x2c35b2;}else{if(this[_0x28ea6f(0x225)](_0x2c35b2)){const _0x24cb06=_0x825966?Number(_0x2a9109):DataManager[_0x28ea6f(0x2d5)](_0x2a9109);return $dataArmors[_0x24cb06]||_0x2c35b2;}}}return _0x2c35b2;},VisuMZ[_0x312955(0x1af)][_0x312955(0x375)]=Window_ItemList[_0x312955(0x1b8)][_0x312955(0x46c)],Window_ItemList[_0x312955(0x1b8)][_0x312955(0x46c)]=function(){const _0x19b3b0=_0x312955;if($gameTemp[_0x19b3b0(0x19d)])return VisuMZ[_0x19b3b0(0x1af)]['Window_ItemList_item']['call'](this);return DataManager[_0x19b3b0(0xb9)](VisuMZ[_0x19b3b0(0x1af)][_0x19b3b0(0x375)][_0x19b3b0(0x3b4)](this));},Window_ItemList[_0x312955(0x1b8)][_0x312955(0x1da)]=function(){const _0x19d9d4=_0x312955;return VisuMZ['ItemsEquipsCore'][_0x19d9d4(0x375)][_0x19d9d4(0x3b4)](this);},VisuMZ[_0x312955(0x1af)]['Window_ShopBuy_item']=Window_ShopBuy['prototype'][_0x312955(0x46c)],Window_ShopBuy[_0x312955(0x1b8)]['item']=function(){const _0x3a8484=_0x312955;if($gameTemp[_0x3a8484(0x19d)])return VisuMZ['ItemsEquipsCore'][_0x3a8484(0xb7)][_0x3a8484(0x3b4)](this);return DataManager['getProxyItem'](VisuMZ[_0x3a8484(0x1af)][_0x3a8484(0xb7)]['call'](this));},Window_ShopBuy[_0x312955(0x1b8)]['proxyItem']=function(){const _0x39c29c=_0x312955;return VisuMZ[_0x39c29c(0x1af)][_0x39c29c(0xb7)][_0x39c29c(0x3b4)](this);},VisuMZ[_0x312955(0x1af)]['Game_Item_setObject']=Game_Item[_0x312955(0x1b8)][_0x312955(0x289)],Game_Item[_0x312955(0x1b8)]['setObject']=function(_0x54182d){const _0x1946f2=_0x312955;if(DataManager[_0x1946f2(0x358)](_0x54182d))return;VisuMZ[_0x1946f2(0x1af)][_0x1946f2(0x17f)]['call'](this,_0x54182d);},VisuMZ[_0x312955(0x1af)][_0x312955(0x20d)]=function(){const _0x3f57d7=_0x312955;this[_0x3f57d7(0xbf)]={'partyArtifactIDs':[],'troopArtifactIDs':[]};for(const _0x4638e8 of $dataArmors){if(!_0x4638e8)continue;if(!DataManager['isArtifact'](_0x4638e8))continue;DataManager[_0x3f57d7(0x19f)](_0x4638e8)&&this[_0x3f57d7(0xbf)]['partyArtifactIDs'][_0x3f57d7(0x4af)](_0x4638e8['id']),DataManager[_0x3f57d7(0x3e1)](_0x4638e8)&&this[_0x3f57d7(0xbf)][_0x3f57d7(0x16c)]['push'](_0x4638e8['id']);}},DataManager[_0x312955(0x22e)]=function(_0x16d162){const _0x445d90=_0x312955;if(!this[_0x445d90(0x225)](_0x16d162))return![];const _0x257108=_0x16d162[_0x445d90(0x1ba)];if(!_0x257108)return![];if(_0x257108[_0x445d90(0x2c5)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x257108[_0x445d90(0x2c5)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x257108[_0x445d90(0x2c5)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x257108['match'](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x312955(0x30b)]=function(_0xcded3d){const _0x3254bd=_0x312955;if(!this[_0x3254bd(0x22e)](_0xcded3d))return![];const _0x49b803=_0xcded3d['note'];if(!_0x49b803)return![];if(_0x49b803[_0x3254bd(0x2c5)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x49b803[_0x3254bd(0x2c5)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x312955(0x19f)]=function(_0x366313){const _0x54fce8=_0x312955;if(!this[_0x54fce8(0x22e)](_0x366313))return![];const _0x56a50e=_0x366313[_0x54fce8(0x1ba)];if(!_0x56a50e)return![];if(_0x56a50e[_0x54fce8(0x2c5)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x56a50e[_0x54fce8(0x2c5)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x312955(0x3e1)]=function(_0x58c756){const _0x16afa5=_0x312955;if(!this[_0x16afa5(0x22e)](_0x58c756))return![];const _0x53ce75=_0x58c756[_0x16afa5(0x1ba)];if(!_0x53ce75)return![];if(_0x53ce75[_0x16afa5(0x2c5)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x53ce75[_0x16afa5(0x2c5)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},VisuMZ[_0x312955(0x1af)][_0x312955(0x32b)]=Game_BattlerBase[_0x312955(0x1b8)][_0x312955(0x319)],Game_BattlerBase[_0x312955(0x1b8)]['canEquip']=function(_0x296b5c){const _0x477da5=_0x312955;if(DataManager[_0x477da5(0x22e)](_0x296b5c))return![];if(!DataManager[_0x477da5(0x49d)](this,_0x296b5c))return![];if(!DataManager[_0x477da5(0x16f)](this,_0x296b5c))return![];return VisuMZ[_0x477da5(0x1af)]['Game_BattlerBase_canEquip_artifact'][_0x477da5(0x3b4)](this,_0x296b5c);},VisuMZ[_0x312955(0x1af)][_0x312955(0x209)]=Game_BattlerBase[_0x312955(0x1b8)][_0x312955(0x2ac)],Game_BattlerBase['prototype'][_0x312955(0x2ac)]=function(_0x39f249){const _0x27f7b5=_0x312955;this[_0x27f7b5(0x234)]=!![];const _0x41ce2e=VisuMZ[_0x27f7b5(0x1af)]['Game_BattlerBase_param_artifact']['call'](this,_0x39f249);return this['_allowArtifactParamBase']=undefined,_0x41ce2e;},VisuMZ[_0x312955(0x1af)][_0x312955(0x194)]=Game_Actor[_0x312955(0x1b8)][_0x312955(0x251)],Game_Actor[_0x312955(0x1b8)]['traitObjects']=function(){const _0x475eae=_0x312955;this['_allowArtifactTraitObjects']=!![];const _0x14fd0e=VisuMZ[_0x475eae(0x1af)][_0x475eae(0x194)]['call'](this);return this['_allowArtifactTraitObjects']=undefined,_0x14fd0e;},VisuMZ[_0x312955(0x1af)][_0x312955(0x3cb)]=Game_Actor[_0x312955(0x1b8)][_0x312955(0x43b)],Game_Actor[_0x312955(0x1b8)]['equips']=function(){const _0x102e3f=_0x312955,_0xcb68cf=VisuMZ[_0x102e3f(0x1af)]['Game_Actor_equips_artifacts']['call'](this);if(this[_0x102e3f(0x394)]||this[_0x102e3f(0x234)]){const _0x32654b=_0xcb68cf[_0x102e3f(0x16e)]($gameParty[_0x102e3f(0x467)]());return _0x32654b;}else return _0xcb68cf;},VisuMZ[_0x312955(0x1af)][_0x312955(0x18b)]=Game_BattlerBase[_0x312955(0x1b8)][_0x312955(0x46f)],Game_BattlerBase[_0x312955(0x1b8)][_0x312955(0x46f)]=function(_0x175896){const _0x42e298=_0x312955;let _0x312a81=VisuMZ['ItemsEquipsCore'][_0x42e298(0x18b)]['call'](this,_0x175896);if(this[_0x42e298(0x36a)]===Game_Enemy)for(const _0x47fcf9 of $gameParty[_0x42e298(0x10e)]()){if(_0x47fcf9)_0x312a81+=_0x47fcf9[_0x42e298(0xbe)][_0x175896];}return _0x312a81;},VisuMZ[_0x312955(0x1af)][_0x312955(0x3d6)]=Game_Enemy[_0x312955(0x1b8)]['traitObjects'],Game_Enemy['prototype'][_0x312955(0x251)]=function(){const _0x3d82de=_0x312955;let _0x57cb7f=VisuMZ[_0x3d82de(0x1af)][_0x3d82de(0x3d6)]['call'](this);return _0x57cb7f[_0x3d82de(0x16e)]($gameParty[_0x3d82de(0x10e)]());},VisuMZ[_0x312955(0x1af)][_0x312955(0x1bb)]=Game_Party[_0x312955(0x1b8)]['gainItem'],Game_Party[_0x312955(0x1b8)][_0x312955(0x1ad)]=function(_0x345bc9,_0x15b9ac,_0x3d95d0){const _0x1715c3=_0x312955;VisuMZ['ItemsEquipsCore']['Game_Party_gainItem_artifact'][_0x1715c3(0x3b4)](this,_0x345bc9,_0x15b9ac,_0x3d95d0);if(DataManager[_0x1715c3(0x22e)](_0x345bc9)){let _0x170d94=$gameParty[_0x1715c3(0x2ea)]();if($gameParty[_0x1715c3(0x29b)]())_0x170d94=_0x170d94[_0x1715c3(0x16e)]($gameTroop[_0x1715c3(0x34a)]());for(const _0x342a00 of _0x170d94){if(!_0x342a00)continue;_0x342a00['_cache']={};}}},Game_Party[_0x312955(0x1b8)][_0x312955(0x467)]=function(){const _0x3876ec=_0x312955;let _0x2c7a01=[];const _0x595955=VisuMZ[_0x3876ec(0x1af)][_0x3876ec(0xbf)][_0x3876ec(0xe0)];if(_0x595955)for(const _0x16cbf2 of _0x595955){const _0x27e907=$dataArmors[_0x16cbf2];if(!_0x27e907)continue;if(!this[_0x3876ec(0x3fb)](_0x27e907))continue;let _0x59c4db=0x1;if(DataManager[_0x3876ec(0x30b)](_0x27e907))_0x59c4db=this['numItems'](_0x27e907);while(_0x59c4db--)_0x2c7a01[_0x3876ec(0x4af)](_0x27e907);}return _0x2c7a01;},Game_Party[_0x312955(0x1b8)]['troopArtifacts']=function(){const _0x2e0889=_0x312955;let _0x163ea5=[];const _0x4afd0e=VisuMZ['ItemsEquipsCore'][_0x2e0889(0xbf)][_0x2e0889(0x16c)];if(_0x4afd0e)for(const _0x555f1a of _0x4afd0e){const _0x5071cb=$dataArmors[_0x555f1a];if(!_0x5071cb)continue;if(!this['hasItem'](_0x5071cb))continue;let _0x43dac2=0x1;if(DataManager[_0x2e0889(0x30b)](_0x5071cb))_0x43dac2=this[_0x2e0889(0xe9)](_0x5071cb);while(_0x43dac2--)_0x163ea5[_0x2e0889(0x4af)](_0x5071cb);}return _0x163ea5;},Game_Party[_0x312955(0x1b8)][_0x312955(0x2d4)]=function(){const _0x364477=_0x312955;return this[_0x364477(0x467)]()[_0x364477(0x16e)](this['troopArtifacts']());},VisuMZ[_0x312955(0x1af)][_0x312955(0x29e)]=Game_Party[_0x312955(0x1b8)][_0x312955(0x105)],Game_Party[_0x312955(0x1b8)][_0x312955(0x105)]=function(){const _0xea197=_0x312955;VisuMZ[_0xea197(0x1af)]['Game_Party_setupBattleTestItems_artifact'][_0xea197(0x3b4)](this),this['removeBattleTestArtifacts']();},Game_Party[_0x312955(0x1b8)][_0x312955(0x10a)]=function(){const _0x5331ce=_0x312955,_0x2de66e=$gameParty[_0x5331ce(0xdd)]()[_0x5331ce(0x1a7)](_0x5d743f=>DataManager[_0x5331ce(0x22e)](_0x5d743f));for(const _0x2f04fa of _0x2de66e){const _0x4fed0a=this[_0x5331ce(0xe9)](_0x2f04fa);if(_0x4fed0a)this[_0x5331ce(0x153)](_0x2f04fa,_0x4fed0a);}},DataManager['meetsClassRequirements']=function(_0x2230ef,_0x1c3521){const _0x2770d4=_0x312955;if(this['isItem'](_0x1c3521))return![];if(!_0x2230ef)return![];if($gameTemp[_0x2770d4(0x309)])return!![];if(BattleManager['isBattleTest']())return!![];const _0xbee32f=this['getClassRequirements'](_0x1c3521);if(_0xbee32f[_0x2770d4(0x2e4)]<=0x0)return!![];return _0xbee32f['includes'](_0x2230ef[_0x2770d4(0x214)]()['id']);},DataManager[_0x312955(0x3f3)]=function(_0x4bb766){const _0x52a501=_0x312955;if(!_0x4bb766)return[];this[_0x52a501(0x1c6)]=this[_0x52a501(0x1c6)]||{};const _0x39a48c=_0x52a501(0x142)[_0x52a501(0x3d3)](this['isWeapon'](_0x4bb766)?_0x52a501(0x418):_0x52a501(0x132),_0x4bb766['id']);if(this[_0x52a501(0x1c6)][_0x39a48c]!==undefined)return this[_0x52a501(0x1c6)][_0x39a48c];let _0x3aa396=[];const _0x121fef=_0x4bb766[_0x52a501(0x1ba)]||'';if(_0x121fef[_0x52a501(0x2c5)](/<EQUIP FOR CLASS(?:|ES) ONLY:[ ](.*)>/i)){const _0x509790=String(RegExp['$1'])[_0x52a501(0x3a1)](',')[_0x52a501(0x4ac)](_0x1d34fa=>_0x1d34fa['trim']());for(const _0x3309b4 of _0x509790){const _0xe987b1=/^\d+$/[_0x52a501(0x18e)](_0x3309b4);_0xe987b1?_0x3aa396[_0x52a501(0x4af)](Number(_0x3309b4)):_0x3aa396[_0x52a501(0x4af)](DataManager['getClassIdWithName'](_0x3309b4));}}return this[_0x52a501(0x1c6)][_0x39a48c]=_0x3aa396,this['_getClassRequirements'][_0x39a48c];},DataManager[_0x312955(0x16f)]=function(_0x44ffa6,_0x1c56fe){const _0x3bd0d8=_0x312955;if(this[_0x3bd0d8(0x498)](_0x1c56fe))return![];if(!_0x44ffa6)return![];if($gameTemp[_0x3bd0d8(0x309)])return!![];if(BattleManager[_0x3bd0d8(0x403)]())return!![];const _0x555ff5=this[_0x3bd0d8(0x3cf)](_0x1c56fe);for(const _0x4c9d08 of _0x555ff5){if(!this[_0x3bd0d8(0x7d)](_0x44ffa6,_0x4c9d08))return![];}return!![];},DataManager[_0x312955(0x3cf)]=function(_0x15fa58){const _0x223786=_0x312955;if(!_0x15fa58)return[];this[_0x223786(0x1d5)]=this['_getEquipRequirements']||{};const _0x445858=_0x223786(0x142)[_0x223786(0x3d3)](this[_0x223786(0xed)](_0x15fa58)?_0x223786(0x418):_0x223786(0x132),_0x15fa58['id']);if(this[_0x223786(0x1d5)][_0x445858]!==undefined)return this[_0x223786(0x1d5)][_0x445858];let _0x1c8bdf=[];const _0x4aa5c8=_0x15fa58[_0x223786(0x1ba)]||'';return _0x4aa5c8[_0x223786(0x2c5)](/<EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>\s*([\s\S]*)\s*<\/EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>/i)&&(_0x1c8bdf=String(RegExp['$1'])['split'](/[\r\n]+/)),this[_0x223786(0x1d5)][_0x445858]=_0x1c8bdf,this[_0x223786(0x1d5)][_0x445858];},DataManager['meetsEquipRequirement']=function(_0x20d740,_0x1837c7){const _0x5321f9=_0x312955;if(_0x1837c7['match'](/(?:LEVEL|LV|LVL)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x5552aa=String(RegExp['$1'])[_0x5321f9(0x349)](),_0x455df5=Number(RegExp['$2']);switch(_0x5552aa){case'>':return _0x20d740[_0x5321f9(0x325)]>_0x455df5;case'>=':return _0x20d740['level']>=_0x455df5;case _0x5321f9(0xcc):return _0x20d740[_0x5321f9(0x325)]===_0x455df5;case'<=':return _0x20d740['level']<=_0x455df5;case'<':return _0x20d740['level']<_0x455df5;}return![];}if(_0x1837c7[_0x5321f9(0x2c5)](/(MAXHP|MAXMP|MHP|MMP)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x3cb664=String(RegExp['$1'])['toLowerCase']()['trim'](),_0x45201c=String(RegExp['$2'])[_0x5321f9(0x349)](),_0x2ac1ce=Number(RegExp['$3']);let _0x26f494=0x0;if(['maxmp',_0x5321f9(0x45a)][_0x5321f9(0x207)](_0x3cb664))_0x26f494=0x1;const _0x3e4bd9=_0x20d740[_0x5321f9(0xdb)][_0x26f494]||0x0;switch(_0x45201c){case'>':return _0x20d740[_0x5321f9(0x448)](_0x26f494)+_0x3e4bd9>_0x2ac1ce;case'>=':return _0x20d740[_0x5321f9(0x448)](_0x26f494)+_0x3e4bd9>=_0x2ac1ce;case _0x5321f9(0xcc):return _0x20d740[_0x5321f9(0x448)](_0x26f494)+_0x3e4bd9===_0x2ac1ce;case'<=':return _0x20d740['paramBase'](_0x26f494)+_0x3e4bd9<=_0x2ac1ce;case'<':return _0x20d740['paramBase'](_0x26f494)+_0x3e4bd9<_0x2ac1ce;}return![];}if(_0x1837c7[_0x5321f9(0x2c5)](/(ATK|DEF|MAT|MDF|AGI|LUK)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x3ab793=String(RegExp['$1'])['toLowerCase']()[_0x5321f9(0x349)](),_0x346121=String(RegExp['$2'])[_0x5321f9(0x349)](),_0x3a9fe1=Number(RegExp['$3']),_0x59da49=[_0x5321f9(0x254),_0x5321f9(0x247),_0x5321f9(0x2e6),_0x5321f9(0x238),'agi','luk'];let _0x3879c6=_0x59da49['indexOf'](_0x3ab793)+0x2;if(_0x3879c6<0x2)return![];const _0x108e4c=_0x20d740[_0x5321f9(0xdb)][_0x3879c6]||0x0;switch(_0x346121){case'>':return _0x20d740['paramBase'](_0x3879c6)+_0x108e4c>_0x3a9fe1;case'>=':return _0x20d740['paramBase'](_0x3879c6)+_0x108e4c>=_0x3a9fe1;case _0x5321f9(0xcc):return _0x20d740[_0x5321f9(0x448)](_0x3879c6)+_0x108e4c===_0x3a9fe1;case'<=':return _0x20d740['paramBase'](_0x3879c6)+_0x108e4c<=_0x3a9fe1;case'<':return _0x20d740[_0x5321f9(0x448)](_0x3879c6)+_0x108e4c<_0x3a9fe1;}return![];}if(_0x1837c7[_0x5321f9(0x2c5)](/LEARNED SKILL:[ ](\d+)/i)){const _0x4bc78d=Number(RegExp['$1']);return _0x20d740[_0x5321f9(0x27a)](_0x4bc78d);}else{if(_0x1837c7[_0x5321f9(0x2c5)](/LEARNED SKILL:[ ](.*)/i)){const _0x45617b=String(RegExp['$1']),_0x150525=this['getSkillIdWithName'](_0x45617b);return _0x20d740['isLearnedSkill'](_0x150525);}}if(_0x1837c7[_0x5321f9(0x2c5)](/SWITCH:[ ](\d+)/i)){const _0xee12c4=Number(RegExp['$1']);return $gameSwitches[_0x5321f9(0x244)](_0xee12c4);}return!![];},DataManager[_0x312955(0x2e2)]=function(_0x4b0e1a){const _0xedd9e4=_0x312955;return this[_0xedd9e4(0x225)](_0x4b0e1a)?this[_0xedd9e4(0x32d)](_0x4b0e1a):[_0x4b0e1a[_0xedd9e4(0x417)]||0x0];},DataManager['getEtypeIDsCache']=function(_0x2f699c){const _0x2bd565=_0x312955;this['_cache_etypeIDs']=this[_0x2bd565(0xff)]||{};if(this['_cache_etypeIDs'][_0x2f699c['id']]!==undefined)return this[_0x2bd565(0xff)][_0x2f699c['id']];this[_0x2bd565(0xff)][_0x2f699c['id']]=[_0x2f699c[_0x2bd565(0x417)]||0x0];const _0x1d3239=_0x2f699c[_0x2bd565(0x1ba)]||'';if(_0x1d3239['match'](/<ADDED ETYPE(?:|S):[ ](.*)>/i)){const _0x46ac80=String(RegExp['$1'])[_0x2bd565(0x3a1)](',')[_0x2bd565(0x4ac)](_0x5c06de=>_0x5c06de[_0x2bd565(0x349)]());for(const _0x41fd99 of _0x46ac80){const _0x26b075=/^\d+$/[_0x2bd565(0x18e)](_0x41fd99);let _0x3a9c14=0x0;_0x26b075?_0x3a9c14=Number(_0x41fd99):_0x3a9c14=this[_0x2bd565(0x1a9)](_0x41fd99),_0x3a9c14>0x1&&this['_cache_etypeIDs'][_0x2f699c['id']][_0x2bd565(0x4af)](_0x3a9c14);}}return this['_cache_etypeIDs'][_0x2f699c['id']];},Game_BattlerBase['prototype'][_0x312955(0x2e1)]=function(_0x4797ed){const _0x44c213=_0x312955;return this[_0x44c213(0x33b)](_0x4797ed[_0x44c213(0x24e)])&&!this[_0x44c213(0x222)](_0x4797ed[_0x44c213(0x417)])&&DataManager[_0x44c213(0x2e2)](_0x4797ed)['every'](_0x17a4d0=>!this[_0x44c213(0x222)](_0x17a4d0));},DataManager[_0x312955(0x130)]=function(_0x19b226){const _0x2ac818=_0x312955;if(!this['isWeapon'](_0x19b226)&&!this[_0x2ac818(0x225)](_0x19b226))return![];if(Imported['VisuMZ_2_WeaponSwapSystem']&&this[_0x2ac818(0xed)](_0x19b226))return![];if(!_0x19b226[_0x2ac818(0x1ba)])return![];return _0x19b226['note']['match'](/<CURSED>/i);},DataManager['getPurifyTransformation']=function(_0x4fb21){const _0x255da2=_0x312955;if(!_0x4fb21)return _0x4fb21;if(!this[_0x255da2(0xed)](_0x4fb21)&&!this['isArmor'](_0x4fb21))return _0x4fb21;if(_0x4fb21[_0x255da2(0x1ba)][_0x255da2(0x2c5)](/<PURIFY TRANSFORM:[ ](.*)>/i)){const _0x26bcf4=String(RegExp['$1'])['trim'](),_0x1e77fb=/^\d+$/['test'](_0x26bcf4);if(_0x1e77fb){if(this[_0x255da2(0xed)](_0x4fb21))return $dataWeapons[Number(_0x26bcf4)];if(this[_0x255da2(0x225)](_0x4fb21))return $dataArmors[Number(_0x26bcf4)];}else{if(this[_0x255da2(0xed)](_0x4fb21))return $dataWeapons[this[_0x255da2(0x115)](_0x26bcf4)];if(this['isArmor'](_0x4fb21))return $dataArmors[this[_0x255da2(0x2d5)](_0x26bcf4)];}}return _0x4fb21;},Game_Party['prototype'][_0x312955(0x37c)]=function(){const _0x3fa525=_0x312955,_0x1feeb8=this[_0x3fa525(0x2ea)]();for(const _0x1036c3 of _0x1feeb8){if(!_0x1036c3)continue;_0x1036c3[_0x3fa525(0x37c)]();}},Game_Actor[_0x312955(0x1b8)]['purifyCursedEquips']=function(){const _0x21c09d=_0x312955,_0x4ad995=this[_0x21c09d(0x3da)]()[_0x21c09d(0x2e4)];for(let _0x33c20e=0x0;_0x33c20e<_0x4ad995;_0x33c20e++){const _0x21fcbc=this['_equips'][_0x33c20e];if(!_0x21fcbc)continue;const _0x1a94d9=_0x21fcbc[_0x21c09d(0xf9)]();if(!DataManager[_0x21c09d(0x130)](_0x1a94d9))continue;let _0x47005a=DataManager[_0x21c09d(0x414)](_0x1a94d9);this[_0x21c09d(0x2f3)](_0x1a94d9,_0x47005a)?(!this[_0x21c09d(0xa0)][_0x33c20e]&&(this['_equips'][_0x33c20e]=new Game_Item()),this[_0x21c09d(0xa0)][_0x33c20e][_0x21c09d(0x289)](_0x47005a),this[_0x21c09d(0x259)]()):this[_0x21c09d(0x211)](_0x33c20e,null);}},Game_Actor[_0x312955(0x1b8)][_0x312955(0x2f3)]=function(_0x545dc6,_0x2b0a11){const _0x16835c=_0x312955;if(_0x545dc6===_0x2b0a11)return![];const _0x1f9d04=DataManager[_0x16835c(0x2e2)](_0x2b0a11);if(!_0x1f9d04[_0x16835c(0x207)](_0x545dc6['etypeId']))return![];if(DataManager[_0x16835c(0xed)](_0x2b0a11))return this[_0x16835c(0xa2)](_0x2b0a11[_0x16835c(0x187)]);else{if(DataManager['isArmor'](_0x2b0a11))return this[_0x16835c(0x33b)](_0x2b0a11['atypeId']);}return![];},TextManager[_0x312955(0x406)]={'helpDesc':{'equip':VisuMZ[_0x312955(0x1af)][_0x312955(0x3a4)][_0x312955(0x412)][_0x312955(0x9d)]??_0x312955(0x2c9),'optimize':VisuMZ[_0x312955(0x1af)][_0x312955(0x3a4)][_0x312955(0x412)][_0x312955(0x401)]??_0x312955(0x102),'clear':VisuMZ['ItemsEquipsCore']['Settings'][_0x312955(0x412)][_0x312955(0x2b8)]??_0x312955(0x492)}},ColorManager[_0x312955(0x266)]=function(_0x28cffd){const _0x1d3d9=_0x312955;if(!_0x28cffd)return this[_0x1d3d9(0x2e8)]();else{if(_0x28cffd['note'][_0x1d3d9(0x2c5)](/<COLOR:[ ](\d+)>/i))return this[_0x1d3d9(0x465)](Number(RegExp['$1'])['clamp'](0x0,0x1f));else return _0x28cffd['note'][_0x1d3d9(0x2c5)](/<COLOR:[ ]#(.*)>/i)?'#'+String(RegExp['$1']):this[_0x1d3d9(0x2e8)]();}},ColorManager[_0x312955(0x341)]=function(_0x25fb2c){const _0x181e54=_0x312955;return _0x25fb2c=String(_0x25fb2c),_0x25fb2c[_0x181e54(0x2c5)](/#(.*)/i)?'#%1'[_0x181e54(0x3d3)](String(RegExp['$1'])):this[_0x181e54(0x465)](Number(_0x25fb2c));},SceneManager['isSceneShop']=function(){const _0x207257=_0x312955;return this[_0x207257(0x44a)]&&this[_0x207257(0x44a)][_0x207257(0x36a)]===Scene_Shop;},Game_Temp['prototype'][_0x312955(0x47a)]=function(){const _0x3db886=_0x312955;if(this['_bypassNewLabel'])return![];return VisuMZ[_0x3db886(0x1af)]['Settings'][_0x3db886(0x3bc)]['Enable'];},VisuMZ['ShopMenuStatusStandard']=VisuMZ[_0x312955(0x1af)][_0x312955(0x3a4)][_0x312955(0x3fa)]['MultiplierStandard'],VisuMZ[_0x312955(0x1af)][_0x312955(0x231)]=Game_BattlerBase[_0x312955(0x1b8)]['param'],Game_BattlerBase[_0x312955(0x1b8)][_0x312955(0x2ac)]=function(_0x4f2395){const _0x1d819a=_0x312955;return this[_0x1d819a(0x3f5)]?this['_shopStatusMenuAlly']?VisuMZ[_0x1d819a(0x236)]:0x1:VisuMZ[_0x1d819a(0x1af)]['Game_BattlerBase_param'][_0x1d819a(0x3b4)](this,_0x4f2395);},VisuMZ['ItemsEquipsCore'][_0x312955(0x34c)]=Game_BattlerBase['prototype']['meetsItemConditions'],Game_BattlerBase['prototype'][_0x312955(0x4ae)]=function(_0x3f6c0c){const _0x2a9267=_0x312955;if(!_0x3f6c0c)return![];if(!VisuMZ[_0x2a9267(0x1af)][_0x2a9267(0x34c)][_0x2a9267(0x3b4)](this,_0x3f6c0c))return![];if(!this[_0x2a9267(0x1a0)](_0x3f6c0c))return![];if(!this['meetsItemConditionsJS'](_0x3f6c0c))return![];return!![];},Game_BattlerBase[_0x312955(0x1b8)][_0x312955(0x1a0)]=function(_0x1d09aa){const _0x3537af=_0x312955;if(!this[_0x3537af(0x16b)](_0x1d09aa))return![];return!![];},Game_BattlerBase[_0x312955(0x1b8)][_0x312955(0x16b)]=function(_0x4caebf){const _0x15dcbb=_0x312955,_0x47db5c=_0x4caebf[_0x15dcbb(0x1ba)];if(_0x47db5c[_0x15dcbb(0x2c5)](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2759c8=JSON[_0x15dcbb(0x4a6)]('['+RegExp['$1'][_0x15dcbb(0x2c5)](/\d+/g)+']');for(const _0x204bf7 of _0x2759c8){if(!$gameSwitches[_0x15dcbb(0x244)](_0x204bf7))return![];}return!![];}if(_0x47db5c[_0x15dcbb(0x2c5)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5f8a8f=JSON[_0x15dcbb(0x4a6)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x3945e1 of _0x5f8a8f){if(!$gameSwitches[_0x15dcbb(0x244)](_0x3945e1))return![];}return!![];}if(_0x47db5c[_0x15dcbb(0x2c5)](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x422b50=JSON['parse']('['+RegExp['$1'][_0x15dcbb(0x2c5)](/\d+/g)+']');for(const _0x35f983 of _0x422b50){if($gameSwitches['value'](_0x35f983))return!![];}return![];}if(_0x47db5c[_0x15dcbb(0x2c5)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x330021=JSON[_0x15dcbb(0x4a6)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x4e21e3 of _0x330021){if(!$gameSwitches[_0x15dcbb(0x244)](_0x4e21e3))return!![];}return![];}if(_0x47db5c[_0x15dcbb(0x2c5)](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x288999=JSON[_0x15dcbb(0x4a6)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x2b9bba of _0x288999){if(!$gameSwitches[_0x15dcbb(0x244)](_0x2b9bba))return!![];}return![];}if(_0x47db5c[_0x15dcbb(0x2c5)](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x30cb12=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x55dc43 of _0x30cb12){if($gameSwitches[_0x15dcbb(0x244)](_0x55dc43))return![];}return!![];}return!![];},Game_BattlerBase[_0x312955(0x1b8)][_0x312955(0x3bf)]=function(_0x34f28c){const _0x45242d=_0x312955,_0x582f42=_0x34f28c['note'],_0x104ff8=VisuMZ[_0x45242d(0x1af)][_0x45242d(0x494)];return _0x104ff8[_0x34f28c['id']]?_0x104ff8[_0x34f28c['id']]['call'](this,_0x34f28c):!![];},Game_Actor[_0x312955(0x1b8)]['clearEquipments']=function(){const _0x1b86ef=_0x312955,_0x575755=this[_0x1b86ef(0x3da)]()[_0x1b86ef(0x2e4)];for(let _0xc468bb=0x0;_0xc468bb<_0x575755;_0xc468bb++){if(this[_0x1b86ef(0xc8)](_0xc468bb))this['changeEquip'](_0xc468bb,null);}},Game_Actor[_0x312955(0x1b8)][_0x312955(0xc8)]=function(_0x5a7e10){const _0x5d8b53=_0x312955;return this[_0x5d8b53(0x32a)]()[_0x5d8b53(0x207)](this[_0x5d8b53(0x3da)]()[_0x5a7e10])?![]:this[_0x5d8b53(0x439)](_0x5a7e10);},Game_Actor[_0x312955(0x1b8)]['nonRemovableEtypes']=function(){const _0x196784=_0x312955;return VisuMZ[_0x196784(0x1af)][_0x196784(0x3a4)][_0x196784(0x412)]['NonRemoveETypes'];},Game_Actor['prototype'][_0x312955(0x4ad)]=function(){const _0xbca08e=_0x312955,_0x43d3da=this[_0xbca08e(0x3da)]()[_0xbca08e(0x2e4)];for(let _0x3b39a2=0x0;_0x3b39a2<_0x43d3da;_0x3b39a2++){if(this['isOptimizeEquipOk'](_0x3b39a2))this[_0xbca08e(0x211)](_0x3b39a2,null);}for(let _0x3b63bc=0x0;_0x3b63bc<_0x43d3da;_0x3b63bc++){if(this[_0xbca08e(0x11b)](_0x3b63bc))this[_0xbca08e(0x211)](_0x3b63bc,this['bestEquipItem'](_0x3b63bc));}},Game_Actor[_0x312955(0x1b8)][_0x312955(0x11b)]=function(_0x208709){const _0x3522d4=_0x312955;return this[_0x3522d4(0x3cc)]()[_0x3522d4(0x207)](this[_0x3522d4(0x3da)]()[_0x208709])?![]:this[_0x3522d4(0x439)](_0x208709);},VisuMZ[_0x312955(0x1af)]['Game_Actor_isEquipChangeOk']=Game_Actor[_0x312955(0x1b8)][_0x312955(0x439)],Game_Actor[_0x312955(0x1b8)]['isEquipChangeOk']=function(_0x56de36){const _0x5e51f3=_0x312955;!this[_0x5e51f3(0xa0)][_0x56de36]&&(this['_equips'][_0x56de36]=new Game_Item());const _0x56e842=this[_0x5e51f3(0xa0)][_0x56de36];if(_0x56e842){const _0x3daaee=_0x56e842[_0x5e51f3(0xf9)]();if(DataManager[_0x5e51f3(0x130)](_0x3daaee))return![];}return VisuMZ['ItemsEquipsCore']['Game_Actor_isEquipChangeOk'][_0x5e51f3(0x3b4)](this,_0x56de36);},Game_Actor['prototype'][_0x312955(0x3cc)]=function(){const _0x2aa5df=_0x312955;return VisuMZ[_0x2aa5df(0x1af)]['Settings'][_0x2aa5df(0x412)][_0x2aa5df(0x1b2)];},VisuMZ[_0x312955(0x1af)][_0x312955(0x3c6)]=Game_Actor[_0x312955(0x1b8)][_0x312955(0x35f)],Game_Actor[_0x312955(0x1b8)][_0x312955(0x35f)]=function(_0xb061bd,_0x1c45a4){const _0x9b0378=_0x312955;if(this['_tempActor'])return![];$gameTemp[_0x9b0378(0x4a1)]=!![];const _0x141442=VisuMZ['ItemsEquipsCore'][_0x9b0378(0x3c6)][_0x9b0378(0x3b4)](this,_0xb061bd,_0x1c45a4);return $gameTemp[_0x9b0378(0x4a1)]=![],_0x141442;},Game_Actor['prototype']['changeEquipById']=function(_0x4bb2a2,_0x2a3d58){const _0x3459b0=_0x312955,_0x41e864=this[_0x3459b0(0x252)](_0x4bb2a2);if(_0x41e864<0x0)return;const _0x147825=_0x4bb2a2===0x1?$dataWeapons[_0x2a3d58]:$dataArmors[_0x2a3d58];this['changeEquip'](_0x41e864,_0x147825);},Game_Actor[_0x312955(0x1b8)]['getNextAvailableEtypeId']=function(_0x5567e3){const _0x1344fb=_0x312955;let _0x3d0f5a=0x0;const _0x460e16=this[_0x1344fb(0x3da)](),_0x13b443=this['equips']();for(let _0x465e45=0x0;_0x465e45<_0x460e16[_0x1344fb(0x2e4)];_0x465e45++){if(_0x460e16[_0x465e45]===_0x5567e3){_0x3d0f5a=_0x465e45;if(!_0x13b443[_0x465e45])return _0x3d0f5a;}}return _0x3d0f5a;},VisuMZ['ItemsEquipsCore'][_0x312955(0x24d)]=Game_Actor[_0x312955(0x1b8)][_0x312955(0x46f)],Game_Actor[_0x312955(0x1b8)][_0x312955(0x46f)]=function(_0x1d2e3e){const _0x3f73ab=_0x312955;let _0x3e352b=VisuMZ[_0x3f73ab(0x1af)]['Game_Actor_paramPlus'][_0x3f73ab(0x3b4)](this,_0x1d2e3e);for(const _0x3553c0 of this[_0x3f73ab(0x43b)]()){if(_0x3553c0)_0x3e352b+=this['paramPlusItemsEquipsCoreCustomJS'](_0x3553c0,_0x1d2e3e);}return _0x3e352b;},Game_Actor[_0x312955(0x1b8)][_0x312955(0x47e)]=function(_0xbcf598,_0x4b0839){const _0x298bb4=_0x312955;if(this['_calculatingJSParameters'])return 0x0;const _0x70084e=(DataManager[_0x298bb4(0xed)](_0xbcf598)?_0x298bb4(0x33a):_0x298bb4(0x2cc))[_0x298bb4(0x3d3)](_0xbcf598['id']),_0x31ddd9=_0x298bb4(0x142)[_0x298bb4(0x3d3)](_0x70084e,_0x4b0839);if(VisuMZ[_0x298bb4(0x1af)][_0x298bb4(0x2b7)][_0x31ddd9]){this[_0x298bb4(0x1e9)]=!![];const _0x5cc465=VisuMZ[_0x298bb4(0x1af)][_0x298bb4(0x2b7)][_0x31ddd9]['call'](this,_0xbcf598,_0x4b0839);return this['_calculatingJSParameters']=![],_0x5cc465;}else return 0x0;},Game_Actor['prototype'][_0x312955(0x2f2)]=function(_0x3896e7){const _0x2264d9=_0x312955;this['_shopStatusMenuMode']=!![],this[_0x2264d9(0x12b)]=_0x3896e7;},Game_Actor[_0x312955(0x1b8)][_0x312955(0x107)]=function(_0xa69e33){const _0x10db4b=_0x312955;_0xa69e33=this[_0x10db4b(0x1d0)](_0xa69e33);const _0x483f35=this[_0x10db4b(0x3da)]();this[_0x10db4b(0xa0)]=[];for(let _0x4c8ec4=0x0;_0x4c8ec4<_0x483f35[_0x10db4b(0x2e4)];_0x4c8ec4++){this[_0x10db4b(0xa0)][_0x4c8ec4]=new Game_Item();}for(let _0x57581f=0x0;_0x57581f<_0x483f35['length'];_0x57581f++){const _0x1a6d60=_0x483f35[_0x57581f],_0x2efbfd=this[_0x10db4b(0x352)](_0xa69e33,_0x1a6d60);if(this[_0x10db4b(0x319)](_0x2efbfd))this[_0x10db4b(0xa0)][_0x57581f][_0x10db4b(0x289)](_0x2efbfd);}this['releaseUnequippableItems'](!![]),this['refresh']();},Game_Actor[_0x312955(0x1b8)][_0x312955(0x1d0)]=function(_0x469afa){const _0xcb788a=_0x312955,_0x19e9df=[];for(let _0x23379b=0x0;_0x23379b<_0x469afa[_0xcb788a(0x2e4)];_0x23379b++){const _0x391d41=_0x469afa[_0x23379b];if(_0x391d41<=0x0)continue;const _0x24b51e=$dataSystem[_0xcb788a(0x31c)][_0x23379b+0x1];if(_0x24b51e===$dataSystem[_0xcb788a(0x31c)][0x1]||_0x23379b===0x1&&this[_0xcb788a(0x369)]())_0x19e9df[_0xcb788a(0x4af)]($dataWeapons[_0x391d41]);else{if(BattleManager[_0xcb788a(0x403)]()){const _0x36e6c0=$dataArmors[_0x391d41];_0x36e6c0&&_0x36e6c0[_0xcb788a(0x417)]===_0x23379b+0x1&&_0x19e9df[_0xcb788a(0x4af)](_0x36e6c0);}else{const _0x52092d=$dataArmors[_0x391d41];_0x52092d&&_0x52092d[_0xcb788a(0x417)]===_0x23379b+0x1&&_0x19e9df['push'](_0x52092d);}}}return _0x19e9df;},Game_Actor[_0x312955(0x1b8)][_0x312955(0x352)]=function(_0x290ebc,_0x5d34c7){const _0x225a2f=_0x312955;for(const _0x3d47cf of _0x290ebc){if(!_0x3d47cf)continue;if(_0x3d47cf['etypeId']===_0x5d34c7)return _0x290ebc[_0x225a2f(0xd6)](_0x290ebc[_0x225a2f(0x34f)](_0x3d47cf),0x1),_0x3d47cf;}return null;},Game_Actor[_0x312955(0x1b8)][_0x312955(0x3da)]=function(){const _0x19e1dc=_0x312955,_0x130aa5=VisuMZ[_0x19e1dc(0x1af)][_0x19e1dc(0x475)](this['_forcedSlots']||this[_0x19e1dc(0x214)]()[_0x19e1dc(0x3da)]);if(_0x130aa5[_0x19e1dc(0x2e4)]>=0x2&&this['isDualWield']())_0x130aa5[0x1]=0x1;return _0x130aa5;},Game_Actor['prototype'][_0x312955(0x33f)]=function(_0x15f70f){const _0x25d7f7=_0x312955;_0x15f70f[_0x25d7f7(0x1f5)](0x0),_0x15f70f[_0x25d7f7(0x1f5)](-0x1),this[_0x25d7f7(0x15b)]=_0x15f70f,this[_0x25d7f7(0x259)](),this[_0x25d7f7(0x118)]();},Game_Actor['prototype'][_0x312955(0x262)]=function(){const _0x378957=_0x312955;this['_forcedSlots']=undefined,this[_0x378957(0x259)](),this[_0x378957(0x118)]();},Game_Actor[_0x312955(0x1b8)][_0x312955(0x118)]=function(){const _0x357b07=_0x312955;let _0xa9d0a7=this[_0x357b07(0x3da)]()[_0x357b07(0x2e4)];while(this[_0x357b07(0xa0)]['length']>_0xa9d0a7){const _0x57fba0=this[_0x357b07(0xa0)][this[_0x357b07(0xa0)][_0x357b07(0x2e4)]-0x1];_0x57fba0&&_0x57fba0[_0x357b07(0xf9)]()&&$gameParty[_0x357b07(0x1ad)](_0x57fba0[_0x357b07(0xf9)](),0x1),this[_0x357b07(0xa0)][_0x357b07(0xde)]();}while(_0xa9d0a7>this[_0x357b07(0xa0)][_0x357b07(0x2e4)]){this[_0x357b07(0xa0)][_0x357b07(0x4af)](new Game_Item());}},VisuMZ[_0x312955(0x1af)][_0x312955(0x44d)]=Game_Actor['prototype'][_0x312955(0x46b)],Game_Actor[_0x312955(0x1b8)][_0x312955(0x46b)]=function(_0x5edc00,_0x2adcc0){const _0x5f45ca=_0x312955;VisuMZ[_0x5f45ca(0x1af)][_0x5f45ca(0x44d)][_0x5f45ca(0x3b4)](this,_0x5edc00,_0x2adcc0),this[_0x5f45ca(0x118)]();},Game_Actor[_0x312955(0x1b8)]['prepareNewEquipSlotsOnLoad']=function(){const _0x32fe67=_0x312955,_0x4a73c2=this[_0x32fe67(0x3da)]();for(let _0x3f9ac4=0x0;_0x3f9ac4<_0x4a73c2[_0x32fe67(0x2e4)];_0x3f9ac4++){if(!this[_0x32fe67(0xa0)][_0x3f9ac4])this[_0x32fe67(0xa0)][_0x3f9ac4]=new Game_Item();}this['releaseUnequippableItems'](![]),this[_0x32fe67(0x259)]();},VisuMZ['ItemsEquipsCore'][_0x312955(0xc9)]=Game_Actor['prototype']['changeEquip'],Game_Actor['prototype']['changeEquip']=function(_0x27a85c,_0x25ce78){const _0x34fd6c=_0x312955;if(!this[_0x34fd6c(0x27f)]){const _0x4b91a2=JsonEx[_0x34fd6c(0x1ac)](this);_0x4b91a2[_0x34fd6c(0x27f)]=!![],this['changeEquipBase'](_0x27a85c,_0x25ce78),this['equipAdjustHpMp'](_0x4b91a2);}else this[_0x34fd6c(0x138)](_0x27a85c,_0x25ce78);},VisuMZ['ItemsEquipsCore'][_0x312955(0x165)]=Game_Actor[_0x312955(0x1b8)][_0x312955(0x3d9)],Game_Actor['prototype'][_0x312955(0x3d9)]=function(_0x2e1605,_0x44b885){const _0x15fed7=_0x312955;!this[_0x15fed7(0xa0)][_0x2e1605]&&(this[_0x15fed7(0xa0)][_0x2e1605]=new Game_Item());if(!this[_0x15fed7(0x27f)]){const _0x407c76=JsonEx[_0x15fed7(0x1ac)](this);_0x407c76[_0x15fed7(0x27f)]=!![],VisuMZ[_0x15fed7(0x1af)][_0x15fed7(0x165)][_0x15fed7(0x3b4)](this,_0x2e1605,_0x44b885),this['equipAdjustHpMp'](_0x407c76);}else VisuMZ['ItemsEquipsCore'][_0x15fed7(0x165)][_0x15fed7(0x3b4)](this,_0x2e1605,_0x44b885);},VisuMZ[_0x312955(0x1af)][_0x312955(0x18a)]=Game_Actor['prototype']['discardEquip'],Game_Actor[_0x312955(0x1b8)][_0x312955(0x129)]=function(_0x49cbaf){const _0x301c12=_0x312955;if(!this[_0x301c12(0x27f)]){const _0x234fcf=JsonEx[_0x301c12(0x1ac)](this);_0x234fcf[_0x301c12(0x27f)]=!![],VisuMZ[_0x301c12(0x1af)][_0x301c12(0x18a)]['call'](this,_0x49cbaf),this[_0x301c12(0x25d)](_0x234fcf);}else VisuMZ['ItemsEquipsCore'][_0x301c12(0x18a)][_0x301c12(0x3b4)](this,_0x49cbaf);},Game_Actor[_0x312955(0x1b8)][_0x312955(0xda)]=function(_0x17bb04){const _0x36de1f=_0x312955;if(this[_0x36de1f(0x456)])return;let _0x42ce9c=0x0;for(;;){_0x42ce9c++;if(_0x42ce9c>0x3)break;const _0x2c4545=this['equipSlots'](),_0x40db24=this['equips'](),_0x1ed279=_0x40db24[_0x36de1f(0x2e4)];let _0x3d4ed0=![];for(let _0x509deb=0x0;_0x509deb<_0x1ed279;_0x509deb++){const _0x295881=_0x40db24[_0x509deb];if(!_0x295881)continue;const _0x2bcf3f=DataManager['getEtypeIDs'](_0x295881);if(!this['canEquip'](_0x295881)||!_0x2bcf3f[_0x36de1f(0x207)](_0x2c4545[_0x509deb])){!_0x17bb04&&this[_0x36de1f(0x35f)](null,_0x295881);if(!this['_tempActor']){const _0x4be031=JsonEx[_0x36de1f(0x1ac)](this);_0x4be031[_0x36de1f(0x27f)]=!![],this[_0x36de1f(0xa0)][_0x509deb]['setObject'](null),this[_0x36de1f(0x456)]=!![],this[_0x36de1f(0x25d)](_0x4be031),this['_bypassReleaseUnequippableItemsItemsEquipsCore']=undefined;}else{if(this['_equips'][_0x509deb])this['_equips'][_0x509deb]['setObject'](null);else continue;}_0x3d4ed0=!![];}}if(!_0x3d4ed0)break;}},Game_Actor[_0x312955(0x1b8)][_0x312955(0x25d)]=function(_0x4edbb1){const _0x400e3a=_0x312955;if(this[_0x400e3a(0x27f)])return;if(!VisuMZ['ItemsEquipsCore'][_0x400e3a(0x3a4)][_0x400e3a(0x412)][_0x400e3a(0x39b)])return;const _0x31147a=Math[_0x400e3a(0x288)](_0x4edbb1['hpRate']()*this[_0x400e3a(0x3c8)]),_0x4e9073=Math[_0x400e3a(0x288)](_0x4edbb1[_0x400e3a(0x2b6)]()*this[_0x400e3a(0x45a)]);if(this['hp']>0x0)this['setHp'](_0x31147a);if(this['mp']>0x0)this[_0x400e3a(0x377)](_0x4e9073);},Game_Actor[_0x312955(0x1b8)][_0x312955(0x138)]=function(_0x530448,_0x54527f){const _0x10630e=_0x312955;if(!this[_0x10630e(0x35f)](_0x54527f,this[_0x10630e(0x43b)]()[_0x530448]))return;if(_0x54527f){const _0x5b00fa=DataManager[_0x10630e(0x2e2)](_0x54527f);if(!_0x5b00fa['includes'](this[_0x10630e(0x3da)]()[_0x530448]))return;}!this['_equips'][_0x530448]&&(this[_0x10630e(0xa0)][_0x530448]=new Game_Item());this['_equips'][_0x530448][_0x10630e(0x289)](_0x54527f);if(VisuMZ[_0x10630e(0x1af)]['CheckCursedItemMsg'](_0x54527f)){const _0x55ac50=VisuMZ[_0x10630e(0x1af)]['Settings'][_0x10630e(0x412)][_0x10630e(0x2d1)]||'',_0xec1280=this[_0x10630e(0x392)](),_0x4fac1b=_0x10630e(0x24b)[_0x10630e(0x3d3)](_0x54527f[_0x10630e(0x237)]),_0x2bfd70=_0x54527f[_0x10630e(0x392)]||'';let _0x3b78bd=_0x55ac50[_0x10630e(0x3d3)](_0xec1280,_0x4fac1b,_0x2bfd70);if(VisuMZ[_0x10630e(0x1e5)][_0x10630e(0x39a)]>=1.79&&_0x3b78bd[_0x10630e(0x2e4)]>0x0)$textPopup(_0x3b78bd);}this[_0x10630e(0x259)]();},VisuMZ[_0x312955(0x1af)][_0x312955(0x398)]=function(_0x48345d){const _0x27d193=_0x312955;if(!_0x48345d)return![];if(!Imported['VisuMZ_0_CoreEngine'])return![];if(VisuMZ[_0x27d193(0x1e5)]['version']<1.79)return![];return DataManager[_0x27d193(0x130)](_0x48345d);},Game_Actor['prototype'][_0x312955(0x3c4)]=function(_0x239ab9){const _0x2ed1f8=_0x312955,_0x40ca02=this['equipSlots']()[_0x239ab9],_0x20f8b1=$gameParty['equipItems']()[_0x2ed1f8(0x1a7)](_0x1478b0=>DataManager[_0x2ed1f8(0x2e2)](_0x1478b0)[_0x2ed1f8(0x207)](_0x40ca02)&&this[_0x2ed1f8(0x319)](_0x1478b0)&&!DataManager[_0x2ed1f8(0x130)](_0x1478b0));let _0x299bc1=null,_0x288f45=-0x3e8;for(let _0x3c1515=0x0;_0x3c1515<_0x20f8b1['length'];_0x3c1515++){const _0x5c078d=_0x20f8b1[_0x3c1515];if(!this[_0x2ed1f8(0x161)](_0x5c078d))continue;const _0x44f9bd=this[_0x2ed1f8(0xdc)](_0x5c078d);_0x44f9bd>_0x288f45&&(_0x288f45=_0x44f9bd,_0x299bc1=_0x5c078d);}return _0x299bc1;},Game_Actor['prototype'][_0x312955(0x161)]=function(_0xbac433){const _0x3e433a=_0x312955;if(!_0xbac433)return![];const _0x25bb5b=_0xbac433?_0xbac433[_0x3e433a(0x1ba)]:'';if(_0x25bb5b[_0x3e433a(0x2c5)](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){const _0x21b6c7=Number(RegExp['$1'])||0x1,_0x2d931e=this['equips']()[_0x3e433a(0x1a7)](_0x51a3fc=>_0x51a3fc===_0xbac433);if(_0x2d931e[_0x3e433a(0x2e4)]>=_0x21b6c7)return![];}if(DataManager[_0x3e433a(0xed)](_0xbac433)){if(_0x25bb5b['match'](/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i)){const _0x38c1d7=Number(RegExp['$1'])||0x1,_0x378649=this[_0x3e433a(0x242)]()['remove'](null)[_0x3e433a(0x1a7)](_0x17237a=>_0x17237a['wtypeId']===_0xbac433[_0x3e433a(0x187)]);if(_0x378649[_0x3e433a(0x2e4)]>=_0x38c1d7)return![];}{const _0x2e6dae=this[_0x3e433a(0x242)]()['remove'](null)[_0x3e433a(0x1a7)](_0xeb8ee3=>_0xeb8ee3[_0x3e433a(0x187)]===_0xbac433[_0x3e433a(0x187)]);if(_0x2e6dae[_0x3e433a(0x2e4)]>0x0){let _0x3b86b5=0x270f;for(const _0x38cb4b of _0x2e6dae){_0x38cb4b['note'][_0x3e433a(0x2c5)](/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i)&&(_0x3b86b5=Math[_0x3e433a(0x44b)](_0x3b86b5,Number(RegExp['$1'])));}if(_0x2e6dae['length']>=_0x3b86b5)return![];}}}if(DataManager[_0x3e433a(0x225)](_0xbac433)){if(_0x25bb5b[_0x3e433a(0x2c5)](/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i)){const _0x58e9d7=Number(RegExp['$1'])||0x1,_0x4afab7=this[_0x3e433a(0xdd)]()['remove'](null)['filter'](_0x4362cc=>_0x4362cc[_0x3e433a(0x24e)]===_0xbac433[_0x3e433a(0x24e)]);if(_0x4afab7[_0x3e433a(0x2e4)]>=_0x58e9d7)return![];}{const _0x3343d6=this[_0x3e433a(0xdd)]()['remove'](null)[_0x3e433a(0x1a7)](_0x1f80e7=>_0x1f80e7[_0x3e433a(0x24e)]===_0xbac433['atypeId']);if(_0x3343d6[_0x3e433a(0x2e4)]>0x0){let _0x5a6184=0x270f;for(const _0x38a24e of _0x3343d6){_0x38a24e[_0x3e433a(0x1ba)]['match'](/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i)&&(_0x5a6184=Math[_0x3e433a(0x44b)](_0x5a6184,Number(RegExp['$1'])));}if(_0x3343d6['length']>=_0x5a6184)return![];}}}return!![];},VisuMZ[_0x312955(0x1af)]['Game_Party_initialize']=Game_Party['prototype'][_0x312955(0x99)],Game_Party[_0x312955(0x1b8)]['initialize']=function(){const _0x4c580c=_0x312955;VisuMZ[_0x4c580c(0x1af)][_0x4c580c(0xfb)]['call'](this),this[_0x4c580c(0x213)](),this['initShopTrackingData']();},Game_Party[_0x312955(0x1b8)][_0x312955(0x213)]=function(){const _0x5c4f8a=_0x312955;this[_0x5c4f8a(0x4a0)]=[];},Game_Party['prototype'][_0x312955(0x476)]=function(_0x465ba6){const _0x3be6fa=_0x312955;if(!$gameTemp[_0x3be6fa(0x47a)]())return![];if(this['_newItemsList']===undefined)this['initNewItemsList']();let _0x305c5e='';if(DataManager[_0x3be6fa(0x498)](_0x465ba6))_0x305c5e=_0x3be6fa(0x127)[_0x3be6fa(0x3d3)](_0x465ba6['id']);else{if(DataManager['isWeapon'](_0x465ba6))_0x305c5e='weapon-%1'[_0x3be6fa(0x3d3)](_0x465ba6['id']);else{if(DataManager[_0x3be6fa(0x225)](_0x465ba6))_0x305c5e=_0x3be6fa(0x39c)['format'](_0x465ba6['id']);else return;}}return this[_0x3be6fa(0x4a0)][_0x3be6fa(0x207)](_0x305c5e);},Game_Party['prototype']['setNewItem']=function(_0x3b1cae){const _0x50472f=_0x312955;if(!$gameTemp[_0x50472f(0x47a)]())return;if(this[_0x50472f(0x4a0)]===undefined)this[_0x50472f(0x213)]();let _0x58e293='';if(DataManager[_0x50472f(0x498)](_0x3b1cae))_0x58e293='item-%1'[_0x50472f(0x3d3)](_0x3b1cae['id']);else{if(DataManager[_0x50472f(0xed)](_0x3b1cae))_0x58e293='weapon-%1'['format'](_0x3b1cae['id']);else{if(DataManager['isArmor'](_0x3b1cae))_0x58e293=_0x50472f(0x39c)['format'](_0x3b1cae['id']);else return;}}if(!this[_0x50472f(0x4a0)][_0x50472f(0x207)](_0x58e293))this['_newItemsList'][_0x50472f(0x4af)](_0x58e293);},Game_Party['prototype'][_0x312955(0x11e)]=function(_0x1b3f1f){const _0x306ade=_0x312955;if(!$gameTemp[_0x306ade(0x47a)]())return;if(this['_newItemsList']===undefined)this[_0x306ade(0x213)]();let _0x463f5='';if(DataManager[_0x306ade(0x498)](_0x1b3f1f))_0x463f5=_0x306ade(0x127)[_0x306ade(0x3d3)](_0x1b3f1f['id']);else{if(DataManager[_0x306ade(0xed)](_0x1b3f1f))_0x463f5='weapon-%1'[_0x306ade(0x3d3)](_0x1b3f1f['id']);else{if(DataManager['isArmor'](_0x1b3f1f))_0x463f5='armor-%1'[_0x306ade(0x3d3)](_0x1b3f1f['id']);else return;}}this[_0x306ade(0x4a0)][_0x306ade(0x207)](_0x463f5)&&this['_newItemsList'][_0x306ade(0xd6)](this['_newItemsList'][_0x306ade(0x34f)](_0x463f5),0x1);},VisuMZ[_0x312955(0x1af)][_0x312955(0x1de)]=Game_Party[_0x312955(0x1b8)][_0x312955(0xe9)],Game_Party['prototype'][_0x312955(0xe9)]=function(_0x554bec){const _0xcb4ce9=_0x312955;if(DataManager[_0xcb4ce9(0x358)](_0x554bec))_0x554bec=DataManager[_0xcb4ce9(0xb9)](_0x554bec);return VisuMZ[_0xcb4ce9(0x1af)][_0xcb4ce9(0x1de)][_0xcb4ce9(0x3b4)](this,_0x554bec);},VisuMZ[_0x312955(0x1af)][_0x312955(0x2d0)]=Game_Party[_0x312955(0x1b8)][_0x312955(0x1ad)],Game_Party['prototype']['gainItem']=function(_0x21569f,_0x45081a,_0x5c586b){const _0x339416=_0x312955;if(DataManager[_0x339416(0x358)](_0x21569f))_0x21569f=null;const _0x5ce807=this[_0x339416(0xe9)](_0x21569f);VisuMZ[_0x339416(0x1af)][_0x339416(0x2d0)][_0x339416(0x3b4)](this,_0x21569f,_0x45081a,_0x5c586b);if(this[_0x339416(0xe9)](_0x21569f)>_0x5ce807)this[_0x339416(0x405)](_0x21569f);},Game_Party['prototype']['maxItems']=function(_0x5d687e){const _0x35e6b6=_0x312955;if(DataManager['isProxyItem'](_0x5d687e))_0x5d687e=DataManager[_0x35e6b6(0xb9)](_0x5d687e);return DataManager[_0x35e6b6(0x117)](_0x5d687e);},VisuMZ[_0x312955(0x1af)][_0x312955(0x1c4)]=Game_Party[_0x312955(0x1b8)]['consumeItem'],Game_Party[_0x312955(0x1b8)][_0x312955(0x10b)]=function(_0x5b8856){const _0x648717=_0x312955;if(_0x5b8856){const _0xb2bcd8=_0x5b8856[_0x648717(0x1ba)]||'';if(_0xb2bcd8['match'](/<(?:CONSERVE|PRESERVE):[ ](\d+)([%％])>/i)){const _0x1411c8=Number(RegExp['$1'])*0.01;if(Math[_0x648717(0x1d4)]()<_0x1411c8)return;}}VisuMZ[_0x648717(0x1af)][_0x648717(0x1c4)][_0x648717(0x3b4)](this,_0x5b8856);},Game_Party['prototype'][_0x312955(0x4b5)]=function(){const _0x2e66ce=_0x312955;this[_0x2e66ce(0x92)]={'buy':{'gold':0x0,'items':{}},'sell':{'gold':0x0,'items':{}}};},Game_Party[_0x312955(0x1b8)][_0x312955(0x490)]=function(){const _0x1101e0=_0x312955;return this[_0x1101e0(0x92)]===undefined&&this['initShopTrackingData'](),this[_0x1101e0(0x92)];},Game_Party[_0x312955(0x1b8)]['getShopTrackingItem']=function(_0x1146b5,_0x3f7867){const _0x189109=_0x312955;if(!_0x3f7867)return 0x0;this[_0x189109(0x92)]===undefined&&this[_0x189109(0x4b5)]();const _0x328691=this[_0x189109(0x490)]();if(!_0x328691[_0x1146b5])return 0x0;if(_0x3f7867===_0x189109(0x8a))return _0x328691[_0x1146b5][_0x189109(0x8a)]=_0x328691[_0x1146b5]['gold']||0x0,_0x328691[_0x1146b5][_0x189109(0x8a)];else{if(DataManager[_0x189109(0x498)](_0x3f7867))key='item-%1'[_0x189109(0x3d3)](_0x3f7867['id']);else{if(DataManager[_0x189109(0xed)](_0x3f7867))key=_0x189109(0x1c3)[_0x189109(0x3d3)](_0x3f7867['id']);else{if(DataManager[_0x189109(0x225)](_0x3f7867))key=_0x189109(0x39c)['format'](_0x3f7867['id']);else return 0x0;}}}return _0x328691[_0x1146b5]['items'][key]=_0x328691[_0x1146b5]['items'][key]||0x0,_0x328691[_0x1146b5]['items'][key];},Game_Party[_0x312955(0x1b8)][_0x312955(0x22b)]=function(_0x126007){const _0x41536e=_0x312955;return this[_0x41536e(0x45c)]('buy',_0x126007);},Game_Party[_0x312955(0x1b8)][_0x312955(0x4a3)]=function(_0x3f1678){const _0x362258=_0x312955;return this[_0x362258(0x45c)](_0x362258(0x2a8),_0x3f1678);},Game_Party[_0x312955(0x1b8)][_0x312955(0x496)]=function(){const _0x5cd12c=_0x312955;return this[_0x5cd12c(0x45c)]('buy',_0x5cd12c(0x8a));},Game_Party[_0x312955(0x1b8)][_0x312955(0x1e6)]=function(){const _0x2c94bf=_0x312955;return this[_0x2c94bf(0x45c)](_0x2c94bf(0x2a8),'gold');},Game_Party[_0x312955(0x1b8)][_0x312955(0x1bc)]=function(_0x30c817,_0x4e0319,_0x39b6dc){const _0xdd8e6f=_0x312955;if(!_0x4e0319)return;if(_0x39b6dc<=0x0)return;this[_0xdd8e6f(0x92)]===undefined&&this['initShopTrackingData']();const _0x1bc4b3=this[_0xdd8e6f(0x490)]();if(!_0x1bc4b3[_0x30c817])return;if(_0x4e0319===_0xdd8e6f(0x8a)){_0x1bc4b3[_0x30c817][_0xdd8e6f(0x8a)]=_0x1bc4b3[_0x30c817][_0xdd8e6f(0x8a)]||0x0,_0x1bc4b3[_0x30c817]['gold']+=_0x39b6dc;return;}else{if(DataManager[_0xdd8e6f(0x498)](_0x4e0319))key=_0xdd8e6f(0x127)[_0xdd8e6f(0x3d3)](_0x4e0319['id']);else{if(DataManager[_0xdd8e6f(0xed)](_0x4e0319))key='weapon-%1'[_0xdd8e6f(0x3d3)](_0x4e0319['id']);else{if(DataManager[_0xdd8e6f(0x225)](_0x4e0319))key=_0xdd8e6f(0x39c)[_0xdd8e6f(0x3d3)](_0x4e0319['id']);else return;}}}_0x1bc4b3[_0x30c817]['items'][key]=_0x1bc4b3[_0x30c817][_0xdd8e6f(0x30d)][key]||0x0,_0x1bc4b3[_0x30c817]['items'][key]+=_0x39b6dc;},Game_Party[_0x312955(0x1b8)][_0x312955(0x34e)]=function(_0x5b4c5e,_0x2c0817){const _0x45f415=_0x312955;this[_0x45f415(0x1bc)](_0x45f415(0x408),_0x5b4c5e,_0x2c0817);},Game_Party[_0x312955(0x1b8)]['addShopTrackingItemSell']=function(_0x3a9553,_0x2b2230){const _0x474aed=_0x312955;this[_0x474aed(0x1bc)](_0x474aed(0x2a8),_0x3a9553,_0x2b2230);},Game_Party[_0x312955(0x1b8)][_0x312955(0x386)]=function(_0x4498b3){const _0xee4d65=_0x312955;this[_0xee4d65(0x1bc)](_0xee4d65(0x408),_0xee4d65(0x8a),_0x4498b3);},Game_Party['prototype'][_0x312955(0x399)]=function(_0x4f2d27){const _0x1ce605=_0x312955;this[_0x1ce605(0x1bc)]('sell','gold',_0x4f2d27);},VisuMZ[_0x312955(0x1af)][_0x312955(0xe6)]=Scene_ItemBase[_0x312955(0x1b8)][_0x312955(0x493)],Scene_ItemBase[_0x312955(0x1b8)][_0x312955(0x493)]=function(){const _0x1da6de=_0x312955;VisuMZ[_0x1da6de(0x1af)][_0x1da6de(0xe6)][_0x1da6de(0x3b4)](this),this[_0x1da6de(0x24f)][_0x1da6de(0x229)]();},Scene_Item[_0x312955(0x1b8)][_0x312955(0x73)]=function(){const _0x4c4747=_0x312955,_0x803d95=VisuMZ[_0x4c4747(0x1af)]['Settings'][_0x4c4747(0x466)];return!_0x803d95['EnableLayout']&&_0x803d95[_0x4c4747(0x103)];},Scene_Item[_0x312955(0x1b8)][_0x312955(0x173)]=function(){const _0x37a133=_0x312955;if(ConfigManager[_0x37a133(0x22c)]&&ConfigManager[_0x37a133(0x137)]!==undefined)return ConfigManager['uiHelpPosition'];else return this[_0x37a133(0x2b1)]()?this[_0x37a133(0x22d)]()[_0x37a133(0x2c5)](/LOWER/i):Scene_ItemBase[_0x37a133(0x1b8)]['isBottomHelpMode'][_0x37a133(0x3b4)](this);},Scene_Item[_0x312955(0x1b8)]['isRightInputMode']=function(){const _0x37de01=_0x312955;if(ConfigManager[_0x37de01(0x22c)]&&ConfigManager[_0x37de01(0x7e)]!==undefined)return ConfigManager[_0x37de01(0x7e)];else return this[_0x37de01(0x2b1)]()?this[_0x37de01(0x22d)]()[_0x37de01(0x2c5)](/RIGHT/i):Scene_ItemBase[_0x37de01(0x1b8)][_0x37de01(0x367)][_0x37de01(0x3b4)](this);},Scene_Item[_0x312955(0x1b8)][_0x312955(0x22d)]=function(){const _0x55798d=_0x312955;return VisuMZ[_0x55798d(0x1af)][_0x55798d(0x3a4)][_0x55798d(0x466)][_0x55798d(0x449)];},Scene_Item[_0x312955(0x1b8)][_0x312955(0x18d)]=function(){const _0x1d6819=_0x312955,_0x20636c=SceneManager[_0x1d6819(0x44a)];if(_0x20636c[_0x1d6819(0x36a)]===Scene_Item&&_0x20636c['isPureVanillaMode']())return![];return this['_categoryWindow']&&this[_0x1d6819(0x3ec)]['isUseModernControls']();},Scene_Item[_0x312955(0x1b8)][_0x312955(0x2b1)]=function(){const _0x21004f=_0x312955;if(this[_0x21004f(0x73)]())return![];return VisuMZ[_0x21004f(0x1af)][_0x21004f(0x3a4)][_0x21004f(0x466)][_0x21004f(0x8b)];},VisuMZ[_0x312955(0x1af)][_0x312955(0x429)]=Scene_Item['prototype'][_0x312955(0x1d2)],Scene_Item[_0x312955(0x1b8)][_0x312955(0x1d2)]=function(){const _0xd5b75=_0x312955;VisuMZ[_0xd5b75(0x1af)][_0xd5b75(0x429)]['call'](this),this[_0xd5b75(0x18d)]()&&this[_0xd5b75(0x3d5)]();},VisuMZ[_0x312955(0x1af)]['Scene_Item_helpWindowRect']=Scene_Item[_0x312955(0x1b8)]['helpWindowRect'],Scene_Item[_0x312955(0x1b8)][_0x312955(0x23e)]=function(){const _0xaec354=_0x312955;return this[_0xaec354(0x2b1)]()?this[_0xaec354(0x3aa)]():VisuMZ[_0xaec354(0x1af)][_0xaec354(0x424)]['call'](this);},Scene_Item[_0x312955(0x1b8)][_0x312955(0x3aa)]=function(){const _0x364705=_0x312955,_0x2aa385=0x0,_0x2d2bdf=this['helpAreaTop'](),_0x2042d6=Graphics[_0x364705(0x286)],_0xae1665=this[_0x364705(0x3a2)]();return new Rectangle(_0x2aa385,_0x2d2bdf,_0x2042d6,_0xae1665);},VisuMZ['ItemsEquipsCore'][_0x312955(0x365)]=Scene_Item[_0x312955(0x1b8)]['createCategoryWindow'],Scene_Item[_0x312955(0x1b8)]['createCategoryWindow']=function(){const _0x1b6df7=_0x312955;VisuMZ['ItemsEquipsCore'][_0x1b6df7(0x365)][_0x1b6df7(0x3b4)](this),this[_0x1b6df7(0x18d)]()&&this['postCreateCategoryWindowItemsEquipsCore']();},Scene_Item[_0x312955(0x1b8)]['postCreateCategoryWindowItemsEquipsCore']=function(){const _0x57307f=_0x312955;delete this[_0x57307f(0x3ec)]['_handlers']['ok'],delete this['_categoryWindow'][_0x57307f(0x1f8)]['cancel'];},VisuMZ['ItemsEquipsCore'][_0x312955(0x1f6)]=Scene_Item[_0x312955(0x1b8)][_0x312955(0x269)],Scene_Item[_0x312955(0x1b8)][_0x312955(0x269)]=function(){const _0x32c84c=_0x312955;return this[_0x32c84c(0x2b1)]()?this[_0x32c84c(0x278)]():VisuMZ[_0x32c84c(0x1af)]['Scene_Item_categoryWindowRect']['call'](this);},Scene_Item[_0x312955(0x1b8)][_0x312955(0x278)]=function(){const _0x21b003=_0x312955,_0x2fc535=0x0,_0x168516=this[_0x21b003(0x488)](),_0x2661ab=Graphics[_0x21b003(0x286)],_0x2fe9cc=this[_0x21b003(0x1f1)](0x1,!![]);return new Rectangle(_0x2fc535,_0x168516,_0x2661ab,_0x2fe9cc);},VisuMZ[_0x312955(0x1af)][_0x312955(0x485)]=Scene_Item[_0x312955(0x1b8)][_0x312955(0xd2)],Scene_Item[_0x312955(0x1b8)]['createItemWindow']=function(){const _0x2be2bf=_0x312955;VisuMZ[_0x2be2bf(0x1af)][_0x2be2bf(0x485)]['call'](this),this[_0x2be2bf(0x18d)]()&&this[_0x2be2bf(0x330)](),this[_0x2be2bf(0x23f)]()&&this[_0x2be2bf(0x323)]();},VisuMZ[_0x312955(0x1af)][_0x312955(0x2e0)]=Scene_Item[_0x312955(0x1b8)][_0x312955(0x280)],Scene_Item['prototype']['itemWindowRect']=function(){const _0x24a24e=_0x312955;if(this[_0x24a24e(0x2b1)]())return this[_0x24a24e(0x248)]();else{const _0x1050f0=VisuMZ[_0x24a24e(0x1af)][_0x24a24e(0x2e0)][_0x24a24e(0x3b4)](this);return this[_0x24a24e(0x23f)]()&&this[_0x24a24e(0x75)]()&&(_0x1050f0[_0x24a24e(0x250)]-=this[_0x24a24e(0x124)]()),_0x1050f0;}},Scene_Item[_0x312955(0x1b8)][_0x312955(0x248)]=function(){const _0x561f9c=_0x312955,_0x3eca61=this[_0x561f9c(0x367)]()?this[_0x561f9c(0x124)]():0x0,_0x473c4c=this[_0x561f9c(0x3ec)]['y']+this[_0x561f9c(0x3ec)][_0x561f9c(0x98)],_0x2d49c8=Graphics[_0x561f9c(0x286)]-this[_0x561f9c(0x124)](),_0x3cef0d=this[_0x561f9c(0x38e)]()-_0x473c4c;return new Rectangle(_0x3eca61,_0x473c4c,_0x2d49c8,_0x3cef0d);},Scene_Item['prototype']['postCreateItemWindowModernControls']=function(){const _0x52fd28=_0x312955;this['_itemWindow']['setHandler'](_0x52fd28(0x4a4),this[_0x52fd28(0xe5)][_0x52fd28(0x411)](this));},Scene_Item[_0x312955(0x1b8)]['allowCreateStatusWindow']=function(){const _0x5ac0ce=_0x312955;if(this[_0x5ac0ce(0x73)]())return![];return this[_0x5ac0ce(0x2b1)]()?!![]:VisuMZ[_0x5ac0ce(0x1af)]['Settings'][_0x5ac0ce(0x466)][_0x5ac0ce(0x3ff)];},Scene_Item[_0x312955(0x1b8)][_0x312955(0x75)]=function(){const _0x375f3a=_0x312955;return VisuMZ[_0x375f3a(0x1af)][_0x375f3a(0x3a4)][_0x375f3a(0x466)][_0x375f3a(0x220)];},Scene_Item[_0x312955(0x1b8)][_0x312955(0x323)]=function(){const _0x228b63=_0x312955,_0x52f53d=this[_0x228b63(0xf7)]();this['_statusWindow']=new Window_ShopStatus(_0x52f53d),this[_0x228b63(0xbc)](this[_0x228b63(0x80)]),this[_0x228b63(0x24f)][_0x228b63(0x42d)](this['_statusWindow']);const _0x3758df=VisuMZ[_0x228b63(0x1af)][_0x228b63(0x3a4)]['ItemScene']['ItemMenuStatusBgType'];this[_0x228b63(0x80)][_0x228b63(0x223)](_0x3758df||0x0);},Scene_Item['prototype'][_0x312955(0xf7)]=function(){const _0x412671=_0x312955;return this[_0x412671(0x2b1)]()?this['statusWindowRectItemsEquipsCore']():VisuMZ[_0x412671(0x1af)][_0x412671(0x3a4)][_0x412671(0x466)][_0x412671(0x69)][_0x412671(0x3b4)](this);},Scene_Item[_0x312955(0x1b8)][_0x312955(0x188)]=function(){const _0x2ec63a=_0x312955,_0x276a00=this[_0x2ec63a(0x124)](),_0x590468=this[_0x2ec63a(0x24f)][_0x2ec63a(0x98)],_0x1c5b38=this[_0x2ec63a(0x367)]()?0x0:Graphics['boxWidth']-this['statusWidth'](),_0x1e882b=this[_0x2ec63a(0x24f)]['y'];return new Rectangle(_0x1c5b38,_0x1e882b,_0x276a00,_0x590468);},Scene_Item['prototype'][_0x312955(0x124)]=function(){const _0x341283=_0x312955;return Scene_Shop[_0x341283(0x1b8)][_0x341283(0x124)]();},Scene_Item[_0x312955(0x1b8)]['buttonAssistItemListRequirement']=function(){const _0x2d6b91=_0x312955;if(!this[_0x2d6b91(0x22d)]())return![];if(!this[_0x2d6b91(0x18d)]())return![];if(!this[_0x2d6b91(0x24f)])return![];if(!this['_itemWindow']['active'])return![];return this[_0x2d6b91(0x22d)]()&&this[_0x2d6b91(0x18d)]();},Scene_Item[_0x312955(0x1b8)][_0x312955(0x122)]=function(){const _0x46f0ff=_0x312955;if(this['buttonAssistItemListRequirement']())return this[_0x46f0ff(0x24f)]['maxCols']()===0x1?TextManager[_0x46f0ff(0x293)](_0x46f0ff(0x279),_0x46f0ff(0x420)):TextManager['getInputMultiButtonStrings']('pageup','pagedown');return Scene_ItemBase[_0x46f0ff(0x1b8)][_0x46f0ff(0x122)]['call'](this);},Scene_Item[_0x312955(0x1b8)][_0x312955(0x339)]=function(){const _0x4101f1=_0x312955;if(this['buttonAssistItemListRequirement']())return VisuMZ[_0x4101f1(0x1af)][_0x4101f1(0x3a4)][_0x4101f1(0x466)][_0x4101f1(0x489)];return Scene_ItemBase[_0x4101f1(0x1b8)][_0x4101f1(0x339)][_0x4101f1(0x3b4)](this);},Scene_Equip[_0x312955(0x1b8)]['start']=function(){const _0x15e5ed=_0x312955;Scene_ItemBase[_0x15e5ed(0x1b8)][_0x15e5ed(0x37b)][_0x15e5ed(0x3b4)](this),this['refreshActor']();},Scene_Equip[_0x312955(0x1b8)][_0x312955(0x173)]=function(){const _0x4db36c=_0x312955;if(ConfigManager[_0x4db36c(0x22c)]&&ConfigManager[_0x4db36c(0x137)]!==undefined)return ConfigManager[_0x4db36c(0x137)];else{if(this[_0x4db36c(0x2b1)]())return this[_0x4db36c(0x22d)]()[_0x4db36c(0x2c5)](/LOWER/i);else Scene_MenuBase['prototype'][_0x4db36c(0x367)][_0x4db36c(0x3b4)](this);}},Scene_Equip[_0x312955(0x1b8)][_0x312955(0x367)]=function(){const _0x2ea4b0=_0x312955;if(ConfigManager[_0x2ea4b0(0x22c)]&&ConfigManager[_0x2ea4b0(0x7e)]!==undefined)return ConfigManager[_0x2ea4b0(0x7e)];else{if(this[_0x2ea4b0(0x2b1)]())return this[_0x2ea4b0(0x22d)]()[_0x2ea4b0(0x2c5)](/RIGHT/i);else Scene_MenuBase[_0x2ea4b0(0x1b8)]['isRightInputMode']['call'](this);}},Scene_Equip['prototype'][_0x312955(0x22d)]=function(){const _0x52e59d=_0x312955;return VisuMZ[_0x52e59d(0x1af)][_0x52e59d(0x3a4)][_0x52e59d(0x412)][_0x52e59d(0x449)];},Scene_Equip[_0x312955(0x1b8)]['isUseModernControls']=function(){const _0x284983=_0x312955;return this['_commandWindow']&&this[_0x284983(0x1ab)][_0x284983(0x18d)]();},Scene_Equip[_0x312955(0x1b8)]['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0x3ad761=_0x312955;return VisuMZ[_0x3ad761(0x1af)][_0x3ad761(0x3a4)][_0x3ad761(0x412)]['EnableLayout'];},VisuMZ['ItemsEquipsCore']['Scene_Equip_create']=Scene_Equip[_0x312955(0x1b8)][_0x312955(0x1d2)],Scene_Equip[_0x312955(0x1b8)]['create']=function(){const _0x22219a=_0x312955;VisuMZ[_0x22219a(0x1af)][_0x22219a(0x4ba)][_0x22219a(0x3b4)](this),this[_0x22219a(0x18d)]()&&this[_0x22219a(0x97)]();},VisuMZ[_0x312955(0x1af)]['Scene_Equip_helpWindowRect']=Scene_Equip['prototype'][_0x312955(0x23e)],Scene_Equip[_0x312955(0x1b8)][_0x312955(0x23e)]=function(){const _0x50da81=_0x312955;return this[_0x50da81(0x2b1)]()?this['helpWindowRectItemsEquipsCore']():VisuMZ[_0x50da81(0x1af)][_0x50da81(0x263)][_0x50da81(0x3b4)](this);},Scene_Equip[_0x312955(0x1b8)][_0x312955(0x3aa)]=function(){const _0x27ea70=_0x312955,_0x1ee5e3=0x0,_0x50ac2f=this[_0x27ea70(0x3ae)](),_0x2fd620=Graphics[_0x27ea70(0x286)],_0x2f5cb3=this[_0x27ea70(0x3a2)]();return new Rectangle(_0x1ee5e3,_0x50ac2f,_0x2fd620,_0x2f5cb3);},VisuMZ[_0x312955(0x1af)][_0x312955(0x12e)]=Scene_Equip['prototype'][_0x312955(0xf7)],Scene_Equip[_0x312955(0x1b8)][_0x312955(0xf7)]=function(){const _0x19aa35=_0x312955;return this[_0x19aa35(0x2b1)]()?this[_0x19aa35(0x188)]():VisuMZ[_0x19aa35(0x1af)][_0x19aa35(0x12e)][_0x19aa35(0x3b4)](this);},Scene_Equip['prototype'][_0x312955(0x188)]=function(){const _0x3d4990=_0x312955,_0x1eecbc=this[_0x3d4990(0x367)]()?0x0:Graphics[_0x3d4990(0x286)]-this[_0x3d4990(0x124)](),_0x4acd08=this['mainAreaTop'](),_0x35eb57=this[_0x3d4990(0x124)](),_0xcc31a2=this[_0x3d4990(0x3df)]();return new Rectangle(_0x1eecbc,_0x4acd08,_0x35eb57,_0xcc31a2);},VisuMZ[_0x312955(0x1af)]['Scene_Equip_createCommandWindow']=Scene_Equip[_0x312955(0x1b8)][_0x312955(0x1fa)],Scene_Equip['prototype'][_0x312955(0x1fa)]=function(){const _0x5d844e=_0x312955;VisuMZ['ItemsEquipsCore']['Scene_Equip_createCommandWindow']['call'](this);if(this[_0x5d844e(0x6b)])this[_0x5d844e(0x1ab)][_0x5d844e(0x145)](this[_0x5d844e(0x6b)]);},VisuMZ['ItemsEquipsCore'][_0x312955(0x121)]=Scene_Equip[_0x312955(0x1b8)]['commandWindowRect'],Scene_Equip[_0x312955(0x1b8)][_0x312955(0x364)]=function(){const _0xef56ba=_0x312955;return this[_0xef56ba(0x2b1)]()?this[_0xef56ba(0xc7)]():VisuMZ[_0xef56ba(0x1af)][_0xef56ba(0x121)][_0xef56ba(0x3b4)](this);},Scene_Equip[_0x312955(0x1b8)]['shouldCommandWindowExist']=function(){const _0x4ff544=_0x312955,_0x4e80ff=VisuMZ[_0x4ff544(0x1af)][_0x4ff544(0x3a4)]['EquipScene'];return _0x4e80ff['CommandAddOptimize']||_0x4e80ff[_0x4ff544(0x3f1)];},Scene_Equip[_0x312955(0x1b8)]['commandWindowRectItemsEquipsCore']=function(){const _0x23b744=_0x312955,_0xc72d7f=this[_0x23b744(0x3ca)](),_0x10964e=this[_0x23b744(0x367)]()?this[_0x23b744(0x124)]():0x0,_0x3240e5=this[_0x23b744(0x488)](),_0x116ad7=Graphics['boxWidth']-this[_0x23b744(0x124)](),_0x149358=_0xc72d7f?this[_0x23b744(0x1f1)](0x1,!![]):0x0;return new Rectangle(_0x10964e,_0x3240e5,_0x116ad7,_0x149358);},VisuMZ['ItemsEquipsCore'][_0x312955(0x11d)]=Scene_Equip[_0x312955(0x1b8)][_0x312955(0x3ef)],Scene_Equip['prototype'][_0x312955(0x3ef)]=function(){const _0x4560a=_0x312955;VisuMZ[_0x4560a(0x1af)]['Scene_Equip_createSlotWindow']['call'](this),this[_0x4560a(0x18d)]()&&this[_0x4560a(0x3e2)]();},VisuMZ[_0x312955(0x1af)][_0x312955(0xc3)]=Scene_Equip[_0x312955(0x1b8)][_0x312955(0x3d1)],Scene_Equip[_0x312955(0x1b8)][_0x312955(0x3d1)]=function(){const _0x47c0d8=_0x312955;return this[_0x47c0d8(0x2b1)]()?this[_0x47c0d8(0x38b)]():VisuMZ[_0x47c0d8(0x1af)][_0x47c0d8(0xc3)][_0x47c0d8(0x3b4)](this);},Scene_Equip[_0x312955(0x1b8)][_0x312955(0x38b)]=function(){const _0x2da370=_0x312955,_0x555e0f=this[_0x2da370(0x364)](),_0x6c6b83=this['isRightInputMode']()?this[_0x2da370(0x124)]():0x0,_0x51dd71=_0x555e0f['y']+_0x555e0f[_0x2da370(0x98)],_0x3521e6=Graphics[_0x2da370(0x286)]-this['statusWidth'](),_0x814946=this[_0x2da370(0x3df)]()-_0x555e0f[_0x2da370(0x98)];return new Rectangle(_0x6c6b83,_0x51dd71,_0x3521e6,_0x814946);},VisuMZ[_0x312955(0x1af)][_0x312955(0x1cf)]=Scene_Equip[_0x312955(0x1b8)][_0x312955(0x280)],Scene_Equip[_0x312955(0x1b8)][_0x312955(0x280)]=function(){const _0x2eb321=_0x312955;return this[_0x2eb321(0x2b1)]()?this['slotWindowRect']():VisuMZ[_0x2eb321(0x1af)][_0x2eb321(0x1cf)]['call'](this);},Scene_Equip[_0x312955(0x1b8)][_0x312955(0x124)]=function(){const _0x3bf112=_0x312955;return this[_0x3bf112(0x2b1)]()?this['geUpdatedLayoutStatusWidth']():VisuMZ[_0x3bf112(0x1af)]['Settings'][_0x3bf112(0x412)][_0x3bf112(0x1a6)];},Scene_Equip[_0x312955(0x1b8)][_0x312955(0x3b3)]=function(){const _0x397250=_0x312955;return Math['floor'](Graphics[_0x397250(0x286)]/0x2);},Scene_Equip['prototype'][_0x312955(0x3e2)]=function(){const _0x3c85a9=_0x312955;this[_0x3c85a9(0x267)][_0x3c85a9(0x176)](_0x3c85a9(0x4a4),this['popScene'][_0x3c85a9(0x411)](this)),this['_slotWindow'][_0x3c85a9(0x176)](_0x3c85a9(0x100),this[_0x3c85a9(0x42c)][_0x3c85a9(0x411)](this)),this[_0x3c85a9(0x267)][_0x3c85a9(0x176)](_0x3c85a9(0x95),this[_0x3c85a9(0x26b)]['bind'](this));},VisuMZ[_0x312955(0x1af)][_0x312955(0x49a)]=Scene_Equip[_0x312955(0x1b8)][_0x312955(0x97)],Scene_Equip['prototype'][_0x312955(0x97)]=function(){const _0x2cf743=_0x312955;this[_0x2cf743(0x18d)]()&&(this[_0x2cf743(0x1ab)][_0x2cf743(0x227)](),this['_commandWindow'][_0x2cf743(0x1ae)]()),VisuMZ['ItemsEquipsCore'][_0x2cf743(0x49a)][_0x2cf743(0x3b4)](this);},VisuMZ[_0x312955(0x1af)][_0x312955(0xab)]=Scene_Equip[_0x312955(0x1b8)][_0x312955(0x3b7)],Scene_Equip[_0x312955(0x1b8)]['onSlotOk']=function(){const _0x1f07e3=_0x312955;this[_0x1f07e3(0x267)][_0x1f07e3(0x18c)]()>=0x0?(VisuMZ[_0x1f07e3(0x1af)][_0x1f07e3(0xab)][_0x1f07e3(0x3b4)](this),this['onSlotOkAutoSelect']()):(this[_0x1f07e3(0x267)][_0x1f07e3(0xf3)](0x0),this[_0x1f07e3(0x267)][_0x1f07e3(0x21d)]());},Scene_Equip[_0x312955(0x1b8)][_0x312955(0x434)]=function(){const _0x5c0fe6=_0x312955;this[_0x5c0fe6(0x24f)]['refresh']();const _0x291767=this[_0x5c0fe6(0x267)]['item'](),_0x109201=this[_0x5c0fe6(0x24f)]['_data'][_0x5c0fe6(0x34f)](_0x291767),_0x94db04=Math[_0x5c0fe6(0x433)](this['_itemWindow'][_0x5c0fe6(0x49b)]()/0x2)-0x1;this[_0x5c0fe6(0x24f)]['smoothSelect'](_0x109201>=0x0?_0x109201:0x0),this[_0x5c0fe6(0x24f)][_0x5c0fe6(0x415)]>0x1&&(this['_itemWindow'][_0x5c0fe6(0x415)]=0x1,this[_0x5c0fe6(0x24f)][_0x5c0fe6(0x72)]()),this['_itemWindow'][_0x5c0fe6(0x1fb)](this[_0x5c0fe6(0x24f)][_0x5c0fe6(0x18c)]()-_0x94db04);},VisuMZ[_0x312955(0x1af)][_0x312955(0x383)]=Scene_Equip[_0x312955(0x1b8)]['onSlotCancel'],Scene_Equip['prototype'][_0x312955(0x43f)]=function(){const _0x3f4dac=_0x312955;VisuMZ[_0x3f4dac(0x1af)][_0x3f4dac(0x383)][_0x3f4dac(0x3b4)](this),this[_0x3f4dac(0x18d)]()&&(this['_commandWindow'][_0x3f4dac(0xf3)](0x0),this[_0x3f4dac(0x267)][_0x3f4dac(0x1ae)]());},VisuMZ[_0x312955(0x1af)][_0x312955(0x1c8)]=Scene_Equip['prototype'][_0x312955(0x71)],Scene_Equip[_0x312955(0x1b8)][_0x312955(0x71)]=function(){const _0xe242f8=_0x312955;VisuMZ[_0xe242f8(0x1af)][_0xe242f8(0x1c8)][_0xe242f8(0x3b4)](this),this[_0xe242f8(0x18d)]()&&(this['_commandWindow'][_0xe242f8(0x1ae)](),this[_0xe242f8(0x1ab)][_0xe242f8(0x227)](),this[_0xe242f8(0x267)][_0xe242f8(0xf3)](0x0),this[_0xe242f8(0x267)][_0xe242f8(0x21d)]());},Scene_Equip[_0x312955(0x1b8)][_0x312955(0x4b3)]=function(){const _0x3b09bd=_0x312955;if(!this[_0x3b09bd(0x267)])return![];if(!this[_0x3b09bd(0x267)][_0x3b09bd(0x112)])return![];return this[_0x3b09bd(0x267)][_0x3b09bd(0x10f)]();},Scene_Equip[_0x312955(0x1b8)][_0x312955(0x380)]=function(){const _0x2bab6e=_0x312955;if(this[_0x2bab6e(0x4b3)]())return TextManager['getInputButtonString'](_0x2bab6e(0xc0));return Scene_MenuBase[_0x2bab6e(0x1b8)][_0x2bab6e(0x380)][_0x2bab6e(0x3b4)](this);},Scene_Equip[_0x312955(0x1b8)]['buttonAssistText3']=function(){const _0x104a8b=_0x312955;if(this[_0x104a8b(0x4b3)]())return VisuMZ[_0x104a8b(0x1af)][_0x104a8b(0x3a4)]['EquipScene'][_0x104a8b(0x362)];return Scene_MenuBase['prototype']['buttonAssistText3'][_0x104a8b(0x3b4)](this);},Scene_Equip[_0x312955(0x1b8)][_0x312955(0x104)]=function(){const _0x19e4f3=_0x312955;if(this['buttonAssistSlotWindowShift']())return this['_buttonAssistWindow'][_0x19e4f3(0x250)]/0x5/-0x3;return Scene_MenuBase[_0x19e4f3(0x1b8)][_0x19e4f3(0x104)]['call'](this);},Scene_Equip['prototype'][_0x312955(0xe5)]=function(){const _0x4ed671=_0x312955;SceneManager[_0x4ed671(0xde)]();},VisuMZ['ItemsEquipsCore'][_0x312955(0x343)]=Scene_Load['prototype']['reloadMapIfUpdated'],Scene_Load[_0x312955(0x1b8)][_0x312955(0x230)]=function(){const _0x2ff9c7=_0x312955;VisuMZ[_0x2ff9c7(0x1af)][_0x2ff9c7(0x343)][_0x2ff9c7(0x3b4)](this),this[_0x2ff9c7(0x297)]();},Scene_Load[_0x312955(0x1b8)][_0x312955(0x297)]=function(){const _0x4d6bfb=_0x312955;if($gameSystem[_0x4d6bfb(0x31d)]()!==$dataSystem[_0x4d6bfb(0x31d)])for(const _0x39e656 of $gameActors['_data']){if(_0x39e656)_0x39e656[_0x4d6bfb(0x178)]();}},Scene_Shop[_0x312955(0x1b8)]['isBottomHelpMode']=function(){const _0x316e1f=_0x312955;if(ConfigManager[_0x316e1f(0x22c)]&&ConfigManager[_0x316e1f(0x137)]!==undefined)return ConfigManager[_0x316e1f(0x137)];else{if(this[_0x316e1f(0x2b1)]())return this[_0x316e1f(0x22d)]()[_0x316e1f(0x2c5)](/LOWER/i);else Scene_MenuBase[_0x316e1f(0x1b8)]['isRightInputMode'][_0x316e1f(0x3b4)](this);}},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x367)]=function(){const _0xa2f4fa=_0x312955;if(ConfigManager[_0xa2f4fa(0x22c)]&&ConfigManager[_0xa2f4fa(0x7e)]!==undefined)return ConfigManager['uiInputPosition'];else{if(this[_0xa2f4fa(0x2b1)]())return this[_0xa2f4fa(0x22d)]()['match'](/RIGHT/i);else Scene_MenuBase[_0xa2f4fa(0x1b8)][_0xa2f4fa(0x367)][_0xa2f4fa(0x3b4)](this);}},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x22d)]=function(){const _0x12c9cf=_0x312955;return VisuMZ[_0x12c9cf(0x1af)][_0x12c9cf(0x3a4)]['ShopScene'][_0x12c9cf(0x449)];},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x18d)]=function(){const _0x598caa=_0x312955;return this[_0x598caa(0x3ec)]&&this['_categoryWindow']['isUseModernControls']();},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x2b1)]=function(){const _0x45cb9a=_0x312955;return VisuMZ[_0x45cb9a(0x1af)][_0x45cb9a(0x3a4)][_0x45cb9a(0x46e)][_0x45cb9a(0x8b)];},VisuMZ[_0x312955(0x1af)][_0x312955(0x191)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x304)],Scene_Shop[_0x312955(0x1b8)]['prepare']=function(_0x341af9,_0x570502){const _0x11e438=_0x312955;_0x341af9=VisuMZ[_0x11e438(0x1af)][_0x11e438(0x475)](_0x341af9),VisuMZ['ItemsEquipsCore'][_0x11e438(0x191)][_0x11e438(0x3b4)](this,_0x341af9,_0x570502),this[_0x11e438(0x2c4)]();},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x2c4)]=function(){const _0x33e579=_0x312955;this[_0x33e579(0x1cd)]=0x0;const _0x1100de=[];for(const _0x53e0d5 of this[_0x33e579(0x483)]){this['isGoodShown'](_0x53e0d5)?this['_goodsCount']++:_0x1100de[_0x33e579(0x4af)](_0x53e0d5);}for(const _0x4e208a of _0x1100de){this[_0x33e579(0x483)][_0x33e579(0x1f5)](_0x4e208a);}},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x3a3)]=function(_0x53ac27){if(_0x53ac27[0x0]>0x2||_0x53ac27[0x0]<0x0)return![];const _0x37cb8d=[$dataItems,$dataWeapons,$dataArmors][_0x53ac27[0x0]][_0x53ac27[0x1]];if(!_0x37cb8d)return![];return!![];},VisuMZ[_0x312955(0x1af)][_0x312955(0xd5)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x1d2)],Scene_Shop[_0x312955(0x1b8)][_0x312955(0x1d2)]=function(){const _0x2acc21=_0x312955;VisuMZ[_0x2acc21(0x1af)][_0x2acc21(0xd5)][_0x2acc21(0x3b4)](this),this[_0x2acc21(0x2b1)]()&&this[_0x2acc21(0x3ce)](),this[_0x2acc21(0x31b)]();},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x3ce)]=function(){const _0x1032a3=_0x312955;this[_0x1032a3(0x7b)]['hide'](),this[_0x1032a3(0x44e)][_0x1032a3(0x431)](),this[_0x1032a3(0x44e)][_0x1032a3(0x227)](),this[_0x1032a3(0x80)][_0x1032a3(0x431)]();},VisuMZ[_0x312955(0x1af)][_0x312955(0x2de)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x23e)],Scene_Shop[_0x312955(0x1b8)][_0x312955(0x23e)]=function(){const _0x558278=_0x312955;return this[_0x558278(0x2b1)]()?this[_0x558278(0x3aa)]():VisuMZ[_0x558278(0x1af)][_0x558278(0x2de)][_0x558278(0x3b4)](this);},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x3aa)]=function(){const _0x2a053a=_0x312955,_0x3c3baf=0x0,_0x5dbe3f=this[_0x2a053a(0x3ae)](),_0x5c993=Graphics[_0x2a053a(0x286)],_0x51aae5=this[_0x2a053a(0x3a2)]();return new Rectangle(_0x3c3baf,_0x5dbe3f,_0x5c993,_0x51aae5);},VisuMZ[_0x312955(0x1af)][_0x312955(0x42e)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x318)],Scene_Shop['prototype'][_0x312955(0x318)]=function(){const _0x30ffa5=_0x312955;return this[_0x30ffa5(0x2b1)]()?this[_0x30ffa5(0x23c)]():VisuMZ[_0x30ffa5(0x1af)][_0x30ffa5(0x42e)][_0x30ffa5(0x3b4)](this);},Scene_Shop['prototype']['goldWindowRectItemsEquipsCore']=function(){const _0x16ab48=_0x312955,_0x40859a=this['mainCommandWidth'](),_0x20580b=this[_0x16ab48(0x1f1)](0x1,!![]),_0x16d9a1=this[_0x16ab48(0x367)]()?0x0:Graphics[_0x16ab48(0x286)]-_0x40859a,_0x44e618=this[_0x16ab48(0x488)]();return new Rectangle(_0x16d9a1,_0x44e618,_0x40859a,_0x20580b);},VisuMZ[_0x312955(0x1af)][_0x312955(0x48c)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x364)],Scene_Shop[_0x312955(0x1b8)]['commandWindowRect']=function(){const _0x3e2609=_0x312955;return this[_0x3e2609(0x2b1)]()?this[_0x3e2609(0xc7)]():VisuMZ[_0x3e2609(0x1af)][_0x3e2609(0x48c)][_0x3e2609(0x3b4)](this);},Scene_Shop[_0x312955(0x1b8)][_0x312955(0xc7)]=function(){const _0x1955b4=_0x312955,_0x30d947=this['isRightInputMode']()?this[_0x1955b4(0x441)]():0x0,_0x4b78a8=this[_0x1955b4(0x488)](),_0x32c075=Graphics[_0x1955b4(0x286)]-this[_0x1955b4(0x441)](),_0x37eecf=this[_0x1955b4(0x1f1)](0x1,!![]);return new Rectangle(_0x30d947,_0x4b78a8,_0x32c075,_0x37eecf);},VisuMZ[_0x312955(0x1af)][_0x312955(0x356)]=Scene_Shop['prototype'][_0x312955(0x35c)],Scene_Shop[_0x312955(0x1b8)][_0x312955(0x35c)]=function(){const _0x166386=_0x312955;return this[_0x166386(0x2b1)]()?this[_0x166386(0x1f4)]():VisuMZ[_0x166386(0x1af)]['Scene_Shop_numberWindowRect'][_0x166386(0x3b4)](this);},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x1f4)]=function(){const _0x33513d=_0x312955,_0x251e2a=this['_commandWindow']['y']+this[_0x33513d(0x1ab)][_0x33513d(0x98)],_0x3cf438=Graphics[_0x33513d(0x286)]-this['statusWidth'](),_0x54d6e1=this[_0x33513d(0x367)]()?Graphics['boxWidth']-_0x3cf438:0x0,_0x22ae94=this[_0x33513d(0x3df)]()-this['_commandWindow'][_0x33513d(0x98)];return new Rectangle(_0x54d6e1,_0x251e2a,_0x3cf438,_0x22ae94);},VisuMZ[_0x312955(0x1af)]['Scene_Shop_statusWindowRect']=Scene_Shop[_0x312955(0x1b8)][_0x312955(0xf7)],Scene_Shop[_0x312955(0x1b8)][_0x312955(0xf7)]=function(){const _0x2eea0c=_0x312955;return this[_0x2eea0c(0x2b1)]()?this['statusWindowRectItemsEquipsCore']():VisuMZ[_0x2eea0c(0x1af)][_0x2eea0c(0x378)]['call'](this);},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x188)]=function(){const _0x1067ce=_0x312955,_0x25727a=this[_0x1067ce(0x124)](),_0x3efd3c=this['mainAreaHeight']()-this[_0x1067ce(0x1ab)][_0x1067ce(0x98)],_0x336f96=this['isRightInputMode']()?0x0:Graphics['boxWidth']-_0x25727a,_0x40e5ce=this['_commandWindow']['y']+this[_0x1067ce(0x1ab)][_0x1067ce(0x98)];return new Rectangle(_0x336f96,_0x40e5ce,_0x25727a,_0x3efd3c);},VisuMZ['ItemsEquipsCore'][_0x312955(0x379)]=Scene_Shop[_0x312955(0x1b8)]['buyWindowRect'],Scene_Shop[_0x312955(0x1b8)][_0x312955(0x2e9)]=function(){const _0x487bbf=_0x312955;return this[_0x487bbf(0x2b1)]()?this[_0x487bbf(0x389)]():VisuMZ[_0x487bbf(0x1af)][_0x487bbf(0x379)][_0x487bbf(0x3b4)](this);},Scene_Shop[_0x312955(0x1b8)]['buyWindowRectItemsEquipsCore']=function(){const _0x35c7f5=_0x312955,_0x167c57=this[_0x35c7f5(0x1ab)]['y']+this[_0x35c7f5(0x1ab)][_0x35c7f5(0x98)],_0x1b125e=Graphics[_0x35c7f5(0x286)]-this[_0x35c7f5(0x124)](),_0x10d81f=this[_0x35c7f5(0x3df)]()-this['_commandWindow'][_0x35c7f5(0x98)],_0x4e57b4=this[_0x35c7f5(0x367)]()?Graphics[_0x35c7f5(0x286)]-_0x1b125e:0x0;return new Rectangle(_0x4e57b4,_0x167c57,_0x1b125e,_0x10d81f);},VisuMZ[_0x312955(0x1af)][_0x312955(0x407)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x2f9)],Scene_Shop[_0x312955(0x1b8)][_0x312955(0x2f9)]=function(){const _0x4e8539=_0x312955;VisuMZ[_0x4e8539(0x1af)]['Scene_Shop_createCategoryWindow'][_0x4e8539(0x3b4)](this),this[_0x4e8539(0x18d)]()&&this[_0x4e8539(0x1dd)]();},VisuMZ[_0x312955(0x1af)][_0x312955(0x310)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x269)],Scene_Shop[_0x312955(0x1b8)][_0x312955(0x269)]=function(){const _0x3be192=_0x312955;return this[_0x3be192(0x2b1)]()?this['categoryWindowRectItemsEquipsCore']():VisuMZ[_0x3be192(0x1af)][_0x3be192(0x310)][_0x3be192(0x3b4)](this);},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x278)]=function(){const _0xc67f8d=_0x312955,_0x234421=this[_0xc67f8d(0x1ab)]['y'],_0xa7834f=this[_0xc67f8d(0x1ab)][_0xc67f8d(0x250)],_0x253667=this[_0xc67f8d(0x1f1)](0x1,!![]),_0x10a02b=this['isRightInputMode']()?Graphics[_0xc67f8d(0x286)]-_0xa7834f:0x0;return new Rectangle(_0x10a02b,_0x234421,_0xa7834f,_0x253667);},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x1dd)]=function(){const _0x51a0bd=_0x312955;delete this[_0x51a0bd(0x3ec)][_0x51a0bd(0x1f8)]['ok'],delete this['_categoryWindow'][_0x51a0bd(0x1f8)][_0x51a0bd(0x4a4)];},VisuMZ[_0x312955(0x1af)][_0x312955(0x3de)]=Scene_Shop[_0x312955(0x1b8)]['createSellWindow'],Scene_Shop[_0x312955(0x1b8)]['createSellWindow']=function(){const _0x14764e=_0x312955;VisuMZ[_0x14764e(0x1af)]['Scene_Shop_createSellWindow'][_0x14764e(0x3b4)](this),this[_0x14764e(0x2b1)]()&&this[_0x14764e(0x2c0)]();},VisuMZ[_0x312955(0x1af)][_0x312955(0x1cb)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x31f)],Scene_Shop[_0x312955(0x1b8)][_0x312955(0x31f)]=function(){const _0xba710f=_0x312955;return this[_0xba710f(0x2b1)]()?this[_0xba710f(0x1a4)]():VisuMZ['ItemsEquipsCore'][_0xba710f(0x1cb)][_0xba710f(0x3b4)](this);},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x1a4)]=function(){const _0x4ac265=_0x312955,_0x37ad0d=this[_0x4ac265(0x3ec)]['y']+this[_0x4ac265(0x3ec)]['height'],_0x828d6d=Graphics['boxWidth']-this['statusWidth'](),_0x5bfd0b=this[_0x4ac265(0x3df)]()-this[_0x4ac265(0x3ec)][_0x4ac265(0x98)],_0x55133f=this[_0x4ac265(0x367)]()?Graphics[_0x4ac265(0x286)]-_0x828d6d:0x0;return new Rectangle(_0x55133f,_0x37ad0d,_0x828d6d,_0x5bfd0b);},Scene_Shop[_0x312955(0x1b8)]['postCreateSellWindowItemsEquipsCore']=function(){const _0x2a7b36=_0x312955;this[_0x2a7b36(0x342)]['setStatusWindow'](this['_statusWindow']);},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x124)]=function(){const _0x55a08e=_0x312955;return VisuMZ[_0x55a08e(0x1af)]['Settings'][_0x55a08e(0x3fa)]['Width'];},VisuMZ['ItemsEquipsCore'][_0x312955(0x3f2)]=Scene_Shop['prototype']['activateSellWindow'],Scene_Shop[_0x312955(0x1b8)]['activateSellWindow']=function(){const _0x321f7c=_0x312955;VisuMZ[_0x321f7c(0x1af)][_0x321f7c(0x3f2)][_0x321f7c(0x3b4)](this),this[_0x321f7c(0x2b1)]()&&this[_0x321f7c(0x80)]['show'](),this[_0x321f7c(0x342)]['updateHelp']();},VisuMZ[_0x312955(0x1af)][_0x312955(0x154)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x1d8)],Scene_Shop['prototype']['commandBuy']=function(){const _0x18ae4c=_0x312955;VisuMZ[_0x18ae4c(0x1af)][_0x18ae4c(0x154)][_0x18ae4c(0x3b4)](this),this[_0x18ae4c(0x2b1)]()&&this['commandBuyItemsEquipsCore']();},Scene_Shop[_0x312955(0x1b8)][_0x312955(0xcd)]=function(){const _0x5157ed=_0x312955;this[_0x5157ed(0x20b)]=this[_0x5157ed(0x20b)]||0x0,this['_buyWindow']['smoothSelect'](this[_0x5157ed(0x20b)]);},VisuMZ[_0x312955(0x1af)][_0x312955(0x24c)]=Scene_Shop['prototype']['commandSell'],Scene_Shop['prototype']['commandSell']=function(){const _0x1e411c=_0x312955;VisuMZ[_0x1e411c(0x1af)][_0x1e411c(0x24c)]['call'](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x1e411c(0x91)](),this[_0x1e411c(0x18d)]()&&(this[_0x1e411c(0x3ec)][_0x1e411c(0xf3)](0x0),this[_0x1e411c(0x3d5)]());},Scene_Shop['prototype'][_0x312955(0x91)]=function(){const _0x4e1773=_0x312955;this[_0x4e1773(0x44e)][_0x4e1773(0x40c)](),this[_0x4e1773(0x1ab)][_0x4e1773(0x40c)]();},VisuMZ['ItemsEquipsCore']['Scene_Shop_onBuyCancel']=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x180)],Scene_Shop[_0x312955(0x1b8)][_0x312955(0x180)]=function(){const _0x4780f5=_0x312955;VisuMZ[_0x4780f5(0x1af)][_0x4780f5(0x25c)][_0x4780f5(0x3b4)](this),this[_0x4780f5(0x2b1)]()&&this[_0x4780f5(0x260)]();},Scene_Shop[_0x312955(0x1b8)]['onBuyCancelItemsEquipsCore']=function(){const _0x31ff2d=_0x312955;this[_0x31ff2d(0x20b)]=this['_buyWindow'][_0x31ff2d(0x18c)](),this[_0x31ff2d(0x44e)][_0x31ff2d(0x431)](),this[_0x31ff2d(0x44e)][_0x31ff2d(0x227)](),this[_0x31ff2d(0x44e)][_0x31ff2d(0x125)](0x0,0x0),this[_0x31ff2d(0x80)][_0x31ff2d(0x431)](),this['_dummyWindow'][_0x31ff2d(0x40c)]();},VisuMZ['ItemsEquipsCore']['Scene_Shop_onCategoryCancel']=Scene_Shop['prototype'][_0x312955(0x416)],Scene_Shop[_0x312955(0x1b8)][_0x312955(0x416)]=function(){const _0x172e9e=_0x312955;VisuMZ[_0x172e9e(0x1af)][_0x172e9e(0x2b0)][_0x172e9e(0x3b4)](this),this[_0x172e9e(0x2b1)]()&&this[_0x172e9e(0x2bd)]();},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x2bd)]=function(){const _0xd36541=_0x312955;this[_0xd36541(0x44e)][_0xd36541(0x431)](),this[_0xd36541(0x1ab)][_0xd36541(0x431)]();},VisuMZ[_0x312955(0x1af)][_0x312955(0x26a)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0xe3)],Scene_Shop[_0x312955(0x1b8)][_0x312955(0xe3)]=function(){const _0x4fbe03=_0x312955;$gameTemp['_bypassProxy']=!![],VisuMZ[_0x4fbe03(0x1af)]['Scene_Shop_onBuyOk'][_0x4fbe03(0x3b4)](this),$gameTemp[_0x4fbe03(0x19d)]=![],this[_0x4fbe03(0x385)]=this[_0x4fbe03(0x44e)]['item']();},VisuMZ['ItemsEquipsCore'][_0x312955(0x2fa)]=Scene_Shop[_0x312955(0x1b8)]['buyingPrice'],Scene_Shop[_0x312955(0x1b8)][_0x312955(0x366)]=function(){const _0x1951be=_0x312955;$gameTemp['_bypassProxy']=!![],this[_0x1951be(0x385)]=this['_buyWindow'][_0x1951be(0x46c)]();const _0x2e8f23=VisuMZ['ItemsEquipsCore']['Scene_Shop_buyingPrice']['call'](this);return $gameTemp[_0x1951be(0x19d)]=![],this[_0x1951be(0x385)]=this[_0x1951be(0x44e)][_0x1951be(0x46c)](),_0x2e8f23;},VisuMZ[_0x312955(0x1af)][_0x312955(0x443)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x3fc)],Scene_Shop[_0x312955(0x1b8)]['onSellOk']=function(){const _0x30f445=_0x312955;VisuMZ[_0x30f445(0x1af)]['Scene_Shop_onSellOk'][_0x30f445(0x3b4)](this),this[_0x30f445(0x2b1)]()&&this[_0x30f445(0x427)]();},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x427)]=function(){const _0x340209=_0x312955;this['_categoryWindow'][_0x340209(0x431)]();},VisuMZ[_0x312955(0x1af)][_0x312955(0x469)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x22f)],Scene_Shop[_0x312955(0x1b8)]['onSellCancel']=function(){const _0x209c70=_0x312955;VisuMZ['ItemsEquipsCore'][_0x209c70(0x469)][_0x209c70(0x3b4)](this),this[_0x209c70(0x18d)]()&&this['onCategoryCancel'](),this[_0x209c70(0x2b1)]()&&this[_0x209c70(0x7b)][_0x209c70(0x40c)]();},Scene_Shop[_0x312955(0x1b8)]['sellPriceOfItem']=function(_0x36d54d){const _0xd7af9f=_0x312955,_0x338c67=this['_item'];this['_item']=_0x36d54d;const _0x5b72dd=this[_0xd7af9f(0x2bf)]();return this['_item']=_0x338c67,_0x5b72dd;},VisuMZ[_0x312955(0x1af)]['Scene_Shop_sellingPrice']=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x2bf)],Scene_Shop['prototype']['sellingPrice']=function(){const _0x4c6efb=_0x312955;let _0x3cc77a=this[_0x4c6efb(0x17e)]();const _0xe3f77f=this['_item'];return _0x3cc77a=VisuMZ[_0x4c6efb(0x1af)][_0x4c6efb(0x3a4)][_0x4c6efb(0x46e)][_0x4c6efb(0xeb)]['call'](this,_0xe3f77f,_0x3cc77a),_0x3cc77a;},Scene_Shop[_0x312955(0x1b8)]['determineBaseSellingPrice']=function(){const _0x40b473=_0x312955;let _0x3baac4=this[_0x40b473(0x385)][_0x40b473(0x360)];if(!this[_0x40b473(0x385)])return 0x0;else{if(this[_0x40b473(0x385)][_0x40b473(0x1ba)][_0x40b473(0x2c5)](/<JS SELL PRICE>\s*([\s\S]*)\s*<\/JS SELL PRICE>/i)){const _0x1fd751=String(RegExp['$1']);window[_0x40b473(0x46c)]=this['_item'],window[_0x40b473(0x360)]=_0x3baac4*this['sellPriceRate']();try{eval(_0x1fd751);}catch(_0x418d0a){if($gameTemp[_0x40b473(0x3bd)]())console[_0x40b473(0x255)](_0x418d0a);}let _0x24c1c8=window[_0x40b473(0x360)];window[_0x40b473(0x46c)]=undefined,window[_0x40b473(0x360)]=undefined;if(isNaN(_0x24c1c8))_0x24c1c8=0x0;return Math['floor'](_0x24c1c8);}else return this['_item']['note'][_0x40b473(0x2c5)](/<SELL PRICE:[ ](\d+)>/i)?parseInt(RegExp['$1']):Math['floor'](this[_0x40b473(0x19a)]());}},Scene_Shop[_0x312955(0x1b8)]['baseSellingPrice']=function(){const _0x804263=_0x312955;return this[_0x804263(0x385)][_0x804263(0x360)]*this[_0x804263(0x3b9)]();},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x3b9)]=function(){const _0x560735=_0x312955;return VisuMZ[_0x560735(0x1af)][_0x560735(0x3a4)][_0x560735(0x46e)][_0x560735(0x1e3)];},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x28e)]=function(){const _0x56144a=_0x312955;if(!this[_0x56144a(0x22d)]())return![];if(!this[_0x56144a(0x18d)]())return![];if(!this[_0x56144a(0x342)])return![];if(!this[_0x56144a(0x342)][_0x56144a(0x112)])return![];return this[_0x56144a(0x22d)]()&&this['isUseModernControls']();},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x122)]=function(){const _0x27f3ca=_0x312955;if(this['buttonAssistItemListRequirement']())return this['_sellWindow'][_0x27f3ca(0x8d)]()===0x1?TextManager[_0x27f3ca(0x293)](_0x27f3ca(0x279),_0x27f3ca(0x420)):TextManager[_0x27f3ca(0x293)](_0x27f3ca(0x95),_0x27f3ca(0x100));else{if(this[_0x27f3ca(0x481)]&&this[_0x27f3ca(0x481)][_0x27f3ca(0x112)])return TextManager['getInputMultiButtonStrings']('left','right');}return Scene_MenuBase[_0x27f3ca(0x1b8)]['buttonAssistKey1'][_0x27f3ca(0x3b4)](this);},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x3a5)]=function(){const _0x4d84b3=_0x312955;if(this[_0x4d84b3(0x481)]&&this[_0x4d84b3(0x481)][_0x4d84b3(0x112)])return TextManager[_0x4d84b3(0x293)]('up','down');return Scene_MenuBase['prototype'][_0x4d84b3(0x3a5)]['call'](this);},Scene_Shop[_0x312955(0x1b8)]['buttonAssistText1']=function(){const _0x45074a=_0x312955;if(this[_0x45074a(0x28e)]())return VisuMZ[_0x45074a(0x1af)][_0x45074a(0x3a4)][_0x45074a(0x466)][_0x45074a(0x489)];else{if(this['_numberWindow']&&this[_0x45074a(0x481)][_0x45074a(0x112)])return VisuMZ['ItemsEquipsCore'][_0x45074a(0x3a4)][_0x45074a(0x46e)]['buttonAssistSmallIncrement'];}return Scene_MenuBase[_0x45074a(0x1b8)][_0x45074a(0x339)][_0x45074a(0x3b4)](this);},Scene_Shop['prototype'][_0x312955(0x3d7)]=function(){const _0x143fb3=_0x312955;if(this['_numberWindow']&&this[_0x143fb3(0x481)][_0x143fb3(0x112)])return VisuMZ[_0x143fb3(0x1af)][_0x143fb3(0x3a4)]['ShopScene'][_0x143fb3(0x384)];return Scene_MenuBase[_0x143fb3(0x1b8)][_0x143fb3(0x3d7)][_0x143fb3(0x3b4)](this);},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x31b)]=function(){const _0x52a6bf=_0x312955;if(!SceneManager['isSceneShop']())return;const _0x59e366=VisuMZ[_0x52a6bf(0x1af)]['Settings']['ShopScene'];_0x59e366[_0x52a6bf(0x11a)]&&$gameSwitches[_0x52a6bf(0x149)](_0x59e366[_0x52a6bf(0x11a)],![]),_0x59e366[_0x52a6bf(0x400)]&&$gameSwitches[_0x52a6bf(0x149)](_0x59e366[_0x52a6bf(0x400)],![]);},VisuMZ[_0x312955(0x1af)][_0x312955(0x313)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x301)],Scene_Shop[_0x312955(0x1b8)][_0x312955(0x301)]=function(_0x3de31c){const _0xcd891f=_0x312955;VisuMZ[_0xcd891f(0x1af)]['Scene_Shop_doBuy'][_0xcd891f(0x3b4)](this,_0x3de31c),this[_0xcd891f(0x152)](this[_0xcd891f(0x385)],_0x3de31c);if(_0x3de31c<=0x0)return;const _0x2fab24=VisuMZ[_0xcd891f(0x1af)][_0xcd891f(0x3a4)][_0xcd891f(0x46e)];_0x2fab24['SwitchBuy']&&$gameSwitches[_0xcd891f(0x149)](_0x2fab24[_0xcd891f(0x11a)],!![]),this[_0xcd891f(0x44e)][_0xcd891f(0x259)](),this['_sellWindow'][_0xcd891f(0x259)]();},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x152)]=function(_0x37e1ce,_0x39cbbd){const _0x189411=_0x312955;this['processShopCondListingOnBuyItem'](_0x37e1ce,_0x39cbbd),$gameParty[_0x189411(0x34e)](_0x37e1ce,_0x39cbbd),$gameParty[_0x189411(0x386)](_0x39cbbd*this[_0x189411(0x366)]());},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x215)]=function(_0x85fafe,_0x18d31d){const _0x58697a=_0x312955;if(!_0x85fafe)return;if(!_0x18d31d)return;const _0x330167=VisuMZ[_0x58697a(0x1af)]['ShopListingRegExp'],_0x284d94=_0x85fafe[_0x58697a(0x1ba)]||'';if(_0x284d94['match'](_0x330167['BuyTurnSwitchOn'])){const _0x1fdc76=String(RegExp['$1'])[_0x58697a(0x3a1)](',')[_0x58697a(0x4ac)](_0x58b183=>Number(_0x58b183));for(const _0x20ca97 of _0x1fdc76){$gameSwitches['setValue'](_0x20ca97,!![]);}}if(_0x284d94[_0x58697a(0x2c5)](_0x330167[_0x58697a(0x39d)])){const _0x574db9=String(RegExp['$1'])[_0x58697a(0x3a1)](',')[_0x58697a(0x4ac)](_0x25c6fc=>Number(_0x25c6fc));for(const _0x3d1b1e of _0x574db9){$gameSwitches[_0x58697a(0x149)](_0x3d1b1e,![]);}}},VisuMZ['ItemsEquipsCore'][_0x312955(0x3cd)]=Scene_Shop[_0x312955(0x1b8)][_0x312955(0x2ed)],Scene_Shop[_0x312955(0x1b8)][_0x312955(0x2ed)]=function(_0x132acd){const _0x187bbd=_0x312955;VisuMZ[_0x187bbd(0x1af)][_0x187bbd(0x3cd)][_0x187bbd(0x3b4)](this,_0x132acd),this[_0x187bbd(0x1d6)](this[_0x187bbd(0x385)],_0x132acd);if(_0x132acd<=0x0)return;const _0x1dc326=VisuMZ[_0x187bbd(0x1af)][_0x187bbd(0x3a4)][_0x187bbd(0x46e)];_0x1dc326['SwitchBuy']&&$gameSwitches[_0x187bbd(0x149)](_0x1dc326[_0x187bbd(0x400)],!![]),this[_0x187bbd(0x44e)][_0x187bbd(0x259)](),this[_0x187bbd(0x342)][_0x187bbd(0x259)]();},Scene_Shop['prototype'][_0x312955(0x1d6)]=function(_0x3b2b51,_0x278e44){const _0x237aaf=_0x312955;this[_0x237aaf(0x438)](_0x3b2b51,_0x278e44),$gameParty[_0x237aaf(0x455)](_0x3b2b51,_0x278e44),$gameParty['addShopTrackingGoldSell'](_0x278e44*this[_0x237aaf(0x2bf)]());},Scene_Shop[_0x312955(0x1b8)][_0x312955(0x438)]=function(_0x3b342a,_0x5bdd85){const _0x106035=_0x312955;if(!_0x3b342a)return;if(!_0x5bdd85)return;const _0x390a4c=VisuMZ[_0x106035(0x1af)][_0x106035(0x86)],_0x5bb60c=_0x3b342a[_0x106035(0x1ba)]||'';if(_0x5bb60c[_0x106035(0x2c5)](_0x390a4c[_0x106035(0x3c9)])){const _0x5a6ad3=String(RegExp['$1'])[_0x106035(0x3a1)](',')['map'](_0x394133=>Number(_0x394133));for(const _0x4265b0 of _0x5a6ad3){$gameSwitches[_0x106035(0x149)](_0x4265b0,!![]);}}if(_0x5bb60c[_0x106035(0x2c5)](_0x390a4c['SellTurnSwitchOff'])){const _0x2adb42=String(RegExp['$1'])[_0x106035(0x3a1)](',')[_0x106035(0x4ac)](_0x2a683a=>Number(_0x2a683a));for(const _0x3d5c78 of _0x2adb42){$gameSwitches[_0x106035(0x149)](_0x3d5c78,![]);}}};function Sprite_NewLabel(){this['initialize'](...arguments);}Sprite_NewLabel[_0x312955(0x1b8)]=Object[_0x312955(0x1d2)](Sprite[_0x312955(0x1b8)]),Sprite_NewLabel[_0x312955(0x1b8)][_0x312955(0x36a)]=Sprite_NewLabel,Sprite_NewLabel[_0x312955(0x1b8)]['initialize']=function(){const _0x3f4531=_0x312955;Sprite[_0x3f4531(0x1b8)][_0x3f4531(0x99)]['call'](this),this[_0x3f4531(0x221)]();},Sprite_NewLabel[_0x312955(0x1b8)][_0x312955(0x221)]=function(){const _0x29ab8e=_0x312955,_0x33864b=0x20,_0x1cd72a=0x20;this['bitmap']=new Bitmap(_0x33864b,_0x1cd72a),this[_0x29ab8e(0x324)](),this['drawNewLabelText']();},Sprite_NewLabel[_0x312955(0x1b8)]['drawNewLabelIcon']=function(){const _0x30a62e=_0x312955,_0xfc6920=VisuMZ['ItemsEquipsCore'][_0x30a62e(0x3a4)][_0x30a62e(0x3bc)][_0x30a62e(0x2ba)];if(_0xfc6920<=0x0)return;const _0x4cd849=ImageManager['loadSystem'](_0x30a62e(0x2ca)),_0x54b8e8=ImageManager[_0x30a62e(0x340)],_0x36b033=ImageManager[_0x30a62e(0x2e5)],_0x468d72=_0xfc6920%0x10*_0x54b8e8,_0x3b585=Math[_0x30a62e(0x433)](_0xfc6920/0x10)*_0x36b033;this[_0x30a62e(0x359)][_0x30a62e(0x3b5)](_0x4cd849,_0x468d72,_0x3b585,_0x54b8e8,_0x36b033,0x0,0x0);},Sprite_NewLabel[_0x312955(0x1b8)]['drawNewLabelText']=function(){const _0x322e0b=_0x312955,_0x571867=VisuMZ[_0x322e0b(0x1af)][_0x322e0b(0x3a4)][_0x322e0b(0x3bc)],_0x4c9933=_0x571867['Text'];if(_0x4c9933==='')return;const _0x185f93=0x20,_0x3a8369=0x20;this['bitmap'][_0x322e0b(0x14d)]=_0x571867[_0x322e0b(0x185)]||$gameSystem[_0x322e0b(0x402)](),this['bitmap'][_0x322e0b(0x465)]=this['getTextColor'](),this['bitmap']['fontSize']=_0x571867[_0x322e0b(0x2d3)],this[_0x322e0b(0x359)][_0x322e0b(0x292)](_0x4c9933,0x0,_0x3a8369/0x2,_0x185f93,_0x3a8369/0x2,_0x322e0b(0x2e7));},Sprite_NewLabel['prototype'][_0x312955(0x2f5)]=function(){const _0x5d0824=_0x312955,_0x2a5e89=VisuMZ[_0x5d0824(0x1af)][_0x5d0824(0x3a4)]['New']['FontColor'];return _0x2a5e89[_0x5d0824(0x2c5)](/#(.*)/i)?'#'+String(RegExp['$1']):ColorManager[_0x5d0824(0x465)](_0x2a5e89);},Window_Base['prototype'][_0x312955(0x348)]=function(_0x43a64c,_0xa543ec,_0x16b0f6,_0x45e987){const _0x95ed1d=_0x312955;if(_0x43a64c){const _0x279ce4=ImageManager['standardIconWidth']||0x20,_0x272713=_0x279ce4-ImageManager[_0x95ed1d(0x340)],_0x551b60=_0x279ce4+0x4,_0x34cbd6=_0x16b0f6+(this[_0x95ed1d(0x337)]()-ImageManager[_0x95ed1d(0x2e5)])/0x2,_0x310bf8=Math[_0x95ed1d(0x76)](0x0,_0x45e987-_0x551b60);this[_0x95ed1d(0xd4)](ColorManager['getItemColor'](_0x43a64c)),this[_0x95ed1d(0x6e)](_0x43a64c['iconIndex'],_0xa543ec+Math['ceil'](_0x272713/0x2),_0x34cbd6),this[_0x95ed1d(0x292)](_0x43a64c['name'],_0xa543ec+_0x551b60,_0x16b0f6,_0x310bf8),this['resetTextColor']();}},Window_Base[_0x312955(0x1b8)][_0x312955(0x40a)]=function(_0x864df,_0x251fbf,_0x39a222,_0x139f9e){const _0x1ec8db=_0x312955;if(this[_0x1ec8db(0xa1)](_0x864df)){this[_0x1ec8db(0x219)]();const _0x10f1d4=VisuMZ[_0x1ec8db(0x1af)][_0x1ec8db(0x3a4)][_0x1ec8db(0x466)],_0xf52a8f=_0x10f1d4[_0x1ec8db(0xe2)],_0x9a3368=_0xf52a8f[_0x1ec8db(0x3d3)]($gameParty[_0x1ec8db(0xe9)](_0x864df));this[_0x1ec8db(0x164)][_0x1ec8db(0xe4)]=_0x10f1d4[_0x1ec8db(0x397)],this[_0x1ec8db(0x292)](_0x9a3368,_0x251fbf,_0x39a222,_0x139f9e,_0x1ec8db(0x420)),this[_0x1ec8db(0x219)]();}},Window_Base['prototype']['isDrawItemNumber']=function(_0x14bb72){const _0x36b70c=_0x312955;if(DataManager[_0x36b70c(0x27e)](_0x14bb72))return $dataSystem[_0x36b70c(0x2dd)];return!![];},Window_Base[_0x312955(0x1b8)][_0x312955(0x3a7)]=function(_0x2758e0,_0x12f6aa,_0x3ef9aa,_0x2638df,_0x3914f5){const _0x40bbd3=_0x312955;_0x3914f5=Math['max'](_0x3914f5||0x1,0x1);while(_0x3914f5--){_0x2638df=_0x2638df||this[_0x40bbd3(0x337)](),this['contentsBack'][_0x40bbd3(0x31a)]=0xa0;const _0x1a01c9=ColorManager[_0x40bbd3(0x9a)]();this[_0x40bbd3(0x36d)][_0x40bbd3(0x2d6)](_0x2758e0+0x1,_0x12f6aa+0x1,_0x3ef9aa-0x2,_0x2638df-0x2,_0x1a01c9),this['contentsBack'][_0x40bbd3(0x31a)]=0xff;}},VisuMZ[_0x312955(0x1af)][_0x312955(0x26f)]=Window_Selectable[_0x312955(0x1b8)][_0x312955(0x99)],Window_Selectable[_0x312955(0x1b8)][_0x312955(0x99)]=function(_0x4e9492){const _0x47057c=_0x312955;this[_0x47057c(0x19c)](),VisuMZ[_0x47057c(0x1af)][_0x47057c(0x26f)][_0x47057c(0x3b4)](this,_0x4e9492);},Window_Selectable['prototype']['initNewLabelSprites']=function(){const _0x4dc282=_0x312955;this[_0x4dc282(0x29a)]={},this[_0x4dc282(0x8e)]=0xff,this['_newLabelOpacityChange']=VisuMZ[_0x4dc282(0x1af)][_0x4dc282(0x3a4)][_0x4dc282(0x3bc)][_0x4dc282(0x2b5)],this[_0x4dc282(0x2ab)]=VisuMZ['ItemsEquipsCore'][_0x4dc282(0x3a4)][_0x4dc282(0x3bc)][_0x4dc282(0x119)];},Window_Selectable[_0x312955(0x1b8)][_0x312955(0x126)]=function(){return![];},VisuMZ[_0x312955(0x1af)][_0x312955(0x268)]=Window_Selectable[_0x312955(0x1b8)][_0x312955(0x46a)],Window_Selectable[_0x312955(0x1b8)]['setHelpWindowItem']=function(_0x3adfa7){const _0x1ad9f9=_0x312955;VisuMZ[_0x1ad9f9(0x1af)][_0x1ad9f9(0x268)][_0x1ad9f9(0x3b4)](this,_0x3adfa7);if(this[_0x1ad9f9(0x126)]())this[_0x1ad9f9(0x4b4)](_0x3adfa7);},Window_Selectable['prototype'][_0x312955(0x4b4)]=function(_0x4f0f7e){const _0x2ccb21=_0x312955;if(!_0x4f0f7e)return;$gameParty[_0x2ccb21(0x11e)](_0x4f0f7e);let _0x297df6='';if(DataManager[_0x2ccb21(0x498)](_0x4f0f7e))_0x297df6=_0x2ccb21(0x127)[_0x2ccb21(0x3d3)](_0x4f0f7e['id']);else{if(DataManager[_0x2ccb21(0xed)](_0x4f0f7e))_0x297df6=_0x2ccb21(0x1c3)[_0x2ccb21(0x3d3)](_0x4f0f7e['id']);else{if(DataManager[_0x2ccb21(0x225)](_0x4f0f7e))_0x297df6='armor-%1'[_0x2ccb21(0x3d3)](_0x4f0f7e['id']);else return;}}const _0x3594eb=this[_0x2ccb21(0x29a)][_0x297df6];if(_0x3594eb)_0x3594eb[_0x2ccb21(0x40c)]();},VisuMZ['ItemsEquipsCore'][_0x312955(0x3c7)]=Window_Selectable[_0x312955(0x1b8)][_0x312955(0x259)],Window_Selectable[_0x312955(0x1b8)][_0x312955(0x259)]=function(){const _0xee770f=_0x312955;this[_0xee770f(0x47b)](),VisuMZ[_0xee770f(0x1af)][_0xee770f(0x3c7)]['call'](this);},Window_Selectable['prototype']['hideNewLabelSprites']=function(){const _0x3798d3=_0x312955;for(const _0x4d8377 of Object[_0x3798d3(0x249)](this[_0x3798d3(0x29a)])){_0x4d8377[_0x3798d3(0x40c)]();}},VisuMZ[_0x312955(0x1af)][_0x312955(0x2a1)]=Window_Selectable[_0x312955(0x1b8)][_0x312955(0xf6)],Window_Selectable[_0x312955(0x1b8)][_0x312955(0xf6)]=function(){const _0x409e80=_0x312955;this[_0x409e80(0x2f4)](),VisuMZ[_0x409e80(0x1af)][_0x409e80(0x2a1)][_0x409e80(0x3b4)](this);},Window_Selectable['prototype']['updateNewLabelOpacity']=function(){const _0x7e9b0d=_0x312955;if(!this['isShowNew']())return;const _0x35f35d=this[_0x7e9b0d(0x2ab)];this[_0x7e9b0d(0x8e)]+=this[_0x7e9b0d(0xa4)];(this['_newLabelOpacity']>=_0x35f35d||this[_0x7e9b0d(0x8e)]<=0x0)&&(this['_newLabelOpacityChange']*=-0x1);this[_0x7e9b0d(0x8e)]=this[_0x7e9b0d(0x8e)][_0x7e9b0d(0x305)](0x0,_0x35f35d);for(const _0x585102 of Object['values'](this[_0x7e9b0d(0x29a)])){_0x585102[_0x7e9b0d(0x326)]=this[_0x7e9b0d(0x8e)];}},Window_Selectable[_0x312955(0x1b8)][_0x312955(0x1ca)]=function(_0x5c2364){const _0x5dd3cf=_0x312955,_0x50a67d=this[_0x5dd3cf(0x29a)];if(_0x50a67d[_0x5c2364])return _0x50a67d[_0x5c2364];else{const _0x27fec3=new Sprite_NewLabel();return _0x50a67d[_0x5c2364]=_0x27fec3,this[_0x5dd3cf(0x363)](_0x27fec3),_0x27fec3;}},Window_Selectable[_0x312955(0x1b8)][_0x312955(0x77)]=function(_0x8e5e8c,_0x212c7a,_0x364bb7){const _0x1c8b0b=_0x312955;let _0x25664c='';if(DataManager['isItem'](_0x8e5e8c))_0x25664c=_0x1c8b0b(0x127)[_0x1c8b0b(0x3d3)](_0x8e5e8c['id']);else{if(DataManager[_0x1c8b0b(0xed)](_0x8e5e8c))_0x25664c=_0x1c8b0b(0x1c3)['format'](_0x8e5e8c['id']);else{if(DataManager[_0x1c8b0b(0x225)](_0x8e5e8c))_0x25664c=_0x1c8b0b(0x39c)[_0x1c8b0b(0x3d3)](_0x8e5e8c['id']);else return;}}const _0x42cade=this[_0x1c8b0b(0x1ca)](_0x25664c);_0x42cade[_0x1c8b0b(0x139)](_0x212c7a,_0x364bb7),_0x42cade[_0x1c8b0b(0x431)](),_0x42cade[_0x1c8b0b(0x326)]=this[_0x1c8b0b(0x8e)];},Window_ItemCategory[_0x312955(0x15f)]=VisuMZ[_0x312955(0x1af)][_0x312955(0x3a4)]['Categories'][_0x312955(0x1ed)],Window_ItemCategory[_0x312955(0x3e5)]=['HiddenItemA',_0x312955(0x1dc),'Nonconsumable',_0x312955(0x4a8),'AlwaysUsable',_0x312955(0x4a2),_0x312955(0x1bf),'NeverUsable'],VisuMZ[_0x312955(0x1af)][_0x312955(0x2da)]=Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x99)],Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x99)]=function(_0x4a94ba){const _0x36b210=_0x312955;VisuMZ['ItemsEquipsCore'][_0x36b210(0x2da)][_0x36b210(0x3b4)](this,_0x4a94ba),this['createCategoryNameWindow'](_0x4a94ba);},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x471)]=function(_0x1ec956){const _0x56f29d=_0x312955,_0x3e71a1=new Rectangle(0x0,0x0,_0x1ec956[_0x56f29d(0x250)],_0x1ec956[_0x56f29d(0x98)]);this[_0x56f29d(0x34d)]=new Window_Base(_0x3e71a1),this[_0x56f29d(0x34d)][_0x56f29d(0x326)]=0x0,this[_0x56f29d(0x68)](this['_categoryNameWindow']),this['updateCategoryNameWindow']();},Window_ItemCategory['prototype']['isUseModernControls']=function(){const _0x408c56=_0x312955,_0x22e885=SceneManager['_scene'];if(_0x22e885[_0x408c56(0x36a)]===Scene_Item&&_0x22e885[_0x408c56(0x73)]())return![];return Imported['VisuMZ_0_CoreEngine']&&Window_HorzCommand[_0x408c56(0x1b8)][_0x408c56(0x18d)][_0x408c56(0x3b4)](this);},Window_ItemCategory['prototype']['processCursorHomeEndTrigger']=function(){},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x143)]=function(){const _0x5ace02=_0x312955;if(!this[_0x5ace02(0x18d)]())Window_HorzCommand[_0x5ace02(0x1b8)][_0x5ace02(0x143)][_0x5ace02(0x3b4)](this);},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x8d)]=function(){return this['_list']?this['maxItems']():0x4;},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0xf6)]=function(){const _0x1e41e6=_0x312955;Window_HorzCommand[_0x1e41e6(0x1b8)][_0x1e41e6(0xf6)][_0x1e41e6(0x3b4)](this),this[_0x1e41e6(0x24f)]&&this['_itemWindow'][_0x1e41e6(0x3e7)](this['currentExt']());},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x44f)]=function(){const _0x52ee7e=_0x312955;if(this[_0x52ee7e(0x2cf)]()){const _0x38e28d=this[_0x52ee7e(0x18c)]();if(this[_0x52ee7e(0x24f)]&&this[_0x52ee7e(0x24f)]['maxCols']()<=0x1)Input[_0x52ee7e(0x294)](_0x52ee7e(0x420))&&this['cursorRight'](Input[_0x52ee7e(0x1fd)]('right')),Input[_0x52ee7e(0x294)](_0x52ee7e(0x279))&&this[_0x52ee7e(0x208)](Input[_0x52ee7e(0x1fd)]('left'));else this['_itemWindow']&&this['_itemWindow']['maxCols']()>0x1&&(Input[_0x52ee7e(0x294)]('pagedown')&&!Input[_0x52ee7e(0x36c)](_0x52ee7e(0xc0))&&this[_0x52ee7e(0x274)](Input['isTriggered'](_0x52ee7e(0x100))),Input[_0x52ee7e(0x294)](_0x52ee7e(0x95))&&!Input['isPressed'](_0x52ee7e(0xc0))&&this[_0x52ee7e(0x208)](Input[_0x52ee7e(0x1fd)]('pageup')));this['index']()!==_0x38e28d&&this['playCursorSound']();}},Window_ItemCategory['prototype'][_0x312955(0x42a)]=function(){const _0x35a4dd=_0x312955;if(this[_0x35a4dd(0x18d)]())return;Window_HorzCommand['prototype'][_0x35a4dd(0x42a)][_0x35a4dd(0x3b4)](this);},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x354)]=function(){const _0x19c261=_0x312955;return this[_0x19c261(0x18d)]()?![]:Window_HorzCommand[_0x19c261(0x1b8)][_0x19c261(0x354)][_0x19c261(0x3b4)](this);},Window_ItemCategory['prototype']['processTouchModernControls']=function(){const _0x5c90d4=_0x312955;if(this[_0x5c90d4(0x1ef)]()){TouchInput[_0x5c90d4(0x1fd)]()&&this[_0x5c90d4(0x39e)](!![]);if(TouchInput[_0x5c90d4(0x41b)]())this['onTouchOk']();else TouchInput['isCancelled']()&&this['onTouchCancel']();}},Window_ItemCategory[_0x312955(0x1b8)]['onTouchSelect']=function(_0x179b29){const _0x2f0145=_0x312955;this['isUseModernControls']()?this[_0x2f0145(0xc1)](!![]):Window_HorzCommand['prototype'][_0x2f0145(0x39e)]['call'](this,_0x179b29);},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0xc1)]=function(_0xab4426){const _0x1280cb=_0x312955;this[_0x1280cb(0xae)]=![];if(this['isCursorMovable']()){const _0x5020c9=this[_0x1280cb(0x18c)](),_0x29b152=this['hitIndex']();_0x29b152>=0x0&&_0x29b152!==this[_0x1280cb(0x18c)]()&&this[_0x1280cb(0x25e)](_0x29b152),_0xab4426&&this[_0x1280cb(0x18c)]()!==_0x5020c9&&this[_0x1280cb(0xa7)]();}},VisuMZ[_0x312955(0x1af)][_0x312955(0x20e)]=Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x368)],Window_ItemCategory[_0x312955(0x1b8)]['makeCommandList']=function(){const _0x13d4ae=_0x312955;this[_0x13d4ae(0x3e8)](),this['select'](this[_0x13d4ae(0x18c)]());},Window_ItemCategory['prototype']['addItemCategories']=function(){const _0x5f1270=_0x312955;let _0x4d4dc3=Window_ItemCategory['categoryList'];const _0x343cb3=SceneManager['_scene'];_0x343cb3[_0x5f1270(0x36a)]===Scene_Item&&_0x343cb3[_0x5f1270(0x73)]()&&(_0x4d4dc3=[{'Type':_0x5f1270(0x203),'Icon':0x0,'SwitchID':0x0,'SortBy':'ID'},{'Type':_0x5f1270(0x311),'Icon':0x0,'SwitchID':0x0,'SortBy':'ID'},{'Type':_0x5f1270(0x216),'Icon':0x0,'SwitchID':0x0,'SortBy':'ID'},{'Type':_0x5f1270(0x38f),'Icon':0x0,'SwitchID':0x0,'SortBy':'ID'}]);for(const _0x30dbed of _0x4d4dc3){this[_0x5f1270(0x3ac)](_0x30dbed);}},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x3ac)]=function(_0x5d3f9f){const _0x119251=_0x312955,_0x22c3db=_0x5d3f9f['Type'],_0x550ccf=_0x5d3f9f[_0x119251(0x2ba)],_0x297b3a=_0x5d3f9f[_0x119251(0x4b9)]||0x0;if(_0x297b3a>0x0&&!$gameSwitches[_0x119251(0x244)](_0x297b3a))return;let _0x25b120='',_0x5a8915=_0x119251(0x2f0),_0x28c700=_0x22c3db;if(_0x22c3db[_0x119251(0x2c5)](/Category:(.*)/i))_0x25b120=String(RegExp['$1'])[_0x119251(0x349)]();else{if(Window_ItemCategory[_0x119251(0x3e5)]['includes'](_0x22c3db))_0x25b120=VisuMZ[_0x119251(0x1af)][_0x119251(0x3a4)][_0x119251(0x26d)][_0x22c3db];else{if([_0x119251(0x2a0),_0x119251(0x203)][_0x119251(0x207)](_0x22c3db))_0x25b120=TextManager['item'];else{if(_0x22c3db===_0x119251(0x38f))_0x25b120=TextManager['keyItem'];else{if(_0x22c3db===_0x119251(0x311))_0x25b120=TextManager[_0x119251(0x290)];else{if(_0x22c3db===_0x119251(0x216))_0x25b120=TextManager['armor'];else{if(_0x22c3db[_0x119251(0x2c5)](/WTYPE:(\d+)/i))_0x25b120=$dataSystem[_0x119251(0x2f7)][Number(RegExp['$1'])]||'';else{if(_0x22c3db[_0x119251(0x2c5)](/ATYPE:(\d+)/i))_0x25b120=$dataSystem[_0x119251(0x14a)][Number(RegExp['$1'])]||'';else _0x22c3db[_0x119251(0x2c5)](/ETYPE:(\d+)/i)&&(_0x25b120=$dataSystem[_0x119251(0x31c)][Number(RegExp['$1'])]||'');}}}}}}}if(TextManager[_0x119251(0x41a)]&&TextManager[_0x119251(0x47f)]()){const _0x3842ea=_0x25b120[_0x119251(0x315)]()[_0x119251(0x349)]();if($dataLocalization[_0x3842ea]&&_0x3842ea[_0x119251(0x2e4)]>0x0){const _0x5c4b35=ConfigManager[_0x119251(0x43c)]||_0x119251(0x3c0);_0x25b120=$dataLocalization[_0x3842ea][_0x5c4b35]||'UNDEFINED!';}}_0x550ccf>0x0&&this[_0x119251(0x41f)]()!==_0x119251(0x28a)&&(_0x25b120=_0x119251(0x283)['format'](_0x550ccf,_0x25b120)),this[_0x119251(0x3b8)](_0x25b120,_0x5a8915,!![],_0x28c700);},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0xf8)]=function(){const _0x361fa9=_0x312955;return VisuMZ[_0x361fa9(0x1af)][_0x361fa9(0x3a4)][_0x361fa9(0x26d)][_0x361fa9(0x2a9)];},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x487)]=function(_0x4d79d1){const _0xbeb7ac=_0x312955,_0x4f269a=this[_0xbeb7ac(0x19e)](_0x4d79d1);if(_0x4f269a==='iconText')this[_0xbeb7ac(0x1e1)](_0x4d79d1);else _0x4f269a===_0xbeb7ac(0x232)?this['drawItemStyleIcon'](_0x4d79d1):Window_HorzCommand[_0xbeb7ac(0x1b8)][_0xbeb7ac(0x487)][_0xbeb7ac(0x3b4)](this,_0x4d79d1);},Window_ItemCategory['prototype'][_0x312955(0x41f)]=function(){const _0x5bcc63=_0x312955,_0x299f15=SceneManager['_scene'];if(_0x299f15[_0x5bcc63(0x36a)]===Scene_Item&&_0x299f15[_0x5bcc63(0x73)]())return _0x5bcc63(0x28a);return VisuMZ['ItemsEquipsCore'][_0x5bcc63(0x3a4)][_0x5bcc63(0x26d)][_0x5bcc63(0x347)];},Window_ItemCategory[_0x312955(0x1b8)]['categoryStyleCheck']=function(_0x166604){const _0x44cdb5=_0x312955;if(_0x166604<0x0)return'text';const _0x2fc43b=this[_0x44cdb5(0x41f)]();if(_0x2fc43b!==_0x44cdb5(0x3fd))return _0x2fc43b;else{const _0x5bf660=this[_0x44cdb5(0x17d)](_0x166604);if(_0x5bf660[_0x44cdb5(0x2c5)](/\\I\[(\d+)\]/i)){const _0x4f884d=this[_0x44cdb5(0x224)](_0x166604),_0x5e0bba=this[_0x44cdb5(0x285)](_0x5bf660)[_0x44cdb5(0x250)];return _0x5e0bba<=_0x4f884d['width']?_0x44cdb5(0x134):_0x44cdb5(0x232);}else return'text';}},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x1e1)]=function(_0x34d551){const _0x488db9=_0x312955,_0x33f92=this[_0x488db9(0x224)](_0x34d551),_0xf7b246=this['commandName'](_0x34d551),_0x2d51e6=this['textSizeEx'](_0xf7b246)['width'];this[_0x488db9(0x2a3)](this[_0x488db9(0x40e)](_0x34d551));const _0xa2de53=this[_0x488db9(0xf8)]();if(_0xa2de53===_0x488db9(0x420))this['drawTextEx'](_0xf7b246,_0x33f92['x']+_0x33f92[_0x488db9(0x250)]-_0x2d51e6,_0x33f92['y'],_0x2d51e6);else{if(_0xa2de53==='center'){const _0x26c724=_0x33f92['x']+Math[_0x488db9(0x433)]((_0x33f92['width']-_0x2d51e6)/0x2);this['drawTextEx'](_0xf7b246,_0x26c724,_0x33f92['y'],_0x2d51e6);}else this[_0x488db9(0x355)](_0xf7b246,_0x33f92['x'],_0x33f92['y'],_0x2d51e6);}},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x4bb)]=function(_0x506f89){const _0x589fda=_0x312955,_0xbfb481=this['commandName'](_0x506f89);if(_0xbfb481[_0x589fda(0x2c5)](/\\I\[(\d+)\]/i)){const _0x204f1f=Number(RegExp['$1'])||0x0,_0x3c176b=this[_0x589fda(0x224)](_0x506f89),_0x40efe3=_0x3c176b['x']+Math[_0x589fda(0x433)]((_0x3c176b[_0x589fda(0x250)]-ImageManager['iconWidth'])/0x2),_0x365aad=_0x3c176b['y']+(_0x3c176b[_0x589fda(0x98)]-ImageManager[_0x589fda(0x2e5)])/0x2;this[_0x589fda(0x6e)](_0x204f1f,_0x40efe3,_0x365aad);}},VisuMZ[_0x312955(0x1af)]['Window_ItemCategory_setItemWindow']=Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x447)],Window_ItemCategory[_0x312955(0x1b8)]['setItemWindow']=function(_0x56986e){const _0xe87bcd=_0x312955;VisuMZ[_0xe87bcd(0x1af)][_0xe87bcd(0x345)][_0xe87bcd(0x3b4)](this,_0x56986e),_0x56986e[_0xe87bcd(0x3ec)]=this;},Window_ItemCategory[_0x312955(0x1b8)]['callUpdateHelp']=function(){const _0x4b73f8=_0x312955;Window_HorzCommand[_0x4b73f8(0x1b8)][_0x4b73f8(0x229)][_0x4b73f8(0x3b4)](this);if(this[_0x4b73f8(0x34d)])this[_0x4b73f8(0x9c)]();},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x9c)]=function(){const _0x5d81fa=_0x312955,_0x1cdfcb=this[_0x5d81fa(0x34d)];_0x1cdfcb[_0x5d81fa(0x164)]['clear']();const _0x3f59bd=this['categoryStyleCheck'](this[_0x5d81fa(0x18c)]());if(_0x3f59bd===_0x5d81fa(0x232)){const _0x253b69=this[_0x5d81fa(0x224)](this[_0x5d81fa(0x18c)]());let _0x4d1df8=this[_0x5d81fa(0x17d)](this[_0x5d81fa(0x18c)]());_0x4d1df8=_0x4d1df8[_0x5d81fa(0x43e)](/\\I\[(\d+)\]/gi,''),_0x1cdfcb['resetFontSettings'](),this['categoryNameWindowDrawBackground'](_0x4d1df8,_0x253b69),this['categoryNameWindowDrawText'](_0x4d1df8,_0x253b69),this[_0x5d81fa(0x41d)](_0x4d1df8,_0x253b69);}},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x3ba)]=function(_0xe36bc5,_0x13d64c){},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x226)]=function(_0x4a027d,_0x394823){const _0x2655f0=_0x312955,_0x854047=this['_categoryNameWindow'];_0x854047[_0x2655f0(0x292)](_0x4a027d,0x0,_0x394823['y'],_0x854047['innerWidth'],_0x2655f0(0x2e7));},Window_ItemCategory[_0x312955(0x1b8)][_0x312955(0x41d)]=function(_0x1c6db6,_0x327ea1){const _0x104b97=_0x312955,_0x124267=this[_0x104b97(0x34d)],_0x24fd8c=$gameSystem['windowPadding'](),_0x4344b0=_0x327ea1['x']+Math[_0x104b97(0x433)](_0x327ea1[_0x104b97(0x250)]/0x2)+_0x24fd8c;_0x124267['x']=_0x124267[_0x104b97(0x250)]/-0x2+_0x4344b0,_0x124267['y']=Math[_0x104b97(0x433)](_0x327ea1[_0x104b97(0x98)]/0x2);},Window_ItemList[_0x312955(0x1b8)][_0x312955(0x44f)]=function(){const _0x3278ff=_0x312955;if(this[_0x3278ff(0x2cf)]()){const _0xd00679=this[_0x3278ff(0x18c)]();if(this[_0x3278ff(0x8d)]()<=0x1)!this[_0x3278ff(0x2cd)](_0x3278ff(0x100))&&Input[_0x3278ff(0x1fd)](_0x3278ff(0x100))&&this[_0x3278ff(0x29d)](),!this[_0x3278ff(0x2cd)]('pageup')&&Input[_0x3278ff(0x1fd)](_0x3278ff(0x95))&&this[_0x3278ff(0xfc)]();else this[_0x3278ff(0x8d)]()>0x1&&(Input[_0x3278ff(0x294)](_0x3278ff(0x420))&&this[_0x3278ff(0x274)](Input[_0x3278ff(0x1fd)]('right')),Input['isRepeated'](_0x3278ff(0x279))&&this['cursorLeft'](Input[_0x3278ff(0x1fd)](_0x3278ff(0x279))),this[_0x3278ff(0x2f1)]()?(Input[_0x3278ff(0x1fd)](_0x3278ff(0x100))&&Input['isPressed']('shift')&&this[_0x3278ff(0x29d)](),Input[_0x3278ff(0x1fd)](_0x3278ff(0x95))&&Input[_0x3278ff(0x36c)]('shift')&&this[_0x3278ff(0xfc)]()):(Input[_0x3278ff(0x1fd)]('pagedown')&&this[_0x3278ff(0x29d)](),Input[_0x3278ff(0x1fd)](_0x3278ff(0x95))&&this[_0x3278ff(0xfc)]()));Input[_0x3278ff(0x294)](_0x3278ff(0xdf))&&(Input[_0x3278ff(0x36c)]('shift')&&this[_0x3278ff(0x2c7)]()?this[_0x3278ff(0x29d)]():this['cursorDown'](Input['isTriggered']('down'))),Input[_0x3278ff(0x294)]('up')&&(Input['isPressed']('shift')&&this[_0x3278ff(0x2c7)]()?this[_0x3278ff(0xfc)]():this[_0x3278ff(0xcb)](Input[_0x3278ff(0x1fd)]('up'))),Imported[_0x3278ff(0x2f8)]&&this[_0x3278ff(0x192)](),this['index']()!==_0xd00679&&this[_0x3278ff(0xa7)]();}},Window_ItemList[_0x312955(0x1b8)][_0x312955(0x2f1)]=function(){const _0x435bd3=_0x312955,_0xc0f224=SceneManager[_0x435bd3(0x44a)],_0x8a39e6=[Scene_Item,Scene_Shop];return _0x8a39e6['includes'](_0xc0f224[_0x435bd3(0x36a)]);},Window_ItemList[_0x312955(0x1b8)][_0x312955(0x21d)]=function(){const _0x47057d=_0x312955;Window_Selectable[_0x47057d(0x1b8)][_0x47057d(0x21d)]['call'](this),this[_0x47057d(0x3ec)]&&this['_categoryWindow'][_0x47057d(0x18d)]()&&this[_0x47057d(0x3ec)][_0x47057d(0x21d)]();},Window_ItemList[_0x312955(0x1b8)]['deactivate']=function(){const _0x207f09=_0x312955;Window_Selectable[_0x207f09(0x1b8)][_0x207f09(0x1ae)]['call'](this),this[_0x207f09(0x3ec)]&&this[_0x207f09(0x3ec)][_0x207f09(0x18d)]()&&this[_0x207f09(0x3ec)]['deactivate']();},Window_ItemList[_0x312955(0x1b8)][_0x312955(0x3e7)]=function(_0x298f7e){const _0x3d91a3=_0x312955;this[_0x3d91a3(0x13e)]!==_0x298f7e&&(this[_0x3d91a3(0x13e)]=_0x298f7e,this[_0x3d91a3(0x259)](),this[_0x3d91a3(0x3ec)]&&this[_0x3d91a3(0x3ec)][_0x3d91a3(0x18d)]()?this['smoothSelect'](0x0):this[_0x3d91a3(0xa5)](0x0,0x0));},VisuMZ[_0x312955(0x1af)][_0x312955(0x3ea)]=Window_ItemList['prototype']['maxCols'],Window_ItemList[_0x312955(0x1b8)]['maxCols']=function(){const _0x12e153=_0x312955,_0x159a1a=SceneManager[_0x12e153(0x44a)];if(_0x159a1a[_0x12e153(0x36a)]===Scene_Item&&_0x159a1a[_0x12e153(0x73)]())return 0x2;if(SceneManager[_0x12e153(0x44a)][_0x12e153(0x36a)]===Scene_Battle)return VisuMZ['ItemsEquipsCore'][_0x12e153(0x3ea)][_0x12e153(0x3b4)](this);else return SceneManager[_0x12e153(0x44a)]['constructor']===Scene_Map?VisuMZ[_0x12e153(0x1af)]['Window_ItemList_maxCols'][_0x12e153(0x3b4)](this):VisuMZ[_0x12e153(0x1af)][_0x12e153(0x3a4)][_0x12e153(0x466)][_0x12e153(0x171)];},VisuMZ[_0x312955(0x1af)]['Window_ItemList_colSpacing']=Window_ItemList[_0x312955(0x1b8)][_0x312955(0x38c)],Window_ItemList[_0x312955(0x1b8)][_0x312955(0x38c)]=function(){const _0x52b4cd=_0x312955;return this[_0x52b4cd(0x8d)]()<=0x1?Window_Selectable[_0x52b4cd(0x1b8)][_0x52b4cd(0x38c)][_0x52b4cd(0x3b4)](this):VisuMZ[_0x52b4cd(0x1af)][_0x52b4cd(0x4a7)]['call'](this);},Window_ItemList[_0x312955(0x1b8)][_0x312955(0x207)]=function(_0xecaf76){const _0x12ed7b=_0x312955;switch(this[_0x12ed7b(0x13e)]){case _0x12ed7b(0x2a0):return DataManager[_0x12ed7b(0x498)](_0xecaf76);case'RegularItems':return DataManager[_0x12ed7b(0x498)](_0xecaf76)&&_0xecaf76[_0x12ed7b(0x150)]===0x1;case _0x12ed7b(0x38f):return DataManager['isItem'](_0xecaf76)&&_0xecaf76[_0x12ed7b(0x150)]===0x2;case'HiddenItemA':return DataManager[_0x12ed7b(0x498)](_0xecaf76)&&_0xecaf76['itypeId']===0x3;case'HiddenItemB':return DataManager[_0x12ed7b(0x498)](_0xecaf76)&&_0xecaf76[_0x12ed7b(0x150)]===0x4;case'Consumable':return DataManager[_0x12ed7b(0x498)](_0xecaf76)&&_0xecaf76[_0x12ed7b(0x2fb)];case _0x12ed7b(0x281):return DataManager['isItem'](_0xecaf76)&&!_0xecaf76[_0x12ed7b(0x2fb)];case'AlwaysUsable':return DataManager[_0x12ed7b(0x498)](_0xecaf76)&&[0x0][_0x12ed7b(0x207)](_0xecaf76[_0x12ed7b(0x140)]);case'BattleUsable':return DataManager[_0x12ed7b(0x498)](_0xecaf76)&&[0x0,0x1]['includes'](_0xecaf76[_0x12ed7b(0x140)]);case _0x12ed7b(0x1bf):return DataManager[_0x12ed7b(0x498)](_0xecaf76)&&[0x0,0x2][_0x12ed7b(0x207)](_0xecaf76[_0x12ed7b(0x140)]);case'NeverUsable':return DataManager['isItem'](_0xecaf76)&&[0x3][_0x12ed7b(0x207)](_0xecaf76[_0x12ed7b(0x140)]);case _0x12ed7b(0x311):return DataManager['isWeapon'](_0xecaf76);case _0x12ed7b(0x216):return DataManager[_0x12ed7b(0x225)](_0xecaf76);default:if(this[_0x12ed7b(0x13e)]['match'](/WTYPE:(\d+)/i))return DataManager['isWeapon'](_0xecaf76)&&_0xecaf76[_0x12ed7b(0x187)]===Number(RegExp['$1']);else{if(this['_category'][_0x12ed7b(0x2c5)](/WTYPE:(.*)/i)){const _0x255968=$dataSystem[_0x12ed7b(0x2f7)][_0x12ed7b(0x34f)](String(RegExp['$1'])[_0x12ed7b(0x349)]());return DataManager[_0x12ed7b(0xed)](_0xecaf76)&&_0xecaf76[_0x12ed7b(0x187)]===_0x255968;}else{if(this[_0x12ed7b(0x13e)][_0x12ed7b(0x2c5)](/ATYPE:(\d+)/i))return DataManager['isArmor'](_0xecaf76)&&_0xecaf76[_0x12ed7b(0x24e)]===Number(RegExp['$1']);else{if(this[_0x12ed7b(0x13e)][_0x12ed7b(0x2c5)](/ATYPE:(.*)/i)){const _0x2b34bf=$dataSystem[_0x12ed7b(0x14a)]['indexOf'](String(RegExp['$1'])['trim']());return DataManager[_0x12ed7b(0x225)](_0xecaf76)&&_0xecaf76['atypeId']===_0x2b34bf;}else{if(this[_0x12ed7b(0x13e)]['match'](/ETYPE:(\d+)/i))return!!_0xecaf76&&_0xecaf76['etypeId']===Number(RegExp['$1']);else{if(this[_0x12ed7b(0x13e)][_0x12ed7b(0x2c5)](/ETYPE:(.*)/i)){const _0x50fd98=$dataSystem['equipTypes'][_0x12ed7b(0x34f)](String(RegExp['$1'])[_0x12ed7b(0x349)]());return DataManager[_0x12ed7b(0x225)](_0xecaf76)&&_0xecaf76[_0x12ed7b(0x417)]===_0x50fd98;}else{if(this['_category'][_0x12ed7b(0x2c5)](/Category:(.*)/i))return!!_0xecaf76&&_0xecaf76[_0x12ed7b(0x1f2)][_0x12ed7b(0x207)](String(RegExp['$1'])[_0x12ed7b(0x205)]()[_0x12ed7b(0x349)]());}}}}}}}return![];},VisuMZ[_0x312955(0x1af)]['Window_ItemList_makeItemList']=Window_ItemList[_0x312955(0x1b8)]['makeItemList'],Window_ItemList[_0x312955(0x1b8)][_0x312955(0x70)]=function(){const _0x45bed0=_0x312955;VisuMZ[_0x45bed0(0x1af)][_0x45bed0(0x306)][_0x45bed0(0x3b4)](this);if(this['canSortListItemScene']())this['sortListItemScene']();},Window_ItemList[_0x312955(0x1b8)]['canSortListItemScene']=function(){const _0x4593cf=_0x312955,_0xe63598=[_0x4593cf(0x257),'Scene_Item',_0x4593cf(0x410),'Scene_Shop'],_0x2d3cbd=SceneManager['_scene'];return _0xe63598['includes'](_0x2d3cbd[_0x4593cf(0x36a)]['name']);},Window_ItemList[_0x312955(0x1b8)][_0x312955(0x210)]=function(){const _0x48716c=_0x312955,_0x3561a9=Window_ItemCategory['categoryList'],_0x2e8540=_0x3561a9[_0x48716c(0x1fc)](_0x1aa5a6=>_0x1aa5a6[_0x48716c(0x40b)]===this[_0x48716c(0x13e)]);if(!_0x2e8540){VisuMZ['ItemsEquipsCore'][_0x48716c(0x1a3)](this[_0x48716c(0x374)]);return;}const _0x4332e9=((_0x2e8540[_0x48716c(0x13a)]??'ID')||'ID')[_0x48716c(0x205)]()[_0x48716c(0x349)]();_0x4332e9===_0x48716c(0x320)?this[_0x48716c(0x374)]['sort']((_0x521182,_0x5cc847)=>{const _0x22abf5=_0x48716c;if(!!_0x521182&&!!_0x5cc847)return _0x521182[_0x22abf5(0x392)][_0x22abf5(0x135)](_0x5cc847[_0x22abf5(0x392)]);return 0x0;}):VisuMZ[_0x48716c(0x1af)]['SortByIDandPriority'](this['_data']);},VisuMZ[_0x312955(0x1af)][_0x312955(0x1a3)]=function(_0x12d7e8){return _0x12d7e8['sort']((_0x48757a,_0x3ae5d0)=>{const _0x157d8e=_0x44e0;if(!!_0x48757a&&!!_0x3ae5d0){if(_0x48757a[_0x157d8e(0x114)]===undefined)VisuMZ[_0x157d8e(0x1af)][_0x157d8e(0x444)](_0x48757a);if(_0x3ae5d0[_0x157d8e(0x114)]===undefined)VisuMZ[_0x157d8e(0x1af)][_0x157d8e(0x444)](_0x3ae5d0);const _0x390def=_0x48757a[_0x157d8e(0x114)],_0x3a7aaf=_0x3ae5d0['sortPriority'];if(_0x390def!==_0x3a7aaf)return _0x3a7aaf-_0x390def;return _0x48757a['id']-_0x3ae5d0['id'];}return 0x0;}),_0x12d7e8;},Window_ItemList[_0x312955(0x1b8)][_0x312955(0x126)]=function(){return!![];},VisuMZ['ItemsEquipsCore'][_0x312955(0x183)]=Window_ItemList[_0x312955(0x1b8)]['drawItem'],Window_ItemList[_0x312955(0x1b8)]['drawItem']=function(_0x1538b6){const _0x33fa32=_0x312955;VisuMZ[_0x33fa32(0x1af)][_0x33fa32(0x183)][_0x33fa32(0x3b4)](this,_0x1538b6),this['placeItemNewLabel'](_0x1538b6);},Window_ItemList[_0x312955(0x1b8)][_0x312955(0x40a)]=function(_0x3ee057,_0x4bf550,_0x2fb2ea,_0x1d1c73){const _0x42fd95=_0x312955;Window_Selectable['prototype'][_0x42fd95(0x40a)][_0x42fd95(0x3b4)](this,_0x3ee057,_0x4bf550,_0x2fb2ea,_0x1d1c73);},Window_ItemList['prototype']['placeItemNewLabel']=function(_0x596f1d){const _0x5a4ac6=_0x312955,_0x14e7a5=this[_0x5a4ac6(0x186)](_0x596f1d);if(!_0x14e7a5||!this[_0x5a4ac6(0x126)]())return;if(!$gameParty[_0x5a4ac6(0x476)](_0x14e7a5))return;const _0x9183c4=this[_0x5a4ac6(0x224)](_0x596f1d),_0x57531f=_0x9183c4['x'],_0x4ddab4=_0x9183c4['y']+(this[_0x5a4ac6(0x337)]()-0x20)/0x2,_0x2f41b6=VisuMZ[_0x5a4ac6(0x1af)][_0x5a4ac6(0x3a4)][_0x5a4ac6(0x3bc)][_0x5a4ac6(0x2a6)],_0x25d87f=VisuMZ[_0x5a4ac6(0x1af)][_0x5a4ac6(0x3a4)][_0x5a4ac6(0x3bc)][_0x5a4ac6(0x1c1)];this[_0x5a4ac6(0x77)](_0x14e7a5,_0x57531f+_0x2f41b6,_0x4ddab4+_0x25d87f);},Window_ItemList[_0x312955(0x1b8)]['setStatusWindow']=function(_0x3e2b11){this['_statusWindow']=_0x3e2b11,this['callUpdateHelp']();},VisuMZ['ItemsEquipsCore'][_0x312955(0x1ec)]=Window_ItemList['prototype']['updateHelp'],Window_ItemList['prototype'][_0x312955(0x3eb)]=function(){const _0x5ea233=_0x312955;VisuMZ[_0x5ea233(0x1af)]['Window_ItemList_updateHelp'][_0x5ea233(0x3b4)](this),this['_statusWindow']&&this[_0x5ea233(0x80)][_0x5ea233(0x36a)]===Window_ShopStatus&&this['_statusWindow'][_0x5ea233(0xbb)](this[_0x5ea233(0x46c)]());},Window_BattleItem[_0x312955(0x1b8)][_0x312955(0x36e)]=function(_0x26adb0){const _0x29ef40=_0x312955;return BattleManager[_0x29ef40(0x1a5)]()?BattleManager[_0x29ef40(0x1a5)]()[_0x29ef40(0x37f)](_0x26adb0):Window_ItemList['prototype'][_0x29ef40(0x36e)]['call'](this,_0x26adb0);},Window_EventItem[_0x312955(0x1b8)]['isShowNew']=function(){return![];},Window_EquipStatus[_0x312955(0x1b8)][_0x312955(0x2b1)]=function(){const _0x330941=_0x312955;return VisuMZ[_0x330941(0x1af)][_0x330941(0x3a4)][_0x330941(0x412)][_0x330941(0x8b)];},VisuMZ['ItemsEquipsCore'][_0x312955(0x291)]=Window_EquipStatus[_0x312955(0x1b8)]['refresh'],Window_EquipStatus['prototype']['refresh']=function(){const _0x3fc863=_0x312955;this[_0x3fc863(0x41c)](),this[_0x3fc863(0x219)]();if(this[_0x3fc863(0x425)])this['_actor'][_0x3fc863(0x259)]();this[_0x3fc863(0x2b1)]()?this['prepareRefreshItemsEquipsCoreLayout']():VisuMZ[_0x3fc863(0x1af)]['Window_EquipStatus_refresh'][_0x3fc863(0x3b4)](this);},Window_EquipStatus[_0x312955(0x1b8)][_0x312955(0x390)]=function(){const _0x354ad4=_0x312955;this[_0x354ad4(0x164)]['clear']();if(!this['_actor'])return;if(this['isMainMenuCoreMenuImageOptionAvailable']()){const _0x2bf916=ImageManager[_0x354ad4(0xe7)](this[_0x354ad4(0x425)][_0x354ad4(0x43d)]());_0x2bf916[_0x354ad4(0xce)](this[_0x354ad4(0x423)]['bind'](this));}else this[_0x354ad4(0x47d)]();},Window_EquipStatus[_0x312955(0x1b8)][_0x312955(0x3ad)]=function(){const _0xadb0ec=_0x312955;return Imported[_0xadb0ec(0x1bd)]&&this[_0xadb0ec(0x425)][_0xadb0ec(0x43d)]()!==''&&VisuMZ[_0xadb0ec(0x1af)][_0xadb0ec(0x3a4)][_0xadb0ec(0x412)]['MenuPortraits'];},Window_EquipStatus[_0x312955(0x1b8)]['onMenuImageLoad']=function(){const _0x7a5019=_0x312955;VisuMZ[_0x7a5019(0x1af)][_0x7a5019(0x3a4)][_0x7a5019(0x412)][_0x7a5019(0x299)][_0x7a5019(0x3b4)](this),this[_0x7a5019(0x1c2)]();},Window_EquipStatus[_0x312955(0x1b8)]['refreshItemsEquipsCoreNoMenuImage']=function(){const _0xeda04f=_0x312955;VisuMZ[_0xeda04f(0x1af)][_0xeda04f(0x3a4)][_0xeda04f(0x412)]['DrawFaceJS'][_0xeda04f(0x3b4)](this),this[_0xeda04f(0x1c2)]();},Window_EquipStatus['prototype'][_0x312955(0x1c2)]=function(){const _0x52b68a=_0x312955;this[_0x52b68a(0x219)](),VisuMZ[_0x52b68a(0x1af)]['Settings'][_0x52b68a(0x412)]['DrawParamJS'][_0x52b68a(0x3b4)](this);},Window_EquipStatus[_0x312955(0x1b8)]['drawItemActorMenuImage']=function(_0x3923ae,_0x5eda5d,_0x474a68,_0x16fff8,_0x384a26){const _0x428d35=_0x312955,_0xc85d74=ImageManager[_0x428d35(0xe7)](_0x3923ae[_0x428d35(0x43d)]()),_0x4e923c=this[_0x428d35(0x1ee)]-_0xc85d74[_0x428d35(0x250)];_0x5eda5d+=_0x4e923c/0x2;if(_0x4e923c<0x0)_0x16fff8-=_0x4e923c;Window_StatusBase[_0x428d35(0x1b8)][_0x428d35(0x13c)]['call'](this,_0x3923ae,_0x5eda5d,_0x474a68,_0x16fff8,_0x384a26);},Window_EquipStatus[_0x312955(0x1b8)][_0x312955(0x2af)]=function(){const _0x159389=_0x312955;return Imported[_0x159389(0x2f8)]?VisuMZ[_0x159389(0x1e5)][_0x159389(0x3a4)][_0x159389(0x1e0)][_0x159389(0xcf)]:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_EquipStatus['prototype'][_0x312955(0xd1)]=function(){const _0x150896=_0x312955;return VisuMZ['ItemsEquipsCore'][_0x150896(0x3a4)]['EquipScene']['ParamValueFontSize'];},Window_EquipStatus[_0x312955(0x1b8)][_0x312955(0x184)]=function(){const _0x4f0c82=_0x312955;return Imported['VisuMZ_0_CoreEngine']&&VisuMZ[_0x4f0c82(0x1e5)]['Settings']['Param'][_0x4f0c82(0x202)];},Window_EquipStatus[_0x312955(0x1b8)][_0x312955(0x239)]=function(_0x32a8ff,_0x40b224,_0x10f5f9,_0x1e35bc){const _0x2005cb=_0x312955,_0xdf523=this[_0x2005cb(0x321)]();Imported['VisuMZ_0_CoreEngine']?this[_0x2005cb(0x346)](_0x40b224+_0xdf523,_0x10f5f9,_0x1e35bc,_0x32a8ff,![]):(this[_0x2005cb(0xd4)](ColorManager[_0x2005cb(0x3c5)]()),this['drawText'](TextManager[_0x2005cb(0x2ac)](_0x32a8ff),_0x40b224+_0xdf523,_0x10f5f9,_0x1e35bc));},Window_EquipStatus[_0x312955(0x1b8)][_0x312955(0x361)]=function(_0x202141,_0x196f90,_0xb66040,_0x5ce95b){const _0x1e2cd0=_0x312955,_0x40c5b1=this['itemPadding']();let _0x425763=0x0;Imported[_0x1e2cd0(0x2f8)]?_0x425763=this[_0x1e2cd0(0x425)][_0x1e2cd0(0x39f)](_0x202141,!![]):_0x425763=this[_0x1e2cd0(0x425)][_0x1e2cd0(0x2ac)](_0x202141);const _0x24f17f=_0x425763;this[_0x1e2cd0(0x292)](_0x425763,_0x196f90,_0xb66040,_0x5ce95b-_0x40c5b1,_0x1e2cd0(0x420));},Window_EquipStatus['prototype'][_0x312955(0x478)]=function(_0x216200,_0x1c0bca,_0x45f33f,_0x4f94c7){const _0x4e69c6=_0x312955,_0x35be8c=this[_0x4e69c6(0x321)]();let _0x4ee3f9=0x0,_0xb9a999=0x0,_0x429ea5='';if(this[_0x4e69c6(0x27f)]){Imported['VisuMZ_0_CoreEngine']?(_0x4ee3f9=this[_0x4e69c6(0x425)][_0x4e69c6(0x39f)](_0x216200,![]),_0xb9a999=this['_tempActor'][_0x4e69c6(0x39f)](_0x216200,![]),_0x429ea5=this[_0x4e69c6(0x27f)][_0x4e69c6(0x39f)](_0x216200,!![])):(_0x4ee3f9=this[_0x4e69c6(0x425)][_0x4e69c6(0x2ac)](_0x216200),_0xb9a999=this[_0x4e69c6(0x27f)]['param'](_0x216200),_0x429ea5=this['_tempActor'][_0x4e69c6(0x2ac)](_0x216200));const _0x2bf004=_0x4ee3f9,_0x3c4cd9=_0xb9a999;diffValue=_0x3c4cd9-_0x2bf004,this[_0x4e69c6(0xd4)](ColorManager[_0x4e69c6(0x393)](diffValue)),this[_0x4e69c6(0x292)](_0x429ea5,_0x1c0bca,_0x45f33f,_0x4f94c7-_0x35be8c,_0x4e69c6(0x420));}},Window_EquipStatus[_0x312955(0x1b8)][_0x312955(0xca)]=function(_0x9434d5,_0x4ac743,_0x43d9a0,_0x1bee51){const _0x125375=_0x312955,_0x272b7e=this[_0x125375(0x321)]();let _0x2d98bf=0x0,_0x53863d=0x0,_0x26f5f1=![];if(this[_0x125375(0x27f)]){Imported['VisuMZ_0_CoreEngine']?(_0x2d98bf=this['_actor']['paramValueByName'](_0x9434d5,![]),_0x53863d=this[_0x125375(0x27f)]['paramValueByName'](_0x9434d5,![]),_0x26f5f1=String(this[_0x125375(0x425)][_0x125375(0x39f)](_0x9434d5,!![]))[_0x125375(0x2c5)](/([%％])/i)):(_0x2d98bf=this[_0x125375(0x425)][_0x125375(0x2ac)](_0x9434d5),_0x53863d=this[_0x125375(0x27f)][_0x125375(0x2ac)](_0x9434d5),_0x26f5f1=_0x2d98bf%0x1!==0x0||_0x53863d%0x1!==0x0);const _0x1d9e84=_0x2d98bf,_0xf4af2b=_0x53863d,_0x2f272b=_0xf4af2b-_0x1d9e84;let _0x2cac51=_0x2f272b;if(_0x26f5f1)_0x2cac51=Math[_0x125375(0x288)](_0x2f272b*0x64)+'%';_0x2f272b!==0x0&&(this[_0x125375(0xd4)](ColorManager['paramchangeTextColor'](_0x2f272b)),_0x2cac51=(_0x2f272b>0x0?_0x125375(0x6f):_0x125375(0x2ee))[_0x125375(0x3d3)](_0x2cac51),this[_0x125375(0x292)](_0x2cac51,_0x4ac743+_0x272b7e,_0x43d9a0,_0x1bee51,_0x125375(0x279)));}},Window_EquipStatus[_0x312955(0x1b8)][_0x312955(0x3a7)]=function(_0x38f23a,_0x201246,_0x3103f1,_0x37d5bc,_0x25e1f0){const _0x4d2344=_0x312955;if(VisuMZ[_0x4d2344(0x1af)][_0x4d2344(0x3a4)][_0x4d2344(0x412)]['DrawBackRect']===![])return;_0x25e1f0=Math[_0x4d2344(0x76)](_0x25e1f0||0x1,0x1);while(_0x25e1f0--){_0x37d5bc=_0x37d5bc||this[_0x4d2344(0x337)](),this[_0x4d2344(0x164)][_0x4d2344(0x31a)]=0xa0;const _0x4391b2=ColorManager['getItemsEquipsCoreBackColor2']();this[_0x4d2344(0x164)]['fillRect'](_0x38f23a+0x1,_0x201246+0x1,_0x3103f1-0x2,_0x37d5bc-0x2,_0x4391b2),this['contents'][_0x4d2344(0x31a)]=0xff;}},ColorManager[_0x312955(0x2ae)]=function(){const _0x385027=_0x312955,_0x1b79f2=VisuMZ['ItemsEquipsCore'][_0x385027(0x3a4)][_0x385027(0x412)];let _0x11ed6a=_0x1b79f2[_0x385027(0x388)]!==undefined?_0x1b79f2[_0x385027(0x388)]:0x13;return ColorManager[_0x385027(0x341)](_0x11ed6a);},VisuMZ['ItemsEquipsCore'][_0x312955(0x271)]=Window_EquipCommand[_0x312955(0x1b8)]['initialize'],Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x99)]=function(_0x1822d9){const _0x33fd20=_0x312955;VisuMZ[_0x33fd20(0x1af)][_0x33fd20(0x271)][_0x33fd20(0x3b4)](this,_0x1822d9),this[_0x33fd20(0x353)](_0x1822d9);},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x353)]=function(_0x597bdf){const _0x4c7cd5=_0x312955,_0x1c5383=new Rectangle(0x0,0x0,_0x597bdf[_0x4c7cd5(0x250)],_0x597bdf[_0x4c7cd5(0x98)]);this['_commandNameWindow']=new Window_Base(_0x1c5383),this[_0x4c7cd5(0x78)]['opacity']=0x0,this[_0x4c7cd5(0x68)](this[_0x4c7cd5(0x78)]),this[_0x4c7cd5(0x31e)]();},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x229)]=function(){const _0xfaa04f=_0x312955;Window_HorzCommand[_0xfaa04f(0x1b8)][_0xfaa04f(0x229)][_0xfaa04f(0x3b4)](this);if(this['_commandNameWindow'])this['updateCommandNameWindow']();},Window_EquipCommand['prototype'][_0x312955(0x31e)]=function(){const _0x16cef1=_0x312955,_0x30395a=this[_0x16cef1(0x78)];_0x30395a[_0x16cef1(0x164)][_0x16cef1(0x1b4)]();const _0x262e2c=this[_0x16cef1(0x1e8)](this[_0x16cef1(0x18c)]());if(_0x262e2c===_0x16cef1(0x232)){const _0x331514=this[_0x16cef1(0x224)](this['index']());let _0x3afd0b=this[_0x16cef1(0x17d)](this['index']());_0x3afd0b=_0x3afd0b[_0x16cef1(0x43e)](/\\I\[(\d+)\]/gi,''),_0x30395a[_0x16cef1(0x219)](),this[_0x16cef1(0x430)](_0x3afd0b,_0x331514),this[_0x16cef1(0x372)](_0x3afd0b,_0x331514),this[_0x16cef1(0x21b)](_0x3afd0b,_0x331514);}},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x430)]=function(_0x3eceaa,_0x4841e3){},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x372)]=function(_0x677ebf,_0x22c764){const _0x14fcf1=_0x312955,_0x4ebd28=this[_0x14fcf1(0x78)];_0x4ebd28[_0x14fcf1(0x292)](_0x677ebf,0x0,_0x22c764['y'],_0x4ebd28['innerWidth'],_0x14fcf1(0x2e7));},Window_EquipCommand['prototype']['commandNameWindowCenter']=function(_0x27dfaf,_0x1e43da){const _0x591ab6=_0x312955,_0x1c9b79=this[_0x591ab6(0x78)],_0x3e83ca=$gameSystem['windowPadding'](),_0x25f896=_0x1e43da['x']+Math[_0x591ab6(0x433)](_0x1e43da[_0x591ab6(0x250)]/0x2)+_0x3e83ca;_0x1c9b79['x']=_0x1c9b79[_0x591ab6(0x250)]/-0x2+_0x25f896,_0x1c9b79['y']=Math['floor'](_0x1e43da[_0x591ab6(0x98)]/0x2);},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x18d)]=function(){const _0x534cf7=_0x312955;return Imported['VisuMZ_0_CoreEngine']&&Window_HorzCommand[_0x534cf7(0x1b8)][_0x534cf7(0x18d)][_0x534cf7(0x3b4)](this);},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x143)]=function(){const _0x1f2286=_0x312955;if(this[_0x1f2286(0x437)]()===_0x1f2286(0x3ed))Window_HorzCommand[_0x1f2286(0x1b8)]['playOkSound']['call'](this);},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x44f)]=function(){const _0x59ae09=_0x312955;!this[_0x59ae09(0x206)]()&&Window_HorzCommand[_0x59ae09(0x1b8)][_0x59ae09(0x44f)][_0x59ae09(0x3b4)](this);},Window_EquipCommand['prototype'][_0x312955(0x206)]=function(){const _0x372220=_0x312955;if(!this[_0x372220(0x2cf)]())return![];if(SceneManager['_scene'][_0x372220(0x36a)]!==Scene_Equip)return![];return Input[_0x372220(0x1fd)](_0x372220(0xdf))&&this[_0x372220(0x334)](),![];},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x334)]=function(){const _0x40da09=_0x312955;this[_0x40da09(0xa7)](),SceneManager[_0x40da09(0x44a)][_0x40da09(0x97)](),SceneManager[_0x40da09(0x44a)][_0x40da09(0x267)]['smoothSelect'](-0x1);},Window_EquipCommand[_0x312955(0x1b8)]['maxCols']=function(){const _0x445892=_0x312955;return this[_0x445892(0x2a2)]?this[_0x445892(0x2a2)][_0x445892(0x2e4)]:0x3;},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x376)]=function(){const _0x5b0705=_0x312955;if(this['isOpen']()&&this[_0x5b0705(0x11c)]&&SceneManager['_scene']['constructor']===Scene_Equip){if(this['isHoverEnabled']()&&TouchInput[_0x5b0705(0x163)]())this[_0x5b0705(0x1f9)](![]);else TouchInput[_0x5b0705(0x1fd)]()&&this['onTouchSelectModernControls'](!![]);TouchInput[_0x5b0705(0x41b)]()&&this[_0x5b0705(0x12c)]();}},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x1f9)]=function(_0x46542b){const _0x29b4dd=_0x312955;this[_0x29b4dd(0xae)]=![];const _0x15892f=this['index'](),_0x3110f=this[_0x29b4dd(0x2fd)](),_0x224c29=SceneManager['_scene'][_0x29b4dd(0x267)];if(_0x224c29[_0x29b4dd(0x34b)]()&&_0x224c29[_0x29b4dd(0x11c)]){if(_0x3110f>=0x0)_0x3110f===this[_0x29b4dd(0x18c)]()&&(this['_doubleTouch']=!![]),this[_0x29b4dd(0x21d)](),this[_0x29b4dd(0x25e)](_0x3110f);else _0x224c29['hitIndex']()>=0x0&&(this['deactivate'](),this[_0x29b4dd(0x227)]());}_0x46542b&&this[_0x29b4dd(0x18c)]()!==_0x15892f&&this[_0x29b4dd(0xa7)]();},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x368)]=function(){const _0x3947cb=_0x312955;this[_0x3947cb(0x371)](),this['addOptimizeCommand'](),this[_0x3947cb(0x486)]();},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x259)]=function(){const _0x28e051=_0x312955;Window_HorzCommand['prototype'][_0x28e051(0x259)][_0x28e051(0x3b4)](this),this[_0x28e051(0x35d)]();},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x371)]=function(){const _0x2f7090=_0x312955;if(!this[_0x2f7090(0x37e)]())return;const _0x4cdbc6=this[_0x2f7090(0x18f)](),_0x2b2eb3=VisuMZ[_0x2f7090(0x1af)][_0x2f7090(0x3a4)][_0x2f7090(0x412)][_0x2f7090(0xf0)],_0x597809=_0x4cdbc6==='text'?TextManager[_0x2f7090(0x133)]:_0x2f7090(0x283)[_0x2f7090(0x3d3)](_0x2b2eb3,TextManager['equip2']),_0xfa32ab=this['isEquipCommandEnabled']();this[_0x2f7090(0x3b8)](_0x597809,'equip',_0xfa32ab);},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x37e)]=function(){const _0x367306=_0x312955;return!this[_0x367306(0x18d)]();},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0xfe)]=function(){return!![];},Window_EquipCommand['prototype'][_0x312955(0x93)]=function(){const _0x31e2e6=_0x312955;if(!this[_0x31e2e6(0x204)]())return;const _0xf34b26=this[_0x31e2e6(0x18f)](),_0x3016aa=VisuMZ[_0x31e2e6(0x1af)][_0x31e2e6(0x3a4)][_0x31e2e6(0x412)]['CmdIconOptimize'],_0x237f37=_0xf34b26===_0x31e2e6(0x28a)?TextManager['optimize']:_0x31e2e6(0x283)[_0x31e2e6(0x3d3)](_0x3016aa,TextManager[_0x31e2e6(0x422)]),_0x492ac1=this['isOptimizeCommandEnabled']();this['addCommand'](_0x237f37,_0x31e2e6(0x422),_0x492ac1);},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x204)]=function(){const _0x39213a=_0x312955;return VisuMZ['ItemsEquipsCore']['Settings'][_0x39213a(0x412)][_0x39213a(0xb5)];},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x3ee)]=function(){return!![];},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x486)]=function(){const _0x80ce24=_0x312955;if(!this[_0x80ce24(0xef)]())return;const _0x1fb12d=this[_0x80ce24(0x18f)](),_0x4e399e=VisuMZ['ItemsEquipsCore']['Settings']['EquipScene'][_0x80ce24(0x2bb)],_0x20dd55=_0x1fb12d===_0x80ce24(0x28a)?TextManager[_0x80ce24(0x1b4)]:_0x80ce24(0x283)[_0x80ce24(0x3d3)](_0x4e399e,TextManager[_0x80ce24(0x1b4)]),_0x4dfd2b=this[_0x80ce24(0x4b6)]();this['addCommand'](_0x20dd55,_0x80ce24(0x1b4),_0x4dfd2b);},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0xef)]=function(){const _0x534fa7=_0x312955;return VisuMZ[_0x534fa7(0x1af)][_0x534fa7(0x3a4)][_0x534fa7(0x412)][_0x534fa7(0x3f1)];},Window_EquipCommand[_0x312955(0x1b8)]['isClearCommandEnabled']=function(){return!![];},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0xf8)]=function(){const _0xd6a08=_0x312955;return VisuMZ[_0xd6a08(0x1af)][_0xd6a08(0x3a4)]['EquipScene']['CmdTextAlign'];},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x487)]=function(_0x3bce59){const _0x5a58c8=_0x312955,_0x241cab=this[_0x5a58c8(0x1e8)](_0x3bce59);if(_0x241cab===_0x5a58c8(0x134))this[_0x5a58c8(0x1e1)](_0x3bce59);else _0x241cab==='icon'?this['drawItemStyleIcon'](_0x3bce59):Window_HorzCommand[_0x5a58c8(0x1b8)]['drawItem'][_0x5a58c8(0x3b4)](this,_0x3bce59);},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x18f)]=function(){const _0x52163c=_0x312955;return VisuMZ[_0x52163c(0x1af)][_0x52163c(0x3a4)][_0x52163c(0x412)]['CmdStyle'];},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x1e8)]=function(_0x3e3d73){const _0x472810=_0x312955;if(_0x3e3d73<0x0)return _0x472810(0x28a);const _0x4e6565=this[_0x472810(0x18f)]();if(_0x4e6565!==_0x472810(0x3fd))return _0x4e6565;else{if(this[_0x472810(0x116)]()>0x0){const _0x4a7002=this[_0x472810(0x17d)](_0x3e3d73);if(_0x4a7002[_0x472810(0x2c5)](/\\I\[(\d+)\]/i)){const _0x1ff0d0=this[_0x472810(0x224)](_0x3e3d73),_0x172bce=this[_0x472810(0x285)](_0x4a7002)[_0x472810(0x250)];return _0x172bce<=_0x1ff0d0[_0x472810(0x250)]?_0x472810(0x134):_0x472810(0x232);}}}return _0x472810(0x28a);},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x1e1)]=function(_0x1926e5){const _0x40c214=_0x312955,_0x544cbf=this[_0x40c214(0x224)](_0x1926e5),_0x51267b=this['commandName'](_0x1926e5),_0x274486=this[_0x40c214(0x285)](_0x51267b)[_0x40c214(0x250)];this[_0x40c214(0x2a3)](this[_0x40c214(0x40e)](_0x1926e5));const _0x288e3f=this['itemTextAlign']();if(_0x288e3f==='right')this[_0x40c214(0x355)](_0x51267b,_0x544cbf['x']+_0x544cbf[_0x40c214(0x250)]-_0x274486,_0x544cbf['y'],_0x274486);else{if(_0x288e3f===_0x40c214(0x2e7)){const _0x173d4a=_0x544cbf['x']+Math[_0x40c214(0x433)]((_0x544cbf[_0x40c214(0x250)]-_0x274486)/0x2);this[_0x40c214(0x355)](_0x51267b,_0x173d4a,_0x544cbf['y'],_0x274486);}else this[_0x40c214(0x355)](_0x51267b,_0x544cbf['x'],_0x544cbf['y'],_0x274486);}},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x4bb)]=function(_0x4772e7){const _0x534b5b=_0x312955;this['commandName'](_0x4772e7)[_0x534b5b(0x2c5)](/\\I\[(\d+)\]/i);const _0x179e21=Number(RegExp['$1'])||0x0,_0x47a8da=this[_0x534b5b(0x224)](_0x4772e7),_0x133fde=_0x47a8da['x']+Math[_0x534b5b(0x433)]((_0x47a8da[_0x534b5b(0x250)]-ImageManager[_0x534b5b(0x340)])/0x2),_0x111d7a=_0x47a8da['y']+(_0x47a8da[_0x534b5b(0x98)]-ImageManager[_0x534b5b(0x2e5)])/0x2;this[_0x534b5b(0x6e)](_0x179e21,_0x133fde,_0x111d7a);},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x1a5)]=function(){const _0x3cebd2=_0x312955,_0x195e49=SceneManager[_0x3cebd2(0x44a)];if(_0x195e49&&_0x195e49['user'])return _0x195e49[_0x3cebd2(0x391)]();return null;},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x3eb)]=function(){const _0x44ce36=_0x312955;Window_Command[_0x44ce36(0x1b8)][_0x44ce36(0x3eb)][_0x44ce36(0x3b4)](this),this[_0x44ce36(0x6b)][_0x44ce36(0x85)](this[_0x44ce36(0x357)]());},Window_EquipCommand[_0x312955(0x1b8)][_0x312955(0x357)]=function(){const _0xc759b5=_0x312955,_0x3231ff=this['currentSymbol']();switch(_0x3231ff){case _0xc759b5(0x3ed):return TextManager[_0xc759b5(0x406)][_0xc759b5(0xc4)]['equip'];case _0xc759b5(0x422):return TextManager[_0xc759b5(0x406)]['helpDesc'][_0xc759b5(0x422)];case _0xc759b5(0x1b4):return TextManager['ITEMS_EQUIPS_CORE'][_0xc759b5(0xc4)][_0xc759b5(0x1b4)];default:return'';}},Window_EquipSlot[_0x312955(0x1b8)][_0x312955(0x18d)]=function(){const _0x1e2bb9=_0x312955;return Imported['VisuMZ_0_CoreEngine']&&Window_HorzCommand[_0x1e2bb9(0x1b8)][_0x1e2bb9(0x18d)]['call'](this);},Window_EquipSlot['prototype'][_0x312955(0x21d)]=function(){const _0x25c325=_0x312955;Window_StatusBase[_0x25c325(0x1b8)][_0x25c325(0x21d)][_0x25c325(0x3b4)](this),this[_0x25c325(0x229)]();},Window_EquipSlot[_0x312955(0x1b8)][_0x312955(0x387)]=function(){const _0x51dbe2=_0x312955;Window_StatusBase[_0x51dbe2(0x1b8)][_0x51dbe2(0x387)][_0x51dbe2(0x3b4)](this),this['checkShiftRemoveShortcut']();},Window_EquipSlot[_0x312955(0x1b8)][_0x312955(0x67)]=function(){const _0x1790e0=_0x312955;if(!this['isShiftRemoveShortcutEnabled']())return;if(Input[_0x1790e0(0x1fd)]('shift')&&this['item']()){const _0x18f72f=SceneManager[_0x1790e0(0x44a)][_0x1790e0(0x425)];_0x18f72f&&(this[_0x1790e0(0x332)](this[_0x1790e0(0x18c)]())?(this[_0x1790e0(0x37a)](),this['updateHelp']()):this[_0x1790e0(0x445)]());}},Window_EquipSlot['prototype']['canShiftRemoveEquipment']=function(_0x320184){const _0x3e06bd=_0x312955,_0x599dae=SceneManager[_0x3e06bd(0x44a)][_0x3e06bd(0x425)];if(!_0x599dae)return;if(!_0x599dae[_0x3e06bd(0x439)](_0x320184))return![];const _0x4da478=_0x599dae['equipSlots']()[_0x320184];if(_0x599dae[_0x3e06bd(0x32a)]()[_0x3e06bd(0x207)](_0x4da478))return![];return!![];;},Window_EquipSlot[_0x312955(0x1b8)][_0x312955(0x37a)]=function(){const _0x4c9fc3=_0x312955;SoundManager['playEquip']();const _0x2fb1a5=SceneManager['_scene']['_actor'];_0x2fb1a5[_0x4c9fc3(0x211)](this[_0x4c9fc3(0x18c)](),null),this['refresh'](),this[_0x4c9fc3(0x24f)][_0x4c9fc3(0x259)](),this[_0x4c9fc3(0x229)]();const _0x2cea66=SceneManager[_0x4c9fc3(0x44a)]['_statusWindow'];if(_0x2cea66)_0x2cea66[_0x4c9fc3(0x259)]();},Window_EquipSlot[_0x312955(0x1b8)]['isShiftRemoveShortcutEnabled']=function(){const _0x8c7ca1=_0x312955;if(!this[_0x8c7ca1(0x112)])return![];if(!VisuMZ[_0x8c7ca1(0x1af)][_0x8c7ca1(0x3a4)]['EquipScene']['ShiftShortcutKey'])return![];return!![];},Window_EquipSlot[_0x312955(0x1b8)]['processCursorMoveModernControls']=function(){const _0x495b84=_0x312955;!this[_0x495b84(0x206)]()&&Window_StatusBase[_0x495b84(0x1b8)][_0x495b84(0x44f)]['call'](this);},Window_EquipSlot[_0x312955(0x1b8)][_0x312955(0x206)]=function(){const _0x410058=_0x312955;if(!this[_0x410058(0x2cf)]())return![];if(SceneManager[_0x410058(0x44a)]['constructor']!==Scene_Equip)return![];if(this['allowCommandWindowCursorUp']())return this[_0x410058(0xa7)](),Input[_0x410058(0x1b4)](),SceneManager[_0x410058(0x44a)][_0x410058(0x43f)](),![];else{if(Input[_0x410058(0x294)](_0x410058(0xdf))){const _0x15f61b=this[_0x410058(0x18c)]();return Input[_0x410058(0x36c)](_0x410058(0xc0))?this[_0x410058(0x29d)]():this[_0x410058(0x2ef)](Input[_0x410058(0x1fd)](_0x410058(0xdf))),this[_0x410058(0x18c)]()!==_0x15f61b&&this[_0x410058(0xa7)](),!![];}else{if(this[_0x410058(0x26e)]()&&Input[_0x410058(0x1fd)](_0x410058(0xc0)))return!![];}}return![];},Window_EquipSlot[_0x312955(0x1b8)][_0x312955(0x4a9)]=function(){const _0x3acef2=_0x312955;if(this['index']()!==0x0)return![];const _0xbcd75b=VisuMZ['ItemsEquipsCore'][_0x3acef2(0x3a4)][_0x3acef2(0x412)];if(!_0xbcd75b[_0x3acef2(0xb5)]&&!_0xbcd75b[_0x3acef2(0x3f1)])return![];return Input[_0x3acef2(0x1fd)]('up');},Window_EquipSlot[_0x312955(0x1b8)][_0x312955(0x26e)]=function(){const _0x23575d=_0x312955;return VisuMZ[_0x23575d(0x1af)][_0x23575d(0x3a4)][_0x23575d(0x412)][_0x23575d(0x1e4)];},Window_EquipSlot[_0x312955(0x1b8)][_0x312955(0x376)]=function(){const _0xe437dd=_0x312955;if(this[_0xe437dd(0x34b)]()&&this[_0xe437dd(0x11c)]&&SceneManager[_0xe437dd(0x44a)][_0xe437dd(0x36a)]===Scene_Equip){if(this[_0xe437dd(0x354)]()&&TouchInput[_0xe437dd(0x163)]())this[_0xe437dd(0x1f9)](![]);else TouchInput[_0xe437dd(0x1fd)]()&&this['onTouchSelectModernControls'](!![]);if(TouchInput[_0xe437dd(0x41b)]())this[_0xe437dd(0x12c)]();else{if(TouchInput[_0xe437dd(0x2ec)]()){const _0x5c5f3a=VisuMZ[_0xe437dd(0x1af)]['Settings'][_0xe437dd(0x412)];this[_0xe437dd(0x18d)]()&&this[_0xe437dd(0x112)]&&!_0x5c5f3a[_0xe437dd(0xb5)]&&!_0x5c5f3a[_0xe437dd(0x3f1)]?(SoundManager['playCancel'](),SceneManager[_0xe437dd(0xde)]()):this[_0xe437dd(0x284)]();}}}},Window_EquipSlot['prototype'][_0x312955(0x1f9)]=function(_0xce7631){const _0x293a94=_0x312955;this[_0x293a94(0xae)]=![];const _0x3455e6=this[_0x293a94(0x18c)](),_0x21ca91=this[_0x293a94(0x2fd)](),_0x2cf4b1=SceneManager[_0x293a94(0x44a)][_0x293a94(0x1ab)];if(_0x2cf4b1[_0x293a94(0x34b)]()&&_0x2cf4b1[_0x293a94(0x11c)]){if(_0x21ca91>=0x0)_0x21ca91===this[_0x293a94(0x18c)]()&&(this[_0x293a94(0xae)]=!![]),this[_0x293a94(0x21d)](),this[_0x293a94(0x25e)](_0x21ca91),_0x2cf4b1[_0x293a94(0x1ae)]();else _0x2cf4b1[_0x293a94(0x2fd)]()>=0x0&&(this[_0x293a94(0x1ae)](),this['deselect'](),_0x2cf4b1[_0x293a94(0x21d)]());}_0xce7631&&this[_0x293a94(0x18c)]()!==_0x3455e6&&this['playCursorSound']();},Window_EquipSlot[_0x312955(0x1b8)][_0x312955(0x2dc)]=function(){const _0x42f61c=_0x312955;return this[_0x42f61c(0x18c)]();},VisuMZ[_0x312955(0x1af)][_0x312955(0x2a4)]=Window_EquipSlot[_0x312955(0x1b8)][_0x312955(0x36e)],Window_EquipSlot['prototype'][_0x312955(0x36e)]=function(_0x3d55bb){const _0x4ed031=_0x312955;if(this[_0x4ed031(0x116)]()<=0x0)return![];return VisuMZ['ItemsEquipsCore'][_0x4ed031(0x2a4)][_0x4ed031(0x3b4)](this,_0x3d55bb);},VisuMZ[_0x312955(0x1af)][_0x312955(0xc2)]=Window_EquipItem[_0x312955(0x1b8)][_0x312955(0x207)],Window_EquipItem[_0x312955(0x1b8)][_0x312955(0x207)]=function(_0x2605f5){const _0xc64d4f=_0x312955;if(_0x2605f5===null&&this[_0xc64d4f(0x32a)]()[_0xc64d4f(0x207)](this[_0xc64d4f(0x417)]()))return![];else{$gameTemp[_0xc64d4f(0x309)]=!![];let _0xb15cac=VisuMZ[_0xc64d4f(0x1af)][_0xc64d4f(0xc2)][_0xc64d4f(0x3b4)](this,_0x2605f5);if(!_0xb15cac&&_0x2605f5&&DataManager[_0xc64d4f(0x225)](_0x2605f5)){const _0xb28bb6=_0x2605f5[_0xc64d4f(0x24e)]||0x0;if(this[_0xc64d4f(0x425)]&&this[_0xc64d4f(0x425)][_0xc64d4f(0x33b)](_0xb28bb6)){const _0x4ffa35=DataManager['getEtypeIDs'](_0x2605f5);_0x4ffa35[_0xc64d4f(0x207)](this[_0xc64d4f(0x417)]())&&(_0xb15cac=!![]);}}return $gameTemp[_0xc64d4f(0x309)]=undefined,_0xb15cac;}},VisuMZ['ItemsEquipsCore'][_0x312955(0x314)]=Window_EquipItem[_0x312955(0x1b8)][_0x312955(0x36e)],Window_EquipItem[_0x312955(0x1b8)][_0x312955(0x36e)]=function(_0x18089c){const _0x3f9538=_0x312955;if(_0x18089c&&this[_0x3f9538(0x425)]){if(this[_0x3f9538(0x302)](_0x18089c))return![];if(this[_0x3f9538(0x4b7)](_0x18089c))return![];if(this['isSoleArmorType'](_0x18089c))return![];if(!this['_actor'][_0x3f9538(0x319)](_0x18089c))return![];}if(!_0x18089c)return!this[_0x3f9538(0x32a)]()['includes'](this[_0x3f9538(0x417)]());return VisuMZ[_0x3f9538(0x1af)][_0x3f9538(0x314)][_0x3f9538(0x3b4)](this,_0x18089c);},Window_EquipItem[_0x312955(0x1b8)]['itemHasEquipLimit']=function(_0x2bafef){const _0x3f3728=_0x312955,_0x59299d=_0x2bafef[_0x3f3728(0x1ba)];if(_0x59299d[_0x3f3728(0x2c5)](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){const _0x6a5b49=Number(RegExp['$1'])||0x1;let _0x583b3f=0x0;const _0x2a7ff9=this['_actor'][_0x3f3728(0x43b)](),_0x1bd877=SceneManager['_scene'][_0x3f3728(0x267)]['equipSlotIndex']();_0x2a7ff9[_0x1bd877]=null;for(const _0x5dc8c0 of _0x2a7ff9){if(!_0x5dc8c0)continue;if(DataManager[_0x3f3728(0xed)](_0x2bafef)===DataManager[_0x3f3728(0xed)](_0x5dc8c0)){if(_0x2bafef['id']===_0x5dc8c0['id'])_0x583b3f+=0x1;}}return _0x583b3f>=_0x6a5b49;}else return![];},Window_EquipItem[_0x312955(0x1b8)][_0x312955(0x4b7)]=function(_0x3eb735){const _0x42e952=_0x312955;if(!DataManager[_0x42e952(0xed)](_0x3eb735))return![];const _0x33e807=/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i;let _0x238959=0x0;const _0x239417=this[_0x42e952(0x425)][_0x42e952(0x43b)](),_0x1470c1=SceneManager[_0x42e952(0x44a)]['_slotWindow']['equipSlotIndex']();_0x239417[_0x1470c1]=null;for(const _0x1c89f2 of _0x239417){if(!_0x1c89f2)continue;if(!DataManager[_0x42e952(0xed)](_0x1c89f2))continue;if(_0x3eb735['wtypeId']===_0x1c89f2[_0x42e952(0x187)]){_0x238959+=0x1;if(_0x3eb735['note'][_0x42e952(0x2c5)](_0x33e807)){const _0xbf20df=Number(RegExp['$1'])||0x1;if(_0x238959>=_0xbf20df)return!![];}if(_0x1c89f2[_0x42e952(0x1ba)][_0x42e952(0x2c5)](_0x33e807)){const _0x5ebf06=Number(RegExp['$1'])||0x1;if(_0x238959>=_0x5ebf06)return!![];}}}return![];},Window_EquipItem['prototype'][_0x312955(0x2c6)]=function(_0x2d9ab6){const _0x207e88=_0x312955;if(!DataManager[_0x207e88(0x225)](_0x2d9ab6))return![];const _0x5968a8=/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i;let _0x46ae46=0x0;const _0xef304f=this[_0x207e88(0x425)][_0x207e88(0x43b)](),_0x39efd6=SceneManager['_scene'][_0x207e88(0x267)][_0x207e88(0x2dc)]();_0xef304f[_0x39efd6]=null;for(const _0x177683 of _0xef304f){if(!_0x177683)continue;if(!DataManager['isArmor'](_0x177683))continue;if(_0x2d9ab6[_0x207e88(0x24e)]===_0x177683[_0x207e88(0x24e)]){_0x46ae46+=0x1;if(_0x2d9ab6['note']['match'](_0x5968a8)){const _0x4b8edf=Number(RegExp['$1'])||0x1;if(_0x46ae46>=_0x4b8edf)return!![];}if(_0x177683['note']['match'](_0x5968a8)){const _0x11ffcd=Number(RegExp['$1'])||0x1;if(_0x46ae46>=_0x11ffcd)return!![];}}}return![];},Window_EquipItem[_0x312955(0x1b8)][_0x312955(0x32a)]=function(){const _0x50667a=_0x312955;return VisuMZ[_0x50667a(0x1af)][_0x50667a(0x3a4)][_0x50667a(0x412)]['NonRemoveETypes'];},Window_EquipItem['prototype'][_0x312955(0x487)]=function(_0x2f4bcc){const _0x407260=_0x312955,_0x590d79=this['itemAt'](_0x2f4bcc);_0x590d79?Window_ItemList['prototype'][_0x407260(0x487)][_0x407260(0x3b4)](this,_0x2f4bcc):this[_0x407260(0x1b6)](_0x2f4bcc);},Window_EquipItem[_0x312955(0x1b8)][_0x312955(0x1b6)]=function(_0x38b78e){const _0x29a91a=_0x312955;this[_0x29a91a(0x2a3)](this[_0x29a91a(0x36e)](null));const _0x43c6bb=ImageManager[_0x29a91a(0xb4)]||0x20,_0x1609f7=_0x43c6bb-ImageManager['iconWidth'],_0x11171f=_0x43c6bb+0x4,_0x1de707=VisuMZ[_0x29a91a(0x1af)][_0x29a91a(0x3a4)][_0x29a91a(0x412)],_0x35e253=this['itemLineRect'](_0x38b78e),_0x103a01=_0x35e253['y']+(this[_0x29a91a(0x337)]()-ImageManager[_0x29a91a(0x2e5)])/0x2,_0x1ee6b4=Math['max'](0x0,_0x35e253['width']-_0x11171f);this[_0x29a91a(0x2a5)](),this['drawIcon'](_0x1de707['RemoveEquipIcon'],_0x35e253['x']+Math['ceil'](_0x1609f7/0x2),_0x103a01),this[_0x29a91a(0x292)](_0x1de707['RemoveEquipText'],_0x35e253['x']+_0x11171f,_0x35e253['y'],_0x1ee6b4),this['changePaintOpacity'](!![]);},Window_EquipItem[_0x312955(0x1b8)]['updateHelp']=function(){const _0x53cd07=_0x312955;Window_ItemList[_0x53cd07(0x1b8)][_0x53cd07(0x3eb)][_0x53cd07(0x3b4)](this);if(this[_0x53cd07(0x425)]&&this[_0x53cd07(0x80)]&&this[_0x53cd07(0x470)]>=0x0){const _0x20073a=JsonEx['makeDeepCopy'](this['_actor']);_0x20073a['_tempActor']=!![],_0x20073a['forceChangeEquip'](this['_slotId'],this[_0x53cd07(0x46c)]()),this['_statusWindow'][_0x53cd07(0x338)](_0x20073a);}},VisuMZ[_0x312955(0x1af)][_0x312955(0x30f)]=Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x99)],Window_ShopCommand[_0x312955(0x1b8)]['initialize']=function(_0x3524c1){const _0x59e59c=_0x312955;VisuMZ[_0x59e59c(0x1af)][_0x59e59c(0x30f)][_0x59e59c(0x3b4)](this,_0x3524c1),this[_0x59e59c(0x353)](_0x3524c1);},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x353)]=function(_0x362e7c){const _0x3858f9=_0x312955,_0x3a030f=new Rectangle(0x0,0x0,_0x362e7c[_0x3858f9(0x250)],_0x362e7c[_0x3858f9(0x98)]);this[_0x3858f9(0x78)]=new Window_Base(_0x3a030f),this['_commandNameWindow'][_0x3858f9(0x326)]=0x0,this['addChild'](this[_0x3858f9(0x78)]),this['updateCommandNameWindow']();},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x229)]=function(){const _0x1953ed=_0x312955;Window_HorzCommand['prototype'][_0x1953ed(0x229)][_0x1953ed(0x3b4)](this);if(this[_0x1953ed(0x78)])this[_0x1953ed(0x31e)]();},Window_ShopCommand['prototype']['updateCommandNameWindow']=function(){const _0x417aa8=_0x312955,_0x6cab0a=this[_0x417aa8(0x78)];_0x6cab0a['contents'][_0x417aa8(0x1b4)]();const _0x5b4f9c=this['commandStyleCheck'](this[_0x417aa8(0x18c)]());if(_0x5b4f9c==='icon'){const _0x516dd1=this[_0x417aa8(0x224)](this[_0x417aa8(0x18c)]());let _0x2b0399=this[_0x417aa8(0x17d)](this[_0x417aa8(0x18c)]());_0x2b0399=_0x2b0399['replace'](/\\I\[(\d+)\]/gi,''),_0x6cab0a[_0x417aa8(0x219)](),this[_0x417aa8(0x430)](_0x2b0399,_0x516dd1),this['commandNameWindowDrawText'](_0x2b0399,_0x516dd1),this[_0x417aa8(0x21b)](_0x2b0399,_0x516dd1);}},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x430)]=function(_0x536d70,_0x1c0eb2){},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x372)]=function(_0x2d7cb1,_0x1539f0){const _0x583111=_0x312955,_0x14d9b8=this[_0x583111(0x78)];_0x14d9b8['drawText'](_0x2d7cb1,0x0,_0x1539f0['y'],_0x14d9b8[_0x583111(0x1ee)],_0x583111(0x2e7));},Window_ShopCommand[_0x312955(0x1b8)]['commandNameWindowCenter']=function(_0x189108,_0x421e01){const _0x26d19d=_0x312955,_0x297ece=this[_0x26d19d(0x78)],_0xc3a72b=$gameSystem['windowPadding'](),_0x268e3f=_0x421e01['x']+Math[_0x26d19d(0x433)](_0x421e01[_0x26d19d(0x250)]/0x2)+_0xc3a72b;_0x297ece['x']=_0x297ece[_0x26d19d(0x250)]/-0x2+_0x268e3f,_0x297ece['y']=Math[_0x26d19d(0x433)](_0x421e01[_0x26d19d(0x98)]/0x2);},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x8d)]=function(){const _0x17c602=_0x312955;return this[_0x17c602(0x2a2)]?this[_0x17c602(0x2a2)][_0x17c602(0x2e4)]:0x3;},Window_ShopCommand['prototype'][_0x312955(0xaa)]=function(){const _0x4966fc=_0x312955;return VisuMZ['ItemsEquipsCore']['Settings'][_0x4966fc(0x46e)][_0x4966fc(0x3bb)];},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x368)]=function(){const _0x58775c=_0x312955;this['addBuyCommand'](),this[_0x58775c(0xb3)](),this['addCancelCommand']();},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x259)]=function(){const _0x55ecb5=_0x312955;Window_HorzCommand[_0x55ecb5(0x1b8)][_0x55ecb5(0x259)][_0x55ecb5(0x3b4)](this),this[_0x55ecb5(0x35d)]();},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0xa8)]=function(){const _0x2336f1=_0x312955,_0xa5209d=this['commandStyle'](),_0x5f0183=VisuMZ[_0x2336f1(0x1af)]['Settings'][_0x2336f1(0x46e)][_0x2336f1(0x32f)],_0x30d518=_0xa5209d===_0x2336f1(0x28a)?TextManager[_0x2336f1(0x408)]:'\x5cI[%1]%2'[_0x2336f1(0x3d3)](_0x5f0183,TextManager[_0x2336f1(0x408)]),_0xdfffd2=this[_0x2336f1(0x421)]();if(this[_0x2336f1(0xaa)]()&&!_0xdfffd2)return;this['addCommand'](_0x30d518,'buy',_0xdfffd2);},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x421)]=function(){const _0x197087=_0x312955;return SceneManager['_scene'][_0x197087(0x36a)]===Scene_Shop?SceneManager[_0x197087(0x44a)][_0x197087(0x1cd)]>0x0:!![];},Window_ShopCommand['prototype'][_0x312955(0xb3)]=function(){const _0x2a647e=_0x312955,_0x277b7b=this[_0x2a647e(0x18f)](),_0x587bae=VisuMZ['ItemsEquipsCore']['Settings'][_0x2a647e(0x46e)][_0x2a647e(0x499)],_0x7c1de3=_0x277b7b===_0x2a647e(0x28a)?TextManager[_0x2a647e(0x2a8)]:_0x2a647e(0x283)[_0x2a647e(0x3d3)](_0x587bae,TextManager['sell']),_0x42b21b=this[_0x2a647e(0x256)]();if(this[_0x2a647e(0xaa)]()&&!_0x42b21b)return;this[_0x2a647e(0x3b8)](_0x7c1de3,'sell',_0x42b21b);},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x256)]=function(){const _0x454535=_0x312955;return!this[_0x454535(0x1c9)];},Window_ShopCommand['prototype'][_0x312955(0x20c)]=function(){const _0x4eaa36=_0x312955,_0xfb5ceb=this[_0x4eaa36(0x18f)](),_0x3b57b2=VisuMZ[_0x4eaa36(0x1af)][_0x4eaa36(0x3a4)][_0x4eaa36(0x46e)][_0x4eaa36(0x28f)],_0x12ba67=VisuMZ[_0x4eaa36(0x1af)][_0x4eaa36(0x3a4)][_0x4eaa36(0x46e)][_0x4eaa36(0x48b)],_0x3f7b1c=_0xfb5ceb==='text'?_0x12ba67:_0x4eaa36(0x283)[_0x4eaa36(0x3d3)](_0x3b57b2,_0x12ba67);this[_0x4eaa36(0x3b8)](_0x3f7b1c,'cancel');},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0xf8)]=function(){const _0x226ca9=_0x312955;return VisuMZ[_0x226ca9(0x1af)][_0x226ca9(0x3a4)]['ShopScene'][_0x226ca9(0x2b9)];},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x487)]=function(_0x3f2481){const _0x5d6ed6=_0x312955,_0x5a24d7=this[_0x5d6ed6(0x1e8)](_0x3f2481);if(_0x5a24d7===_0x5d6ed6(0x134))this[_0x5d6ed6(0x1e1)](_0x3f2481);else _0x5a24d7==='icon'?this[_0x5d6ed6(0x4bb)](_0x3f2481):Window_HorzCommand[_0x5d6ed6(0x1b8)][_0x5d6ed6(0x487)][_0x5d6ed6(0x3b4)](this,_0x3f2481);},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x18f)]=function(){const _0x1c5f9a=_0x312955;return VisuMZ['ItemsEquipsCore'][_0x1c5f9a(0x3a4)][_0x1c5f9a(0x46e)]['CmdStyle'];},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x1e8)]=function(_0x310d2c){const _0xb45b2b=_0x312955;if(_0x310d2c<0x0)return _0xb45b2b(0x28a);const _0x577c9a=this[_0xb45b2b(0x18f)]();if(_0x577c9a!==_0xb45b2b(0x3fd))return _0x577c9a;else{if(this[_0xb45b2b(0x116)]()>0x0){const _0x5a048a=this[_0xb45b2b(0x17d)](_0x310d2c);if(_0x5a048a[_0xb45b2b(0x2c5)](/\\I\[(\d+)\]/i)){const _0x2ba5ad=this[_0xb45b2b(0x224)](_0x310d2c),_0x420844=this['textSizeEx'](_0x5a048a)[_0xb45b2b(0x250)];return _0x420844<=_0x2ba5ad[_0xb45b2b(0x250)]?_0xb45b2b(0x134):_0xb45b2b(0x232);}}}return _0xb45b2b(0x28a);},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x1e1)]=function(_0x437f29){const _0x333354=_0x312955,_0x57bada=this[_0x333354(0x224)](_0x437f29),_0x3ef913=this[_0x333354(0x17d)](_0x437f29),_0x4dc5fd=this[_0x333354(0x285)](_0x3ef913)[_0x333354(0x250)];this[_0x333354(0x2a3)](this[_0x333354(0x40e)](_0x437f29));const _0x1eb587=this[_0x333354(0xf8)]();if(_0x1eb587===_0x333354(0x420))this['drawTextEx'](_0x3ef913,_0x57bada['x']+_0x57bada[_0x333354(0x250)]-_0x4dc5fd,_0x57bada['y'],_0x4dc5fd);else{if(_0x1eb587===_0x333354(0x2e7)){const _0x392e24=_0x57bada['x']+Math[_0x333354(0x433)]((_0x57bada[_0x333354(0x250)]-_0x4dc5fd)/0x2);this[_0x333354(0x355)](_0x3ef913,_0x392e24,_0x57bada['y'],_0x4dc5fd);}else this[_0x333354(0x355)](_0x3ef913,_0x57bada['x'],_0x57bada['y'],_0x4dc5fd);}},Window_ShopCommand[_0x312955(0x1b8)][_0x312955(0x4bb)]=function(_0x12c7aa){const _0x427cf1=_0x312955;this['commandName'](_0x12c7aa)[_0x427cf1(0x2c5)](/\\I\[(\d+)\]/i);const _0x27f59e=Number(RegExp['$1'])||0x0,_0x3ec87c=this[_0x427cf1(0x224)](_0x12c7aa),_0x56f7f5=_0x3ec87c['x']+Math['floor']((_0x3ec87c[_0x427cf1(0x250)]-ImageManager['iconWidth'])/0x2),_0x3e568c=_0x3ec87c['y']+(_0x3ec87c[_0x427cf1(0x98)]-ImageManager[_0x427cf1(0x2e5)])/0x2;this[_0x427cf1(0x6e)](_0x27f59e,_0x56f7f5,_0x3e568c);},VisuMZ[_0x312955(0x1af)][_0x312955(0xb6)]=Window_ShopBuy['prototype'][_0x312955(0x259)],Window_ShopBuy[_0x312955(0x1b8)][_0x312955(0x259)]=function(){const _0x1e37b0=_0x312955;this[_0x1e37b0(0x457)](),VisuMZ[_0x1e37b0(0x1af)][_0x1e37b0(0xb6)][_0x1e37b0(0x3b4)](this);},Window_ShopBuy[_0x312955(0x1b8)][_0x312955(0x457)]=function(){const _0x2189e5=_0x312955;SceneManager[_0x2189e5(0x44a)][_0x2189e5(0x36a)]===Scene_Shop&&(this['_money']=SceneManager[_0x2189e5(0x44a)][_0x2189e5(0x2c3)]());},VisuMZ[_0x312955(0x1af)]['Window_ShopBuy_price']=Window_ShopBuy[_0x312955(0x1b8)][_0x312955(0x360)],Window_ShopBuy['prototype'][_0x312955(0x360)]=function(_0x47705){const _0x227219=_0x312955;if(!_0x47705)return 0x0;let _0xbebac6=VisuMZ[_0x227219(0x1af)]['Window_ShopBuy_price'][_0x227219(0x3b4)](this,_0x47705);return Math['max'](0x0,this[_0x227219(0x396)](_0x47705,_0xbebac6));},Window_ShopBuy[_0x312955(0x1b8)][_0x312955(0x396)]=function(_0x3b7887,_0x468b16){const _0x25f7d=_0x312955,_0x2abf56=_0x3b7887[_0x25f7d(0x1ba)]||'';if(_0x2abf56[_0x25f7d(0x2c5)](/<JS BUY PRICE>\s*([\s\S]*)\s*<\/JS BUY PRICE>/i)){const _0x27a863=String(RegExp['$1']);window['price']=_0x468b16,window[_0x25f7d(0x46c)]=_0x3b7887;try{eval(_0x27a863);}catch(_0x273062){if($gameTemp['isPlaytest']())console[_0x25f7d(0x255)](_0x273062);}_0x468b16=window[_0x25f7d(0x360)],window['price']=undefined,window[_0x25f7d(0x46c)]=undefined;}_0x468b16=VisuMZ['ItemsEquipsCore'][_0x25f7d(0x3a4)]['ShopScene']['BuyPriceJS'][_0x25f7d(0x3b4)](this,_0x3b7887,_0x468b16);if(isNaN(_0x468b16))_0x468b16=0x0;return Math[_0x25f7d(0x433)](_0x468b16);},VisuMZ[_0x312955(0x1af)][_0x312955(0x84)]=Window_ShopBuy['prototype'][_0x312955(0x3c1)],Window_ShopBuy['prototype']['goodsToItem']=function(_0x503955){const _0x3b1ae8=_0x312955,_0xc8c71d=VisuMZ[_0x3b1ae8(0x1af)][_0x3b1ae8(0x84)][_0x3b1ae8(0x3b4)](this,_0x503955);return _0xc8c71d&&!this[_0x3b1ae8(0x462)](_0xc8c71d)?null:_0xc8c71d;},VisuMZ[_0x312955(0x1af)][_0x312955(0x86)]={'ShowAllSwitches':/<SHOW SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,'ShowAnySwitches':/<SHOW SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,'HideAllSwitches':/<HIDE SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,'HideAnySwitches':/<HIDE SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,'BuyTurnSwitchOn':/<BUY TURN ON SWITCH(?:|ES):[ ](.*)>/i,'BuyTurnSwitchOff':/<BUY TURN OFF SWITCH(?:|ES):[ ](.*)>/i,'SellTurnSwitchOn':/<SELL TURN ON SWITCH(?:|ES):[ ](.*)>/i,'SellTurnSwitchOff':/<SELL TURN OFF SWITCH(?:|ES):[ ](.*)>/i},Window_ShopBuy['prototype'][_0x312955(0x462)]=function(_0x566860){const _0x8269eb=_0x312955;if(!_0x566860)return![];const _0x362971=VisuMZ[_0x8269eb(0x1af)][_0x8269eb(0x86)],_0x2907f5=_0x566860?_0x566860[_0x8269eb(0x1ba)]||'':'';if(_0x2907f5['match'](_0x362971[_0x8269eb(0x1c0)])){const _0x1c7b8f=String(RegExp['$1'])[_0x8269eb(0x3a1)](',')[_0x8269eb(0x4ac)](_0x3aa431=>Number(_0x3aa431));if(_0x1c7b8f[_0x8269eb(0x2c8)](_0x3544f9=>!$gameSwitches[_0x8269eb(0x244)](_0x3544f9)))return![];}if(_0x2907f5[_0x8269eb(0x2c5)](_0x362971[_0x8269eb(0x335)])){const _0x455f9a=String(RegExp['$1'])[_0x8269eb(0x3a1)](',')[_0x8269eb(0x4ac)](_0x448f8d=>Number(_0x448f8d));if(_0x455f9a[_0x8269eb(0x312)](_0x1bae7e=>!$gameSwitches[_0x8269eb(0x244)](_0x1bae7e)))return![];}if(_0x2907f5[_0x8269eb(0x2c5)](_0x362971[_0x8269eb(0x482)])){const _0x3f2291=String(RegExp['$1'])[_0x8269eb(0x3a1)](',')['map'](_0x3246dd=>Number(_0x3246dd));if(_0x3f2291[_0x8269eb(0x312)](_0xa8ee3=>$gameSwitches[_0x8269eb(0x244)](_0xa8ee3)))return![];}if(_0x2907f5[_0x8269eb(0x2c5)](_0x362971[_0x8269eb(0xa9)])){const _0x476729=String(RegExp['$1'])[_0x8269eb(0x3a1)](',')[_0x8269eb(0x4ac)](_0x2577de=>Number(_0x2577de));if(_0x476729['some'](_0x2def2a=>$gameSwitches['value'](_0x2def2a)))return![];}return!![];},Window_ShopBuy[_0x312955(0x1b8)]['drawItem']=function(_0x5b16ed){const _0x3d806d=_0x312955;this[_0x3d806d(0x219)]();const _0xd8d8dd=this[_0x3d806d(0x186)](_0x5b16ed),_0xc0ce8c=this[_0x3d806d(0x224)](_0x5b16ed),_0x491af8=_0xc0ce8c[_0x3d806d(0x250)];this[_0x3d806d(0x2a3)](this['isEnabled'](_0xd8d8dd)),this['drawItemName'](_0xd8d8dd,_0xc0ce8c['x'],_0xc0ce8c['y'],_0x491af8),this[_0x3d806d(0xac)](_0xd8d8dd,_0xc0ce8c),this['changePaintOpacity'](!![]);},Window_ShopBuy[_0x312955(0x1b8)][_0x312955(0xac)]=function(_0x17636d,_0x334caa){const _0x46f9cb=_0x312955,_0x3089f8=this['price'](_0x17636d);this[_0x46f9cb(0x1ff)](_0x3089f8,TextManager[_0x46f9cb(0x82)],_0x334caa['x'],_0x334caa['y'],_0x334caa[_0x46f9cb(0x250)]);},Window_ShopSell['prototype'][_0x312955(0x8d)]=function(){return SceneManager['_scene']['isUseItemsEquipsCoreUpdatedLayout']()?0x1:0x2;},VisuMZ['ItemsEquipsCore'][_0x312955(0x296)]=Window_ShopSell[_0x312955(0x1b8)][_0x312955(0x36e)],Window_ShopSell[_0x312955(0x1b8)][_0x312955(0x36e)]=function(_0x3e8157){const _0xa182a2=_0x312955;if(!_0x3e8157)return![];const _0xa0919=_0x3e8157[_0xa182a2(0x1ba)];if(_0xa0919['match'](/<CANNOT SELL>/i))return![];if(_0xa0919[_0xa182a2(0x2c5)](/<CAN SELL>/i))return!![];if(_0xa0919['match'](/<CANNOT SELL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xe04384=JSON[_0xa182a2(0x4a6)]('['+RegExp['$1'][_0xa182a2(0x2c5)](/\d+/g)+']');for(const _0x13d3e6 of _0xe04384){if(!$gameSwitches[_0xa182a2(0x244)](_0x13d3e6))return![];}}if(_0xa0919[_0xa182a2(0x2c5)](/<CANNOT SELL ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2527b9=JSON[_0xa182a2(0x4a6)]('['+RegExp['$1'][_0xa182a2(0x2c5)](/\d+/g)+']');for(const _0x443d26 of _0x2527b9){if(!$gameSwitches['value'](_0x443d26))return![];}}if(_0xa0919[_0xa182a2(0x2c5)](/<CANNOT SELL ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4118ce=JSON[_0xa182a2(0x4a6)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x3cc97d of _0x4118ce){if($gameSwitches[_0xa182a2(0x244)](_0x3cc97d))return![];}}return VisuMZ[_0xa182a2(0x1af)]['Window_ShopSell_isEnabled'][_0xa182a2(0x3b4)](this,_0x3e8157);},Window_ShopStatus[_0x312955(0x15a)]=VisuMZ[_0x312955(0x1af)][_0x312955(0x3a4)]['StatusWindow'][_0x312955(0x442)]??0xf0,VisuMZ[_0x312955(0x1af)][_0x312955(0x6d)]=Window_ShopStatus[_0x312955(0x1b8)]['setItem'],Window_ShopStatus[_0x312955(0x1b8)]['setItem']=function(_0x218359){const _0x1ba2d9=_0x312955;_0x218359=DataManager['getProxyItem'](_0x218359),DataManager['isWeapon'](_0x218359)||DataManager[_0x1ba2d9(0x225)](_0x218359)?this[_0x1ba2d9(0x308)](_0x218359):VisuMZ['ItemsEquipsCore'][_0x1ba2d9(0x6d)][_0x1ba2d9(0x3b4)](this,_0x218359);},Window_ShopStatus[_0x312955(0x1b8)]['setItemDelay']=function(_0x29c44e){const _0x1c57c2=_0x312955;this['_item']=_0x29c44e;const _0x524921=Window_ShopStatus[_0x1c57c2(0x15a)];setTimeout(this[_0x1c57c2(0x440)][_0x1c57c2(0x411)](this,_0x29c44e),_0x524921);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x440)]=function(_0x129537){const _0x4d9c55=_0x312955;this[_0x4d9c55(0x385)]===_0x129537&&this[_0x4d9c55(0x259)]();},Window_ShopStatus['prototype'][_0x312955(0x351)]=function(){return![];},Window_ShopStatus['prototype'][_0x312955(0x277)]=function(){const _0x22ebd5=_0x312955;Window_StatusBase['prototype'][_0x22ebd5(0x277)][_0x22ebd5(0x3b4)](this);for(const _0x2a2219 of $gameParty[_0x22ebd5(0x34a)]()){ImageManager[_0x22ebd5(0xd8)](_0x2a2219[_0x22ebd5(0x28b)]());}},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x2b4)]=function(){const _0x4828c5=_0x312955;return VisuMZ[_0x4828c5(0x1af)]['Settings'][_0x4828c5(0x3fa)][_0x4828c5(0xaf)];},Window_ShopStatus[_0x312955(0x1b8)]['refresh']=function(){const _0x192eeb=_0x312955;this[_0x192eeb(0x164)]['clear'](),this[_0x192eeb(0x36d)][_0x192eeb(0x1b4)](),this[_0x192eeb(0x385)]&&(this[_0x192eeb(0x219)](),this[_0x192eeb(0x2a3)](!![]),this[_0x192eeb(0x32e)](),this['isEquipItem']()?this[_0x192eeb(0x15c)]():this[_0x192eeb(0x2d7)](),this['drawCustomShopGraphic']());},Window_ShopStatus['prototype'][_0x312955(0x3b2)]=function(_0x1dabf6,_0x280e9e){const _0x3887a1=_0x312955;if(!this[_0x3887a1(0x42f)]()&&!DataManager['isItem'](this[_0x3887a1(0x385)]))return;const _0x5a1dfc=this[_0x3887a1(0x1ee)]-this[_0x3887a1(0x321)]()-_0x1dabf6,_0xcbd603=this[_0x3887a1(0x17b)](_0x3887a1(0x1f7));this[_0x3887a1(0xd4)](ColorManager[_0x3887a1(0x3c5)]()),this[_0x3887a1(0x292)](TextManager['possession'],_0x1dabf6+this[_0x3887a1(0x321)](),_0x280e9e,_0x5a1dfc-_0xcbd603),this['resetTextColor'](),this['drawItemNumber'](this['_item'],_0x1dabf6,_0x280e9e,_0x5a1dfc);},Window_ShopStatus['prototype']['drawItemDarkRect']=function(_0x13b496,_0x5c336d,_0xe70b05,_0x1e18fb,_0x56d237){const _0x5c2cad=_0x312955;if(VisuMZ[_0x5c2cad(0x1af)][_0x5c2cad(0x3a4)][_0x5c2cad(0x3fa)][_0x5c2cad(0x7c)]===![])return;_0x56d237=Math[_0x5c2cad(0x76)](_0x56d237||0x1,0x1);while(_0x56d237--){_0x1e18fb=_0x1e18fb||this[_0x5c2cad(0x337)](),this['contentsBack']['paintOpacity']=0xa0;const _0x2550ab=ColorManager[_0x5c2cad(0x22a)]();this['contentsBack'][_0x5c2cad(0x2d6)](_0x13b496+0x1,_0x5c336d+0x1,_0xe70b05-0x2,_0x1e18fb-0x2,_0x2550ab),this['contentsBack'][_0x5c2cad(0x31a)]=0xff;}},ColorManager[_0x312955(0x22a)]=function(){const _0x443fde=_0x312955,_0x2f5599=VisuMZ[_0x443fde(0x1af)]['Settings'][_0x443fde(0x3fa)];let _0x28f4cc=_0x2f5599[_0x443fde(0x388)]!==undefined?_0x2f5599['BackRectColor']:0x13;return ColorManager[_0x443fde(0x341)](_0x28f4cc);},Window_ShopStatus[_0x312955(0x1b8)]['drawEquipData']=function(){const _0x238865=_0x312955,_0x6d09cd=this['getEquipDataStyle']();if(_0x6d09cd===_0x238865(0xd3))this[_0x238865(0x23b)]();else _0x6d09cd===_0x238865(0x3e9)?this[_0x238865(0x141)]():this['drawEquipDataClassic']();},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x160)]=function(){const _0xde19a3=_0x312955;let _0x348b5a=VisuMZ[_0xde19a3(0x1af)][_0xde19a3(0x3a4)][_0xde19a3(0x3fa)]['EquipDataStyle']??_0xde19a3(0xd3);const _0x57d7a6=/<STATUS STYLE:[ ](.*)>/i;return this[_0xde19a3(0x385)]&&this[_0xde19a3(0x385)][_0xde19a3(0x1ba)]&&this['_item']['note']['match'](_0x57d7a6)&&(_0x348b5a=String(RegExp['$1'])[_0xde19a3(0x315)]()[_0xde19a3(0x349)]()),_0x348b5a;},Window_ShopStatus[_0x312955(0x1b8)]['drawEquipDataCompare']=function(){const _0x26fcbc=_0x312955;this['_tempActor']=null;if(VisuMZ[_0x26fcbc(0x1af)]['Settings'][_0x26fcbc(0x3fa)][_0x26fcbc(0x189)]){VisuMZ[_0x26fcbc(0x1af)][_0x26fcbc(0x3a4)][_0x26fcbc(0x3fa)][_0x26fcbc(0x189)][_0x26fcbc(0x3b4)](this);return;}const _0xa7bc19=this[_0x26fcbc(0x337)](),_0x1d7d02=this[_0x26fcbc(0x458)]()+0x8;let _0x1f3979=0x0,_0x446cf2=0x0,_0x105855=this['innerWidth'],_0x3a934b=this[_0x26fcbc(0x2b3)],_0x1e6711=Math[_0x26fcbc(0x433)](_0x105855/0x2),_0x4eac6a=_0x1f3979+_0x105855-_0x1e6711;this[_0x26fcbc(0x348)](this[_0x26fcbc(0x385)],_0x1f3979+this[_0x26fcbc(0x321)](),_0x446cf2,_0x105855-this[_0x26fcbc(0x321)]()*0x2),this['drawItemDarkRect'](_0x1f3979,_0x446cf2,_0x105855),_0x446cf2+=_0xa7bc19;if(this[_0x26fcbc(0x25b)](_0x1f3979,_0x446cf2,_0x1e6711))_0x446cf2+=0x0;if(this[_0x26fcbc(0x1aa)](_0x4eac6a,_0x446cf2,_0x1e6711))_0x446cf2+=_0xa7bc19;const _0x5d0e19=this[_0x26fcbc(0x2af)](),_0x76cb30=_0x446cf2;_0x446cf2=_0x3a934b-_0x5d0e19[_0x26fcbc(0x2e4)]*_0x1d7d02-0x4;let _0x304f8c=_0x1f3979,_0x9f1f03=0x0,_0x401cc1=_0x446cf2;for(const _0x204521 of _0x5d0e19){_0x9f1f03=Math[_0x26fcbc(0x76)](this[_0x26fcbc(0x89)](_0x204521,_0x1f3979+0x4,_0x446cf2+0x4,_0x105855),_0x9f1f03),_0x446cf2+=_0x1d7d02;}const _0x5e8d8c=$gameParty[_0x26fcbc(0x27b)](),_0x471c09=Math[_0x26fcbc(0x433)]((_0x105855-_0x9f1f03)/_0x5e8d8c);_0x9f1f03=_0x105855-_0x471c09*_0x5e8d8c;for(const _0x5b9599 of $gameParty[_0x26fcbc(0x1a8)]()){const _0x20fc8b=$gameParty[_0x26fcbc(0x1a8)]()[_0x26fcbc(0x34f)](_0x5b9599),_0x464497=_0x304f8c+_0x9f1f03+_0x20fc8b*_0x471c09;this[_0x26fcbc(0x2a3)](_0x5b9599[_0x26fcbc(0x319)](this['_item'])),this['drawActorCharacter'](_0x5b9599,_0x464497+_0x471c09/0x2,_0x401cc1);let _0x12cf0d=_0x401cc1;for(const _0x4b55bf of _0x5d0e19){const _0x42d256=_0x12cf0d-(_0xa7bc19-_0x1d7d02)/0x2;this['drawActorParamDifference'](_0x5b9599,_0x4b55bf,_0x464497,_0x42d256,_0x471c09),_0x12cf0d+=_0x1d7d02;}}this[_0x26fcbc(0x3a7)](_0x304f8c,_0x76cb30,_0x9f1f03,_0x401cc1-_0x76cb30);for(let _0x455fb9=0x0;_0x455fb9<_0x5e8d8c;_0x455fb9++){const _0x424e04=_0x304f8c+_0x9f1f03+_0x455fb9*_0x471c09;this[_0x26fcbc(0x3a7)](_0x424e04,_0x76cb30,_0x471c09,_0x401cc1-_0x76cb30);}for(const _0x219855 of _0x5d0e19){this[_0x26fcbc(0x3a7)](_0x304f8c,_0x401cc1,_0x9f1f03,_0x1d7d02);for(let _0x4d20bd=0x0;_0x4d20bd<_0x5e8d8c;_0x4d20bd++){const _0x32c68a=_0x304f8c+_0x9f1f03+_0x4d20bd*_0x471c09;this[_0x26fcbc(0x3a7)](_0x32c68a,_0x401cc1,_0x471c09,_0x1d7d02);}_0x401cc1+=_0x1d7d02;}},Window_ShopStatus['prototype'][_0x312955(0x246)]=function(){const _0xbc1b42=_0x312955;this[_0xbc1b42(0x27f)]=null;if(VisuMZ[_0xbc1b42(0x1af)]['Settings'][_0xbc1b42(0x3fa)][_0xbc1b42(0x3e6)]){VisuMZ[_0xbc1b42(0x1af)][_0xbc1b42(0x3a4)]['StatusWindow'][_0xbc1b42(0x3e6)]['call'](this);return;}const _0x32e08f=this['lineHeight']();let _0x397d41=0x0,_0x85e338=0x0,_0x2bc8bd=this['innerWidth'],_0x385a18=this[_0xbc1b42(0x2b3)],_0x23ea21=Math[_0xbc1b42(0x433)](_0x2bc8bd/0x2),_0x5a1f1a=_0x397d41+_0x2bc8bd-_0x23ea21;this[_0xbc1b42(0x348)](this[_0xbc1b42(0x385)],_0x397d41+this[_0xbc1b42(0x321)](),_0x85e338,_0x2bc8bd-this[_0xbc1b42(0x321)]()*0x2),this[_0xbc1b42(0x3a7)](_0x397d41,_0x85e338,_0x2bc8bd),_0x85e338+=_0x32e08f;if(this[_0xbc1b42(0x25b)](_0x397d41,_0x85e338,_0x23ea21))_0x85e338+=0x0;if(this['drawItemQuantity'](_0x5a1f1a,_0x85e338,_0x23ea21))_0x85e338+=_0x32e08f;if(this['drawItemEquipSubType'](_0x397d41,_0x85e338,_0x2bc8bd))_0x85e338+=_0x32e08f;const _0x54bb66=this['actorParams']();for(const _0x2dd4bf of _0x54bb66){if(this['isCustomParameter'](_0x2dd4bf))continue;this[_0xbc1b42(0x16d)](_0x2dd4bf,_0x397d41,_0x85e338,_0x2bc8bd),_0x85e338+=_0x32e08f;}_0x85e338=this['drawItemCustomEntries'](_0x397d41,_0x85e338,_0x2bc8bd),this['drawItemDarkRect'](_0x397d41,_0x85e338,_0x2bc8bd,_0x385a18-_0x85e338);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x141)]=function(){const _0x4ad8ab=_0x312955;this['_tempActor']=null;if(VisuMZ['ItemsEquipsCore']['Settings']['StatusWindow'][_0x4ad8ab(0x287)]){VisuMZ[_0x4ad8ab(0x1af)]['Settings'][_0x4ad8ab(0x3fa)]['DrawEquipDoubleData'][_0x4ad8ab(0x3b4)](this);return;}const _0x517823=this['lineHeight']();let _0x13a405=0x0,_0x3e4a23=0x0,_0x5ec09e=this[_0x4ad8ab(0x1ee)],_0x44429a=this[_0x4ad8ab(0x2b3)],_0x28f3a5=Math['floor'](_0x5ec09e/0x2),_0x1445a1=_0x13a405+_0x5ec09e-_0x28f3a5;this['drawItemName'](this[_0x4ad8ab(0x385)],_0x13a405+this[_0x4ad8ab(0x321)](),_0x3e4a23,_0x5ec09e-this['itemPadding']()*0x2),this[_0x4ad8ab(0x3a7)](_0x13a405,_0x3e4a23,_0x5ec09e),_0x3e4a23+=_0x517823;if(this[_0x4ad8ab(0x25b)](_0x13a405,_0x3e4a23,_0x28f3a5))_0x3e4a23+=0x0;if(this[_0x4ad8ab(0x1aa)](_0x1445a1,_0x3e4a23,_0x28f3a5))_0x3e4a23+=_0x517823;if(this['drawItemEquipSubType'](_0x13a405,_0x3e4a23,_0x5ec09e))_0x3e4a23+=_0x517823;const _0x10d260=this[_0x4ad8ab(0x2af)]();for(const _0x92f4eb of _0x10d260){if(this[_0x4ad8ab(0x3a0)](_0x92f4eb))continue;this['drawActorParamClassic'](_0x92f4eb,_0x13a405,_0x3e4a23,_0x28f3a5),_0x13a405===_0x28f3a5?(_0x3e4a23+=_0x517823,_0x13a405=0x0):_0x13a405=_0x28f3a5;}_0x13a405===_0x28f3a5&&(this[_0x4ad8ab(0x3a7)](_0x28f3a5,_0x3e4a23,_0x28f3a5,_0x517823),_0x3e4a23+=_0x517823,_0x13a405=0x0),_0x3e4a23=this[_0x4ad8ab(0x275)](_0x13a405,_0x3e4a23,_0x5ec09e),this['drawItemDarkRect'](_0x13a405,_0x3e4a23,_0x5ec09e,_0x44429a-_0x3e4a23);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x25b)]=function(_0x26894d,_0x665a5a,_0x42324a){const _0x62b603=_0x312955;if(!this['isEquipItem']())return![];const _0x54184d=$dataSystem[_0x62b603(0x31c)][this[_0x62b603(0x385)]['etypeId']];return this[_0x62b603(0xf1)](_0x54184d,_0x26894d,_0x665a5a,_0x42324a,!![]),this[_0x62b603(0x3a7)](_0x26894d,_0x665a5a,_0x42324a),this[_0x62b603(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)]['drawItemEquipSubType']=function(_0x16bb2b,_0x3bb65e,_0x4f39fb){const _0x2701cb=_0x312955;if(!this[_0x2701cb(0x42f)]())return![];let _0x536fdd='',_0x10ab68='';const _0x253ea6=VisuMZ[_0x2701cb(0x1af)][_0x2701cb(0x3a4)][_0x2701cb(0x3fa)];return DataManager[_0x2701cb(0xed)](this[_0x2701cb(0x385)])?(_0x536fdd=_0x253ea6['WeaponType']??_0x2701cb(0x245),_0x10ab68=$dataSystem[_0x2701cb(0x2f7)][this[_0x2701cb(0x385)]['wtypeId']]||_0x253ea6[_0x2701cb(0x35e)]||'-'):(_0x536fdd=_0x253ea6[_0x2701cb(0x33d)]??_0x2701cb(0x2d2),_0x10ab68=$dataSystem[_0x2701cb(0x14a)][this[_0x2701cb(0x385)]['atypeId']]||_0x253ea6[_0x2701cb(0x35e)]||'-'),this[_0x2701cb(0xf1)](_0x536fdd,_0x16bb2b,_0x3bb65e,_0x4f39fb,!![]),this[_0x2701cb(0xf1)](_0x10ab68,_0x16bb2b,_0x3bb65e,_0x4f39fb,![],_0x2701cb(0x420)),this[_0x2701cb(0x3a7)](_0x16bb2b,_0x3bb65e,_0x4f39fb),this[_0x2701cb(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x1d3)]=function(){const _0x298045=_0x312955,_0x5c0a8b=VisuMZ['ItemsEquipsCore'][_0x298045(0x3a4)]['ItemScene']['ItemQuantityFmt'];return _0x5c0a8b[_0x298045(0x3d3)]($gameParty[_0x298045(0xe9)](this['_item']));},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x2af)]=function(){const _0x9be479=_0x312955;let _0x58c144=[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];if(Imported[_0x9be479(0x2f8)]){_0x58c144=VisuMZ[_0x9be479(0x1e5)][_0x9be479(0x3a4)]['Param'][_0x9be479(0xcf)];if(this[_0x9be479(0x38a)]())return this[_0x9be479(0x1cc)]();const _0xb4317c=VisuMZ[_0x9be479(0x1af)]['Settings']['StatusWindow'];if(this['getEquipDataStyle']()===_0x9be479(0x29f)){if(DataManager[_0x9be479(0xed)](this[_0x9be479(0x385)]))_0x58c144=_0x58c144['concat'](_0xb4317c['ClassicWeaponParameters']||[]);if(DataManager[_0x9be479(0x225)](this[_0x9be479(0x385)]))_0x58c144=_0x58c144[_0x9be479(0x16e)](_0xb4317c['ClassicArmorParameters']||[]);}else{if(this[_0x9be479(0x160)]()==='double'){if(DataManager[_0x9be479(0xed)](this[_0x9be479(0x385)]))_0x58c144=_0x58c144[_0x9be479(0x16e)](_0xb4317c[_0x9be479(0x109)]||[]);if(DataManager[_0x9be479(0x225)](this['_item']))_0x58c144=_0x58c144[_0x9be479(0x16e)](_0xb4317c[_0x9be479(0x15d)]||[]);}}}return _0x58c144=_0x58c144[_0x9be479(0x4ac)](_0x9308a0=>typeof _0x9308a0==='number'?_0x9308a0:_0x9308a0['toUpperCase']()[_0x9be479(0x349)]()),_0x58c144;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x157)]=function(){const _0x21d71d=_0x312955;return VisuMZ['ItemsEquipsCore'][_0x21d71d(0x3a4)][_0x21d71d(0x3fa)][_0x21d71d(0x147)];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x89)]=function(_0x469c2d,_0x192f0f,_0x4fede2,_0x43b241){const _0x3480b5=_0x312955;this[_0x3480b5(0x219)](),this[_0x3480b5(0x164)][_0x3480b5(0xe4)]=this[_0x3480b5(0x157)]();let _0x3f46f6=this[_0x3480b5(0x17b)](TextManager['param'](_0x469c2d))+0x4+_0x192f0f;return Imported[_0x3480b5(0x2f8)]?(this['drawParamText'](_0x192f0f,_0x4fede2,_0x43b241,_0x469c2d,!![]),VisuMZ['CoreEngine'][_0x3480b5(0x3a4)][_0x3480b5(0x1e0)][_0x3480b5(0x202)]&&(_0x3f46f6+=ImageManager[_0x3480b5(0x340)]+0x4)):(this['changeTextColor'](ColorManager['systemColor']()),this['drawText'](TextManager['param'](_0x469c2d),_0x192f0f,_0x4fede2,_0x43b241)),this[_0x3480b5(0x219)](),_0x3f46f6;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x409)]=function(_0x24a2f3,_0x1d6614,_0x4b94c5,_0x460be8,_0x2f5cb0){const _0x2701b0=_0x312955;_0x4b94c5+=this[_0x2701b0(0x321)](),_0x2f5cb0-=this['itemPadding']()*0x2;const _0x469315=VisuMZ[_0x2701b0(0x1af)][_0x2701b0(0x3a4)]['StatusWindow'];this[_0x2701b0(0x164)][_0x2701b0(0xe4)]=_0x469315[_0x2701b0(0x147)],this[_0x2701b0(0x2a3)](_0x24a2f3[_0x2701b0(0x319)](this['_item']));if(_0x24a2f3['isEquipped'](this[_0x2701b0(0x385)])&&!_0x24a2f3[_0x2701b0(0x87)](this[_0x2701b0(0x385)])){const _0x24ac94=_0x469315[_0x2701b0(0x10d)];this['drawText'](_0x24ac94,_0x4b94c5,_0x460be8,_0x2f5cb0,_0x2701b0(0x2e7));}else{if(_0x24a2f3[_0x2701b0(0x319)](this[_0x2701b0(0x385)])){const _0x31d7b8=this['createTempActorEquips'](_0x24a2f3);let _0x5d0de7=0x0,_0x228c79=0x0,_0x227503=0x0;Imported[_0x2701b0(0x2f8)]?(_0x5d0de7=_0x31d7b8[_0x2701b0(0x39f)](_0x1d6614),_0x228c79=_0x5d0de7-_0x24a2f3[_0x2701b0(0x39f)](_0x1d6614),this['changeTextColor'](ColorManager[_0x2701b0(0x393)](_0x228c79)),_0x227503=(_0x228c79>=0x0?'+':'')+VisuMZ[_0x2701b0(0x110)](_0x228c79,0x0,_0x1d6614)):(_0x5d0de7=_0x31d7b8[_0x2701b0(0x2ac)](_0x1d6614),_0x228c79=_0x5d0de7-_0x24a2f3[_0x2701b0(0x2ac)](_0x1d6614),this[_0x2701b0(0xd4)](ColorManager[_0x2701b0(0x393)](_0x228c79)),_0x227503=(_0x228c79>=0x0?'+':'')+_0x228c79),_0x227503==='+0'&&(_0x227503=_0x469315[_0x2701b0(0x381)]),this[_0x2701b0(0x292)](_0x227503,_0x4b94c5,_0x460be8,_0x2f5cb0,_0x2701b0(0x2e7));}else{const _0x44fa11=_0x469315[_0x2701b0(0x66)];this[_0x2701b0(0x292)](_0x44fa11,_0x4b94c5,_0x460be8,_0x2f5cb0,'center');}}this[_0x2701b0(0x219)](),this[_0x2701b0(0x2a3)](!![]);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x20a)]=function(_0x49da20){const _0x20d60c=_0x312955;if(this[_0x20d60c(0x195)](_0x49da20)){const _0x112816=JsonEx[_0x20d60c(0x1ac)](_0x49da20);_0x112816[_0x20d60c(0x27f)]=!![];const _0x3894f9=_0x112816['getEmptyEquipSlotOfSameEtype'](this['_item']);_0x3894f9>=0x0&&_0x112816['forceChangeEquip'](_0x3894f9,this['_item']),this[_0x20d60c(0x27f)]=_0x112816;}return this['_tempActor'];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x195)]=function(_0x540603){const _0x53136d=_0x312955;if(!this[_0x53136d(0x27f)])return!![];return this[_0x53136d(0x27f)][_0x53136d(0x101)]()!==_0x540603[_0x53136d(0x101)]();},Game_Actor[_0x312955(0x1b8)][_0x312955(0x87)]=function(_0x299261){const _0x25380c=_0x312955;if(!_0x299261)return![];const _0x5cae56=_0x299261[_0x25380c(0x417)],_0x2bf4a8=this[_0x25380c(0x3da)]();for(let _0x1ef678=0x0;_0x1ef678<_0x2bf4a8[_0x25380c(0x2e4)];_0x1ef678++){const _0x5cdb7a=_0x2bf4a8[_0x1ef678];if(_0x5cdb7a!==_0x5cae56)continue;if(!this[_0x25380c(0x43b)]()[_0x1ef678])return!![];}return![];},Game_Actor['prototype'][_0x312955(0x96)]=function(_0x3f09c0){const _0x554d29=_0x312955;if(!_0x3f09c0)return-0x1;const _0x30dd46=_0x3f09c0[_0x554d29(0x417)],_0x25cb1f=this[_0x554d29(0x3da)]();let _0x537faf=-0x1;for(let _0x45835a=0x0;_0x45835a<_0x25cb1f[_0x554d29(0x2e4)];_0x45835a++){const _0x231ef3=_0x25cb1f[_0x45835a];if(_0x231ef3!==_0x30dd46)continue;if(!this['equips']()[_0x45835a])return _0x45835a;if(_0x537faf<0x0)_0x537faf=_0x45835a;}return _0x537faf;},Window_ShopStatus[_0x312955(0x1b8)]['drawActorParamClassic']=function(_0x49a5f2,_0x30da4c,_0x270f8f,_0x2eb33d){const _0x4430c1=_0x312955,_0x2cf59d=TextManager[_0x4430c1(0x2ac)](_0x49a5f2);this['drawItemKeyData'](_0x2cf59d,_0x30da4c,_0x270f8f,_0x2eb33d,!![]);let _0x589f0a='+0';Imported[_0x4430c1(0x2f8)]?_0x589f0a=this['getParamValueClassicCore'](_0x49a5f2):_0x589f0a=this[_0x4430c1(0x1b9)](_0x49a5f2),this[_0x4430c1(0xf1)](_0x589f0a,_0x30da4c,_0x270f8f,_0x2eb33d,![],'right'),this[_0x4430c1(0x3a7)](_0x30da4c,_0x270f8f,_0x2eb33d);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x3a0)]=function(_0x1f13c8){const _0x1b6c8a=_0x312955;return Imported[_0x1b6c8a(0x2f8)]?!!VisuMZ[_0x1b6c8a(0x1e5)][_0x1b6c8a(0x2be)][_0x1f13c8]:![];},Window_ShopStatus[_0x312955(0x1b8)]['getParamValueClassicCore']=function(_0x19455f){const _0x3b432f=_0x312955;if(this[_0x3b432f(0x13f)][_0x19455f])return this[_0x3b432f(0x13f)][_0x19455f];const _0x233fcd=[_0x3b432f(0xd9),'MAXMP',_0x3b432f(0x3ab),'DEF',_0x3b432f(0x468),_0x3b432f(0xc6),_0x3b432f(0x37d),_0x3b432f(0x36b)],_0x48a384=['HIT',_0x3b432f(0x148),_0x3b432f(0x81),_0x3b432f(0x3d8),'MEV',_0x3b432f(0xe8),'CNT',_0x3b432f(0x2df),_0x3b432f(0x1b0),_0x3b432f(0x6c)],_0x365405=[_0x3b432f(0x3a9),_0x3b432f(0xf5),_0x3b432f(0x3b0),_0x3b432f(0x170),'MCR',_0x3b432f(0x4b2),_0x3b432f(0x240),_0x3b432f(0x106),_0x3b432f(0x2d9),_0x3b432f(0x88)];if(_0x233fcd[_0x3b432f(0x207)](_0x19455f)){const _0x47fb6d=_0x233fcd[_0x3b432f(0x34f)](_0x19455f),_0x14e026=this[_0x3b432f(0x385)][_0x3b432f(0xbe)][_0x47fb6d]||0x0;return this['changeTextColor'](ColorManager['paramchangeTextColor'](_0x14e026)),(_0x14e026>=0x0?'+':'')+String(_0x14e026);}else{if(_0x48a384[_0x3b432f(0x207)](_0x19455f)){const _0x153b54=_0x48a384[_0x3b432f(0x34f)](_0x19455f);let _0x2635dc=0x0;for(const _0x248783 of this[_0x3b432f(0x385)][_0x3b432f(0x23a)]){if(_0x248783[_0x3b432f(0x30a)]!==0x16)continue;_0x248783[_0x3b432f(0x258)]===_0x153b54&&(_0x2635dc+=_0x248783[_0x3b432f(0x244)]||0x0);}return this[_0x3b432f(0xd4)](ColorManager[_0x3b432f(0x393)](_0x2635dc)),_0x2635dc*=0x64,(_0x2635dc>=0x0?'+':'')+String(_0x2635dc)+'%';}else{if(_0x365405['includes'](_0x19455f)){const _0x5e3364=_0x365405['indexOf'](_0x19455f);let _0x5a45bf=0x1;for(const _0x3e471c of this[_0x3b432f(0x385)][_0x3b432f(0x23a)]){if(_0x3e471c['code']!==0x17)continue;_0x3e471c[_0x3b432f(0x258)]===_0x5e3364&&(_0x5a45bf*=_0x3e471c[_0x3b432f(0x244)]||0x0);}let _0x10c03c=0x1;if([_0x3b432f(0x3a9),_0x3b432f(0x111),'PDR',_0x3b432f(0x106),_0x3b432f(0x2d9)][_0x3b432f(0x207)](_0x19455f))_0x10c03c=-0x1;return this[_0x3b432f(0xd4)](ColorManager[_0x3b432f(0x393)]((_0x5a45bf-0x1)*_0x10c03c)),_0x5a45bf*=0x64,String(_0x5a45bf)+'%';}}}return'';},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x1b9)]=function(_0x49b9d9){const _0x247f21=_0x312955,_0x57a2f0=[_0x247f21(0xd9),_0x247f21(0x48e),_0x247f21(0x3ab),_0x247f21(0x38d),_0x247f21(0x468),_0x247f21(0xc6),_0x247f21(0x37d),'LUK'],_0x425da5=_0x57a2f0[_0x49b9d9]||_0x247f21(0x9b);if(this['_customItemInfo'][_0x425da5])return this[_0x247f21(0x13f)][_0x425da5];const _0x54663b=Number(this[_0x247f21(0x385)][_0x247f21(0xbe)][_0x49b9d9]||0x0);return this[_0x247f21(0xd4)](ColorManager[_0x247f21(0x393)](_0x54663b)),(_0x54663b>=0x0?'+':'')+String(_0x54663b);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x38a)]=function(){const _0x5f2e92=_0x312955,_0x28f9c5=/<CUSTOM STATUS PARAM(?:|S|ETERS):[ ](.*)>/i;return this[_0x5f2e92(0x385)]&&this[_0x5f2e92(0x385)]['note']&&this['_item']['note'][_0x5f2e92(0x2c5)](_0x28f9c5);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x1cc)]=function(){const _0x49330a=_0x312955,_0x496529=/<CUSTOM STATUS PARAM(?:|S|ETERS):[ ](.*)>/i;this['_item'][_0x49330a(0x1ba)]['match'](_0x496529);const _0x25570d=String(RegExp['$1'])[_0x49330a(0x3a1)](',')[_0x49330a(0x4ac)](_0x429401=>_0x429401['toUpperCase']()[_0x49330a(0x349)]()),_0x5149a2=[_0x49330a(0xd9),_0x49330a(0x48e),'ATK','DEF',_0x49330a(0x468),'MDF',_0x49330a(0x37d),_0x49330a(0x36b)],_0x2ae062=[_0x49330a(0x28c),_0x49330a(0x148),_0x49330a(0x81),_0x49330a(0x3d8),_0x49330a(0x21f),_0x49330a(0xe8),_0x49330a(0x123),_0x49330a(0x2df),_0x49330a(0x1b0),_0x49330a(0x6c)],_0x2a06c7=['TGR',_0x49330a(0xf5),'REC','PHA','MCR','TCR',_0x49330a(0x240),_0x49330a(0x106),'FDR',_0x49330a(0x88)];let _0x3ba8cf=[];for(const _0x28b9c6 of _0x25570d){if(_0x5149a2[_0x49330a(0x207)](_0x28b9c6))_0x3ba8cf['push'](_0x28b9c6);if(_0x2ae062['includes'](_0x28b9c6))_0x3ba8cf[_0x49330a(0x4af)](_0x28b9c6);if(_0x2a06c7['includes'](_0x28b9c6))_0x3ba8cf['push'](_0x28b9c6);}return _0x3ba8cf;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x2d7)]=function(){const _0x4b4a36=_0x312955;VisuMZ['ItemsEquipsCore'][_0x4b4a36(0x3a4)][_0x4b4a36(0x3fa)][_0x4b4a36(0x243)][_0x4b4a36(0x3b4)](this);},Window_ShopStatus[_0x312955(0x1b8)]['drawItemName']=function(_0x25ddfc,_0x34d333,_0x466811,_0x5763be){const _0x60def6=_0x312955,_0x49eab3=DataManager[_0x60def6(0x1d9)](_0x25ddfc,_0x34d333,_0x466811,_0x5763be)&&Imported['VisuMZ_1_SkillsStatesCore'],_0x281c88=_0x25ddfc?_0x25ddfc[_0x60def6(0x392)]:'';if(_0x49eab3)Window_SkillList[_0x60def6(0x1b8)][_0x60def6(0x3be)][_0x60def6(0x3b4)](this,_0x25ddfc);Window_Base[_0x60def6(0x1b8)][_0x60def6(0x348)][_0x60def6(0x3b4)](this,_0x25ddfc,_0x34d333,_0x466811,_0x5763be);if(_0x49eab3)_0x25ddfc[_0x60def6(0x392)]=_0x281c88;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x32e)]=function(){const _0x133d77=_0x312955;this['_customItemInfo']={};if(!this[_0x133d77(0x385)])return;const _0x4b93dc=this[_0x133d77(0x385)][_0x133d77(0x1ba)];if(_0x4b93dc['match'](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){const _0x6138e9=String(RegExp['$1'])[_0x133d77(0x3a1)](/[\r\n]+/);for(const _0x136b02 of _0x6138e9){if(_0x136b02[_0x133d77(0x2c5)](/(.*):[ ](.*)/i)){const _0x4b50d8=String(RegExp['$1'])[_0x133d77(0x205)]()[_0x133d77(0x349)](),_0x8c6b33=String(RegExp['$2'])[_0x133d77(0x349)]();this[_0x133d77(0x13f)][_0x4b50d8]=_0x8c6b33;}}}},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x453)]=function(){const _0xe47712=_0x312955;return Math[_0xe47712(0x76)](0x1,$gameSystem['mainFontSize']()-0x4);},Window_ShopStatus[_0x312955(0x1b8)]['resetFontSettings']=function(){const _0x512e6a=_0x312955;Window_StatusBase['prototype'][_0x512e6a(0x219)][_0x512e6a(0x3b4)](this),this[_0x512e6a(0x164)][_0x512e6a(0xe4)]=this[_0x512e6a(0x2ff)]||this['contents'][_0x512e6a(0xe4)],this[_0x512e6a(0x164)][_0x512e6a(0x465)]=this['_resetFontColor']||this[_0x512e6a(0x164)][_0x512e6a(0x465)];},Window_ShopStatus[_0x312955(0x1b8)]['fontSizeRatio']=function(){const _0x33e688=_0x312955;return this[_0x33e688(0x164)][_0x33e688(0xe4)]/$gameSystem[_0x33e688(0xc5)]();},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x6e)]=function(_0x2501ec,_0x5c4593,_0x3c224e){const _0x18accd=_0x312955,_0x34a830=ImageManager['loadSystem'](_0x18accd(0x2ca)),_0x1d8c14=ImageManager[_0x18accd(0x340)],_0x29523d=ImageManager[_0x18accd(0x2e5)],_0x6d3bcd=_0x2501ec%0x10*_0x1d8c14,_0x3eabcf=Math[_0x18accd(0x433)](_0x2501ec/0x10)*_0x29523d,_0x4b3b3d=Math[_0x18accd(0x175)](_0x1d8c14*this[_0x18accd(0x446)]()),_0x585e4d=Math[_0x18accd(0x175)](_0x29523d*this[_0x18accd(0x446)]());this[_0x18accd(0x164)]['blt'](_0x34a830,_0x6d3bcd,_0x3eabcf,_0x1d8c14,_0x29523d,_0x5c4593,_0x3c224e,_0x4b3b3d,_0x585e4d);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x40d)]=function(_0x181a0b,_0x24636d){const _0x4899dd=_0x312955,_0x20a949=ImageManager[_0x4899dd(0xb4)]||0x20,_0x4ed505=ImageManager[_0x4899dd(0x497)]||0x20;if(_0x24636d[_0x4899dd(0x1eb)]){const _0x28d258=_0x20a949-ImageManager[_0x4899dd(0x340)],_0x3a258b=_0x4ed505-ImageManager[_0x4899dd(0x2e5)];let _0x2a5447=0x2,_0x57fb75=0x2;this['lineHeight']()!==0x24&&(_0x57fb75=Math[_0x4899dd(0x433)]((this[_0x4899dd(0x337)]()-_0x4ed505)/0x2));const _0xf884b5=_0x24636d['x']+Math[_0x4899dd(0x175)](Math[_0x4899dd(0x433)](_0x28d258/0x2)*this[_0x4899dd(0x446)]())+_0x2a5447,_0xcde422=_0x24636d['y']+Math['ceil'](Math[_0x4899dd(0x433)](_0x3a258b/0x2)*this[_0x4899dd(0x446)]())+_0x57fb75;this[_0x4899dd(0x6e)](_0x181a0b,_0xf884b5,_0xcde422);}_0x24636d['x']+=Math['ceil'](_0x20a949*this[_0x4899dd(0x446)]()),_0x24636d['x']+=Math['ceil'](0x4*this['fontSizeRatio']());},Window_ShopStatus['prototype']['drawItemKeyData']=function(_0x23baf8,_0x4e309c,_0x2629de,_0x5614c3,_0x4d2189,_0x2a75cf){const _0x459917=_0x312955;_0x23baf8=_0x23baf8||'',_0x2a75cf=_0x2a75cf||_0x459917(0x279),this['_resetFontSize']=this[_0x459917(0x453)](),this[_0x459917(0x1b3)]=_0x4d2189?ColorManager[_0x459917(0x3c5)]():this[_0x459917(0x164)][_0x459917(0x465)],_0x4e309c+=this['itemPadding'](),_0x5614c3-=this[_0x459917(0x321)]()*0x2;const _0x1cc0f5=this[_0x459917(0x285)](_0x23baf8);if(_0x2a75cf===_0x459917(0x2e7))_0x4e309c=_0x4e309c+Math['floor']((_0x5614c3-_0x1cc0f5[_0x459917(0x250)])/0x2);else _0x2a75cf===_0x459917(0x420)&&(_0x4e309c=_0x4e309c+_0x5614c3-_0x1cc0f5[_0x459917(0x250)]);_0x2629de+=(this[_0x459917(0x337)]()-_0x1cc0f5[_0x459917(0x98)])/0x2,this[_0x459917(0x355)](_0x23baf8,_0x4e309c,_0x2629de,_0x5614c3),this[_0x459917(0x2ff)]=undefined,this[_0x459917(0x1b3)]=undefined,this[_0x459917(0x219)]();},Window_ShopStatus['prototype'][_0x312955(0x1b5)]=function(_0x348cb9,_0x5e2e9b,_0x520a98){const _0x59dacb=_0x312955;if(!DataManager['isItem'](this[_0x59dacb(0x385)]))return![];const _0x4518eb=this['getItemConsumableLabel']();this[_0x59dacb(0xf1)](_0x4518eb,_0x348cb9,_0x5e2e9b,_0x520a98,!![]);const _0x2382c4=this[_0x59dacb(0x15e)]();return this[_0x59dacb(0xf1)](_0x2382c4,_0x348cb9,_0x5e2e9b,_0x520a98,![],_0x59dacb(0x420)),this[_0x59dacb(0x3a7)](_0x348cb9,_0x5e2e9b,_0x520a98),this[_0x59dacb(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x459)]=function(){const _0x362ff9=_0x312955;return VisuMZ['ItemsEquipsCore'][_0x362ff9(0x3a4)][_0x362ff9(0x3fa)][_0x362ff9(0x295)];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x15e)]=function(){const _0x146d35=_0x312955,_0xc94c65=_0x146d35(0x317);if(this[_0x146d35(0x13f)][_0xc94c65])return this[_0x146d35(0x13f)][_0xc94c65];return this['canConsumeItem']()?VisuMZ[_0x146d35(0x1af)]['Settings'][_0x146d35(0x3fa)][_0x146d35(0x4a8)]:VisuMZ['ItemsEquipsCore'][_0x146d35(0x3a4)][_0x146d35(0x3fa)][_0x146d35(0x21e)];},Window_ShopStatus[_0x312955(0x1b8)]['canConsumeItem']=function(){const _0x35a902=_0x312955;return VisuMZ[_0x35a902(0x1e5)]&&VisuMZ['CoreEngine'][_0x35a902(0x3a4)][_0x35a902(0xba)][_0x35a902(0x382)]&&DataManager[_0x35a902(0x27e)](this[_0x35a902(0x385)])?![]:this[_0x35a902(0x385)][_0x35a902(0x2fb)];},Window_ShopStatus['prototype'][_0x312955(0x1aa)]=function(_0xfeccf0,_0x4dc30b,_0x4c839c){const _0x5ccb97=_0x312955;if(!this[_0x5ccb97(0x42f)]()&&!DataManager[_0x5ccb97(0x498)](this[_0x5ccb97(0x385)]))return![];if(DataManager['isKeyItem'](this[_0x5ccb97(0x385)])&&!$dataSystem['optKeyItemsNumber']){const _0x10fd47=TextManager[_0x5ccb97(0x495)];this[_0x5ccb97(0xf1)](_0x10fd47,_0xfeccf0,_0x4dc30b,_0x4c839c,!![],_0x5ccb97(0x2e7));}else{const _0x230121=TextManager[_0x5ccb97(0x4a5)];this[_0x5ccb97(0xf1)](_0x230121,_0xfeccf0,_0x4dc30b,_0x4c839c,!![]);const _0x2bd175=this[_0x5ccb97(0x1d3)]();this[_0x5ccb97(0xf1)](_0x2bd175,_0xfeccf0,_0x4dc30b,_0x4c839c,![],'right');}return this['drawItemDarkRect'](_0xfeccf0,_0x4dc30b,_0x4c839c),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x1d3)]=function(){const _0x28c17f=_0x312955,_0x2862a1=_0x28c17f(0x452);if(this[_0x28c17f(0x13f)][_0x2862a1])return this[_0x28c17f(0x13f)][_0x2862a1];const _0x1d6e94=VisuMZ['ItemsEquipsCore'][_0x28c17f(0x3a4)][_0x28c17f(0x466)][_0x28c17f(0xe2)];return _0x1d6e94[_0x28c17f(0x3d3)]($gameParty[_0x28c17f(0xe9)](this['_item']));},Window_ShopStatus[_0x312955(0x1b8)]['drawItemOccasion']=function(_0x2810cd,_0x5c3b7d,_0x4e4954){const _0xf0cc4f=_0x312955,_0x1cf12c=this['getItemOccasionText']();return this[_0xf0cc4f(0xf1)](_0x1cf12c,_0x2810cd,_0x5c3b7d,_0x4e4954,![],_0xf0cc4f(0x2e7)),this[_0xf0cc4f(0x3a7)](_0x2810cd,_0x5c3b7d,_0x4e4954),this[_0xf0cc4f(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)]['getItemOccasionText']=function(){const _0x40f501=_0x312955,_0xe9e12d=_0x40f501(0x120);if(this[_0x40f501(0x13f)][_0xe9e12d])return this['_customItemInfo'][_0xe9e12d];const _0x1afee9=VisuMZ['ItemsEquipsCore'][_0x40f501(0x3a4)]['StatusWindow'],_0xcef583=_0x40f501(0x1f3)['format'](this[_0x40f501(0x385)][_0x40f501(0x140)]);return _0x1afee9[_0xcef583];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x3fe)]=function(_0xb45d2c,_0x509afa,_0x5f13df){const _0x4508d9=_0x312955,_0x565a9d=this['getItemScopeText']();return this[_0x4508d9(0xf1)](_0x565a9d,_0xb45d2c,_0x509afa,_0x5f13df,![],_0x4508d9(0x2e7)),this[_0x4508d9(0x3a7)](_0xb45d2c,_0x509afa,_0x5f13df),this[_0x4508d9(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x47c)]=function(){const _0x446bf0=_0x312955,_0x4c615b='SCOPE';if(this[_0x446bf0(0x13f)][_0x4c615b])return this[_0x446bf0(0x13f)][_0x4c615b];const _0x23102e=VisuMZ[_0x446bf0(0x1af)][_0x446bf0(0x3a4)][_0x446bf0(0x3fa)];if(Imported['VisuMZ_1_BattleCore']){const _0x3badaa=this[_0x446bf0(0x385)]['note'];if(_0x3badaa[_0x446bf0(0x2c5)](/<TARGET:[ ](.*)>/i)){const _0x2acd96=String(RegExp['$1']);if(_0x2acd96[_0x446bf0(0x2c5)](/(\d+) RANDOM ANY/i))return _0x23102e[_0x446bf0(0x32c)][_0x446bf0(0x3d3)](Number(RegExp['$1']));else{if(_0x2acd96[_0x446bf0(0x2c5)](/(\d+) RANDOM (?:ENEMY|ENEMIES|FOE|FOES)/i))return _0x23102e[_0x446bf0(0x460)][_0x446bf0(0x3d3)](Number(RegExp['$1']));else{if(_0x2acd96[_0x446bf0(0x2c5)](/(\d+) RANDOM (?:ALLY|ALLIES|FRIEND|FRIENDS)/i))return _0x23102e[_0x446bf0(0x419)][_0x446bf0(0x3d3)](Number(RegExp['$1']));else{if(_0x2acd96['match'](/ALL (?:ALLY|ALLIES|FRIEND|FRIENDS) (?:BUT|EXCEPT) (?:USER|SELF)/i))return _0x23102e[_0x446bf0(0x13d)];else{if(_0x2acd96[_0x446bf0(0x2c5)](/ALLY OR ENEMY/i))return _0x23102e[_0x446bf0(0x172)]||_0x23102e[_0x446bf0(0x17a)];else{if(_0x2acd96['match'](/ENEMY OR ALLY/i))return _0x23102e[_0x446bf0(0xb8)]||_0x23102e[_0x446bf0(0x2fe)];}}}}}}}const _0x4acc7e=_0x446bf0(0x45d)[_0x446bf0(0x3d3)](this[_0x446bf0(0x385)][_0x446bf0(0x20f)]);return _0x23102e[_0x4acc7e];},Window_ShopStatus['prototype'][_0x312955(0x144)]=function(_0xfd6efe,_0x1e2f0b,_0x50eb6a){const _0x5b4bfa=_0x312955,_0xe996fe=this[_0x5b4bfa(0x49f)]();this['drawItemKeyData'](_0xe996fe,_0xfd6efe,_0x1e2f0b,_0x50eb6a,!![]);const _0x1fe73d=this[_0x5b4bfa(0x25a)]();return this[_0x5b4bfa(0xf1)](_0x1fe73d,_0xfd6efe,_0x1e2f0b,_0x50eb6a,![],'right'),this[_0x5b4bfa(0x3a7)](_0xfd6efe,_0x1e2f0b,_0x50eb6a),this[_0x5b4bfa(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x49f)]=function(){const _0x487bfe=_0x312955;return VisuMZ[_0x487bfe(0x1af)][_0x487bfe(0x3a4)][_0x487bfe(0x3fa)]['LabelSpeed'];},Window_ShopStatus['prototype'][_0x312955(0x25a)]=function(){const _0x104544=_0x312955,_0x2cd69f=_0x104544(0x9f);if(this['_customItemInfo'][_0x2cd69f])return this['_customItemInfo'][_0x2cd69f];const _0x141c2c=this[_0x104544(0x385)][_0x104544(0x2db)];if(_0x141c2c>=0x7d0)return VisuMZ[_0x104544(0x1af)][_0x104544(0x3a4)][_0x104544(0x3fa)][_0x104544(0xea)];else{if(_0x141c2c>=0x3e8)return VisuMZ['ItemsEquipsCore'][_0x104544(0x3a4)][_0x104544(0x3fa)][_0x104544(0x3f9)];else{if(_0x141c2c>0x0)return VisuMZ[_0x104544(0x1af)]['Settings']['StatusWindow'][_0x104544(0x151)];else{if(_0x141c2c===0x0)return VisuMZ[_0x104544(0x1af)][_0x104544(0x3a4)][_0x104544(0x3fa)][_0x104544(0x43a)];else{if(_0x141c2c>-0x3e8)return VisuMZ[_0x104544(0x1af)]['Settings'][_0x104544(0x3fa)][_0x104544(0x48d)];else{if(_0x141c2c>-0x7d0)return VisuMZ[_0x104544(0x1af)]['Settings'][_0x104544(0x3fa)]['SpeedNeg1999'];else return _0x141c2c<=-0x7d0?VisuMZ[_0x104544(0x1af)]['Settings'][_0x104544(0x3fa)][_0x104544(0x1b7)]:_0x104544(0x14b);}}}}}},Window_ShopStatus[_0x312955(0x1b8)]['drawItemSuccessRate']=function(_0x19924b,_0x231ba7,_0x2ce1be){const _0x1a1442=_0x312955,_0x3cdcc6=this[_0x1a1442(0x4b1)]();this[_0x1a1442(0xf1)](_0x3cdcc6,_0x19924b,_0x231ba7,_0x2ce1be,!![]);const _0x5c27b3=this['getItemSuccessRateText']();return this[_0x1a1442(0xf1)](_0x5c27b3,_0x19924b,_0x231ba7,_0x2ce1be,![],_0x1a1442(0x420)),this[_0x1a1442(0x3a7)](_0x19924b,_0x231ba7,_0x2ce1be),this[_0x1a1442(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x4b1)]=function(){const _0x41e76f=_0x312955;return VisuMZ[_0x41e76f(0x1af)]['Settings'][_0x41e76f(0x3fa)][_0x41e76f(0x162)];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x128)]=function(){const _0x1564a9=_0x312955,_0x464171=_0x1564a9(0x136);if(this['_customItemInfo'][_0x464171])return this[_0x1564a9(0x13f)][_0x464171];if(Imported[_0x1564a9(0x24a)]){const _0x3185ed=this[_0x1564a9(0x385)][_0x1564a9(0x1ba)];if(_0x3185ed[_0x1564a9(0x2c5)](/<ALWAYS HIT>/i))return'100%';else{if(_0x3185ed[_0x1564a9(0x2c5)](/<ALWAYS HIT RATE: (\d+)([%％])>/i))return _0x1564a9(0x9e)[_0x1564a9(0x3d3)](Number(RegExp['$1']));}}return'%1%'[_0x1564a9(0x3d3)](this[_0x1564a9(0x385)]['successRate']);},Window_ShopStatus[_0x312955(0x1b8)]['drawItemRepeats']=function(_0x59072d,_0x2e9f6c,_0x3cac4a){const _0x4d5f21=_0x312955,_0x7de04d=this[_0x4d5f21(0x327)]();this[_0x4d5f21(0xf1)](_0x7de04d,_0x59072d,_0x2e9f6c,_0x3cac4a,!![]);const _0x5b0c31=this[_0x4d5f21(0x7a)]();return this[_0x4d5f21(0xf1)](_0x5b0c31,_0x59072d,_0x2e9f6c,_0x3cac4a,![],_0x4d5f21(0x420)),this[_0x4d5f21(0x3a7)](_0x59072d,_0x2e9f6c,_0x3cac4a),this[_0x4d5f21(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)]['getItemRepeatsLabel']=function(){const _0x3a0323=_0x312955;return VisuMZ[_0x3a0323(0x1af)][_0x3a0323(0x3a4)]['StatusWindow'][_0x3a0323(0x42b)];},Window_ShopStatus['prototype'][_0x312955(0x7a)]=function(){const _0x44fca1=_0x312955,_0x2a2b3d=_0x44fca1(0x3a8);if(this[_0x44fca1(0x13f)][_0x2a2b3d])return this[_0x44fca1(0x13f)][_0x2a2b3d];const _0x1345bc=_0x44fca1(0x33c);return _0x1345bc[_0x44fca1(0x3d3)](this[_0x44fca1(0x385)]['repeats']);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x159)]=function(_0x3f547d,_0x28dee7,_0xad992c){const _0x5d7667=_0x312955,_0x2477d1=this[_0x5d7667(0x1f0)]();this[_0x5d7667(0xf1)](_0x2477d1,_0x3f547d,_0x28dee7,_0xad992c,!![]);const _0x252de5=this[_0x5d7667(0x83)]();return this[_0x5d7667(0xf1)](_0x252de5,_0x3f547d,_0x28dee7,_0xad992c,![],_0x5d7667(0x420)),this['drawItemDarkRect'](_0x3f547d,_0x28dee7,_0xad992c),this[_0x5d7667(0x219)](),!![];},Window_ShopStatus['prototype'][_0x312955(0x1f0)]=function(){const _0x3c1650=_0x312955;return VisuMZ[_0x3c1650(0x1af)]['Settings'][_0x3c1650(0x3fa)]['LabelHitType'];},Window_ShopStatus['prototype']['getItemHitTypeText']=function(){const _0xcfea5=_0x312955,_0x350ff2='HIT\x20TYPE';if(this[_0xcfea5(0x13f)][_0x350ff2])return this[_0xcfea5(0x13f)][_0x350ff2];if(DataManager[_0xcfea5(0x182)]&&DataManager[_0xcfea5(0x182)](this[_0xcfea5(0x385)]))return TextManager[_0xcfea5(0x156)];const _0x4bd434=VisuMZ[_0xcfea5(0x1af)][_0xcfea5(0x3a4)][_0xcfea5(0x3fa)],_0x5257d5='HitType%1'['format'](this[_0xcfea5(0x385)][_0xcfea5(0x3e0)]);return _0x4bd434[_0x5257d5];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x264)]=function(_0x5c5379,_0x5a39ff,_0x23100a){const _0x201313=_0x312955;if(this[_0x201313(0x385)][_0x201313(0x333)][_0x201313(0x303)]<=0x0)return _0x5a39ff;if(this[_0x201313(0x108)](_0x5c5379,_0x5a39ff,_0x23100a))_0x5a39ff+=this[_0x201313(0x337)]();if(this[_0x201313(0x370)](_0x5c5379,_0x5a39ff,_0x23100a))_0x5a39ff+=this[_0x201313(0x337)]();return this[_0x201313(0x219)](),_0x5a39ff;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x108)]=function(_0x32279b,_0x372299,_0x240895){const _0x2550b5=_0x312955,_0x44884b=this[_0x2550b5(0x1e7)]();this[_0x2550b5(0xf1)](_0x44884b,_0x32279b,_0x372299,_0x240895,!![]);const _0x574408=this['getItemDamageElementText']();return this[_0x2550b5(0xf1)](_0x574408,_0x32279b,_0x372299,_0x240895,![],_0x2550b5(0x420)),this['drawItemDarkRect'](_0x32279b,_0x372299,_0x240895),this[_0x2550b5(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x1e7)]=function(){const _0x1fa8f1=_0x312955;return VisuMZ[_0x1fa8f1(0x1af)]['Settings'][_0x1fa8f1(0x3fa)]['LabelElement'];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x435)]=function(){const _0x520fd2=_0x312955,_0x12e1d0=_0x520fd2(0x276);if(this['_customItemInfo'][_0x12e1d0])return this[_0x520fd2(0x13f)][_0x12e1d0];if(this['_item']['damage'][_0x520fd2(0x169)]<=-0x1)return VisuMZ[_0x520fd2(0x1af)][_0x520fd2(0x3a4)][_0x520fd2(0x3fa)]['ElementWeapon'];else return this[_0x520fd2(0x385)][_0x520fd2(0x333)][_0x520fd2(0x169)]===0x0?VisuMZ[_0x520fd2(0x1af)][_0x520fd2(0x3a4)][_0x520fd2(0x3fa)]['ElementNone']:$dataSystem[_0x520fd2(0xb2)][this['_item'][_0x520fd2(0x333)][_0x520fd2(0x169)]];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x370)]=function(_0x98639f,_0x3b07ab,_0x4b4c4b){const _0x38d5d3=_0x312955,_0x7cf1d1=this[_0x38d5d3(0x27c)]();this[_0x38d5d3(0xf1)](_0x7cf1d1,_0x98639f,_0x3b07ab,_0x4b4c4b,!![]),this[_0x38d5d3(0x174)]();const _0x5dfa7a=this[_0x38d5d3(0x480)](),_0x16bb75=ColorManager[_0x38d5d3(0x1c7)]([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this['_item']['damage'][_0x38d5d3(0x303)]]);return this['changeTextColor'](_0x16bb75),this[_0x38d5d3(0xf1)](_0x5dfa7a,_0x98639f,_0x3b07ab,_0x4b4c4b,![],_0x38d5d3(0x420)),this[_0x38d5d3(0x3a7)](_0x98639f,_0x3b07ab,_0x4b4c4b),this[_0x38d5d3(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x27c)]=function(){const _0x324414=_0x312955;return Imported['VisuMZ_1_BattleCore']&&DataManager[_0x324414(0x2d8)](this['_item'])!==_0x324414(0x3f7)?this[_0x324414(0x179)]():this[_0x324414(0x8f)]();},Window_ShopStatus['prototype'][_0x312955(0x8f)]=function(){const _0xf7c154=_0x312955,_0x5ba57b=VisuMZ[_0xf7c154(0x1af)][_0xf7c154(0x3a4)]['StatusWindow'],_0x3b4084='DamageType%1'[_0xf7c154(0x3d3)](this[_0xf7c154(0x385)][_0xf7c154(0x333)][_0xf7c154(0x303)]),_0x59ea8e=[null,TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp']][this[_0xf7c154(0x385)][_0xf7c154(0x333)][_0xf7c154(0x303)]];return _0x5ba57b[_0x3b4084][_0xf7c154(0x3d3)](_0x59ea8e);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x174)]=function(){const _0xc55dba=_0x312955,_0x11a300=$gameActors[_0xc55dba(0x1a5)](0x1);this['_tempActorA']=JsonEx['makeDeepCopy'](_0x11a300),this[_0xc55dba(0x451)]=JsonEx[_0xc55dba(0x1ac)](_0x11a300);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x480)]=function(){const _0x42ced5=_0x312955,_0x36b6db=_0x42ced5(0xa6);if(this[_0x42ced5(0x13f)][_0x36b6db])return this['_customItemInfo'][_0x36b6db];return Imported[_0x42ced5(0x24a)]&&DataManager[_0x42ced5(0x2d8)](this[_0x42ced5(0x385)])!==_0x42ced5(0x3f7)?this[_0x42ced5(0x2ad)]():this['getItemDamageAmountTextOriginal']();},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x3e4)]=function(){const _0x4afd8c=_0x312955;window['a']=this['_tempActorA'],window['b']=this[_0x4afd8c(0x451)],this[_0x4afd8c(0x199)][_0x4afd8c(0x2f2)](!![]),this[_0x4afd8c(0x451)][_0x4afd8c(0x2f2)]([0x3,0x4][_0x4afd8c(0x207)](this[_0x4afd8c(0x385)][_0x4afd8c(0x333)][_0x4afd8c(0x303)]));let _0x3e45be=this['_item'][_0x4afd8c(0x333)][_0x4afd8c(0xbd)];try{const _0x56f83d=Math[_0x4afd8c(0x76)](eval(_0x3e45be),0x0)/window['a']['atk'];return this[_0x4afd8c(0x3a6)](),isNaN(_0x56f83d)?_0x4afd8c(0x14b):_0x4afd8c(0x9e)['format'](Math[_0x4afd8c(0x288)](_0x56f83d*0x64));}catch(_0x4f5541){return $gameTemp[_0x4afd8c(0x3bd)]()&&(console[_0x4afd8c(0x255)](_0x4afd8c(0x1a2)[_0x4afd8c(0x3d3)](this[_0x4afd8c(0x385)]['name'])),console[_0x4afd8c(0x255)](_0x4f5541)),this[_0x4afd8c(0x3a6)](),_0x4afd8c(0x14b);}},Window_ShopStatus['prototype'][_0x312955(0x3a6)]=function(){window['a']=undefined,window['b']=undefined;},Window_ShopStatus['prototype'][_0x312955(0x13b)]=function(_0x11eb54,_0x2d6dbe,_0x126b5f){const _0x3a0dfc=_0x312955;if(!this['makeItemData']())return _0x2d6dbe;if(this[_0x3a0dfc(0x1b1)](_0x11eb54,_0x2d6dbe,_0x126b5f))_0x2d6dbe+=this['lineHeight']();if(this[_0x3a0dfc(0x328)](_0x11eb54,_0x2d6dbe,_0x126b5f))_0x2d6dbe+=this['lineHeight']();if(this['drawItemEffectsTpRecovery'](_0x11eb54,_0x2d6dbe,_0x126b5f))_0x2d6dbe+=this[_0x3a0dfc(0x337)]();if(this['drawItemEffectsHpDamage'](_0x11eb54,_0x2d6dbe,_0x126b5f))_0x2d6dbe+=this['lineHeight']();if(this[_0x3a0dfc(0x1a1)](_0x11eb54,_0x2d6dbe,_0x126b5f))_0x2d6dbe+=this[_0x3a0dfc(0x337)]();if(this[_0x3a0dfc(0x30e)](_0x11eb54,_0x2d6dbe,_0x126b5f))_0x2d6dbe+=this[_0x3a0dfc(0x337)]();if(this[_0x3a0dfc(0x2f6)](_0x11eb54,_0x2d6dbe,_0x126b5f))_0x2d6dbe+=this[_0x3a0dfc(0x337)]();if(this[_0x3a0dfc(0x146)](_0x11eb54,_0x2d6dbe,_0x126b5f))_0x2d6dbe+=this[_0x3a0dfc(0x337)]();if(this[_0x3a0dfc(0x463)](_0x11eb54,_0x2d6dbe,_0x126b5f))_0x2d6dbe+=this['lineHeight']();return this[_0x3a0dfc(0x219)](),_0x2d6dbe;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x113)]=function(){const _0x5df7b8=_0x312955;return this[_0x5df7b8(0x385)][_0x5df7b8(0x2fc)];},Window_ShopStatus['prototype']['makeItemData']=function(){const _0x4f0614=_0x312955;let _0x54a6a7=![];this[_0x4f0614(0x17c)]={'rateHP':0x0,'flatHP':0x0,'rateMP':0x0,'flatMP':0x0,'gainTP':0x0,'selfTP':0x0,'addState':[],'removeState':[],'changeBuff':[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],'removeBuff':[],'removeDebuff':[],'addStateBuffChanges':![],'removeStateBuffChanges':![]};const _0x4300fb=this['getItemEffects']();for(const _0x33b4a7 of _0x4300fb){switch(_0x33b4a7['code']){case Game_Action[_0x4f0614(0x166)]:this[_0x4f0614(0x17c)][_0x4f0614(0x265)]+=_0x33b4a7[_0x4f0614(0x4b8)],this['_itemData']['flatHP']+=_0x33b4a7['value2'],_0x54a6a7=!![];break;case Game_Action[_0x4f0614(0x3db)]:this[_0x4f0614(0x17c)][_0x4f0614(0x1df)]+=_0x33b4a7['value1'],this['_itemData'][_0x4f0614(0xf2)]+=_0x33b4a7['value2'],_0x54a6a7=!![];break;case Game_Action[_0x4f0614(0x241)]:this[_0x4f0614(0x17c)][_0x4f0614(0xfa)]+=_0x33b4a7[_0x4f0614(0x4b8)],_0x54a6a7=!![];break;case Game_Action[_0x4f0614(0x428)]:this[_0x4f0614(0x17c)][_0x4f0614(0x35b)][_0x4f0614(0x4af)](_0x33b4a7[_0x4f0614(0x258)]),_0x54a6a7=!![];break;case Game_Action[_0x4f0614(0x3dc)]:this[_0x4f0614(0x17c)]['removeState']['push'](_0x33b4a7[_0x4f0614(0x258)]),this['_itemData'][_0x4f0614(0x201)]=!![],_0x54a6a7=!![];break;case Game_Action['EFFECT_ADD_BUFF']:this[_0x4f0614(0x17c)][_0x4f0614(0x6a)][_0x33b4a7['dataId']]+=0x1,_0x54a6a7=!![];break;case Game_Action[_0x4f0614(0x1ce)]:this[_0x4f0614(0x17c)][_0x4f0614(0x6a)][_0x33b4a7[_0x4f0614(0x258)]]-=0x1,_0x54a6a7=!![];break;case Game_Action[_0x4f0614(0x168)]:this[_0x4f0614(0x17c)][_0x4f0614(0x25f)]['push'](_0x33b4a7[_0x4f0614(0x258)]),this[_0x4f0614(0x17c)][_0x4f0614(0x201)]=!![],_0x54a6a7=!![];break;case Game_Action['EFFECT_REMOVE_DEBUFF']:this[_0x4f0614(0x17c)][_0x4f0614(0x316)][_0x4f0614(0x4af)](_0x33b4a7[_0x4f0614(0x258)]),this[_0x4f0614(0x17c)]['removeStateBuffChanges']=!![],_0x54a6a7=!![];break;}}if(this[_0x4f0614(0x17c)][_0x4f0614(0x35b)][_0x4f0614(0x2e4)]>0x0)this['_itemData'][_0x4f0614(0x48f)]=!![];for(let _0x4eb3dc=0x0;_0x4eb3dc<this[_0x4f0614(0x17c)][_0x4f0614(0x6a)][_0x4f0614(0x2e4)];_0x4eb3dc++){if(this[_0x4f0614(0x17c)]['changeBuff'][_0x4eb3dc]!==0x0)this[_0x4f0614(0x17c)][_0x4f0614(0x48f)]=!![];}this[_0x4f0614(0x385)][_0x4f0614(0x3f8)]!==0x0&&(this['_itemData'][_0x4f0614(0x2bc)]=this[_0x4f0614(0x385)]['tpGain'],_0x54a6a7=!![]);const _0x40adea=['HP\x20RECOVERY','MP\x20RECOVERY',_0x4f0614(0x30c),_0x4f0614(0x2a7),_0x4f0614(0x28d),_0x4f0614(0x373),'USER\x20TP\x20GAIN',_0x4f0614(0x49c),_0x4f0614(0x3c3)];for(const _0x4afa1a of _0x40adea){if(this[_0x4f0614(0x13f)][_0x4afa1a]){_0x54a6a7=!![];break;}}return _0x54a6a7;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x1b1)]=function(_0x52806c,_0x4e072f,_0xf179b4){const _0x5658e2=_0x312955,_0x432e51=_0x5658e2(0x322);if(this[_0x5658e2(0x17c)][_0x5658e2(0x265)]<=0x0&&this[_0x5658e2(0x17c)][_0x5658e2(0x12a)]<=0x0&&!this[_0x5658e2(0x13f)][_0x432e51])return![];const _0x21c018=this[_0x5658e2(0x272)]();this[_0x5658e2(0xf1)](_0x21c018,_0x52806c,_0x4e072f,_0xf179b4,!![]);const _0x2be5b5=this[_0x5658e2(0x2cb)]();return this[_0x5658e2(0xd4)](ColorManager[_0x5658e2(0x1c7)](0x1)),this['drawItemKeyData'](_0x2be5b5,_0x52806c,_0x4e072f,_0xf179b4,![],_0x5658e2(0x420)),this['drawItemDarkRect'](_0x52806c,_0x4e072f,_0xf179b4),this[_0x5658e2(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x272)]=function(){const _0x5d2ef8=_0x312955,_0x29767c=VisuMZ[_0x5d2ef8(0x1af)][_0x5d2ef8(0x3a4)]['StatusWindow'][_0x5d2ef8(0x1ea)];return _0x29767c['format'](TextManager['hp']);},Window_ShopStatus['prototype'][_0x312955(0x2cb)]=function(){const _0x1f9e9e=_0x312955,_0x45d016=_0x1f9e9e(0x322);if(this[_0x1f9e9e(0x13f)][_0x45d016])return this[_0x1f9e9e(0x13f)][_0x45d016];let _0x24a4bd='';if(this['_itemData'][_0x1f9e9e(0x265)]>0x0)_0x24a4bd+=_0x1f9e9e(0x23d)[_0x1f9e9e(0x3d3)](Math[_0x1f9e9e(0x433)](this[_0x1f9e9e(0x17c)]['rateHP']*0x64));if(this[_0x1f9e9e(0x17c)][_0x1f9e9e(0x265)]>0x0&&this[_0x1f9e9e(0x17c)][_0x1f9e9e(0x12a)]>0x0)_0x24a4bd+='\x20';if(this[_0x1f9e9e(0x17c)][_0x1f9e9e(0x12a)]>0x0)_0x24a4bd+=_0x1f9e9e(0x90)[_0x1f9e9e(0x3d3)](this[_0x1f9e9e(0x17c)][_0x1f9e9e(0x12a)]);return _0x24a4bd;},Window_ShopStatus['prototype']['drawItemEffectsMpRecovery']=function(_0x52f938,_0x22b73c,_0x1859c7){const _0x484bab=_0x312955,_0x26314d=_0x484bab(0x2aa);if(this[_0x484bab(0x17c)][_0x484bab(0x1df)]<=0x0&&this['_itemData'][_0x484bab(0xf2)]<=0x0&&!this[_0x484bab(0x13f)][_0x26314d])return![];const _0x5f10c6=this[_0x484bab(0xad)]();this['drawItemKeyData'](_0x5f10c6,_0x52f938,_0x22b73c,_0x1859c7,!![]);const _0x2d32fb=this[_0x484bab(0x233)]();return this[_0x484bab(0xd4)](ColorManager[_0x484bab(0x1c7)](0x3)),this[_0x484bab(0xf1)](_0x2d32fb,_0x52f938,_0x22b73c,_0x1859c7,![],_0x484bab(0x420)),this[_0x484bab(0x3a7)](_0x52f938,_0x22b73c,_0x1859c7),this[_0x484bab(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0xad)]=function(){const _0x37a34d=_0x312955,_0x48f51f=VisuMZ[_0x37a34d(0x1af)][_0x37a34d(0x3a4)]['StatusWindow'][_0x37a34d(0x350)];return _0x48f51f[_0x37a34d(0x3d3)](TextManager['mp']);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x233)]=function(){const _0x100879=_0x312955,_0x42ab8c=_0x100879(0x2aa);if(this[_0x100879(0x13f)][_0x42ab8c])return this[_0x100879(0x13f)][_0x42ab8c];let _0x590aa3='';if(this[_0x100879(0x17c)][_0x100879(0x1df)]>0x0)_0x590aa3+='+%1%'[_0x100879(0x3d3)](Math[_0x100879(0x433)](this[_0x100879(0x17c)][_0x100879(0x1df)]*0x64));if(this[_0x100879(0x17c)][_0x100879(0x1df)]>0x0&&this[_0x100879(0x17c)][_0x100879(0xf2)]>0x0)_0x590aa3+='\x20';if(this[_0x100879(0x17c)][_0x100879(0xf2)]>0x0)_0x590aa3+=_0x100879(0x90)[_0x100879(0x3d3)](this[_0x100879(0x17c)][_0x100879(0xf2)]);return _0x590aa3;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x4b0)]=function(_0x564025,_0x39e69f,_0x2fc68a){const _0x2ccd7e=_0x312955,_0x268cc2='TP\x20RECOVERY';if(this[_0x2ccd7e(0x17c)][_0x2ccd7e(0xfa)]<=0x0&&!this['_customItemInfo'][_0x268cc2])return![];const _0x45ffd1=this[_0x2ccd7e(0x1e2)]();this['drawItemKeyData'](_0x45ffd1,_0x564025,_0x39e69f,_0x2fc68a,!![]);const _0x2d9b4a=this[_0x2ccd7e(0x253)]();return this[_0x2ccd7e(0xd4)](ColorManager[_0x2ccd7e(0x1d1)]()),this['drawItemKeyData'](_0x2d9b4a,_0x564025,_0x39e69f,_0x2fc68a,![],_0x2ccd7e(0x420)),this[_0x2ccd7e(0x3a7)](_0x564025,_0x39e69f,_0x2fc68a),this[_0x2ccd7e(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x1e2)]=function(){const _0x3d65a0=_0x312955,_0xb0b3c6=VisuMZ[_0x3d65a0(0x1af)][_0x3d65a0(0x3a4)][_0x3d65a0(0x3fa)][_0x3d65a0(0x4aa)];return _0xb0b3c6[_0x3d65a0(0x3d3)](TextManager['tp']);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x253)]=function(){const _0x220831=_0x312955,_0x4aa710=_0x220831(0x30c);if(this[_0x220831(0x13f)][_0x4aa710])return this[_0x220831(0x13f)][_0x4aa710];let _0x1dccd9='';return _0x1dccd9+=_0x220831(0x90)['format'](this[_0x220831(0x17c)]['gainTP']),_0x1dccd9;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x2f6)]=function(_0x4ae44f,_0x17c626,_0x23a12b){const _0xdaaa74=_0x312955,_0x2597ec=_0xdaaa74(0x158);if(this['_itemData'][_0xdaaa74(0x2bc)]===0x0&&!this[_0xdaaa74(0x13f)][_0x2597ec])return![];const _0x3a7911=this[_0xdaaa74(0x307)]();this[_0xdaaa74(0xf1)](_0x3a7911,_0x4ae44f,_0x17c626,_0x23a12b,!![]);const _0x5432c5=this['getItemEffectsSelfTpGainText']();return this[_0xdaaa74(0x17c)][_0xdaaa74(0x2bc)]>0x0?this[_0xdaaa74(0xd4)](ColorManager['powerUpColor']()):this[_0xdaaa74(0xd4)](ColorManager[_0xdaaa74(0x329)]()),this[_0xdaaa74(0xf1)](_0x5432c5,_0x4ae44f,_0x17c626,_0x23a12b,![],_0xdaaa74(0x420)),this[_0xdaaa74(0x3a7)](_0x4ae44f,_0x17c626,_0x23a12b),this[_0xdaaa74(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x307)]=function(){const _0x5b3b65=_0x312955,_0x16f84e=VisuMZ[_0x5b3b65(0x1af)][_0x5b3b65(0x3a4)][_0x5b3b65(0x3fa)][_0x5b3b65(0xd0)];return _0x16f84e[_0x5b3b65(0x3d3)](TextManager['tp']);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x273)]=function(){const _0x53f82b=_0x312955,_0xd72b2d=_0x53f82b(0x158);if(this['_customItemInfo'][_0xd72b2d])return this[_0x53f82b(0x13f)][_0xd72b2d];let _0x33c2f1='';return this[_0x53f82b(0x17c)][_0x53f82b(0x2bc)]>0x0?_0x33c2f1+=_0x53f82b(0x90)['format'](this[_0x53f82b(0x17c)][_0x53f82b(0x2bc)]):_0x33c2f1+='%1'[_0x53f82b(0x3d3)](this[_0x53f82b(0x17c)]['selfTP']),_0x33c2f1;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x8c)]=function(_0x513a80,_0x3ebc70,_0x22c1bd){const _0x54682c=_0x312955,_0x2020c3=_0x54682c(0x2a7);if(this['_itemData']['rateHP']>=0x0&&this[_0x54682c(0x17c)][_0x54682c(0x12a)]>=0x0&&!this['_customItemInfo'][_0x2020c3])return![];const _0x40c9c4=this[_0x54682c(0x217)]();this[_0x54682c(0xf1)](_0x40c9c4,_0x513a80,_0x3ebc70,_0x22c1bd,!![]);const _0x39527f=this[_0x54682c(0x395)]();return this['changeTextColor'](ColorManager[_0x54682c(0x1c7)](0x0)),this[_0x54682c(0xf1)](_0x39527f,_0x513a80,_0x3ebc70,_0x22c1bd,![],_0x54682c(0x420)),this[_0x54682c(0x3a7)](_0x513a80,_0x3ebc70,_0x22c1bd),this[_0x54682c(0x219)](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x217)]=function(){const _0x4f62ae=_0x312955,_0xacf983=VisuMZ[_0x4f62ae(0x1af)][_0x4f62ae(0x3a4)]['StatusWindow'][_0x4f62ae(0x45b)];return _0xacf983[_0x4f62ae(0x3d3)](TextManager['hp']);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x395)]=function(){const _0x4ef5a1=_0x312955,_0x46ac75='HP\x20DAMAGE';if(this[_0x4ef5a1(0x13f)][_0x46ac75])return this[_0x4ef5a1(0x13f)][_0x46ac75];let _0x297b99='';if(this['_itemData']['rateHP']<0x0)_0x297b99+=_0x4ef5a1(0x9e)[_0x4ef5a1(0x3d3)](Math[_0x4ef5a1(0x433)](this[_0x4ef5a1(0x17c)][_0x4ef5a1(0x265)]*0x64));if(this[_0x4ef5a1(0x17c)][_0x4ef5a1(0x265)]<0x0&&this['_itemData'][_0x4ef5a1(0x12a)]<0x0)_0x297b99+='\x20';if(this[_0x4ef5a1(0x17c)][_0x4ef5a1(0x12a)]<0x0)_0x297b99+='%1'[_0x4ef5a1(0x3d3)](this[_0x4ef5a1(0x17c)][_0x4ef5a1(0x12a)]);return _0x297b99;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x1a1)]=function(_0x33d520,_0x1dc766,_0x1a6259){const _0x19b12=_0x312955,_0x51cab4=_0x19b12(0x28d);if(this['_itemData']['rateMP']>=0x0&&this[_0x19b12(0x17c)][_0x19b12(0xf2)]>=0x0&&!this['_customItemInfo'][_0x51cab4])return![];const _0x1b5506=this[_0x19b12(0x2ce)]();this[_0x19b12(0xf1)](_0x1b5506,_0x33d520,_0x1dc766,_0x1a6259,!![]);const _0x11daa7=this[_0x19b12(0x3f6)]();return this[_0x19b12(0xd4)](ColorManager[_0x19b12(0x1c7)](0x2)),this['drawItemKeyData'](_0x11daa7,_0x33d520,_0x1dc766,_0x1a6259,![],_0x19b12(0x420)),this[_0x19b12(0x3a7)](_0x33d520,_0x1dc766,_0x1a6259),this[_0x19b12(0x219)](),!![];},Window_ShopStatus['prototype'][_0x312955(0x2ce)]=function(){const _0x17139c=_0x312955,_0x40a281=VisuMZ[_0x17139c(0x1af)][_0x17139c(0x3a4)][_0x17139c(0x3fa)][_0x17139c(0xee)];return _0x40a281[_0x17139c(0x3d3)](TextManager['mp']);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x3f6)]=function(){const _0x13422c=_0x312955,_0x485a59='MP\x20DAMAGE';if(this[_0x13422c(0x13f)][_0x485a59])return this[_0x13422c(0x13f)][_0x485a59];let _0x337e90='';if(this['_itemData'][_0x13422c(0x1df)]<0x0)_0x337e90+='%1%'[_0x13422c(0x3d3)](Math[_0x13422c(0x433)](this[_0x13422c(0x17c)]['rateMP']*0x64));if(this['_itemData'][_0x13422c(0x1df)]<0x0&&this[_0x13422c(0x17c)][_0x13422c(0xf2)]<0x0)_0x337e90+='\x20';if(this[_0x13422c(0x17c)][_0x13422c(0xf2)]<0x0)_0x337e90+='%1'['format'](this['_itemData'][_0x13422c(0xf2)]);return _0x337e90;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x30e)]=function(_0x2e76d5,_0x5a3e37,_0x4ba3fe){const _0x5af097=_0x312955,_0x599697=_0x5af097(0x373);if(this[_0x5af097(0x17c)][_0x5af097(0xfa)]>=0x0&&!this[_0x5af097(0x13f)][_0x599697])return![];const _0x296cf8=this['getItemEffectsTpDamageLabel']();this[_0x5af097(0xf1)](_0x296cf8,_0x2e76d5,_0x5a3e37,_0x4ba3fe,!![]);const _0x28c94c=this[_0x5af097(0x21c)]();return this['changeTextColor'](ColorManager[_0x5af097(0x329)]()),this['drawItemKeyData'](_0x28c94c,_0x2e76d5,_0x5a3e37,_0x4ba3fe,![],_0x5af097(0x420)),this[_0x5af097(0x3a7)](_0x2e76d5,_0x5a3e37,_0x4ba3fe),this[_0x5af097(0x219)](),!![];},Window_ShopStatus['prototype']['getItemEffectsTpDamageLabel']=function(){const _0x3f9006=_0x312955,_0x373967=VisuMZ[_0x3f9006(0x1af)][_0x3f9006(0x3a4)][_0x3f9006(0x3fa)][_0x3f9006(0xf4)];return _0x373967['format'](TextManager['tp']);},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x21c)]=function(){const _0x5b75d8=_0x312955,_0x576d8a=_0x5b75d8(0x373);if(this[_0x5b75d8(0x13f)][_0x576d8a])return this['_customItemInfo'][_0x576d8a];let _0x351bf6='';return _0x351bf6+='%1'[_0x5b75d8(0x3d3)](this[_0x5b75d8(0x17c)][_0x5b75d8(0xfa)]),_0x351bf6;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x146)]=function(_0x4646d6,_0x4360ff,_0x46cd39){const _0x218780=_0x312955,_0x791007=_0x218780(0x49c);if(!this[_0x218780(0x17c)]['addStateBuffChanges']&&!this[_0x218780(0x13f)][_0x791007])return![];const _0x387df7=this['getItemEffectsAddedStatesBuffsText']();if(_0x387df7[_0x218780(0x2e4)]<=0x0)return![];const _0x3ad762=this[_0x218780(0xb1)]();return this[_0x218780(0xf1)](_0x3ad762,_0x4646d6,_0x4360ff,_0x46cd39,!![]),this[_0x218780(0xf1)](_0x387df7,_0x4646d6,_0x4360ff,_0x46cd39,![],_0x218780(0x420)),this[_0x218780(0x3a7)](_0x4646d6,_0x4360ff,_0x46cd39),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0xb1)]=function(){const _0x25f669=_0x312955;return VisuMZ[_0x25f669(0x1af)][_0x25f669(0x3a4)][_0x25f669(0x3fa)][_0x25f669(0x200)];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x1db)]=function(){const _0x253e9b=_0x312955,_0x3f60=_0x253e9b(0x49c);if(this['_customItemInfo'][_0x3f60])return this[_0x253e9b(0x13f)][_0x3f60];let _0x4c21a7='',_0x1f8603=0x0;const _0x37f8be=0x8;for(const _0x2e92cf of this[_0x253e9b(0x17c)][_0x253e9b(0x35b)]){const _0x30af15=$dataStates[_0x2e92cf];if(_0x30af15&&_0x30af15[_0x253e9b(0x237)]>0x0){_0x4c21a7+='\x5cI[%1]'['format'](_0x30af15[_0x253e9b(0x237)]),_0x1f8603++;if(_0x1f8603>=_0x37f8be)return _0x4c21a7;}}for(let _0x53e0e3=0x0;_0x53e0e3<this['_itemData'][_0x253e9b(0x6a)][_0x253e9b(0x2e4)];_0x53e0e3++){const _0x340377=this[_0x253e9b(0x17c)][_0x253e9b(0x6a)][_0x53e0e3],_0x595341=Game_BattlerBase['prototype'][_0x253e9b(0x450)](_0x340377,_0x53e0e3);if(_0x595341>0x0){_0x4c21a7+=_0x253e9b(0x24b)[_0x253e9b(0x3d3)](_0x595341),_0x1f8603++;if(_0x1f8603>=_0x37f8be)return _0x4c21a7;}}return _0x4c21a7;},Window_ShopStatus['prototype'][_0x312955(0x463)]=function(_0x3e5bca,_0x5ef7d6,_0x2e91c1){const _0x37782f=_0x312955,_0x5a7ee5='REMOVED\x20EFFECTS';if(!this[_0x37782f(0x17c)][_0x37782f(0x201)]&&!this[_0x37782f(0x13f)][_0x5a7ee5])return![];const _0x1a805c=this[_0x37782f(0x12f)]();this['drawItemKeyData'](_0x1a805c,_0x3e5bca,_0x5ef7d6,_0x2e91c1,!![]);const _0x5af77c=this[_0x37782f(0x7f)]();return this[_0x37782f(0xf1)](_0x5af77c,_0x3e5bca,_0x5ef7d6,_0x2e91c1,![],_0x37782f(0x420)),this[_0x37782f(0x3a7)](_0x3e5bca,_0x5ef7d6,_0x2e91c1),this[_0x37782f(0x219)](),!![];},Window_ShopStatus['prototype'][_0x312955(0x12f)]=function(){const _0x10ccac=_0x312955;return VisuMZ[_0x10ccac(0x1af)][_0x10ccac(0x3a4)][_0x10ccac(0x3fa)][_0x10ccac(0xd7)];},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x7f)]=function(){const _0x3b9120=_0x312955,_0x27b281=_0x3b9120(0x3c3);if(this[_0x3b9120(0x13f)][_0x27b281])return this[_0x3b9120(0x13f)][_0x27b281];let _0x2991d1='',_0x4534fb=0x0;const _0x1b4bcc=VisuMZ[_0x3b9120(0x1af)][_0x3b9120(0x3a4)][_0x3b9120(0x3fa)][_0x3b9120(0x181)];for(const _0x5f09fd of this[_0x3b9120(0x17c)]['removeState']){const _0x237998=$dataStates[_0x5f09fd];if(_0x237998&&_0x237998['iconIndex']>0x0){_0x2991d1+=_0x3b9120(0x24b)[_0x3b9120(0x3d3)](_0x237998[_0x3b9120(0x237)]),_0x4534fb++;if(_0x4534fb>=_0x1b4bcc)return _0x2991d1;}}for(let _0x39b5ee=0x0;_0x39b5ee<this[_0x3b9120(0x17c)]['removeBuff'][_0x3b9120(0x2e4)];_0x39b5ee++){const _0x105640=this[_0x3b9120(0x17c)][_0x3b9120(0x25f)][_0x39b5ee],_0x471d2a=Game_BattlerBase[_0x3b9120(0x1b8)][_0x3b9120(0x450)](0x1,_0x105640);if(_0x471d2a>0x0){_0x2991d1+=_0x3b9120(0x24b)['format'](_0x471d2a),_0x4534fb++;if(_0x4534fb>=_0x1b4bcc)return _0x2991d1;}}for(let _0xcf6189=0x0;_0xcf6189<this[_0x3b9120(0x17c)][_0x3b9120(0x316)][_0x3b9120(0x2e4)];_0xcf6189++){const _0x3ad182=this[_0x3b9120(0x17c)][_0x3b9120(0x316)][_0xcf6189],_0x4b6fff=Game_BattlerBase[_0x3b9120(0x1b8)][_0x3b9120(0x450)](-0x1,_0x3ad182);if(_0x4b6fff>0x0){_0x2991d1+='\x5cI[%1]'['format'](_0x4b6fff),_0x4534fb++;if(_0x4534fb>=_0x1b4bcc)return _0x2991d1;}}return _0x2991d1;},Window_ShopStatus['prototype'][_0x312955(0x275)]=function(_0x57e70f,_0x1386ac,_0x5a095d){const _0x25b143=_0x312955;if(this[_0x25b143(0x385)][_0x25b143(0x1ba)][_0x25b143(0x2c5)](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){const _0x16586a=String(RegExp['$1'])[_0x25b143(0x3a1)](/[\r\n]+/);for(const _0x2b33f2 of _0x16586a){if(_0x2b33f2[_0x25b143(0x2c5)](/(.*):[ ](.*)/i)){const _0x152a3f=String(RegExp['$1'])[_0x25b143(0x349)](),_0x33f749=String(RegExp['$2'])[_0x25b143(0x349)]();this['drawItemCustomEntryLine'](_0x152a3f,_0x33f749,_0x57e70f,_0x1386ac,_0x5a095d),_0x1386ac+=this[_0x25b143(0x337)]();}}}return this[_0x25b143(0x219)](),_0x1386ac;},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0xa3)]=function(_0x3de9c8,_0xe516b8,_0x190e53,_0x1acd9c,_0x4fe82b){const _0xdad8ec=_0x312955;this[_0xdad8ec(0xf1)](_0x3de9c8,_0x190e53,_0x1acd9c,_0x4fe82b,!![]),this[_0xdad8ec(0xf1)](_0xe516b8,_0x190e53,_0x1acd9c,_0x4fe82b,![],'right'),this['drawItemDarkRect'](_0x190e53,_0x1acd9c,_0x4fe82b),this[_0xdad8ec(0x219)]();},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x336)]=function(){const _0xef2cd9=_0x312955;if(!this[_0xef2cd9(0x385)])return;const _0xf9a9f0=this[_0xef2cd9(0x385)][_0xef2cd9(0x1ba)],_0x47d73e=/<SHOP (?:PICTURE|IMAGE|PICTURE NAME|PICTURE FILENAME|IMAGE NAME|IMAGE FILENAME):[ ](.*)>/gi,_0x3c9e70=_0xf9a9f0[_0xef2cd9(0x2c5)](_0x47d73e);if(_0x3c9e70)for(const _0x45c2da of _0x3c9e70){_0x45c2da[_0xef2cd9(0x2c5)](_0x47d73e);const _0x455127=String(RegExp['$1'])[_0xef2cd9(0x349)]()||'';if(_0x455127==='')continue;const _0x4e4705=ImageManager['loadPicture'](_0x455127);_0x4e4705[_0xef2cd9(0xce)](this[_0xef2cd9(0x344)][_0xef2cd9(0x411)](this,_0x4e4705,this[_0xef2cd9(0x385)]));}},Window_ShopStatus[_0x312955(0x1b8)][_0x312955(0x344)]=function(_0xbffdf4,_0x2f8489){const _0x5bdc47=_0x312955;if(this[_0x5bdc47(0x385)]!==_0x2f8489)return;if(!_0xbffdf4)return;if(_0xbffdf4[_0x5bdc47(0x250)]<=0x0||_0xbffdf4[_0x5bdc47(0x98)]<=0x0)return;const _0xfe7602=_0x2f8489['note'];let _0x1ecdd5=_0x5bdc47(0x21a);_0xfe7602['match'](/<SHOP (?:PICTURE|IMAGE) LAYER:[ ]FOREGROUND>/i)&&(_0x1ecdd5=_0x5bdc47(0xb0));const _0x1e0052=_0x1ecdd5==='background'?this[_0x5bdc47(0x36d)]:this['contents'];let _0x11967b=this[_0x5bdc47(0x1ee)],_0x4e4e07=this[_0x5bdc47(0x2b3)];_0xfe7602['match'](/<SHOP (?:PICTURE|IMAGE) MAX WIDTH:[ ](\d+)>/i)&&(_0x11967b=Number(RegExp['$1']));_0xfe7602[_0x5bdc47(0x2c5)](/<SHOP (?:PICTURE|IMAGE) MAX HEIGHT:[ ](\d+)>/i)&&(_0x4e4e07=Number(RegExp['$1']));_0xfe7602[_0x5bdc47(0x2c5)](/<SHOP (?:PICTURE|IMAGE) MAX DIMENSIONS:[ ](\d+),[ ]*(\d+)>/i)&&(_0x11967b=Number(RegExp['$1']),_0x4e4e07=Number(RegExp['$2']));const _0x1bd189=Math[_0x5bdc47(0x44b)](0x1,_0x11967b/_0xbffdf4['width'],_0x4e4e07/_0xbffdf4[_0x5bdc47(0x98)]);let _0x324887=0x0,_0x297de1=0x0,_0x2cbbc8=Math['floor'](_0xbffdf4[_0x5bdc47(0x250)]*_0x1bd189),_0x488214=Math[_0x5bdc47(0x433)](_0xbffdf4[_0x5bdc47(0x98)]*_0x1bd189),_0x24d85f=_0x5bdc47(0x2e7);_0xfe7602[_0x5bdc47(0x2c5)](/<SHOP (?:PICTURE|IMAGE) (?:ALIGN|ALIGNMENT):[ ](LEFT|CENTER|RIGHT)>/i)&&(_0x24d85f=String(RegExp['$1'])[_0x5bdc47(0x315)]()[_0x5bdc47(0x349)]());if(_0x24d85f===_0x5bdc47(0x279))_0x324887=0x0;else _0x24d85f===_0x5bdc47(0x2e7)?_0x324887=Math['round']((this[_0x5bdc47(0x1ee)]-_0x2cbbc8)/0x2):_0x324887=this[_0x5bdc47(0x1ee)]-_0x2cbbc8;let _0x4e0b47=_0x5bdc47(0x331);_0xfe7602[_0x5bdc47(0x2c5)](/<SHOP (?:PICTURE|IMAGE) POSITION:[ ](TOP|MIDDLE|BOTTOM)>/i)&&(_0x4e0b47=String(RegExp['$1'])[_0x5bdc47(0x315)]()[_0x5bdc47(0x349)]());if(_0x4e0b47==='top')_0x297de1=0x0;else _0x4e0b47===_0x5bdc47(0x331)?_0x297de1=Math['round']((this['innerHeight']-_0x488214)/0x2):_0x297de1=this[_0x5bdc47(0x2b3)]-_0x488214;_0xfe7602[_0x5bdc47(0x2c5)](/<SHOP (?:PICTURE|IMAGE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(_0x324887+=Number(RegExp['$1']));_0xfe7602[_0x5bdc47(0x2c5)](/<SHOP (?:PICTURE|IMAGE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(_0x297de1+=Number(RegExp['$1']));_0xfe7602[_0x5bdc47(0x2c5)](/<SHOP (?:PICTURE|IMAGE) OFFSET:[ ]([\+\-]\d+),[ ]*([\+\-]\d+)>/i)&&(_0x324887+=Number(RegExp['$1']),_0x297de1+=Number(RegExp['$2']));let _0x62e7b6=0xff;if(_0xfe7602['match'](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)>/i))_0x62e7b6=Number(RegExp['$1']);else _0xfe7602['match'](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)([%％])>/i)&&(_0x62e7b6=Math[_0x5bdc47(0x288)](Number(RegExp['$1'])*0.01*0xff)[_0x5bdc47(0x305)](0x0,0xff));_0x1e0052[_0x5bdc47(0x31a)]=_0x62e7b6,_0x1e0052[_0x5bdc47(0x3b5)](_0xbffdf4,0x0,0x0,_0xbffdf4[_0x5bdc47(0x250)],_0xbffdf4['height'],_0x324887,_0x297de1,_0x2cbbc8,_0x488214),_0x1e0052['paintOpacity']=0xff;},VisuMZ[_0x312955(0x1af)][_0x312955(0x475)]=function(_0x1948b8){const _0x39c010=_0x312955;if(_0x1948b8===null||typeof _0x1948b8!==_0x39c010(0xf9))return _0x1948b8;const _0x5cba57=Array[_0x39c010(0x3af)](_0x1948b8)?[]:Object[_0x39c010(0x1d2)](Object['getPrototypeOf'](_0x1948b8));for(const _0xf30027 in _0x1948b8){Object[_0x39c010(0x1b8)]['hasOwnProperty']['call'](_0x1948b8,_0xf30027)&&(_0x5cba57[_0xf30027]=typeof _0x1948b8[_0xf30027]===_0x39c010(0xf9)&&_0x1948b8[_0xf30027]!==null?VisuMZ['ItemsEquipsCore'][_0x39c010(0x475)](_0x1948b8[_0xf30027]):_0x1948b8[_0xf30027]);}return _0x5cba57;};