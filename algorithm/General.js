class General {
	sumOfNumbers(number) {
		let input = number.toString();
		let sum = 0;
		for (let i = 0; i < input.length; i++) {
			sum += parseInt(input[i]);
		}
		return sum;
	}

	fibonacciSeries(n) {
		let result = [0, 1];
		for (let i = 2; i < n; i++) {
			result[i] = result[i - 1] + result[i - 2];
		}
		return result;
	}

	nthFibonacci(n) {
		return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
	}

	factorial(n) {
		let result = 1;
		for (let i = 1; i <= n; i++) {
			result = result *= i;
		}
		return result;
	}

	isPrime(n) {
		let prime = true;
		if (n < 2) {
			prime = false;
		}
		for (let i = 2; i < n; i++) {
			if (n % i === 0) {
				prime = false;
			}
		}
		return prime;
	}

	isPowerOfTwo(n) {
		if (n < 1) return false;
		while (n > 1) {
			if (n % 2 !== 0) {
				return false;
			}
			n = n / 2;
		}
		return true;
	}
}

const general = new General();
export default general;