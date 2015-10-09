var CookieStand = function(place, minCustHour, maxCustHour, avgCookCust, cookiesPerHour, totalCookies, dailyList ) {
  this.place = place;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookCust = avgCookCust;
  this.cookiesPerHour = cookiesPerHour;

  this.randCustHour = function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
​  };
  
  this.cookiesPerHour = function() {
    return Math.floor(this.randCustHour() * this.avgCookCust);
  };
  
  this.runTotalCookies = function() {
    this.totalCookies = [];
    for(var i = 0; i < 8; i++) {
      CookieStand.totalCookies.push(CookieStand.totalCookHour());
      console.log(CookieStand.totalCookies);
    };

  this.makeUL = function(arr) {
    for(var i = 0; i < this.hoursInDay.length; i++) {
      this.cookiesPerHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
      this.totalValue += this.totalCookHour[i];
      console.log(this.place + ' ' + this.hoursInDay[i] + ': ' + this.cookiesPerHour[i]);
      console.log(this.place + ' run.totalCookies: ' + this.totalCookies);
    };
  };
};
​
  this.hoursInDay = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
  this.placeList = ['pikePlace', 'seatac', 'southcenter', 'bellevue', 'alki'],
  this.cookiesPerHour = [];
  this.dailyList = [];
  this.totalCookies = 0;

  this.makeH2 = function(arr)
    for(var i = 0; i < arr.length; i++) {
      this.dailyList.push(this.cookiesPerHour());
      this.totalCookies += this.cookiesPerHour();
      var list = document.getElementById('place');
      var li = document.createElement('li');
      item.appendChild(document.createTextNode(arr[i] + ': ' +  this.dailyList[i] + ' cookies'));
      list.appendChild(li);

var pikePlace = new CookieStand('pikePlace', 17, 88, 5.2);
var seatac = new CookieStand('seatac', 6, 44, 1.2);
var southcenter = new CookieStand('southcenter', 11, 38, 1.9);
var bellevue = new CookieStand('bellevue', 20, 48, 3.3);
var alki = new CookieStand('alki', 3, 24, 2.6);

for (var i = 0; i < placeNames.length; i++) {
  placeList[i].makeUL();
};