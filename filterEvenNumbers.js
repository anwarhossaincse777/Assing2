
export const filterEvenNumbers =(number)=>number.filter(number=>number%2===0?number:"")



const result=filterEvenNumbers ([1, 2, 3, 4, 5]);



document.getElementById('showFilterEven').addEventListener('click',function (){
    document.getElementById('filter').innerHTML=result;

});

