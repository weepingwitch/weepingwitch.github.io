//============================================================================
// EliMZ_Book.js
//============================================================================

/*:
@target MZ
@orderAfter DotMoveSystem
@orderAfter DotMoveSystem_FunctionEx

@plugindesc ♦6.1.2♦ Essential plugin for all Eli plugins.
@author Hakuen Studio
@url https://docs.google.com/document/d/1ckAG8ESh6U47Eje2QZ6oajv-cRcsdUJUmRS7PvOseBc/edit?usp=sharing

@help
↑↑↑ HOW TO USE / HELP FILE ABOVE ↑↑↑

★★★★★ → Rate the plugin! Please, is very important to me ^^
https://hakuenstudio.itch.io/eli-book-rpg-maker-mv-mz/rate?source=game

♦ TERMS OF USE
https://www.hakuenstudio.com/terms-of-use-5-0-0

♦ DOWNLOAD
https://hakuenstudio.itch.io/eli-book-rpg-maker-mv-mz

♦ SUPPORT
https://hakuenstudio.itch.io/eli-book-rpg-maker-mv-mz/community

♦ FEATURES

● Core Plugin for Eli Plugins
● Check if you have outdated versions of other Eli plugins
● Improves the error log so you can understand better what is happening
● Provides some engine changes:
- Can remove scroll bars for games with low resolution
- Can disable Effekseer
- Fixes an RPG Maker bug that when reloading the game the sprite images are gone
● Several quality of life for playtest settings:
- Make the game keep playing when window is out of focus
- Changes game window position to open where you want instead of always centered
- Automatically open dev tools
- Quick restart game with F5
- Start the game with FPS on

@param checkVersion
@text Check Plugin Versions
@type boolean
@desc Set to true to check for new versions of the Eli Plugins.
@default true

@param updateErrorPrinter
@text Updated Error Display
@type boolean
@desc Enable improved error log display.
@default true

@param iterateEventList
@text Always Iterate Event List
@type boolean
@desc Set to true to always iterate event list. Otherwise, event need the note: <IterateList>. See help file.
@default true

@param engine
@text Engine Settings
@type struct<engineSt>
@desc Main settings about the engine.
@default {"styleOverflow":"false","disableEffekseer":"false","--- BUG FIXES ---":"","fixBitmapStartLoad":"true"}

@param playtest
@text Playtest Settings
@type struct<developerSt>
@desc Play test settings.
@default {"gameFocus":"false","enableGameWindowPosition":"false","alignX":"left","offsetX":"10","alignY":"center","offsetY":"10","openDevTools":"false","quickRestart":"true","startFps":"false"}

*/

/* ----------------------------- ENGINE SETTINGS ---------------------------- */
{
/*~struct~engineSt:

@param styleOverflow
@text Window Scroll Bars
@type boolean
@desc Remove the scroll bars of the game window that can appear when resolution is low.
@default true

@param disableEffekseer
@text Disable Effekseer
@type boolean
@desc Set it to true, wil completely wipe out any effekseer reference from your code.
@default false

@param --- BUG FIXES ---

@param fixBitmapStartLoad
@text Fix Bitmap Start Load
@type boolean
@desc MZ 1.5.0 - If true, it will fix the issue of not showing sprites on screen after hit F5.
@default true

*/

}

/* -------------------------------- PLAY TEST ------------------------------- */
{
/*~struct~developerSt:

@param gameFocus
@text Game Focus
@type boolean
@desc If true, the game will keep playing even when out of focus.
@default false

@param enableGameWindowPosition
@text Game Window Position
@type boolean
@desc Change the game window position when open Dev Tools. Set false to not use it.
@default false

@param alignX
@text Align X
@type select
@option none
@option left
@option center
@option right
@desc Select none to only use offset value.
@default left
@parent enableGameWindowPosition

@param offsetX
@text Position X
@type text
@desc The Offset X position.
@default 10
@parent alignX
@parent enableGameWindowPosition

@param alignY
@text Align Y
@type select
@option none
@option top
@option center
@option bottom
@desc Select none to only use offset value.
@default top
@parent enableGameWindowPosition

@param offsetY
@text Position Y
@type text
@desc The offset Y position.
@default 10
@parent enableGameWindowPosition

@param openDevTools
@text Auto Open Dev Tools
@type boolean
@desc If true, it will open the Dev Tools automatically.
@default false

@param quickRestart
@text Quick F5
@type boolean
@desc If true, when press F5 the game will reload faster.
@default false

@param startFps
@text Start FPS
@type boolean
@desc If true, the game will start with FPS counter opened.
@default false

*/
}

"use strict"

/**
 * The Eli Namespace that will hold all Eli Plugins.
 * @namespace Eli
 */
var Eli = Eli || {}
/**
 * The Imported object to be used by other plugins to verify the existance of this plugin.
 * @type {object}
 */
var Imported = Imported || {}
/**
 * Adds Eli Book into the Imported object. So other plugins can use to check if the plugin is present on the project.
 * @type {boolean}
 */
Imported.Eli_Book = true

/* ---------------------------------- BUMB ---------------------------------- */
class Bump {
    constructor(t=PIXI){if(void 0===t)throw new Error("Please assign a rendering engine in the constructor before using bump.js");this.renderer="pixi"}addCollisionProperties(t){"pixi"===this.renderer&&(void 0===t.gx&&Object.defineProperty(t,"gx",{get:()=>t.getGlobalPosition().x,enumerable:!0,configurable:!0}),void 0===t.gy&&Object.defineProperty(t,"gy",{get:()=>t.getGlobalPosition().y,enumerable:!0,configurable:!0}),void 0===t.centerX&&Object.defineProperty(t,"centerX",{get:()=>t.x+t.width/2,enumerable:!0,configurable:!0}),void 0===t.centerY&&Object.defineProperty(t,"centerY",{get:()=>t.y+t.height/2,enumerable:!0,configurable:!0}),void 0===t.halfWidth&&Object.defineProperty(t,"halfWidth",{get:()=>t.width/2,enumerable:!0,configurable:!0}),void 0===t.halfHeight&&Object.defineProperty(t,"halfHeight",{get:()=>t.height/2,enumerable:!0,configurable:!0}),void 0===t.xAnchorOffset&&Object.defineProperty(t,"xAnchorOffset",{get:()=>void 0!==t.anchor?t.width*t.anchor.x:0,enumerable:!0,configurable:!0}),void 0===t.yAnchorOffset&&Object.defineProperty(t,"yAnchorOffset",{get:()=>void 0!==t.anchor?t.height*t.anchor.y:0,enumerable:!0,configurable:!0}),t.circular&&void 0===t.radius&&Object.defineProperty(t,"radius",{get:()=>t.width/2,enumerable:!0,configurable:!0})),t._bumpPropertiesAdded=!0}hitTestPoint(t,e){let i,r,h,s,o,f;if(e._bumpPropertiesAdded||this.addCollisionProperties(e),"rectangle"===(i=e.radius?"circle":"rectangle")&&(r=e.x-e.xAnchorOffset,h=e.x+e.width-e.xAnchorOffset,s=e.y-e.yAnchorOffset,o=e.y+e.height-e.yAnchorOffset,f=t.x>r&&t.x<h&&t.y>s&&t.y<o),"circle"===i){let i=t.x-e.x-e.width/2+e.xAnchorOffset,r=t.y-e.y-e.height/2+e.yAnchorOffset;f=Math.sqrt(i*i+r*r)<e.radius}return f}hitTestCircle(t,e,i=!1){let r,h,s,o,f;return t._bumpPropertiesAdded||this.addCollisionProperties(t),e._bumpPropertiesAdded||this.addCollisionProperties(e),i?(r=e.gx+e.width/2-e.xAnchorOffset-(t.gx+t.width/2-t.xAnchorOffset),h=e.gy+e.width/2-e.yAnchorOffset-(t.gy+t.width/2-t.yAnchorOffset)):(r=e.x+e.width/2-e.xAnchorOffset-(t.x+t.width/2-t.xAnchorOffset),h=e.y+e.width/2-e.yAnchorOffset-(t.y+t.width/2-t.yAnchorOffset)),f=(s=Math.sqrt(r*r+h*h))<(o=t.radius+e.radius)}circleCollision(t,e,i=!1,r=!1){t._bumpPropertiesAdded||this.addCollisionProperties(t),e._bumpPropertiesAdded||this.addCollisionProperties(e);let h,s,o,f,n,d,a,l={},c=!1;if(r?(f=e.gx+e.width/2-e.xAnchorOffset-(t.gx+t.width/2-t.xAnchorOffset),n=e.gy+e.width/2-e.yAnchorOffset-(t.gy+t.width/2-t.yAnchorOffset)):(f=e.x+e.width/2-e.xAnchorOffset-(t.x+t.width/2-t.xAnchorOffset),n=e.y+e.width/2-e.yAnchorOffset-(t.y+t.width/2-t.yAnchorOffset)),(h=Math.sqrt(f*f+n*n))<(s=t.radius+e.radius)){c=!0,o=s-h,o+=.3,d=f/h,a=n/h,t.x-=o*d,t.y-=o*a,i&&(l.x=n,l.y=-f,this.bounceOffSurface(t,l))}return c}movingCircleCollision(t,e,i=!1){t._bumpPropertiesAdded||this.addCollisionProperties(t),e._bumpPropertiesAdded||this.addCollisionProperties(e);let r,h,s,o,f={},n={},d={},a={},l={},c=!1;if(t.mass=t.mass||1,e.mass=e.mass||1,i?(f.vx=e.gx+e.radius-e.xAnchorOffset-(t.gx+t.radius-t.xAnchorOffset),f.vy=e.gy+e.radius-e.yAnchorOffset-(t.gy+t.radius-t.yAnchorOffset)):(f.vx=e.x+e.radius-e.xAnchorOffset-(t.x+t.radius-t.xAnchorOffset),f.vy=e.y+e.radius-e.yAnchorOffset-(t.y+t.radius-t.yAnchorOffset)),f.magnitude=Math.sqrt(f.vx*f.vx+f.vy*f.vy),r=t.radius+e.radius,f.magnitude<r){c=!0,h=r-f.magnitude,h+=.3,f.dx=f.vx/f.magnitude,f.dy=f.vy/f.magnitude,f.vxHalf=Math.abs(f.dx*h/2),f.vyHalf=Math.abs(f.dy*h/2),s=t.x>e.x?1:-1,o=t.y>e.y?1:-1,t.x=t.x+f.vxHalf*s,t.y=t.y+f.vyHalf*o,e.x=e.x+f.vxHalf*-s,e.y=e.y+f.vyHalf*-o,f.lx=f.vy,f.ly=-f.vx;let i=t.vx*f.dx+t.vy*f.dy;n.x=i*f.dx,n.y=i*f.dy;let x=t.vx*(f.lx/f.magnitude)+t.vy*(f.ly/f.magnitude);d.x=x*(f.lx/f.magnitude),d.y=x*(f.ly/f.magnitude);let y=e.vx*f.dx+e.vy*f.dy;a.x=y*f.dx,a.y=y*f.dy;let g=e.vx*(f.lx/f.magnitude)+e.vy*(f.ly/f.magnitude);l.x=g*(f.lx/f.magnitude),l.y=g*(f.ly/f.magnitude),t.bounce={},t.bounce.x=d.x+a.x,t.bounce.y=d.y+a.y,e.bounce={},e.bounce.x=n.x+l.x,e.bounce.y=n.y+l.y,t.vx=t.bounce.x/t.mass,t.vy=t.bounce.y/t.mass,e.vx=e.bounce.x/e.mass,e.vy=e.bounce.y/e.mass}return c}multipleCircleCollision(t,e=!1){for(let r=0;r<t.length;r++){var i=t[r];for(let h=r+1;h<t.length;h++){let r=t[h];this.movingCircleCollision(i,r,e)}}}rectangleCollision(t,e,i=!1,r=!0){let h,s,o,f,n,d,a;return t._bumpPropertiesAdded||this.addCollisionProperties(t),e._bumpPropertiesAdded||this.addCollisionProperties(e),r?(d=t.gx+Math.abs(t.halfWidth)-t.xAnchorOffset-(e.gx+Math.abs(e.halfWidth)-e.xAnchorOffset),a=t.gy+Math.abs(t.halfHeight)-t.yAnchorOffset-(e.gy+Math.abs(e.halfHeight)-e.yAnchorOffset)):(d=t.x+Math.abs(t.halfWidth)-t.xAnchorOffset-(e.x+Math.abs(e.halfWidth)-e.xAnchorOffset),a=t.y+Math.abs(t.halfHeight)-t.yAnchorOffset-(e.y+Math.abs(e.halfHeight)-e.yAnchorOffset)),s=Math.abs(t.halfWidth)+Math.abs(e.halfWidth),o=Math.abs(t.halfHeight)+Math.abs(e.halfHeight),Math.abs(d)<s&&Math.abs(a)<o&&((f=s-Math.abs(d))>=(n=o-Math.abs(a))?(a>0?(h="top",t.y=t.y+n):(h="bottom",t.y=t.y-n),i&&(t.vy*=-1)):(d>0?(h="left",t.x=t.x+f):(h="right",t.x=t.x-f),i&&(t.vx*=-1))),h}hitTestRectangle(t,e,i=!1){let r,h,s,o,f;return t._bumpPropertiesAdded||this.addCollisionProperties(t),e._bumpPropertiesAdded||this.addCollisionProperties(e),r=!1,i?(o=t.gx+Math.abs(t.halfWidth)-t.xAnchorOffset-(e.gx+Math.abs(e.halfWidth)-e.xAnchorOffset),f=t.gy+Math.abs(t.halfHeight)-t.yAnchorOffset-(e.gy+Math.abs(e.halfHeight)-e.yAnchorOffset)):(o=t.x+Math.abs(t.halfWidth)-t.xAnchorOffset-(e.x+Math.abs(e.halfWidth)-e.xAnchorOffset),f=t.y+Math.abs(t.halfHeight)-t.yAnchorOffset-(e.y+Math.abs(e.halfHeight)-e.yAnchorOffset)),h=Math.abs(t.halfWidth)+Math.abs(e.halfWidth),s=Math.abs(t.halfHeight)+Math.abs(e.halfHeight),r=Math.abs(o)<h&&Math.abs(f)<s}hitTestCircleRectangle(t,e,i=!1){let r,h,s,o,f,n;if(e._bumpPropertiesAdded||this.addCollisionProperties(e),t._bumpPropertiesAdded||this.addCollisionProperties(t),i?(s=t.gx,o=t.gy,f=e.gx,n=e.gy):(s=t.x,o=t.y,f=e.x,n=e.y),"topMiddle"===(r=o-t.yAnchorOffset<n-Math.abs(e.halfHeight)-e.yAnchorOffset?s-t.xAnchorOffset<f-1-Math.abs(e.halfWidth)-e.xAnchorOffset?"topLeft":s-t.xAnchorOffset>f+1+Math.abs(e.halfWidth)-e.xAnchorOffset?"topRight":"topMiddle":o-t.yAnchorOffset>n+Math.abs(e.halfHeight)-e.yAnchorOffset?s-t.xAnchorOffset<f-1-Math.abs(e.halfWidth)-e.xAnchorOffset?"bottomLeft":s-t.xAnchorOffset>f+1+Math.abs(e.halfWidth)-e.xAnchorOffset?"bottomRight":"bottomMiddle":s-t.xAnchorOffset<f-Math.abs(e.halfWidth)-e.xAnchorOffset?"leftMiddle":"rightMiddle")||"bottomMiddle"===r||"leftMiddle"===r||"rightMiddle"===r)h=this.hitTestRectangle(t,e,i);else{let s={};switch(r){case"topLeft":s.x=f-e.xAnchorOffset,s.y=n-e.yAnchorOffset;break;case"topRight":s.x=f+e.width-e.xAnchorOffset,s.y=n-e.yAnchorOffset;break;case"bottomLeft":s.x=f-e.xAnchorOffset,s.y=n+e.height-e.yAnchorOffset;break;case"bottomRight":s.x=f+e.width-e.xAnchorOffset,s.y=n+e.height-e.yAnchorOffset}h=this.hitTestCirclePoint(t,s,i)}return h?r:h}hitTestCirclePoint(t,e,i=!1){return t._bumpPropertiesAdded||this.addCollisionProperties(t),e.diameter=1,e.width=e.diameter,e.radius=.5,e.centerX=e.x,e.centerY=e.y,e.gx=e.x,e.gy=e.y,e.xAnchorOffset=0,e.yAnchorOffset=0,e._bumpPropertiesAdded=!0,this.hitTestCircle(t,e,i)}circleRectangleCollision(t,e,i=!1,r=!1){let h,s,o,f,n,d;if(e._bumpPropertiesAdded||this.addCollisionProperties(e),t._bumpPropertiesAdded||this.addCollisionProperties(t),r?(o=t.gx,f=t.gy,n=e.gx,d=e.gy):(o=t.x,f=t.y,n=e.x,d=e.y),"topMiddle"===(h=f-t.yAnchorOffset<d-Math.abs(e.halfHeight)-e.yAnchorOffset?o-t.xAnchorOffset<n-1-Math.abs(e.halfWidth)-e.xAnchorOffset?"topLeft":o-t.xAnchorOffset>n+1+Math.abs(e.halfWidth)-e.xAnchorOffset?"topRight":"topMiddle":f-t.yAnchorOffset>d+Math.abs(e.halfHeight)-e.yAnchorOffset?o-t.xAnchorOffset<n-1-Math.abs(e.halfWidth)-e.xAnchorOffset?"bottomLeft":o-t.xAnchorOffset>n+1+Math.abs(e.halfWidth)-e.xAnchorOffset?"bottomRight":"bottomMiddle":o-t.xAnchorOffset<n-Math.abs(e.halfWidth)-e.xAnchorOffset?"leftMiddle":"rightMiddle")||"bottomMiddle"===h||"leftMiddle"===h||"rightMiddle"===h)s=this.rectangleCollision(t,e,i,r);else{let o={};switch(h){case"topLeft":o.x=n-e.xAnchorOffset,o.y=d-e.yAnchorOffset;break;case"topRight":o.x=n+e.width-e.xAnchorOffset,o.y=d-e.yAnchorOffset;break;case"bottomLeft":o.x=n-e.xAnchorOffset,o.y=d+e.height-e.yAnchorOffset;break;case"bottomRight":o.x=n+e.width-e.xAnchorOffset,o.y=d+e.height-e.yAnchorOffset}s=this.circlePointCollision(t,o,i,r)}return s?h:s}circlePointCollision(t,e,i=!1,r=!1){return t._bumpPropertiesAdded||this.addCollisionProperties(t),e.diameter=1,e.width=e.diameter,e.radius=.5,e.centerX=e.x,e.centerY=e.y,e.gx=e.x,e.gy=e.y,e.xAnchorOffset=0,e.yAnchorOffset=0,e._bumpPropertiesAdded=!0,this.circleCollision(t,e,i,r)}bounceOffSurface(t,e){t._bumpPropertiesAdded||this.addCollisionProperties(t);let i,r,h={},s={},o={},f=t.mass||1;e.lx=e.y,e.ly=-e.x,e.magnitude=Math.sqrt(e.x*e.x+e.y*e.y),e.dx=e.x/e.magnitude,e.dy=e.y/e.magnitude,i=t.vx*e.dx+t.vy*e.dy,h.vx=i*e.dx,h.vy=i*e.dy,r=t.vx*(e.lx/e.magnitude)+t.vy*(e.ly/e.magnitude),s.vx=r*(e.lx/e.magnitude),s.vy=r*(e.ly/e.magnitude),s.vx*=-1,s.vy*=-1,o.x=h.vx+s.vx,o.y=h.vy+s.vy,t.vx=o.x/f,t.vy=o.y/f}contain(t,e,i=!1,r){t._bumpPropertiesAdded||this.addCollisionProperties(t),void 0===e.xAnchorOffset&&(e.xAnchorOffset=0),void 0===e.yAnchorOffset&&(e.yAnchorOffset=0),void 0===t.parent.gx&&(t.parent.gx=0),void 0===t.parent.gy&&(t.parent.gy=0);let h=new Set;return t.x-t.xAnchorOffset<e.x-t.parent.gx-e.xAnchorOffset&&(i&&(t.vx*=-1),t.mass&&(t.vx/=t.mass),t.x=e.x-t.parent.gx-e.xAnchorOffset+t.xAnchorOffset,h.add("left")),t.y-t.yAnchorOffset<e.y-t.parent.gy-e.yAnchorOffset&&(i&&(t.vy*=-1),t.mass&&(t.vy/=t.mass),t.y=e.y-t.parent.gy-e.yAnchorOffset+t.yAnchorOffset,h.add("top")),t.x-t.xAnchorOffset+t.width>e.width-e.xAnchorOffset&&(i&&(t.vx*=-1),t.mass&&(t.vx/=t.mass),t.x=e.width-t.width-e.xAnchorOffset+t.xAnchorOffset,h.add("right")),t.y-t.yAnchorOffset+t.height>e.height-e.yAnchorOffset&&(i&&(t.vy*=-1),t.mass&&(t.vy/=t.mass),t.y=e.height-t.height-e.yAnchorOffset+t.yAnchorOffset,h.add("bottom")),0===h.size&&(h=void 0),h&&r&&r(h),h}outsideBounds(t,e,i){let r=e.x,h=e.y,s=e.width,o=e.height,f=new Set;return t.x<r-t.width&&f.add("left"),t.y<h-t.height&&f.add("top"),t.x>s+t.width&&f.add("right"),t.y>o+t.height&&f.add("bottom"),0===f.size&&(f=void 0),f&&i&&i(f),f}_getCenter(t,e,i){return void 0!==t.anchor?0!==t.anchor[i]?0:e/2:e}hit(t,e,i=!1,r=!1,h,s){let o,f=this.hitTestPoint.bind(this),n=this.hitTestRectangle.bind(this),d=this.hitTestCircle.bind(this),a=this.movingCircleCollision.bind(this),l=this.circleCollision.bind(this),c=this.hitTestCircleRectangle.bind(this),x=this.rectangleCollision.bind(this),y=this.circleRectangleCollision.bind(this),g=void 0!==t.parent,A=void 0!==e.parent;return g&&e instanceof Array||A&&t instanceof Array?function(){if(t instanceof Array){let[t,e]=[e,t]}for(let i=e.length-1;i>=0;i--){let r=e[i];(o=b(t,r))&&s&&s(o,r)}}():(o=b(t,e))&&s&&s(o),o;function b(t,e){let s=void 0!==t.parent,o=void 0!==e.parent;if(s&&o)return t.diameter&&e.diameter?function(t,e){return i?t.vx+t.vy!==0&&e.vx+e.vy!==0?a(t,e,h):l(t,e,r,h):d(t,e)}(t,e):t.diameter&&!e.diameter?function(t,e){return i?y(t,e,r,h):c(t,e,h)}(t,e):function(t,e){return i?x(t,e,r,h):n(t,e,h)}(t,e);if(o&&void 0!==t.x&&void 0!==t.y)return f(t,e);throw new Error(`I'm sorry, ${t} and ${e} cannot be use together in a collision test.'`)}}

}

