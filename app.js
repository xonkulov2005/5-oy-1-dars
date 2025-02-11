//1. Quyidagi massivdagi barcha odamlarni yoshlarining o’rtacha qiymatini chiqaruvchi getAverageAge(arr) nomli funksiya yozing.
// Input: const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];
// Output: 27.25
// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// function getAverageAge(arr) {
//   const allAges = arr.reduce((acc, curVal) => {
//     acc += curVal.age;
//     return acc;
//   }, 0);
//   return allAges / arr.length;
// }
// console.log(getAverageAge(people));

//2. Massiv ichidagi har bir objectga isMarried nomli property qo’shilsin. Agar object yoshi 25 dan kichi bo’lsa isMarried ga false, aks holda true qiymat o’zlashtirilsin.
// 	Output: [
//   { name: "Abdulaziz", age: 33, isMarried: true},
//   { name: "Erkin", age: 22, isMarried: false },
//   { name: "Temur", age: 34, isMarried: true },
//   { name: "Sardor", age: 20, isMarried: false },
// ];

// const people = [
//   { name: "Abdulaziz", age: 33, isMarried: true },
//   { name: "Erkin", age: 22, isMarried: false },
//   { name: "Temur", age: 34, isMarried: true },
//   { name: "Sardor", age: 20, isMarried: false },
// ].map((person) => {
//   return { name: person.name, age: person.age, isMerried: person.age > 25 };
// });
// console.log(people)

//3. Quyidagi objectlardan tuzilgan massiv ichidagi yoshi eng katta va yoshi eng kichik bo’lgan insonning ismlarini qaytaruvchi getNameMaxMinAge(arr) nomli funksiya yozing. (for)
// 	Output: ["Temur", "Sardor"]

// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];
// function getNameMaxMinAge(arr) {
//   let maxAgePerson = arr[0];
//   let minAgePerson = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].age > maxAgePerson.age) {
//       maxAgePerson = arr[i];
//     } else if (arr[i].age < minAgePerson.age) {
//       minAgePerson = arr[i];
//     }
//   }
//   return [maxAgePerson.name, minAgePerson.name];
// }
// console.log(getNameMaxMinAge(people));

// 4. Objectda turli xil kalitlar bir xil qiymatlarga ega, kalitlari o'sha qiymatlardan iborat shunday object tuzingki, bu objectning qiymatlari massiv ko'rinishidagi eski objectning kalitlarlaridan iborat bo'lsin.

// Input: {1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20}
// Output: {20: [1, 3, 8], 30: [2, 5], 40: [4, 7]: 50: [6]}

// function Object(obj) {
//   const result = {};
//   for (const key in obj) {
//     const value = obj[key];
//     if (!result[value]) {
//       result[value] = [];
//     }
//     result[value].push(Number(key));
//   }
//   return result;
// }
// const arr = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
// console.log(Object(arr));

// 5. Ikkita object berilgan ularning ba'zi kalitlari bir xil. Bir xil kalitlaridan iborat bo'lmagan yangi object hosil qiling.
// Input: obj1 = { a: 3, b: 10, c: 5, d: 7 };
// obj2 = { a: 10, d: 4, e: 6, f: 15 };
// Output: obj = {b: 10, c: 5, e: 6, f: 15};

// function object(obj1, obj2) {
//   const result = {};
//   for (const key in obj1) {
//     if (!(key in obj2)) {
//       result[key] = obj1[key];
//     }
//   }
//   for (const key in obj2) {
//     if (!(key in obj1)) {
//       result[key] = obj2[key];
//     }
//   }
//   return result;
// }

// const obj1 = { a: 3, b: 10, c: 5, d: 7 };
// const obj2 = { a: 10, d: 4, e: 6, f: 15 };
// console.log(object(obj1, obj2));

// 1. Quyidagi objectni outputdagi ko'rinishda chiqaring. (toString, join)

// Input:
// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };
// Output:
// firstName: Abdulaziz
// lastName: Toshpulatov
// age: 23
// languages: js,python,c++,nodejs
// friends: Jamshid+Abbos+Jalol+Mar'uf

// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// function objectToString(obj) {
//   return `firstName: ${obj.firstName}\nlastName: ${obj.lastName}\nage: ${
//     obj.age
//   }\nlanguages: ${obj.languages.join(",")}\nfriends: ${obj.friends.join("+")}`;
// }
// console.log(objectToString(me));

// 2. Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)

// Input: 5
// Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

// function array(n) {
//   const result = {};
//   for (let i = 1; i <= n; i++) {
//     result[i] = i * i;
//   }
//   return result;
// }
// const n = 5;
// console.log(array(n));

//3. 2-misoldan hosil bo’lgan objectning kalitlari va qiymatlari yig’indisini toping. (Object.keys(), Object.values())
// function array(n) {
//   const result = {};
//   for (let i = 1; i <= n; i++) {
//     result[i] = i * i;
//   }
//   return result;
// }
// const n = 5;
// const Sum = array(n);
// const keys = Object.keys(Sum).reduce((sum, key) => sum + Number(key), 0);
// const values = Object.values(Sum).reduce((sum, value) => sum + value, 0);
// console.log("Yig'indi:", keys + values);

// Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)

// function array(arr) {
//   const result = {};
//   for (const ism of arr) {
//     result[ism] = ism.length;
//   }
//   return result;
// }
// const ismlar = ["Muhammadjon", "Alijon", "Muhsinjon", "Boynazar", "Nurullo"];
// const object = array(ismlar);
// console.log(object);

// Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())
// Input: {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000}
// Output: 50000

// const mahsulotlar = {
//   Apelsin: 10000,
//   Olma: 12000,
//   Mandarin: 8000,
//   Banan: 20000,
// };
// const Sum = Object.values(mahsulotlar).reduce((acc, curVal) => acc + curVal, 0);
// console.log(mahsulotlar);
// console.log("Umumiy narx:", Sum);
