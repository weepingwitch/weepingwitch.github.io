//-----------------------------------------------------------------------------
// Dungeonmind - DM Core Shop
// DM_CoreShop.js
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.DM_CoreShop = true;

var Dungeonmind = Dungeonmind || {};
Dungeonmind.CS = Dungeonmind.CS || {};
Dungeonmind.CS.version = 1.26;

/*:
 * DM_CoreShop.js
 * Version 1.26
 *
 * @plugindesc [Rpg Maker MZ] [Tier 3] [Version 1.26] - This plugin will help you create
 * advanced shops for your game.
 *
 * @url https://www.dmplugins.com
 * @target MZ
 * @author Dungeonmind
 *
 * @help
 *
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  🔍 Table of Contents
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * 1. 📝 Terms of Use
 * 2. 📄 Plugin Description
 * 3. 🔌 Compatibility
 * 4. 🏷️ Note Tags
 *    4.1 ➢ Items, Weapons, and Armors
 * 5. 💡 Script Calls
 * 6. 🔀 Conditional Script Calls
 * 7. 🔓 Benefits of Registration
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 1. 📝 Terms of Use
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * 1.1 Licence Terms: By purchasing or downloading the plugin, you acknowledge 
 *     that you have received or been provided access to a licence agreement, 
 *     and you agree to the terms and conditions outlined in that licence 
 *     agreement. Failure to comply with these terms may result in licence 
 *     revocation.
 * 1.2 Ownership and Redistribution: The plugin and its code are the exclusive 
 *     property of Dungeonmind. You may use the plugin in your RPG Maker 
 *     projects, but you may not resell, redistribute, or claim ownership of 
 *     the plugin/code itself, except as specifically permitted in the licence 
 *     agreement.
 * 1.3 Code Usage: The plugin/code is licensed for use in RPG Maker MV/MZ 
 *     projects as specified in the licence agreement. You may not extract or 
 *     reuse code in other plugins or non-RPG Maker projects without express 
 *     permission.
 * 1.4 Usage Restrictions: If the plugin is downloaded without purchasing a 
 *     commercial licence, it is for non-commercial use only. Commercial use 
 *     requires a licence purchase from the official website or any officially 
 *     supported platform like itch.io.
 * 1.5 Confidentiality: The plugin/code is confidential and should not be 
 *     shared with anyone without express permission from Dungeonmind.
 * 1.6 Modification: You are permitted to edit the plugin/code for the 
 *     purposes of your personal projects, as specified in the licence 
 *     agreement. Any other modifications, including redistribution or reuse 
 *     of modified code, require express permission from Dungeonmind.
 * 1.7 Attribution Requirements: As specified in the plugin's licence agreement, 
 *     providing credit is required. Please refer to the licence for specific 
 *     credit requirements.
 * 1.8 Precedence: In the event of any conflict or inconsistency between the 
 *     terms outlined in this plugin help file and the licence agreement, 
 *     the terms of the licence agreement shall take precedence.
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 2. 📄 Plugin Description
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * ⓘ This plugin provides a robust shop system with advanced customization 
 * options, allowing you to create unique in-game shops tailored to your game's 
 * needs. Please take a moment to review this help file, as it contains detailed 
 * instructions and examples to help you get the most out of the plugin's 
 * features.
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 3. 🔌 Compatibility
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * ⓘ This plugin is compatible with the following plugins:
 *
 * ✅ DM_LimitedInventory.js
 * ✅ DM_ItemCategories.js
 * ✅ VisuMZ_1_ItemsEquipsCore.js
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 4. 🏷️ Notetags
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 4.1 🏷️ Note tags for $dataItems, $dataWeapons and $dataArmors
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * ───────────────────────────────────────────────────────────────────────────
 * <Cannot Sell>
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ This will disallow an item, weapon, or armor to be sold and display a
 * message to notify the player.
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 5. 💡Script Calls
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.openCoreShop(shopId);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ Opens the created shop with the following argument.
 *
 * shopId ➔ Choose the unique id of the shop you want to open. This ID can be
 * found to the left of each shop inside the 'Shop Manager' section of the
 * plugin parameters.
 * 
 * Examples :
 * $gameShop.openCoreShop(2);
 *  ➔ Opens the shop with ID 2 defined in the 'Shop Manager' section of the
 * plugin parameters.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.changeShopGold(shopId, value);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ Changes current gold for the shop with shopId by the value.
 *
 * shopId ➔ Choose the unique id of the shop you want to open.
 * value ➔ It's a number. 
 * Positive increases limit, while negative decreases it.
 * 
 * Examples :
 * $gameShop.changeShopGold(2, 100);
 *  ➔ Adds 100 gold to shop with shopId 2.
 * $gameShop.changeShopGold(2, -200);
 *  ➔ Takes 200 gold from shop with shopId 2.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.changeShopMaxWeight(shopId, value);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ Changes the max weight for shopId.
 *
 * shopId ➔ It's a number. 
 * The number on the left in shop manager where you define your shops is
 * the SHOP ID.
 * value ➔ It's a number. 
 * Positive increases limit, while negative decreases it.
 *
 * Examples :
 * $gameShop.changeShopMaxWeight(1, 20);
 *  ➔ Increases Shop with shopId maxWeight by 20.
 * $gameShop.changeShopMaxWeight(2, -20);
 *  ➔ Decreases Shop with shopId maxWeight by -20.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.addItemToShop(shopId, itemId, amount);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ This will add a new item to a shop. The script call works the exact
 * same as when the player sells items to a shop that retains them. (it will
 * appear at the bottom of the list unless the item exists already.)
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shops id.
 * itemId ➔ The id of the item in the database you want to add to the shop.
 * amount ➔ The amount you want to add to the shop. If you set it to 0, then
 * the item will become infinite even if it existed prior to this script call.
 *
 * Examples :
 * $gameShop.addItemToShop(1, 2, 5);
 *  ➔ Adds x5 of item with id 2 to shop with id 1.
 * $gameShop.addItemToShop(2, 3, 10);
 *  ➔ Adds x10 of item with id 3 to shop with id 2.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.setItemShopStock(shopId, itemId, amount);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ This will change the shop's stock of an item. If you set it to 0, it will 
 * delete the item. You cannot set the stock of an item that has infinite
 * stock to anything other than 0 (This includes items with requirements).
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shops id.
 * itemId ➔ The item id you want to change stock for.
 * amount ➔ The value will be the shops new current stock of the item.
 *
 * Examples :
 * $gameShop.setItemShopStock(1, 2, 5);
 *  ➔ Sets stock to 5 for item with id 2 for shop with id 1.
 * $gameShop.setItemShopStock(4, 3, 10);
 *  ➔ Sets stock to 10 for item with id 2 for shop with id 4.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.addWeaponToShop(shopId, weaponId, amount);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ This will add a new weapon to a shop. The script call works the exact
 * same as when the player sells weapons to a shop that retains them. (it will
 * appear at the bottom of the list unless the weapon exists already.)
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shops id.
 * weaponId ➔ The id of the weapon in the database you want to add to the shop.
 * amount ➔ The amount you want to add to the shop. If you set it to 0, then
 * the weapon will become infinite even if it existed prior to this script call.
 *
 * Examples :
 * $gameShop.addWeaponToShop(1, 10, 2);
 *  ➔ Adds x2 of weapon with id 10 to shop with id 1.
 * $gameShop.addWeaponToShop(2, 35, 3);
 *  ➔ Adds x3 of weapon with id 35 to shop with id 2.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.setWeaponShopStock(shopId, weaponId, amount);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ This will change the shop's stock of a weapon. If you set it to 0, it will 
 * delete the weapon. You cannot set the stock of a weapon that has infinite
 * stock to anything other than 0 (This includes weapons with requirements).
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shops id.
 * weaponId ➔ The weapon id you want to change stock for.
 * amount ➔ The value will be the shops new current stock of the weapon.
 *
 * Examples :
 * $gameShop.setWeaponShopStock(1, 2, 5);
 *  ➔ Sets stock to 5 for weapon with id 2 for shop with id 1.
 * $gameShop.setWeaponShopStock(4, 3, 10);
 *  ➔ Sets stock to 10 for weapon with id 2 for shop with id 4.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.addArmorToShop(shopId, armorId, amount);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ This will add a new armor to a shop. The script call works the exact
 * same as when the player sells armors to a shop that retains them. (it will
 * appear at the bottom of the list unless the armor exists already.)
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shops id.
 * armorId ➔ The id of the armor in the database you want to add to the shop.
 * amount ➔ The amount you want to add to the shop. If you set it to 0, then
 * the armor will become infinite even if it existed prior to this script call.
 *
 * Examples :
 * $gameShop.addArmorToShop(1, 1, 20);
 *  ➔ Adds x20 of armor with id 1 to shop with id 1.
 * $gameShop.addArmorToShop(3, 2, 30);
 *  ➔ Adds x30 of armor with id 2 to shop with id 3.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.setArmorShopStock(shopId, armorId, amount);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ This will change the shop's stock of an armor. If you set it to 0, it will 
 * delete the armor. You cannot set the stock of an armor that has infinite
 * stock to anything other than 0 (This includes armors with requirements).
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shops id.
 * armorId ➔ The armor id you want to change stock for.
 * amount ➔ The value will be the shops new current stock of the armor.
 *
 * Examples :
 * $gameShop.setArmorShopStock(1, 2, 5);
 *  ➔ Sets stock to 5 for armor with id 2 for shop with id 1.
 * $gameShop.setArmorShopStock(4, 3, 10);
 *  ➔ Sets stock to 10 for armor with id 2 for shop with id 4.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.setPriceForItem(shopId, itemId, price);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ This will set a new database price for an item in a specified shop.
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shops id.
 * itemId ➔ The item id you want to change price for.
 * price ➔ The new price it will cost to buy this item.
 *
 * Examples :
 * $gameShop.setPriceForItem(1, 23, 2000);
 *  ➔ Sets the price for item with ID 23 to 2000 for shop with ID 1.
 * $gameShop.setPriceForItem(2, 25, 500);
 *  ➔ Sets the price for item with ID 25 to 500 for shop with ID 2.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.setPriceForWeapon(shopId, weaponId, price);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ This will set a new database price for a weapon in a specified shop.
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shops id.
 * weaponId ➔ The weapon id you want to change price for.
 * price ➔ The new price it will cost to buy this weapon.
 *
 * Examples :
 * $gameShop.setPriceForWeapon(1, 8, 250);
 *  ➔ Sets the price for weapon with ID 8 to 250 for shop with ID 1.
 * $gameShop.setPriceForWeapon(2, 6, 700);
 *  ➔ Sets the price for weapon with ID 6 to 700 for shop with ID 2.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.setPriceForArmor(shopId, armorId, price);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ This will set a new database price for an armor in a specified shop.
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shops id.
 * armorId ➔ The armor id you want to change price for.
 * price ➔ The new price it will cost to buy this armor.
 *
 * Examples :
 * $gameShop.setPriceForArmor(1, 8, 250);
 *  ➔ Sets the price for armor with ID 8 to 250 for shop with ID 1.
 * $gameShop.setPriceForArmor(2, 6, 700);
 *  ➔ Sets the price for armor with ID 6 to 700 for shop with ID 2.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.changePricesForShopGoods(shopId, multiplier);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ This will change prices for all items in a shop (even hidden items).
 * This script call will not stack but instead is intended to allow the
 * developer to change the prices of the database by percent.
 *
 * There is one exception. If the price was changed using the new script
 * calls above, then that new price would take precedence.
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shops id.
 * multiplier ➔ Multiply the old price by this value (can be a decimal).
 *
 * Examples :
 * $gameShop.changePricesForShopGoods(2, 1.3);
 *  ➔ This will increase prices by 30% for all items in shop with id 2.
 * $gameShop.changePricesForShopGoods(1, 0.3);
 *  ➔ This will decrease prices by 70% for all items in shop with id 1.
 * $gameShop.changePricesForShopGoods(3, 0.8);
 *  ➔ This will decrease prices by 20% for all items in shop with id 3.
 * $gameShop.changePricesForShopGoods(2, 1);
 *  ➔ This will neither increase or decrease prices for the shop but
 * instead will set the prices back to normal.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.clearShopContents(shopId);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ This will clear the entire shop's contents for shopId.
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shops id.
 *
 * Examples :
 * $gameShop.clearShopContents(1);
 *  ➔ Clears the entire contents for the shop with ID 1.
 * $gameShop.clearShopContents(6);
 *  ➔ Clears the entire contents for the shop with ID 6.
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 6. 🔀 Conditional Script Calls
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.getShopsCurrentGold(shopId);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ Use this script call in a Conditional Branch to check the current gold 
 * amount of a specific shop. Compare the result to a gold amount using a 
 * comparison operator (e.g. >=, <=, ===). Note that if the shop does not use 
 * the Gold feature, this script call will return Infinity, causing comparisons 
 * for "enough gold" to always be true.
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shops id.
 *
 * Examples :
 * $gameShop.getShopsCurrentGold(1) >= 500;
 *  ➔ Activates the true condition of the condtional branch if the shop has
 * enough gold.
 * $gameShop.getShopsCurrentGold(2) <= 500;
 *  ➔ Activates the true condition if the shop doesn't have enough gold.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.getShopStockQuantityForItem(shopId, itemId);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ Use this script call in a Conditional Branch to check the current stock
 * quantity of a specific item in a shop. Compare the result to a quantity
 * using a comparison operator (e.g. >=, <=, ===).
 *
 * Note:
 * If the item's stock is unlimited, this script call will return Infinity.
 * If the item has requirements, it will be skipped and the function will
 * return 0 if the item is not found without requirements.
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shop's id.
 * itemId ➔ The ID of the item to check the stock quantity for.
 *
 * Examples :
 * $gameShop.getShopStockQuantityForItem(1, 5) >= 1;
 * ➔ Activates the true condition of the conditional branch if the shop has
 * at least 1 of the item and no requirements.
 * $gameShop.getShopStockQuantityForItem(1, 5) === 0;
 * ➔ Activates the true condition if the shop is out of the item or the item 
 * has requirements.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.getShopStockQuantityForWeapon(shopId, weaponId);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ Use this script call in a Conditional Branch to check the current stock
 * quantity of a specific weapon in a shop. Compare the result to a quantity
 * using a comparison operator (e.g. >=, <=, ===).
 *
 * Note:
 * If the weapon's stock is unlimited, this script call will return Infinity.
 * If the weapon has requirements, it will be skipped and the function will
 * return 0 if the weapon is not found without requirements.
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shop's id.
 * weaponId ➔ The ID of the weapon to check the stock quantity for.
 *
 * Examples :
 * $gameShop.getShopStockQuantityForWeapon(1, 5) >= 1;
 * ➔ Activates the true condition of the conditional branch if the shop has
 * at least 1 of the weapon and no requirements.
 * $gameShop.getShopStockQuantityForWeapon(1, 5) === 0;
 * ➔ Activates the true condition if the shop is out of the weapon or the 
 * weapon has requirements.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * $gameShop.getShopStockQuantityForArmor(shopId, armorId);
 * ───────────────────────────────────────────────────────────────────────────
 * ⓘ Use this script call in a Conditional Branch to check the current stock
 * quantity of a specific armor in a shop. Compare the result to a quantity
 * using a comparison operator (e.g. >=, <=, ===).
 *
 * Note:
 * If the armor's stock is unlimited, this script call will return Infinity.
 * If the armor has requirements, it will be skipped and the function will
 * return 0 if the armor is not found without requirements.
 *
 * shopId ➔ The number on the left in 'Shop Manager' is the shop's id.
 * armorId ➔ The ID of the armor to check the stock quantity for.
 *
 * Examples :
 * $gameShop.getShopStockQuantityForArmor(1, 5) >= 1;
 * ➔ Activates the true condition of the conditional branch if the shop has
 * at least 1 of the armor and no requirements.
 * $gameShop.getShopStockQuantityForArmor(1, 5) === 0;
 * ➔ Activates the true condition if the shop is out of the armor or the 
 * armor has requirements.
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 7. 🔓 Benefits of Registration
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * ⓘ By registering on our official website, you can unlock exclusive benefits,
 * including:
 *
 * ★ Hassle-free website experience
 * ★ Dedicated profile with access to all paid plugins and licences
 * ★ Priority support for our plugins
 * ★ Access to exclusive plugins
 * ★ Submit bug reports, feature requests, and commission requests
 *
 * Register now and gain instant access to exclusive features and friendly 
 * support! You can click the link above or go directly to the following URL:
 *
 * 🌐 https://www.dmplugins.com/register/
 *
 *
 * @param Inventory Type
 * @desc What type of inventory should the shop use?
 * Slot Based: ignores item weight after first item.
 * @type select
 * @option Item Weight
 * @option Slot Based
 * @default Item Weight 
 *
 * @param Unlock New Stock SE
 * @desc Set default sound effect that's played when a new item
 * is unlocked in the shop.
 * @type file
 * @default Decision5
 * @dir audio/se/
 *
 * @param Unlock New Stock Text
 * @desc Set the text you want to display when the player
 * unlocks an item.
 * @default A new item is in stock!
 *
 * @param Infinite Symbol
 * @desc Set the symbol you want to use for when an item has infinite stock.
 * @default ∞
 *
 * @param Shop Gold Icon Index
 * @desc Choose the icon you want for the shop owners gold window.
 * Use 0 if you don't want to use an icon.
 * @default 210
 *
 * @param Shop Status Window Width
 * @desc Change the default shop status window width. 
 * Default: 352
 * @type number
 * @default 352
 *
 * @param Shop Manager
 * @text Shop Manager
 * @type struct<shopManager>[]
 * @default ["{\"Shop Name\":\"Default Shop\",\"Shop Icon\":\"208\",\"Max Storage\":\"\",\"Shop Gold\":\"\",\"Retain Items?\":\"true\",\"Auto-Unlock Items?\":\"true\",\"Items\":\"[\\\"{\\\\\\\"Item Id\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"Amount\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"Item Requirements\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Item Id\\\\\\\":\\\\\\\"8\\\\\\\",\\\\\\\"Amount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Item Requirements\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Item Id\\\\\\\":\\\\\\\"9\\\\\\\",\\\\\\\"Amount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Item Requirements\\\\\\\":\\\\\\\"\\\\\\\"}\\\"]\",\"Weapons\":\"[\\\"{\\\\\\\"Weapon Id\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"Amount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Item Requirements\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"{\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Item Id\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"14\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Amount\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"{\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Item Id\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"15\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Amount\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}\\\\\\\\\\\\\\\"]\\\\\\\"}\\\"]\",\"Armors\":\"[\\\"{\\\\\\\"Armor Id\\\\\\\":\\\\\\\"27\\\\\\\",\\\\\\\"Amount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Item Requirements\\\\\\\":\\\\\\\"\\\\\\\"}\\\"]\"}"]
 * @desc Define and manage custom shops. Shop order determines ID, 
 * with each shop's position matching its assigned ID.
 *
 * @param Window_Help (Terms)
 * @default
 *
 * @param Surpass Max Shop Gold
 * @type note
 * @parent Window_Help (Terms)
 * @desc Text displayed when the shop doesn't have enough gold
 * to buy an item. (text codes allowed).
 * @default "\\c[2]The shop has insufficient Gold to make this purchase!\\c[0]"
 *
 * @param Surpass Max Inv. Gold
 * @type note
 * @parent Window_Help (Terms)
 * @desc Text displayed when the player doesn't have enough gold
 * to buy an item. (text codes allowed).
 * @default "\\c[2]The party has insufficient Gold to make this purchase!\\c[0]"
 *
 * @param Surpass Max Inv. Weight
 * @type note
 * @parent Window_Help (Terms)
 * @desc Text displayed when the player doesn't have enough space
 * to buy an an item or item(s). (text codes allowed).
 * @default "\\c[2]There is not enough available inventory Space! Try dropping or selling some items first.\\c[0]"
 *
 * @param Surpass Max Shop Weight
 * @type note
 * @parent Window_Help (Terms)
 * @desc Text displayed when the shop doesn't have enough space
 * to buy an an item or item(s). (text codes allowed).
 * @default "\\c[2]There is not enough available shop Space. Try dropping some items first.\\c[0]"
 *
 * @param Buy Max Default
 * @type note
 * @parent Window_Help (Terms)
 * @desc Text displayed when withdrawing exceeds item max default (text codes allowed).
 * @default "\\c[2]You can't buy that many of this item!\\c[0]"
 *
 * @param Sell Max Default
 * @type note
 * @parent Window_Help (Terms)
 * @desc Text displayed when depositing exceeds item max default (text codes allowed).
 * @default "\\c[2]You can't sell that many of this item!\\c[0]"
 *
 * @command openCoreShop 
 * @text Open Shop by ID
 * @desc Open a Shop defined in 'Shop Manager' plugin parameters. 
 *
 * @arg shopId
 * @text Shop ID
 * @default 1
 * @type number
 * @min 1
 * @desc Choose the Shop you want to open by ID.
 *
 * @command changeShopGold 
 * @text Change Gold for Shop
 * @desc Change the amount of Gold a Shop has. 
 *
 * @arg shopId
 * @text Shop ID
 * @default 1
 * @type number
 * @min 1
 * @desc Choose the Shop ID.
 *
 * @arg value
 * @text Value 
 * @desc How much gold should the shop get? Positive value,
 * increases it. Negative value decreases it.
 * @type number
 * @default 1
 *
 * @command changeShopMaxWeight 
 * @text Change Shop Max Weight
 * @desc Change the Max Weight a Shop can hold. 
 *
 * @arg shopId
 * @text Shop ID
 * @default 1
 * @type number
 * @min 1
 * @desc Choose the Shop ID.
 *
 * @arg value
 * @text Value 
 * @desc How much should the shops Max Weight change by? 
 * Positive value, increases it. Negative value decreases it.
 * @type number
 * @default 1
 *
 * @command addItemToShop 
 * @text Add Item To Shop
 * @desc Add Item to a Shop's Stock. 
 *
 * @arg shopId
 * @text Shop ID
 * @default 1
 * @type number
 * @min 1
 * @desc Choose the Shop ID.
 *
 * @arg itemId
 * @text Item ID
 * @default 1
 * @type item
 * @min 1
 * @desc Choose the Item you want to add to the shop by ID.
 *
 * @arg amount
 * @text Amount 
 * @desc How much of the item do you want to add? 
 * If you set this to 0, then it becomes an infinite item.
 * @type number
 * @default 1
 *
 * @command setItemShopStock 
 * @text Set Item Shop Stock
 * @desc Set the shop's stock for an item.
 *
 * @arg shopId
 * @text Shop ID
 * @default 1
 * @type number
 * @min 1
 * @desc Choose the Shop ID.
 *
 * @arg itemId
 * @text Item ID
 * @default 1
 * @type item
 * @min 1
 * @desc Choose the item you want to change stock for.
 *
 * @arg amount
 * @text Amount 
 * @desc What should the stock change to?
 * If you set this to 0, then the item will be deleted.
 * @type number
 * @default 1
 *
 * @command addWeaponToShop 
 * @text Add Weapon To Shop
 * @desc Add Weapon to a Shop's Stock. 
 *
 * @arg shopId
 * @text Shop ID
 * @default 1
 * @type number
 * @min 1
 * @desc Choose the Shop ID.
 *
 * @arg weaponId
 * @text Weapon ID
 * @default 1
 * @type weapon
 * @min 1
 * @desc Choose the Weapon you want to add to the shop by ID.
 *
 * @arg amount
 * @text Amount 
 * @desc How much of the weapon do you want to add? 
 * If you set this to 0, then it becomes an infinite item.
 * @type number
 * @default 1
 *
 * @command setWeaponShopStock 
 * @text Set Weapon Shop Stock
 * @desc Set the shop's stock for a weapon.
 *
 * @arg shopId
 * @text Shop ID
 * @default 1
 * @type number
 * @min 1
 * @desc Choose the Shop ID.
 *
 * @arg weaponId
 * @text Weapon ID
 * @default 1
 * @type weapon
 * @min 1
 * @desc Choose the weapon you want to change stock for.
 *
 * @arg amount
 * @text Amount 
 * @desc What should the stock change to?
 * If you set this to 0, then the weapon will be deleted.
 * @type number
 * @default 1
 *
 * @command addArmorToShop 
 * @text Add Armor To Shop
 * @desc Add Armor to a Shop's Stock. 
 *
 * @arg shopId
 * @text Shop ID
 * @default 1
 * @type number
 * @min 1
 * @desc Choose the Shop ID.
 *
 * @arg armorId
 * @text Armor ID
 * @default 1
 * @type armor
 * @min 1
 * @desc Choose the Armor you want to add to the shop by ID.
 *
 * @arg amount
 * @text Amount 
 * @desc How much of the armor do you want to add? 
 * If you set this to 0, then it becomes an infinite item.
 * @type number
 * @default 1
 *
 * @command setArmorShopStock 
 * @text Set Armor Shop Stock
 * @desc Set the shop's stock for an armor.
 *
 * @arg shopId
 * @text Shop ID
 * @default 1
 * @type number
 * @min 1
 * @desc Choose the Shop ID.
 *
 * @arg armorId
 * @text Armor ID
 * @default 1
 * @type armor
 * @min 1
 * @desc Choose the armor you want to change stock for.
 *
 * @arg amount
 * @text Amount 
 * @desc What should the stock change to?
 * If you set this to 0, then the armor will be deleted.
 * @type number
 * @default 1
 *
 * @command changePricesForShopGoods 
 * @text Change Prices For Shop Goods
 * @desc This plugin command will always use the original price from
 * the database for calculation with some exceptions (help file).
 *
 * @arg shopId
 * @text Shop ID
 * @default 1
 * @type number
 * @min 1
 * @desc Choose the Shop ID.
 *
 * @arg multiplier
 * @text Price Multiplier
 * @desc Multiply the prices by this value. You can use decimals.
 * 1.3 increases prices by 30% 1 sets them back to normal.
 * @default 1
 *
 * @command clearShopContents
 * @text Clear Shop Contents
 * @desc This plugin command will clear the entire contents of a
 * single shop.
 * 
 * @arg shopId
 * @text Shop ID
 * @default 1
 * @type number
 * @min 1
 * @desc Choose the Shop ID.
 *
 */

  /*~struct~shopManager:
    @param Shop Name
    @desc Choose a suitable name for this shop. (viewable to player in game) Colour text codes allowed.
    @default Shop

    @param Shop Icon
    @desc Choose the icon you want to use for this shop. (viewable to player in game)
    @default

    @param Max Storage
    @desc Set this to above 0 and it will set the shop to have a limited Inventory. Default : 0
    @type number
    @default 0

    @param Shop Gold
    @desc How much gold does this shop start with? Leave blank to not use this game mechanic for the shop.
    @type number
    @default

    @param Retain Items?
    @desc Do you want the shop to retain items the player has
    sold to it? Default: true
    @type boolean
    @on YES
    @off NO
    @default true

    @param Auto-Unlock Items?
    @desc Should items with requirements be automatically unlocked?
    Default: true
    @type boolean
    @on YES
    @off NO
    @default true

    @param Items
    @desc Set the initial shop's item contents.
    @type struct<items>[]

    @param Weapons
    @desc Set the initial shop's weapon contents.
    @type struct<weapons>[]

    @param Armors
    @desc Set the initial shop's armor contents.
    @type struct<armors>[]

 */

  /*~struct~items:
    @param Item Id
    @desc Choose the item to add to the shops initial contents.
    @type item

    @param Amount
    @desc How many of the item(s) should start in the shop stock?
    Leave blank to make item infinite and/or requirement item.
    @type number
    @default 1

    @param Item Requirements
    @desc Set this items required items to be sold.
    @type struct<itemRequirements>[]
 */

  /*~struct~weapons:
    @param Weapon Id
    @desc Choose the weapon to add to the shops initial contents.
    @type weapon

    @param Amount
    @desc How many of the weapon(s) should start in the shop stock?
    Leave blank to make item infinite and/or requirement item.
    @type number
    @default 1

    @param Item Requirements
    @desc Set this items required items to be sold.
    @type struct<itemRequirements>[]
 */

  /*~struct~armors:
    @param Armor Id
    @desc Choose the armor to add to the shops initial contents.
    @type armor

    @param Amount
    @desc How many of the armor(s) should start in the shop stock?
    Leave blank to make item infinite and/or requirement item.
    @type number
    @default 1

    @param Item Requirements
    @desc Set this items required items to be sold.
    @type struct<itemRequirements>[]
 */

  /*~struct~itemRequirements:
    @param Item Id
    @desc Choose the items required item(s) to be sold before its added.
    @type item

    @param Amount
    @desc How many of the item(s) should be sold before the shop item is added?
    @type number
    @default 1
 */

 //-----------------------------------------------------------------------------
 // *Register Plugin Commands
 //-----------------------------------------------------------------------------

