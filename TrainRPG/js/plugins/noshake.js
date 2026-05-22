

/*:
 * @target MZ MV
 * @plugindesc Make certain pictures not shake with the screen.
 * @author Caethyril
 * @url https://forums.rpgmakerweb.com/threads/171740/
 * @help Free to use and/or modify for any project, no credit required.
 */
;void (function() {
'use strict';
  /**
   * Used in {@linkcode isNonShakePic}.
   * Pictures with a matching filename will shake in antiphase.
   */
  const NAME_RX = /!$/;  // "ends with !"

  /**
   * @param {Game_Picture} pic reference picture.
   * @returns {boolean} `true` iff `pic` is a "non-shake" picture.
   */
  const isNonShakePic = function(pic) {
    return pic && NAME_RX.test(pic.name());
  };

  /**
   * @param {Game_Picture} pic reference picture
   * @returns {number} additive X-offset for picture position.
   */
  const xOffset = function(pic) {
    return isNonShakePic(pic) ? -Math.round($gameScreen.shake()) : 0;
  };

  // Patch - cancel out X-offset due to spriteset shake.
  const alias = Sprite_Picture.prototype.updatePosition;
  Sprite_Picture.prototype.updatePosition = function() {
    alias.apply(this, arguments);
    this.x += xOffset(this.picture());
  };

})();

