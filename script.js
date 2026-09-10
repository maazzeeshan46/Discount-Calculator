const price = document.getElementById("price").value.trim();
const percent = document.getElementById("percentage").value.trim();
const btn = document.getElementById("checkBtn");
const display = document.getElementById("result");

btn.addEventListener("click", function () {
  const price = document.getElementById("price").value.trim();
  const percent = document.getElementById("percentage").value.trim();

  if (price == "" || percent == "") {
    display.textContent = "Please Enter Value";
    return;
  } else {
    display.textContent = "";

    let newPrice = price - [(price * percent) / 100];
    display.textContent = newPrice;
  }
});
