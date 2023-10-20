/* conversion from celsius to fahrenheit scale */
exports.celsiusToFahrenheit = function (x){
    return x*(9/5) + 32
   }
   /* conversion from fahrenheit to celsius scale.  Removed unnecessary condition */
   exports.fahrenheitToCelcius = function (fahrenheit){
       return (fahrenheit - 32) * (5 / 9);
    }   
   
   /* getting the current date and time, returning the appropriate message */ 
   exports.getGreetingDependOnTime =  function (myDate) {
       const timeBegin = 6;
       const timeEnd = 22;
       const currentHour = myDate.getHours();
     
       if (currentHour >= timeBegin && currentHour < timeEnd) {
         return "Guten Morgen";
       } else {
         return "Gute Nacht";
       }
     }
