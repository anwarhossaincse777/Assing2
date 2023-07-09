

export const getAddressCity=(address)=>address?.city??`${"unknown"}`;

const address = { street: '123 Main St', country: 'USA' };

const result=getAddressCity(address);



document.getElementById('showOr').addEventListener('click',function (){
    document.getElementById('or').innerHTML=result;

});