/* --------------------------- SPRITE ANIMATION MV -------------------------- */
/**
 * Let MV Animations be played on the sprite, instead of creatting a individual animation sprite to play the animation.
 */
class Sprite_InnerAnimationMV extends Sprite_AnimationMV{

    updateFlash(){
        if(this._flashDuration > 0){
    
            if(this._targets.filter){
                super.updateFlash()
            }else{
                this.updateFlashForSingleTarget()
            }
        }
    }

    onEnd(){
        if(this.hasAnyFlashDuration()){
            this.visible = false
        }else if(this._targets.filter){
            super.onEnd()
        }else{
            this.onEndSingleTarget()
        }
    }

    isPlaying(){
        return super.isPlaying() || this.hasAnyFlashDuration()
    }

    updatePosition(){
        /* This was suppose to go on the updateMain function. But there is no way to set
        it there, without overwriting it. So I put this here, that happens right before
        the this._duration property is lowered.
        */
        this._duration = Math.max(0, this._duration)
        super.updatePosition()
    }

    updateFlashForSingleTarget(){
        const d = this._flashDuration--
        this._flashColor[3] *= (d - 1) / d
        this._targets.setBlendColor(this._flashColor)
    }
    
    hasAnyFlashDuration(){
        return this._flashDuration > 0 || this._screenFlashDuration > 0
    }
    
    onEndSingleTarget(){
        this._flashDuration = 0
        this._screenFlashDuration = 0
        this._hidingDuration = 0
        this._targets.setBlendColor([0, 0, 0, 0])
        this._targets.show() 
    }
}

/* ========================================================================== */
/*                                    ANIME                                   */
/* ========================================================================== */
Eli.Easings = {

    linear(t){ return t },
/* ------------------------------- DEFAULT MZ ------------------------------- */
    slowStart(t){ return this.easeInQuad(t) },
    slowEnd(t){ return this.easeOutQuad(t) },
    slowStartEnd(t){ return this.easeInOutQuad(t) },
/* ---------------------------------- QUAD ---------------------------------- */
    easeInQuad(t){ return t**2 },
    easeOutQuad(t){ return t * (2 - t) },
    easeInOutQuad(t){ if((t *= 2) < 1){ return 0.5 * this.easeInQuad(t) } return -0.5 * (--t * (t - 2) - 1) },
    easeOutInQuad(t){ if(t < 0.5){ return this.easeOutQuad(t * 2) / 2 } return this.easeInQuad((t - 0.5) * 2) / 2 + 0.5 },
/* ---------------------------------- CUBIC --------------------------------- */
    easeInCubic(t){ return t**3 },
    easeOutCubic(t){ return --t * t * t + 1 },
    easeInOutCubic(t){ if((t *= 2) < 1){ return 0.5 * this.easeInCubic(t) } return 0.5 * ((t -= 2) * t * t + 2) },
    easeOutInCubic(t){ if(t < 0.5){ return this.easeOutCubic(t * 2) / 2 } return this.easeInCubic((t - 0.5) * 2) / 2 + 0.5 },
/* ---------------------------------- QUART --------------------------------- */
    easeInQuart(t){ return t**4 },
    easeOutQuart(t){ return 1 - --t * t**3 },
    easeInOutQuart(t){ if((t *= 2) < 1){ return 0.5 * this.easeInQuart(t) } return -0.5 * ( (t -= 2) * t**3 - 2) },
    easeOutInQuart(t){ if(t < 0.5){ return this.easeOutQuart(t * 2) / 2 } return this.easeInQuart((t - 0.5) * 2) / 2 + 0.5 },
/* ---------------------------------- QUINT --------------------------------- */
    easeInQuint(t){ return t**5 },
    easeOutQuint(t){ return --t * t**4 + 1 },
    easeInOutQuint(t){ if((t *= 2) < 1){ return 0.5 * this.easeInQuint(t) } return 0.5 * ( (t -= 2) * t**4 + 2) },
    easeOutInQuint(t){ if(t < 0.5){ return this.easeOutQuint(t * 2) / 2 } return this.easeInQuint((t - 0.5) * 2) / 2 + 0.5 },
/* ---------------------------------- SINE ---------------------------------- */
    easeInSine(t){ const pi = Math.PI; return Math.cos(t * pi / 2 - pi) + 1.0 },
    easeOutSine(t){ return Math.sin((t * Math.PI) / 2) },
    easeInOutSine(t){ return 0.5 * (1 - Math.cos(Math.PI * t)) },
    easeOutInSine(t){ if(t < 0.5){ return this.easeOutSine(t * 2) / 2 } return this.easeInSine((t - 0.5) * 2) / 2 + 0.5 },
/* ---------------------------------- EXPO ---------------------------------- */
    easeInExpo(t){ return t === 0 ? 0 : Math.pow(1024, t - 1) },
    easeOutExpo(t){ return t === 1 ? 1 : 1 - Math.pow(2, -10 * t) },
    easeInOutExpo(t){ if (t === 0){ return 0 } if (t === 1){ return 1 } if ((t *= 2) < 1) { return 0.5 * Math.pow(1024, t - 1) } return 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2) },
    easeOutInExpo(t){ if(t < 0.5){ return this.easeOutExpo(t * 2) / 2 } return this.easeInExpo((t - 0.5) * 2) / 2 + 0.5 },
/* ---------------------------------- CIRC ---------------------------------- */
    easeInCirc(t){ return 1 - Math.sqrt(1 - t * t) },
    easeOutCirc(t){ return Math.sqrt(1 - --t * t) },
    easeInOutCirc(t){ if ((t *= 2) < 1){ return -0.5 * (Math.sqrt(1 - t * t) - 1) } return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1) },
    easeOutInCirc(t){ if(t < 0.5){ return this.easeOutCirc(t * 2) / 2 } return this.easeInCirc((t - 0.5) * 2) / 2 + 0.5 },
/* ---------------------------------- BACK ---------------------------------- */
    easeInBack(t){ const s = 1.70158; return t * t * ((s + 1) * t - s) },
    easeOutBack(t){ const s = 1.70158; return --t * t * ((s + 1) * t + s) + 1 },
    easeInOutBack(t){ const s = 1.70158 * 1.525; if((t *= 2) < 1){ return 0.5 * (t * t * ((s + 1) * t - s)) }else{ return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2) } },
    easeOutInBack(t){ if(t < 0.5){ return this.easeOutBack(t * 2) / 2 } return this.easeInBack((t - 0.5) * 2) / 2 + 0.5 },
/* --------------------------------- BOUNCE --------------------------------- */
    easeInBounce(t){ return 1 - this.easeOutBounce(1 - t) },
    easeOutBounce(t){ if (t < 1 / 2.75) { return 7.5625 * t * t } else if (t < 2 / 2.75) { return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 } else if (t < 2.5 / 2.75) { return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 } else { return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375 } },
    easeInOutBounce(t){ if(t < 0.5){ return this.easeInBounce(t * 2) * 0.5 } return this.easeOutBounce(t * 2 - 1) * 0.5 + 0.5 },
    easeOutInBounce(t){ if(t < 0.5){ return this.easeOutBounce(t * 2) / 2 } return this.easeInBounce((t - 0.5) * 2) / 2 + 0.5 },
/* --------------------------------- ELASTIC -------------------------------- */
    easeInElastic(t){ if (t === 0){ return 0 } if (t === 1){ return 1 } return -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI) },
    easeOutElastic(t){ if (t === 0){ return 0 } if (t === 1){ return 1 } return Math.pow(2, -10 * t) * Math.sin((t - 0.1) * 5 * Math.PI) + 1 },
    easeInOutElastic(t){ if (t === 0){ return 0 } if (t === 1){ return 1 } t *= 2; if (t < 1){ return -0.5 * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI) } return 0.5 * Math.pow(2, -10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI) + 1 },
    easeOutInElastic(t){ if(t < 0.5){ return this.easeOutElastic(t * 2) / 2 } return this.easeInElastic((t - 0.5) * 2) / 2 + 0.5 },
/* --------------------------------- EXECUTE -------------------------------- */
    execute(type, t){ 
        return this[type](t) 
    },
}

Eli.AnimeBase = class AnimeBase {

	constructor(target, propName, duration, easing, direction, loop){
        this.initBasic(target, propName, duration, easing)
        this.initDirection(direction)
        this.initLoop(loop)
        this.initOtherMembers()
	}

    initBasic(target, propName, duration, easing){
		this.target = target
		this.propName = propName
		this.duration = duration || 1
		this.easing = easing || "linear"
    }

    initDirection(direction){
		this.directionType = direction || "normal"
		this.currentDirection = this.directionType === "reverse" ? "reverse" : "normal"
    }

	initLoop(loop){
        const value = loop || 0
        this.currentLoop = 0

		if(value === -1){
			this.loopTotal = -1
		}else if(this.directionType === "alternate" && value === 0){
			this.loopTotal = 1
		}else{
            this.loopTotal = value
        }
	}

    initOtherMembers(){
        this.elapsed = 0
		this.totalTimeElapsed = 0
		this.totalValueChanged = 0

		this.running = false
		this.finished = false
		this.progress = 0
    }

    reverse(){
        this.currentDirection = this.currentDirection === "normal" ? "reverse" : "normal"
        this.start(this.currentDirection)
    }

	restart(direction){
		this.start(direction)
	}

	start(direction){
		this.resetProperties()
		this.refreshDirection(direction)
		this.refreshStartValue()
	}

	resetProperties(){
        this.currentLoop = 0
		this.elapsed = 0
		this.running = true
		this.finished = false
		this.progress = 0
	}

	refreshDirection(direction){
		const value = direction ? String(direction).toLowerCase() : ""

		if(this.isValidDirection(value)){
            this.currentDirection = value
		}
	}

    isValidDirection(direction){
        return direction === "normal" || direction === "reverse"
    }

	update(){
		if(this.canUpdateAnimation()){
			this.updateAnimation()
		}
	}

	canUpdateAnimation(){
		return this.running && !this.finished
	}

	updateAnimation(){
        this.totalTimeElapsed++
        this.updateAnimationFrame()
	}

    updateAnimationFrame(){
		this.elapsed++
		
		this.updateProperty()
		this.refreshProgress()

		if(this.canFinish()){
			this.onAnimationEnd()
		}else{
            this.onAnimationNotFinished()
        }
    }

    updateProperty(){}

	canFinish(){
		return this.elapsed >= this.duration
	}

	onAnimationEnd(){
		this.elapsed = 0
		this.currentLoop++

		if(this.needLoop()){
            this.startLoop()
		}else{
			this.finishPropertyValue()
			this.finishAnimation()
		}
	}

    needLoop(){
        return this.loopTotal === -1 || this.currentLoop <= this.loopTotal
	}

	startLoop(){
		this.refreshAnimationDirection()
		this.refreshStartValue()
	}

	refreshAnimationDirection(){
		if(this.directionType === "alternate"){
			this.currentDirection = this.currentDirection === "normal" ? "reverse" : "normal"
		}
	}

    refreshStartValue(){}

    finishPropertyValue(){}

	finishAnimation(){
		this.running = false
		this.finished = true
		this.progress = 1
	}

    onAnimationNotFinished(){}

	stop(){
		this.finishAnimation()
	}

	pause(){
		this.running = false
	}

	resume(){
		if(!this.finished){
			this.running = true
		}
	}

	isPaused(){
		return !this.running && !this.finished
	}

	isRunning(){
		return this.running
	}

	isFinished(){
		return this.finished
	}

	getCurrentTime(){
		let time = this.elapsed / this.duration

		if(time < 0){
			time = 0
		}else if(time > 1){
			time = 1
		}

		return time
	}

	refreshProgress(){
		this.progress = this.getProgress()
	}

	getProgress(){
		if(this.loopTotal === -1){
			return this.getCurrentTime()
		}else{
			const totalFrames = (this.loopTotal + 1) * this.duration
			const doneFrames = (this.currentLoop * this.duration) + this.elapsed

			let p = doneFrames / totalFrames

			if(p < 0){
				p = 0
			}else if(p > 1){
				p = 1
			}

			return p
		}
	}

	getProgressText(){
		const percent = Math.floor(this.getProgress() * 100)
		return percent + "%"
	}

	getTotalValueChanged(){
		return this.totalValueChanged
	}

	getTotalTimeElapsed(){
		return this.totalTimeElapsed
	}

	getTarget(){
		return this.target
	}

	getPropName(){
		return this.propName
	}

	getCurrentPropValue(){
		return this.target[this.propName]
	}

	setPropValue(value){
		this.target[this.propName] = value
	}

    forceFinish(direction){
        if(direction){
            if(direction === "alternate"){
                this.currentDirection = this.currentDirection === "normal" ? "reverse" : "normal"
            }else{
                this.currentDirection = direction
            } 
        }
		this.loopTotal = 0
		this.currentLoop = 1
		this.elapsed = this.duration

		this.finishPropertyValue()
		this.finishAnimation()
	}

    hasEnd(){
        return true
    }
}

Eli.AnimeLevel0 = class AnimeLevel0 extends Eli.AnimeBase {
    
	constructor(data){
		const {target, propName, incrementValue, direction} = data
		super(target, propName, 1, "linear", direction, -1)
		this.incrementValue = incrementValue || 0
	}

	updateProperty(){
		const current = this.getCurrentPropValue()
		const value = current + this.incrementValue

		this.totalValueChanged += Math.abs(this.incrementValue)
		this.setPropValue(value)
	}

	canFinish(){
		return false
	}

    hasEnd(){
        return false
    }

	refreshStartValue(){}

	finishPropertyValue(){}
}

Eli.AnimeLevel1 = class AnimeLevel1 extends Eli.AnimeBase {

	constructor(data){
        const {target, propName, targetValue, duration, easing, direction, loop} = data
		super(target, propName, duration, easing, direction, loop)
        this.initValues(targetValue)
	}

    initValues(targetValue){
        if(Array.isArray(targetValue)){
            this.startValue = targetValue[0]
            this.targetValue = targetValue[1]
        }else{
            this.startValue = this.getCurrentPropValue()
            this.targetValue = targetValue
        }
    }

	updateProperty(){
		const current = this.getCurrentPropValue()
		const time = this.getCurrentTime()
		const eased = Eli.Easings.execute(this.easing, time)
		const range = this.getPropertyRange()
		const value = this.calculateValue(range.start, range.end, eased)

		this.totalValueChanged += Math.abs(value - current)
		this.setPropValue(value)
	}

	getPropertyRange(){
		if(this.currentDirection === "reverse"){
			return { start: this.targetValue, end: this.startValue }
		}else{
			return { start: this.startValue, end: this.targetValue }
		}
	}

	calculateValue(a, b, t){
		return a + (b - a) * t
	}

    refreshStartValue(){
		const value = this.currentDirection === "reverse" ? this.targetValue : this.startValue
		this.setPropValue(value)
	}

	finishPropertyValue(){
		const value = this.currentDirection === "reverse" ? this.startValue : this.targetValue
		this.setPropValue(value)
	}

	getStartValue(){
		return this.startValue
	}

	getTargetValue(){
		return this.targetValue
	}

}

Eli.AnimeLevel2 = class AnimeLevel2 extends Eli.AnimeLevel1 {

	constructor(data){
        const {startDelay, animationDelay, finishDelay, loopDelay} = data
		super(data)
        this.initDelays(startDelay, animationDelay, finishDelay, loopDelay)
	}

    initDelays(startDelay, animationDelay, finishDelay, loopDelay){
		this.startDelay = startDelay || 0
		this.animationDelay = animationDelay || 0
		this.finishDelay = finishDelay || 0
		this.loopDelay = loopDelay || 0

		this.startDelayLeft = 0
		this.animationDelayLeft = 0
		this.finishDelayLeft = 0
		this.loopDelayLeft = 0
    }

	resetProperties(){
		super.resetProperties()
		this.resetDelays()
	}

	resetDelays(){
		this.startDelayLeft = this.startDelay
		this.animationDelayLeft = 0
		this.finishDelayLeft = 0
		this.loopDelayLeft = 0
	}

    getUpdatePhase(){
        if(this.startDelayLeft > 0){
            return "startDelay"
        }else if(this.finishDelayLeft > 0){
            return "finishDelay"
        }else if(this.loopDelayLeft > 0){
            return "loopDelay"
        }else if(this.animationDelayLeft > 0){
            return "animationDelay"
        }else{
            return "updateAnimation"
        }
    }

	updateAnimation(){
		this.totalTimeElapsed++

		const phase = this.getUpdatePhase()

		if(phase === "startDelay"){
			this.updateStartDelay()
		}else if(phase === "finishDelay"){
			this.updateFinishDelay()
		}else if(phase === "loopDelay"){
			this.updateLoopDelay()
		}else if(phase === "animationDelay"){
			this.updateAnimationDelay()
		}else{
			this.updateAnimationFrame()
		}
	}

	updateStartDelay(){
		this.startDelayLeft--
	}

    updateFinishDelay(){
        this.finishDelayLeft--

        if(this.finishDelayLeft <= 0){
            this.finishAnimation()
        }
    }

    updateLoopDelay(){
        this.loopDelayLeft--

        if(this.loopDelayLeft <= 0){
            this.startLoop()
        }
    }

	updateAnimationDelay(){
		this.animationDelayLeft--
	}

    onAnimationEnd(){
		this.elapsed = 0
		this.currentLoop++
        this.finishPropertyValue()

		if(this.needLoop()){
            this.startLoopDelay()
		}else{
			this.startFinishDelay()
		}
	}

    startLoopDelay(){
        this.loopDelayLeft = this.loopDelay

        if(this.loopDelayLeft === 0){
            this.startLoop()
        }
    }

    startFinishDelay(){
        this.finishDelayLeft = this.finishDelay

        if(this.finishDelayLeft === 0){
            this.finishAnimation()
        }
    }

    onAnimationNotFinished(){
        this.startAnimationDelay()
    }

    startAnimationDelay(){
        this.animationDelayLeft = this.animationDelay
    }
}

Eli.AnimeLevel3 = class AnimeLevel3 extends Eli.AnimeLevel2 {

	constructor(data){
		super(data)
		this.setCallbacks(data.callbacks)
	}

    /**
     * 
     * @param {function} callbacks - They are functions with specific names, on that order: 
     * onStart, onStartDelayBegin, onStartDelayEnd, 
     * onUpdateAnimation, onAnimationDelayBegin, onAnimationDelayEnd, onAnimationEnd, onLoopDelayBegin, onLoopDelayEnd, 
     * onLoop, onFinishDelayBegin, onFinishDelayEnd, onFinish,
     */
    setCallbacks(callbacks){
        this.callbacks = callbacks || {}
    }

    setCallback(name, fn){
        this.callbacks[name] = fn
    }

	callCallback(name){
		const callback = this.callbacks[name]

		if(typeof callback === "function"){
			callback.call(this, this)
		}
	}

	start(direction){
		super.start(direction)

		this.callCallback("onStart")

		if(this.startDelay > 0 && this.startDelayLeft > 0){
			this.callCallback("onStartDelayBegin")
		}
	}

	updateStartDelay(){
		super.updateStartDelay()

		if(this.startDelay > 0 && this.startDelayLeft === 0){
			this.callCallback("onStartDelayEnd")
		}
	}

	startAnimationDelay(){
		super.startAnimationDelay()

		if(this.animationDelay > 0 && this.animationDelayLeft > 0){
			this.callCallback("onAnimationDelayBegin")
		}
	}

	updateAnimationDelay(){
		super.updateAnimationDelay()
        
		if(this.animationDelay > 0 && this.animationDelayLeft === 0){
			this.callCallback("onAnimationDelayEnd")
		}
	}

	startFinishDelay(){
		this.finishDelayLeft = this.finishDelay

		if(this.finishDelay > 0){
			this.callCallback("onFinishDelayBegin")
		}else{
			this.finishAnimation()
		}
	}

    updateFinishDelay(){
        this.finishDelayLeft--

        if(this.finishDelayLeft <= 0){
            if(this.finishDelay > 0){
                this.callCallback("onFinishDelayEnd")
            }
            this.finishAnimation()
        }
    }

	startLoopDelay(){
		this.loopDelayLeft = this.loopDelay

		if(this.loopDelay > 0){
			this.callCallback("onLoopDelayBegin")
		}else{
			this.startLoop()
		}
	}

    updateLoopDelay(){
        this.loopDelayLeft--

        if(this.loopDelayLeft <= 0){
            if(this.loopDelay > 0){
                this.callCallback("onLoopDelayEnd")
            }
            this.startLoop()
        }
    }

	updateAnimationFrame(){
		this.elapsed++

		this.updateProperty()
		this.refreshProgress()

		this.callCallback("onUpdateAnimation")

		if(this.canFinish()){
			this.onAnimationEnd()
		}else{
			this.startAnimationDelay()
		}
	}

	onAnimationEnd(){
		this.elapsed = 0
		this.currentLoop++

		this.finishPropertyValue()
		this.callCallback("onAnimationEnd")

		if(this.needLoop()){
            this.startLoopDelay()
		}else{
			this.startFinishDelay()
		}
	}

	startLoop(){
		this.refreshAnimationDirection()
		this.callCallback("onLoop")
		this.refreshStartValue()
	}

	finishAnimation(){
		const wasFinished = this.finished

		super.finishAnimation()

		if(!wasFinished){
			this.callCallback("onFinish")
		}
	}

    forceFinish(){
		this.loopTotal = 0
		this.currentLoop = 1
		this.elapsed = this.duration

		this.finishPropertyValue()
		this.finishAnimation()
	}

}

