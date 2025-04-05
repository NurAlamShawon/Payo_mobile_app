const add_money_btn = document.getElementById("add_money_btn");

add_money_btn.addEventListener("click", function (e) {
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

document
  .getElementById("add_money_submit")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const pin = document.getElementById("add_money_pin");
    const select_add = document.getElementById("select_add");
    const add_money_account = document.getElementById("add_money_account");

    if (pin.value === "1234") {
      const add_wallet = document.getElementById("add_amount");
      const add = parseInt(add_wallet.value);

      if (add > 9999) {
        alert("You have exceed the add money amonut");
        pin.value = "";
        select_add.value = "Select bank";
        add_money_account.value = "";
        add_wallet.value = "";
      } else {
        const wallet = document.getElementById("amount");
        const wallet_money = parseInt(wallet.innerText);

        const value = wallet_money + add;

        wallet.innerText = value;

        pin.value = "";
        select_add.value = "Select bank";
        add_money_account.value = "";
        add_wallet.value = "";

        alert("Add money Successful");

        add_paragraph(
          document.getElementById("transaction_part"),
          "Add Money",
          add
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
            <img src="assets/wallet1.png" alt="" class="max-w-12" />
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
            <img src="assets/wallet1.png" alt="" class="max-w-12" />
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