PluginManager.registerCommand('DM_CoreShop', 'openCoreShop' , args => {
  const arg0 = Number(args.shopId);
  $gameShop.openCoreShop(arg0);
});

PluginManager.registerCommand('DM_CoreShop', 'changeShopGold' , args => {
  const arg0 = Number(args.shopId);
  const arg1 = Number(args.value);
  $gameShop.changeShopGold(arg0, arg1);
});

PluginManager.registerCommand('DM_CoreShop', 'changeShopMaxWeight' , args => {
  const arg0 = Number(args.shopId);
  const arg1 = Number(args.value);
  $gameShop.changeShopMaxWeight(arg0, arg1);
});

PluginManager.registerCommand('DM_CoreShop', 'addItemToShop' , args => {
  const arg0 = Number(args.shopId);
  const arg1 = Number(args.itemId);
  const arg2 = Number(args.amount)
  $gameShop.addItemToShop(arg0, arg1, arg2);
});

PluginManager.registerCommand('DM_CoreShop', 'setItemShopStock' , args => {
  const arg0 = Number(args.shopId);
  const arg1 = Number(args.itemId);
  const arg2 = Number(args.amount)
  $gameShop.setItemShopStock(arg0, arg1, arg2);
});

PluginManager.registerCommand('DM_CoreShop', 'addWeaponToShop' , args => {
  const arg0 = Number(args.shopId);
  const arg1 = Number(args.weaponId);
  const arg2 = Number(args.amount)
  $gameShop.addWeaponToShop(arg0, arg1, arg2);
});

PluginManager.registerCommand('DM_CoreShop', 'setWeaponShopStock' , args => {
  const arg0 = Number(args.shopId);
  const arg1 = Number(args.weaponId);
  const arg2 = Number(args.amount)
  $gameShop.setWeaponShopStock(arg0, arg1, arg2);
});

PluginManager.registerCommand('DM_CoreShop', 'addArmorToShop' , args => {
  const arg0 = Number(args.shopId);
  const arg1 = Number(args.armorId);
  const arg2 = Number(args.amount)
  $gameShop.addArmorToShop(arg0, arg1, arg2);
});

PluginManager.registerCommand('DM_CoreShop', 'setArmorShopStock' , args => {
  const arg0 = Number(args.shopId);
  const arg1 = Number(args.armorId);
  const arg2 = Number(args.amount)
  $gameShop.setArmorShopStock(arg0, arg1, arg2);
});

PluginManager.registerCommand('DM_CoreShop', 'changePricesForShopGoods' , args => {
  const arg0 = Number(args.shopId);
  const arg1 = Number(args.multiplier);
  $gameShop.changePricesForShopGoods(arg0, arg1);
});

PluginManager.registerCommand('DM_CoreShop', 'clearShopContents' , args => {
  const arg0 = Number(args.shopId);
  $gameShop.clearShopContents(arg0);
});

//-----------------------------------------------------------------------------
// Parameters
//-----------------------------------------------------------------------------

Dungeonmind.CS.parameters = PluginManager.parameters('DM_CoreShop');

Dungeonmind.CS.inventoryType = Dungeonmind.CS.parameters['Inventory Type'] || 'Item Weight';
Dungeonmind.CS.unlockNewStockSE = Dungeonmind.CS.parameters['Unlock New Stock SE'];
Dungeonmind.CS.unlockNewStockText = Dungeonmind.CS.parameters['Unlock New Stock Text'];
Dungeonmind.CS.infiniteSymbol = Dungeonmind.CS.parameters['Infinite Symbol'];
Dungeonmind.CS.shopGoldIconIndex = parseInt(Dungeonmind.CS.parameters['Shop Gold Icon Index']);
Dungeonmind.CS.shopStatusWindowWidth = parseInt(Dungeonmind.CS.parameters['Shop Status Window Width']);
Dungeonmind.CS.shopManager = JSON.parse(Dungeonmind.CS.parameters['Shop Manager'] || '[""]');
//*~ Terms ~*
Dungeonmind.CS.surpassMaxShopGoldText = Dungeonmind.CS.parameters['Surpass Max Shop Gold'] || "\\c[2]The shop has insufficient Gold to make this purchase!\\c[0]";
Dungeonmind.CS.surpassMaxInvGoldText = Dungeonmind.CS.parameters['Surpass Max Inv. Gold'] || "\\c[2]The player has insufficient Gold to make this purchase!\\c[0]";
Dungeonmind.CS.surpassMaxInvWeightText = Dungeonmind.CS.parameters['Surpass Max Inv. Weight'] || "\\c[2]There is not enough available inventory Space! Try dropping or selling some items first.\\c[0]";
Dungeonmind.CS.surpassMaxShopWeightText = Dungeonmind.CS.parameters['Surpass Max Shop Weight'] || "\\c[2]There is not enough available shop Space. Try dropping some items first.\\c[0]";
Dungeonmind.CS.surpassItemMaxDefaultForBuying = Dungeonmind.CS.parameters['Buy Max Default'] || "\\c[2]You can't buy that many of this item!\\c[0]";
Dungeonmind.CS.surpassItemMaxDefaultForSelling = Dungeonmind.CS.parameters['Sell Max Default'] || "\\c[2]You can't sell that many of this item!\\c[0]";

//-----------------------------------------------------------------------------
// Game_Shop
//
// The game object class for handling dm core shops.

function Game_Shop() {
    this.initialize(...arguments);
}

Game_Shop.prototype.initialize = function() {
    this._tempShopId = 0;
    this._goods = [];
    this._shopGoodsUnlockQue = [];
    this._independentId = this.getIndependentId();
    this.parseShopManagerParameters();
    this.initShopStorage();
    this.initializeParamGoods();
    this.initItemSellData();
    this.initShopWeight();
    this.initShopGold();
    this.initHelpWarningTerms();
};

Game_Shop.prototype.getIndependentId = function() {
  if(this.limitedInvPluginCheck()) {
    return 10000 + $gameContainers._independentId-10000;
  } else {
    return 10000;
  }
};

Game_Shop.prototype.changeShopMaxWeight = function(shopId, value) {
    return this._coreShops[shopId-1].maxWeight+=value;
};

Game_Shop.prototype.changeShopGold = function(shopId, value) {
    if(!this._coreShops[shopId-1].shopGold){
      return;
    }
    sum = this._coreShops[shopId-1].shopGold+=value;
    if(sum < 0) {
      this._coreShops[shopId-1].shopGold = 0;
    } else {
      this._coreShops[shopId-1].shopGold+=value;
    }
    return this._coreShops[shopId-1].shopGold;
};

Game_Shop.prototype.setItemShopStock = function(shopId, itemId, amount) {
    let item = $dataItems[itemId];
    let storedDataContents = this._coreShops[shopId-1]._storedDataContents;
    let storedContents = this._coreShops[shopId-1]._storedContents;
    for(let i = 0; i < storedDataContents.length; i++) {
        if(storedDataContents[i].itemId === item.id && storedDataContents[i].etypeId === item.etypeId) {
          if(amount === 0) {
            delete this._coreShops[shopId-1]._storedDataContents[i];
            delete this._coreShops[shopId-1]._storedContents[i];
            this._coreShops[shopId-1]._storedDataContents = this._coreShops[shopId-1]._storedDataContents.filter(value => Object.keys(value).length !== 0);
            this._coreShops[shopId-1]._storedContents = this._coreShops[shopId-1]._storedContents.filter(value => Object.keys(value).length !== 0);
            return;
          }
          if(storedContents[i].itemRequirements) {
            return;
          } else {
            return storedDataContents[i].amount = amount;
          }
        }
    }
};

Game_Shop.prototype.addItemToShop = function(shopId, itemId, amount) {
    const item = $dataItems[itemId];
    const storedDataContents = this._coreShops[shopId-1]._storedDataContents;
    const storedContents = this._coreShops[shopId-1]._storedContents;
    if(amount === 0) {
        amount = '';
    };
    for(let i = 0; i < storedDataContents.length; i++) {
        if(storedDataContents[i].itemId === item.id && storedDataContents[i].etypeId === item.etypeId) {
            if(storedDataContents[i].amount === '') {
                return;
            } else {
                if(amount === '') {
                    return storedDataContents[i].amount = '';
                } else {
                    return storedDataContents[i].amount+=amount;
                }
            }
        }
    }
    id = 0;
    id = item.id;
    etypeId = item.etypeId;
    storedDataContents.push({itemId: id, amount : amount, etypeId : etypeId});
    item.amount = amount;
    if(item.meta.itemWeight){item.itemWeight = item.meta.itemWeight};
    item.retained = true;//this._coreShops[shopId-1]['Retain Items?'];
    if(amount === '') {
        item.infinite = true;
    } else {
        item.infinite = false;
    }
    item.unlockStatus = 0;
    storedContents.push(item);
};

