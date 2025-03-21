const add_money_btn=document.getElementById("add_money_btn");

add_money_btn.addEventListener("click",function(e){
    e.preventDefault();


    document.getElementById("cash_out_btn").classList.remove("card_effect");
    document.getElementById("transfer_money_btn").classList.remove("card_effect");
    document.getElementById("transaction_btn").classList.remove("card_effect");
    document.getElementById("get_bonus_btn").classList.remove("card_effect");
    document.getElementById("pay_bill_btn").classList.remove("card_effect");
    document.getElementById("add_money_btn").classList.add("card_effect");


    document.getElementById("start").classList.add("hidden");
    document.getElementById("cash_out").classList.add("hidden");
    document.getElementById("transfer_money").classList.add("hidden");
    document.getElementById("transaction").classList.add("hidden");
    document.getElementById("get_bonus").classList.add("hidden");
    document.getElementById("pay_bill").classList.add("hidden");
    document.getElementById("add_money").classList.remove("hidden");

    
});

document.getElementById("add_money_submit").addEventListener("click",function(e){
    e.preventDefault();

    const pin=document.getElementById('add_money_pin');
    const select_add=document.getElementById("select_add");
    const add_money_account=document.getElementById("add_money_account");
   
     if(pin.value==="1234"){
        const add_wallet=document.getElementById("add_amount");
        const add=parseInt(add_wallet.value);
    
        const wallet=document.getElementById("amount");
        const wallet_money=parseInt(wallet.innerText);

        const value=wallet_money+add;
      
        wallet.innerText=value;

     pin.value="";
     select_add.value="Select bank";
     add_money_account.value="";
     add_wallet.value="";

       alert("Add money Successful");

      

     }else{
        alert("Enter appropiate pin number");
     }





});