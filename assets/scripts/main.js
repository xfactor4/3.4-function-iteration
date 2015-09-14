//Show me how to calculate the average price of all the items. Please
//console.log the average.

//this creates a variable named totalPrices that puts all of the "price" property
//items in "items"
var totalPrices = items.map(function(prices){
  return prices.price;
});

//this defines my sum function so that it can add together my variable
function sum(arr) {
  return arr.reduce(function(sum, current){
    return sum + current;
  })
}

//this gives you the sum of the variable totalPrices
sum(totalPrices)

//this gives you the number of prices that are in the array which is 25
totalPrices.length

var average = sum(totalPrices)/items.length;

console.log(average.toFixed(2));



function isBigEnough(item){
  return item.price >=14 && item.price <=18;
}

var filtered = items.filter(isBigEnough);

console.log(filtered);

items.filter(function(item){
  if (item.currency_code === "GBP")
  console.log (item.title + " " + "£" + item.price);
});

items.forEach(function(obj){
  if (obj.materials.indexOf('wood') > -1) {
      console.log(obj.title);
  }
});

items.forEach(function(brownies) {
  if (brownies.materials.length >= 8) {
    console.log(brownies.title);
  }
});

items.forEach(function(seller) {
  if (seller.who_made.indexOf('i_did') > -1) {
    console.log(seller.title);
  }
});
