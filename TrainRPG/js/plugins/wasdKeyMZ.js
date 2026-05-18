//=============================================================================
// wasd利用移動プラグイン/Moving with WASD
// wasdKeyMZ.js
// Copyright (c) 2020 湿度ケイ
//=============================================================================
/*:
 * @target MZ
 * @plugindesc It is a plugin that corresponds to the wasd move.
 * @author Shitsudo Kei
 *
 * @help
 *
 * It is a plugin that corresponds to the wasd move.
 * 
 * I will not be responsible for any problems that may occur. Please understand. 
 * -License
 * This plugin is distributed under the MIT license.
 * Feel free to use it.
 * http://opensource.org/licenses/mit-license.php
 */
/*:ja
 * @target MZ
 * @plugindesc wasd移動に対応させます。
 * @author 湿度ケイ
 *
 * @help
 *
 * wasd移動に対応するプラグインです。
 *
 */
/*:zh
 * @target MZ
 * @plugindesc 使游戏支持 WASD 键移动的插件。
 * @author Shitsudo Kei
 *
 * @help
 *
 * 本插件使游戏支持通过 WASD 键进行移动操作。
 * 
 */
(function() {
	Input.keyMapper = {
    //キーマップ
		9: 'tab',       // tab
		13: 'ok',       // enter
		16: 'shift',    // shift
		17: 'control',  // control
		18: 'control',  // alt
		27: 'escape',   // escape
		32: 'ok',       // space
		33: 'pageup',   // pageup
		34: 'pagedown', // pagedown
		37: 'left',     // left arrow
		38: 'up',       // up arrow
		39: 'right',    // right arrow
		40: 'down',     // down arrow
		45: 'escape',   // insert
		81: 'pageup',   // Q
		69: 'pagedown', // E
		88: 'escape',   // X
		90: 'ok',       // Z
		96: 'escape',   // numpad 0
		98: 'down',     // numpad 2
		100: 'left',    // numpad 4
		102: 'right',   // numpad 6
		104: 'up',      // numpad 8
		120: 'debug',    // F9
    //WASDに対応
		65: 'left',     // left arrow
		87: 'up',       // up arrow
		68: 'right',    // right arrow
		83: 'down'     // down arrow
	};
})();
