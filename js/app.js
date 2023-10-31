const seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  hourlySales: [],
  calculateHourlySales: function () {
    for (let hour = 6; hour <= 19; hour++) {
      const customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      const cookies = Math.round(customers * this.avgCookiesPerCustomer);
      this.hourlySales.push(cookies);
    }
  },
  render: function () {
    this.calculateHourlySales();
    const locationElement = document.getElementById(this.name.toLowerCase());
    const ul = document.createElement('ul');
    let totalCookies = 0;
    for (let hour = 6; hour <= 19; hour++) {
      const cookies = this.hourlySales[hour - 6];
      totalCookies += cookies;
      const li = document.createElement('li');
      li.textContent = `${hour}am: ${cookies} cookies`;
      ul.appendChild(li);
    }
    const totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${totalCookies} cookies`;
    ul.appendChild(totalLi);
    locationElement.appendChild(ul);
  }
};

const tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  hourlySales: [],
  calculateHourlySales: function () {
    for (let hour = 6; hour <= 19; hour++) {
      const customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      const cookies = Math.round(customers * this.avgCookiesPerCustomer);
      this.hourlySales.push(cookies);
    }
  },
  render: function () {
    this.calculateHourlySales();
    const locationElement = document.getElementById(this.name.toLowerCase());
    const ul = document.createElement('ul');
    let totalCookies = 0;
    for (let hour = 6; hour <= 19; hour++) {
      const cookies = this.hourlySales[hour - 6];
      totalCookies += cookies;
      const li = document.createElement('li');
      li.textContent = `${hour}am: ${cookies} cookies`;
      ul.appendChild(li);
    }
    const totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${totalCookies} cookies`;
    ul.appendChild(totalLi);
    locationElement.appendChild(ul);
  }
};

const dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  hourlySales: [],
  calculateHourlySales: function () {
    for (let hour = 6; hour <= 19; hour++) {
      const customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      const cookies = Math.round(customers * this.avgCookiesPerCustomer);
      this.hourlySales.push(cookies);
    }
  },
  render: function () {
    this.calculateHourlySales();
    const locationElement = document.getElementById(this.name.toLowerCase());
    const ul = document.createElement('ul');
    let totalCookies = 0;
    for (let hour = 6; hour <= 19; hour++) {
      const cookies = this.hourlySales[hour - 6];
      totalCookies += cookies;
      const li = document.createElement('li');
      li.textContent = `${hour}am: ${cookies} cookies`;
      ul.appendChild(li);
    }
    const totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${totalCookies} cookies`;
    ul.appendChild(totalLi);
    locationElement.appendChild(ul);
  }
};

const paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  hourlySales: [],
  calculateHourlySales: function () {
    for (let hour = 6; hour <= 19; hour++) {
      const customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      const cookies = Math.round(customers * this.avgCookiesPerCustomer);
      this.hourlySales.push(cookies);
    }
  }, render: function () {
    this.calculateHourlySales();
    const locationElement = document.getElementById(this.name.toLowerCase());
    const ul = document.createElement('ul');
    let totalCookies = 0;
    for (let hour = 6; hour <= 19; hour++) {
      const cookies = this.hourlySales[hour - 6];
      totalCookies += cookies;
      const li = document.createElement('li');
      li.textContent = `${hour}am: ${cookies} cookies`;
      ul.appendChild(li);
    }
    const totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${totalCookies} cookies`;
    ul.appendChild(totalLi);
    locationElement.appendChild(ul);
  }
};

const lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  hourlySales: [],
  calculateHourlySales: function () {
    for (let hour = 6; hour <= 19; hour++) {
      const customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      const cookies = Math.round(customers * this.avgCookiesPerCustomer);
      this.hourlySales.push(cookies);
    }
  }, render: function () {
    this.calculateHourlySales();
    const locationElement = document.getElementById(this.name.toLowerCase());
    const ul = document.createElement('ul');
    let totalCookies = 0;
    for (let hour = 6; hour <= 19; hour++) {
      const cookies = this.hourlySales[hour - 6];
      totalCookies += cookies;
      const li = document.createElement('li');
      li.textContent = `${hour}am: ${cookies} cookies`;
      ul.appendChild(li);
    }
    const totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${totalCookies} cookies`;
    ul.appendChild(totalLi);
    locationElement.appendChild(ul);
  }
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