Game_Shop.prototype.setWeaponShopStock = function(shopId, itemId, amount) {
    let item = $dataWeapons[itemId];
    let storedDataContents = this._coreShops[shopId-1]._storedDataContents;
    let storedContents = this._coreShops[shopId-1]._storedContents;
    for(let i = 0; i < storedDataContents.length; i++) {
        if(storedDataContents[i].itemId === item.id && storedDataContents[i].etypeId === item.etypeId) {
          if(amount === 0) {
            delete this._coreShops[shopId-1]._storedDataContents[i];
            delete this._coreShops[shopId-1]._storedContents[i];
            this._coreShops[shopId-1]._storedDataContents = this._coreShops[shopId-1]._storedDataContents.filter(value => Object.keys(value).length !== 0);
            this._coreShops[shopId-1]._storedContents = this._coreShops[shopId-1]._storedContents.filter(value => Object.keys(value).length !== 0);
            return;
          }
          if(storedContents[i].itemRequirements) {
            return;
          } else {
            return storedDataContents[i].amount = amount;
          }
        }
    }
};

Game_Shop.prototype.addWeaponToShop = function(shopId, itemId, amount) {
    const item = $dataWeapons[itemId];
    const storedDataContents = this._coreShops[shopId-1]._storedDataContents;
    const storedContents = this._coreShops[shopId-1]._storedContents;
    if(amount === 0) {
        amount = '';
    };
    for(let i = 0; i < storedDataContents.length; i++) {
        if(storedDataContents[i].itemId === item.id && storedDataContents[i].etypeId === item.etypeId) {
            if(storedDataContents[i].amount === '') {
                return;
            } else {
                if(amount === '') {
                    return storedDataContents[i].amount = '';
                } else {
                    return storedDataContents[i].amount+=amount;
                }
            }
        }
    }
    id = 0;
    id = item.id;
    etypeId = item.etypeId;
    storedDataContents.push({itemId: id, amount : amount, etypeId : etypeId});
    item.amount = amount;
    if(item.meta.itemWeight){item.itemWeight = item.meta.itemWeight};
    item.retained = true;//this._coreShops[shopId-1]['Retain Items?'];
    if(amount === '') {
        item.infinite = true;
    } else {
        item.infinite = false;
    }
    item.unlockStatus = 0;
    storedContents.push(item);
};

Game_Shop.prototype.setArmorShopStock = function(shopId, itemId, amount) {
    let item = $dataArmors[itemId];
    let storedDataContents = this._coreShops[shopId-1]._storedDataContents;
    let storedContents = this._coreShops[shopId-1]._storedContents;
    for(let i = 0; i < storedDataContents.length; i++) {
        if(storedDataContents[i].itemId === item.id && storedDataContents[i].etypeId === item.etypeId) {
          if(amount === 0) {
            delete this._coreShops[shopId-1]._storedDataContents[i];
            delete this._coreShops[shopId-1]._storedContents[i];
            this._coreShops[shopId-1]._storedDataContents = this._coreShops[shopId-1]._storedDataContents.filter(value => Object.keys(value).length !== 0);
            this._coreShops[shopId-1]._storedContents = this._coreShops[shopId-1]._storedContents.filter(value => Object.keys(value).length !== 0);
            return;
          }
          if(storedContents[i].itemRequirements) {
            return;
          } else {
            return storedDataContents[i].amount = amount;
          }
        }
    }
};

Game_Shop.prototype.addArmorToShop = function(shopId, itemId, amount) {
    const item = $dataArmors[itemId];
    const storedDataContents = this._coreShops[shopId-1]._storedDataContents;
    const storedContents = this._coreShops[shopId-1]._storedContents;
    if(amount === 0) {
        amount = '';
    };
    for(let i = 0; i < storedDataContents.length; i++) {
        if(storedDataContents[i].itemId === item.id && storedDataContents[i].etypeId === item.etypeId) {
            if(storedDataContents[i].amount === '') {
                return;
            } else {
                if(amount === '') {
                    return storedDataContents[i].amount = '';
                } else {
                    return storedDataContents[i].amount+=amount;
                }
            }
        }
    }
    id = 0;
    id = item.id;
    etypeId = item.etypeId;
    storedDataContents.push({itemId: id, amount : amount, etypeId : etypeId});
    item.amount = amount;
    if(item.meta.itemWeight){item.itemWeight = item.meta.itemWeight};
    item.retained = true;//this._coreShops[shopId-1]['Retain Items?'];
    if(amount === '') {
        item.infinite = true;
    } else {
        item.infinite = false;
    }
    item.unlockStatus = 0;
    storedContents.push(item);
};

//-----------------------------------------------------------------------------
// Shop Manager Parameter Parsing
//-----------------------------------------------------------------------------

Game_Shop.prototype.parseShopManagerParameters = function() {
    Dungeonmind.CS.coreShops = [];
    for(let i = 0; i < Dungeonmind.CS.shopManager.length; i++) {
        Dungeonmind.CS.coreShops.push(JSON.parse(Dungeonmind.CS.shopManager[i])); //Parameter Parsing
        Dungeonmind.CS.coreShops[i]['Max Storage'] = Number(Dungeonmind.CS.coreShops[i]['Max Storage']);
        Dungeonmind.CS.coreShops[i]['Shop Icon'] = Number(Dungeonmind.CS.coreShops[i]['Shop Icon']);
        Dungeonmind.CS.coreShops[i]['Retain Items?'] = eval(String(Dungeonmind.CS.coreShops[i]['Retain Items?'] || true));
        Dungeonmind.CS.coreShops[i]['Auto-Unlock Items?'] = eval(String(Dungeonmind.CS.coreShops[i]['Auto-Unlock Items?'] || true));
        if(Dungeonmind.CS.coreShops[i]['Shop Gold']) {
            Dungeonmind.CS.coreShops[i]['Shop Gold'] = Number(Dungeonmind.CS.coreShops[i]['Shop Gold']); // Only parse data if set for the shop
        }
        //-----------------------------------------------------------------------------
        // *Parse Items
        //-----------------------------------------------------------------------------
        if(Dungeonmind.CS.coreShops[i]['Items']) {
            Dungeonmind.CS.coreShops[i]['Items'] = JSON.parse(Dungeonmind.CS.coreShops[i]['Items']);
            for(let i2 = 0; i2 < Dungeonmind.CS.coreShops[i]['Items'].length; i2++) {
                Dungeonmind.CS.coreShops[i]['Items'][i2] = JSON.parse(Dungeonmind.CS.coreShops[i]['Items'][i2]);
                Dungeonmind.CS.coreShops[i]['Items'][i2]['Item Id'] = Number(Dungeonmind.CS.coreShops[i]['Items'][i2]['Item Id']);
                if(Dungeonmind.CS.coreShops[i]['Items'][i2]['Amount']) {
                    Dungeonmind.CS.coreShops[i]['Items'][i2]['Amount'] = Number(Dungeonmind.CS.coreShops[i]['Items'][i2]['Amount']);
                }
                //* Item Requirements
                if(Dungeonmind.CS.coreShops[i]['Items'][i2]['Item Requirements']) {
                    Dungeonmind.CS.coreShops[i]['Items'][i2]['Item Requirements'] = JSON.parse(Dungeonmind.CS.coreShops[i]['Items'][i2]['Item Requirements']);
                    for(let i3 = 0; i3 < Dungeonmind.CS.coreShops[i]['Items'][i2]['Item Requirements'].length; i3++) {
                        Dungeonmind.CS.coreShops[i]['Items'][i2]['Item Requirements'][i3] = JSON.parse(Dungeonmind.CS.coreShops[i]['Items'][i2]['Item Requirements'][i3]);
                        Dungeonmind.CS.coreShops[i]['Items'][i2]['Item Requirements'][i3]['Item Id'] = Number(Dungeonmind.CS.coreShops[i]['Items'][i2]['Item Requirements'][i3]['Item Id']);
                        Dungeonmind.CS.coreShops[i]['Items'][i2]['Item Requirements'][i3]['Amount'] = Number(Dungeonmind.CS.coreShops[i]['Items'][i2]['Item Requirements'][i3]['Amount']);
                    }
                }
            }
        }
        //-----------------------------------------------------------------------------
        // *Parse Weapons
        //-----------------------------------------------------------------------------
        if(Dungeonmind.CS.coreShops[i]['Weapons']) {
            Dungeonmind.CS.coreShops[i]['Weapons'] = JSON.parse(Dungeonmind.CS.coreShops[i]['Weapons']);
            for(let i2 = 0; i2 < Dungeonmind.CS.coreShops[i]['Weapons'].length; i2++) {
                Dungeonmind.CS.coreShops[i]['Weapons'][i2] = JSON.parse(Dungeonmind.CS.coreShops[i]['Weapons'][i2]);
                Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Weapon Id'] = Number(Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Weapon Id']);
                if(Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Amount']) {
                    Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Amount'] = Number(Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Amount']);
                }
                //* Item Requirements
                if(Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Item Requirements']) {
                    Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Item Requirements'] = JSON.parse(Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Item Requirements']);
                    for(let i3 = 0; i3 < Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Item Requirements'].length; i3++) {
                        Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Item Requirements'][i3] = JSON.parse(Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Item Requirements'][i3]);
                        Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Item Requirements'][i3]['Item Id'] = Number(Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Item Requirements'][i3]['Item Id']);
                        Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Item Requirements'][i3]['Amount'] = Number(Dungeonmind.CS.coreShops[i]['Weapons'][i2]['Item Requirements'][i3]['Amount']);
                    }
                }
            }
        }
        //-----------------------------------------------------------------------------
        // *Parse Armors
        //-----------------------------------------------------------------------------
        if(Dungeonmind.CS.coreShops[i]['Armors']) {
            Dungeonmind.CS.coreShops[i]['Armors'] = JSON.parse(Dungeonmind.CS.coreShops[i]['Armors']);
            for(let i2 = 0; i2 < Dungeonmind.CS.coreShops[i]['Armors'].length; i2++) {
                Dungeonmind.CS.coreShops[i]['Armors'][i2] = JSON.parse(Dungeonmind.CS.coreShops[i]['Armors'][i2]);
                Dungeonmind.CS.coreShops[i]['Armors'][i2]['Armor Id'] = Number(Dungeonmind.CS.coreShops[i]['Armors'][i2]['Armor Id']);
                if(Dungeonmind.CS.coreShops[i]['Armors'][i2]['Amount']) {
                    Dungeonmind.CS.coreShops[i]['Armors'][i2]['Amount'] = Number(Dungeonmind.CS.coreShops[i]['Armors'][i2]['Amount']);
                }
                //* Item Requirements
                if(Dungeonmind.CS.coreShops[i]['Armors'][i2]['Item Requirements']) {
                    Dungeonmind.CS.coreShops[i]['Armors'][i2]['Item Requirements'] = JSON.parse(Dungeonmind.CS.coreShops[i]['Armors'][i2]['Item Requirements']);
                    for(let i3 = 0; i3 < Dungeonmind.CS.coreShops[i]['Armors'][i2]['Item Requirements'].length; i3++) {
                        Dungeonmind.CS.coreShops[i]['Armors'][i2]['Item Requirements'][i3] = JSON.parse(Dungeonmind.CS.coreShops[i]['Armors'][i2]['Item Requirements'][i3]);
                        Dungeonmind.CS.coreShops[i]['Armors'][i2]['Item Requirements'][i3]['Item Id'] = Number(Dungeonmind.CS.coreShops[i]['Armors'][i2]['Item Requirements'][i3]['Item Id']);
                        Dungeonmind.CS.coreShops[i]['Armors'][i2]['Item Requirements'][i3]['Amount'] = Number(Dungeonmind.CS.coreShops[i]['Armors'][i2]['Item Requirements'][i3]['Amount']);
                    }
                }
            }
        }
    }
};

Game_Shop.prototype.initShopStorage = function() {
    this._coreShops = Dungeonmind.CS.coreShops;
    for(let i = 0; i < this._coreShops.length; i++) {
        this._coreShops[i]._storedContents = [];
    }
    return this._coreShops;
};

Game_Shop.prototype.initializeParamGoods = function() {
    this.convertItemsToStoredGoods();
    this.convertWeaponsToStoredGoods();
    this.convertArmorsToGoods();
};

Game_Shop.prototype.convertItemsToStoredGoods = function() {
    for(let i = 0; i < this._coreShops.length; i++) {
        if(this._coreShops[i]['Items']) {
            for(let i2 = 0; i2 < this._coreShops[i]['Items'].length; i2++) {
                let id = this._coreShops[i]['Items'][i2]['Item Id'];
                let itemObj = $dataItems[id];
                item = {...itemObj}; //BugFix for compatiblity with VisuStella ItemEquipsCore
                item.amount = this._coreShops[i]['Items'][i2].Amount;
                //* For Item Reqs
                if(this._coreShops[i]['Items'][i2]['Item Requirements'] && this._coreShops[i]['Items'][i2]['Item Requirements'].length > 0) {
                    item.itemRequirements = [];
                    item.itemRequirements = this._coreShops[i]['Items'][i2]['Item Requirements'];
                }
                item = this.checkItemCategory(item);
                item = this.checkItemAmount(item);
                item = this.checkItemWeight(item);
                item.retained = true;
                item.infinite = this.checkItemInfinity(item);
                if(this.dmIndependentItemsPluginCheck() && $dataItems[id].meta.independentItem) {
                  amount = item.amount;
                  if(amount !== "") {
                    while(amount > 0) {
                      newItem = {...item};
                      this._independentId++;
                      newItem.id = this._independentId;
                      $dataItems[newItem.id] = newItem;
                      newItem.amount = 1;
                      amount--;
                      this._coreShops[i]._storedContents.push(newItem);
                    }
                  } else {
                    this._coreShops[i]._storedContents.push(item);
                  }
                } else {
                  this._coreShops[i]._storedContents.push(item);
                }
            }
        }
    }
};

Game_Shop.prototype.convertWeaponsToStoredGoods = function() {
    for(let i = 0; i < this._coreShops.length; i++) {
        if(this._coreShops[i]['Weapons']) {
            for(let i2 = 0; i2 < this._coreShops[i]['Weapons'].length; i2++) {
                let id = this._coreShops[i]['Weapons'][i2]['Weapon Id'];
                let itemObj = $dataWeapons[id];
                item = {...itemObj};
                item.amount = this._coreShops[i]['Weapons'][i2].Amount;
                //* For Item Reqs
                if(this._coreShops[i]['Weapons'][i2]['Item Requirements'] && this._coreShops[i]['Weapons'][i2]['Item Requirements'].length > 0) {
                    item.itemRequirements = [];
                    item.itemRequirements = this._coreShops[i]['Weapons'][i2]['Item Requirements'];
                }
                item = this.checkItemCategory(item);
                item = this.checkItemAmount(item);
                item = this.checkItemWeight(item);
                item.retained = true;
                item.infinite = this.checkItemInfinity(item);
                if(this.dmIndependentItemsPluginCheck() && $dataWeapons[id].meta.independentItem) {
                  amount = item.amount;
                  if(amount !== "") {
                    while(amount > 0) {
                      newItem = {...item};
                      this._independentId++;
                      newItem.id = this._independentId;
                      $dataWeapons[newItem.id] = newItem;
                      newItem.amount = 1;
                      amount--;
                      this._coreShops[i]._storedContents.push(newItem);
                    }
                  } else {
                    this._coreShops[i]._storedContents.push(item);
                  }
                } else {
                  this._coreShops[i]._storedContents.push(item);
                }
            }
        }
    }
};

Game_Shop.prototype.convertArmorsToGoods = function() {
    for(let i = 0; i < this._coreShops.length; i++) {
        if(this._coreShops[i]['Armors']) {
            for(let i2 = 0; i2 < this._coreShops[i]['Armors'].length; i2++) {
                let id = this._coreShops[i]['Armors'][i2]['Armor Id'];
                let itemObj = $dataArmors[id];
                item = {...itemObj};
                item.amount = this._coreShops[i]['Armors'][i2].Amount;
                //* For Item Reqs
                if(this._coreShops[i]['Armors'][i2]['Item Requirements'] && this._coreShops[i]['Armors'][i2]['Item Requirements'].length > 0) {
                    item.itemRequirements = [];
                    item.itemRequirements = this._coreShops[i]['Armors'][i2]['Item Requirements'];
                }
                item = this.checkItemCategory(item);
                item = this.checkItemAmount(item);
                item = this.checkItemWeight(item);
                item.retained = true;
                item.infinite = this.checkItemInfinity(item);
                if(this.dmIndependentItemsPluginCheck() && $dataArmors[id].meta.independentItem) {
                  amount = item.amount;
                  if(amount !== "") {
                    while(amount > 0) {
                      newItem = {...item};
                      this._independentId++;
                      newItem.id = this._independentId;
                      $dataArmors[newItem.id] = newItem;
                      newItem.amount = 1;
                      amount--;
                      this._coreShops[i]._storedContents.push(newItem);
                    }
                  } else {
                    this._coreShops[i]._storedContents.push(item);
                  }
                } else {
                  this._coreShops[i]._storedContents.push(item);
                }
            }
        }
    }
};

Game_Shop.prototype.initShopWeight = function() {
    for(let i = 0; i < this._coreShops.length; i++) {
        this._coreShops[i].maxWeight = this._coreShops[i]['Max Storage'];
    }
};

Game_Shop.prototype.initShopGold = function() {
    for(let i = 0; i < this._coreShops.length; i++) {
        this._coreShops[i].shopGold = this._coreShops[i]['Shop Gold'];
    }
};

Game_Shop.prototype.initHelpWarningTerms = function() {
	this._surpassMaxShopGoldText = JSON.parse(Dungeonmind.CS.surpassMaxShopGoldText);
	this._surpassMaxInvGoldText = JSON.parse(Dungeonmind.CS.surpassMaxInvGoldText);
 	this._surpassMaxInvWeightText = JSON.parse(Dungeonmind.CS.surpassMaxInvWeightText);
 	this._surpassMaxShopWeightText = JSON.parse(Dungeonmind.CS.surpassMaxShopWeightText);
 	this._surpassItemMaxDefaultForBuying = JSON.parse(Dungeonmind.CS.surpassItemMaxDefaultForBuying);
 	this._surpassItemMaxDefaultForSelling = JSON.parse(Dungeonmind.CS.surpassItemMaxDefaultForSelling);
};

Game_Shop.prototype.checkItemInfinity = function(item) {
    if(item.amount === '') {
        return true;
    } else {
        return false;
    };
};

