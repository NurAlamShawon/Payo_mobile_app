
const transaction_btn=document.getElementById("transaction_btn");




transaction_btn.addEventListener("click",function(e){
    e.preventDefault();


    
    document.getElementById("cash_out_btn").classList.remove("card_effect");
    document.getElementById("transfer_money_btn").classList.remove("card_effect");
    document.getElementById("transaction_btn").classList.add("card_effect");
    document.getElementById("get_bonus_btn").classList.remove("card_effect");
    document.getElementById("pay_bill_btn").classList.remove("card_effect");
    document.getElementById("add_money_btn").classList.remove("card_effect");


    console.log("addmoney");
    document.getElementById("start").classList.add("hidden");
    document.getElementById("add_money").classList.add("hidden");
    document.getElementById("transfer_money").classList.add("hidden");
    document.getElementById("get_bonus").classList.add("hidden");
    document.getElementById("cash_out").classList.add("hidden");
    document.getElementById("pay_bill").classList.add("hidden");
    document.getElementById("transaction").classList.remove("hidden");

    
   
    console.log("addmoney1");
});