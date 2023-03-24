//1) Do the below programs in anonymous function & IIFE
//a)Print odd numbers in an array
//b)Convert all the strings to title caps in a string array
//c)Sum of all numbers in an array
//d)Return all the prime numbers in an array
//e)Return all the palindromes in an array
//f)Return median of two sorted arrays of the same size.
//g)Remove duplicates from an array
//h)Rotate an array by k times

//          Anonymous function:

//a)Print odd numbers in an array

//let arr = [1, 2, 3, 4, 5, 6,7,8,9,10];
//let isOdd=function(arr){
//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i] % 2 !== 0) {
//            console.log(`
//            odd number:${arr[i]}
//            `)
//        }
//    }
//}
//console.log(isOdd(arr));

//output:
//odd number:1
//
//
//odd number:3
//
//
//odd number:5
//
//
//odd number:7
//
//
//odd number:9

//b)Convert all the strings to title caps in a string array
//let arr=["my name is wajid"];
//let titleCap=function(arr) {
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
//let getSum=function(arr) {
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
//let isPrime=function(num) {
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
//let reverse=function(num){
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


//f)Return median of two sorted arrays of the same size.
//let arr121=[2, 3, 5, 8]
//let arr222=[10, 12, 14, 16, 18, 20]
//let median=function(arr1,arr2){
//     let arr_com=[...arr1,...arr2];                            
//     arr_com.sort((a,b)=>a-b)                                  
//     let len=arr_com.length;
//     let arr_l=len/2;
//     let result=arr_com[arr_l]+arr_com[arr_l-1];
//     return result/2;
//}
//console.log(`Median for given two equal arrays are: ${median(arr121,arr222)}`);


//g)Remove duplicates from an array
//let arr = ["apple", "mango", "apple",
//"orange", "mango", "mango"];
//
//let removeDuplicates=function(arr) {
//return arr.filter((item,
//index) => arr.indexOf(item) === index);
//}
//
//console.log(removeDuplicates(arr));
//output:[ 'apple', 'mango', 'orange' ]


//h)Rotate an array by k times
//let nums=[1,2,3,4,5,6,7];
//let k=3;
//let arrayRotation=function(arr,numberOfShifts){
//    for(let i=0;i<numberOfShifts;i++){
//        arr.unshift(arr.pop());
//console.log(`step${i+1}:`, arr);
//    }
//}
//console.log("final output:", arrayRotation(nums,k))
//
//output:step1: [
//    7, 1, 2, 3,
//    4, 5, 6
//  ]
//  step2: [
//    6, 7, 1, 2,
//    3, 4, 5
//  ]
//  step3: [
//    5, 6, 7, 1,
//    2, 3, 4
//  ]
//  final output: undefined





//       IIFE Function

//a)Print odd numbers in an array

//let arr = [1, 2, 3, 4, 5, 6,7,8,9,10];
//(function(arr){
//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i] % 2 !== 0) {
//            console.log(`
//            odd number:${arr[i]}
//            `)
//        }
//    }
//}
//(arr));

//output:
//odd number:1
//
//
//odd number:3
//
//
//odd number:5
//
//
//odd number:7
//
//
//odd number:9

//b)Convert all the strings to title caps in a string array
//let arr=["my name is wajid"];
//function titleCap (arr) {
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
//  console.log(titleCap(arr));


//output:
//My Name Is Wajid

//c)Sum of all numbers in an array
//let arr=[1,2,3,4,5]
//function getSum(arr) {
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
//let isPrime=function(num) {
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
//let palindrome=["asa","dad","tata",1234,121,1234];
//console.log(
//(function(arr){
//     result=[];
//     for(let num of arr){                                     
//     let a=String(num).split("")
//     let rev=[];
//     let l=a.length;
//     for(let i=l-1;i>=0;i--){
//         rev.push(a[i]);
//     }
//     rev=rev.join("");
//     a=a.join("")
//     rev===a? result.push(rev):false;
//}   return result;
//})(palindrome));

//f)Return median of two sorted arrays of the same size.
//let arr10=[2, 3, 5, 8];
//let arr20=[10, 12, 14, 16, 18, 20];
//console.log(`Median for given two equal arrays are: ${
//(function(arr1,arr2){
//     let arr_com=[...arr1,...arr2];
//     arr_com.sort((a,b)=>a-b);
//     let len=arr_com.length;                                    
//     let arr_l=len/2;
//     let result=arr_com[arr_l]+arr_com[arr_l-1];
//     return result/2;
//})(arr10,arr20)
//}`);
//The above 2 program result is ====>  Median for given two equal arrays are: 11

//g)Remove duplicates from an array
//let arr = ["apple", "mango", "apple",
//"orange", "mango", "mango"];
//
//let removeDuplicates=function(arr) {
//return arr.filter((item,
//index) => arr.indexOf(item) === index);
//}
//
//console.log(removeDuplicates(arr));
//output:[ 'apple', 'mango', 'orange' ]


//h)Rotate an array by k times
//let nums=[1,2,3,4,5,6,7];
//let k=3;
//let arrayRotation=function(arr,numberOfShifts){
//    for(let i=0;i<numberOfShifts;i++){
//        arr.unshift(arr.pop());
//console.log(`step${i+1}:`, arr);
//    }
//}
//console.log("final output:", arrayRotation(nums,k))
//
//output:step1: [
//    7, 1, 2, 3,
//    4, 5, 6
//  ]
//  step2: [
//    6, 7, 1, 2,
//    3, 4, 5
//  ]
//  step3: [
//    5, 6, 7, 1,
//    2, 3, 4
//  ]
//  final output: undefined
