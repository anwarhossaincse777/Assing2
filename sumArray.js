const sum=0;
export const sumArray =(number)=>number.reduce((x,y)=>x+y,sum);



const result=sumArray([1, 2, 3, 4, 5]);



document.getElementById('showArraySum').addEventListener('click',function (){
    document.getElementById('asum').innerHTML=result;

});

