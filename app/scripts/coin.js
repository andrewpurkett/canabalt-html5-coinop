function Coin() {
	this.coinCount = 0;

	this.bindKeyHandlers();
}

Coin.prototype.insert = function() {
	console.log("credit added");
	if (this.coinCount < 99) {
		this.coinCount++;
	}
}

Coin.prototype.ready = function() {
	return (this.coinCount > 0);
}

Coin.prototype.use = function() {
	if (this.coinCount > 0) {
		this.coinCount--;
		return true;
	} else {
		return false;
	}
}

Coin.prototype.count = function() {
	if (typeof this.coinCount !== 'number') {
		this.coinCount = 0;
	}

	if (this.coinCount < 0) {
		this.coinCount = 0;
	}

	if (this.coinCount > 99) {
		this.coinCount = 99;
	}

	return this.coinCount;
}

Coin.prototype.bindKeyHandlers = function() {
	kd.SHIFT.up(this.insert.bind(this));
}
