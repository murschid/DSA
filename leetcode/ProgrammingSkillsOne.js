class ProgrammingSkillsOne {
    /**
     * 1523. Count Odd Numbers in an Interval Range
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    countOdds(low, high) {
        let count = 0;
        for (i = low; i <= high; i++) {
            if (i % 2 != 0) {
                count++;
            }
        }
        return count;
    }

    /**
     * 1491. Average Salary Excluding the Minimum and Maximum Salary
     * @param {number[]} salary
     * @return {number}
     */
    average(salary) {
        const min = Math.min(...salary);
        const max = Math.max(...salary);
        let total = 0;
        for (i = 0; i < salary.length; i++) {
            if (salary[i] != min && salary[i] != max) {
                total += salary[i];
            }
        }
        return total / (salary.length - 2);
    }

    /**
     * 191. Number of 1 Bits
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let total = 0;
        const input = n.toString(2);
        for (i = 0; i < input.length; i++) {
            if (input[i] == 1) {
                total++;
            }
        }
        return total;
    }

    /**
     * 1281. Subtract the Product and Sum of Digits of an Integer
     * @param {number} n
     * @return {number}
     */
    subtractProductAndSum(n) {
        const input = n.toString(10).split('').map(Number);
        let sum = 0;
        let product = 1;
        for (i = 0; i < input.length; i++) {
            sum += input[i];
            product *= input[i];
        }
        return product - sum;
    }

    /**
     * 9. Palindrome Number
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        const input = x.toString(10).split('');
        let result = true;
        for (i = 0; i < input.length; i++) {
            if (input[i] != input.reverse()[i]) {
                result = false;
            }
        }
        return result;
    }

    /**
     * 976. Largest Perimeter Triangle
     * @param {number[]} nums
     * @return {number}
     */
    largestPerimeter(nums) {
        nums.sort((a, b) => b - a);
        for (i = 0; i < nums.length; i++) {
            let start = i + 1;
            let end = i + 2;
            while (start < end) {
                if (nums[start] + nums[end] > nums[i]) {
                    return nums[start] + nums[end] + nums[i];
                } else {
                    start++
                }
            }
        }
        return 0;
    }

    /**
     * 1779. Find Nearest Point That Has the Same X or Y Coordinate
     * @param {number} x
     * @param {number} y
     * @param {number[][]} points
     * @return {number}
     */
    nearestValidPoint(x, y, points) {
        let manhattan = Infinity;
        let index = -1;
        for (i = 0; i < points.length; i++) {
            if (points[i][0] == x || points[i][1] == y) {
                let num = Math.abs(x - points[i][0] + Math.abs(y - points[i][1]));
                if (num < manhattan) {
                    manhattan = num;
                    index = i;
                }
            }
        }
        return index;
    }

    /**
     * 1822. Sign of the Product of an Array
     * @param {number[]} nums
     * @return {number}
     */
    arraySign(nums) {
        let product = 1;
        let result;
        for (i = 0; i < nums.length; i++) {
            product *= nums[i];
        }
        if (product > 0) {
            result = 1
        } else if (product < 0) {
            result = -1;
        } else {
            result = 0;
        }
        return result
    }

    /**
     * 1502. Can Make Arithmetic Progression From Sequence
     * @param {number[]} arr
     * @return {boolean}
     */
    canMakeArithmeticProgression(arr) {
        arr.sort((a, b) => a - b);
        const range = arr[1] - arr[0];
        let result;
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] - arr[i] != range) {
                result = false;
                break;
            } else {
                result = true;
            }
        }
        return result;
    }

    /**
     * 202. Happy Number (incomplete)
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let number = n.toString();
        let sum = 0;
        while (sum != 1) {
            for (i = 0; i < number.length; i++) {
                sum += (parseInt(number[i]) * parseInt(number[i]));
                console.log(sum);
            }
            if (sum == 1) {
                return true;
            } else {
                number = sum.toString();
                sum = 0;
            }
        }
    }

    /**
     * 1790. Check if One String Swap Can Make Strings Equal (incomplete)
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    areAlmostEqual(s1, s2) {
        let count = 0;
        if (s1.length != s2.length) {
            count = 0;
        } else {
            for (i = 0; i < s1.length; i++) {
                if (s2.includes(s1[i])) {
                    count++
                    console.log(s1[i]);
                    result = true;
                }
            }
        }
        if (count == s1.length) {
            return true;
        } else {
            return false;
        }
    }


}

const programmingSkillsOne = new ProgrammingSkillsOne();