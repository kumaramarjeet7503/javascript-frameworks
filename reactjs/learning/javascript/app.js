export let apiKey = "hello world"

export const helloWorld = function(){
    return "hello world"
}

let car = {
sociopath:"sonia",
scoper:{
    upperName : "afdsjie",
    mirzapur: "donault"
},
serena:{
    join:"specialize"
}
}

//  Null Colesions
let bmw = car ?? {}
Object.keys(bmw).length 
// checking object length if null


let cryptoList = ["binance","zeroda","coin Dcx","One coin"]


const displayElement = (item) => item

cryptoList.forEach(displayElement)


const numArr = [1,2,3,4,5,6]

 let sumArr = numArr.reduce((acc,curr)=>{
    return acc+curr
},0)


//  DOM Manipulation

let element = document.getElementById('text');

// console.log(element.innerHTML)
// console.log(element.innerText)
// console.log(element.textContent)
// console.log(element.)



// create element with javascript

const div = document.createElement("div");
div.innerHTML = "hello world";
div.className = "center";


const ul = document.querySelector("ul")
const li = document.createElement("li")
// // li.innerHTML = 'This is dynamic page'
// li.className = "language"

// optimized way
li.appendChild(document.createTextNode("this is done by text node"))
ul.appendChild(li)



const promise = new Promise((resolve,reject)=>{
    // console.log("Your promise has been called")
    setTimeout(function(){
        const helloWorld = "hello world"
        // console.log("The function is resolved")
        resolve(helloWorld)
    },2000)
})

promise.then((value)=>{
        // console.log("Your promise has been fetched properly "+value)
})

function Phone(name,model){
    this.name = name;
    this.model = model;
}

Phone.prototype.price  = function(){
   console.log(this.model)
}

//  For created Phone with class
// class Phone{
//     constructor(name,model){
//         this.name = name
//         this.model = model
//     }
// }

const iphone = new Phone("iphone","SE")
const redmi = new Phone("redmi","6A")
console.log(iphone.price())
console.log(redmi.price())





