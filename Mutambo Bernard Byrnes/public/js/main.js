(() => {
  const form = document.getElementById("productForm");
  const saveBtn = document.getElementById("saveBtn");
  const clearBtn = document.getElementById("clearBtn");

  if (!form) return;

  const fields = {
    name: form.querySelector('input[name="name"]'),
    category: form.querySelector('input[name="category"]'),
    price: form.querySelector('input[name="price"]'),
    quantity: form.querySelector('input[name="quantity"]'),
    color: form.querySelector('input[name="color"]'),
    imagePath: form.querySelector('input[name="imagePath"]'),
    code: form.querySelector('input[name="code"]'),
  };

  function setValidity(input, valid, message) {
    input.classList.remove("valid", "invalid");
    if (valid) input.classList.add("valid");
    else input.classList.add("invalid");
    input.setCustomValidity(message || "");
  }

  function validate() {
    let ok = true;
    if (!fields.name.value.trim()) {
      setValidity(fields.name, false, "Invalid field");
      ok = false;
    } else setValidity(fields.name, true);
    if (!fields.category.value.trim()) {
      setValidity(fields.category, false, "Invalid field");
      ok = false;
    } else setValidity(fields.category, true);
    const price = Number(fields.price.value.replace(/[,\s]/g, ""));
    if (!Number.isFinite(price) || price <= 0) {
      setValidity(fields.price, false, "Invalid field");
      ok = false;
    } else setValidity(fields.price, true);
    const qty = Number(fields.quantity.value);
    if (!Number.isInteger(qty) || qty < 0) {
      setValidity(fields.quantity, false, "Invalid field");
      ok = false;
    } else setValidity(fields.quantity, true);
    if (!fields.color.value.trim()) {
      setValidity(fields.color, false, "Invalid field");
      ok = false;
    } else setValidity(fields.color, true);
    // image optional; mark as valid always
    setValidity(fields.imagePath, true);
    return ok;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const body = {
      code: fields.code.value,
      name: fields.name.value.trim(),
      category: fields.category.value.trim(),
      price: Number(fields.price.value.replace(/[,\s]/g, "")),
      quantity: Number(fields.quantity.value),
      color: fields.color.value.trim(),
      imagePath: fields.imagePath.value.trim(),
    };

    saveBtn.disabled = true;
    try {
      const res = await fetch("/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!data.ok) throw new Error("Failed");
      window.location.search = "?success=1";
    } catch (err) {
      saveBtn.disabled = false;
      validate();
    }
  });

  clearBtn?.addEventListener("click", () => {
    Object.values(fields).forEach((el) => {
      if (!el) return;
      el.value = "";
      el.classList.remove("valid", "invalid");
    });
  });
})();
