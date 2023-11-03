'use strict';

document.getElementById('cookie-stand-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const location = document.getElementById('location').value;
  const minCustomers = parseInt(document.getElementById('min-customers').value);
  const maxCustomers = parseInt(document.getElementById('max-customers').value);
  const avgCookiesPerCustomer = parseFloat(document.getElementById('avg-cookies').value);

  const newCookieStand = new CookieShop(location, minCustomers, maxCustomers, avgCookiesPerCustomer);
  newCookieStand.calculateHourlySales();

  newCookieStand.render();

  document.getElementById('cookie-stand-form').reset();
});

function CookieShop(location, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlySales = [];
  this.dailyTotal = 0;

  this.calculateHourlySales = function () {
    for (let hour = 6; hour <= 19; hour++) { // Change 20 to 19 to go from 6 AM to 7 PM
      const customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      const cookiesSold = Math.round(customers * this.avgCookiesPerCustomer);
      this.hourlySales.push(cookiesSold);
      this.dailyTotal += cookiesSold;
    }
  };

  this.render = function () {
    const salesTable = document.getElementById('sales-table');
    const locationRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerCell.textContent = this.location;
    locationRow.appendChild(headerCell);

    for (let hour = 0; hour <= 14; hour++) {
      const cell = document.createElement('td');
      if (hour === 14) {
        cell.textContent = this.dailyTotal;
      } else {
        cell.textContent = this.hourlySales[hour];
      }
      locationRow.appendChild(cell);
    }

    salesTable.querySelector('tbody').appendChild(locationRow);
  };
}

const seattle = new CookieShop('Seattle', 23, 65, 6.3);
const tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
const dubai = new CookieShop('Dubai', 11, 38, 3.7);
const paris = new CookieShop('Paris', 20, 38, 2.3);
const lima = new CookieShop('Lima', 2, 16, 4.6);

function displayTotals() {
  const totalsRow = document.getElementById('totals');

  if (totalsRow) {
    let dailyTotal = 0;

    for (let hour = 0; hour <= 13; hour++) {
      let hourlyTotal = 0;

      for (const shop of [seattle, tokyo, dubai, paris, lima]) {
        hourlyTotal += shop.hourlySales[hour];
      }

      dailyTotal += hourlyTotal;

      const cell = document.createElement('td');
      cell.textContent = hourlyTotal;
      totalsRow.appendChild(cell);
    }

    const totalCell = document.createElement('td');
    totalCell.textContent = dailyTotal;
    totalsRow.appendChild(totalCell);
  }
}


const salesTable = document.getElementById('sales-table');
const headerRow = document.createElement('tr');
headerRow.style = 'background-color: gray; color: white;';
let locationHeader = document.createElement('th');
locationHeader.innerHTML = 'Location';
headerRow.appendChild(locationHeader);
for (let hour = 6; hour <= 19; hour++) {
  const headerCell = document.createElement('th');
  if (hour === 12) {
    headerCell.textContent = '12 PM';
  } else if (hour < 12) {
    headerCell.textContent = hour + ' AM';
  } else {
    headerCell.textContent = (hour - 12) + ' PM';
  }
  headerRow.appendChild(headerCell);
}
let totalHeader = document.createElement('th');
totalHeader.innerHTML = 'Daily Location total';
headerRow.appendChild(totalHeader);
salesTable.querySelector('thead').appendChild(headerRow);

seattle.calculateHourlySales();
tokyo.calculateHourlySales();
dubai.calculateHourlySales();
paris.calculateHourlySales();
lima.calculateHourlySales();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

displayTotals();
