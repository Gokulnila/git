

// Object Problem Tasks

// 1. Create an object student with name, age, and grade. Print all values.
let student = {
    name:"Nila",
    age:22,
    grade:"B"
}
console.log(student)


// 2. Create an object car with brand, model, year. Print only the brand.
let car ={
    brand:"Samsung Galaxy",
    model:"A07 5G",
    year:2014
}
console.log(car.brand)


// 3. Create an object mobile with 3 properties and add one new property later.

let mobile ={
    property1:"portability",
    property2:"wirless connection",
    property3:"handle easily"
}
console.log(mobile)
mobile.properties4="Computing Interactivity"
console.log(mobile)


// 4. Create a book object and change its price property to a new value.
let book={
name :"Dune by Frank Herbert",
price:45,
year:2020
}
console.log(book)
book.price=345
console.log(book)


// 5. Create an object employee and check if the key "salary" exists
// using in operator.
 let employee = {
    name:"alex",
    age:22,
    department:"civil",
    salary:25000
 }
   if("salary" in employee){
    console.log("the salayr exisits in the employee")
   }
   else{
    console.log(" the Salary not in the object")
   }

 
// 6. Create an object product and delete the discount property using delete.
let product= {
   name: "Laptop",
  price: 50000,
  discount: 10,
  brand: "Dell"
}
delete product.discount
console.log ("After the discount delete:",product)
// 7. Create an object user with name and email. Print all keys using
// for…in loop.
let user = {
    name :"alex",
    email :"nial@gmail.com"
    
}
for (let i  in user){
    console.log(Object.keys(user))
}

// 8. Create an object dog with breed and age. Print "Puppy" if age < 2.
let dog={
    breed:"bulldog",
    age:1
}
if(dog.age<2){
    console.log("it is  puppy")
}
else {
    console.log("not a puppy")
}

console.log(dog.breed)
console.log(dog.age)




// 9. Create an object calculator with two numbers and print their sum.
let calculator ={
    addnum:(a,b)=>{
        return a+b
    },
    subnum:(a,b)=>{
        return a-b
    },
     multinum:(a,b)=>{
        return a*b
    },
     divinum:(a,b)=>{
        return a/b
    }

}

console.log("addition",calculator.addnum(3,4))
console.log("sub",calculator.subnum(5,4))
console.log("multi",calculator.multinum(3,4))
console.log("division",calculator.divinum(4,4))




// 10. Create an object person with firstName and lastName. Print full name.

let person={
    firstName :"Gokul",
    secondName :"Nila"
}
console.log(`${person.firstName} ${person.secondName }`)
// 11. Create an object marks with 5 subject marks. Find the total using loop.

   let  marks={
        tamil:98,
        english :69,
        maths:56,
        physics:98,
        biology:89
    }

let total = 0;

//for (let subject in marks) {
  //total = total + marks[subject];
//}
 for(let value of Object.values(marks)){

    total +=value
}
console.log(total)

// 12. Create an object bike and check if it has color property.
let bike1 ={
    p1 :"milage",
    p2 :"smoothness",
    p3  :"speed"
}
console.log(bike1?.color)

// 13. Create an object movie with title and rating. Print "Hit" if rating > 8.
let movie ={
    title:"thuppaki",
    rating:10
}

{
    if(movie.rating>8) {
        console.log("hit")
    }
}

// 14. Create an object account with balance. Add ₹500 and print updated
// balance.
let account ={
    balance:500
}
account.balance+=100
console.log(account)


// 15. Create an object player with 3 stats. Print the highest stat value.

let player = {
strength :85,
speed:92,
stamina:78
}
let values1 =Object.values(player)
let highest = values1[0];
for(let i =0;i<values1.length;i++){
    if(values1[i]>highest){
        highest=values1[i]
    }
}
console.log("The highest value is: ",highest)
// 16. Create an object game and print how many keys it has.
let game ={
    g:"football",
    g1:"vollyball",
    g2:"cricket",
    g3:"batmition"

}
console.log("  Number of keys in the objects:",Object.keys(game).length)
// 17. Create an object course and update the duration property.

let course  = {
    name : "Full Stack Developer ",
    duration:"3 Month",
    fees : 20000,
    instructor :"Nila"

}
course.duration = "5 Month"
console.log( course)

