import { fromatCurrency } from "../scripts/utils/money.js";

describe('test suite: formatCurrency', ()=>{          //creates test suite given by jasmin.
   it('converts cents into dollars', ()=>{            //creates test cases => given by jasmin.
      expect(fromatCurrency(2095)).toEqual('20.95');  //expect() is object which has many methods and toEqual() is one of them.                                     // works like if, else statement.It means expect() lets to compare a value to another
   });   

   it('works with 0', ()=>{
    expect(fromatCurrency(0)).toEqual('0.00');
   });

   it('works with round up', ()=>{
    expect(fromatCurrency(2000.5)).toEqual('20.01');
   });
});         