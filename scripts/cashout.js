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

      if (withdraw > wallet_money) {
        alert(
          "You have exceed your acount money enter a value within your balance"
        );
        amount_withdraw.value = "";
        pin.value = "";
        agent.value = "";
      } else {
        const value = wallet_money - withdraw;

        wallet.innerText = value;

        amount_withdraw.value = "";
        pin.value = "";
        agent.value = "";

        alert("withdraw is Successfull");

        add_paragraph(
          document.getElementById("transaction_part"),
          "Cash Out",
          withdraw
        );

        function add_paragraph(para, title, amount) {
          const title_text = title;

          let date = new Date();
          let hours = date.getHours();
          let minutes = date.getMinutes();
          let seconds = date.getSeconds();

          console.log(hours);
          console.log(title_text);
          console.log(minutes);
          console.log(seconds);

          if (hours < 12) {
            para.innerHTML += `
<div
      class="px-6 py-4 flex justify-between items-center bg-white rounded-2xl"
    >
      <div class="flex items-center">
        <div class="rounded-full bg-slate-200 p-2 mr-3">
          <img src="assets/send1.png" alt="" class="max-w-12" />
        </div>
        <div>
          <h1 class="text-lg font-extrabold text-[#535252]">${title_text}</h1>
          <p class="text-sm text-[#535252]">Today ${hours}:${minutes}:${seconds} AM</p>
          <p class="text-sm text-[#535252]">Amount : ${amount}</p>

        </div>
      </div>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>`;
          } else {
            para.innerHTML += `
          <div
      class="px-6 py-4 flex justify-between items-center bg-white rounded-2xl"
    >
      <div class="flex items-center">
        <div class="rounded-full bg-slate-200 p-2 mr-3">
          <img src="assets/send1.png" alt="" class="max-w-12" />
        </div>
        <div>
          <h1 class="text-lg font-extrabold text-[#535252]">${title_text}</h1>
          <p class="text-sm text-[#535252]">Today ${hours}:${minutes}:${seconds} PM</p>
          <p class="text-sm text-[#535252]">Amount : ${amount}</p>

        </div>
      </div>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>`;
          }
        }
      }
    } else {
      alert("Enter appropiate pin number");
    }
  });
