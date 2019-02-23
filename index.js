// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {return driver.name;});
}

// 2nd argument is a key value pair and looks like { something: value }
function exactMatch(drivers, pair) {
  const matchedDrivers = drivers.map(function (pair) {return driver.revenue === pair.revenue});
  return 
}





exactMatch()
returns an array of all matching drivers ‣
ReferenceError: exactMatch is not defined
    at Context.<anonymous> (test/indexTest.js:55:7)expect(exactMatch(extendedDrivers, { name: 'Sally' })).to.eql([
  { name: 'Sally', revenue: 400 },
  { name: 'Sally', revenue: 200 }
]);
expect(exactMatch(extendedDrivers, { revenue: 200 })).to.eql([
  { name: 'Annette', revenue: 200 },
  { name: 'Sally',   revenue: 200 }
]);
returns an empty array if there is no match ‣
ReferenceError: exactMatch is not defined
    at Context.<anonymous> (test/indexTest.js:67:7)expect(exactMatch(extendedDrivers, { revenue: 500 })).to.eql([]);
expect(exactMatch(extendedDrivers, { name: 'Alex' })).to.eql([]);