function produceDrivingRange(blockRange){
  return function(block1, block2){
    tripRange =  Number(block2.slice(0,-2)) - Number(block1.slice(0,-2))
    diffRange =  tripRange - blockRange
    return diffRange > 0? `${diffRange} blocks out of range` : `within range by ${Math.abs(diffRange)}`;
  }
}
function produceTipCalculator(tip){
  return function(percent){
    return tip * percent
  }
}
