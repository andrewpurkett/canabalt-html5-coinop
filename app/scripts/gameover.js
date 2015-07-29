'use strict';

function GameOver(width, height, distance, player) {
	PIXI.DisplayObjectContainer.call(this);

	var gameover = 0.01;
	var h = 88;

	var ggg = new PIXI.Graphics();

	ggg.beginFill(0xff35353d);
	ggg.drawRect(0, h+35, width, 64);

	ggg.beginFill(0xfffffff);
	ggg.drawRect(0, h+35+64, width, 2);

	ggg.beginFill(0xff35353d);
	ggg.drawRect(0, height - 30, width, 30);

	this.addChild(ggg);

	var gameover = new PIXI.Sprite.fromFrame('raw/gameover.png');
	gameover.x = Math.floor((width - 390) / 2);
	gameover.y = h;

	this.addChild(gameover);

	var epitaph = Util.format('You ran {0}m before ', distance) + player.epitaph;

	var epitaphText = new PIXI.Text(epitaph,
									{
										font: '16px Flixel',
										fill: '#ffffff',
										align: 'center',
										wordWrap: true,
										wordWrapWidth: width
									});

	epitaphText.x = Math.floor((width - 390 + 100) / 2);
	epitaphText.y = h + 50;
	epitaphText.width = width;
	epitaphText.scale.x = 1;
	epitaphText.scale.y = 1;

	this.addChild(epitaphText);

	var creditCountText = new PIXI.Text('Credits: ' + window.credits.count(),
										{
											font: '8px Flixel',
											fill: '#ffffff',
											align: 'center'
										});

	creditCountText.x = 15;
	creditCountText.y = 5;
	creditCountText.width = width;
	creditCountText.scale.x = 1;
	creditCountText.scale.y = 1;

	this.addChild(creditCountText);

	var restartGameText = new PIXI.Text('Loading...',
						 {
							 font: '16px Flixel',
							 fill: '#ffffff',
							 align: 'right',
						 });
	restartGameText.x = 10;
	restartGameText.y = height - 25;

	this.addChild(restartGameText);

	setInterval(this.updateCreditCount.bind(creditCountText), 100);
	setInterval(this.updateRestartText.bind(restartGameText), 100);
};

GameOver.constructor = GameOver;
GameOver.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);


GameOver.prototype.updateRestartText = function() {
	this.setText((window.credits.ready()) ?
		'Press start to retry your daring escape.':
		'Insert coin to retry your daring escape.');
}

GameOver.prototype.updateCreditCount = function() {
	this.setText("Credits: " + window.credits.count());
}
