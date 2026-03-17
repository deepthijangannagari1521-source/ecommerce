function addCart(item){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(item);

localStorage.setItem("cart", JSON.stringify(cart));

alert("Added to cart");

}

function showCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let list = document.getElementById("cartItems");

cart.forEach(item=>{
let li = document.createElement("li");
li.innerText = item;
list.appendChild(li);
});

}
