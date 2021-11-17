//   console.log("hello from file");
 
// console.log(a);
// var a = 10;

// let b = 20;
// console.log(b);
// {
//     var c = 10;
//     console.log(c);
//     let d = 20;
//     console.log(d);
// }
// console.log(c);
// console.log(d);

//const a = "10";
//const b;
//a = 20;
//console.log(a);

// const myArr = {
//     //5000
//     name : "Sheba",

// };
// //myArr=5000
// myArr.name = "Vanu";
// //myArr = {
//  //   name: "Aniket",
// //};
// console.log(myArr);

// Strings
// let myString1 = "vanu@gmail.com";
// let myString2 = "sheba@gmail.com";

// console.log(myString1.toUpperCase() === myString2.toUpperCase()); //true

// for(let i = 0,i < myString1.length,i++);{
//     console.log(myString1 [i]);
// }

// const getRepeatedChars = (str) => {
//     const chars = {};
//       for (const char of str) {
//           chars[char] = (chars[char] || 0) + 1;
//       }
//       return Object.entries(chars).filter(char => char[1] > 1).map(char => char[0]);
//   }
  
//   getRepeatedChars("vannuu"); // ["v", "a", "n", "n", "u", "u"]

//   let strArray = [ "a", "b", "c", "d", "a", "f", "g", "d","b","j","c","j"];
//     let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

//     console.log(findDuplicates(strArray)) // All duplicates

    // let input = "abcdajklm";
    // let output = " ";
    // for (let i = 0; i<input.length; i++)
    // {
    //     let count = 0;
    //     for (let j = 0; i<input.length; j++) {
    //         if(input[i]=== input[j]){
    //             if (i< j)
    //             {
    //                 break;
    //             }
    //             count ++;
    //             if (count>1){
    //                 output = output+input[i];
    //                 break;
    //             }

    //         }
    //     }
    // }
    // console.log(output);

  //Array
//let myArr = [1, 2, 3, 4, 5, "my String", ["a", "b"]];
// let myArr = [1, 2, 3, 4, 5];
// let myArr1 = [1, 2, 3, 4, 5];
// let isSame = true;
// for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] !== myArr1[i]) {
//         isSame = false;
//         break;
//     }
// }
// console.log(isSame);//true

// function reverseString(value){
// let returnvalue = "";
// for(let i = value.length-1; i>-1; i--){
//     returnvalue = returnvalue + value[i];
//     } return returnvalue;
// }
// input="india is my country"   //output="aidni si ym yrtnuoc"
// output="";
// let wordString="";
// for(let i=0;i<input.length;i++){
//     if(input[i]===" "){
//         output = output + reverseString(wordString)+ " ";
//         console.log(wordString);
//         wordString="";
//         continue;
//     }else{
//         wordString=wordString+input[i];
//         if(i+1 ===input.length){
//             output = output + reverseString(wordString);
//             console.log(wordString);  
//             wordString="";
//         }  
//     }
// }
// console.log(output);    

// // Functions
// //  1) NormalFunction

//  console.log(addNumbers(10,20));
//  console.log(addNumbers); //func definition

//  function addNumbers(number1, number2){
//      return number1 + number2;
//  }

// //  2) Function Expression

//  const addNumbers2 = function(number1, number2){
//      return number1 + number2;
//  }
//  console.log(addNumbers2(10,20));
//  console.log(addNumbers2); //func definition

// //  3)Arrow Function

//  const addNumbersArrow = function(number1, number2) => {
//     return number1 + number2;
// }
// console.log(addNumbersArrow(10,20));
// console.log(addNumbersArrow); //func definition

//this
// const myObject = {
//     name : "vannu",
//     getName : function() {
//     return this.name;
// },
// };

// const myNewObject = {
//     name : "sheba",
// };
// const newGetName = myObject.getName.bind(myNewObject);
// console.log(myObject.getName());
// console.log(newGetName());

// Constructor Function
// function Person (name, age){
//     if(!new.target){
//         return new Person(name ,age)
//     } 
//     //this = {}// add internally
//     this.name = name;
//     this.age = age;
//     //this.number = 1234;
//     //return {name} // only return name and not other defined 
//     // return 1234 ; //not allowed
//     // return [1,2,3,4];//allowed
//     //return this; //add internally  
// }
// const personObject = new Person("vannu", 24);
// const personObject1 = new Person("vannu", 24);
// console.log(personObject);
// console.log(personObject1);

//Destructuring
// const myArr = [1, 2, 3, 4];
// // const a = myArr[0];
// // const b = myArr[1];
// // const c = myArr[2];
// // const d = myArr[3];
// const [a, c, b, d] = myArr; //sequence is very important
// console.log(a, b, c, d);
// const myObject = {
//     name: "Vanu",
//     age: 24,
// };
// // const name = myObject.name;
// // const age = myObject.age;
// const { age, name } = myObject; //sequence is not important
// console.log(name, age);

//Spread operator.
// const myArr = [1,2,3,4,5];
// const myArrNew = []; // old way
// // const myArrNew = [...myArr]; // new way used
// for(
//   let i=0;i<myArr.length;i++) {
//     myArrNew.push(myArr[i]);
//   }
// console.log(...myArr);  
// console.log(myArr);
// console.log(myArrNew);
// console.log(myArr);
// myArr.push(6)
// console.log(myArrNew);

// const myObject = {
//   name : "vanz",
//   age : 24,
// };

// const myNewObject = {... myObject} ;
// console.log(myObject);
// console.log(myNewObject);
// myObject.name = "vanz";
// console.log(myObject);
// console.log(myNewObject);

//Rest
function addNumbers(...args){
  let result = 0;
  for (let i= 0;i< args.length; i++){
    result += args[i]; // same a result
  }
  return result;
}
console.log(addNumbers(10,20,30,40));