Game_Shop.prototype.checkItemCategory = function(item) {
    if(item.categories) {
        item.categories = item.categories;
        return item;
    } else {
        item.categories = item.note.replaceAll('<Categories>','');
        item.categories = item.categories.replaceAll('</Categories>','');
        item.categories = item.categories.replaceAll('\n',',');
        item.categories = item.categories.split(',');
        item.categories = item.categories.filter((str) => str !== '');
        item.categories = item.categories.filter(item => !item.startsWith("<"));
        return item;
    }
};

Game_Shop.prototype.checkItemAmount = function(item) {
    if(item.Amount) {
        item.amount = item.Amount;
        return item;
    } else {
        return item;
    }
};

Game_Shop.prototype.checkItemWeight = function(item) {
    if(item.meta.itemWeight) {
        item.itemWeight = Number(item.meta.itemWeight);
        return item;
    } else {
        return item;
    }
};

Game_Shop.prototype.openCoreShop = function(coreShopId) {
    this._tempShopId = coreShopId-=1;
    return SceneManager.goto(Scene_CoreShop);
};

Game_Shop.prototype.initItemSellData = function() {
    for(let i = 0; i < this._coreShops.length; i++) {
        this._coreShops[i]._itemSellData = [];
        this._coreShops[i]._weaponSellData = [];
        this._coreShops[i]._armorSellData = [];
        let index = i;
        this._coreShops[i]._storedDataContents = [];
        this.initDataContents(index);
        this.initUnlockStatus(index);          
    }
};

Game_Shop.prototype.initDataContents = function(index) {
    let storedContents = this._coreShops[index]._storedContents;
    for(let i = 0; i < storedContents.length; i++) {
        id = 0;
        amount = 0;
        id = storedContents[i].id;
        amount = storedContents[i].amount;
        etypeId = storedContents[i].etypeId;
        this._coreShops[index]._storedDataContents.push({itemId : id, amount : amount, etypeId : etypeId});
    }
};

Game_Shop.prototype.initUnlockStatus = function(index) {
    for(let i = 0; i < this._coreShops[index]._storedContents.length; i++) {
        if(this._coreShops[index]['Auto-Unlock Items?']) {
            if(this._coreShops[index]._storedContents[i].itemRequirements) {
                this._coreShops[index]._storedContents[i].unlockStatus = 1;
            } else {
                this._coreShops[index]._storedContents[i].unlockStatus = 0;
            }
        } else {
            if(this._coreShops[index]._storedContents[i].itemRequirements) {
                this._coreShops[index]._storedContents[i].unlockStatus = 2;
            } else {
                this._coreShops[index]._storedContents[i].unlockStatus = 0;
            }
        }
    }
};

Game_Shop.prototype.storedGoods = function() {
    return this._coreShops[this._tempShopId]._storedContents;
};

Game_Shop.prototype.shopGold = function() {
    const coreShopId = this._tempShopId;
    return this._coreShops[coreShopId].shopGold;
};

Game_Shop.prototype.loseGold = function(amount) {
    return this._coreShops[this._tempShopId].shopGold-=amount;
};

Game_Shop.prototype.gainGold = function(amount) {
    return this._coreShops[this._tempShopId].shopGold+=amount;
};

Game_Shop.prototype.buyItem = function(item, amount) {
    for(let i = 0; i < this._coreShops[this._tempShopId]._storedContents.length; i++) {
        if(this._coreShops[this._tempShopId]._storedDataContents[i].itemId === item.id && this._coreShops[this._tempShopId]._storedDataContents[i].etypeId === item.etypeId) {
            this._coreShops[this._tempShopId]._storedContents[i].amount-=amount;
            this._coreShops[this._tempShopId]._storedDataContents[i].amount-=amount;
            break;
        }
    }
};

Game_Shop.prototype.sellItem = function(item, amount) {
    const storedDataContents = this._coreShops[this._tempShopId]._storedDataContents;
    const storedContents = this._coreShops[this._tempShopId]._storedContents;
    for(let i = 0; i < storedDataContents.length; i++) {
        if(storedDataContents[i].itemId === item.id && storedDataContents[i].etypeId === item.etypeId) {
            if(storedDataContents[i].amount === '') {
                return this.checkUnlocks();
            } else {
                storedDataContents[i].amount+=amount;
                return this.checkUnlocks();
            }
        }
    }
    id = 0;
    id = item.id;
    etypeId = item.etypeId;
    if (this._coreShops[this._tempShopId]['Retain Items?']) { //*~ Bug Fix, Do Not add item if retiain items is false.
    	storedDataContents.push({itemId: id, amount : amount, etypeId : etypeId});
	}
    item.amount = amount;
    if(item.meta.itemWeight){item.itemWeight = item.meta.itemWeight};
    item.retained = this._coreShops[this._tempShopId]['Retain Items?'];
    item.infinite = false;
    item.unlockStatus = 0;
    if (this._coreShops[this._tempShopId]['Retain Items?']) { //*~ Bug Fix, Do Not add item if retiain items is false.
    	storedContents.push(item);
	}
    this.checkUnlocks();
};

Game_Shop.prototype.checkUnlocks = function() {
    const storedContents = this._coreShops[this._tempShopId]._storedContents;
    for(let i = 0; i < storedContents.length; i++) {
        if(this.hasReqItems(storedContents[i])) {
            id = this._coreShops[this._tempShopId]._storedContents[i].id;
            etypeId = this._coreShops[this._tempShopId]._storedContents[i].etypeId;
            name = this._coreShops[this._tempShopId]._storedContents[i].name;
            iconIndex = this._coreShops[this._tempShopId]._storedContents[i].iconIndex;
            if(this._coreShops[this._tempShopId]._storedContents[i].unlockStatus === 2) {
                this.addNewItemToQue(id, name, etypeId, iconIndex);
            }
            this._coreShops[this._tempShopId]._storedContents[i].unlockStatus = 1;
        }
    }
};

Game_Shop.prototype.addNewItemToQue = function(id, name, etypeId, iconIndex) {
    for(let i = 0; i < this._shopGoodsUnlockQue.length; i++) {
        if(this._shopGoodsUnlockQue[i].id === id && this._shopGoodsUnlockQue.etypeId === etypeId) {
            return;
        }
    }
    obj = {};
    obj.id = id;
    obj.etypeId = etypeId;
    obj.name = name;
    obj.iconIndex = iconIndex;
    this._shopGoodsUnlockQue.push(obj);
};

Game_Shop.prototype.repeatUnlockQue = function() {
    if(this._shopGoodsUnlockQue.length > 0) {
        return true;
    } else {
        return false;
    }
};

Game_Shop.prototype.eraseItemEntry = function() {
    for (var i = 0; i < this._coreShops[this._tempShopId]._storedContents.length; i++)
        if (this._coreShops[this._tempShopId]._storedContents[i] && this._coreShops[this._tempShopId]._storedDataContents[i].amount === 0 && this._coreShops[this._tempShopId]._storedContents[i].infinite === false) {
            this._coreShops[this._tempShopId]._storedContents.splice(i,1);
            this._coreShops[this._tempShopId]._storedDataContents.splice(i,1);
        break;
    }
};

Game_Shop.prototype.setNumberWindowType = function(type) {
    return SceneManager._scene._numberWindow.setNumberWindowType(type);
};

Game_Shop.prototype.getCurrentShopMaxWeight = function() {
    return this._coreShops[this._tempShopId].maxWeight;
};

Game_Shop.prototype.getCurrentShopWeight = function() { // For Shops
  if(Dungeonmind.CS.inventoryType === 'Item Weight') {
    const storedContents = this._coreShops[this._tempShopId]._storedContents;
    const storedDataContents = this._coreShops[this._tempShopId]._storedDataContents;
    let shopWeight = 0;
    for(let i = 0; i < storedDataContents.length; i++) {
        itemWeight = 0;
        sum = 0;
        if(storedDataContents[i].amount && storedContents[i].retained !== false) {
            amount = storedDataContents[i].amount;
            sum = amount;
        }
        if(storedDataContents[i].amount && storedContents[i].itemWeight && storedContents[i].retained !== false) {
            amount = storedDataContents[i].amount;
            itemWeight = Number(storedContents[i].itemWeight);
            sum = amount*itemWeight;
        }
        shopWeight+=sum
    }
    shopWeight = parseFloat(shopWeight.toFixed(4));
    return shopWeight;
  } else if(Dungeonmind.CS.inventoryType === 'Slot Based'){
    return this.getCurrentSlotShopWeight();
  }
};

Game_Shop.prototype.getCurrentSlotShopWeight = function() { // For Slot Shops
    const storedContents = this._coreShops[this._tempShopId]._storedContents;
    const storedDataContents = this._coreShops[this._tempShopId]._storedDataContents;
    let shopWeight = 0;
    for(let i = 0; i < storedDataContents.length; i++) {
        itemWeight = 0;
        sum = 0;
        if(storedDataContents[i].amount && storedContents[i].retained !== false) {
            amount = 1;
            sum = amount;
        }
        if(storedDataContents[i].amount && storedContents[i].itemWeight && storedContents[i].retained !== false) {
            amount = storedDataContents[i].amount;
            itemWeight = Number(storedContents[i].itemWeight);
            sum = itemWeight;
        }
        shopWeight+=sum;
    }
    shopWeight = parseFloat(shopWeight.toFixed(4));
    return shopWeight;
};

Game_Shop.prototype.checkAvailableShopSpace = function(amount) { // For Shop
  if(Dungeonmind.CS.inventoryType === 'Item Weight') {
      let remainder = this.getCurrentShopMaxWeight() - this.getCurrentShopWeight();
      let item = SceneManager._scene._sellWindow.item();
      if(item !== null && item !== undefined && item.meta.itemWeight) {
        amount = amount*Number(item.meta.itemWeight); // V1.03 Bug Fix meta
      }
      if(amount > remainder) {
        return false;
      } else {
        return true;
      }
  } else if (Dungeonmind.CS.inventoryType === 'Slot Based') {
      return this.checkAvailableShopSlotSpace(amount);
  }
};

Game_Shop.prototype.checkAvailableShopSlotSpace = function(amount) { // For Slot Shops
    let remainder = this.getCurrentShopMaxWeight() - this.getCurrentShopWeight();
    let item = SceneManager._scene._sellWindow.item();
    let items = this._coreShops[this._tempShopId]._storedDataContents;
    if(!item) {
    	return true; //Bug Fix to stop crash when no items left
    }
    if(this.limitedInvPluginCheck()) {
      itemMax = Dungeonmind.LI.itemMaxDefault;
    } else {
      itemMax = 99;
    }
    for(let i = 0; i < items.length; i++) {
        if(items[i].etypeId === item.etypeId && items[i].itemId === item.id) {
            if(items[i].amount + amount < itemMax) {
                return true;
            } else {
                return false;
            }
        }
    }
    itemWeight = Number(item.meta.itemWeight);
    if(item.meta.itemWeight === undefined) {
        itemWeight = 1;
    }
    if(itemWeight <= remainder) {
        return true;
    } else {
        return false;
    }
};

//*~ Added June 11th, 2025

Game_Shop.prototype.getPartyCurrentAmountForItem = function(item) { // Party Amount for Item
	let partyCurrentAmount;
	if (item.etypeId === 1) {
    	partyCurrentAmount = $gameParty._weapons[item.id] || 0;
	} else if (item.etypeId > 1) {
    	partyCurrentAmount = $gameParty._armors[item.id] || 0;
	} else {
    	partyCurrentAmount = $gameParty._items[item.id] || 0;
	}
	return partyCurrentAmount;
};

Game_Shop.prototype.checkItemMaxDefaultForInventory = function(amount, item) { // Inventory: Default Max Items
    const itemMaxDefault = parseInt(Dungeonmind.LI?.itemMaxDefault) || 99;
    const currentAmount = this.getPartyCurrentAmountForItem(item);
    return currentAmount + parseInt(amount) <= itemMaxDefault;
};

Game_Shop.prototype.setShopItemAmount = function(amount, coreShop, item) {
	for (let i = 0; i < coreShop._storedContents.length; i++) {
		if (coreShop._storedContents[i].id === item.id && coreShop._storedContents[i].etypeId === item.etypeId) {
			coreShop._storedContents[i].amount = amount;
		}
	}
};

Game_Shop.prototype.checkItemMaxDefaultForShop = function(amount, item) { // Shop: Default Max Items
	const shopId = this._tempShopId;
	const coreShops = this._coreShops[shopId];
	const itemMaxDefault = (Dungeonmind.LI && Dungeonmind.LI.itemMaxDefault === '' ? Infinity : parseInt(Dungeonmind.LI.itemMaxDefault)) || 99;
	for (let i = 0; i < coreShops._storedContents.length; i++) {
		if(coreShops._storedContents[i].id === item.id && coreShops._storedContents[i].etypeId === item.etypeId) {
			let shopAmount = coreShops._storedContents[i].amount === '' ? Infinity : parseInt(coreShops._storedContents[i].amount) || 0;
			let boolean = shopAmount + parseInt(amount) <= itemMaxDefault;
			if (boolean) {
				this.setShopItemAmount(shopAmount + parseInt(amount), coreShops, item);
			}
			return boolean;
		}
	}
	let boolean = parseInt(amount) <= itemMaxDefault;
	return boolean; // Item not found, add new item.
};

Game_Shop.prototype.checkItemMaxDefaultForShop = function(amount, item) { // Shop: Default Max Items
	const shopId = this._tempShopId;
	const coreShops = this._coreShops[shopId];
	const itemMaxDefault = parseInt(Dungeonmind.LI?.itemMaxDefault) || 99;
	for (let i = 0; i < coreShops._storedContents.length; i++) {
		if(coreShops._storedContents[i].id === item.id && coreShops._storedContents[i].etypeId === item.etypeId) {
			let shopAmount = coreShops._storedContents[i].amount === '' ? Infinity : parseInt(coreShops._storedContents[i].amount);
			if (shopAmount === Infinity) {
				return true; // If shop amount is infinite, allow deposit
			} else {
				let boolean = shopAmount + parseInt(amount) <= itemMaxDefault;
				if (boolean) {
					this.setShopItemAmount(shopAmount + parseInt(amount), coreShops, item);
				}
				return boolean
			}
		}
	}
	let boolean = parseInt(amount) <= itemMaxDefault;
	return boolean; // Item not found, add new item.
};

//~*

Game_Shop.prototype.checkAvailableInventorySpace = function(amount) { // For Inventory
  if(Dungeonmind.LI.inventoryType === 'Item Weight') {
      let remainder = $gameContainers.getCurrentPartyInventoryMaxWeight() - $gameContainers.getCurrentPartyInventoryWeight();
      let item = SceneManager._scene._buyWindow.item();
      let currentAmount = $gameShop.getPartyCurrentAmountForItem(item);
	  return currentAmount + amount <= Dungeonmind.LI.itemMaxDefault;
      if(item !== null && item !== undefined && item.itemWeight) {
          amount = amount*Number(item.itemWeight);
      }
      if(amount > remainder) {
          return false;
      } else {
          return true;
      }
  } else if(Dungeonmind.LI.inventoryType === 'Slot Based') {
    return this.checkAvailableInventorySlotSpace(amount);
  }
};

