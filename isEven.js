export function isEven(number){

    return number%2==0? "Even":"Odd";
}

const result=isEven(7);

document.getElementById('showEven').addEventListener('click',function (){

    document.getElementById('even').innerHTML=result;

});

