const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.bound,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{BoundToLayout: 0},
	{"8Direction": 0},
	{ScrollTo: 0},
	{PlayerCar: 0},
	{Sprite2: 0},
	{Score: 0},
	{Text2: 0},
	{PlayButton: 0},
	{Text3: 0},
	{ObstacleCar: 0},
	{LoseButton: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	PlayerCar: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Score: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	PlayButton: class extends self.IButtonInstance {},
	Text3: class extends self.ITextInstance {},
	ObstacleCar: class extends self.ISpriteInstance {},
	LoseButton: class extends self.IButtonInstance {}
}