/*:
 * @target MV MZ
 * @plugindesc Touch not to avoid the event symbols when moving.
 * @author Shitsudo Kei
 *
 * @help There are no plugin commands in this plugin.
 * This plugin is compatible with RPG Maker MV and MZ.
 *
 * -Features
 * Reduce the pathfinding limit on touch moves to avoid event symbols and increase the encounter rate with symbol encounters.
 * Caution：Due to the impact of the change, the default touch-move pathfinding ability changes.
 *
 * I will not be responsible for any problems that may occur. Please understand. 
 * -License
 * This plugin is distributed under the MIT license.
 * Feel free to use it.
 * http://opensource.org/licenses/mit-license.php
 */
/*:ja
 * @target MV MZ
 * @plugindesc タッチ移動時イベントシンボルを避けないようにします。
 * @author 湿度ケイ
 *
 * @help このプラグインには、プラグインコマンドはありません。
 * このプラグインは、RPGツクールMVとMZに対応しています。
 *
 * ■概要
 * タッチ移動時の経路探索上限を減らすことで、イベントシンボルを避けないようにし、シンボルエンカウントとのエンカウント率を上げます。
 * ※注意：副作用として通常のタッチ移動のスペックを大きく損ないます。
 *
 * ■ライセンス表記
 * このプラグインは MIT ライセンスで配布されます。
 * ご自由にお使いください。
 * http://opensource.org/licenses/mit-license.php
 */

/*:zh
 * @target MV MZ
 * @plugindesc 在触摸移动时不会避开事件符号。
 * @author Shitsudo Kei
 *
 * @help 本插件没有插件命令。
 * 本插件兼容 RPG Maker MV 和 MZ。
 *
 * ■ 概要
 * 通过减少触摸移动时的路径搜索上限，
 * 使角色不再自动避开事件符号，
 * 从而提高与符号遭遇战的遭遇率。
 *
 * ※ 注意：作为副作用，会严重降低普通触摸移动的表现。
 *
 * ■ 许可证
 * 本插件基于 MIT 许可证发布。
 * 你可以自由使用本插件。
 * http://opensource.org/licenses/mit-license.php
 */

(function() {

  //
  // overwrite
  //
  Game_Character.prototype.searchLimit = function() {
      return 2;
  };

})();
