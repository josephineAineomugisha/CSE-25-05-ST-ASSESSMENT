# CSE Assessment Inventory UI

This is an Express + Pug + MongoDB app that recreates the inventory layout from the screenshots (dashboard cards, add-product form with validation, and table).

## Setup

1. Install dependencies

```bash
npm install
```

2. Environment
   Create a `.env` file in the `summative/` directory:

```ini
MONGODB_URI=mongodb+srv://bernardbyrnes:9CzCyU3ldmqPOLQn@sumtest.xwjd0mg.mongodb.net/SumTest?retryWrites=true&w=majority&appName=sumtest
PORT=4000
```

**If MongoDB Atlas connection fails:**

- Check if your IP is whitelisted in MongoDB Atlas
- Or use local MongoDB: `MONGODB_URI=mongodb://127.0.0.1:27017/cse_assessment`

3. Run

```bash
npm run dev
```

Open `http://localhost:4000`.

## Notes

- Use the right panel to add products; invalid fields are highlighted in red, valid in green.
- On success, a green banner appears and the form clears.
- The table lists: `ID`, `NAME`, `CATEGORY`, `PRICE(UGX)`, `QUANTITY`.