Eli.AnimeCollection = class AnimeCollection {

	constructor(animes, data){
		this.setAnimations(animes)
        this.initDelay(data)
        this.initDirection(data)
		this.setCallbacks(data.callbacks)
        this.initLoop(data)
        this.initOthers()
	}

    setAnimations(animations){
        this.animes = animations || []
    }

    initDelay(data){
        this.startDelay = Number(data.startDelay) || 0
        this.animationDelay = Number(data.animationDelay) || 0
        this.finishDelay = Number(data.finishDelay) || 0
        this.loopDelay = Number(data.loopDelay) || 0

        this.startDelayLeft = 0
        this.animationDelayLeft = 0
        this.finishDelayLeft = 0
        this.loopDelayLeft = 0
    }

    initDirection(data){
        this.directionType = data.direction || "normal"
		this.currentDirection = this.directionType === "reverse" ? "reverse" : "normal"
    }

    setCallbacks(callbacks){
		this.callbacks = callbacks || {}
	}

	initLoop(data){
        const value = data.loop || 0
        this.currentLoop = 0

		if(value === -1){
			this.loopTotal = -1
		}else if(this.directionType === "alternate" && value === 0){
			this.loopTotal = 1
		}else{
            this.loopTotal = value
        }
	}

    initOthers(){
		this.running = false
		this.finished = false
		this.progress = 0

		this.totalTimeElapsed = 0
    }

    /**
     * 
     * @param {string} name They are functions with specific names, on that order:
     * onStart, onStartDelayBegin, onStartDelayEnd, onUpdateAnimation, onAnimationDelayBegin, 
     * onAnimationDelayEnd, onFinishDelayBegin, onFinishDelayEnd, onFinish
     */
	callCallback(name){
		const callback = this.callbacks[name]

		if(typeof callback === "function"){
			callback.call(this, this)
		}
	}

    /**
     * 
     * @param {string} name They are functions with specific names, on that order:
     * onStart, onStartDelayBegin, onStartDelayEnd, onUpdateAnimation, onAnimationDelayBegin, 
     * onAnimationDelayEnd, onFinishDelayBegin, onFinishDelayEnd, onFinish
     * @param {function} fn 
     */
	setCallback(name, fn){
		this.callbacks[name] = fn
	}

    start(direction = "normal"){
        this.resetProperties()
        this.currentDirection = direction
        this.startDelayLeft = this.startDelay

        for(const anime of this.animes){
            anime.start(this.currentDirection)
        }

        this.callCallback("onStart")

        if(this.startDelay > 0){
            this.callCallback("onStartDelayBegin")
        }
    }

    reverse(){
        const direction = this.currentDirection === "normal" ? "reverse" : "normal"
        this.start(direction)
    }

	stop(){
		this.finish()
	}

	pause(){
		this.running = false
	}

	resume(){
		if(!this.finished){
			this.running = true
		}
	}

	isPaused(){
		return !this.running && !this.finished
	}

	isRunning(){
		return this.running
	}

	isFinished(){
		return this.finished
	}

    resetProperties(){
        this.startDelayLeft = 0
        this.animationDelayLeft = 0
        this.finishDelayLeft = 0
        this.loopDelayLeft = 0

        this.progress = 0
        this.running = true
        this.finished = false

        this.currentLoop = 0
    }

    update(){
        if(this.canUpdate()){
            this.updateManager()
        }
    }

    canUpdate(){
        return this.running && !this.finished
    }

    updateManager(){
        this.totalTimeElapsed++

        const phase = this.getUpdatePhase()

        if(phase === "startDelay"){
            this.updateStartDelay()
        }else if(phase === "finishDelay"){
            this.updateFinishDelay()
        }else if(phase === "loopDelay"){
            this.updateLoopDelay()
        }else if(phase === "animationDelay"){
            this.updateAnimationDelay()
        }else{
            this.updateAnimation()
        }
    }

	getUpdatePhase(){
        if(this.startDelayLeft > 0){
            return "startDelay"
        }else if(this.finishDelayLeft > 0){
            return "finishDelay"
        }else if(this.loopDelayLeft > 0){
            return "loopDelay"
        }else if(this.animationDelayLeft > 0){
            return "animationDelay"
        }else{
            return "updateAnimation"
        }
    }

	updateStartDelay(){
		this.startDelayLeft--

		if(this.startDelayLeft <= 0){
			if(this.startDelay > 0){
				this.callCallback("onStartDelayEnd")
			}
		}
	}

    updateFinishDelay(){
		this.finishDelayLeft--

		if(this.finishDelayLeft <= 0){
			if(this.finishDelay > 0){
				this.callCallback("onFinishDelayEnd")
			}
			this.finish()
		}
	}

	updateAnimationDelay(){
		this.animationDelayLeft--

		if(this.animationDelayLeft <= 0){
			if(this.animationDelay > 0){
				this.callCallback("onAnimationDelayEnd")
			}
		}
	}

    updateAnimation(){
        this.updateAnimes()
        this.refreshProgress()
        this.callCallback("onUpdateAnimation")

        if(this.canFinish()){
            this.callCallback("onAnimationEnd")
            this.onAnimationEnd()
        }else{
            this.startAnimationDelay()
        }
    }

    onAnimationEnd(){
        this.currentLoop++

        if(this.needLoop()){
            this.startLoopDelay()
        }else{
            this.startFinishDelay()
        }
    }

    startLoopDelay(){
        this.loopDelayLeft = this.loopDelay

        if(this.loopDelay > 0){
            this.callCallback("onLoopDelayBegin")
        }else{
            this.startLoop()
        }
    }

    updateLoopDelay(){
        this.loopDelayLeft--

        if(this.loopDelayLeft <= 0){
            if(this.loopDelay > 0){
                this.callCallback("onLoopDelayEnd")
            }
            this.startLoop()
        }
    }

    updateAnimes(){
        for(const anime of this.animes){
            anime.update()
        }
    }

    needLoop(){
        return this.loopTotal === -1 || this.currentLoop <= this.loopTotal
    }

    startLoop(){
        this.refreshAnimationDirection()
        this.callCallback("onLoop")

        for(const anime of this.animes){
            anime.start(this.currentDirection)
        }
    }

    refreshAnimationDirection(){
		if(this.directionType === "alternate"){
			this.currentDirection = this.currentDirection === "normal" ? "reverse" : "normal"
		}
	}

	startAnimationDelay(){
		if(this.animationDelay > 0){
			this.animationDelayLeft = this.animationDelay
			this.callCallback("onAnimationDelayBegin")
		}
	}

	startFinishDelay(){
		if(this.finishDelay > 0){
			this.finishDelayLeft = this.finishDelay
			this.callCallback("onFinishDelayBegin")
		}else{
			this.finish()
		}
	}

	canFinish(){
		return this.areAllFinished()
	}

	finish(){
		this.running = false
		this.finished = true
		this.progress = 1
		this.callCallback("onFinish")
	}

	refreshProgress(){
		if(this.hasAnimes()){
            let sum = 0

            for(const anime of this.animes){
                sum += anime.getProgress()
            }

            this.progress = sum / this.animes.length

		}else{
            this.progress = 1
        }
	}

	addAnimation(anime){
        if(!this.getAnimation(anime.getTarget(), anime.getPropName())){
		    this.animes.push(anime)
        }
	}

	removeAnimation(anime){
		const index = this.animes.indexOf(anime)

		if(index >= 0){
			this.animes.splice(index, 1)
		}
	}

	clear(){
		this.animes.length = 0
	}

    hasAnimes(){
        return this.animes.length > 0
    }

	getAnimation(target, prop){
		return this.animes.find(anime => anime.getTarget() === target && anime.getPropName() === prop)
	}

	getAnimations(target, prop){
		return this.animes.filter(anime => anime.getTarget() === target && anime.getPropName() === prop)
	}

	areAllRunning(){
		return this.hasAnimes() && this.animes.every(anime => anime.isRunning())
	}

	isAnyRunning(){
		return this.animes.some(anime => anime.isRunning())
	}

	areAllFinished(){
        if(this.hasAnimes()){

            for(const anime of this.animes){

                if(anime.hasEnd() && !anime.isFinished()){
                    return false
                } 
            }

            return true
        }else{
            return true
        }
	}

    isAnyFinished(){
		return this.animes.some(anime => anime.isFinished())
	}

    forceFinish(){
		for(const anime of this.animes){
			anime.forceFinish()
		}

		this.loopTotal = 0
		this.currentLoop = 1

		this.startDelayLeft = 0
		this.animationDelayLeft = 0
		this.loopDelayLeft = 0
		this.finishDelayLeft = 0

		this.finish()
	}
}

Eli.AnimeUtils = {

	createLevel0Defaults(){
		return {
			target: null,
			propName: "",
			incrementValue: 1,
			direction: "normal",
		}
	},

    createLevel1Defaults(){
        return {
            target: null,
            propName: "",
            targetValue: 0,
            duration: 1,
            easing: "linear",
            direction: "normal",
            loop: 0,
        }
    },

    createLevel2Defaults(){
        const obj = this.createLevel1Defaults()
        obj.startDelay = 0
        obj.loopDelay = 0
        obj.finishDelay = 0
        obj.animationDelay = 0

        return obj
    },

    createLevel3Defaults(){
        const obj = this.createLevel2Defaults()
        obj.callbacks = {
            onStart: null,
            onStartDelayBegin: null,
            onStartDelayEnd: null,
            onUpdateAnimation: null,
            onAnimationDelayBegin: null,
            onAnimationDelayEnd: null,
            onAnimationEnd: null,
            onLoopDelayBegin: null,
            onLoopDelayEnd: null,
            onLoop: null,
            onFinishDelayBegin: null,
            onFinishDelayEnd: null,
            onFinish: null,
        }
        return obj
    },

    createCollectionDefaults(){
        return {
            startDelay: 0,
            animationDelay: 0,
            loopDelay: 0,
            finishDelay: 0,
            direction: "normal",
            loop: 0,
            callbacks:{
                onStart: null,
                onStartDelayBegin: null,
                onStartDelayEnd: null,
                onUpdateAnimation: null,
                onAnimationDelayBegin: null,
                onAnimationDelayEnd: null,
                onAnimationEnd: null,
                onLoopDelayBegin: null,
                onLoopDelayEnd: null,
                onLoop: null,
                onFinishDelayBegin: null,
                onFinishDelayEnd: null,
                onFinish: null,
            }
        }
    },

    createAnimeCollection(animeDataList, level, collectionData){
        const animes = this.createAnimes(animeDataList, level)
        const collection = new Eli.AnimeCollection(animes, collectionData)

        return collection
    },

    createAnimes(animeDataList, level = 1){
        const AnimeClass = {
            0: Eli.AnimeLevel0,
            1: Eli.AnimeLevel1,
            2: Eli.AnimeLevel2,
            3: Eli.AnimeLevel3,
        }[level]

        const animes = []

        for(const data of animeDataList){
            animes.push(new AnimeClass(data))
        }

        return animes
    },

}

Eli.AnimeTest = {

    aliasMapUpdateCalled: false,

    aliasMapUpdate(){
        if(this.aliasMapUpdateCalled) return

        this.aliasMapUpdateCalled = true

        const Scene_Map_update = Scene_Map.prototype.update
        Scene_Map.prototype.update = function(){
            Scene_Map_update.call(this)
            if(window.animetest){
                window.animetest.update()
                if(window.animetest.isFinished()){

                }else{
                    console.log("==== FRAME =====")
                }
                
            }
        }
    },

    createAnimeLevel3Test(){
        this.aliasMapUpdate()
        const data = Eli.AnimeUtils.createLevel3Defaults()
        const target = {cola: 0}
        data.propName = "cola"
        data.startDelay = 0
        data.animationDelay = 0
        data.loopDelay = 0
        data.finishDelay = 0
        
        data.target = target
        data.targetValue = 30
        data.duration = 10
        data.loop = 1
        data.callbacks = {
            // onStart: (anime) => console.log("onStart"),
            // onStartDelayBegin: (anime) => console.log("onStartDelayBegin"),
            // onStartDelayEnd: (anime) => console.log("onStartDelayEnd"),
            onUpdateAnimation: (anime) => {
                console.log("onUpdateAnimation")
                console.log(anime.getCurrentPropValue())
                console.log(anime.currentDirection)
            },

            // onAnimationDelayBegin: (anime) => console.log("onAnimationDelayBegin"),
            // onAnimationDelayEnd: (anime) => console.log("onAnimationDelayEnd"),
            // onAnimationEnd: (anime) => console.log("onAnimationEnd"),
            // onLoopDelayBegin: (anime) => console.log("onLoopDelayBegin"),
            // onLoopDelayEnd: (anime) => console.log("onLoopDelayEnd"),
            // onLoop: (anime) => console.log("onLoop"),
            // onFinishDelayBegin: (anime) => console.log("onFinishDelayBegin"),
            // onFinishDelayEnd: (anime) => console.log("onFinishDelayEnd"),
            // onFinish: (anime) => console.log("onFinish"),
        }

        window.animetest = new Eli.AnimeLevel3(data)
        window.animetest.start()
    },

    createAnimeCollectionTest(){
        this.aliasMapUpdate()
        const target = {cola: 0}
        const animeData = Eli.AnimeUtils.createLevel3Defaults()
        animeData.propName = "cola"
        animeData.startDelay = 0
        animeData.animationDelay = 0
        animeData.loopDelay = 0
        animeData.finishDelay = 0
        
        animeData.target = target
        animeData.targetValue = 30
        animeData.duration = 10
        animeData.loop = 0

        const collectionData = Eli.AnimeUtils.createCollectionDefaults()
        collectionData.startDelay = 0
        collectionData.animationDelay = 0
        collectionData.loopDelay = 0
        collectionData.finishDelay = 0
        collectionData.loop = 1
        collectionData.callbacks = {
            // onStart: () => console.log("onStart"),
            // onStartDelayBegin: () => console.log("onStartDelayBegin"),
            // onStartDelayEnd: () => console.log("onStartDelayEnd"),
            onUpdateAnimation: (anime) => {
                // console.log("onUpdateAnimation", anime)
                console.log(anime.animes[0].getCurrentPropValue())
                console.log(anime.animes[0].currentDirection)
            },
            // onAnimationDelayBegin: () => console.log("onAnimationDelayBegin"),
            // onAnimationDelayEnd: () => console.log("onAnimationDelayEnd"),
            // onAnimationEnd: () => console.log("onAnimationEnd"),
            // onLoopDelayBegin: () => console.log("onLoopDelayBegin"),
            // onLoopDelayEnd: () => console.log("onLoopDelayEnd"),
            // onLoop: () => console.log("onLoop"),
            // onFinishDelayBegin: () => console.log("onFinishDelayBegin"),
            // onFinishDelayEnd: () => console.log("onFinishDelayEnd"),
            // onFinish: () => console.log("onFinish"),
        }
        const animes = [new Eli.AnimeLevel3(animeData)] 
        window.animetest = new Eli.AnimeCollection(animes, collectionData)
        window.animetest.start()
    },

}

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
Eli.String = {

    removeSpaces(str){
        return str.replaceAll(" ", "")
    },

}

Eli.Array = {

    shuffle(array){
        const shuffleArray = []
            
        while(array.length > 0){
            const randomIndex = Math.floor(Math.random() * array.length)
            const randomElement = array.splice(randomIndex, 1)

            shuffleArray.push(randomElement[0])
        }
        
        return shuffleArray
    },

    createProgressiveNumbers(min, max){
        return Array.from({length: max+1 - min}, (_, i) => i + min)
    },

    insertByIndex(array, index, element){
        array.splice(index, 0, element)
    },

    removeByIndex(array, index, deleteCount){
        array.splice(index, deleteCount)
    },

    remove(array, element){
        const index = array.indexOf(element)

        if(index > -1){
            array.splice(index, 1)
        }
    },

    isEqual(array1, array2){
        return array1.toString().toLowerCase() === array2.toString().toLowerCase()
    },

    /**
     * @deprecated Must be replaced with insertByIndex.
     */
    insertElement(array, index, element){
        array.splice(index, 0, element)
    },

    /**
     * 
     * @param {Array} array 
     * @param {number} index 
     * @param {number} deleteCount 
     * @deprecated Must be replaced with removeByIndex. Currently used by: Char Manager, PlatformEvent, Quit Menu.
     */
    removeElement(array, index, deleteCount){
        array.splice(index, deleteCount)
    },

}

Eli.Number = {

    isBetween(number, min, max){
        return number > min && number < max
    },

    isBetweenOrEqual(number, min, max){
        return number >= min && number <= max
    },
}

// Date Eli. Nice to meet me. ;)
Eli.Date = {

    milliSecondsToFrames(ms){
        return Math.floor( ms / 1000 * 60)
    },

    secondsToFrames(seconds){
        return Math.floor(seconds * 60)
    },

    minutesToFrames(minutes){
        return Math.floor(minutes * Math.pow(60, 2) )
    },

    hoursToFrames(hours){
        return Math.floor( hours * Math.pow(60, 3) )
    },

    framesToMilliSeconds(frames){
        return Math.floor( frames * 1000 / 60)
    },

    framesToSeconds(frames){
        return Math.floor(frames / 60)
    },

    framesToMinutes(frames){
        return Math.floor( frames / Math.pow(60, 2))
    },

    framesToHours(frames){
        return Math.floor( frames / Math.pow(60, 3) )
    },

    // will be removed when all plugins have changed to "miLLiseconds"...
    /**
     * 
     * @param {number} frames 
     * @returns {number}
     * @deprecated Must be replaced with framesToMilliSeconds. Self Switches and Switches
     */
    framesToMiliSeconds(frames){
        return Math.floor( frames * 1000 / 60)
    },
}

Eli.Utils = {

    regVariable1: /\x1b\x1b/g,
    regVariable2: /\x1bV\[(\d+)\]/gi,
    bump: new Bump(PIXI),
    spriteCharacters: {},

    getFolderAndFileName(string){
        const lastIndex = string.lastIndexOf("/") + 1
        const filename = string.substr(lastIndex)
        const folder = string.substring(0, lastIndex)

        return [folder, filename]
    },

    /**
     * 
     * @deprecated Must me used only on Find Id By Name
     */
    getIdByName(searchName, data){
        return searchName
    },

    calculatePosition(position, width, height, baseWidth, baseHeight){
        const x = this.calculateXPosition(position, width, baseWidth)
        const y = this.calculateYPosition(position, height, baseHeight)

        return {x, y}
    },

    calculateXPosition(position, width, baseWidth){
        const {alignX, offsetX} = position
        return {
            left: offsetX,
            center: (baseWidth-width) / 2 + offsetX,
            right: (baseWidth-width) + offsetX
        }[alignX]
    },

    calculateYPosition(position, height, baseHeight){
        const {alignY, offsetY} = position
        return {
            top: offsetY,
            center: (baseHeight-height) / 2 + offsetY,
            bottom: (baseHeight-height) + offsetY
        }[alignY]
    },

    centerPos(itemWidth, itemHeight, baseWidth, baseHeight){
        return {
            x:  this.centerXPos(itemWidth, baseWidth),
            y:  this.centerYPos(itemHeight, baseHeight),
        }
    },
    
    centerXPos(itemWidth, baseWidth = Graphics.width){
        return Math.abs(itemWidth - baseWidth) / 2
    },

    centerYPos(itemHeight, baseHeight = Graphics.height){
        return Math.abs(itemHeight - baseHeight) / 2
    },

    isMVAnimation(animation) {
        return !!animation.frames
    },

    convertEscapeVariablesOnly(text){
        text = text.replace(/\\/g, '\x1b')
        text = text.replace(this.regVariable1, '\\')
        text = text.replace(this.regVariable2, function() {
            return $gameVariables.value(Number(arguments[1]))
        }.bind(this))

        return text
    },

    processEscapeVarOrFormula(arg){
        if(typeof arg !== "string") return arg
        
        const rawArg = arguments[0]
        arg = this.convertEscapeVariablesOnly(rawArg)
        if(rawArg === arg){
            return this.needEval(arg)
        }else{
            return arg
        }
    },

    needEval(param) {
        if(isNaN(param)){

            try{
                return eval(param)
            }catch(err){
                return param
            }

        }else{
            return param
        }
    },

    getDataMap(mapId) {
        const xhr = new XMLHttpRequest()
        const fileName = "Map%1.json".format(mapId.padZero(3))
        const url = "data/" + fileName

        xhr.open("GET", url, false)
        xhr.send()

        return JSON.parse(xhr.responseText)
    },

    getTextWidth(rawText, winClass = Window_Base){
        const tempWin = new winClass(new Rectangle(0, 0, 500, 500))
        
        return tempWin.getTextWidth(rawText)
    },

    getSpriteCharacter(id){
        const character = this.getMapCharacter(id)
        return character.getMapSprite()
    },

    getMapCharacter(id){
        let character = null

        if(isNaN(id)){
            const stringId = id.toLowerCase().replaceAll(" ", "")

            if(stringId === "camera"){
                character = Eli.CameraManager.getGameCamera()
            }else if(["boat", "ship", "airship"].includes(stringId)){
                character = $gameMap.vehicles().find(item => item._type === stringId)
            }else{
                character = $gameMap.vehicles().find(item => item?.getSpriteId() === stringId)
            }

        }else{
            const numberId = Number(id)

            if(numberId === 0){
                character = Eli.PluginManager.currentInterpreter.character(0)

            }else if(numberId > 0){
                character = $gameMap.event(numberId)

            } else if(numberId === -1){
                character = $gamePlayer

            }else if(numberId < -1){
                const followers = $gamePlayer.followers()
                const index = Math.abs(numberId + 2)

                character = followers.follower(index)
            }
        }

        return character
    },

    /**
     * @deprecated Must be removed. Used only by choice manager.
     */
    windowMargin: 4,

    /**
     * 
     * @deprecated Must be removed. Used by Check Point.
     */
    scene(){
        return SceneManager._scene
    },

    /**
     * 
     * @deprecated Must be removed. Used on Face Window and Text Window
     */
    getFaceSize(){
        return {
            width: ImageManager.faceWidth,
            height: ImageManager.faceHeight
        }
    },

    /**
     * 
     * @returns {number>}
     * @deprecated Must be replaced with calculatePosition. Background Manager e Pause Game
     */
    calculateScreenPosition(align, offset, size, coordinate = "x", isOnWindowLayer = false){
        let screenSize = {
            x: Graphics.width,
            y: Graphics.height,
        }[coordinate]

        if(isOnWindowLayer){
            screenSize = {
                x: Graphics.boxWidth,
                y: Graphics.boxHeight,
            }[coordinate]
        }
        const mainSize = screenSize - size

        switch(align){
            case "center":  
                return (mainSize / 2) + offset
            case "right":
            case "bottom":  
                return (mainSize + offset)
            case "left":
            case "top":
                return 0 + offset
        }

        return offset
    },

}

