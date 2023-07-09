
export const doubleNumbers=(number)=>number.map((number)=>number*2)

const result=doubleNumbers([1, 2, 3, 4, 5]);



document.getElementById('showDouble').addEventListener('click',function (){
    document.getElementById('double').innerHTML=result;

});

