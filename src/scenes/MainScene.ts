import {GameObjects, Scene,Math}from "phaser";
import {Player} from "../Objects/Player"
import {randomSeed} from "../util/RandomSeedGen"

export class MainScene extends Scene{
	player!:Player
	score:number=0
	cursor!:Phaser.Types.Input.Keyboard.CursorKeys
	scoreText!:GameObjects.Text
	platforms!:Phaser.Physics.Arcade.StaticGroup
	width!:number
	height!:number
	cameray:number=99999;
	constructor(){
		super("MainScene")
	}
	preload(){
		this.load.image('sky', '/images/nightbackgroundwithmoon.png');
		this.load.spritesheet('BeltPlatform', '/images/BPlatform.png',{frameWidth:32,frameHeight:16,spacing:1});
		this.load.spritesheet('RoboFace', '/images/RobotFace-sheet.png',{frameWidth:16,frameHeight:16,spacing:1});
		this.load.spritesheet('BreakablePlatform', '/images/BreakablePlatform-sheet.png',{frameWidth:32,frameHeight:16,spacing:1});
		this.load.image('SimplePlatform', '/images/SimplePlatform.png');
	}
	create(){
		this.width=this.sys.canvas.width
		this.height=this.sys.canvas.height
		this.add.image(0,0,'sky').setOrigin(0,0)
		this.player = new Player(this,this.platforms.get().x,this.platforms.get().y-300,'RoboFace')
		this.physics.add.collider(this.player,this.platforms)
		this.scoreText = this.add.text(16, 16, 'score: 0',{ fontSize: '32px', fill: '#000' });
	    this.cursor = this.input.keyboard.createCursorKeys();
	}
	update(): void {
		this.player.update(this.cursor)
		this.physics.world.setBounds(0,-this.player.yChange,this.width,this.height-this.player.yChange)
		this.camera.y=this.cameray
		if(this.player.y-50<0){
			randomSeed(this,this.platforms,96)
		}
	}
	createPlatforms(){
		let platforms = this.game.
		let gap = this.height/4
		let vecX = Math.FloorTo(Math.Between(0,width-PlatformWidth))
		let vecY = Group.getLast() - gap
		Group.create(vecX,vecY,"SimplePlatform").setOrigin(0,0).setScale(2).refreshBody();
	}
	createPlatform(x:number,y:number,width:number){

	}
}
