function scuberGreetingForFeet(ride){
  let result
  if (ride <= 400) {
  result = "This one is on me!"}
  else if (1999 < ride && ride < 2500) {
    result = "I will gladly take your thirty bucks."
  }
  else {
    result = "No can do."
  }
  return result
}

function ternaryCheckCity(city){
  let result
  if (city === 'NYC') {
    result = "Ok, sounds good."
  }
  else {
    result = "No go."
  }
  return result
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

