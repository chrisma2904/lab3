# CVSU Mini Store – Laboratory Exercise 3

A React mini product catalog demonstrating props, destructuring, default props, children, callback props, conditional rendering, and list rendering with `.map()` and unique keys.

## Requirements

- Node.js (LTS recommended)
- npm
- Git

## Run the project

1. Extract the ZIP file.
2. Open the `product-catalog` folder in VS Code.
3. Open the VS Code terminal in that folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Features

- Eight products are stored in `src/data/products.js`.
- `ProductCard` receives `title`, `price`, `category`, `inStock`, `onAddToCart`, and `children` through props.
- `category` defaults to `"General"`.
- Prices display in Philippine pesos with two decimal places.
- Out-of-stock products are faded and their buttons are disabled.
- `App.jsx` renders the product list using `.map()` and `key={product.id}`.
- The child calls the parent's callback with the product title.
- The cart message updates immediately using `useState` in `App.jsx`.
- Two cards show optional `New` and `Sale` children badges.
- Responsive CSS adjusts the grid for smaller screens.

## Suggested Git commits

Run these commands from inside the `product-catalog` folder. The project files are already organized so you can commit the work in meaningful stages. If you want the four commits to reflect the actual development stages, stage only the listed files for each commit:

```bash
git init
git branch -M main

git add package.json index.html
git commit -m "Set up Vite React project"

git add src/data/products.js src/components/ProductCard.jsx src/components/ProductCard.css
git commit -m "Create product data and reusable ProductCard"

git add src/App.jsx
git commit -m "Add product list and cart callback communication"

git add src/App.css README.md
git commit -m "Style responsive product catalog and document setup"
```

## Push to GitHub

1. Create a new empty repository on GitHub named `product-catalog`.
2. Copy its HTTPS repository URL.
3. Run the following commands, replacing the example URL with your own:

```bash
git remote add origin https://github.com/YOUR-USERNAME/product-catalog.git
git push -u origin main
```

Submit your GitHub repository URL to your instructor.

## Guide question reminders

1. **Props vs. state:** Props are read-only data passed from a parent to a child. State is data managed by a component that can change and trigger a re-render.
2. **Why child components should not modify props:** Props belong to the parent. Directly changing them can cause unpredictable data flow and makes components harder to maintain.
3. **Callback props:** A parent passes a function to a child. The child calls that function to send information or notify the parent about an event.
4. **Why `.map()` needs a key:** A key helps React identify each list item between renders. Missing or duplicated keys can cause warnings and make list updates less reliable.
5. **Purpose of `children`:** `children` lets a component receive nested content between its opening and closing tags, making it more flexible and reusable.
