//=============================================================================
// willow's tools
// willowTools.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc random fixes i need.
 * @author willow
 *
 * @help
 *
 * wasd movement, etc.
 * 

 */

/*
//faster animation
(function() {

    Tilemap.prototype.update = function() {
    this.animationCount++;
    this.animationFrame = Math.floor(this.animationCount / 10);
    for (const child of this.children) {
        if (child.update) {
            child.update();
        }
    }
};
*/

//no input in ui


//wasd input

	Input.keyMapper = {
   
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
		81: 'escape',   // Q
		69: 'ok', // E
		88: 'pageup',   // X
		90: 'pagedown',       // Z
		96: 'escape',   // numpad 0
		98: 'down',     // numpad 2
		100: 'left',    // numpad 4
		102: 'right',   // numpad 6
		104: 'up',      // numpad 8
		
    //WASD
		65: 'left',     // left arrow
		87: 'up',       // up arrow
		68: 'right',    // right arrow
		83: 'down'     // down arrow
	};





