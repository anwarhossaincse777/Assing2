const sum=0;
export const sortNumbers  =(number)=>number.sort((x,y)=>x-y);

const result=sortNumbers([5, 2, 8, 1, 4]);

document.getElementById('showArraySort').addEventListener('click',function (){
    document.getElementById('sort').innerHTML=result;

});

