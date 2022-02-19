function getInputValue(fieldId){
    const inputField=document.getElementById(fieldId);
    const valueIntext=inputField.value;
    const value=parseFloat(valueIntext);
    inputField.value='';
    return value;
}
function updateTotal(fieldId,amount){
    const totalTag=document.getElementById(fieldId);
    const previousTotalIntext=totalTag.innerText;
    const previousTotal=parseFloat(previousTotalIntext);
    const newTotal=previousTotal+amount;
    totalTag.innerText=newTotal;

}
function updateBalance(amount,isAdding){
    const balanceTag=document.getElementById('balance-total');
    const balanceIntext=balanceTag.innerText;
    const previousBalance=parseFloat(balanceIntext);
    let newBalance;
    if(isAdding==true){
         newBalance=previousBalance+amount;
    }
    else{
         newBalance=previousBalance-amount;
    }
    balanceTag.innerText=newBalance;
}

document.getElementById('deposit-button').addEventListener('click',function(){
    
    const amount = getInputValue('deposit-input');
    if(amount>0){
        updateTotal('deposit-total',amount);
        updateBalance(amount,true);
    }
   
   
});
// handle Withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
const amount=getInputValue('withdraw-input');
if(amount>0){
updateTotal('withdraw-total',amount);
updateBalance(amount,false);
}


});
