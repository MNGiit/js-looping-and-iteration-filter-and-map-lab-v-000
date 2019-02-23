// Code your solution here:
function driversWithRevenue(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenue(drivers, revenue).map(function (driver) {return driver.name;});
}


driversWithRevenueOver()
returns an array of all matching drivers ‣
ReferenceError: driversWithRevenueOver is not defined
    at Context.<anonymous> (test/indexTest.js:28:7)expect(driversWithRevenueOver(drivers, 250)).to.eql([
  { name: 'Sally', revenue: 400 }
]);
expect(driversWithRevenueOver(drivers, 199)).to.eql([
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 }
]);
returns an empty array if there is no match ‣
ReferenceError: driversWithRevenueOver is not defined
    at Context.<anonymous> (test/indexTest.js:39:7)expect(driversWithRevenueOver(drivers, 500)).to.eql([]);