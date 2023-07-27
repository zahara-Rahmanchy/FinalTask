// Task 1

function reverseString(str) {
  let revstr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }

  return revstr;
}

console.log("\nTask:1\nThe reversed String: ", reverseString("hello World"));

//Task 2:  sum of positve numbers

function positveSum(arr) {
  let pSum = 0;
  for (i in arr) {
    if (arr[i] >= 0) {
      pSum += arr[i];
    }
  }
  return pSum;
}

console.log(
  "\nTask:2\nThe sum of positve integers: ",
  positveSum([2, -5, 10, -3, 7])
);

// Task 3: Most frequent element
function mostFrequentElement(arr) {
  const freqentObj = {};
  let mostFrequentElem = arr[0];
  let maxValue = 1;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (freqentObj[element]) {
      freqentObj[element]++;
    } else {
      freqentObj[element] = 1;
    }

    if (freqentObj[element] > maxValue) {
      mostFrequentElem = element;
      maxValue = freqentObj[element];
    }
  }

  return mostFrequentElem;
}

console.log(
  "\nTask:3\nThe most freqent value in the array: ",
  mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5])
);

// Task 4: find index numbers of numbers that equals the target
function indicesOfSumNumbers(arr, target) {
  let ptr1 = 0;
  let ptr2 = 1;
  while (ptr1 < ptr2 && ptr2 < arr.length) {
    const sum = arr[ptr1] + arr[ptr2];

    if (sum === target) {
      return [ptr1, ptr2];
    } else {
      ptr1++;
      ptr2++;
    }
  }

  return null;
}

console.log(
  "\nTask:4\nThe indices of the numbers whose summation is equal to the target: ",
  indicesOfSumNumbers([1, 3, 6, 8, 11, 15], 9)
);

// Task 5, calculator

function calculator(n1, n2, operator) {
  if (operator === "+") {
    return n1 + n2;
  } else if (operator === "-") {
    return n1 - n2;
  } else if (operator === "*") {
    return n1 * n2;
  } else if (operator === "/") {
    return n1 / n2;
  } else return "Unknown";
}

console.log("\nTask:5\nThe Calulator, input=4,5,+: ", calculator(4, 5, "+"));

// Task 6 :random password
function generateRandomPassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+~`|:;?><,.";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

console.log("\nTask:6\nThe Random password: ", generateRandomPassword(10));

// Task 7: roman to integer
function romanToInteger(romamNum) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let prevValue = 0;

  for (let i = romamNum.length - 1; i >= 0; i--) {
    const value = romanValues[romamNum[i]];
    if (value < prevValue) {
      total -= value;
    } else {
      total += value;
    }
    prevValue = value;
  }

  return total;
}
console.log(
  "\nTask:7\nRoman to Integer: ",
  "IX = ",
  romanToInteger("IX"),
  "\nXXI = ",
  romanToInteger("XXI")
);

// Task 8: second smallest number

function secondSmallestNumber(arr) {
  if (arr.length < 2) {
    return null;
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

console.log(
  "\nTask:8\n The second smallest number of the array, [3, 5, 5, 3, 3, 1, 4, 5] :",

  secondSmallestNumber([3, 5, 5, 3, 3, 1, 4, 5])
);
// node finalTask.js
