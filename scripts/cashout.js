document.getElementById("cash_out_btn").addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("cash_out_btn").classList.add("card_effect");
  document.getElementById("transfer_money_btn").classList.remove("card_effect");
  document.getElementById("transaction_btn").classList.remove("card_effect");
  document.getElementById("get_bonus_btn").classList.remove("card_effect");
  document.getElementById("pay_bill_btn").classList.remove("card_effect");
  document.getElementById("add_money_btn").classList.remove("card_effect");

  document.getElementById("start").classList.add("hidden");
  document.getElementById("add_money").classList.add("hidden");
  document.getElementById("transfer_money").classList.add("hidden");
  document.getElementById("transaction").classList.add("hidden");
  document.getElementById("get_bonus").classList.add("hidden");
  document.getElementById("pay_bill").classList.add("hidden");
  document.getElementById("cash_out").classList.remove("hidden");
});

document
  .getElementById("cash_out_submit")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const pin = document.getElementById("cash_out_pin");
    const agent = document.getElementById("agent");

    if (pin.value === "1234") {
      const amount_withdraw = document.getElementById("amount_withdraw");
      const withdraw = parseInt(amount_withdraw.value);

      const wallet = document.getElementById("amount");
      const wallet_money = parseInt(wallet.innerText);

      const value = wallet_money - withdraw;

      wallet.innerText = value;

      amount_withdraw.value = "";
      pin.value = "";
      agent.value = "";

      alert("withdraw is Successfull");
    } else {
      alert("Enter appropiate pin number");
    }
  });
