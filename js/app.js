const seattle ={
  store: 'Seattle',
  customers: getAverageCustomers(),
  hours: ['6,7,8,9,10,11,12,1,2,3,4,5,6,7'],
  sales: getAverageSales(),
};

console.log (seattle);

const tokyo ={
  store: 'Tokyo',
  customers: getAverageCustomers(),
  hours: ['6,7,8,9,10,11,12,1,2,3,4,5,6,7'],
  sales: getAverageSales(),
};

console.log (tokyo);

const dubai ={
  store: 'Dubai',
  customers: getAverageCustomers(),
  hours: ['6,7,8,9,10,11,12,1,2,3,4,5,6,7'],
  sales: getAverageSales(),
};

console.log (dubai);

const paris ={
  store: 'Paris',
  customers: getAverageCustomers(),
  hours: ['6,7,8,9,10,11,12,1,2,3,4,5,6,7'],
  sales: getAverageSales(),
};

console.log (paris);

const lima ={
  store: 'Lima',
  customers: getAverageCustomers(),
  hours: ['6,7,8,9,10,11,12,1,2,3,4,5,6,7'],
  sales: getAverageSales(),
};

console.log (lima);

function getAverageSales() {
  const sales = 6.3;
  const hours = 1;
  return Math.floor( Math.random() * (sales - hours + 1) + hours );
}

function getAverageCustomers() {
  const customersMax = 65;
  const customersMin = 23;
  return Math.floor( Math.random() * (customersMax - customersMin + 1) + customersMin );
}

function getSalesPerHour(){
  getAverageCustomers + getAverageSales;

}

getSalesPerHour();
