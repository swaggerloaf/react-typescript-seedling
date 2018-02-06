const pizzas = [{ name: 'Pepperoni', toppings: ['pepperoni'] }, { name: 'Extra cheeze', toppings: ['pepperoni'] }];
// tslint:disable-next-line:typedef
const mappedPizzas = pizzas.map(function (pizza) {
    return pizza.name.toUpperCase();
});
console.log(mappedPizzas);
