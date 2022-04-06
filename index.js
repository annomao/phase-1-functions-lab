// Code your solution in this file!
function distanceFromHqInBlocks(distance){
  if (distance < 42){
    return 42 - distance;
  }else{
    return distance - 42;
  }
};

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * 264;
};

function distanceTravelledInFeet(start,stop){
  if(start > stop){
    return (start-stop) * 264;
  }else{
    return (stop -start) * 264;
  }
};

function calculatesFarePrice(start, stop){
  const totalFeet = distanceTravelledInFeet(start,stop);
  if(totalFeet<=400){
    return 0;
  }else if(totalFeet>400 && totalFeet<=2000){
    return (totalFeet-400) * 0.02;
  }else if(totalFeet>2000 && totalFeet<=2500){
    return 25;
  }else if(totalFeet>2500){
    return "cannot travel that far";
  }
}
