//=============================================================================
// KITA_MessageExt.js
//=============================================================================

//=============================================================================
//  Contact Information
//=============================================================================
/*
*
* Contact me via twitter: EISKino, or on the rpg maker forums.
* Username on forums: Kino.
*
* Forum Link: http://forums.rpgmakerweb.com/index.php?/profile/75879-kino/
* Old Website Link: http://endlessillusoft.com/
* New Website Link: https://kinocreates.io/ 
* Twitter Link: https://twitter.com/EISKino
* Patreon Link: https://www.patreon.com/EISKino
*
* Hope this plugin helps, and enjoy!
* --Kino
*/

// Generated by Haxe 4.2.0-rc.1+1c018c009
(function ($global) { "use strict";
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0;
		this.array = array;
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
function plugins_KITA_$MessageExt_main() {
	
//=============================================================================
// Build Date: 2020-07-04 06:41:27
//=============================================================================
      
	/*:
     
   @author Kino
   @plugindesc An extension to the core Message Window functionality
   to support Visual Novels <KITA_MessageExt>.
   */
	Window_Message.prototype.setBackgroundTexture = function() {
		this;
	};
	let winMsgInitialize = Window_Message.prototype.initialize;
	Window_Message.prototype.initialize = function() {
		let self = this;
		winMsgInitialize.call(self);
		let txtSpeed = plugins_KITA_$MessageExt_textSpeed;
		self.originalTextSpeed = txtSpeed;
		self.activeTextSpeed = txtSpeed;
	};
	Window_Message.prototype.processEscapeCharacter = function(code,textState) {
		let self = this;
		switch(code) {
		case "!":
			self.startPause();
			break;
		case "$":
			self._goldWIndow.open();
			break;
		case ".":
			self.startWait(15);
			break;
		case "<":
			self._lineShowFast = false;
			break;
		case ">":
			self._lineShowFast = true;
			break;
		case "TS":
			self.updateTextSpeed(self.obtainEscapeParam(textState));
			break;
		case "^":
			self._pauseSkip = true;
			break;
		default:
			Window_Base.prototype.processEscapeCharacter.call(self,code,textState);
		}
	};
	Window_Message.prototype.updateTextSpeed = function(value) {
		this.activeTextSpeed = value;
	};
	let WinBaseProcessNormChar = Window_Base.prototype.processNormalCharacter;
	Window_Message.prototype.processNormalCharacter = function(textState) {
		let self = this;
		WinBaseProcessNormChar.call(self,textState);
		self.startWait(self.activeTextSpeed);
	};
	let winMessageTerminateMessage = Window_Message.prototype.terminateMessage;
	Window_Message.prototype.terminateMessage = function(_) {
		let self = this;
		self.activeTextSpeed = self.originalTextSpeed;
		winMessageTerminateMessage.call(self);
	};
}
class utils_Fn {
	static proto(obj) {
		return obj.prototype;
	}
}
{
}
var plugins_KITA_$MessageExt_textSpeed = 5;
plugins_KITA_$MessageExt_main();
})({});

//# sourceMappingURL=KITA_MessageExt.js.map