Eli.Input = {

    keyboardCodes: {
        backspace:8, tab:9, enter:13, shift:16, ctrl:17, alt:18, pausebreak:19, capslock:20, 
        esc:27, space:32, pageup:33, pagedown:34, end:35, home:36, 
        leftarrow:37, uparrow:38, rightarrow:39, downarrow:40, insert:45, delete:46, 
        0:48, 1:49, 2:50, 3:51, 4:52, 5:53, 6:54, 7:55, 8:56, 9:57, 
        a:65, b:66, c:67, d:68, e:69, f:70, g:71, h:72, i:73, j:74, k:75, l:76, m:77, n:78, 
        o:79, p:80, q:81, r:82, s:83, t:84, u:85, v:86, w:87, x:88, y:89, z:90, 
        leftwindowkey:91, rightwindowkey:92, selectkey:93, 
        numpad0:96, numpad1:97, numpad2:98, numpad3:99, numpad4:100, numpad5:101, 
        numpad6:102, numpad7:103, numpad8:104, numpad9:105, 
        multiply:106, add:107, subtract:109, decimalpoint:110, divide:111, 
        f1:112, f2:113, f3:114, f4:115, f5:116, f6:117, f7:118, f8:119, f9:120, f10:121, f11:122, f12:123,
        numlock:144, scrolllock:145, semicolon:186, equalsign:187, comma:188, dash:189, period:190,
        forwardslash:191, graveaccent:192, openbracket:219, backslash:220, closebracket:221, singlequote:222
    },

    gamepadCodes: {
        a: 0, b: 1, x: 2, y: 3, lb: 4, rb: 5, lt: 6, rt: 7, select: 8,
        start: 9, l3: 10, r3: 11, up: 12, down: 13, left: 14, right: 15
    },

    mouseCodes: {
        left: 0,
        middle: 1,
        right: 2,
        back: 3,
        forward: 5,
    },

    defaultKeyboardCodes: [
        9, 13, 16, 17, 18, 27, 32, 33, 34, 37, 38, 39, 
        40, 45, 81, 87, 88, 90, 96, 98, 100, 102, 104, 120
    ],

    defaultGamepadCodes: [0, 1, 2, 3, 4, 5, 12, 13, 14, 15],

    getKeyboardCode(keyName){
        return this.keyboardCodes[keyName.toLowerCase()]
    },

    getGamepadCode(keyName){
        return this.gamepadCodes[keyName.toLowerCase()]
    },

    getMouseCode(keyName){
        return this.mouseCodes[keyName.toLowerCase()]
    },

    isDefaultKeyboard(keyCode){
        return this.defaultKeyboardCodes.includes(keyCode)
    },

    isDefaultGamepad(keyCode){
        return this.defaultGamepadCodes.includes(keyCode)
    },

    mapKeyboardButton(keyName, overwrite, button){
        const keyCode = this.getKeyboardCode(keyName)

        if(overwrite || !this.isDefaultKeyboard(keyCode)){
            Input.keyMapper[keyCode] = button

        }else{
            button = Input.keyMapper[keyCode]
        }
    },

    mapGamepadButton(keyName, overwrite, button){
        const keyCode = this.getGamepadCode(keyName)

        if(overwrite || !this.isDefaultGamepad(keyCode)){
            Input.gamepadMapper[keyCode] = button

        }else{
            button = Input.gamepadMapper[keyCode]
        }
    }
}

Eli.PluginManager = {

    currentEventId: 0,
    currentCommonEventId: 0,
    currentInterpreter: null,

    getCurrentInterpreter(){
        return this.currentInterpreter
    },

    getCurrentEventId(){
        return this.currentEventId
    },

    getCurrentCommonEventId(){
        return this.currentCommonEventId
    },

    registerCommands(plugin, commands, name){
        const pluginName = name || this.getPluginName()

        for(const command of commands){
            const callback = command
            PluginManager.registerCommand(pluginName, command, plugin[callback].bind(plugin))
        }
    },

    createIdList(idString){
        const ids = Eli.String.removeSpaces(this.parseVariables(idString)).split(",")
        const list = []

        for(const id of ids){
            if(id.includes("--")){
                const [min, max] = id.split("--").map(item => Number(item))
                const rangeOfIds = Eli.Array.createProgressiveNumbers(min, max)

                list.push(...rangeOfIds)

            }else if(isNaN(id)){
                list.push(id)

            }else{
                list.push(Number(id))
            }
        }

        return list
    },

    parseVariables(str){
        return Eli.Utils.convertEscapeVariablesOnly(str)
    },

    parseFullColor(color){
        if(isNaN(color)){

            if(ColorManager[color]){
                return ColorManager[color]()
            }else{
                return Eli.ColorManager.getHexOrName(color)
            }

        }else{
            return ColorManager.textColor(color)
        }
    },

    parseBackgroundType(type){
        return {
            "Window":                   0,
            "Dim":                      1,
            "Transparent":              2,
            "Strong":                   3,
            "Light Gradient Vertical":  4,
            "Faded Horizontal":         5,
            "Message Window":           "Message Window"
        }[type]
    },

    parseOpenness(widthAlign, heightAlign, easing, duration, inheritEasing){
        return {
            widthAlign: widthAlign,
            heightAlign: heightAlign,
            easing: easing === "inherit" ? inheritEasing : easing,
            duration: Number(duration)
        }
    },

    parseFixedPosition(alignX, alignY, offsetX, offsetY){
        return {
            alignX: alignX,
            alignY: alignY,
            offsetX: new Function(offsetX),
            offsetY: new Function(offsetY),
        }
    },

    parseOperationAndValue(argValue){
		const raw = this.parseVariables(argValue).trim()
		const signal = raw[0]
		let operation = "Set"
		let value = 0

		if(isNaN(signal)){
			operation = {
                "=": "Set",
				"+": "Add",
				"-": "Sub",
				"x": "Mul",
				"/": "Div",
				"%": "Mod",
			}[signal]
			value = Number(raw.replace(signal, ""))
		}else{
			value = Number(raw)
		}

        if(!operation){
			throw new Error(`EliMZ_EncounterStepControl: Invalid operation signal "${signal}" in value "${argValue}". Use +, -, = or no signal.`)
		}

		return [operation, Math.abs(value)]
	},

    operateValue(currentValue, newValue, operationType = "Set"){
        switch(operationType){
            case "Set": return newValue
            case "Add": return currentValue + newValue
            case "Sub": return currentValue - newValue
            case "Mul": return currentValue * newValue
            case "Div": return currentValue / newValue
            case "Mod": return currentValue % newValue
        }
	},

    /**
     * 
     * @param {string} str 
     * @returns {Array<string|number>}
     * @deprecated Must be replaced with createId list [Horror Filter, Switches]
     */
    createRangeOfNumbers(str){
        const ids = Eli.String.removeSpaces(this.parseVariables(str)).split(",")
        const rangeIds = []

        for(let i = 0; i < ids.length; i++){
            const id = ids[i]

            if(id.includes("--")){
                const [min, max] = id.split("--").map(item => Number(item))
                const rangeOfIds = Eli.Array.createProgressiveNumbers(min, max)
                rangeIds.push(...rangeOfIds)

            }else if(isNaN(id)){
                rangeIds.push(id)

            }else{
                rangeIds.push(Number(id))
            }
        }

        return rangeIds
    },

    /**
     * Need to remove that and put plugin name mannualy.
     * @deprecated
     */
    getPluginName(){
        const srcScript = document.currentScript.src
        const start = srcScript.lastIndexOf("/") + 1
        const end = srcScript.lastIndexOf(".js")
        const pluginName = srcScript.substring(start, end)

        return pluginName
    },
}

Eli.ColorManager = {

    names: [
        "ALICEBLUE", "ANTIQUEWHITE", "AQUA", "AQUAMARINE", "AZURE", "BEIGE", "BISQUE", "BLACK", "BLANCHEDALMOND", "BLUE", "BLUEVIOLET", "BROWN", 
        "BURLYWOOD", "CADETBLUE", "CHARTREUSE", "CHOCOLATE", "CORAL", "CORNFLOWERBLUE", "CORNSILK", "CRIMSON", "CYAN", "DARKBLUE", "DARKCYAN", 
        "DARKGOLDENROD", "DARKGRAY", "DARKGREY", "DARKGREEN", "DARKKHAKI", "DARKMAGENTA", "DARKOLIVEGREEN", "DARKORANGE", "DARKORCHID", "DARKRED", 
        "DARKSALMON", "DARKSEAGREEN", "DARKSLATEBLUE", "DARKSLATEGRAY", "DARKSLATEGREY", "DARKTURQUOISE", "DARKVIOLET", "DEEPPINK", "DEEPSKYBLUE", 
        "DIMGRAY", "DIMGREY", "DODGERBLUE", "FIREBRICK", "FLORALWHITE", "FORESTGREEN", "FUCHSIA", "GAINSBORO", "GHOSTWHITE", "GOLD", "GOLDENROD", 
        "GRAY", "GREY", "GREEN", "GREENYELLOW", "HONEYDEW", "HOTPINK", "INDIANRED", "INDIGO", "IVORY", "KHAKI", "LAVENDER", "LAVENDERBLUSH", 
        "LAWNGREEN", "LEMONCHIFFON", "LIGHTBLUE", "LIGHTCORAL", "LIGHTCYAN", "LIGHTGOLDENRODYELLOW", "LIGHTGRAY", "LIGHTGREY", "LIGHTGREEN", 
        "LIGHTPINK", "LIGHTSALMON", "LIGHTSEAGREEN", "LIGHTSKYBLUE", "LIGHTSLATEGRAY", "LIGHTSLATEGREY", "LIGHTSTEELBLUE", "LIGHTYELLOW", 
        "LIME", "LIMEGREEN", "LINEN", "MAGENTA", "MAROON", "MEDIUMAQUAMARINE", "MEDIUMBLUE", "MEDIUMORCHID", "MEDIUMPURPLE", "MEDIUMSEAGREEN", 
        "MEDIUMSLATEBLUE", "MEDIUMSPRINGGREEN", "MEDIUMTURQUOISE", "MEDIUMVIOLETRED", "MIDNIGHTBLUE", "MINTCREAM", "MISTYROSE", "MOCCASIN", 
        "NAVAJOWHITE", "NAVY", "OLDLACE", "OLIVE", "OLIVEDRAB", "ORANGE", "ORANGERED", "ORCHID", "PALEGOLDENROD", "PALEGREEN", "PALETURQUOISE", 
        "PALEVIOLETRED", "PAPAYAWHIP", "PEACHPUFF", "PERU", "PINK", "PLUM", "POWDERBLUE", "PURPLE", "REBECCAPURPLE", "RED", "ROSYBROWN", "ROYALBLUE", 
        "SADDLEBROWN", "SALMON", "SANDYBROWN", "SEAGREEN", "SEASHELL", "SIENNA", "SILVER", "SKYBLUE", "SLATEBLUE", "SLATEGRAY", "SLATEGREY", "SNOW", 
        "SPRINGGREEN", "STEELBLUE", "TAN", "TEAL", "THISTLE", "TOMATO", "TURQUOISE", "VIOLET", "WHEAT", "WHITE", "WHITESMOKE", "YELLOW", "YELLOWGREEN",
    ],

    cache: {
        nameToRgb: Object.create(null),
        hexToRgb: Object.create(null),
        rgbToHex: Object.create(null),
        formatRgbToArray: Object.create(null),
        getRgb: Object.create(null),
    },

    clearCache(){
        this.cache.nameToRgb = Object.create(null)
        this.cache.hexToRgb = Object.create(null)
        this.cache.rgbToHex = Object.create(null)
        this.cache.formatRgbToArray = Object.create(null)
        this.cache.getRgb = Object.create(null)
    },

    /**
     * If receive a rgb, it will convert to hex. otherwise, will return hex and name colors as usual.
     * @param {string} color - A string that represents a color. 
     * @returns {string}
     */
    getHexOrName(color){
        if(this.isRgb(color)){
            color = this.rgbToHex(color)
        }

        return color
    },

    isRgb(color){
        return color && color instanceof Array || color.includes(",")
    },

    rgbToHex(color, alphaGray = 255){
        const raw = typeof color === "string" ? color.trim() : color
        const key = `${raw instanceof Array ? raw.join(",") : raw}|${alphaGray}`

        const cached = this.cache.rgbToHex[key]

        if(cached){
            return cached
        }else{
            let parts = raw

            if(typeof parts === "string"){
                parts = parts.split(",")
            }

            let [r, g, b, a] = parts.map(item => Number(item))
            a = a ?? alphaGray

            r = r.toString(16)
            g = g.toString(16)
            b = b.toString(16)
            a = a.toString(16)
            
            if (r.length === 1) r = "0" + r
            if (g.length === 1) g = "0" + g
            if (b.length === 1) b = "0" + b
            if (a.length === 1) a = "0" + a

            const hex = "#" + r + g + b + a
            this.cache.rgbToHex[key] = hex

            return hex
        }
    },

    getRgb(color, alphaGray = 255){
        const key = this.getRgbCacheKey(color, alphaGray)
        const cached = this.cache.getRgb[key]

        if(cached){
            return cached

        }else{

            let result = null

            if(this.isHtmlColor(color)){
                result = this.nameToRgb(color, alphaGray)

            }else if(this.isHexColor(color)){
                result = this.hexToRgb(color, alphaGray)

            } else if(this.isRgb(color)){
                result = this.formatRgbToArray(color, alphaGray)

            }else {
                result = [0, 0, 0, alphaGray]
            }

            this.cache.getRgb[key] = result

            return result
        }
    },

    getRgbCacheKey(color, alphaOrGray){
        const raw = typeof color === "string" ? color.trim() : color

        if(raw instanceof Array){
            return `a|${raw.join(",")}|${alphaOrGray}`

        }else{
            const str = String(raw).trim().toLowerCase()

            if(this.isHexColor(str)) {
                return `h|${str}|${alphaOrGray}`

            }else if(this.isRgb(str)) {
                return `r|${str.replaceAll(" ", "")}|${alphaOrGray}`

            }else{
                return `n|${str}|${alphaOrGray}`
            }
        }
    },

    isHtmlColor(color){
        return color && color[0] !== "#" && isNaN(color[0])
    },

    // Thanks! - https://css-tricks.com/converting-color-spaces-in-javascript/
    nameToRgb(name, alphaOrGray = 255) {
        const keyName = String(name).trim().toLowerCase()
        const key = `${keyName}|${alphaOrGray}`

        const cached = this.cache.nameToRgb[key]

        if(cached){
            return cached

        }else{

            const fakeDiv = document.createElement("div")
            fakeDiv.style.color = keyName
            document.body.appendChild(fakeDiv)

            const cs = window.getComputedStyle(fakeDiv)
            const rgbString = cs.getPropertyValue("color")

            document.body.removeChild(fakeDiv)
            const start = rgbString.indexOf("(") + 1
            const end = rgbString.indexOf(")")
            const rawString = rgbString.substring(start, end)
            const rgbArray = rawString.split(",").map(item => Number(item))

            rgbArray.push(alphaOrGray)
            this.cache.nameToRgb[key] = rgbArray

            return rgbArray
        }
    },

    isHexColor(color){
        return color && color[0] === '#'
    },

    hexToRgb(hex, alphaOrGray = 255) {
        if(hex.length === 7){
            hex += alphaOrGray === 255 ? "ff" : "00"
        }

        const rawHex = String(hex).trim().toLowerCase()
        const key = `${rawHex}|${alphaOrGray}`
        const cached = this.cache.hexToRgb[key]

        if(cached){
            return cached
        }else{

            const r = this.getHexValue(rawHex, 1, 3)
            const g = this.getHexValue(rawHex, 3, 5)
            const b = this.getHexValue(rawHex, 5, 7)
            const a = this.getHexValue(rawHex, 7, 9)
            const color = [r, g, b, a]

            this.cache.hexToRgb[key] = color

            return color
        }
    },

    getHexValue(hex, start, end){
        return parseInt(hex.slice(start, end), 16)
    },

    getRgbForBlend(color){
        // If ommited, the Alpha value will be 255
        return this.getRgb(color, 255)
    },

    getRgbForTone(color){
        // If ommited, the Gray value will be 0
        return this.getRgb(color, 0)
    },

    formatRgbToArray(color, alphaGray = 255){
        const raw = typeof color === "string" ? color.trim() : color
        const key = `${raw instanceof Array ? raw.join(",") : raw}|${alphaGray}`
        const cached = this.cache.formatRgbToArray[key]

        if(cached){
            return cached

        }else{
            let rawColor = raw

            if(typeof rawColor === "string"){
                rawColor = rawColor.split(",")
            }

            if(rawColor.length === 3) rawColor.push(alphaGray)

            const rgbArray = rawColor.map(item => Number(item))

            this.cache.formatRgbToArray[key] = rgbArray

            return rgbArray
        }

    },

}

