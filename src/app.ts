var pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];
var mappedPizzas = pizzas.map(function (pizza) {
    return pizza.name.toUpperCase();
});
console.log(mappedPizzas);
