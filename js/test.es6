import x from "sum.js";

class News {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

var p = new News("Manoj");
p.getName();

var testArrowFunc = () => {}

var numbers = [1,2,3];
var outputNumber = numbers.map(function(number){
  return number * 2;
});

console.log(outputNumber);

var outputNumberArrow = numbers.map((number) => number * 3);

console.log(outputNumberArrow);

var p = new Promise((resolve, reject) => resolve(5));  
p.then((val) => console.log(val)); // 5 

var someAsyncthings = function() {
  return new Promise(function(resolve, reject){
    resolve(x + 2);
  });
};

someAsyncthings().then(function(val) {
  console.log(val);
}).catch(function(error) { 
  console.log(error);
});