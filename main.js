let arr = [2, 4, 9, 10, 45, 67, 8, 90];
let evenNumbers = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
    }
}

console.log("Juft sonlarni tashkil etgan array:", evenNumbers);

