var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GuaGua = (function (_super) {
    __extends(GuaGua, _super);
    function GuaGua() {
        return _super.call(this) || this;
    }
    GuaGua.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GuaGua.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.aaa();
    };
    GuaGua.prototype.aaa = function () {
        console.log("init");
        this.sp_cover = new egret.Sprite;
        this.sp_cover.graphics.beginFill(0xcccccc);
        this.sp_cover.graphics.drawRect(0, 0, 1000, 1000);
        this.sp_cover.graphics.endFill();
        this.addChild(this.sp_cover);
        this.sp_cover.touchEnabled = true;
        // this.sp_cover.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapHandler, this);
        // this.sp_cover.addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.tapHandler,this);
        this.sp_cover.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.test, this);
        this.sp_cover.addEventListener(egret.TouchEvent.TOUCH_END, this.test1, this);
        this.sp_cover.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.tapHandler, this);
        this.sp = new egret.Sprite;
        var i = new egret.Bitmap();
        i.texture = RES.getRes('bg_jpg');
        this.sp.addChild(i);
        this.addChild(this.sp);
        this.sp_mask = new egret.Sprite;
        this.addChild(this.sp_mask);
        this.sp.mask = this.sp_mask;
    };
    GuaGua.prototype.test = function () {
        console.log("按下");
        //this.sp_cover.addEventListener(egret.TouchEvent.ENTER_FRAME,this.tapHandler,this);
    };
    GuaGua.prototype.test1 = function () {
        console.log("松开");
        //this.sp_cover.removeEventListener(egret.TouchEvent.ENTER_FRAME,this.tapHandler,this);
    };
    GuaGua.prototype.tapHandler = function (e) {
        var t_x = e.stageX;
        var t_y = e.stageY;
        var sp1 = new egret.Sprite;
        sp1.graphics.beginFill(0x00ff00);
        //sp1.graphics.drawRect(0, 0, 20, 20);
        sp1.graphics.drawCircle(0, 0, 40);
        sp1.graphics.endFill();
        this.sp_mask.addChild(sp1);
        sp1.x = t_x;
        sp1.y = t_y;
        this.sp.mask = this.sp_mask;
    };
    return GuaGua;
}(eui.Component));
__reflect(GuaGua.prototype, "GuaGua", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GuaGua.js.map