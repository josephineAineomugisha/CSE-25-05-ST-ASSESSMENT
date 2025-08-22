const product = document.getElementById('productName')
const category = document.getElementById('category')
const price = document.getElementById('price')
const quantity = document.getElementById('quantity')
const color = document.getElementById('color')
const img = document.getElementById('img')
const form = document.getElementById('form')
const categoryArea = document.getElementById('categoryArea')
const productArea = document.getElementById('productNameArea')
const priceArea = document.getElementById('priceArea')
const quantityArea = document.getElementById('quantityArea')
const colorArea = document.getElementById('colorArea')
const imgArea = document.getElementById('imgArea')

form.addEventListener('submit', (e) => {
 isValid = true;

  if (product.value.trim() === "") {
    product.classList.add('error')
    product.classList.remove('success')
    productArea.textContent = 'invalid Field'
    isValid = false;
  } else {
    product.classList.remove('error')
    product.classList.add('success')
    productArea.textContent = ''
    isValid = true;
  }

  if (category.value.trim() === "") {
    category.classList.add('error')
    category.classList.remove('success')
    categoryArea.textContent = 'invalid Field'
    isValid = false;
  } else {
    category.classList.remove('error')
    category.classList.add('success')
    categoryArea.textContent = ''
    isValid = true;
  }

  if (price.value.trim() === "") {
    price.classList.add('error')
    price.classList.remove('success')
    priceArea.textContent = 'invalid Field'
    isValid = false;
  } else {
    price.classList.remove('error')
    price.classList.add('success')
    priceArea.textContent = ''
    isValid = true;
  }

  if (quantity.value.trim() === "") {
    quantity.classList.add('error')
    quantity.classList.remove('success')
    quantityArea.textContent = 'invalid Field'
    isValid = false;
  } else {
    quantity.classList.remove('error')
    quantity.classList.add('success')
    quantityArea.textContent = ''
    isValid = true;
  }

  if (color.value.trim() === "") {
    color.classList.add('error')
    color.classList.remove('success')
    colorArea.textContent = 'invalid Field'
    isValid = false;
  } else {
    color.classList.remove('error')
    color.classList.add('success')
    colorArea.textContent = ''
    isValid = true;
  }

  if (img.value.trim() === "") {
    img.classList.add('error')
    img.classList.remove('success')
    imgArea.textContent = 'invalid Field'
    isValid = false;
  } else {
    img.classList.remove('error')
    img.classList.add('success')
    imgArea.textContent = ''
    isValid = true;
  }

  if(!isValid){
    e.preventDefault();
  }
})
