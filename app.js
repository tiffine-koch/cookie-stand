var time = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var pikePlace = {
	location: 'Pike Place Market',
	minCustHour: 17,
	maxCustHour: 88,
	avgCookiesCust: 5.2,
	totalCookies: 0,
	dailyList: [],
	randomCustHour: function(min, max) {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	cookiesPerHour: function() {
		return Math.floor(this.randomCustHour(this.minCustHour, this.maxCustHour) * this.avgCookiesCust);
	},

	makeUL: function(arr) {
		for(var i = 0; i < arr.length; i++) {
			this.dailyList.push(this.cookiesPerHour());
			this.totalCookies += this.cookiesPerHour();
			var listPikePlace = document.getElementById('pikePlace');
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(arr[i] + ': ' +  this.dailyList[i] + ' cookies'));
			listPikePlace.appendChild(li);
		}
	},
	makeH2: function() {
		var listPikePlace = document.getElementById('totalPikePlace');
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(this.totalCookies + ' cookies'));
		listPikePlace.appendChild(li);
	},
}
pikePlace.makeUL(time)
pikePlace.makeH2();

var seatac = {
	location: 'Seatac',
	minCustHour: 6,
	maxCustHour: 44,
	avgCookiesCust: 1.2,
	totalCookies: 0,
	dailyList: [],
	randomCustHour: function(min, max) {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	cookiesPerHour: function() {
		return Math.floor(this.randomCustHour(this.minCustHour, this.maxCustHour) * this.avgCookiesCust);
	},

	makeUL: function(arr) {
		for(var i = 0; i < arr.length; i++) {
			this.dailyList.push(this.cookiesPerHour());
			this.totalCookies += this.cookiesPerHour();
			var listSeatac = document.getElementById('seatac');
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(arr[i] + ': ' +  this.dailyList[i] + ' cookies'));
			listSeatac.appendChild(li);
		}
	},
	makeH2: function() {
		var listSeatac = document.getElementById('totalSeatac');
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(this.totalCookies + ' cookies'));
		listSeatac.appendChild(li);
	},
}
seatac.makeUL(time)
seatac.makeH2();

var southcenter = {
	location: 'Southcenter',
	minCustHour: 11,
	maxCustHour: 38,
	avgCookiesCust: 1.9,
	totalCookies: 0,
	dailyList: [],
	randomCustHour: function(min, max) {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	cookiesPerHour: function() {
		return Math.floor(this.randomCustHour(this.minCustHour, this.maxCustHour) * this.avgCookiesCust);
	},

	makeUL: function(arr) {
		for(var i = 0; i < arr.length; i++) {
			this.dailyList.push(this.cookiesPerHour());
			this.totalCookies += this.cookiesPerHour();
			var listSouthcenter = document.getElementById('southcenter');
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(arr[i] + ': ' +  this.dailyList[i] + ' cookies'));
			listSouthcenter.appendChild(li);
		}
	},
	makeH2: function() {
		var listSouthcenter = document.getElementById('totalSouthcenter');
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(this.totalCookies + ' cookies'));
		listSouthcenter.appendChild(li);
	},
}
southcenter.makeUL(time)
southcenter.makeH2();

var bellevue = {
	location: 'Bellevue',
	minCustHour: 20,
	maxCustHour: 48,
	avgCookiesCust: 3.3,
	totalCookies: 0,
	dailyList: [],
	randomCustHour: function(min, max) {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	cookiesPerHour: function() {
		return Math.floor(this.randomCustHour(this.minCustHour, this.maxCustHour) * this.avgCookiesCust);
	},

	makeUL: function(arr) {
		for(var i = 0; i < arr.length; i++) {
			this.dailyList.push(this.cookiesPerHour());
			this.totalCookies += this.cookiesPerHour();
			var listBellevue = document.getElementById('bellevue');
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(arr[i] + ': ' +  this.dailyList[i] + ' cookies'));
			listBellevue.appendChild(li);
		}
	},
	makeH2: function() {
		var listBellevue = document.getElementById('totalBellevue');
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(this.totalCookies + ' cookies'));
		listBellevue.appendChild(li);
	},
}
bellevue.makeUL(time)
bellevue.makeH2();

var alki = {
	location: 'Alki',
	minCustHour: 3,
	maxCustHour: 24,
	avgCookiesCust: 2.6,
	totalCookies: 0,
	dailyList: [],
	randomCustHour: function(min, max) {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	cookiesPerHour: function() {
		return Math.floor(this.randomCustHour(this.minCustHour, this.maxCustHour) * this.avgCookiesCust);
	},

	makeUL: function(arr) {
		for(var i = 0; i < arr.length; i++) {
			this.dailyList.push(this.cookiesPerHour());
			this.totalCookies += this.cookiesPerHour();
			var listAlki = document.getElementById('alki');
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(arr[i] + ': ' +  this.dailyList[i] + ' cookies'));
			listAlki.appendChild(li);
		}
	},
	makeH2: function() {
		var listAlki = document.getElementById('totalAlki');
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(this.totalCookies + ' cookies'));
		listAlki.appendChild(li);
	},
}
alki.makeUL(time)
alki.makeH2()