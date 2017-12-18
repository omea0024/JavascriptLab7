var gumShopping = (function (){
  
  var gum = {
    "Extra": 1.25,
    "DoubleMint": 2.25,
    "Trident": 3.25,
    "BubbleGum": 4.25
 };
 var total = 0;
 var items = 0;
return{
    addPrice: function(x){
      items++;
      total+= gum[x];
      document.getElementById("cartItems").textContent = "Shopping Cart Items: " + items;
      document.getElementById("cartTotal").textContent = "Shopping Cart Total: $ " + total;

    } ,
    clear: function(){
      total = 0;
      items = 0;
      document.getElementById("cartItems").textContent = "Shopping Cart Items: 0 ";
      document.getElementById("cartTotal").textContent = "Shopping Cart Total: $0";

    }
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




