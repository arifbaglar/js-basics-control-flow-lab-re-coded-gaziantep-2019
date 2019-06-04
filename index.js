function scuberGreetingForFeet(ride){
  let result
  if (ride <=400){result='This one is on me!'}
  else if (ride<2500) {result='I will gladly take your thirty bucks.';}
  else if (ride>2500){result='No can do.';}
  return result;
}

function ternaryCheckCity(city){
  var result = (city=="NYC") ? "Ok, sounds good.":"No go.";
  return result;
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
       return 'Thank you.';
    case 'thanks for everything':
        return 'Bye.';
  }
  
}