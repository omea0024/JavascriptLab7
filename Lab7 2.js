var gumShopping = (function (){

return{
    addPrice: function(x){
      var total = 0;
      var newTotal = total + gum[x];
      document.getElementById("cartTotal").textContent = newTotal;

    } ,
    clear: function(){
      document.getElementById("cartItems").textContent = "Shopping Cart Items: 0";
      document.getElementById("cartTotal").textContent = "Shopping Cart Total: 0";

    }
  };

var gum = {
   "Extra": 1.00,
   "DoubleMint": 2.00,
   "Trident": 3.00,
  "Bubble Gum": 4.00
};

})();

document.getElementById("Extra").addEventListener("click", addPrice("Extra"));

document.getElementById("DoubleMint").addEventListener("click", addPrice("DoubleMint"));

document.getElementById("Trident").addEventListener("click", addPrice("Trident"));

document.getElementById("Bubble Gum").addEventListener("click",addPrice("Bubble Gum"))

document.getElementById("clearBtn").addEventListener("click", clear());




