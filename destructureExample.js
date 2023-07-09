
const obj = { name:'John', age:30, city:'New York'}
const arr = [10, 20, 30, 40];


 export function destructureExample(obj, arr){
        const {name,age} = obj;
        const [index0,,index2] = arr;

        return{name,age};
}

const nowPerson=destructureExample(obj,arr);

document.getElementById('showData').addEventListener('click',function (){

   document.getElementById('name').innerHTML=nowPerson.name;
   document.getElementById('age').innerHTML=nowPerson.age;

});

