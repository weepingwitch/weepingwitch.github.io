//=============================================================================
// VisuStella MZ - Message Core
// VisuMZ_1_MessageCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MessageCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageCore = VisuMZ.MessageCore || {};
VisuMZ.MessageCore.version = 1.54;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.54] [MessageCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Message Core plugin extends and builds upon the message functionality of
 * RPG Maker MZ and allows you, the game dev, to customize the workflow for
 * your game's message system.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general message settings.
 * * Auto-Color key words and/or database entries.
 * * Increases the text codes available to perform newer functions/effects.
 * * Ability for you to implement custom Text Code actions.
 * * Ability for you to implement custom Text code string replacements.
 * * Invoke a macro system to speed up the dev process.
 * * Add a Text Speed option to the Options menu.
 * * Add the ever so useful Word Wrap to your message system.
 * * Extend the choice selection process to your liking.
 * * The ability to enable/disable as well as show/hide certain choices.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Dim Background Extension
 * 
 * Before, when using the Dim Background as a part of a Show Text event, its
 * size is only the same as the message window's width itself. This looked
 * really ugly because it had hard edges cutting off while gradients are seen
 * elsewhere. To make it look better, we extended the dimmed background to span
 * the width of the screen instead.
 * 
 * ---
 * 
 * Extended Messages
 * 
 * If you decide to expand the size of the message window to allow for more
 * rows to be displayed, you can type in the data for them by chaining together
 * Show Message events. They will take data from each other and display them in
 * the same message window as long as there are enough rows.
 * 
 * ---
 *
 * Extended Choice Lists
 * 
 * Choice lists can be extended by just chaining one Choice List event after
 * the other in succession along the same indentation. They do not extend if
 * there is any event other than a Choice List option between them on the same
 * indentation level.
 *
 * ---
 *
 * ============================================================================
 * Text Language Information
 * ============================================================================
 *
 * As of Message Core version 1.46, Text Language has been added. 
 * 
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 * 
 * As of Message Core version 1.53, we've decided to add support for TSV.
 * 
 * This is because we have done our research and decided that CSV's are too
 * restricted to use due to their default nature of wanting to use commas as
 * separators. Thus, we've decided to switch to TSV where the default separator
 * is a tab space, something that is almost never used in RPG Maker text.
 *
 * ---
 * 
 * === How to Enable Switching ===
 * 
 * Text Language is NOT enabled by default. Here's what you have to do:
 * 
 * #1. Open up the Message Core's Plugin Parameters
 * #2. Plugin Parameters > Text Language Settings > Enable Switching?
 * #3. Change the "Enable Switching?" parameter setting to "true".
 * #4. Adjust any other settings as needed.
 * #5. Save the Plugin Parameter changes.
 * #6. Save your game.
 * 
 * Now, it's time to get the CSV/TSV file that will contain all of the text
 * used to translate your game's script.
 * 
 * #1. Play test your game. Make sure Play test mode is NOT disabled.
 * #2. A popup will appear asking to create a language CSV/TSV file.
 * #3. Click "OK" and let the plugin do its thing.
 * #4. The project's /data/ folder will appear with Language.csv/tsv made.
 * #5. The plugin will then ask you to restart your game.
 * 
 * '''IMPORTANT!''' The separator used for the CSV file must be a semicolon (;)
 * and not a comma (,) as to reduce the amount of punctuation conflicts. Keep
 * this in mind as most CSV editors will default to comma (,) instead of the
 * semicolon (;) for their separator.
 * 
 * ---
 * 
 * === How to Edit the Language CSV/TSV ===
 * 
 * The Language CSV/TSV is structured as a normal CSV/TSV file would be, which
 * also means it can be modified in programs like Microsoft Excel or Google
 * Sheets. We recommend using either of those programs to modify the text.
 * 
 * We do not recommend modifying the CSV/TSV file in programs like notepad
 * directly due to the way certain things like commas (,) and tabs are handled
 * and how easy it is to be error-prone.
 * 
 * The table will appear something like this at first:
 * 
 *     Key        English    Chinese    Japanese     Korean
 *     Greeting   Hello      你好       こんにちは    안녕하세요
 *     Farewell   Good-bye   再见       さようなら    안녕히
 *     Wow        Wow        哇         ワオ          와우
 * 
 * The "Key" column refers to the reference key used to determine which lines
 * will be inserted into the text. The columns with the languages will utilize
 * the respective phrases for that language.
 * 
 * You can remove columns containing languages that you aren't planning to
 * translate for your game.
 * 
 * ---
 * 
 * === Things to Keep in Mind ===
 * 
 * When adding text to the CSV/TSV file via the spreadsheet editor (Excel or
 * Google Sheets), there's a few things to keep in mind.
 * 
 * ---
 * 
 * ==== How to Load the CSV/TSV in Google Sheets ====
 * 
 * If you are using Google Sheets and wish to edit the CSV/TSV without it
 * converting all the separators into commas, here's what you do:
 * 
 * #1. Go to "https://sheets.google.com"
 * #2. Create a "Blank spreadsheet"
 * #3. File > Import > Upload > Select the CSV/TSV file that was created in
 *     your game project's /data/ folder. You may need to select "All Files"
 *     for file type if uploading a TSV.
 * #4. For "Separator Type", if you are using CSV, change it to "Custom" and
 *     insert the Semicolon ";". Otherwise, if you are using TSV, select "tab"
 *     as your separator type.
 * #5. Uncheck "Convert text to numbers, dates, and formulas"
 * 
 * ==== How to Load the CSV/TSV in VS Code ===
 * 
 * #1. Go to "https://code.visualstudio.com/"
 * #2. Download and install it
 * #3. Open up VS Code and go to View > Extensions
 * #4. Search for an extension called "Edit CSV"
 * #5. Load the CSV/TSV file into VS Code and view with the CSV Editor
 * #6. Click the button that says "Edit CSV" in the upper right
 * 
 * ==== Line Breaks ====
 * 
 * When you want to insert line breaks into the translated phrases, use the
 * <br> text code. This is best used for text that is to be transferred into
 * the message window or help window.
 * 
 * ==== Text Codes ====
 * 
 * Text codes like \C[2] can be inserted normally. However, they only work in
 * windows that support text codes, such as the message window or help window.
 * Otherwise, the text codes will not transfer over properly.
 * 
 * ==== Semicolons (CSV Only) ====
 * 
 * Due to the nature of the CSV file, we used the semicolon (;) as the
 * separator. As such, semicolons should not be used in the text entries.
 * Though some sentences will work with the semicolon, not all of them will. If
 * you do want to use a semicolon, use the text code <semicolon> instead.
 * 
 *   Example:
 * 
 *   "The pancakes were delicious<semicolon> they were fluffy and sweet."
 * 
 * Other variations of the semicolon text code are <semi> and <semi-colon>.
 * The <semicolon> text code and variants only work with the Language CSV and
 * are ignored otherwise when typed in a regular message box entry.
 * 
 * ---
 * 
 * ==== Macros and Language Switches ====
 * 
 * For those using both text macros and text language switches, macros will be
 * converted to text before language switches as it allows for better text
 * transitions that way.
 * 
 * ---
 * 
 * === How to Use the Reference Keys ===
 * 
 * Remember the "Key" column and the reference keys? Those are used to
 * determine which lines will be inserted into the text for the message window
 * and just about any other window. However, there's a specific way these keys
 * must be used in order for them to work.
 * 
 * The "text code" format works like this. Use any of the following:
 * 
 *   \tl{keyName}
 *   \translate{keyName}
 *   \loc{keyName}
 *   \locale{keyName}
 *   \localize{keyName}
 * 
 * or for those coming from different translation plugins but want to switch
 * over to the VisuStella MZ Message Core's translation system:
 * 
 *   ${keyName}
 * 
 * For example, to use one of the default keys made with the Language CSV/TSV:
 * 
 *   \tl{Greeting}
 * 
 * This will yield "Hello" in English, "你好" in Chinese, "こんにちは" in
 * Japanese, and "안녕하세요" in Korean.
 * 
 * Key names are not case sensitive and any trailing spaces will be removed
 * from them in order to make sure the CSV/TSV table is stable to reference any
 * translated text from.
 * 
 * You can insert these language "text codes" into item names, skill names,
 * etc. as well as system entries like for Attack, Defense, etc.
 * 
 * ---
 * 
 * === Naming Weapon Types, Armor Types, Equip Types, Item Categories ===
 * 
 * You might have noticed that if you've decided to use \tl{keyName} for weapon
 * or other database types, other parts of the game will error out. Don't
 * worry, for these, you don't have to change the currently used database name.
 * Go straight to the CSV/TSV and insert in a new key for that particular
 * database name. For example, the equip type "Accessory" will use "Accessory"
 * as the automatic key to look for a translated phrase. If there isn't any in
 * the CSV/TSV file, then the default database text entry will be used.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. Some of
 * these are original text codes provided by RPG Maker MZ, while others are
 * new text codes added through this plugin. You may even add your own text
 * codes through the plugin parameters.
 *
 * === RPG Maker MZ Text Codes ===
 *
 * The following are text codes that come with RPG Maker MZ. These text codes
 * cannot be edited through the Plugin Parameters.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \V[x]                Replaced by the value of variable 'x'.
 * \N[x]                Replaced by the name of actor 'x'.
 * \P[x]                Replaced by the name of party member 'x'.
 * \C[x]                Draw the subsequent text with window skin color 'x'.
 * \I[x]                Draw icon 'x'.
 *
 * \PX[x]               Moves text x position to 'x'.
 * \PY[x]               Moves text y position to 'y'.
 *
 * \G                   Replaced by the currency unit.
 *
 * \{                   Increase the text font size by one step.
 * \}                   Decrease the text font size by one step.
 * \FS[x]               Changes the text font size to 'x'.
 *
 * \\                   Replaced by the backslash character.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \$                   Opens the gold window.
 * \.                   Waits a 1/4 second.
 * \|                   Waits a full second.
 * \!                   Waits for button input.
 * \>                   Display remaining text on same line all at once.
 * \<                   Cancel the effect that displays text all at once.
 * \^                   Do not wait for input after displaying text to move on.
 *
 * ---
 *
 * === Message Core Hard-Coded Text Codes ===
 *
 * The following text codes are hard-coded into VisuStella MZ Message Core's
 * code. These text codes cannot be edited through the Plugin Parameters.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <b>                  Makes subsequent text bold.
 * </b>                 Removes bold from subsequent text.
 * <i>                  Makes subsequent text italic.
 * </i>                 Removes italic from subsequent text.
 * 
 * <left>               Makes subsequent text left-aligned. *Note1*
 * </left>              Removes left-alignment for subsequent text.
 * <center>             Makes subsequent text center-aligned. *Note1*
 * </center>            Removes center-alignment for subsequent text.
 * <right>              Makes subsequent text right-aligned. *Note1*
 * </right>             Removes right-alignment for subsequent text.
 *
 * Note1: Use at line-start. Does not work with Word Wrap.
 *
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 *
 * <ColorLock>          Text codes can't change text color for subsequent text.
 * </ColorLock>         Removes Color Lock property.
 *
 * <WordWrap>           Enables Word Wrap for this window. *Note2*
 * </WordWrap>          Disables Word Wrap for this window. *Note2*
 * <br>                 Adds a line break. Requires Word Wrap enabled.
 * <line break>         Adds a line break. Requires Word Wrap enabled.
 *
 * Note2: Some windows cannot use Word Wrap such as the Choice Window.
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 *
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 *
 * \picture<x>          Draws picture x (filename) at current text position.
 * \CenterPicture<x>    Draws picture x (filename) centered at the window.
 * 
 * While these text codes are available globally, they are best suited for use
 * in the message window or any other window that does not change its contents.
 * The reason being is because the picture drawn is drawn into the background
 * of the window.
 * 
 * Therefore, we do not recommend using this in windows that change contents
 * often like Help Windows or Quest Descriptions. Instead, we recommend using
 * icons instead.
 * 
 * As of the version 1.53 update, the Help Window now supports both of these
 * text codes. However, we still recommend using icons over using pictures as
 * there will be loading delays.
 *
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Map Name)
 * ------------------   -------------------------------------------------------
 * <left>               Makes map name align to left side of screen.
 * <center>             Makes map name align to horizontally center of screen.
 * <right>              Makes map name align to right side of screen.
 * 
 * <top>                Makes map name align to top of screen.
 * <middle>             Makes map name align to vertically middle of screen.
 * <bottom>             Makes map name align to bottom of screen.
 * 
 * <X: +n>              Adjusts the horizontal position of map name by n.
 * <X: -n>              Adjusts the horizontal position of map name by n.
 * 
 * <Y: +n>              Adjusts the vertical position of map name by n.
 * <Y: -n>              Adjusts the vertical position of map name by n.
 * 
 * Note: All of these text codes require VisuMZ_0_CoreEngine installed and its
 * "Map Name Text Code" plugin parameter enabled.
 * 
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <Caps>               Makes all text after this capitalized.
 *                      Turns off other auto-text case modes.
 *                      ie: "hello world" becomes "HELLO WORLD"
 * </Caps>              Turns off auto text-casing effects.
 * 
 * <Upper>              Makes the first letter of any word after a space to be
 *                      capitalized. Other letters are left alone.
 *                      Turns off other auto-text case modes.
 *                      ie. "old mcDonald" becomes "Old McDonald"
 * </Upper>             Turns off auto text-casing effects.
 * 
 * <Lower>              Makes all text after this lowercase.
 *                      Turns off other auto-text case modes.
 *                      ie: "THE QUICK BROWN FOX" becomes "the quick brown fox"
 * </Lower>             Turns off auto text-casing effects.
 * 
 * <Alt>                Makes all text after this alternate between uppercase
 *                      and lowercase. Turns off other auto-text case modes.
 *                      ie: "Hello" becomes "HeLlO"
 * </Alt>               Turns off auto text-casing effects.
 * 
 * <Chaos>              Makes all text after this randomize between uppercase
 *                      and lowercase. Turns off other auto-text case modes.
 *                      ie: "Wassup" becomes "waSsUP" or "WasSuP"
 * </Chaos>             Turns off auto text-casing effects.
 * 
 * **Clarity:** In case you're wondering, the text codes </Caps>, </Upper>,
 * </Lower>, </Alt>, and </Chaos> all do the same thing and can be used
 * interchangeably with each other. For example, you can do this:
 * <Caps>hello world</Lower> and it would still accomplish the same effect, but
 * you won't do that because you're not a monster of a developer.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \CommonEvent[x]      Runs common event x when text code is reached.
 * \Wait[x]             Makes the message wait x frames before continuing.
 * 
 * <Next Page>          Ends the current message page at this line. This is
 *                      used for messages when rows are at 5 or above and the
 *                      message lines don't match the amount. This is used to
 *                      prevent grabbing message windows from following message
 *                      events. Any lines following <Next Page> in the same
 *                      message event will be ignored.
 * 
 * <Auto>               Resizes message window dimensions to fit text. *Note3*
 * <Auto Width>         Resizes message window width to fit text. *Note3*
 * <Auto Height>        Resizes message window height to fit text. *Note3*
 * 
 * <Auto Actor: x>      Resizes message window and positions it over actor x
 *                      sprite's head. *Note3*
 * <Auto Party: x>      Resizes message window and positions it over party
 *                      member x sprite's head. *Note3*
 * <Auto Player>        Map-Only. Resizes message window and positions it over
 *                      the player sprite's head. *Note3*
 * <Auto Event: x>      Map-Only. Resizes message window and positions it over
 *                      event x sprite's head. *Note3*
 * <Auto Enemy: x>      Battle-Only. Resizes message window and positions it
 *                      over enemy x sprite's head. *Note3*
 *
 * Note3: Upon using these text codes, the message window's settings will be
 * reset for the upcoming message. These effects do not work with Word Wrap.
 *
 * ---
 *
 * ----------------------------   ---------------------------------------------
 * Text Code                      Effect (Battle Only)
 * ----------------------------   ---------------------------------------------
 * <Current Battle Target>        Replaces text code with the current target of
 *                                an action in battle.
 * <Current Battle User>          Replaces text code with the currently active
 *                                user in battle.
 * <Current Battle Action>        Replaces text code with the current battle
 *                                action's name with an icon in front.
 * <Current Battle Action Name>   Replaces text code with the current battle
 *                                action's name without an icon.
 * 
 * If there is no battle, no target, no user, or no action, then the text code
 * will just be replaced with no text.
 * 
 * These text codes are NOT recommended to be used inside of Help Descriptions.
 * They are best used with "Show Text" event commands.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Effect (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * <Show>                         Choice is always shown.
 * <Show Switch: x>               Choice shown if switch x is ON.
 * <Show Switches: x,x,x>         Choice shown if the x switches are all ON.
 * <Show All Switches: x,x,x>     Choice shown if the x switches are all ON.
 * <Show Any Switches: x,x,x>     Choice shown if any of x switches are ON.
 *
 * <Hide>                         Choice is always hidden.
 * <Hide Switch: x>               Choice hidden if switch x is ON.
 * <Hide Switches: x,x,x>         Choice hidden if the x switches are all ON.
 * <Hide All Switches: x,x,x>     Choice hidden if the x switches are all ON.
 * <Hide Any Switches: x,x,x>     Choice hidden if any of x switches are ON.
 *
 * <Enable>                       Choice is always enabled.
 * <Enable Switch: x>             Choice enabled if switch x is ON.
 * <Enable Switches: x,x,x>       Choice enabled if the x switches are all ON.
 * <Enable All Switches: x,x,x>   Choice enabled if the x switches are all ON.
 * <Enable Any Switches: x,x,x>   Choice enabled if any of x switches are ON.
 *
 * <Disable>                      Choice is always disabled.
 * <Disable Switch: x>            Choice disabled if switch x is ON.
 * <Disable Switches: x,x,x>      Choice disabled if the x switches are all ON.
 * <Disable All Switches: x,x,x>  Choice disabled if the x switches are all ON.
 * <Disable Any Switches: x,x,x>  Choice disabled if any of x switches are ON.
 * 
 * <Choice Width: x>              Sets the minimum text area width to x.
 *                                Applies to whole choice window.
 * <Choice Indent: x>             Sets the indent to x value. Applies to
 *                                current choice selection only.
 * 
 * <BgColor: x>                   Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' text color. This
 *                                will be combined with a fading
 * <BgColor: x,y>                 Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' to 'y' gradient
 *                                text color.
 * <BgColor: #rrggbb>             Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' color using
 *                                hex color values.
 * <BgColor: #rrggbb, #rrggbb>    Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' gradient
 *                                using hex color values.
 * 
 * <Help> text </Help>            Makes a help window appear and have it show
 *                                'text' in its contents. The help window will
 *                                disappear if no text is displayed.
 * 
 * <Shuffle>                      Shuffles the order of all choices. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 * <Shuffle: x>                   Shuffles the order of all choices and only
 *                                x number of them will appear. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 *                                Hidden choices do not count towards x number.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Background Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <BgImg: filename>              Creates a background image from img/pictures/
 *                                stretched across the choice rectangle.
 * <BgImg LowerLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <BgImg LowerCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <BgImg LowerRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <BgImg MidLeft: filename>      Creates a background image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <BgImg Center: filename>       Creates a background image from img/pictures/
 *                                scaled to the center of choice rect.
 * <BgImg MidRight: filename>     Creates a background image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <BgImg UpperLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <BgImg UpperCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <BgImg UpperRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <BgImg: filename> text code variants, even if the background
 * image is smaller than the choice contents, it will overscale to match its
 * choice rectangle dimensions.
 * 
 * *Note:* Using a background image will clear the dimmed background rectangle
 * that is normally behind each selectable choice.
 * 
 * *Note:* Each choice can only have one background image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the background will appear behind the select cursor.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Foreground Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <FgImg: filename>              Creates a foreground image from img/pictures/
 *                                stretched across the choice rectangle.
 * <FgImg LowerLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <FgImg LowerCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <FgImg LowerRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <FgImg MidLeft: filename>      Creates a foreground image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <FgImg Center: filename>       Creates a foreground image from img/pictures/
 *                                scaled to the center of choice rect.
 * <FgImg MidRight: filename>     Creates a foreground image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <FgImg UpperLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <FgImg UpperCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <FgImg UpperRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <FgImg: filename> text code variants, unlike the background
 * variant, the foreground image will not overscale past its original size.
 * Instead, it will maintain its original size or be smaller, so long as it can
 * be scaled to exist within the choice rectangle unless it is intended to be
 * stretched by using the <FgImg: filename> variant.
 * 
 * *Note:* Text is then written on top of the foreground image.
 * 
 * *Note:* Each choice can only have one foreground image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the foreground will appear behind the select cursor.
 *
 * ---
 *
 * -----------------  ---------------------------------------------------------
 * Text Code          Effect (Name Window Only)
 * -----------------  ---------------------------------------------------------
 * <Left>             Positions the name box window to the left.
 * <Center>           Positions the name box window to the center.
 * <Right>            Positions the name box window to the right.
 * <Position: x>      Replace 'x' with a number from 0 to 10. This positions
 *                    the name box window on the screen relative to the
 *                    position of the value 'x' represents.
 * \NormalBG          Changes background type of window to normal type.
 * \DimBG             Changes background type of window to dim type.
 * \TransparentBG     Changes background type of window to transparent type.
 *
 * ---
 * 
 * -------------------------------   ------------------------------------------
 * Text Code                         Effect (Message Window Only)
 * -------------------------------   ------------------------------------------
 * 
 * <Position: x, y, width, height>   Forces the message window to exact listed
 *                                   coordinates and dimensions. Replace each
 *                                   of the arguments with numbers. *Note*
 * 
 * <Coordinates: x, y>               Forces the message window to the exact
 *                                   listed coordinates. Replace each of the
 *                                   arguments with numbers. *Note*
 * 
 * <Dimensions: width, height>       Forces the message window size to the
 *                                   exact listed dimensions. Replace each of
 *                                   the arguments with numbers. *Note*
 * 
 * <Offset: +x, +y>                  Quickly adjust the message window offset
 * <Offset: -x, -y>                  values to the x and y amounts. The values
 * <Offset: +x, -y>                  will replace the previous offset settings
 * <Offset: -x, +y>                  if there were any.
 * 
 * *NOTE* These text codes do not work with Word Wrap.
 * 
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Requires VisuMZ_0_CoreEngine)
 * ------------------   -------------------------------------------------------
 * <Up Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Left Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Right Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Down Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * <Ok Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Cancel Button>      Display's VisuMZ_0_CoreEngine's button assist text.
 * <Shift Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Menu Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Up Button>     Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Down Button>   Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * ---
 * 
 * === Random Text Pool ===
 * 
 * <RNG> text1 | text2 | text3 </RNG>
 * 
 * Using the above text code format in a Show Message entry, you can get a
 * random result out of the various inserted texts. Use "|" (without quotes) as
 * a separator between text entries. You can have unlimited entries. The result
 * will have any excess white space trimmed.
 * 
 * This text code cannot be inserted into a macro and parsed properly.
 * 
 * ---
 *
 * === Message Core Customizable Text Codes ===
 *
 * The following text codes can be altered through the Message Core's various
 * Plugin Parameters to adjust replacements and actions.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \Class[x]            Draws class x's icon (if have) and name.
 * \ClassName[x]        Draws class x's name only.
 *
 * \Skill[x]            Draws skill x's icon (if have) and name.
 * \SkillName[x]        Draws skill x's name only.
 *
 * \Item[x]             Draws item x's icon (if have) and name.
 * \ItemName[x]         Draws item x's name only.
 * \ItemQuantity[x]     Inserts the number of item x's owned by the party.
 *
 * \Weapon[x]           Draws weapon x's icon (if have) and name.
 * \WeaponName[x]       Draws weapon x's name only.
 * \WeaponQuantity[x]   Inserts the number of weapon x's owned by the party.
 *
 * \Armor[x]            Draws armor x's icon (if have) and name.
 * \ArmorName[x]        Draws armor x's name only.
 * \ArmorQuantity[x]    Inserts the number of armor x's owned by the party.
 *
 * \LastGainObj         Draws the icon + name of the last party-gained object.
 * \LastGainObjName     Draws the name of the last party-gained object.
 * \LastGainObjQuantity Inserts the quantity of the last party-gained object.
 *
 * \State[x]            Draws state x's icon (if have) and name.
 * \StateName[x]        Draws state x's name only.
 *
 * \Enemy[x]            Draws enemy x's icon (if have) and name.
 * \EnemyName[x]        Draws enemy x's name only.
 *
 * \Troop[x]            Draws troop x's icon (if have) and name.
 * \TroopName[x]        Draws troop x's name only.
 *
 * \TroopMember[x]      Draws troop member x's icon (if have) and name. *Note1*
 * \TroopNameMember[x]  Draws troop member x's name only. *Note1*
 * 
 * Note1: Only works in battle.
 *
 * \NormalBG            Changes background type of window to normal type.
 * \DimBG               Changes background type of window to dim type.
 * \TransparentBG       Changes background type of window to transparent type.
 *
 * \FontChange<x>       Changes font face to x font name.
 * \ResetFont           Resets font settings.
 *
 * \ResetColor          Resets color settings.
 * \HexColor<x>         Changes text color to x hex color (ie. #123abc).
 * \OutlineColor[x]     Changes outline color to text color x.
 * \OutlineHexColor<x>  Changes outline color to x hex color (ie. #123abc).
 * \OutlineWidth[x]     Changes outline width to x thickness.
 * 
 * \WindowMoveTo<?>     Moves window to exact coordinates. *Note2*
 * \WindowMoveBy<?>     Moves window by relative values. *Note2*
 * \WindowReset         Resets window position to original position.
 *
 * Note2: Replace '?' with the following format:
 *   targetX, targetY, targetWidth, targetHeight, duration, easingType
 *   Only targetX and targetY are required arguments. These will only alter the
 *   window dimensions when the text has arrived at that point. They will not
 *   alter the window preemptively. This is not used as a window positioner.
 *   Use the <Position: x, y, width, height> text code for that.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \ActorFace[x]        Inserts actor x's face into the Message Window.
 * \PartyFace[x]        Inserts party member x's face into the Message Window.
 * \ChangeFace<x,y>     Changes message face to x filename, y index. *Note2*
 * \FaceIndex[x]        Changes message face index to x.
 *
 * \TextDelay[x]        Sets delay in frames between characters to x frames.
 * 
 * Note: These text codes only work with the Message Window. Keep in mind that
 *   even if some windows might look like the Message Window, it may not
 *   necessarily be one.
 * 
 * Note2: This text code is used under the assumption that you are using an
 * existing face graphic to change from (doesn't matter which). The text code
 * will not automatically shift text from no-face graphic to having a face
 * graphic mid-message.
 * 
 * ---
 * 
 * As these text codes can be added, removed, and/or altered, their functions
 * may or may not be the same depending on how you've altered them. VisuStella
 * is not responsible for any errors caused by changes made to pre-made text
 * codes nor any new text codes they did not make.
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
 * === Message Plugin Commands ===
 * 
 * ---
 *
 * Message: Properties
 *   Change the various properties of the Message Window.
 *
 *   Rows:
 *   - Change the number of Message Window rows.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Width: 
 *   - Change the Message Window width in pixels.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Word Wrap:
 *   - Enable or disable Word Wrap for the Message Window?
 *
 * ---
 * 
 * Message: X/Y Offsets
 * - Change the X and Y Offsets of the Message Window.
 * - The offset value(s) will be saved and stored.
 * 
 *   Offset X:
 *   - Offset Message Window horizontally.
 *   - Negative: Left; Positive: Right
 *   - Message Window coordinates are still restricted via clamping.
 * 
 *   Offset Y:
 *   - Offset Message Window vertically.
 *   - Negative: Up; Positive: Down
 *   - Message Window coordinates are still restricted via clamping.
 * 
 * ---
 * 
 * === Choice Plugin Commands ===
 * 
 * ---
 * 
 * Choices: Distance
 * - Change the distance from choice window to the message window.
 * 
 *   Distance:
 *   - Change distance between the choice and message windows.
 *   - Default distance is 0.
 *   - Use negative to center align with remaining space.
 * 
 * ---
 *
 * Choices: Properties
 * - Change the properties found in the Show Choices event command.
 *
 *   Line Height:
 *   - Change the line height for the show choices.
 *   - Leave at 0 to keep this unchanged.
 * 
 *   Minimum Choice Width:
 *   - What is the minimum width size for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of choice rows to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Max Columns:
 *   - Maximum number of choice columns to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Text Alignment:
 *   - Text alignment for Show Choice window.
 *
 * ---
 * 
 * === Select Plugin Commands ===
 * 
 * ---
 * 
 * Select: Weapon
 * - Opens the Event Select Item Window to let the player pick a weapon to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected weapon.
 *   - It will result in 0 otherwise.
 * 
 *   Weapon Type ID:
 *   - Reduce all the weapons to a specific weapon type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Armor
 * - Opens the Event Select Item Window to let the player pick an armor to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected armor.
 *   - It will result in 0 otherwise.
 * 
 *   Armor Type ID:
 *   - Reduce all the armors to a specific armor type.
 *   - Leave at 0 to not use filters.
 * 
 *   Equip Type ID:
 *   - Reduce all the armors to a specific equip type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Skill
 * - Opens the Event Select Item Window to let the player pick a skill to
 *   choose from.
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - Can be opened while the Message Window is open.
 * - Skills will not be listed if they are hidden by the actor.
 * - Skills will not be listed if the actor lacks access to their Skill Type.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected skill.
 *   - It will result in 0 otherwise.
 * 
 *   Actor ID:
 *   - Select an actor to get the skill list from.
 *   - Use 0 to select from the party leader.
 * 
 *   Skill Type ID:
 *   - Reduce all the skills to a specific skill type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Change Text
 * - Change text for target picture(s) to show.
 * - You may use text codes.
 * - Text will adapt to picture's properties.
 * - Settings will be erased if picture is erased.
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to set text to.
 * 
 *   Padding:
 *   - How much padding from the sides should there be?
 * 
 *   Text:
 * 
 *     Upper Left:
 *     Upper Center:
 *     Upper Right:
 *     Middle Left:
 *     Middle Center:
 *     Middle Right:
 *     Lower Left:
 *     Lower Center:
 *     Lower Right:
 *     - The text that's aligned to this picture's side.
 *     - You may use text codes.
 * 
 * ---
 * 
 * Picture: Erase Text
 * - Erase all text for target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to erase text for.
 * 
 * ---
 * 
 * Picture: Refresh Text
 * - Refreshes the text used for all on-screen pictures.
 * - To be used if any dynamic text codes are updated like \n[x].
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings involving the message system. These settings range from
 * adjust how the Message Window looks to more intricate settings like how
 * some of the default text codes work.
 *
 * ---
 *
 * Message Window
 *
 *   Default Rows:
 *   - Default number of rows to display for the Message Window.
 *
 *   Default Width:
 *   - Default Message Window width in pixels.
 *
 *   Fast Forward Key:
 *   - This is the key used for fast forwarding messages.
 *   - WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 *
 *   Text Delay:
 *   - How many frames to wait between characters drawn?
 *   - Use 0 for instant.
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset Message Window horizontally or vertically.
 *   - Horizontal: Left; Positive: Right
 *   - Veritcal: Negative: Up; Positive: Down
 * 
 *   Stretch Dimmed BG:
 *   - Stretch dimmed window background to fit the whole screen.
 * 
 *   Default Outline Width:
 *   - Changes the default outline width to this many pixels thick.
 * 
 *   Each Message Start:
 *   Each Message End:
 *   - This is text that is added at the start/end of each message.
 *   - You may use text codes.
 *   - Keep in mind that if a message extends to a different page (due to word
 *     wrap, excess lines, etc), that does not mean the starting text will
 *     be added to where the next page begins or the ending text will be added
 *     where the previous page ends.
 *   - Can be used for things like adding "<center>" to the start of each 
 *     message without having to type it every time.
 *
 * ---
 *
 * Name Box Window
 *
 *   Default Color:
 *   - Default color for the Name Box Window's text.
 *
 *   Offset X:
 *   - How much to offset the name box window X by
 *     (as long as it doesn't go offscreen).
 *
 *   Offset Y:
 *   - How much to offset the name box window Y by
 *     (as long as it doesn't go offscreen).
 *
 * ---
 *
 * Choice List Window
 *
 *   Line Height:
 *   - What is the default line height for Show Choices?
 * 
 *   Minimum Choice Width:
 *   - What is the minimum choice width for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of rows to visibly display?
 *
 *   Max Columns:
 *   - Maximum number of columns to visibly display?
 *
 *   Text Alignment:
 *   - Default alignment for Show Choice window.
 *
 * ---
 *
 * Default Text Codes
 *
 *   Relative \PX \PY:
 *   - Make \PX[x] and \PY[x] adjust relative starting position than
 *     exact coordinates.
 *
 *   \{ Maximum:
 *   - Determine the maximum size that \{ can reach.
 *
 *   \} Minimum:
 *   - Determine the minimum size that \} can reach.
 *
 *   \{ Change \}
 *   - How much does \{ and \} change font size by?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Color Settings
 * ============================================================================
 *
 * For certain windows such as the Message Window, Help Window, and Choice
 * Window, Auto-Color is enabled to automatically highlight and color certain
 * database entries, keywords, and just about anything you, the game dev, wants
 * to be automatically colored. This is done to avoid typing out \C[6]Jack\C[0]
 * every time Jack's name is written out as it will be automatically colored in
 * those specific windows.
 *
 * The Plugin Parameters will give you full reign over which database entries
 * and keywords you want to be automatically colored as long as they follow a
 * few rules:
 * 
 * -----------------
 * Auto-Color Rules:
 * -----------------
 *
 * 1. Database names and keywords are case sensitive.
 *    This means if "Potion" is a marked keyword, typing out "potion" will not
 *    prompt the auto-color to highlight "potion". You must add the lowercase
 *    version of the word into the keyword list if you want it to count.
 *
 * 2. Database names and keywords are exact size (for Roman languages)
 *    This means if "Potion" is a marked keyword, typing out "potions" will not
 *    prompt the auto-color to highlight "potions". You must type out all of
 *    the variations of the words you want affected into the keyword list to
 *    prompt the auto-color highlight.
 * 
 *    This does not apply to Japanese, Korean, or Chinese languages.
 *
 * 3. Possessive cases and other language symbols aren't counted.
 *    Symbols such as periods, commas, quotes, parentheses, and similar symbols
 *    do no count towards Rule 2. This means if "Potion" is a marked keyword,
 *    the typing out "(Potion)" will still highlight the "Potion" part of the
 *    word according to the auto-color.
 * 
 * 4. Names with special characters like !, ?, [, ], etc. will be ignored.
 *    These cause conflicts with how auto-colors are detected.
 *
 * ---
 *
 * Database Highlighting
 *
 *   Actors:
 *   Classes:
 *   Skills:
 *   Items:
 *   Weapons:
 *   Armors:
 *   Enemies:
 *   States:
 *   - Any usage of a the selected database entry's name is auto-colored with
 *     the text code number.
 *   - Use 0 to not auto-color.
 *
 * ---
 *
 * Word Highlighting
 *
 *   \C[x]: Color
 *   - These are lists of all the words that will be automatically colored with
 *     the x text color.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Font Manager
 * ============================================================================
 *
 * Custom fonts that aren't the message or number fonts cannot be used without
 * registration. If you try to use custom fonts in RPG Maker MZ without
 * registering their font family first, you will find out that they will not
 * work. These plugin parameters allow you to register your game's custom fonts
 * here.
 * 
 * ---
 * 
 * Settings:
 * 
 *   Font Family:
 *   - This will be what's used by RPG Maker MZ and plugins to reference this
 *     specific font.
 *   - NO filename extensions!
 * 
 *   Filename:
 *   - What is the filename of the custom font you would like to use?
 *   - Located inside the project's "fonts" folder.
 * 
 * ---
 * 
 * Examples:
 * 
 *   Font Family: WildWords
 *   Filename: WildWords-Regular.ttf
 * 
 * How you would use this in other plugins as a preface to the font face or
 * font family would be to use "WildWords" as the font face/family name. Then
 * RPG Maker MZ will use its own innate FontManager to refer that to the
 * "WildWords-Regular.ttf" file found in the game's "fonts" folder.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Actions
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * performing actions. These actions can be done through each JavaScript or by
 * a common event (if it is used in the Message Window). Adequate knowledge of
 * both is recommended before attempting to modify and/or add new Text Code
 * Actions to the Plugin Parameters.
 *
 * Each of the Text Code Actions are formatted in such a way:
 *
 * ---
 *
 * Text Code Action
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   Common Event:
 *   - Select a common event to run when this text code is used in a message.
 *
 *   JS: Action:
 *   - JavaScript code used to perform an action when this text code appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Replacements
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * replacing the text codes with text data. Text data can be replaced with
 * an exact exchange of text or dynamically through JavaScript. Adding a new
 * Text Code Replacement is done through the Plugin Parameters.
 *
 * Each of the Text Code Replacements are formatted in such a way:
 *
 * ---
 *
 * Text Code Replacement
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   STR: Text:
 *   - The text that will appear if this match appears.
 *     If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     match appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Macros
 * ============================================================================
 *
 * Text macros are used in similar fashion to text codes replacements to
 * replace themselves with text data. The primary difference is that macros are
 * made in a different format with no conditional argument modifiers (ie the
 * [x] that follows a text code).
 *
 * To use a text macro, type in the matching keyword between two [brackets] and
 * it will be replaced by the string data or run the JavaScript code found in
 * the Plugin Parameter settings.
 *
 * For example, if you have the text macro "Leader", made to return the party
 * leader's name, you can type in [Leader] in the Message Window and it will be
 * replaced with the party leader's name. The output can also output text codes
 * into the resulting text.
 * 
 * This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 * Use the method stated before with the brackets to [MacroName] instead.
 *
 * Each of the Text Macros are formatted in such a way:
 *
 * ---
 *
 * Text Macro
 *
 *   Match:
 *   - This is what needs to be matched in order for this macro to work.
 *   - In [Leader], this would be the 'Leader' text.
 *
 *   STR: Text:
 *   - The replacement text that will appear from the macro.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     macro appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Language Settings
 * ============================================================================
 *
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 * 
 * See the "Text Language Information" for more information.
 *
 * ---
 * 
 * Main Settings:
 * 
 *   Enable Switching?:
 *   - Enable language switching settings for this plugin?
 * 
 *   File Type:
 *   - Which file type do you wish to use?
 *     - CSV (Legacy)
 *     - TSV (Recommended)
 * 
 *   CSV Filename:
 *   - What is the filename of the CSV file to read from?
 *   - Located within the project's /data/ folder.
 * 
 *   TSV Filename:
 *   - What is the filename of the TSV file to read from?
 *   - Located within the project's /data/ folder.
 * 
 * ---
 * 
 * Options:
 * 
 *   Add Option?:
 *   - Add the 'Text Language' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 * 
 * ---
 * 
 * Languages:
 * 
 *   Default Language:
 *   - What is the default language used for this game?
 * 
 *   Supported Languages:
 *   - What are all the supported languages supported by this game's
 *     script?
 *   - Remove any that aren't translated.
 * 
 * ---
 * 
 * Language Names:
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - How does this language appear in the in-game options?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Language Fonts
 * ============================================================================
 *
 * Different default fonts used for different languages. This allows different
 * stylistic choices to be made for different languages in case the current
 * font you're using doesn't have support for other language types.
 * 
 * Keep in mind that players can override this with Options Core if they select
 * a text option other than 'Default' for the 'Text Font' option.
 * 
 * Make sure any new custom fonts used for different languages are registered
 * with the 'Custom Font Manager' found in this plugin's Plugin Parameters.
 *
 * ---
 * 
 * Languages:
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - What font face is used for this language?
 *   - Make sure it is registered under Custom Font Manager.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Language Images
 * ============================================================================
 *
 * Allows different images to be used when different languages are used. This
 * is for images that have text on it that you want to appear in different
 * languages based on the text language selected by the player.
 * 
 * There are two ways this works:
 * 
 *   #1: Folder Name
 *   - The name of the folder containing those images will be named something
 *     like "Scrolls[XX]"
 *   - When a different language is picked, like English, it can reference
 *     the 'Scrolls[EN]' folder instead. If Japanese is used, it can refer to
 *     the 'Scrolls[JP]' folder as well.
 *   - The text used to replace the [XX] in the folder name can be determined
 *     in the Plugin Parameters.
 *     - Make sure you change the settings for each language you wish to use to
 *       have translated images for.
 * 
 *   #2: Filename
 *   - The filename of the image to be translated can be named something like
 *     ReidProfile[XX].png
 *   - When a different language is picked, like English, it will reference the
 *     'ReidProfile[EN].png' image instead. For Japanese, it will reference the
 *     'ReidProfile[JP].png' as well.
 *   - The text used to replace the [XX] in the filename can be determined in
 *     the Plugin Parameters.
 *     - Make sure you change the settings for each language you wish to use to
 *       have translated images for.
 *
 * ---
 * 
 * Settings
 * 
 *   Convert Default?
 *   - ON: Default language uses converted marker.
 *   - OFF: Default languages uses [XX] as marker.
 * 
 * Here's an explanation of what this does:
 * 
 *   - The default language picked is English and the player has English picked
 *     as their desired language.
 *   - If the "Convert Default?" Plugin Parameter is ON, then 'ReidProfile[XX]'
 *     will reference and look for the 'ReidProfile[EN]' image.
 *   - If the "Convert Default?" Plugin Parameter is OFF, 'ReidProfile[XX]' is
 *     then used for the English language instead of 'ReidProfile[EN]'.
 *     - This is to avoid duplicate images and save on file space.
 *   - The reasoning behind the [XX] is that there needs to be an anchor image
 *     used for the RPG Maker MZ client in order to have something to reference
 *     before branching out to different languages.
 * 
 * ---
 * 
 * Languages 
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - This text will replace [XX] with in image folder names and filenames
 *     when this language is selected.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Speed Option Settings
 * ============================================================================
 *
 * Modern RPG's on the market have the option to adjust the message speed rate
 * for players. These Plugin Parameters allow you to add that option to the
 * Options Menu as well.
 *
 * ---
 *
 * Text Speed Option Settings
 *
 *   Add Option?:
 *   - Add the 'Text Speed' option to the Options menu?
 *
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 *
 *   Option Name:
 *   - Command name of the option.
 *
 *   Default Value:
 *   - 1 - 10, slowest to fastest.
 *   - 11 is instant value.
 *
 *   Instant Speed:
 *   - Text to show "instant" text.
 *
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Word Wrap Settings
 * ============================================================================
 *
 * Word wrap is a property that will cause any overflowing text to wrap around
 * and move into the next line. This property can only be enabled inside text
 * that accept text codes, such as the Message Window and Help Window. However,
 * word wrap is disabled for the Choice Window due to the nature of the Choice
 * Window's base properties.
 *
 * Word wrap can be enabled or disabled in three ways. One is by using the text
 * code <WordWrap> to enable it or </WordWrap> to disable it. The second method
 * is by enabling it with the Plugin Command: 'Message: Properties'. The third
 * method is by enabling it by default with the Plugin Parameters.
 * 
 * Word wrap only supports left-to-right alphabetical languages that utilize
 * spaces.
 * 
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 * 
 * As of the v1.44 update, some Asian languages such as Chinese and Japanese
 * are now supported for word wrap. Korean language is only supported if spaces
 * are used.
 * 
 * ---
 *
 * Enable Word Wrap
 *
 *   Message Window:
 *   - Automatically enable Word Wrap for this window?
 *
 *   Help Window:
 *   - Automatically enable Word Wrap for this window?
 *
 * ---
 *
 * Rules
 *
 *   Link Break -> Space:
 *   - Convert manually placed (non tagged) line breaks with spaces?
 *   - Line breaks must be inserted using the <br> text code.
 *
 *   Tight Wrap:
 *   - If a face graphic is present in a message, word wrap will be tighter.
 * 
 *   End Padding:
 *   - Add extra padding to your window to make text wrap further away from the
 *     end of the window.
 *   - This will default to 0.
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
 * Version 1.55: January 19, 2026
 * * Documentation Update!
 * ** \ChangeFace<x,y> text codegets a note added:
 * *** This text code is used under the assumption that you are using an
 *     existing face graphic to change from (doesn't matter which). The text
 *     code will not automatically shift text from no-face graphic to having a
 *     face graphic mid-message.
 * 
 * Version 1.54: May 15, 2025
 * * Bug Fixes!
 * ** Fixed a bug where the text width of translated text was not taken into
 *    account. Fix made by Arisu
 * 
 * Version 1.53: February 20, 2025, 2025
 * * Bug Fixes!
 * ** Fixed an error with text language translations not working properly for
 *    the last listed language in the translation sheet. Fix made by Irina.
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Removed picture limit of 100 from Picture-related Plugin Commands.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Text Language Information section included for TSV.
 * ** Updated text code note for \picture<x> and \CenterPicture<x>
 * *** As of the version 1.53 update, the Help Window now supports both of
 *     these text codes. However, we still recommend using icons over using
 *     pictures as there will be loading delays.
 * * Plugin Parameters
 * ** New plugin parameters added by Irina:
 * *** Parameters > Text Language Settings > File Type:
 * **** Which file type do you wish to use?
 * ***** CSV (Legacy)
 * ***** TSV (Recommended)
 * *** Parameters > Text Language Settings > TSV Filename
 * **** What is the filename of the TSV file to read from?
 * **** Located within the project's /data/ folder.
 * * Feature Updates!
 * ** We have done our research and decided that CSV's are too restricted to
 *    use due to their default nature of wanting to use commas as separators.
 *    Thus, we've decided to switch to TSV where the default separator is a tab
 *    space, something that is almost never used in RPG Maker text.
 * ** CSV support will remain as a legacy option but TSV will be recommended as
 *    the main text languaging switching filetype.
 * ** When creating a new Language TSV, the plugin will check if a Language CSV
 *    exists and asks you if you wish to convert the existing CSV to TSV. The
 *    original CSV file will remain intact as a backup.
 * 
 * Version 1.52: December 19, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Arisu:
 * *** <left>
 * *** <center>
 * *** <right>
 * **** When used in the Map Name, instead of aligning the text which is
 *      centered by default, the text code will align the horizontal position
 *      of the name displayed on the screen.
 * *** <top>
 * *** <middle>
 * *** <bottom>
 * **** When used in the Map Name, the text code will align the vertical
 *      position of the name displayed on the screen.
 * *** <X: +n>
 * *** <X: -n>
 * *** <Y: +n>
 * *** <Y: -n>
 * **** Adjusts the horizontal/vertical position of map name by 'n' value.
 * *** All of these text codes require VisuMZ_0_CoreEngine installed and its
 *     "Map Name Text Code" plugin parameter enabled.
 * 
 * Version 1.51: October 17, 2024
 * * Bug Fixes!
 * ** Fixed a bug where \LastGainObj text code did not work with text language
 *    key codes. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added note to Text Language Information > How to Enable Switching
 * *** IMPORTANT! The separator used for the CSV file must be a semicolon (;)
 *     and not a comma (,) as to reduce the amount of punctuation conflicts.
 *     Keep this in mind as most CSV editors will default to comma (,) instead
 *     of the semicolon (;) for their separator.
 * ** Added note to Text Language Information > Naming Weapon Types, etc:
 * *** You might have noticed that if you've decided to use \tl{keyName} for
 *     weapon or other database types, other parts of the game will error out.
 *     Don't worry, for these, you don't have to change the currently used
 *     database name. Go straight to the CSV and insert in a new key for that
 *     particular database name. For example, the equip type "Accessory" will
 *     use "Accessory" as the automatic key to look for a translated phrase. If
 *     there isn't any in the CSV file, then the default database text entry
 *     will be used.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Parameters > Text Language Settings > Language Fonts
 * **** Different default fonts used for different languages. This allows
 *      different stylistic choices to be made for different languages in case
 *      the current font you're using doesn't have support for other language
 *      types.
 * **** Keep in mind that players can override this with Options Core if they
 *      select a text option other than 'Default' for the 'Text Font' option.
 * **** Make sure any new custom fonts used for different languages are
 *      registered with the 'Custom Font Manager' found in this plugin's Plugin
 *      Parameters.
 * *** Parameters > Text Language Settings > Language Images
 * **** Allows different images to be used when different languages are used.
 *      This is for images that have text on it that you want to appear in
 *      different languages based on the text language selected by the player.
 * 
 * Version 1.50: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina:
 * *** <Caps> </Caps>
 * *** <Upper> </Upper>
 * *** <Lower> </Lower>
 * **** Auto-text case textcodes will automatically adjust text inserted
 *      between them to respectively be completely capitalized, first-letter
 *      capitalized, or completely lowercase.
 * **** More information in the help file.
 * *** <Alt> </Alt>
 * **** Alternates between uppercase and lowercase for letters.
 * *** <Chaos> </Chaos>
 * **** Randomly uses uppercase and lowercase for letters.
 * 
 * 
 * Version 1.49: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a problem where using text codes to get database object names did
 *    not apply translated text.
 * * Documentation Update!
 * ** Added note for Message Window Only text code effects:
 * *** These text codes only work with the Message Window. Keep in mind that
 *     even if some windows might look like the Message Window, it may not
 *     necessarily be one.
 * * Feature Update!
 * ** Added a failsafe for when Choice List Window doesn't have any viable
 *    options (due to being hidden or disabled). Update made by Irina.
 * ** Added a failsafe for Language CSV when empty rows are added.
 * ** Updated some default Text Code actions in order to make sure they're only
 *    used by the Message Window and not anything else. Update made by Irina.
 * 
 * Version 1.48: April 18, 2024
 * * Bug Fixes!
 * ** Added fail safe for help description checks parsing from objects without
 *    help descriptions normally. Fix made by Irina.
 * 
 * Version 1.47: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > Custom Font Manager
 * **** Register custom fonts here.
 * **** Custom fonts that aren't the message or number fonts cannot be used
 *      without registration.
 * **** See help file for more information.
 * 
 * Version 1.46: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where script calls used to create message choices would not
 *    work properly. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Text Language Switching added by Irina:
 * *** Plugin Parameters > Text Language Settings
 * **** The "Text Language" feature allows your players to switch between
 *      different languages for your game to allow people from around the globe
 *      to enjoy what story you have to tell.
 * **** Disclaimers: This is not an automatic translation tool. Translations
 *      made through the "Text Language" feature of the VisuStella MZ Message
 *      Core will require manual input by the game developer.
 * **** Read more about it in detail within the "Text Language Information"
 *      section in the help file.
 * ** New Plugin Parameter added by Irina:
 * *** Choices: Distance
 * **** Change the distance from choice window to the message window.
 * ** New parameter added to Plugin Command "Choices: Properties" by Irina:
 * *** Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Plugin Parameter for "Message Window" added by Irina:
 * *** Parameters > Message Window: Choice List Window> Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Text Codes for Choice Window added by Irina:
 * *** <BgImg: filename> and variants
 * *** <FgImg: filename> and variants
 * **** These text codes allow adding a background or foreground image to a
 *      choice rectangle in stretched/scaled size.
 * 
 * Version 1.45: December 14, 2023
 * * Bug Fixes!
 * ** Punctuation was, for some reason, excluded when using Wordwrap with
 *    Japanese and Chinese languages. This should be fixed now. Fixed by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added clarity to the <left>, <center>, and <right> being unable to be
 *    used together with word wrap.
 * *** Word Wrap also cannot be used together with <left>, <center>, or <right>
 *     and will disable itself if text alignment text codes are detected.
 * * Feature Update!
 * ** Wordwrap <br> now works properly with Japanese and Chinese languages.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > General Settings > Each Message Start
 * *** Plugin Parameters > General Settings > Each Message End
 * **** This is text that is added at the start/end of each message.
 * **** Keep in mind that if a message extends to a different page (due to word
 *      wrap, excess lines, etc), that does not mean the starting text will
 *      be added to where the next page begins or the ending text will be added
 *      where the previous page ends.
 * **** Can be used for things like adding "<center>" to the start of each 
 *      message without having to type it every time.
 * 
 * Version 1.44: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated "Plugin Parameters: Word Wrap Settings" section:
 * *** As of the v1.44 update, some Asian languages such as Chinese and
 *     Japanese are now supported for word wrap. Korean language is only
 *     supported if spaces are used.
 * * Feature Update!
 * ** Word Wrap is now supported for Japanese and Chinese languages.
 * ** Feature updated by Irina and sponsored by AndyL.
 * * New Features!
 * ** New text codes added by Irina for "Show Choices" event command.
 * *** <Shuffle>
 * **** Shuffles the order of all choices. Any cancel shortcuts other than
 *      "Branch" will be undone.
 * *** <Shuffle: x>
 * **** Shuffles the order of all choices and only x number of them appear. Any
 *      cancel shortcuts other than "Branch" will be undone. Hidden choices do
 *      not count towards x number.
 * 
 * Version 1.43: April 13, 2023
 * * Compatibility Update!
 * ** Fixed incompatibilities with auto message positioning with the Map Zoom
 *    plugin. Update made by Irina.
 * 
 * Version 1.42: March 16, 2023
 * * Bug Fixes!
 * ** Fixed some text codes that would capture way too much data than intended.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text code added by Irina for Show Choice Window only:
 * *** <Help> text </Help>
 * **** Makes a help window appear and have it show 'text' in its contents.
 * **** The help window will disappear if no text is displayed.
 * ** New Plugin Commands added by Arisu:
 * *** Select: Weapon
 * *** Select: Armor
 * *** Select: Skill
 * **** Opens the Event Select Item Window to let the player pick a weapon,
 *      armor, or skill to choose from. The selected object will have its ID
 *      recorded in a variable. These can be opened while the Message Window is
 *      opened just like the event "Select Item".
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina!
 * *** For the Choice Window Only text codes:
 * **** <BgColor: x>
 * **** <BgColor: x, y>
 * **** <BgColor: #rrggbb>
 * **** <BgColor: #rrggbb, #rrggbb>
 * ***** Requires VisuMZ_0_CoreEngine! Sets the background color of this choice
 *       to 'x' text color, 'x' to 'y' gradient text color, or using '#rrggbb'
 *       hex color values.
 * 
 * Version 1.40: November 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New text code added by Irina:
 * *** <RNG> text1 | text2 | text3 </RNG>
 * **** Using the above text code format in a Show Message entry, you can get a
 *      random result out of the various inserted texts. Use "|" (without
 *      quotes) as a separator between text entries. You can have unlimited
 *      entries. The result will have any excess white space trimmed.
 * **** This text code cannot be inserted into a macro and parsed properly.
 * 
 * Version 1.39: September 22, 2022
 * * Bug Fixes!
 * ** Macros now support quotes (' and ") in the STR: Text. Fix made by Irina.
 * 
 * Version 1.38: July 21, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.37: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Picture texts with \v[x] text codes are now updated automatically.
 * ** This is the only dynamic text code that updates this way for optimization
 *    purposes and to prevent overabundant CPU usage.
 * ** Everything else will require the new Plugin Command.
 * * New Features!
 * ** New Plugin Command added by Irina:
 * *** Picture: Refresh Text
 * **** Refreshes the text used for all on-screen pictures.
 * **** To be used if any dynamic text codes are updated like \n[x].
 * * New Features!
 * ** New text codes added by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** <Up Button>, <Left Button>, <Right Button>, <Down Button>
 * *** <Ok Button>, <Cancel Button>, <Shift Button>, <Menu Button>
 * *** <Page Up Button>, <Page Down Button>
 * **** Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * Version 1.36: April 7, 2022
 * * Feature Update!
 * ** Auto size related text codes should now automatically disable word wrap
 *    effects as they should have before. Update made by Irina.
 * 
 * Version 1.35: March 31, 2022
 * * Bug Fixes!
 * ** Bug fixed where if autosizing is used and it goes from a message that is
 *    shorter to longer, an extra key press is needed. This should no longer be
 *    the case. Fix made by Irina.
 * 
 * Version 1.34: February 24, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Choice Window Text Codes made by Irina and sponsored by AndyL:
 * *** <Choice Width: x>
 * **** Sets the minimum text area width to x. Applies to whole choice window.
 * *** <Choice Indent: x>
 * **** Sets the indent to x value. Applies to current choice selection only.
 * 
 * Version 1.33: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Picture: Change Text
 * **** This new plugin command allows you to place text on top of pictures
 *      (usually in the form of empty pages or cards) to function as stationary
 *      or other uses. Text codes are allowed.
 * **** Text codes are supported.
 * *** Picture: Erase Text
 * **** Removes text from target picture(s).
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Extra Show Choice notetags will now be properly hidden. Fix by Irina.
 * * Compatibility Update!
 * ** Self Switches are now made compatible with work with Show Choices. Update
 *    made by Irina.
 * 
 * Version 1.31: December 9, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New hard-coded message-only text code added by Irina:
 * *** <Next Page>
 * **** Ends the current message page at this line. This is used for messages
 *      when rows are at 5 or above and the message lines don't match the
 *      amount. This is used to prevent grabbing message windows from following
 *      message events. Any lines following <Next Page> in the same message
 *      event will be ignored.
 * 
 * Version 1.30: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for removed "Center Window X" bit.
 * * Feature Update!
 * ** Message: Properties now has "Center Window X?" removed
 * *** Changes will now be automatically centered.
 * *** This change is made for the new Plugin Command added for offsets which
 *     more or less replaces them.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Puddor:
 * *** Message: X/Y Offsets
 * **** Change the X and Y Offsets of the Message Window.
 * **** The offset value(s) will be saved and stored.
 * ** New Plugin Parameters added by Irina and sponsored by Puddor:
 * *** Plugin Parameters > General Settings > Message Window > Offset X
 * *** Plugin Parameters > General Settings > Message Window > Offset Y
 * **** Allows you to offset the horizontal and/or vertical positions of the
 *      message window accordingly.
 * ** New Text Codes added by Irina and sponsored by Puddor:
 * *** <Offset: +x, +y>
 * *** <Offset: -x, -y>
 * *** <Offset: +x, -y>
 * *** <Offset: -x, +y>
 * **** Quickly adjust the message window offset values to the x and y amounts.
 *      The values will replace the previous offset settings if there were any.
 * 
 * Version 1.29: October 21, 2021
 * * Feature Update
 * ** Word Wrap flags are now properly adjusted when converting macros and
 *    adding bypasses towards regular messages. Update by Irina.
 * 
 * Version 1.28: October 14, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: October 7, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** Macros should now work properly with any \x<n> based text codes.
 *    Fix made by Irina.
 * 
 * Version 1.25: August 27, 2021
 * * Feature Update!
 * ** Macros should now work with the <WordWrap> text code. Update by Irina.
 * 
 * Version 1.24: August 20, 2021
 * * Feature Update!
 * ** Macros should now work with window placement and resize options.
 *    Update made by Irina.
 * ** Macros should now work with choice-related enable and visibility options.
 *    Update made by Irina.
 * 
 * Version 1.23: July 16, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Word Wrap Settings > End Padding
 * **** Add extra padding to your window to make text wrap further away from
 *      the end of the window. This will default to 0.
 * 
 * Version 1.22: July 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Irina and sponsored by AndyL:
 * *** <Current Battle Target>
 * *** <Current Battle User>
 * **** Replaces the text code with the current target or current user's name
 *      in-battle. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * *** <Current Battle Action>
 * *** <Current Battle Action Name>
 * **** Replaces the text code with the current battle action's name with the
 *      icon or without it respectively. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * 
 * Version 1.21: June 4, 2021
 * * Documentation Update!
 * ** Added extra note to the new <Position: x, y, width, height> text codes
 *    that they do not work with Word Wrap.
 * * Feature Update!
 * ** Added fail safe for preventing Common Events that don't exist from being
 *    ran at all by the Message Window. Added by Arisu.
 * 
 * Version 1.20: May 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added additional clarity for \WindowMoveTo<?> and \WindowMoveBy<?> and
 *    \WindowReset text codes with "Note 2".
 * *** Replace '?' with the following format: targetX, targetY, targetWidth,
 *     targetHeight, duration, easingType. Only targetX and targetY are
 *     required arguments. These will only alter the window dimensions when the
 *     text has arrived at that point. They will not alter the window
 *     preemptively. This is not used as a window positioner. Use the
 *     <Position: x, y, width, height> text code for that.
 * * New Features!
 * ** New hard-coded text codes added for Message Window Only. Added by Irina.
 * *** <Position: x, y, width, height>
 * *** <Coordinates: x, y>
 * *** <Dimensions: width, height>
 * 
 * Version 1.19: May 14, 2021
 * * Feature Updates!
 * ** <br> line breaks can now be used by Show Choices. Make sure that there is
 *    enough room to contain the text through Plugin Commands. Update by Irina.
 * 
 * Version 1.18: April 30, 2021
 * * Bug Fixes!
 * ** Moving windows with 0 duration via text code should now instantly move
 *    the windows to the desired location with no delay. Fix made by Olivia.
 * 
 * Version 1.17: April 9, 2021
 * * Feature Update!
 * ** <Auto> text codes for message windows will round up calculations for the
 *    message width to the nearest even number for better calculations.
 * 
 * Version 1.16: April 2, 2021
 * * Bug Fixes!
 * ** \CommonEvent[x] text code will no longer run upon message window size
 *    calculation. Fix made by Arisu.
 * * Documentation Update!
 * ** Added further clarification for "Text Macros" section.
 * *** This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 *     Use the method stated before with the brackets to [MacroName] instead.
 * 
 * Version 1.15: March 5, 2021
 * * Bug Fixes!
 * ** Hidden choices by switches will no longer count towards the maximum line
 *    count for Show Choice options. Fix made by Irina.
 * 
 * Version 1.14: February 12, 2021
 * * Bug Fixes!
 * ** Auto positioned messages in battle will no longer cover the battler in
 *    question. Fix made by Irina.
 * 
 * Version 1.13: February 5, 2021
 * * Bug Fixes!
 * ** Choice List Window with a dimmed background should now have a more
 *    consistent sized dim sprite. Fix made by Irina.
 * 
 * Version 1.12: January 22, 2021
 * * Feature Update!
 * ** Name Box Window Default Color is now disabled by default to 0 because
 *    users do not understand why their names are showing up yellow and did not
 *    bother reading the documentation. If users want this feature turned on,
 *    they will have to do it manually from now on. Update made by Irina.
 * 
 * Version 1.11: January 15, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: January 8, 2021
 * * Bug Fixes!
 * ** <Auto Actor: x> and <Auto Party: x> text codes should now work properly.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Auto Color Plugin Parameters now have their default settings set to 0.
 *    This is due to an influx of "bug reports" from users who do not
 *    understand how this feature works, and the VisuStella team has decided it
 *    is better for the feature to default to an inactive state until users
 *    decide to search and utilize it themselves. Update made by Irina.
 * 
 * Version 1.09: January 1, 2021
 * * Feature Update!
 * ** Auto-color no longer applies to database names that are only numbers.
 *    Auto-color entries that are only numbers will also be ignored. This is to
 *    prevent breaking the text code parsing. Update made by Yanfly.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Some text codes left for the Name Box Window have been accidentally left
 *    out. These text codes allow for the positioning of the Name Box Window.
 *    Also, added to this section are the \NormalBG, \DimBG, and \TransparentBG
 *    text codes since people have been asking for how to change the name box
 *    window's background, but have skimmed over those text codes in different
 *    sections of the help file.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: November 8, 2020
 * * Bug Fixes!
 * ** When using auto size functions, the message pause symbol will no longer
 *    appear semi-transparent the whole time. Fix made by Irina.
 * 
 * Version 1.06: October 25, 2020
 * * Documentation Update!
 * ** Added a warning message to the Fast Forward Key plugin parameter:
 * *** WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 * ** Updated help file for new features.
 * * Feature Update!
 * ** The default Fast Forward Key setting has now been changed from "Shift" to
 *    "Page Down". Change made by Yanfly
 * * New Feature!
 * ** New Plugin Parameter added by Irina.
 * *** Plugin Parameters > General > Default Outline Width
 * **** Changes the default outline width to this many pixels thick.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Setting an actor's autocolor will now disable it from \N[x] and \P[x]
 *    text codes. Fix made by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** Auto Position text codes not place positions properly if the screen width
 *    and height differ from the box width and box height. Fix made by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Word wrap no longer affects specific battle messages. Fix made by Irina.
 * ** Word wrap now updates properly after using the 'Message: Properties'
 *    Plugin Command. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Autoplacement of the name box window now takes its offset Y setting into
 *    account before sending it to the bottom of the message window. Fix made
 *    by Yanfly.
 * ** Added automatic feature setting to turn off word wrap when using the
 *    auto-size and auto-position text codes. This is because the auto-size and
 *    auto-position effects don't work properly with Word Wrap based on how
 *    they both clash when adjusting the window settings. Fix made by Irina.
 * ** New message pages after auto-sizing no longer put out empty messages.
 *    Fix made by Irina and Shiro.
 * * Documentation Update!
 * ** Extended the note for auto-size and auto-position text codes to include
 *    that they do not work with Word Wrap. Added by Irina.
 * 
 * Version 1.02: August 30, 2020
 * * New Features!
 * ** Added new hard-coded text codes for auto-sizing and auto-positioning:
 * *** <Auto>, <Auto Width>, <Auto Height>
 * *** <Auto Actor: x>, <Auto Party: x>, <Auto Enemy: x>
 * *** <Auto Player>, <Auto Actor: x>, <Auto Party: x>, <Auto Event: x>
 * **** New features added by Irina.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** </Wordwrap> now works.
 * ** \ActorFace[x] text code now fixed.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Text Code Replacements > ActorFace >
 *     JS: Text > and changing "$gameActors.actor(1)" to
 *     "$gameActors.actor(actorId)"
 * ** Actors with empty names would cause auto hightlight problems. Fixed!
 * ** Auto-colors now ignore names with special characters like !, ?, [, ], and
 *    so on.
 * ** Line break spacing fixed.
 * * New Features!
 * ** Wordwrap now works with <left>, <center> and <right> alignment tags.
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
 * @command MessageWindowProperties
 * @text Message: Properties
 * @desc Change the various properties of the Message Window.
 *
 * @arg Rows:num
 * @text Rows
 * @type number
 * @min 0
 * @desc Change the number of Message Window rows.
 * Leave at 0 to keep it unchanged.
 * @default 4
 *
 * @arg Width:num
 * @text Width
 * @type number
 * @min 0
 * @desc Change the Message Window width in pixels.
 * Leave at 0 to keep it unchanged.
 * @default 816
 *
 * @arg WordWrap:str
 * @text Word Wrap
 * @type select
 * @option No Change
 * @value No Change
 * @option Enable
 * @value true
 * @option Disable
 * @value false
 * @desc Enable or disable Word Wrap for the Message Window?
 * @default No Change
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageWindowXyOffsets
 * @text Message: X/Y Offsets
 * @desc Change the X and Y Offsets of the Message Window.
 * The offset value(s) will be saved and stored.
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Choice
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowDistance
 * @text Choices: Distance
 * @desc Change the distance from choice window to the message window.
 *
 * @arg Distance:eval
 * @text Distance
 * @desc Change distance between the choice and message windows.
 * Default distance is 0. Use negative to center align.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowProperties
 * @text Choices: Properties
 * @desc Change the properties found in the Show Choices event command.
 *
 * @arg LineHeight:num
 * @text Choice Line Height
 * @type number
 * @min 0
 * @desc Change the line height for the show choices.
 * Leave at 0 to keep this unchanged.
 * @default 36
 *
 * @arg MinWidth:num
 * @text Minimum Choice Width
 * @type number
 * @min 0
 * @desc What is the minimum width size for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @arg MaxRows:num
 * @text Max Rows
 * @type number
 * @min 0
 * @desc Maximum number of choice rows to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 8
 *
 * @arg MaxCols:num
 * @text Max Columns
 * @type number
 * @min 0
 * @desc Maximum number of choice columns to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 1
 *
 * @arg TextAlign:str
 * @text Text Alignment
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Text alignment for Show Choice window.
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Select
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectWeapon
 * @text Select: Weapon
 * @desc Opens the Event Select Item Window to let the player
 * pick a weapon to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected weapon. It will result in 0 otherwise.
 * @default 1
 *
 * @arg WeaponTypeID:num
 * @text Weapon Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the weapons to a specific weapon type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectArmor
 * @text Select: Armor
 * @desc Opens the Event Select Item Window to let the player
 * pick an armor to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected armor. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ArmorTypeID:num
 * @text Armor Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific armor type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @arg EquipTypeID:num
 * @text Equip Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific equip type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectSkill
 * @text Select: Skill
 * @desc Opens the Event Select Item Window to let the player
 * pick a skill to choose from. Requires VisuMZ_1_SkillsStatesCore!
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected skill. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select an actor to get the skill list from.
 * Use 0 to select from the party leader.
 * @default 0
 *
 * @arg SkillTypeID:num
 * @text Skill Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the skills to a specific skill type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextChange
 * @text Picture: Change Text
 * @desc Change text for target picture(s) to show.
 * You may use text codes.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc The ID(s) of the picture(s) to set text to.
 * @default ["1"]
 *
 * @arg Padding:eval
 * @text Padding
 * @parent PictureIDs:arraynum
 * @desc How much padding from the sides should there be?
 * @default $gameSystem.windowPadding()
 * 
 * @arg Text
 *
 * @arg upperleft:json
 * @text Upper Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg up:json
 * @text Upper Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg upperright:json
 * @text Upper Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg left:json
 * @text Middle Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg center:json
 * @text Middle Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg right:json
 * @text Middle Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerleft:json
 * @text Lower Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg down:json
 * @text Lower Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerright:json
 * @text Lower Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextErase
 * @text Picture: Erase Text
 * @desc Erase all text for target picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc The ID(s) of the picture(s) to erase text for.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextRefresh
 * @text Picture: Refresh Text
 * @desc Refreshes the text used for all on-screen pictures.
 * To be used if any dynamic text codes are updated like \n[x].
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
 * @param MessageCore
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
 * @desc General settings involving the message system.
 * @default {"MessageWindow":"","MessageRows:num":"4","MessageWidth:num":"816","FastForwardKey:str":"pagedown","MessageTextDelay:num":"1","StretchDimmedBg:eval":"true","DefaultOutlineWidth:num":"3","NameBoxWindow":"","NameBoxWindowDefaultColor:num":"0","NameBoxWindowOffsetX:num":"0","NameBoxWindowOffsetY:num":"0","ChoiceListWindow":"","ChoiceWindowLineHeight:num":"36","ChoiceWindowMaxRows:num":"8","ChoiceWindowMaxCols:num":"1","ChoiceWindowTextAlign:str":"default","DefaultTextCodes":"","RelativePXPY:eval":"true","FontBiggerCap:eval":"108","FontSmallerCap:eval":"12","FontChangeValue:eval":"12"}
 *
 * @param AutoColor:struct
 * @text Auto-Color Settings
 * @type struct<AutoColor>
 * @desc Automatically color certain keywords a specific way.
 * @default {"DatabaseHighlighting":"","Actors:str":"0","Classes:str":"0","Skills:str":"0","Items:str":"0","Weapons:str":"0","Armors:str":"0","Enemies:str":"0","States:str":"0","WordHighlighting":"","TextColor1:arraystr":"[]","TextColor2:arraystr":"[]","TextColor3:arraystr":"[]","TextColor4:arraystr":"[]","TextColor5:arraystr":"[]","TextColor6:arraystr":"[]","TextColor7:arraystr":"[]","TextColor8:arraystr":"[]","TextColor9:arraystr":"[]","TextColor10:arraystr":"[]","TextColor11:arraystr":"[]","TextColor12:arraystr":"[]","TextColor13:arraystr":"[]","TextColor14:arraystr":"[]","TextColor15:arraystr":"[]","TextColor16:arraystr":"[]","TextColor17:arraystr":"[]","TextColor18:arraystr":"[]","TextColor19:arraystr":"[]","TextColor20:arraystr":"[]","TextColor21:arraystr":"[]","TextColor22:arraystr":"[]","TextColor23:arraystr":"[]","TextColor24:arraystr":"[]","TextColor25:arraystr":"[]","TextColor26:arraystr":"[]","TextColor27:arraystr":"[]","TextColor28:arraystr":"[]","TextColor29:arraystr":"[]","TextColor30:arraystr":"[]","TextColor31:arraystr":"[]"}
 *
 * @param CustomFonts:arraystruct
 * @text Custom Font Manager
 * @type struct<CustomFont>[]
 * @desc Register custom fonts here. Custom fonts that aren't the
 * message or number fonts cannot be used without this.
 * @default []
 *
 * @param TextCodeActions:arraystruct
 * @text Text Code Actions
 * @type struct<TextCodeAction>[]
 * @desc Text codes that perform actions.
 * @default ["{\"Match:str\":\"ChangeFace\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing) {\\\\n        const filename = data[0].trim();\\\\n        const index = parseInt(data[1] || '0');\\\\n        $gameMessage.setFaceImage(filename, index);\\\\n        this.loadMessageFace();\\\\n        const rtl = $gameMessage.isRTL();\\\\n        const width = ImageManager.faceWidth;\\\\n        const height = this.innerHeight;\\\\n        const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n        this.contents.clearRect(x, 0, width, height);\\\\n        this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"FaceIndex\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing) {\\\\n        const filename = $gameMessage.faceName();\\\\n        $gameMessage.setFaceImage(filename, index);\\\\n        this.loadMessageFace();\\\\n        const rtl = $gameMessage.isRTL();\\\\n        const width = ImageManager.faceWidth;\\\\n        const height = this.innerHeight;\\\\n        const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n        this.contents.clearRect(x, 0, width, height);\\\\n        this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"TextDelay\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst delay = this.obtainEscapeParam(textState);\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing && this.constructor === Window_Message) {\\\\n        this.setTextDelay(delay);\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"NormalBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(0);\\\\n}\\\"\"}","{\"Match:str\":\"DimBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(1);\\\\n}\\\"\"}","{\"Match:str\":\"TransparentBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(2);\\\\n}\\\"\"}","{\"Match:str\":\"FontChange\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst fontName = this.obtainEscapeString(textState);\\\\nthis.contents.fontFace = fontName;\\\"\"}","{\"Match:str\":\"ResetFont\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetFontSettings();\\\"\"}","{\"Match:str\":\"ResetColor\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetTextColor();\\\"\"}","{\"Match:str\":\"HexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeTextColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineColor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst colorIndex = this.obtainEscapeParam(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(ColorManager.textColor(colorIndex));\\\\n}\\\"\"}","{\"Match:str\":\"OutlineHexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineWidth\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst width = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    this.contents.outlineWidth = width;\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveTo\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : this.x;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : this.y;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : this.width;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : this.height;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveTo(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveBy\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : 0;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : 0;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : 0;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : 0;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveBy(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowReset\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    const frames = 20;\\\\n    const easingType = 0;\\\\n    this.resetRect(frames, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"heart\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"3\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\"\"}"]
 *
 * @param TextCodeReplace:arraystruct
 * @text Text Code Replacements
 * @type struct<TextCodeReplace>[]
 * @desc Text codes that replace themselves with text.
 * @default ["{\"Match:str\":\"ActorFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const actorId = parseInt(arguments[1]);\\\\nconst actor = $gameActors.actor(actorId);\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"PartyFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const index = parseInt(arguments[1]) - 1;\\\\nconst actor = $gameParty.members()[index];\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"Class\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ClassIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ClassName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Skill\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"SkillIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"SkillName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Item\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ItemName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Weapon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"WeaponName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Armor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ArmorName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"State\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"StateIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"StateName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"LastGainObj\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = true;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjIcon\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectIcon();\\\"\"}","{\"Match:str\":\"LastGainObjName\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = false;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjQuantity\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectQuantity();\\\"\"}","{\"Match:str\":\"Enemy\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"EnemyName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Troop\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMember\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMemberName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}"]
 *
 * @param TextMacros:arraystruct
 * @text Text Code Macros
 * @type struct<TextMacro>[]
 * @desc Macros that are used to quickly write batches of text.
 * Format style: [MacroName]
 * @default ["{\"Match:str\":\"Example Macro\",\"TextStr:str\":\"This is the text that will be displayed when you type [Example Macro].\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}","{\"Match:str\":\"Leader\",\"TextStr:str\":\"\\\\P[1]\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}"]
 *
 * @param Localization:struct
 * @text Text Language Settings
 * @type struct<Localization>
 * @desc Text Language settings for this plugin.
 * @default {"Main":"","Enable:eval":"false","CsvFilename:str":"Languages.csv","Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Language","Localized":"","DefaultLocale:str":"English","Languages:arraystr":"[\"Bengali\",\"Chinese(Simplified)\",\"Chinese(Traditional)\",\"Czech\",\"Danish\",\"Dutch\",\"English\",\"Finnish\",\"French\",\"German\",\"Greek\",\"Hindi\",\"Hungarian\",\"Indonesian\",\"Italian\",\"Japanese\",\"Korean\",\"Norwegian\",\"Polish\",\"Portuguese\",\"Romanian\",\"Russian\",\"Slovak\",\"Spanish\",\"Swedish\",\"Tamil\",\"Thai\",\"Turkish\"]","LangNames":"","Bengali:str":"বাংলা","Chinese(Simplified):str":"简体中文","Chinese(Traditional):str":"繁體中文","Czech:str":"Čeština","Danish:str":"Dansk","Dutch:str":"Nederlands","English:str":"English","Finnish:str":"Suomi","French:str":"Français","German:str":"Deutsch","Greek:str":"Ελληνικά","Hindi:str":"हिन्दी","Hungarian:str":"Magyar","Indonesian:str":"Bahasa Indo","Italian:str":"Italiano","Japanese:str":"日本語","Korean:str":"한국어","Norwegian:str":"Norsk","Polish:str":"Polski","Portuguese:str":"Português","Romanian:str":"Română","Russian:str":"Русский","Slovak:str":"Slovenčina","Spanish:str":"Español","Swedish:str":"Svenska","Tamil:str":"தமிழ்","Thai:str":"ไทย","Turkish:str":"Türkçe"}
 *
 * @param LanguageFonts:struct
 * @text Language Fonts
 * @parent Localization:struct
 * @type struct<LanguageFonts>
 * @desc Different default fonts used for different languages.
 * Players can override this with Options Core.
 * @default {"Bengali:str":"rmmz-mainfont","Chinese(Simplified):str":"rmmz-mainfont","Chinese(Traditional):str":"rmmz-mainfont","Czech:str":"rmmz-mainfont","Danish:str":"rmmz-mainfont","Dutch:str":"rmmz-mainfont","English:str":"rmmz-mainfont","Finnish:str":"rmmz-mainfont","French:str":"rmmz-mainfont","German:str":"rmmz-mainfont","Greek:str":"rmmz-mainfont","Hindi:str":"rmmz-mainfont","Hungarian:str":"rmmz-mainfont","Indonesian:str":"rmmz-mainfont","Italian:str":"rmmz-mainfont","Japanese:str":"rmmz-mainfont","Korean:str":"rmmz-mainfont","Norwegian:str":"rmmz-mainfont","Polish:str":"rmmz-mainfont","Portuguese:str":"rmmz-mainfont","Romanian:str":"rmmz-mainfont","Russian:str":"rmmz-mainfont","Slovak:str":"rmmz-mainfont","Spanish:str":"rmmz-mainfont","Swedish:str":"rmmz-mainfont","Tamil:str":"rmmz-mainfont","Thai:str":"rmmz-mainfont","Turkish:str":"rmmz-mainfont"}
 *
 * @param LanguageImages:struct
 * @text Language Images
 * @parent Localization:struct
 * @type struct<LanguageImages>
 * @desc Allows different images to be used when different
 * languages are used. See help for more information.
 * @default {"ConvertDefault:eval":"false","Languages":"","Bengali:str":"[XX]","Chinese(Simplified):str":"[XX]","Chinese(Traditional):str":"[XX]","Czech:str":"[XX]","Danish:str":"[XX]","Dutch:str":"[XX]","English:str":"[XX]","Finnish:str":"[XX]","French:str":"[XX]","German:str":"[XX]","Greek:str":"[XX]","Hindi:str":"[XX]","Hungarian:str":"[XX]","Indonesian:str":"[XX]","Italian:str":"[XX]","Japanese:str":"[XX]","Korean:str":"[XX]","Norwegian:str":"[XX]","Polish:str":"[XX]","Portuguese:str":"[XX]","Romanian:str":"[XX]","Russian:str":"[XX]","Slovak:str":"[XX]","Spanish:str":"[XX]","Swedish:str":"[XX]","Tamil:str":"[XX]","Thai:str":"[XX]","Turkish:str":"[XX]"}
 *
 * @param TextSpeed:struct
 * @text Text Speed Option Settings
 * @type struct<TextSpeed>
 * @desc Text Speed Options Menu settings.
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Speed","Default:num":"10","Instant:str":"Instant"}
 *
 * @param WordWrap:struct
 * @text Word Wrap Settings
 * @type struct<WordWrap>
 * @desc Settings involving Word Wrap.
 * @default {"EnableWordWrap":"","MessageWindow:eval":"false","HelpWindow:eval":"false","Rules":"","LineBreakSpace:eval":"true","TightWrap:eval":"false","EndPadding:num":"0"}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param MessageWindow
 * @text Message Window
 *
 * @param MessageRows:num
 * @text Default Rows
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default number of rows to display for the Message Window.
 * @default 4
 *
 * @param MessageWidth:num
 * @text Default Width
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default Message Window width in pixels.
 * @default 816
 *
 * @param FastForwardKey:str
 * @text Fast Forward Key
 * @parent MessageWindow
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for fast forwarding messages.
 * @default pagedown
 *
 * @param MessageTextDelay:num
 * @text Text Delay
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc How many frames to wait between characters drawn?
 * Use 0 for instant.
 * @default 1
 *
 * @param MsgWindowOffsetX:num
 * @text Offset X
 * @parent MessageWindow
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @param MsgWindowOffsetY:num
 * @text Offset Y
 * @parent MessageWindow
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @param StretchDimmedBg:eval
 * @text Stretch Dimmed BG
 * @parent MessageWindow
 * @type boolean
 * @on Stretch
 * @off Don't
 * @desc Stretch dimmed window background to fit the whole screen.
 * @default true
 *
 * @param DefaultOutlineWidth:num
 * @text Default Outline Width
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc Changes the default outline width to this many pixels thick.
 * @default 3
 *
 * @param EachMessageStart:json
 * @text Each Message Start
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the start of each message.
 * You may use text codes.
 * @default ""
 *
 * @param EachMessageEnd:json
 * @text Each Message End
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the end of each message.
 * You may use text codes.
 * @default ""
 *
 * @param NameBoxWindow
 * @text Name Box Window
 *
 * @param NameBoxWindowDefaultColor:num
 * @text Default Color
 * @parent NameBoxWindow
 * @min 0
 * @max 31
 * @desc Default color for the Name Box Window's text.
 * @default 0
 *
 * @param NameBoxWindowOffsetX:num
 * @text Offset X
 * @parent NameBoxWindow
 * @desc How much to offset the name box window X by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param NameBoxWindowOffsetY:num
 * @text Offset Y
 * @parent NameBoxWindow
 * @desc How much to offset the name box window Y by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param ChoiceListWindow
 * @text Choice List Window
 *
 * @param ChoiceWindowLineHeight:num
 * @text Line Height
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc What is the default line height for Show Choices?
 * @default 36
 *
 * @param ChoiceWindowMinWidth:num
 * @text Minimum Choice Width
 * @parent ChoiceListWindow
 * @type number
 * @min 0
 * @desc What is the minimum choice width for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @param ChoiceWindowMaxRows:num
 * @text Max Rows
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of rows to visibly display?
 * @default 8
 *
 * @param ChoiceWindowMaxCols:num
 * @text Max Columns
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of columns to visibly display?
 * @default 1
 *
 * @param ChoiceWindowTextAlign:str
 * @text Text Alignment
 * @parent ChoiceListWindow
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Default alignment for Show Choice window.
 * @default rmmz-mainfont
 *
 * @param DefaultTextCodes
 * @text Default Text Codes
 *
 * @param RelativePXPY:eval
 * @text Relative \PX \PY
 * @parent DefaultTextCodes
 * @type boolean
 * @on Better
 * @off Normal
 * @desc Make \PX[x] and \PY[x] adjust relative starting position than exact coordinates.
 * @default true
 *
 * @param FontBiggerCap:eval
 * @text \{ Maximum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the maximum size that \{ can reach.
 * @default 108
 *
 * @param FontSmallerCap:eval
 * @text \} Minimum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the minimum size that \} can reach.
 * @default 12
 *
 * @param FontChangeValue:eval
 * @text \{ Change \}
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc How much does \{ and \} change font size by?
 * @default 12
 *
 */
/* ----------------------------------------------------------------------------
 * Auto Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutoColor:
 *
 * @param DatabaseHighlighting
 * @text Database Highlighting
 *
 * @param Actors:str
 * @text Actors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Actor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Classes:str
 * @text Classes
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Class's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Skills:str
 * @text Skills
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Skill's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Items:str
 * @text Items
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Item's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Weapons:str
 * @text Weapons
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Weapon's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Armors:str
 * @text Armors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Armor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Enemies:str
 * @text Enemies
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Enemy's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param States:str
 * @text States
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a State's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param WordHighlighting
 * @text Word Highlighting
 *
 * @param TextColor1:arraystr
 * @text \C[1]: Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor2:arraystr
 * @text \C[2]: Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor3:arraystr
 * @text \C[3]: Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor4:arraystr
 * @text \C[4]: Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor5:arraystr
 * @text \C[5]: Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor6:arraystr
 * @text \C[6]: Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor7:arraystr
 * @text \C[7]: Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor8:arraystr
 * @text \C[8]: Light Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor9:arraystr
 * @text \C[9]: Dark Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor10:arraystr
 * @text \C[10]: Dark Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor11:arraystr
 * @text \C[11]: Dark Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor12:arraystr
 * @text \C[12]: Dark Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor13:arraystr
 * @text \C[13]: Dark Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor14:arraystr
 * @text \C[14]: Solid Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor15:arraystr
 * @text \C[15]: Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor16:arraystr
 * @text \C[16]: System Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor17:arraystr
 * @text \C[17]: Crisis Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor18:arraystr
 * @text \C[18]: Dead Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor19:arraystr
 * @text \C[19]: Outline Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor20:arraystr
 * @text \C[20]: HP Orange 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor21:arraystr
 * @text \C[21]: HP Orange 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor22:arraystr
 * @text \C[22]: MP Blue 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor23:arraystr
 * @text \C[23]: MP Blue 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor24:arraystr
 * @text \C[24]: Param Up Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor25:arraystr
 * @text \C[25]: Param Down Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor26:arraystr
 * @text \C[26]: System Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor27:arraystr
 * @text \C[27]: System Pink
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor28:arraystr
 * @text \C[28]: TP Green 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor29:arraystr
 * @text \C[29]: TP Green 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor30:arraystr
 * @text \C[30]: EXP Purple 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor31:arraystr
 * @text \C[31]: EXP Purple 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Font Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomFont:
 *
 * @param FontFamily:str
 * @text Font Family
 * @desc This will be what's used by RPG Maker MZ and plugins to
 * reference this specific font. NO filename extensions!
 * @default Unnamed
 *
 * @param Filename:str
 * @text Filename
 * @desc What is the filename of the font you would like to use?
 * Located inside the project's "fonts" folder.
 * @default Unnamed.ttf
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Actions
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeAction:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param CommonEvent:num
 * @text Common Event
 * @type common_event
 * @desc Select a common event to run when this text code is used in a message.
 * @default 0
 *
 * @param ActionJS:func
 * @text JS: Action
 * @type note
 * @desc JavaScript code used to perform an action when this text code appears.
 * @default "const textState = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Replacements
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeReplace:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The text that will appear if this match appears.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this match appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Macro
 * ----------------------------------------------------------------------------
 */
/*~struct~TextMacro:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this macro to work.
 * @default Key
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The replacement text that will appear from the macro.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this macro appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Localization Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Localization:
 *
 * @param Main
 * @text Main Settings
 *
 * @param Enable:eval
 * @text Enable Switching?
 * @parent Main
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable language switching settings for this plugin?
 * @default false
 *
 * @param LangFiletype:str
 * @text File Type
 * @parent Main
 * @type select
 * @option CSV (Legacy)
 * @value csv
 * @option TSV (Recommended)
 * @value tsv
 * @desc Which file type do you wish to use?
 * @default tsv
 *
 * @param CsvFilename:str
 * @text CSV Filename
 * @parent Main
 * @desc What is the filename of the CSV file to read from?
 * Located within the project's /data/ folder.
 * @default Languages.csv
 *
 * @param TsvFilename:str
 * @text TSV Filename
 * @parent Main
 * @desc What is the filename of the TSV file to read from?
 * Located within the project's /data/ folder.
 * @default Languages.tsv
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Language' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Text Language
 *
 * @param Localized
 * @text Languages
 *
 * @param DefaultLocale:str
 * @text Default Language
 * @parent Localized
 * @type select
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What is the default language used for this game?
 * @default English
 *
 * @param Languages:arraystr
 * @text Supported Languages
 * @parent Localized
 * @type select[]
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What are all the supported languages supported by this
 * game's script? Remove any that aren't translated.
 * @default ["Bengali","Chinese(Simplified)","Chinese(Traditional)","Czech","Danish","Dutch","English","Finnish","French","German","Greek","Hindi","Hungarian","Indonesian","Italian","Japanese","Korean","Norwegian","Polish","Portuguese","Romanian","Russian","Slovak","Spanish","Swedish","Tamil","Thai","Turkish"]
 *
 * @param LangNames
 * @text Language Names
 *
 * @param Bengali:str
 * @text Bengali
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default বাংলা
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 简体中文
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 繁體中文
 * 
 * @param Czech:str
 * @text Czech
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Čeština
 * 
 * @param Danish:str
 * @text Danish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Dansk
 * 
 * @param Dutch:str
 * @text Dutch
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Nederlands
 * 
 * @param English:str
 * @text English
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default English
 * 
 * @param Finnish:str
 * @text Finnish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Suomi
 * 
 * @param French:str
 * @text French
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Français
 * 
 * @param German:str
 * @text German
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Deutsch
 * 
 * @param Greek:str
 * @text Greek
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Ελληνικά
 * 
 * @param Hindi:str
 * @text Hindi
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default हिन्दी
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Magyar
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Bahasa Indo
 * 
 * @param Italian:str
 * @text Italian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Italiano
 * 
 * @param Japanese:str
 * @text Japanese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 日本語
 * 
 * @param Korean:str
 * @text Korean
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 한국어
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Norsk
 * 
 * @param Polish:str
 * @text Polish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Polski
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Português
 * 
 * @param Romanian:str
 * @text Romanian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Română
 * 
 * @param Russian:str
 * @text Russian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Русский
 * 
 * @param Slovak:str
 * @text Slovak
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Slovenčina
 * 
 * @param Spanish:str
 * @text Spanish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Español
 * 
 * @param Swedish:str
 * @text Swedish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Svenska
 * 
 * @param Tamil:str
 * @text Tamil
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default தமிழ்
 * 
 * @param Thai:str
 * @text Thai
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default ไทย
 * 
 * @param Turkish:str
 * @text Turkish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Türkçe
 *
 */
/* ----------------------------------------------------------------------------
 * Language Fonts Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LanguageFonts:
 *
 * @param Bengali:str
 * @text Bengali
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Czech:str
 * @text Czech
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Danish:str
 * @text Danish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Dutch:str
 * @text Dutch
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param English:str
 * @text English
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Finnish:str
 * @text Finnish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param French:str
 * @text French
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param German:str
 * @text German
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Greek:str
 * @text Greek
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Hindi:str
 * @text Hindi
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Italian:str
 * @text Italian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Japanese:str
 * @text Japanese
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Korean:str
 * @text Korean
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Polish:str
 * @text Polish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Romanian:str
 * @text Romanian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Russian:str
 * @text Russian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Slovak:str
 * @text Slovak
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Spanish:str
 * @text Spanish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Swedish:str
 * @text Swedish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Tamil:str
 * @text Tamil
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Thai:str
 * @text Thai
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Turkish:str
 * @text Turkish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 *
 */
/* ----------------------------------------------------------------------------
 * Language Images Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LanguageImages:
 *
 * @param ConvertDefault:eval
 * @text Convert Default?
 * @type boolean
 * @on Convert
 * @off Don't
 * @desc ON: Default language uses converted marker.
 * OFF: Default languages uses [XX] as marker.
 * @default false
 *
 * @param Languages
 * @text Languages
 *
 * @param Bengali:str
 * @text Bengali
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Czech:str
 * @text Czech
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Danish:str
 * @text Danish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Dutch:str
 * @text Dutch
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param English:str
 * @text English
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Finnish:str
 * @text Finnish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param French:str
 * @text French
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param German:str
 * @text German
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Greek:str
 * @text Greek
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Hindi:str
 * @text Hindi
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Italian:str
 * @text Italian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Japanese:str
 * @text Japanese
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Korean:str
 * @text Korean
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Polish:str
 * @text Polish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Romanian:str
 * @text Romanian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Russian:str
 * @text Russian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Slovak:str
 * @text Slovak
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Spanish:str
 * @text Spanish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Swedish:str
 * @text Swedish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Tamil:str
 * @text Tamil
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Thai:str
 * @text Thai
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Turkish:str
 * @text Turkish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 *
 */
/* ----------------------------------------------------------------------------
 * Text Speed Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TextSpeed:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Text Speed' option to the Options menu?
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
 * @default Text Speed
 *
 * @param Default:num
 * @text Default Value
 * @type number
 * @min 1
 * @max 11
 * @desc 1 - 10, slowest to fastest.
 * 11 is instant value.
 * @default 10
 *
 * @param Instant:str
 * @text Instant Speed
 * @desc Text to show "instant" text.
 * @default Instant
 *
 */
/* ----------------------------------------------------------------------------
 * Word Wrap Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WordWrap:
 *
 * @param EnableWordWrap
 * @text Enable Word Wrap
 *
 * @param MessageWindow:eval
 * @text Message Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param HelpWindow:eval
 * @text Help Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param Rules
 * @text Rules
 *
 * @param LineBreakSpace:eval
 * @text Link Break -> Space
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Convert manually placed (non tagged) line breaks with spaces?
 * @default true
 *
 * @param TightWrap:eval
 * @text Tight Wrap
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc If a face graphic is present in a message, word wrap will be tighter.
 * @default false
 *
 * @param EndPadding:num
 * @text End Padding
 * @parent Rules
 * @type number
 * @desc Add extra padding to your window to make text wrap further away from the end of the window.
 * @default 0
 *
 */
//=============================================================================

const _0x10cc9c=_0x4cba;(function(_0x425ed0,_0x1305e8){const _0x50e8d2=_0x4cba,_0x4833fd=_0x425ed0();while(!![]){try{const _0x5ba03b=-parseInt(_0x50e8d2(0x319))/0x1+parseInt(_0x50e8d2(0x2ca))/0x2*(-parseInt(_0x50e8d2(0x141))/0x3)+parseInt(_0x50e8d2(0x1ec))/0x4+-parseInt(_0x50e8d2(0x213))/0x5*(parseInt(_0x50e8d2(0x222))/0x6)+-parseInt(_0x50e8d2(0x42a))/0x7+-parseInt(_0x50e8d2(0xb7))/0x8*(parseInt(_0x50e8d2(0x102))/0x9)+parseInt(_0x50e8d2(0x27e))/0xa*(parseInt(_0x50e8d2(0x42f))/0xb);if(_0x5ba03b===_0x1305e8)break;else _0x4833fd['push'](_0x4833fd['shift']());}catch(_0x40c8e3){_0x4833fd['push'](_0x4833fd['shift']());}}}(_0x1e22,0x4e0fb));var label=_0x10cc9c(0x37b),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x10cc9c(0x39d)](function(_0x1f2470){return _0x1f2470['status']&&_0x1f2470['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x10cc9c(0x10c)]=VisuMZ[label][_0x10cc9c(0x10c)]||{},VisuMZ[_0x10cc9c(0x415)]=function(_0x34c6bb,_0x1ce73c){const _0x1fab7b=_0x10cc9c;for(const _0x3771b2 in _0x1ce73c){if(_0x3771b2[_0x1fab7b(0x306)](/(.*):(.*)/i)){const _0x257bff=String(RegExp['$1']),_0x4070a3=String(RegExp['$2'])['toUpperCase']()[_0x1fab7b(0x1ed)]();let _0x5a8216,_0xa5d7ff,_0x265f04;switch(_0x4070a3){case _0x1fab7b(0x3da):_0x5a8216=_0x1ce73c[_0x3771b2]!==''?Number(_0x1ce73c[_0x3771b2]):0x0;break;case _0x1fab7b(0x3ab):_0xa5d7ff=_0x1ce73c[_0x3771b2]!==''?JSON[_0x1fab7b(0x465)](_0x1ce73c[_0x3771b2]):[],_0x5a8216=_0xa5d7ff[_0x1fab7b(0xd1)](_0x3b2e3e=>Number(_0x3b2e3e));break;case _0x1fab7b(0x30b):_0x5a8216=_0x1ce73c[_0x3771b2]!==''?eval(_0x1ce73c[_0x3771b2]):null;break;case _0x1fab7b(0x99):_0xa5d7ff=_0x1ce73c[_0x3771b2]!==''?JSON[_0x1fab7b(0x465)](_0x1ce73c[_0x3771b2]):[],_0x5a8216=_0xa5d7ff[_0x1fab7b(0xd1)](_0x4451dc=>eval(_0x4451dc));break;case _0x1fab7b(0xee):_0x5a8216=_0x1ce73c[_0x3771b2]!==''?JSON[_0x1fab7b(0x465)](_0x1ce73c[_0x3771b2]):'';break;case _0x1fab7b(0x3f4):_0xa5d7ff=_0x1ce73c[_0x3771b2]!==''?JSON['parse'](_0x1ce73c[_0x3771b2]):[],_0x5a8216=_0xa5d7ff['map'](_0x6d320b=>JSON[_0x1fab7b(0x465)](_0x6d320b));break;case _0x1fab7b(0x376):_0x5a8216=_0x1ce73c[_0x3771b2]!==''?new Function(JSON[_0x1fab7b(0x465)](_0x1ce73c[_0x3771b2])):new Function(_0x1fab7b(0x2f8));break;case _0x1fab7b(0x223):_0xa5d7ff=_0x1ce73c[_0x3771b2]!==''?JSON[_0x1fab7b(0x465)](_0x1ce73c[_0x3771b2]):[],_0x5a8216=_0xa5d7ff[_0x1fab7b(0xd1)](_0xa954bd=>new Function(JSON[_0x1fab7b(0x465)](_0xa954bd)));break;case _0x1fab7b(0xc6):_0x5a8216=_0x1ce73c[_0x3771b2]!==''?String(_0x1ce73c[_0x3771b2]):'';break;case _0x1fab7b(0x37a):_0xa5d7ff=_0x1ce73c[_0x3771b2]!==''?JSON[_0x1fab7b(0x465)](_0x1ce73c[_0x3771b2]):[],_0x5a8216=_0xa5d7ff['map'](_0x7540bf=>String(_0x7540bf));break;case'STRUCT':_0x265f04=_0x1ce73c[_0x3771b2]!==''?JSON[_0x1fab7b(0x465)](_0x1ce73c[_0x3771b2]):{},_0x34c6bb[_0x257bff]={},VisuMZ[_0x1fab7b(0x415)](_0x34c6bb[_0x257bff],_0x265f04);continue;case _0x1fab7b(0x335):_0xa5d7ff=_0x1ce73c[_0x3771b2]!==''?JSON[_0x1fab7b(0x465)](_0x1ce73c[_0x3771b2]):[],_0x5a8216=_0xa5d7ff[_0x1fab7b(0xd1)](_0x5e2605=>VisuMZ[_0x1fab7b(0x415)]({},JSON[_0x1fab7b(0x465)](_0x5e2605)));break;default:continue;}_0x34c6bb[_0x257bff]=_0x5a8216;}}return _0x34c6bb;},(_0x933d04=>{const _0x5a1e1b=_0x10cc9c,_0x48e9d=_0x933d04[_0x5a1e1b(0x29c)];for(const _0x491285 of dependencies){if(!Imported[_0x491285]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x5a1e1b(0x2d0)](_0x48e9d,_0x491285)),SceneManager[_0x5a1e1b(0x124)]();break;}}const _0x2fad5b=_0x933d04['description'];if(_0x2fad5b[_0x5a1e1b(0x306)](/\[Version[ ](.*?)\]/i)){const _0x4150ea=Number(RegExp['$1']);_0x4150ea!==VisuMZ[label][_0x5a1e1b(0x310)]&&(alert(_0x5a1e1b(0x195)['format'](_0x48e9d,_0x4150ea)),SceneManager['exit']());}if(_0x2fad5b[_0x5a1e1b(0x306)](/\[Tier[ ](\d+)\]/i)){const _0x4615eb=Number(RegExp['$1']);_0x4615eb<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x5a1e1b(0x2d0)](_0x48e9d,_0x4615eb,tier)),SceneManager[_0x5a1e1b(0x124)]()):tier=Math[_0x5a1e1b(0x3af)](_0x4615eb,tier);}VisuMZ[_0x5a1e1b(0x415)](VisuMZ[label][_0x5a1e1b(0x10c)],_0x933d04[_0x5a1e1b(0x30d)]);})(pluginData),PluginManager['registerCommand'](pluginData['name'],_0x10cc9c(0x321),_0x3afeb3=>{const _0x3c8b24=_0x10cc9c;VisuMZ['ConvertParams'](_0x3afeb3,_0x3afeb3);const _0x35e083=Number(_0x3afeb3[_0x3c8b24(0x207)])||0x0;$gameSystem[_0x3c8b24(0x433)](_0x35e083);}),PluginManager[_0x10cc9c(0xcc)](pluginData[_0x10cc9c(0x29c)],_0x10cc9c(0xd6),_0x321a8f=>{const _0x36ee96=_0x10cc9c;VisuMZ[_0x36ee96(0x415)](_0x321a8f,_0x321a8f);const _0x22cbb6=_0x321a8f['LineHeight']||$gameSystem[_0x36ee96(0x371)]()||0x1,_0x3478fa=_0x321a8f['MinWidth']??0x60,_0x5d1201=_0x321a8f[_0x36ee96(0x325)]||$gameSystem['getChoiceListMaxRows']()||0x1,_0x48c770=_0x321a8f['MaxCols']||$gameSystem['getChoiceListMaxColumns']()||0x1,_0x11a9e7=_0x321a8f[_0x36ee96(0xc7)][_0x36ee96(0x193)]()||_0x36ee96(0x9e);$gameSystem['setChoiceListLineHeight'](_0x22cbb6),$gameSystem[_0x36ee96(0x3d1)](_0x3478fa),$gameSystem[_0x36ee96(0x393)](_0x5d1201),$gameSystem[_0x36ee96(0x391)](_0x48c770),$gameSystem['setChoiceListTextAlign'](_0x11a9e7);}),PluginManager[_0x10cc9c(0xcc)](pluginData[_0x10cc9c(0x29c)],_0x10cc9c(0xa0),_0x2cf01c=>{const _0x530f76=_0x10cc9c;VisuMZ['ConvertParams'](_0x2cf01c,_0x2cf01c);const _0x335d89=_0x2cf01c[_0x530f76(0x451)]||$gameSystem[_0x530f76(0x29f)]()||0x1,_0x113c5e=_0x2cf01c['Width']||$gameSystem['getMessageWindowWidth']()||0x1;$gameTemp['_centerMessageWindow']=!![];const _0x52e7d1=_0x2cf01c[_0x530f76(0x46a)][_0x530f76(0x193)]();$gameSystem[_0x530f76(0x45a)](_0x335d89),$gameSystem[_0x530f76(0x82)](_0x113c5e);[_0x530f76(0x44d),_0x530f76(0x28a)][_0x530f76(0x100)](_0x52e7d1)&&$gameSystem[_0x530f76(0x400)](eval(_0x52e7d1));const _0x5ea197=SceneManager['_scene'][_0x530f76(0x2a5)];_0x5ea197&&(_0x5ea197[_0x530f76(0x13e)](),_0x5ea197['updateDimensions'](),_0x5ea197[_0x530f76(0x243)]());}),PluginManager[_0x10cc9c(0xcc)](pluginData['name'],'MessageWindowXyOffsets',_0x116eeb=>{const _0x2ec90a=_0x10cc9c;VisuMZ[_0x2ec90a(0x415)](_0x116eeb,_0x116eeb),$gameSystem['setMessageWindowXyOffsets'](_0x116eeb[_0x2ec90a(0x32c)],_0x116eeb[_0x2ec90a(0x2da)]);const _0x45b641=SceneManager[_0x2ec90a(0x30f)][_0x2ec90a(0x2a5)];_0x45b641&&(_0x45b641[_0x2ec90a(0x13e)](),_0x45b641['updateDimensions'](),_0x45b641['createContents']());}),PluginManager['registerCommand'](pluginData[_0x10cc9c(0x29c)],_0x10cc9c(0x217),_0x1b0895=>{const _0x19c806=_0x10cc9c;VisuMZ[_0x19c806(0x415)](_0x1b0895,_0x1b0895),$gameMessage['setWeaponChoice'](_0x1b0895['VariableID']||0x0,_0x1b0895[_0x19c806(0x278)]||0x0);const _0x23f3ac=$gameTemp[_0x19c806(0x2e9)]();if(_0x23f3ac)_0x23f3ac[_0x19c806(0x258)]('message');}),PluginManager['registerCommand'](pluginData[_0x10cc9c(0x29c)],_0x10cc9c(0x2e0),_0x4c4dad=>{const _0x33642b=_0x10cc9c;VisuMZ['ConvertParams'](_0x4c4dad,_0x4c4dad),$gameMessage[_0x33642b(0x41a)](_0x4c4dad[_0x33642b(0x246)]||0x0,_0x4c4dad[_0x33642b(0x1c5)]||0x0,_0x4c4dad['EquipTypeID']||0x0);const _0xa7ca5e=$gameTemp[_0x33642b(0x2e9)]();if(_0xa7ca5e)_0xa7ca5e[_0x33642b(0x258)](_0x33642b(0x336));}),PluginManager['registerCommand'](pluginData['name'],_0x10cc9c(0x203),_0xd8e4a3=>{const _0x42da41=_0x10cc9c;VisuMZ[_0x42da41(0x415)](_0xd8e4a3,_0xd8e4a3),$gameMessage[_0x42da41(0x392)](_0xd8e4a3[_0x42da41(0x246)]||0x0,_0xd8e4a3[_0x42da41(0x304)]||0x0,_0xd8e4a3[_0x42da41(0x44f)]||0x0);const _0x33d96=$gameTemp['getLastPluginCommandInterpreter']();if(_0x33d96)_0x33d96[_0x42da41(0x258)](_0x42da41(0x336));}),PluginManager[_0x10cc9c(0xcc)](pluginData[_0x10cc9c(0x29c)],_0x10cc9c(0x3c1),_0x1092fd=>{const _0x4869bb=_0x10cc9c;VisuMZ['ConvertParams'](_0x1092fd,_0x1092fd);const _0x57da88=_0x1092fd[_0x4869bb(0x2bd)]||[],_0x2907bf=_0x1092fd[_0x4869bb(0x117)]||0x0,_0x5d73e1=['upperleft','up',_0x4869bb(0x15f),_0x4869bb(0xb4),_0x4869bb(0x35b),_0x4869bb(0xa4),'lowerleft',_0x4869bb(0x1b2),_0x4869bb(0x30a)];for(const _0x313456 of _0x57da88){$gameScreen[_0x4869bb(0x273)](_0x313456,_0x2907bf);for(const _0x3aaa5d of _0x5d73e1){if(_0x1092fd[_0x3aaa5d]===undefined)continue;$gameScreen[_0x4869bb(0x179)](_0x313456,_0x1092fd[_0x3aaa5d],_0x3aaa5d);}}}),PluginManager[_0x10cc9c(0xcc)](pluginData[_0x10cc9c(0x29c)],_0x10cc9c(0x199),_0x28629e=>{const _0x557510=_0x10cc9c;VisuMZ[_0x557510(0x415)](_0x28629e,_0x28629e);const _0x2f549b=_0x28629e['PictureIDs']||[];for(const _0x3afd26 of _0x2f549b){$gameScreen[_0x557510(0x1ff)](_0x3afd26),$gameScreen[_0x557510(0x24f)](_0x3afd26);}}),PluginManager[_0x10cc9c(0xcc)](pluginData[_0x10cc9c(0x29c)],_0x10cc9c(0x3b4),_0x1b4958=>{$gameScreen['requestPictureTextRefreshAll']();}),VisuMZ['MessageCore'][_0x10cc9c(0x3d8)]=Scene_Boot['prototype'][_0x10cc9c(0x98)],Scene_Boot[_0x10cc9c(0x3be)][_0x10cc9c(0x98)]=function(){const _0x35dca3=_0x10cc9c;VisuMZ[_0x35dca3(0x37b)][_0x35dca3(0x3d8)][_0x35dca3(0x1bc)](this),VisuMZ['MessageCore']['CheckCompatibility'](),this[_0x35dca3(0x347)](),this[_0x35dca3(0xcf)](),this[_0x35dca3(0x25f)](),this['process_VisuMZ_MessageCore_AutoColor']();},VisuMZ['MessageCore'][_0x10cc9c(0xdd)]=function(){const _0x215e9b=_0x10cc9c;if(Imported[_0x215e9b(0x240)]&&VisuMZ[_0x215e9b(0x1f6)][_0x215e9b(0x310)]<1.09){let _0x9a3090='';_0x9a3090+=_0x215e9b(0x456),_0x9a3090+=_0x215e9b(0x416),alert(_0x9a3090),SceneManager[_0x215e9b(0x124)]();}},VisuMZ['MessageCore'][_0x10cc9c(0x25b)]=function(_0x351ac9){const _0x14a490=_0x10cc9c,_0x110b20=VisuMZ[_0x14a490(0x37b)][_0x14a490(0x10c)][_0x351ac9];_0x110b20['sort']((_0x5e0ad8,_0xdf7026)=>{const _0x144385=_0x14a490;if(!_0x5e0ad8||!_0xdf7026)return-0x1;return _0xdf7026[_0x144385(0x220)]['length']-_0x5e0ad8[_0x144385(0x220)]['length'];});},Scene_Boot[_0x10cc9c(0x3be)]['process_VisuMZ_MessageCore_TextCodes_Action']=function(){const _0xea5c41=_0x10cc9c;VisuMZ[_0xea5c41(0x37b)]['SortObjectByKeyLength'](_0xea5c41(0x23b));for(const _0x22360c of VisuMZ[_0xea5c41(0x37b)][_0xea5c41(0x10c)]['TextCodeActions']){_0x22360c[_0xea5c41(0x220)]=_0x22360c[_0xea5c41(0x220)][_0xea5c41(0x296)](),_0x22360c[_0xea5c41(0x3ca)]=new RegExp('\x1b'+_0x22360c[_0xea5c41(0x220)],'gi'),_0x22360c['textCodeResult']='\x1b'+_0x22360c['Match'];if(_0x22360c['Type']==='')_0x22360c['textCodeResult']+=_0xea5c41(0x341);}},Scene_Boot[_0x10cc9c(0x3be)][_0x10cc9c(0xcf)]=function(){const _0x1dfd06=_0x10cc9c;VisuMZ[_0x1dfd06(0x37b)][_0x1dfd06(0x25b)](_0x1dfd06(0x1df));for(const _0x5e0c8d of VisuMZ[_0x1dfd06(0x37b)][_0x1dfd06(0x10c)][_0x1dfd06(0x1df)]){_0x5e0c8d[_0x1dfd06(0x3ca)]=new RegExp('\x1b'+_0x5e0c8d[_0x1dfd06(0x220)]+_0x5e0c8d[_0x1dfd06(0x398)],'gi'),_0x5e0c8d[_0x1dfd06(0x3c5)]!==''&&_0x5e0c8d[_0x1dfd06(0x3c5)]!==_0x1dfd06(0x46c)?_0x5e0c8d[_0x1dfd06(0x3a8)]=new Function(_0x1dfd06(0x39b)+_0x5e0c8d['TextStr'][_0x1dfd06(0x3c8)](/\\/g,'\x1b')+'\x27'):_0x5e0c8d['textCodeResult']=_0x5e0c8d['TextJS'];}},Scene_Boot[_0x10cc9c(0x3be)][_0x10cc9c(0x25f)]=function(){const _0x4b9361=_0x10cc9c;for(const _0x4312f3 of VisuMZ[_0x4b9361(0x37b)][_0x4b9361(0x10c)]['TextMacros']){_0x4312f3['textCodeCheck']=new RegExp('\x5c['+_0x4312f3['Match']+'\x5c]','gi');if(_0x4312f3[_0x4b9361(0x3c5)]!==''&&_0x4312f3[_0x4b9361(0x3c5)]!==_0x4b9361(0x46c)){let _0x29e007=_0x4312f3['TextStr'];_0x29e007=_0x29e007['replace'](/\\/g,'\x1b'),_0x29e007=_0x29e007[_0x4b9361(0x3c8)]('\x27','\x5c\x27'),_0x29e007=_0x29e007[_0x4b9361(0x3c8)]('\x22','\x5c\x22'),_0x4312f3['textCodeResult']=new Function(_0x4b9361(0x39b)+_0x29e007+'\x27');}else _0x4312f3[_0x4b9361(0x3a8)]=_0x4312f3[_0x4b9361(0x126)];}},Scene_Boot[_0x10cc9c(0x3be)][_0x10cc9c(0x2ba)]=function(){const _0x364edd=_0x10cc9c,_0x1e20f7=VisuMZ[_0x364edd(0x37b)]['Settings'][_0x364edd(0x26d)];!VisuMZ['ParseAllNotetags']&&(VisuMZ[_0x364edd(0x37b)][_0x364edd(0x2f5)]($dataClasses,_0x1e20f7[_0x364edd(0xf0)]),VisuMZ[_0x364edd(0x37b)][_0x364edd(0x2f5)]($dataSkills,_0x1e20f7[_0x364edd(0x210)]),VisuMZ['MessageCore'][_0x364edd(0x2f5)]($dataItems,_0x1e20f7[_0x364edd(0x3e2)]),VisuMZ[_0x364edd(0x37b)][_0x364edd(0x2f5)]($dataWeapons,_0x1e20f7[_0x364edd(0xc0)]),VisuMZ[_0x364edd(0x37b)]['AddAutoColor']($dataArmors,_0x1e20f7[_0x364edd(0x2b2)]),VisuMZ[_0x364edd(0x37b)][_0x364edd(0x2f5)]($dataEnemies,_0x1e20f7[_0x364edd(0x1d7)]),VisuMZ['MessageCore'][_0x364edd(0x2f5)]($dataStates,_0x1e20f7[_0x364edd(0x2e2)])),VisuMZ[_0x364edd(0x37b)]['CreateAutoColorRegExpLists']();},VisuMZ['MessageCore'][_0x10cc9c(0x334)]=['V','N','P','C','I','PX','PY','G','{','}','<','>','FS','\x5c','$','.','|','!','<','>','^',_0x10cc9c(0x129),_0x10cc9c(0x1ac),_0x10cc9c(0x1f3),_0x10cc9c(0x13b),_0x10cc9c(0x279),_0x10cc9c(0x2f0),'<CENTER>',_0x10cc9c(0x338),_0x10cc9c(0x16e),_0x10cc9c(0x2c5),'<COLORLOCK>',_0x10cc9c(0x1c4),_0x10cc9c(0x208),')))',_0x10cc9c(0x164),_0x10cc9c(0x337),_0x10cc9c(0x1de),_0x10cc9c(0x23e),_0x10cc9c(0x2dd),_0x10cc9c(0x136),_0x10cc9c(0x1c9),_0x10cc9c(0x158),'SHOW',_0x10cc9c(0x180),_0x10cc9c(0x290),_0x10cc9c(0x35c),_0x10cc9c(0x21c),'SWITCHES',_0x10cc9c(0x299),_0x10cc9c(0x38c)],VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x2f5)]=function(_0x427423,_0x227f7e){const _0xb74808=_0x10cc9c;if(_0x227f7e<=0x0)return;const _0x1e3137=_0x427423;for(const _0x15338b of _0x1e3137){if(!_0x15338b)continue;VisuMZ[_0xb74808(0x37b)][_0xb74808(0x18e)](_0x15338b,_0x227f7e);}},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0xe1)]=function(){const _0x52ff18=_0x10cc9c;VisuMZ[_0x52ff18(0x37b)]['AutoColorRegExp']=[];for(let _0x3f9a25=0x1;_0x3f9a25<=0x1f;_0x3f9a25++){const _0x21e6e7=_0x52ff18(0x289)[_0x52ff18(0x2d0)](_0x3f9a25),_0x1edde3=VisuMZ[_0x52ff18(0x37b)][_0x52ff18(0x10c)][_0x52ff18(0x26d)][_0x21e6e7];_0x1edde3['sort']((_0x1b89f3,_0xbcadad)=>{const _0x119f43=_0x52ff18;if(!_0x1b89f3||!_0xbcadad)return-0x1;return _0xbcadad[_0x119f43(0x118)]-_0x1b89f3[_0x119f43(0x118)];}),this[_0x52ff18(0x3b7)](_0x1edde3,_0x3f9a25);}},VisuMZ['MessageCore'][_0x10cc9c(0x3b7)]=function(_0x5f4010,_0xb5d55){const _0x40e046=_0x10cc9c;for(const _0x696956 of _0x5f4010){if(_0x696956['length']<=0x0)continue;if(/^\d+$/[_0x40e046(0x33c)](_0x696956))continue;let _0x58d0ff=VisuMZ['MessageCore'][_0x40e046(0x27c)](_0x696956);if(_0x696956[_0x40e046(0x306)](/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g))var _0x999f9a=new RegExp(_0x58d0ff,'i');else var _0x999f9a=new RegExp('\x5cb'+_0x58d0ff+'\x5cb','g');VisuMZ[_0x40e046(0x37b)][_0x40e046(0x17c)]['push']([_0x999f9a,_0x40e046(0x28b)[_0x40e046(0x2d0)](_0xb5d55,_0x696956)]);}},VisuMZ['MessageCore'][_0x10cc9c(0x27c)]=function(_0x170b4c){const _0x3a3cb5=_0x10cc9c;return _0x170b4c=_0x170b4c[_0x3a3cb5(0x3c8)](/(\W)/gi,(_0x710f31,_0x4662e8)=>_0x3a3cb5(0xda)[_0x3a3cb5(0x2d0)](_0x4662e8)),_0x170b4c;},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x2ac)]=VisuMZ[_0x10cc9c(0x2ac)],VisuMZ[_0x10cc9c(0x2ac)]=function(_0x58f29c){const _0x5dc5a9=_0x10cc9c;VisuMZ[_0x5dc5a9(0x37b)][_0x5dc5a9(0x2ac)][_0x5dc5a9(0x1bc)](this,_0x58f29c);const _0x2e1385=VisuMZ[_0x5dc5a9(0x37b)][_0x5dc5a9(0x10c)]['AutoColor'];VisuMZ[_0x5dc5a9(0x37b)]['CreateAutoColorFor'](_0x58f29c,_0x2e1385[_0x5dc5a9(0xf0)]);},VisuMZ[_0x10cc9c(0x37b)]['ParseSkillNotetags']=VisuMZ[_0x10cc9c(0x3fa)],VisuMZ[_0x10cc9c(0x3fa)]=function(_0x4dcaa1){const _0x5320c7=_0x10cc9c;VisuMZ[_0x5320c7(0x37b)]['ParseSkillNotetags'][_0x5320c7(0x1bc)](this,_0x4dcaa1);const _0x18480c=VisuMZ[_0x5320c7(0x37b)][_0x5320c7(0x10c)]['AutoColor'];VisuMZ[_0x5320c7(0x37b)][_0x5320c7(0x18e)](_0x4dcaa1,_0x18480c[_0x5320c7(0x210)]);},0x7,VisuMZ[_0x10cc9c(0x37b)]['ParseItemNotetags']=VisuMZ[_0x10cc9c(0x41d)],VisuMZ[_0x10cc9c(0x41d)]=function(_0x3acb64){const _0x467a13=_0x10cc9c;VisuMZ[_0x467a13(0x37b)][_0x467a13(0x41d)][_0x467a13(0x1bc)](this,_0x3acb64);const _0x49a355=VisuMZ[_0x467a13(0x37b)][_0x467a13(0x10c)][_0x467a13(0x26d)];VisuMZ[_0x467a13(0x37b)][_0x467a13(0x18e)](_0x3acb64,_0x49a355[_0x467a13(0x3e2)]);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x242)]=VisuMZ[_0x10cc9c(0x242)],VisuMZ[_0x10cc9c(0x242)]=function(_0x1771ae){const _0x26efa7=_0x10cc9c;VisuMZ[_0x26efa7(0x37b)]['ParseWeaponNotetags'][_0x26efa7(0x1bc)](this,_0x1771ae);const _0x3acfe0=VisuMZ[_0x26efa7(0x37b)]['Settings']['AutoColor'];VisuMZ[_0x26efa7(0x37b)][_0x26efa7(0x18e)](_0x1771ae,_0x3acfe0['Weapons']);},VisuMZ[_0x10cc9c(0x37b)]['ParseArmorNotetags']=VisuMZ[_0x10cc9c(0x3b8)],VisuMZ['ParseArmorNotetags']=function(_0x579670){const _0x14e7c3=_0x10cc9c;VisuMZ[_0x14e7c3(0x37b)][_0x14e7c3(0x3b8)][_0x14e7c3(0x1bc)](this,_0x579670);const _0x27eb9d=VisuMZ[_0x14e7c3(0x37b)]['Settings'][_0x14e7c3(0x26d)];VisuMZ[_0x14e7c3(0x37b)]['CreateAutoColorFor'](_0x579670,_0x27eb9d[_0x14e7c3(0x2b2)]);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x139)]=VisuMZ[_0x10cc9c(0x139)],VisuMZ[_0x10cc9c(0x139)]=function(_0x224f31){const _0x573f3f=_0x10cc9c;VisuMZ[_0x573f3f(0x37b)][_0x573f3f(0x139)]['call'](this,_0x224f31);const _0x3b72a3=VisuMZ[_0x573f3f(0x37b)][_0x573f3f(0x10c)]['AutoColor'];VisuMZ['MessageCore'][_0x573f3f(0x18e)](_0x224f31,_0x3b72a3[_0x573f3f(0x1d7)]);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x1cb)]=VisuMZ[_0x10cc9c(0x1cb)],VisuMZ[_0x10cc9c(0x1cb)]=function(_0x36923a){const _0x3cc099=_0x10cc9c;VisuMZ[_0x3cc099(0x37b)][_0x3cc099(0x1cb)][_0x3cc099(0x1bc)](this,_0x36923a);const _0x853372=VisuMZ[_0x3cc099(0x37b)][_0x3cc099(0x10c)][_0x3cc099(0x26d)];VisuMZ[_0x3cc099(0x37b)][_0x3cc099(0x18e)](_0x36923a,_0x853372['States']);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x18e)]=function(_0x5ef311,_0x499d29){const _0x59f6b3=_0x10cc9c;if(_0x499d29<=0x0)return;const _0x101b2c=VisuMZ['MessageCore'][_0x59f6b3(0x10c)][_0x59f6b3(0x26d)][_0x59f6b3(0x227)+_0x499d29];let _0x2df955=_0x5ef311[_0x59f6b3(0x29c)][_0x59f6b3(0x1ed)]();if(/^\d+$/[_0x59f6b3(0x33c)](_0x2df955))return;if(VisuMZ[_0x59f6b3(0x37b)][_0x59f6b3(0x334)][_0x59f6b3(0x100)](_0x2df955[_0x59f6b3(0x296)]()))return;_0x2df955=_0x2df955[_0x59f6b3(0x3c8)](/\\I\[(\d+)\]/gi,''),_0x2df955=_0x2df955['replace'](/\x1bI\[(\d+)\]/gi,'');if(_0x2df955[_0x59f6b3(0x118)]<=0x0)return;if(_0x2df955[_0x59f6b3(0x306)](/-----/i))return;_0x101b2c[_0x59f6b3(0x38b)](_0x2df955);},VisuMZ['MessageCore'][_0x10cc9c(0x177)]=Scene_Boot[_0x10cc9c(0x3be)]['loadGameFonts'],Scene_Boot[_0x10cc9c(0x3be)][_0x10cc9c(0x2d1)]=function(){const _0x4b91a4=_0x10cc9c;VisuMZ['MessageCore'][_0x4b91a4(0x177)][_0x4b91a4(0x1bc)](this),this['loadCustomFontsMessageCore']();},Scene_Boot['prototype'][_0x10cc9c(0x31c)]=function(){const _0x5a0a33=_0x10cc9c,_0x2f42b6=VisuMZ[_0x5a0a33(0x37b)][_0x5a0a33(0x10c)][_0x5a0a33(0x3c3)]||[];for(const _0x49ae86 of _0x2f42b6){if(!_0x49ae86)continue;const _0x71af9d=_0x49ae86['FontFamily'];if(_0x71af9d[_0x5a0a33(0x1ed)]()==='')continue;if(_0x71af9d[_0x5a0a33(0x193)]()[_0x5a0a33(0x1ed)]()===_0x5a0a33(0x3d4))continue;const _0x589bc3=_0x49ae86[_0x5a0a33(0x2f3)];if(_0x589bc3===_0x5a0a33(0x435))continue;FontManager[_0x5a0a33(0x36e)](_0x71af9d,_0x589bc3);}},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x27f)]=VisuMZ['MessageCore']['Settings']['Localization'][_0x10cc9c(0x107)]??_0x10cc9c(0x2ce),VisuMZ[_0x10cc9c(0x37b)]['DataManager_loadDatabase']=DataManager[_0x10cc9c(0x1c7)],DataManager[_0x10cc9c(0x1c7)]=function(){const _0x16a21f=_0x10cc9c;VisuMZ[_0x16a21f(0x37b)]['DataManager_loadDatabase']['call'](this),this[_0x16a21f(0x202)]();},DataManager[_0x10cc9c(0x202)]=function(){const _0xaf0255=_0x10cc9c;if(!TextManager[_0xaf0255(0x438)]())return;const _0x3003f=VisuMZ['MessageCore'][_0xaf0255(0x10c)][_0xaf0255(0x41b)];let _0x3487f7='';const _0x539cb9=VisuMZ[_0xaf0255(0x37b)]['LocalizationType']??_0xaf0255(0x2ce);if(_0x539cb9==='csv')_0x3487f7=(_0x3003f['CsvFilename']??_0xaf0255(0x24c))||'';if(_0x539cb9===_0xaf0255(0x2ce))_0x3487f7=(_0x3003f[_0xaf0255(0x28f)]??_0xaf0255(0x24d))||'';if(!_0x3487f7)return;const _0xe00623='$dataLocalization',_0x55c138=new XMLHttpRequest(),_0x4f92db=_0xaf0255(0x190)+_0x3487f7;window[_0xe00623]=null,_0x55c138[_0xaf0255(0x17b)](_0xaf0255(0xdb),_0x4f92db),_0x55c138[_0xaf0255(0xd7)](_0xaf0255(0x329)[_0xaf0255(0x2d0)](_0x539cb9[_0xaf0255(0x193)]())),_0x55c138[_0xaf0255(0x43e)]=()=>this[_0xaf0255(0x2e7)](_0x55c138,_0xe00623),_0x55c138[_0xaf0255(0xd5)]=()=>this[_0xaf0255(0x24b)](),_0x55c138[_0xaf0255(0x3ee)]();},DataManager[_0x10cc9c(0x2e7)]=function(_0x1beb21,_0x126c75){const _0x4cb94a=_0x10cc9c;if(_0x1beb21[_0x4cb94a(0x175)]>=0x190)return;const _0x16dc43=_0x1beb21[_0x4cb94a(0x1a1)];window[_0x126c75]=VisuMZ[_0x4cb94a(0x37b)][_0x4cb94a(0x2d3)](_0x16dc43);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x2d3)]=function(_0xfeba26){const _0x46fe6c=_0x10cc9c,_0x3219d0=VisuMZ[_0x46fe6c(0x37b)][_0x46fe6c(0x27f)]??_0x46fe6c(0x2ce),_0x1a0ac4=_0x3219d0===_0x46fe6c(0x170)?';':'\x09',_0x375070=_0xfeba26['split']('\x0a'),_0x11c40c=_0x375070[0x0][_0x46fe6c(0x205)](_0x1a0ac4),_0x4e315c={};return _0x375070[_0x46fe6c(0x45d)](0x1)[_0x46fe6c(0x457)](_0x559d96=>{const _0x3360a9=_0x46fe6c;let _0x448c29=[],_0x3b62f6='',_0x47a993=![];for(let _0x599a6c=0x0;_0x599a6c<_0x559d96[_0x3360a9(0x118)];_0x599a6c++){let _0x4fe619=_0x559d96[_0x599a6c];if(_0x4fe619==='\x22')_0x47a993&&_0x559d96[_0x599a6c+0x1]==='\x22'?(_0x3b62f6+=_0x4fe619,_0x599a6c++):_0x47a993=!_0x47a993;else _0x4fe619===_0x1a0ac4&&!_0x47a993?(_0x448c29['push'](_0x3b62f6),_0x3b62f6=''):_0x3b62f6+=_0x4fe619;}if(_0x3b62f6)_0x448c29['push'](_0x3b62f6);if(!_0x448c29[0x0])_0x448c29[0x0]='';const _0x935f17=_0x448c29[0x0]['replace'](/^"|"$/g,'')['toLowerCase']()['trim']();_0x4e315c[_0x935f17]=_0x11c40c[_0x3360a9(0x45d)](0x1)[_0x3360a9(0x309)]((_0x5565d4,_0x3b7568,_0x8bc8e7)=>{const _0x41e9b7=_0x3360a9;return _0x5565d4[_0x3b7568[_0x41e9b7(0x1ed)]()]=(_0x448c29[_0x8bc8e7+0x1]||'')[_0x41e9b7(0x3c8)](/^"|"$/g,''),_0x5565d4;},{});}),_0x4e315c;},DataManager[_0x10cc9c(0x24b)]=function(){const _0x22aa2b=_0x10cc9c,_0x3fef9b=(VisuMZ[_0x22aa2b(0x37b)]['LocalizationType']??'tsv')[_0x22aa2b(0x296)]();let _0x1c9f61='';_0x1c9f61+=_0x22aa2b(0x275),_0x1c9f61+=_0x22aa2b(0xeb),_0x1c9f61=_0x1c9f61['format'](_0x3fef9b);if(confirm(_0x1c9f61)){if(Utils[_0x22aa2b(0x2cd)]('test')){if(_0x3fef9b===_0x22aa2b(0xf4))_0x1c9f61=_0x22aa2b(0x218),_0x1c9f61=_0x1c9f61[_0x22aa2b(0x2d0)](_0x3fef9b),alert(_0x1c9f61),this[_0x22aa2b(0x14c)](),this['openLocalizationFolder']();else return this[_0x22aa2b(0x194)]();_0x1c9f61='';}else _0x1c9f61=_0x22aa2b(0x22e);}else _0x1c9f61=_0x22aa2b(0x16f);_0x1c9f61+=_0x22aa2b(0x9b),_0x1c9f61=_0x1c9f61[_0x22aa2b(0x2d0)](_0x3fef9b),alert(_0x1c9f61),SceneManager[_0x22aa2b(0x124)]();},DataManager[_0x10cc9c(0x194)]=function(){const _0x33a129=_0x10cc9c,_0x481ba4=VisuMZ[_0x33a129(0x37b)]['Settings'][_0x33a129(0x41b)],_0x2b98dd=_0x481ba4[_0x33a129(0x9c)]??_0x33a129(0x24c),_0x22514a=new XMLHttpRequest(),_0x31ba87=_0x33a129(0x190)+_0x2b98dd;_0x22514a[_0x33a129(0x17b)](_0x33a129(0xdb),_0x31ba87),_0x22514a[_0x33a129(0xd7)]('application/csv'),_0x22514a[_0x33a129(0x43e)]=()=>this[_0x33a129(0x354)](_0x22514a),_0x22514a[_0x33a129(0xd5)]=()=>this[_0x33a129(0x3bf)](),_0x22514a[_0x33a129(0x3ee)]();},DataManager[_0x10cc9c(0x354)]=function(_0x201706){const _0x81b667=_0x10cc9c,_0xa65ff0=VisuMZ[_0x81b667(0x37b)][_0x81b667(0x10c)]['Localization'],_0x5b5e03=_0xa65ff0['CsvFilename']??_0x81b667(0x24c);let _0x488ed6=_0x81b667(0xd0)['format'](_0x5b5e03);_0x488ed6+=_0x81b667(0x316),_0x488ed6+=_0x81b667(0x446),confirm(_0x488ed6)?this[_0x81b667(0x131)](_0x201706):this[_0x81b667(0x3bf)]();},DataManager[_0x10cc9c(0x131)]=function(_0x30307c){const _0x58bb76=_0x10cc9c;if(_0x30307c[_0x58bb76(0x175)]>=0x190)return;const _0x450fe4=_0x30307c[_0x58bb76(0x1a1)],_0x524269=_0x450fe4[_0x58bb76(0x3c8)](/\;/gi,'\x09'),_0x447996=VisuMZ[_0x58bb76(0x37b)][_0x58bb76(0x10c)]['Localization'],_0x327366=_0x447996[_0x58bb76(0x28f)]||_0x58bb76(0x24d),_0x17bc94=require(_0x58bb76(0x10e)),_0x279b5b=_0x17bc94['dirname'](process[_0x58bb76(0xfe)]['filename']),_0x22682d=_0x17bc94[_0x58bb76(0x421)](_0x279b5b,'data/'),_0x91fc55=_0x22682d+_0x327366,_0x37901d=require('fs');_0x37901d[_0x58bb76(0x19e)](_0x91fc55,_0x524269);let _0x51443d='TSV\x20file\x20is\x20now\x20created\x20and\x20stored\x20in\x20data\x20folder.';alert(_0x51443d),_0x51443d=_0x58bb76(0x9b),alert(_0x51443d),SceneManager[_0x58bb76(0x124)]();},DataManager[_0x10cc9c(0x3bf)]=function(){const _0x1f5169=_0x10cc9c;let _0x2aaa85=_0x1f5169(0x2fa);alert(_0x2aaa85),this[_0x1f5169(0x14c)](),this[_0x1f5169(0x128)](),_0x2aaa85='Please\x20restart\x20the\x20game.',alert(_0x2aaa85),SceneManager[_0x1f5169(0x124)]();},DataManager[_0x10cc9c(0x14c)]=function(){const _0x44f2a1=_0x10cc9c,_0x3bb111=['Key','English',_0x44f2a1(0x445),'Chinese(Simplified)','Chinese(Traditional)',_0x44f2a1(0x1bf),_0x44f2a1(0x44a),'Dutch','Finnish',_0x44f2a1(0x21d),_0x44f2a1(0x16c),_0x44f2a1(0x1dc),_0x44f2a1(0x2aa),_0x44f2a1(0x1e9),'Indonesian',_0x44f2a1(0x108),_0x44f2a1(0x297),'Korean',_0x44f2a1(0x1ba),_0x44f2a1(0x356),'Portuguese',_0x44f2a1(0x143),'Russian','Slovak',_0x44f2a1(0x239),_0x44f2a1(0x2b0),_0x44f2a1(0x3ef),_0x44f2a1(0x374),_0x44f2a1(0xd4)],_0x193dea=[_0x44f2a1(0x384),_0x44f2a1(0x142),_0x44f2a1(0x3cd),'你好','你好',_0x44f2a1(0x29e),_0x44f2a1(0x11d),_0x44f2a1(0x169),'Hei',_0x44f2a1(0x241),_0x44f2a1(0x169),_0x44f2a1(0x20f),'नमस्ते',_0x44f2a1(0xfd),'Halo',_0x44f2a1(0x409),_0x44f2a1(0x256),_0x44f2a1(0x1a5),_0x44f2a1(0x32b),_0x44f2a1(0x20c),_0x44f2a1(0x432),'Salut','Привет',_0x44f2a1(0x29e),_0x44f2a1(0x90),_0x44f2a1(0x11d),_0x44f2a1(0x367),_0x44f2a1(0x454),_0x44f2a1(0x212)],_0x490305=['Farewell',_0x44f2a1(0x330),_0x44f2a1(0x97),'再见','再見',_0x44f2a1(0x38f),'Farvel','Tot\x20ziens',_0x44f2a1(0xb6),'Au\x20revoir',_0x44f2a1(0x15a),_0x44f2a1(0xf1),_0x44f2a1(0x1d3),_0x44f2a1(0x18f),'Selamat\x20tinggal',_0x44f2a1(0x232),_0x44f2a1(0xb3),'안녕히\x20가세요',_0x44f2a1(0x2bb),'Do\x20widzenia',_0x44f2a1(0x249),_0x44f2a1(0x447),_0x44f2a1(0x3dd),_0x44f2a1(0x466),_0x44f2a1(0x9f),_0x44f2a1(0x2e6),_0x44f2a1(0x1e7),_0x44f2a1(0x1c1),_0x44f2a1(0x21e)],_0x51de4b=[_0x44f2a1(0xef),_0x44f2a1(0xef),_0x44f2a1(0x204),'哇','哇','Ó',_0x44f2a1(0xef),'Wauw',_0x44f2a1(0xdc),_0x44f2a1(0x2ea),_0x44f2a1(0xef),_0x44f2a1(0x12a),_0x44f2a1(0x394),_0x44f2a1(0x3a7),_0x44f2a1(0x431),_0x44f2a1(0xef),'ワオ','와우','Oi','O','Uau',_0x44f2a1(0x311),_0x44f2a1(0x396),'Ó','Guau','Oj',_0x44f2a1(0x3cf),_0x44f2a1(0x1cd),'Vay'],_0x4c697b=[_0x3bb111,_0x193dea,_0x490305,_0x51de4b],_0x17d8e4=VisuMZ[_0x44f2a1(0x37b)][_0x44f2a1(0x27f)]??_0x44f2a1(0x2ce),_0x19ae85=_0x17d8e4===_0x44f2a1(0x170)?';':'\x09',_0xec84a1=_0x4c697b['map'](_0x15307b=>_0x15307b['join'](_0x19ae85))[_0x44f2a1(0x421)]('\x0a'),_0x207078=VisuMZ[_0x44f2a1(0x37b)][_0x44f2a1(0x10c)][_0x44f2a1(0x41b)];let _0xc1c5d8='';if(_0x17d8e4==='csv')_0xc1c5d8=_0x207078[_0x44f2a1(0x9c)]||_0x44f2a1(0x24c);if(_0x17d8e4===_0x44f2a1(0x2ce))_0xc1c5d8=_0x207078[_0x44f2a1(0x28f)]||_0x44f2a1(0x24d);const _0x56c09b=require(_0x44f2a1(0x10e)),_0x2c54c7=_0x56c09b[_0x44f2a1(0x254)](process[_0x44f2a1(0xfe)][_0x44f2a1(0x3bc)]),_0x5d9e5f=_0x56c09b[_0x44f2a1(0x421)](_0x2c54c7,_0x44f2a1(0x190)),_0x55a062=_0x5d9e5f+_0xc1c5d8,_0x262881=require('fs');return _0x262881[_0x44f2a1(0x19e)](_0x55a062,_0xec84a1),_0x55a062;},DataManager['openLocalizationFolder']=function(){const _0x20f1a6=_0x10cc9c,{exec:_0x395026}=require(_0x20f1a6(0x1f8));_0x395026(_0x20f1a6(0x2bc)),_0x395026(_0x20f1a6(0xc9));},VisuMZ[_0x10cc9c(0x37b)]['ImageManager_loadBitmap']=ImageManager[_0x10cc9c(0x291)],ImageManager[_0x10cc9c(0x291)]=function(_0x5ea411,_0x2297a0){const _0xfb18ac=_0x10cc9c;if(ConfigManager[_0xfb18ac(0x248)]!==undefined){const _0x966936=VisuMZ['MessageCore']['Settings']['Localization']||{},_0x2c87fe=_0x966936[_0xfb18ac(0x397)]||_0xfb18ac(0x25d),_0x46a787=VisuMZ[_0xfb18ac(0x37b)]['Settings']['LanguageImages']||{},_0x3409d6=ConfigManager[_0xfb18ac(0x248)]||_0x2c87fe;if(_0x3409d6===_0x2c87fe&&!_0x46a787[_0xfb18ac(0x281)]){}else{const _0x2f3955=_0x46a787[_0x3409d6]||_0xfb18ac(0x130);_0x5ea411&&_0x5ea411[_0xfb18ac(0x306)](/\[XX\]/g)&&console[_0xfb18ac(0x156)](_0x5ea411,_0x2297a0),_0x2297a0&&_0x2297a0[_0xfb18ac(0x306)](/\[XX\]/g)&&(_0x2297a0=_0x2297a0[_0xfb18ac(0x3c8)](/\[XX\]/g,_0x2f3955));}}return VisuMZ[_0xfb18ac(0x37b)]['ImageManager_loadBitmap'][_0xfb18ac(0x1bc)](this,_0x5ea411,_0x2297a0);},SceneManager[_0x10cc9c(0x3f6)]=function(){const _0x251cf1=_0x10cc9c;return this[_0x251cf1(0x30f)]&&this[_0x251cf1(0x30f)][_0x251cf1(0x327)]===Scene_Battle;},SceneManager[_0x10cc9c(0x3e6)]=function(){const _0x3f0ca6=_0x10cc9c;return this[_0x3f0ca6(0x30f)]&&this[_0x3f0ca6(0x30f)][_0x3f0ca6(0x327)]===Scene_Map;},ConfigManager[_0x10cc9c(0x248)]=VisuMZ['MessageCore'][_0x10cc9c(0x10c)]['Localization']['DefaultLocale']||_0x10cc9c(0x25d),ConfigManager[_0x10cc9c(0x1b7)]=VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x10c)]['TextSpeed'][_0x10cc9c(0x265)],VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x2f9)]=ConfigManager[_0x10cc9c(0x40a)],ConfigManager[_0x10cc9c(0x40a)]=function(){const _0x2a1b17=_0x10cc9c,_0x57c130=VisuMZ[_0x2a1b17(0x37b)][_0x2a1b17(0x2f9)]['call'](this);return TextManager['isVisuMzLocalizationEnabled']()&&(_0x57c130[_0x2a1b17(0x248)]=this[_0x2a1b17(0x248)]),_0x57c130['textSpeed']=this[_0x2a1b17(0x1b7)],_0x57c130;},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x277)]=ConfigManager[_0x10cc9c(0x14e)],ConfigManager['applyData']=function(_0x416299){const _0x6967d2=_0x10cc9c;VisuMZ[_0x6967d2(0x37b)]['ConfigManager_applyData']['call'](this,_0x416299),TextManager[_0x6967d2(0x438)]()&&('textLocale'in _0x416299?this[_0x6967d2(0x248)]=String(_0x416299[_0x6967d2(0x248)]):this[_0x6967d2(0x248)]=VisuMZ[_0x6967d2(0x37b)][_0x6967d2(0x10c)][_0x6967d2(0x41b)][_0x6967d2(0x397)]||'English'),_0x6967d2(0x1b7)in _0x416299?this[_0x6967d2(0x1b7)]=Number(_0x416299[_0x6967d2(0x1b7)])['clamp'](0x1,0xb):this[_0x6967d2(0x1b7)]=VisuMZ[_0x6967d2(0x37b)][_0x6967d2(0x10c)][_0x6967d2(0x1eb)][_0x6967d2(0x265)];},TextManager[_0x10cc9c(0x1f7)]=VisuMZ['MessageCore'][_0x10cc9c(0x10c)][_0x10cc9c(0x41b)]['Name'],TextManager[_0x10cc9c(0x191)]=VisuMZ['MessageCore'][_0x10cc9c(0x10c)][_0x10cc9c(0x1eb)][_0x10cc9c(0x2fd)],TextManager[_0x10cc9c(0x121)]=VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x10c)]['TextSpeed'][_0x10cc9c(0x22f)],VisuMZ['MessageCore'][_0x10cc9c(0x36d)]=TextManager[_0x10cc9c(0x336)],TextManager['message']=function(_0x502158){const _0x22cfb0=_0x10cc9c,_0xe9c0e9=[_0x22cfb0(0x3d9),_0x22cfb0(0x3a3),'preemptive','surprise',_0x22cfb0(0x206),'defeat',_0x22cfb0(0x2af),'obtainExp',_0x22cfb0(0x24a),_0x22cfb0(0x2fb)];let _0x5591ce=VisuMZ[_0x22cfb0(0x37b)]['TextManager_message'][_0x22cfb0(0x1bc)](this,_0x502158);return _0xe9c0e9[_0x22cfb0(0x100)](_0x502158)&&(_0x5591ce=_0x22cfb0(0x337)+_0x5591ce),_0x5591ce;},TextManager[_0x10cc9c(0x438)]=function(){const _0xe31b75=_0x10cc9c;return VisuMZ[_0xe31b75(0x37b)][_0xe31b75(0x10c)][_0xe31b75(0x41b)][_0xe31b75(0x3fe)];},TextManager[_0x10cc9c(0x44c)]=function(_0x3196e6){const _0x5e8c86=_0x10cc9c;if(!this['isVisuMzLocalizationEnabled']())return _0x3196e6;return _0x3196e6=String(_0x3196e6)[_0x5e8c86(0x3c8)](/\$(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x4a3a9e,_0x58787e)=>this[_0x5e8c86(0x20d)](String(_0x58787e))),_0x3196e6=String(_0x3196e6)[_0x5e8c86(0x3c8)](/\\(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x312978,_0x3c16d6)=>this['getLocalizedText'](String(_0x3c16d6))),_0x3196e6=String(_0x3196e6)['replace'](/\x1b(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x5bb9eb,_0x20e9dd)=>this[_0x5e8c86(0x20d)](String(_0x20e9dd))),_0x3196e6;},VisuMZ['MessageCore'][_0x10cc9c(0x10f)]=Bitmap[_0x10cc9c(0x3be)][_0x10cc9c(0x41c)],Bitmap['prototype'][_0x10cc9c(0x41c)]=function(_0x66948e){const _0x31aad2=_0x10cc9c;return _0x66948e=TextManager[_0x31aad2(0x44c)](_0x66948e),VisuMZ[_0x31aad2(0x37b)][_0x31aad2(0x10f)]['call'](this,_0x66948e);},TextManager[_0x10cc9c(0x20d)]=function(_0x1eab76){const _0x316e21=_0x10cc9c;if(!$dataLocalization)return'';const _0x310097=$dataLocalization[_0x1eab76[_0x316e21(0x193)]()['trim']()];if(!_0x310097)return;const _0x473719=ConfigManager[_0x316e21(0x248)]||_0x316e21(0x25d);let _0x1538b0=_0x310097[_0x473719]||_0x316e21(0x2d2);return _0x1538b0=_0x1538b0[_0x316e21(0x3c8)](/\\/g,'\x1b'),_0x1538b0=_0x1538b0[_0x316e21(0x3c8)](/<SEMI(?:|-COLON|COLON)>/gi,';'),_0x1538b0;},TextManager[_0x10cc9c(0x3a0)]=function(_0x1f8360){const _0xce38f7=_0x10cc9c;return VisuMZ[_0xce38f7(0x37b)]['Settings'][_0xce38f7(0x41b)][_0x1f8360]||'';},TextManager[_0x10cc9c(0x19b)]=function(){const _0x15fd30=_0x10cc9c,_0x28f25f=ConfigManager[_0x15fd30(0x248)]||'English';return this['getLanguageName'](_0x28f25f);},TextManager['getLanguageAt']=function(_0x3cacda){const _0x51abeb=_0x10cc9c,_0x26f036=VisuMZ[_0x51abeb(0x37b)][_0x51abeb(0x10c)]['Localization'][_0x51abeb(0x88)]||[];let _0x592fc5=_0x26f036['indexOf'](ConfigManager[_0x51abeb(0x248)]||_0x51abeb(0x25d));_0x592fc5+=_0x3cacda;const _0x66e500=_0x26f036[_0x592fc5]||'';return this[_0x51abeb(0x3a0)](_0x66e500);},VisuMZ['MessageCore']['Game_System_mainFontFace']=Game_System[_0x10cc9c(0x3be)][_0x10cc9c(0x293)],Game_System['prototype'][_0x10cc9c(0x293)]=function(){const _0x4b5757=_0x10cc9c;let _0x5acbcf=VisuMZ[_0x4b5757(0x37b)]['Game_System_mainFontFace'][_0x4b5757(0x1bc)](this);if(ConfigManager&&ConfigManager[_0x4b5757(0x14d)]!==undefined&&ConfigManager[_0x4b5757(0x14d)]>0x0)return _0x5acbcf;else{const _0x3bac06=ConfigManager[_0x4b5757(0x248)]||_0x4b5757(0x25d),_0x433b92=VisuMZ[_0x4b5757(0x37b)][_0x4b5757(0x10c)][_0x4b5757(0x159)];return _0x433b92[_0x3bac06]!==undefined&&(_0x5acbcf=_0x433b92[_0x3bac06]+',\x20'+$dataSystem[_0x4b5757(0x17d)][_0x4b5757(0x33a)]),_0x5acbcf;}},VisuMZ['MessageCore'][_0x10cc9c(0x152)]=Window_Command['prototype'][_0x10cc9c(0x422)],Window_Command['prototype']['addCommand']=function(_0x100d18,_0x585507,_0x101f12,_0xd463ae){const _0x25f41b=_0x10cc9c;if(TextManager['parseLocalizedText']&&TextManager[_0x25f41b(0x438)]()){const _0x1c9b8d=String(_0x100d18)[_0x25f41b(0x193)]()[_0x25f41b(0x1ed)]();if($dataLocalization[_0x1c9b8d]&&_0x1c9b8d[_0x25f41b(0x118)]>0x0){const _0x2168d9=ConfigManager[_0x25f41b(0x248)]||_0x25f41b(0x25d);_0x100d18=$dataLocalization[_0x1c9b8d][_0x2168d9]||_0x25f41b(0x2d2);}}VisuMZ['MessageCore'][_0x25f41b(0x152)][_0x25f41b(0x1bc)](this,_0x100d18,_0x585507,_0x101f12,_0xd463ae);},Window_StatusBase['prototype'][_0x10cc9c(0x41f)]=function(_0x3a8129,_0x39d275){const _0x1707be=_0x10cc9c,_0x31d0d6=_0x3a8129[_0x1707be(0x34a)]();let _0x541d31=$dataSystem[_0x1707be(0x462)][_0x31d0d6[_0x39d275]];if(TextManager['parseLocalizedText']){const _0x204813=String(_0x541d31)[_0x1707be(0x193)]()[_0x1707be(0x1ed)]();if(TextManager[_0x1707be(0x438)]()&&$dataLocalization[_0x204813]){const _0x49e3a5=ConfigManager['textLocale']||'English';_0x541d31=$dataLocalization[_0x204813][_0x49e3a5]||_0x1707be(0x2d2);}}return _0x541d31;},Game_Temp[_0x10cc9c(0x3be)][_0x10cc9c(0x151)]=function(_0x3654a0){const _0x450cb3=_0x10cc9c;this[_0x450cb3(0x2b1)]=_0x3654a0;},Game_Temp[_0x10cc9c(0x3be)][_0x10cc9c(0x2e9)]=function(){const _0x3869bb=_0x10cc9c;return this[_0x3869bb(0x2b1)];},VisuMZ['MessageCore'][_0x10cc9c(0x2b3)]=Game_Interpreter[_0x10cc9c(0x3be)][_0x10cc9c(0x1e5)],Game_Interpreter[_0x10cc9c(0x3be)][_0x10cc9c(0x1e5)]=function(_0x311695){const _0x8488fa=_0x10cc9c;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ[_0x8488fa(0x37b)][_0x8488fa(0x2b3)][_0x8488fa(0x1bc)](this,_0x311695);},VisuMZ['MessageCore'][_0x10cc9c(0x2de)]=Game_System[_0x10cc9c(0x3be)][_0x10cc9c(0x3f9)],Game_System[_0x10cc9c(0x3be)]['initialize']=function(){const _0x33205d=_0x10cc9c;VisuMZ[_0x33205d(0x37b)][_0x33205d(0x2de)][_0x33205d(0x1bc)](this),this[_0x33205d(0x467)]();},Game_System[_0x10cc9c(0x3be)]['initMessageCore']=function(){const _0xc34caf=_0x10cc9c,_0x2eeeb8=VisuMZ[_0xc34caf(0x37b)][_0xc34caf(0x10c)][_0xc34caf(0x3cb)],_0x4b2bdd=VisuMZ['MessageCore'][_0xc34caf(0x10c)][_0xc34caf(0x46a)];this[_0xc34caf(0x40d)]={'messageRows':_0x2eeeb8[_0xc34caf(0xb5)],'messageWidth':_0x2eeeb8[_0xc34caf(0x10b)],'messageWordWrap':_0x4b2bdd['MessageWindow'],'helpWordWrap':_0x4b2bdd[_0xc34caf(0x1d4)],'choiceLineHeight':_0x2eeeb8[_0xc34caf(0x1d9)],'choiceMinWidth':_0x2eeeb8['ChoiceWindowMinWidth']??0x60,'choiceRows':_0x2eeeb8[_0xc34caf(0x216)],'choiceCols':_0x2eeeb8[_0xc34caf(0x104)],'choiceTextAlign':_0x2eeeb8[_0xc34caf(0x40c)],'choiceDistance':0x0},this[_0xc34caf(0x186)]===undefined&&(this['_messageOffsetX']=_0x2eeeb8[_0xc34caf(0x401)],this[_0xc34caf(0x1c6)]=_0x2eeeb8['MsgWindowOffsetY']);},Game_System[_0x10cc9c(0x3be)][_0x10cc9c(0x29f)]=function(){const _0x3a081c=_0x10cc9c;if(this['_MessageCoreSettings']===undefined)this[_0x3a081c(0x467)]();if(this[_0x3a081c(0x40d)][_0x3a081c(0x31e)]===undefined)this[_0x3a081c(0x467)]();return this[_0x3a081c(0x40d)][_0x3a081c(0x31e)];},Game_System[_0x10cc9c(0x3be)]['setMessageWindowRows']=function(_0x547b33){const _0x58310e=_0x10cc9c;if(this[_0x58310e(0x40d)]===undefined)this[_0x58310e(0x467)]();if(this[_0x58310e(0x40d)][_0x58310e(0x31e)]===undefined)this['initMessageCore']();this['_MessageCoreSettings'][_0x58310e(0x31e)]=_0x547b33||0x1;},Game_System[_0x10cc9c(0x3be)][_0x10cc9c(0x3ed)]=function(){const _0x2518e1=_0x10cc9c;if(this[_0x2518e1(0x40d)]===undefined)this[_0x2518e1(0x467)]();if(this[_0x2518e1(0x40d)][_0x2518e1(0x2d7)]===undefined)this[_0x2518e1(0x467)]();return this[_0x2518e1(0x40d)][_0x2518e1(0x2d7)];},Game_System['prototype'][_0x10cc9c(0x82)]=function(_0x423e9b){const _0x5e011f=_0x10cc9c;if(this['_MessageCoreSettings']===undefined)this[_0x5e011f(0x467)]();if(this[_0x5e011f(0x40d)][_0x5e011f(0x2d7)]===undefined)this[_0x5e011f(0x467)]();_0x423e9b=Math[_0x5e011f(0xa3)](_0x423e9b);if(_0x423e9b%0x2!==0x0)_0x423e9b+=0x1;this[_0x5e011f(0x40d)]['messageWidth']=_0x423e9b||0x2;},Game_System[_0x10cc9c(0x3be)]['isMessageWindowWordWrap']=function(){const _0x1d6e0a=_0x10cc9c;if(this[_0x1d6e0a(0x40d)]===undefined)this[_0x1d6e0a(0x467)]();if(this[_0x1d6e0a(0x40d)][_0x1d6e0a(0x43a)]===undefined)this[_0x1d6e0a(0x467)]();return this[_0x1d6e0a(0x40d)]['messageWordWrap'];},Game_System[_0x10cc9c(0x3be)][_0x10cc9c(0x400)]=function(_0xb4c935){const _0x546249=_0x10cc9c;if(this[_0x546249(0x40d)]===undefined)this[_0x546249(0x467)]();if(this[_0x546249(0x40d)][_0x546249(0x43a)]===undefined)this[_0x546249(0x467)]();this['_MessageCoreSettings']['messageWordWrap']=_0xb4c935;},Game_System[_0x10cc9c(0x3be)][_0x10cc9c(0x2ec)]=function(){const _0x3392db=_0x10cc9c;if(this['_messageOffsetX']===undefined){const _0x338f22=VisuMZ[_0x3392db(0x37b)][_0x3392db(0x10c)][_0x3392db(0x3cb)];this[_0x3392db(0x186)]=_0x338f22[_0x3392db(0x401)],this['_messageOffsetY']=_0x338f22[_0x3392db(0xa2)];}return{'x':this[_0x3392db(0x186)]||0x0,'y':this[_0x3392db(0x1c6)]||0x0};},Game_System[_0x10cc9c(0x3be)][_0x10cc9c(0x13a)]=function(_0x12f971,_0x27b767){const _0x36b037=_0x10cc9c;if(this['_MessageCoreSettings']===undefined)this['initMessageCore']();this[_0x36b037(0x186)]=_0x12f971,this[_0x36b037(0x1c6)]=_0x27b767;},Game_System[_0x10cc9c(0x3be)]['isHelpWindowWordWrap']=function(){const _0x2dc6c9=_0x10cc9c;if(this[_0x2dc6c9(0x40d)]===undefined)this[_0x2dc6c9(0x467)]();if(this[_0x2dc6c9(0x40d)]['helpWordWrap']===undefined)this[_0x2dc6c9(0x467)]();return this['_MessageCoreSettings'][_0x2dc6c9(0x1b8)];},Game_System[_0x10cc9c(0x3be)][_0x10cc9c(0x361)]=function(_0x53fafa){const _0x1fa18c=_0x10cc9c;if(this[_0x1fa18c(0x40d)]===undefined)this[_0x1fa18c(0x467)]();if(this[_0x1fa18c(0x40d)][_0x1fa18c(0x1b8)]===undefined)this[_0x1fa18c(0x467)]();this['_MessageCoreSettings'][_0x1fa18c(0x1b8)]=_0x53fafa;},Game_System[_0x10cc9c(0x3be)]['getChoiceListLineHeight']=function(){const _0x24f8ad=_0x10cc9c;if(this['_MessageCoreSettings']===undefined)this[_0x24f8ad(0x467)]();if(this[_0x24f8ad(0x40d)]['choiceLineHeight']===undefined)this[_0x24f8ad(0x467)]();return this['_MessageCoreSettings']['choiceLineHeight'];},Game_System[_0x10cc9c(0x3be)]['setChoiceListLineHeight']=function(_0x5cc6df){const _0x23435e=_0x10cc9c;if(this[_0x23435e(0x40d)]===undefined)this[_0x23435e(0x467)]();if(this[_0x23435e(0x40d)]['choiceLineHeight']===undefined)this[_0x23435e(0x467)]();this[_0x23435e(0x40d)]['choiceLineHeight']=_0x5cc6df||0x1;},Game_System[_0x10cc9c(0x3be)][_0x10cc9c(0x34c)]=function(){const _0x2c36b7=_0x10cc9c;if(this[_0x2c36b7(0x40d)]===undefined)this['initMessageCore']();return this[_0x2c36b7(0x40d)][_0x2c36b7(0x3c0)]??0x60;},Game_System['prototype']['setChoiceListMinChoiceWidth']=function(_0x4974cc){const _0x1b4cc7=_0x10cc9c;if(this[_0x1b4cc7(0x40d)]===undefined)this[_0x1b4cc7(0x467)]();this[_0x1b4cc7(0x40d)][_0x1b4cc7(0x3c0)]=_0x4974cc||0x0;},Game_System[_0x10cc9c(0x3be)]['getChoiceListMaxRows']=function(){const _0x5b1378=_0x10cc9c;if(this[_0x5b1378(0x40d)]===undefined)this[_0x5b1378(0x467)]();if(this[_0x5b1378(0x40d)][_0x5b1378(0x46f)]===undefined)this['initMessageCore']();return this[_0x5b1378(0x40d)][_0x5b1378(0x46f)];},Game_System[_0x10cc9c(0x3be)][_0x10cc9c(0x393)]=function(_0x52ce31){const _0x1337ae=_0x10cc9c;if(this[_0x1337ae(0x40d)]===undefined)this['initMessageCore']();if(this['_MessageCoreSettings'][_0x1337ae(0x46f)]===undefined)this[_0x1337ae(0x467)]();this[_0x1337ae(0x40d)][_0x1337ae(0x46f)]=_0x52ce31||0x1;},Game_System[_0x10cc9c(0x3be)][_0x10cc9c(0x11a)]=function(){const _0x532edd=_0x10cc9c;if(this[_0x532edd(0x40d)]===undefined)this[_0x532edd(0x467)]();if(this[_0x532edd(0x40d)][_0x532edd(0x318)]===undefined)this['initMessageCore']();return this['_MessageCoreSettings']['choiceCols'];},Game_System[_0x10cc9c(0x3be)]['setChoiceListMaxColumns']=function(_0x373f04){const _0x1c48e9=_0x10cc9c;if(this['_MessageCoreSettings']===undefined)this[_0x1c48e9(0x467)]();if(this['_MessageCoreSettings'][_0x1c48e9(0x318)]===undefined)this['initMessageCore']();this[_0x1c48e9(0x40d)]['choiceCols']=_0x373f04||0x1;},Game_System[_0x10cc9c(0x3be)]['getChoiceListTextAlign']=function(){const _0x2b4cb4=_0x10cc9c;if(this[_0x2b4cb4(0x40d)]===undefined)this[_0x2b4cb4(0x467)]();if(this['_MessageCoreSettings'][_0x2b4cb4(0x3b9)]===undefined)this[_0x2b4cb4(0x467)]();return this[_0x2b4cb4(0x40d)][_0x2b4cb4(0x3b9)];},Game_System['prototype'][_0x10cc9c(0x20a)]=function(_0x223478){const _0x5e88ba=_0x10cc9c;if(this[_0x5e88ba(0x40d)]===undefined)this[_0x5e88ba(0x467)]();if(this[_0x5e88ba(0x40d)]['choiceTextAlign']===undefined)this[_0x5e88ba(0x467)]();this[_0x5e88ba(0x40d)]['choiceTextAlign']=_0x223478[_0x5e88ba(0x193)]();},Game_System[_0x10cc9c(0x3be)][_0x10cc9c(0x176)]=function(){const _0x397976=_0x10cc9c;if(this[_0x397976(0x40d)]===undefined)this['initMessageCore']();return this[_0x397976(0x40d)]['choiceDistance']||0x0;},Game_System[_0x10cc9c(0x3be)][_0x10cc9c(0x433)]=function(_0x4a1bbf){const _0x52b3e0=_0x10cc9c;if(this[_0x52b3e0(0x40d)]===undefined)this['initMessageCore']();this[_0x52b3e0(0x40d)]['choiceDistance']=_0x4a1bbf||0x0;},Game_Message[_0x10cc9c(0x3be)]['setWeaponChoice']=function(_0xbb0b41,_0x506ab0){const _0x5350ed=_0x10cc9c;this[_0x5350ed(0x37c)]=_0xbb0b41,this['_itemChoiceItypeId']='weapon',this[_0x5350ed(0x16d)]=_0x506ab0,this[_0x5350ed(0x192)]=0x0;},Game_Message['prototype']['itemChoiceWtypeId']=function(){const _0x2c0f0f=_0x10cc9c;return this[_0x2c0f0f(0x16d)]||0x0;},Game_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x41a)]=function(_0x44513f,_0x587618,_0x28487c){const _0x270771=_0x10cc9c;this[_0x270771(0x37c)]=_0x44513f,this['_itemChoiceItypeId']=_0x270771(0x2c9),this['_itemChoiceAtypeId']=_0x587618,this['_itemChoiceEtypeId']=_0x28487c;},Game_Message['prototype']['itemChoiceAtypeId']=function(){return this['_itemChoiceAtypeId']||0x0;},Game_Message[_0x10cc9c(0x3be)]['itemChoiceEtypeId']=function(){const _0x766854=_0x10cc9c;return this[_0x766854(0x192)]||0x0;},Game_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x392)]=function(_0x5a1dcd,_0x2ecd57,_0x445766){const _0x2ed44b=_0x10cc9c;this['_itemChoiceVariableId']=_0x5a1dcd,this[_0x2ed44b(0x443)]=_0x2ed44b(0x173),this[_0x2ed44b(0xf6)]=_0x2ecd57,this[_0x2ed44b(0x38a)]=_0x445766;},Game_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x14a)]=function(){const _0x1c37be=_0x10cc9c;return this[_0x1c37be(0xf6)]||0x0;},Game_Message['prototype']['itemChoiceActor']=function(){const _0x268991=_0x10cc9c;return $gameActors[_0x268991(0x323)](this['itemChoiceActorId']())||$gameParty[_0x268991(0x389)]()||null;},Game_Message['prototype'][_0x10cc9c(0x2b6)]=function(){const _0x1865ae=_0x10cc9c;return this[_0x1865ae(0x38a)]||0x0;},VisuMZ[_0x10cc9c(0x37b)]['Game_Message_setChoices']=Game_Message[_0x10cc9c(0x3be)]['setChoices'],Game_Message[_0x10cc9c(0x3be)]['setChoices']=function(_0x4996ff,_0x2d8222,_0x156a0c){const _0x46f683=_0x10cc9c;this[_0x46f683(0x259)]=!![],VisuMZ['MessageCore']['Game_Message_setChoices'][_0x46f683(0x1bc)](this,_0x4996ff,_0x2d8222,_0x156a0c);},Game_Message['prototype']['setupShuffleChoices']=function(){const _0x1a8697=_0x10cc9c;this[_0x1a8697(0x259)]=![],this[_0x1a8697(0x2ed)]=[];const _0x3c4c4c=this[_0x1a8697(0x426)]['length'];this[_0x1a8697(0xa7)]=_0x3c4c4c;let _0x589456=![];for(let _0x3d9dd7=0x0;_0x3d9dd7<_0x3c4c4c;_0x3d9dd7++){let _0x427941=this[_0x1a8697(0x426)][_0x3d9dd7];_0x427941[_0x1a8697(0x306)](/<SHUFFLE>/gi)&&(_0x589456=!![],_0x427941=_0x427941[_0x1a8697(0x3c8)](/<SHUFFLE>/gi,'')),_0x427941[_0x1a8697(0x306)](/<SHUFFLE:[ ](\d+)>/gi)&&(_0x589456=!![],this[_0x1a8697(0xa7)]=Math['min'](Number(RegExp['$1']),this[_0x1a8697(0xa7)]),_0x427941=_0x427941[_0x1a8697(0x3c8)](/<SHUFFLE:[ ](\d+)>/gi,'')),_0x427941[_0x1a8697(0x306)](/<SHUFFLE: VAR[ ](\d+)>/gi)&&(_0x589456=!![],this[_0x1a8697(0xa7)]=Math[_0x1a8697(0x28d)]($gameVariables[_0x1a8697(0x1d8)](Number(RegExp['$1']))||0x1,this[_0x1a8697(0xa7)]),_0x427941=_0x427941[_0x1a8697(0x3c8)](/<SHUFFLE:[ ]VAR (\d+)>/gi,'')),this[_0x1a8697(0x2ed)]['push'](_0x3d9dd7),this['_choices'][_0x3d9dd7]=_0x427941;}if(_0x589456){this[_0x1a8697(0x2ed)]=VisuMZ['MessageCore'][_0x1a8697(0x427)](this[_0x1a8697(0x2ed)]);if(this['choiceCancelType']()!==-0x2)this[_0x1a8697(0x420)]=-0x1;}},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x427)]=function(_0x1ae48f){const _0x5e9f3d=_0x10cc9c;var _0x2d66e4,_0x418138,_0x5c7a2f;for(_0x5c7a2f=_0x1ae48f[_0x5e9f3d(0x118)]-0x1;_0x5c7a2f>0x0;_0x5c7a2f--){_0x2d66e4=Math['floor'](Math['random']()*(_0x5c7a2f+0x1)),_0x418138=_0x1ae48f[_0x5c7a2f],_0x1ae48f[_0x5c7a2f]=_0x1ae48f[_0x2d66e4],_0x1ae48f[_0x2d66e4]=_0x418138;}return _0x1ae48f;},Game_Message[_0x10cc9c(0x3be)]['choiceIndexArray']=function(){const _0x4cc8b5=_0x10cc9c;if(!this[_0x4cc8b5(0x2ed)])this['setupShuffleChoices']();return this[_0x4cc8b5(0x2ed)];},Game_Message[_0x10cc9c(0x3be)]['maxShuffleChoices']=function(){const _0x209fa9=_0x10cc9c;if(this['_maxShuffleChoices']===undefined)this[_0x209fa9(0x328)]();return this['_maxShuffleChoices'];},VisuMZ['MessageCore'][_0x10cc9c(0x1e8)]=Game_Screen[_0x10cc9c(0x3be)][_0x10cc9c(0x263)],Game_Screen[_0x10cc9c(0x3be)]['clearPictures']=function(){const _0x10ea7d=_0x10cc9c;VisuMZ['MessageCore'][_0x10ea7d(0x1e8)][_0x10ea7d(0x1bc)](this),this['clearAllPictureTexts']();},Game_Screen['prototype'][_0x10cc9c(0x15c)]=function(){const _0x4dd009=_0x10cc9c;this['_pictureText']=[],this[_0x4dd009(0x262)]=[],this[_0x4dd009(0x17a)]=[];},Game_Screen['prototype']['getPictureTextData']=function(_0x6cf507){const _0x3d9240=_0x10cc9c;if(this[_0x3d9240(0x359)]===undefined)this['clearAllPictureTexts']();const _0x5b3821=this[_0x3d9240(0x135)](_0x6cf507);return this['_pictureText'][_0x5b3821]=this[_0x3d9240(0x359)][_0x5b3821]||{},this['_pictureText'][_0x5b3821];},Game_Screen[_0x10cc9c(0x3be)][_0x10cc9c(0x250)]=function(_0x2e96e4,_0x27aade){const _0x57cbe6=_0x10cc9c;return _0x27aade=_0x27aade[_0x57cbe6(0x193)]()['trim'](),this['getPictureTextData'](_0x2e96e4)[_0x27aade]||'';},Game_Screen[_0x10cc9c(0x3be)][_0x10cc9c(0x179)]=function(_0x57fb0,_0x1585e1,_0x15b0f0){const _0x1aa848=_0x10cc9c;_0x15b0f0=_0x15b0f0[_0x1aa848(0x193)]()[_0x1aa848(0x1ed)](),this[_0x1aa848(0x378)](_0x57fb0)[_0x15b0f0]=_0x1585e1||'',this[_0x1aa848(0x30e)](_0x57fb0,!![]);},Game_Screen[_0x10cc9c(0x3be)][_0x10cc9c(0x1ff)]=function(_0x51a070){const _0x18f82b=_0x10cc9c;if(this[_0x18f82b(0x359)]===undefined)this['clearAllPictureTexts']();const _0x33fffc=this[_0x18f82b(0x135)](_0x51a070);this[_0x18f82b(0x359)][_0x33fffc]=null,this['requestPictureTextRefresh'](_0x51a070,!![]);},Game_Screen[_0x10cc9c(0x3be)][_0x10cc9c(0x1be)]=function(_0x384172){const _0x211e06=_0x10cc9c;if(this[_0x211e06(0x359)]===undefined)this[_0x211e06(0x15c)]();const _0x52a9ba=this[_0x211e06(0x135)](_0x384172);return this[_0x211e06(0x262)][_0x52a9ba]||0x0;},Game_Screen[_0x10cc9c(0x3be)]['setPictureTextBuffer']=function(_0x4024ad,_0x325ad3){const _0x419724=_0x10cc9c;if(this[_0x419724(0x359)]===undefined)this[_0x419724(0x15c)]();const _0x56c8eb=this['realPictureId'](_0x4024ad);this['_pictureTextBuffer'][_0x56c8eb]=Math['max'](0x0,_0x325ad3);},Game_Screen['prototype']['erasePictureTextBuffer']=function(_0x176ad7){const _0x558b7f=_0x10cc9c;if(this[_0x558b7f(0x359)]===undefined)this[_0x558b7f(0x15c)]();const _0x308f67=this['realPictureId'](_0x176ad7);this[_0x558b7f(0x262)][_0x308f67]=undefined;},VisuMZ['MessageCore'][_0x10cc9c(0x1a3)]=Game_Screen[_0x10cc9c(0x3be)][_0x10cc9c(0x2c3)],Game_Screen[_0x10cc9c(0x3be)]['erasePicture']=function(_0x1a4e2c){const _0x56bd37=_0x10cc9c;VisuMZ[_0x56bd37(0x37b)]['Game_Screen_erasePicture'][_0x56bd37(0x1bc)](this,_0x1a4e2c),this[_0x56bd37(0x1ff)](_0x1a4e2c),this[_0x56bd37(0x24f)](_0x1a4e2c),this[_0x56bd37(0x30e)](_0x1a4e2c,!![]);},Game_Screen['prototype'][_0x10cc9c(0x80)]=function(){const _0x2f41fe=_0x10cc9c;for(const _0xe56b92 of this[_0x2f41fe(0x122)]){if(_0xe56b92){let _0x297eab=this[_0x2f41fe(0x122)][_0x2f41fe(0x92)](_0xe56b92);this[_0x2f41fe(0x30e)](_0x297eab);}}},Game_Screen[_0x10cc9c(0x3be)][_0x10cc9c(0x30e)]=function(_0x37bb45,_0x177758){const _0x5d12a7=_0x10cc9c;this[_0x5d12a7(0x17a)]=this[_0x5d12a7(0x17a)]||[],(this[_0x5d12a7(0x23d)](_0x37bb45)||_0x177758)&&this[_0x5d12a7(0x17a)][_0x5d12a7(0x38b)](_0x37bb45);},Game_Screen[_0x10cc9c(0x3be)][_0x10cc9c(0x45f)]=function(_0x24392e){const _0x4f061b=_0x10cc9c;return this[_0x4f061b(0x17a)]=this[_0x4f061b(0x17a)]||[],this[_0x4f061b(0x17a)][_0x4f061b(0x100)](_0x24392e);},Game_Screen[_0x10cc9c(0x3be)][_0x10cc9c(0x1ab)]=function(_0x4cd356){const _0x886064=_0x10cc9c;this[_0x886064(0x17a)]=this[_0x886064(0x17a)]||[],this[_0x886064(0x17a)][_0x886064(0x2ad)](_0x4cd356);},Game_Screen[_0x10cc9c(0x3be)]['hasPictureText']=function(_0x4d9af9){const _0x18bfd8=_0x10cc9c,_0x56a2d5=[_0x18bfd8(0x83),'up','upperright',_0x18bfd8(0xb4),_0x18bfd8(0x35b),_0x18bfd8(0xa4),_0x18bfd8(0x81),_0x18bfd8(0x1b2),'lowerright'];return _0x56a2d5[_0x18bfd8(0x302)](_0x24ff45=>this[_0x18bfd8(0x250)](_0x4d9af9,_0x24ff45)!=='');},VisuMZ[_0x10cc9c(0x37b)]['Game_Party_initialize']=Game_Party['prototype'][_0x10cc9c(0x3f9)],Game_Party['prototype'][_0x10cc9c(0x3f9)]=function(){const _0x288993=_0x10cc9c;VisuMZ[_0x288993(0x37b)][_0x288993(0x453)][_0x288993(0x1bc)](this),this[_0x288993(0x467)]();},Game_Party['prototype']['initMessageCore']=function(){this['_lastGainedItemData']={'type':0x0,'id':0x0,'quantity':0x0};},Game_Party[_0x10cc9c(0x3be)][_0x10cc9c(0x440)]=function(){const _0x2678a5=_0x10cc9c;if(this[_0x2678a5(0x390)]===undefined)this[_0x2678a5(0x467)]();return this[_0x2678a5(0x390)];},Game_Party[_0x10cc9c(0x3be)][_0x10cc9c(0x46b)]=function(_0x2dd1ff,_0x7af328){const _0x258d32=_0x10cc9c;if(this[_0x258d32(0x390)]===undefined)this[_0x258d32(0x467)]();if(!_0x2dd1ff)return;if(DataManager['isItem'](_0x2dd1ff))this[_0x258d32(0x390)]['type']=0x0;else{if(DataManager['isWeapon'](_0x2dd1ff))this[_0x258d32(0x390)][_0x258d32(0x40f)]=0x1;else DataManager[_0x258d32(0x2d8)](_0x2dd1ff)&&(this[_0x258d32(0x390)]['type']=0x2);}this[_0x258d32(0x390)]['id']=_0x2dd1ff['id'],this[_0x258d32(0x390)][_0x258d32(0x2c7)]=_0x7af328;},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x399)]=Game_Party[_0x10cc9c(0x3be)][_0x10cc9c(0x87)],Game_Party[_0x10cc9c(0x3be)]['gainItem']=function(_0x27e48a,_0x14904b,_0x2e46d0){const _0x5b34d2=_0x10cc9c;VisuMZ[_0x5b34d2(0x37b)][_0x5b34d2(0x399)][_0x5b34d2(0x1bc)](this,_0x27e48a,_0x14904b,_0x2e46d0),_0x14904b>0x0&&this[_0x5b34d2(0x46b)](_0x27e48a,_0x14904b);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x198)]=Game_Map[_0x10cc9c(0x3be)]['initialize'],Game_Map['prototype'][_0x10cc9c(0x3f9)]=function(){const _0x4471f0=_0x10cc9c;VisuMZ[_0x4471f0(0x37b)][_0x4471f0(0x198)]['call'](this),this[_0x4471f0(0xd3)]=[];},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x295)]=Game_Map[_0x10cc9c(0x3be)][_0x10cc9c(0x93)],Game_Map[_0x10cc9c(0x3be)]['setupEvents']=function(){const _0xc62eea=_0x10cc9c;VisuMZ[_0xc62eea(0x37b)][_0xc62eea(0x295)][_0xc62eea(0x1bc)](this),this[_0xc62eea(0xd3)]=[];},VisuMZ[_0x10cc9c(0x37b)]['Game_Map_updateEvents']=Game_Map[_0x10cc9c(0x3be)][_0x10cc9c(0x10d)],Game_Map['prototype'][_0x10cc9c(0x10d)]=function(){const _0x40cacd=_0x10cc9c;VisuMZ[_0x40cacd(0x37b)][_0x40cacd(0x425)]['call'](this),this['updateMessageCommonEvents']();},Game_Map[_0x10cc9c(0x3be)][_0x10cc9c(0x46e)]=function(_0x2c79ac){const _0x1f782f=_0x10cc9c;if(!$dataCommonEvents[_0x2c79ac])return;this[_0x1f782f(0xd3)]=this[_0x1f782f(0xd3)]||[];const _0x26f1aa=this[_0x1f782f(0x1c3)][_0x1f782f(0xd2)],_0x245814=new Game_MessageCommonEvent(_0x2c79ac,_0x26f1aa);this[_0x1f782f(0xd3)]['push'](_0x245814);},Game_Map[_0x10cc9c(0x3be)]['updateMessageCommonEvents']=function(){const _0x1ba6f1=_0x10cc9c;this['_messageCommonEvents']=this[_0x1ba6f1(0xd3)]||[];for(const _0x30e46d of this['_messageCommonEvents']){!_0x30e46d[_0x1ba6f1(0x1c3)]?this['_messageCommonEvents']['remove'](_0x30e46d):_0x30e46d[_0x1ba6f1(0x2be)]();}},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x31d)]=Game_Map[_0x10cc9c(0x3be)][_0x10cc9c(0x448)],Game_Map[_0x10cc9c(0x3be)][_0x10cc9c(0x448)]=function(){const _0x1d7f47=_0x10cc9c;VisuMZ[_0x1d7f47(0x37b)][_0x1d7f47(0x31d)][_0x1d7f47(0x1bc)](this),$gameScreen[_0x1d7f47(0x80)]();},Game_Interpreter['MESSAGE_CORE_PLUGIN_NAME']=pluginData['name'],Game_Interpreter[_0x10cc9c(0x3be)]['command101']=function(_0x16ca52){const _0x953a0=_0x10cc9c;if($gameMessage[_0x953a0(0x89)]())return![];return this[_0x953a0(0x267)](_0x16ca52),this[_0x953a0(0x8b)](_0x16ca52),this[_0x953a0(0x29a)](_0x16ca52),this[_0x953a0(0x258)](_0x953a0(0x336)),!![];},Game_Interpreter['prototype'][_0x10cc9c(0x267)]=function(_0x50ba2c){const _0x2af0eb=_0x10cc9c;$gameMessage[_0x2af0eb(0x298)](_0x50ba2c[0x0],_0x50ba2c[0x1]),$gameMessage['setBackground'](_0x50ba2c[0x2]),$gameMessage[_0x2af0eb(0x3db)](_0x50ba2c[0x3]),$gameMessage[_0x2af0eb(0x23f)](_0x50ba2c[0x4]);},Game_Interpreter[_0x10cc9c(0x3be)][_0x10cc9c(0x8b)]=function(_0x5da6ad){const _0x286cde=_0x10cc9c;while(this[_0x286cde(0x150)]()){this['_index']++;if(this['currentCommand']()[_0x286cde(0x15e)]===0x191){let _0x405ab0=this[_0x286cde(0x1bb)]()[_0x286cde(0x30d)][0x0];_0x405ab0=VisuMZ['MessageCore']['ParseAddedText'](_0x405ab0),$gameMessage[_0x286cde(0x32f)](_0x405ab0);}if(this['isBreakShowTextCommands']())break;}},Game_Interpreter[_0x10cc9c(0x3be)][_0x10cc9c(0x150)]=function(){const _0x5ea0bf=_0x10cc9c;return this['nextEventCode']()===0x65&&$gameSystem[_0x5ea0bf(0x29f)]()>0x4?!![]:this[_0x5ea0bf(0x388)]()===0x191;},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x12f)]=function(_0x57ede4){const _0x5cca73=_0x10cc9c,_0x4010ee=VisuMZ['MessageCore'][_0x5cca73(0x10c)][_0x5cca73(0x3cb)];return _0x57ede4=(_0x4010ee[_0x5cca73(0x1d2)]||'')+_0x57ede4+(_0x4010ee['EachMessageEnd']||''),_0x57ede4=_0x57ede4[_0x5cca73(0x3c8)](/<(?:NEXT PAGE|NEXTPAGE)>/gi,''),_0x57ede4=_0x57ede4['replace'](/<(?:RNG|RAND|RANDOM)>(.*?)<\/(?:RNG|RAND|RANDOM)>/gi,(_0x3599d4,_0x4abb2c)=>this[_0x5cca73(0x42e)](_0x4abb2c)),_0x57ede4;},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x42e)]=function(_0x145fb1){const _0x5da98c=_0x10cc9c,_0x168249=_0x145fb1['split']('|')['map'](_0xea3840=>_0xea3840[_0x5da98c(0x1ed)]())[_0x5da98c(0x2ad)]('')[_0x5da98c(0x2ad)](null);return _0x168249[Math['randomInt'](_0x168249[_0x5da98c(0x118)])];},Game_Interpreter['prototype']['isBreakShowTextCommands']=function(){const _0x37591a=_0x10cc9c;if(this[_0x37591a(0x1bb)]()&&this[_0x37591a(0x1bb)]()['parameters'][0x0][_0x37591a(0x306)](/<(?:NEXT PAGE|NEXTPAGE)>/gi))return!![];return $gameMessage['_texts'][_0x37591a(0x118)]>=$gameSystem[_0x37591a(0x29f)]()&&this[_0x37591a(0x388)]()!==0x191;},Game_Interpreter[_0x10cc9c(0x3be)]['prepareShowTextFollowups']=function(_0x39713f){const _0x5d0620=_0x10cc9c;switch(this[_0x5d0620(0x388)]()){case 0x66:this[_0x5d0620(0x429)]++,this[_0x5d0620(0x21f)](this['currentCommand']()['parameters']);break;case 0x67:this['_index']++,this[_0x5d0620(0x404)](this[_0x5d0620(0x1bb)]()[_0x5d0620(0x30d)]);break;case 0x68:this[_0x5d0620(0x429)]++,this['setupItemChoice'](this[_0x5d0620(0x1bb)]()[_0x5d0620(0x30d)]);break;case 0x165:const _0x4ac9ae=this['_list'][this[_0x5d0620(0x429)]+0x1],_0x4e9e5e=_0x4ac9ae[_0x5d0620(0x30d)];_0x4e9e5e[0x0]===Game_Interpreter['MESSAGE_CORE_PLUGIN_NAME']&&this[_0x5d0620(0x134)](_0x4e9e5e);break;}},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x3ad)]=Game_Interpreter[_0x10cc9c(0x3be)][_0x10cc9c(0x21f)],Game_Interpreter['prototype'][_0x10cc9c(0x21f)]=function(_0x3d3282){const _0x13072e=_0x10cc9c;_0x3d3282=this['addContinuousShowChoices'](),VisuMZ['MessageCore']['Game_Interpreter_setupChoices']['call'](this,_0x3d3282),$gameMessage[_0x13072e(0x328)]();},Game_Interpreter[_0x10cc9c(0x3be)][_0x10cc9c(0x44b)]=function(){const _0x52abfd=_0x10cc9c,_0x1e240b=this[_0x52abfd(0x429)],_0x42ff57=[];let _0x2803b9=0x0;this['_index']++;while(this[_0x52abfd(0x429)]<this[_0x52abfd(0x39c)]['length']){if(this[_0x52abfd(0x1bb)]()['indent']===this[_0x52abfd(0x226)]){if(this[_0x52abfd(0x1bb)]()[_0x52abfd(0x15e)]===0x194&&this[_0x52abfd(0x388)]()!==0x66)break;else{if(this[_0x52abfd(0x1bb)]()[_0x52abfd(0x15e)]===0x66)this['adjustShowChoiceExtension'](_0x2803b9,this[_0x52abfd(0x1bb)](),_0x1e240b),this['_index']-=0x2;else this['currentCommand']()['code']===0x192&&(this[_0x52abfd(0x1bb)]()[_0x52abfd(0x30d)][0x0]=_0x2803b9,_0x2803b9++);}}this[_0x52abfd(0x429)]++;}return this[_0x52abfd(0x429)]=_0x1e240b,this[_0x52abfd(0x1bb)]()[_0x52abfd(0x30d)];},Game_Interpreter['prototype'][_0x10cc9c(0x469)]=function(_0x432043,_0x318e66,_0x2f95c6){const _0x3beffe=_0x10cc9c;this[_0x3beffe(0x1f5)](_0x432043,_0x318e66,_0x2f95c6),this[_0x3beffe(0x1a7)](_0x432043,_0x318e66,_0x2f95c6),this[_0x3beffe(0x436)](_0x318e66,_0x2f95c6);},Game_Interpreter[_0x10cc9c(0x3be)][_0x10cc9c(0x1f5)]=function(_0x5c70ca,_0xaaeb7,_0x4ca641){const _0xa342ce=_0x10cc9c;if(_0xaaeb7[_0xa342ce(0x30d)][0x2]<0x0)return;const _0x41dabf=_0xaaeb7[_0xa342ce(0x30d)][0x2]+_0x5c70ca;this['_list'][_0x4ca641][_0xa342ce(0x30d)][0x2]=_0x41dabf;},Game_Interpreter[_0x10cc9c(0x3be)][_0x10cc9c(0x1a7)]=function(_0xcc4f62,_0x1695db,_0x544482){const _0x31a1b1=_0x10cc9c;if(_0x1695db[_0x31a1b1(0x30d)][0x1]>=0x0){var _0x3c9aaa=_0x1695db[_0x31a1b1(0x30d)][0x1]+_0xcc4f62;this[_0x31a1b1(0x39c)][_0x544482][_0x31a1b1(0x30d)][0x1]=_0x3c9aaa;}else _0x1695db[_0x31a1b1(0x30d)][0x1]===-0x2&&(this[_0x31a1b1(0x39c)][_0x544482]['parameters'][0x1]=_0x1695db[_0x31a1b1(0x30d)][0x1]);},Game_Interpreter[_0x10cc9c(0x3be)][_0x10cc9c(0x436)]=function(_0x450a1a,_0x493240){const _0x251d2a=_0x10cc9c;for(const _0x51c92c of _0x450a1a['parameters'][0x0]){this[_0x251d2a(0x39c)][_0x493240][_0x251d2a(0x30d)][0x0][_0x251d2a(0x38b)](_0x51c92c);}this['_list'][_0x251d2a(0x3e4)](this[_0x251d2a(0x429)]-0x1,0x2);},Game_Interpreter['prototype'][_0x10cc9c(0x134)]=function(_0x4500f4){const _0x159679=_0x10cc9c,_0x4d052c=_0x4500f4[0x1];if(_0x4d052c==='SelectWeapon')this['_index']++,this['setWeaponChoice'](_0x4500f4);else{if(_0x4d052c===_0x159679(0x2e0))this[_0x159679(0x429)]++,this['setArmorChoice'](_0x4500f4);else _0x4d052c===_0x159679(0x203)&&Imported[_0x159679(0x1a4)]&&(this[_0x159679(0x429)]++,this[_0x159679(0x392)](_0x4500f4));}},Game_Interpreter[_0x10cc9c(0x3be)][_0x10cc9c(0x3fd)]=function(_0x24e9b0){const _0x50c3b4=_0x10cc9c,_0x268b62=JSON[_0x50c3b4(0x465)](JSON[_0x50c3b4(0x211)](_0x24e9b0[0x3]));VisuMZ['ConvertParams'](_0x268b62,_0x268b62),$gameMessage[_0x50c3b4(0x3fd)](_0x268b62[_0x50c3b4(0x246)]||0x0,_0x268b62[_0x50c3b4(0x278)]||0x0);},Game_Interpreter[_0x10cc9c(0x3be)]['setArmorChoice']=function(_0x485931){const _0x62fd8f=_0x10cc9c,_0x16ca1c=JSON['parse'](JSON[_0x62fd8f(0x211)](_0x485931[0x3]));VisuMZ[_0x62fd8f(0x415)](_0x16ca1c,_0x16ca1c),$gameMessage[_0x62fd8f(0x41a)](_0x16ca1c['VariableID']||0x0,_0x16ca1c[_0x62fd8f(0x1c5)]||0x0,_0x16ca1c[_0x62fd8f(0x19f)]||0x0);},Game_Interpreter[_0x10cc9c(0x3be)]['setSkillChoice']=function(_0x1aaf6f){const _0x4b3ab9=_0x10cc9c,_0x5c15fc=JSON['parse'](JSON[_0x4b3ab9(0x211)](_0x1aaf6f[0x3]));VisuMZ[_0x4b3ab9(0x415)](_0x5c15fc,_0x5c15fc),$gameMessage['setSkillChoice'](_0x5c15fc[_0x4b3ab9(0x246)]||0x0,_0x5c15fc['ActorID']||0x0,_0x5c15fc[_0x4b3ab9(0x44f)]||0x0);};function _0x4cba(_0x453802,_0x50ea7b){const _0x1e22d0=_0x1e22();return _0x4cba=function(_0x4cbacb,_0x56d97a){_0x4cbacb=_0x4cbacb-0x7f;let _0x10519b=_0x1e22d0[_0x4cbacb];return _0x10519b;},_0x4cba(_0x453802,_0x50ea7b);}function Game_MessageCommonEvent(){const _0x17da69=_0x10cc9c;this[_0x17da69(0x3f9)](...arguments);}function _0x1e22(){const _0x27b0c7=['_cancelButton','map\x20player','_nameBoxWindow','updateOverlappingY','registerSelfEvent','TextColor%1','false','\x1bC[%1]%2\x1bPREVCOLOR[0]','upleft','min','\x1bTEXTALIGNMENT[0]','TsvFilename','ENABLE','loadBitmap','itemChoiceActor','mainFontFace','deactivate','Game_Map_setupEvents','toUpperCase','Japanese','setFaceImage','ALL','prepareShowTextFollowups','CASING','name','itemRect','Ahoj','getMessageWindowRows','prepareWordWrapEscapeCharacters','colSpacing','drawBackPicture','PREVCOLOR','updateBitmap','_messageWindow','_refreshPauseSign','messageCoreWindowX','openness','#6dcff6','Hindi','_autoPositionTarget','ParseClassNotetags','remove','startY','escapeStart','Swedish','_lastPluginCommandInterpreter','Armors','Game_Interpreter_PluginCommand','_pictureId','updateOffsetPosition','itemChoiceStypeId','processCommonEvent','processFontChangeItalic','outputWidth','process_VisuMZ_MessageCore_AutoColor','Ha\x20det','start\x20.\x5cdata','PictureIDs','update','upcenter','#a186be','\x1bCASING[2]','isPlaytest','erasePicture','isMessageWindowWordWrap','</RIGHT>','registerActorNameAutoColorChanges','quantity','dimColor2','armor','10nZIwHF','applyChoiceHelpDescriptions','drawMessageFace','isOptionValid','tsv','BOLD','format','loadGameFonts','UNDEFINED!','ParseLocalizationCsv','choiceAlignText','anchorPictureText','addMessageCoreLocalizationCommand','messageWidth','isArmor','updatePlacement','OffsetY','downright','startX','PICTURE','Game_System_initialize','_textMacroFound','SelectArmor','textSizeExTextAlignment','States','processAllText','\x1bCASING[0]','powerDownColor','Hejdå','onLocalizationXhrLoad','round','getLastPluginCommandInterpreter','Waouh','clampPlacementPosition','getMessageWindowXyOffsets','_choiceIndexArray','isSkillTypeMatchForUse','obtainEscapeString','</LEFT>','updateAutoSizePosition','processStoredAutoColorChanges','Filename','Window_Options_changeVolume','AddAutoColor','realignMapName','blue','return\x200','ConfigManager_makeData','TSV\x20file\x20is\x20now\x20created\x20and\x20stored\x20in\x20data\x20folder.','obtainItem','processFsTextCode','Name','easeIn','getChoiceListMaxRows','maxChoiceWidth','Window_Base_changeTextColor','some','changeChoiceBackgroundColor','ActorID','_relativePosition','match','processControlCharacter','centered','reduce','lowerright','EVAL','floor','parameters','requestPictureTextRefresh','_scene','version','Uau','drawing','fontSize','visuMzTextLocaleStatusText','MessageTextDelay','Press\x20OK\x20to\x20convert\x20to\x20TSV.\x0a','_dimmerSprite','choiceCols','553909TpgIYZ','isRTL','changeTextSpeed','loadCustomFontsMessageCore','Game_Map_refresh','messageRows','windowPadding','_helpWindow','ChoiceWindowDistance','middleleft','actor','prepareAutoSizeEscapeCharacters','MaxRows','makeFontBigger','constructor','setupShuffleChoices','application/%1','processTextAlignmentChange','Hei','OffsetX','processTextCasing','NameBoxWindowOffsetY','add','Good-bye','processDrawPicture','Sprite_Picture_update','messagePositionReset','AutoColorBypassList','ARRAYSTRUCT','message','</WORDWRAP>','</CENTER>','Window_EventItem_includes','fallbackFonts','isWordWrapEnabled','test','makeCommandListScriptCall','_commonEventId','setHelpWindow','processDrawCenteredPicture','[0]','clear','Window_Message_isTriggered','isSkill','convertTextAlignmentEscapeCharacters','every','process_VisuMZ_MessageCore_TextCodes_Action','autoPositionOffsetY','refreshWithTextCodeSupport','equipSlots','NameBoxWindowOffsetX','getChoiceListMinChoiceWidth','innerWidth','faceName','addGeneralOptions','substring','wtypeId','COLORLOCK','textSpeedStatusText','confirmConvertCsvToTsv','Window_ChoiceList_updatePlacement','Polish','addLoadListener','black','_pictureText','attachPictureText','center','DISABLE','down\x20right','applyDatabaseAutoColor','followers','itemChoiceEtypeId','setHelpWindowWordWrap','\x1bTEXTALIGNMENT[1]','isAutoColorAffected','changeVolume','powerUpColor','processWrapBreak','வணக்கம்','_positionType','resizePictureText','itemChoiceAtypeId','width','rtl','TextManager_message','load','convertBaseEscapeCharacters','upper\x20center','getChoiceListLineHeight','makeItemList','convertHardcodedEscapeReplacements','Thai','Window_Message_processEscapeCharacter','FUNC','getSkillTypes','getPictureTextData','isChoiceWindow','ARRAYSTR','MessageCore','_itemChoiceVariableId','_moveTargetHeight','String_format','_pictureTextWidth','_textAlignment','processAutoPosition','maxCols','addedWidth','Greeting','lower-left','_currentAutoSize','faceWidth','nextEventCode','leader','_itemChoiceStypeId','push','ANY','charCodeAt','fontBold','Sbohem','_lastGainedItemData','setChoiceListMaxColumns','setSkillChoice','setChoiceListMaxRows','वाह','skills','Вау','DefaultLocale','Type','Game_Party_gainItem','outLineColor','return\x20\x27','_list','filter','ActionJS','isTriggered','getLanguageName','startPause','addChoiceDistance','emerge','synchronizeNameBox','follower','_forcedPosition','Hűha','textCodeResult','itemChoiceItypeId','battleActionName','ARRAYNUM','_autoPosRegExp','Game_Interpreter_setupChoices','convertMessageCoreEscapeActions','max','yes','WRAPJPBREAK','changeTextColor','weapon','PictureTextRefresh','down\x20center','addChildAt','CreateAutoColorRegExpListEntries','ParseArmorNotetags','choiceTextAlign','lower-center','normalColor','filename','lastGainedObjectIcon','prototype','createTsvFile','choiceMinWidth','PictureTextChange','isWeapon','CustomFonts','drawBackCenteredPicture','TextStr','Window_Message_updatePlacement','battleUserName','replace','menu','textCodeCheck','General','moveBy','হ্যালো','contentsBack','ஆஹா','up-left','setChoiceListMinChoiceWidth','outlineColor','_wordWrap','unnamed','processMessageCoreEscapeActions','CommonEvent','convertButtonAssistEscapeCharacters','Scene_Boot_onDatabaseLoaded','levelUp','NUM','setPositionType','onChoice','До\x20свидания','outlineWidth','clearActorNameAutoColor','processPxTextCode','grey','Items','needsNewPage','splice','obtainEscapeParam','isSceneMap','VisuMZ_3_ActSeqCamera','bind','Window_Message_synchronizeNameBox','Scene_Message_createChoiceListWindow','upper\x20left','systemColor','getMessageWindowWidth','send','Tamil','onNewPageMessageCore','apply','updateForcedPlacement','isColorLocked','ARRAYJSON','makeFontSmaller','isSceneBattle','addedHeight','downcenter','initialize','ParseSkillNotetags','pageup','processColorLock','setWeaponChoice','Enable','drawBackground','setMessageWindowWordWrap','MsgWindowOffsetX','#fff799','processPyTextCode','setupNumInput','Window_Base_processControlCharacter','scale','drawPictureTextZone','gray','Ciao','makeData','convertLockColorsEscapeCharacters','ChoiceWindowTextAlign','_MessageCoreSettings','fontFace','type','uppercenter','textSizeExRaw','getColor','updateXyOffsets','etypeId','ConvertParams','in\x20order\x20for\x20VisuMZ_1_MessageCore\x20to\x20work.','WORD_WRAP_PADDING','_lastAltCase','isChoiceVisible','setArmorChoice','Localization','measureTextWidth','ParseItemNotetags','downleft','actorSlotName','_choiceCancelType','join','addCommand','createChoiceListWindow','updateNameBoxMove','Game_Map_updateEvents','_choices','ShuffleArray','maxCommands','_index','2210033rMRtvZ','_wholeMoveDuration','processEscapeCharacter','drawItem','getRandomTextFromPool','5533XfmHXt','_textCasing','Wah','Olá','setChoiceMessageDistance','applyMoveEasing','Unnamed.ttf','addExtraShowChoices','green','isVisuMzLocalizationEnabled','getConfigValue','messageWordWrap','drawText','map\x20event','postConvertEscapeCharacters','onload','setTextDelay','getLastGainedItemData','DefaultOutlineWidth','clearCommandList','_itemChoiceItypeId','paintOpacity','Bengali','Press\x20Cancel\x20to\x20create\x20new\x20TSV.','La\x20revedere','refresh','iconIndex','Danish','addContinuousShowChoices','parseLocalizedText','true','#c69c6d','SkillTypeID','\x1bTEXTALIGNMENT','Rows','\x1bTEXTALIGNMENT[3]','Game_Party_initialize','สวัสดี','itemRectWithPadding','VisuMZ_4_ExtraEnemyDrops\x20needs\x20to\x20be\x20updated\x20','forEach','lineHeight','\x1bCOLORLOCK[0]','setMessageWindowRows','makeDeepCopy','upper-center','slice','flushTextState','needsPictureTextRefresh','\x1bi[%1]%2','windowWidth','equipTypes','map\x20party','_autoSizeCheck','parse','Zbohom','initMessageCore','_autoSizeRegexp','adjustShowChoiceExtension','WordWrap','setLastGainedItemData','Undefined','#acacac','addMessageCommonEvent','choiceRows','drawTextTopAligned','requestPictureTextRefreshAll','lowerleft','setMessageWindowWidth','upperleft','inBattle','drawSkillCost','brown','gainItem','Languages','isBusy','RelativePXPY','addContinuousShowTextCommands','convertNewPageTextStateMacros','convertFontSettingsEscapeCharacters','padding','setText','Hola','Window_Base_textSizeEx','indexOf','setupEvents','unshift','updatePictureText','down\x20left','বিদায়','onDatabaseLoaded','ARRAYEVAL','%1,\x20does\x20not\x20support\x20attempted\x20text\x20code\x20usage.','Please\x20restart\x20the\x20game.','CsvFilename','makeCommandListShuffle','default','Adiós','MessageWindowProperties','boxHeight','MsgWindowOffsetY','ceil','right','_textCasingUpperState','Window_NameBox_refresh','_maxShuffleChoices','convertChoiceMacros','anchor','\x1bI[%1]','processActorNameAutoColorChanges','Window_Message_newPage','launchMessageCommonEvent','currencyUnit','Actors','createChoiceListHelpWindow','calcWindowHeight','\x1bWrapJpBreak[0]','さようなら','left','MessageRows','Näkemiin','2237056rYXqeK','updateDimensions','requestChoiceBackgroundImage','calcMoveEasing','resetFontSettings','down-right','createTextState','preFlushTextState','_pictureTextSprite','Weapons','Window_MessageLog','_choiceHelpDescriptions','convertTextMacros','itemBackColor1','processCustomWait','STR','TextAlign','FontChangeValue','open\x20.\x5cdata','processNewLine','atypeId','registerCommand','map\x20actor','refreshDimmerBitmap','process_VisuMZ_MessageCore_TextCodes_Replace','%1\x20file\x20detected.\x0a','map','_eventId','_messageCommonEvents','Turkish','onerror','ChoiceWindowProperties','overrideMimeType','FontSmallerCap','\x1bCOLORLOCK[1]','\x5c%1','GET','Vau','CheckCompatibility','_moveTargetY','FontBiggerCap','itemHeight','CreateAutoColorRegExpLists','Bitmap_drawTextTopAligned','_messagePositionReset','list','changeVisuMzTextLocale','cancel','itemBackColor2','\x1bi[%1]','convertCasingEscapeCharacters','setRelativePosition','Would\x20you\x20like\x20the\x20plugin\x20to\x20create\x20the\x20base\x20%1\x20file?\x0a\x0a','convertMessageCoreEscapeReplacements','_spriteset','JSON','Wow','Classes','Αντίο','crisisColor','createPictureText','CSV','setWordWrap','_itemChoiceActorId','middleright','clamp','TightWrap','TextMacros','choices','getTextAlignment','Szia','mainModule','_action','includes','addMessageCoreCommands','18gqZekC','_pictureTextHeight','ChoiceWindowMaxCols','fontItalic','processAutoColorWords','LangFiletype','Italian','contentsHeight','maxFontSizeInLine','MessageWidth','Settings','updateEvents','path','Bitmap_measureTextWidth','TEXTALIGNMENT','_moveEasingType','statusText','_autoColorActorNames','updateBackground','FastForwardKey','initTextAlignement','Padding','length','preConvertEscapeCharacters','getChoiceListMaxColumns','battleTargetName','_pictureTextCache','Hej','pagedown','databaseObjectName','getChoiceIndent','instantTextSpeed','_pictures','crisis','exit','autoPositionOffsetX','TextJS','blt','openLocalizationFolder','<B>','Ουάου','terminateMessage','isPressed','changePaintOpacity','zoomScale','ParseAddedText','[XX]','convertCsvToTsvFile','itemPadding','#f26c4f','prepareShowTextPluginCommandFollowups','realPictureId','CENTERPICTURE','#fbaf5d','isOpen','ParseEnemyNotetags','setMessageWindowXyOffsets','</I>','text','Window_Options_addGeneralOptions','resetWordWrap','registerResetRect','Window_Options_isVolumeSymbol','241617WTCHQv','Hello','Romanian','makeCommandList','gradientFillRect','Window_Message_needsNewPage','_data','violet','up-center','itemChoiceActorId','_macroBypassWordWrap','createLocalizationCsvFile','textFont','applyData','height','isContinuePrepareShowTextCommands','setLastPluginCommandInterpreter','Window_Command_addCommand','processAutoSize','drawItemNumber','none','log','clearChoiceHelpDescriptions','WAIT','LanguageFonts','Auf\x20Wiedersehen','updateMove','clearAllPictureTexts','up\x20right','code','upperright','lastGainedObjectQuantity','returnPreservedFontSettings','textColor','setTextAlignment','<WORDWRAP>','\x1bWrapBreak[0]','_targets','AddOption','_choiceListHelpWindow','Hallo','shift','loadMessageFace','German','_itemChoiceWtypeId','<RIGHT>','%1\x20file\x20has\x20not\x20been\x20made.\x0a','csv','requestChoiceForegroundImage','_textDelayCount','skill','choiceListHelpWindowRect','status','getChoiceMessageDistance','Scene_Boot_loadGameFonts','resetTextColor','setPictureText','_pictureTextRefresh','open','AutoColorRegExp','advanced','updateAutoPosition','index','HIDE','windowX','EndPadding','messageWindowRect','processFontChangeBold','\x1bTEXTALIGNMENT[2]','_messageOffsetX','drawTextEx','choiceIndexArray','setup','NameBoxWindowDefaultColor','lower\x20right','lower\x20left','partyMemberName','CreateAutoColorFor','Viszontlátásra','data/','messageCoreTextSpeed','_itemChoiceEtypeId','toLowerCase','checkConvertCsvToTsv','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','start','commandSymbol','Game_Map_initialize','PictureTextErase','#ffffff','getCurrentLanguage','loadPicture','convertButtonAssistText','writeFileSync','EquipTypeID','bitmap','responseText','_showFast','Game_Screen_erasePicture','VisuMZ_1_SkillsStatesCore','안녕하세요','item','adjustShowChoiceCancel','\x1bITALIC[0]','contents','_centerMessageWindow','clearPictureTextRefresh','</B>','\x1bCASING[5]','VisuMZ_0_CoreEngine','exec','updateHelp','addMessageCoreTextSpeedCommand','down','isClosed','Window_Message_clearFlags','processPreviousColor','battle\x20actor','textSpeed','helpWordWrap','defaultColor','Norwegian','currentCommand','call','textWidth','getPictureTextBuffer','Czech','midleft','ลาก่อน','Window_Base_initialize','_interpreter','</COLORLOCK>','ArmorTypeID','_messageOffsetY','loadDatabase','upright','COMMONEVENT','maxLines','ParseStateNotetags','ITALIC','ว้าว','_choiceListWindow','convertVariableEscapeCharacters','stretchDimmerSprite','isChoiceEnabled','EachMessageStart','अलविदा','HelpWindow','_textDelay','selectDefault','Enemies','value','ChoiceWindowLineHeight','processFailsafeChoice','drawChoiceLocationImage','Greek','displayName','<BR>','TextCodeReplace','\x1bCASING[3]','middlecenter','Window_Help_refresh','getPreservedFontSettings','move','command357','commandName','பிரியாவிடை','Game_Screen_clearPictures','Hungarian','getStartingChoiceWidth','TextSpeed','2243256ZdAIgI','trim','convertShowChoiceEscapeCodes','_moveDuration','_textColorStack','inputtingAction','addWrapBreakAfterPunctuation','<I>','NonSupportedTextCodes','adjustShowChoiceDefault','ExtraEnemyDrops','messageCoreLocalization','child_process','changeOutlineColor','_pictureTextWindow','_moveTargetX','updateRelativePosition','Window_Base_processAllText','charAt','eraseAllPictureTexts','switchOutTextForLocalization','_target','loadLocalization','SelectSkill','ওহে','split','victory','Distance','(((','Window_Base_processEscapeCharacter','setChoiceListTextAlign','upper\x20right','Cześć','getLocalizedText','_moveTargetWidth','Γειά\x20σου','Skills','stringify','Merhaba','316760gubthB','Window_ChoiceList_windowX','show','ChoiceWindowMaxRows','SelectWeapon','%1\x20file\x20is\x20now\x20created\x20and\x20stored\x20in\x20data\x20folder.\x0a','prepareForcedPositionEscapeCharacters','actorName','convertBackslashCharacters','SWITCH','French','Hoşça\x20kal','setupChoices','Match','Window_NameBox_updatePlacement','6rnHhfX','ARRAYFUNC','anyPictureTextChanges','processTextAlignmentX','_indent','TextColor','hide','maxShuffleChoices','canMove','#707070','findTargetSprite','system','%1\x20file\x20cannot\x20be\x20created.\x0aPlease\x20enter\x20Playtest\x20mode.\x0a','Instant','setChoiceListHelpWindow','VisuMZ_1_EventsMoveCore','Arrivederci','outputHeight','parseChoiceText','resetRect','clearRect','newPage','event','Spanish','Window_ChoiceList_callCancelHandler','TextCodeActions','isHelpWindowWordWrap','hasPictureText','<LINE\x20BREAK>','setSpeakerName','VisuMZ_4_ExtraEnemyDrops','Bonjour','ParseWeaponNotetags','createContents','makeSkillList','Bitmap_drawText','VariableID','boxWidth','textLocale','Adeus','obtainGold','onLocalizationXhrError','Languages.csv','Languages.tsv','\x1bCASING[4]','erasePictureTextBuffer','getPictureText','moveTo','currentExt','drawItemContents','dirname','changeValue','こんにちは','Scene_Options_maxCommands','setWaitMode','_scriptCall','StretchDimmedBg','SortObjectByKeyLength','battle\x20enemy','English','lower-right','process_VisuMZ_MessageCore_TextMacros','postFlushTextState','drawCustomBackgroundColor','_pictureTextBuffer','clearPictures','resetPositionX','Default','setColorLock','prepareShowTextCommand','Sprite_Picture_updateBitmap','startWait','LineBreakSpace','isInputting','red','AutoColor','processCharacter','clearFlags','updateChoiceListHelpWindowPlacement','battle\x20party','Window_Message_terminateMessage','setPictureTextBuffer','yellow','You\x20do\x20not\x20have\x20a\x20language\x20%1\x20set\x20up.\x0a','members','ConfigManager_applyData','WeaponTypeID','<LEFT>','textSizeExWordWrap','textSizeEx','ConvertTextAutoColorRegExpFriendly','_resetRect','32880qOLyzK','LocalizationType','mainFontSize','ConvertDefault','getInputButtonString','orange'];_0x1e22=function(){return _0x27b0c7;};return _0x1e22();}Game_MessageCommonEvent[_0x10cc9c(0x3be)]['initialize']=function(_0x224fba,_0x264408){const _0x238b04=_0x10cc9c;this[_0x238b04(0x33e)]=_0x224fba,this[_0x238b04(0xd2)]=_0x264408||0x0,this[_0x238b04(0x448)]();},Game_MessageCommonEvent[_0x10cc9c(0x3be)][_0x10cc9c(0x238)]=function(){return $dataCommonEvents[this['_commonEventId']];},Game_MessageCommonEvent[_0x10cc9c(0x3be)][_0x10cc9c(0xe4)]=function(){const _0x720e24=_0x10cc9c;return this[_0x720e24(0x238)]()[_0x720e24(0xe4)];},Game_MessageCommonEvent[_0x10cc9c(0x3be)][_0x10cc9c(0x448)]=function(){const _0x23fb35=_0x10cc9c;this[_0x23fb35(0x1c3)]=new Game_Interpreter(),this[_0x23fb35(0x1c3)][_0x23fb35(0x189)](this[_0x23fb35(0xe4)](),this['_eventId']);},Game_MessageCommonEvent[_0x10cc9c(0x3be)][_0x10cc9c(0x2be)]=function(){const _0x196e72=_0x10cc9c;this[_0x196e72(0x1c3)]&&(this[_0x196e72(0x1c3)]['isRunning']()?this[_0x196e72(0x1c3)][_0x196e72(0x2be)]():this[_0x196e72(0x342)]());},Game_MessageCommonEvent['prototype']['clear']=function(){const _0x5ceea6=_0x10cc9c;this[_0x5ceea6(0x1c3)]=null;},Scene_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x183)]=function(){const _0xf1ae3c=_0x10cc9c,_0x29548a=Math[_0xf1ae3c(0x28d)](Graphics[_0xf1ae3c(0x36b)],$gameSystem[_0xf1ae3c(0x3ed)]()),_0x5d2c43=$gameSystem[_0xf1ae3c(0x29f)](),_0x5aad28=this[_0xf1ae3c(0xb1)](_0x5d2c43,![]),_0x340914=(Graphics[_0xf1ae3c(0x247)]-_0x29548a)/0x2,_0x1b7056=0x0;return new Rectangle(_0x340914,_0x1b7056,_0x29548a,_0x5aad28);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x3ea)]=Scene_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x423)],Scene_Message['prototype'][_0x10cc9c(0x423)]=function(){const _0x4894a4=_0x10cc9c;VisuMZ['MessageCore'][_0x4894a4(0x3ea)]['call'](this),this['createChoiceListHelpWindow']();},Scene_Message[_0x10cc9c(0x3be)][_0x10cc9c(0xb0)]=function(){const _0x18fa86=_0x10cc9c,_0xfcf712=this[_0x18fa86(0x174)](),_0x403067=new Window_Help(_0xfcf712);_0x403067[_0x18fa86(0x228)](),this[_0x18fa86(0x1ce)][_0x18fa86(0x33f)](_0x403067),this[_0x18fa86(0x2a5)][_0x18fa86(0x230)](_0x403067),this['addWindow'](_0x403067),this['_choiceListHelpWindow']=_0x403067;},Scene_Message[_0x10cc9c(0x3be)]['choiceListHelpWindowRect']=function(){const _0x28aae4=_0x10cc9c,_0x282f4d=0x0,_0x2e797c=0x0,_0x4f3176=Graphics['boxWidth'],_0x50312a=this[_0x28aae4(0xb1)](0x2,![]);return new Rectangle(_0x282f4d,_0x2e797c,_0x4f3176,_0x50312a);},Window_Message[_0x10cc9c(0x3be)]['setChoiceListHelpWindow']=function(_0x1e8e81){const _0x6d4e56=_0x10cc9c;this[_0x6d4e56(0x168)]=_0x1e8e81;},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x270)]=function(){const _0x1e08ce=_0x10cc9c;if(!this[_0x1e08ce(0x168)])return;const _0x181f11=this['_choiceListHelpWindow'];_0x181f11&&(_0x181f11['y']=this['y']>0x0?0x0:Graphics[_0x1e08ce(0xa1)]-_0x181f11['height']);},VisuMZ['MessageCore'][_0x10cc9c(0x257)]=Scene_Options['prototype']['maxCommands'],Scene_Options[_0x10cc9c(0x3be)][_0x10cc9c(0x428)]=function(){const _0x2ba7be=_0x10cc9c;let _0x27c633=VisuMZ[_0x2ba7be(0x37b)][_0x2ba7be(0x257)][_0x2ba7be(0x1bc)](this);const _0x1d024c=VisuMZ['MessageCore'][_0x2ba7be(0x10c)];if(_0x1d024c['TextSpeed']['AdjustRect']){_0x1d024c[_0x2ba7be(0x41b)][_0x2ba7be(0x167)]&&TextManager[_0x2ba7be(0x438)]()&&_0x27c633++;if(_0x1d024c[_0x2ba7be(0x1eb)][_0x2ba7be(0x167)])_0x27c633++;}return _0x27c633;},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x268)]=Sprite_Picture[_0x10cc9c(0x3be)]['updateBitmap'],Sprite_Picture[_0x10cc9c(0x3be)][_0x10cc9c(0x2a4)]=function(){const _0x3475df=_0x10cc9c;VisuMZ[_0x3475df(0x37b)]['Sprite_Picture_updateBitmap']['call'](this),this[_0x3475df(0xf3)]();},VisuMZ['MessageCore'][_0x10cc9c(0x332)]=Sprite_Picture[_0x10cc9c(0x3be)]['update'],Sprite_Picture[_0x10cc9c(0x3be)]['update']=function(){const _0x2c63d5=_0x10cc9c;VisuMZ[_0x2c63d5(0x37b)][_0x2c63d5(0x332)]['call'](this),this[_0x2c63d5(0x95)]();},Sprite_Picture[_0x10cc9c(0x3be)][_0x10cc9c(0x95)]=function(){const _0x325aaf=_0x10cc9c;if(!this['visible'])return;this[_0x325aaf(0x369)](),this[_0x325aaf(0x2d5)](),this['drawPictureText'](),this[_0x325aaf(0x35a)]();},Sprite_Picture[_0x10cc9c(0x3be)][_0x10cc9c(0xf3)]=function(){const _0x4d79e5=_0x10cc9c;if(this[_0x4d79e5(0x1fa)])return;if(this[_0x4d79e5(0xbf)])return;const _0x3b052c=new Rectangle(0x0,0x0,0x0,0x0);this['_pictureTextWindow']=new Window_Base(_0x3b052c),this['_pictureTextWindow']['padding']=0x0,this[_0x4d79e5(0xbf)]=new Sprite(),this[_0x4d79e5(0x3b6)](this['_pictureTextSprite'],0x0),this[_0x4d79e5(0x37f)]=0x0,this[_0x4d79e5(0x103)]=0x0,this[_0x4d79e5(0x11c)]={};},Sprite_Picture[_0x10cc9c(0x3be)][_0x10cc9c(0x369)]=function(){const _0x1e6ce8=_0x10cc9c;if(!this[_0x1e6ce8(0x1fa)])return;if(this[_0x1e6ce8(0x37f)]===this[_0x1e6ce8(0x36b)]&&this[_0x1e6ce8(0x103)]===this[_0x1e6ce8(0x14f)])return;this[_0x1e6ce8(0x37f)]=this[_0x1e6ce8(0x36b)],this[_0x1e6ce8(0x103)]=this[_0x1e6ce8(0x14f)],this[_0x1e6ce8(0x11c)]={},this[_0x1e6ce8(0x1fa)][_0x1e6ce8(0x1e4)](0x0,0x0,this['width'],this[_0x1e6ce8(0x14f)]);},Sprite_Picture[_0x10cc9c(0x3be)][_0x10cc9c(0x2d5)]=function(){const _0x4be065=_0x10cc9c;if(!this[_0x4be065(0xbf)])return;this[_0x4be065(0xbf)][_0x4be065(0xa9)]['x']=this[_0x4be065(0xa9)]['x'],this[_0x4be065(0xbf)][_0x4be065(0xa9)]['y']=this[_0x4be065(0xa9)]['y'];},Sprite_Picture[_0x10cc9c(0x3be)]['drawPictureText']=function(){const _0x215f08=_0x10cc9c;if(!this[_0x215f08(0x1fa)])return;if(!this['anyPictureTextChanges']())return;const _0xd589e5=[_0x215f08(0x83),'up','upperright',_0x215f08(0xb4),_0x215f08(0x35b),_0x215f08(0xa4),'lowerleft',_0x215f08(0x1b2),'lowerright'];this[_0x215f08(0x1fa)][_0x215f08(0x243)]();for(const _0x3ac3b8 of _0xd589e5){this[_0x215f08(0x407)](_0x3ac3b8);}},Sprite_Picture[_0x10cc9c(0x3be)][_0x10cc9c(0x224)]=function(){const _0x3f018c=_0x10cc9c;if($gameScreen[_0x3f018c(0x45f)](this[_0x3f018c(0x2b4)]))return!![];const _0x3a5040=[_0x3f018c(0x83),'up',_0x3f018c(0x15f),_0x3f018c(0xb4),_0x3f018c(0x35b),'right',_0x3f018c(0x81),_0x3f018c(0x1b2),'lowerright'];for(const _0x269c9e of _0x3a5040){const _0x858aea=$gameScreen[_0x3f018c(0x250)](this[_0x3f018c(0x2b4)],_0x269c9e);if(this[_0x3f018c(0x11c)][_0x269c9e]===_0x858aea)continue;return!![];}return![];},Sprite_Picture[_0x10cc9c(0x3be)][_0x10cc9c(0x407)]=function(_0x369275){const _0x3efb1c=_0x10cc9c;$gameScreen[_0x3efb1c(0x1ab)](this[_0x3efb1c(0x2b4)]);const _0x14d475=$gameScreen[_0x3efb1c(0x250)](this[_0x3efb1c(0x2b4)],_0x369275);this[_0x3efb1c(0x11c)][_0x369275]=_0x14d475;const _0x2f8675=this[_0x3efb1c(0x1fa)][_0x3efb1c(0x27b)](_0x14d475);let _0x40024a=$gameScreen[_0x3efb1c(0x1be)](this[_0x3efb1c(0x2b4)]),_0x3c9978=_0x40024a,_0x1a5ca6=_0x40024a;if(['up',_0x3efb1c(0x35b),_0x3efb1c(0x1b2)][_0x3efb1c(0x100)](_0x369275))_0x3c9978=Math[_0x3efb1c(0x30c)]((this[_0x3efb1c(0x36b)]-_0x2f8675[_0x3efb1c(0x36b)])/0x2);else[_0x3efb1c(0x15f),'right',_0x3efb1c(0x30a)]['includes'](_0x369275)&&(_0x3c9978=Math[_0x3efb1c(0x30c)](this[_0x3efb1c(0x36b)]-_0x2f8675['width']-_0x40024a));if(['left',_0x3efb1c(0x35b),_0x3efb1c(0xa4)][_0x3efb1c(0x100)](_0x369275))_0x1a5ca6=Math[_0x3efb1c(0x30c)]((this[_0x3efb1c(0x14f)]-_0x2f8675[_0x3efb1c(0x14f)])/0x2);else[_0x3efb1c(0x81),'down',_0x3efb1c(0x30a)][_0x3efb1c(0x100)](_0x369275)&&(_0x1a5ca6=Math[_0x3efb1c(0x30c)](this[_0x3efb1c(0x14f)]-_0x2f8675[_0x3efb1c(0x14f)]-_0x40024a));this['_pictureTextWindow'][_0x3efb1c(0x187)](_0x14d475,_0x3c9978,_0x1a5ca6);},Sprite_Picture[_0x10cc9c(0x3be)][_0x10cc9c(0x35a)]=function(){const _0xad051a=_0x10cc9c;if(!this[_0xad051a(0x1fa)])return;if(!this[_0xad051a(0xbf)])return;this['_pictureTextSprite'][_0xad051a(0x1a0)]=this['_pictureTextWindow'][_0xad051a(0x1a9)];},VisuMZ[_0x10cc9c(0x37b)]['Window_Base_initialize']=Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x3f9)],Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x3f9)]=function(_0x2ae86c){const _0x567859=_0x10cc9c;this['initMessageCore'](_0x2ae86c),VisuMZ['MessageCore'][_0x567859(0x1c2)][_0x567859(0x1bc)](this,_0x2ae86c);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x467)]=function(_0x87f972){this['initTextAlignement'](),this['resetWordWrap'](),this['registerResetRect'](_0x87f972);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x116)]=function(){const _0x125641=_0x10cc9c;this[_0x125641(0x163)]('default');},Window_Base['prototype'][_0x10cc9c(0x163)]=function(_0x560b8e){const _0x516cc1=_0x10cc9c;this[_0x516cc1(0x380)]=_0x560b8e;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0xfc)]=function(){const _0x1759df=_0x10cc9c;return this[_0x1759df(0x380)];},VisuMZ[_0x10cc9c(0x37b)]['Window_Base_textSizeEx']=Window_Base['prototype'][_0x10cc9c(0x27b)],Window_Base['prototype'][_0x10cc9c(0x27b)]=function(_0x35ac7d){const _0x5acfc7=_0x10cc9c;return this[_0x5acfc7(0x13e)](),VisuMZ[_0x5acfc7(0x37b)]['Window_Base_textSizeEx'][_0x5acfc7(0x1bc)](this,_0x35ac7d);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x411)]=function(_0x22ef69){const _0x4e51d5=_0x10cc9c;return VisuMZ[_0x4e51d5(0x37b)][_0x4e51d5(0x91)][_0x4e51d5(0x1bc)](this,_0x22ef69);},VisuMZ['MessageCore'][_0x10cc9c(0x1fd)]=Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x2e3)],Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x2e3)]=function(_0x412331){const _0x4ce960=_0x10cc9c;VisuMZ['MessageCore'][_0x4ce960(0x1fd)]['call'](this,_0x412331);if(_0x412331[_0x4ce960(0x312)])this[_0x4ce960(0x163)](_0x4ce960(0x9e));},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x13e)]=function(){const _0x3d22c1=_0x10cc9c;this[_0x3d22c1(0xf5)](![]);},Window_Base['prototype']['isWordWrapEnabled']=function(){const _0x14c0d0=_0x10cc9c;return this[_0x14c0d0(0x3d3)];},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0xf5)]=function(_0x20b78c){const _0x4e5038=_0x10cc9c;return this[_0x4e5038(0x3d3)]=_0x20b78c,'';},Window_Base['prototype'][_0x10cc9c(0x13f)]=function(_0x23979b){const _0x4c6042=_0x10cc9c;this[_0x4c6042(0x27d)]=JsonEx[_0x4c6042(0x45b)](_0x23979b);},Window_Base['prototype'][_0x10cc9c(0xbb)]=function(){const _0x2b387b=_0x10cc9c;this[_0x2b387b(0x1a9)][_0x2b387b(0x40e)]=$gameSystem[_0x2b387b(0x293)](),this[_0x2b387b(0x1a9)][_0x2b387b(0x313)]=$gameSystem[_0x2b387b(0x280)](),this[_0x2b387b(0x1a9)]['fontBold']=![],this[_0x2b387b(0x1a9)][_0x2b387b(0x105)]=![],this[_0x2b387b(0x430)]=0x0,this[_0x2b387b(0xa5)]=!![],this[_0x2b387b(0x178)]();},Window_Base['prototype'][_0x10cc9c(0x178)]=function(){const _0x1e9cc9=_0x10cc9c;this[_0x1e9cc9(0x3b2)](ColorManager[_0x1e9cc9(0x3bb)]()),this[_0x1e9cc9(0x1f9)](ColorManager[_0x1e9cc9(0x3d2)]());const _0x1d1cc3=VisuMZ[_0x1e9cc9(0x37b)][_0x1e9cc9(0x10c)][_0x1e9cc9(0x3cb)];_0x1d1cc3[_0x1e9cc9(0x441)]===undefined&&(_0x1d1cc3[_0x1e9cc9(0x441)]=0x3),this[_0x1e9cc9(0x1a9)][_0x1e9cc9(0x3de)]=_0x1d1cc3[_0x1e9cc9(0x441)],this[_0x1e9cc9(0x266)](![]);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x266)]=function(_0x1d3a4c){this['_colorLock']=_0x1d3a4c;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x3f3)]=function(){return this['_colorLock'];},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x363)]=function(){return![];},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x1e3)]=function(){const _0x5ae290=_0x10cc9c,_0x61b040=[_0x5ae290(0x40e),_0x5ae290(0x313),_0x5ae290(0x38e),_0x5ae290(0x105),_0x5ae290(0x162),_0x5ae290(0x39a),_0x5ae290(0x3de),_0x5ae290(0x444)];let _0x2b7257={};for(const _0x35f28d of _0x61b040){_0x2b7257[_0x35f28d]=this[_0x5ae290(0x1a9)][_0x35f28d];}return _0x2b7257;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x161)]=function(_0x3555a5){const _0x2ccda2=_0x10cc9c;for(const _0x4b0a03 in _0x3555a5){this[_0x2ccda2(0x1a9)][_0x4b0a03]=_0x3555a5[_0x4b0a03];}},VisuMZ['MessageCore']['Window_Base_update']=Window_Base['prototype'][_0x10cc9c(0x2be)],Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x2be)]=function(){const _0xdf7f0f=_0x10cc9c;VisuMZ['MessageCore']['Window_Base_update'][_0xdf7f0f(0x1bc)](this),this[_0xdf7f0f(0x15b)]();},Window_Base['prototype'][_0x10cc9c(0x22a)]=function(){return![];},Window_Base['prototype'][_0x10cc9c(0x15b)]=function(){const _0x5d7e15=_0x10cc9c;this[_0x5d7e15(0x1ef)]>0x0&&(this['canMove']()&&(this['x']=this['applyMoveEasing'](this['x'],this[_0x5d7e15(0x1fb)]),this['y']=this[_0x5d7e15(0x434)](this['y'],this[_0x5d7e15(0xde)]),this['width']=this['applyMoveEasing'](this[_0x5d7e15(0x36b)],this[_0x5d7e15(0x20e)]),this[_0x5d7e15(0x14f)]=this[_0x5d7e15(0x434)](this[_0x5d7e15(0x14f)],this[_0x5d7e15(0x37d)]),this['clampPlacementPosition']()),this[_0x5d7e15(0x1ef)]--);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x2eb)]=function(_0x57f297,_0x337740){const _0x131031=_0x10cc9c;!_0x57f297&&(this[_0x131031(0x36b)]=Math['min'](this[_0x131031(0x36b)],Graphics['width']),this[_0x131031(0x14f)]=Math[_0x131031(0x28d)](this[_0x131031(0x14f)],Graphics[_0x131031(0x14f)]));if(!_0x337740){const _0x4635dc=-(Math[_0x131031(0x30c)](Graphics[_0x131031(0x36b)]-Graphics[_0x131031(0x247)])/0x2),_0x3a4b8a=_0x4635dc+Graphics['width']-this[_0x131031(0x36b)],_0x579547=-(Math[_0x131031(0x30c)](Graphics[_0x131031(0x14f)]-Graphics[_0x131031(0xa1)])/0x2),_0x2c38a7=_0x579547+Graphics['height']-this[_0x131031(0x14f)];this['x']=this['x'][_0x131031(0xf8)](_0x4635dc,_0x3a4b8a),this['y']=this['y'][_0x131031(0xf8)](_0x579547,_0x2c38a7);}},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x434)]=function(_0x10383e,_0x2e6b98){const _0x5dbf46=_0x10cc9c,_0x569eb8=this[_0x5dbf46(0x1ef)],_0x3f8e2e=this[_0x5dbf46(0x42b)],_0x236627=this[_0x5dbf46(0xba)]((_0x3f8e2e-_0x569eb8)/_0x3f8e2e),_0x472c9f=this[_0x5dbf46(0xba)]((_0x3f8e2e-_0x569eb8+0x1)/_0x3f8e2e),_0x1e7b24=(_0x10383e-_0x2e6b98*_0x236627)/(0x1-_0x236627);return _0x1e7b24+(_0x2e6b98-_0x1e7b24)*_0x472c9f;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0xba)]=function(_0x3d0cc6){const _0x46e337=_0x10cc9c,_0x29492b=0x2;switch(this[_0x46e337(0x111)]){case 0x0:return _0x3d0cc6;case 0x1:return this[_0x46e337(0x2fe)](_0x3d0cc6,_0x29492b);case 0x2:return this['easeOut'](_0x3d0cc6,_0x29492b);case 0x3:return this['easeInOut'](_0x3d0cc6,_0x29492b);default:return Imported['VisuMZ_0_CoreEngine']?VisuMZ[_0x46e337(0x434)](_0x3d0cc6,this[_0x46e337(0x111)]):_0x3d0cc6;}},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x251)]=function(_0x5ba56d,_0x8b38fe,_0x278f51,_0x201989,_0x30c5d6,_0x766da7){const _0x2b08b8=_0x10cc9c;this[_0x2b08b8(0x1fb)]=_0x5ba56d,this[_0x2b08b8(0xde)]=_0x8b38fe,this[_0x2b08b8(0x20e)]=_0x278f51||this['width'],this[_0x2b08b8(0x37d)]=_0x201989||this[_0x2b08b8(0x14f)],this['_moveDuration']=_0x30c5d6||0x1;if(this['_moveDuration']<=0x0)this[_0x2b08b8(0x1ef)]=0x1;this[_0x2b08b8(0x42b)]=this['_moveDuration'],this['_moveEasingType']=_0x766da7||0x0;if(_0x30c5d6<=0x0)this[_0x2b08b8(0x15b)]();},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x3cc)]=function(_0x34338f,_0x4ba349,_0x453368,_0x204296,_0x20f861,_0x3e796d){const _0xd1899f=_0x10cc9c;this[_0xd1899f(0x1fb)]=this['x']+_0x34338f,this['_moveTargetY']=this['y']+_0x4ba349,this['_moveTargetWidth']=this[_0xd1899f(0x36b)]+(_0x453368||0x0),this[_0xd1899f(0x37d)]=this['height']+(_0x204296||0x0),this[_0xd1899f(0x1ef)]=_0x20f861||0x1;if(this['_moveDuration']<=0x0)this['_moveDuration']=0x1;this[_0xd1899f(0x42b)]=this[_0xd1899f(0x1ef)],this[_0xd1899f(0x111)]=_0x3e796d||0x0;if(_0x20f861<=0x0)this[_0xd1899f(0x15b)]();},Window_Base[_0x10cc9c(0x3be)]['resetRect']=function(_0x2a6b86,_0x235adb){const _0x2fe9c3=_0x10cc9c;this['moveTo'](this[_0x2fe9c3(0x27d)]['x'],this[_0x2fe9c3(0x27d)]['y'],this[_0x2fe9c3(0x27d)]['width'],this[_0x2fe9c3(0x27d)][_0x2fe9c3(0x14f)],_0x2a6b86,_0x235adb);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x301)]=Window_Base['prototype'][_0x10cc9c(0x3b2)],Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x3b2)]=function(_0x215d64){const _0x39df9c=_0x10cc9c;if(this[_0x39df9c(0x3f3)]())return;_0x215d64=_0x215d64['replace'](/\,/g,''),this['_textColorStack']=this[_0x39df9c(0x1f0)]||[],this['_textColorStack'][_0x39df9c(0x94)](this['contents'][_0x39df9c(0x162)]),VisuMZ[_0x39df9c(0x37b)][_0x39df9c(0x301)][_0x39df9c(0x1bc)](this,_0x215d64);},Window_Base['prototype'][_0x10cc9c(0x1b5)]=function(_0x226a70){const _0x211f55=_0x10cc9c;this[_0x211f55(0x3e5)](_0x226a70);if(this['isColorLocked']())return;_0x226a70[_0x211f55(0x312)]&&(this[_0x211f55(0x1f0)]=this[_0x211f55(0x1f0)]||[],this['contents'][_0x211f55(0x162)]=this[_0x211f55(0x1f0)][_0x211f55(0x16a)]()||ColorManager[_0x211f55(0x3bb)]());},Window_Base['prototype']['convertEscapeCharacters']=function(_0x4304d){const _0x297ba3=_0x10cc9c;return _0x4304d=this['convertTextMacros'](_0x4304d),_0x4304d=this['convertBackslashCharacters'](_0x4304d),_0x4304d=this['convertVariableEscapeCharacters'](_0x4304d),_0x4304d=this[_0x297ba3(0x3d7)](_0x4304d),_0x4304d=this['preConvertEscapeCharacters'](_0x4304d),_0x4304d=this[_0x297ba3(0x1ee)](_0x4304d),_0x4304d=this[_0x297ba3(0x8d)](_0x4304d),_0x4304d=this[_0x297ba3(0x345)](_0x4304d),_0x4304d=this[_0x297ba3(0x40b)](_0x4304d),_0x4304d=this[_0x297ba3(0xe9)](_0x4304d),_0x4304d=this[_0x297ba3(0x36f)](_0x4304d),_0x4304d=this[_0x297ba3(0x373)](_0x4304d),_0x4304d=this[_0x297ba3(0x3ae)](_0x4304d),_0x4304d=this[_0x297ba3(0xec)](_0x4304d),_0x4304d=this[_0x297ba3(0x43d)](_0x4304d),_0x4304d=this['convertVariableEscapeCharacters'](_0x4304d),_0x4304d=this['processAutoColorWords'](_0x4304d),_0x4304d=this[_0x297ba3(0x2a0)](_0x4304d),_0x4304d;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0xc3)]=function(_0x1a927b){const _0x8e2bf=_0x10cc9c;this['_textMacroFound']=![];for(const _0x2b99a9 of VisuMZ[_0x8e2bf(0x37b)][_0x8e2bf(0x10c)][_0x8e2bf(0xfa)]){_0x1a927b&&_0x1a927b[_0x8e2bf(0x306)](_0x2b99a9[_0x8e2bf(0x3ca)])&&(this[_0x8e2bf(0x2df)]=!![],_0x1a927b=_0x1a927b[_0x8e2bf(0x3c8)](_0x2b99a9[_0x8e2bf(0x3ca)],_0x2b99a9[_0x8e2bf(0x3a8)][_0x8e2bf(0x3e8)](this)));}return _0x1a927b||'';},Window_Base[_0x10cc9c(0x3be)]['convertBackslashCharacters']=function(_0x11fefe){const _0x22d0e7=_0x10cc9c;return _0x11fefe=_0x11fefe[_0x22d0e7(0x3c8)](/\\/g,'\x1b'),_0x11fefe=_0x11fefe[_0x22d0e7(0x3c8)](/\x1b\x1b/g,'\x5c'),_0x11fefe;},Window_Base[_0x10cc9c(0x3be)]['convertVariableEscapeCharacters']=function(_0x1d6f43){const _0x43a4c7=_0x10cc9c;for(;;){if(_0x1d6f43[_0x43a4c7(0x306)](/\\V\[(\d+)\]/gi))_0x1d6f43=_0x1d6f43[_0x43a4c7(0x3c8)](/\\V\[(\d+)\]/gi,(_0x32ec2f,_0x120608)=>this[_0x43a4c7(0x21b)](String($gameVariables[_0x43a4c7(0x1d8)](parseInt(_0x120608)))));else{if(_0x1d6f43[_0x43a4c7(0x306)](/\x1bV\[(\d+)\]/gi))_0x1d6f43=_0x1d6f43[_0x43a4c7(0x3c8)](/\x1bV\[(\d+)\]/gi,(_0x4e164e,_0x220025)=>this[_0x43a4c7(0x21b)](String($gameVariables[_0x43a4c7(0x1d8)](parseInt(_0x220025)))));else break;}}return _0x1d6f43;},Window_Base[_0x10cc9c(0x3be)]['convertButtonAssistEscapeCharacters']=function(_0x58b18d){const _0x27dc02=_0x10cc9c;return Imported[_0x27dc02(0x1ae)]&&(_0x58b18d=_0x58b18d['replace'](/<Up (?:KEY|BUTTON)>/gi,this[_0x27dc02(0x19d)]('up')),_0x58b18d=_0x58b18d[_0x27dc02(0x3c8)](/<Left (?:KEY|BUTTON)>/gi,this[_0x27dc02(0x19d)]('left')),_0x58b18d=_0x58b18d[_0x27dc02(0x3c8)](/<Right (?:KEY|BUTTON)>/gi,this[_0x27dc02(0x19d)]('right')),_0x58b18d=_0x58b18d[_0x27dc02(0x3c8)](/<Down (?:KEY|BUTTON)>/gi,this[_0x27dc02(0x19d)](_0x27dc02(0x1b2))),_0x58b18d=_0x58b18d[_0x27dc02(0x3c8)](/<Ok (?:KEY|BUTTON)>/gi,this[_0x27dc02(0x19d)]('ok')),_0x58b18d=_0x58b18d['replace'](/<Cancel (?:KEY|BUTTON)>/gi,this['convertButtonAssistText'](_0x27dc02(0xe6))),_0x58b18d=_0x58b18d[_0x27dc02(0x3c8)](/<Menu (?:KEY|BUTTON)>/gi,this[_0x27dc02(0x19d)](_0x27dc02(0x3c9))),_0x58b18d=_0x58b18d[_0x27dc02(0x3c8)](/<Shift (?:KEY|BUTTON)>/gi,this[_0x27dc02(0x19d)](_0x27dc02(0x16a))),_0x58b18d=_0x58b18d[_0x27dc02(0x3c8)](/<(?:PAGEUP|PAGE UP) (?:KEY|BUTTON)>/gi,this[_0x27dc02(0x19d)](_0x27dc02(0x3fb))),_0x58b18d=_0x58b18d[_0x27dc02(0x3c8)](/<(?:PAGEDOWN|PAGEDN|PAGE DOWN) (?:KEY|BUTTON)>/gi,this[_0x27dc02(0x19d)](_0x27dc02(0x11e)))),_0x58b18d;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x19d)]=function(_0x36e5b0){const _0x27ce0c=_0x10cc9c;let _0x46ef17=TextManager[_0x27ce0c(0x282)](_0x36e5b0)||'';return _0x46ef17=this[_0x27ce0c(0x21b)](_0x46ef17),_0x46ef17=this[_0x27ce0c(0x1cf)](_0x46ef17),_0x46ef17['trim']();},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x119)]=function(_0x26d1df){const _0x2a88f5=_0x10cc9c;return _0x26d1df=this[_0x2a88f5(0x200)](_0x26d1df),this[_0x2a88f5(0x2c6)](),_0x26d1df;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x200)]=function(_0x1a1419){const _0x48867b=_0x10cc9c;return _0x1a1419=TextManager[_0x48867b(0x44c)](_0x1a1419),_0x1a1419;},VisuMZ['MessageCore'][_0x10cc9c(0x37e)]=String[_0x10cc9c(0x3be)]['format'],String[_0x10cc9c(0x3be)]['format']=function(){const _0x384dde=_0x10cc9c;let _0x4e32ae=this;return _0x4e32ae=TextManager['parseLocalizedText'](_0x4e32ae),VisuMZ[_0x384dde(0x37b)][_0x384dde(0x37e)][_0x384dde(0x3f1)](_0x4e32ae,arguments);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x245)]=Bitmap[_0x10cc9c(0x3be)][_0x10cc9c(0x43b)],Bitmap[_0x10cc9c(0x3be)][_0x10cc9c(0x43b)]=function(_0xa046d3,_0x3bc37a,_0x239090,_0x552987,_0x2b34be,_0x123b19){const _0x5624d5=_0x10cc9c;_0xa046d3=TextManager[_0x5624d5(0x44c)](_0xa046d3),VisuMZ['MessageCore'][_0x5624d5(0x245)][_0x5624d5(0x1bc)](this,_0xa046d3,_0x3bc37a,_0x239090,_0x552987,_0x2b34be,_0x123b19);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0xe2)]=Bitmap[_0x10cc9c(0x3be)][_0x10cc9c(0x7f)],Bitmap[_0x10cc9c(0x3be)][_0x10cc9c(0x7f)]=function(_0x5ae486,_0x368463,_0x1e6b93,_0x3253e1,_0x3951cd,_0x4b9855){const _0x1714be=_0x10cc9c;_0x5ae486=TextManager[_0x1714be(0x44c)](_0x5ae486),VisuMZ[_0x1714be(0x37b)][_0x1714be(0xe2)]['call'](this,_0x5ae486,_0x368463,_0x1e6b93,_0x3253e1,_0x3951cd,_0x4b9855);},Window_Base[_0x10cc9c(0x3be)]['postConvertEscapeCharacters']=function(_0x3c3442){return _0x3c3442;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x1ee)]=function(_0x4b35fa){const _0x2b2d9e=_0x10cc9c;return this[_0x2b2d9e(0x379)]()&&(_0x4b35fa=_0x4b35fa[_0x2b2d9e(0x3c8)](/<(?:SHOW|HIDE|DISABLE|ENABLE)>/gi,''),_0x4b35fa=_0x4b35fa[_0x2b2d9e(0x3c8)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x4b35fa=_0x4b35fa[_0x2b2d9e(0x3c8)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:ALL|ANY)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x4b35fa=_0x4b35fa['replace'](/<CHOICE WIDTH:[ ](\d+)>/gi,''),_0x4b35fa=_0x4b35fa[_0x2b2d9e(0x3c8)](/<CHOICE INDENT:[ ](\d+)>/gi,''),_0x4b35fa=_0x4b35fa[_0x2b2d9e(0x3c8)](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi,''),_0x4b35fa=_0x4b35fa[_0x2b2d9e(0x3c8)](/<(?:FG|BG)(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/gi,''),_0x4b35fa=_0x4b35fa[_0x2b2d9e(0x3c8)](/<(?:FG|BG)(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/gi,'')),_0x4b35fa;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x379)]=function(){const _0x5677a6=_0x10cc9c,_0x30e28d=['Window_ChoiceList',_0x5677a6(0xc1)];return _0x30e28d[_0x5677a6(0x100)](this[_0x5677a6(0x327)][_0x5677a6(0x29c)]);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x8d)]=function(_0x495d4e){const _0x40608c=_0x10cc9c;return _0x495d4e=_0x495d4e['replace'](/<B>/gi,'\x1bBOLD[1]'),_0x495d4e=_0x495d4e[_0x40608c(0x3c8)](/<\/B>/gi,'\x1bBOLD[0]'),_0x495d4e=_0x495d4e['replace'](/<I>/gi,'\x1bITALIC[1]'),_0x495d4e=_0x495d4e[_0x40608c(0x3c8)](/<\/I>/gi,_0x40608c(0x1a8)),_0x495d4e;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x345)]=function(_0x3abfee){const _0x302a03=_0x10cc9c;return _0x3abfee=_0x3abfee[_0x302a03(0x3c8)](/<LEFT>/gi,_0x302a03(0x362)),_0x3abfee=_0x3abfee['replace'](/<\/LEFT>/gi,'\x1bTEXTALIGNMENT[0]'),_0x3abfee=_0x3abfee[_0x302a03(0x3c8)](/<CENTER>/gi,_0x302a03(0x185)),_0x3abfee=_0x3abfee['replace'](/<\/CENTER>/gi,_0x302a03(0x28e)),_0x3abfee=_0x3abfee[_0x302a03(0x3c8)](/<RIGHT>/gi,_0x302a03(0x452)),_0x3abfee=_0x3abfee[_0x302a03(0x3c8)](/<\/RIGHT>/gi,'\x1bTEXTALIGNMENT[0]'),_0x3abfee;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x40b)]=function(_0x521850){const _0x220df7=_0x10cc9c;return _0x521850=_0x521850[_0x220df7(0x3c8)](/<COLORLOCK>/gi,_0x220df7(0xd9)),_0x521850=_0x521850[_0x220df7(0x3c8)](/<\/COLORLOCK>/gi,_0x220df7(0x459)),_0x521850=_0x521850[_0x220df7(0x3c8)](/\(\(\(/gi,_0x220df7(0xd9)),_0x521850=_0x521850[_0x220df7(0x3c8)](/\)\)\)/gi,'\x1bCOLORLOCK[0]'),_0x521850;},Window_Base['prototype'][_0x10cc9c(0xe9)]=function(_0x407a04){const _0x235705=_0x10cc9c;return _0x407a04=_0x407a04['replace'](/<(?:LC|LOWERCASE|LOWER CASE|LOWER)>/gi,'\x1bCASING[1]'),_0x407a04=_0x407a04[_0x235705(0x3c8)](/<\/(?:LC|LOWERCASE|LOWER CASE|LOWER)>/gi,_0x235705(0x2e4)),_0x407a04=_0x407a04['replace'](/<(?:UC|UPPERCASE|UPPER CASE|UPPER)>/gi,_0x235705(0x2c1)),_0x407a04=_0x407a04[_0x235705(0x3c8)](/<\/(?:UC|UPPERCASE|UPPER CASE|UPPER)>/gi,_0x235705(0x2e4)),_0x407a04=_0x407a04[_0x235705(0x3c8)](/<(?:CAPS|CAPSLOCK|CAPS LOCK|CAP)>/gi,_0x235705(0x1e0)),_0x407a04=_0x407a04['replace'](/<\/(?:CAPS|CAPSLOCK|CAPS LOCK|CAP)>/gi,'\x1bCASING[0]'),_0x407a04=_0x407a04[_0x235705(0x3c8)](/<(?:ALT|ALTERNATE|ALT CASE)>/gi,_0x235705(0x24e)),_0x407a04=_0x407a04[_0x235705(0x3c8)](/<\/(?:ALT|ALTERNATE|ALT CASE)>/gi,'\x1bCASING[0]'),_0x407a04=_0x407a04['replace'](/<(?:CHAOS|CHAOSCASE|CHAOS CASE)>/gi,_0x235705(0x1ad)),_0x407a04=_0x407a04['replace'](/<\/(?:CHAOS|CHAOSCASE|CHAOS CASE)>/gi,_0x235705(0x2e4)),_0x407a04;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x36f)]=function(_0x7f7449){const _0x39ade5=_0x10cc9c;return _0x7f7449=_0x7f7449[_0x39ade5(0x3c8)](/\x1bN\[(\d+)\]/gi,(_0x580a5d,_0x4658e5)=>this[_0x39ade5(0x21a)](parseInt(_0x4658e5))),_0x7f7449=_0x7f7449['replace'](/\x1bP\[(\d+)\]/gi,(_0x28bde4,_0x318038)=>this[_0x39ade5(0x18d)](parseInt(_0x318038))),_0x7f7449=_0x7f7449[_0x39ade5(0x3c8)](/\x1bG/gi,TextManager[_0x39ade5(0xae)]),_0x7f7449;},Window_Base['prototype'][_0x10cc9c(0x373)]=function(_0x4701f4){const _0x58d1d0=_0x10cc9c;return _0x4701f4=_0x4701f4[_0x58d1d0(0x3c8)](/\<(?:BATTLE|CURRENT BATTLE) TARGET\>/gi,this[_0x58d1d0(0x11b)]()),_0x4701f4=_0x4701f4[_0x58d1d0(0x3c8)](/\<(?:BATTLE|CURRENT BATTLE) (?:USER|SUBJECT)\>/gi,this['battleUserName']()),_0x4701f4=_0x4701f4[_0x58d1d0(0x3c8)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION)\>/gi,this[_0x58d1d0(0x3aa)](!![])),_0x4701f4=_0x4701f4[_0x58d1d0(0x3c8)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION) NAME\>/gi,this['battleActionName'](![])),_0x4701f4;},Window_Base['prototype']['battleTargetName']=function(){const _0xf4c3b2=_0x10cc9c;if(!SceneManager[_0xf4c3b2(0x3f6)]())return'';if(BattleManager[_0xf4c3b2(0x201)])return BattleManager[_0xf4c3b2(0x201)][_0xf4c3b2(0x29c)]();if(BattleManager['_targets'][0x0])return BattleManager[_0xf4c3b2(0x166)][0x0][_0xf4c3b2(0x29c)]();return'';},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x3c7)]=function(){const _0x1c1486=_0x10cc9c;if(!SceneManager[_0x1c1486(0x3f6)]())return'';let _0xd1c00d=null;return _0xd1c00d=BattleManager['_subject'],!_0xd1c00d&&BattleManager['isInputting']()&&(_0xd1c00d=BattleManager['actor']()),_0xd1c00d?_0xd1c00d[_0x1c1486(0x29c)]():'';},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x3aa)]=function(_0x78f09c){const _0x384ab3=_0x10cc9c;if(!SceneManager[_0x384ab3(0x3f6)]())return'';let _0x1148f4=BattleManager[_0x384ab3(0xff)]||null;!_0x1148f4&&BattleManager[_0x384ab3(0x26b)]()&&(_0x1148f4=BattleManager[_0x384ab3(0x1f1)]());if(_0x1148f4&&_0x1148f4[_0x384ab3(0x1a6)]()){let _0x1203b7='';if(_0x78f09c)_0x1203b7+=_0x384ab3(0xaa)['format'](_0x1148f4[_0x384ab3(0x1a6)]()[_0x384ab3(0x449)]);return _0x1203b7+=_0x1148f4[_0x384ab3(0x1a6)]()[_0x384ab3(0x29c)],_0x1203b7;}return'';},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x3ae)]=function(_0x2b1c62){const _0x186fbd=_0x10cc9c;for(const _0x1352e1 of VisuMZ[_0x186fbd(0x37b)][_0x186fbd(0x10c)]['TextCodeActions']){_0x2b1c62[_0x186fbd(0x306)](_0x1352e1[_0x186fbd(0x3ca)])&&(_0x2b1c62=_0x2b1c62[_0x186fbd(0x3c8)](_0x1352e1[_0x186fbd(0x3ca)],_0x1352e1[_0x186fbd(0x3a8)]),_0x2b1c62=this[_0x186fbd(0x1cf)](_0x2b1c62));}return _0x2b1c62;},Window_Base[_0x10cc9c(0x3be)]['convertMessageCoreEscapeReplacements']=function(_0x3f045a){const _0x18694d=_0x10cc9c;for(const _0x13a812 of VisuMZ[_0x18694d(0x37b)][_0x18694d(0x10c)][_0x18694d(0x1df)]){_0x3f045a['match'](_0x13a812[_0x18694d(0x3ca)])&&(_0x3f045a=_0x3f045a[_0x18694d(0x3c8)](_0x13a812['textCodeCheck'],_0x13a812[_0x18694d(0x3a8)]['bind'](this)),_0x3f045a=this[_0x18694d(0x1cf)](_0x3f045a));}return _0x3f045a;},Window_Base['prototype'][_0x10cc9c(0x21a)]=function(_0x345a10){const _0x599f84=_0x10cc9c,_0x19c685=_0x345a10>=0x1?$gameActors['actor'](_0x345a10):null,_0x46b31b=_0x19c685?_0x19c685[_0x599f84(0x29c)]():'',_0x243855=Number(VisuMZ['MessageCore']['Settings']['AutoColor'][_0x599f84(0xaf)]);return this[_0x599f84(0x363)]()&&_0x243855!==0x0?_0x599f84(0x28b)[_0x599f84(0x2d0)](_0x243855,_0x46b31b):_0x46b31b;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x18d)]=function(_0x53b214){const _0x4e8729=_0x10cc9c,_0x10ac48=_0x53b214>=0x1?$gameParty[_0x4e8729(0x276)]()[_0x53b214-0x1]:null,_0x577c85=_0x10ac48?_0x10ac48[_0x4e8729(0x29c)]():'',_0x2cfc77=Number(VisuMZ[_0x4e8729(0x37b)][_0x4e8729(0x10c)][_0x4e8729(0x26d)][_0x4e8729(0xaf)]);return this['isAutoColorAffected']()&&_0x2cfc77!==0x0?_0x4e8729(0x28b)[_0x4e8729(0x2d0)](_0x2cfc77,_0x577c85):_0x577c85;},Window_Base['prototype'][_0x10cc9c(0x106)]=function(_0x58c477){const _0x2d2523=_0x10cc9c;return this['isAutoColorAffected']()&&(_0x58c477=this[_0x2d2523(0x2f2)](_0x58c477),_0x58c477=this[_0x2d2523(0xab)](_0x58c477)),_0x58c477;},Window_Base[_0x10cc9c(0x3be)]['processStoredAutoColorChanges']=function(_0x2b6f7c){const _0x32d593=_0x10cc9c;for(autoColor of VisuMZ[_0x32d593(0x37b)][_0x32d593(0x17c)]){_0x2b6f7c=_0x2b6f7c[_0x32d593(0x3c8)](autoColor[0x0],autoColor[0x1]);}return _0x2b6f7c;},Window_Base[_0x10cc9c(0x3be)]['clearActorNameAutoColor']=function(){const _0x1a6375=_0x10cc9c;this[_0x1a6375(0x113)]=[];},Window_Base[_0x10cc9c(0x3be)]['registerActorNameAutoColorChanges']=function(){const _0x5bbc72=_0x10cc9c;this[_0x5bbc72(0x3df)]();const _0x46325a=VisuMZ[_0x5bbc72(0x37b)][_0x5bbc72(0x10c)][_0x5bbc72(0x26d)],_0x43cf2b=_0x46325a[_0x5bbc72(0xaf)];if(_0x43cf2b<=0x0)return;for(const _0x5d5962 of $gameActors[_0x5bbc72(0x147)]){if(!_0x5d5962)continue;const _0x12011d=_0x5d5962[_0x5bbc72(0x29c)]();if(_0x12011d['trim']()[_0x5bbc72(0x118)]<=0x0)continue;if(/^\d+$/[_0x5bbc72(0x33c)](_0x12011d))continue;if(_0x12011d[_0x5bbc72(0x306)](/-----/i))continue;let _0x1c9a2f=VisuMZ[_0x5bbc72(0x37b)][_0x5bbc72(0x27c)](_0x12011d);const _0x18d1c0=new RegExp('\x5cb'+_0x1c9a2f+'\x5cb','g'),_0x4696fd=_0x5bbc72(0x28b)[_0x5bbc72(0x2d0)](_0x43cf2b,_0x12011d);this['_autoColorActorNames'][_0x5bbc72(0x38b)]([_0x18d1c0,_0x4696fd]);}},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0xab)]=function(_0x1f3ec4){const _0x23d562=_0x10cc9c;this[_0x23d562(0x113)]===undefined&&this[_0x23d562(0x2c6)]();for(autoColor of this[_0x23d562(0x113)]){_0x1f3ec4=_0x1f3ec4['replace'](autoColor[0x0],autoColor[0x1]);}return _0x1f3ec4;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x11f)]=function(_0x5d5000,_0x5be011,_0x17beea){const _0x36eb3e=_0x10cc9c;if(!_0x5d5000)return'';const _0x5bf5c6=_0x5d5000[_0x5be011];let _0x4dbf23='';if(_0x5bf5c6&&_0x17beea&&_0x5bf5c6[_0x36eb3e(0x449)]){const _0x5b7884='\x1bi[%1]%2';_0x4dbf23=_0x5b7884[_0x36eb3e(0x2d0)](_0x5bf5c6['iconIndex'],_0x5bf5c6['name']);}else _0x5bf5c6?_0x4dbf23=_0x5bf5c6[_0x36eb3e(0x29c)]:_0x4dbf23='';return _0x4dbf23=TextManager[_0x36eb3e(0x44c)](_0x4dbf23),this['isAutoColorAffected']()&&(_0x4dbf23=this[_0x36eb3e(0x35e)](_0x4dbf23,_0x5d5000)),_0x4dbf23;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x3bd)]=function(){const _0x171def=_0x10cc9c,_0x4b7a9e=$gameParty[_0x171def(0x440)]();if(_0x4b7a9e['id']<0x0)return'';let _0x13793f=null;if(_0x4b7a9e[_0x171def(0x40f)]===0x0)_0x13793f=$dataItems[_0x4b7a9e['id']];if(_0x4b7a9e[_0x171def(0x40f)]===0x1)_0x13793f=$dataWeapons[_0x4b7a9e['id']];if(_0x4b7a9e[_0x171def(0x40f)]===0x2)_0x13793f=$dataArmors[_0x4b7a9e['id']];if(!_0x13793f)return'';return _0x171def(0xe8)['format'](_0x13793f['iconIndex']);},Window_Base[_0x10cc9c(0x3be)]['lastGainedObjectName']=function(_0x4aee87){const _0x98aa51=_0x10cc9c,_0x2bd344=$gameParty[_0x98aa51(0x440)]();if(_0x2bd344['id']<0x0)return'';let _0x4c9241=null;if(_0x2bd344[_0x98aa51(0x40f)]===0x0)_0x4c9241=$dataItems[_0x2bd344['id']];if(_0x2bd344['type']===0x1)_0x4c9241=$dataWeapons[_0x2bd344['id']];if(_0x2bd344[_0x98aa51(0x40f)]===0x2)_0x4c9241=$dataArmors[_0x2bd344['id']];if(!_0x4c9241)return'';let _0x3790f3=_0x4c9241[_0x98aa51(0x29c)]||'';return TextManager[_0x98aa51(0x438)]()&&(_0x3790f3=TextManager['parseLocalizedText'](_0x3790f3)),_0x4aee87?_0x98aa51(0x460)[_0x98aa51(0x2d0)](_0x4c9241[_0x98aa51(0x449)],_0x3790f3):_0x3790f3;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x160)]=function(){const _0x5619fa=_0x10cc9c,_0x4f3342=$gameParty[_0x5619fa(0x440)]();if(_0x4f3342['id']<=0x0)return'';return _0x4f3342[_0x5619fa(0x2c7)];},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x35e)]=function(_0x1c723b,_0x429a3f){const _0x34fcc9=_0x10cc9c,_0x17b193=VisuMZ['MessageCore'][_0x34fcc9(0x10c)][_0x34fcc9(0x26d)];let _0x1c7d88=0x0;if(_0x429a3f===$dataActors)_0x1c7d88=_0x17b193['Actors'];if(_0x429a3f===$dataClasses)_0x1c7d88=_0x17b193[_0x34fcc9(0xf0)];if(_0x429a3f===$dataSkills)_0x1c7d88=_0x17b193[_0x34fcc9(0x210)];if(_0x429a3f===$dataItems)_0x1c7d88=_0x17b193['Items'];if(_0x429a3f===$dataWeapons)_0x1c7d88=_0x17b193[_0x34fcc9(0xc0)];if(_0x429a3f===$dataArmors)_0x1c7d88=_0x17b193['Armors'];if(_0x429a3f===$dataEnemies)_0x1c7d88=_0x17b193[_0x34fcc9(0x1d7)];if(_0x429a3f===$dataStates)_0x1c7d88=_0x17b193[_0x34fcc9(0x2e2)];return _0x1c7d88>0x0&&(_0x1c723b=_0x34fcc9(0x28b)[_0x34fcc9(0x2d0)](_0x1c7d88,_0x1c723b)),_0x1c723b;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x2a0)]=function(_0x3a3250){const _0x510801=_0x10cc9c;if(_0x3a3250[_0x510801(0x100)]('\x1bTEXTALIGNMENT'))return this[_0x510801(0xf5)](![]),_0x3a3250=_0x3a3250['replace'](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a'),_0x3a3250=_0x3a3250[_0x510801(0x3c8)](/<(?:WORDWRAP|WORD WRAP)>/gi,''),_0x3a3250=_0x3a3250[_0x510801(0x3c8)](/<(?:NOWORDWRAP|NO WORD WRAP)>/gi,''),_0x3a3250=_0x3a3250[_0x510801(0x3c8)](/<\/(?:NOWORDWRAP|NO WORD WRAP)>/gi,''),_0x3a3250;_0x3a3250=_0x3a3250[_0x510801(0x3c8)](/<(?:WORDWRAP|WORD WRAP)>/gi,(_0x1e2ab3,_0x3b39ef)=>this[_0x510801(0xf5)](!![])),_0x3a3250=_0x3a3250[_0x510801(0x3c8)](/<(?:NOWORDWRAP|NO WORD WRAP)>/gi,(_0x1de7d7,_0x1a731d)=>this[_0x510801(0xf5)](![])),_0x3a3250=_0x3a3250[_0x510801(0x3c8)](/<\/(?:WORDWRAP|WORD WRAP)>/gi,(_0x1afbaa,_0x26c7c1)=>this['setWordWrap'](![]));if(_0x3a3250[_0x510801(0x306)](Window_Message[_0x510801(0x468)]))this[_0x510801(0xf5)](![]);else _0x3a3250[_0x510801(0x306)](Window_Message[_0x510801(0x3ac)])&&this['setWordWrap'](![]);if(!this[_0x510801(0x33b)]())return _0x3a3250=_0x3a3250['replace'](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a'),_0x3a3250;if(_0x3a3250[_0x510801(0x118)]<=0x0)return _0x3a3250;return _0x3a3250['match'](/[\u3040-\u30FF\u4E00-\u9FFF]/g)&&(_0x3a3250=VisuMZ[_0x510801(0x37b)]['SplitJpCnCharacters'](_0x3a3250)[_0x510801(0x421)]('')),VisuMZ['MessageCore'][_0x510801(0x10c)][_0x510801(0x46a)][_0x510801(0x26a)]?(_0x3a3250=_0x3a3250[_0x510801(0x3c8)](/[\n\r]+/g,'\x20'),_0x3a3250=_0x3a3250[_0x510801(0x3c8)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a')):(_0x3a3250=_0x3a3250[_0x510801(0x3c8)](/[\n\r]+/g,''),_0x3a3250=_0x3a3250[_0x510801(0x3c8)](/<(?:BR|LINEBREAK)>/gi,'\x0a')),_0x3a3250=this[_0x510801(0x1f2)](_0x3a3250),_0x3a3250=_0x3a3250[_0x510801(0x205)]('\x20')[_0x510801(0x421)](_0x510801(0x165)),_0x3a3250=_0x3a3250[_0x510801(0x3c8)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x3a3250=_0x3a3250[_0x510801(0x3c8)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x3a3250;},VisuMZ['MessageCore']['SplitJpCnCharacters']=function(_0x3fe182){const _0x7706fe=_0x10cc9c;let _0x3740fd=[],_0x22264e='';while(_0x3fe182[_0x7706fe(0x118)]>0x0){const _0x1ea8ec=_0x3fe182[_0x7706fe(0x1fe)](0x0);_0x3fe182=_0x3fe182[_0x7706fe(0x45d)](0x1),_0x1ea8ec[_0x7706fe(0x306)](/[\u3040-\u30FF\u4E00-\u9FFF]/g)?(_0x22264e[_0x7706fe(0x118)]>0x0&&(_0x3740fd[_0x7706fe(0x38b)](_0x22264e),_0x22264e=''),_0x3740fd[_0x7706fe(0x38b)](_0x1ea8ec+_0x7706fe(0xb2))):_0x22264e+=_0x1ea8ec;}return _0x22264e[_0x7706fe(0x118)]>0x0&&(_0x3740fd[_0x7706fe(0x38b)](_0x22264e),_0x22264e=''),_0x3740fd;},Window_Base[_0x10cc9c(0x3be)]['addWrapBreakAfterPunctuation']=function(_0x36b026){return _0x36b026;},VisuMZ[_0x10cc9c(0x37b)]['Window_Base_processNewLine']=Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0xca)],Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0xca)]=function(_0x1c8619){const _0x2ac864=_0x10cc9c;VisuMZ[_0x2ac864(0x37b)]['Window_Base_processNewLine'][_0x2ac864(0x1bc)](this,_0x1c8619),this['processTextAlignmentX'](_0x1c8619);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x26e)]=function(_0x3d2d34){const _0x591ea3=_0x10cc9c;let _0x2eda9e=_0x3d2d34['text'][_0x3d2d34[_0x591ea3(0x17f)]++];if(_0x2eda9e[_0x591ea3(0x38d)](0x0)<0x20)this['flushTextState'](_0x3d2d34),this[_0x591ea3(0x307)](_0x3d2d34,_0x2eda9e);else{if(this['_textCasing']===0x1)_0x2eda9e=_0x2eda9e[_0x591ea3(0x193)]();if(this[_0x591ea3(0x430)]===0x2){if(this[_0x591ea3(0xa5)])_0x2eda9e=_0x2eda9e['toUpperCase']();this[_0x591ea3(0xa5)]=/\s/['test'](_0x2eda9e);}if(this[_0x591ea3(0x430)]===0x3)_0x2eda9e=_0x2eda9e[_0x591ea3(0x296)]();this['_textCasing']===0x4&&(_0x2eda9e=this['_lastAltCase']?_0x2eda9e[_0x591ea3(0x296)]():_0x2eda9e[_0x591ea3(0x193)](),this[_0x591ea3(0x418)]=!this[_0x591ea3(0x418)]),this[_0x591ea3(0x430)]===0x5&&(_0x2eda9e=Math['random']()<0.5?_0x2eda9e[_0x591ea3(0x296)]():_0x2eda9e[_0x591ea3(0x193)]()),_0x3d2d34['buffer']+=_0x2eda9e;}},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x405)]=Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x307)],Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x307)]=function(_0x457404,_0x359891){const _0x4bc2ed=_0x10cc9c;VisuMZ[_0x4bc2ed(0x37b)][_0x4bc2ed(0x405)][_0x4bc2ed(0x1bc)](this,_0x457404,_0x359891);if(_0x359891===_0x4bc2ed(0x165))this['processWrapBreak'](_0x457404);else _0x359891===_0x4bc2ed(0xb2)&&this[_0x4bc2ed(0x366)](_0x457404,!![]);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x2ef)]=function(_0x5a2730){const _0x142cd9=_0x10cc9c;var _0x2ae6ec=/^\<(.*?)\>/[_0x142cd9(0x1af)](_0x5a2730[_0x142cd9(0x13c)][_0x142cd9(0x45d)](_0x5a2730['index']));return _0x2ae6ec?(_0x5a2730[_0x142cd9(0x17f)]+=_0x2ae6ec[0x0]['length'],String(_0x2ae6ec[0x0][_0x142cd9(0x45d)](0x1,_0x2ae6ec[0x0][_0x142cd9(0x118)]-0x1))):'';},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x209)]=Window_Base['prototype']['processEscapeCharacter'],Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x42c)]=function(_0x117876,_0x3626c5){const _0x51ba9d=_0x10cc9c;switch(_0x117876){case'C':_0x3626c5[_0x51ba9d(0x312)]?VisuMZ[_0x51ba9d(0x37b)][_0x51ba9d(0x209)][_0x51ba9d(0x1bc)](this,_0x117876,_0x3626c5):this[_0x51ba9d(0x3e5)](_0x3626c5);break;case'I':case'{':case'}':VisuMZ['MessageCore'][_0x51ba9d(0x209)][_0x51ba9d(0x1bc)](this,_0x117876,_0x3626c5);break;case'FS':this[_0x51ba9d(0x2fc)](_0x3626c5);break;case'PX':this[_0x51ba9d(0x3e0)](_0x3626c5);break;case'PY':this[_0x51ba9d(0x403)](_0x3626c5);break;case _0x51ba9d(0x2cf):this['processFontChangeBold'](this[_0x51ba9d(0x3e5)](_0x3626c5));break;case _0x51ba9d(0x29b):this[_0x51ba9d(0x32d)](_0x3626c5);break;case _0x51ba9d(0x136):this[_0x51ba9d(0x340)](_0x3626c5);break;case _0x51ba9d(0x352):this[_0x51ba9d(0x3fc)](_0x3626c5);break;case'COMMONEVENT':this[_0x51ba9d(0x2b7)](_0x3626c5);break;case _0x51ba9d(0x1cc):this[_0x51ba9d(0x2b8)](this[_0x51ba9d(0x3e5)](_0x3626c5));break;case'PICTURE':this[_0x51ba9d(0x331)](_0x3626c5);break;case _0x51ba9d(0x2a3):this[_0x51ba9d(0x1b5)](_0x3626c5);break;case _0x51ba9d(0x110):this[_0x51ba9d(0x32a)](_0x3626c5);break;case'WAIT':this[_0x51ba9d(0xc5)](_0x3626c5);break;case'WRAPBREAK':this[_0x51ba9d(0x366)](_0x3626c5);break;case _0x51ba9d(0x3b1):this[_0x51ba9d(0x366)](_0x3626c5,!![]);break;default:this[_0x51ba9d(0x3d5)](_0x117876,_0x3626c5);}},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x3d5)]=function(_0x170f8d,_0x25ac02){const _0x586a05=_0x10cc9c;for(const _0x377562 of VisuMZ[_0x586a05(0x37b)][_0x586a05(0x10c)]['TextCodeActions']){if(_0x377562[_0x586a05(0x220)]===_0x170f8d){if(_0x377562[_0x586a05(0x398)]==='')this[_0x586a05(0x3e5)](_0x25ac02);_0x377562[_0x586a05(0x39e)]['call'](this,_0x25ac02);if(this[_0x586a05(0x327)]===Window_Message){const _0x22582b=_0x377562[_0x586a05(0x3d6)]||0x0;if(_0x22582b>0x0)this['launchMessageCommonEvent'](_0x22582b);}}}},Window_Base[_0x10cc9c(0x3be)]['makeFontBigger']=function(){const _0x2ad460=_0x10cc9c;this['contents'][_0x2ad460(0x313)]+=VisuMZ[_0x2ad460(0x37b)]['Settings']['General'][_0x2ad460(0xc8)],this[_0x2ad460(0x1a9)][_0x2ad460(0x313)]=Math[_0x2ad460(0x28d)](this[_0x2ad460(0x1a9)][_0x2ad460(0x313)],VisuMZ['MessageCore'][_0x2ad460(0x10c)][_0x2ad460(0x3cb)]['FontBiggerCap']);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x3f5)]=function(){const _0x320615=_0x10cc9c;this[_0x320615(0x1a9)][_0x320615(0x313)]-=VisuMZ['MessageCore'][_0x320615(0x10c)][_0x320615(0x3cb)][_0x320615(0xc8)],this['contents']['fontSize']=Math[_0x320615(0x3af)](this['contents'][_0x320615(0x313)],VisuMZ['MessageCore'][_0x320615(0x10c)][_0x320615(0x3cb)][_0x320615(0xd8)]);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x2fc)]=function(_0xf1f913){const _0x536fcb=_0x10cc9c,_0x7741f1=this[_0x536fcb(0x3e5)](_0xf1f913);this[_0x536fcb(0x1a9)][_0x536fcb(0x313)]=_0x7741f1[_0x536fcb(0xf8)](VisuMZ[_0x536fcb(0x37b)]['Settings'][_0x536fcb(0x3cb)][_0x536fcb(0xd8)],VisuMZ[_0x536fcb(0x37b)][_0x536fcb(0x10c)][_0x536fcb(0x3cb)]['FontBiggerCap']);},Window_Base['prototype'][_0x10cc9c(0x10a)]=function(_0x48873d){const _0x105a85=_0x10cc9c;let _0xe0ad44=this[_0x105a85(0x1a9)][_0x105a85(0x313)];const _0x2541e6=/\x1b({|}|FS)(\[(\d+)])?/gi;for(;;){const _0x51e60d=_0x2541e6[_0x105a85(0x1af)](_0x48873d);if(!_0x51e60d)break;const _0x3baeb3=String(_0x51e60d[0x1])[_0x105a85(0x296)]();if(_0x3baeb3==='{')this[_0x105a85(0x326)]();else{if(_0x3baeb3==='}')this['makeFontSmaller']();else _0x3baeb3==='FS'&&(this[_0x105a85(0x1a9)]['fontSize']=parseInt(_0x51e60d[0x3])[_0x105a85(0xf8)](VisuMZ[_0x105a85(0x37b)]['Settings']['General'][_0x105a85(0xd8)],VisuMZ[_0x105a85(0x37b)][_0x105a85(0x10c)][_0x105a85(0x3cb)][_0x105a85(0xdf)]));}this[_0x105a85(0x1a9)]['fontSize']>_0xe0ad44&&(_0xe0ad44=this['contents']['fontSize']);}return _0xe0ad44;},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x3e0)]=function(_0x182402){const _0x4aae62=_0x10cc9c;_0x182402['x']=this[_0x4aae62(0x3e5)](_0x182402),VisuMZ['MessageCore'][_0x4aae62(0x10c)][_0x4aae62(0x3cb)][_0x4aae62(0x8a)]&&(_0x182402['x']+=_0x182402[_0x4aae62(0x2dc)]);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x403)]=function(_0x201fba){const _0x230363=_0x10cc9c;_0x201fba['y']=this['obtainEscapeParam'](_0x201fba),VisuMZ[_0x230363(0x37b)]['Settings']['General'][_0x230363(0x8a)]&&(_0x201fba['y']+=_0x201fba[_0x230363(0x2ae)]);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x184)]=function(_0x4ca00a){const _0x4f032c=_0x10cc9c;this['contents'][_0x4f032c(0x38e)]=!!_0x4ca00a;},Window_Base[_0x10cc9c(0x3be)]['processFontChangeItalic']=function(_0x2c2952){const _0x6218c0=_0x10cc9c;this[_0x6218c0(0x1a9)][_0x6218c0(0x105)]=!!_0x2c2952;},Window_Base['prototype'][_0x10cc9c(0x32a)]=function(_0xf2025b){const _0x5048cd=_0x10cc9c,_0x2c51f2=this[_0x5048cd(0x3e5)](_0xf2025b);if(!_0xf2025b['drawing'])return;switch(_0x2c51f2){case 0x0:this[_0x5048cd(0x163)](_0x5048cd(0x9e));return;case 0x1:this['setTextAlignment']('left');break;case 0x2:this[_0x5048cd(0x163)](_0x5048cd(0x35b));break;case 0x3:this[_0x5048cd(0x163)](_0x5048cd(0xa4));break;}this[_0x5048cd(0x225)](_0xf2025b);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x225)]=function(_0x15bd90){const _0x21313d=_0x10cc9c;if(!_0x15bd90['drawing'])return;if(_0x15bd90[_0x21313d(0x36c)])return;if(this['getTextAlignment']()==='default')return;let _0x375c32=_0x15bd90[_0x21313d(0x13c)][_0x21313d(0x92)](_0x21313d(0x450),_0x15bd90[_0x21313d(0x17f)]+0x1),_0x22f747=_0x15bd90['text'][_0x21313d(0x92)]('\x0a',_0x15bd90['index']+0x1);if(_0x375c32<0x0)_0x375c32=_0x15bd90['text'][_0x21313d(0x118)]+0x1;if(_0x22f747>0x0)_0x375c32=Math[_0x21313d(0x28d)](_0x375c32,_0x22f747);const _0x42d9c0=_0x15bd90[_0x21313d(0x13c)][_0x21313d(0x350)](_0x15bd90[_0x21313d(0x17f)],_0x375c32),_0x2d73aa=this[_0x21313d(0x2e1)](_0x42d9c0)[_0x21313d(0x36b)],_0x3aba6a=_0x15bd90[_0x21313d(0x36b)]||this[_0x21313d(0x34d)]-0x8,_0x34dac7=this[_0x21313d(0x327)]===Window_Message&&$gameMessage[_0x21313d(0x34e)]()!=='';switch(this['getTextAlignment']()){case'left':_0x15bd90['x']=_0x15bd90[_0x21313d(0x2dc)];break;case'center':_0x15bd90['x']=_0x15bd90[_0x21313d(0x2dc)],_0x15bd90['x']+=Math['floor']((_0x3aba6a-_0x2d73aa)/0x2);_0x34dac7&&(_0x15bd90['x']-=_0x15bd90[_0x21313d(0x2dc)]/0x2);break;case _0x21313d(0xa4):_0x15bd90['x']=_0x3aba6a-_0x2d73aa+_0x15bd90[_0x21313d(0x2dc)];_0x34dac7&&(_0x15bd90['x']-=_0x15bd90[_0x21313d(0x2dc)]);break;}},Window_Base[_0x10cc9c(0x3be)]['textSizeExTextAlignment']=function(_0x508797){const _0x8837c4=_0x10cc9c;_0x508797=_0x508797[_0x8837c4(0x3c8)](/\x1b!/g,''),_0x508797=_0x508797[_0x8837c4(0x3c8)](/\x1b\|/g,''),_0x508797=_0x508797['replace'](/\x1b\./g,'');const _0xf352c6=this[_0x8837c4(0xbd)](_0x508797,0x0,0x0,0x0),_0xa0389c=this[_0x8837c4(0x1e3)]();return _0xf352c6[_0x8837c4(0x312)]=![],this[_0x8837c4(0x2e3)](_0xf352c6),this[_0x8837c4(0x161)](_0xa0389c),{'width':_0xf352c6[_0x8837c4(0x2b9)],'height':_0xf352c6[_0x8837c4(0x233)]};},Window_Base[_0x10cc9c(0x417)]=VisuMZ['MessageCore'][_0x10cc9c(0x10c)]['WordWrap'][_0x10cc9c(0x182)]||0x0,Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x366)]=function(_0x10e88f,_0x32df30){const _0x428301=_0x10cc9c,_0x588941=(_0x10e88f[_0x428301(0x36c)]?-0x1:0x1)*this[_0x428301(0x1bd)]('\x20');if(!_0x32df30)_0x10e88f['x']+=_0x588941;if(this[_0x428301(0x3e5)](_0x10e88f)>0x0&&!_0x32df30)_0x10e88f['x']+=_0x588941;if(_0x10e88f['rtl'])return;let _0x154bb0;_0x32df30?_0x154bb0=_0x10e88f[_0x428301(0x13c)][_0x428301(0x92)](_0x428301(0xb2),_0x10e88f[_0x428301(0x17f)]+0x1):_0x154bb0=_0x10e88f['text'][_0x428301(0x92)]('\x1bWrapBreak[0]',_0x10e88f[_0x428301(0x17f)]+0x1);let _0x385f4d=_0x10e88f[_0x428301(0x13c)][_0x428301(0x92)]('\x0a',_0x10e88f[_0x428301(0x17f)]+0x1);if(_0x154bb0<0x0)_0x154bb0=_0x10e88f[_0x428301(0x13c)]['length']+0x1;if(_0x385f4d>0x0)_0x154bb0=Math[_0x428301(0x28d)](_0x154bb0,_0x385f4d);const _0x55351e=_0x10e88f['text'][_0x428301(0x350)](_0x10e88f[_0x428301(0x17f)],_0x154bb0),_0x2e7fa5=this[_0x428301(0x27a)](_0x55351e)[_0x428301(0x36b)];let _0x37a65d=_0x10e88f[_0x428301(0x36b)]||this[_0x428301(0x34d)];_0x37a65d-=Window_Base[_0x428301(0x417)];if(this[_0x428301(0x327)]===Window_Message){const _0x787805=$gameMessage[_0x428301(0x34e)]()===''?0x0:ImageManager[_0x428301(0x387)]+0x14;_0x37a65d-=_0x787805,VisuMZ['MessageCore'][_0x428301(0x10c)][_0x428301(0x46a)][_0x428301(0xf9)]&&(_0x37a65d-=_0x787805);}let _0x3302e7=![];_0x10e88f['x']+_0x2e7fa5>_0x10e88f[_0x428301(0x2dc)]+_0x37a65d&&(_0x3302e7=!![]),_0x2e7fa5===0x0&&(_0x3302e7=![]),_0x3302e7&&(_0x10e88f['text']=_0x10e88f['text']['slice'](0x0,_0x10e88f['index'])+'\x0a'+_0x10e88f[_0x428301(0x13c)]['substr'](_0x10e88f['index']));},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x27a)]=function(_0xf41ec9){const _0x35a96f=_0x10cc9c,_0x5cde78=this[_0x35a96f(0xbd)](_0xf41ec9,0x0,0x0,0x0),_0x250dc8=this[_0x35a96f(0x1e3)]();return _0x5cde78[_0x35a96f(0x312)]=![],this[_0x35a96f(0xf5)](![]),this[_0x35a96f(0x2e3)](_0x5cde78),this[_0x35a96f(0xf5)](!![]),this[_0x35a96f(0x161)](_0x250dc8),{'width':_0x5cde78[_0x35a96f(0x2b9)],'height':_0x5cde78[_0x35a96f(0x233)]};},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x2b7)]=function(_0x27cbce){const _0x2ed33a=_0x10cc9c;return this[_0x2ed33a(0x3e5)](_0x27cbce);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x331)]=function(_0x2d8c84){const _0x52c3bc=_0x10cc9c,_0x5a87cc=this[_0x52c3bc(0x2ef)](_0x2d8c84)['split'](',');if(!_0x2d8c84[_0x52c3bc(0x312)])return;const _0x4d1b81=_0x5a87cc[0x0]['trim'](),_0x2334da=_0x5a87cc[0x1]||0x0,_0x82ad21=_0x5a87cc[0x2]||0x0,_0x406dc7=ImageManager['loadPicture'](_0x4d1b81),_0x5e9aa8=this[_0x52c3bc(0x1a9)][_0x52c3bc(0x444)];_0x406dc7[_0x52c3bc(0x357)](this[_0x52c3bc(0x2a2)][_0x52c3bc(0x3e8)](this,_0x406dc7,_0x2d8c84['x'],_0x2d8c84['y'],_0x2334da,_0x82ad21,_0x5e9aa8));},Window_Base[_0x10cc9c(0x3be)]['drawBackPicture']=function(_0xfe45ba,_0x53d70b,_0x218093,_0x244844,_0x3a846e,_0x3d15e5){const _0x31ce54=_0x10cc9c;_0x244844=_0x244844||_0xfe45ba[_0x31ce54(0x36b)],_0x3a846e=_0x3a846e||_0xfe45ba[_0x31ce54(0x14f)],this[_0x31ce54(0x3ce)][_0x31ce54(0x444)]=_0x3d15e5,this['contentsBack']['blt'](_0xfe45ba,0x0,0x0,_0xfe45ba[_0x31ce54(0x36b)],_0xfe45ba[_0x31ce54(0x14f)],_0x53d70b,_0x218093,_0x244844,_0x3a846e),this[_0x31ce54(0x3ce)][_0x31ce54(0x444)]=0xff;},Window_Base[_0x10cc9c(0x3be)]['processDrawCenteredPicture']=function(_0xa747e2){const _0x91a351=_0x10cc9c,_0x36a702=this['obtainEscapeString'](_0xa747e2)['split'](',');if(!_0xa747e2[_0x91a351(0x312)])return;const _0xacd69a=_0x36a702[0x0][_0x91a351(0x1ed)](),_0x1cce4d=ImageManager['loadPicture'](_0xacd69a),_0x51b173=JsonEx['makeDeepCopy'](_0xa747e2),_0x5212e9=this[_0x91a351(0x1a9)][_0x91a351(0x444)];_0x1cce4d[_0x91a351(0x357)](this['drawBackCenteredPicture'][_0x91a351(0x3e8)](this,_0x1cce4d,_0x51b173,_0x5212e9));},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x3c4)]=function(_0x3e8956,_0x422888,_0x538783){const _0x203b25=_0x10cc9c,_0x53354f=_0x422888[_0x203b25(0x36b)]||this['innerWidth'],_0x2b265e=this[_0x203b25(0x429)]!==undefined?this[_0x203b25(0xe0)]():this['innerHeight'],_0x230600=_0x53354f/_0x3e8956['width'],_0x403c5e=_0x2b265e/_0x3e8956[_0x203b25(0x14f)],_0x135ab2=Math[_0x203b25(0x28d)](_0x230600,_0x403c5e,0x1),_0xeb2a66=this[_0x203b25(0x429)]!==undefined?(this[_0x203b25(0x455)](0x0)['height']-this[_0x203b25(0x458)]())/0x2:0x0,_0x2e3cf8=_0x3e8956[_0x203b25(0x36b)]*_0x135ab2,_0x5c41b4=_0x3e8956[_0x203b25(0x14f)]*_0x135ab2,_0xd997f6=Math[_0x203b25(0x30c)]((_0x53354f-_0x2e3cf8)/0x2)+_0x422888[_0x203b25(0x2dc)],_0x4a58c0=Math[_0x203b25(0x30c)]((_0x2b265e-_0x5c41b4)/0x2)+_0x422888[_0x203b25(0x2ae)]-_0xeb2a66*0x2;this['contentsBack'][_0x203b25(0x444)]=_0x538783,this[_0x203b25(0x3ce)][_0x203b25(0x127)](_0x3e8956,0x0,0x0,_0x3e8956['width'],_0x3e8956[_0x203b25(0x14f)],_0xd997f6,_0x4a58c0,_0x2e3cf8,_0x5c41b4),this['contentsBack'][_0x203b25(0x444)]=0xff;},Window_Base['prototype'][_0x10cc9c(0x3fc)]=function(_0x5466ae){const _0x3c5adc=_0x10cc9c,_0x20e9b2=this[_0x3c5adc(0x3e5)](_0x5466ae);if(_0x5466ae[_0x3c5adc(0x312)])this[_0x3c5adc(0x266)](_0x20e9b2>0x0);},Window_Base[_0x10cc9c(0x3be)]['processCustomWait']=function(_0x4bfe52){const _0x52e608=_0x10cc9c,_0x3e13bb=this[_0x52e608(0x3e5)](_0x4bfe52);this[_0x52e608(0x327)]===Window_Message&&_0x4bfe52['drawing']&&this[_0x52e608(0x269)](_0x3e13bb);},Window_Base[_0x10cc9c(0x3be)]['processTextCasing']=function(_0x22a5f3){const _0x18db12=_0x10cc9c;this[_0x18db12(0x430)]=this[_0x18db12(0x3e5)](_0x22a5f3),this[_0x18db12(0xa5)]=!![],this[_0x18db12(0x418)]=!![];},VisuMZ['MessageCore'][_0x10cc9c(0x1f4)]=function(_0x4fcc5d){const _0x4849a0=_0x10cc9c;if($gameTemp[_0x4849a0(0x2c2)]()){let _0x39a1f8=_0x4849a0(0x9a)[_0x4849a0(0x2d0)](_0x4fcc5d[_0x4849a0(0x327)]['name']);alert(_0x39a1f8),SceneManager[_0x4849a0(0x124)]();}},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x16b)]=function(){const _0x1351b4=_0x10cc9c;VisuMZ[_0x1351b4(0x37b)][_0x1351b4(0x1f4)](this);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x2cc)]=function(){const _0x550565=_0x10cc9c;VisuMZ[_0x550565(0x37b)]['NonSupportedTextCodes'](this);},Window_Base[_0x10cc9c(0x3be)][_0x10cc9c(0x43f)]=function(){const _0x3133dc=_0x10cc9c;VisuMZ[_0x3133dc(0x37b)][_0x3133dc(0x1f4)](this);},Window_Help['prototype'][_0x10cc9c(0x13e)]=function(){const _0xb34b82=_0x10cc9c;this[_0xb34b82(0xf5)]($gameSystem[_0xb34b82(0x23c)]());},Window_Help['prototype']['isAutoColorAffected']=function(){return!![];},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x1e2)]=Window_Help[_0x10cc9c(0x3be)]['refresh'],Window_Help['prototype'][_0x10cc9c(0x448)]=function(){const _0x44d01c=_0x10cc9c;this[_0x44d01c(0x3df)]();if(this[_0x44d01c(0x3ce)])this[_0x44d01c(0x3ce)][_0x44d01c(0x342)]();VisuMZ[_0x44d01c(0x37b)][_0x44d01c(0x1e2)]['call'](this),this[_0x44d01c(0x13e)]();},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x13d)]=Window_Options[_0x10cc9c(0x3be)][_0x10cc9c(0x34f)],Window_Options[_0x10cc9c(0x3be)][_0x10cc9c(0x34f)]=function(){const _0x50a6e4=_0x10cc9c;VisuMZ['MessageCore'][_0x50a6e4(0x13d)][_0x50a6e4(0x1bc)](this),this[_0x50a6e4(0x101)]();},Window_Options['prototype']['addMessageCoreCommands']=function(){const _0x109e10=_0x10cc9c;VisuMZ['MessageCore'][_0x109e10(0x10c)][_0x109e10(0x41b)][_0x109e10(0x167)]&&TextManager['isVisuMzLocalizationEnabled']()&&this[_0x109e10(0x2d6)](),VisuMZ[_0x109e10(0x37b)]['Settings'][_0x109e10(0x1eb)][_0x109e10(0x167)]&&this[_0x109e10(0x1b1)]();},Window_Options[_0x10cc9c(0x3be)]['addMessageCoreLocalizationCommand']=function(){const _0x5ed948=_0x10cc9c,_0x13c4dd=TextManager['messageCoreLocalization'],_0x58b1e8=_0x5ed948(0x248);this[_0x5ed948(0x422)](_0x13c4dd,_0x58b1e8);},Window_Options[_0x10cc9c(0x3be)][_0x10cc9c(0x1b1)]=function(){const _0x4186b7=_0x10cc9c,_0x400485=TextManager[_0x4186b7(0x191)],_0x530f28='textSpeed';this[_0x4186b7(0x422)](_0x400485,_0x530f28);},VisuMZ[_0x10cc9c(0x37b)]['Window_Options_statusText']=Window_Options[_0x10cc9c(0x3be)][_0x10cc9c(0x112)],Window_Options[_0x10cc9c(0x3be)][_0x10cc9c(0x112)]=function(_0x260444){const _0xa514e=_0x10cc9c,_0x581413=this[_0xa514e(0x197)](_0x260444);if(_0x581413===_0xa514e(0x248))return this[_0xa514e(0x314)]();if(_0x581413===_0xa514e(0x1b7))return this[_0xa514e(0x353)]();return VisuMZ[_0xa514e(0x37b)]['Window_Options_statusText'][_0xa514e(0x1bc)](this,_0x260444);},Window_Options['prototype'][_0x10cc9c(0x314)]=function(){const _0x4117f2=_0x10cc9c,_0x573268=ConfigManager['textLocale'];return TextManager[_0x4117f2(0x3a0)](_0x573268);},Window_Options['prototype'][_0x10cc9c(0x353)]=function(){const _0x3aea77=_0x10cc9c,_0x5dc32f=this[_0x3aea77(0x439)](_0x3aea77(0x1b7));return _0x5dc32f>0xa?TextManager[_0x3aea77(0x121)]:_0x5dc32f;},VisuMZ[_0x10cc9c(0x37b)]['Window_Options_isVolumeSymbol']=Window_Options[_0x10cc9c(0x3be)]['isVolumeSymbol'],Window_Options['prototype']['isVolumeSymbol']=function(_0x21bfc7){const _0x483857=_0x10cc9c;if(_0x21bfc7===_0x483857(0x248))return!![];if(_0x21bfc7==='textSpeed')return!![];return VisuMZ[_0x483857(0x37b)][_0x483857(0x140)][_0x483857(0x1bc)](this,_0x21bfc7);},VisuMZ['MessageCore'][_0x10cc9c(0x2f4)]=Window_Options[_0x10cc9c(0x3be)][_0x10cc9c(0x364)],Window_Options[_0x10cc9c(0x3be)]['changeVolume']=function(_0x4fd7c9,_0x114a43,_0x498627){const _0x68c063=_0x10cc9c;if(_0x4fd7c9===_0x68c063(0x248))return this[_0x68c063(0xe5)](_0x114a43,_0x498627);if(_0x4fd7c9===_0x68c063(0x1b7))return this['changeTextSpeed'](_0x4fd7c9,_0x114a43,_0x498627);VisuMZ[_0x68c063(0x37b)][_0x68c063(0x2f4)][_0x68c063(0x1bc)](this,_0x4fd7c9,_0x114a43,_0x498627);},Window_Options[_0x10cc9c(0x3be)][_0x10cc9c(0xe5)]=function(_0x144769,_0x422ee1){const _0x478411=_0x10cc9c,_0x58cead=VisuMZ[_0x478411(0x37b)][_0x478411(0x10c)][_0x478411(0x41b)]['Languages']||[],_0x1aeb2f=ConfigManager[_0x478411(0x248)];let _0x4ca773=_0x58cead[_0x478411(0x92)](_0x1aeb2f);_0x4ca773+=_0x144769?0x1:-0x1;if(_0x4ca773>=_0x58cead['length'])_0x4ca773=_0x422ee1?0x0:_0x58cead[_0x478411(0x118)]-0x1;if(_0x4ca773<0x0)_0x4ca773=_0x422ee1?_0x58cead['length']-0x1:0x0;this[_0x478411(0x255)]('textLocale',_0x58cead[_0x4ca773]);},Window_Options['prototype'][_0x10cc9c(0x31b)]=function(_0x161cc6,_0x286d12,_0x4e10a7){const _0x4a845a=_0x10cc9c,_0x4e66b2=this[_0x4a845a(0x439)](_0x161cc6),_0x4360b8=0x1,_0x498485=_0x4e66b2+(_0x286d12?_0x4360b8:-_0x4360b8);_0x498485>0xb&&_0x4e10a7?this['changeValue'](_0x161cc6,0x1):this['changeValue'](_0x161cc6,_0x498485['clamp'](0x1,0xb));},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x109)]=function(){const _0x4050d2=_0x10cc9c;let _0x4234c6=Window_Base[_0x4050d2(0x3be)][_0x4050d2(0x109)][_0x4050d2(0x1bc)](this);return _0x4234c6-=this[_0x4050d2(0x3f7)](),_0x4234c6;},Window_Message['prototype'][_0x10cc9c(0xce)]=function(){const _0x3bbc6d=_0x10cc9c;Window_Base[_0x3bbc6d(0x3be)][_0x3bbc6d(0xce)][_0x3bbc6d(0x1bc)](this),VisuMZ[_0x3bbc6d(0x37b)][_0x3bbc6d(0x10c)]['General'][_0x3bbc6d(0x25a)]&&this[_0x3bbc6d(0x1d0)]();},Window_Message['prototype'][_0x10cc9c(0x1d0)]=function(){const _0x27fef0=_0x10cc9c;this[_0x27fef0(0x317)]['x']=Math[_0x27fef0(0x2e8)](this[_0x27fef0(0x36b)]/0x2),this[_0x27fef0(0x317)][_0x27fef0(0xa9)]['x']=0.5,this[_0x27fef0(0x317)][_0x27fef0(0x406)]['x']=Graphics[_0x27fef0(0x36b)];},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x1b4)]=Window_Message['prototype'][_0x10cc9c(0x26f)],Window_Message[_0x10cc9c(0x3be)]['clearFlags']=function(){const _0x8cb915=_0x10cc9c;VisuMZ[_0x8cb915(0x37b)][_0x8cb915(0x1b4)][_0x8cb915(0x1bc)](this),this[_0x8cb915(0x3df)](),this['resetWordWrap'](),this['setColorLock'](![]),this[_0x8cb915(0x163)](_0x8cb915(0x9e)),this[_0x8cb915(0x43f)](VisuMZ[_0x8cb915(0x37b)][_0x8cb915(0x10c)][_0x8cb915(0x3cb)][_0x8cb915(0x315)]);},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x13e)]=function(){const _0x4e46b5=_0x10cc9c;this[_0x4e46b5(0xf5)]($gameSystem[_0x4e46b5(0x2c4)]());},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x363)]=function(){return!![];},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x43f)]=function(_0x1da1cf){const _0x590eb6=_0x10cc9c,_0x125638=0xb-ConfigManager['textSpeed'];_0x1da1cf=Math['round'](_0x1da1cf*_0x125638),this[_0x590eb6(0x172)]=_0x1da1cf,this[_0x590eb6(0x1d5)]=_0x1da1cf;},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x343)]=Window_Message['prototype'][_0x10cc9c(0x39f)],Window_Message[_0x10cc9c(0x3be)]['isTriggered']=function(){const _0x1079d6=_0x10cc9c;return VisuMZ['MessageCore']['Window_Message_isTriggered'][_0x1079d6(0x1bc)](this)||Input[_0x1079d6(0x12c)](VisuMZ[_0x1079d6(0x37b)][_0x1079d6(0x10c)][_0x1079d6(0x3cb)][_0x1079d6(0x115)]);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x3c6)]=Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x2d9)],Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x2d9)]=function(){const _0x1d90ed=_0x10cc9c;let _0x464a97=this['y'];this['x']=Math[_0x1d90ed(0x2e8)]((Graphics['boxWidth']-this['width'])/0x2),VisuMZ[_0x1d90ed(0x37b)]['Window_Message_updatePlacement'][_0x1d90ed(0x1bc)](this);if(this[_0x1d90ed(0x2ab)])this['y']=_0x464a97;this[_0x1d90ed(0x413)](),this['updateForcedPlacement'](),this[_0x1d90ed(0x2eb)](),this['updateChoiceListHelpWindowPlacement']();},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0xac)]=Window_Message[_0x10cc9c(0x3be)]['newPage'],Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x237)]=function(_0x3946ba){const _0x31bb9e=_0x10cc9c;this[_0x31bb9e(0x8c)](_0x3946ba),this['onNewPageMessageCore'](_0x3946ba),VisuMZ[_0x31bb9e(0x37b)][_0x31bb9e(0xac)]['call'](this,_0x3946ba),this[_0x31bb9e(0x243)]();},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x8c)]=function(_0x2cfdda){const _0xc17b9e=_0x10cc9c;if(!_0x2cfdda)return;this[_0xc17b9e(0x14b)]=![],_0x2cfdda['text']=this[_0xc17b9e(0xc3)](_0x2cfdda[_0xc17b9e(0x13c)]),this['_textMacroFound']&&(_0x2cfdda[_0xc17b9e(0x13c)]=this[_0xc17b9e(0x2a0)](_0x2cfdda['text']),this[_0xc17b9e(0x14b)]=!![]);},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x2a0)]=function(_0xb8f1b5){const _0x43c10e=_0x10cc9c;if(this[_0x43c10e(0x14b)])return _0xb8f1b5;return Window_Base[_0x43c10e(0x3be)][_0x43c10e(0x2a0)][_0x43c10e(0x1bc)](this,_0xb8f1b5);},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x3f0)]=function(_0x5dd68d){const _0x41ed06=_0x10cc9c;this[_0x41ed06(0x219)](_0x5dd68d),this[_0x41ed06(0x324)](_0x5dd68d),this[_0x41ed06(0xb8)]();},VisuMZ[_0x10cc9c(0x37b)]['Window_Message_terminateMessage']=Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x12b)],Window_Message[_0x10cc9c(0x3be)]['terminateMessage']=function(){const _0x1f7a28=_0x10cc9c;VisuMZ[_0x1f7a28(0x37b)][_0x1f7a28(0x272)]['call'](this),this['clearFlags']();if(this['_messagePositionReset'])this['messagePositionReset']();},Window_Message['prototype'][_0x10cc9c(0xb8)]=function(){const _0x231f77=_0x10cc9c;this['width']=$gameSystem[_0x231f77(0x3ed)]()+this[_0x231f77(0x383)]();;this[_0x231f77(0x36b)]=Math['min'](Graphics[_0x231f77(0x36b)],this[_0x231f77(0x36b)]);const _0x415d25=$gameSystem[_0x231f77(0x29f)]();this['height']=SceneManager[_0x231f77(0x30f)][_0x231f77(0xb1)](_0x415d25,![])+this['addedHeight'](),this['height']=Math[_0x231f77(0x28d)](Graphics[_0x231f77(0x14f)],this['height']);if($gameTemp['_centerMessageWindow'])this[_0x231f77(0x264)]();},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x383)]=function(){return 0x0;},Window_Message['prototype']['addedHeight']=function(){return 0x0;},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x264)]=function(){const _0xec2b08=_0x10cc9c;this['x']=(Graphics[_0xec2b08(0x247)]-this[_0xec2b08(0x36b)])/0x2,$gameTemp[_0xec2b08(0x1aa)]=undefined,this[_0xec2b08(0x2eb)]();},Window_Message['prototype']['updateMove']=function(){const _0x984632=_0x10cc9c,_0x37485a={'x':this['x'],'y':this['y']};Window_Base[_0x984632(0x3be)]['updateMove'][_0x984632(0x1bc)](this),this[_0x984632(0x424)](_0x37485a);},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x22a)]=function(){return!![];},Window_Message['prototype'][_0x10cc9c(0x424)]=function(_0x4f90bb){const _0x4084bc=_0x10cc9c;this[_0x4084bc(0x286)]&&(this['_nameBoxWindow']['x']+=this['x']-_0x4f90bb['x'],this['_nameBoxWindow']['y']+=this['y']-_0x4f90bb['y']);},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x235)]=function(_0x52989d,_0x3a9537){const _0x54dbb7=_0x10cc9c;this[_0x54dbb7(0x251)](this[_0x54dbb7(0x27d)]['x'],this[_0x54dbb7(0x368)]*(Graphics[_0x54dbb7(0xa1)]-this[_0x54dbb7(0x14f)])/0x2,this[_0x54dbb7(0x27d)][_0x54dbb7(0x36b)],this['_resetRect'][_0x54dbb7(0x14f)],_0x52989d,_0x3a9537);},Window_Message['prototype'][_0x10cc9c(0x2b7)]=function(_0x241950){const _0x454e34=_0x10cc9c,_0x540fe8=Window_Base[_0x454e34(0x3be)]['processCommonEvent'][_0x454e34(0x1bc)](this,_0x241950);_0x241950[_0x454e34(0x312)]&&this[_0x454e34(0xad)](_0x540fe8);},Window_Message['prototype']['launchMessageCommonEvent']=function(_0x5c7f9a){const _0xd3c347=_0x10cc9c;if($gameParty[_0xd3c347(0x84)]()){}else $gameMap[_0xd3c347(0x46e)](_0x5c7f9a);},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x26e)]=function(_0x37f127){const _0x375416=_0x10cc9c;this[_0x375416(0x172)]--,this[_0x375416(0x172)]<=0x0&&(this['onProcessCharacter'](_0x37f127),Window_Base['prototype'][_0x375416(0x26e)][_0x375416(0x1bc)](this,_0x37f127));},Window_Message[_0x10cc9c(0x3be)]['onProcessCharacter']=function(_0x84f587){const _0x46af20=_0x10cc9c;this[_0x46af20(0x172)]=this['_textDelay'];if(this[_0x46af20(0x1d5)]<=0x0)this[_0x46af20(0x1a2)]=!![];},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x375)]=Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x42c)],Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x42c)]=function(_0x1cb456,_0x3ec143){const _0x2d79b2=_0x10cc9c;!_0x3ec143[_0x2d79b2(0x312)]?Window_Base[_0x2d79b2(0x3be)][_0x2d79b2(0x42c)][_0x2d79b2(0x1bc)](this,_0x1cb456,_0x3ec143):VisuMZ[_0x2d79b2(0x37b)][_0x2d79b2(0x375)][_0x2d79b2(0x1bc)](this,_0x1cb456,_0x3ec143);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x146)]=Window_Message['prototype'][_0x10cc9c(0x3e3)],Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x3e3)]=function(_0x490cd4){const _0x523a6b=_0x10cc9c;if(this[_0x523a6b(0x386)])return![];return VisuMZ['MessageCore'][_0x523a6b(0x146)][_0x523a6b(0x1bc)](this,_0x490cd4);},Window_Message[_0x10cc9c(0x3be)]['prepareForcedPositionEscapeCharacters']=function(_0x174104){const _0x49cb98=_0x10cc9c;let _0x1d5f97=_0x174104[_0x49cb98(0x13c)];this[_0x49cb98(0x3a6)]={};if(this['isWordWrapEnabled']())return _0x1d5f97;_0x1d5f97=_0x1d5f97['replace'](/<POSITION:[ ]*(.*?)>/gi,(_0x8c720a,_0xb7dad5)=>{const _0x1b8a64=_0x49cb98,_0x202100=_0xb7dad5['split'](',')[_0x1b8a64(0xd1)](_0x147c0d=>Number(_0x147c0d)||0x0);if(_0x202100[0x0]!==undefined)this[_0x1b8a64(0x3a6)]['x']=Number(_0x202100[0x0]);if(_0x202100[0x1]!==undefined)this[_0x1b8a64(0x3a6)]['y']=Number(_0x202100[0x1]);if(_0x202100[0x2]!==undefined)this[_0x1b8a64(0x3a6)][_0x1b8a64(0x36b)]=Number(_0x202100[0x2]);if(_0x202100[0x3]!==undefined)this[_0x1b8a64(0x3a6)][_0x1b8a64(0x14f)]=Number(_0x202100[0x3]);return'';}),_0x1d5f97=_0x1d5f97[_0x49cb98(0x3c8)](/<COORDINATES:[ ]*(.*?)>/gi,(_0x370236,_0x1c7dea)=>{const _0x23fb77=_0x49cb98,_0x2d310a=_0x1c7dea[_0x23fb77(0x205)](',')['map'](_0x3c5f1a=>Number(_0x3c5f1a)||0x0);if(_0x2d310a[0x0]!==undefined)this['_forcedPosition']['x']=Number(_0x2d310a[0x0]);if(_0x2d310a[0x1]!==undefined)this['_forcedPosition']['y']=Number(_0x2d310a[0x1]);return'';}),_0x1d5f97=_0x1d5f97[_0x49cb98(0x3c8)](/<DIMENSIONS:[ ]*(.*?)>/gi,(_0x4addb,_0xbd9c02)=>{const _0x38833f=_0x49cb98,_0x3dc0da=_0xbd9c02[_0x38833f(0x205)](',')[_0x38833f(0xd1)](_0x2da4c3=>Number(_0x2da4c3)||0x0);if(_0x3dc0da[0x0]!==undefined)this[_0x38833f(0x3a6)]['width']=Number(_0x3dc0da[0x2]);if(_0x3dc0da[0x1]!==undefined)this[_0x38833f(0x3a6)][_0x38833f(0x14f)]=Number(_0x3dc0da[0x3]);return'';}),_0x1d5f97=_0x1d5f97[_0x49cb98(0x3c8)](/<OFFSET:[ ]*(.*?)>/gi,(_0x234f2a,_0x239469)=>{const _0x29eec1=_0x49cb98,_0x453a2b=_0x239469[_0x29eec1(0x205)](',')[_0x29eec1(0xd1)](_0x2eca23=>Number(_0x2eca23)||0x0);let _0x2146ec=_0x453a2b[0x0]||0x0,_0x4b4b6f=_0x453a2b[0x1]||0x0;return $gameSystem[_0x29eec1(0x13a)](_0x2146ec,_0x4b4b6f),'';}),_0x174104[_0x49cb98(0x13c)]=_0x1d5f97;},Window_Message[_0x10cc9c(0x3be)]['updateXyOffsets']=function(){const _0x459fbb=_0x10cc9c,_0x3901e8=$gameSystem[_0x459fbb(0x2ec)]();this['x']+=_0x3901e8['x'],this['y']+=_0x3901e8['y'];},Window_Message['prototype'][_0x10cc9c(0x3f2)]=function(){const _0x1d839a=_0x10cc9c;this[_0x1d839a(0x3a6)]=this[_0x1d839a(0x3a6)]||{};const _0x50f7b6=['x','y',_0x1d839a(0x36b),_0x1d839a(0x14f)];for(const _0x33a767 of _0x50f7b6){this[_0x1d839a(0x3a6)][_0x33a767]!==undefined&&(this[_0x33a767]=Number(this[_0x1d839a(0x3a6)][_0x33a767]));}},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x324)]=function(_0x1d22fc){const _0xe0537f=_0x10cc9c;this[_0xe0537f(0x386)]=![];let _0x2730bb=_0x1d22fc[_0xe0537f(0x13c)];_0x2730bb=_0x2730bb['replace'](/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi,()=>{const _0x340b36=_0xe0537f;return this[_0x340b36(0x153)](_0x2730bb,!![],!![]),this[_0x340b36(0x381)](_0x340b36(0x155)),'';}),_0x2730bb=_0x2730bb[_0xe0537f(0x3c8)](/<(?:AUTOWIDTH|AUTO WIDTH)>/gi,()=>{const _0x520019=_0xe0537f;return this[_0x520019(0x153)](_0x2730bb,!![],![]),this[_0x520019(0x381)]('none'),'';}),_0x2730bb=_0x2730bb[_0xe0537f(0x3c8)](/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi,()=>{const _0x2d2593=_0xe0537f;return this[_0x2d2593(0x153)](_0x2730bb,![],!![]),this[_0x2d2593(0x381)](_0x2d2593(0x155)),'';});if(SceneManager['isSceneBattle']())_0x2730bb=_0x2730bb[_0xe0537f(0x3c8)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x1342f6,_0x255690)=>{const _0x24ab03=_0xe0537f;return this['processAutoSize'](_0x2730bb,!![],!![]),this[_0x24ab03(0x381)](_0x24ab03(0x1b6),Number(_0x255690)||0x1),'';}),_0x2730bb=_0x2730bb['replace'](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x3bb449,_0x333bbe)=>{const _0x5a4330=_0xe0537f;return this[_0x5a4330(0x153)](_0x2730bb,!![],!![]),this[_0x5a4330(0x381)](_0x5a4330(0x271),Number(_0x333bbe)||0x0),'';}),_0x2730bb=_0x2730bb[_0xe0537f(0x3c8)](/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi,(_0x242e52,_0x85791e)=>{const _0x164cb9=_0xe0537f;return this['processAutoSize'](_0x2730bb,!![],!![]),this[_0x164cb9(0x381)](_0x164cb9(0x25c),Number(_0x85791e)||0x0),'';});else SceneManager[_0xe0537f(0x3e6)]()&&(_0x2730bb=_0x2730bb[_0xe0537f(0x3c8)](/<(?:AUTOPLAYER|AUTO PLAYER)>/gi,(_0x2caf01,_0x2b7049)=>{const _0x355b71=_0xe0537f;return this[_0x355b71(0x153)](_0x2730bb,!![],!![]),this[_0x355b71(0x381)](_0x355b71(0x285),0x0),'';}),_0x2730bb=_0x2730bb[_0xe0537f(0x3c8)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x1f60f2,_0x58f2b1)=>{const _0x2db0c4=_0xe0537f;return this[_0x2db0c4(0x153)](_0x2730bb,!![],!![]),this[_0x2db0c4(0x381)](_0x2db0c4(0xcd),Number(_0x58f2b1)||0x1),'';}),_0x2730bb=_0x2730bb[_0xe0537f(0x3c8)](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x3afa26,_0x374197)=>{const _0x217871=_0xe0537f;return this[_0x217871(0x153)](_0x2730bb,!![],!![]),this[_0x217871(0x381)](_0x217871(0x463),Number(_0x374197)||0x0),'';}),_0x2730bb=_0x2730bb[_0xe0537f(0x3c8)](/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi,(_0x150273,_0x5d68ee)=>{const _0x5eb146=_0xe0537f;return this[_0x5eb146(0x153)](_0x2730bb,!![],!![]),this[_0x5eb146(0x381)](_0x5eb146(0x43c),Number(_0x5d68ee)||0x0),'';}));_0x1d22fc[_0xe0537f(0x13c)]=_0x2730bb;},Window_Message[_0x10cc9c(0x468)]=/<(?:AUTO|AUTOSIZE|AUTO SIZE|AUTOWIDTH|AUTO WIDTH|AUTOHEIGHT|AUTO HEIGHT|AUTOPLAYER|AUTO PLAYER)>/gi,Window_Message[_0x10cc9c(0x3ac)]=/<(?:AUTOPARTY|AUTO PARTY|AUTOPLAYER|AUTO PLAYER|AUTOEVENT|AUTO EVENT|AUTOENEMY|AUTO ENEMY|AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,Window_Message['prototype'][_0x10cc9c(0x153)]=function(_0x52e929,_0x572090,_0x1c9480){const _0x358fc3=_0x10cc9c;_0x52e929=_0x52e929[_0x358fc3(0x3c8)](Window_Message['_autoSizeRegexp'],''),_0x52e929=_0x52e929[_0x358fc3(0x3c8)](Window_Message[_0x358fc3(0x3ac)],''),this[_0x358fc3(0x464)]=!![],this[_0x358fc3(0x386)]=!![],this[_0x358fc3(0xf5)](![]);const _0xa09b1d=this['textSizeExRaw'](_0x52e929);if(_0x572090){let _0x3a6a90=_0xa09b1d['width']+$gameSystem[_0x358fc3(0x31f)]()*0x2+0x6;const _0x22abba=$gameMessage[_0x358fc3(0x34e)]()!=='',_0x2d8c0a=ImageManager[_0x358fc3(0x387)],_0x19343e=0x14;_0x3a6a90+=_0x22abba?_0x2d8c0a+_0x19343e:0x4;if(_0x3a6a90%0x2!==0x0)_0x3a6a90+=0x1;$gameSystem['setMessageWindowWidth'](_0x3a6a90);}if(_0x1c9480){let _0x254af7=Math[_0x358fc3(0xa3)](_0xa09b1d[_0x358fc3(0x14f)]/this[_0x358fc3(0x458)]());$gameSystem[_0x358fc3(0x45a)](_0x254af7);}this[_0x358fc3(0x2f1)](),this[_0x358fc3(0x2a6)](),this[_0x358fc3(0x464)]=![],this[_0x358fc3(0xe3)]=!![];},Window_Message[_0x10cc9c(0x3be)]['updateAutoSizePosition']=function(){const _0x353c60=_0x10cc9c;this['updateDimensions'](),this['updatePlacement'](),this[_0x353c60(0x264)](),this['updateTransform'](),this['contents'][_0x353c60(0x342)](),this[_0x353c60(0x243)]();},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x381)]=function(_0x325df4,_0x3f4a7e){const _0x3268fd=_0x10cc9c;switch(_0x325df4['toLowerCase']()['trim']()){case _0x3268fd(0x1b6):this[_0x3268fd(0x2ab)]=$gameActors[_0x3268fd(0x323)](_0x3f4a7e);break;case _0x3268fd(0x271):this[_0x3268fd(0x2ab)]=$gameParty[_0x3268fd(0x276)]()[_0x3f4a7e-0x1];break;case _0x3268fd(0x25c):this['_autoPositionTarget']=$gameTroop[_0x3268fd(0x276)]()[_0x3f4a7e-0x1];break;case'map\x20player':this[_0x3268fd(0x2ab)]=$gamePlayer;break;case _0x3268fd(0xcd):const _0x13b879=$gameActors[_0x3268fd(0x323)](_0x3f4a7e)[_0x3268fd(0x17f)]();_0x13b879===0x0?this[_0x3268fd(0x2ab)]=$gamePlayer:this[_0x3268fd(0x2ab)]=$gamePlayer[_0x3268fd(0x35f)]()[_0x3268fd(0x3a5)](_0x13b879-0x1);break;case'map\x20party':_0x3f4a7e===0x1?this[_0x3268fd(0x2ab)]=$gamePlayer:this['_autoPositionTarget']=$gamePlayer['followers']()[_0x3268fd(0x3a5)](_0x3f4a7e-0x2);break;case _0x3268fd(0x43c):this[_0x3268fd(0x2ab)]=$gameMap[_0x3268fd(0x238)](_0x3f4a7e);break;}this[_0x3268fd(0x2ab)]&&this[_0x3268fd(0x17e)]();},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x3e9)]=Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x3a4)],Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x3a4)]=function(){const _0x93b49a=_0x10cc9c;this[_0x93b49a(0x17e)](),VisuMZ[_0x93b49a(0x37b)][_0x93b49a(0x3e9)][_0x93b49a(0x1bc)](this);},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x17e)]=function(){const _0x268380=_0x10cc9c;if(!this['_autoPositionTarget'])return;const _0xae713f=SceneManager[_0x268380(0x30f)];if(!_0xae713f)return;const _0x5e8a54=_0xae713f[_0x268380(0xed)];if(!_0x5e8a54)return;const _0x11f5f9=_0x5e8a54[_0x268380(0x22c)](this[_0x268380(0x2ab)]);if(!_0x11f5f9)return;let _0x3381a9=_0x11f5f9['x'];if(SceneManager[_0x268380(0x3e6)]())_0x3381a9*=$gameScreen[_0x268380(0x12e)]();else{if(SceneManager[_0x268380(0x3f6)]()&&Imported[_0x268380(0x3e7)]){let _0x291090=_0x11f5f9['x']-Graphics[_0x268380(0x247)]*_0x5e8a54[_0x268380(0xa9)]['x'];_0x3381a9+=_0x291090*(_0x5e8a54[_0x268380(0x406)]['x']-0x1);}}_0x3381a9-=this[_0x268380(0x36b)]/0x2,_0x3381a9-=(Graphics[_0x268380(0x36b)]-Graphics[_0x268380(0x247)])/0x2,_0x3381a9+=this[_0x268380(0x125)]();let _0x415fff=_0x11f5f9['y'];if(SceneManager[_0x268380(0x3e6)]())_0x415fff-=_0x11f5f9[_0x268380(0x14f)]+0x8,_0x415fff*=$gameScreen[_0x268380(0x12e)](),_0x415fff-=this[_0x268380(0x14f)]*$gameScreen['zoomScale']();else{if(SceneManager['isSceneBattle']()&&Imported[_0x268380(0x3e7)]){let _0x1c7f70=_0x11f5f9['height']*_0x5e8a54[_0x268380(0x406)]['y'];_0x415fff-=this[_0x268380(0x14f)]*_0x5e8a54['scale']['y']+_0x1c7f70+0x8;let _0x10dedd=_0x11f5f9['y']-Graphics['boxHeight']*_0x5e8a54[_0x268380(0xa9)]['y'];_0x415fff+=_0x10dedd*(_0x5e8a54['scale']['y']-0x1);}else _0x415fff-=_0x11f5f9[_0x268380(0x14f)]+0x8,_0x415fff-=this['height'];}_0x415fff-=(Graphics['height']-Graphics[_0x268380(0xa1)])/0x2,_0x415fff+=this[_0x268380(0x348)]();const _0x226bdc=$gameSystem[_0x268380(0x2ec)]();_0x3381a9+=_0x226bdc['x'],_0x415fff+=_0x226bdc['y'],this['x']=Math[_0x268380(0x2e8)](_0x3381a9),this['y']=Math[_0x268380(0x2e8)](_0x415fff),this[_0x268380(0x2eb)](!![],![]),this[_0x268380(0x3a6)]=this[_0x268380(0x3a6)]||{},this[_0x268380(0x3a6)]['x']=this['x'],this[_0x268380(0x3a6)]['y']=this['y'],this['_forcedPosition'][_0x268380(0x36b)]=this[_0x268380(0x36b)],this[_0x268380(0x3a6)]['height']=this[_0x268380(0x14f)],this[_0x268380(0x286)][_0x268380(0x2d9)]();},Window_Message['prototype'][_0x10cc9c(0x125)]=function(){return 0x0;},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x348)]=function(){return 0x0;},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x333)]=function(){const _0x44751f=_0x10cc9c;this[_0x44751f(0xe3)]=![],this[_0x44751f(0x2ab)]=undefined,$gameSystem[_0x44751f(0x467)](),this[_0x44751f(0x2f1)](),this[_0x44751f(0x2a8)]=0x0;},Window_Message['prototype'][_0x10cc9c(0x119)]=function(_0x2702e7){const _0x38a391=_0x10cc9c;return Window_Base['prototype'][_0x38a391(0x119)]['call'](this,_0x2702e7);},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x43d)]=function(_0x425a52){const _0x246980=_0x10cc9c;return Window_Base[_0x246980(0x3be)][_0x246980(0x43d)]['call'](this,_0x425a52);},Window_Message[_0x10cc9c(0x3be)][_0x10cc9c(0x45e)]=function(_0x1f9fb1){const _0x311ba0=_0x10cc9c;this[_0x311ba0(0xbe)](_0x1f9fb1),Window_Base[_0x311ba0(0x3be)]['flushTextState'][_0x311ba0(0x1bc)](this,_0x1f9fb1),this[_0x311ba0(0x260)](_0x1f9fb1);},Window_Message['prototype'][_0x10cc9c(0xbe)]=function(_0x4687f7){},Window_Message['prototype'][_0x10cc9c(0x260)]=function(_0x2f5e24){},Window_NameBox['prototype']['isAutoColorAffected']=function(){return![];},Window_NameBox[_0x10cc9c(0x3be)][_0x10cc9c(0x178)]=function(){const _0x4fc0fa=_0x10cc9c;Window_Base[_0x4fc0fa(0x3be)]['resetTextColor'][_0x4fc0fa(0x1bc)](this),this['changeTextColor'](this[_0x4fc0fa(0x1b9)]());},Window_NameBox[_0x10cc9c(0x3be)][_0x10cc9c(0x1b9)]=function(){const _0x148988=_0x10cc9c,_0x23aa03=VisuMZ[_0x148988(0x37b)][_0x148988(0x10c)][_0x148988(0x3cb)][_0x148988(0x18a)];return ColorManager[_0x148988(0x162)](_0x23aa03);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x221)]=Window_NameBox[_0x10cc9c(0x3be)][_0x10cc9c(0x2d9)],Window_NameBox[_0x10cc9c(0x3be)][_0x10cc9c(0x2d9)]=function(){const _0x1892ea=_0x10cc9c;VisuMZ[_0x1892ea(0x37b)][_0x1892ea(0x221)][_0x1892ea(0x1bc)](this),this[_0x1892ea(0x1fc)](),this[_0x1892ea(0x2b5)](),this[_0x1892ea(0x2eb)](),this[_0x1892ea(0x287)]();},Window_NameBox[_0x10cc9c(0x3be)]['preConvertEscapeCharacters']=function(_0x3252cf){const _0x5ac434=_0x10cc9c;return _0x3252cf=_0x3252cf['replace'](/<LEFT>/gi,this[_0x5ac434(0xea)][_0x5ac434(0x3e8)](this,0x0)),_0x3252cf=_0x3252cf['replace'](/<CENTER>/gi,this['setRelativePosition'][_0x5ac434(0x3e8)](this,0x5)),_0x3252cf=_0x3252cf[_0x5ac434(0x3c8)](/<RIGHT>/gi,this[_0x5ac434(0xea)][_0x5ac434(0x3e8)](this,0xa)),_0x3252cf=_0x3252cf[_0x5ac434(0x3c8)](/<POSITION:[ ](\d+)>/gi,(_0x1abc16,_0xbca96)=>this['setRelativePosition'](parseInt(_0xbca96))),_0x3252cf=_0x3252cf[_0x5ac434(0x3c8)](/<\/LEFT>/gi,''),_0x3252cf=_0x3252cf['replace'](/<\/CENTER>/gi,''),_0x3252cf=_0x3252cf[_0x5ac434(0x3c8)](/<\/RIGHT>/gi,''),_0x3252cf=_0x3252cf[_0x5ac434(0x1ed)](),Window_Base[_0x5ac434(0x3be)][_0x5ac434(0x119)][_0x5ac434(0x1bc)](this,_0x3252cf);},Window_NameBox[_0x10cc9c(0x3be)][_0x10cc9c(0xea)]=function(_0x50ac2b){const _0x4f3386=_0x10cc9c;return this[_0x4f3386(0x305)]=_0x50ac2b,'';},Window_NameBox[_0x10cc9c(0x3be)]['updateRelativePosition']=function(){const _0x1be864=_0x10cc9c;if($gameMessage[_0x1be864(0x31a)]())return;this['_relativePosition']=this[_0x1be864(0x305)]||0x0;const _0x146da6=this['_messageWindow'],_0x25ca24=Math[_0x1be864(0x30c)](_0x146da6[_0x1be864(0x36b)]*this['_relativePosition']/0xa);this['x']=_0x146da6['x']+_0x25ca24-Math[_0x1be864(0x30c)](this['width']/0x2),this['x']=this['x'][_0x1be864(0xf8)](_0x146da6['x'],_0x146da6['x']+_0x146da6[_0x1be864(0x36b)]-this[_0x1be864(0x36b)]);},Window_NameBox[_0x10cc9c(0x3be)]['updateOffsetPosition']=function(){const _0x37dcc4=_0x10cc9c;if($gameMessage[_0x37dcc4(0x31a)]())return;this['_relativePosition']=this[_0x37dcc4(0x305)]||0x0;const _0x2d00f5=VisuMZ['MessageCore']['Settings']['General'][_0x37dcc4(0x34b)],_0x38632c=VisuMZ[_0x37dcc4(0x37b)][_0x37dcc4(0x10c)]['General'][_0x37dcc4(0x32e)],_0x34d196=(0x5-this[_0x37dcc4(0x305)])/0x5;this['x']+=Math[_0x37dcc4(0x30c)](_0x2d00f5*_0x34d196),this['y']+=_0x38632c;},Window_NameBox['prototype'][_0x10cc9c(0x287)]=function(){const _0x29cff6=_0x10cc9c,_0x2affac=this[_0x29cff6(0x2a5)],_0x277ef5=_0x2affac['y'],_0x15352a=VisuMZ[_0x29cff6(0x37b)][_0x29cff6(0x10c)][_0x29cff6(0x3cb)][_0x29cff6(0x32e)];_0x277ef5>this['y']&&_0x277ef5<this['y']+this[_0x29cff6(0x14f)]-_0x15352a&&(this['y']=_0x2affac['y']+_0x2affac['height']);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0xa6)]=Window_NameBox['prototype'][_0x10cc9c(0x448)],Window_NameBox[_0x10cc9c(0x3be)]['refresh']=function(){const _0xb3f9b0=_0x10cc9c;this[_0xb3f9b0(0x305)]=0x0,VisuMZ[_0xb3f9b0(0x37b)][_0xb3f9b0(0xa6)][_0xb3f9b0(0x1bc)](this);},Window_ChoiceList['prototype'][_0x10cc9c(0x33b)]=function(){return![];},Window_ChoiceList['prototype'][_0x10cc9c(0x363)]=function(){return!![];},Window_ChoiceList['prototype'][_0x10cc9c(0xe0)]=function(){const _0x549659=_0x10cc9c;return $gameSystem[_0x549659(0x371)]()+0x8;},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x382)]=function(){const _0x3cc038=_0x10cc9c;return $gameSystem[_0x3cc038(0x11a)]();},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x196)]=function(){const _0x2c6cb5=_0x10cc9c;this[_0x2c6cb5(0x448)](),this[_0x2c6cb5(0x1d6)](),this[_0x2c6cb5(0x17b)](),this['activate'](),this[_0x2c6cb5(0x1da)]();},Window_ChoiceList[_0x10cc9c(0x3be)]['callOkHandler']=function(){const _0x14f428=_0x10cc9c;$gameMessage[_0x14f428(0x3dc)](this[_0x14f428(0x252)]()),this['_messageWindow'][_0x14f428(0x12b)](),this['close'](),this[_0x14f428(0x320)]&&(this[_0x14f428(0x320)]['clear'](),this[_0x14f428(0x320)]['hide']());},VisuMZ['MessageCore'][_0x10cc9c(0x23a)]=Window_ChoiceList[_0x10cc9c(0x3be)]['callCancelHandler'],Window_ChoiceList['prototype']['callCancelHandler']=function(){const _0x2ff609=_0x10cc9c;VisuMZ[_0x2ff609(0x37b)][_0x2ff609(0x23a)]['call'](this),this['_helpWindow']&&(this[_0x2ff609(0x320)][_0x2ff609(0x342)](),this['_helpWindow'][_0x2ff609(0x228)]());},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x448)]=function(){const _0x1086db=_0x10cc9c;this[_0x1086db(0x442)](),this[_0x1086db(0x144)](),this[_0x1086db(0x2a5)]&&(this['updatePlacement'](),this['placeCancelButton']()),this['createContents'](),this[_0x1086db(0x114)](),this[_0x1086db(0xce)](),Window_Selectable[_0x1086db(0x3be)][_0x1086db(0x448)]['call'](this);},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x144)]=function(){const _0xb5e6e7=_0x10cc9c;$gameMessage[_0xb5e6e7(0x259)]?this[_0xb5e6e7(0x33d)]():this[_0xb5e6e7(0x9d)](),this[_0xb5e6e7(0x157)](),this[_0xb5e6e7(0x2cb)]();},Window_ChoiceList['prototype'][_0x10cc9c(0x33d)]=function(){const _0x6f2276=_0x10cc9c,_0x419fa1=$gameMessage[_0x6f2276(0xfb)]();let _0x3e13e1=0x0;for(let _0x5c6b49 of _0x419fa1){_0x5c6b49=this['convertChoiceMacros'](_0x5c6b49);if(this[_0x6f2276(0x419)](_0x5c6b49)){const _0x2fcd85=this['parseChoiceText'](_0x5c6b49),_0x1f6d6f=this[_0x6f2276(0x1d1)](_0x5c6b49);this['addCommand'](_0x2fcd85,'choice',_0x1f6d6f,_0x3e13e1);}_0x3e13e1++;}},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x9d)]=function(){const _0x4cc2af=_0x10cc9c,_0x4de23f=$gameMessage[_0x4cc2af(0xfb)](),_0x1358fd=$gameMessage[_0x4cc2af(0x188)](),_0x5a0802=$gameMessage[_0x4cc2af(0x229)](),_0x19a103=_0x4de23f['length'];let _0x10510a=0x0;for(let _0x2df5fc=0x0;_0x2df5fc<_0x19a103;_0x2df5fc++){if(this[_0x4cc2af(0x39c)][_0x4cc2af(0x118)]>=_0x5a0802)break;const _0x5cd0cd=_0x1358fd[_0x2df5fc];let _0x58c860=_0x4de23f[_0x5cd0cd];if(_0x58c860===undefined)continue;_0x58c860=this[_0x4cc2af(0xa8)](_0x58c860);if(this[_0x4cc2af(0x419)](_0x58c860)){const _0x2de328=this['parseChoiceText'](_0x58c860),_0x3d1d72=this[_0x4cc2af(0x1d1)](_0x58c860);this[_0x4cc2af(0x422)](_0x2de328,'choice',_0x3d1d72,_0x5cd0cd);}_0x10510a++;}},Window_ChoiceList[_0x10cc9c(0x3be)]['convertChoiceMacros']=function(_0x11eed8){const _0x195413=_0x10cc9c;return Window_Base[_0x195413(0x3be)][_0x195413(0xc3)][_0x195413(0x1bc)](this,_0x11eed8);},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x419)]=function(_0x40fe66){const _0x4ef8d8=_0x10cc9c;if(Imported[_0x4ef8d8(0x231)])$gameMessage[_0x4ef8d8(0x288)]();if(_0x40fe66[_0x4ef8d8(0x306)](/<HIDE>/i))return![];if(_0x40fe66[_0x4ef8d8(0x306)](/<SHOW>/i))return!![];if(_0x40fe66[_0x4ef8d8(0x306)](/<SHOW[ ](?:|ALL )(?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x2fb6d9=RegExp['$1'][_0x4ef8d8(0x205)](',')[_0x4ef8d8(0xd1)](_0x575fe2=>Number(_0x575fe2)||0x0);if(_0x2fb6d9[_0x4ef8d8(0x302)](_0x40bdfe=>!$gameSwitches[_0x4ef8d8(0x1d8)](_0x40bdfe)))return![];}if(_0x40fe66[_0x4ef8d8(0x306)](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x10db3b=RegExp['$1'][_0x4ef8d8(0x205)](',')['map'](_0x5cada9=>Number(_0x5cada9)||0x0);if(_0x10db3b['every'](_0x3992aa=>!$gameSwitches[_0x4ef8d8(0x1d8)](_0x3992aa)))return![];}if(_0x40fe66['match'](/<HIDE[ ](?:|ALL )(?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x5bb027=RegExp['$1'][_0x4ef8d8(0x205)](',')[_0x4ef8d8(0xd1)](_0x3b6cac=>Number(_0x3b6cac)||0x0);if(_0x5bb027[_0x4ef8d8(0x346)](_0x1238e8=>$gameSwitches[_0x4ef8d8(0x1d8)](_0x1238e8)))return![];}if(_0x40fe66['match'](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x3dd647=RegExp['$1'][_0x4ef8d8(0x205)](',')[_0x4ef8d8(0xd1)](_0x3a795c=>Number(_0x3a795c)||0x0);if(_0x3dd647[_0x4ef8d8(0x302)](_0x175030=>$gameSwitches[_0x4ef8d8(0x1d8)](_0x175030)))return![];}return!![];},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x234)]=function(_0x500fc2){const _0x2d3af=_0x10cc9c;let _0x5f140b=_0x500fc2;return _0x5f140b=_0x5f140b[_0x2d3af(0x3c8)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x5f140b=_0x5f140b[_0x2d3af(0x3c8)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x5f140b;},Window_ChoiceList['prototype'][_0x10cc9c(0x1d1)]=function(_0x183bc5){const _0x4e532d=_0x10cc9c;if(Imported[_0x4e532d(0x231)])$gameMessage[_0x4e532d(0x288)]();if(_0x183bc5['match'](/<DISABLE>/i))return![];if(_0x183bc5[_0x4e532d(0x306)](/<ENABLE>/i))return!![];if(_0x183bc5['match'](/<ENABLE[ ](?:|ALL )(?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x24d85d=RegExp['$1'][_0x4e532d(0x205)](',')['map'](_0x43bd1a=>Number(_0x43bd1a)||0x0);if(_0x24d85d[_0x4e532d(0x302)](_0x79a010=>!$gameSwitches[_0x4e532d(0x1d8)](_0x79a010)))return![];}if(_0x183bc5[_0x4e532d(0x306)](/<ENABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x67c718=RegExp['$1'][_0x4e532d(0x205)](',')[_0x4e532d(0xd1)](_0x5e45a5=>Number(_0x5e45a5)||0x0);if(_0x67c718['every'](_0x240da6=>!$gameSwitches['value'](_0x240da6)))return![];}if(_0x183bc5[_0x4e532d(0x306)](/<DISABLE[ ](?:|ALL )(?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x267e83=RegExp['$1']['split'](',')[_0x4e532d(0xd1)](_0x55c5b7=>Number(_0x55c5b7)||0x0);if(_0x267e83[_0x4e532d(0x346)](_0x510f2d=>$gameSwitches[_0x4e532d(0x1d8)](_0x510f2d)))return![];}if(_0x183bc5[_0x4e532d(0x306)](/<DISABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x45668e=RegExp['$1'][_0x4e532d(0x205)](',')['map'](_0xd6c7e6=>Number(_0xd6c7e6)||0x0);if(_0x45668e[_0x4e532d(0x302)](_0x582f17=>$gameSwitches[_0x4e532d(0x1d8)](_0x582f17)))return![];}return!![];},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x157)]=function(){const _0x294742=_0x10cc9c;this[_0x294742(0xc2)]={},this[_0x294742(0x320)]&&(this[_0x294742(0x320)]['clear'](),this[_0x294742(0x320)]['hide']());},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x2cb)]=function(){const _0x39a361=_0x10cc9c,_0xae5230=/<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i;for(const _0x45b30b of this[_0x39a361(0x39c)]){if(!_0x45b30b)continue;const _0x5319ff=this[_0x39a361(0x39c)][_0x39a361(0x92)](_0x45b30b);if(_0x45b30b['name']['match'](_0xae5230)){const _0x4896b6=String(RegExp['$1']);this[_0x39a361(0xc2)][_0x5319ff]=_0x4896b6['trim'](),_0x45b30b[_0x39a361(0x29c)]=_0x45b30b[_0x39a361(0x29c)][_0x39a361(0x3c8)](_0xae5230,'')[_0x39a361(0x1ed)]();}else this['_choiceHelpDescriptions'][_0x5319ff]='';}},Window_ChoiceList[_0x10cc9c(0x3be)]['processFailsafeChoice']=function(){const _0x56867d=_0x10cc9c;if(this[_0x56867d(0x39c)]['some'](_0x267d34=>_0x267d34['enabled']))return;this[_0x56867d(0x294)](),this['close'](),$gameMessage[_0x56867d(0x426)]=[],this['_messageWindow'][_0x56867d(0x138)]()&&this[_0x56867d(0x2a5)][_0x56867d(0x3a1)]();},VisuMZ['MessageCore'][_0x10cc9c(0x355)]=Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x2d9)],Window_ChoiceList['prototype'][_0x10cc9c(0x2d9)]=function(){const _0x3a0337=_0x10cc9c;VisuMZ[_0x3a0337(0x37b)][_0x3a0337(0x355)]['call'](this),this[_0x3a0337(0x3a2)](),this[_0x3a0337(0x2eb)]();},Window_ChoiceList[_0x10cc9c(0x3be)]['placeCancelButton']=function(){const _0x309c6d=_0x10cc9c;if(!this[_0x309c6d(0x284)])return;const _0x16b511=0x8,_0x2e1257=this[_0x309c6d(0x284)],_0x3368ba=this['x']+this['width'],_0x1d125a=Math[_0x309c6d(0x30c)]((Graphics[_0x309c6d(0x36b)]-Graphics[_0x309c6d(0x247)])/0x2);_0x3368ba>=Graphics[_0x309c6d(0x247)]+_0x1d125a-_0x2e1257[_0x309c6d(0x36b)]+_0x16b511?_0x2e1257['x']=-_0x2e1257[_0x309c6d(0x36b)]-_0x16b511:_0x2e1257['x']=this[_0x309c6d(0x36b)]+_0x16b511,_0x2e1257['y']=this[_0x309c6d(0x14f)]/0x2-_0x2e1257[_0x309c6d(0x14f)]/0x2;},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x214)]=Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x181)],Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x181)]=function(){const _0x47a672=_0x10cc9c;return this[_0x47a672(0x2a5)]?this[_0x47a672(0x2a7)]():VisuMZ['MessageCore'][_0x47a672(0x214)]['call'](this);},Window_ChoiceList['prototype']['messageCoreWindowX']=function(){const _0x43c6ed=_0x10cc9c,_0x4971dd=$gameMessage['choicePositionType']();if(_0x4971dd===0x1)return(Graphics['boxWidth']-this[_0x43c6ed(0x461)]())/0x2;else return _0x4971dd===0x2?this[_0x43c6ed(0x2a5)]['x']+this['_messageWindow'][_0x43c6ed(0x36b)]-this[_0x43c6ed(0x461)]():this[_0x43c6ed(0x2a5)]['x'];},Window_ChoiceList['prototype'][_0x10cc9c(0x461)]=function(){const _0xff99fe=_0x10cc9c,_0x570eb0=(this[_0xff99fe(0x300)]()+this[_0xff99fe(0x2a1)]())*this[_0xff99fe(0x382)]()+this[_0xff99fe(0x8e)]*0x2;return Math[_0xff99fe(0x28d)](_0x570eb0,Graphics[_0xff99fe(0x36b)]);},Window_ChoiceList[_0x10cc9c(0x3be)]['numVisibleRows']=function(){const _0x1d45b4=_0x10cc9c,_0x23da70=$gameMessage[_0x1d45b4(0xfb)]()[_0x1d45b4(0xd1)](_0x3d73f0=>this['convertChoiceMacros'](_0x3d73f0))[_0x1d45b4(0x39d)](_0x2e9e08=>this[_0x1d45b4(0x419)](_0x2e9e08));let _0x11ef8c=Math[_0x1d45b4(0xa3)](_0x23da70[_0x1d45b4(0x118)]/this[_0x1d45b4(0x382)]());if(!$gameMessage[_0x1d45b4(0x259)]){const _0x100b42=$gameMessage[_0x1d45b4(0x229)]();_0x11ef8c=Math[_0x1d45b4(0xa3)](Math['min'](_0x100b42,_0x23da70[_0x1d45b4(0x118)])/this['maxCols']());}return Math[_0x1d45b4(0x3af)](0x1,Math[_0x1d45b4(0x28d)](_0x11ef8c,this[_0x1d45b4(0x1ca)]()));},Window_ChoiceList['prototype'][_0x10cc9c(0x1ca)]=function(){const _0x54e18b=_0x10cc9c,_0x37f657=this['_messageWindow'],_0x2a2539=_0x37f657?_0x37f657['y']:0x0,_0x54bd46=_0x37f657?_0x37f657[_0x54e18b(0x14f)]:0x0,_0x2c2c4f=Graphics[_0x54e18b(0xa1)]/0x2;return _0x2a2539<_0x2c2c4f&&_0x2a2539+_0x54bd46>_0x2c2c4f?0x4:$gameSystem[_0x54e18b(0x2ff)]();},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x300)]=function(){const _0x4f1118=_0x10cc9c;let _0x585a13=this['getStartingChoiceWidth']();for(const _0x5a824d of this[_0x4f1118(0x39c)]){const _0x30e205=_0x5a824d[_0x4f1118(0x29c)],_0x37dcac=this[_0x4f1118(0x120)](_0x30e205),_0x2b82e3=this[_0x4f1118(0x27b)](_0x30e205)[_0x4f1118(0x36b)]+_0x37dcac,_0x4243d2=Math[_0x4f1118(0xa3)](_0x2b82e3)+this[_0x4f1118(0x132)]()*0x2;_0x585a13=Math[_0x4f1118(0x3af)](_0x585a13,_0x4243d2);}return _0x585a13;},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x1ea)]=function(){const _0x32f3eb=_0x10cc9c;let _0x108d60=$gameSystem[_0x32f3eb(0x34c)]();const _0x419cd4=$gameMessage[_0x32f3eb(0xfb)]();for(const _0x2b0da7 of _0x419cd4){_0x2b0da7['match'](/<CHOICE WIDTH:[ ](\d+)>/gi)&&(_0x108d60=Math[_0x32f3eb(0x3af)](_0x108d60,Number(RegExp['$1'])));}return Math[_0x32f3eb(0x3af)](_0x108d60,0x1);},Window_ChoiceList['prototype'][_0x10cc9c(0x3a2)]=function(){const _0x40e5e4=_0x10cc9c,_0x2fa76f=$gameSystem[_0x40e5e4(0x176)]()||0x0,_0x292345=this[_0x40e5e4(0x2a5)]['y'],_0x53e596=this['_messageWindow'][_0x40e5e4(0x14f)],_0xc1a9b2=this[_0x40e5e4(0x2a5)][_0x40e5e4(0x286)],_0x3033b6=_0xc1a9b2[_0x40e5e4(0x2a8)]>0x0&&_0xc1a9b2[_0x40e5e4(0x36b)]>0x0,_0x3334df=_0x3033b6?_0xc1a9b2['height']:0x0;if(_0x2fa76f<0x0&&(this[_0x40e5e4(0x2a5)][_0x40e5e4(0x1b3)]()||this[_0x40e5e4(0x2a5)]['isClosing']()))this['y']=Math[_0x40e5e4(0x2e8)]((Graphics[_0x40e5e4(0xa1)]-this[_0x40e5e4(0x14f)])/0x2);else{if(_0x292345>=Graphics[_0x40e5e4(0xa1)]/0x2)_0x2fa76f>=0x0?this['y']-=_0x2fa76f:this['y']=Math[_0x40e5e4(0x30c)]((_0x292345-this['height']-_0x3334df)/0x2);else{if(_0x2fa76f>=0x0)this['y']+=_0x2fa76f;else{const _0x7f5908=Graphics['boxHeight']-(_0x292345+_0x53e596+_0x3334df);this['y']+=Math[_0x40e5e4(0x30c)]((_0x7f5908-this[_0x40e5e4(0x14f)])/0x2)+_0x3334df;}}}},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x42d)]=function(_0x5d9b55){const _0x348b0d=_0x10cc9c,_0x117ee8=this[_0x348b0d(0x171)](_0x5d9b55);if(_0x117ee8){const _0x426d10=ImageManager['loadPicture'](_0x117ee8),_0xf5c814=this[_0x348b0d(0x2d4)](),_0xbf4b96=_0xf5c814+this[_0x348b0d(0x1e6)](_0x5d9b55),_0x350273=this[_0x348b0d(0x455)](_0x5d9b55);_0x426d10[_0x348b0d(0x357)](this[_0x348b0d(0x1db)][_0x348b0d(0x3e8)](this,_0x5d9b55,!![],_0xbf4b96,_0x350273,_0x426d10));return;}this[_0x348b0d(0x253)](_0x5d9b55);},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x253)]=function(_0x2de9e6){const _0x5080d6=_0x10cc9c,_0x325db7=this['itemRectWithPadding'](_0x2de9e6),_0x38829a=this[_0x5080d6(0x2d4)](),_0x319eb5=_0x38829a+this[_0x5080d6(0x1e6)](_0x2de9e6);this[_0x5080d6(0x12d)](this['isCommandEnabled'](_0x2de9e6));const _0x568410=this['textSizeEx'](_0x319eb5)[_0x5080d6(0x14f)],_0x341102=_0x325db7['x']+this[_0x5080d6(0x120)](_0x319eb5),_0x34f152=Math[_0x5080d6(0x3af)](_0x325db7['y'],_0x325db7['y']+Math['round']((_0x325db7[_0x5080d6(0x14f)]-_0x568410)/0x2));this['drawTextEx'](_0x319eb5,_0x341102,_0x34f152,_0x325db7[_0x5080d6(0x36b)]),this[_0x5080d6(0x303)](_0x2de9e6),this[_0x5080d6(0xb9)](_0x2de9e6,_0x319eb5,_0x325db7);},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x2d4)]=function(){return $gameSystem['getChoiceListTextAlign']()!=='default'?'<%1>'['format']($gameSystem['getChoiceListTextAlign']()):'';},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x120)]=function(_0x48dcf7){let _0x59dbf0=0x0;return _0x48dcf7['match'](/<(?:CHOICE|CHOICE |)INDENT:[ ](\d+)>/gi)&&(_0x59dbf0=Number(RegExp['$1'])),_0x59dbf0;},Window_ChoiceList['prototype'][_0x10cc9c(0x303)]=function(_0x5e6eb6){const _0x45751a=_0x10cc9c;if(!Imported[_0x45751a(0x1ae)])return;const _0x1f1be6=this[_0x45751a(0x1e6)](_0x5e6eb6);let _0x7764f1=![],_0x1668d8=![],_0x2a56c7=ColorManager[_0x45751a(0xc4)](),_0x2bf1ed=ColorManager[_0x45751a(0xe7)]();if(_0x1f1be6[_0x45751a(0x306)](/<(?:BGCOLOR|BG COLOR):[ ](.*?),(.*?)>/gi))_0x2a56c7=ColorManager[_0x45751a(0x412)](RegExp['$1'])['trim'](),_0x2bf1ed=ColorManager[_0x45751a(0x412)](RegExp['$2'])['trim'](),_0x7764f1=!![];else{if(_0x1f1be6[_0x45751a(0x306)](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi)){let _0x9b7091=String(RegExp['$1'])[_0x45751a(0x193)]()['trim']();switch(_0x9b7091){case _0x45751a(0x26c):_0x2a56c7=_0x2bf1ed=_0x45751a(0x133),_0x1668d8=!![];break;case _0x45751a(0x283):_0x2a56c7=_0x2bf1ed=_0x45751a(0x137),_0x1668d8=!![];break;case _0x45751a(0x274):_0x2a56c7=_0x2bf1ed=_0x45751a(0x402),_0x1668d8=!![];break;case _0x45751a(0x437):_0x2a56c7=_0x2bf1ed='#7cc576',_0x1668d8=!![];break;case _0x45751a(0x2f7):_0x2a56c7=_0x2bf1ed=_0x45751a(0x2a9),_0x1668d8=!![];break;case'purple':case _0x45751a(0x148):_0x2a56c7=_0x2bf1ed=_0x45751a(0x2c0),_0x1668d8=!![];break;case _0x45751a(0x86):_0x2a56c7=_0x2bf1ed=_0x45751a(0x44e),_0x1668d8=!![];break;case'pink':_0x2a56c7=_0x2bf1ed='#ffc8e0',_0x1668d8=!![];break;case'white':_0x2a56c7=_0x2bf1ed=_0x45751a(0x19a),_0x1668d8=!![];break;case _0x45751a(0x408):case _0x45751a(0x3e1):_0x2a56c7=_0x2bf1ed=_0x45751a(0x46d),_0x1668d8=!![];break;case _0x45751a(0x358):_0x2a56c7=_0x2bf1ed=_0x45751a(0x22b),_0x1668d8=!![];break;case _0x45751a(0x3b0):_0x2a56c7=_0x2bf1ed=ColorManager[_0x45751a(0x365)](),_0x1668d8=!![];break;case'no':_0x2a56c7=_0x2bf1ed=ColorManager[_0x45751a(0x2e5)](),_0x1668d8=!![];break;case _0x45751a(0x22d):_0x2a56c7=_0x2bf1ed=ColorManager[_0x45751a(0x3ec)](),_0x1668d8=!![];break;case _0x45751a(0x123):_0x2a56c7=_0x2bf1ed=ColorManager[_0x45751a(0xf2)](),_0x1668d8=!![];break;default:_0x2a56c7=_0x2bf1ed=ColorManager[_0x45751a(0x412)](_0x9b7091),_0x1668d8=!![];break;}_0x7764f1=!![];}}if(!_0x7764f1)return;const _0x46fee5=this['itemRect'](_0x5e6eb6);this[_0x45751a(0x3ce)]['clearRect'](_0x46fee5['x'],_0x46fee5['y'],_0x46fee5[_0x45751a(0x36b)],_0x46fee5['height']),this[_0x45751a(0x261)](_0x46fee5,_0x2a56c7,_0x2bf1ed,_0x1668d8);},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x261)]=function(_0x5d8f7a,_0x47effe,_0x1104c1,_0x2525e4){const _0x1985bc=_0x10cc9c,_0x30b6f5=ColorManager[_0x1985bc(0xc4)](),_0x32bfd8=ColorManager[_0x1985bc(0x2c8)](),_0x4dec4d=_0x47effe??ColorManager[_0x1985bc(0xc4)](),_0x59bc76=_0x1104c1??_0x47effe,_0x164be6=_0x5d8f7a['x'],_0x1e8a73=_0x5d8f7a['y'],_0x142614=_0x5d8f7a[_0x1985bc(0x36b)],_0xac91c3=_0x5d8f7a[_0x1985bc(0x14f)];this[_0x1985bc(0x3ce)][_0x1985bc(0x145)](_0x164be6,_0x1e8a73,_0x142614,_0xac91c3,_0x4dec4d,_0x59bc76,!![]),_0x2525e4&&this['contentsBack'][_0x1985bc(0x145)](_0x164be6,_0x1e8a73,_0x142614,_0xac91c3,_0x30b6f5,_0x59bc76,!![]),this[_0x1985bc(0x3ce)]['strokeRect'](_0x164be6,_0x1e8a73,_0x142614,_0xac91c3,_0x30b6f5);},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x171)]=function(_0x2a03e4){const _0x1a7b84=_0x10cc9c,_0x502e3f=this['choiceAlignText'](),_0x78b509=_0x502e3f+this[_0x1a7b84(0x1e6)](_0x2a03e4);let _0x2701c8='';if(_0x78b509['match'](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i))_0x2701c8=String(RegExp['$1'])[_0x1a7b84(0x1ed)]();else _0x78b509[_0x1a7b84(0x306)](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x2701c8=String(RegExp['$2'])[_0x1a7b84(0x1ed)]());return _0x2701c8;},Window_ChoiceList['prototype'][_0x10cc9c(0xb9)]=function(_0x3e6875,_0xad690f,_0x3a3b2e){const _0x1769e1=_0x10cc9c;let _0xc08ad2='';if(_0xad690f['match'](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i))_0xc08ad2=String(RegExp['$1'])[_0x1769e1(0x1ed)]();else _0xad690f[_0x1769e1(0x306)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0xc08ad2=String(RegExp['$2'])[_0x1769e1(0x1ed)]());if(_0xc08ad2){const _0x33f7b4=ImageManager[_0x1769e1(0x19c)](_0xc08ad2);_0x33f7b4[_0x1769e1(0x357)](this[_0x1769e1(0x1db)][_0x1769e1(0x3e8)](this,_0x3e6875,![],_0xad690f,_0x3a3b2e,_0x33f7b4));}},Window_ChoiceList[_0x10cc9c(0x3be)][_0x10cc9c(0x1db)]=function(_0x452f6a,_0x484471,_0x9ee4e4,_0x31cd06,_0x42f9dc){const _0x3fb01b=_0x10cc9c,_0x5eaa13=this[_0x3fb01b(0x2d4)](),_0x458cca=_0x5eaa13+this[_0x3fb01b(0x1e6)](_0x452f6a);if(_0x9ee4e4!==_0x458cca)return;const _0x245fa0=this[_0x3fb01b(0x455)](_0x452f6a);if(['x','y',_0x3fb01b(0x36b),_0x3fb01b(0x14f)][_0x3fb01b(0x302)](_0x8951f4=>_0x245fa0[_0x8951f4]!==_0x31cd06[_0x8951f4]))return;let _0x999fb1=0x0,_0x43d25c='';if(_0x484471&&_0x458cca[_0x3fb01b(0x306)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i)){}else{if(_0x484471&&_0x458cca[_0x3fb01b(0x306)](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i))_0x43d25c=String(RegExp['$1'])[_0x3fb01b(0x193)]()[_0x3fb01b(0x1ed)]();else!_0x484471&&_0x458cca[_0x3fb01b(0x306)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x43d25c=String(RegExp['$1'])[_0x3fb01b(0x193)]()[_0x3fb01b(0x1ed)]());}switch(_0x43d25c){case _0x3fb01b(0x81):case _0x3fb01b(0x385):case _0x3fb01b(0x18c):case _0x3fb01b(0x41e):case'down-left':case _0x3fb01b(0x96):case'1':_0x999fb1=0x1;break;case'lowercenter':case _0x3fb01b(0x3ba):case'lower\x20center':case _0x3fb01b(0x3f8):case'down-center':case _0x3fb01b(0x3b5):case _0x3fb01b(0x1b2):case'2':_0x999fb1=0x2;break;case _0x3fb01b(0x30a):case _0x3fb01b(0x25e):case _0x3fb01b(0x18b):case _0x3fb01b(0x2db):case _0x3fb01b(0xbc):case _0x3fb01b(0x35d):case'3':_0x999fb1=0x3;break;case _0x3fb01b(0x1c0):case _0x3fb01b(0x322):case'left':case'4':_0x999fb1=0x4;break;case'midcenter':case _0x3fb01b(0x1e1):case _0x3fb01b(0x35b):case _0x3fb01b(0x308):case'5':_0x999fb1=0x5;break;case'midright':case _0x3fb01b(0xf7):case _0x3fb01b(0xa4):case'6':_0x999fb1=0x6;break;case'upperleft':case'upper-left':case _0x3fb01b(0x3eb):case _0x3fb01b(0x28c):case _0x3fb01b(0x3d0):case'up\x20left':case'7':_0x999fb1=0x7;break;case _0x3fb01b(0x410):case _0x3fb01b(0x45c):case _0x3fb01b(0x370):case _0x3fb01b(0x2bf):case _0x3fb01b(0x149):case'up\x20center':case'up':case'8':_0x999fb1=0x8;break;case _0x3fb01b(0x15f):case'upper-right':case _0x3fb01b(0x20b):case _0x3fb01b(0x1c8):case'up-right':case _0x3fb01b(0x15d):case'9':_0x999fb1=0x9;break;}const _0x568276=_0x484471?this[_0x3fb01b(0x1a9)]:this[_0x3fb01b(0x3ce)],_0x4e1327=this[_0x3fb01b(0x29d)](_0x452f6a);!_0x484471&&_0x568276[_0x3fb01b(0x236)](_0x4e1327['x']-0x1,_0x4e1327['y']-0x1,_0x4e1327[_0x3fb01b(0x36b)]+0x2,_0x4e1327[_0x3fb01b(0x14f)]+0x2);const _0xd4301c=_0x4e1327['x']+0x2,_0x3d8f7a=_0x4e1327['y']+0x2,_0x38187e=_0x4e1327[_0x3fb01b(0x36b)]-0x4,_0x15ab44=_0x4e1327['height']-0x4,_0x513021=_0x42f9dc[_0x3fb01b(0x36b)],_0x4c952c=_0x42f9dc[_0x3fb01b(0x14f)];let _0x300ce2=_0xd4301c,_0x19d062=_0x3d8f7a,_0x28d9fa=_0x38187e,_0x474f07=_0x15ab44;const _0x58ad4c=_0x38187e/_0x513021,_0x447c31=_0x15ab44/_0x4c952c;let _0x28d637=Math[_0x3fb01b(0x28d)](_0x58ad4c,_0x447c31);if(_0x484471)_0x28d637=Math[_0x3fb01b(0x28d)](_0x28d637,0x1);_0x999fb1!==0x0&&(_0x28d9fa=Math[_0x3fb01b(0x2e8)](_0x513021*_0x28d637),_0x474f07=Math[_0x3fb01b(0x2e8)](_0x4c952c*_0x28d637));switch(_0x999fb1){case 0x1:case 0x4:case 0x7:_0x300ce2=_0xd4301c;break;case 0x2:case 0x5:case 0x8:_0x300ce2+=Math[_0x3fb01b(0x2e8)]((_0x38187e-_0x28d9fa)/0x2);break;case 0x3:case 0x6:case 0x9:_0x300ce2+=_0x38187e-_0x28d9fa;break;}switch(_0x999fb1){case 0x7:case 0x8:case 0x9:_0x19d062=_0x3d8f7a;break;case 0x4:case 0x5:case 0x6:_0x19d062+=Math[_0x3fb01b(0x2e8)]((_0x15ab44-_0x474f07)/0x2);break;case 0x1:case 0x2:case 0x3:_0x19d062+=_0x15ab44-_0x474f07;break;}_0x568276[_0x3fb01b(0x127)](_0x42f9dc,0x0,0x0,_0x513021,_0x4c952c,_0x300ce2,_0x19d062,_0x28d9fa,_0x474f07),_0x484471&&this[_0x3fb01b(0x253)](_0x452f6a);},Window_ChoiceList['prototype'][_0x10cc9c(0x1b0)]=function(){const _0x108eb3=_0x10cc9c;this[_0x108eb3(0x320)]['clear']();if(!this[_0x108eb3(0xc2)])return;const _0x4334a3=this[_0x108eb3(0x17f)]();this[_0x108eb3(0xc2)][_0x4334a3]?(this[_0x108eb3(0x320)][_0x108eb3(0x8f)](this['_choiceHelpDescriptions'][_0x4334a3]),this['_helpWindow'][_0x108eb3(0x215)]()):(this[_0x108eb3(0x320)]['clear'](),this['_helpWindow'][_0x108eb3(0x228)]());},Window_EventItem[_0x10cc9c(0x3be)]['makeItemList']=function(){const _0x1fbf48=_0x10cc9c,_0x49e8cf=$gameMessage['itemChoiceItypeId']();_0x49e8cf===_0x1fbf48(0x173)&&Imported['VisuMZ_1_SkillsStatesCore']?this[_0x1fbf48(0x244)]():Window_ItemList[_0x1fbf48(0x3be)][_0x1fbf48(0x372)][_0x1fbf48(0x1bc)](this);},Window_EventItem[_0x10cc9c(0x3be)][_0x10cc9c(0x244)]=function(){const _0x2978a7=_0x10cc9c,_0x23f980=$gameMessage[_0x2978a7(0x292)]();this[_0x2978a7(0x147)]=_0x23f980?_0x23f980[_0x2978a7(0x395)]()['filter'](_0x155bef=>this['includes'](_0x155bef)):[],this[_0x2978a7(0x100)](null)&&this[_0x2978a7(0x147)][_0x2978a7(0x38b)](null);},VisuMZ[_0x10cc9c(0x37b)][_0x10cc9c(0x339)]=Window_EventItem[_0x10cc9c(0x3be)]['includes'],Window_EventItem[_0x10cc9c(0x3be)]['includes']=function(_0x560d95){const _0x39bea2=_0x10cc9c,_0x19517a=$gameMessage[_0x39bea2(0x3a9)]();if(_0x19517a===_0x39bea2(0x3b3)){if(!DataManager[_0x39bea2(0x3c2)](_0x560d95))return![];const _0x39ecf5=$gameMessage['itemChoiceWtypeId']();if(_0x39ecf5>0x0){if(_0x560d95[_0x39bea2(0x351)]!==_0x39ecf5)return![];}return!![];}else{if(_0x19517a===_0x39bea2(0x2c9)){if(!DataManager[_0x39bea2(0x2d8)](_0x560d95))return![];const _0x2770ab=$gameMessage[_0x39bea2(0x36a)]();if(_0x2770ab>0x0){if(_0x560d95[_0x39bea2(0xcb)]!==_0x2770ab)return![];}const _0x14694b=$gameMessage[_0x39bea2(0x360)]();if(_0x14694b>0x0){if(_0x560d95[_0x39bea2(0x414)]!==_0x14694b)return![];}return!![];}else{if(_0x19517a===_0x39bea2(0x173)){if(!DataManager[_0x39bea2(0x344)](_0x560d95))return![];const _0x2487d7=$gameMessage[_0x39bea2(0x292)]();if(_0x2487d7['isSkillHidden'](_0x560d95))return![];if(!_0x2487d7[_0x39bea2(0x2ee)](_0x560d95))return![];const _0x5a3b09=$gameMessage[_0x39bea2(0x2b6)]();if(_0x5a3b09>0x0){const _0x435829=DataManager[_0x39bea2(0x377)](_0x560d95);if(!_0x435829[_0x39bea2(0x100)](_0x5a3b09))return![];}return!![];}else return VisuMZ['MessageCore']['Window_EventItem_includes'][_0x39bea2(0x1bc)](this,_0x560d95);}}},VisuMZ[_0x10cc9c(0x37b)]['Window_ItemList_drawItemNumber']=Window_ItemList[_0x10cc9c(0x3be)][_0x10cc9c(0x154)],Window_ItemList[_0x10cc9c(0x3be)][_0x10cc9c(0x154)]=function(_0x1e98eb,_0x20514d,_0x3d6c5c,_0x595abd){const _0x5af2a2=_0x10cc9c,_0xf59c5d=$gameMessage[_0x5af2a2(0x3a9)]();if(_0xf59c5d===_0x5af2a2(0x173)){const _0x1bffd8=$gameMessage[_0x5af2a2(0x292)]();this[_0x5af2a2(0x85)](_0x1bffd8,_0x1e98eb,_0x20514d,_0x3d6c5c,_0x595abd);}else VisuMZ[_0x5af2a2(0x37b)]['Window_ItemList_drawItemNumber'][_0x5af2a2(0x1bc)](this,_0x1e98eb,_0x20514d,_0x3d6c5c,_0x595abd);},Window_MapName['prototype'][_0x10cc9c(0x349)]=function(){const _0x30213c=_0x10cc9c;this[_0x30213c(0x1a9)][_0x30213c(0x342)]();let _0x20cf38=$gameMap[_0x30213c(0x1dd)]();if(_0x20cf38){const _0x1183fa=this[_0x30213c(0x34d)];this[_0x30213c(0x3ff)](0x0,0x0,_0x1183fa,this[_0x30213c(0x458)]()),_0x20cf38=this['realignMapName'](_0x20cf38);const _0x3a944d=this[_0x30213c(0x27b)](_0x20cf38)[_0x30213c(0x36b)];this[_0x30213c(0x187)](_0x20cf38,Math['floor']((_0x1183fa-_0x3a944d)/0x2),0x0);}},Window_MapName[_0x10cc9c(0x3be)][_0x10cc9c(0x2f6)]=function(_0x778abf){const _0x5a3b68=_0x10cc9c;if(_0x778abf[_0x5a3b68(0x306)](/<LEFT>/gi))this['x']=0x0;else{if(_0x778abf[_0x5a3b68(0x306)](/<CENTER>/gi))this['x']=Math[_0x5a3b68(0x30c)]((Graphics[_0x5a3b68(0x247)]-this[_0x5a3b68(0x36b)])/0x2);else _0x778abf['match'](/<RIGHT>/gi)&&(this['x']=Graphics[_0x5a3b68(0x247)]-this['width']);}_0x778abf=_0x778abf[_0x5a3b68(0x3c8)](/<(?:LEFT|CENTER|RIGHT)>/gi,''),_0x778abf=_0x778abf['replace'](/<\/(?:LEFT|CENTER|RIGHT)>/gi,'');if(_0x778abf[_0x5a3b68(0x306)](/<TOP>/gi))this['y']=0x0;else{if(_0x778abf[_0x5a3b68(0x306)](/<MIDDLE>/gi))this['y']=Math[_0x5a3b68(0x30c)]((Graphics[_0x5a3b68(0xa1)]-this[_0x5a3b68(0x14f)])/0x2);else _0x778abf[_0x5a3b68(0x306)](/<BOTTOM>/gi)&&(this['y']=Graphics['boxHeight']-this[_0x5a3b68(0x14f)]);}return _0x778abf=_0x778abf[_0x5a3b68(0x3c8)](/<(?:TOP|MIDDLE|BOTTOM)>/gi,''),_0x778abf=_0x778abf[_0x5a3b68(0x3c8)](/<\/(?:TOP|MIDDLE|BOTTOM)>/gi,''),_0x778abf[_0x5a3b68(0x306)](/<X:[ ]([\+\-]\d+)>/gi)&&(this['x']+=Number(RegExp['$1']),_0x778abf=_0x778abf[_0x5a3b68(0x3c8)](/<X:[ ]([\+\-]\d+)>/gi,'')),_0x778abf[_0x5a3b68(0x306)](/<Y:[ ]([\+\-]\d+)>/gi)&&(this['y']+=Number(RegExp['$1']),_0x778abf=_0x778abf[_0x5a3b68(0x3c8)](/<Y:[ ]([\+\-]\d+)>/gi,'')),_0x778abf;};