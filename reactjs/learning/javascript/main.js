import { apiKey, helloWorld } from "./app.js";


const obj = {};
const sym = Symbol('myProperty');
const sym1 = Symbol('hi')

obj[sym] = 'Some value'; 

// console.log(obj[sym]);  // "Some value"




const arr = [1,2,3,4]
const arr1 = [5,6,7]

arr.concat(2,3,4,5)
const arr3 = [...arr,...arr1,]

Array.isArray()





const user = {
    api:["soap","rest","graphQL"],
    type:"object",
    welcome: function (){
        console.log(this)
    }
}

const calender = {
    api : [0,1,2,3,4],
    city: "jaipure"
}

const dateUser = Object.assign({},user,calender)
dateUser.hasOwnProperty('api')

const {api} = dateUser

let varia = 1 ;
if (!varia) {console.log("hello")}  // If var is null, undefined, 0, false, NaN, or an empty string, the function exits here.




function addNumber(...num){
    return num
}

addNumber(1,2,3,4,5,6)



//  Functions

const generateRandom = () => {
    return new Number(Math.PI).toFixed(2) 
}

const findMax = (num1,num2) =>  num1*num2;

//  IIFE
// For ifee you should always use semicolon before ifii initialization


(function wise() {
    // console.log("true")
  })();
// sayHello()


(function hello() {
    // console.log("Hello")
})();

(function space(){
    // console.log("space")
})();


(function () {
    // console.log("Rama")
    })();