Eli.VersionManager = {

	versionFileUrl: "https://raw.githubusercontent.com/EliaquimNascimento/hakuenstudio/refs/heads/main/EliMZ_PluginVersions.json",
	registry: {},
    	ui: {
		mainId: "versionManager_",
		slideDurationMs: 260,
		slideEasing: "cubic-bezier(0.22, 0.61, 0.36, 1)",
		theme: {
			colorOverlayBackdrop: "rgba(0,0,0,0)",
			colorUpdateWindowBackdrop: "rgba(0,0,0,0)",
			colorPanelBackground: "#1e1e2c",
			colorUpdatePanelBackground: "#1e1e2c",
			colorCardBackground: "rgba(255,255,255,0.04)",
			colorBodyBackground: "rgba(255,255,255,0.04)",

			colorPanelBorder: "rgba(255,255,255,0.15)",
			colorCardBorder: "rgba(255,255,255,0.12)",
			colorBodyBorder: "rgba(255,255,255,0.12)",
			colorButtonBorder: "rgba(255,255,255,0.2)",
			colorSeparator: "#FFFFFF",

			colorText: "#FFFFFF",
			colorTextMuted: "#ABCBCE",
			colorTitle: "#FFED00",
			colorDanger: "#ff0015",
			colorSuccess: "#9bffb1",

			colorButtonBackground: "rgba(255,255,255,0.08)",

			fontFamily: "monospace",
			fontSizeTiny: "11px",
			fontSizeSmall: "12px",
			fontSizeMedium: "13px",
			fontSizeLarge: "14px",

			radiusSmall: "8px",
			radiusMedium: "10px",

			paddingPanel: "12px",
			paddingCard: "10px",
			paddingButton: "4px 8px",
			paddingButtonLarge: "8px 18px",

			gapTiny: "6px",
			gapSmall: "8px",
			gapMedium: "12px",

			shadowPanel: "0 10px 30px rgba(0,0,0,0.5)",

			transitionFast: "140ms ease",
			hoverScale: "1.15",
			disabledOpacity: "0.55"
		},
	},
	documentKeydownHandler: null,
    blockBoot: false,
	checkStarted: false,

	isBlockingBoot(){
		return this.blockBoot
	},

    setBlockBoot(value){
        this.blockBoot = value
    },

    startCheckingPluginVersions(){
        if(!this.isCheckStarted()){
            this.onCheckPluginVersions()
        }
    },

    isCheckStarted(){
        return this.checkStarted
    },

    setCheckStarted(value){
        this.checkStarted = value
    },

    getTheme(){
		return this.ui.theme
	},

	isUpdateWindowOpen(){
		return !!document.getElementById(this.getUpdateWindowId())
	},

	isEscapeKey(event){
		return event.key === "Escape" || event.keyCode === 27
	},

	onDocumentKeyDown(event){
		if(this.isEscapeKey(event) && this.isUpdateWindowOpen()){
			event.preventDefault()
			event.stopPropagation()
			this.closeUpdateWindow()
		}
	},

	addDocumentEvents(){
		if(!this.documentKeydownHandler){
			this.documentKeydownHandler = this.onDocumentKeyDown.bind(this)
		}

		document.addEventListener("keydown", this.documentKeydownHandler, true)
	},

	removeDocumentEvents(){
		if(this.documentKeydownHandler){
			document.removeEventListener("keydown", this.documentKeydownHandler, true)
		}
	},

	setButtonBaseStyle(element, enabled, options = {}){
		const theme = this.getTheme()
		const large = !!options.large
		const bold = !!options.bold
		const marginLeft = options.marginLeft ?? "0"

		element.style.cursor = enabled ? "pointer" : "default"
		element.style.borderRadius = theme.radiusSmall
		element.style.border = `1px solid ${theme.colorButtonBorder}`
		element.style.background = theme.colorButtonBackground
		element.style.color = theme.colorText
		element.style.padding = large ? theme.paddingButtonLarge : theme.paddingButton
		element.style.fontSize = theme.fontSizeSmall
		element.style.marginLeft = marginLeft
		element.style.fontWeight = bold ? "bold" : "normal"
		element.style.opacity = enabled ? "1" : theme.disabledOpacity

        element.style.outline = "none"
        element.style.boxShadow = "none"
        element.style.appearance = "none"
        element.style.webkitAppearance = "none"
        element.style.webkitTapHighlightColor = "transparent"

        this.bindSoftHover(element, enabled)
	},

    bindSoftHover(element, enabled){
        const theme = this.getTheme()

        element.style.transition = `transform ${theme.transitionFast}`
        element.style.transform = "scale(1)"

        if(enabled){
            element.addEventListener("mouseenter", () => {
                element.style.transform = `scale(${theme.hoverScale})`
            })

            element.addEventListener("mouseleave", () => {
                element.style.transform = "scale(1)"
            })
        }
    },

    onCheckPluginVersions(){
        this.setCheckStarted(true)
        const versionList = this.requestVersionFile()

        if(versionList){
            this.checkAndWarn(versionList)
        }else{
            console.log("Eli Version Manager: version json file not available")
        } 
    },

    requestVersionFile(){
        try {
            const xhr = new XMLHttpRequest()
            xhr.open("GET", this.versionFileUrl, false)
            xhr.send()

            if(xhr.status >= 200 && xhr.status < 300){
                const data = JSON.parse(xhr.responseText || "{}")
                return data
            }else{
                return null
            }
        } catch (error) {
            this.setCheckStarted(false)
        }
	},

	checkAndWarn(versionList){
        const outdatedList = this.getOutdatedPlugins(versionList)

		if(outdatedList.length > 0){
            this.setBlockBoot(true)
            this.showOverlay(outdatedList)
		}
	},

    getOutdatedPlugins(versionList){
		const outdated = []

		for(const plugin of $plugins){
            const indexOfDir = plugin.name.lastIndexOf("/")
            let pluginName = plugin.name

            if(indexOfDir > -1){
                pluginName = plugin.name.slice(indexOfDir+1)
            }

			if(!plugin.status || !pluginName.startsWith("EliMZ_")) continue

			const data = this.getPluginDataFromVersionList(versionList, pluginName)

            if(!data) continue

            const latestVersion = data.version
			const currentVersion = this.getCurrentVersion(pluginName)

			if(!currentVersion) continue
            const versionDif = this.compareVersions(currentVersion, latestVersion)

			if(versionDif < 0){
				outdated.push({
					name: pluginName,
					current: currentVersion.join("."),
					latest: latestVersion.join("."),
                    url: data.url,
                    log: data.log,
				})
			}
		}

        return outdated
    },

	getPluginDataFromVersionList(versionList, pluginName){
		const info = versionList[pluginName]

		if(info){
			return {
				version: this.parseVersionToArray(info.version),
				url: info.url,
				log: info.log || ""
			}
		}else{
			return null
		}
	},

	parseVersionToArray(versionString){
        if(versionString){
            const [a,b,c] = versionString.split(".")

            return [Number(a), Number(b), Number(c)]
        }else{
            return null
        }
	},

	getCurrentVersion(pluginName){
		const reg = this.registry[pluginName]

		if(reg){
            return reg
            
        }else{
            const text = this.getVersionFromDescription(pluginName)
            return this.parseVersionToArray(text)
        }
	},

    getVersionFromDescription(pluginName){
        const plugin = $plugins.find(p => p.name === pluginName)

        if(plugin){
            const desc = plugin.description
            const start = desc.indexOf("♦") + 1
            const end = desc.lastIndexOf("♦")

            if(start <= 0 || end <= 0 || end <= start){
                return "0.0.0"
            }else{
                return desc.substring(start, end).trim()
            }

        }else{
            return "0.0.0"
        }
    },

	compareVersions(currentVersion, latestVersion){
		for(let i = 0; i < 3; i++){
			const diff = currentVersion[i] - latestVersion[i]

			if(diff !== 0) {
                return diff
            }
		}

		return 0
	},

	showOverlay(outdatedList){
		this.removeMainOverlay()

		const mainOverlay = this.createMainOverlay()
		const panel = this.createOverlayPanel()

		panel.appendChild(this.createOverlayHeader(outdatedList.length))
		panel.appendChild(this.createOverlayList(outdatedList))
		panel.appendChild(this.createOverlayFooter())

		mainOverlay.appendChild(panel)
		document.body.appendChild(mainOverlay)

		this.addDocumentEvents()

		requestAnimationFrame(() => {
			panel.style.transform = "translateX(0)"
			panel.style.opacity = "1"
		})
	},

	removeMainOverlay(){
		const old = document.getElementById(this.ui.mainId)

		this.removeDocumentEvents()

		if(old){
			old.remove()
		}
	},

    createMainOverlay(){
        const overlay = document.createElement("div")
        overlay.id = this.ui.mainId
        this.setMainOverlayStyle(overlay)

        return overlay
    },

	setMainOverlayStyle(element){
		const theme = this.getTheme()

		element.style.position = "fixed"
		element.style.left = "0"
		element.style.top = "0"
		element.style.width = "100%"
		element.style.height = "100%"
		element.style.zIndex = "999999"
		element.style.pointerEvents = "auto"
		element.style.background = theme.colorOverlayBackdrop
	},

    createOverlayPanel(){
        const panel = document.createElement("div")
        this.setPanelStyle(panel)

        panel.addEventListener("wheel", (e) => e.stopPropagation(), {capture: true, passive: true})

        return panel
    },

	setPanelStyle(element){
		const theme = this.getTheme()

		element.style.pointerEvents = "auto"
		element.style.position = "absolute"
		element.style.right = "12px"
		element.style.top = "12px"
		element.style.bottom = "12px"
		element.style.width = "520px"
		element.style.maxWidth = "calc(100% - 24px)"
		element.style.maxHeight = "calc(100% - 24px)"
		element.style.overflow = "auto"

		element.style.background = theme.colorPanelBackground
		element.style.border = `1px solid ${theme.colorPanelBorder}`
		element.style.borderRadius = theme.radiusMedium
		element.style.boxShadow = theme.shadowPanel
		element.style.padding = theme.paddingPanel
		element.style.fontFamily = theme.fontFamily
		element.style.color = theme.colorText

		element.style.transform = "translateX(120%)"
		element.style.opacity = "0"
		element.style.transition = `transform ${this.ui.slideDurationMs}ms ${this.ui.slideEasing}, opacity ${this.ui.slideDurationMs}ms ${this.ui.slideEasing}`
		element.style.willChange = "transform, opacity"
	},

	createOverlayHeader(count){
		const mainHeader = this.createMainHeader()
		const headerTitle = this.createTitleHeader(count)
		const closeButton = this.createCloseButton()

        const onClose = (e) => {
            e.preventDefault()
            e.stopPropagation()
            this.closeOverlay()
        }

        closeButton.addEventListener("pointerdown", onClose, true)
        closeButton.addEventListener("mousedown", onClose, true)
        closeButton.addEventListener("touchstart", onClose, {capture: true, passive: false})

		mainHeader.appendChild(headerTitle)
		mainHeader.appendChild(closeButton)

		return mainHeader
	},

    createMainHeader(){
        const header = document.createElement("div")
        this.setMainHeaderStyle(header)

        return header
    },

    setMainHeaderStyle(element){
		element.style.display = "flex"
		element.style.alignItems = "center"
		element.style.justifyContent = "space-between"
		element.style.gap = "12px"
    },

    createTitleHeader(count){
        const title = document.createElement("div")
        title.textContent = `Eli Version Manager: ${count} outdated plugin(s)`
        this.setTitleHeaderStyle(title)

        return title
    },

	setTitleHeaderStyle(element){
		const theme = this.getTheme()

		element.style.fontWeight = "bold"
		element.style.fontSize = theme.fontSizeLarge
		element.style.color = theme.colorTitle
	},

    createCloseButton(){
		const closeButton = document.createElement("button")
        closeButton.textContent = "X"
        this.setCloseButtonStyle(closeButton)

        return closeButton
    },

	setCloseButtonStyle(element){
		this.setButtonBaseStyle(element, true, {
			large: false,
			bold: false,
			marginLeft: "0"
		})
	},

    closeOverlay(){
        const mainOverlay = document.getElementById(this.ui.mainId)
        const panel = mainOverlay.firstElementChild

        panel.style.transform = "translateX(120%)"
        panel.style.opacity = "0"

        const onEnd = () => {
            panel.removeEventListener("transitionend", onEnd)
            this.removeMainOverlay()
            this.setBlockBoot(false)
        }

        panel.addEventListener("transitionend", onEnd)
    },

	createOverlayList(outdated){
		const list = document.createElement("div")
        this.setOverlayListStyle(list)

		for(const item of outdated){
			list.appendChild(this.createOverlayItem(item))
		}

		return list
	},

	setOverlayListStyle(element){
		const theme = this.getTheme()

		element.style.marginTop = "10px"
		element.style.display = "flex"
		element.style.flexDirection = "column"
		element.style.gap = theme.gapMedium
	},

	createOverlayItem(item){
		const wrap = this.createItemWrap()
		const line = this.createItemLine()
		const name = this.createItemName(item)
		const currentVersionLabel = this.createItemVersionCurrentLabel()
		const currentVersionValue = this.createItemVersionCurrentValue(item)
		const latestVersionLabel = this.createItemVersionLatestLabel()
		const latestVersionValue = this.createItemVersionLatestValue(item)

		line.appendChild(name)
		line.appendChild(this.createItemSeparator())
		line.appendChild(currentVersionLabel)
		line.appendChild(currentVersionValue)
		line.appendChild(this.createItemSeparator())
		line.appendChild(latestVersionLabel)
		line.appendChild(latestVersionValue)

		const btn = this.createItemUpdateButton(item)

		btn.addEventListener("click", () => {
			this.onItemUpdateButton(item, btn)
		})

		line.appendChild(btn)
		wrap.appendChild(line)

		return wrap
	},

    createItemWrap(){
        const wrap = document.createElement("div")
        this.setItemWrapStyle(wrap)

        return wrap
    },

	setItemWrapStyle(element){
		const theme = this.getTheme()

		element.style.border = `1px solid ${theme.colorCardBorder}`
		element.style.borderRadius = theme.radiusMedium
		element.style.padding = theme.paddingCard
		element.style.background = theme.colorCardBackground
	},

    createItemLine(){
        const line = document.createElement("div")
        this.setItemLineStyle(line)

        return line
    },

	setItemLineStyle(element){
		const theme = this.getTheme()

		element.style.display = "flex"
		element.style.alignItems = "center"
		element.style.flexWrap = "wrap"
		element.style.gap = theme.gapTiny
		element.style.fontSize = theme.fontSizeSmall
		element.style.marginBottom = "0"
	},

    createItemName(item){
        const name = document.createElement("span")
        name.textContent = item.name
        this.setItemNameStyle(name)

        return name
    },

	setItemNameStyle(element){
		const theme = this.getTheme()

		element.style.fontWeight = "bold"
		element.style.fontSize = theme.fontSizeMedium
		element.style.color = theme.colorText
	},

	createItemSeparator(){
		const separator = document.createElement("span")
		separator.textContent = "|"
		this.setItemSeparatorStyle(separator)

		return separator
	},

    setItemSeparatorStyle(element){
		const theme = this.getTheme()

		element.style.color = theme.colorSeparator
		element.style.flex = "0 0 auto"
	},

    createItemVersionCurrentLabel(){
        const currentLabel = document.createElement("span")
        currentLabel.textContent = "Current: "

        return currentLabel
    },

    createItemVersionCurrentValue(item){
        const currentValue = document.createElement("span")
        currentValue.textContent = item.current
        this.setCurrentValueStyle(currentValue)

        return currentValue
    },

	setCurrentValueStyle(element){
		const theme = this.getTheme()

		element.style.fontWeight = "bold"
		element.style.color = theme.colorDanger
	},

    createItemVersionLatestLabel(){
        const latestLabel = document.createElement("span")
        latestLabel.textContent = "Latest: "

        return latestLabel
    },

    createItemVersionLatestValue(item){
        const latestValue = document.createElement("span")
        latestValue.textContent = item.latest
        this.setLatestValueStyle(latestValue)

        return latestValue
    },

	setLatestValueStyle(element){
		const theme = this.getTheme()

		element.style.fontWeight = "bold"
		element.style.color = theme.colorSuccess
	},

	createItemUpdateButton(item){
		const btn = document.createElement("button")
		btn.textContent = "Update"
		btn.disabled = !item.url
		this.setUpdateButtonStyle(btn, item.url)

		return btn
	},

	setUpdateButtonStyle(element, enabled){
		this.setButtonBaseStyle(element, enabled, {
			large: false,
			bold: false,
			marginLeft: "auto"
		})
	},

    onItemUpdateButton(item, button){
		if(this.hasLog(item)){
			this.openUpdateWindow(item, button)
		}else{
			this.openItemUrl(item)
		}
	},

    hasLog(item){
		return !!item.log
	},

    openItemUrl(item){
		if(Utils.isNwjs() && item?.url){
			nw.Shell.openExternal(item.url)
		}
	},

	getUpdateWindowId(){
		return this.ui.mainId + "UpdateWindow"
	},

	openUpdateWindow(item, button){
		const mainOverlay = document.getElementById(this.ui.mainId)

		if(mainOverlay){
			this.closeUpdateWindow()

			const updateWindow = this.createUpdateWindow(item)
			mainOverlay.appendChild(updateWindow)
		}
	},

	closeUpdateWindow(){
		const oldUpdateWindow = document.getElementById(this.getUpdateWindowId())

		if(oldUpdateWindow){
			oldUpdateWindow.remove()
		}
	},

	createUpdateWindow(item){
		const updateContainer = this.createUpdateContainer()
		const panel = this.createUpdatePanel()

		panel.appendChild(this.createUpdateHeader(item))
		panel.appendChild(this.createUpdateBody(item))
		panel.appendChild(this.createUpdateFooter(item))

		updateContainer.appendChild(panel)

		return updateContainer
	},

    createUpdateContainer(){
        const element = document.createElement("div")
        element.id = this.getUpdateWindowId()
		this.setUpdateContainerStyle(element)

        return element
    },

	setUpdateContainerStyle(element){
		const theme = this.getTheme()

		element.style.position = "absolute"
		element.style.left = "0"
		element.style.top = "0"
		element.style.width = "100%"
		element.style.height = "100%"
		element.style.padding = theme.paddingPanel
		element.style.boxSizing = "border-box"
		element.style.display = "flex"
		element.style.alignItems = "center"
		element.style.justifyContent = "center"
		element.style.background = theme.colorUpdateWindowBackdrop
		element.style.pointerEvents = "auto"
	},

    createUpdatePanel(){
        const element = document.createElement("div")
		this.setUpdatePanelStyle(element)

        return element
    },

	setUpdatePanelStyle(element){
		const theme = this.getTheme()

		element.style.width = "720px"
		element.style.maxWidth = "100%"
		element.style.maxHeight = "100%"
		element.style.display = "flex"
		element.style.flexDirection = "column"
		element.style.overflow = "hidden"

		element.style.background = theme.colorUpdatePanelBackground
		element.style.border = `4px solid ${theme.colorPanelBorder}`
		element.style.borderRadius = theme.radiusMedium
		element.style.boxShadow = theme.shadowPanel
		element.style.padding = theme.paddingPanel
		element.style.fontFamily = theme.fontFamily
		element.style.color = theme.colorText
	},

	createUpdateHeader(item){
		const mainHeader = this.createUpdateMainHeader()
		const textContainer = this.createUpdateHeaderTextContainer()
		const pluginName = this.createItemName(item)
		const pluginVersionLabel = this.createItemVersionLatestLabel(item)
		const pluginVersionValue = this.createItemVersionLatestValue(item)
		const logLabel = this.createUpdateLogLabel(item)
		const closeButton = this.createCloseButton()

		const onClose = (event) => {
			event.preventDefault()
			event.stopPropagation()
			this.closeUpdateWindow()
		}

		closeButton.addEventListener("pointerdown", onClose, true)
		closeButton.addEventListener("mousedown", onClose, true)
		closeButton.addEventListener("touchstart", onClose, {capture: true, passive: false})

        textContainer.appendChild(logLabel)
        textContainer.appendChild(this.createItemSeparator())
		textContainer.appendChild(pluginName)
		textContainer.appendChild(this.createItemSeparator())
		textContainer.appendChild(pluginVersionLabel)
		textContainer.appendChild(pluginVersionValue)

		mainHeader.appendChild(textContainer)
		mainHeader.appendChild(closeButton)

		return mainHeader
	},

    createUpdateMainHeader(){
        const header = document.createElement("div")
        this.setUpdateMainHeaderStyle(header)

        return header
    },

	setUpdateMainHeaderStyle(element){
		element.style.display = "flex"
		element.style.alignItems = "center"
		element.style.justifyContent = "space-between"
		element.style.gap = "12px"
		element.style.marginBottom = "12px"
	},

    createUpdateHeaderTextContainer(){
        const info = document.createElement("div")
        this.setUpdateTextContainerStyle(info)

        return info
    },

	setUpdateTextContainerStyle(element){
		const theme = this.getTheme()

		element.style.display = "flex"
		element.style.alignItems = "center"
		element.style.flexWrap = "wrap"
		element.style.gap = theme.gapSmall
		element.style.minWidth = "0"
	},

    createUpdatePluginName(item){
        const element = document.createElement("span")
        element.textContent = item.name
        this.setUpdatePluginNameStyle(element)

        return element
    },

	setUpdatePluginNameStyle(element){
		const theme = this.getTheme()

		element.style.fontWeight = "bold"
		element.style.fontSize = theme.fontSizeLarge
		element.style.color = theme.colorText
	},

    createUpdatePluginVersion(item){
        const element = document.createElement("span")
        element.textContent = `Latest: ${item.latest}`
        this.setUpdateVersionStyle(element)

        return element
    },

	setUpdateVersionStyle(element){
		const theme = this.getTheme()

		element.style.fontWeight = "bold"
		element.style.fontSize = theme.fontSizeLarge
		element.style.color = theme.colorSuccess
	},

    createUpdateLogLabel(item){
        const element = document.createElement("span")
        element.textContent = "Update Log"
        this.setUpdateLogLabelStyle(element)

        return element
    },

	setUpdateLogLabelStyle(element){
		const theme = this.getTheme()

		element.style.fontWeight = "bold"
		element.style.fontSize = theme.fontSizeLarge
		element.style.color = theme.colorTitle
	},

	createUpdateBody(item){
		const infoBody = this.createUpdateInfoBody()
		const logText = this.createUpdateLogTextContainer(item)

		infoBody.appendChild(logText)

		return infoBody
	},

    createUpdateInfoBody(){
        const element = document.createElement("div")
        this.setUpdateInfoBodyStyle(element)

        return element
    },

	setUpdateInfoBodyStyle(element){
		const theme = this.getTheme()

		element.style.flex = "1"
		element.style.minHeight = "0"
		element.style.overflowY = "auto"
		element.style.padding = theme.paddingCard
		element.style.border = `1px solid ${theme.colorBodyBorder}`
		element.style.borderRadius = theme.radiusMedium
		element.style.background = theme.colorBodyBackground
	},

    createUpdateLogTextContainer(item){
        const element = document.createElement("div")
        element.innerHTML = item.log || ""
        this.setUpdateLogTextContainerStyle(element)

        return element
    },

	setUpdateLogTextContainerStyle(element){
		const theme = this.getTheme()

		element.style.whiteSpace = "normal"
		element.style.fontSize = theme.fontSizeMedium
		element.style.lineHeight = "1.6"
		element.style.color = theme.colorText
	},

	createUpdateFooter(item){
		const footer = this.createUpdateFooterContainer()
		const button = this.createUpdateDownloadButton(item)

		button.addEventListener("click", () => {
			this.openItemUrl(item)
		})

		footer.appendChild(button)

		return footer
	},

    createUpdateFooterContainer(){
        const element = document.createElement("div")
        this.setUpdateFooterContainerStyle(element)

        return element
    },

	setUpdateFooterContainerStyle(element){
		element.style.display = "flex"
		element.style.justifyContent = "center"
		element.style.marginTop = "12px"
	},

    createUpdateDownloadButton(item){
        const button = document.createElement("button")
        button.textContent = "Download"
		button.disabled = !item.url
		this.setUpdateDownloadButtonStyle(button, item.url)

        return button
    },

    setUpdateDownloadButtonStyle(element, enabled){
        this.setButtonBaseStyle(element, enabled, {
            large: true,
            bold: true,
            marginLeft: "0"
        })
    },

	createOverlayFooter(){
		const footer = document.createElement("div")
		this.setOverlayFooterStyle(footer)
        const updateWarn = "If you are sure it is updated, refresh the plugin entry on the Plugin Manager window(Right-click on entry → refresh)."
        const canDisable = "You can disable the version manager on the EliMZ_Book plugin parameters."
		footer.textContent = updateWarn + "\n" + canDisable

		return footer
	},

	setOverlayFooterStyle(element){
		const theme = this.getTheme()

		element.style.marginTop = "10px"
		element.style.fontSize = theme.fontSizeTiny
		element.style.opacity = "0.9"
		element.style.whiteSpace = "pre-line"
		element.style.color = theme.colorText
	},

	register(pluginName, versionString){
		const version = this.parseVersionToArray(versionString)

		if(version){
            this.registry[pluginName] = version
        }
	},
}

Eli.Game_PassiveInterpreter = class Game_PassiveInterpreter extends Game_Interpreter{

        setup(list, eventId) {
            this.clear()
            this._mapId = $gameMap.mapId()
            this._eventId = eventId || 0
            this._list = list
        }

        updateWait() {return false}
        // Show Text
        command101(){return false}
        // Show Choices
        command102(){ return false }
        // Input Number
        command103(){ return false }
        // Select Item
        command104(){ return false }
        // Show Scrolling Text
        command105(){ return false }
        // Timer
        command124(){ return false }
        // Change Encounter
        command136(){ return true }
        // Transfer Player
        command201(){ return true }
        // Set Vehicle Location
        command202(){ return true }
        // Set Event Location
        command203(){ return true }
        // Scroll Map
        command204(){ return true }
        // Set Movement Route
        command205(){ return true }
        // Get on/off Vehicle
        command206() { return true }
        // Change Transparency
        command211(){ return true }
        // Show Animation
        command212() { return true }
        // Show Balloon Icon
        command213() { return true }
        // Erase Event
        command214() { return true }
        // Change Player Followers
        command216(){ return true }
        // Gather Followers
        command217(){ return true }
        // Fadeout Screen
        command221() { return true }
        // Fadein Screen
        command222() { return true }
        // Tint Screen
        command223() { return true }
        // Flash Screen
        command224() { return true }
        // Shake Screen
        command225() { return true }
        // Wait
        command230() { return true }
        // Show Picture
        command231(){ return true }
        // Move Picture
        command232(){ return true }
        // Rotate Picture
        command233(){ return true }
        // Tint Picture
        command234(){ return true }
        // Erase Picture
        command235(){ return true }
        // Set Weather Effect
        command236(){ return true }
        // Play BGM
        command241(){ return true }
        // Fadeout BGM
        command242(){ return true }
        // Save BGM
        command243(){ return true }
        // Resume BGM
        command244(){ return true }
        // Play BGS
        command245(){ return true }
        // Fadeout BGS
        command246(){ return true }
        // Play ME
        command249(){ return true }
        // Play SE
        command250(){ return true }
        // Stop SE
        command251(){ return true }
        // Play Movie
        command261(){ return true }
        // Change Map Name Display
        command281(){ return true }
        // Change Tileset
        command282(){ return true }
        // Change Parallax
        command284(){ return true }
        // Battle Processing
        command301(params) { return true }
        // Shop Processing
        command302(params) { return true }
        // Name Input Processing
        command303(params) { return true }
        // Change Actor Images
        command322(params) { return true }
        // Change Vehicle Image
        command323(params) { return true }
        // Show Battle Animation
        command337(params) { return true }
        // Force Action
        command339(params) { return true }
        // Abort Battle
        command340() { return true }
        // Open Menu Screen
        command351() { return true }
        // Open Save Screen
        command352() { return true }
        // Game Over
        command353() { return true }
        // Return to Title Screen
        command354() { return true }
}

