const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Sprite: 0},
	{Solid: 0},
	{Sprite2: 0},
	{Platform: 0},
	{knight: 0},
	{Keyboard: 0},
	{nextLevel1: 0},
	{Sprite3: 0},
	{Text: 0},
	{Text2: 0},
	{Button: 0},
	{nextLevel2: 0},
	{dieBar: 0},
	{Text3: 0},
	{Button2: 0},
	{nextLevel3: 0},
	{Sprite4: 0},
	{winBar: 0},
	{Sprite5: 0},
	{Text4: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	knight: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	nextLevel1: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	nextLevel2: class extends self.ISpriteInstance {},
	dieBar: class extends self.ISpriteInstance {},
	Text3: class extends self.ITextInstance {},
	Button2: class extends self.IButtonInstance {},
	nextLevel3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	winBar: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Text4: class extends self.ITextInstance {}
}