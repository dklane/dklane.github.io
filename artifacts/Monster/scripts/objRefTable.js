const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Tilemap,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
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
	{human: 0},
	{Tilemap: 0},
	{Tilemap2: 0},
	{Sprite: 0},
	{Platform: 0},
	{BoundTo: 0},
	{ScrollTo: 0},
	{monster: 0},
	{Solid: 0},
	{wall: 0},
	{Text: 0},
	{Text2: 0},
	{Text3: 0},
	{Text4: 0},
	{Text5: 0},
	{Text6: 0},
	{Text7: 0},
	{Button: 0},
	{Text8: 0},
	{score: 0}
];

self.InstanceType = {
	human: class extends self.ISpriteInstance {},
	Tilemap: class extends self.ITilemapInstance {},
	Tilemap2: class extends self.ITilemapInstance {},
	Sprite: class extends self.ISpriteInstance {},
	monster: class extends self.ISpriteInstance {},
	wall: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	Text3: class extends self.ITextInstance {},
	Text4: class extends self.ITextInstance {},
	Text5: class extends self.ITextInstance {},
	Text6: class extends self.ITextInstance {},
	Text7: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	Text8: class extends self.ITextInstance {}
}