// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {return driver.name;});
}

// 2nd argument is a key value pair and looks like { something: value }
function exactMatch(drivers, pair) {
  return drivers.filter(function (driver) {
    let match_found = false;
    
    for (const key in pair) {
      match_found = driver[key] === pair[key];
    }
    return match_found;
  })
}

function exactMatchToList() {
  
}



exactMatchToList()
returns an array of names for all matching drivers ‣
ReferenceError: exactMatchToList is not defined
    at Context.<anonymous> (test/indexTest.js:75:7)expect(exactMatchToList(extendedDrivers, { name: 'Sally' })).to.eql([ 'Sally', 'Sally' ]);
expect(exactMatchToList(extendedDrivers, { revenue: 200 })).to.eql([ 'Annette', 'Sally' ]);
returns an empty array if there is no match ‣
ReferenceError: exactMatchToList is not defined
    at Context.<anonymous> (test/indexTest.js:81:7)expect(exactMatchToList(extendedDrivers, { revenue: 500 })).to.eql([]);
expect(exactMatchToList(extendedDrivers, { name: 'Alex' })).to.eql([])
