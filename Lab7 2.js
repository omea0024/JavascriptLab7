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
  "BubbleGum": 4.00
};

})();

document.getElementById("Extra").addEventListener("click", function(){
  gumShopping.addPrice("Extra");
});

document.getElementById("DoubleMint").addEventListener("click", function(){
  gumShopping.addPrice("DoubleMint");
});

document.getElementById("Trident").addEventListener("click", function(){
  gumShopping.addPrice("Trident");
});

document.getElementById("BubbleGum").addEventListener("click", function(){
  gumShopping.addPrice("BubbleGum");
});

document.getElementById("clearBtn").addEventListener("click", function(){
  gumShopping.clear();
});




