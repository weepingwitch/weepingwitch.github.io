//=============================================================================
// NovelMessageMZ.js
//=============================================================================
// [Update History]
// [[NovelMessage.js for RMMV plugin]]
// 2015.Jul.15 Ver1.0.0 First Release
// [[NovelMessageMZ.js]]
// 2023.Oct.28 Ver1.0.0 First Release
// 2024.Jan.19 Ver1.0.1 Fix Bug: It required player press OK 2 times
//          when \F is end of the novel message. 
// 2024.Nov.02 Ver1.0,2 Fix Bug: Invoked error when inputting number

/*:
 * @target MZ
 * @plugindesc [Ver1.0.1]Provides the full screen type message window.
 * @author Sasuke KANNAZUKI
 *
 * @param Switch ID
 * @desc The ID of the switch to determine novel mode.
 * @default 11
 * @type switch
 *
 * @param Window Style
 * @desc Visual style of novel window.
 * @type select
 * @option Normal(0)
 * @value 0
 * @option Half transparent black(1)
 * @value 1
 * @option Transparent(2)
 * @value 2
 * @default 2
 *
 * @help This plugin does not provide plugin commands.
 * This plugin runs under RPG Maker MZ.
 * This plugin enables message window change to novel mode.
 *
 * [Summary]
 * When message window is novel mode, the window becomes full screen size.
 * At novel mode, window displays message that is set the event command
 * 'Show Text' one after another.
 *
 * Automatically fowards page when the text is too much to display next line.
 * It also forwards page forcedly if it write escape sequence '\f' in the text.
 *
 * It's able to execute the event command 'Show Choices' and 'Input Number' at novel mode.
 *
 * Face and Name in the event command 'Show Text' are ignored at novel mode.
 *
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php

 */

/*:ja
 * @target MZ
 * @plugindesc [Ver1.0.1]全画面型のメッセージウィンドウです。
 * @author 神無月サスケ
 *
 * @param Switch ID
 * @text 有効スイッチID
 * @desc ノベルモードにするためのスイッチのIDです。
 * @default 11
 * @type switch
 *
 * @param Window Style
 * @text ウィンドウタイプ
 * @desc ノベルモード時のウィンドウの外観タイプです。
 * @type select
 * @option 通常(0)
 * @value 0
 * @option 半透明黒(1)
 * @value 1
 * @option 透明(2)
 * @value 2
 * @default 2
 *
 * @help このプラグインには、プラグインコマンドはありません。
 * このプラグインは、RPGツクールMZに対応しています。
 * このプラグインは、メッセージウィンドウをノベルモードに切り替えることを
 * 可能にします。
 *
 * ■概要
 * ウィンドウをノベルモードにすると、全画面に文字が表示されます。
 * ノベルモードでは、イベントコマンド「文章の表示」で表示された文章を
 * 連続で表示していきます。
 *
 * 文字がいっぱいになると自動的に改ページが行われますが、
 * \f と表記すると、そこで強制的に改ページが行われます。
 *
 * ノベルウィンドウ表示中に、選択肢の表示や数値入力の処理を行うことも可能です。
 *
 * ノベルモードでは「文章の表示」で顔画像や名前を設定しても、無視されます。
 *
 * ■ライセンス表記
 * このプラグインは MIT ライセンスで配布されます。
 * ご自由にお使いください。
 * http://opensource.org/licenses/mit-license.php
 */

/*:zh
 * @target MZ
 * @plugindesc [Ver1.0.1] 提供全屏显示的文字消息窗口（小说模式）。
 * @author Sasuke KANNAZUKI
 *
 * @param Switch ID
 * @text 开关ID
 * @desc 用于判断是否进入小说模式的开关ID。
 * @default 11
 * @type switch
 *
 * @param Window Style
 * @text 窗口样式
 * @desc 小说模式窗口的视觉样式。
 * @type select
 * @option 普通 (0)
 * @value 0
 * @option 半透明黑色 (1)
 * @value 1
 * @option 透明 (2)
 * @value 2
 * @default 2
 *
 * @help 本插件没有插件命令。
 * 本插件适用于 RPG Maker MZ。
 * 本插件可以将对话窗口切换为小说模式。
 *
 * 【概要】
 * 当消息窗口进入小说模式时，
 * 窗口将变为全屏大小。
 * 在小说模式下，事件指令“显示文字”会连续逐条显示。
 *
 * 当文本超出一行无法继续显示时，会自动翻页。
 * 在文本中使用转义符“\f”时也会强制翻页。
 *
 * 在小说模式下也可以执行“显示选项”和“输入数字”等事件指令。
 *
 * 事件指令“显示文字”中的头像和姓名在小说模式下会被忽略。
 *
 * 【许可协议】
 * 本插件基于 MIT 许可协议发布。
 * http://opensource.org/licenses/mit-license.php
 */

