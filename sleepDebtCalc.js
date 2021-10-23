const getSleepHours = day =>{
  
  switch(day) {
    case "monday":
    return 8
    break;
  case "tuesday":
  return 8
  break;
  case "wednesday":
  return 8
  break;
  case "thursday":
  return 8
  break;
  case 'friday':
  return 8
  break;
  case "saturday":
  return 8
  break;
  case 'sunday':
  return 8
  break;
  default :
  return "Error!"
  }
};
const getActualSleepHours = () => 
   getSleepHours('monday') + 
   getSleepHours('tuesday') + 
   getSleepHours('wednesday') + 
   getSleepHours('thursday') + 
   getSleepHours('friday') + 
   getSleepHours('saturday') + 
   getSleepHours('sunday');

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const idealSleepHours =
  getIdealSleepHours();
  const actualSleepHours =
  getActualSleepHours();

  if(actualSleepHours === idealSleepHours){
    console.log('You got a great amount of sleep!');
  }
  else if(actualSleepHours > idealSleepHours) {
    console.log('You Slept! ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep this week.');
  }
  else if(actualSleepHours < idealSleepHours){
    console.log('You should take a nap!, you only slept ' + ( idealSleepHours - actualSleepHours) + ' less hours than you should');}
    else {
      console.log('Error ! something is incorrect!')
    }
  };

calculateSleepDebt();


