const { nextISSTimesForMyLocation } = require('./iss_promised');
const printPassTimes = require('./printPassTimes');

nextISSTimesForMyLocation()
  .then((data) => {
    printPassTimes(data);
  })
  .catch((err) => {
    console.log("It didn't work: ", err.message);
  });