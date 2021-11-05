const { nextISSTimesForMyLocation } = require('./iss');

const printResults = function(riseTimes) {
  for (let rise of riseTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(rise.risetime);
    const duration = rise.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, riseTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printResults(riseTimes);
});