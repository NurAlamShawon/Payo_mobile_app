
const transfer_money_btn=document.getElementById("transfer_money_btn");




transfer_money_btn.addEventListener("click",function(e){
    e.preventDefault();

    document.getElementById("cash_out_btn").classList.remove("card_effect");
    document.getElementById("transfer_money_btn").classList.add("card_effect");
    document.getElementById("transaction_btn").classList.remove("card_effect");
    document.getElementById("get_bonus_btn").classList.remove("card_effect");
    document.getElementById("pay_bill_btn").classList.remove("card_effect");
    document.getElementById("add_money_btn").classList.remove("card_effect");


    console.log("addmoney");
    document.getElementById("start").classList.add("hidden");
    document.getElementById("add_money").classList.add("hidden");
    document.getElementById("get_bonus").classList.add("hidden");
    document.getElementById("cash_out").classList.add("hidden");
    document.getElementById("pay_bill").classList.add("hidden");
    document.getElementById("transaction").classList.add("hidden");
    document.getElementById("transfer_money").classList.remove("hidden");

    
   
    console.log("addmoney1");
});


document
  .getElementById("transfer_submit")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const pin = document.getElementById("transfer_pin");
    const agent = document.getElementById("transfer_account");

    if (pin.value === "1234") {
      const transfer_amount = document.getElementById("transfer_amount");
      const trasfer = parseInt(transfer_amount.value);

      const wallet = document.getElementById("amount");
      const wallet_money = parseInt(wallet.innerText);

      const value = wallet_money - trasfer;

      wallet.innerText = value;

      transfer_amount.value = "";
      pin.value = "";
      agent.value = "";

      alert("Transfer is Successfull");
    } else {
      alert("Enter appropiate pin number");
    }
  });
