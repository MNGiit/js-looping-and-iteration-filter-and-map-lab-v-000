// Code your solution here:
function driversWithRevenue(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenue(drivers, revenue).map(function (driver) {return driver.name;});
}


