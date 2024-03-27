export class Player extends Phaser.Physics.Arcade.Sprite{
	yChange:number=0;
	constructor(
		scene: Phaser.Scene,
		x: number,
		y: number,
		texture: string ,
		frame?: string | number | undefined
	){
		super(scene,x,y,texture,frame)
		scene.add.existing(this)
		scene.physics.add.existing(this)

		this.initPhisics();
		this.animations()
	}
	initPhisics(){
		this.setBounce(0.2)
		this.scale = 5
		this.refreshBody()
		this.body.checkCollision.up =false
		this.body.checkCollision.right=false
		this.body.checkCollision.left=false
		this.setGravityY(300)
	}
	animations(){
		this.anims.create({
			key:'idle',
			frames: this.anims.generateFrameNumbers('RoboFace', { start: 0, end: 1 }),
			frameRate: 5,
			repeat: -1
		});
	}
	update(cursor:Phaser.Types.Input.Keyboard.CursorKeys): void {
		this.anims.play('idle',true)
		this.yChange = Math.max(this.yChange,Math.floor(this.y-this.yChange))
		if(this.x>this.scene.sys.canvas.width){
			this.x =0;
		}
		if(this.x<0){
			this.x =this.scene.sys.canvas.width;
		}
		if(cursor.left.isDown){
			this.setVelocityX(-160)
		}
		else if(cursor.right.isDown){
			this.setVelocityX(160)
		}
		else{
			this.setVelocityX(0)
		}
		if (cursor.up.isDown && this.body.touching.down){
			this.setVelocityY(-330);
		}
	    
	}
}
