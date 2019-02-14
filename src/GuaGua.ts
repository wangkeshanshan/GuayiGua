class GuaGua extends eui.Component implements eui.UIComponent {


	private sp: egret.Sprite;
	private sp_cover: egret.Sprite;
	private sp_mask: egret.Sprite;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.aaa();
	}
	private aaa(): void {
		console.log("init");
		this.sp_cover = new egret.Sprite;
		this.sp_cover.graphics.beginFill(0xcccccc);
		this.sp_cover.graphics.drawRect(0, 0, 1000, 1000);
		this.sp_cover.graphics.endFill();
		this.addChild(this.sp_cover);
		this.sp_cover.touchEnabled = true;
		// this.sp_cover.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapHandler, this);
		// this.sp_cover.addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.tapHandler,this);
		this.sp_cover.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.test,this);
		this.sp_cover.addEventListener(egret.TouchEvent.TOUCH_END,this.test1,this);
		this.sp_cover.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.tapHandler,this);
		this.sp = new egret.Sprite;
		let i = new egret.Bitmap();
		i.texture = RES.getRes('bg_jpg');
		this.sp.addChild(i);
		this.addChild(this.sp);

		this.sp_mask = new egret.Sprite;
		this.addChild(this.sp_mask);
		this.sp.mask = this.sp_mask;
	}

	private test(){
		console.log("按下");
		//this.sp_cover.addEventListener(egret.TouchEvent.ENTER_FRAME,this.tapHandler,this);
	}
	private test1(){
		console.log("松开");
		//this.sp_cover.removeEventListener(egret.TouchEvent.ENTER_FRAME,this.tapHandler,this);
	
	}

	private tapHandler(e: egret.TouchEvent): void {
		var t_x: number = e.stageX;
		var t_y: number = e.stageY;
		var sp1: egret.Sprite = new egret.Sprite;
		sp1.graphics.beginFill(0x00ff00);
		//sp1.graphics.drawRect(0, 0, 20, 20);
		sp1.graphics.drawCircle(0,0,40);
		sp1.graphics.endFill();
		this.sp_mask.addChild(sp1);
		sp1.x = t_x;
		sp1.y = t_y;
		this.sp.mask = this.sp_mask;
	}
}