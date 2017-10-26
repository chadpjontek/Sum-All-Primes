function sumPrimes(num) {
  // If num is 1 or 0 return null
  if (num === 1 || num === 0) {
    return null;
    // If num is 2 return 2
  } else if (num === 2) {
    return 2;
  }
  // If num is > 3
  // Make array to store all prime numbers less than the num
  var primes = [2];
  // Loop through all numbers between 3 and the number (inclusive) and if they are prime, add them to array
  for (var i = 3; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  num = primes.reduce(function (acc, cur) {
    return acc + cur;
  });
  return num;
}
// Function to test if a number is prime
function isPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num !== 1;
}
// Examples
sumPrimes(10); // returns a number
sumPrimes(10); // returns 17
sumPrimes(977); // returns 73156