Game_Shop.prototype.checkAvailableInventorySlotSpace = function(amount) { // For Slot Inventory
    let remainder = $gameContainers.getCurrentPartyInventoryMaxWeight() - $gameContainers.getCurrentPartyInventoryWeight();
    let item = SceneManager._scene._buyWindow.item();
    let items = $gameParty.allItems();
    if(!item) {
    	return true; //Bug Fix to stop crash when no items left
    }
    for(let i = 0; i < items.length; i++) {
        if(items[i].etypeId === item.etypeId && items[i].id === item.id) {
            if(items[i].etypeId === 1) {
                if($gameParty._weapons[items[i].id] + amount <= Dungeonmind.LI.itemMaxDefault) {
                    return true;
                } else {
                    return false;
                }
            } else if(items[i].etypeId > 1) {
                if($gameParty._armors[items[i].id] + amount <= Dungeonmind.LI.itemMaxDefault) {
                    return true;
                } else {
                    return false;
                }
            } else if(items[i].etypeId === undefined) {
                if($gameParty._items[items[i].id] + amount <= Dungeonmind.LI.itemMaxDefault) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
    itemWeight = Number(item.meta.itemWeight);
    if(item.meta.itemWeight === undefined) {
        itemWeight = 1;
    }
    if(itemWeight <= remainder) {
        return true;
    } else {
        return false;
    }
};

Game_Shop.prototype.limitedInvPluginCheck = function() {
    if($plugins.find(plugin => plugin.name == "DM_LimitedInventory")?.status) {
        return true;
    } else {
        return false;
    }
};

Game_Shop.prototype.dmItemCategoryPluginCheck = function() {
    if($plugins.find(plugin => plugin.name == "DM_ItemCategories")?.status) {
        return true;
    } else {
        return false;
    }
};

Game_Shop.prototype.dmIndependentItemsPluginCheck = function() {
    if($plugins.find(plugin => plugin.name == "DM_IndependentItems")?.status) {
        return true;
    } else {
        return false;
    }
};

Game_Shop.prototype.getAmountSoldForItem = function(item) {
    let shopSellData = this._coreShops[this._tempShopId]._storedDataContents;
    for(let i = 0; i < shopSellData.length; i++) {
        if(item && shopSellData[i].itemId === item.id && shopSellData[i].etypeId === item.etypeId) {
            return shopSellData[i].amount;
        }
    }
    return '0';
};

Game_Shop.prototype.hasReqItems = function(item) {
    let reqItems = false;
    if(item !== null && item !== undefined) {
        reqItems = reqItems || item.itemRequirements;
    }
    if(item !== null && item !== undefined && !item.itemRequirements) {
        return true;
    }
    let passReq = 0;
    for(let i = 0; i < reqItems.length; i++) {
        for(let i2 = 0; i2 < this._coreShops[this._tempShopId]._storedDataContents.length; i2++) {
            if(reqItems[i]['Item Id'] === this._coreShops[this._tempShopId]._storedDataContents[i2].itemId && reqItems[i]['Amount'] <= this._coreShops[this._tempShopId]._storedDataContents[i2].amount) {
                passReq++
                if(passReq >= reqItems.length) {
                    return true;
                }
            }
        }
    }
    return false;
};

Game_Shop.prototype.getReqsForAmount = function(number) {
    number++;
    let reqItems = false;
    let item = SceneManager._scene._buyWindow.item();
    if(item !== null && item !== undefined) {
        reqItems = reqItems || item.itemRequirements;
    }
    if(item !== null && item !== undefined && !item.itemRequirements) {
        return true;
    }
    let passReq = 0;
    for(let i = 0; i < reqItems.length; i++) {
        for(let i2 = 0; i2 < this._coreShops[this._tempShopId]._storedDataContents.length; i2++) {
            if(reqItems[i]['Item Id'] === this._coreShops[this._tempShopId]._storedDataContents[i2].itemId && reqItems[i]['Amount']*number <= this._coreShops[this._tempShopId]._storedDataContents[i2].amount) {
                passReq++
                if(passReq >= reqItems.length) {
                    return true;
                }
            }
        }
    }
    return false;
};

Game_Shop.prototype.takeReqItems = function(item) {
    if(item.itemRequirements) {
        for(let i = 0; i < item.itemRequirements.length; i++) {
            id = item.itemRequirements[i]['Item Id']
            amount = item.itemRequirements[i]['Amount'];
            for(let i2 = 0; i2 < this._coreShops[this._tempShopId]._storedDataContents.length; i2++) {
                if(this._coreShops[this._tempShopId]._storedDataContents[i2].itemId === id) {
                    this._coreShops[this._tempShopId]._storedDataContents[i2].amount-=amount;
                }
            }
        }
    $gameShop.eraseItemEntry();
    SceneManager._scene._buyWindow.refresh();
    }
};

Game_Shop.prototype.setPriceForItem = function(shopId, itemId, price) {
	let shopGoods = this._coreShops[shopId-1]._storedContents;
	let itemObj = $dataItems[itemId];
	for(let i = 0; i < shopGoods.length; i++) {
		if(shopGoods[i].id === itemId && shopGoods[i].etypeId === itemObj.etypeId) {
			this._coreShops[shopId-1]._storedContents[i].newDatabasePrice = price;
			return this._coreShops[shopId-1]._storedContents[i].price = price;
		}
	}
};

Game_Shop.prototype.setPriceForWeapon = function(shopId, weaponId, price) {
	let shopGoods = this._coreShops[shopId-1]._storedContents;
	let itemObj = $dataWeapons[weaponId];
	for(let i = 0; i < shopGoods.length; i++) {
		if(shopGoods[i].id === weaponId && shopGoods[i].etypeId === itemObj.etypeId) {
			this._coreShops[shopId-1]._storedContents[i].newDatabasePrice = price;
			return this._coreShops[shopId-1]._storedContents[i].price = price;
		}
	}
};

Game_Shop.prototype.setPriceForArmor = function(shopId, armorId, price) {
	let shopGoods = this._coreShops[shopId-1]._storedContents;
	let itemObj = $dataArmors[armorId];
	for(let i = 0; i < shopGoods.length; i++) {
		if(shopGoods[i].id === armorId && shopGoods[i].etypeId === itemObj.etypeId) {
			this._coreShops[shopId-1]._storedContents[i].newDatabasePrice = price;
			return this._coreShops[shopId-1]._storedContents[i].price = price;
		}
	}
};

Game_Shop.prototype.changePricesForShopGoods = function(shopId, multiplier) {
	let shopGoods = this._coreShops[shopId-1]._storedContents;
	let price = 0;
	for(let i = 0; i < shopGoods.length; i++) {
		if(this._coreShops[shopId-1]._storedContents[i].newDatabasePrice) {
			price = this._coreShops[shopId-1]._storedContents[i].newDatabasePrice*multiplier;
		} else {
			item = this.getItemType(this._coreShops[shopId-1]._storedContents[i].id, this._coreShops[shopId-1]._storedContents[i].etypeId);
			price = item.price;
			price = price*multiplier;
		}
		price = Math.round(price);
		this._coreShops[shopId-1]._storedContents[i].price = price;
	}
};

Game_Shop.prototype.getItemType = function(id, etypeId) {
    switch (etypeId) {
        case undefined:
            return $dataItems[id];
            break;
        case 1:
            return $dataWeapons[id];
            break;
        default:
        	return $dataArmors[id];
        	break;
    }
};

Game_Shop.prototype.clearShopContents = function(shopId) {
	const id = shopId-1;
	this._coreShops[id]._storedContents = [];
	this._coreShops[id]._storedDataContents = [];
};

//*~ Useful Conditonal Script calls

Game_Shop.prototype.getShopsCurrentGold = function(shopId) {
	if (this._coreShops[shopId-1]['Shop Gold']) {
		return this._coreShops[shopId-1]['Shop Gold'];
	} else {
		return Infinity;
	}
};

Game_Shop.prototype.getShopStockQuantityForItem = function(shopId, itemId) {
	const dataItems = this._coreShops[shopId-1]['Items'];
	for (let i = 0; i < dataItems.length; i++) {
		const requirements = dataItems[i]['Item Requirements'];
		if (Array.isArray(requirements) && requirements.length > 0) {
			continue;
		}
		const item = dataItems[i];
		for (let i2 = 0; i2 < this._coreShops[shopId-1]._storedDataContents.length; i2++) {
			const storedData = this._coreShops[shopId-1]._storedDataContents[i2];
			if (storedData.itemId === itemId && storedData.etypeId === undefined) {
				if (storedData.amount === '') {
					return Infinity;
				}
				return storedData.amount;
			}
		}
	}
	return 0;
};

Game_Shop.prototype.getShopStockQuantityForWeapon = function(shopId, itemId) {
    const dataItems = this._coreShops[shopId-1]['Weapons'];
    for (let i = 0; i < dataItems.length; i++) {
        const requirements = dataItems[i]['Item Requirements'];
        if (Array.isArray(requirements) && requirements.length > 0) {
            continue;
        }
        const item = dataItems[i];
        for (let i2 = 0; i2 < this._coreShops[shopId-1]._storedDataContents.length; i2++) {
            const storedData = this._coreShops[shopId-1]._storedDataContents[i2];
            if (storedData.itemId === itemId && storedData.etypeId === 1) {
                if (storedData.amount === '') {
                    return Infinity;
                }
                return storedData.amount;
            }
        }
    }
    return 0;
};

Game_Shop.prototype.getShopStockQuantityForArmor = function(shopId, itemId) {
    const dataItems = this._coreShops[shopId-1]['Armors'];
    for (let i = 0; i < dataItems.length; i++) {
        const requirements = dataItems[i]['Item Requirements'];
        if (Array.isArray(requirements) && requirements.length > 0) {
            continue;
        }
        const item = dataItems[i];
        for (let i2 = 0; i2 < this._coreShops[shopId-1]._storedDataContents.length; i2++) {
            const storedData = this._coreShops[shopId-1]._storedDataContents[i2];
            if (storedData.itemId === itemId && storedData.etypeId > 1) {
                if (storedData.amount === '') {
                    return Infinity;
                }
                return storedData.amount;
            }
        }
    }
    return 0;
};

//--------------------------------------------------------------------------------------
// DataManager
//--------------------------------------------------------------------------------------

Dungeonmind.CS.ALIAS_DataManager_createGameObjects = DataManager.createGameObjects;

DataManager.createGameObjects = function() {
    Dungeonmind.CS.ALIAS_DataManager_createGameObjects.call(this);
    $gameShop = new Game_Shop();
};

Dungeonmind.CS.ALIAS_DataManager_makeSaveContents = DataManager.makeSaveContents;

DataManager.makeSaveContents = function() {
    const contents = Dungeonmind.CS.ALIAS_DataManager_makeSaveContents.call(this);
    contents.gameShop = $gameShop;
    return contents;
};

Dungeonmind.CS.ALIAS_DataManager_extractSaveContents = DataManager.extractSaveContents;

DataManager.extractSaveContents = function(contents) {
    Dungeonmind.CS.ALIAS_DataManager_extractSaveContents.call(this, contents);
    $gameShop = contents.gameShop;
};

//--------------------------------------------------------------------------------------
// ColorManager
//--------------------------------------------------------------------------------------

ColorManager.itemStockBackColor1 = function() {
    return "rgba(32, 32, 32, 0.2)";
};

ColorManager.itemStockBackColor2 = function() {
    return "rgba(0, 0, 0, 0.2)";
};

//-----------------------------------------------------------------------------
// Scene_CoreShop
//
// The scene class of the core shop screen.

function Scene_CoreShop() {
    this.initialize(...arguments);
}

Scene_CoreShop.prototype = Object.create(Scene_MenuBase.prototype);
Scene_CoreShop.prototype.constructor = Scene_CoreShop;

Scene_CoreShop.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_CoreShop.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createGoldWindow();
    if($gameShop._coreShops[$gameShop._tempShopId].shopGold || $gameShop._coreShops[$gameShop._tempShopId].shopGold === 0) {
        this.createShopGoldWindow();
    }
    this.createCommandWindow();
    this.createDummyWindow();
    this.createCategoryWindow();
    this.createStatusWindow();
    if($gameShop.limitedInvPluginCheck()) {
        this.createInventoryTitleWindow();
    }
    this.createShopTitleWindow();
    this.createShopStockWindow();
    this.createNumberBuyWindow();
    this.createNumberWindow();
    this.createCoreShopBuyWindow();
    this.createSellWindow();
    this.createNewStockWindow();
    this.createNewStockConfirmationsWindow();
    $gameShop._coreShops[$gameShop._tempShopId]._currentWeight = $gameShop.getCurrentShopWeight();
};

Scene_CoreShop.prototype.createGoldWindow = function() {
    const rect = this.goldWindowRect();
    this._goldWindow = new Window_Gold(rect);
    this.addWindow(this._goldWindow);
};

Scene_CoreShop.prototype.createShopGoldWindow = function() {
    const rect = this.goldShopWindowRect();
    this._goldShopWindow = new Window_ShopGold(rect);
    this.addWindow(this._goldShopWindow);
};

Scene_CoreShop.prototype.createNewStockWindow = function() {
    const rect = this.newStockWindowRect();
    this._newStockWindow = new Window_UnlockStock(rect);
    this.addWindow(this._newStockWindow);
    this._newStockWindow.hide();
};

Scene_CoreShop.prototype.stockWindowOk = function() {
    $gameShop._shopGoodsUnlockQue.shift();
    if(!$gameShop.repeatUnlockQue()) {
        this._newStockWindow.hide();
        this._newStockConfirmationWindow.hide();
        this._newStockConfirmationWindow.deactivate();
        this._sellWindow.activate();
        this._sellWindow.select(0);
        this._newStockWindow.refresh();
    } else {
        AudioManager.playSe({name: Dungeonmind.CS.unlockNewStockSE, pan: 0, pitch: 100, volume: 100});
        this._newStockWindow.refresh();
        this._newStockWindow.setTextLines();
        this._newStockConfirmationWindow.activate();
    };
};

Scene_CoreShop.prototype.newStockWindowRect = function() {
    const ww = Graphics.boxWidth/2;
    const wh = this.calcWindowHeight(3, true);
    const wx = Graphics.boxWidth/2 - ww/2;
    const wy = Graphics.boxHeight/2 - wh/2;
    return new Rectangle(wx,wy,ww,wh);
};

Scene_CoreShop.prototype.createNewStockConfirmationsWindow = function() {
    const rect = this.newStockConfirmationWindowRect();
    this._newStockConfirmationWindow = new Window_UnlockConfirm(rect);
    this._newStockConfirmationWindow.setHandler("ok", this.stockWindowOk.bind(this));
    this._newStockConfirmationWindow.setHandler("cancel", this.stockWindowOk.bind(this));
    this.addWindow(this._newStockConfirmationWindow);
    this._newStockConfirmationWindow.hide();
    this._newStockConfirmationWindow.opacity = 0;
};

Scene_CoreShop.prototype.newStockConfirmationWindowRect = function() {
    const ww = Graphics.boxWidth/4;
    const wh = this.calcWindowHeight(1, true);
    const wx = Graphics.boxWidth/2 - ww/2;
    const wy = Graphics.boxHeight/2 - wh/2 + this._newStockWindow.height - this.calcWindowHeight(2, true);
    return new Rectangle(wx,wy,ww,wh);
};

Scene_CoreShop.prototype.goldWindowRect = function() {
    const ww = this.mainCommandWidth();
    const wh = this.calcWindowHeight(1, true);
    const wx = Graphics.boxWidth - ww;
    const wy = this.mainAreaTop();
    return new Rectangle(wx, wy, ww, wh);
};

Scene_CoreShop.prototype.goldShopWindowRect = function() {
    const ww = this.mainCommandWidth();
    const wh = this.calcWindowHeight(1, true);
    const wx = 0;
    const wy = this.mainAreaTop();
    return new Rectangle(wx, wy, ww, wh);
};


Scene_CoreShop.prototype.createCommandWindow = function() {
    const rect = this.commandWindowRect();
    this._commandWindow = new Window_ShopCommand(rect);
    this._commandWindow.setPurchaseOnly(this._purchaseOnly);
    this._commandWindow.y = this.mainAreaTop();
    this._commandWindow.setHandler("buy", this.commandBuy.bind(this));
    this._commandWindow.setHandler("sell", this.commandSell.bind(this));
    this._commandWindow.setHandler("cancel", this.onCancelCoreShop.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_CoreShop.prototype.onCancelCoreShop = function() {
    return SceneManager.goto(Scene_Map);
};

Scene_CoreShop.prototype.commandWindowRect = function() {
    let wx = 0;
    if(this._goldShopWindow) {wx = this._goldShopWindow.width};
    const wy = this.mainAreaTop();
    let ww = this._goldWindow.x;
    if(this._goldShopWindow){ww = this._goldWindow.x - this._goldShopWindow.width};
    const wh = this.calcWindowHeight(1, true);
    return new Rectangle(wx, wy, ww, wh);
};

Scene_CoreShop.prototype.createDummyWindow = function() {
    const rect = this.dummyWindowRect();
    this._dummyWindow = new Window_Base(rect);
    this.addWindow(this._dummyWindow);
};

Scene_CoreShop.prototype.dummyWindowRect = function() {
    const wx = 0;
    const wy = this._commandWindow.y + this._commandWindow.height;
    const ww = Graphics.boxWidth;
    const wh = this.mainAreaHeight() - this._commandWindow.height;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_CoreShop.prototype.createNumberWindow = function() {
    const rect = this.numberWindowRect();
    this._numberWindow = new Window_ShopNumber(rect);
    this._numberWindow.hide();
    this._numberWindow.setHandler("ok", this.onNumberOk.bind(this));
    this._numberWindow.setHandler("cancel", this.onNumberCancel.bind(this));
    this.addWindow(this._numberWindow);
};

Scene_CoreShop.prototype.numberWindowRect = function() {
    const wx = 0;
    const wy = this._dummyWindow.y + this._categoryWindow.height;
    const ww = Graphics.boxWidth - this.statusWidth();
    const wh = this._dummyWindow.height - this._categoryWindow.height;
    return new Rectangle(wx, wy, ww, wh);
};


Scene_CoreShop.prototype.createNumberBuyWindow = function() {
    const rect = this.numberWindowBuyRect();
    this._numberBuyWindow = new Window_ShopNumber(rect);
    this._numberBuyWindow.hide();
    this._numberBuyWindow.setHandler("ok", this.onNumberOk.bind(this));
    this._numberBuyWindow.setHandler("cancel", this.onNumberCancel.bind(this));
    this.addWindow(this._numberBuyWindow);
};

Scene_CoreShop.prototype.numberWindowBuyRect = function() {
    const wx = this._shopStockWindow.width;
    const wy = this._dummyWindow.y + this._categoryWindow.height;
    const ww = Graphics.boxWidth - this.statusWidth() - this._shopStockWindow.width;
    const wh = this._dummyWindow.height - this._categoryWindow.height;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_CoreShop.prototype.createStatusWindow = function() {
    const rect = this.statusWindowRect();
    this._statusWindow = new Window_ShopStatus(rect);
    this._statusWindow.hide();
    this.addWindow(this._statusWindow);
};

Scene_CoreShop.prototype.statusWindowRect = function() {
    const ww = this.statusWidth();
    var wh = this._dummyWindow.height - this._categoryWindow.height;
    if($gameShop.limitedInvPluginCheck()) {
        wh -= this.calcWindowHeight(1, true);
    }
    const wx = Graphics.boxWidth - ww;
    const wy = this._dummyWindow.y + this._categoryWindow.height;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_CoreShop.prototype.createCoreShopBuyWindow = function() {
    const rect = this.coreShopBuyWindowRect();
    this._buyWindow = new Window_CoreShopBuy(rect);
    this._buyWindow.setHelpWindow(this._helpWindow);
    this._buyWindow.setStatusWindow(this._statusWindow);
    this._buyWindow.setMoney(this.money());
    this._buyWindow.hide();
    this._buyWindow.setHandler("ok", this.onBuyOk.bind(this));
    this._buyWindow.setHandler("cancel", this.onBuyCancel.bind(this));
    this._categoryWindow.setBuyWindow(this._buyWindow);
    this.addWindow(this._buyWindow);
    if (!this._categoryWindow.needsSelection()) {
        this._buyWindow.y -= this._categoryWindow.height;
        this._buyWindow.height += this._categoryWindow.height;
    }
};

Scene_CoreShop.prototype.coreShopBuyWindowRect = function() {
    const wx = this._shopStockWindow.width;
    const wy = this._dummyWindow.y + this._categoryWindow.height;
    const ww = Graphics.boxWidth - this.statusWidth() - this._shopStockWindow.width;
    const wh = this._dummyWindow.height - this._categoryWindow.height;
    return new Rectangle(wx, wy, ww, wh);
};


Scene_CoreShop.prototype.createCategoryWindow = function() {
    const rect = this.categoryWindowRect();
    if($gameShop.dmItemCategoryPluginCheck()) {
      this._categoryWindow = new Window_ItemDMCategory(rect);
    } else {
      this._categoryWindow = new Window_ItemCategory(rect);
    }
    this._categoryWindow.setHelpWindow(this._helpWindow);
    this._categoryWindow.hide();
    this._categoryWindow.deactivate();
    this._categoryWindow.setHandler("ok", this.onCategoryOk.bind(this));
    this._categoryWindow.setHandler("cancel", this.onCategoryCancel.bind(this));
    this.addWindow(this._categoryWindow);
};

Scene_CoreShop.prototype.categoryWindowRect = function() {
    const wx = 0;
    const wy = this._dummyWindow.y;
    const ww = Graphics.boxWidth;
    const wh = this.calcWindowHeight(1, true);
    return new Rectangle(wx, wy, ww, wh);
};

Scene_CoreShop.prototype.createSellWindow = function() {
    const rect = this.sellWindowRect();
    this._sellWindow = new Window_ShopSell(rect);
    this._sellWindow.setHelpWindow(this._helpWindow);
    this._sellWindow.hide();
    this._sellWindow.setHandler("ok", this.onSellOk.bind(this));
    this._sellWindow.setHandler("cancel", this.onSellCancel.bind(this));
    this._categoryWindow.setItemWindow(this._sellWindow);
    this.addWindow(this._sellWindow);
    if (!this._categoryWindow.needsSelection()) {
        this._sellWindow.y -= this._categoryWindow.height;
        this._sellWindow.height += this._categoryWindow.height;
    }
};

Scene_CoreShop.prototype.createShopStockWindow = function() {
    const rect = this.shopStockWindowRect();
    this._shopStockWindow = new Window_ShopStock(rect);
    this.addWindow(this._shopStockWindow);
    this._shopStockWindow.hide();
};

Scene_CoreShop.prototype.shopStockWindowRect = function() {
    const ww = this.statusWidth();
    var wh = this._dummyWindow.height - this._categoryWindow.height;
    if($gameShop._coreShops[$gameShop._tempShopId].maxWeight > 0) {
        wh = this._dummyWindow.height - this._categoryWindow.height - this._shopTitleWindow.height;
    }
    const wx = 0;
    const wy = this._dummyWindow.y + this._categoryWindow.height;
    return new Rectangle(wx, wy, ww, wh);
};


Scene_CoreShop.prototype.sellWindowRect = function() {
    const wx = 0;
    const wy = this._categoryWindow.y + this._categoryWindow.height;
    const ww = Graphics.boxWidth;
    const wh = this.mainAreaHeight() - this._commandWindow.height - this._categoryWindow.height;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_CoreShop.prototype.statusWidth = function() {
    return Dungeonmind.CS.shopStatusWindowWidth;
};

Scene_CoreShop.prototype.activateBuyWindow = function() {
    this._buyWindow.show();
    this._buyWindow.activate();
    this._statusWindow.show();
};

Scene_CoreShop.prototype.activateSellWindow = function() {
    if (this._categoryWindow.needsSelection()) {
        this._categoryWindow.show();
    }
    this._sellWindow.refresh();
    this._sellWindow.show();
    if(!this._newStockConfirmationWindow.visible) {
        this._sellWindow.activate();
    }
    this._statusWindow.hide();
};

Scene_CoreShop.prototype.commandBuy = function() {
    this._dummyWindow.hide();
    $gameShop.setNumberWindowType('buy');
    this._buyWindow.show();
    this._buyWindow.deselect();
    this._buyWindow.refresh();
    this._categoryWindow.activate();
    if($gameShop.limitedInvPluginCheck()) {
        this._statusWindow.height = this._dummyWindow.height - this._categoryWindow.height - this.calcWindowHeight(1, true);
    }
    this._statusWindow.show();
    this._shopStockWindow.show();
    if(this._inventoryTitleWindow){this._inventoryTitleWindow.show();}
    if(this._shopTitleWindow){this._shopTitleWindow.show();}
    if (this._categoryWindow.needsSelection()) {
        this._categoryWindow.show();
        this._categoryWindow.activate();
    } else {
        this.onCategoryOk();
    }
};

Scene_CoreShop.prototype.commandSell = function() {
    this._dummyWindow.hide();
    $gameShop.setNumberWindowType('sell');
    this._sellWindow.show();
    this._sellWindow.deselect();
    this._sellWindow.refresh();
    this._shopStockWindow.hide();
    if (this._categoryWindow.needsSelection()) {
        this._categoryWindow.show();
        this._categoryWindow.activate();
    } else {
        this.onCategoryOk();
    }
};

Scene_CoreShop.prototype.onBuyOk = function() {
    this._item = this._buyWindow.item();
    this._buyWindow.hide();
    this._numberBuyWindow.setNumberWindowType('buy');
    this._numberBuyWindow.setup(this._item, this.getItemMax(), this.buyingPrice());
    this._numberBuyWindow.setCurrencyUnit(this.currencyUnit());
    this._numberBuyWindow.show();
    this._numberBuyWindow.activate();
};

Scene_CoreShop.prototype.getItemMax = function() {
    if($gameShop.limitedInvPluginCheck()) {
      return Dungeonmind.LI.itemMaxDefault;
    } else {
      return 99;
    }
  //return 99; //*bugfix for users not using DM_LimitedInventory.js
};

Scene_CoreShop.prototype.onBuyCancel = function() {
    this._categoryWindow.activate();
    //this._buyWindow.hide();
    //this._statusWindow.hide();
    this._buyWindow.deselect();
    this._statusWindow.setItem(null);
    this._helpWindow.clear();
    if (this._categoryWindow.needsSelection()) {
        this._categoryWindow.activate();
    } else {
        this.onCategoryCancel();
    }
};

Scene_CoreShop.prototype.onCategoryOk = function() {
    if(this._buyWindow.visible) {
        this.activateBuyWindow();
        this._buyWindow.select(0);
    } else if(!this._newStockConfirmationWindow.visible) {
        this.activateSellWindow();
        this._sellWindow.select(0);
    }
};

Scene_CoreShop.prototype.onCategoryCancel = function() {
    this._commandWindow.activate();
    this._dummyWindow.show();
    this._categoryWindow.hide();
    this._sellWindow.hide();
    this._buyWindow.hide();
    this._statusWindow.hide();
    this._shopStockWindow.hide();
    if(this._shopTitleWindow){this._shopTitleWindow.hide();}
    if(this._inventoryTitleWindow){this._inventoryTitleWindow.hide();}
};

Scene_CoreShop.prototype.onSellOk = function() {
    this._item = this._sellWindow.item();
    this._sellWindow.hide();
    this._numberWindow.setNumberWindowType('sell');
    this._numberWindow.setup(this._item, this.maxSell(), this.sellingPrice());
    this._numberWindow.setCurrencyUnit(this.currencyUnit());
    this._numberWindow.show();
    this._numberWindow.activate();
    this._statusWindow.setItem(this._item);
    if($gameShop.limitedInvPluginCheck()) {
        this._statusWindow.height = this._dummyWindow.height - this._categoryWindow.height;
    }
    this._statusWindow.show();
};

Scene_CoreShop.prototype.onSellCancel = function() {
    this._sellWindow.deselect();
    this._statusWindow.setItem(null);
    this._helpWindow.clear();
    if (this._categoryWindow.needsSelection()) {
        this._categoryWindow.activate();
    } else {
        this.onCategoryCancel();
    }
};
Scene_CoreShop.prototype.getItemType = function(item) {
	if(item.etypeId === 1) {
		return 'weapon';
	} else if(item.etypeId > 1) {
		return 'armour';
	} else {
		return 'item';
	}
};

Scene_CoreShop.prototype.onNumberOk = function() {
    if (this._commandWindow.currentSymbol() === 'sell') {
        sellItem = SceneManager._scene._sellWindow.item();
        if (sellItem.meta['Cannot Sell']) {
            SoundManager.playBuzzer();
            this._numberWindow.activate();
            this._helpWindow.setWarningText('This ' + this.getItemType(sellItem) + ' cannot be sold!');
            return 'cannot_sell_item';
        }
    };
    let shopGold = $gameShop._coreShops[$gameShop._tempShopId].shopGold;
	if (this._commandWindow.currentSymbol() === 'sell' && shopGold !== '' && shopGold < this.sellingPrice() * this._numberWindow.number()) {
    	SoundManager.playBuzzer();
    	this._numberWindow.activate();
    	this._helpWindow.setWarningText($gameShop._surpassMaxShopGoldText);
    	return 'insufficient_shop_gold';
	}
    if ($gameShop.limitedInvPluginCheck() && this._commandWindow.currentSymbol() === 'buy') {
        //*~ Check Item Max Default For Inventory
        if (!$gameShop.checkItemMaxDefaultForInventory(this._numberBuyWindow._number, this._numberBuyWindow._item)) {
            SoundManager.playBuzzer();
            this._helpWindow.setWarningText($gameShop._surpassItemMaxDefaultForBuying);
            this._numberBuyWindow.activate();
            return 'item_max_default_buying';
        }
        //*~ Check Inventory Space
        if (!$gameShop.checkAvailableInventorySpace(this._numberBuyWindow._number)) {
            SoundManager.playBuzzer();
            title = this.removeTextCodes(Dungeonmind.LI.inventoryTitle);
            this._helpWindow.setWarningText($gameShop._surpassMaxInvWeightText);
            this._numberBuyWindow.activate();
            return 'inventory_overweight';
        }
    }
    if (this._commandWindow.currentSymbol() === 'sell') {
        //*~ Check Item Max Default For Sell Window
        if (!$gameShop.checkItemMaxDefaultForShop(this._numberWindow._number, SceneManager._scene._sellWindow.item())) {
            SoundManager.playBuzzer();
            this._helpWindow.setWarningText($gameShop._surpassItemMaxDefaultForSelling);
            this._numberWindow.activate();
            return 'item_max_default_selling';
        }
        if ($gameShop._coreShops[$gameShop._tempShopId].maxWeight > 0) { //Infinity Check
            //*~ Check Shop Space
            if (!$gameShop.checkAvailableShopSpace(this._numberWindow.number())) {
                SoundManager.playBuzzer();
                //title = this.removeTextCodes($gameShop._coreShops[$gameShop._tempShopId]['Shop Name']);
                this._helpWindow.setWarningText($gameShop._surpassMaxShopWeightText);
                this._numberWindow.activate();
                return 'shop_overweight';
            }
        }
    }
    if (this._commandWindow.currentSymbol() === 'buy') {
        if ($gameParty._gold < this._numberBuyWindow.number() * this._numberBuyWindow._item.price) {
            SoundManager.playBuzzer();
            title = this.removeTextCodes($gameShop._coreShops[$gameShop._tempShopId]['Shop Name']);
            this._helpWindow.setWarningText($gameShop._surpassMaxInvGoldText);
            this._numberBuyWindow.activate();
            return 'insufficient_gold';
        }
    }

    SoundManager.playShop();
    switch (this._commandWindow.currentSymbol()) {
        case "buy":
            this.doBuy(this._numberBuyWindow.number());
            break;
        case "sell":
            this.doSell(this._numberWindow.number());
            break;
    }
    this.endNumberInput();
    this._goldWindow.refresh();
    this._statusWindow.refresh();
    return 'success';
};

Scene_CoreShop.prototype.onNumberCancel = function() {
    SoundManager.playCancel();
    this.endNumberInput();
};

Scene_CoreShop.prototype.doBuy = function(number) {
    this._item = this._buyWindow.item();
    $gameParty.loseGold(number * this.buyingPrice());
    //* Shop Gold Data
    if(this._goldShopWindow) {
        $gameShop.gainGold(number * this.buyingPrice());
        this._goldShopWindow.refresh();
    }
    // *NEW HANDLING OF GAIN ITEM TO GIVE THE ORIGINAL DATABASE ITEM INSTEAD!
    if($gameShop.dmIndependentItemsPluginCheck() && this._item.meta.independentItem) {
        numbr = number;
        //*items
        if(this._item.etypeId === undefined) {
            while(numbr > 0) {
                obj = {};
                obj = JsonEx.makeDeepCopy($dataItems[this._item.id]);
                obj.id = $gameIndependents._independentId++;
                obj.originalId = this._item.id;
                $gameIndependents._independentItems[$gameIndependents._independentId-1]
                $dataItems[$gameIndependents._independentId-1] = obj;
                $gameParty.gainItem($gameIndependents._independentItems[$gameIndependents._independentId-1], 1);
                numbr--;
            }
        }
        //*weapons
        if(this._item.etypeId === 1) {
            while(numbr > 0) {
                obj = {};
                obj = JsonEx.makeDeepCopy($dataWeapons[this._item.id]);
                obj.id = $gameIndependents._independentId++;
                obj.originalId = this._item.id;
                $gameIndependents._independentWeapons[$gameIndependents._independentId-1]
                $dataWeapons[$gameIndependents._independentId-1] = obj;
                $gameParty.gainItem($gameIndependents._independentWeapons[$gameIndependents._independentId-1], 1);
                numbr--;
            }
        }
        //*armors
        if(this._item.etypeId > 1) {
            while(numbr > 0) {
                obj = {};
                obj = JsonEx.makeDeepCopy($dataArmors[this._item.id]);
                obj.id = $gameIndependents._independentId++;
                obj.originalId = this._item.id;
                $gameIndependents._independentArmors[$gameIndependents._independentId-1]
                $dataArmors[$gameIndependents._independentId-1] = obj;
                $gameParty.gainItem($gameIndependents._independentArmors[$gameIndependents._independentId-1], 1);
                numbr--;
            }
        }
    } else {
      if(this._item.etypeId > 1) {
          $gameParty.gainItem($dataArmors[this._item.id], number);
      } else if(this._item.etypeId === 1) {
          $gameParty.gainItem($dataWeapons[this._item.id], number);
      } else {
          $gameParty.gainItem($dataItems[this._item.id], number);
      }
    }
    //
    if($gameShop.limitedInvPluginCheck()) {
        $gameContainers._inventoryCurrentWeight = $gameContainers.getCurrentPartyInventoryWeight(); 
    }
    //* Shop Limited Inventory Data
    if(this._item.infinite === false) {
        $gameShop.buyItem(this._item, number);
        $gameShop.eraseItemEntry();
        this._buyWindow.refresh();
    }
    //*Shop Item Requirement Data
    if(this._item.itemRequirements) {
        num = number;
        while(num > 0) {
        $gameShop.takeReqItems(this._item);
        num--;
        }
    }
    if(this._shopTitleWindow) {
        this._shopTitleWindow.refresh();
    }
    if($gameShop.limitedInvPluginCheck()) {
        this._inventoryTitleWindow.refresh();
    }
    this._buyWindow.setMoney($gameParty._gold);
};

Scene_CoreShop.prototype.doSell = function(number) {
    $gameParty.gainGold(number * this.sellingPrice());
    if(this._goldShopWindow) {
        $gameShop.loseGold(number * this.sellingPrice());
        this._goldShopWindow.refresh();
    }
    $gameParty.loseItem(this._item, number);
    $gameShop.sellItem(this._item, number);
    $gameShop._coreShops[$gameShop._tempShopId]._currentWeight = $gameShop.getCurrentShopWeight();
    if(this._shopTitleWindow) {
        this._shopTitleWindow.refresh();
    }
    if($gameShop.limitedInvPluginCheck()) {
        this._inventoryTitleWindow.refresh();
    }
    this._buyWindow.setMoney($gameParty._gold);
    this.checkUnlockShopGoods();
};

Scene_CoreShop.prototype.checkUnlockShopGoods = function() {
    if($gameShop._shopGoodsUnlockQue.length > 0) {
        AudioManager.playSe({name: Dungeonmind.CS.unlockNewStockSE, pan: 0, pitch: 100, volume: 100});
        this._sellWindow.deactivate();
        this._sellWindow.deselect();
        this._newStockWindow.show();
        this._newStockConfirmationWindow.show();
        this._newStockConfirmationWindow.activate();
        this._newStockWindow.setTextLines();
    }
};

Scene_CoreShop.prototype.endNumberInput = function() {
    this._numberWindow.hide();
    this._numberBuyWindow.hide();
    switch (this._commandWindow.currentSymbol()) {
        case "buy":
            this.activateBuyWindow();
            break;
        case "sell":
            this.activateSellWindow();
            break;
    }
};

Scene_CoreShop.prototype.maxBuy = function() {
    const num = $gameParty.numItems(this._item);
    const max = $gameParty.maxItems(this._item) - num;
    const price = this.buyingPrice();
    if (price > 0) {
        return Math.min(max, Math.floor(this.money() / price));
    } else {
        return max;
    }
};

Scene_CoreShop.prototype.maxSell = function() {
    return $gameParty.numItems(this._item);
};

Scene_CoreShop.prototype.money = function() {
    return this._goldWindow.value();
};

Scene_CoreShop.prototype.currencyUnit = function() {
    return this._goldWindow.currencyUnit();
};

Scene_CoreShop.prototype.buyingPrice = function() {
    return this._buyWindow.price(this._item);
};

Scene_CoreShop.prototype.sellingPrice = function() {
    return Math.floor(this._item.price / 2);
};

Scene_CoreShop.prototype.createInventoryTitleWindow = function() {
    const rect = this.inventoryTitleRect();
    this._inventoryTitleWindow = new Window_ShopInventoryTitle(rect);
    this.addWindow(this._inventoryTitleWindow);
    this._inventoryTitleWindow.hide();
};

Scene_CoreShop.prototype.inventoryTitleRect = function() {
    const ww = this.statusWidth();
    const wx = Graphics.boxWidth - this.statusWidth();//this.statusWidth() + this._dummyWindow.width;
    const wh = this.calcWindowHeight(1, true);
    const wy = this.mainAreaTop() + this._categoryWindow.height + this._commandWindow.height + this._statusWindow.height;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_CoreShop.prototype.createShopTitleWindow = function() {
    if($gameShop._coreShops[$gameShop._tempShopId].maxWeight === 0) {
        return;
    }
    const rect = this.shopTitleRect();
    this._shopTitleWindow = new Window_ShopTitle(rect);
    this.addWindow(this._shopTitleWindow);
    if(this._shopTitleWindow) {
        this._shopTitleWindow.hide();
    }
};

Scene_CoreShop.prototype.shopTitleRect = function() {
    const ww = this.statusWidth();//Graphics.boxWidth / 4 + 18;
    const wx = 0;
    const wh = this.calcWindowHeight(1, true);
    var wy = this.mainAreaTop() + this._categoryWindow.height + this._commandWindow.height + this._statusWindow.height;
    if(!$gameShop.limitedInvPluginCheck()) { //*Bug fix when not using limited inventory plugin.
    	wy = wy-68;
    }
    return new Rectangle(wx, wy, ww, wh);
};

Scene_CoreShop.prototype.removeTextCodes = function(text) {
    text = text.replaceAll(/[0-9]/g,'');
    text = text.replaceAll('\\C[]','');
    text = text.replaceAll('\\c[]','');
    text = text.replaceAll('\\V[]','');
    text = text.replaceAll('\\v[]','');
    return text;
};

//-----------------------------------------------------------------------------
// Window_Help
//
// The window for displaying the description of the selected item.

Window_Help.prototype.setWarningText = function(text) {
    this.setText(text);
};

//-----------------------------------------------------------------------------
// Window_ShopNumber
//
// The window for inputting quantity of items to buy or sell on the shop
// screen.

Dungeonmind.CS.ALIAS_WindowShopNumber_init = Window_ShopNumber.prototype.initialize;

Window_ShopNumber.prototype.initialize = function(rect) {
    Dungeonmind.CS.ALIAS_WindowShopNumber_init.call(this, rect);
    this._windowType = 'none';
    this._number = 1;
    if($gameShop.limitedInvPluginCheck()) {
      this._max = Dungeonmind.LI.itemMaxDefault;
      this._maxItems = Dungeonmind.LI.itemMaxDefault;
    } else {
      this._max = 99;
      this._maxItems = 99;
    }
};

Dungeonmind.CS.ALIAS_WindowShopNumber_update = Window_ShopNumber.prototype.update;

Window_ShopNumber.prototype.update = function() {
	Dungeonmind.CS.ALIAS_WindowShopNumber_update.call(this);
	if (SceneManager._scene._numberBuyWindow && SceneManager._scene._numberBuyWindow.isOpenAndActive()) {
		this._item = SceneManager._scene._numberBuyWindow._item;
	} else if (SceneManager._scene._numberWindow && SceneManager._scene._numberWindow.isOpenAndActive()) {
		this._item = SceneManager._scene._numberWindow._item;
	}
	if (this._lastNumber !== this._number) {
		SceneManager._scene._helpWindow.setItem(this._item);
		SceneManager._scene._helpWindow.refresh();
		this._lastNumber = this._number;
	}
};

Window_ShopNumber.prototype.calculateItemCost = function(item) {
	let gold = $gameParty._gold;
	let price = item.price;
	let totalAmount = Math.round(gold/price);
	if(totalAmount <= this._maxItems) {
		return totalAmount;
	} else {
		return this._maxItems;
	}
};

Dungeonmind.CS.ALIAS_WindowShopNumber_changeNumber = Window_ShopNumber.prototype.changeNumber;

Window_ShopNumber.prototype.changeNumber = function(amount) {
    if(SceneManager._scene instanceof Scene_CoreShop) { //*Support for old event shop.
    	const lastNumber = this._number;
    	this._number = (this._number + amount).clamp(1, this._max);
    	if (this._number !== lastNumber) {
        	this.playCursorSound();
        	this.refresh();
    	}
	} else {
		Dungeonmind.CS.ALIAS_WindowShopNumber_changeNumber.call(this, amount);
	}
};

Window_ShopNumber.prototype.getItemDataAmountForSelling = function(item) {
	if(item.etypeId === 1) {
		return $gameParty._weapons[item.id];
	} else if(item.etypeId > 1) {
		return $gameParty._armors[item.id];
	} else if (item.etypeId === undefined) {
		return $gameParty._items[item.id];
	}
};

Dungeonmind.CS.ALIAS_WindowShopNumber_processNumberChange = Window_ShopNumber.prototype.processNumberChange;

Window_ShopNumber.prototype.processNumberChange = function() {
	if(SceneManager._scene instanceof Scene_CoreShop) { //*~ Support for old event shop.
		if(this._item !== null) {
			this._max = this.calculateItemCost(this._item);
		}
    	if (this.isOpenAndActive() && this._windowType === 'buy') {
        	for(let i = 0; i < $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents.length; i++) {
            	if(SceneManager._scene._buyWindow.item().id === $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].itemId && SceneManager._scene._buyWindow.item().etypeId === $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].etypeId) {
                	shopAmount = $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].amount;
                	break;
            	}
        	}
        	if(shopAmount) {
        		if(Input.isRepeated("right") && this._number === shopAmount) {
        			SoundManager.playCursor();
        			this._number = 1;
        			this.refresh();
            	} else {
            		if (Input.isRepeated("right") && this._number < shopAmount) { //*if amount is set then prevent based on stock instead.
                		this.changeNumber(1);
            		}
            	}
        	} else {
        		if(Input.isRepeated("right") && this._number === this._max) {
        			SoundManager.playCursor();
        			this._number = 1;
        			this.refresh();
            	} else {
            		if (Input.isRepeated("right") && $gameShop.getReqsForAmount(this._number)) {
                		this.changeNumber(1);
            		}
        		}
        	}
        	if(Input.isRepeated("left") && this._number === 1 && !this._item.itemRequirements) { // New Code.
        		SoundManager.playCursor();
        			if(shopAmount) {
        				this._number = shopAmount;
        			} else {
        				this._number = this.calculateItemCost(this._item);
        			}
        			this.refresh();
        	} else {
        		if (Input.isRepeated("left")) {
            		this.changeNumber(-1);
        		}
    		}
        	if(shopAmount) {
        		if(Input.isRepeated("up") && this._number === shopAmount) {
        			SoundManager.playCursor();
        			this._number = 1;
        			this.refresh();
            	} else {
            		if (Input.isRepeated("up") && this._number+10 < shopAmount) {
                		this.changeNumber(10);
            		} else if(Input.isRepeated("up") && this._number+10 > shopAmount) {
        				if(this._number === 1) {
        					SoundManager.playCursor();
        					this._number = shopAmount;
        					this.refresh();
        				} else {
        					SoundManager.playCursor();
        					this._number = 1;
        					this.refresh();
        				}
            		}
        		}
        	} else {
        		if(Input.isRepeated("up") && this._number === this._max) {
        			SoundManager.playCursor();
        			this._number = 1;
        			this.refresh();
            	} else {
            		if (Input.isRepeated("up") && $gameShop.getReqsForAmount(this._number*10)) {
                		this.changeNumber(10);
            		}
        		}
        	}
        	if(Input.isRepeated("down") && this._number === 1 && !this._item.itemRequirements) { // New Code.
        		SoundManager.playCursor();
        		if(shopAmount) {
        			this._number = shopAmount;
        		} else {
        			this._number = this.calculateItemCost(this._item);
        		}
        		this.refresh();
        	} else {
        		if (Input.isRepeated("down")) {
            		this.changeNumber(-10);
        		}
    		}
    	}
    	//*~Selling Items
    	if (this.isOpenAndActive() && this._windowType === 'sell') {
    		this._max = this.getItemDataAmountForSelling(this._item); //*Bug Fix!
    		if(Input.isRepeated("right") && this._number === this.getItemDataAmountForSelling(this._item) || Input.isRepeated("up") && this._number === this.getItemDataAmountForSelling(this._item)) {
        		SoundManager.playCursor();
        		this._number = 1;
        		this.refresh();
    		} else {
    			if(Input.isRepeated("left") && this._number === 1 || Input.isRepeated("down") && this._number === 1) {
        			SoundManager.playCursor();
        			this._number = this.getItemDataAmountForSelling(this._item);
        			this.refresh();
    			} else {
        			if (Input.isRepeated("right")) {
            			this.changeNumber(1);
        			}
        			if (Input.isRepeated("left")) {
            			this.changeNumber(-1);
        			}
        			if (Input.isRepeated("up") && this._number+10 <= this.getItemDataAmountForSelling(this._item)) {
            			this.changeNumber(10);
        			} else if(Input.isRepeated("up") && this._number+10 > this.getItemDataAmountForSelling(this._item)) {
        				if(this._number === 1) {
        					SoundManager.playCursor();
        					this._number = this.getItemDataAmountForSelling(this._item);
        					this.refresh();
        				} else {
        					SoundManager.playCursor();
        					this._number = 1;
        					this.refresh();
        				}
        			}
        			if (Input.isRepeated("down")) {
            			this.changeNumber(-10);
        			}
    			}
    		}
    	}
	} else {
		Dungeonmind.CS.ALIAS_WindowShopNumber_processNumberChange.call(this);
	}
};

Dungeonmind.CS.ALIAS_WindowShopNumber_onButtonUp = Window_ShopNumber.prototype.onButtonUp;

Window_ShopNumber.prototype.onButtonUp = function() {
	if(SceneManager._scene instanceof Scene_CoreShop) { //*~ Support for old event shop.
		if (this.isOpenAndActive() && this._windowType === 'buy') {
			for(let i = 0; i < $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents.length; i++) {
        		if(SceneManager._scene._buyWindow.item().id === $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].itemId && SceneManager._scene._buyWindow.item().etypeId === $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].etypeId) {
        			shopAmount = $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].amount;
            		break;
        		}
    		}
			if(shopAmount) {
				if(this._number === shopAmount) {
        			SoundManager.playCursor();
        			this._number = 1;
        			this.refresh();
            	} else {
    				if (this._number < shopAmount) { //*if amount is set then prevent based on stock instead.
        				this.changeNumber(1);
     				}
     			}
			} else {
				if(this._number === this._max) {
        			SoundManager.playCursor();
        			this._number = 1;
        			this.refresh();
            	} else {
        			if ($gameShop.getReqsForAmount(this._number)) {
            			this.changeNumber(1);
        			}
        		}
			}
  		}
  		if (this.isOpenAndActive() && this._windowType === 'sell') {
    		if(this._number === this.getItemDataAmountForSelling(this._item)) {
        		SoundManager.playCursor();
        		this._number = 1;
        		this.refresh();
        		return;
    		} else {
    			return this.changeNumber(1);
    		}
    	}
	} else {
		Dungeonmind.CS.ALIAS_WindowShopNumber_onButtonUp.call(this);
	}
};

Dungeonmind.CS.ALIAS_WindowShopNumber_onButtonUp2 = Window_ShopNumber.prototype.onButtonUp2;

Window_ShopNumber.prototype.onButtonUp2 = function() {
	if(SceneManager._scene instanceof Scene_CoreShop) { //*~ Support for old event shop.
		if (this.isOpenAndActive() && this._windowType === 'buy') {
			for(let i = 0; i < $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents.length; i++) {
        		if(SceneManager._scene._buyWindow.item().id === $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].itemId && SceneManager._scene._buyWindow.item().etypeId === $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].etypeId) {
        			shopAmount = $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].amount;
            		break;
        		}
    		}
    		if(shopAmount) {
    			if(this._number === shopAmount) {
        			SoundManager.playCursor();
        			this._number = 1;
        			this.refresh();
            	} else {
        			if (this._number+10 < shopAmount) {
            			this.changeNumber(10);
        			} else if(this._number+10 > shopAmount) {
        				if(this._number === 1) {
        					SoundManager.playCursor();
        					this._number = shopAmount;
        					this.refresh();
        				} else {
        					SoundManager.playCursor();
        					this._number = 1;
        					this.refresh();
        				}
        			}
        		}
    		} else {
    			if(this._number === this._max) {
        			SoundManager.playCursor();
        			this._number = 1;
        			this.refresh();
            	} else {
        			if ($gameShop.getReqsForAmount(this._number*10)) {
            			this.changeNumber(10);
        			}
        		}
    		}
		}
		if (this.isOpenAndActive() && this._windowType === 'sell') {
    		if(this._number === this.getItemDataAmountForSelling(this._item)) {
        		SoundManager.playCursor();
        		this._number = 1;
        		this.refresh();
        		return;
    		} else {
    			if(this._number+10 <= this.getItemDataAmountForSelling(this._item)) {
    				return this.changeNumber(10);
    			} else if(this._number+10 > this.getItemDataAmountForSelling(this._item)) {
        			if(this._number === 1) {
        				SoundManager.playCursor();
        				this._number = this.getItemDataAmountForSelling(this._item);
        				this.refresh();
        			} else {
        				SoundManager.playCursor();
        				this._number = 1;
        				this.refresh();
        			}
        		}
    		}
  		}
	} else {
		Dungeonmind.CS.ALIAS_WindowShopNumber_onButtonUp2.call(this);
	}
};

