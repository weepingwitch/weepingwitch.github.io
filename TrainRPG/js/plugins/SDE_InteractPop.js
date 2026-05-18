/*:
 * @plugindesc Shows "interact" balloon tip whenever the player is in reach of an event that they can interact with.
 * @author Dustb0
 * @version 1.2
 * 
 * @param balloonID
 * @text Balloon ID
 * @type number
 * @default 11
 * 
 */
(() => {
  const parameters = PluginManager.parameters("SDE_InteractPop");
  const paramBalloonID = Number(parameters["balloonID"])

  Game_Player.prototype.startMapEvent = function(x, y, triggers, normal) {
    if (!$gameMap.isEventRunning()) {
        for (const event of $gameMap.eventsXy(x, y)) {
            if (
                event.isTriggerIn(triggers) &&
                event.isNormalPriority() === normal
            ) {
                event.start();

            } else if (event.page() &&
                       event.list().length > 0 && 
                       event.list()[0].code === 108 &&
                       event.list()[0].parameters[0].match(/\\interact\s*/i)) {
              // Event Page Comment

              // Check direction condition
              const direction = event.list()[0].parameters[0].match(/dir\=(\d)\D*\s*/i);
              if (direction && Number(direction[1]) !== $gamePlayer.direction()) {
                return;
              }
              let balloon = event.list()[0].parameters[0].match(/balloon\=(\d+)\D*\s*/i); 
              requestBalloon(balloon ? Number(balloon[1]) : paramBalloonID);

            } else if (event.event().meta["interact"] && event.findProperPageIndex() >= 0) {
              // Event
              let balloonID = paramBalloonID

              // Check if default param gets overriden by event
              if (typeof event.event().meta["interact"] === 'string') {
                balloonID = Number(event.event().meta["interact"]);
              }
              requestBalloon(balloonID);
            }
        }
    }
  }

  requestBalloon = function(balloonID) {
    if ($gamePlayer.requestBalloon) {
      $gamePlayer.requestBalloon(balloonID); // MV
    } else {
      $gameTemp.requestBalloon($gamePlayer, balloonID); // MZ
    }    
  }

})();