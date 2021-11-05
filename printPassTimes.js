const printResults = (riseTimes) => {
  for (let rise of riseTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(rise.risetime);
    const duration = rise.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

module.exports = printResults;