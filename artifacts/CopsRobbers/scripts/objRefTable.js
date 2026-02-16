const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Behaviors.custom,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Behaviors.jumpthru,
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
	{"8Direction": 0},
	{BoundToLayout: 0},
	{ScrollTo: 0},
	{Sprite: 0},
	{Custom: 0},
	{Sine: 0},
	{Sprite7: 0},
	{Jumpthru: 0},
	{Text: 0},
	{Text2: 0},
	{Text3: 0},
	{Sprite8: 0},
	{TiledBackground2: 0},
	{Text4: 0},
	{Text5: 0},
	{Text6: 0},
	{GoalCatchAllTheRobbersBeforeTheyEscapeControlsUseArrowKeysOrWASDToMoveYourCopUpDownLeftAndRight: 0},
	{Button: 0},
	{TiledBackground3: 0},
	{Text7: 0},
	{Text8: 0},
	{score: 0},
	{Variable1: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	Text3: class extends self.ITextInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Text4: class extends self.ITextInstance {},
	Text5: class extends self.ITextInstance {},
	Text6: class extends self.ITextInstance {},
	GoalCatchAllTheRobbersBeforeTheyEscapeControlsUseArrowKeysOrWASDToMoveYourCopUpDownLeftAndRight: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	Text7: class extends self.ITextInstance {},
	Text8: class extends self.ITextInstance {}
}