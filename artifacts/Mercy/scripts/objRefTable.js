const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.destroy,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Solid: 0},
	{Tilemap2: 0},
	{Platform: 0},
	{DestroyOutside: 0},
	{Sprite: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Tilemap2: class extends self.ITilemapInstance {},
	Sprite: class extends self.ISpriteInstance {}
}