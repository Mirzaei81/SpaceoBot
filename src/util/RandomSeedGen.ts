import {Math, Physics, Scene} from "phaser"
export function randomSeed(scene:Scene,Group:Physics.Arcade.StaticGroup,PlatformWidth:number){
	let {height,width} = scene.sys.canvas
	let gap = height/4
	let vecX = Math.FloorTo(Math.Between(0,width-PlatformWidth))
	let vecY = Group.getLast() - gap
	Group.create(vecX,vecY,"SimplePlatform").setOrigin(0,0).setScale(2).refreshBody();
}
