

export const arrowFunction=(a,b)=>a*b;

const result=arrowFunction(5,4);

document.getElementById('showArrow').addEventListener('click',function (){

    document.getElementById('arrow').innerHTML=result;

});