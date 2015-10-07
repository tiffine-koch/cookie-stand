//var one = document.getElementById('one');
//var cookiesPikePlace = document.getElementById('cookiesPikePlace');
//var listPikePlace = document.getElementById('listPikePlace');
//var cookiesperhourPP = 
//var totalCookiesPikePlace = document.getElementById('totalCookiesPikePlace')

var pikePlace = {
	location: 'Pike Place Market',
	minCustHour: 17,
	maxCustHour: 88,
	avgCookiesCust: 5.2,
	randomCustHour: function(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	totalCookieHour: function() {
	return (Math.floor(this.randomCustHour(this.minCustHour, this.maxCustHour) * this.avgCookiesCust));
	}
}
	dailyList[];

	var hoursInDay = [10, 11, 12, 1, 2, 3, 4, 5 ,6];

	buildList: function(){
		for(var i = 0; i , 8, i++){
		this.dailyList.push(this.totalCookieHour());	
		}
	}

	makeUL: function(arr) {
		for(var i = 0; i < arr.length; i++) {
			var listPikePlace = document.getElementById('pikePlace');
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(this.hoursInDay[i] + ': ' +  this.totalCookieHour + 'cookies'));
			listPikePlace.appendChild(li);
		}
	}

	pikePlace.makeUL(hoursInDay); // calls all constructors 
	dailyCookies = dailyCookies +this.totalCookieHour[i];