Dungeonmind.CS.ALIAS_WindowShopNumber_onButtonDown = Window_ShopNumber.prototype.onButtonDown;

Window_ShopNumber.prototype.onButtonDown = function() {
	if(SceneManager._scene instanceof Scene_CoreShop) { //*~ Support for old event shop.
    	if(this._windowType === 'sell') {
    		if(this._number === 1) {
        		SoundManager.playCursor();
        		this._number = this.getItemDataAmountForSelling(this._item);
        		this.refresh();
    		} else {
    			this.changeNumber(-1);
    		}
    	}
    	if(this._windowType === 'buy') {
    		for(let i = 0; i < $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents.length; i++) {
        		if(SceneManager._scene._buyWindow.item().id === $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].itemId && SceneManager._scene._buyWindow.item().etypeId === $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].etypeId) {
        			shopAmount = $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].amount;
            		break;
        		}
    		}
			if(this._number === 1 && !this._item.itemRequirements) { // New Code.
        		SoundManager.playCursor();
        		if(shopAmount) {
        			this._number = shopAmount;
        		} else {
        			this._number = this.calculateItemCost(this._item);
        		}
        		this.refresh();
        	} else {
				this.changeNumber(-1);
			}
    	}
	} else {
		Dungeonmind.CS.ALIAS_WindowShopNumber_onButtonDown.call(this);
	}
};