Eli.ErrorPrinter = {

	interpreter: null,
    errorEvent: null,
    commandNames: {
        101: "Show Text", 102: "Show Choices", 103: "Input Number", 104: "Select Item", 105: "Show Scrolling Text", 108: "Comment", 109: "Skip", 111: "Conditional Branch",
        112: "Loop", 113: "Break Loop", 115: "Exit Event Processing", 117: "Common Event", 118: "Label", 119: "Jump to Label", 121: "Control Switches",
        122: "Control Variables", 123: "Control Self Switch", 124: "Control Timer", 125: "Change Gold", 126: "Change Items",
        127: "Change Weapons", 128: "Change Armors", 129: "Change Party Member", 132: "Change Battle BGM", 133: "Change Victory ME", 134: "Change Save Access", 135: "Change Menu Access",
        136: "Change Encounter", 137: "Change Formation Access", 138: "Change Window Color", 139: "Change Defeat ME", 140: "Change Vehicle BGM",
        201: "Transfer Player", 202: "Set Vehicle Location", 203: "Set Event Location", 204: "Scroll Map", 205: "Set Movement Route", 206: "Get on/off Vehicle", 211: "Change Transparency", 212: "Show Animation",
        213: "Show Balloon Icon", 214: "Erase Event", 216: "Change Player Followers", 217: "Gather Followers", 221: "Fadeout Screen", 222: "Fadein Screen",
        223: "Tint Screen", 224: "Flash Screen", 225: "Shake Screen", 230: "Wait", 231: "Show Picture", 232: "Move Picture", 233: "Rotate Picture", 234: "Tint Picture", 235: "Erase Picture",
        236: "Set Weather Effect", 241: "Play BGM", 242: "Fadeout BGM", 243: "Save BGM", 244: "Resume BGM", 245: "Play BGS", 246: "Fadeout BGS",
        249: "Play ME", 250: "Play SE", 251: "Stop SE", 261: "Play Movie", 281: "Change Map Name Display", 282: "Change Tileset", 283: "Change Battle Background",
        284: "Change Parallax", 285: "Get Location Info", 301: "Battle Processing", 302: "Shop Processing", 303: "Name Input Processing", 311: "Change HP", 312: "Change MP",
        313: "Change State", 314: "Recover All", 315: "Change EXP", 316: "Change Level", 317: "Change Parameter", 318: "Change Skill", 319: "Change Equipment",
        320: "Change Name", 321: "Change Class", 322: "Change Actor Images", 323: "Change Vehicle Image", 324: "Change Nickname", 325: "Change Profile", 326: "Change TP",
        331: "Change Enemy HP", 332: "Change Enemy MP", 333: "Change Enemy State", 334: "Enemy Recover All", 335: "Enemy Appear", 336: "Enemy Transform",
        337: "Show Battle Animation", 339: "Force Action", 340: "Abort Battle", 342: "Change Enemy TP", 351: "Open Menu Screen", 352: "Open Save Screen", 353: "Game Over", 354: "Return to Title Screen",
        355: "Script", 356: "Plugin Command MV (deprecated)", 357: "Plugin Command", 402: "When [**]", 403: "When Cancel", 411: "Else", 413: "Repeat Above", 601: "If Win", 602: "If Escape", 603: "If Lose"
    },

    getCommandName(code){
        return this.commandNames[code] || "Unknown Command"
    },

    addCustomStyle(){
        const style = document.createElement("style")
        style.textContent = `#errorPrinter{
            position: absolute;
            left: 50%;
            top: 2%;
            width: 96vw;
            max-width: 96vw;
            height: auto;
            max-height: 92vh;

            transform: translateX(-50%);
            overflow-y: auto;
            
            text-align: center;
            text-shadow: 1px 1px 3px #000;
            font-size: 20px;
            color: #fff;
            z-index: 9;
        }`

        document.body.appendChild(style)
        this.customPrinterErrorStyle = true
    },

    makeErrorHtml(name, message, error) {
        const wrap = document.createElement("div")
        const title = this.createTitle(name, message, error)
        const msg = this.createMessage(name, message, error)
        const help = this.createHelp(name, message, error)
        const ctx = this.createEventContext(name, message, error)
        const ctxTitle = this.createContextTitle(name, message, error)
        const ctxBody = this.createContextBody(name, message, error)
        const stackTitle = this.createStackTitle(name, message, error)
        const stack = this.createStack(name, message, error)

        wrap.appendChild(help)

        ctx.appendChild(ctxTitle)
        ctx.appendChild(ctxBody)

        wrap.appendChild(title)
        wrap.appendChild(msg)
        
        wrap.appendChild(ctx)
        wrap.appendChild(stackTitle)
        wrap.appendChild(stack)

        return wrap.outerHTML
    },

    createTitle(name, message, error){
        const title = document.createElement("div")
        title.id = "errorName"
        title.textContent = name || ""
        this.setTitleStyle(title)

        return title
    },

    setTitleStyle(element){
        element.style.fontWeight = "bold"
        element.style.fontSize = "20px"
        element.style.marginBottom = "8px"
        element.style.marginTop = "8px"
    },

    createMessage(name, message, error){
        const msg = document.createElement("div")
        msg.id = "errorMessage"
        msg.textContent = message || ""
        this.setMessageStyle(msg)

        return msg
    },

    setMessageStyle(element){
        element.style.marginBottom = "10px"
    },

    createHelp(name, message, error){
        const help = document.createElement("div")
        let text = "If you don't know how to fix this, take a screenshot and send it to the developer."

        if(message.includes("JSON")){
            text += "\n" + "(Probably an error on a plugin command or plugin parameter)"
        }else if(name === "Failed to load"){
            text += "\n" + "(Check if the filename exists on the folder and if the capitalisation is the same. Avoid using spaces or special characters, unless RPG Maker tell you to do so)"
        }

        text += "\n"
        text += "(You can disable this updated error log on EliMZ_Book plugin parameters)"
        help.textContent = text
        this.setHelpStyle(help)

        return help
    },

    setHelpStyle(element){
        element.style.padding = "8px"
        element.style.border = "1px solid rgba(255,255,255,0.2)"
        element.style.borderRadius = "8px"
        element.style.background = "rgba(255,255,255,0.06)"
        element.style.whiteSpace = "pre-line"
    },

    createEventContext(name, message, error){
        const ctx = document.createElement("div")
        this.setCtxStyle(ctx)

        return ctx
    },

    setCtxStyle(element){
        element.style.marginTop = "10px"
        element.style.padding = "8px"
        element.style.border = "1px solid rgba(255,255,255,0.15)"
        element.style.borderRadius = "8px"
        element.style.background = "rgba(0,0,0,0.25)"
    },

    createContextTitle(name, message, error){
        const ctxTitle = document.createElement("div")
        ctxTitle.textContent = "Current or Last Event Running"
        this.setCtxTitleStyle(ctxTitle)

        return ctxTitle
    },

    setCtxTitleStyle(element){
        element.style.fontWeight = "bold"
        element.style.marginBottom = "6px"
        element.style.color = "#ff0"
    },

    createContextBody(name, message, error){
        const ctxBody = document.createElement("pre")
        this.setCtxBodyStyle(ctxBody)
        this.setCtxBodyTextContent(ctxBody)
        return ctxBody
    },

    setCtxBodyStyle(element){
        element.style.margin = "0"
        element.style.whiteSpace = "pre-wrap"
        element.style.wordBreak = "break-word"
    },

    setCtxBodyTextContent(ctxBody){
        const interpreter = this.interpreter

        if(interpreter){
            const commandName = this.getCommandName(interpreter.code)
            let text = ""
            let firstLine = ""

            if(interpreter._commonEventId > 0){
                firstLine += `Map ID: ${interpreter.mapId} | Common Event ID: ${interpreter._commonEventId}` + "\n"
            }else{
                const event = $gameMap.event(interpreter.eventId)
                firstLine += `Map ID: ${interpreter.mapId} | Event ID: ${interpreter.eventId}`

                if(event){
                    firstLine += ` | Page: ${event._pageIndex + 1}`
                }

                firstLine += "\n"
            }

            text += firstLine

            if(interpreter.code === 357){
                const [pluginName, functionName, pluginCmdName, list] = interpreter.parameters
                text += `Command: ${commandName} | Index: ${interpreter.index}` + "\n"
                text += `${pluginName} - ${pluginCmdName}`
                
            }else{
                text += `Command: ${commandName} | Index:${interpreter.index}`
            }

            text += "\n"
            
            if(interpreter.scriptLine){
                text += `Script: ${interpreter.scriptLine}` + "\n"
            }
            ctxBody.textContent = text
        }else{
            ctxBody.textContent = "No interpreter context available."
        }
    },

    createStackTitle(name, message, error){
        const stackTitle = document.createElement("div")
        stackTitle.textContent = "Stack trace"
        this.setStackTitleStyle(stackTitle)

        return stackTitle
    },
    
    setStackTitleStyle(element){
        element.style.fontWeight = "bold"
        element.style.margin = "12px 0 6px 0"
        element.style.color = "#ff0"
    },

    createStack(name, message, error){
        const stack = document.createElement("pre")
        this.setStackStyle(stack)
        stack.textContent = error && error.stack ? String(error.stack) : ""

        return stack
    },

    setStackStyle(element){
        element.style.textAlign = "initial"
        element.style.margin = "0"
        element.style.whiteSpace = "pre-wrap"
        element.style.wordBreak = "break-word"
        element.style.padding = "8px"
        element.style.border = "1px solid rgba(255,255,255,0.15)"
        element.style.borderRadius = "8px"
        element.style.background = "rgba(0,0,0,0.25)"
        element.style.fontSize = "16px"
    },

	setInterpreter(interpreter, command){
		const info = {
			mapId: interpreter._mapId,
			eventId: interpreter._eventId,
			index: interpreter._index,
			code: command?.code ?? 0,
			indent: command?.indent ?? 0,
			parameters: command?.parameters ?? null
		}

		if(command?.code === 355 || command?.code === 655){
			const p0 = command.parameters ? command.parameters[0] : ""
			info.scriptLine = p0
		}

		this.interpreter = info
	},

	clearInterpreter(){
		this.interpreter = null
	}
}

/* -------------------------------- ELI BOOK -------------------------------- */
Eli.Book = {

    Parameters: class {
        constructor(parameters){
            this.checkVersion = (parameters.checkVersion || "true") === "true"
            this.updateErrorPrinter = (parameters.updateErrorPrinter || "true") === "true"
            this.iterateEventList = (parameters.iterateEventList || "true") === "true"
            this.engine = this.createEngine(JSON.parse(parameters.engine))
            this.playtest = this.createPlaytest(JSON.parse(parameters.playtest))
        }

        createEngine(param){
            return {
                disableEffekseer: param.disableEffekseer === "true",
                styleOverflow: param.styleOverflow === "true",
                fixBitmapStartLoad: param.fixBitmapStartLoad === "true"
            }
        }
    
        createPlaytest(param){
            return {
                openDevTools: param.openDevTools === "true",
                gameFocus: param.gameFocus === "true",
                enableGameWindowPosition: param.enableGameWindowPosition === "true",
                gameWindowPosition:{
                    alignX: param.alignX,
                    alignY: param.alignY,
                    offsetX: Number(param.offsetX),
                    offsetY: Number(param.offsetY),
                },
                quickRestart: param.quickRestart === "true",
                startFps: param.startFps === "true",
            }
        }
    },
    
    initialize(){
        Eli.VersionManager.register("EliMZ_Book", "6.1.2")
        this.initParameters()
        this.setDocumentStyle()
        window.addEventListener("load", this.onWindowLoad.bind(this))
    },

    initParameters(){
        const parameters = PluginManager.parameters("EliMZ_Book")
        this.parameters = new this.Parameters(parameters)
    },

    setDocumentStyle(){
        if(this.getEngineParam().styleOverflow){
            document.body.style.overflow = "hidden"
        }
    },

    getParam(){
        return this.parameters
    },

    getEngineParam(){
        return this.getParam().engine
    },

    getPlaytestParam(){
        return this.getParam().playtest
    },

    onWindowLoad(){
        if(Utils.isNwjs() && Utils.isOptionValid("test")){

            if(this.getPlaytestParam().openDevTools){
                this.openDevTools()
            }

            if(this.getPlaytestParam().enableGameWindowPosition){
                this.changeGameWindowPosition()
            }
        }
    },

    openDevTools(){
        const ms = 1500
        nw.Window.get().showDevTools()
        setTimeout(() => {
            nw.Window.get().focus()
        }, ms)
    },

    changeGameWindowPosition(){
        const screen = window.screen
        const nwWin = nw.Window.get()
        const screenWidth = screen.availWidth ?? screen.width
        const screenHeight = screen.availHeight ?? screen.height
        const gameWidth = nwWin.width
        const gameHeight = nwWin.height
        const paramPosition = this.getPlaytestParam().gameWindowPosition
        const args = [paramPosition, gameWidth, gameHeight, screenWidth, screenHeight]
        const {x, y} =  Eli.Utils.calculatePosition(...args)

        nwWin.moveTo(Math.round(x), Math.round(y))   
    },

}

Eli.Book.initialize()

/* ========================================================================== */
/*                                  SAVE DATA                                 */
/* ========================================================================== */
function Eli_SavedContents() {
    this.initialize.apply(this, arguments)
}

Eli_SavedContents.prototype.initialize = function(){
    this.contents = {}
}

/**
 * 
 * @param {string} pluginName 
 * @deprecated Must be removed. [Mapreveal]
 */
Eli_SavedContents.prototype.createNewContent = function(pluginName){
    this.contents[pluginName] = {}
}

var $eliData = null

{

const Alias = {}

/* ---------------------------- DISABLE EFFEKSEER --------------------------- */
if(Eli.Book.getParam().disableEffekseer){

	Graphics._createEffekseerContext = function(){
		this._effekseer = null
	}

	SceneManager.updateEffekseer = function(){}

	EffectManager.isReady = function() {
		return true
	}

	EffectManager.clear = function() {
		this._cache = {}
	}

}

/* -------------------------- UPDATE ERROR PRINTER -------------------------- */
if(Eli.Book.getParam().updateErrorPrinter){

    Alias.Graphics_printError = Graphics.printError
    Graphics.printError = function(name, message, error) {
        if(!error){
            error = Eli.ErrorPrinter.errorEvent
        }
        Alias.Graphics_printError.call(this, name, message, error)
    }

    Alias.Graphics__updateErrorPrinter = Graphics._updateErrorPrinter
    Graphics._updateErrorPrinter = function() {
        const oldWidthStyle = this._errorPrinter.style.width
        const oldHeightStyle = this._errorPrinter.style.height
        Alias.Graphics__updateErrorPrinter.call(this)
        this._errorPrinter.style.width = oldWidthStyle
        this._errorPrinter.style.height = oldHeightStyle
    }

    Alias.Graphics__createErrorPrinter = Graphics._createErrorPrinter
    Graphics._createErrorPrinter = function() {
        Eli.ErrorPrinter.addCustomStyle()
        Alias.Graphics__createErrorPrinter.call(this)
    }

    Alias.Graphics__makeErrorHtml = Graphics._makeErrorHtml
    Graphics._makeErrorHtml = function(name, message, error) {
        if(name && message){
            return Eli.ErrorPrinter.makeErrorHtml(name, message, error)
        }else{
            return Alias.Graphics__makeErrorHtml.call(this, name, message, error)
        }
    }

    Alias.SceneManager_catchException = SceneManager.catchException
    SceneManager.catchException = function(e) {
        Eli.ErrorPrinter.errorEvent = e
        Alias.SceneManager_catchException.call(this, e)
    }

    Alias.Game_Interpreter_executeCommand = Game_Interpreter.prototype.executeCommand
    Game_Interpreter.prototype.executeCommand = function() {
        const command = this.currentCommand()
        Eli.ErrorPrinter.setInterpreter(this, command)
        return Alias.Game_Interpreter_executeCommand.call(this)
    }
}

/* ------------------------------ CHECK VERSION ----------------------------- */
if(Eli.Book.getParam().checkVersion && Utils.isNwjs() && Utils.isOptionValid("test")){

    Alias.Scene_Boot_isReady = Scene_Boot.prototype.isReady
    Scene_Boot.prototype.isReady = function() {
        const ready = Alias.Scene_Boot_isReady.call(this)

        if(ready){
            Eli.VersionManager.startCheckingPluginVersions()

            if(Eli.VersionManager.isBlockingBoot()){
                return false
            }
        }

        return ready
    }
}

/* ========================================================================== */
/*                                    CORE                                    */
/* ========================================================================== */

/* -------------------------------- GRAPHICS -------------------------------- */
Alias.Graphics_setupPixi = Graphics._setupPixi
Graphics._setupPixi = function() {
    Alias.Graphics_setupPixi.call(this)
    this.onPixiSetup()
}

Graphics.onPixiSetup = function() {
    if(Utils.isOptionValid("test") && Eli.Book.getPlaytestParam().startFps){
        Graphics._switchFPSCounter()
    }
}

/* --------------------------------- BITMAP --------------------------------- */
if(Eli.Book.getEngineParam().fixBitmapStartLoad){

    Bitmap.prototype._startLoading = function() {
        this._image = new Image()
        this._image.onload = this._onLoad.bind(this)
        this._image.onerror = this._onError.bind(this)
        this._destroyCanvas()
        this._loadingState = "loading"

        if(Utils.hasEncryptedImages()){
            this._startDecrypting()
        }else{
            this._image.src = this._url
        }
    }
}

/* --------------------------------- WINDOW --------------------------------- */
Alias.Window_initialize = Window.prototype.initialize
Window.prototype.initialize = function() {
    Alias.Window_initialize.call(this)
    Eli.Utils.windowMargin = this._margin
}

/* --------------------------------- SPRITE --------------------------------- */
Alias.Sprite_initialize = Sprite.prototype.initialize
Sprite.prototype.initialize = function(bitmap){
    this.initInnerAnimations()
    Alias.Sprite_initialize.call(this, bitmap)
}

/* ------------------------------- MAIN SPRITE ------------------------------ */
Sprite.prototype.scaledWidth = function(){
    return this.scale.x * this.width
}

Sprite.prototype.scaledHeight = function(){
    return this.scale.y * this.height
}

/**
 * 
 * @deprecated Must be removed. [Map Select]
 */
Sprite.prototype.stretchScaleTo = function(keepRatio, baseWidth = Graphics.width, baseHeight = Graphics.height){
    const bitmapWidth = this.width
    const bitmapHeight = this.height
    
    if(keepRatio){
        const widthRatio = baseWidth / bitmapWidth
        const heightRatio = baseHeight / bitmapHeight
        const finalScale = Math.min(widthRatio, heightRatio)

        this.scale.set(finalScale, finalScale)

    }else{
        const upScale = baseWidth > bitmapWidth || baseHeight > bitmapHeight
        const widthRatio = Math.max(bitmapWidth, baseWidth) / Math.min(bitmapWidth, baseWidth)
        const heightRatio = Math.max(bitmapHeight, baseHeight) / Math.min(bitmapHeight, baseHeight)
        const scaleX = Math.abs(1 - widthRatio)
        const scaleY = Math.abs(1 - heightRatio)

        if(upScale){
            this.scale.set(1 + scaleX, 1 + scaleY)
        }else{
            this.scale.set(1 - scaleX, 1 - scaleY)
        }
    }
}

/**
 * 
 * @deprecated Must be removed and use Eli.Utils instead. [Map Select]
 */
Sprite.prototype.centerPositionX = function(relativeWidth){
    const x = Eli.Utils.centerXPos(this.scaledWidth(), relativeWidth)
    this.x = x
}
/**
 * 
 * @deprecated Must be removed and use Eli.Utils instead. [Map Select]
 */
Sprite.prototype.centerPositionY = function(relativeHeight){
    const y = Eli.Utils.centerYPos(this.scaledHeight(), relativeHeight)
    this.y = y
}

/**
 * 
 * @deprecated Must be removed and use Eli.Utils instead. [Map Select]
 */
Sprite.prototype.centerPositionTo = function(relativeWidth, relativeHeight){
    const x = Eli.Utils.centerXPos(this.scaledWidth(), relativeWidth)
    const y = Eli.Utils.centerYPos(this.scaledHeight(), relativeHeight)
    this.move(x, y)
}

/* ----------------------------- INNER ANIMATION ---------------------------- */
Sprite.prototype.initInnerAnimations = function(){
    this._innerAnimationsMZ = []
    this._innerAnimationsMV = []
    this._effectTarget = this
}

Sprite.prototype.updateInnerMVAnimationSprites = function() {
    if (this.isInnerAnimationPlaying()) {
        const sprites = this._innerAnimationsMV.clone()
        this._innerAnimationsMV = []

        for (const sprite of sprites){

            if (sprite.isPlaying()) {
                this._innerAnimationsMV.push(sprite)

            }else{
                if(sprite.parent){
					sprite.parent.removeChild(sprite)
				}
                sprite.destroy()
            }
        }
    }
}


Sprite.prototype.updateInnerMZAnimationSprites = function(){
    const clone = this._innerAnimationsMZ.clone()
    for(const sprite of clone){

        if(!sprite.isPlaying()){
            this.removeInnerAnimation(sprite)
        }
    }
}

Sprite.prototype.isInnerAnimationPlaying = function(){
    return this._innerAnimationsMV.length > 0 || this._innerAnimationsMZ.length > 0
}

/**
 * 
 * @param {number} animationId Animation Id from database
 * @param {boolean} mirror true or false to mirror the animation
 * @param {number} delay delay in frames to play the animation
 */
Sprite.prototype.startInnerAnimation = function(animationId, mirror, delay){
    const animation = JSON.parse(JSON.stringify($dataAnimations[animationId]))
    
    if(animation) {

        if(Eli.Utils.isMVAnimation(animation)){
            this.startInnerAnimationMV(animation, mirror, delay)
        }else{
            this.startInnerAnimationMZ(animation, mirror, delay)
        }
    }
}

Sprite.prototype.startInnerAnimationMV = function(animation, mirror, delay){
    const sprite = new Sprite_InnerAnimationMV()

    sprite.setup(this._effectTarget, animation, mirror, delay)
    this.parent.addChild(sprite)
    this._innerAnimationsMV.push(sprite)
}

Sprite.prototype.startInnerAnimationMZ = function(animation, mirror, delay){
    const sprite = new Sprite_Animation()
    const targetSprites = [this]
    const baseDelay = this.innerAnimationBaseDelay()
    const previous = delay > baseDelay ? this.lastInnerAnimationSprite() : null

    // if (this.innerAnimationShouldMirror(targetSprites[0])) {
    //     mirror = !mirror
    // }

    sprite._targets = [this]
    animation.offsetX += this.width/2
    animation.offsetY += this.height
    sprite.setup(targetSprites, animation, mirror, delay, previous)
    this.parent.addChild(sprite)
    this._innerAnimationsMZ.push(sprite)
}

Sprite.prototype.lastInnerAnimationSprite = function() {
    return this._innerAnimationsMZ[this._innerAnimationsMZ.length - 1]
}

Sprite.prototype.isInnerAnimationForEach = function(animation) {
    const mv = Eli.Utils.isMVAnimation(animation)
    return mv ? animation.position !== 3 : animation.displayType === 0
}

Sprite.prototype.innerAnimationBaseDelay = function() {
    return 8
}

Sprite.prototype.innerAnimationNextDelay = function() {
    return 12
}

Sprite.prototype.innerAnimationShouldMirror = function(target) {
    return target && target.isActor && target.isActor()
}

Sprite.prototype.removeInnerAnimation = function(sprite) {
	this._innerAnimationsMZ.remove(sprite)

	if(sprite.parent){
		sprite.parent.removeChild(sprite)
	}

    for (const target of sprite._targets) {
        if (target.endAnimation) {
            target.endAnimation()
        }
    }
    sprite.destroy()
}

Sprite.prototype.removeAllInnerAnimations = function() {
    const clonedAnimations = this._innerAnimationsMZ.clone()

    for (const sprite of clonedAnimations) {
        this.removeInnerAnimation(sprite)
    }
}

/* ------------------------------- TOUCH INPUT ------------------------------ */
Alias.TouchInput_initialize = TouchInput.initialize
TouchInput.initialize = function() {
    this.initMembers()
    Alias.TouchInput_initialize.call(this)
}

/**
 * @deprecated No need for new properties. _x and _y do the job. [Extra Trigger Pro]
 */
TouchInput.initMembers = function() {
    this._movingX = -1
    this._movingY = -1
}

/**
 * @deprecated No need for new properties. _x and _y do the job. [Extra Trigger Pro]
 */
Alias.TouchInput_onMouseMove = TouchInput._onMouseMove
TouchInput._onMouseMove = function(event) {
    this.storeMouseCoordinates(event)
    Alias.TouchInput_onMouseMove.call(this, event)
}

/**
 * @deprecated No need for new properties. _x and _y do the job. [Extra Trigger Pro]
 */
TouchInput.storeMouseCoordinates = function(event) {
    this._movingX = Graphics.pageToCanvasX(event.pageX)
    this._movingY = Graphics.pageToCanvasY(event.pageY)
}

/* ========================================================================== */
/*                                   MANAGER                                  */
/* ========================================================================== */

/* ------------------------------ DATA MANAGER ------------------------------ */
Alias.DataManager_createGameObjects = DataManager.createGameObjects
DataManager.createGameObjects = function() {
    $eliData = new Eli_SavedContents()
    Alias.DataManager_createGameObjects.call(this)
}

Alias.DataManager_makeSaveContents = DataManager.makeSaveContents
DataManager.makeSaveContents = function() {
    const alias = Alias.DataManager_makeSaveContents.call(this)
    alias.eli = $eliData

    return alias
}

Alias.DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
    Alias.DataManager_extractSaveContents.call(this, contents)
    $eliData = contents.eli
}

