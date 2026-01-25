import { addToCart, cart, loadFromStorage} from "../../data/cart.js";

describe('test suite: addToCart', ()=>{
 
 it('adds a new product to the cart', ()=>{
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);               //local storage only supports string.
    });                                    
    console.log(localStorage.getItem('cart'));
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
  });  
  
  it('adds a new product to the cart', ()=>{
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([]);               //local storage only supports string.
    });                                    
    console.log(localStorage.getItem('cart'));
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
  });
 });

/*
****About Testing***
1.if function is not returning anything then you need to call it.
    
2.here it fails because local storage have 2 default items within it.
 

3. Test coverage : how much of the code is being tested.
4. Flaky Test : test that sometimes passes and sometimes fails.
5. To tackel the Flakey Test we can use MOCK.
6. spyOn('localStorage, 'getItem')  :  localStorage is the object that we want to mack and grtItem is the function that we want to mock.
7. inside spyOn function the code will override the Mock function.It does what we want to it to do.
8. Integration Test : tests many units/pieces of code working together.
*/