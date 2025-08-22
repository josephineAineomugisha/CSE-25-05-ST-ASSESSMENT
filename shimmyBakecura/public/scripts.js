// form validation
  document.addEventListener("DOMContentLoaded", function () {
    let productform = document.getElementById("productform"); // use # for id
    productform.addEventListener("submit", function (event) {
      let productname = document.getElementById("productName").value;       // fixed ID
      let productcategory = document.getElementById("productCategory").value; // fixed ID

      // Success alert card setup
      let successAlert = document.getElementById("successAlert");
      let productprice = document.getElementById("productPrice").value;
      let productquantity = document.getElementById("productQuantity").value;
      let productcolor = document.getElementById("productColor").value;
      let errorMessage = document.getElementById("errorMessage");
      if (!productname || !productcategory || !productprice || !productquantity || !productcolor) {
        event.preventDefault();
        errorMessage.textContent = "Please fill out all the fields";
        return;
      }
      if (isNaN(productquantity) || productquantity < 0) {
        event.preventDefault();
        errorMessage.textContent = "Please enter a valid quantity";
        return;
      }
      if (successfulSubmission) {
        successAlert.textContent = "Product added successfully!";
      }
      // if everything is valid, submit form
      errorMessage.textContent = "";
      // allow default form submission
    });
  });

