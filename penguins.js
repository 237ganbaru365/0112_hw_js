let gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  },
};

let ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  },
};

let fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  },
};

//For question 5:
let myPenguin = {
  character: "Captain Cook",
  origin: "Mr. Popper's Penguins",
  author: "Richard and Florence Atwater",
  notes:
    "Children's book about a housepainter who ends up with a flock of penguins.",
};

//Q1
let penguins = [gunter, ramon, fred];
//Q2
console.log(penguins[0]);
//Q3
var secondPenguin = penguins[1];
console.log(secondPenguin);
//Q4
console.log(penguins[-1]);
//Q5
penguins.push(myPenguin);
console.log(penguins);
//Q6
console.log(penguins.length);
//Q7
penguins[0].canFly = true;
console.log(penguins[0].canFly);
//Q8
penguins[0].sayHello();
//Q9
penguins[3].name = myPenguin.character;
for (let i = 0; i < penguins.length; i++) {
  console.log(penguins[i].name);
}
//Q10
penguins[3].sayHello = function () {
  console.log("Guten Tag");
};
for (let i = 0; i < penguins.length; i++) {
  console.log(penguins[i].sayHello());
}