(() => {

  const pluginName = "NovelMessageMZ";

  const parameters = PluginManager.parameters(pluginName);
  const switchId = Number(parameters['Switch ID'] || 11);
  const windowStyle = Number(parameters['Window Style'] || 2);

  const isNovelMode = () => $gameSwitches.value(switchId);

  //
  // setting massage window to novel mode
  //

  const _Window_Message_initMembers = Window_Message.prototype.initMembers;
  Window_Message.prototype.initMembers = function() {
    _Window_Message_initMembers.call(this);
    this._novelLineY = 0;
    this._novelNewPage = true;
  };

  const _Window_Message_initialize = Window_Message.prototype.initialize;
  Window_Message.prototype.initialize = function(rect) {
    _Window_Message_initialize.call(this, rect);
    this._windowRect = rect;
  };

  Window_Message.prototype.windowWidth = function() {
    return this._windowRect.width;
  };

  Window_Message.prototype.windowHeight = function() {
    return this._windowRect.height;
  };

  const _Window_Message_updatePlacement =
   Window_Message.prototype.updatePlacement;
  Window_Message.prototype.updatePlacement = function() {
    if (!isNovelMode()) {
      this.width = this.windowWidth();
      this.height = this.windowHeight();
      this.x = (Graphics.boxWidth - this.width) / 2;
    }
    _Window_Message_updatePlacement.call(this);
    if (isNovelMode()) {
      this.move(0, 0, Graphics.boxWidth, Graphics.boxHeight);
    }
    if (this.contents.height !== this.contentsHeight()) {
      this.contents.resize(this.contentsWidth(), this.contentsHeight());
    }
  };

  const _Window_Message_updateBackground =
   Window_Message.prototype.updateBackground;
  Window_Message.prototype.updateBackground = function() {
    _Window_Message_updateBackground.call(this);
    if (isNovelMode()) {
      this.setBackgroundType(windowStyle);
    }
  };

  const _Window_Message_onEndOfText = Window_Message.prototype.onEndOfText;
  Window_Message.prototype.onEndOfText = function() {
    if (isNovelMode()) {
      this.processNewLine(this._textState);
    }
    _Window_Message_onEndOfText.call(this);
  };

  const _Window_Message_startMessage = Window_Message.prototype.startMessage;
  Window_Message.prototype.startMessage = function() {
    _Window_Message_startMessage.call(this);
    if (isNovelMode()) {
      this._textState.y = this._novelLineY;
    }
  };

  const _Window_Message_newPage = Window_Message.prototype.newPage;
  Window_Message.prototype.newPage = function(textState) {
    if (!isNovelMode() || this._novelNewPage) {
      _Window_Message_newPage.call(this, textState);
      this._novelLineY = 0;
      this._novelNewPage = false;
    }
    if (isNovelMode()) {
      if (this.needsNewPage(textState)) {
        this.contents.clear();
        this.resetFontSettings();
      }
      textState.y = 0;
      textState.x = this.newLineX(textState);
      textState.left = this.newLineX(textState);
      textState.height = this.calcTextHeight(textState);
      this.clearFlags();
    }
  };

  const _Window_Message_processNewLine =
   Window_Message.prototype.processNewLine;
  Window_Message.prototype.processNewLine = function(textState) {
    _Window_Message_processNewLine.call(this, textState);
    if (isNovelMode()) {
      this._novelLineY = this._textState.y;
    }
  };

  //
  // escape sequence '\f' that bring novel window succeed to next page
  //
  const _Window_Message_processEscapeCharacter =
   Window_Message.prototype.processEscapeCharacter;
  Window_Message.prototype.processEscapeCharacter = function(code, textState) {
    if (isNovelMode()) {
      if (code === 'F') {
        this._novelNewPage = true;
      }
    }
    _Window_Message_processEscapeCharacter.call(this, code, textState);
  };

  //
  // at displaying choice list window or number input window
  //
  const _Window_ChoiceList_updatePlacement =
   Window_ChoiceList.prototype.updatePlacement;
  Window_ChoiceList.prototype.updatePlacement = function() {
    _Window_ChoiceList_updatePlacement.call(this);
    if (isNovelMode()) {
      this.y = Graphics.boxHeight - this.height - 8;
    }
  };

  const _Window_NumberInput_updatePlacement =
   Window_NumberInput.prototype.updatePlacement;
  Window_NumberInput.prototype.updatePlacement = function() {
    _Window_NumberInput_updatePlacement.call(this);
    if (isNovelMode()) {
      this.y = Graphics.boxHeight - this.height - 8;
    }
  };

  const _Window_NumberInput_buttonY = Window_NumberInput.prototype.buttonY;
  Window_NumberInput.prototype.buttonY = function() {
    if (isNovelMode()) {
      return 0 - this._buttons[0].height - 8;
    } else {
      return _Window_NumberInput_buttonY.call(this);
    }
  };

  //
  // ignore settings of name box and face graphic.
  //
  const _Window_NameBox_refresh = Window_NameBox.prototype.refresh;
  Window_NameBox.prototype.refresh = function() {
    if (isNovelMode()) {
      this.hide();
      return;
    }
    this.show();
    _Window_NameBox_refresh.call(this);
  };

  const _Game_Message_faceName = Game_Message.prototype.faceName;
  Game_Message.prototype.faceName = function() {
    if (isNovelMode()) {
      return "";
    }
    return _Game_Message_faceName.call(this);
  };

})();