/* ----------------------------- CONFIG MANAGER ----------------------------- */
ConfigManager.readNumber = function(config, name, defaultValue){
    if(name in config){
        return Number(config[name])
    }else{
        return defaultValue
    }
}

/* ------------------------------ SCENE MANAGER ----------------------------- */
if(Eli.Book.getPlaytestParam().gameFocus && Utils.isOptionValid("test")){

    SceneManager.isGameActive = function() {
        return true
    }
}

if(Eli.Book.getPlaytestParam().quickRestart && Utils.isOptionValid("test")){

    Alias.SceneManager_reloadGame = SceneManager.reloadGame
    SceneManager.reloadGame = function() {
        if(Utils.isNwjs()){
            location.reload()
        }else{
            Alias.SceneManager_reloadGame.call(this)
        }
    }
}

/* ----------------------------- BATTLE MANAGER ----------------------------- */
BattleManager.battleTrigger = ""

Alias.BattleManager_setup = BattleManager.setup
BattleManager.setup = function(troopId, canEscape, canLose) {
    this.beforeSetup(troopId, canEscape, canLose)
    Alias.BattleManager_setup.call(this, troopId, canEscape, canLose)
    this.afterSetup(troopId, canEscape, canLose)
}

BattleManager.beforeSetup = function(troopId, canEscape, canLose){}
BattleManager.afterSetup = function(troopId, canEscape, canLose){}

BattleManager.setBattleTrigger = function(origin){
    this.battleTrigger = origin
}

BattleManager.getBattleTrigger = function(){
    return this.battleTrigger
}

BattleManager.clearBattleTrigger = function(){
    this.setBattleTrigger("")
}

BattleManager.setMapRandomBattleTrigger = function(){
    this.setBattleTrigger("MapRandom")
}

BattleManager.setEventRandomBattleTrigger = function(){
    this.setBattleTrigger("EventRandom")
}

BattleManager.setCommandEventBattleTrigger = function(){
    this.setBattleTrigger("CommandEvent")
}

BattleManager.isBattleTriggeredByMapRandom = function(){
    return this.getBattleTrigger() === "MapRandom"
}

BattleManager.isBattleTriggeredByEventRandom = function(){
    return this.getBattleTrigger() === "EventRandom"
}

BattleManager.isBattleTriggeredByCommandEvent = function(){
    return this.getBattleTrigger() === "CommandEvent"
}

BattleManager.isRandomBattle = function(){
    return this.isBattleTriggeredByMapRandom() || this.isBattleTriggeredByEventRandom()
}

/* ========================================================================== */
/*                                   OBJECTS                                  */
/* ========================================================================== */

/* --------------------------- GAME CHARACTER BASE -------------------------- */
Game_CharacterBase.prototype.hasMapSprite = function(){
    return !!this.getMapSprite()
}

Game_CharacterBase.prototype.getSpriteId = function() {}

Game_CharacterBase.prototype.getMapSprite = function() {}

Game_CharacterBase.prototype.getCurrentBattler = function() {}

Game_CharacterBase.prototype.getGlobalKey = function() {
    return "undefined"
}

/* ------------------------------- GAME PLAYER ------------------------------ */
Game_Player.prototype.getSpriteId = function() {
    return -1
}

Game_Player.prototype.getMapSprite = function() {
    return Eli.Utils.spriteCharacters[this.getSpriteId()]
}

Game_Player.prototype.getCurrentBattler = function() {
    return $gameParty.leader()
}

Game_Player.prototype.getGlobalKey = function(forActor) {
    if(forActor){
        return `Actor_${$gameParty.leader()?.actorId()}`
    }else{
        return `Player`
    }
}

Alias.Game_Player_makeEncounterTroopId = Game_Player.prototype.makeEncounterTroopId
Game_Player.prototype.makeEncounterTroopId = function() {
    if(!BattleManager.isBattleTriggeredByEventRandom()){
        BattleManager.setMapRandomBattleTrigger()
    }

    const troopId = Alias.Game_Player_makeEncounterTroopId.call(this)

    if(!$dataTroops[troopId]){
        BattleManager.clearBattleTrigger()
    }
    
    return troopId
}

/* ----------------------------- GAME FOLLOWERS ----------------------------- */
Alias.Game_Follower_initialize = Game_Follower.prototype.initialize
Game_Follower.prototype.initialize = function(memberIndex) {
    this._memberIndex = memberIndex
    Alias.Game_Follower_initialize.call(this, memberIndex)
}

Game_Follower.prototype.getSpriteId = function() {
    return -(this._memberIndex+1)
}

Game_Follower.prototype.getMapSprite = function() {
    return Eli.Utils.spriteCharacters[this.getSpriteId()]
}

Game_Follower.prototype.getCurrentBattler = function() {
    return this.actor()
}

Game_Follower.prototype.getGlobalKey = function(forActor) {
    if(forActor){
        return `Actor_${this.actor()?.actorId()}`
    }else{
        return `Follower_${this._memberIndex}`
    }
}

/* ------------------------------- GAME EVENT ------------------------------- */
Alias.Game_Event_initialize = Game_Event.prototype.initialize
Game_Event.prototype.initialize = function(mapId, eventId) {
    this._mapId = mapId
    this._eventId = eventId
    Alias.Game_Event_initialize.call(this, mapId, eventId)
}

Alias.Game_Event_initMembers = Game_Event.prototype.initMembers
Game_Event.prototype.initMembers = function(){
    Alias.Game_Event_initMembers.call(this)
    this.initMetaMembers()
}

Game_Event.prototype.initMetaMembers = function(){
    this.metaEli = {}
    this.needBuildMetaData = true
}

Alias.Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings
Game_Event.prototype.setupPageSettings = function(){
    this.beforeSetupPage()
    Alias.Game_Event_setupPageSettings.call(this)
    this.afterSetupPage()
    this.checkListIteration()
}

Game_Event.prototype.beforeSetupPage = function(){
    if(this.needBuildMetaData && this.event().note.length > 0){
        this.extractEliMetaData()
        this.needBuildMetaData = false
    }
}

Game_Event.prototype.extractEliMetaData = function(){
    const regExp = /<([^<>:]+)(:?)([^>]*)>/g

    for(;;){
        const match = regExp.exec(this.event().note)

        if(match){
            if(match[2] === ":"){
                const key = match[1]
                const value = match[3]
                const dummy = (arg) => arg
                const parseMethod = this[`parseMeta_${key}`]
                const func = (parseMethod || dummy).bind(this)

                this.metaEli[match[1]] = func(value)

            }else{
                this.metaEli[match[1]] = true
            }

        }else{
            break
        }
    }
}

Game_Event.prototype.afterSetupPage = function(){}

Game_Event.prototype.checkListIteration = function(){
    if(this.canIterateList()){
        this.startIterateList()
    }
    this.afterListIteration()
}

Game_Event.prototype.hasIterateListNote = function(){
    return this.event().note.toLowerCase().includes("<iteratelist>")
}

Game_Event.prototype.canIterateList = function(){
    return Eli.Book.getParam().iterateEventList || this.hasIterateListNote()
}

Game_Event.prototype.startIterateList = function(){
    for(let i = 0; i < this.list().length; i++){
        i = this.onListIteration(i)
    }
}

Game_Event.prototype.onListIteration = function(index){
    return index
}

Game_Event.prototype.afterListIteration = function(){}

Game_Event.prototype.getSpriteId = function() {
    return this.eventId()
}

Game_Event.prototype.getMapSprite = function() {
    return Eli.Utils.spriteCharacters[this.getSpriteId()]
}

Game_Event.prototype.getGlobalKey = function(forActor) {
    return `Map_${this._mapId}_Event_${this.eventId()}`
}

Game_Event.prototype.isActionTrigger = function() {
    return this._trigger === 0
}

Game_Event.prototype.isPlayerTouchTrigger = function() {
    return this._trigger === 1
}

Game_Event.prototype.isEventTouchTrigger = function() {
    return this._trigger === 2
}

Game_Event.prototype.isAutorunTrigger = function() {
    return this._trigger === 3
}

Game_Event.prototype.isParallelTrigger = function() {
    return this._trigger === 4
}

Game_Event.prototype.getTriggerType = function(trigger) {
    return ["ActionButton", "PlayerTouch", "EventTouch", "Autorun", "Parallel"][trigger] || "Invalid"
}

/* ------------------------------ GAME VEHICLE ------------------------------ */
Alias.Game_Vehicle_initialize = Game_Vehicle.prototype.initialize
Game_Vehicle.prototype.initialize = function(type) {
    this._type = type
    Alias.Game_Vehicle_initialize.call(this, type)
}

Game_Vehicle.prototype.getSpriteId = function() {
    return this._type.toLowerCase()
}

Game_Vehicle.prototype.getMapSprite = function() {
    return Eli.Utils.spriteCharacters[this.getSpriteId()]
}

Game_Vehicle.prototype.getGlobalKey = function() {
    return `Vehicle_${this._type}`
}

/* ------------------------------ GAME MESSAGE ------------------------------ */
Alias.Game_Message_initialize = Game_Message.prototype.initialize
Game_Message.prototype.initialize = function() {
    Alias.Game_Message_initialize.call(this)
    this.initMembers()
}

Game_Message.prototype.initMembers = function(){
    this.interpreter = null
    this.eventId = 0
    this.commonEventId = 0
    this.sessionId = 0
}

Game_Message.prototype.setInterpreter = function(interpreter){
    this.interpreter = interpreter
}

Alias.Game_Message_clear = Game_Message.prototype.clear
Game_Message.prototype.clear = function() {
    Alias.Game_Message_clear.call(this)
    this.clearEventIds()
}

Game_Message.prototype.clearEventIds = function(){
    this.setEventIds(0, 0)
}

Game_Message.prototype.setEventIds = function(eventId, commonEventId){
    this.eventId = eventId
    this.commonEventId = commonEventId
}

Game_Message.prototype.advanceSessionId = function(){
	this.sessionId++
}

Game_Message.prototype.getEventId = function(){
    return this.eventId
}

Game_Message.prototype.getCommonEventId = function(){
    return this.commonEventId
}

Game_Message.prototype.getInterpreter = function(){
    return this.interpreter
}

Game_Message.prototype.getSessionId = function(){
	return this.sessionId
}

/* ------------------------------ GAME BATTLER ------------------------------ */
Game_Battler.prototype.getDatabase = function(){
    return null // To be overwrite by Game Enemy and Game Actor
}

/* ------------------------------- GAME ACTOR ------------------------------- */
Game_Actor.prototype.getDatabase = function(){
    return this.actor()
}

/* ------------------------------- GAME ENEMY ------------------------------- */
Game_Enemy.prototype.getDatabase = function(){
    return this.enemy()
}

/* ---------------------------- GAME INTERPRETER ---------------------------- */
Alias.Game_Interpreter_clear = Game_Interpreter.prototype.clear
Game_Interpreter.prototype.clear = function() {
    Alias.Game_Interpreter_clear.call(this)
    this.clearCommonEventId()
    this.clearMainInterpreter()
}

Game_Interpreter.prototype.clearCommonEventId = function() {
    this._commonEventId = 0
}

Game_Interpreter.prototype.clearMainInterpreter = function() {
    this.setMainInterpreter(null)
}

Alias.Game_Interpreter_setup = Game_Interpreter.prototype.setup
Game_Interpreter.prototype.setup = function(list, eventId) {
    Alias.Game_Interpreter_setup.call(this, list, eventId)
    this.setupCommonEventId(list, eventId)
}

Game_Interpreter.prototype.setupCommonEventId = function(list, eventId) {
    if(!eventId){
        this.setCommonEventId(list)
    }
}

Game_Interpreter.prototype.setCommonEventId = function(list){
    for(let i = 1; i < $dataCommonEvents.length; i++){
        this.onDataCommonEventLoop(list, i)
        if(this._commonEventId > 0){
            break
        }
    }
}

Game_Interpreter.prototype.onDataCommonEventLoop = function(list, i){
    const ce = $dataCommonEvents[i]
    const ceList = ce.list

    if(ceList === list){
        this._commonEventId = i
    }
}

Alias.Game_Interpreter_setupChild = Game_Interpreter.prototype.setupChild
Game_Interpreter.prototype.setupChild = function(list, eventId) {
    Alias.Game_Interpreter_setupChild.call(this, list, eventId)
    this._childInterpreter.setMainInterpreter(this.getMainInterpreter() || this)
}

Game_Interpreter.prototype.setMainInterpreter = function(parent) {
    this.mainInterpreter = parent
}

Game_Interpreter.prototype.getMainInterpreter = function() {
    return this.mainInterpreter
}

// Show Text
Alias.Game_Interpreter_command101 = Game_Interpreter.prototype.command101
Game_Interpreter.prototype.command101 = function(params) {
    if(!$gameMessage.isBusy()) {
        this.command101OnMessageNotBusy(params)
    }
    
    return Alias.Game_Interpreter_command101.call(this, params)
}

Game_Interpreter.prototype.command101OnMessageNotBusy = function(params) {
    this.assignMesssageInterpreterAndIds()
}

// Show Choices
Alias.Game_Interpreter_setupChoices = Game_Interpreter.prototype.setupChoices
Game_Interpreter.prototype.setupChoices = function(params){
    this.assignMesssageInterpreterAndIds()
    Alias.Game_Interpreter_setupChoices.call(this, params)
}

Alias.Game_Interpreter_setupNumInput = Game_Interpreter.prototype.setupNumInput
Game_Interpreter.prototype.setupNumInput = function(params) {
    this.assignMesssageInterpreterAndIds()
    Alias.Game_Interpreter_setupNumInput.call(this, params)
}

Alias.Game_Interpreter_setupItemChoice = Game_Interpreter.prototype.setupItemChoice
Game_Interpreter.prototype.setupItemChoice = function(params) {
    this.assignMesssageInterpreterAndIds()
    Alias.Game_Interpreter_setupItemChoice.call(this, params)
}

Game_Interpreter.prototype.assignMesssageInterpreterAndIds = function() {
    $gameMessage.setInterpreter(this)
    $gameMessage.setEventIds(this._eventId, this._commonEventId)
}

Alias.Game_Interpreter_command301 = Game_Interpreter.prototype.command301
Game_Interpreter.prototype.command301 = function(params) {
    if(!$gameParty.inBattle()){
        this.command301_NotInBattle(params)
    }
    
    return Alias.Game_Interpreter_command301.call(this, params)
}

Game_Interpreter.prototype.command301_NotInBattle = function(params) {
    BattleManager.setCommandEventBattleTrigger()
}

// Plugin Command
Alias.Game_Interpreter_command357 = Game_Interpreter.prototype.command357
Game_Interpreter.prototype.command357 = function(params){
    this.setPluginCommandInterpreter()
    return Alias.Game_Interpreter_command357.call(this, params)
}

Game_Interpreter.prototype.setPluginCommandInterpreter = function(){
    Eli.PluginManager.currentInterpreter = this
    if(this._eventId > 0){
        Eli.PluginManager.currentEventId = this._eventId
    }
    if(this._commonEventId > 0){
        Eli.PluginManager.currentCommonEventId = this._commonEventId
    }
}

Alias.Game_Interpreter_terminate = Game_Interpreter.prototype.terminate
Game_Interpreter.prototype.terminate = function() {
    Alias.Game_Interpreter_terminate.call(this)
    this.onInterpreterEnd()
}

Game_Interpreter.prototype.onInterpreterEnd = function(){
    if(this._eventId > 0){
        this.onEventEnd()
    }

    if(this._commonEventId > 0){
        this.onCommonEventEnd()
    }
}

Game_Interpreter.prototype.onEventEnd = function(){}

Game_Interpreter.prototype.onCommonEventEnd = function(){}

Game_Interpreter.prototype.isMessageInterpreter = function(){
    return this === $gameMessage.getInterpreter()
}

Game_Interpreter.prototype.getCurrentCommandCode = function(){
    if(this._list){
        return this._list[this._index] || 0
    }else{
        return 0
    }
}

Game_Interpreter.prototype.getNextEventCommand = function(){
    if(this._list){
        return this._list[this._index + 1]
    }else{
        return null
    }
}

Game_Interpreter.prototype.getNextEventCommandCode = function(){
    if(this._list){
        return this._list[this._index + 1]?.code || 0
    }else{
        return 0
    }
}

Game_Interpreter.prototype.isOnShowText = function(){
    if(this._list){
        return [101, 401].includes(this.getCurrentCommandCode())
    }else{
        return false
    }
}

Game_Interpreter.prototype.isNextMessageWindowCommand = function(){
	if(this._list){
        const code = this.getNextEventCommandCode()

        return [101, 102, 103, 104, 401].includes(code)
	}else{
        return false
    }
}

/* ========================================================================== */
/*                                    SCENE                                   */
/* ========================================================================== */

/* ------------------------------- SCENE BOOT ------------------------------- */

Alias.Scene_Boot_onDatabaseLoaded = Scene_Boot.prototype.onDatabaseLoaded
Scene_Boot.prototype.onDatabaseLoaded = function() {
    Alias.Scene_Boot_onDatabaseLoaded.call(this)
    this.processDatabaseNotesAndMetas()
}

Scene_Boot.prototype.processDatabaseNotesAndMetas = function(){
    for(let i = 1; i < $dataActors.length; i++){
        this.processDataActors($dataActors[i], i)
    }
    for(let i = 1; i < $dataClasses.length; i++){
        this.processDataClasses($dataClasses[i], i)
    }
    for(let i = 1; i < $dataSkills.length; i++){
        this.processDataSkills($dataSkills[i], i)
    }
    for(let i = 1; i < $dataItems.length; i++){
        this.processDataItems($dataItems[i], i)
    }
    for(let i = 1; i < $dataWeapons.length; i++){
        this.processDataWeapons($dataWeapons[i], i)
    }
    for(let i = 1; i < $dataArmors.length; i++){
        this.processDataArmors($dataArmors[i], i)
    }
    for(let i = 1; i < $dataEnemies.length; i++){
        this.processDataEnemies($dataEnemies[i], i)
    }
    for(let i = 1; i < $dataTroops.length; i++){
        this.processDataTroops($dataTroops[i], i)
    }
    for(let i = 1; i < $dataStates.length; i++){
        this.processDataStates($dataStates[i], i)
    }
    for(let i = 1; i < $dataTilesets.length; i++){
        this.processDataTilesets($dataTilesets[i], i)
    }
}

Scene_Boot.prototype.processDataActors = function(data, index){}
Scene_Boot.prototype.processDataClasses = function(data, index){}
Scene_Boot.prototype.processDataSkills = function(data, index){}
Scene_Boot.prototype.processDataItems = function(data, index){}
Scene_Boot.prototype.processDataWeapons = function(data, index){}
Scene_Boot.prototype.processDataArmors = function(data, index){}
Scene_Boot.prototype.processDataEnemies = function(data, index){}
Scene_Boot.prototype.processDataTroops = function(data, index){}
Scene_Boot.prototype.processDataStates = function(data, index){}
Scene_Boot.prototype.processDataTilesets = function(data, index){}

/* -------------------------------- SCENE MAP ------------------------------- */
Alias.Scene_Map_start = Scene_Map.prototype.start
Scene_Map.prototype.start = function() {
    if(this._transfer){
        this.beforeStartAndTransferIsOn()
    }
    Alias.Scene_Map_start.call(this)
}

Scene_Map.prototype.beforeStartAndTransferIsOn = function() {}

/* ========================================================================== */
/*                                   SPRITES                                  */
/* ========================================================================== */

/* ------------------------------ SPRITESET MAP ----------------------------- */
Alias.Spriteset_Map_createCharacters = Spriteset_Map.prototype.createCharacters
Spriteset_Map.prototype.createCharacters = function() {
    this.beforeCreateCharacters()
    Alias.Spriteset_Map_createCharacters.call(this)
}

Spriteset_Map.prototype.beforeCreateCharacters = function() {
    Eli.Utils.spriteCharacters = {}
}

/* ---------------------------- SPRITE CHARACTER ---------------------------- */
Alias.Sprite_Character_initialize = Sprite_Character.prototype.initialize
Sprite_Character.prototype.initialize = function(character) {
    Alias.Sprite_Character_initialize.call(this, character)
    this.checkToAddMapSprite(character)
}

Sprite_Character.prototype.checkToAddMapSprite = function(character) {
    if(this.isValidCharacterToSetMapSprite(character)){
        this.setMapSprite(character)
    }
}

Sprite_Character.prototype.validCharactersForMapSprite = function(){
    return ["Game_Player", "Game_Event", "Game_Vehicle", "Game_Follower"]
}

Sprite_Character.prototype.isValidCharacterToSetMapSprite = function(character) {
    return character && this.validCharactersForMapSprite().includes(character.constructor.name)
}

Sprite_Character.prototype.setMapSprite = function(character){
    const spriteId = character.getSpriteId()
    Eli.Utils.spriteCharacters[spriteId] = this
}

Alias.Sprite_Character_setTileBitmap = Sprite_Character.prototype.setTileBitmap
Sprite_Character.prototype.setTileBitmap = function() {
    Alias.Sprite_Character_setTileBitmap.call(this)
    this.addLoadListenerOnTileBitmap()
}

Sprite_Character.prototype.addLoadListenerOnTileBitmap = function(){
    this.bitmap.addLoadListener(() => {
        this.onTileBitmapLoad()
    })
}

Sprite_Character.prototype.onTileBitmapLoad = function(){}

Alias.Sprite_Character_setCharacterBitmap = Sprite_Character.prototype.setCharacterBitmap
Sprite_Character.prototype.setCharacterBitmap = function() {
    Alias.Sprite_Character_setCharacterBitmap.call(this)
    this.addLoadListenerOnCharacterBitmap()
}

Sprite_Character.prototype.addLoadListenerOnCharacterBitmap = function(){
    this.bitmap.addLoadListener(() => {
        this.onCharacterBitmapLoad()
    })
}

Sprite_Character.prototype.onCharacterBitmapLoad = function(){}

/* ------------------------------ SPRITE ENEMY ------------------------------ */
Alias.Sprite_Enemy_loadBitmap = Sprite_Enemy.prototype.loadBitmap
Sprite_Enemy.prototype.loadBitmap = function(name, hue){
    Alias.Sprite_Enemy_loadBitmap.call(this, name, hue)
    this.checkBitmap(name, hue)
}

Sprite_Enemy.prototype.checkBitmap = function(name, hue){
    if(this.bitmap){
        this.bitmap.addLoadListener(() => {
            this.onBitmapLoad(name, hue)
        })
    }
}

