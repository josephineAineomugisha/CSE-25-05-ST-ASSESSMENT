// ---------- Initial data ----------
let products = [
  { id:"#645341", name:"Sumsang s25+ Ultra", category:"Smart Phones", price:6900000, qty:981 },
  { id:"#645346", name:"Gucci XXL Shirt", category:"Fashion", price:500000, qty:100 },
  { id:"#645342", name:"XL Zara Shirt", category:"Fashion", price:600000, qty:56 },
  { id:"#645344", name:"iPhone 15", category:"Smart Phones", price:7900000, qty:752 },
  { id:"#645343", name:"Smart home Curtain", category:"Interior Design", price:500000, qty:30 },
  { id:"#645345", name:"Spectrum Laptop 14.6 Inc", category:"Laptops", price:15800000, qty:144 },
];

document.getElementById("productForm").addEventListener("submit", function(event) {
  let inputs = document.querySelectorAll("#productForm input");
  let isValid = true;
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "";
    }
  });
  if (!isValid) {
    event.preventDefault();
    alert("Please fill in all fields.");
  }
});