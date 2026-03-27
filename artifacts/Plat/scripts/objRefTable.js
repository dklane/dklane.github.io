const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Particles,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Platform.Acts.SetAcceleration,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{Keyboard: 0},
	{Nextlvlbutton: 0},
	{Mouse: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{Player: 0},
	{EndFlag: 0},
	{Spawn: 0},
	{Lava: 0},
	{RespawnParticles: 0},
	{Solid: 0},
	{TBground: 0},
	{BG: 0},
	{Player2: 0},
	{lvl1endtxt: 0},
	{StartText: 0}
];

self.InstanceType = {
	Keyboard: class extends self.IInstance {},
	Nextlvlbutton: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Player: class extends self.ISpriteInstance {},
	EndFlag: class extends self.ISpriteInstance {},
	Spawn: class extends self.ISpriteInstance {},
	Lava: class extends self.ISpriteInstance {},
	RespawnParticles: class extends self.IParticlesInstance {},
	TBground: class extends self.ITiledBackgroundInstance {},
	BG: class extends self.ISpriteInstance {},
	Player2: class extends self.ISpriteInstance {},
	lvl1endtxt: class extends self.ITextInstance {},
	StartText: class extends self.ITextInstance {}
}