Sprite_Enemy.prototype.onBitmapLoad = function(name, hue){}

/* ----------------------------- SPRITE PICTURE ----------------------------- */
Alias.Sprite_Picture_loadBitmap = Sprite_Picture.prototype.loadBitmap
Sprite_Picture.prototype.loadBitmap = function(){
    Alias.Sprite_Picture_loadBitmap.call(this)
    this.addBitmapLoadListener()
}

Sprite_Picture.prototype.addBitmapLoadListener = function(){
    this.bitmap.addLoadListener(() => {
        this.onBitmapLoad()
    })
}

Sprite.prototype.addBitmapLoadListener = function(){
    this.bitmap.addLoadListener(() => {
        this.onBitmapLoad()
    })
}

Sprite_Picture.prototype.onBitmapLoad = function(){}

/* ---------------------------- SPRITE BATTLEBACK --------------------------- */
Alias.Sprite_Battleback_initialize = Sprite_Battleback.prototype.initialize
Sprite_Battleback.prototype.initialize = function(type) {
    Alias.Sprite_Battleback_initialize.call(this, type)
    this.checkForBitmap(type)
}

Sprite_Battleback.prototype.checkForBitmap = function(type){
    if(this.bitmap){ // Fix for Visu Visual Battle Env
        this.bitmap.addLoadListener(() => {
            this.onBitmapLoad(type)
        })
    }
}

Sprite_Battleback.prototype.onBitmapLoad = function(type){}

/* ========================================================================== */
/*                                   WINDOW                                   */
/* ========================================================================== */

/* ------------------------------- WINDOW BASE ------------------------------ */
Alias.Window_Base_setBackgroundType = Window_Base.prototype.setBackgroundType
Window_Base.prototype.setBackgroundType = function(type){
    if(type >= 3){
        this.showExtraBackgroundDimmer(type)
    }else{
        Alias.Window_Base_setBackgroundType.call(this, type)
    }
}

Window_Base.prototype.showExtraBackgroundDimmer = function(type) {
    this.opacity = 0

    if (!this._dimmerSprite) {
        this.createDimmerSprite()
    }

    const bitmap = this._dimmerSprite.bitmap

    if (bitmap.width !== this.width || bitmap.height !== this.height) {
        this.refreshExtraBackgroundDimmer(type)
    }
    
    this._dimmerSprite.visible = true
    this.updateBackgroundDimmer()
}

Window_Base.prototype.refreshExtraBackgroundDimmer = function(type) {
	const options = {
		3: "createStrongBackground",
		4: "createLightGradientVerticalBackground",
		5: "createFadedHorizontalBackground",
	}
    const func = options[type]

    if(this[func]){
        this[func]()
    }else{
        this.hideBackgroundDimmer()
    }
}

Window_Base.prototype.createStrongBackground = function(){
    const bitmap = this._dimmerSprite.bitmap
    const width = this.width > 0 ? this.width + 8 : 0
    const height = this.height
    const margin = this.padding
    const color1 = ColorManager.dimColor1()

    bitmap.resize(width, height)
    bitmap.fillRect(0, margin, width, height - margin * 2, color1)
    this._dimmerSprite.setFrame(0, 0, width, height)
}

Window_Base.prototype.createLightGradientVerticalBackground = function(){
    const bitmap = this._dimmerSprite.bitmap
    const margin = this.padding
    const width = this.width > 0 ? this.width + 8 : 0
    const height = this.height
    const color1 = "rgba(0, 0, 0, 0.7)"
    const color2 = ColorManager.dimColor2()
    const gradHeight = (height - margin * 2)/2
    
    bitmap.resize(width, height)
    bitmap.gradientFillRect(0, margin, width, gradHeight, color1, color2, true)
    bitmap.gradientFillRect(0, margin + gradHeight, width, gradHeight, color2, color1, true)
    this._dimmerSprite.setFrame(0, 0, width, height)
}

Window_Base.prototype.createFadedHorizontalBackground = function(){
    const bitmap = this._dimmerSprite.bitmap
    const width = this.width > 0 ? this.width + 8 : 0
    const height = this.height
    const margin = this.padding
    const color1 = ColorManager.dimColor1()
    const color2 = ColorManager.dimColor2()

    bitmap.resize(width, height)
    bitmap.gradientFillRect(0, margin, width + width/2, height - margin * 2, color1, color2, false)
    this._dimmerSprite.setFrame(0, 0, width, height)
}

Window_Base.prototype.getItemPadding = function(){
    return this.itemPadding()
}

Window_Base.prototype.getTextLineRect = function(index){
    // The equivalent for MV itemRectForText whould be itemRectWithPadding.
    // But MZ only uses that a few times..
    return this.itemLineRect(index)
}

Window_Base.prototype.updateHorizontalOpenness = function(widthAlign){
    const container = this._container
    const openness = this._openness

    switch(widthAlign){
        case "Left to Right":
            container.scale.x = openness / 255
            container.x = (1 - openness / 255)
            break
        case "Centered":
            container.scale.x = openness / 255
            container.x = (this.width / 2) * (1 - openness / 255)
            break
        case "Right to Left":
            container.scale.x = openness / 255
            container.x = this.width * (1 - openness / 255)
            break
        default:
            container.scale.x = 1
            container.x = 0
    }
}

Window_Base.prototype.updateVerticalOpenness = function(heightAlign){
    const container = this._container
    const openness = this._openness

    switch(heightAlign){
        case "Top to Bottom":
            container.scale.y = openness / 255
            container.y = (1 - openness / 255)
            break
        case "Centered":
            container.scale.y = openness / 255
            container.y = (this.height / 2) * (1 - openness / 255)
            break
        case "Bottom to Top":
            container.scale.y = openness / 255
            container.y = this.height * (1 - openness / 255)
            break
        default:
            container.scale.y = 1
            container.y = 0
    }
}

Window_Base.prototype.getTextSize = function(rawText){
    return this.textSizeEx(rawText.substring(0))
}

Window_Base.prototype.getTextWidth = function(rawText){
    return this.textSizeEx(rawText.substring(0)).width
}

Window_Base.prototype.getTextHeight = function(rawText){
    return this.textSizeEx(rawText.substring(0)).height
}

/* ----------------------------- WINDOW MESSAGE ----------------------------- */
Alias.Window_Message_initMembers = Window_Message.prototype.initMembers
Window_Message.prototype.initMembers = function(){
    Alias.Window_Message_initMembers.call(this)
    this.initEliBookMembers()
}

Window_Message.prototype.initEliBookMembers = function(){
    this.lastSessionId = -1
}

Alias.Window_Message_startMessage = Window_Message.prototype.startMessage
Window_Message.prototype.startMessage = function(){
    Alias.Window_Message_startMessage.call(this)
    if(this.isFirstMessage()){
        this.onFirstMessage()
    }else{
        this.onNotFirstMessage()
    }
}

Window_Message.prototype.isFirstMessage = function(){
    return this.lastSessionId !== $gameMessage.getSessionId()
}

Window_Message.prototype.onFirstMessage = function(){
    this.lastSessionId = $gameMessage.getSessionId()
}

Window_Message.prototype.onNotFirstMessage = function(){

}

Alias.Window_Message_terminateMessage = Window_Message.prototype.terminateMessage
Window_Message.prototype.terminateMessage = function(){
    Alias.Window_Message_terminateMessage.call(this)

    if(this.isLastMessage()){
        this.onLastMessage()
    }else{
        this.onNotLastMessage()
    }
}

Window_Message.prototype.isLastMessage = function(){
    const interpreter = $gameMessage.getInterpreter()

    if(interpreter){

        if(interpreter.isOnShowText()){
            return false
        }

        if(interpreter.isNextMessageWindowCommand()){
            return false
        }
        
        return true
    }else{

        return true
    }
}

Window_Message.prototype.onLastMessage = function(){
    $gameMessage.advanceSessionId()
}

Window_Message.prototype.onNotLastMessage = function(){

}

/* ------------------------------ CHOICE WINDOW ----------------------------- */
Alias.Window_ChoiceList_close = Window_ChoiceList.prototype.close
Window_ChoiceList.prototype.close = function() {
    Alias.Window_ChoiceList_close.call(this)
    this.clearMessageEventIds()
}

Window_ChoiceList.prototype.clearMessageEventIds = function() {
    $gameMessage.clearEventIds()
}

/* ------------------------------- SCROLL TEXT ------------------------------ */
Alias.Window_ScrollText_close = Window_ScrollText.prototype.close
Window_ScrollText.prototype.close = function() {
    Alias.Window_ScrollText_close.call(this)
    this.clearMessageEventIds()
}

Window_ScrollText.prototype.clearMessageEventIds = function() {
    $gameMessage.clearEventIds()
}

}

/**
 * @deprecated
 */
Eli.AnimeGroup = class {

    constructor(animations, data){
        this.paused = true
        this.direction = "normal"
        // this.direction = {
        //     type: "normal",
        //     current: "normal",
        // }
        this.progress = 0
        this.childProgress = []
        this.finished = false
        this.onStart = new Function()
        this.onUpdate = new Function()
        this.onComplete = new Function()
        this.childrens = []
        this.initialize(animations, data)
    }

    initialize(animations, data){
        this.paused = data.paused ?? true
        this.direction = data.direction ?? "normal"
        this.onStart = data.onStart || new Function()
        this.onUpdate = data.onUpdate || new Function()
        this.onComplete = data.onComplete || new Function()
        this.childrens = animations
        this.setGroupToAnimations()
    }

    setGroupToAnimations(){
        for(let i = 0; i < this.childrens.length; i++){
            const child = this.childrens[i]
            child.group = this
            child.groupIndex = i
        }
    }

    updateProgress(){
        this.progress = this.childProgress.reduce((previous, next) => previous + next, 0) / this.childrens.length
    }

    setAnimations(animations){
        this.childrens = animations
        this.setGroupToAnimations()
    }

    play(direction){
        this.direction = direction || this.direction
        
        this.onStart(this)

        for(const animation of this.childrens){
            animation.play(direction)
        }

        this.paused = false
        this.finished = false
    }

    restart(direction){
        this.direction = direction || this.direction

        this.onStart(this)

        for(const animation of this.childrens){
            animation.restart(direction)
        }

        this.finished = false
        this.paused = false
    }

    pause(){
        this.paused = true
    }

    resume(){
        this.paused = false
    }

    isPaused(){
        return this.paused
    }

    isRunning(){
        return this.childrens.some(anim => anim.isRunning())
    }

    update(){
        if(this.isPaused()) return

        for(const animation of this.childrens){
            animation.update()
        }
        
        if(this.childrens.every(item => item.isFinished()) && !this.finished){
            this.finished = true
            this.onComplete(this)
            
        }else if(!this.finished){
            this.onUpdate(this)
            this.updateProgress()
        }
    }

    isFinished(){
        return this.finished
    }

}

/**
 * @deprecated
 */
Eli.Anime = class {

    constructor(animeData){
        this.data = {
            target: null,
            direction: {current: 0, type: ""},
            loop: {current: 0, target: 0},
            value: {start: 0, current: 0, target: 0},
            propName: "",
            autoPlay: true,
            startDelay: {current: 0, target: 0},
            endDelay: {current: 0, target: 0},
            duration: {current: 0, target: 0},
            onStart: () => {},
            onUpdate: () => {},
            onComplete: () => {},
            progress: 0,
            easing: "",
        }
        this.group = null
        this.groupIndex = -1
        this.paused = false
        this.running = true
        this.initialize(animeData)
    }

    initialize(animeData){
        this.data = animeData
        this.prepareToStart()
    }

    prepareToStart(){
        const dirType = this.data.direction.type
        
        if(dirType === "alternate"){
            this.setAlternateDirection()
           
            if(this.data.loop.target === 0){
                this.data.loop.target = 1
            }
        }

        this.refreshCurrentValue()
        if(this.data.autoPlay){
            this.setPropValue(this.getStartValue())
        }
        
        this.data.duration.current = -1
    }

    setAlternateDirection(){
        const dir = this.data.direction.current === "normal" ? "reverse" : "normal"
        this.data.direction.current = dir
    }

    refreshCurrentValue(){
        this.data.value.current = this.getStartValue()
    }

    getStartValue(){
        const value = {
            "normal": this.data.value.start,
            "reverse": this.data.value.target,
        }[this.data.direction.current]

        return value
    }

    getTargetValue(){
        const value = {
            "normal": this.data.value.target,
            "reverse": this.data.value.start,
        }[this.data.direction.current]

        return value
    }

    setPropValue(value){
        this.data.target[this.data.propName] = value
    }

    update(){
        if(this.isPaused() || !this.data.autoPlay) return

        if(this.canDelayStart()){
            this.updateStartDelay()

        }else if(this.canStart()){
            this.onAnimeStart()

        }else if(this.canRun()){
            this.updateValue()
            
        }else if(this.canEnd()){
            this.onAnimeComplete()

        }else if(this.canDelayEnd()){
            this.updateEndDelay()

        }else if(this.needLoop()){
            this.updateLoop()

        }else{
            this.running = false
        }
    }

    canDelayStart(){
        return this.data.startDelay.current < this.data.startDelay.target
    }

    updateStartDelay(){
        this.data.startDelay.current++
        this.running = true
    }

    canStart(){
        return this.data.duration.current === -1
    }

    onAnimeStart(){
        this.data.onStart(this)
        this.data.duration.current = 0
    }

    canRun(){
        return this.data.duration.current < this.data.duration.target
    }

    updateValue(){
        if(this.isPropOnTarget()){
            this.data.duration.current = this.data.duration.target
            this.updateProgress(1)

        }else{
            this.data.duration.current++

            const elapsedTime = this.calculateTime()
            const value = this.processValue(this.getStartValue(), elapsedTime, this.getTargetValue())
            this.setPropValue(value)
            this.updateProgress(elapsedTime)
        }
        
        if(this.group){
            this.group.finished = false
        }

        this.onAnimeUpdate()
    }

    isPropOnTarget(){
        return this.getPropValue() === this.getTargetValue()
    }

    getPropValue(){
        return this.data.target[this.data.propName]
    }

    updateProgress(elapsedTime){
        this.data.progress = Math.floor(elapsedTime * 100)

        if(this.group){
            this.group.childProgress[this.groupIndex] = this.data.progress
            //this.group.updateProgress()
        }
    }

    calculateTime(){
        const elapsedTime = this.data.duration.current / this.data.duration.target
        return Eli.Easings.execute(this.data.easing, elapsedTime)
    }

    processValue(startValue, elapsedTime, endValue){
        return startValue + elapsedTime * (endValue - startValue)
    }

    onAnimeUpdate(){
        this.data.onUpdate(this)
    }

    canEnd(){
        return this.data.duration.current === this.data.duration.target
    }

    onAnimeComplete(){
        this.data.onComplete(this)
        this.data.duration.current++
    }

    canDelayEnd(){
        return this.data.endDelay.current < this.data.endDelay.target
    }

    resetTargetEndDelay(){
        this.data.endDelay.target = 0
    }

    updateEndDelay(){
        this.data.endDelay.current++
    }

    needLoop(){
        return this.data.loop.current < this.data.loop.target
    }

    updateLoop(){
        this.data.loop.current++
        this.restart()
    }

    play(direction){
        this.restart(direction)

        this.resume()
        this.data.autoPlay = true
    }

    restart(direction){
        this.resetData()

        if(direction){
            this.data.direction.current = direction

        }else if(this.data.direction.type === "alternate"){
            this.setAlternateDirection()
        }

        this.refreshCurrentValue()
        
        this.setPropValue(this.getStartValue())
        this.updateProgress(0)
    }

    resetData(){
        this.data.startDelay.current = 0
        this.data.endDelay.current = 0
        this.data.duration.current = -1
    }

    pause(){
        this.paused = true
    }

    resume(){
        this.paused = false
    }

    isFinished(){
        return this.running === false
    }

    isRunning(){
        return this.running && !this.isPaused()
    }

    isPaused(){
        return this.paused
    }
}

/**
 * @deprecated
 */
Eli.AnimeManager = {

    createDefaultData(){
        return {
            duration: 1,
            startDelay: 1,
            endDelay: 1,
            easing: "linear",
            direction: "normal",
            loop: 0,
            autoPlay: true,
            needSave: false,
        }
    },

    createAnimations(target, props, defaultData){
        const animations = []

        for(const name in props){
            const animeData = this.createAnimationData(target, name, props[name], defaultData)
            animations.push(new Eli.Anime(animeData))
        }

        return animations
    },

    createAnimationData(target, propName, propData, defData){
        const callBacks = this.initCallbacks(propData)
        const animeData = {
            target: target,
            propName: propName,
            value: this.initValue(propData, target[propName]),
            duration: this.initDuration(propData, defData),
            startDelay: this.initStartDelay(propData, defData),
            endDelay: this.initEndDelay(propData, defData),
            loop: this.initLoop(propData, defData),
            direction: this.initDirection(propData, defData),
            easing: propData.easing === undefined ? (defData.easing || "linear") : propData.easing,
            autoPlay: propData.autoPlay === undefined ? defData.autoPlay : propData.autoPlay,
            progress: 0,
            onStart: callBacks.onStart,
            onUpdate: callBacks.onUpdate,
            onComplete: callBacks.onComplete,
        }

        return animeData
    },

    initValue(propData, propValue){
        const value = {start: 0, target: 0}

        if(propData.value.constructor.name === "Array"){
            value.start = propData.value[0]
            value.target = propData.value[1]

        }else{
            value.start = propValue
            value.target = propData.value
        }

        return {
            start: value.start, 
            current: value.start, 
            target: value.target
        }
    },

    initDuration(propData, defData){
        return {
            current: -1, 
            target: (propData.duration === undefined ? defData.duration : propData.duration) || 1
        }
    },

    initStartDelay(propData, defData){
        return {
            current: 0, 
            target: (propData.startDelay === undefined ? defData.startDelay : propData.startDelay) || 1
        }
    },

    initEndDelay(propData, defData){
        return {
            current: 0, 
            target: (propData.endDelay === undefined ? defData.endDelay : propData.endDelay) || 1
        }
    },

    initLoop(propData, defData){
        const loop = propData.loop === undefined ? (defData.loop || 0) : propData.loop
        return {
            current: 0, 
            target: loop === true ? Infinity : loop
        }
    },

    initDirection(propData, defData){
        const dirType = propData.direction === undefined ? (defData.direction || "normal") : propData.direction
        return {
            type: dirType,
            current: dirType === "alternate" ? "normal" : dirType
        }
    },

    initCallbacks(propData){
        return {
            onStart: propData.onStart || new Function(),
            onUpdate: propData.onUpdate || new Function(),
            onComplete: propData.onComplete || new Function(),
        }
    },

}

/**
 * @deprecated
 */
Eli.AnimeTiny = class {

    constructor(targetObj, propName, targetValue, duration, easing, direction = "normal", loop = 0){
        this.initialize(targetObj, propName, targetValue, duration, easing, direction, loop)
    }

    initialize(targetObj, propName, targetValue, duration, easing, direction, loop){
        this.targetObj = targetObj
        this.propName = propName
        this.easing = easing
        this.targetDuration = duration
        this.targetDirection = direction
        this.targetValue = targetValue
        this.initialValue = this.targetObj[propName]
        this.loop = loop
        this.direction = "normal"
        this.duration = 0
        this.running = true
    }

    getStartValue(){
        return {
            "normal": this.initialValue,
            "reverse": this.targetValue,
        }[this.direction]
    }

    getTargetValue(){
        return {
            "normal": this.targetValue,
            "reverse": this.initialValue,
        }[this.direction]
    }

    setPropValue(value){
        this.targetObj[this.propName] = value
    }

    update(){
        if(this.duration < this.targetDuration){
            this.updateValue()
        }else if(this.loop !== 0){
            this.reverse()
        }else{
            this.running = false
        }
    }

    isRunning(){
        return this.running
    }

    refreshDirection(){
        if(this.targetDirection === "alternate"){
            this.direction = this.direction === "normal" ? "reverse" : "normal"
        }
    }

    reverse(){
        this.refreshDirection()
        this.duration = 0
        this.loop--
        this.running = true
    }

    updateValue(){
        this.duration++
        const elapsedTime = this.calculateTime()
        const value = this.processValue(this.getStartValue(), elapsedTime, this.getTargetValue())
        this.setPropValue(value)
        this.running = true
    }

    calculateTime(){
        const elapsedTime = this.duration / this.targetDuration
        return Eli.Easings.execute(this.easing, elapsedTime)
    }

    processValue(startValue, elapsedTime, endValue){
        return startValue + elapsedTime * (endValue - startValue)
    }

}

/**
 * @deprecated Must be replaced with Eli.Input
 */
Eli.KeyCodes = {

    keyboard: {
        backspace:8, tab:9, enter:13, shift:16, ctrl:17, alt:18, pausebreak:19, capslock:20, 
        esc:27, space:32, pageup:33, pagedown:34, end:35, home:36, 
        leftarrow:37, uparrow:38, rightarrow:39, downarrow:40, insert:45, delete:46, 
        0:48, 1:49, 2:50, 3:51, 4:52, 5:53, 6:54, 7:55, 8:56, 9:57, 
        a:65, b:66, c:67, d:68, e:69, f:70, g:71, h:72, i:73, j:74, k:75, l:76, m:77, n:78, 
        o:79, p:80, q:81, r:82, s:83, t:84, u:85, v:86, w:87, x:88, y:89, z:90, 
        leftwindowkey:91, rightwindowkey:92, selectkey:93, 
        numpad0:96, numpad1:97, numpad2:98, numpad3:99, numpad4:100, numpad5:101, 
        numpad6:102, numpad7:103, numpad8:104, numpad9:105, 
        multiply:106, add:107, subtract:109, decimalpoint:110, divide:111, 
        f1:112, f2:113, f3:114, f4:115, f5:116, f6:117, f7:118, f8:119, f9:120, f10:121, f11:122, f12:123,
        numlock:144, scrolllock:145, semicolon:186, equalsign:187, comma:188, dash:189, period:190,
        forwardslash:191, graveaccent:192, openbracket:219, backslash:220, closebracket:221, singlequote:222
    },

    gamepad: {
        a: 0, b: 1, x: 2, y: 3, lb: 4, rb: 5, lt: 6, rt: 7, select: 8,
        start: 9, l3: 10, r3: 11, up: 12, down: 13, left: 14, right: 15
    },

    mouse: {
        left: 0,
        middle: 1,
        right: 2,
        back: 3,
        forward: 5,
    },

    defaultKeyboard: [
        9, 13, 16, 17, 18, 27, 32, 33, 34, 37, 38, 39, 
        40, 45, 81, 87, 88, 90, 96, 98, 100, 102, 104, 120
    ],

    defaultGamepad: [0, 1, 2, 3, 4, 5, 12, 13, 14, 15],

    isDefaultKeyboard(keyCode){
        return this.defaultKeyboard.includes(keyCode)
    },

    isDefaultGamepad(keyCode){
        return this.defaultGamepad.includes(keyCode)
    },
}