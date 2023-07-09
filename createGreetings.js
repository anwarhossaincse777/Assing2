export function createGreetings(name){

    return `"Hello, ${name}! Welcome to our website"`;
}

const result=createGreetings('Alice');

document.getElementById('showGreeting').addEventListener('click',function (){

    document.getElementById('Greeting').innerHTML=result;

});

