//=============================================================================\\
//                                Counter.JS                                    \\
//                             made by nullcheats                                \\
//================================================================================\\

/*
Here is simply 2 variables used for multipliers used
decrease value / increase value can be changed to anything
*/
let increaseValue = 10; // This is the value that the current counter will be incremented
let decreaseValue = 10; // This is the value that the current counter will be decremented

/*
These are the functions that simply increase / decrease the values :)
GetCurrentValue will retuen counter value (as an int)
IncreaseValue will add "increaseValue" to the current value 
DecreaseValue will decrease "decreaseValue" from the current value
Reset value will simply set the counter to "0"
Colour value will simply change the colour of the counter text
< 0 = Red
> 0 = Green
*/
const GetCurrentValue = () => {
  return parseInt(document.getElementById("Cntr").innerHTML);
}
const IncreaseValue = () => {
  console.log("Attempting to + " + increaseValue);
  document.getElementById("Cntr").innerHTML = GetCurrentValue() + increaseValue;
  ColourValue();
}
const DecreaseValue = () => {
  console.log("Attempting to - " + decreaseValue);
  document.getElementById("Cntr").innerHTML = GetCurrentValue() - decreaseValue;
  ColourValue();
}
const ResetValue = () => {
  console.log("Attempting to reset counter !");
  document.getElementById("Cntr").innerHTML = "0";
  ColourValue();
}
const ColourValue = () => {
  if (GetCurrentValue() > 0) {
    document.getElementById("Cntr").style.color = "#008000";
  } else if (GetCurrentValue() < 0) {
    document.getElementById("Cntr").style.color = "#FF0000";
  } else if (GetCurrentValue() == 0) {
    document.getElementById("Cntr").style.color = "#FFFF";
  } else {
    document.getElementById("Cntr").style.color = "#FFFF";
  }
}