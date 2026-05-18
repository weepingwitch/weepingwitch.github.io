/*:
 * @target MZ
 * @plugindesc Change the screen shake to vertical shaking
 * @author yuwaka
 *
 * @param Switch ID
 * @desc The ID of the switch to change the sway.
 * @default 0
 * @type switch
 *
 * @help There are no plugin commands in this plugin.
 *
 *　Turning on the switch with a parameter number will change it to vertical oscillation,
 *　and turning it off will return it to horizontal oscillation.
 *　
 *　Please note that the shaking when taking damage in the front view combat is also changed in the same way.
 *
 * here are no plugin commands in this plugin.
 * This is a plugin for RPG Maker MZ only.
 * Please feel free to modify and use it in accordance with the terms of the RPG Maker.
 * I will not be responsible for any problems that may occur. Please understand.
 */
/*:ja
 * @target MZ
 * @plugindesc 画面シェイクを縦揺れに変更するよ
 * @author ゆわか
 *
 * @param Switch ID
 * @desc 揺れ方を変更するスイッチのＩＤです。
 * @default 0
 * @type switch
 *
 * @help このプラグインには、プラグインコマンドはありません。
 *
 *　パラメータで指定した番号のスイッチを
 *　ＯＮにすると縦揺れに変更、ＯＦＦにすると横揺れに戻ります。
 *　
 *　フロントビュー戦闘でダメージを受けたときの揺れも
 *　同じように変更されるのでご注意ください。
 *
 * プラグインコマンドはありません。
 * ＲＰＧツクールＭＺ専用のプラグインです。
 *
 * 使用報告不要・クレジット不要・改変可・商用利用可。
 * もし何か問題が起きても、当方は一切責任を負いません。ご了承ください。
 */

 /*:zh
 * @target MZ
 * @plugindesc 将画面震动方向更改为纵向震动
 * @author yuwaka
 *
  * @param Switch ID
 * @text 开关ID
 * @desc 用于切换震动方向的开关ID。
 * @default 0
 * @type switch
 *
 * @help 本插件没有插件命令。
 *
 * 当将参数中指定的开关打开时，
 * 震动方式将切换为“纵向震动”；
 * 关闭时，则恢复为“横向震动”。
 *
 * 请注意，在正面视角战斗中受到伤害时的震动
 * 也会同步变为纵向震动。
 *
 * 本插件没有插件命令。
 * 本插件仅适用于 RPG Maker MZ。
 *
 * 无需使用报告，无需署名，可修改，可商用。
 * 如果发生任何问题，作者概不负责，请谅解。
 */

(function() {

    var parameters = PluginManager.parameters('ShakingChange');
    var switchId = Number(parameters['Switch ID'] || 0);

//rmmz_sprites.js　より抜粋
Spriteset_Base.prototype.updatePosition = function() {
    const screen = $gameScreen;
    const scale = screen.zoomScale();
    this.scale.x = scale;
    this.scale.y = scale;
    this.x = Math.round(-screen.zoomX() * (scale - 1));
    this.y = Math.round(-screen.zoomY() * (scale - 1));

//揺れ方向
if($gameSwitches.value(switchId)){
    this.y += Math.round(screen.shake()); 
   } else {
    this.x += Math.round(screen.shake()); 
   }

};

})();