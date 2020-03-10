//Creat variable for the welcome message
var welcome = 'Hello ';
var name = 'Sophia';
var message = ' Welcome to the product review page';
var greeting = welcome + name + '!' + message;
var greetingEl = document.getElementById('greeting');
greetingEl.textContent = greeting;



var price = 880.99; 
    percent = .20;
    disc = price - (price * percent);
    discount = "20%";
    priceEl = document.getElementById('price');
    discountEl = document.getElementById('discount');
    discEl = document.getElementById('disc');

priceEl.textContent = price.toFixed(2);
discountEl.textContent = discount;
discEl.textContent = disc.toFixed(2);
