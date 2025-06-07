function isPrime(num) {
  if (num < 2)
    return `${num} is not a prime number`; // numbers < 2 are not prime

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} is not a prime number`; // divisible by another number
    }
  }

  return `${num} is a prime number`; // only runs if loop completes with no factors
}

console.log(isPrime(20)); // 20 is not a prime number
console.log(isPrime(7));  // 7 is a prime number
