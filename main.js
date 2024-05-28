function allFunction() {
  document.querySelector(".all-btn").classList.add("active");
  document.querySelector(".burger-btn").classList.remove("active");
  document.querySelector(".pizza-btn").classList.remove("active");
  document.querySelector(".pasta-btn").classList.remove("active");
  document.querySelector(".fries-btn").classList.remove("active");

  document.querySelector(".burger-row").style.display = "flex";
  document.querySelector(".pizza-row").style.display = "flex";
  document.querySelector(".pasta-row").style.display = "flex";
  document.querySelector(".fries-row").style.display = "flex";
}
function burgerFunction() {
  document.querySelector(".burger-btn").classList.add("active");
  document.querySelector(".all-btn").classList.remove("active");
  document.querySelector(".pizza-btn").classList.remove("active");
  document.querySelector(".pasta-btn").classList.remove("active");
  document.querySelector(".fries-btn").classList.remove("active");

  document.querySelector(".burger-row").style.display = "flex";
  document.querySelector(".pizza-row").style.display = "none";
  document.querySelector(".pasta-row").style.display = "none";
  document.querySelector(".fries-row").style.display = "none";
}
function pizzaFunction() {
  document.querySelector(".pizza-btn").classList.add("active");
  document.querySelector(".all-btn").classList.remove("active");
  document.querySelector(".burger-btn").classList.remove("active");
  document.querySelector(".pasta-btn").classList.remove("active");
  document.querySelector(".fries-btn").classList.remove("active");
  
  document.querySelector(".pizza-row").style.display = "flex";
  document.querySelector(".burger-row").style.display = "none";
  document.querySelector(".pasta-row").style.display = "none";
  document.querySelector(".fries-row").style.display = "none";


}



function pastaFunction() {
  document.querySelector(".pasta-btn").classList.add("active");
  document.querySelector(".all-btn").classList.remove("active");
  document.querySelector(".pizza-btn").classList.remove("active");
  document.querySelector(".burger-btn").classList.remove("active");
  document.querySelector(".fries-btn").classList.remove("active");
  document.querySelector(".pasta-row").style.display = "flex";
  document.querySelector(".burger-row").style.display = "none";
  document.querySelector(".pizza-row").style.display = "none";
  document.querySelector(".fries-row").style.display = "none";
}
function friesFunction() {
  document.querySelector(".fries-btn").classList.add("active");
  document.querySelector(".all-btn").classList.remove("active");
  document.querySelector(".pizza-btn").classList.remove("active");
  document.querySelector(".pasta-btn").classList.remove("active");
  document.querySelector(".burger-btn").classList.remove("active");
  document.querySelector(".fries-row").style.display = "flex";
  document.querySelector(".burger-row").style.display = "none";
  document.querySelector(".pizza-row").style.display = "none";
  document.querySelector(".pasta-row").style.display = "none";
}
