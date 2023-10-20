exports.celsiusToFahrenheit = function (celsius) {
    return celsius * (9/5) + 32;
}

exports.fahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * (5/9);
}

exports.getGreetingDependOnTime = function (myDate) {
    const timeBegin = 6;
    const timeEnd = 22;
    const currentHour = myDate.getHours();

    if (currentHour >= timeBegin && currentHour < timeEnd) {
        return "Guten Morgen";
    } else {
        return "Gute Nacht";
    }
}
