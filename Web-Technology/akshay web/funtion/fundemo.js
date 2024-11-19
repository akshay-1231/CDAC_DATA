//named function
//()---> to pass parameters
function sayhello(name){
  console.log(`hello ${name}`);
}

sayhello("ajay");

//anonymous function---->without name-->creating callby function
var myfun= function(){
    console.log("asddf")
}
myfun();

//arrow function-->reduce length of code
const great = () =>{console.log("today is saturday");

}

great();

//array-->collection same datatype 
//declare arrow
const marvellheros =["iron man","thor","blackwidow","stranger"];
//anoter way of declaration
const dcheros = new Array("superman","wonder women","flash")
//to access array
var captain= marvellheros[3];

for(let i=0;i<marvellheros.length;i++){
    console.log(marvellheros[i]);
}
//here we get actual elements
for (let hero of marvellheros) {
    console.log(hero);
}

//we get  index only

for (let hero in marvellheros) {
    console.log(hero);
}

//to print elements and index together

marvellheros.forEach((hero,i) =>console.log(hero,i));

//push arrow

const marvellheros1 =["iron man","thor","blackwidow","stranger"];
 marvellheros1.push("cation america");
 console.log(marvellheros1);

//pop
marvellheros1.pop("cation america");
console.log(marvellheros1);
//unshift to add at first place in array
marvellheros1.unshift("thor");
console.log(marvellheros1);

//slice-->to take subarray from array
marvellheros.slice(0,2);
console.log(marvellheros);

//splice
 var arr=dcheros.splice(0,1);
 console.log("spiced array:",arr);
 console.log("orignal array:",dcheros);
 //
 dcheros.splice(1,2,"aueaman");
 console.log(dcheros);