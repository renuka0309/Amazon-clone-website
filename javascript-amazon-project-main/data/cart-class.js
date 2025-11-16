class Cart{
   cartItems;
   localStorageKey;

   constructor(localStorageKey) {
     this.localStorageKey = localStorageKey;
     this.loadFromStorage();
   }

   loadFromStorage(){
  this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
                               //when we first use website localstorage gives null so ,we can save default values.

        if(!this.cartItems){   //if cart is empty we give default value
        this.cartItems = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
        },{
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
        }];
        }
        }

    //setItem() takes two strings
 saveToStorage(){
  localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
}

//add to cart
 addToCart(productId){
  let matchingItem;

      this.cartItems.forEach((cartItem)=>{
       if(productId === cartItem.productId){
        matchingItem=cartItem;
       }
      }); 

      if(matchingItem){
        matchingItem.quantity += 1;
      }else{
          this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
      }); 
      }
     this.saveToStorage();
}

 removeFromCart(productId){
  const newCart = [];

  this.cartItems.forEach((cartItem)=>{
   if(cartItem.productId!==productId){
    newCart.push(cartItem);
    
   }
  });

  this.cartItems= newCart;
  
 this.saveToStorage();
}

updateDeliveryOption(productId, deliveryOptionId){
   let matchingItem;

      this.cartItems.forEach((cartItem)=>{
       if(productId === cartItem.productId){
        matchingItem=cartItem;
       }
      });
      
      matchingItem.deliveryOptionId = deliveryOptionId;

      this.saveToStorage();
}
}

const cart = new Cart('cart-oop');
const buisnessCart = new Cart('cart-business');

console.log(cart);
console.log(buisnessCart);

/**
 * ------OOPs------*
 * Q. WHY USE OOPs?
 * => OOPs tries to represent the real world.
 
 * inside object we cannot use let and export keyword. 
 * functions inside an object is called method.
 * loadFromStorage: function() this can also be written as loadFromStorage().
 * Each object that we generate from class is instance of class.
 */