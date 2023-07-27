
//? Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const reversedString = reverseString("Hello World");
console.log(reversedString);


//? Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOfPositiveNumbers([1, -2, 3, 4]))


//? Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function mostFrequentElement(arr) {
    let counts = {};
    let maxCount = 0;
    let mostFrequent = null;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (counts[element] === undefined) {
            counts[element] = 1;
        } else {
            counts[element]++;
        }
        if (counts[element] > maxCount) {
            maxCount = counts[element];
            mostFrequent = element;
        }
    }
    return mostFrequent;
}
console.log(mostFrequentElement([1, 2, 3, 2, 2, 1]))


//? Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
function twoSum(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    while (left < right) {
        let sum = sortedArr[left] + sortedArr[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}

console.log(twoSum([1, 2, 3, 4, 5], 9))



//? Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }
    return result;
}

console.log(calculator(2, 3, '+'));

//? Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generatePassword(length) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * charset.length);
        password += charset[index];
    }
    return password;
}

console.log(generatePassword(10));

//? Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(s) {
    let romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let currentInt = romanToIntMap[s.charAt(i)];
        let nextInt = romanToIntMap[s.charAt(i + 1)];
        if (nextInt > currentInt) {
            result += (nextInt - currentInt);
            i++;
        } else {
            result += currentInt;
        }
    }
    return result;
}

console.log(romanToInt('XI'));