// 18. Create an object teacher with name and subject. Print: "Teacher
// teaches subject".
let teacher={
    name : "Sasikala",
    subjects : 'Maths'
}
console.log(`Teacher  teaches ${teacher.subjects}`)
// 19. Create an object settings with theme and fontSize. Change theme
// to "dark".
let settings={

    theme :"color setting",
    fontSize:25

}
settings.theme ="dark"
console.log(settings)
// 20. Create an object shopItem and check if price > 100. Print
// "Expensive" or "Cheap".
let shopItem = {
    price : 145,
 
}

let value5 = Object.values(shopItem)
if(value5>100){
    console.log("Expensive")
}
else {
    console.log("Cheap")
}





// Intermediate Object Questions 
// 1. Create an object employee with name, age, salary.
// Write a program to increase the salary by 10% and update the object.
// { name: 'Arun', age: 28, salary: 33000 }

let employee = { name: "Arun",
     age: 28, 
     salary: 30000 };

employee.salary = employee.salary + (employee.salary * 0.10);

console.log(employee);



// 2. Given an object:
// let product = { name: "Laptop", price: 50000, discount: 10 };
// Calculate the final price after applying discount and add a new key finalPrice to the
// object.
// { name: 'Laptop', price: 50000, discount: 10, finalPrice: 45000 }
let product = { name: "Laptop",
     price: 50000,
      discount: 10 };

let discountAmount = (product.price * product.discount) / 100;
product.finalPrice = product.price - discountAmount;

console.log(product);




// 3. Create an object with 5 subject marks.
// Use a loop to find the total and average.
let marks = {
  tamil: 85,
  english: 78,
  maths: 92,
  science: 88,
  social: 75
};

let total = 0;
for (let subject in marks) {
  total += marks[subject];
}
let average = total / Object.keys(marks).length;

console.log("Total:", total);
console.log("Average:", average);



// 4 Given an object:
// let user = { name: "Arun", city: "Chennai", age: 24 };
// Check if the key "city" exists.
// If yes, print the value. If not, print "Not Found".

let user = { name: "Arun", 
    city: "Chennai",
     age: 24 };

if ("city" in user) {
  console.log(user.city);
} else {
  console.log("Not Found");
}




// 5. Create an object car with 4 properties.
// Then delete one property using delete and print the updated object.
// { brand: 'Toyota', model: 'Fortuner', year: 2022 }

let car = { brand: "Toyota",
     model: "Fortuner",
      color: "White", 
      year: 2022 };

delete car.color;
console.log(car);


// 6.Create an object with product quantities:
// let cart = { apple: 3, orange: 5, banana: 2 };
// Use a loop to calculate the total number of fruits.
let cart = { apple: 3, orange: 5, banana: 2 };
let totalFruits = 0;
for (let fruit in cart) {
  totalFruits += cart[fruit];
}
console.log("Total fruits:", totalFruits);



// 7.Use Object.entries() on an object and print each key and value separately using a loop.
// name: Laptop
// price: 50000
// discount: 10

   let product1 = { name: "Laptop", price: 50000, discount: 10 };

for (let  [key, value] of Object.entries(product1)) {
  console.log(key + ":", value);
}



// 8. You have an array of objects:
// [ {name:"Ravi", age:17},
// {name:"Kumar", age:25},
// {name:"Siva", age:19}
// ]
// Print only the names of people above 18.
let people = [
  { name: "Ravi", age: 17 },
  { name: "Kumar", age: 25 },
  { name: "Siva", age: 19 }
];

let adultNames = people
  .filter(person => person.age > 18)
  .map(person => person.name);

console.log(adultNames);
// [ 'Kumar', 'Siva' ]











// 9. Create an object bankAccount with balance: 1000.
// Add methods deposit(amount) and withdraw(amount) that update the balance.
// let bankAccount = {
//   balance: 1000,
//   deposit: function (amount) {
//     this.balance += amount;
//     console.log(`Deposited ${amount}. New balance: ${this.balance}`);
//   },
//   withdraw: function (amount) {
//     if (amount > this.balance) {
//       console.log("Insufficient balance");
//     } else {
//       this.balance -= amount;
//       console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
//     }
//   }
// };

// bankAccount.deposit(500);   // Deposited 500. New balance: 1500
// bankAccount.withdraw(200);  // Withdrew 200. New balance: 1300




