



export function sumNumbers(...numbers){
    let sum=0;
    for (let i = 0; i < numbers.length; i++) {
        sum=sum+numbers[i];
    }
    return sum;
}

const result=sumNumbers(1, 2, 3, 4,5);

document.getElementById('showResult').addEventListener('click',function (){

    document.getElementById('sum').innerHTML=result;

});