Dungeonmind.CS.ALIAS_WindowShopNumber_onButtonDown2 = Window_ShopNumber.prototype.onButtonDown2

Window_ShopNumber.prototype.onButtonDown2 = function() {
    if(SceneManager._scene instanceof Scene_CoreShop) { //*~ Support for old event shop.
    	if(this._windowType === 'sell') {
        	if(this._number === 1) {
        		SoundManager.playCursor();
        		this._number = this.getItemDataAmountForSelling(this._item);
        		this.refresh();
    		} else {
    			this.changeNumber(-10);
    		}	
    	}
    	if(this._windowType === 'buy') {
    		for(let i = 0; i < $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents.length; i++) {
        		if(SceneManager._scene._buyWindow.item().id === $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].itemId && SceneManager._scene._buyWindow.item().etypeId === $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].etypeId) {
        			shopAmount = $gameShop._coreShops[$gameShop._tempShopId]._storedDataContents[i].amount;
            		break;
        		}
    		}
			if(this._number === 1 && !this._item.itemRequirements) { // New Code.
        		SoundManager.playCursor();
        		if(shopAmount) {
        			this._number = shopAmount;
        		} else {
        			this._number = this.calculateItemCost(this._item);
        		}
        		this.refresh();
        	} else {
				this.changeNumber(-10);
			}
    	}
	} else {
		Dungeonmind.CS.ALIAS_WindowShopNumber_onButtonDown2.call(this);
	}
};

Window_ShopNumber.prototype.setNumberWindowType = function(type) {
    return this._windowType = type;
};

//-----------------------------------------------------------------------------
// Window_ItemCategory
//
// The window for selecting a category of items on the item and shop screens.

Dungeonmind.CS.ALIAS_Window_ItemCategory_update = Window_ItemCategory.prototype.update;

Window_ItemCategory.prototype.update = function() {
    Dungeonmind.CS.ALIAS_Window_ItemCategory_update.call(this);
    if (this._buyWindow) {
        this._buyWindow.setCategory(this.getCategorySymbol());
    }
};

Window_ItemCategory.prototype.getCategorySymbol = function() {
    if($plugins.find(plugin => plugin.name == "DM_ItemCategories")?.status) {
        return $gameCategories._symbols[this.index()];
    } else {
        return this.currentSymbol();
    }
};

if($plugins.find(plugin => plugin.name == "DM_ItemCategories")?.status) {
    Window_ItemDMCategory.prototype.setBuyWindow = function(buyWindow) {
        this._buyWindow = buyWindow;
    };
} else {
    Window_ItemCategory.prototype.setBuyWindow = function(buyWindow) {
        this._buyWindow = buyWindow;
    };
}

//-----------------------------------------------------------------------------
// Window_ShopGold
//
// The window for displaying the party's gold.

function Window_ShopGold() {
    this.initialize(...arguments);
}

Window_ShopGold.prototype = Object.create(Window_Selectable.prototype);
Window_ShopGold.prototype.constructor = Window_ShopGold;

Window_ShopGold.prototype.initialize = function(rect) {
    Window_Selectable.prototype.initialize.call(this, rect);
    this.refresh();
};

Window_ShopGold.prototype.colSpacing = function() {
    return 0;
};

Window_ShopGold.prototype.refresh = function() {
    const rect = this.itemLineRect(0);
    const x = rect.x;
    const y = rect.y;
    const width = rect.width;
    this.contents.clear();
    this.drawCurrencyValue(this.value(), this.currencyUnit(), x, y, width);
};

Window_ShopGold.prototype.drawCurrencyValue = function(value, unit, x, y, width) {
    const unitWidth = Math.min(80, this.textWidth(unit));
    this.resetTextColor();
    this.drawText(value, x, y, width - unitWidth - 6, "left");
    this.changeTextColor(ColorManager.systemColor());
    if(Dungeonmind.CS.shopGoldIconIndex === 0) {
        x2 = x + width - unitWidth - 6;
    } else {
        x2 = x + width - unitWidth - 28;
    }
    this.drawText(unit, x2, y, unitWidth, "left");
    this.drawIcon(Dungeonmind.CS.shopGoldIconIndex, x + width - unitWidth - 12, y+2);
};

Window_ShopGold.prototype.value = function() {
    return $gameShop.shopGold();
};

Window_ShopGold.prototype.currencyUnit = function() {
    return TextManager.currencyUnit;
};

Window_ShopGold.prototype.open = function() {
    this.refresh();
    Window_Selectable.prototype.open.call(this);
};

//-----------------------------------------------------------------------------
// Window_ShopSell
//
// The window for selecting an item to sell on the shop screen.

function Window_ShopSell() {
    this.initialize(...arguments);
}

Window_ShopSell.prototype = Object.create(Window_ItemList.prototype);
Window_ShopSell.prototype.constructor = Window_ShopSell;

Window_ShopSell.prototype.initialize = function(rect) {
    Window_ItemList.prototype.initialize.call(this, rect);
};

Window_ShopSell.prototype.isEnabled = function(item) {
    return item && item.price > 0;
};

//-----------------------------------------------------------------------------
// Window_CoreShopBuy
//
// The window for selecting an item to buy on the shop screen.

function Window_CoreShopBuy() {
    this.initialize(...arguments);
}

Window_CoreShopBuy.prototype = Object.create(Window_Selectable.prototype);
Window_CoreShopBuy.prototype.constructor = Window_CoreShopBuy;

Window_CoreShopBuy.prototype.initialize = function(rect) {
    Window_Selectable.prototype.initialize.call(this, rect);
    this._category = "none";
    this._money = 0;
    this._storedItems = [];
};

Window_CoreShopBuy.prototype.setCategory = function(category) {
    if (this._category !== category) {
        this._category = category;
        this.refresh();
        this.scrollTo(0, 0);
    }
};

Window_CoreShopBuy.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

Window_CoreShopBuy.prototype.item = function() {
    return this.itemAt(this.index());
};

Window_CoreShopBuy.prototype.itemAt = function(index) {
    return this._data && index >= 0 ? this._data[index] : null;
};

Window_CoreShopBuy.prototype.setMoney = function(money) {
    this._money = money;
    this.refresh();
};

Window_CoreShopBuy.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this._data[this.index()]);
};

Window_CoreShopBuy.prototype.price = function(item) {
    return this._price[this._data.indexOf(item)] || 0;
};

Window_CoreShopBuy.prototype.isEnabled = function(item) {
    return (
        item && this.price(item) <= this._money && !$gameParty.hasMaxItems(item) && $gameShop.hasReqItems(item)
    );
};

