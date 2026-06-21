
// Q1. Largest Number


let arr = [12, 45, 78, 23, 90];

let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Largest Number:", largest);




// Q2. Smallest Number


let arr2 = [12, 45, 78, 23, 90];

let smallest = arr2[0];

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < smallest) {
        smallest = arr2[i];
    }
}

console.log("Smallest Number:", smallest);




// Q3. Sum of Array

let arr3 = [5, 10, 15, 20, 25];

let sum = 0;

for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
}

console.log("Sum:", sum);




// Q4. Product of Array

let arr4 = [2, 4, 6, 8];


let product = 1;

for (let i = 0; i < arr4.length; i++) {
    product *= arr4[i];
}

console.log("Product:", product);




// Q5. Count Even Numbers


let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];

let evenCount = 0;

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 === 0) {
        evenCount++;
    }
}

console.log("Even Count:", evenCount);




// Q6. Count Odd Numbers


let arr6 = [1, 2, 3, 4, 5, 6, 7, 8];

let oddCount = 0;

for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] % 2 !== 0) {
        oddCount++;
    }
}

console.log("Odd Count:", oddCount);




// Q7. Print Even Numbers


let arr7 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] % 2 === 0) {
        console.log(arr7[i]);
    }
}




// Q8. Print Odd Numbers


let arr8 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] % 2 !== 0) {
        console.log(arr8[i]);
    }
}




// Q9. Reverse Array


let arr9 = [10, 20, 30, 40, 50];

for (let i = arr9.length - 1; i >= 0; i--) {
    console.log(arr9[i]);
}




// Q10. Search Element

let arr10 = [10, 20, 30, 40, 50];

let target = 30;
let found = false;

for (let i = 0; i < arr10.length; i++) {
    if (arr10[i] === target) {
        found = true;
        break;
    }
}

if (found) {
    console.log("Found");
} else {
    console.log("Not Found");
}