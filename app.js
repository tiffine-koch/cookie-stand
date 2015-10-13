function CookieStand(place, minCustHour, maxCustHour, avgCookCust) {
  this.place = place;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookCust = avgCookCust;
  this.totalCookiesPerDay = 0;
  this.cookiesPerHour = [];

  this.randCustHour = function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  };
  
  this.getCookiesPerHour = function() {
    var hourly = 0;
    hourly = Math.floor(this.randCustHour() * this.avgCookCust);
    this.cookiesPerHour.push(hourly);
    return hourly;
  };
  
  this.getTotalCookies = function() {
    var totalCookies = 0;
    for (var i = 0; i < 8; i++) {
      totalCookies += this.getCookiesPerHour();
    }
    this.totalCookiesPerDay = totalCookies;
    return totalCookies;
  };
  
  this.getTotalCookies();

  function makeTable(place, cookiesPerHour, totalCookiesPerDay) {
    var table = document.getElementById('dailyList');
    var row = document.createElement ('tr');
    table.appendChild(row);

    var tdPlace = document.createElement('td');
    tdPlace.textContent = place;
    row.appendChild(tdPlace);

    for(var i = 0; i < cookiesPerHour.length; i++) {
      var tdCookiesPerHour = document.createElement('td');
      tdCookiesPerHour.textContent = cookiesPerHour[i]; 
      row.appendChild(tdCookiesPerHour);
    }
     var tdTotal = document.createElement('td');
     tdTotal.textContent = totalCookiesPerDay;
     row.appendChild(tdTotal); 
   }
   makeTable(this.place, this.cookiesPerHour, this.totalCookiesPerDay);
};

var pikePlace = new CookieStand('Pike Place', 17, 88, 5);
var seatac = new CookieStand('Seatac', 6, 44, 1);
var southcenter = new CookieStand('Southcenter', 11, 38, 1);
var bellevue = new CookieStand('Bellevue', 20, 48, 3);
var alki = new CookieStand('Alki', 3, 24, 2);

var newStoreData = function(event) {

event.preventDefault();

var place = document.getElementById('place');
var minCustHour = document.getElementById('minCustHour');
var maxCustHour = document.getElementById('maxCustHour');
var avgCookCust = document.getElementById('avgCookCust');

if (!place.value || !minCustHour.value || !maxCustHour.value || !avgCookCust.value) {
  return alert('Please enter a value in this field');
  } else {
console.log(place.value);
console.log(minCustHour.value);
console.log(maxCustHour.value);
console.log(avgCookCust.value);
  };

 var newCookieStand = new CookieStand(place.value, minCustHour.value, maxCustHour.value, avgCookCust.value)

};

//var addCookiestand = getElementById(addCookiestand);
var submit = document.getElementById('submit');
submit.addEventListener('click', newStoreData);

