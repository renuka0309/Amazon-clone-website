import {fromatCurrency} from '../scripts/utils/money.js';

if(fromatCurrency(2095)==='20.95'){   //basic test case
    console.log('passed');    
}else{
    console.log('failed');
}

if(fromatCurrency(0)==='0.00'){       //edge case
   console.log('passed');
}else{
    console.log('failed');
}

if(fromatCurrency(2000.5)==='20.01'){  //edge case
 console.log('passed');
}else{
    console.log('failed');   
}


// Types of Testing : 1] Manual 
//                    2] Atomatic (writing test case in terms of code)
// Two test cases : 1] Basic 2]Edge
//Group of related test case is called => test suite