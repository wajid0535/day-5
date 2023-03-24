//Do the below programs in arrow functions.

//Print odd numbers in an array
//Convert all the strings to title caps in a string array
//Sum of all numbers in an array
//Return all the prime numbers in an array
//Return all the palindromes in an array

//a)Print odd numbers in an array

//let arr = [1, 2, 3, 4, 5, 6,7,8,9,10];
//let isOdd=(arr)=>{                    
//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i] % 2 !== 0) {
//            console.log(`
//            odd number:${arr[i]}
//            `)
//        }
//    }
//}
//console.log(isOdd(arr));


//b)Convert all the strings to title caps in a string array
//let arr=["my name is wajid"];
//let titleCap=(arr)=> {
//    if ((arr===null) || (arr===''))
//         return false;
//    else
//     arr = arr.toString();
//   
//   return arr.replace(/\w\S*/g,
//  function(txt){return txt.charAt(0).toUpperCase() +
//         txt.substr(1).toLowerCase();});
//  }
//   
//  console.log(titleCap(arr))
//output:
//My Name Is Wajid

//c)Sum of all numbers in an array
//let arr=[1,2,3,4,5]
//let getSum=(arr)=> {
//    let res = 0;
//    for (var x of arr) {
//        res += x;
//    }
//    return res;
//}
//console.log(getSum(arr));
//output:15

//d)Return all the prime numbers in an array
//let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
//let isPrime=(num)=> {
//    for (let start = 2; num > start; start++) {
//      if (num % start == 0) {
//        return false;
//      }
//    }
//    return num > 1;
//  }
//  
//  console.log(array.filter(isPrime));
//
//output:[
//    2,  3,  5,  7,
//   11, 13, 17, 19
// ]

//e)Return all the palindromes in an array
//let arr12=["did","asddsa","dkdd",123321,121,1234];
//let reverse=(num)=>{
//     let a=String(num).split("")
//     let rev=[];
//     let l=a.length;
//     for(let i=l-1;i>=0;i--){                                     
//         rev.push(a[i]);
//         }
//     rev=rev.join("");                                           
//     return rev;
//     }
//     result1_arr=[];
//     for(let v of arr12){
//         v=String(v);                                            
//         v==reverse(v)? result1_arr.push(v):false;
//     }
//console.log(result1_arr);