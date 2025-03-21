
const pay_bill_btn=document.getElementById("pay_bill_btn");




pay_bill_btn.addEventListener("click",function(e){
    e.preventDefault();

    document.getElementById("cash_out_btn").classList.remove("card_effect");
    document.getElementById("transfer_money_btn").classList.remove("card_effect");
    document.getElementById("transaction_btn").classList.remove("card_effect");
    document.getElementById("get_bonus_btn").classList.remove("card_effect");
    document.getElementById("pay_bill_btn").classList.add("card_effect");
    document.getElementById("add_money_btn").classList.remove("card_effect");

    console.log("addmoney");
    document.getElementById("start").classList.add("hidden");
    document.getElementById("add_money").classList.add("hidden");
    document.getElementById("transfer_money").classList.add("hidden");
    document.getElementById("transaction").classList.add("hidden");
    document.getElementById("get_bonus").classList.add("hidden");
    document.getElementById("cash_out").classList.add("hidden");
    document.getElementById("pay_bill").classList.remove("hidden");

    
   
    console.log("addmoney1");
});


document
  .getElementById("bill_submit")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const pin = document.getElementById("biller_pin");
    const agent = document.getElementById("biller_account");
    const bill_select=document.getElementById("bill_select");

    if (pin.value === "1234") {
      const bill_amount = document.getElementById("bill_amount");
      const bill = parseInt(bill_amount.value);

      const wallet = document.getElementById("amount");
      const wallet_money = parseInt(wallet.innerText);

      const value = wallet_money - bill;

      wallet.innerText = value;

      bill_amount.value = "";
      pin.value = "";
      agent.value = "";
      bill_select.value="Select Pay"


      alert("Pay bill is Successfull");
    } else {
      alert("Enter appropiate pin number");
    }
  });