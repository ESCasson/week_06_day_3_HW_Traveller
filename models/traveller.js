const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyProperty = function(property) {
    return  this.journeys.map((journey) => {
        return journey[property]
      })
};
// Refactored the method above to be more DRY
// Traveller.prototype.getJourneyEndLocations = function () {
//
// };

Traveller.prototype.getJourneysByTransport = function (transport) {
  return  this.journeys.filter((journey) => {
      return journey.transport === transport
    })


};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return  this.journeys.filter((journey) => {
      return journey.distance > minDistance
    })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total + journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {


      return this.journeys.map((journey) => {
          return journey.transport
        }).filter((value, index, result)=>{
          return result.indexOf(value) === index
        }
      );
  };




module.exports = Traveller;
