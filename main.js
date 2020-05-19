const name = "Marcin";
const age = 34;
const pies = "Volt";







function calculateOld(myNumber){
  console.log(`Dostalem ${myNumber}`);
  return myNumber*3;
}
const myResult=calculateOld(2);
console.log(myResult);


const calculate=(number)=>number*4;

console.log(calculate(4));

function greetOld (age, name){
  console.log( `Cześć, nazywam sie ${name} i mam ${age} lata`);

}
greetOld(age,name);

function createContent(querySelectorContent, content){
  const element=document.querySelector(querySelectorContent);
  element.innerHTML=content;
}
createContent(`.article__description--js`, `CZESC TU JS`);



const greet=(name, age)=>{
  console.log( 
    `Cześć, z tej strony ${name}, który ma ${age} lata`
    );
}
greet (`Marcin`, age);

if (!(`jaasript`==`java`)){

  console.log(`tosie wykona`)
}
