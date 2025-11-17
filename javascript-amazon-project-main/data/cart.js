export let cart;

loadFromStorage();

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));
//when we first use website localstorage gives null so ,we can save default values.

if(!cart){   //if cart is empty we give default value
  cart = [{
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

cart = cart.filter(item => item && item.productId);
//export allows variable to be accessed out of this file

//setItem() takes two strings
 
function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

// New helper function to always get the latest cart from localStorage
export function getCart(){
  let cartFromStorage = JSON.parse(localStorage.getItem('cart'));

  if(!cartFromStorage){
    cartFromStorage = [
      { productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6', quantity: 2 },
      { productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d', quantity: 1 }
    ];
  }

  cartFromStorage = cartFromStorage.filter(item => item && item.productId);
  return cartFromStorage;
}
//add to cart
export function addToCart(productId){
  let matchingItem;

      cart.forEach((cartItem)=>{
       if(productId === cartItem.productId){
        matchingItem=cartItem;
       }
      }); 

      if(matchingItem){
        matchingItem.quantity += 1;
      }else{
          cart.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
      }); 
      }
      saveToStorage();
}

export function calculateCartQuantity() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}


export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem)=>{
   if(cartItem.productId!==productId){
    newCart.push(cartItem);
    
   }
  });

  cart= newCart;
  
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){
   let matchingItem;

      cart.forEach((cartItem)=>{
       if(productId === cartItem.productId){
        matchingItem=cartItem;
       }
      });
      
      matchingItem.deliveryOptionId = deliveryOptionId;

      saveToStorage();
}


export function loadCart(fun){
  const xhr=new XMLHttpRequest();

  xhr.addEventListener('load', ()=>{
      console.log(xhr.response);
      fun();
  });

  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
}