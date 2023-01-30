// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: 111,
// city: "Kingston",
// }

// console.table(apartment);

// task_10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// task_11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }

// task_12
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     propCount += 1;
//   }
// }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 })); //2

// task_13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// task_14
// function countProps(object) {
//   // Change code below this line
  
//     return Object.keys(object).length;;
//   // Change code above this line
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// task_16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// for (const value of Object.values(salaries)) {
//   totalSalary += value;
// }
//   // Change code above this line
//   return totalSalary;
// }

// task_17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
  
// }

// task_18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (const product  of products) {
//   if (product.name === productName) {
//     return product.price;
//   }
// }
// return null;

//   // Change code above this line
// }

// task_19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// let arrayPropName = [];
//   for (const value of products) {
//     if (!value[propName]) {
//       return arrayPropName;
//     }
//     arrayPropName.push(value[propName]);
//   }
//   return arrayPropName;

//   // Change code above this line
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("sss"));

// task_20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
// let totalPrice = 0;
//   for ( const product of products) {
//     if (product.name === productName) {
//     totalPrice = product.price * product.quantity
//   }
//   }
// return totalPrice;

//   // Change code above this line
// }

// Task 23
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

