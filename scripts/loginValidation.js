document.getElementById("login_btn").addEventListener("click", function (e) {
  e.preventDefault();
  const phone = document.getElementById("phone");
  const phone_number = phone.value; //It will return a string if we want number then use parseInt for convert
  const pin = document.getElementById("pin");
  const pin_number = pin.value;
  let counter=0;

  if (
    phone_number.length !== 11 ||
    phone_number[0] !== "0" ||
    phone_number[1] !== "1"
  ) {
    alert("Enter a proper phone number");
    phone.value = "";
   counter+=1;
  }

  if (pin_number.length !== 4) {
    alert("Enter a proper pin number");
    pin.value = "";
    counter+=1;
  }
 if(counter===0){
  window.location.href = "./homepage.html";

 }
 

 
});
