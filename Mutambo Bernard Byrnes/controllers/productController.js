import Product from "../models/Product.js";

// Utility function to clean up input fields
// - If the value is a string, trim spaces
// - Otherwise, return an empty string
function normalizeField(value) {
  return typeof value === "string" ? value.trim() : "";
}

// Controller: Render the dashboard page
export async function getDashboard(req, res) {
  try {
    // Fetch all products from DB, sorted by newest first
    const products = await Product.find().sort({ createdAt: -1 }).lean();

    // Calculate the total value of products in stock (price * quantity)
    const inStockValue = products.reduce(
      (sum, p) => sum + (Number(p.price) || 0) * (Number(p.quantity) || 0),
      0
    );

    // Count how many products are out of stock (quantity = 0)
    const outOfStockCount = products.filter(
      (p) => Number(p.quantity) === 0
    ).length;

    // Placeholder values for sales & orders totals
    const salesTotal = 50000000;
    const ordersTotal = 15000000;

    // Render the dashboard view with computed data
    res.render("index", {
      dashboard: { salesTotal, ordersTotal, inStockValue, outOfStockCount },
      products,
      success: req.query.success === "1", // optional success message
    });
  } catch (err) {
    console.error("Dashboard error:", err);
    // If DB query fails, render dashboard with empty/default data
    res.render("index", {
      dashboard: {
        salesTotal: 0,
        ordersTotal: 0,
        inStockValue: 0,
        outOfStockCount: 0,
      },
      products: [],
      success: req.query.success === "1",
    });
  }
}

// Controller: Create a new product
export async function createProduct(req, res) {
  try {
    // Extract and normalize form data
    const code = normalizeField(req.body.code) || `#${Date.now()}`; // fallback unique code
    const name = normalizeField(req.body.name);
    const category = normalizeField(req.body.category);
    const color = normalizeField(req.body.color);
    const imagePath = normalizeField(req.body.imagePath);
    const price = Number(req.body.price);
    const quantity = Number(req.body.quantity);

    // Validate inputs and collect errors
    const errors = {};
    if (!name) errors.name = "Invalid field";
    if (!category) errors.category = "Invalid field";
    if (!Number.isFinite(price) || price <= 0) errors.price = "Invalid field";
    if (!Number.isInteger(quantity) || quantity < 0)
      errors.quantity = "Invalid field";
    if (!color) errors.color = "Invalid field";

    // If there are validation errors, stop and return response
    if (Object.keys(errors).length) {
      return res.status(400).json({ ok: false, errors });
    }

    // Create product in DB
    const product = await Product.create({
      code,
      name,
      category,
      color,
      imagePath,
      price,
      quantity,
    });

    // Respond with the created product
    return res.json({ ok: true, product });
  } catch (err) {
    console.error(err);
    // Handle unexpected server errors
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
