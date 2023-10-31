function CookieShop(location, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlySales = [];
  this.dailyTotal = 0;

  this.calculateHourlySales = function () {
    for (let hour = 6; hour <= 20; hour++) {
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

seattle.calculateHourlySales();
tokyo.calculateHourlySales();
dubai.calculateHourlySales();
paris.calculateHourlySales();
lima.calculateHourlySales();

function displayTotals() {
  const totalsRow = document.getElementById('totals');

  if (totalsRow) {
    for (let hour = 0; hour <= 14; hour++) {
      let hourlyTotal = 0;

      for (const shop of [seattle, tokyo, dubai, paris, lima]) {
        hourlyTotal += shop.hourlySales[hour];
      }

      const cell = document.createElement('td');

      if (hour === 14) {
        cell.textContent = hourlyTotal;
      } else {
        cell.textContent = hourlyTotal;
      }

      totalsRow.appendChild(cell);
    }
  }
}


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


displayTotals();
