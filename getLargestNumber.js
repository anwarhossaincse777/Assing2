
export const getLargestNumber =(number1,number2)=>(number1>number2 && number1)||(number2>number1 && number2)
const result=getLargestNumber(10, 5);

document.getElementById('showLarge').addEventListener('click',function (){

    document.getElementById('large').innerHTML=result;

});