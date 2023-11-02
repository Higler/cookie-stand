'use strict';

const location = document.getElementById('location').value;
const hours = parseInt(document.getElementById('hours').value);
const phoneNumber = parseInt(document.getElementById('phone-number').value);
const address = parseFloat(document.getElementById('address').value);

const newCookieStand = new CookieInfo(location, hours, phoneNumber, address);

newCookieStand.render();


function CookieInfo(location, hours, phoneNumber, address) {
  this.location = location;
  this.hours = hours;
  this.phoneNumber = phoneNumber;
  this.address = address;
}

const seattle = new CookieInfo('Seattle', '6am - 7pm', '123-456-7890', 'None');
const tokyo = new CookieInfo('Tokyo', '6am - 7pm', '444-444-4444', 'None');
const dubai = new CookieInfo('Dubai', '6am - 7pm', '555-555-5555', 'None');
const paris = new CookieInfo('Paris', '6am - 7pm', '777-777-7777', 'None');
const lima = new CookieInfo('Lima', '6am - 7pm', '0987-654-321', 'None');

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