Window_CoreShopBuy.prototype.refresh = function() {
    this.makeItemList();
    Window_Selectable.prototype.refresh.call(this);
};

Window_CoreShopBuy.prototype.makeItemList = function() {
    if(this._category === 'item') {
        this.makeItemsList();
    } else if(this._category === 'weapon') {
        this.makeWeaponList();
    } else if(this._category === 'armor') {
        this.makeArmorList();
    } else if(this._category === 'keyItem') {
        this.makeKeyItemsList();
    } else if(this._category === 'all') {
        this.makeAllItemList();
    } else {
        this.makeNewCategoryList();
    }
};

Window_CoreShopBuy.prototype.convertOldSymbol = function(symbol) {
    if(symbol === "weapon") {
        symbol = "weapons";
    }
    if(symbol === "armor") {
        symbol = "armors";
    }
    if(symbol === "item") {
        symbol = "items";
    }
    if(symbol === "keyItem") {
        symbol = "keyItems";
    }
    return symbol;
};

Window_CoreShopBuy.prototype.getCategories = function(item, symbol) {
    if(item.meta.Categories) {
        item.categories = item.note.replaceAll('<Categories>','');
        item.categories = item.categories.replaceAll('</Categories>','');
        item.categories = item.categories.replaceAll('\n',',');
        item.categories = item.categories.split(',');
        item.categories.filter((str) => str !== '');
    } else {
        return false;
    }
    for(let i = 0; i < item.categories.length; i++) {
        cat = this.convertOldSymbol(item.categories[i]);
        if(cat.toLowerCase() === symbol) {
            return true;
        }
    }
    return false;
};

Window_CoreShopBuy.prototype.makeNewCategoryList = function() {
    this._data = []; // Clear data first before making list
    this._price = [];
    this._storedItems = $gameShop.storedGoods();
    for(let i = 0; i < this._storedItems.length; i++) {
        if(this._storedItems[i] && this._storedItems[i].retained && this.getCategories(this._storedItems[i],this._category) && this._storedItems[i].unlockStatus < 2) {
            this._data.push(this._storedItems[i]);
            this._price.push(this._storedItems[i].price);
        }
    }
}

Window_CoreShopBuy.prototype.makeAllItemList = function() {
    this._data = [];
    this._price = [];
    this._storedItems = $gameShop.storedGoods();
    for(let i = 0; i < this._storedItems.length; i++) {
        if(this._storedItems[i] && this._storedItems[i].retained && this._storedItems[i].unlockStatus < 2) {
            this._data.push(this._storedItems[i]);
            this._price.push(this._storedItems[i].price);
        }
    }
};

Window_CoreShopBuy.prototype.makeKeyItemsList = function(item) {
    this._data = []; // Clear data first before making list
    this._price = [];
    this._storedItems = $gameShop.storedGoods();
    for(let i = 0; i < this._storedItems.length; i++) {
        if(this._storedItems[i] && this._storedItems[i].retained && this._storedItems[i].itypeId === 2 && this._storedItems[i].unlockStatus < 2) {
            this._data.push(this._storedItems[i]);
            this._price.push(this._storedItems[i].price);
        }
    }
};


Window_CoreShopBuy.prototype.makeItemsList = function(item) {
    this._data = []; // Clear data first before making list
    this._price = [];
    this._storedItems = $gameShop.storedGoods();
    for(let i = 0; i < this._storedItems.length; i++) {
        if(this._storedItems[i] && this._storedItems[i].retained && this._storedItems[i].etypeId === undefined && this._storedItems[i].itypeId !== 2 && this._storedItems[i].unlockStatus < 2) {
            this._data.push(this._storedItems[i]);
            this._price.push(this._storedItems[i].price);
        }
    }
};

Window_CoreShopBuy.prototype.makeWeaponList = function(item) {
    this._data = []; // Clear data first before making list
    this._price = [];
    this._storedItems = $gameShop.storedGoods();
    for(let i = 0; i < this._storedItems.length; i++) {
        if(this._storedItems[i] && this._storedItems[i].etypeId === 1 && this._storedItems[i].retained && this._storedItems[i].unlockStatus < 2) {
            this._data.push(this._storedItems[i]);
            this._price.push(this._storedItems[i].price);
        }
    }
};

Window_CoreShopBuy.prototype.makeArmorList = function(item) {
    this._data = []; // Clear data first before making list
    this._price = [];
    this._storedItems = $gameShop.storedGoods();
    for(let i = 0; i < this._storedItems.length; i++) {
        if(this._storedItems[i] && this._storedItems[i].etypeId > 1 && this._storedItems[i].retained && this._storedItems[i].unlockStatus < 2) {
            this._data.push(this._storedItems[i]);
            this._price.push(this._storedItems[i].price);
        }
    }
};

Window_CoreShopBuy.prototype.drawItem = function(index) {
    const item = this.itemAt(index);
    const price = this.price(item);
    const rect = this.itemLineRect(index);
    const priceWidth = this.priceWidth();
    const priceX = rect.x + rect.width - priceWidth;
    const nameWidth = rect.width - priceWidth;
    this.changePaintOpacity(this.isEnabled(item));
    this.drawItemName(item, rect.x, rect.y, nameWidth);
    if(item.itemRequirements && !$gameShop.hasReqItems(item)) {
        let soldOutText = 'SOLD OUT!';
        let textWidth = this.textWidth(soldOutText);
        this.drawText(soldOutText, priceX-18, rect.y, textWidth, "right");
    } else {
        this.drawText(price, priceX, rect.y, priceWidth, "right");
    }
    this.changePaintOpacity(true);
};

Window_CoreShopBuy.prototype.priceWidth = function() {
    return 96;
};

Window_CoreShopBuy.prototype.setStatusWindow = function(statusWindow) {
    this._statusWindow = statusWindow;
    this.callUpdateHelp();
};

Window_CoreShopBuy.prototype.updateHelp = function() {
    this.setHelpWindowItem(this.item());
    SceneManager._scene._shopStockWindow.refresh();
    if (this._statusWindow) {
        this._statusWindow.setItem(this.item());
    }
};

//-----------------------------------------------------------------------------
// Window_ShopStock
//
// The window for displaying shop stock relevant info and stock requirements.

function Window_ShopStock() {
    this.initialize(...arguments);
}

Window_ShopStock.prototype = Object.create(Window_StatusBase.prototype);
Window_ShopStock.prototype.constructor = Window_ShopStock;

Window_ShopStock.prototype.initialize = function(rect) {
    Window_StatusBase.prototype.initialize.call(this, rect);
    this.refresh();
    this._lastItem = null;
    this._lastAmount = '';
};

Window_ShopStock.prototype.refresh = function() {
    Window_StatusBase.prototype.refresh.call(this);
    this.contents.clear();
    this._increment = 0;
    this.drawShopStock();
    this._increment++
    this.drawItemWeight();
    this._increment++;
    this.drawRequirements();
};

Window_ShopStock.prototype.getMaxBuyQuantity = function(item) {
    if (!item) return '';
    let amount = $gameShop.getAmountSoldForItem(item);
    if (item.itemRequirements) {
        let maxQuantity = Infinity;
        for (let i = 0; i < item.itemRequirements.length; i++) {
            const reqItemId = item.itemRequirements[i]['Item Id'];
            const reqAmount = item.itemRequirements[i]['Amount'];
            const reqItem = $dataItems[reqItemId];
            const amountSold = $gameShop.getAmountSoldForItem(reqItem);
            const quantity = Math.floor(amountSold / reqAmount);
            maxQuantity = Math.min(maxQuantity, quantity);
        }
        amount = String(maxQuantity);
    } else if (amount === '') {
        amount = Dungeonmind.CS.infiniteSymbol;
    } else {
        amount = String(amount);
    }
    return amount;
};

Window_ShopStock.prototype.drawShopStock = function() {
    const text = "Shop Possession";
    const x = 6;
    const y = 6 + this.lineHeight() * this._increment;
    const maxWidth = this.width;
    const align = 'left';
    let item = null;
    let amount = '';
    if (SceneManager._scene._buyWindow && SceneManager._scene._buyWindow.item()) {
        item = SceneManager._scene._buyWindow.item();
        amount = this.getMaxBuyQuantity(item);
        this._lastItem = item; // Store the last item
        this._lastAmount = amount; // Store the last possession number
    } else if (this._lastItem) {
        // Use the stored item and possession number if _buyWindow is not active
        amount = this.getMaxBuyQuantity(this._lastItem);
    }
    this.changeTextColor(ColorManager.systemColor());
    this.drawText(text, x, y, maxWidth, align);
    this.resetTextColor();
    let textWidth = this.textWidth("00");
    this.drawText(amount, x - textWidth - 16, y, maxWidth, 'right');
};

Window_ShopStock.prototype.drawItemWeight = function() {
    let text;
    if(Dungeonmind.LI) {
    	text = Dungeonmind.LI.itemWeightText;
	} else {
		text = 'Item Weight';
	}
    const x = 6;
    const y = 6 + this.lineHeight()*this._increment;
    const maxWidth = this.width;
    const align = 'left';
    let amount = this.getItemWeight();
    this.changeTextColor(ColorManager.systemColor());
    if($gameShop.limitedInvPluginCheck() && Dungeonmind.CS.inventoryType === 'Item Weight') {
    	this.drawText(text, x, y, maxWidth, align);
    	this.resetTextColor();
    	let textWidth = this.textWidth("00");
    	this.drawText(amount, x-textWidth-16, y, maxWidth, 'right');
	} else {
		this._increment--;
	}
	this.resetTextColor();
}

Window_ShopStock.prototype.drawRequirements = function() {
    const text = "Requires";
    const x = 6;
    const y = 6 + this.lineHeight()*this._increment;
    const maxWidth = this.width;
    const align = 'left';
    if(item !== null && item !== undefined && item.itemRequirements) { // Bug fix* Hides "Requires".
    	this.changeTextColor(ColorManager.systemColor());
    	this.drawText(text, x, y, maxWidth, align);
    	this.resetTextColor();
    	this.drawReqItems();
	} else {
		this._increment--;
	}
};

Window_ShopStock.prototype.drawReqItems = function() {
    const x = 6;
    const maxWidth = this.width;
    const align = 'left';
    if(SceneManager._scene._buyWindow) {
        let item = SceneManager._scene._buyWindow.item();
        const index = SceneManager._scene._buyWindow.index();
        reqItems = false;
        if(item !== null && item !== undefined) {
            reqItems = reqItems || item.itemRequirements;
        }
        if(reqItems) {
            for(let i = 0; i < reqItems.length; i++) {
                this._increment++;
                y = 6 + this.lineHeight()*this._increment;
                id = reqItems[i]['Item Id'];
                amount = reqItems[i]['Amount'];
                item = $dataItems[id];
                this.drawIcon(item.iconIndex,x,y);
                this.drawText(item.name, x+32, y, maxWidth, align);
                textWidth = this.textWidth('00');
                amountSold = $gameShop.getAmountSoldForItem(item);
                this.drawText(amountSold + '/' + String(amount), x-textWidth-16, y, maxWidth, 'right');
            }
        }
    }
};

Window_ShopStock.prototype.getItemWeight = function() {
    if(SceneManager._scene._buyWindow && SceneManager._scene._buyWindow.active) {
        item = SceneManager._scene._buyWindow.item();
        if(item !== null && item !== undefined && item.itemWeight) {
            return item.itemWeight;
        } else {
            return 1;
        }
    } else {
        return 1;
    }
};

//-----------------------------------------------------------------------------
// Window_ShopTitle
//
// The window for selecting amount to deposit in container.

function Window_ShopTitle() {
    this.initialize(...arguments);
}

Window_ShopTitle.prototype = Object.create(Window_Base.prototype);
Window_ShopTitle.prototype.constructor = Window_ShopTitle;

Window_ShopTitle.prototype.initialize = function(rect) {
    Window_Base.prototype.initialize.call(this, rect);
    this.contents.clear();
    this.drawTitle(rect);
};

Window_ShopTitle.prototype.drawTitle = function(rect) {
    var title = $gameShop._coreShops[$gameShop._tempShopId]['Shop Name'];
    var align = "left";
    var maxWidth = Graphics.boxWidth / 2;
    title2 = this.removeTextCodes(title);
    let text = title2 + '(' + $gameShop.getCurrentShopWeight() + '/' + $gameShop.getCurrentShopMaxWeight() + ')';
    var x = this.width / 2 - this.contents.measureTextWidth(text) / 2 - 16;
    this.drawTextEx(title + '(' + $gameShop.getCurrentShopWeight() + '/' + $gameShop.getCurrentShopMaxWeight() + ')', x+16, 6, maxWidth, align);
    this.drawIcon($gameShop._coreShops[$gameShop._tempShopId]['Shop Icon'], x-16, 6);
};

Window_ShopTitle.prototype.refresh = function() {
    this.contents.clear();
    this.drawTitle();
};

Window_ShopTitle.prototype.removeTextCodes = function(text) {
    text = text.replaceAll(/[0-9]/g,'');
    text = text.replaceAll('\\C[]','');
    text = text.replaceAll('\\c[]','');
    text = text.replaceAll('\\V[]','');
    text = text.replaceAll('\\v[]','');
    return text;
};

//-----------------------------------------------------------------------------
// Window_ShopInventoryTitle
//
// The window for selecting amount to deposit in container.

function Window_ShopInventoryTitle() {
    this.initialize(...arguments);
}

Window_ShopInventoryTitle.prototype = Object.create(Window_Base.prototype);
Window_ShopInventoryTitle.prototype.constructor = Window_ShopInventoryTitle;

Window_ShopInventoryTitle.prototype.initialize = function(rect) {
    Window_Base.prototype.initialize.call(this, rect);
    this.contents.clear();
    this.drawTitle(rect);
};

Window_ShopInventoryTitle.prototype.drawTitle = function(rect) {
    var title = Dungeonmind.LI.inventoryTitle;
    var align = "left";
    var maxWidth = Graphics.boxWidth / 2;
    title2 = this.removeTextCodes(title);
    let text = title2 + '(' + $gameContainers.getCurrentPartyInventoryWeight() + '/' + $gameContainers.getCurrentPartyInventoryMaxWeight() + ')'
    var x = this.width / 2 - this.contents.measureTextWidth(text) / 2 - 16;
    this.drawTextEx(title + '(' + $gameContainers.getCurrentPartyInventoryWeight() + '/' + $gameContainers.getCurrentPartyInventoryMaxWeight() + ')', x+16, 6, maxWidth, align);
    this.drawIcon(Dungeonmind.LI.inventoryIcon, x-16, 6);
};

Window_ShopInventoryTitle.prototype.drawTitle = function(rect) {
    var title = Dungeonmind.LI.inventoryTitle;
    var align = "left";
    var maxWidth = Graphics.boxWidth / 2;
    title2 = this.removeTextCodes(title);
    let text = title2 + '(' + $gameContainers.getCurrentPartyInventoryWeight() + '/' + $gameContainers.getCurrentPartyInventoryMaxWeight() + ')'
    var x = this.width / 2 - this.contents.measureTextWidth(text) / 2 - 16;
    let drawText = title + '(' + $gameContainers.getCurrentPartyInventoryWeight() + '/' + $gameContainers.getCurrentPartyInventoryMaxWeight() + ')';
    if ($gameContainers._overweightTextColorChange && $gameContainers.getCurrentPartyInventoryWeight() >= $gameContainers.getCurrentPartyInventoryMaxWeight()) {
        drawText = drawText.replace(/\\c\[[0-9]+\]/gi, ''); // Remove existing color codes
        drawText = '\\c[2]' + drawText + '\\c[0]'; // Use \c[2] for red color and reset
    }
    this.drawIcon(Dungeonmind.LI.inventoryIcon, x-16, 6);
    this.drawTextEx(drawText, x+16, 6, maxWidth, align);
};

Window_ShopInventoryTitle.prototype.refresh = function() {
    this.contents.clear();
    this.drawTitle();
};

Window_ShopInventoryTitle.prototype.removeTextCodes = function(text) {
    text = text.replaceAll(/[0-9]/g,'');
    text = text.replaceAll('\\C[]','');
    text = text.replaceAll('\\c[]','');
    text = text.replaceAll('\\V[]','');
    text = text.replaceAll('\\v[]','');
    return text;
};

//-----------------------------------------------------------------------------
// Window_UnlockStock
//
// The window for selecting amount to deposit in container.

function Window_UnlockStock() {
    this.initialize(...arguments);
}

Window_UnlockStock.prototype = Object.create(Window_Selectable.prototype);
Window_UnlockStock.prototype.constructor = Window_UnlockStock;

Window_UnlockStock.prototype.initialize = function(rect) {
    Window_Selectable.prototype.initialize.call(this, rect);
    this.contents.clear();
};

Window_UnlockStock.prototype.refresh = function() {
    this.contents.clear();
};

Window_UnlockStock.prototype.setTextLines = function() {
    text = Dungeonmind.CS.unlockNewStockText;
    x = 0;
    y = this.lineHeight();
    maxWidth = this.width;
    align = 'left';
    iconIndex = $gameShop._shopGoodsUnlockQue[0].iconIndex;
    this.drawText(text, x, y*0, maxWidth, align);
    this.drawIcon(iconIndex, x, y*1);
    this.drawText($gameShop._shopGoodsUnlockQue[0].name, x+32, y*1, maxWidth, align);
};

//-----------------------------------------------------------------------------
// Window_UnlockConfirm
//
// The dummy window for selecting okay in the unlockStock window.

function Window_UnlockConfirm() {
    this.initialize(...arguments);
}

Window_UnlockConfirm.prototype = Object.create(Window_HorzCommand.prototype);
Window_UnlockConfirm.prototype.constructor = Window_UnlockConfirm;

Window_UnlockConfirm.prototype.initialize = function(rect) {
    Window_HorzCommand.prototype.initialize.call(this, rect);
};

Window_UnlockConfirm.prototype.maxCols = function() {
    return 1;
};

Window_UnlockConfirm.prototype.update = function() {
    Window_HorzCommand.prototype.update.call(this);
};

Window_UnlockConfirm.prototype.makeCommandList = function() {
    this.addCommand('Okay', "ok");
};

//-----------------------------------------------------------------------------
// Window_ShopStatus
//
// *Overwritten method for VisuStella ItemEquipsCore comatability.

Window_ShopStatus.prototype.setItem = function(item) {
  if(item !== null && item !== undefined) {
    if(item.etypeId === undefined) {
      this._item = $dataItems[item.id];
      this.refresh();
    } else if(item.etypeId === 1) { //*weapons
      this._item = $dataWeapons[item.id];
      this.refresh();
    } else if(item.etypeId > 1) { //*armors
      this._item = $dataArmors[item.id];
      this.refresh(); 
    }
  }
};
