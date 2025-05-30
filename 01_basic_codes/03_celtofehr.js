function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
const celsiusInput = 56;
const result = celsiusToFahrenheit(celsiusInput);
console.log(`${celsiusInput}°C is ${result}°F`);
