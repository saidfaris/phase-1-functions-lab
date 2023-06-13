// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    // Calculates the distance from headquarters in blocks.
    return blockNumber;
  }
  
  function distanceFromHqInFeet(blockNumber) {
    // Calculates the distance from headquarters in feet.
    return blockNumber * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    // Calculates the distance travelled in feet.
    return Math.abs(start - destination) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    // Calculates the fare price.
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) 
      return 0;
    } else if (distance <= 2000) {
      return distance * 0.02;
    } else {
      return 25;
    }
  
  